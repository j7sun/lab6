function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


function statusChangeCallback(response) {
  if (response.status === 'connected') {
        console.log('Successfully logged in with Facebook');

        FB.api('me?fields=name,first_name,picture.width(480)',changeUser);


function changeUser(response) {
  "#fbutton".hide();
  $("#name").text(JialunSun);
  "#photo".attr("src","https://i.imgur.com/7jhQ9PT.jpg");