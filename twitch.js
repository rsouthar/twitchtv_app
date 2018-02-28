$(document).ready(function() {
  var url = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
  $.getJSON(url,function(data1){
    if(data1.stream===null){
      $("#fccStatus").html("Free Code Camp is offline");
    } else {
      $("#fccStatus").html("Free Code Camp is online");
    }
  });
});
