

import mainImg  from "../assets/background1.png";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

import Footer from "../components/Footer";
import Button from "../components/Button";

import product1 from "../assets/productImg1.png";
import product2 from "../assets/productImg2.png";
import ARTIMG from "../assets/ART_IMG.png";
import lookbookArt from "../assets/lookbook_art.png";
import lookbookColl from "../assets/lookbook_collect.png";
import lookbookLook from "../assets/lookbook_look.png";
import dulrubogi from "../assets/ar1.png";

let wheelIndex = 0;

const Container = styled.div`
    width:100%;
    height:100vh;overflow:hidden;display:flex;
    .flex1{
        flex:6;
    }
    .flex2{
        flex:4;display:flex;margin-left:10vh;
    }
`;

const LookBookDiv = styled.div`
    width:25%;height:75vh;text-align:center;
`;

const downEvent = ():void => {
    if(wheelIndex>-1&&wheelIndex<5){
        wheelIndex++; 
    }

    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
};
const upEvent = ():void => {
    if(wheelIndex<6&&wheelIndex>0){
        wheelIndex--; 
    }

    if(wheelIndex >3){
        window.scrollBy({
            top: - (window.innerHeight/3),
            left: 0,
            behavior: 'smooth'
        });
    } else {
        window.scrollBy({
            top: - window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
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
                    <div style={{
                        width:"80vh",height:"80vh",marginLeft:"10vh",marginTop:"15vh",backgroundImage:`url(${product1})`
                    }} />
                </div>
                <div className="flex2">
                    <div style={{
                            marginTop:"25vh"
                        }}>
                            <p style={{fontSize:30,fontWeight:'bold'}}>신제품 구경하기</p>
                            <p style={{fontSize:15,marginTop:50,lineHeight:2}}>양 옆에 끝단으로 갈수록 얇아지는 패널을 블록하여 자연스럽게 늘어뜨려도 <br/>멋스러우며, 묶어서 스타일링 하기에도 좋습니다. <br/>오픈 칼라로 시크한 분위기를 살렸습니다.</p>
                            <Button text="자세히보기" />
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex2">
                    <div style={{
                            marginTop:"25vh"
                        }}>
                            <p style={{fontSize:30,fontWeight:'bold'}}>2021 F/W 컬렉션</p>
                            <p style={{fontSize:15,marginTop:50,lineHeight:2}}>양 옆에 끝단으로 갈수록 얇아지는 패널을 블록하여 자연스럽게 늘어뜨려도 <br/>멋스러우며, 묶어서 스타일링 하기에도 좋습니다. <br/>오픈 칼라로 시크한 분위기를 살렸습니다.</p>
                            <Button text="자세히보기" />
                    </div>
                </div>  
                <div className="flex1">
                    <div style={{
                        width:"80vh",height:"80vh",marginLeft:"10vh",marginTop:"15vh",backgroundImage:`url(${product2})`
                    }} />
                </div>
            </Container>
            <Container style={{flexDirection:'column',textAlign:'center'}}> 
                <div style={{
                    width:'80%',height:'65vh',marginLeft:'10%',marginTop:'9.5vh',
                    backgroundImage:`url(${ARTIMG})`,backgroundSize:'cover'
                }} />
                <p style={{fontSize:'30px',marginTop:'20px'}}>ART WORK</p>
                <p style={{fontSize:15,marginTop:10,lineHeight:2}}>양 옆에 끝단으로 갈수록 얇아지는 패널을 블록하여 자연스럽게 늘어뜨려도 멋스러우며, 묶어서 스타일링 하기에도 좋습니다. 오픈 칼라로 시크한 분위기를 살렸습니다.</p>
                <Button text={'자세히 보기'} style={{margin: '0 auto'}}/>
            </Container>
            <Container style={{flexDirection:'row', justifyContent:'space-between', padding:'10%'}}>
                <LookBookDiv>
                    <div style={{width:'100%',height:'50vh',background:'red',backgroundImage:`url(${lookbookLook})`}} />
                    <p style={{fontSize:25,marginTop:10}}>LOOKBOOK</p>
                    <p style={{fontSize:13,marginTop:10,color:'RGB(150,150,150)'}}>대칭의 몸에 비대칭의 옷으로<br/>표현의 자유로움을 표현하다.</p>
                    <img src={dulrubogi} style={{transform:'scale(0.7)',marginTop:30}} />
                </LookBookDiv>
                <LookBookDiv>
                    <div style={{width:'100%',height:'50vh',background:'red',backgroundImage:`url(${lookbookColl})`}} />
                    <p style={{fontSize:25,marginTop:10}}>COLLECTION</p>
                    <p style={{fontSize:13,marginTop:10,color:'RGB(150,150,150)'}}>대칭의 몸에 비대칭의 옷으로<br/>표현의 자유로움을 표현하다.</p>
                    <img src={dulrubogi} style={{transform:'scale(0.7)',marginTop:30}} />
                </LookBookDiv>
                <LookBookDiv>
                    <div style={{width:'100%',height:'50vh',background:'red',backgroundImage:`url(${lookbookArt})`}} />
                    <p style={{fontSize:25,marginTop:10}}>ART</p>
                    <p style={{fontSize:13,marginTop:10,color:'RGB(150,150,150)'}}>ART<br/>WORK</p>
                    <img src={dulrubogi} style={{transform:'scale(0.7)',marginTop:30}} />
                </LookBookDiv>
            </Container>
            <Container style={{height:'30vh'}}>
                <Footer/>
            </Container>
        </>
    )
};

export default Home;