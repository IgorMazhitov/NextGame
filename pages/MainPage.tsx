import React, { ReactNode, useContext } from "react";
import { AppContext } from "../Context";
import GamePage from "./GamePage";
import StartPage from "./StartPage";
import { coin1, coin2, coin3, coin4, coin5 } from "../public/CoinsSVG";
import { answerCircle } from "../public/Elements";

const MainPage = () => {
  const { startPage, gamePage, amount, values, sort } = useContext(AppContext);
  const amountCoins: Array<Array<ReactNode>> = [[coin1], [coin2], [coin3], [coin4], [coin5]];

  let amountCircles = [];
  for (let i = 0; i < +amount; i++) {
    amountCircles.push(answerCircle);
  }

  const alphabet: string[] = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
  ];

  let answerCheck: Array<string | number> = [];
  for (let i: number = 0; i < +amount; i++) {
    if (values === 1) {
      let ind: number = Math.floor(Math.random() * 33 - i);
      answerCheck.push(alphabet[ind]);
      amountCoins[i]!.push(alphabet.splice(ind, 1));
      const sorter = new Intl.Collator("ru-RU", { usage: "sort" });
      answerCheck.sort(function (a: any, b: any) {
        return sorter.compare(a, b);
      });
    } else {
      let num: number = 0;

      if (values === "2") {
        num = Math.floor(Math.random() * 10);
      }
      if (values === "3") {
        num = Math.floor(Math.random() * 20);
      }
      if (values === "4") {
        num = Math.floor(Math.random() * 50);
      }
      if (values === "5") {
        num = Math.floor(Math.random() * 100);
      }
      if (values === "6") {
        num = Math.floor(Math.random() * 1000);
      }

      answerCheck.push(num);
      if (
        answerCheck.filter((el, pos) => answerCheck.indexOf(el) === pos)
          .length !== answerCheck.length ||
        answerCheck[answerCheck.length - 1] === 0
      ) {
        let del = answerCheck.pop();
        i -= 1;
        continue;
      }
      amountCoins[i].push(num);
      answerCheck.sort((a: any, b: any) => a - b);
    }
  }

  if (sort === "Decr") {
    answerCheck.reverse();
  }

  return (
    <>
      {startPage && <StartPage />}

      {gamePage && (
        <GamePage
          answerCheck={answerCheck}
          amountCoins={amountCoins}
          amountCircles={amountCircles}
        />
      )}
    </>
  );
};

export default MainPage;
