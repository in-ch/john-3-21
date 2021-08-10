import styled from "styled-components";

import blackGlass from '../assets/blackGlass.png';

interface Props {
    searchClicked: boolean,
    style?:React.CSSProperties,
}

const SearchBoxW = styled.div<Props>`
    width:50%;
    height:400px;
    background:white;
    margin-left:50%;
    margin-top:3px;
    padding:2%;
    display: ${(props)=> props.searchClicked  ? 'block' : 'none'};
`;

const Wrapper = styled.div`
    width:100%;
    height:100%;
`;
const SearchContainer = styled.div`
    width:100%;border-bottom:2px solid #000;height:40px;display:flex;
    div:nth-child(1){
        flex:0.5;
    }
    div:nth-child(2){
        flex:9.5;
        input{
            outline:0;border:0;
            width:100%;height:100%;
            color:black;
            font-size:16px;
        }
    }
`;
const RelationWrapper = styled.div`
    width:100%;display:flex;height:230px;
    margin-top:30px;color:black;
    div:nth-child(1){
        flex:4;
        p{
            width:100%;height:30px;
        }
    }
    div:nth-child(2){
        flex:6;
        p{
            width:100%;height:30px;
        }
    }
`;

const SearchBox = ({searchClicked, style}:Props) => {
    
    return (
        <>
            <SearchBoxW searchClicked={searchClicked} 
                style={{
                    ...style
                    }}
            >
                <Wrapper>
                    <SearchContainer>
                        <div>
                            <img src={blackGlass}/>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </SearchContainer>
                    <RelationWrapper>
                        <div>
                            <p style={{fontWeight:'bold',fontSize:10}}>트렌드 검색</p>
                            <p>핸드백</p>
                            <p>슈즈</p>
                            <p>벨트</p>
                            <p>가방</p>
                        </div>
                        <div>
                            <p style={{fontWeight:'bold',fontSize:10}}>트렌드 검색</p>
                            <p>핸드백</p>
                            <p>슈즈</p>
                            <p>벨트</p>
                            <p>가방</p>
                        </div>
                    </RelationWrapper>
                </Wrapper>
            </SearchBoxW>
        </>
    )
};

export default SearchBox;

