object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
}
function getRootProperty(object, val) {

    for (let i in object) {
        if (typeof object[i] == 'object') {
            if (getRootProperty(object[i], val)) {
                return i;
            }
        } else {
            if (object[i] === val) {
                return i;
            }
        }
    }

    return getRootProperty;
}