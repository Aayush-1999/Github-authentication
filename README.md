## Authentication using Github and Locally

This project shows **Local/Github Authentication** using:
- [passport](http://www.passportjs.org/)
- [passport-local](http://www.passportjs.org/packages/passport-local/)
- [passport-github](http://www.passportjs.org/packages/passport-github2/)

### SERVER

The Server is made on `Node.js (v10.15.3)`
<br/>
`Express.js` is used as the server framework (v4.17.1)

### DATABASE

The database used is `MongoDB`.
<br/>
`Mongoose.js` is used as an ODM (v5.6.11)

### FRONT-END

- The Front-end is made with `HTML, CSS and JS`.
- `Materialize.css` is used for better styling of the project.
- `Animate.css` for animations

### SECURITY

Many security precautions have been taken:
- ***bcrypt***: For secure password saving in the database.
- ***csurf***: For protection against CSRF attack on Forms and fetch requests.
- ***helmet***: For protection against common Security Vulnerabilities inExpress framework.
- ***jsonwebtoken(JWT)***: For Secure Email Verification Links.
- ***Content Security Policy***: For Secure Content Delivery from the server.
- ***limiter***: For Limiting the access to data from a particular client (150 requests per hour).

### NPM Commands

- **npm install** - installs all the dependencies
- **npm start** - lints the server and client script, starts eslint on watch mode on server scripts and starts the project at localhost:1998 in debug mode.
- **npm run start-w** - Restarts the server(using nodemon) on every save and lints the server and client side scripts on each save.
- **npm run start-w-lite** - Simply restarts the server(using nodemon) on every save.
- **npm run lint-server** - lints the server scripts (all scripts except that in node_module and public directory) once.
- **npm run lint-client** - lints the client scripts (all scripts in the public directory) once.
- **npm run lint-w** - starts the linter in watch mode. When called from root directory it watches the server scripts and when called in public directory it watches the client scripts.
- **npm run localTunnel** - exposes localhost:1998 to the world wide web
- **npm run lt** - runs npm start and npm run localTunnel in parallel
- **Use npm run** --silent <your-script> to hide the internal logs from your terminal window.
