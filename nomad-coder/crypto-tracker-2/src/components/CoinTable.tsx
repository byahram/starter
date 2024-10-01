import styled from "styled-components";
import CoinRow from "./CoinRow";
import { PriceInterface } from "../api/interface";

interface CoinRowInterface {
  coins: PriceInterface[] | undefined;
}

const ColGroup = () => {
  return (
    <colgroup>
      <col width="5%" />
      <col width="10%" />
      <col width="40%" />
      <col width="15%" />
      <col width="15%" />
      <col width="15%" />
    </colgroup>
  );
};

const CoinTable = ({ coins }: CoinRowInterface) => {
  return (
    <>
      <HeadTable>
        <ColGroup />
        <thead>
          <tr>
            <th>관심</th>
            <th>순위</th>
            <th>코인명</th>
            <th>현재가</th>
            <th>변동률(24h)</th>
            <th>거래대금</th>
          </tr>
        </thead>
      </HeadTable>
      <BodyTableWrap>
        <BodyTable>
          <ColGroup />
          <tbody>
            {coins?.map((coin) => (
              <CoinRow coin={coin} />
            ))}
          </tbody>
        </BodyTable>
      </BodyTableWrap>
    </>
  );
};

export default CoinTable;

const HeadTable = styled.table`
  font-weight: 700;
`;

const BodyTableWrap = styled.div`
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(props) => props.theme.bgColor};
  }
`;

const BodyTable = styled.table`
  width: 100%;
`;
