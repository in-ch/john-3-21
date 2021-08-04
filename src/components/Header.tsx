import { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../assets/Logo.png";
import korea from "../assets/korea_w.png";
// import insta from "../assets/instagram.png";
// import naver from "../assets/naver_icon.png";
// import glass from "../assets/glass.png";

interface Props {
    float?:string,
    weight?:string,
    offsetX?:boolean,
    otherPage?:boolean, // 만약 메인 페이지가 아닌 다른 곳에서 불러왔다면, 
}

const Container = styled.div<Props>`
    width:100%;
    /* height: 140px; */
    height: ${(props) => props.offsetX  && props.otherPage ? 140 : 70}px;
    display:flex;
    background:${(props)=>props.offsetX && props.otherPage ? 'none' : 'black'};
    color:white;
    position: fixed;
    transition:all 0.3s;
    p{
        display:inline-block;
        line-height: 37px;
    }
    img{
        width:500px;
        height:26px;
        margin: 0 auto;
    }
`;

const ContentContainer = styled.div`
    width:100%;height:40px;
    img{
        width:40px;height:40px;
    }
`;
const Img = styled.img<Props>`
    float:${((props) => props.float)};
`;
const P = styled.p<Props>`
    font-weight:${(props)=>props.weight};
`;

const ImgContainer = styled.div<Props>`
    width:100%;height:${(props)=>props.offsetX && props.otherPage ? 60 : 0}px;overflow:hidden;
    transition: All 0.2s;
    img{
        display:block;
        width:500px;height:25px;
        margin: 0 auto;
    }
`;

const MenuTextContainer = styled.div`
    width:95%;height:30px;margin-left:2.5%;align-items:center;justify-items:center;
    text-align:center;
    color:white;display:flex;
    p{
        flex:1;
    }
`;


const Header = ({otherPage}:Props) => {
    const [offsetX, setOffsetX] = useState(true);
    if(!otherPage){
        otherPage = true;
    } else {
        otherPage = false;
    }
    function onScroll (){
        if(window.pageYOffset>50){
            setOffsetX(false);
        }  else {
            setOffsetX(true);
        }
    };

    useEffect(()=>{ 
        window.addEventListener('scroll', onScroll);        
    },[]);
    return (
        <>
            <Container otherPage={otherPage} offsetX={offsetX}>
                <ContentContainer>
                    <Img src={korea} 
                        float="left" 
                    /> 
                    <P weight={"bold"}>KOR</P>/<P>ENG</P>
                    <Img src={korea} 
                        float="right" 
                    /> 
                    <Img src={korea} 
                        float="right" 
                    /> 
                    <Img src={korea} 
                        float="right" 
                    /> 
                    <ImgContainer offsetX={offsetX}>
                            <img src={logo} />
                    </ImgContainer>
                    <MenuTextContainer>
                    <p>NEW ARRIVAL</p>
                    <p>WOMEN</p>
                    <p>MEN</p>
                    <p>COLLECTION</p>
                    <p>LOOKBOOK</p>
                    <p>NEWS</p>
                    <p>ABOUT JOHN 3:21</p>
                    </MenuTextContainer>
                </ContentContainer>
            </Container>
        </>
    )
};

export default Header;