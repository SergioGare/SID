// Created by Sergio Gare at 14/07/2018.

const to10 = require('./lib/to10/to10');
const to16 = require('./lib/to16/to16');
const to128 = require('./lib/to128/to128');

class Sid {

    constructor (data) {

        this.data = data ? data.toString() : null;
        this.compressed = '';
        this.decompressed = this.compressed;

    }

    compress10 (data) {

        this.compressed = to10.compress(data ? data : this.data);

        return this.compressed;

    }

    decompress10 (data) {

        this.decompressed = to10.decompress(data ? data : this.compressed);

        return this.decompressed;

    }

    compress16 (data) {

        this.compressed = to16.compress(data ? data : this.data);

        return this.compressed;

    }

    decompress16 (data) {

        this.decompressed = to16.decompress(data ? data : this.compressed);

        return this.decompressed;

    }

    compress128 (data) {

        this.compressed = to128.compress(data ? data : this.data);

        return this.compressed;

    }

    decompress128 (data) {

        this.decompressed = to128.decompress(data ? data : this.compressed);

        return this.decompressed;

    }

}

module.exports = Sid;
