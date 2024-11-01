import { DetermineWinResult, REEL } from "./types";

export const determineWin = (
  r1: REEL,
  r2: REEL,
  r3: REEL,
  bet: number
): DetermineWinResult => {
  let win = 0;
  if (r1 === REEL.BlackGold || r2 === REEL.BlackGold || r3 === REEL.BlackGold)
    win = 2;

  if (
    (r1 === REEL.BlackGold && r2 === REEL.BlackGold) ||
    (r1 === REEL.BlackGold && r3 === REEL.BlackGold) ||
    (r2 === REEL.BlackGold && r3 === REEL.BlackGold)
  )
    win = 5;

  if (
    r1 === REEL.BlackGold &&
    (r2 === REEL.SingleBar || r2 === REEL.DoubleBar || r2 === REEL.TripleBar) &&
    (r3 === REEL.SingleBar || r3 === REEL.DoubleBar || r3 === REEL.TripleBar)
  )
    win = 7;
  if (
    (r1 == REEL.SingleBar || r1 == REEL.DoubleBar || r1 == REEL.TripleBar) &&
    r2 === REEL.BlackGold &&
    (r3 == REEL.SingleBar || r3 == REEL.DoubleBar || r3 == REEL.TripleBar)
  )
    win = 7;
  if (
    (r1 == REEL.SingleBar || r1 == REEL.DoubleBar || r1 == REEL.TripleBar) &&
    (r2 === REEL.SingleBar || r2 === REEL.DoubleBar || r2 === REEL.TripleBar) &&
    r3 === REEL.BlackGold
  )
    win = 7;

  if (
    (r1 == REEL.SingleBar || r1 == REEL.DoubleBar || r1 == REEL.TripleBar) &&
    (r2 === REEL.SingleBar || r2 === REEL.DoubleBar || r2 === REEL.TripleBar) &&
    (r3 == REEL.SingleBar || r3 == REEL.DoubleBar || r3 == REEL.TripleBar)
  )
    win = 5;

  if (r1 === REEL.BlackGold && r2 === REEL.SingleBar && r3 === REEL.SingleBar)
    win = 22;
  if (r1 === REEL.SingleBar && r2 === REEL.BlackGold && r3 === REEL.SingleBar)
    win = 22;
  if (r1 === REEL.SingleBar && r2 === REEL.SingleBar && r3 === REEL.BlackGold)
    win = 22;

  if (r1 === REEL.BlackGold && r2 === REEL.BlackGold && r3 === REEL.SingleBar)
    win = 25;
  if (r1 === REEL.BlackGold && r2 === REEL.SingleBar && r3 === REEL.BlackGold)
    win = 25;
  if (r1 === REEL.SingleBar && r2 === REEL.BlackGold && r3 === REEL.BlackGold)
    win = 25;

  if (r1 === REEL.SingleBar && r2 === REEL.SingleBar && r3 === REEL.SingleBar)
    win = 20;

  if (r1 === REEL.BlackGold && r2 === REEL.DoubleBar && r3 === REEL.DoubleBar)
    win = 102;
  if (r1 === REEL.DoubleBar && r2 === REEL.BlackGold && r3 === REEL.DoubleBar)
    win = 102;
  if (r1 === REEL.DoubleBar && r2 === REEL.DoubleBar && r3 === REEL.BlackGold)
    win = 102;

  if (r1 === REEL.BlackGold && r2 === REEL.BlackGold && r3 === REEL.DoubleBar)
    win = 105;
  if (r1 === REEL.BlackGold && r2 === REEL.DoubleBar && r3 === REEL.BlackGold)
    win = 105;
  if (r1 === REEL.DoubleBar && r2 === REEL.BlackGold && r3 === REEL.BlackGold)
    win = 105;

  if (r1 === REEL.DoubleBar && r2 === REEL.DoubleBar && r3 === REEL.DoubleBar)
    win = 100;

  if (r1 === REEL.BlackGold && r2 === REEL.TripleBar && r3 === REEL.TripleBar)
    win = 117;
  if (r1 === REEL.TripleBar && r2 === REEL.BlackGold && r3 === REEL.TripleBar)
    win = 117;
  if (r1 === REEL.TripleBar && r2 === REEL.TripleBar && r3 === REEL.BlackGold)
    win = 117;

  if (r1 === REEL.BlackGold && r2 === REEL.BlackGold && r3 === REEL.TripleBar)
    win = 120;
  if (r1 === REEL.BlackGold && r2 === REEL.TripleBar && r3 === REEL.BlackGold)
    win = 120;
  if (r1 === REEL.TripleBar && r2 === REEL.BlackGold && r3 === REEL.BlackGold)
    win = 120;

  let jackpotNegative = false
  if (r1 === REEL.TripleBar && r2 === REEL.TripleBar && r3 === REEL.TripleBar){
    jackpotNegative = true;
    win = 115;
  }

  let jackpot = false;
  if (r1 === REEL.BlackGold && r2 === REEL.BlackGold && r3 === REEL.BlackGold) {
    jackpot = true;
    win = 1000;
  }

  return {win: win * bet, jackpot, jackpotNegative};
};
