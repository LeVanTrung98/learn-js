// Promise : A promise is an object that returns a value in the future.

let promise = new Promise(function(resolve, reject) {

});
function expPromise(commpleted){
    return new Promise(function(resolve, reject) {
        setTimeout( () => {
            if(commpleted) {
                resolve("commpleted!");
            } else {
                reject("false!");
            }
        }, 3 * 1000);
    });
}
expPromise(false)
.then( response => console.log(response)) // thực hiện sau khi resolve
.then( () => setTimeout(() => { console.log(123)}, 1000)) // thực hiện sau khi then đầu tiên thực hiện xong
.catch( err => console.log(err)) // thực hiện khi reject trả về error
.then(()=> console.log('fail 123!'));// thực hiện khi catch làm xong.