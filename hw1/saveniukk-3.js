function findNb(f) {
    let n = 1;
    let volume = 0;

    while (volume < f) {
        volume += Math.pow(n, 3);
        if (volume === f) {
            return n;
        }
        n++;
    }
    if(volume === f){
        return n;
    } else {
        return-1
    }
}