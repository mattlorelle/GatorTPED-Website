//react imports
import React from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';

//material ui core imports
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

//material ui icon imports
import HomeIcon from '@material-ui/icons/Home';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import EditIcon from '@material-ui/icons/Edit';
import PublishIcon from '@material-ui/icons/Publish';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = 240; //const variable for sidebar width

//handles all the styles for the components down below
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1, align: 'center'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  paper: {
    marginRight: theme.spacing(2),
  }
}));

//callback function that passes in props (history, used for routing)
const Appbar = props => {

    //useStyles functions
    const classes = useStyles();
    const theme = useTheme();
    
    //history used for subpage routing
    const { history } = props;

    const [open, setOpen] = React.useState(false); //Drawer
    const [menuOpen, setMenuOpen] = React.useState(false);
    const anchorRef = React.useRef(null); //Menu

    //Drawer open and close functions
    const handleDrawerOpen = () => { setOpen(true); };
    const handleDrawerClose = () => { setOpen(false); };

    //Menu open and close functions
    const handleToggle = () => { setMenuOpen((prevOpen) => !prevOpen)};
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) { return; } 
      setMenuOpen(false)
    };
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setMenuOpen(false);
      }
    }
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
      prevOpen.current = open;
    }, [open]);

    //list of objects that will be displayed when sidebar swings out, will be dereferenced later
    const itemsList = [
      {
          text: 'Home', 
          icon: <HomeIcon />,
          onClick: () => history.push('/')
      },
      {
          text: 'Project Search', 
          icon: <ImageSearchIcon />,
          onClick: () => history.push('/projectsearch')
      },
      {
          text: 'Calendar',
          icon: <CalendarTodayIcon />,
          onClick: () => history.push('/calendar')
      },
      {
          text: 'Contact Us', 
          icon: <ContactMailIcon />,
          onClick: () => history.push('/contact')
      },
      {
          text: 'E-Board', 
          icon: <AssignmentIcon />,
          onClick: () => history.push('/eboard')
      },
      {
          text: 'FAQ',
          icon: <LiveHelpIcon />,
          onClick: () => history.push('/faq')
      },
      {
          text: 'Edit Profile', 
          icon: <EditIcon />,
          onClick: () => history.push('/editprofile')
      },
      {
          text: 'Submit Post', 
          icon: <PublishIcon />,
          onClick: () => history.push('/submitpost')
      }
    ]

    //list of objects that will be displayed in the drop down menu
    const menuItems = [
      {
        text: 'Login',
        onClick: () => history.push('/login')
      },
      {
        text: 'Sign-Up',
        onClick: () => history.push('signup')
      }
    ]

    return (
      <div className={classes.root}>

        <CssBaseline />

        <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open})}>
          <Toolbar>

            {/* This div contains the profile drop down menu and uses react router to direct to subpages depending on which item was clicked (notice the url change up top) */}
            <div>
              <Button ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>
                <AccountCircleIcon color='secondary'/>
              </Button>
              <Popper open={menuOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        { menuItems.map((item) =>  {
                          const { text, onClick } = item;
                          return (
                            <MenuItem button key={text} onClick={ () => { onClick(); handleToggle() }}>
                              <ListItemText primary={text} />
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
                )}
              </Popper>
            </div>
      
            {/* This is the simple title on the Appbar, can be changed later*/}
            <Typography variant="h6" noWrap className={classes.title}>
              <Link href="/" variant="h6" color="inherit">
                 GatorTPED
              </Link>
            </Typography>

            {/* This is the menu icon button on the right side that swings open the drawer sidebar*/}
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} className={clsx(open && classes.hide)}>
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </AppBar>

        {/* This is the sidebar with routing functionality to direct users to the appropriate subpages*/}
        <Drawer className={classes.drawer} variant="persistent" anchor="right" open={open} classes={{paper: classes.drawerPaper,}}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              { itemsList.map((item) =>  {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={ () => { onClick(); handleDrawerClose()}}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
        </Drawer>
      </div>
    );
};

export default withRouter(Appbar);
