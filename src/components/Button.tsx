import styled from "styled-components";

import BB from "../assets/b11.png";

const Container = styled.div`
    width:400px;height:140px;background-size:cover;margin-top:100px;color:white;display:flex;justify-content:center;
    align-items: center;
`;

interface ButtonProps {
    text:string,
    style?:React.CSSProperties,
}

const Button = ({text,style}:ButtonProps) => {
    return (
        <>
            <Container style={{
                backgroundImage:`url(${BB})`,
                ...style,
            }}>
                {text}
            </Container>
        </> 
    )
};

export default Button;
