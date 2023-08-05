/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oCabbage],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oRaZombie, oFlagZombie],
  backgroundImage: 'images/interface/backgroundEgypt.jpg',
  SunNum: 150,
  LevelName: $__language_Array__["5326d563772142e6c9458623ef54a639"],
  LvlEName: 2,
  CanSelectCard: 0,
  SummonZombieArea:[35,105,200,375],
  LoadMusic: "Egypt/Bgm_Egypt_Ready",
  StartGameMusic: "Egypt/Bgm_Egypt_Fight",
  FixedProps: 'disabled',
}, {
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 2, 3], [oBucketheadZombie, 1, 6], [oRaZombie, 1, 4], [oFlagZombie, 0, 9, [9]]],
  FlagNum: 9,
  FlagToSumNum: {
    a1: [3, 5],
    a2: [1, 3, 5]
  }
});