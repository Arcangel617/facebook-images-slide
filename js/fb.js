function init() {
    FB.api(
      '/172155306314467/albums',
      'GET',
      {
        "fields":"photos{images}",
        "access_token":"1220582741420054|JUC2tkSdkIxImU2p9kQiLewB9uY"
      },
      function(response) {
      	// storing data locally
        data = JSON.stringify(response);
        localStorage.setItem('fb-response',data);
      }
    );
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1220582741420054',
    xfbml      : true,
    version    : 'v2.11'
  });

  init();
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));