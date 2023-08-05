/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oWallNut, oPotatoMine, oRepeater, oCabbage, oSnowPea],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie],
  LoadAccess: function (a) {
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 9; j++) {
      if (j < 6) {
      } else if (j < 9) {
        let zombie = new oSculpture();
        oP.AppearUP([zombie.CustomBirth(i, j, 0, 0, 0)], [zombie], 1, 0);
      } else {
      }
    }
  }

  oSym.addTask(30, a, [0]);
},
  LevelName:"传送带",
  CanSelectCard: 0,
  StaticCard: 0,
  backgroundImage: "images/interface/backgroundEgypt.jpg",
  LoadMusic: "Egypt/Bgm_Egypt_UB_Ready",
  StartGameMusic: "Egypt/Bgm_Egypt_UB",
  FixedProps: 'disabled',
  SummonZombieArea:[25,105,200,475],
  StartGame: oMiniGames.ConveyorBelt,
},
 {
  AZ: [[oZombie, 2, 1], [oBucketheadZombie, 2, 3], [oConeheadZombie, 2, 3]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [2, 3, 4],
    a2: [2, 4, 6, 10]
  },
  FlagToEnd() {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick() {
        GetWin(this, Exitlevel(oS.Lvl, true));
      }
    });
  }
});