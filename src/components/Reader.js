import React from 'react';

export const Reader = ({story}) => {
    return <div>
            {story.join()}
        </div>
}

export default Reader;