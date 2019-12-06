import React from 'react';
import { connect } from 'react-redux';
import { withRouter , Link} from "react-router-dom";
import Player from '../components/Player';
import Reader from '../components/Reader';
import { getStoryById } from '../store';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import BackArrowIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    backButton:{
        position:"absolute",
        marginTop: "-60px"
    },
    container: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    mediaGrid:{
        position:"relative",
    },
    storyImage:{
        height: "100%",
        objectFit: "cover",
        width: "50vw",
        minWidth: "100%",
    },
    storyGrid:{
        display:"block",
        textAlign:"center",
        flex: '1 0 auto',
    }
}));

export const Story = ({story = {}}) => {
    const classes = useStyles();
    return (<Container maxWidth="lg" className={classes.container}>
            <Link to="/">
                <Fab color="primary" aria-label="back" className={classes.backButton}>
                    <BackArrowIcon />
                </Fab>
            </Link>
            <Card>
                <Grid container justify="center" spacing={0}>
                    <Grid key="mediaGrid" item className={classes.media}>
                        <img
                            src={story.banner}
                            alt={story.name}
                            className={classes.storyImage}
                        />
                    </Grid>
                    <Grid key="storyGrid" item className={classes.storyGrid}>
                            <Player {...story}/>
                            <Reader {...story}/>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}


const mapStateToProps = (state,props) => {
    return {story: getStoryById(state, props.match.params.id)}
}

export default withRouter(connect(mapStateToProps,{})(Story));
