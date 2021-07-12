import React, { useState } from 'react'

export default function BaiTapChonXe(props) {

    const [img, setImg] = useState('./img/CarBasic/products/red-car.jpg');
    const changeColor = (color) => {
        setImg(`./img/CarBasic/products/${color}-car.jpg`)
    }
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <img className="w-100" src={img} alt="..." />
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <button onClick={() => {
                                changeColor('red');
                            }}>Red</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => {
                                changeColor('black');
                            }}>Black</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => {
                                changeColor('silver');
                            }}>Silver</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => {
                                changeColor('steel');
                            }}>Steel</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


