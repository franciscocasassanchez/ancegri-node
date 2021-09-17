let homePageList = document.getElementsByClassName('pageblock__page--home');
let modeloPageList = document.getElementsByClassName('pageblock__page--modelo');
let homeIndex = 0;
let homePages = new Map();
for(var i = 0; i < homePageList.length; i++){
    homePages.set(i, homePageList[i]);
}
let homePagesIndexList = homePages.size;
let modeloIndex = 0;
let modeloPages = new Map();
for(var i = 0; i < modeloPageList.length; i++){
    modeloPages.set(i, modeloPageList[i]);
}
let modeloPagesIndexList = modeloPages.size;
function nextHomeSlide(){
    if(homeIndex == 0){
        for (var i = 0; i < homePagesIndexList; i++){
            homePages.get(i).style = 'left: -100vw;';
        }
        homeIndex++;
    }
    else if(homeIndex == 1){
        for (var i = 0; i < homePagesIndexList; i++){
            homePages.get(i).style = 'left: -200vw;';
        }
        homeIndex++;
    }
    else if(homeIndex == 2){
        for (var i = 0; i < homePagesIndexList; i++){
            homePages.get(i).style = 'left: -300vw;';
        }
        homeIndex++;
    }
    else{}
}
function prevHomeSlide(){
    if(homeIndex == 0){}
    else if(homeIndex == 1){
        for (var i = 0; i < homePagesIndexList; i++){
            homePages.get(i).style = 'left: 0vw;';
        }
        homeIndex--;
    }
    else if(homeIndex == 2){
        for (var i = 0; i < homePagesIndexList; i++){
            homePages.get(i).style = 'left: -100vw;';
        }
        homeIndex--;
    }
    else if(homeIndex == 3){
        for (var i = 0; i < homePagesIndexList; i++){
            homePages.get(i).style = 'left: -200vw;';
        }
        homeIndex--;
    }
}
function nextModeloSlide(){
    if(modeloIndex == 0){
        for (var i = 0; i < modeloPagesIndexList; i++){
            modeloPages.get(i).style = 'left: -100vw;';
        }
        modeloIndex++;
    }
    else{}
}
function prevModeloSlide(){
    if(modeloIndex == 0){}
    else if(modeloIndex == 1){
        for (var i = 0; i < modeloPagesIndexList; i++){
            modeloPages.get(i).style = 'left: 0vw;';
        }
        modeloIndex--;
    }
}