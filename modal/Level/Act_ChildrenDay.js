/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea],
  ZName: [oZombie, oConeheadZombie, oImp, oChildrenImp],
  SunNum: 150,
  LevelName: $__language_Array__["83af51d87e4e22dc29df1d75741a67c3"],
  LvlEName: 1,
  backgroundImage: "images/interface/backgroundChildrenDay.jpg",
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0); //移动场景延迟，以免切换场景太快导致玩家不适应
    }, []);
  }
}, {
  AZ: [[oZombie, 3, 1], [oConeheadZombie, 2, 2], [oImp, 1, 10], [oChildrenImp, 1, 5]],
  FlagNum: 16,
  FlagToSumNum: {
    a1: [5, 9, 13],
    a2: [1, 6, 8, 15]
  }
});