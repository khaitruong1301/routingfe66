import React from 'react'
import { Carousel } from 'antd';
export default function HomeCarousel(props) {


    const contentStyle = {
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const onChange = (a, b, c) => {
        console.log(a, b, c);
    }

    return (
        <div>
            <Carousel afterChange={onChange}>
                <div>
                    <img className="w-100" src="https://picsum.photos/id/77/2000/300" />
                </div>
                <div>
                <img className="w-100" src="https://picsum.photos/id/78/2000/300" />
                </div>
                <div>
                <img className="w-100" src="https://picsum.photos/id/79/2000/300" />
                </div>
                <div>
                <img className="w-100" src="https://picsum.photos/id/80/2000/300" />
                </div>
            </Carousel>
        </div>
    )
}
