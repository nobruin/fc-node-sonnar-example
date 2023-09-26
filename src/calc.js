_dealWithResult = function (number){
    let result = parseInt(number);

    if(isNaN(result)){
        
        console.error("Invalid Operation"); 
        throw new Error("Invalid Operation");
    }

    return result;
}

sum = function (n1, n2){
    let number = _dealWithResult(n1 + n2);
    return number;
}

sub = function(n1, n2){
    let number = _dealWithResult(n1 - n2);

    return number;
}

multiplication = function(n1, n2){
    let number = _dealWithResult(n1 * n2);

    return number;
}

division = function(n1, n2){
    let number = _dealWithResult(n1 / n2);

    return number;
}

module.exports = {
    sum:sum,
    subtraction:sub,
    multi:multiplication,
    div:division
}