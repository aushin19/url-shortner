const express = require("express")
const {handleGenerateNewShortURL, handleURLRedirect} = require('../controller/url')

const router = express.Router()

router.post('/', handleGenerateNewShortURL);

router.get('/:id', handleURLRedirect);

router.get('/', (req, res) => {
    return res.send('Welcome to URL Shortner')
})


module.exports = router