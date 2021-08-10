import Header from "src/components/Header";
import styled from "styled-components";

import logo from "../assets/blackLogo.png";
import sign from "../assets/sign.png";
import profileImg1 from "../assets/profileImg1.png";
import profileImg2 from "../assets/profileImg2.png";
import profileImg3 from "../assets/profileImg3.png";
import profileImg4 from "../assets/profileImg4.png";

const Container = styled.div`
    width:100%;
    height:100vh;
    margin: 0 auto;
    padding-top:130px;
    overflow: scroll;
    padding-left:15%;
    padding-right:15%;
`;
const Logo = styled.img`
    margin: 0 auto;
    display:block;
    width:500px;
`;

const IntroP = styled.p`
    margin-top:70px;
    text-align: center;
`;
const SignDiv = styled.div`
    width:330px;
    height:80px;
    margin: 0 auto;
    margin-top:50px;
    display:flex;
    justify-content: center;
    align-items: center;
`;
const ProfileWrapper = styled.div`
    width:100%;min-height:300px;
    margin-top:30px;
    display:flex;
    flex-direction: column;
    .profileIntroP{
        padding-left:50px;
        display:block;
    }
    div{
        padding-top:20px;
        display:flex;
        flex:5;justify-content: space-between;
    }
    img{
        width:30%;
    }
`;

const BoldText = styled.div`
    display:flex;
    width:100%;
    height:25px;
    p{
      font-weight:bold;margin-left:15px;font-size:25px;  
    }
`;
const TextList = styled.div`
    width:100%;
    display:flex;
    margin-top:30px;
    div:nth-child(1){
        flex:1;padding-left:20px;
    }
    div:nth-child(2){
        flex:9;
        p{
            margin-bottom:8px;
        }
    }
`;

