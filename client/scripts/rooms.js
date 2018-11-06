var Rooms = {
    
  add: function() {
    var roomToBeAdded = document.getElementById('room field').value;

    RoomsView.renderRoom(roomToBeAdded);  
    
    var test = $('#room form');
    console.log(test);
    //$('#room form')[0].reset();
    
  },

  filter: function() {
    console.log('lhere');
    $('#chats').html('');
    var $targetRoom = $('#rooms select').find(':selected').text();
  
    Parse.readAll((data) => { 

      // examine the response from the server request:
      var messages = data.results;
  
      for (let i = 0; i < messages.length; i++) {
        if (!messages[i].text) {
          continue;
        }
        var test = messages[i].text.split('');
        if (test.includes('<')) {
          continue;
        }
        RoomsView.renderRoom(messages[i].roomname);
        if (messages[i].roomname === $targetRoom) {
          MessagesView.renderMessage(messages[i]);
        }
      }
    });   
  }


    
};

