import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "dev-5oad3xqnpr0le4v8.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck