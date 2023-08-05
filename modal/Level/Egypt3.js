/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oCabbage, oRepeater],
  ZName: [oZombie, oConeheadZombie, oPharaohZombie, oFlagZombie],
  SunNum: 150,
  LevelName: $__language_Array__["222ae9b39264edd9468ff723a9c8887a"],
  CanSelectCard: 0,  
  backgroundImage: 'images/interface/backgroundEgypt.jpg',
  SummonZombieArea:[35,105,200,375],
  LoadMusic: "Egypt/Bgm_Egypt_Ready",
  StartGameMusic: "Egypt/Bgm_Egypt_Fight",
  FixedProps: 'disabled',
}, {
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 2, 3], [oPharaohZombie, 1, 8], [oFlagZombie, 0, 9, [9]]],
  FlagNum: 9,
  FlagToSumNum: {
    a1: [3, 5, 8],
    a2: [1, 2, 3, 5]
  }
});