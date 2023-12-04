const mainFun = async () => {                               // this is the part of async ,await
    const book =new Promise((resolve,reject)  => {
        const randomValue =Math.random();
        if(randomValue > 0.5){
            setTimeout(() => {
                resolve(`this is resolved msg ${randomValue}`)

            }, 1500);                                               // this is  part  of promise ( start from line 2)except those async,await line
        }else{
            setTimeout(() => {
                reject(`this is reject msg${randomValue} `)

            }, 1500);
        }
});


console.log(`before`)
const opr = await book.then((res) => {                    // this is part of async , await (except await this line is of promise)
    console.log(`res is `,res)

 console.log(`after this is res`)
 return res;
}).catch((err) => {
    console.log(`err is `, err)

console.log(`after this is err`)
return err;
})       
console.log(`opr`,opr)

};

mainFun()                                                  // this is part of async,await