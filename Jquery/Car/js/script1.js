//click go button
$('#go').click(function(){
    //if a car won the race
    function checkIfComplete()
    {
        if(isComplete==false)
            {
                isComplete=true;
            }
        else
            {
                place='second';
            }
    }
    //get width of cars
    var carWidth=$('#car1').width();
    //get width of racetrath
    var raceTrackWidth=$(window).width()-carWidth;
    //genrate a random number between 1 & 5000
    var time1=Math.floor((Math.random() *5000) +1 );
    var time2=Math.floor((Math.random() *5000) +1 );
    //set a flag to false by default
    var isComplete=false;
    //set a flag to first by default
    var place='first';
    //animate car 1
    $('#car1').animate({
        //move the car width of the racetrack
        left:raceTrackWidth
        
        
    },time1,function(){
        
        //animation is complete
        //run a function
        checkIfComplete();
        //give some text feed back
        $('#raceInfo1 span').text('finished in '+place+'place and clocked in at '+time1+' milli secs!');
    });
    $('#car2').animate({
        //move the car width of the racetrack
        left:raceTrackWidth
        
        
    },time2,function(){
        
        //animation is complete
        //run a function
        checkIfComplete();
        //give some text feed back
        $('#raceInfo2 span').text('finished in '+place+'place and clocked in at '+time2+' milli secs!');
    });
    
});
$('#reset').click(function(){
    $('.car').css('left','0');
    $('.raceInfo span').text('');
})