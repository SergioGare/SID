# sid.js

Simple compression by means of high numerical bases.

## Installation.

    npm i sid.js -S

## Usage.

Import the module:

    const Sid = require('sid.js');

Methods:

+ constructor.
    * Receive a number or a string.
    
```
let crunch = new Sid(data);
```

+ compress10.
    * Compress a decimal number in string format.
    
+ decompress10.
    * Unpack the output of your compressor in format of string.
    
```
let base10 = new Sid('999909999');

base10.compress10(); // Output: 𘚟
base10.decompress10(); // Output: 0999909999
```
    
+ compress16.
    * Compress a hexadecimal number in string format.
    
+ decompress16.
    * Unpack the output of your compressor in format of string.
    
```
let base16 = new Sid('ffff');

base16.compress16(); // Output: ￿
base16.decompress16(); // Output: ffff
```
    
+ compress128.
    * Compress a string consisting of the first 128 characters of ASCII.
    
+ decompress128.
    * Unpack the output of your compressor in format of string.
    
```
let base128 = new Sid('[{"id": "24fde34"}, {numbers: [2, 3]}]');

base128.compress128(); // Output:  ⷻᅩ㈢ᴠᄲᩦ㉥ᦴᅽᘠ㷮㫭ㅥ㥳ᴠⶲᘠ᧝㻝
base128.decompress128(); // Output: [{"id": "24fde34"}, {numbers: [2, 3]}]
```

Properties:

+ compressed.
    * It's the propertie where storage the string compressed.
    
+ decompressed.
    * It's the propertie where storage the string decompressed.