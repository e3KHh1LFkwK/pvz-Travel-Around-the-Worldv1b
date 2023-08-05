/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oCabbage, oRepeater, oCherryBomb],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oJetpackZombie],
  SunNum: 150,
  LevelName:  " ",
  LvlEName: 1,
  backgroundImage: "images/interface/backgroundFuture.jpg",
  SummonZombieArea:[35,105,200,375],
  LoadMusic: "Future/Bgm_Future_Ready",
  StartGameMusic: "Future/Bgm_Future_Fight",
  FixedProps: 'disabled',
  AudioArr: ["Future/Bgm_Future_Ready_Start"],
  LoadAccess(a) {
    CustomSpecial(oLinktile_01, 1, 2);
    CustomSpecial(oLinktile_01, 3, 2);
    CustomSpecial(oLinktile_01, 5, 2);
    oSym.addTask(10, a);
  },
}, 
{
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 4, 4], [oBucketheadZombie, 1, 7], [oJetpackZombie, 1, 2]],
  FlagNum: 9,
  FlagToSumNum: {
    a1: [3, 5, 8],
    a2: [1, 2, 3, 5]
  },
  FlagToEnd() {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick() {
        GetWin(this, Exitlevel(oS.Lvl, true));
      }
    });
  }
});