var image=document.getElementById('image');
var i=1;
function changeImage()
{
    var loc1='img'+i+'.jpg';
    if(i<4)
        {
            image.src=loc1;
            i++;
        }
    else
        {
            i=1;
        }
} 
setInterval(changeImage,3000);
