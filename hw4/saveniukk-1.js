function VigenèreCipher(key, abc) {
    let arrOfKeys = [];                        //масив у якому зберігатимуться масиви з алфавітом до кожної букви key
    for (let n = 0; n < key.length; n++) {
        let alphabet = [...abc];
        let part = alphabet.splice(0, abc.indexOf(key[n]));
        alphabet.push(...part);
        arrOfKeys.push(alphabet);
    }
    this.encode = function (str) {
        let encodeWord = [];
        for(let k = 0; k < str.length; k++){
            if (abc.includes(str[k])) {
                encodeWord.push(arrOfKeys[k % key.length][abc.indexOf(str[k])]);
            } else {
                encodeWord.push(str[k]);
            }
        }
        return encodeWord.join('');
    };
    this.decode = function (str) {
        let decodedWord = [];
        for(let k = 0; k < str.length; k++) {
            if (abc.includes(str[k])) {
                let number = arrOfKeys[k % key.length].indexOf(str[k]);
                decodedWord.push(abc[number]);
            } else {
                decodedWord.push(str[k]);
            }
        }
        return decodedWord.join('');
    };
}