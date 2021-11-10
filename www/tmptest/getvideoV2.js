
var GlobalData;
var topg = '<iframe id="kaltura_player" src="https://d38ynedpfya4s8.cloudfront.net/p/296/sp/29600/embedIframeJs/uiconf_id/23449664/partner_id/296?iframeembed=true&playerId=kaltura_player&entry_id=';
var midd = '&flashvars[mediaProxy.mediaPlayFrom]='; //5&amp'
//var botg = ';flashvars[autoPMute]=false&amp;flashvars[autoPlay]=true&amp;flashvars[mobileAutoPlay]=true&amp;flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_dif1itof" width="400" height="285" allow="autoplay *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player">';

var botg = ';flashvars[autoPMute]=false&amp;flashvars[autoPlay]=true&amp;flashvars[mobileAutoPlay]=true&amp;flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_dif1itof" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player">';


var dataurl = 'https://script.google.com/macros/s/AKfycbzHGXqVABMNbQ2o5_-YqkzuOpukQxzoqhqOsnzOB5rfMOUECnXIsYnp10e0R2Dk3zV_/exec';
// var url = 'https://mattislindmark.github.io/HumlabAutoArkiv/www/videolist.json';

//var botg = '&flashvars[autoPlay]=true;flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[mediaProxy.mediaPlayFrom]=120&amp;flashvars[mediaProxy.mediaPlayTo]=600&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_dif1itof" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player">';


// Obs: tillagt flashvars[autoPlay]=true;
//

    fetch(dataurl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) { 
        GlobalData = data;
        //appendRandom(GlobalData);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    
    function GetRandomVideo()
    {
        if (GlobalData == null) {return "Error, no golbal data"};
        
        i = Math.floor(Math.random()*GlobalData.length);

        return GlobalData[i];
        
    }

    function appendRandom(data)
    {      

        var mainContainer = document.getElementById("myData");
        mainContainer.innerHTML = '';
        i = Math.floor(Math.random()*data.length);

        var div = document.createElement("div");
        div.innerHTML = 'v5 Id:'+data[i].id+' Video: ' + data[i].rubrik + ' ' + data[i].info+'</br>';
        div.innerHTML += topg+data[i].videoid+midd+data[i].start+"&amp"+botg;    
        mainContainer.appendChild(div);
        test();

    }

    function appendData(data) {
        
        var mainContainer = document.getElementById("myData");

        const top = '<iframe id="kaltura_player" src="https://d38ynedpfya4s8.cloudfront.net/p/296/sp/29600/embedIframeJs/uiconf_id/23449664/partner_id/296?iframeembed=true&playerId=kaltura_player&entry_id=';
        const bot = '&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[mediaProxy.mediaPlayFrom]=120&amp;flashvars[mediaProxy.mediaPlayTo]=600&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_dif1itof" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player">';
        
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Video: ' + data[i].rubrik + ' ' + data[i].info+'</br>';

        div.innerHTML += top+data[i].videoid+bot;
    
    }
}

function hello()
{
    document.write("hellooo");
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  async function test() {
    console.log('start timer');
    await delay(15000);
    console.log('after 15 second');
    appendRandom(GlobalData);
  }
  
