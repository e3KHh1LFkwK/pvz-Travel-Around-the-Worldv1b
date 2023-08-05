/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oCabbage, oRepeater, oCherryBomb, oLilyPad],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie],
  SunNum: 150,
  LF: [0, 1, 2, 2, 2, 1],
  LevelName: $__language_Array__["神秘埃及--第?天"],
  LvlEName: 8,
  backgroundImage: "images/interface/backgroundLostCityPool.jpg",
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess(a) {
    CustomSpecial(oPeashooterleft, 2, 6);
    CustomSpecial(oPeashooterleft, 3, 8);
    CustomSpecial(oPeashooterleft, 4, 7);
    oSym.addTask(90, a);
  },
}, 
{
  AZ: [[oZombie, 4, 2], [oConeheadZombie, 4, 1], [oBucketheadZombie, 1, 7]],
  FlagNum: 9,
  FlagToSumNum: {
    a1: [3, 5, 8],
    a2: [1, 2, 3, 5]
  }
});