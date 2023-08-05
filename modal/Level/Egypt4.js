/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oCabbage, oRepeater, oBonkChoy,],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oPharaohZombie, oFlagZombie],
  backgroundImage: 'images/interface/backgroundEgypt.jpg',
  SunNum: 150,
  LevelName: $__language_Array__["09033ddefd8ba011bc1e3ed2c03ff4ed"],
  LvlEName: 4,
  LoadMusic: "Egypt/Bgm_Egypt_Ready",
  StartGameMusic: "Egypt/Bgm_Egypt_Fight",
  FixedProps: 'disabled',
  SummonZombieArea:[25,105,200,475],
  LoadAccess: function (a) {
    PlayAudio('Egypt/Bgm_Egypt_Noise', 1);
    NewImg('BgMask' + Math['random'](), 'images/interface/backgroundEgyptMask.png', 'left:0;top:371px;position:absolute;z-index:23;', EDAll);
    oSym.addTask(90, function () {
      a(0); //移动场景延迟，以免切换场景太快导致玩家不适应
    }, []);
  }
}, {
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 2, 3], [oBucketheadZombie, 1, 6], [oPharaohZombie, 1, 8], [oFlagZombie, 0, 10, [10]]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [3, 5],
    a2: [1, 3, 5]
  }
});