/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oCabbage, oRepeater, oCherryBomb, oPuffShroom, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oFlagZombie],
  backgroundImage: 'images/interface/backgroundQM2.jpg',
  LF: [0, 1, 1, 1, 1, 1],
  CanSelectCard: 1,
  SunNum: 250,
  Dkind: 0,
  LevelName: "秦始皇陵--第1夜",
  LoadMusic: "Bgm_QM_Ready",
  StartGameMusic: "Bgm_QM_Fight",
  FixedProps: 'disabled',
  LoadAccess: function (a) {
    NewImg('BgMask' + Math['random'](), 'images/interface/backgroundQMMask2.png', 'left:0;top:401px;position:absolute;z-index:23;', EDAll);
    oSym.addTask(90, function () {
      a(0); //移动场景延迟，以免切换场景太快导致玩家不适应
    }, []);
  }
}, {
  AZ: [[oZombie, 2, 1], [oConeheadZombie, 2, 5], [oFlagZombie, 0, 11, [11]]],
  FlagNum: 11,
  FlagToSumNum: {
    a1: [2, 4, 5, 7, 9],
    a2: [1, 2, 5, 8, 10, 13]
  },
  FlagToEnd() {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick() {
        GetWin(this, Exitlevel(oS.Lvl, true));
      }
    });
  }
});