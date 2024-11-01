import { REEL } from "./types";

export const getReel1 = (r1: number): REEL => {
    if (r1 > 0 && r1 < 17) {
      return REEL.SingleBar;
    } else if (r1 < 30) {
      return REEL.DoubleBar;
    } else if (r1 < 36) {
      return REEL.TripleBar;
    } else if (r1 === 36) {
      return REEL.BlackGold;
    } else if (r1 <= 72) return REEL.Blank;
    else throw new Error("Cannot determine reel1");
  };
  
 export const getReel2 = (r2: number): REEL => {
    if (r2 > 0 && r2 < 19) {
      return REEL.SingleBar;
    } else if (r2 < 26) {
      return REEL.DoubleBar;
    } else if (r2 < 30) {
      return REEL.TripleBar;
    } else if (r2 === 30) {
      return REEL.BlackGold;
    } else if (r2 <= 72) return REEL.Blank;
    else throw new Error("Cannot determine reel2");
  };
  
  export  const getReel3 = (r3: number): REEL => {
    if (r3 > 0 && r3 < 21) {
      return REEL.SingleBar;
    } else if (r3 < 25) {
      return REEL.DoubleBar;
    } else if (r3 < 28) {
      return REEL.TripleBar;
    } else if (r3 === 28) {
      return REEL.BlackGold;
    } else if (r3 <= 72) return REEL.Blank;
    else throw new Error("Cannot determine reel3");
  };