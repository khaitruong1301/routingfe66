import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { layChiTietPhimAction } from '../../redux/action/QuanLyPhimActions';
export default function Details(props) {
    // console.log('props',props)

    const {chiTietPhim} = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    console.log('chiTietPhim',chiTietPhim);

    const {id} = props.match.params;

    useEffect(() => {
        
        //Gọi api 
        const action = layChiTietPhimAction(id);
        //Gọi 1 action thunk (action2 là function)
        dispatch(action)

    }, [])


    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-4">
                    <img src={chiTietPhim.hinhAnh} alt='...' />
                </div>
                <div className="col-8">

                </div>

            </div>
        </div>
    )
}
