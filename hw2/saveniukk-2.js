function equalSum(array) {
    for (let i = 0; i < array.length; i++) {
        let sum1 = array.slice(0, i).reduce((sum, current) => sum + current, 0);

        let sum2 = array.slice(i+1).reduce((sum, current) => sum + current, 0);

        if (sum1 === sum2){
            return i;
        }
    }
    return -1;
}