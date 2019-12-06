import React from 'react';
import useAudio from '../utils/useAudio';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseArrowIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    boxShadow:"none",
    borderBottom: "1px solid grey",
    marginBottom: "10px",
    justifyContent: "space-around",
    borderRadius: 0,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Player({audio, banner, name, by}) {
  const classes = useStyles();
  const [playing, toggle] = useAudio(audio);
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" gutterBottom>
            {name}
          </Typography>
          {by && <Typography variant="subtitle1" color="textSecondary">{by}</Typography>}
        </CardContent>
      </div>
      <div className={classes.controls}>
          <IconButton aria-label="play/pause" onClick={toggle}>
            {playing ? <PauseArrowIcon className={classes.playIcon}/> : <PlayArrowIcon className={classes.playIcon} />}
          </IconButton>
        </div>
    </Card>
  );
}
