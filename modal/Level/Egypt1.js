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
  LevelName: $__language_Array__["b66e38f87670e3de0d0c2e1908b16f5e"],
  LvlEName: 1,
  CanSelectCard: 0,
  backgroundImage: "images/interface/backgroundEgypt.jpg",
  LoadMusic: "Egypt/Bgm_Egypt_Ready",
  StartGameMusic: "Egypt/Bgm_Egypt_Fight",
  FixedProps: 'disabled',
  SummonZombieArea:[25,105,200,475],
  //预览部分的僵尸位置，依次是左 上 宽 高
  LoadAccess: function (a) {
    PlayAudio('Egypt/Bgm_Egypt_Noise', 1);
    NewImg('BgMask' + Math['random'](), 'images/interface/backgroundEgyptMask.png', 'left:0;top:371px;position:absolute;z-index:23;', EDAll);
    oSym.addTask(90, function () {
      a(0); //移动场景延迟，以免切换场景太快导致玩家不适应
    }, []);
  }
}, {
  AZ: [[oZombie, 2, 1], [oConeheadZombie, 1, 5], [oRaZombie, 1, 2], [oFlagZombie, 0, 10, [10]]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [3, 5, 8, 10],
    a2: [1, 2, 3, 5]
},
});