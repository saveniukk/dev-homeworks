function is_prime(num) {

    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return true;
}