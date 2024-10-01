import styled from "styled-components";

const Aside = () => {
  // 현재 날짜
  const today = new Date();

  // 원하는 형식
  const formatted = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;

  return (
    <Wrapper>
      <Overlay />
      <TextWrap>
        <Day>{formatted}</Day>
        <>
          <Title>Coin Top 100!</Title>
          <Desc>
            Coinpaprika API를 이용하여
            <br />
            최신 암호화폐 정보를 조회합니다.
          </Desc>
        </>
      </TextWrap>
    </Wrapper>
  );
};

export default Aside;

const Wrapper = styled.aside`
  width: 32%;
  height: 100%;
  background-image: url("/public/side_1.avif");
  background-size: cover;
  position: relative;
  border-radius: 50px 0px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px 0px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const TextWrap = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 2rem;
`;

const Day = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: rgba(245, 187, 78, 0.966);
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  margin-bottom: 1.6rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: rgba(201, 166, 102, 0.7);
`;

const Desc = styled.p`
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: rgba(255, 255, 255, 0.5);
`;
