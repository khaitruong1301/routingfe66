import { ADD_COMMENT } from "./type/FakeBookAppType"



//action creator


export const addCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment: userComment
    }
}