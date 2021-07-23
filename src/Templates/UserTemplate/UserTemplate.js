import React, { Fragment } from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';








export const UserTemplate = (props) => {


    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <div className="d-flex">
                <div style={{ width: '50%', height: '100vh' }}>
                    <img className="w-100" src="https://picsum.photos/2000/2000" />
                </div>
                <div className="w-50" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: '100vh' }}>
                    <div>
                        <props.component {...propsRoute} />

                        <NavLink to="/">Trang chủ</NavLink>
                    </div>

                </div>
            </div>

        </Fragment>
    }} />


}