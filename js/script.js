/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */

// TODO:
/** décider de la tâche à effectuer ;
* démarrer le minuteur (25 minutes) ;
* travailler sur la tâche jusqu'à ce que le minuteur sonne et la noter comme faite ;
* prendre une courte pause (5 minutes) ;
* tous les quatre _Pomodori_ prendre une pause un peu plus longue (15-20 minutes).

Vous avez un squelette de base contenant le code **HTML**, le code **CSS**, edt qui intègre **Bootstrap** et **jQuery**.*/


//      JAVASCRIPT
 var sec = 0;
    var second_sup = 0;
    var set_minute = 25;
    var set_second = 00;
    timer_show();

function addzero(i){
    if (i < 10){
        i = "0"+i;
    }
    return i;
};
function timer_show(){

    var html_time = document.getElementById("timer").innerHTML;
        /*console.log("qu'elle est ta valeur dans l'html: "+ html_time);*/
        /*console.log("set_second (avant modif) = " + set_second);*/
        set_second = increment_second();
        /*console.log("set_second (après modif) = " + set_second);*/
        html_time = set_minute +":"+ addzero(set_second);
        document.getElementById("timer").innerHTML = html_time;
        /*console.log("qu'elle est ta valeur: "+ html_time); */
};


//TODO: [] Ajout une second en ++
function increment_second(){
    /*sec ++ ;
    return sec;*/
var second_minute;
    second_minute = 60;
//TODO [] Parcourir un tableau.
    console.log(second_minute.length);

    for(var i = 0; i < second_minute.length; i++){
        var second_plus = second_minute[i];

        console.log("Qu'est ce que celà donne: "+ second_plus);
       // break;
    }
    return second_plus;
}



/*function auto_click(){

 	if(score >= cout_autoclick){
 		var auto_interval;

 		ratio_autoclick += 10;
 		auto_interval= setInterval(function(){ compteur(); }, 2000+ratio_autoclick);
 		score-=cout_autoclick;
 		incrementeAutoclick();

 		console.log("Autoclick à une valeur de:"+cout_autoclick);
 		console.log("Autoclick à un ratio de:"+ratio_autoclick);
 	}
 	else{
 		console.log("Autoclick à une valeur de:"+cout_autoclick);
 	}
}*/


/*function addzero(i){
    if(i<10){
        //i  = string de 0+ i => "0"+1=>01
        i="0"+i;
    }
    return i;
}*/




/*function decrement_time(){
    for(var i; i = 0; i > second_t; i++){
        var second = i;
        console.log(second);
        console.log("valeur html: "+ time);

        time = set_minute +":"+ second;
        console.log("qu'elle est ta valeur: "+ time);

        //var Timer = setInterval(time, 1000);
        };

    var time = document.getElementById("timer").innerHTML;
    document.getElementById("timer").innerHTML = time;

}*/
















/*$( "#play" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#stop" ).click(function(){

});

$( "#pause" ).click(function(){

});
*/
