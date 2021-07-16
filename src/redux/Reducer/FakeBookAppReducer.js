import { ADD_COMMENT } from "../action/type/FakeBookAppType";


const stateDefault = {
    arrComment: [
        { name: 'Nguyen van a', content: 'A hi hi', img: 'https://picsum.photos/id/20/50/50' },
        { name: 'Nguyen Van b', content: 'Xin chào', img: 'https://picsum.photos/id/30/50/50' },
    ]
}



export const FakeBookAppReducer = (state=stateDefault,action) => {

    console.log('action',action);

    switch(action.type) {
        case ADD_COMMENT : {
            state.arrComment = [...state.arrComment,action.userComment];
            // state.arrComment.push(action.userComment);
            console.log('arr',state.arrComment);


            return {...state};
        }
        
        default: return state;
    }
}

