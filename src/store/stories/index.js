import twinkle from './TwinkleTwinkleLittleStar/index.json';
import baBaBlackSheep from './BaBaBlackSheep/index.json';
import fiveLittleMonkeys from './FiveLittleMonkeys/index.json';
import ringaRingaRoses from './RingaRingaRoses/index.json';
import londonBridgeFallingDown from './LondonBridgeFallingDown/index.json';
import humptyDumpty from './HumptyDumpty/index.json'
const storiesJSON = [twinkle, ringaRingaRoses, baBaBlackSheep, londonBridgeFallingDown, fiveLittleMonkeys, humptyDumpty];
/* Actions */

export const storyById = id => ({
    type: 'GET_STORY_BY_ID',
    id
});

export const storiesByCategory = (category) => ({
    type: 'GET_STORIES_BY_CATEGORY',
    category
});

/* Getter */
export const getStories = (store) => store.stories;
export const getStoryById = (store,id) => store.stories.find(story => story.id === id);

/* Reducers */
const stories = (state = storiesJSON, action) => {
    switch (action.type) {
        case 'GET_STORY_BY_ID':
            return state.find(story =>
                story.id === action.id
            )
        case 'GET_STORIES_BY_CATEGORY':
            return state.filter(story =>
                story.category === action.category
            )
      default:
        return state
    }
  }
  
  export default stories