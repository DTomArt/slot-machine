import { determineWin } from "./determineWin";
import { getReel1, getReel2, getReel3 } from "./reels";
import { Config, Results } from "./types";
import * as fs from "fs";

export const play = (config: Config, numberOfSpins: number): Results => {
  let totalWin = 0;
  let coinIn = 0;
  let jackpotTriggered = false;
  let jackpotNegativeTriggered = false;
  let text = "";

  for (let i = 0; i < numberOfSpins; i++) {
    coinIn += config.bet;
    // generate random numbers for reels
    const virtualReel1 = Math.floor(Math.random() * 71 + 1);
    const virtualReel2 = Math.floor(Math.random() * 71 + 1);
    const virtualReel3 = Math.floor(Math.random() * 71 + 1);

    // convert virtual reel to real reel
    const r1 = getReel1(virtualReel1);
    const r2 = getReel2(virtualReel2);
    const r3 = getReel3(virtualReel3);

    const { win, jackpot, jackpotNegative } = determineWin(
      r1,
      r2,
      r3,
      config.bet
    );
    totalWin += win;
    if (jackpot) jackpotTriggered = jackpot;
    if (jackpotNegative) jackpotNegativeTriggered = jackpotNegativeTriggered;

    text = text.concat(`${virtualReel1} ${virtualReel2} ${virtualReel3}\n`);
    text = text.concat(`${r1} ${r2} ${r3}\n`);
    text = text.concat(`you won ${win}$\n\n`);
  }

  fs.writeFile("src/reels.txt", text, function (err) {
    if (err) throw err;
  });

  if (jackpotTriggered) {
    totalWin += config.jackpotBonus;
  }
  if (jackpotNegativeTriggered) {
    totalWin += config.jackpotNegativeBonus;
  }

  const wonBack = totalWin - coinIn;
  const rtp = totalWin / coinIn;
  const lost = Math.abs(totalWin - coinIn);

  return { totalWin, spins: numberOfSpins, coinIn, lost, wonBack, rtp };
};
