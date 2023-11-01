function receivesAFunction(callback) {
    callback();
};

function returnsANamedFunction(num1, num2) {
    return function sum() {
    return num1 + num2;
    };
};


let returnsAnAnonymousFunction = function(a, b) {
    return function() {
        return a + b;
    };
};
