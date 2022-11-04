import styled from "@emotion/styled";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context";
import RangeInputs from "./components/RangeInputs";
import SortInputs from "./components/SortInputs";

function StartPage() {

  const { submit, startPage } = useContext(AppContext)

  const Container = styled.div`

    background: #342D3F;
    position: relative;
    width: 100vw;
    height: 100vh;
  `;

  const StartOptionsBox = styled.div`

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        background: transparent;
        width: 700px;
        height: 660px;
        border-radius: 50px; 
        border: 20px solid transparent; 
        background: linear-gradient(45deg,rgba(127, 117, 240, 1),rgba(16, 31, 50, 1)) border-box; 
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
    `;

  const StartOptionsWhite = styled.div`
  
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 40px;

        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

  `

  const SubmitButton = styled.button`

        cursor: pointer;
        margin-top: 50px;
        width: 260px;
        height: 60px;
        border: none;
        border-radius: 20px;
        background-color: #38DF7A;

        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

        font-size: 32px;
        font-weight: 700;
  
  `

  return (
    <Container>
      <StartOptionsBox>
        <StartOptionsWhite>

          <RangeInputs type="amount" />
          <RangeInputs type="values" />
          <SortInputs />
          <SubmitButton onClick={e => submit()}> Play </SubmitButton>
          
        </StartOptionsWhite>
      </StartOptionsBox>
    </Container>
  );
}

export default StartPage;
