 console.log('person1:shows ticket');
 console.log('person2:shows ticket');

 const promiseWifeBringingTicket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);
 })

 //promiseWifeBringingTicket.then((t)=>{
 //   console.log(`person3:shows ${t}`);
 //});

 const getPopcorn = promiseWifeBringingTicket.then((t)=>{
    console.log(`Wife:i have ${t}`);
    console.log(`husband:we should go in`);
    console.log(`wife:ni i am hungry`);
    return new Promise((resolve,reject)=>
    {
        resolve(`${t} popcorn`);
    });
 });

 const getButter = getPopcorn.then((t)=>
 {
    console.log('husband:i got somepopcorn');
    console.log('husband:we should go in');
    console.log('wife: i nedd butter in my popcorn');

    return new Promise((resolve, reject) => {
        resolve(`${t} butter`);
    });
 });

 getButter.then((t)=>{
    console.log(t)
    console.log('person3 shows ticket')});
