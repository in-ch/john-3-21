import { useEffect } from "react";
import Header from "src/components/Header";
import styled from "styled-components";




const Container = styled.div`
    width:100%;height:100vh;padding-top:150px;overflow-y:scroll;text-align:center;
    input[type=button] {
        margin-top:100px;
        width:47.5%;height:40px;background:black;margin-left:2%;color:white;
    }
`;
const InputDiv = styled.div`
    width:50%;margin-left:25%;height:50px;display:flex;margin-top:5px;
    div:nth-child(1){
        flex:2;text-align:center;
        p{
            font-size:20px;line-height:50px;
        }
    }
    div:nth-child(2){
        flex:8;
        input{
            border:0;outline:0;border-bottom:1px solid #000;
            width:100%;height:100%;
        }
    }
    textarea {
        width:100%;min-height:100px;margin-left:5%;margin-top:10px;outline:0;border:0.5px solid #000;margin-top:20px;
    }
`;

const Mail = () => {

    useEffect(()=>{
        window.scrollTo({top:50});
    },[]);

    return (
        <>
            <Header otherPage={true} />
            <Container>
                <p style={{
                    fontSize:30,
                    textAlign:'center',
                    padding:8,
                }}>CONTACT</p>
                <br/><br/><br/>
                <InputDiv>
                    <div>
                        <p>SUBJECT</p>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                </InputDiv>
                <InputDiv>
                    <div>
                        <p>E-MAIL</p>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                </InputDiv>
                <InputDiv>
                    <div>
                        <p>MOBILE</p>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                </InputDiv>
                <InputDiv>
                    <div>
                        <p>NAME</p>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                </InputDiv>
                <InputDiv>
                    <textarea />
                </InputDiv>
                <input type="button" value="문의 하기" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
            </Container>
        </>
    )
};

export default Mail;