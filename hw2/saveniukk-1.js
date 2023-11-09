function largestRadialSum(arr, d) {
    let n = arr.length;
    let i = 0;
    let sum = [];

    while (i < n/d) {
        sum.push(0);
        for(let j = i; j < n; j += n/d) {
            sum[i] += arr[j];
        }
        i++;
    }
    console.log(Math.max(...sum));
    return Math.max(...sum);
}