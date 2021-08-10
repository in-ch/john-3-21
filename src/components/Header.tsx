import { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../assets/Logo.png";
import korea from "../assets/korea_w.png";
import insta from "../assets/instagram.png";
import naver from "../assets/naver_icon.png";
import glass from "../assets/glass.png";
import cancel_w from "../assets/cancel_w.png";
import SearchBox from "./SearchBox";
import BlackCotton from "./BlackCotton";

interface Props {
    float?:string,
    weight?:string,
    offsetX?:boolean,
    otherPage?:boolean, // 만약 메인 페이지가 아닌 다른 곳에서 불러왔다면, 
    searchClicked?:boolean,
    style?:React.CSSProperties,
}

const Container = styled.div<Props>`
    width:100%;
    height: ${(props) => (props.offsetX  && props.otherPage)  ? 140 : 70}px;
    display:flex;
    background:${(props)=>(props.offsetX  && props.otherPage)  ? 'none' : 'black'};
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
        width:20px;height:20px;margin:7px;
    }
`;
const Img = styled.img<Props>`
    float:${((props) => props.float)};
`;
const P = styled.p<Props>`
    font-weight:${(props)=>props.weight};
`;

const ImgContainer = styled.div<Props>`
    width:100%;
    height: ${(props) => props.offsetX  && props.otherPage ? 60 : 0}px;
    overflow:hidden;
    transition: All 0.2s;
    img{
        display:block;
        width:500px;height:25px;
        margin: 0 auto;
    }
`;

const MenuTextContainer = styled.div<Props>`
    width:95%;height:30px;margin-left:2.5%;align-items:center;justify-items:center;
    text-align:center;
    color:white;display:flex;
    div{
        flex:1;
        &:hover{
            .subMenu{
                div{
                    display:block;
                    opacity: 1;
                }
            }
        }
    }
    .subMenu{
        height:0;
        div{
            position: relative;top:-1px;
            background:${(props)=>(props.offsetX  && props.otherPage)  ? 'none' : 'black'};
            display:none;
            opacity: 0;
            p{
                width:100%;
                display:inline-block;
            }
        }
    }
`;

const Header = ({otherPage, style}:Props) => {
    const [offsetX, setOffsetX] = useState<boolean>(true);
    const [searchClicked, setSearchClicked] = useState<boolean>(false);

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
    const clickGlass = () => {
            setSearchClicked(!searchClicked);
    };
    useEffect(()=>{ 
        window.addEventListener('scroll', onScroll);        
    },[]);

    return (
        <>
            <Container otherPage={otherPage} searchClicked={searchClicked} offsetX={offsetX} style={{
                ...style,
            }}>
                <ContentContainer>
                    <Img src={korea} 
                        float="left" 
                    /> 
                    <P weight={"bold"}>KOR</P>/<P>ENG</P>
                    <Img src={searchClicked ? cancel_w : glass} 
                        onClick={clickGlass}
                        float="right" 
                    /> 
                    <Img src={insta} 
                        float="right" 
                    /> 
                    <Img src={naver} 
                        float="right" 
                    /> 
                    <ImgContainer otherPage={otherPage} offsetX={offsetX} searchClicked={searchClicked}>
                            <img src={logo} />
                    </ImgContainer>
                    <MenuTextContainer otherPage={otherPage} offsetX={offsetX} searchClicked={searchClicked}>
                        <div>
                            <p style={{}}>NEW ARRIVAL</p>
                        </div>
                        <div>
                            <p style={{}}>WOMAN</p>
                            <div className="subMenu">
                                <div>
                                    <p>ALL</p>
                                    <p>OUTER</p>
                                    <p>TOPS</p>
                                    <p>BOTTOMS</p>
                                    <p>DRESSES</p>
                                    <p>ACCESSORIES</p>
                                    <p>SPECIAL</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style={{}}>MEN</p>
                            <div className="subMenu">
                                <div>
                                    <p>ALL</p>
                                    <p>OUTER</p>
                                    <p>TOPS</p>
                                    <p>BOTTOMS</p>
                                    <p>ACCESSORIES</p>
                                    <p>SPECIAL</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style={{}}>COLLECTION</p>
                        </div>
                        <div>
                            <p style={{}}>LOOKBOOK</p>
                        </div>
                        <div>
                            <p style={{}}>NEWS</p>
                        </div>
                        <div>
                            <p style={{}}>ABOUT JOHN <span style={{color:'red'}}>3:21</span></p>
                            <div className="subMenu">
                                <div>
                                    <p>PROFILE</p>
                                    <p>ART</p>
                                    <p>CONTACT</p>
                                </div>
                            </div>
                        </div>
                    </MenuTextContainer>

                    <BlackCotton searchClicked={searchClicked} style={{zIndex:2}} />
                    <SearchBox searchClicked={searchClicked} style={{zIndex:3}} />

                </ContentContainer>
            </Container>
        </>
    )
};

export default Header;