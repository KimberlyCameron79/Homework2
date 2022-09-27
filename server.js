//import express package
const express = require('express')
//instatiate the express app
const app = express()

const PORT = 5000;

//listen for incoming requests
app.listen(PORT,  () => 
    console.log(`server initiated, listening PORT ${PORT}`))

app.get('/:number_of_bottles', (req, res) => {
    let bottles= "bottles";
    let bottle= "bottle";
    let b = 99;
    for(counter = 99; counter >= 1; counter = counter) {
        if(counter <= 1) {
            
            
         res.send(bottle)

        }else{
           res.send(bottles)
        }
        req.count(counter);
        res.send(counter);
        console.log(counter + "bottles" +  "of beer on the wall.");
        if (counter < 99) {
            console.log("");
            console.log(counter+ " "+bottles+" of beer on the wall.");
        }
        console.log(counter+" "+bottles+" of beer.");
        console.log("Take one down.");
        console.log("Pass it around.");
        if(counter == 1){
            console.log("No bottles of beer on the wall");
        }
    }
        
})
   

