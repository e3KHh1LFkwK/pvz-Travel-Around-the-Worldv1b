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
  LoadAccess: function (callback) {
    NewImg('BgMask' + Math['random'](), 'images/interface/backgroundQMMask2.png', 'left:0;top:401px;position:absolute;z-index:23;', EDAll);

    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, ["在视频开始前声明一下"]);
          count++;
          break;

        case 1:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, ["黑刃他发现有一些人看到一些同人里有秦陵和龙宫，就说这游戏是不是还原online"]);          
          count++;
          break;

        case 2:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, ["估计黑刃和其他同人作者看到这话都会头大"]);
          count++;
          break;

        case 3:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, '所以你们以后别看到秦陵和龙宫就说是不是还原online或者是online整合包');
          count++;
          break;

        case 4:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, '要回味online的话就去玩online单机版');
          count++;
          break;

        case 5:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, '不要对同人作者说那些话');
          count++;
          break;

        case 6:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: function () {
    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    NewMusic(oS.LoadMusic = oS.StartGameMusic);
    SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
    oS.InitLawnMover();
    oS.ControlFlagmeter && oFlagContent.init({
      fullValue: oP.FlagNum - 1,
      curValue: 0
    });
    PrepareGrowPlants(function () {
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc, PlaySubtitle($__language_Array__["f6e39ca184c982d81aff46b64dab5a57"]));
      BeginCool();
      oSym.addTask(1500, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
        oSym.addTask(800, PlaySubtitle);
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 2, 1], [oConeheadZombie, 2, 5], [oFlagZombie, 0, 11, [11]]],
  FlagNum: 11,
  FlagToSumNum: {
    a1: [2, 4, 5, 7, 9],
    a2: [1, 2, 5, 8, 10, 13]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oPuffShroom, EDAll));
  }
});