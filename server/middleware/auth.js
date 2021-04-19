import jwt from 'jsonwebtoken';

//wants to like a post
//click a like button (must see if permissions to like pass) => auth middleware used to check (confirms or denies it) => only confirmed will the action be allowed

//middleware utilizes next (do something then move on to the next thing)
const auth = async (req, res, next) => {
    //checks to see if token is valid when a user tries to like or delete a post, or just interact with the website
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; //implies that it is our own, otherwise it is google
        
        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test'); //needs the secret string when creating a token

            req.userId = decodedData?.id;
        } 

        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;

//auth middleware is used in the routes