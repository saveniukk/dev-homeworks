function maxNumber(number) {
    let numStr = number.toString();
    let numArr = numStr.split('');

    numArr.sort(function(a, b) {
        return b - a;
    });

    let result = parseInt(numArr.join(''));
    console.log(result);
    return result;
}