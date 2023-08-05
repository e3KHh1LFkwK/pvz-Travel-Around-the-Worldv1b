/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "ForestSelection1.png", RESPATH + "ForestSelection2.webp"],
  Music: "Egypt/Bgm_Egypt_Map",
  backgroundImage: "images/interface/ForestSelection1.png",

  LoadAccess($c, $div) {
    const path = "images/Card/";
    loadRes({
      img: [RESPATH + 'Forest.webp', path + 'zombie.webp', path + 'StoneFlower.webp', path + 'ConeheadZombie.webp', path + 'RaZombie.png', path + 'PharaohZombie.png', path + 'BalloonZombie.webp', path + 'SnowPea.webp', path + 'Radish.webp', RESPATH + 'ForestJx.webp']
    }); //教学关入口

    $c('left:64px;top:450px;width:74px;height:76px;', {
      onmouseover: _ => loadRes({
        img: [RESPATH + "SodRoll.png", RESPATH + "background1unsodded_1.webp", RESPATH + "background1unsodded.webp"]
      }),
      onclick: _ => jngAlert.open({
        'shade': 1,
        'text': $__language_Array__["3859b86bec72af4a7262e4a87ae45216"],
        'nextHandler': _ => SelectModal('Tutorial1')
      })
    }); //森林第一关
    $c('left:64px;top:250px;', {
      onclick: _ => oLvlInfoUI.open('Egypt1', 1, [$__language_Array__["db728500d318c69b7f7050b44539829c"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["a11e3c70e0e0ff429268d4cb590fa58c"]], ['Zombie', 'ConeheadZombie', 'RaZombie'], 1)
    }); //森林第二关

    $c('left:222px;top:285px;', {
      onclick: _ => oLvlInfoUI.open('Egypt2', 1, [$__language_Array__["1d2802a5e7e33fce08ba94b169f9cf45"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["240bc94fae77e28d630e0471ad0f5b73"]], ['Zombie', 'ConeheadZombie', 'BucketheadZombie', 'RaZombie'], 1)
    }); //森林第三关

    $c('left:285px;top:375px;', {
      onclick: _ => oLvlInfoUI.open('Egypt3-1', 1, ["传送带", $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["240bc94fae77e28d630e0471ad0f5b73"]], ['Zombie', 'ConeheadZombie', 'BucketheadZombie'], 1)
    }); 

    $c('left:355px;top:275px;', {
      onclick: _ => oLvlInfoUI.open('Egypt3', 1, [$__language_Array__["cca5eca02972aef0e9fe102b31c8fd8e"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["56dbce8ea748aa050854b0bc80d56431"]], ['Zombie', 'ConeheadZombie', 'PharaohZombie'], 1)
    }); //森林第四关

    $c('left:482px;top:285px;', {
      onclick: _ => oLvlInfoUI.open('Egypt4', 1, [$__language_Array__["e8091413040c3218a2681d678a90646e"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["5864bc83e48ad1a83072c335aec9e4cf"]], ['Zombie', 'ConeheadZombie', 'BucketheadZombie', 'PharaohZombie'], 1)
    }); //森林第五关

    $c('left:633px;top:275px;', {
      onclick: _ => oLvlInfoUI.open('Egypt5', 1, [$__language_Array__["a68b4511cc419bb29b45747abe53eb1a"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["5864bc83e48ad1a83072c335aec9e4cf"]], ['Zombie', 'ConeheadZombie', 'BucketheadZombie', 'RaZombie', 'PharaohZombie'], 1)
    });
  }

});