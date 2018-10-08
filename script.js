//carousel interval
$('.carousel').carousel({
    interval:2500
});

//Get json file
var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', 'connorstats.json', true);
xobj.onload = function () {
 var data = JSON.parse(xobj.responseText);

sendStats(data);

}

xobj.send();


function sendStats(data){
    var htmlString = "";
    for(i=0; i<data.length;i++){
        htmlString += "<tr>";
        htmlString += "<td><a href="+data[i].url+">"+data[i].opponent+"</a></td>";
        htmlString += "<td>"+data[i].event+"</td>";
        htmlString += "<td><h4>"+data[i].result+"</h4></td>";
        htmlString += "<td>"+data[i].method+"</td>";
        htmlString += "<td>"+data[i].date+"</td>";
        htmlString += "</tr>";
    }
    $('#test').append(htmlString);
}


//Scroll Reveal animations 

window.sr= ScrollReveal();
sr.reveal('.bioTitle', {
  duration: 2000, 
  origin: 'bottom',
  distance: '100px',
  viewFactor: 0.2
})

window.sr= ScrollReveal();
sr.reveal('.statsTitle', {
  duration: 2000, 
  origin: 'bottom',
  distance: '100px',
  viewFactor: 0.2
})

window.sr= ScrollReveal();
sr.reveal('#blockTwo', {
  duration: 2000, 
  origin: 'left',
  distance: '100px',
  delay: 700
  
})

window.sr= ScrollReveal();
sr.reveal('#blockOne', {
  duration: 2000, 
  origin: 'bottom',
  distance: '200px'
})

window.sr= ScrollReveal();
sr.reveal('.pBio', {
  duration: 1500, 
  origin: 'bottom',
 
  viewFactor: 0.2
})

window.sr= ScrollReveal();
sr.reveal('.carousel', {
  duration: 1200, 
  origin: 'bottom',
 
  viewFactor: 0.2
})


window.sr= ScrollReveal();
sr.reveal('.imgSponsorOne', {
  duration: 1200, 
  origin: 'left',
  distance: '100px',
  viewFactor: 0.2
})

window.sr= ScrollReveal();
sr.reveal('.imgSponsorTwo', {
  duration: 1200, 
  origin: 'right',
  distance: '100px',
  viewFactor: 0.2
})