export const logger = (req, res, next) => {
    console.log(`PROTOCAL<<${req.protocol}://>>   HOST<<${req.get('host')}>>   URL<<${req.originalUrl}>>`)
    next()
}

