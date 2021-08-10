import styled from "styled-components";

import Ka from "../assets/ka_small.png";
import In from "../assets/instagram_small.png";
import We from "../assets/wechat_small.png";

const Container = styled.footer`
    width:100%;height:100%;padding:5%;padding-top:3%;display:flex;
`;
const IconDiv = styled.div`
    width:120px;height:15px;margin-top:10px;display:flex;
    img{
        width:15px;height:15px;display:inline;flex-direction:row;align-items:center;
    }
    p{
        display:inline;position:relative;left:10px;top:1px;
    }
`;
const Footer = () => {

    return (
        <Container style={{backgroundColor:"#262626",color:"white"}}>
            <div style={{flex:3}}>
                <p style={{fontSize:20,fontWeight:'bold'}}>Social Media</p>
                <br/><br/>
                <IconDiv>
                    <img src={Ka} alt="카카오톡" /> <p>Kakaotalk</p>
                </IconDiv>
                <IconDiv>
                    <img src={In} alt="인스타그램" /> <p>Instagram</p>
                </IconDiv>
                <IconDiv>
                    <img src={We} alt="위챗" /> <p>Wechat</p>
                </IconDiv>
            </div>
            <div style={{flex:7, textAlign:'right',lineHeight:2}}>
                <p style={{float:'right',display:'inline-block'}}>Copyriight xxxxxx All rights reserved. OWNER : YUN CHANG HEE <br/> Business number : 000-000-0000 NAUK) IRDER KUCEBSE : 제 2020-000-000호<br/> ADDRESS : 04563 서울특별시 XXX구 XXXX호 20</p>
            </div>
        </Container>
    )
};

export default Footer;