<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
    Sessions are custom middleware that can store data like cookies, and can be used for authenticating data.
    bcrypt is a password hashing function.
    jwt, jsonwebtoken, creates access tokens to to allow client-side to access server-side authorizations.

2.  What does bcrypt do in order to prevent attacks?
    It incorporates hashing to protect against rainbow table attacks, and it is also an adaptive function, meaning the iteration count can be increased to make it slower, so it remains resistant to brute-force attacks with increasing computation power.

3.  What are the three parts of the JSON Web Token?
    A header, a payload, and a signature.