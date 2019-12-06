import React from 'react';
import { connect } from 'react-redux';
import { getStories } from '../store';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export const Stories = ({ stories }) => {
    const classes = useStyles();
    return <Container maxWidth="md" className={classes.cardGrid}>
        {stories.map(story => (<Link to={`story/${story.id}`} key={story.id}><Grid item key={story.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    image={story.banner}
                    title={story.name}
                    className={classes.cardMedia}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {story.name}
                    </Typography>
                    <Typography component="p" variant="overline">
                        {story.story[0]}
                    </Typography>
                    <Typography component="p" variant="overline">
                        {story.story[1]}
                    </Typography>
                </CardContent>
            </Card>
        </Grid></Link>))}
    </Container>
}

const mapStateToProps = state => ({
    stories: getStories(state)
})

export default connect(mapStateToProps, {})(Stories);