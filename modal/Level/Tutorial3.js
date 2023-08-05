/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut],
  ZName: [oZombie, oConeheadZombie, oPoleVaultingZombie, oFlagZombie],
  PicArr: function () {
    var a = oPotatoMine.prototype,
        b = a.PicArr;
    return ["images/interface/background1unsodded2.webp", b[a.CardGif], b[a.StaticGif]];
  }(),
  backgroundImage: "images/interface/background1unsodded2.webp",
  LF: [0, 0, 1, 1, 1, 0],
  CanSelectCard: 0,
  SunNum: 150,
  LevelName: $__language_Array__["769ffd8e389b473282fb12ad0c9be63f"],
  LvlEName: 3,
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
  FixedProps: 'disabled',
  InitLawnMover: function () {
    var a = 5;

    while (--a > 1) {
      oSym.addTask(a * 10, CustomSpecial, [oLawnCleaner, a, -1]);
    }
  },

  LoadAccess(a) {
    CustomSpecial(oPeashooterleft, 2, 6);
    CustomSpecial(oPeashooterleft, 3, 8);
    CustomSpecial(oPeashooterleft, 4, 7);
    oSym.addTask(90, a);
  },
  LoadAccess: function (a) {
    PlayAudio('Bgm_Modern_Noise', 1);
    NewImg('BgMask' + Math['random'](), 'images/interface/backgroundModernMask.png', 'left:0;top:417px;position:absolute;z-index:23;', EDAll);
    NewImg("dDave", "", "left:0;top:81px", EDAll);
    NewEle("DivTeach", "div", 0, 0, EDAll);

    (function fun(d) {
      let c = $("DivTeach");

      switch (d) {
        case 0:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          $("dDave").src = "images/interface/Cattail.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Cattail.png";

            c.onclick = function () {
              oSym.addTask(1, fun, [1]);
            };
          }, []);
          innerText(c, $__language_Array__["Tutorial3_Cattail_1"]);
          break;

        case 1:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [2]);
            };
          }, []);
          innerText(c, $__language_Array__["Tutorial3_Dave_2"]);
          break;

        case 2:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          c.onclick = null;
          $("dDave").src = "images/interface/Cattail.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Cattail.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [3]);
            };
          }, []);
          innerText(c, $__language_Array__["Tutorial3_Cattail_3"]);
          break;

        case 3:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          $("dDave").src = "images/interface/Magicshroom.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Magicshroom.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [4]);
            };
          }, []);
          innerText(c, $__language_Array__["Tutorial3_Magicshroom_4"]);
          break;

          case 4:
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            c.onclick = null;
            $("dDave").src = "images/interface/Cattail.png";
            oSym.addTask(1, function () {
              $("dDave").src = "images/interface/Cattail.png";
  
              c.onclick = function () {
                oSym.addTask(10, fun, [5]);
              };
            }, []);
            innerText(DivTeach, ["……"]);
            break;

        case 5:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a();
          }, []);
      }
    })(0);
  },
  StartGame: function () {
    SetHidden($("dSunNum"));
    SetVisible($("tdShovel"), $("dTop"));
    oP.Monitor({
      ar: [0],
      f: function fun(c) {
        var d,
            a = oGd.$,
            b = oS.Chose;

        switch (c) {
          case 0:
            PlaySubtitle($__language_Array__["9529615ba5b8f93e4a729efef52e2cc5"]);
            NewImg("PointerUD2", "images/interface/down.gif", "top:36px;left:250px;transform:scaleY(-1);", FightingScene);
            oSym.addTask(10, fun, [++c]);
            break;

          case 1:
            b < 0 && (PlaySubtitle($__language_Array__["91245b4d600dcf78b34dd2abac53fd77"]), ++c);
            oSym.addTask(10, fun, [c]);
            break;

          case 2:
            !(a["2_6_1"] && a["3_8_1"] && a["4_7_1"]) ? (PlaySubtitle($__language_Array__["921855d5ab3a35dba7dd67b9ec45611c"]), ++c) : b > -1 && (PlaySubtitle($__language_Array__["91245b4d600dcf78b34dd2abac53fd77"]), c = 1);
            oSym.addTask(10, fun, [c]);
            break;

          default:
            !(a["2_6_1"] || a["3_8_1"] || a["4_7_1"]) ? function () {
              SetHidden($("PointerUD2"));
              PlaySubtitle();
              SetVisible($("dSunNum"), $("dFlagMeter"), $("dTop"));
              StopMusic();
              PlayMusic(oS.LoadMusic = oS.StartGameMusic);
              oS.InitLawnMover();
              oS.ControlFlagmeter && oFlagContent.init({
                fullValue: oP.FlagNum - 1,
                curValue: 0
              });
              PrepareGrowPlants(function () {
                BeginCool();
                AutoProduceSun(50);
                oSym.addTask(2000, function () {
                  oP.AddZombiesFlag();
                  oS.ControlFlagmeter && oFlagContent.show();
                }, []);
              });
            }() : oSym.addTask(10, fun, [3]);
        }
      }
    });
    SetVisible($("dFlagMeter"));
  }
}, {
  AZ: [[oZombie, 8, 1], [oConeheadZombie, 1, 1], [oPoleVaultingZombie, 1, 5], [oFlagZombie, 0, 8, [8]]],
  FlagNum: 8,
  FlagToSumNum: {
    a1: [3, 5],
    a2: [1, 2, 3]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    let dom = NewEle("", "div", "position:absolute;left:300px;top:300px;overflow:visible;width:100px;height:60px;", {}, EDAll);
    let dom2 = NewImg("PointerUD2", "images/interface/down.gif", "left:30px;top:-50px;", dom);
    GetPlantCardDom(oPotatoMine, dom, null, {
      onclick: function () {
        ClearChild(dom2);
        GetNewCard(dom, oPotatoMine, 'Tutorial4');
        this.style.cursor = 'default';
      }
    });
  }
});