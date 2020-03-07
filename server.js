const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Setting up express to serve files from public
app.use(express.static('public'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Set up the listener on
app.listen(port, () => console.log(`Listening on PORT ${port}`));