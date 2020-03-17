class VigenereCipheringMachine {
    constructor(bool = true) {
        this.bool = bool;
    }

    encrypt(str, key) {
        return this.cipher(str, key, true);
    }

    decrypt(str, key) {
        return this.cipher(str, key, false);
    }

    cipher(str, key, encryption) {
        if(str === undefined || key === undefined)
            throw new Error;
        let res = [];
        str = str.toUpperCase();
        key = key.toUpperCase();
        let n = str.length;
        let j = 0;
        let first = 'A'.charCodeAt(0);
        for(let i = 0; i < n; i++) {
            if(str[i].match(/[A-Z]/)){
                if(encryption)
                    res.push(String.fromCharCode((str.charCodeAt(i) + key.charCodeAt(j) - first * 2) % 26 + first));
                else
                    res.push(String.fromCharCode((str.charCodeAt(i) - first + (26 - (key.charCodeAt(j) - first))) % 26 + first));
                j !== key.length-1 ? j++ : j=0;
            }
            else res.push(str[i]);
        }
        if(!this.bool) {
            res.reverse();
        }
        return res.join('');
    }
}

module.exports = VigenereCipheringMachine;