const Profile = () => {

    return (
        <>
            <Header otherPage={true} />
            <Container>
                <Logo src={logo} />
                <IntroP>“JOHN & 3:21” 은 윤종규 디자이너의 영문이름  “JOHN” 과 “창세기 3장 21절” 의 “태초의 옷의 기원”에 대한 철학적인 의미가 담겨있다</IntroP>
                <SignDiv>
                    <p>패션 디자이너</p>
                    <img style={{width:120,marginLeft:50}}src={sign} />
                </SignDiv>
                <ProfileWrapper>
                    <div>
                        <img src={profileImg1} />
                        <div className="profileIntroP">
                            <p style={{fontSize:30}}>윤종규</p>
                            <p style={{fontSize:15,color:'RGB(200,200,200)',marginTop:10}}>The Master of Draping", Art Director JongKyu Yoon</p>
                            <br/><br/>
                            <p style={{fontSize:18}}>
                                 자연에 자연의 법칙이 있듯, 사람이 살아가기 위해서는 자연과 소통하며<br/> 살아가야 한다는 철학을 가지고 있다.<br/>
                                한 인간이 탄생하고 죽기까지는 존재본연의 뜻이 있다.<br/>
                                나의 작품은 자연의 선, 자연에서 나오는 색상, 문양을 통해 앞서 말한 의미를 <br/>풀어내고자 한다.<br/>
                                한점 한점 의미를 부여하며 정성들여 만든  작품들 안에서, <br/>인간과 자연의 공존함을 발견하길 바란다.<br/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={profileImg2} />
                        <img src={profileImg3} />
                        <img src={profileImg4} />
                    </div>
                </ProfileWrapper>
                <br/><br/><br/><br/>
                <BoldText>
                    <div style={{backgroundColor:'black',width:5,height:22}} />
                    <p>EXHIBITIONS</p>
                </BoldText>
                <br/><br/>
                <TextList>
                    <div>
                        <p>2020</p>
                    </div>
                    <div>
                        <p>마이크로소프트사 선정 퓨처데이즈 “ 시간의 공간 프로젝트 은” 의상 기획/디자인/제작</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2013-2015</p>
                    </div>
                    <div>
                        <p>Karts 뮤지컬 의상 및 무대 의상 기획/디자인/제작</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2013</p>
                    </div>
                    <div>
                        <p>북경 초재전 (뉴욕 스페이스 전시)</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2010-2012</p>
                    </div>
                    <div>
                        <p>한국화 구상회 전시회</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>1998-2008</p>
                    </div>
                    <div>
                        <p>일본 KOSTA 뮤지컬 의상 및 무대 이상 기획/디자인/제작</p>
                    </div>
                </TextList>
                <br/><br/><br/><br/>
                <BoldText>
                    <div style={{backgroundColor:'black',width:5,height:22}} />
                    <p>PRIZES</p>
                </BoldText>
                <br/><br/>
                <TextList>
                    <div>
                        <p>2016</p>
                    </div>
                    <div>
                        <p>Miss Asia Pacific International 이브닝 드레스 의상 부분 1등 수상</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2011</p>
                    </div>
                    <div>
                        <p>대한민국 소치 미술대전 특선</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2009-2010</p>
                    </div>
                    <div>
                        <p>대한민국 남농 미술대전 입상,특선</p>
                    </div>
                </TextList>
                <br/><br/><br/><br/>
                <BoldText>
                    <div style={{backgroundColor:'black',width:5,height:22}} />
                    <p>HISTORY OF JOHN 3:21</p>
                </BoldText>
                <br/><br/>
                <TextList>
                    <div>
                        <p>2021</p>
                    </div>
                    <div>
                        <p>하이서울쇼룸 협약</p>
                        <p>네이버 디자이너윈도 입점</p>
                        <p>이상봉, 잇미샤, 솔레지아, 블루페퍼, 로엠 프로모션 등</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2020</p>
                    </div>
                    <div>
                        <p>디자이너 브랜드 프로모션 (루비나, 오은환 등 다수)</p>
                        <p>마이크로소프트사 선정 퓨처데이즈 "시간의공간 프로젝트 은" 의상 제작</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2019</p>
                    </div>
                    <div>
                        <p>한국 귀국 후 국내 활동 (W9, 미샤 등 프로모션)</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2018</p>
                    </div>
                    <div>
                        <p>서울 스토리 패션쇼 반포 세빛섬</p>
                        <p>슈퍼광고모델콘테스트 특별 심사위원</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2017</p>
                    </div>
                    <div>
                        <p>주욱 미샤 아트 디렉터</p>
                        <p>서울패션위크 17 F/W(OFF-SHOW)</p>
                        <p>CFDK 중국 광저우 지사장 역임</p>
                        <p>광저우 패션 위크 18 S/S</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2016</p>
                    </div>
                    <div>
                        <p>벤쿠버패션위크 16 F/W 한국 대표로 참가</p>
                        <p>아시아모델 초대 패션쇼 EVENING DRESS</p>
                        <p>심천국제패션브랜드페어 초대쇼</p>
                        <p>China International Fashion Brand Fair-Shenzhen</p>
                        <p>서울패션위크 17 S/S (OFF-SHOW)</p>
                        <p>미스 아시아 퍼시픽 인터내셔널 이브닝드레스 의상 부분 1등 수상</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2015</p>
                    </div>
                    <div>
                        <p>광저우 JOHN&3:21 브랜드 런칭, 샵 오픈</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2014</p>
                    </div>
                    <div>
                        <p>중국 스카우트 제안, 중국 진출, 해외 활동 시작</p>
                    </div>
                </TextList>
                <TextList>
                    <div>
                        <p>2013</p>
                    </div>
                    <div>
                        <p>JOHN&3:21 런칭</p>
                        <p>롯데 피트인 샵 입점 - Yoon Jong Kyu - </p>
                        <p>트렌디 단독패션쇼 (CFDK 오픈 런웨이)</p>
                    </div>
                </TextList>
                
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Container>
        </>
    )
};

export default Profile;