# Slot Machine Simulation

## General idea
This is a console application for simulating behaviour of a 72x72x72 reel slot machine written fully in Typescript.
Program prompts user for number of spins. If you insert '-1' then the simulation for all possible combinations will start.
Regardless of simulation mode, the results of simulation will be visible in newly created file after execution 'src/reels.txt' and in console you will get summary of your simulation. 

All possible symbols to be drawn on slot machine(3 in one spin):
- SINGLE_BAR,
- DOUBLE_BAR,
- TRIPLE_BAR,
- BLACK_GOLD,
- BLANK.

## How to run?
Install packages using `npm install` and then just use script `npm run start`.

## Config
You can configure the program changing 'config' object in 'src/index.ts' and changing virtual reel numbers range in 'src/reels.ts'. Default is based on actual machine slot documentation.

## Run example and explanation of results
Example of result from the program is following:
```
Enter integer number of spins or -1 for every combination: 100      <-inserted 100 for 100 spins
---------------------------------------
YOU WON TOTAL: 132!     <- total win from your game
---------------------------------------
Total spins: 100    <- confirmation of spins executed
coin in: 200 $      <- amount of money inserted to the machine 
                        (you can change current bet at src/index.ts in config, default is 2 dollars)
balance: -68 $      <- amount that you won back in game (totalWin - coinIn)
RTP: 66 %           <- percent of the amount that machine slot gave you back in win
you lost: 68 $      <- amount that you lost playing
```

Example of 2 spins in 'src/reels.txt' file created after execution:
```
28 2 56                         <- numbers randomly drawn on virtual reel
DOUBLE_BAR SINGLE_BAR BLANK     <- virtual numbers converted to slot machine reel
you won 0$                      <- amount won

47 70 3
BLANK BLANK SINGLE_BAR
you won 0$
```


*Implementation based on documentation of an actual machine slot: https://web.archive.org/web/20051215075607/http://ballygaming.com:80/media_library/pcsheets/6999.pdf*
*and also great explanation video from Vegas Education on YouTube: https://www.youtube.com/watch?v=AI8LkeIR6_8*