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
     document.write('success', result)
})
.catch(function(error){
     document.write('Error', error)
})
