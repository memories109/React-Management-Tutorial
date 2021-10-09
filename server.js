const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name' : '소소소',
        'birthday': '222',
        'gender':'sdfsdfsd'
        
        },
        {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name' : '수수수',
        'birthday': '233332',
        'gender':'sdfsdfㄴㅇㄹㄴㅇㄹㄴsd'
        
        },
        {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name' : '솨솨솨',
        'birthday': '24444',
        'gender':'ㅎㅎㅎㅎ'
        
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
