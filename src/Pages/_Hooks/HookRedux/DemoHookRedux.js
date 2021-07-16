import React, { useState } from 'react'
import { connect, useSelector,useDispatch } from 'react-redux'
import { addCommentAction } from '../../../redux/action/FakeBookAppActions';

export default function DemoHookRedux(props) {
    const [state,setState] = useState({
        name:'',
        content: ''
    })
    //useSelector tương tự mapstatetoprops
    const { arrComment } = useSelector(state => state.FakeBookAppReducer);
    //Ứng với this.props.dispatch bên react class
    const dispatch = useDispatch();

    const renderComment = () => {
        return arrComment.map((cmt, index) => {
            return <tr className="bg-dark text-white" key={index}>
                <td width="10%" className="p-2">
                    <img src={cmt.img} alt='...' />
                </td>
                <td>
                    <h3>{cmt.name}</h3>
                    <p>{cmt.content}</p>
                </td>
            </tr>
        })
    }
    console.log('state',state);
    const handleChange = (event)=>{
        let {value,name} = event.target;
        setState({
            ...state,
            [name]:value
        })
    }

    const handleSubmit = (event) => {
        //Lấy giá trị từ state và gọi redux
        event.preventDefault();
        let userComment = {...state,img:'https://picsum.photos/50/50'};

        // const action = addCommentAction(userComment);
        // {type:ADD_COMMENT, userComment: userComment }
        // dispatch(action);


        dispatch(addCommentAction(userComment));

    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3>Fakebook app</h3>

            <table className="w-100">
                <tbody>
                    {renderComment()}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <p>Name</p>
                            <input className="form-control" name="name" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <p>Content</p>
                            <input className="form-control" name="content"  onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button className="btn btn-success" type="submit">Send</button>
                        </td>
                    </tr>
                </tfoot>

            </table>
        </form>
    )
}



// const mapStateToProps = (state) => {
//     return {
//         arrComment:state.FakeBookAppReducer.arrComment
//     }
// }

// export default connect(mapStateToProps)(DemoHookRedux);