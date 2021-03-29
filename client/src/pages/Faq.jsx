import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        top: '50%'
    },
    avatar: {
        margin: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));

export default function SimpleAccordion() {

  const classes = useStyles();

  return (
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>

        <Container component="main" maxWidth="xs">

            <CssBaseline />
            
            <div className={classes.paper}>

                <Grid container spacing={4}>

                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5" className={classes.avatar}>
                            Frequently Asked Questions
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                                <HelpTwoToneIcon/>
                                <Typography className={classes.heading}>HOW DO I JOIN GATOR TPED?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    A good way to start is to come to one of our regular general body meetings. You need to attend a certain number of events to vote, but to be a part of the club, all you need to do is come hang out. The Zoom link is on our Discord!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <HelpTwoToneIcon/>
                                <Typography className={classes.heading}>WHO CAN JOIN GATOR TPED?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Anyone can join! There are no experience or background requirements. This club is for all UF students.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <HelpTwoToneIcon/>
                                <Typography className={classes.heading}>IS THIS CLUB JUST FOR ENGINEERS?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nope! Although the 'E' in TPED does stand for engineering, we have students of all backgrounds, as design encompasses many aspects. Whether you're an architect or a marine biologist, you are more than welcome!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <HelpTwoToneIcon/>
                                <Typography className={classes.heading}>WHAT IS THE DESIGN TEAM?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The TPED design team is a group of students working together on a theme park design project. Currently, we are crafting a functioning small-scale roller coaster.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <HelpTwoToneIcon/>
                                <Typography className={classes.heading}>HOW DO I JOIN THE DESIGN TEAM?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Just come to one of the meetings! Whether the first week or halfway through the year, there is always more work to be done, so new hands are welcome. The link can be found in our Discord server.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <HelpTwoToneIcon/>
                                <Typography className={classes.heading}>DO I NEED EXPERIENCE TO JOIN THE DESIGN TEAM?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nope! Although the current project is more engineering-heavy, most of the skills needed for the project are learned by working on it hands-on.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <HelpTwoToneIcon/>
                                <Typography className={classes.heading}>WHAT IS SWAMP THRILLS?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Swamp Thrills is Gator TPED's own theme park design competition, hosted here on University of Florida campus. Multidisciplinary teams respond to up to three project prompts and present their work in front of industry judges.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    
                </Grid>
            </div>
        </Container>
        
        
      </div>
    
  );
}
