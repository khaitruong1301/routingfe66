import { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import HomeHeader from "../../Components/HomeHeader/HomeHeader"

                            
export const HomeTemplate = (props) => { 
    // props {path:'/home', component:Home }
    const [state,setState] = useState(true); //true desktop false là mobile
    useEffect(()=>{
      window.onresize = () => {
        let {innerWidth,innerHeight} = window;
        if(innerWidth <= 720){
          setState(false);
        }else {
          setState(true);
        }
      }
      window.onload = () => {
        let {innerWidth,innerHeight} = window;
        if(innerWidth <= 720){
          setState(false);
        }else {
          setState(true);
        }
      }
    },[])

    const renderComponent = (propsRoute) => {
      if(state) {
        return  <props.component {...propsRoute} />
      }else {
        if(props.componentMobile) {
          return <props.componentMobile {...propsRoute} />
        }
      }
      return <props.component {...propsRoute} />
    }

    return   <Route exact path={props.path} render={(propsRoute) => {
        return <div>
          <HomeHeader {...propsRoute} />
          {renderComponent(propsRoute)}
        
          

        </div>
      }} />

}