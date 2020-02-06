var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// for(var i=0;i<navMenuAnchorTags.length;i++){
//     // console.log(i)
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);
//         console.log(targetSection);
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,50);
//         },20); 
//     });
//     event.preventDefault();
// }

var interval;
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        inteval = setInterval(function(){
            scrollVertically(targetSection);
        },20);
    });
    event.preventDefault();
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
    
}