/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchPrices } from "../api/api";
import { PriceInterface } from "../api/interface";
import Side from "../components/Side";
import SearchBar from "../components/SearchBar";
import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import CoinTable from "../components/CoinTable";
import Loading from "../components/Loading";

export default function Main() {
  // react-query : list
  const { isLoading, data } = useQuery<PriceInterface[]>(
    "allPrices",
    fetchPrices
  );

  // addFavorites
  // const [coins, setCoins] = useState<PriceInterface[]>([]);
  const [keyword, setKeyword] = useState("");

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    console.log(e.target.value);
  };

  return (
    <MainContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Side />
          <CoinTableWrap>
            <HeaderWrap>
              <BookmarkBtn size={20} />
              <SearchBar keyword={keyword} handleKeyword={handleKeyword} />
            </HeaderWrap>
            <CoinTable coins={data} />
          </CoinTableWrap>
        </>
      )}
    </MainContainer>
  );
}

const BookmarkBtn = styled(FaRegStar)`
  cursor: pointer;
`;

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

const CoinTableWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 68%;
  gap: 1rem;
  padding: 2rem;
`;

const HeaderWrap = styled.header`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 0.7rem;
`;
