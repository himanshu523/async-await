console.log('person1:shows ticket');
console.log('person2:shows ticket');  

const preMovie = async()=>{
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));

    const addButter = new Promise((resolve,reject)=>resolve('butter'));

    const getColdDrink = new Promise((resolve,reject)=>resolve('colddrink'));

    let ticket = await promiseWifeBringingTicket;
    console.log(`wife:i have ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife:no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband:i got some ${popcorn}`);
    console.log('husband:we should go in');
    console.log('wife:i need butter on my popcorn');
     

    let butter = await addButter;

    console.log(`husband: i got some ${butter} `);
    console.log('husband: anything else darling');
    console.log('wife:lets got we are getting late');
    console.log('husband: thankyou for the reminder');

    let coldDrink = await getColdDrink;

    console.log(`wife:i want ${coldDrink}`);
    console.log('husband:okay order it')
    return ticket;
}
preMovie().then((msg)=>console.log(`person3: shows${msg}`));
console.log('person3:shows ticket');
console.log('person4:shows ticket');