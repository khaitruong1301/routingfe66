import React from 'react'

export default function Home(props) {

    console.log('propsRoute',props);

    return (
        <div className="container">
            Home

            


            <button onClick={()=>{
                //Trở về trang trước
                props.history.goBack();
            }}>go Back</button>
        </div>
    )
}
