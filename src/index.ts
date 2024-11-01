import * as readline from "readline";
import { everyCombination } from "./everyCombination";
import { play } from "./play";
import { Config } from "./types";

const config: Config = {
  jackpotBonus: 3000,
  jackpotNegativeBonus: -139,
  bet: 2,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter integer number of spins or -1 for every combination: ",
  (spinsArg) => {
    const numberOfSpins = Math.round(Number(spinsArg));
    if (!numberOfSpins || numberOfSpins < -1)
      throw new Error("Enter valid integer");
    const { totalWin, coinIn, lost, rtp, spins, wonBack } =
      numberOfSpins === -1
        ? everyCombination(config)
        : play(config, numberOfSpins);

    console.log(`---------------------------------------`);
    console.log(`YOU WON TOTAL: ${totalWin}!`);
    console.log(`---------------------------------------`);
    console.log(`Total spins: ${spins}`);
    console.log(`coin in: ${coinIn} $`);
    console.log(`balance: ${wonBack} $`);
    console.log(`RTP: ${rtp * 100} %`);
    console.log(`you lost: ${lost} $`);

    rl.close();
  }
);
