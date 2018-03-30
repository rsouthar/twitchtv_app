var following = [];

$(document).ready(function() {

  var url = "https://wind-bow.glitch.me/twitch-api/channels/freecodecamp/";
  $.getJSON(url,function(data1){
    var displayName = data1.display_name;
    var logo = data1.logo;
    var status = data1.status;
    console.log(displayName);
    console.log(logo);
    console.log(status);
    if(data1.status===null){
      $('#fccStatus').prepend("<div class='row channel'>" +
      "<div class='col-md-3'>" +
        "<a href='https://www.twitch.tv/"+ displayName+"'><img src='" + logo + "'></a>" +
      "</div>" +
      "<div class='col-md-4'><span class='displayName text-center'>" + displayName + "</span></div>" +
      "<div class='col-md-5'><span class='status'>" + displayName + " is offline" +
      "</div></div>");
    } else {
      $('#fccStatus').prepend("<div class='row channel'>" +
      "<div class='col-md-3'>" +
        "<a href='https://www.twitch.tv/"+ displayName+"'><img src='" + logo + "'></a>" +
      "</div>" +
      "<div class='col-md-4'><span class='displayName text-center'>" + displayName + "</span></div>" +
      "<div class='col-md-5'><span class='status'>" + status +
      "</div></div>");
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
