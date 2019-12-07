const express = require('express');

app = express();

app.use(express.json());

app.listen(8080, () =>{
    console.log("running");
})

app.get('/',(req, res) => {
    console.log(req.query)
});


