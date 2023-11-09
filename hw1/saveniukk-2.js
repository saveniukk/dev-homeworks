function hanoi(disk) {
    if (disk === 0) {
        return "try another number";
    } else{
        return 2**disk-1;
    }
}