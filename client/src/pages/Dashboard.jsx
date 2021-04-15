// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../actions/authActions";

// class Dashboard extends Component {

//   onLogoutClick = e => {
//     e.preventDefault();
//     this.props.logoutUser();
//   };

//   render() {

//     const { user } = this.props.auth;

//     return (
//       <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
//         <div style={{ height: "75vh" }} className="container valign-wrapper">
//         <div className="row">
//           <div className="col s12 center-align">
//             <h4>
//               <b>Hey there,</b> {user.firstname}
//               <p className="flow-text grey-text text-darken-1">
//                 You are logged into a full-stack{" "}
//                 <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
//               </p>
//             </h4>
//             <button
//               style={{
//                 width: "150px",
//                 borderRadius: "3px",
//                 letterSpacing: "1.5px",
//                 marginTop: "1rem"
//               }}
//               onClick={this.onLogoutClick}
//               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
      
//     );
//   }
// }

// Dashboard.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(
//   mapStateToProps,
//   { logoutUser }
// )(Dashboard);

// /*
// import React from 'react'
// import Button from '@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({

//   paper: {
//       marginTop: theme.spacing(0),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//   },
//   avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//   },
//   submit: {
//       margin: theme.spacing(3, 0, 2),
//   },
// }));

// const Dashboard = () => {

//   const classes = useStyles();

//   return (
//     <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
//       <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
//           Logout
//       </Button>
//     </div>
//   )
// }

// export default Dashboard
// */
import React from 'react'

const user = JSON.parse(localStorage.getItem('profile'));
const token = user?.token;

const Dashboard = () => {

    return (
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
              THIS IS THE EDIT PROFILE PAGE
              Will have an editable form that allows particular users 
              to edit information about their profile in the database
              by editing the schema (name, major, grad year, position, etc.)
      </div>
    )
  


}

export default Dashboard
