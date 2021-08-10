import styled from "styled-components";

interface Props {
    searchClicked: boolean,
    style?:React.CSSProperties,
}

const Container = styled.div<Props>`
    width:100%;height:100%;
    position:fixed;top:0px;left:0px;
    background:RGBA(0,0,0,0.3);
    display:${(props)=> props.searchClicked ? 'block' : 'none'};
`;
const BlackCotton = ({searchClicked, style}:Props) => {

    return (
        <>
            <Container
                searchClicked={searchClicked}
                style={{...style}}
             />
        </>
    )
};

export default BlackCotton;