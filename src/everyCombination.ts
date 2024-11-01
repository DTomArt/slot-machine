import { determineWin } from "./determineWin";
import { getReel1, getReel2, getReel3 } from "./reels";
import * as fs from "fs";
import { Config, Results } from "./types";

export const everyCombination = (config: Config): Results => {
  let totalWin = 0;
  let coinIn = 0;
  let spins = 0;
  let virtualReel1 = 1;
  let virtualReel2 = 1;
  let virtualReel3 = 1;
  let text = "";
  let jackpotTriggered = false;
  let jackpotNegativeTriggered = false;

  while (virtualReel1 < 73) {
    spins++;
    coinIn += config.bet;

    // convert virtual reel to physical reel
    const r1 = getReel1(virtualReel1);
    const r2 = getReel2(virtualReel2);
    const r3 = getReel3(virtualReel3);

    const {win, jackpot, jackpotNegative} = determineWin(r1, r2, r3, config.bet);
    totalWin += win;
    if(jackpot) jackpotTriggered = jackpot
    if(jackpotNegative) jackpotNegativeTriggered = jackpotNegativeTriggered

    text = text.concat(`${virtualReel1} ${virtualReel2} ${virtualReel3}\n`);
    text = text.concat(`${r1} ${r2} ${r3}\n`);
    text = text.concat(`you won ${win}$\n\n`);

    virtualReel3++;
    if (virtualReel3 === 73) {
      virtualReel3 = 1;
      virtualReel2++;
    }

    if (virtualReel2 === 73) {
      virtualReel3 = 1;
      virtualReel2 = 1;
      virtualReel1++;
    }
  }

  fs.writeFile("src/reels.txt", text, function (err) {
    if (err) throw err;
  });

  if(jackpotTriggered){
    totalWin += config.jackpotBonus
  }
  if(jackpotNegativeTriggered){
    totalWin += config.jackpotNegativeBonus
  }
  const wonBack = totalWin;
  const rtp = totalWin / coinIn;
  const lost = totalWin - coinIn < 0 ? Math.abs(totalWin - coinIn) : 0;

  return { totalWin, spins, coinIn, rtp, lost, wonBack };
};
