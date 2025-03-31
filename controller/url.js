const shortID = require('shortid')
const urlSchema = require('../model/url')

async function handleGenerateNewShortURL(req, res) {
    const { url } = req.body;

    if (!url)
        return res.status(400).json({ error: true, msg: 'URL is required!' })

    const id = shortID()

    const createURL = await urlSchema.create({
        shortId: id,
        redirectURL: url,
        visitHistory: []
    })

    if(!createURL)
        return res.status(500).json({ error: true, msg: 'something went wrong!' })

    return res.status(201).json({error: false, createURL, msg: "URL Shortned Successsfully!"})
}

async function handleURLRedirect (req, res){
    const id = req.params.id;

    if(!id)
        return res.send("Welcome to URL Shortner");

    const getURL = await urlSchema.findOneAndUpdate({
        shortId: id
    }, {
        $push:{
            visitHistory: {
                timeStamp: Date.now()
            }
        }
    })

    if(!getURL)
        return res.send("Welcome to URL Shortner");

    res.redirect(getURL.redirectURL);
}

module.exports = {handleGenerateNewShortURL, handleURLRedirect}
