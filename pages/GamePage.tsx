import React, { useContext, useState } from "react";
import Draggable from "react-draggable";
import { AppContext } from "../Context";
import {
  answerField,
  answerStyle1,
  answerStyle2,
  Arrow,
} from "../public/Elements";
import { bgCoinL, bgCoinR } from "../public/CoinsSVG";
import styled from "@emotion/styled";
import WinPage from "./WinPage";

function GamePage(props: any) {
  const nodeRef = React.useRef(null);
  const { amount, values, sort, winPage, win } = useContext(AppContext);

  const { amountCoins, answerCheck, amountCircles } = props;

  const [position, setPosition] = useState([
    [62, 233],
    [265, 133],
    [398, 283],
    [514, 138],
    [895, 240],
  ]);
  const [dis, setDis] = useState([false, false, false, false, false]);

  const [winChecker, setWinChecker] = useState<string[]>([]);

  let valuesMap: string = "";
  switch (values) {
    case 1:
      valuesMap = "A";
      break;
    case "2":
      valuesMap = "9";
      break;

    case "3":
      valuesMap = "19";
      break;

    case "4":
      valuesMap = "50";
      break;

    case "5":
      valuesMap = "99";
      break;

    case "6":
      valuesMap = "999";
      break;

    default:
      break;
  }

  const GamePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: grey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #342d3f;
  `;

  const CoinsField = styled.div`
    width: 100%;
    height: 100%;
  `;

  const AnswerField = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const AnswerCircles = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 894px;
    height: 100%;
    display: flex;
    flex-gap: 4px;
    justify-content: space-evenly;
    align-items: center;
  `;

  const AnswerArrow = styled.div`
    position: absolute;
    top: -35%;
    ${sort === "Decr" ? "right: 10px;" : "left: 10px;"}
    ${sort === "Incr" ? "transform: rotate(180deg);" : ""}
  `;
  const ArrowText = styled.div`
    position: absolute;
    top: -30%;
    ${sort === "Incr" ? "left: 2%;" : "right: 2%;"}
    color: white;
    font-size: 36px;
    font-weight: 700;
    z-index: 5;
    text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
      -1px -1px #000, 1px -1px #000, -1px 1px #000;
  `;
  const CoinPos = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    z-index: 10;

    p {
      position: absolute;
      color: white;
      text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
        1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
      font-size: 56px;
    }
  `;

  const CoinText = styled.p`
    height: 100%;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const AnswerStyle1 = styled.div`
    position: absolute;
    height: fit-content;
    padding: 0;
    margin: 0;
    bottom: 20%;
    left: 0.3%;
  `;
  const AnswerStyle2 = styled.div`
    position: absolute;
    height: fit-content;
    padding: 0;
    margin: 0;
    top: 20%;
    right: 0.3%;
  `;

  const BgCoin1 = styled.div`
    position: absolute;
    left: 0;
    top: 0;
  `;

  const BgCoin2 = styled.div`
    position: absolute;
    right: 0;
    top: 0;
  `;

  const stopHandler = (e: any, pos: number) => {
    const target = e.target as HTMLInputElement;
    let el = target.innerHTML;

    if (el.length === 1 || el.length <= 4) {
      const elInd = answerCheck.indexOf(+el ? +el : el) + 1;

      const minX =
        (document.getElementsByClassName(`circle${elInd}`)[0] as HTMLElement)
          .offsetLeft +
        (window.innerWidth -
          (document.getElementById("answerWidth") as HTMLElement).clientWidth) /
          2;
      const maxX = minX + 120;

      const minY =
        (document.getElementsByClassName(`circle${elInd}`)[0] as HTMLElement)
          .offsetHeight +
        (document.getElementById("coinsField") as HTMLElement).clientHeight -
        60;
      const maxY = minY + 120;

      if (
        e.clientX > minX &&
        e.clientX < maxX &&
        e.clientY > minY &&
        e.clientY < maxY
      ) {
        setWinChecker([...winChecker, "ok"]);
        target.parentElement!.parentElement!.disabled = true;
        setDis(dis.map((el, ind) => (ind === pos ? (el = true) : (el = el))));
        setPosition(
          position.map((el, ind) =>
            ind === pos ? (el = [minX - 10, minY - 40]) : (el = el)
          )
        );
      }
    }
  };
  if (winChecker.length === amount) {
    win();
  }

  return (
    <GamePageContainer id="field">
      <BgCoin1>{bgCoinL}</BgCoin1>
      <BgCoin2>{bgCoinR}</BgCoin2>
      <CoinsField id="coinsField">
        {amountCoins.map((el: any, pos: number) =>
          pos < amount ? (
            <Draggable
              disabled={dis[pos]}
              handle={`#coin${pos + 1}`}
              nodeRef={nodeRef}
              position={
                position === null
                  ? { x: 0, y: 0 }
                  : { x: position[pos][0], y: position[pos][1] }
              }
              onStop={(e) => stopHandler(e, pos)}
            >
              <CoinPos ref={nodeRef} id={`coin${pos + 1}`} data-state={pos + 1}>
                {el[0]}
                {<CoinText id={`coinInner${pos + 1}`}>{el[1]}</CoinText>}
              </CoinPos>
            </Draggable>
          ) : (
            ""
          )
        )}
      </CoinsField>
      <AnswerField>
        <ArrowText>
          {sort === "Decr" ? "Decreasing" : "Increasing"}
        </ArrowText>
        <AnswerArrow> {Arrow} </AnswerArrow>
        {answerField}
        <AnswerCircles id="answerWidth">
          {amountCircles.map((el: any, pos: number) => {
            return (
              <div className={`circle${pos + 1}`} data-ind={pos + 1}>
                {el}
              </div>
            );
          })}
          <AnswerStyle1> {answerStyle1} </AnswerStyle1>
          <AnswerStyle2> {answerStyle2} </AnswerStyle2>
        </AnswerCircles>
      </AnswerField>
      {winPage && <WinPage />}
    </GamePageContainer>
  );
}

export default GamePage;
