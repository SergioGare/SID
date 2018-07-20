// Created by Sergio Gare at 14/07/2018.

const to10 = require('./lib/to10/to10');
const to16 = require('./lib/to16/to16');
const to128 = require('./lib/to128/to128');

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

    compress128 () {

        this.compressed = to128.compress(this.data);

        return this.compressed;

    }

    decompress128 () {

        this.decompressed = to128.decompress(this.compressed);

        return this.decompressed;

    }

}

module.exports = Sid;