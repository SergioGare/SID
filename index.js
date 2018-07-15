// Created by Sergio Gare at 14/07/2018.

class Sid {

    constructor (data) {

        this.data = data;
        this.compressed = '';
        this.decompressed = this.compressed;

    }

    compress10 () {

        let final = [];
        this.data = this.data.toString();
        let len = this.data.length;

        for (let i = 0; i < len; i += 4)

            final.push(String.fromCharCode(parseInt(this.data.substr(i, 4))));

        this.compressed = final.join('');

        return this.compressed;

    }

    decompress10 () {

        let final = [];

        for (let i = this.compressed.length - 1; i >= 0; i--)

            final.unshift(this.compressed.charCodeAt(i));

        this.decompressed = final.join('');

        return this.decompressed;

    }

    compress16 () {

        // De base 16 a 65536.

        let final = [];

        for (let i = 0; i < 64; i+=4)

            final.push(String.fromCharCode(parseInt(this.data.substr(i, 4), 16)));

        this.compressed = final.join('');

        return this.compressed;

    }

    decompress16 () {

        // De base 65536 a 16.

        let final = [];

        for (let i = this.compressed.length - 1; i >= 0; i--)

            final.unshift(this.compressed.charCodeAt(i).toString(16).padStart(4, '0'));

        this.decompressed = final.join('');

        return this.decompressed;

    }

}

module.exports = Sid;

let crunch = new Sid(1111199999);
crunch.compress10();
crunch.decompress10();

console.log(crunch.decompressed);