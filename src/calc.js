const _dealWithResult = function (number){
    const result = parseInt(number);

    if(isNaN(result)){
        throw new Error(`Invalid Operation`);
    }

    return result;
}

const sum = function (n1, n2){
    return _dealWithResult(n1 + n2);    
}

const sub = function(n1, n2){
    return _dealWithResult(n1 - n2);    
}

const multiplication = function(n1, n2){
    return _dealWithResult(n1 * n2);
}

const division = function(n1, n2){
    return _dealWithResult(n1 / n2);    
}

module.exports = {
    sum:sum,
    subtraction:sub,
    multi:multiplication,
    div:division
}