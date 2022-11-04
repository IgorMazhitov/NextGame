import React, { useContext } from "react";
import { AppContext } from "../../Context";
import styled from "@emotion/styled";

const RangeInputs = (props: any) => {
  const { amount, newAmount, values, newValues } = useContext(AppContext);

  const InputBox = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    min-width: ${props.type === "amount" ? 370 + "px" : 530 + "px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const InputAmount = styled.input`
    min-width: ${props.type === "amount" ? 370 + "px" : 530 + "px"};
    max-width: fit-content;
    -webkit-appearance: none;
  `;

  const InputLabel = styled.label`
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  `;

  const InputData = styled.datalist`
    width: ${props.type === "amount" ? 370 + "px" : 530 + "px"};
    display: flex;
    justify-content: space-between;
  `;

  const InputOption = styled.option`
    display: inline;
    height: 30px;
    color: black;
    font-size: 24px;
    font-weight: 700;
  `;

  return (
    <>
      <InputBox>
        <InputLabel htmlFor="Amount" style={{ color: "black" }}>
          {props.type === "amount" ? "Item's amount" : "Item's values"}
        </InputLabel>
        <InputData id="amountList">
          <InputOption
            value={props.type === "amount" ? "2" : "A"}
            label={props.type === "amount" ? "2" : "A"}
          />
          <InputOption
            value={props.type === "amount" ? "3" : "9"}
            label={props.type === "amount" ? "3" : "9"}
          />
          <InputOption
            value={props.type === "amount" ? "4" : "19"}
            label={props.type === "amount" ? "4" : "19"}
          />
          <InputOption
            value={props.type === "amount" ? "5" : "50"}
            label={props.type === "amount" ? "5" : "50"}
          />
          {props.type !== "amount" ? <InputOption value="99" label="99" /> : ""}
          {props.type !== "amount" ? (
            <InputOption value="999" label="999" />
          ) : (
            ""
          )}
        </InputData>
        <InputAmount
          type="range"
          min={props.type === "amount" ? 2 : 1}
          max={props.type === "amount" ? 5 : 6}
          step="1"
          name="Amount"
          list="amountList"
          value={props.type === "amount" ? amount : values}
          onChange={(e) =>
            props.type === "amount"
              ? newAmount(+e.target.value)
              : newValues(e.target.value)
          }
        />
      </InputBox>
    </>
  );
};

export default RangeInputs;
