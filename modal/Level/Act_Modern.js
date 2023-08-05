/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oCabbage, oBonkChoy, oRepeater, oCherryBomb, oSnowPea, oSunShroom, oPuffShroom, oFumeShroom, oFlowerPot, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oImp, oNewspaperZombie, oBrickZombie, oRaZombie, oFlagZombie, oCavalryZombie, oJetpackZombie],
  backgroundImage: 'images/interface/backgroundModern.jpg',
  SunNum: 350,
  LevelName: $__language_Array__[" "],
  LvlEName: 233,
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
  FixedProps: 'disabled',
}, 
{
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 4, 1], [oBucketheadZombie, 1, 7], [oImp, 2, 1], [oNewspaperZombie, 1, 1], [oPharaohZombie, 1, 8], [oRaZombie, 1, 3], [oBrickZombie, 1, 9], [oCavalryZombie, 1, 2], [oJetpackZombie, 1, 11], [oFlagZombie, 0, 15, [15]]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [2, 6, 8, 10, 11, 12, 13, 14],
    a2: [1, 2, 4, 8, 16, 25, 35, 45, 50]
  },
  FlagToEnd() {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick() {
        GetWin(this, Exitlevel(oS.Lvl, true));
      }
    });
  }
});