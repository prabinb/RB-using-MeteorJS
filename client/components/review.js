var colors=['purple','red','orange','green','blue'];
$(document).ready(function(){
    var tiles = $('.tile');
    for(i=0; i<tiles.length;i++){
        $(tiles[i]).addClass(colors[Math.floor(Math.random()*100)%colors.length]);
    }
});
