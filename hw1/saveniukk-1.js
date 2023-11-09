
function  checkNum(number){

    if(number<0){
        return 0;
    } else {
        while (number >= 0) {
            number--;
            if (number % 3 === 0 || number % 5 === 0) {
                sumNum += number;
            }
        }
        console.log("Sum is equal to ", sumNum);
    }
}