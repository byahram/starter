/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import { PriceInterface } from "../api/interface";
import { useNavigate } from "react-router-dom";

interface CoinRowInterface {
  coin: PriceInterface;
}

const CoinRow = ({ coin }: CoinRowInterface) => {
  const navigation = useNavigate();
  const gotoDetail = () => {
    navigation(`/${coin.id}`);
  };

  return (
    <Tr>
      <Td align="center">
        <LikedBtn size={20} />
      </Td>
      <Td align="center">{coin.rank}</Td>
      <Td align="left" className="flexbox" onClick={gotoDetail}>
        <img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} />
        <div>
          <p>{coin.name}</p>
          <p className="coin-symbol">{coin.symbol}/KRW</p>
        </div>
      </Td>
      <Td align="right" onClick={gotoDetail}>
        ${coin.quotes.USD.price.toFixed(2)}
      </Td>
      <Td
        align="right"
        className={coin.quotes.USD.percent_change_24h > 0 ? "plus" : "minus"}
        onClick={gotoDetail}
      >
        {coin.quotes.USD.percent_change_24h}%
      </Td>
      <Td align="right" onClick={gotoDetail}>
        {(coin.quotes.USD.volume_24h / 1000000).toFixed()}B
      </Td>
    </Tr>
  );
};

export default CoinRow;

const LikedBtn = styled(FaRegStar)`
  cursor: pointer;
`;

const Tr = styled.tr`
  cursor: pointer;
`;

const Td = styled.td`
  padding: 0.9rem 0;
  text-align: ${({ align }) => align};
  vertical-align: middle;

  img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  &:last-child {
    padding-right: 2rem;
  }

  &.plus {
    color: #c84a31; // red
  }

  &.minus {
    color: #1261c4; // blue
  }

  &.flexbox {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    .coin-symbol {
      font-size: 70%;
      color: #adb5bd;
    }
  }

  &:nth-child(3) {
    flex-direction: row;
  }
`;
