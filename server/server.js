const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET, 
    saveUninitialized: false, 
    resave: false
}));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(error => {
    console.log('error', error)
});

app.post('/login', (req, res) => {
    const { userId } = req.body;
    const auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`

    axios.get(auth0Url, { 
        headers: {
            Authorization: 'Bearer' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN
        }}).then(response => {
            const userData = response.data
            req.session.user = { 
                name: userData.name, 
                email: userData.email, 
                auth0Id: userData.user_id, 
                picture: userData.picture
            }
            res.json({user: req.session.user})
        }).catch(error => {
            res.status(500).json({message: 'somethings broken'})
        })
});

app.get('/user-data', (req, res) => {
    res.json({user: req.session.user})
});

const port = process.env.SERVER_PORT || 3035
app.listen(port, () => console.log('listening on port ' + port));