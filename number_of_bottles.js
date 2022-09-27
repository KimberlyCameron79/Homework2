const express = require('express')
const app = express()

// app.get('/past-it-around', counterRestart(req, res, next){
//         res.send(counterRestart)

//     }
//     );

function beerSong(bottles) {
    let remainingBottles = bottles;
    while (remainingBottles > 1){
        Console.log(`${remainingBottles} bottles of beer on the wall, ${remainingBottles} bottles of beer.`)
        remainingBottles--;
        Console.log(`Take one down and pass it around, ${remainingBottles} bottle ${remainingBottles > 1 ? 's': ''} of beer on the wall.`)
    }

   };
    // <a href="path('counterRestart')" />
    // <a href="pass-it-around" />