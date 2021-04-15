import React from 'react';

const Home = () => {

    return (
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
            THIS IS THE HOME PAGE
            DISPLAY ALL RELEVANT CLUB INFO
            SHOW FEATURED POSTS (add a featured functionality for admins)
        </div>
    )
};

export default Home;


// import React, { useState, useEffect } from 'react';
// import { Container, Grow, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
// import { getPosts } from '../actions/posts';
// import Posts from '../components/Posts/Posts';
// import SubmitPost from './SubmitPost';

// const Home = () => {
//     const [currentId, setCurrentId] = useState(0);
//     const dispatch = useDispatch();
    

//     useEffect(() => {
//         dispatch(getPosts());
//     }, [currentId, dispatch]);

//     return (
//         <div>
//             <Grow in>
//                 <Container>
//                     <Grid container justify="space-between" alignItems="stretch" spacing={3}>
//                         <Grid item xs={12} sm={7}>
//                             <Posts setCurrentId={setCurrentId} />
//                         </Grid>
//                         <Grid item xs={12} sm={4}>
//                             <SubmitPost currentId={currentId} setCurrentId={setCurrentId} />
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Grow>
//         </div>
//     )
// }


// export default Home;











