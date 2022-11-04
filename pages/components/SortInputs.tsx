import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AppContext } from "../../Context";
import { type } from "os";
import { listeners } from "process";

const SortInputs = () => {
  const { newSort, incr, decr, styleDecr, styleIncr } =
    useContext(AppContext);

  const ButtonsBox = styled.div`
    margin-top: 50px;
    width: 550px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Button = styled.button`
    cursor: pointer;
    width: 271px;
    height: 45px;
    border-radius: 20px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: black;
    font-weight: 700;
  `;

  const sortIncr = (event: React.MouseEvent) => {
    const target = event.target as HTMLInputElement;
    incr();
    const inter = target.value;
    newSort(inter);
  };

  const sortDecr = (event: React.MouseEvent) => {
    const target = event.target as HTMLInputElement;
    decr();
    const inter = target.value;
    newSort(inter);
  };

  return (
    <ButtonsBox>
      <Button
        style={{ backgroundColor: styleIncr }}
        onClick={(e) => sortIncr(e)}
        value="Incr"
      >
        Increasing
      </Button>
      <Button
        style={{ backgroundColor: styleDecr }}
        onClick={(e) => sortDecr(e)}
        value="Decr"
      >
        Decreasing
      </Button>
    </ButtonsBox>
  );
};

export default SortInputs;
