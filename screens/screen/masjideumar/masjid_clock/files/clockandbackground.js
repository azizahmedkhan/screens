  function bodyLoad(daysAfter) {
    daysAfter = daysAfter || 0;
    var date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    var aladhanDateAPI = "https://api.aladhan.com/gToH?date="+(date.getDate()+daysAfter)+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
    $.getJSON( aladhanDateAPI, function(data) {
      var hijriJSON = data['data']['hijri'];
      document.getElementById("hijriDate").innerHTML=
      "<p>"+(Number(hijriJSON.day))+"-<em>"+hijriJSON['month']['en']+"</em>-"+hijriJSON['year']+"</p>"
      +
      "<p>"+date.getDate()+"-"+monthNames[date.getMonth()]+"-"+date.getFullYear()+"</p>";
    });

};

setInterval(function() {
  function r(el, deg) {
    el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
  }
  var d = new Date()
  r(sec, 6*d.getSeconds())
  r(min, 6*d.getMinutes())
// r(min, 5*6*d.getSeconds())
  r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)

}, 1000)

setInterval(function() {
  var d = new Date()
  currentMinutes = d.getMinutes()
  currentHours = d.getHours()
  //currentMinutes = 00;
  //currentHours = 00;
  var currentTime = currentHours+currentMinutes/60;
  var dateChangeTime = 00;
  var  fajarTimes = document.getElementById("fajarTime").innerHTML.split(":");
  var fajarMinutes = parseFloat((parseInt(fajarTimes[1])+20)/60);
  var fajarTime = parseInt(fajarTimes[0])+fajarMinutes;

  var  maghribTimes = document.getElementById("maghribTime").innerHTML.split(":");
  var maghribMinutes = parseFloat((parseInt(maghribTimes[1])+10)/60);
  var maghribTime = parseInt(maghribTimes[0])+12+maghribMinutes;

  if(currentTime > fajarTime) {
    document.getElementById("sectionContainer").style.backgroundImage="url('./files/light-cloud.jpg')";
  }
  if(currentTime > maghribTime) {
    document.getElementById("sectionContainer").style.backgroundImage="url('./files/clear-night.jpg')";
    bodyLoad();
  }

  if (currentTime=dateChangeTime) {
    bodyLoad();
  }


}, 1000*5)
