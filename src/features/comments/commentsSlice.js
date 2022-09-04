//This is a way to select for all the comments in COMMENTS array that belong to a specific campsite
import { COMMENTS }  from '../../app/shared/COMMENTS';

//export a const with a campsiteId as parameter
export const selectCommentsbyCampsiteId = (campsiteId) => {
    //filter method returns new array on the COMMENTS array.
    return COMMENTS.filter(
        //for callback method used by filter, use a parameter of comment and its body test that comment.campsiteId === campsiteId
        (comment) => comment.campsiteId === parseInt(campsiteId)

    );
}