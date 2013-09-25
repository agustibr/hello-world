hello.subscribe('auth.login', function(auth){
  // call user information, for the given network
  hello.api( auth.network + '/me', function(r){
    if(!r.id || !!document.getElementById(r.id) ){
      return;
    }
    var target = document.getElementById("profile_"+ auth.network );
    target.innerHTML = '<img width="50px" src="'+ r.picture +'" /> Hey '+r.name;

  });
});

var FACEBOOK_CLIENT_ID = '313604172039798';
var GOOGLE_CLIENT_ID = '139459022349.apps.googleusercontent.com';
var GITHUB_CLIENT_ID = 'b7c269ef6f30f7ab9e7b';
var TWITTER_CLIENT_ID = 'Ay5Z7h9Nju9Mb1CFMyHKFA';
hello.init({ 
  facebook : FACEBOOK_CLIENT_ID,
  google   : GOOGLE_CLIENT_ID,
  github   : GITHUB_CLIENT_ID,
  twitter  : TWITTER_CLIENT_ID

},{redirect_uri:'/hellojs/'});
