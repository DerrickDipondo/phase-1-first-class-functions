function receivesAFunction(callback) {
    callback();
}

//Second function
function returnsANamedFunction(){
    return function named() {

    }
}

//Third function
function returnsAnAnonymousFunction() {
    return function(){
        
    }

}