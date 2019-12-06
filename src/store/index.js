import { createStore, combineReducers } from "redux";
import stories, {getStories, getStoryById , storiesByCategory, storyById} from './stories';

const rootReducer =  combineReducers({ stories });

export {getStories, getStoryById, storiesByCategory, storyById};
export default createStore(rootReducer);

