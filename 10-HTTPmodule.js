const http = require('http')

const server = http.createServer((req, res) => {
    //   if (req.url === '/') {
    //     res.end('Welcome to our home page')
    //   }
    //   if (req.url === '/about') {
    //     res.end('Here is our short history')
    //   }
    //   res.end(`
    //   <h1>Oops!</h1>
    // <p>We can't seem to find the page you are looking for</p>
    // <a href="/">back home</a>
    //   `)
    // ###################################
    // ###################################
    //
    //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
    // SWITCH TO IF, ELSE IF, ELSE (BELOW)
    // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL

    //if  a user wants home page
    if (req.url === '/') {
        res.end('Welcome to our home page')
    
    //if user wants about page
    } else if (req.url === '/about') {
        res.end('Here is our short history')

    //if user wants other page that we have not created we give these warning and direct him to our home page
    } else {
        res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    }
})

server.listen(5000)