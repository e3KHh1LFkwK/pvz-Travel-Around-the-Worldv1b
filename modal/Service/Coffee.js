"use strict";
{
    let tmpWindows;
    let oFlowerLine = InheritO(oObstacle2,{
        CName:"花坛",
    }),
    oMould = InheritO(oObstacle,{
        CName:"霉菌",
    });
    
oS.Init({
    PicArr: ["images/interface/writer.webp"],
    LoadMusic: `Bgm_Tutorial_Fight`,
    backgroundImage: 'images/interface/background1.webp',
    backgroundMask: 'BgMask-Tutorial',
    PName:[oPeashooter],
    ZName:[oZombie, oConeheadZombie, oBucketheadZombie, oNewspaperZombie_Fixed, oBalloonZombie, oStrollZombie, oFootballZombie, oCigarZombie, oCaskZombie_Fixed, oSadakoZombie, oImp, oMembraneZombie, oMakeRifterZombie, oSkatingZombie, oPushIceImp, oZomboni, oSculptorZombie, oBeetleCarZombie, oThiefZombie, oGargantuar],
    LoadAccess(a) {
        NewEle(`jngButton${Math.random()}`, 'a', 'left:1px;bottom:1px;z-index:258;position: absolute;', {
            className: 'jngButton Homepage',
            onclick() {
                ExitThisLevel();
            }            
        }, EDAll);
        oS.PName = [oPeashooter, oSunFlower, oPotatoMine, oPotatoMine2, oWallNut, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oCherryBomb2, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oBambooUncle1, oDoomShroom, oDoomShroom1, oNutBowling, oBoomNutBowling, oBegonia, oIceAloe, oPepper, oImitater, oMonotropa, oSpikeweed, oTorchwood, oKiwibeast, oAbutilonHybriden, oPumpkinHead, oMiracleImitater, oJalapeno, oFlowerPot, oLight, oLSP, oCabbage, oKernelPult, oPlantern, oBlover, oShiitake,oCranberry,oXshooter,oMacintosh,oMelonPult];
        //, oNewspaperZombie2, "读报僵尸"
        let zombiesC = ["普通僵尸", "路障僵尸", "铁桶僵尸", "读报僵尸", "气球僵尸", "漫步僵尸", "橄榄球僵尸", "雪茄僵尸", "酒桶僵尸", "贞子僵尸", "小鬼僵尸", "膜法师僵尸", "开窟僵尸", "滑冰僵尸", "推冰小鬼", "冰车僵尸", "水晶", "冰块"];
        let zombies = oS.ZName;
        let plantsC = ["豌豆射手", "向日葵", "土豆雷", "冷却减少-土豆雷", "坚果墙", "朝鲜蓟", "飞旋萝卜", "寒冰射手", "双发射手", "樱桃炸弹", "减少冷却-樱桃炸弹", "高坚果", "阳光菇", "小喷菇", "胆小菇", "大喷菇", "孢子菇", "爆竹爷", "冷却减少-爆竹爷", "毁灭菇", "冷却减少-毁灭菇", "坚果保龄球", "爆炸坚果", "冰封海棠", "冰冻芦荟", "花椒", "模仿者", "水晶兰射手", "地刺", "火炬树桩", "猕猴桃", "实验室-金铃花", "实验室-南瓜罩", "实验室-奇迹模仿者", "实验室-火爆辣椒", "花盆", "特殊道具-日光灯", "特殊道具-液态保护膜"];
        let plants = oS.PName;
        let selectedPlants,selectedZombies;
        let Scenes = {
            '庭院 - Tutorial': {
                backgroundMask: 'BgMask-Tutorial',
                LoadMusic:"Bgm_Tutorial_Ready",
                StartGameMusic:"Bgm_Tutorial_Fight",
                backgroundImage:"images/interface/background1.webp",
            },
            "森林 - Forest":{
                backgroundImage:"images/interface/Forest.webp",
                LoadMusic:"Bgm_Forest_Ready",
                StartGameMusic:"Bgm_Forest_Fight",
                backgroundMask:"BgMask-Forest",
            },
            "森林镜像 - Forestjx":{
                //Special:[["zombies",oCrystal,[8,9]]],
                DKind:0,
                backgroundImage:"images/interface/ForestJx.webp",
                LoadMusic:"Bgm_Forest_Ready_JX",
                StartGameMusic:"Bgm_Forest_Fight_JX",
                backgroundMask:"BgMask-Forest",
            },
            '沼泽 - Marsh': {
                backgroundImage: 'images/interface/Marsh.webp',
                backgroundMask: 'BgMask-Marsh',
                LoadMusic: "Bgm_Marsh_Ready",
                StartGameMusic: "Bgm_Marsh_Fight",
                DKind: 0,
            },
            '沼泽镜像 - Marshjx': {
                //Special:[["plants",oSummonZombieObs,[5,6,7]],["plants",oZombiePlusBloodObs,[7,8]],["plants",oZombieComeOnObs,[9,3,4]]],
                backgroundImage: 'images/interface/MarshJx.webp',
                backgroundMask: 'BgMask-Marsh',
                LoadMusic: "Bgm_Marsh_Ready_JX",
                StartGameMusic: "Bgm_Marsh_Fight_JX",
            },
            '冰原 - Polar': {
                //Special:[["plants",oRifter,[3,4,5,6,7,8,9]]],
                get LoadMusic() {
                    return `Bgm_Polar_Ready_${oS.DKind ? 1 : 2}`;
                },
                get StartGameMusic() {
                    return `Bgm_Polar_Fight_${oS.DKind ? 1 : 2 + Math.round(Math.random()*2)}`;
                },
                get backgroundImage() {
                    return `images/interface/Polar${oS.DKind ? '' : '2'}.webp`;
                },
                get LoadAccess() {
                    return a=>{
                        PlayAudio('Bgm_Polar_Noise', 1);
                        NewImg("imgKK", `images/interface/Polar_Mask${oS.DKind ? '2' : '4'}.webp`, `left:${oS.DKind ? 1131 : 1100}px;`, EDAll);
                        NewImg("imgKK", `images/interface/Polar_Mask${oS.DKind ? '1' : '3'}.webp`, "left:167px;top:546px;", EDAll);
                        !oS.DKind && (NewEle('PolarFire2', "div", null, {className: 'PolarFire'}, $('tGround')), NewEle('PolarFire', "div", null, {className: 'PolarFire'}, $('tGround')));
                        oSym.addTask(90, a);
                    }
                },
            },
            '冰原夜 - Polar2': {
                DKind:0,
                //Special:[["plants",oRifter,[3,4,5,6,7,8,9]]],
                get LoadMusic() {
                    return `Bgm_Polar_Ready_${oS.DKind ? 1 : 2}`;
                },
                get StartGameMusic() {
                    return `Bgm_Polar_Fight_${oS.DKind ? 1 : 2 + Math.round(Math.random()*2)}`;
                },
                get backgroundImage() {
                    return `images/interface/Polar${oS.DKind ? '' : '2'}.webp`;
                },
                get LoadAccess() {
                    return a=>{
                        PlayAudio('Bgm_Polar_Noise', 1);
                        NewImg("imgKK", `images/interface/Polar_Mask${oS.DKind ? '2' : '4'}.webp`, `left:${oS.DKind ? 1131 : 1100}px;`, EDAll);
                        NewImg("imgKK", `images/interface/Polar_Mask${oS.DKind ? '1' : '3'}.webp`, "left:167px;top:546px;", EDAll);
                        !oS.DKind && (NewEle('PolarFire2', "div", null, {className: 'PolarFire'}, $('tGround')), NewEle('PolarFire', "div", null, {className: 'PolarFire'}, $('tGround')));
                        oSym.addTask(90, a);
                    }
                },
            },
            '副本秋 - SeasonA': {
                backgroundImage: 'images/interface/Fuben_Autumn.webp',
                backgroundMask: 'BgMask-Forest',
                LF: [0, 1, 1, 3, 1, 1],
                LoadMusic: "Fuben_Autumn_Ready",
                StartGameMusic: "Fuben_Autumn_Fight",
                get LoadAccess() {
                    return a=>{
                        CustomSpecial(oObstacle3, 1, 7);
                        CustomSpecial(oObstacle3, 4, 8);
                        CustomSpecial(oObstacle, 3, 6);
                        CustomSpecial(oObstacle, 3, 1);
                        oSym.addTask(90, a);
                    }
                },
            },  
            '副本冬 - SeasonW': {
                //Special:[["plants",oRifter,[2,3,4,5,6,7,8,9]]],
                backgroundImage: 'images/interface/Fuben_Winter.webp',
                LoadMusic: "Fuben_Winter_Ready",
                StartGameMusic: "Fuben_Winter_Fight",
                SunNum: 200,
                DKind: 0,
                get LoadAccess() {
                    return a=>{
                        NewImg("imgKK", "images/interface/Winter_filter.webp", "left:-115px;pointer-events: none;", FightingScene);
                        PlayAudio('Bgm_Polar_Noise', 1);
                        oSym.addTask(90, a);
                    }
                },
            },
            '雾都 - Industry': {
                //Special:[["zombies",oSculpture,[4,5,6,7,8,9]]],
                PicArr: [`images/interface/Industry.webp`, `images/interface/Industry_Mask.png`],
                backgroundImage: `images/interface/Industry.webp`,
                LoadMusic: `Bgm_Industry_Ready`,
                StartGameMusic: `Bgm_Industry_Fight`,
                HaveFog: {
                    "leftBorder": Math.floor(Math.random()*3)+3,
                    'type': Math.random()>0.2?'Fog':"strongFog",
                },
                get LoadAccess() {
                    return callback=>{
                        NewImg(`BgMask${Math.random()}`, `images/interface/Industry_Mask.png`, `left:0;top:469px;position:absolute;z-index:23;`, EDAll);
                        oSym.addTask(90, callback);
                    }
                },
                SummonZombieArea:[undefined,undefined,150],
            },            
        };
        /*function getSummonStr(scenes,cnt){
            let res = [];
            if(scenes.Special){
                let special = scenes.Special;
                let ground = [];
                cnt = Math.min(30,cnt);
                for(let i =1;i<6;i++){
                    ground[i] = [];
                    for(let j = 1;j<10;j++){
                        ground[i][j]=1;
                    }
                }
                for(let i = 0;i<special.length;i++){
                    if(special[i][0]=="zombies"&&!LevelConfigJson.ZName.includes(special[i][1])){
                        LevelConfigJson.ZName.push(special[i][1]);
                    }
                }
                for(let i = 0;i<cnt;i++){
                    let obj = special.random();
                    let canP=[];
                    for(let z = Math.min(...obj[2]);z<=Math.max(...obj[2]);z++){
                        for(let a = 1;a<6;a++){
                            if(ground[a][z]){
                                canP.push([`"${obj[0]}"`,obj[1].prototype.EName,a,z]);
                            }
                        }
                    }
                    if(canP.length>0){
                        let Pos = canP.random();
                        res.push(Pos);
                        ground[Pos[2]][Pos[3]] = 0;
                    }
                }
                return "SummonsZombieNameAndPositions__XD__I_DONT_HAVE_OTHER_WAY:"+arrToStr(res)+",";
            }
            return "";
        }*/
        function arrToStr(objarr){
            var arrLen = objarr.length;
            var row = "[";
            for (var i = 0 ;i < arrLen ; i++){
                if(objarr[i] instanceof Array){
                    row+=arrToStr(objarr[i])+",";
                }else if(typeof objarr[i]=="object"){
                    row+=JSON.stringify(objarr[i])+",";
                }else{
                    row+=objarr[i].toString()+",";
                }
            }
            row+="]";
            return row;
        }
        function ExitThisLevel(){
            $("dSelectCard").style.display="";
            $("dMenu").style.display="";
            ChangeDocumentSelect(1);
            if(tmpWindows){
                delete window[tmpWindows];
            }
            Exitlevel("Fanmade");
        }
        /*for(let i =0;i<zombies.length;i++){
            if(zombies[i].prototype.CName!=zombiesC[i]){
                console.log(zombies[i].prototype.CName,zombiesC[i]);
            }
        }*/
        //放在main.js里即可获取名字
        /*
            if(subClass.prototype.canShovel==1&&subClass.prototype.CName){
                !window.arr&&(window.arr=[]);
                !window.arr2&&(window.arr2=[]);
                window.arr.push(subClass.prototype.EName);
                window.arr2.push(subClass.prototype.CName);
            }
        */
        NewEle("dTitle", "div", 0, 0, EDAll);
        //oS.ScrollScreen(1,-100);
        PlacePlantCard();
        PlaceZombiesCard();
        Part1();
        function Part1(){
            let dom = NewEle("LevelType","div","Z-index:1000;transition:all 0.3s;top:560px;text-align:center;color:white;line-height:30px;overflow:hidden;position:absolute;left:580px;height:30px;width:300px;background:black;border-radius:1em;",{className:"NoBar"},EDAll);
            NewEle("","label","",{innerHTML:`<input type="radio" value="1" name="LevelT" checked/>可选卡`},dom);
            NewEle("","label","",{innerHTML:`<input type="radio" value="0" name="LevelT"/>不可选卡`},dom);
            NewEle("","label","",{innerHTML:`<input type="radio" value="2" name="LevelT"/>传送带`},dom);
            //NewEle("","option","",{value:"0",innerText:"不可选卡"},dom);
            //NewEle("","option","",{value:"2",innerText:"传送带"},dom);
            /*<select id="DiffType" style="border-radius:2em;" name="DiffType" size="1" class="sel">
                            <option value="Easy">Easy</option>
                            <option value="Normal">Normal</option>
                            <option value="Hard">Hard</option>
                            <option value="Lunatic">Lunatic</option>
                            <option value="Extra">Extra</option>
                        </select>*/
        }
        function ChangeDocumentSelect(s=0){
            let n = document;
            if(s&&(!localStorage.JNG_DEV||localStorage.JNG_DEV=="false")){
                n.onselectstart=n.onmousedown=function(){return false;};
            }else{
                n.onselectstart=n.onmousedown=null;
            }
        }
        function checkRadio(name){
            let arr = document.getElementsByName(name);
            for(let i = 0;i<arr.length;i++){
                if(arr[i].checked){
                    return arr[i].value;
                }
            }
        }
        function PlacePlantCard(){
            let dom = $("dSelectCard").cloneNode();
            dom.id = "dSelectCard2P";
            SetStyle(dom,{
                background:"url(images/interface/panel.webp) no-repeat",
                position:"absolute",
                left: "-5px",
                top:"10px",
                width:"465px",
                height:"540px",
                backgroundPosition:"0 -2534px",
                zIndex: "257", 
                lineHeight:"35px",
                paddingTop:"40px",
            });
            let dpC = $("dPCard").cloneNode();
            dpC.id = "dPCard2";
            SetStyle(dpC,{
                cssText:"position:relative;width:96%;height:455px;padding-left:14px;",
            });
            EDAll.appendChild(dom);
            dom.appendChild(dpC);
            let html = '';
            oS.PName.forEach(plant => {
                let proto = plant.prototype;
                if(!proto.CanSelect) return;
                let EName = proto.EName;
                //ArPCard[EName] = {Select: 0, PName: plant};
                //html += `<div class="aCard" id="Card${EName}" onmouseout="SetHidden($('dTitle'))" onmousemove="ViewCardTitle(${EName}, event)" onclick="SelectCard('${EName}')"><img src="${proto.PicArr[0]}"></div>`;
                let dcm = NewEle(`CardS${EName}`, 'div', 'cursor:pointer;width:70px;height:42px;overflow:hidden;float:left;position:relative;margin:0 0 0 2px;', {
                    className:"cardSelectPlants",
                    onmousemove() {
                        (function(plant, event) {  //选卡界面标签绘制
                            let ele = $("dTitle");
                            let proto = plant.prototype;
                            ele.innerHTML = `${proto.CName}<br>冷却时间:${proto.coolTime}秒<br>${proto.Tooltip}`;
                            if(dcm.getAttribute("data-SelectedP")==1){
                                ele.innerHTML+=`<br/><span style="color:red">已携带</span>`;
                            }
                            SetStyle(ele, {
                                left: event.clientX - EDAlloffsetLeft -50 - 3 + "px",
                                top: event.clientY + 18 + "px",
                                visibility: "visible",
                            });
                        })(plant,event);
                    },
                    onmouseout() {
                        SetHidden($('dTitle'));
                    },
                    onclick(){
                        let s = dcm.getAttribute("data-SelectedP");
                        dcm.setAttribute("data-SelectedP",s^1);
                        if(s=="0"){
                            dcm.style.filter = "grayscale(100%)";
                        }else{
                            dcm.style.filter = "";
                        }
                        dcm.onmousemove();
                    },
                }, dpC);
                dcm.setAttribute("data-PlantStr",EName);
                dcm.setAttribute("data-SelectedP",0);
                NewEle(``, 'img', 'left:0;width:70px;height:84px;', {src:proto.PicArr[0]}, dcm);
                NewEle("","span","",{className:"cardSunNum",innerText:proto.SunNum},dcm);
            });
            //$("dPCard").innerHTML = html;
        }
        function PlaceZombiesCard(){
            let dom = $("dSelectCard").cloneNode();
            dom.id = "dSelectCard2Z";
            SetStyle(dom,{
                background:"url(images/interface/panel.webp) no-repeat",
                position:"absolute",
                right: "-5px",
                top:"10px",
                width:"465px",
                height:"540px",
                backgroundPosition:"0 -2534px",
                zIndex: "257", 
                lineHeight:"35px",
                paddingTop:"40px",
            });
            let dpC = $("dPCard").cloneNode();
            dpC.id = "dZCard";
            SetStyle(dpC,{
                cssText:"position:relative;width:96%;height:455px;padding-left:14px;",
            });
            EDAll.appendChild(dom);
            dom.appendChild(dpC);
            NewEle(``, 'img', 'pointer-events:none;width:100px;position:absolute;left:250px;top:0px;background-size: cover;', {src:"images/interface/wrong.webp"}, dom);
            NewEle(``, 'img', 'pointer-events:none;width:160px;position:absolute;left:310px;top:-30px;background-size: cover;', {src:"images/interface/zombies.webp"}, dom);
            let html = '';
            //说是plant其实变量意思是zombie的直接复制的屑写的↓
            oS.ZName.forEach(plant => {
                let proto = plant.prototype;
                let EName = proto.EName;
                //ArPCard[EName] = {Select: 0, PName: plant};
                //html += `<div class="aCard" id="Card${EName}" onmouseout="SetHidden($('dTitle'))" onmousemove="ViewCardTitle(${EName}, event)" onclick="SelectCard('${EName}')"><img src="${proto.PicArr[0]}"></div>`;
                let dcm = NewEle(`CardS${EName}`, 'div', 'background:gray;cursor:pointer;width:68px;height:70px;overflow:hidden;float:left;position:relative;border-radius:10px;border:2px solid white;', {
                    className:"cardSelectZombies",
                    onmousemove() {
                        (function(plant, event) {  //选卡界面标签绘制
                            let ele = $("dTitle");
                            let proto = plant.prototype;
                            ele.innerHTML = `${proto.CName}<br>血量:${proto.HP+proto.OrnHP}`;
                            if(dcm.getAttribute("data-SelectedZ")==1){
                                ele.innerHTML+=`<br/><span style="color:red">已携带</span>`;
                            }
                            SetStyle(ele, {
                                left: event.clientX - EDAlloffsetLeft -90 - 3 + "px",
                                top: event.clientY + 18 + "px",
                                visibility: "visible",
                            });
                        })(plant,event);
                    },
                    onmouseout() {
                        SetHidden($('dTitle'));
                    },
                    onclick(){
                        let s = dcm.getAttribute("data-SelectedZ");
                        dcm.setAttribute("data-SelectedZ",s^1);
                        if(s=="0"){
                            dcm.style.filter = "grayscale(100%)";
                        }else{
                            dcm.style.filter = "";
                        }
                        dcm.onmousemove();
                    },
                }, dpC);
                dcm.setAttribute("data-PlantStr",EName);
                dcm.setAttribute("data-SelectedZ",0);
                NewEle(``, 'img', 'left:0;width:70px;background-size: cover;', {src:proto.PicArr[proto.StandGif]}, dcm);
            });
            //$("dPCard").innerHTML = html;
        }
        //只是配置并不是真的字符串
        let LevelConfigJson={
            PName:[],
            ZName:[],
            DKind:1,
            StaticCard:1,
            CanSelectCard:1,
            backgroundImage:"images/interface/background1.webp",
            LoadMusic:"Bgm_Tutorial_Ready",
            StartGameMusic:"Bgm_Tutorial_Fight",
            LevelName:"LvlTest",
            SunNum:150,
            chuansongdai:0,//传送带
            AZ:[],
            FlagNum:0,
            a1:[],
            a2:[],
            filename:"",
            summons:"",
        };
        function makeAZ(arr){
            let str = "";
            for(let i =0;i<arr.length;i++){
                //console.log(arr[i],arr[i][3]);
                if(arr[i][3]){
                    str += `[${arr[i][0].prototype.EName},${arr[i][1]},${arr[i][2]},[${a2s(arr[i][3])}]],`;
                }else{
                    str += `[${arr[i][0].prototype.EName},${arr[i][1]},${arr[i][2]}],`;
                }
            }
            return str;
        }
        function a2s(d){
            return d.join(",");
        }
        function GetName(arr){
            let newArr = [];
            for(let i =0;i<arr.length;i++){
                newArr[i] = arr[i].prototype.EName;
            }
            return newArr;
        }
        function concatToStr(json){
            return `{
    //记录关卡名，function统计数据需要用
    $User.FanmadeLevelName="${json.filename}";
            let tmpAccess = ${json.LoadAccess?json.LoadAccess.toString():"null"};
            'use strict';
            oS.Init({
                PName: [${a2s(GetName(json.PName))}],
                ZName: [${a2s(GetName(json.ZName))}],
                CanSelectCard:${json.CanSelectCard},
                LevelName:"${json.LevelName}",
                StaticCard:${json.StaticCard},
                DKind:${json.DKind},
                SunNum:${json.SunNum},
                ${json.summons}
                LoadMusic:"${json.LoadMusic}",
                StartGameMusic:"${json.StartGameMusic}",
                backgroundImage: "${json.backgroundImage}",
                ${json.LF?"LF:["+json.LF.toString()+"],":""}
                ${json.chuansongdai==1?"StartGame: oMiniGames.ConveyorBelt,":""}
                LoadAccess:function(c){
                    if(tmpAccess){
                        tmpAccess(c);
                    }else{
                        oSym.addTask(90,c);
                    }
                    let summonWhenStart = [];
                    if(oS.SummonsZombieNameAndPositions__XD__I_DONT_HAVE_OTHER_WAY){
                        oS.SummonsZombieNameAndPositions__XD__I_DONT_HAVE_OTHER_WAY.forEach(function(index){
                            if(index[0]=="plants"){
                                CustomSpecial(index[1],index[2],index[3]);
                                if("oObstacle"==index[1].prototype.EName){
                                    NewEle(0, "div", `+"`left:${55+index[3]*80}px;top:${index[2]*100-30}px;width:80px;height:100px;`"+`, {className: 'Mould'}, FightingScene);
                                }else if("oObstacle2"==index[1].prototype.EName){
                                    NewEle(0, "div", `+"`left:${55+index[3]*80}px;top:${index[2]*100-30}px;width:80px;height:100px;`"+`, {className: 'FlowerBed'}, FightingScene);
                                }
                                else if(index[4]&&oS.StaticCard){
                                    NewEle(0, "div", `+"`left: ${55+80*index[3]}px;top: ${index[2]*100-20}px;`"+`, {className: 'sos'}, FightingScene);
                                }
                            }else{
                                if("oCrystal"==index[1].prototype.EName){
                                    summonWhenStart.push(_=>{
                                        PlaceZombie(index[1],index[2],index[3]);
                                    });
                                }else{
                                    PlaceZombie(index[1],index[2],index[3]);
                                }
                            }
                        });
                    }
                    addEventListenerRecord("jng-event-startgame",function(){
                        for(let i in summonWhenStart){
                            summonWhenStart[i]();
                        }
                    }, {once: true});
                    if(oS.__PROTECT_PLANTS_XD____&&oS.StaticCard){
                        oS.StartGame=function(){
                            oMiniGames.ProtectPlants({},oS.__PROTECT_PLANTS_XD____);
                        };
                    }
                },
                ${json.HaveFog?"HaveFog:"+json.HaveFog.toString()+",":""}
                ${json.backgroundMask?"backgroundMask:\""+json.backgroundMask+"\",":""}
            },{
                AZ:[${makeAZ(json.AZ)}],
                FlagNum:${json.FlagNum},
                FlagToSumNum: {
                    a1:[${a2s(json.a1)}],
                    a2:[${a2s(json.a2)}],
                },
                FlagToEnd:function(){
                    $User.FanmadeLevelName="+(_?won)";
                    const xhr = new XMLHttpRequest ();
                    xhr.open("GET", "${atob('dXBsb2FkL3VwbG9hZGVyLnBocD90eXBlPXN0YXRpc3RpY3MmZmlsZW5hbWU9')+json.filename+'&win=1'}");
                    xhr.send();
                    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:535px;top:200px;", EDAll, {
                        onclick: function() {
                            GetWin(this, Exitlevel(oS.Lvl, 1));
                            delete $User.FanmadeLevelName;
                        }
                    })
                },
            });
}`;
        }
        function createXHR () {
            const XHR = [  //兼容不同浏览器和版本得创建函数数组
                () => new XMLHttpRequest (),
                () => new ActiveXObject ("Msxml2.XMLHTTP"),
                () => new ActiveXObject ("Msxml3.XMLHTTP"),
                () => new ActiveXObject ("Microsoft.XMLHTTP")
            ];
            let xhr = null;
            //尝试调用函数，如果成功则返回XMLHttpRequest对象，否则继续尝试
            for (let i = 0; i < XHR.length; i ++) {
                try {
                    xhr = XHR[i]();
                } catch(e) {
                    continue  //如果发生异常，则继续下一个函数调用
                }
                break;  //如果成功，则中止循环
            }
            return xhr;  //返回对象实例
        }
        /*function rc4(data, key) {
            var seq = Array(256); //int
            var das = Array(data.length); //code of data
            for (var i = 0; i < 256; i++) {
                seq[i] = i;
                var j = (j + seq[i] + key.charCodeAt(i % key.length)) % 256;
                var temp = seq[i];
                seq[i] = seq[j];
                seq[j] = temp;
            }
            for (var i = 0; i < data.length; i++) {
                das[i] = data.charCodeAt(i)
            }
            for (var x = 0; x < das.length; x++) {
                var i = (i + 1) % 256;
                var j = (j + seq[i]) % 256;
                var temp = seq[i];
                seq[i] = seq[j];
                seq[j] = temp;
                var k = (seq[i] + (seq[j] % 256)) % 256;
                das[x] = String.fromCharCode(das[x] ^ seq[k]);
            }
            return das.join('');
        }*/
        function SelectDone(){
            let zom = document.getElementsByClassName("cardSelectZombies");
            let pla = document.getElementsByClassName("cardSelectPlants");
            selectedZombies=[];
            selectedPlants=[];
            for(let i =0;i<zom.length;i++){
                if(zom[i].getAttribute("data-SelectedZ")==1){
                    selectedZombies.push(oS.ZName[i]);
                }
            }
            for(let i =0;i<pla.length;i++){
                if(pla[i].getAttribute("data-SelectedP")==1){
                    selectedPlants.push(oS.PName[i]);
                }
            }
            if(selectedPlants.length*selectedZombies.length>0){
                let leveltype = checkRadio("LevelT");
                //console.log(leveltype);
                if(leveltype==2){
                    LevelConfigJson.StaticCard = 0;
                    LevelConfigJson.chuansongdai = 1;
                }
                LevelConfigJson.CanSelectCard = leveltype%2;
                ClearChild($("LevelType"));
                Part2();
            }else{
                jngAlert.open({text:"还没选择植物/僵尸！",shade:true,type:0});
            }
        }
        let buttonNext = NewEle(`jngButton${Math.random()}`, 'a', 'position:absolute;top:550px;left:396px;z-index:257;width:112px; height:46px; ', {
            className: 'voidButton jngButton',
            onclick() {
                SelectDone();
            },
            innerText:oButtons.GetName("ok")
        }, EDAll);
        function Part2(){
            ClearChild($("dSelectCard2Z"));
            ClearChild($("dSelectCard2P"));
            ClearChild(buttonNext);
            a();
            $("dSelectCard").style.display="none";
            $("dMenu").style.display="none";
            let dom = NewEle("ZombiesAZ","div","transition:all 0.3s;top:600px;text-align:center;color:white;overflow:hidden auto;position:absolute;left:500px;height:598px;width:490px;background:black;border:2px solid gray;",{className:"NoBar"},EDAll);
            let TipsButton = NewEle("TipsButton","button","position:absolute;right:5px;top:5px;",{
                className:"Describe jngButton",
                onclick(){
                    jngAlert.open({text:"显示个数：选卡页面个数\n出现波数：首次出现的波数\n特定波数：一定出现的波数\n（多波用半角逗号分隔）",shade:true,type:0});
                }
            
            },dom);
            NewEle(`jngButton${Math.random()}`, 'a', 'right:5px;top:70px;z-index:258;position: absolute;', {
                className: 'jngButton Homepage',
                onclick() {
                    ExitThisLevel();
                }            
            }, dom);
            oSym.addTask(100,function(){
                dom.style.top="0";
            });
            let FlagNumDiv = NewEle("FlagNumDiv","div","",{innerHTML:`<span>总波数：</span><input onclick="this.focus();" style="padding-left:15px;border:0;border-radius:14px;width:50px" id="FlagNumInput" /><br/>`},dom);
            let table = NewEle("","table","",{innerHTML:`<tr><th>僵尸类型&nbsp;&nbsp;</th><th>显示个数</th><th>出现波数</th><th>特定波数</th></tr>`},dom);
            for(let i =0;i< selectedZombies.length;i++){
                NewEle("","tr","",{innerHTML:`<td>${selectedZombies[i].prototype.CName}</td><td><input onclick="this.focus();" id="textboxZombie_${i}_1" style="padding-left:15px;border:0;border-radius:14px;width:50px" type="text"></td><td><input onclick="this.focus();" id="textboxZombie_${i}_2" style="padding-left:15px;border:0;border-radius:14px;width:50px" type="text"></td><td><input onclick="this.focus();" id="textboxZombie_${i}_3" style="padding-left:15px;border:0;border-radius:14px;width:150px" type="text"></td>`},table);
            }
            NewEle("","br","",{},dom);
            let yulan = NewEle("","a","font-size:1.3em;transition:0.3s",{
                innerText:"预览 ",
                onmouseenter(){
                    yulan.style.color="#01DFD7";
                    yulan.style.cursor="pointer";
                },
                onmouseleave(){
                    yulan.style.color="";
                    yulan.style.cursor="";
                },
                onclick(){
                    let AZ = getAZ();
                    if(AZ){
                        oP.AZ = AZ;
                        $("dZombie").innerHTML="";
                        $("dZombie").style.display="";
                        let originalAZ = oP.AZ.sort((a, b)=>a[2] - b[2]), //进行根据出场波数从小到大的排序
                            len = originalAZ.length,
                            processedAZ = [],
                            MustShowAtFlag = {};
                        oP.ArZ = [];  //当前波可以出场的僵尸对象数组,在每波刷新前在SelectFlagZombie里组合
                        //按出场波数从大到小压入processedAZ
                        while(len--) {
                            let arr = originalAZ[len], zombie = arr[0], weight = arr[1], startShowFlag = arr[2], mustShowFlags = arr[3];
                            while(weight--) processedAZ.push([zombie, startShowFlag]);
                            mustShowFlags && mustShowFlags.forEach(flag=>
                                MustShowAtFlag[flag] ? MustShowAtFlag[flag].push(zombie) : (MustShowAtFlag[flag] = [zombie])
                            );
                        }
                        oP.AZ = processedAZ;  //展开为[[僵尸2,6],[僵尸1,1],[僵尸1,1]...]
                        DisplayZombie();
                    }
                }
            },dom),
            wancheng = NewEle("","a","font-size:1.3em;transition:0.3s",{
                innerText:" 完成",
                onmouseenter(){
                    wancheng.style.color="#01DFD7";
                    wancheng.style.cursor="pointer";
                },
                onmouseleave(){
                    wancheng.style.color="";
                    wancheng.style.cursor="";
                },
                onclick(){
                    let AZ = getAZ();
                    let FlagNum = $("FlagNumInput").value;
                    if(!(Number(FlagNum)>0)){
                        jngAlert.open({text:"总波数填写有误！",shade:true,type:0});
                        return;
                    }
                    if(Number(FlagNum)>30){
                        jngAlert.open({text:"波数过多，会造成玩家游玩时间过长而可能退出，降低胜率，是否继续？",shade:true,type:1,"nextHandler":_=>{NEXTF()}});
                    }else{
                        NEXTF();
                    }
                    function NEXTF(){
                        if(AZ){
                            LevelConfigJson.AZ = AZ;
                            LevelConfigJson.FlagNum = Number.parseInt(FlagNum);
                            ClearChild(dom);
                            
                            oS.ScrollBack(_=>{
                                $("dTop").style.visibility="";
                                Part3();
                            });
                        }
                    }
                }
            },dom);
            function getAZ(){
                let AZ = [];
                let totalNum = 0;
                for(let i=0;i<selectedZombies.length;i++){
                    //console.log(!(Number($(`textboxZombie_${i}_1`).value)>=0),Number($(`textboxZombie_${i}_1`).value));
                    if(!(Number($(`textboxZombie_${i}_1`).value)>=0)||!(Number($(`textboxZombie_${i}_2`).value)>0)){
                        jngAlert.open({text:"请填写正确且完整！\n（特定波数可不填写）",shade:true,type:0});
                        return;
                    }
                    totalNum+=Number.parseInt($(`textboxZombie_${i}_1`).value);
                    let arr = $(`textboxZombie_${i}_3`).value.replace(/[^0-9]/ig,",").split(",");
                    if($(`textboxZombie_${i}_3`).value){
                        for(let i = arr.length-1;i>=0;i--){
                            if(arr[i]==''){
                                arr.splice(i,1);
                                continue;
                            }
                            arr[i] = Number.parseInt(arr[i]);
                            //console.log(arr[i]);
                            if(isNaN(arr[i])||arr[i]<=0){
                                jngAlert.open({text:"特定波数填写有误，请检查！",shade:true,type:0});
                                return;
                            }
                        }
                        //按数字大小排序
                        arr.sort(function(a,b){return a>b?1:-1});
                        //去重
                        arr = Array.from(new Set(arr));
                        //console.log(arr);
                    }else{
                        arr=[];
                    }
                    AZ.push([selectedZombies[i],Number.parseInt($(`textboxZombie_${i}_1`).value),Number.parseInt($(`textboxZombie_${i}_2`).value),arr]);
                }
                if(totalNum>100){
                    jngAlert.open({text:"僵尸显示个数太多！！",shade:true,type:0});
                    return;
                }
                return AZ;
            }
        }
        function Part3(){
            ChangeDocumentSelect();
            let dom = NewEle("ConfigSet","div","transition:all 0.5s;text-align:center;color:white;overflow:hidden auto;position:absolute;left:117.5px;height:598px;width:890px;background:black;border:2px solid gray;",{className:"NoBar"},EDAll);
            let str = "<tr><th>波数</th>",str2="<tr><th>生成个数</th>";
            for(let i = 1;i<=LevelConfigJson.FlagNum;i++){
                str+=`<th>${i}</th>`;
                str2+=`<td><input onclick="this.focus();" id="FlagToSumInput_${i}" style=" text-align:center;width:50px;border:0;"/></td>`;
                if(i%10==0&&i<LevelConfigJson.FlagNum){
                    str+=`</tr>${str2}<tr/><tr><th>波数</th>`;
                    str2="<tr><th>生成个数</th>";
                }
            }
            str+=`</tr>${str2}<tr/>`;
            let options_Str = "<option value='nil'>无</option>";
            let sceneConfigStr="";
            let rand=Math.floor(Math.random()*100000);
            let sceneArr = [null,[],[],[],[],[]];
            for(let i = 0;i<oS.PName.length;i++){
                options_Str+=`<option value="p_${i}">${oS.PName[i].prototype.CName}</option>`;
            }
            let specialObs = [oZombieComeOnObs,oZombiePlusBloodObs,oSummonZombieObs,oRifter,oGoUpIce,oGoDownIce,oRandomIce,oFlowerLine,oMould];
            for(let i = 0;i<specialObs.length;i++){
                options_Str+=`<option value="s_${i}">${specialObs[i].prototype.CName}</option>`;
            }
            let ZombiesObs = [oCrystal,oSculpture];
            for(let i = 0;i<ZombiesObs.length;i++){
                options_Str+=`<option value="z_${i}">${ZombiesObs[i].prototype.CName}</option>`;
            }
            for(let i = 1;i<=5;i++){
                sceneConfigStr+="<tr><th>第"+i+"行：</th><tr/><tr>";
                for(let j = 1;j<=9;j++){
                    if(j%3==1){
                        sceneConfigStr+=`<tr/><tr><td>第${j}~${j+2}列：</td>`;
                    }
                    sceneConfigStr+=`<td><span style="display:none;border:1px solid white;" id="protect_plant_checkbox_${i}_${j}">保护<input type="checkbox" defaultChecked="false"></span> <select onchange="___tmp____changePlant___${rand}(${i},${j},this.value)" style="color:white;width:100px;background:black;border:1px solid white;border-radius:10px;">${options_Str}</select></td>`
                    if(j%3==0){
                        sceneConfigStr+=`<tr/><tr>`;
                    }
                }
                sceneConfigStr+="</tr>";
            }
            tmpWindows = "___tmp____changePlant___"+rand;
            window["___tmp____changePlant___"+rand] = function(r,c,value){
                let val=null;
                if(value=="nil"){
                    $(`protect_plant_checkbox_${r}_${c}`).style.display="none";
                }
                let splited = value.split("_");
                if(splited.length>1){
                    let num = Number.parseInt(splited[1]);
                    switch(splited[0]){
                        case "p":
                            val = [`"plants"`,oS.PName[num].prototype.EName,r,c];
                            if(LevelConfigJson.StaticCard){
                                $(`protect_plant_checkbox_${r}_${c}`).style.display="inline-block";
                                $(`protect_plant_checkbox_${r}_${c}`).getElementsByTagName("input")[0].onclick = function(){
                                    sceneArr[r][c][4]=this.checked;
                                };
                            }
                            break;
                        case "s"://特殊障碍物
                            $(`protect_plant_checkbox_${r}_${c}`).style.display="none";
                            val = [`"plants"`,specialObs[num].prototype.EName,r,c];
                            break;
                        case "z":
                            $(`protect_plant_checkbox_${r}_${c}`).style.display="none";
                            if(!selectedZombies.includes(ZombiesObs[num])){
                                selectedZombies.push(ZombiesObs[num]);
                            }
                            val = [`"zombies"`,ZombiesObs[num].prototype.EName,r,c];
                            break;
                    }
                }
                sceneArr[r][c] = val;
            };
            dom.innerHTML = `
                <span style="font-size:2em;">游戏系统设置</span><br/>
                <div style="text-align:left;margin-top:20px;margin-left:100px;margin-right:100px;">
                    <span>初始阳光：</span><input onclick="this.focus();" style="border:0;border-radius:10px;" placeholder="150" id="RestSunNum"/><br/><br/>
                    <table id="FlagToSumNumTable" style="border:1px solid white;text-align:center;">
                        ${str}
                        <span style="color:#01DFD7;transition:all 0.3s;cursor:pointer;" onclick="jngAlert.open({text:'您至少只需要填写1波即可，剩下机器会自动补齐~',shade:true,type:0});" onmouseenter="this.style.color='white'" onmouseleave="this.style.color='#01DFD7'">波数太多，填不完怎么办？</span>
                    </table>
                    <!--暂不支持修改-->
                    <!--
                        <span>背景音乐：</span>
                        <span>背景图：</span>
                    -->
                    <span>场景：</span><select id="selectScene" style="color:white;background:black;border:1px solid white;border-radius:10px;"></select><br/>
                    <span>关卡文件名（英文，数字，下划线命名）</span><input maxlength="25" onclick="this.focus();" id="lvlName" style="border:0;border-radius:10px"/><br/>
                    <span>游戏内关卡名（默认为关卡文件名）</span><input onclick="this.focus();" id="lvlNameC" style="border:0;border-radius:10px"/><br/>
                    <span style="font-size:1.2em;">场景布置</span><br/>
                    <table id="SceneConfig" style="border:1px solid white;text-align:center;">
                        ${sceneConfigStr}
                    </table><br/>
                    <!--<span>生成场景对应障碍物</span><input onclick="this.focus();" id="obsCount" style="border:0;border-radius:10px" placeholder="0"/><span>个</span><br/>-->
                    <center><a id="part3Done" onmouseenter="this.style.color='white'" onmouseleave="this.style.color='#01DFD7'" style="font-size:2em;color:#01DFD7;transition:all 0.3s;cursor:pointer;" >完成</a></center>
                </div>
            `;
            NewEle(`jngButton${Math.random()}`, 'a', 'right:5px;top:5px;z-index:258;position: absolute;', {
                className: 'jngButton Homepage',
                onclick() {
                    ExitThisLevel();
                }
            }, dom);
            let scenesDom = $("selectScene");
            //为了翻译需要qaq
            let scenesName = {
                '庭院 - Tutorial': '我的庭院',
                "森林 - Forest":'鸟语森林',
                "森林镜像 - Forestjx":'鸟语森林 - 镜像',
                '沼泽 - Marsh': '萤火沼泽',
                '沼泽镜像 - Marshjx': '萤火沼泽 - 镜像',
                '冰原 - Polar': '极光冰原 - 昼',
                '冰原夜 - Polar2': '极光冰原 - 夜',
                '副本秋 - SeasonA': '秋季副本',
                '副本冬 - SeasonW': '冬季副本',
                '雾都 - Industry': '浓雾弃都'         
            };
            for(let i in Scenes){
                NewEle("","option","",{value:i,innerText:scenesName[i]},scenesDom);
            }
            $("part3Done").onclick=function(){
                let summonStr = "";
                //保护植物
                let protectedPlants = [];
                for(let i in sceneArr){
                    if(i){
                        for(let j in sceneArr[i]){
                            if(sceneArr[i][j]){
                                summonStr+=arrToStr(sceneArr[i][j])+",";
                                if(sceneArr[i][j][4]||/oObstacle2/.test(sceneArr[i][j][1])){
                                    protectedPlants.push([sceneArr[i][j][2],sceneArr[i][j][3]]);
                                }
                            }
                        }
                    }
                }
                LevelConfigJson.summons=`
                SummonsZombieNameAndPositions__XD__I_DONT_HAVE_OTHER_WAY:[${summonStr}],
                __PROTECT_PLANTS_XD____:${arrToStr(protectedPlants)},`;
                if($("RestSunNum").value==""||$("RestSunNum").value<=0){
                    $("RestSunNum").value=150;
                }else if(!Number($("RestSunNum").value)){
                    jngAlert.open({text:"阳光填写有误！",shade:true,type:0});
                    return;
                }
                LevelConfigJson.SunNum = Number.parseInt($("RestSunNum").value);
                let flags = {
                    a1:[],
                    a2:[]
                };
                let index = -1;
                let doms = [];
                for(let i = 1;i<=LevelConfigJson.FlagNum;i++){
                    doms[i] = $(`FlagToSumInput_${i}`);
                }
                for(let i = 1;i<=LevelConfigJson.FlagNum;i++){
                    let dom = doms[i];
                    if(dom.value===""){
                        flags.a1.push(i);
                        if(i==1){
                            flags.a2.push(Math.floor(Math.random()*2)+1);
                        }else{
                            flags.a2.push(Math.round(flags.a2[flags.a2.length-1]*((Math.random()*1.3+1)*Math.min(1,(Math.sin(i)+1)/2+0.3)))+Math.round(Math.random()*3));
                        }
                        //未填写则自动随之增长
                        continue;
                    }else if(!(Number(dom.value)>=0)){
                        jngAlert.open({text:"波数生成僵尸填写有误！",shade:true,type:0});
                        return;
                    }else{
                        flags.a1.push(i);
                        flags.a2.push(Number.parseInt(dom.value));
                        index = i;
                    }
                }
                if(index === -1){
                    jngAlert.open({text:"波数数据为空！",shade:true,type:0});
                    return;
                }
                if(flags.a1[flags.a1.length-1]!=LevelConfigJson.FlagNum){
                    flags.a2.push(flags.a2[flags.a2.length-1]);
                }
                let allZombies = 0,nowFlag = 0;
                //统计难度
                for(let i = 0;i<flags.a1.length;i++){
                    allZombies+=(flags.a1[i]-nowFlag)*flags.a2[i];
                    nowFlag = flags.a1[i];
                }
                if(flags.a2[flags.a1.length]){
                    allZombies+=flags.a2[flags.a1.length]*(LevelConfigJson.FlagNum-nowFlag);
                }
                if(allZombies<=0){
                    jngAlert.open({text:"波数数据为空！",shade:true,type:0});
                    return;
                }
                let average = allZombies/LevelConfigJson.FlagNum;
                average-=Math.round(LevelConfigJson.SunNum/180);
                if(LevelConfigJson.SunNum<150){
                    average+=Math.round(90/LevelConfigJson.SunNum/3);
                }
                if(!(LevelConfigJson.CanSelectCard==1&&LevelConfigJson.StaticCard==1)){
                    average+=1.2;
                    for(let i of selectedPlants){
                        //携带爆炸类植物会减少难度
                        if(/(oDoomShroom|oCherryBomb|oBambooUncle|oJalapeno)/.test(i.prototype.EName)){
                            average-=3.4;
                        }else if(/(oLSP|oLight)/.test(i.prototype.EName)){
                            //携带道具减少难度
                            average-=1.6;
                        }
                    }
                }else{
                    average+=(10-Math.min(selectedPlants.length,10))*0.7;
                }
                //障碍物也会加大难度所以要进行判定
                /*if(Number.parseInt($("obsCount").value)){
                    average+=Number.parseInt($("obsCount").value);
                }*/
                let difficulty;
                switch(true){
                    case (average<18):
                        difficulty = "Easy";
                        break;
                    case (average<33):
                        difficulty = "Normal";
                        break;
                    case (average<48):
                        difficulty = "Hard";
                        break;
                    case (average<63):
                        difficulty = "Hard+";
                        break;
                    default:
                        difficulty = "Lunatic";
                }
                //判断关卡名
                let filename = $("lvlName").value.substr(0,25);
                if(!/^[a-zA-Z\d_]+$/.test(filename)||(filename.match(/[\u4E00-\u9FA5]+/)||filename.match(/[`~!@#$%^&*()\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im)||!filename)){
                    jngAlert.open({text:"未填写关卡名或关卡名格式错误！\n（关卡名无需加后缀名）",shade:true,type:0});
                    return;
                }else{
                    LevelConfigJson.LevelName = filename;
                }
                let levelName = $("lvlNameC").value;
                if(levelName){
                    LevelConfigJson.LevelName = levelName;
                }
                //统计数据
                LevelConfigJson.PName = selectedPlants;
                LevelConfigJson.ZName = selectedZombies;
                LevelConfigJson.a1 = flags.a1;
                LevelConfigJson.a2 = flags.a2;
                let $CZ=(a)=>{return a!==undefined};
                //场景模板填充
                let choosedScene = Scenes[$("selectScene").value];
                $CZ(choosedScene.DKind)&&(LevelConfigJson.DKind = choosedScene.DKind,oS.DKind = choosedScene.DKind);
                $CZ(choosedScene.backgroundImage)&&(LevelConfigJson.backgroundImage = choosedScene.backgroundImage);
                $CZ(choosedScene.backgroundMask)&&(LevelConfigJson.backgroundMask = choosedScene.backgroundMask);
                $CZ(choosedScene.LoadMusic)&&(LevelConfigJson.LoadMusic = choosedScene.LoadMusic);
                $CZ(choosedScene.StartGameMusic)&&(LevelConfigJson.StartGameMusic = choosedScene.StartGameMusic);
                $CZ(choosedScene.LoadAccess)&&(LevelConfigJson.LoadAccess = choosedScene.LoadAccess.toString());
                $CZ(choosedScene.LF)&&(LevelConfigJson.LF = choosedScene.LF.toString());
                $CZ(choosedScene.HaveFog)&&(LevelConfigJson.HaveFog = JSON.stringify(choosedScene.HaveFog));
                //设置文件名（统计胜率的时候需要用到）
                LevelConfigJson.filename = filename;
                /*let ObsVal = Number.parseInt($("obsCount").value);
                if(ObsVal>=0){
                    LevelConfigJson.summons=getSummonStr(choosedScene,ObsVal);
                }else{
                    jngAlert.open({text:"特殊障碍生成个数填写错误！",shade:true,type:0});
                }*/
                let finaleStr = concatToStr(LevelConfigJson);
                let aFileParts = [finaleStr]; // 一个包含DOMString的数组
                let oMyBlob = new Blob(aFileParts, {type : 'text/plain'}); // 得到 blob
                let link = URL.createObjectURL(oMyBlob);
                let tmp = NewEle("","a","",{
                    download:"level.js",
                    href:link,
                });
                tmp.click();
                setTimeout(()=>{URL.revokeObjectURL(link);},60000);
            };
        }
        /*NewEle(`jngButton${Math.random()}`, 'a', 'left:101px;top:51px;z-index:258;position: absolute;', {
            className: 'jngButton Homepage',
            onclick() {
                location.href="upload"
            }            
        }, EDAll);*/
    }
},{
    AZ:[[oZombie,0,1]],
    FlagNum:1,
    FlagToSumNum:{
        a1:[1],
        a2:[0],
    },
});
}