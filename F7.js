if (Meteor.isClient) {
  var myApp = new Framework7();

  var $$ = Dom7; //Dom Lib

  $$('.open-about').on('click', function () {
    myApp.popup('.popup-about');
  });

  $$('.open-services').on('click', function () {
    myApp.popup('.popup-services');
  });

  $$('.open-left-panel').on('click', function (e) {
      // 'left' position to open Left panel
      myApp.openPanel('left');
  });

  $$('.open-right-panel').on('click', function (e) {
      // 'right' position to open Right panel
      myApp.openPanel('right');
  });

  $$('.panel-close').on('click', function (e) {
      myApp.closePanel();
  });

  $$('.open-login').on('click', function () {
    myApp.loginScreen();
  });

  $$('.toggle').on('click', function () {
    myApp.sortableToggle('.sortable');
  });
              
  /*var myApp = new Framework7({
    swipePanel: 'left'
  });
*/
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
