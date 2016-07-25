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

    var set_minute = 25;
    var set_second = 0;
    var second_t = 60;
    decrement_time();


/*function addzero(i){
    if(i<10){
        //i  = string de 0+ i => "0"+1=>01
        i="0"+i;
    }
    return i;
}*/


//

function decrement_time(){
    var k;

    for(k = second_t; k>0; k--){
        var second = k;


        console.log(second);

        console.log("valeur html: "+ time);
        time = set_minute +":"+ second;

        console.log("qu'elle est ta valeur: "+ time);
        var Timer = setInterval(time, 1000);
        };
    var time = document.getElementById("timer").innerHTML;
    document.getElementById("timer").innerHTML = time;

}
















/*$( "#play" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#stop" ).click(function(){
    
});

$( "#pause" ).click(function(){

});
*/
