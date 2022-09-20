---
layout: post
title: Stat Multipliers
subtitle: Stats raise and lower by 'stages'.
---

It might be pretty obvious when a Pokemon has its Attack raised, its physical attacks do more damage. Understanding that at a glance is nice, but knowing the statistics is even nicer, and surprisingly easy. All stats are raised and lowered in 'stages', instead of by arbitrary percents. Of note: these calculations don't apply to evasion and accuracy.

Usually, the flavortext of a move will tell you how many stages it affects a stat by.
- If it doesn't even mention stats, it probably doesn't affect any stats.
- If it mentions a stat:
  - No prefix usually means a change of 1 stage. 
    - [Power-Up Punch](https://www.serebii.net/attackdex-swsh/power-uppunch.shtml) raises attack by 1 stage.
  - The prefix 'sharply' usually means a change of 2 stages.
    - [Swords Dance](https://www.serebii.net/attackdex-swsh/swordsdance.shtml) raises attack by 2 stages.
  - The rarely seen 'drastically' prefix means a change of 3 stages.
    - [Fell Stinger](https://www.serebii.net/attackdex-swsh/fellstinger.shtml), when it KOs, raises attack by 3 stages.
  - Stats can only be raised or lowered to stage +6 or -6. So when a move says it 'maximizes' a stat, it changes it to stage +6.
    - [Belly Drum](https://www.serebii.net/attackdex-swsh/bellydrum.shtml) sets attack to stage +6.

Numerically:
- How stages affect stats numerically does vary a bit game-by-game, but I'll show the calculations for the most recent games here.
- Stats are multiplied by `( 2 + raised stages ) / 2`, or `2 / ( 2 + lowered stages )` (the raised stat equation flipped).
- In other words, each stage raises a stat by 50%, and lowering stats gives diminishing returns.

If you like tables better:

{: .table .table-striped}
| Stage    | +6    | +5    | +4    | +3    | +2    | +1    |
| -------- | ----- | ----- | ----- | ----- | ----- | ----- |
| Fraction | `8/2` | `7/2` | `6/2` | `5/2` | `4/2` | `3/2` |
| Percent  | 400%  | 350%  | 300%  | 250%  | 200%  | 150%  |
|          | -6    | -5    | -4    | -3    | -2    | -1    |
| Fraction | `2/8` | `2/7` | `2/6` | `2/5` | `2/4` | `2/3` |
| Percent  | 25.0% | 28.6% | 33.3% | 40.0% | 50.0% | 66.6% |
| -------- | ----- | ----- | ----- | ----- | ----- | ----- |

### Sources

- [Stat - Bulbapedia, the community-driven Pokémon encyclopedia](https://bulbapedia.bulbagarden.net/wiki/Stat#Stat_modifiers)
