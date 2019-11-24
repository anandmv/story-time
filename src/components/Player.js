import React from 'react';
import useAudio from '../utils/useAudio';

export const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
    <div>
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
    );
};

export default Player;