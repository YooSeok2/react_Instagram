const express = require('express');
const port = process.env.PORT || '5000';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', express.static(__dirname+'../public/index.html'));
app.use(express.cookieParser());

app.get(port, function(req,res){
    const content = req.content;
    res.json(
        {
            id:1,
            username: content
        }
    )
})


const server = app.listen(port, ()=>{
    var host = server.address().address;
    console.log('express listening on port http://'+host+port);
});
