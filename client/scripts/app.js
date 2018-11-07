var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  flag: 0,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    $('button').on('click', function() {
      Rooms.add();

    }); 
    
    
    App.startSpinner(); // Fetch initial batch of messages
    App.fetch(App.stopSpinner);//calling fetch using stopSpinner as CB function 

  },

  fetch: function(callback = ()=>{}) {
    if (App.flag) {
      Rooms.filter();
    } else {
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

        
          MessagesView.renderMessage(messages[i]); //render all messages;
          RoomsView.renderRoom(messages[i].roomname); //append rooms to dropdown menu;
        }
        
        this.flag++;
        callback();        
      });
    }    
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
