// https://youtu.be/L72fhGm1tfE?t=2483
// @ts-check

// Node
import http from "http"
import fs from 'fs'
import path from 'path'
// 3rd party
import express, { Router } from 'express'
import expressH from 'express-handlebars'
// Local Files
import {members} from './Members' // ./ works without router
import {router} from '../router/api/members' //app runs but syntax not working
import {logger} from './middleware'

const app = express()
const port = 3000

// note: for authentication using templates use passport library | passport local for express specifically
// for authentication with Angular, Vue, React use JSON web tokens

// handlebards init main folder | also its has {}{engine}
var hbs = expressH.create({
    defaultLayout: 'main',
    // helpers: { // for html logic
    //     isEqual: function (a, b) { return a === b },
    // }
});

// handlebards init engine and view engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// body parser middleware init //ex: for post/put request from post man
// note: order matters: body parser needs to be initiated before app.use('/api/members', router)
app.use(express.json())
app.use(express.urlencoded({extended: false})) //for reading name property of HTML elements

// handlebards route
app.set('views', path.join(__dirname, '../views'));

// handlebards homepage route
app.get('/', (req, res) => {
    res.render('index',{
        header: 'myVar',
        members: members
    }) 
})

/* // partials
    // app.get('/header', (req, res) => {
    //     res.render('partials/header') 
    // })

    // app.get('/footer', (req, res) => {
    //     res.render('partials/footer') 
    // })
*/


/* static
    // static | client flashcards
    // app.use(express.static(path.join(__dirname, '../../client/public/flash')))

    // static inline html | sendFile html // express get response
    app.get('/', (req, res) => {
        //res.send('<h1>Hello World!!</h1>') //or non-html
        res.sendFile(path.join(__dirname, '../public', 'index.html')) //__dirname :: ...\js   
    })

    // nested // express get response
    // chrome: http://localhost:3000/api/flashcard
    app.get('/api/flashcard', (req, res) => res.send('My Flashcard'))
    
    // static folder // express use static
    // chrome:: http://localhost:3000/about.html | http://localhost:3000
    // index.html is implicit for: http://localhost:3000
    // app.use(express.static(path.join(__dirname, '../public')))

    // get passed in parameters 
    // post man: [get] http://localhost:3000/api/members/1010 [send]
    app.get('/api/members/:id', (req, res) => {
    res.send((req.params.id)) // :: 1010
    })
*/

// middleware | my logger
// postman: send http://localhost:3000 :: myLogger in terminal
// note: app.use(logger) comes before app.get('url' res json) if the same url
//  or req comes before response
app.use(logger)

/* get members | without a router
    // get single member | without router
    // post man: [get] http://localhost:3000/api/members/2 [send]
    // js: a.filter | a.some
    app.get('/api/members/:id', (req, res) => {
        const found = members.some(m => m.id === parseInt(req.params.id))
        if(found){
            res.json( members.filter(m => m.id === parseInt(req.params.id)) )
        } else {
            res.status(400).json({ msg: `no member with the id of ${req.params.id}`})
        }
    }) 

    // api get all ./Members | without router
    // postman: get: http://localhost:3000/api/members : [send]
    // input: get url :: output: response json
    app.get('/api/members', (req, res) => {
        res.json(members)
    })
*/

// get members | with router
// @ts-ignore | routs
// post man: [get] localhost:3000/api/members/2 [send]
app.use('/api/members', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))






















/* notes */
//??? should I use this
// module.exports = logger;
// how to debug the back end?

/* // api syntax
    module : {
        exports :{
            ()
        }
    }

    __dirname : { // .../js 
    }

    path : { ***
        join()
    }

    express() : { ***
        listen(8080, _) ***
        get(
            req : {
                protocol,
                params : {
                    id
                },
                get(
                    'host'
                ),
                originalUrl
            },
            res : {
                send()
                sendFile()
                json()
                status(200, 404, ...) : {
                    json()
                }
                render(
                    index
                )
            }
        ),
        use(
            express : {
                json() //body parser
                urlencoded(
                    {
                        extended: false //handle url encoded data
                    }
                )
            }
        ),
        static()
    }
*/
/* // Old Server // node server
    let getHTMLWithHeader = (header) => `<!DOCTYPE html5>
    <html>
    <body>
        <h1>${header}</h1>
    </body>
    </html>
    `
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(getHTMLWithHeader('Hello World'));
    }).listen(8080);

    console.log('Brendan server listening on port 8080...')
*/
/* // installs 
    @babel/core //transpile the code
    @babel/preset-env //what features to use //what to compile to 
    @babel/plugins //extra features
    @babel/register //use node //a.js transpile 
*/
/* // info | web
    HTTP status codes: https://www.restapitutorial.com/httpstatuscodes.html
    HTTP request methods: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
*/