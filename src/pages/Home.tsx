

import mainImg  from "../assets/background1.png";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";


let wheelIndex = 0;

const Container = styled.div`
    width:100%;
    height:100vh;overflow:hidden;display:flex;
    .flex1{
        flex:7;border:1px solid #000;
    }
    .flex2{
        flex:3;border:1px solid #000;
    }
`;

const downEvent = ():void => {
    wheelIndex++; 
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
};
const upEvent = ():void => {
    wheelIndex++; 
    window.scrollBy({
        top: - window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
};

const KeydownEvnet = (e:any):void => {
    if(e.which === 40){
        downEvent();
    } else if(e.which === 38) {
        upEvent();
    }
    return ;
};

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth*1.2);
    
    useEffect(()=>{
        window.scrollTo({top:0});
        document.addEventListener("keydown",KeydownEvnet);
    },[]);

    return (
        <>
            <Container>  
                <img style={{width}} src={mainImg} />
            </Container>
            <Container>  
                <div className="flex1">

                </div>
                <div className="flex2">

                </div>
            </Container>
            <Container>
                <p>asfasdfasdfasdfasdf</p>
            </Container>
        </>
    )
};

export default Home;