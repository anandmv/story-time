import twinkle from './TwinkleTwinkleLittleStar';
import baBaBlackSheep from './BaBaBlackSheep';
import fiveLittleMonkeys from './FiveLittleMonkeys'
const storiesJSON = [twinkle,baBaBlackSheep,fiveLittleMonkeys];
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