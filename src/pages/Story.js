import React from 'react';
import TwinkleTwinkleLittleStar from '../store/stories/TwinkleTwinkleLittleStar';
import Player from '../components/Player';
import Reader from '../components/Reader';

export const Story = () => {
    return (<div>
            <Player url={TwinkleTwinkleLittleStar.audio}/>
            <Reader story={TwinkleTwinkleLittleStar.story}/>
        </div>
    );
}

export default Story;