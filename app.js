const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'this is express res!'
    })
})

module.export = app;

//TEST COMMIT GITHUB-DESKTOP