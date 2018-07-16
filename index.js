// Created by Sergio Gare at 14/07/2018.

const to10 = require('./bin/to10/to10');
const to16 = require('./bin/to16/to16');

class Sid {

    constructor (data) {

        this.data = data.toString();
        this.compressed = '';
        this.decompressed = this.compressed;

    }

    compress10 () {

        this.compressed = to10.compress(this.data);

        return this.compressed;

    }

    decompress10 () {

        this.decompressed = to10.decompress(this.compressed);

        return this.decompressed;

    }

    compress16 () {

        this.compressed = to16.compress(this.data);

        return this.compressed;

    }

    decompress16 () {

        this.decompressed = to16.decompress(this.compressed);

        return this.decompressed;

    }

}

module.exports = Sid;

let crunch = new Sid(11110009);
crunch.compress10();
crunch.decompress10();

console.log(crunch.decompressed);