function highAndLow(num){
    const arrayOfNum = num.split(' ').map(Number);
    const maxNumber = Math.max(...arrayOfNum);
    const minNumber = Math.min(...arrayOfNum);
    console.log(`${maxNumber} ${minNumber}`);
}