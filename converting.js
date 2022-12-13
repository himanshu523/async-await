var d = new Date().getSeconds();

const posts =[
    {tittle:'one post',body:'this is post one',createdAt:""},
    {tittle:'post two',body:'this is post two',createdAt:""},
];

function getposts()
{
    setTimeout(()=>
    {
        let output="";
        posts.forEach((post,index)=>
        {
            output+=`<li>${post.tittle}  last updated ${d} second ago</li>`;
        });
        document.body.innerHTML = output;
    },1000
    );
}

async function createPost(post) {
    let create = new Promise((resolve, reject) => {
      setTimeout(() => {
        //updateLastUserActivity();
        posts.push({ ...post, createdAt: d });
        const error = false;
  
        if (!error) {
          resolve();
        } else {
          reject("Error: Something is wrong");
        }
      }, 2000);
    });
    let a = await create;
    return a;
}
  
async function deletePost(post) {
    let create = new Promise((resolve, reject) => {
      setTimeout(() => {
        //updateLastUserActivity();
        posts.pop({ ...post });
        //const error = true;
  
        if (posts.length === 0) {
          resolve();
        } else {
          reject("Error: Array is empty");
        }
      }, 1000);
    });
    let a = await create;
    return a;
}

createPost({ title: "post Four", body: "this is post 3" }).then(getposts);


deletePost().catch((err) => console.log(err));