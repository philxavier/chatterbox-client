var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  flag: 0,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);//calling fetch using stopSpinner as CB function 

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => { 

      // examine the response from the server request:
      console.log(data);
      var messages = data.results;

      for (let i = 0; i < messages.length; i++) {
        if (!messages[i].text) {
          continue;
        }
        var test = messages[i].text.split('');
        if (test.includes('<')) {
          continue;
        }

        if (this.flag === 0) {
          MessagesView.renderMessage(messages[i]);
          RoomsView.renderRoom(messages[i].roomname);
        } else {
          Rooms.filter();
        }   
      }

      this.flag++;
      
      callback();
    });
  },

  send: function(msg) {

    $('#chats').html('');
    Parse.create(msg, App.fetch); 
    $('#send')[0].reset();
     
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
