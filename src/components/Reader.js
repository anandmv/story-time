import React from 'react';
import Typography from '@material-ui/core/Typography';


export const Reader = ({story}) => {
    return story.map( (storyPara,index) => <Typography component="p" variant="overline" key={index}>{storyPara}</Typography>)
}

export default Reader;