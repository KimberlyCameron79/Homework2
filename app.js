//import express package
const express = require('express')
//instatiate the express app
const app = express();
const PORT = 5000;

//register view engine
app.set('view engine', 'ejs');

app.listen(PORT,  () => {
    console.log(`server initiated, listening PORT ${PORT}`);

});

// app.use(req, res, next) => {
//     console.log('new request made:');
//     next();

// }

app.get('/', (req, res) => {
    res.send('99 bottles');

})

app.get('/:Number_of_bottles',(req, res)=> {
const b=req.params.Number_of_bottles-1

    res.send(req.params.Number_of_bottles +  " Bottles of beer on the wall." + `<a href="${b}">Take one down pass it around</a>`);

    
});



        
       





