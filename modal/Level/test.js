/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine],
  ZName: [oZombie, oConeheadZombie, oFlagZombie, oRaZombie],
  SunNum: 150,
  LevelName: $__language_Array__["神秘埃及--第1天"],
  LvlEName: 1,
  CanSelectCard: 0,
  backgroundImage: "images/interface/backgroundEgypt.jpg",
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  SummonZombieArea:[25,105,200,475],
  //预览部分的僵尸位置，依次是左 上 宽 高
}, 
{
  AZ: [[oRaZombie, 1, 2]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [3, 5, 8, 10],
    a2: [1, 2, 3, 5]
},
});