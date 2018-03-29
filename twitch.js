var following = [];

$(document).ready(function() {

  var url = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
  $.getJSON(url,function(data1){
    if(data1.stream===null){
      $("#fccStatus").html("Free Code Camp is offline");
    } else {
      $("#fccStatus").html("Free Code Camp is online");
    }
  });
  var followerURL = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels/"
  $.getJSON(followerURL, function(data2) {
    for (var i = 0; i < data2.follows.length; i++) {
      var displayName = data2.follows[i].channel.display_name;
      var logo = data2.follows[i].channel.logo;
      var status = data2.follows[i].channel.status;
      if (status === null) {
        $('#followerInfo').prepend("<div class='row channel'>" +
        "<div class='col-md-3'>" +
          "<a href='https://www.twitch.tv/"+ displayName+"'><img src='" + logo + "'></a>" +
        "</div>" +
        "<div class='col-md-4'><span class='displayName text-center'>" + displayName + "</span></div>" +
        "<div class='col-md-5'><span class='status'>" + displayName + " is offline" +
        "</div></div>");
      } else {
        $('#followerInfo').prepend("<div class='row channel'>" +
        "<div class='col-md-3'>" +
          "<a href='https://www.twitch.tv/"+ displayName+"'><img src='" + logo + "'></a>" +
        "</div>" +
        "<div class='col-md-4'><span class='displayName text-center'>" + displayName + "</span></div>" +
        "<div class='col-md-5'><span class='status'>" + status +
        "</div></div>");
      }
    }
  });
});
