var p1=new Promise(function(resolve,reject){
    var num=Math.random();
    if(num<1)
    {
        resolve(num);
    }
    else
    {
        reject(num);
    }
});
p1.then(function(result){
    console.log('success', result)
})
.catch(function(error){
    console.log('Error', error)
})
