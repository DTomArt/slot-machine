export enum REEL {
  SingleBar = "SINGLE_BAR",
  DoubleBar = "DOUBLE_BAR",
  TripleBar = "TRIPLE_BAR",
  BlackGold = "BLACK_GOLD",
  Blank = "BLANK",
}

export interface Results {
  totalWin: number;
  spins: number;
  coinIn: number;
  wonBack: number;
  rtp: number;
  lost: number;
}

export interface DetermineWinResult {
  win: number;
  jackpot: boolean;
  jackpotNegative: boolean;
}

export interface Config {
  jackpotBonus: number;
  jackpotNegativeBonus: number;
  bet: number;
}
