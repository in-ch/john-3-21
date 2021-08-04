import { useEffect } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import styled from "styled-components";


import productImgOuter from "../assets/productImgOuter.png";
import productImgOuter2 from "../assets/lookbook_look.png";


const Container = styled.div`
    width:100%;height:100vh;padding-top:150px;overflow-y:scroll;
`;
const ProductWrapper = styled.div`
    width:92%;min-height:100px;display:flex;margin-left:4%;
    justify-content:space-between;padding:20px;
`;
const ProductItemWrapper = styled.div`
    width:25%;height:60vh;
    p{
        text-align:center;
        margin-top:5px;
        font-size:18px;
        line-height:2;
    }
`;
const ProductImgWrapper = styled.div`
    width:100%;height:80%;background:blue;
    background-image: url(${productImgOuter});background-size:cover;
    transition: all 0.3s;
    &:hover{
        background-image: url(${productImgOuter2});
    }
`;

const Product = () => {

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
                }}>OUTER</p>
                <ProductWrapper>
                    <ProductItemWrapper>
                        <ProductImgWrapper>
                        </ProductImgWrapper>
                        <p>셔링 긴팔 원피스</p>
                        <p>₩ 300,000</p>
                    </ProductItemWrapper>
                    <ProductItemWrapper>
                        <ProductImgWrapper>
                        </ProductImgWrapper>
                        <p>셔링 긴팔 원피스</p>
                        <p>₩ 300,000</p>
                    </ProductItemWrapper>
                    <ProductItemWrapper>
                        <ProductImgWrapper>
                        </ProductImgWrapper>
                        <p>셔링 긴팔 원피스</p>
                        <p>₩ 300,000</p>
                    </ProductItemWrapper>
                </ProductWrapper>
                <ProductWrapper>
                    <ProductItemWrapper>
                        <ProductImgWrapper>
                        </ProductImgWrapper>
                        <p>셔링 긴팔 원피스</p>
                        <p>₩ 300,000</p>
                    </ProductItemWrapper>
                    <ProductItemWrapper>
                        <ProductImgWrapper>
                        </ProductImgWrapper>
                        <p>셔링 긴팔 원피스</p>
                        <p>₩ 300,000</p>
                    </ProductItemWrapper>
                    <ProductItemWrapper>
                        <ProductImgWrapper>
                        </ProductImgWrapper>
                        <p>셔링 긴팔 원피스</p>
                        <p>₩ 300,000</p>
                    </ProductItemWrapper>
                </ProductWrapper>
                {/* <Footer /> */}
            </Container>
        </>
    )
};

export default Product;