var Rooms = {
    
  add: function() {

    console.log('room.add called');
   
    var inputRoom = $('#input_room').val();
    
    RoomsView.renderRoom(inputRoom); 

    $('input[type=\'text\'],textarea').val(''); 

       
  },

  filter: function() {
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
          Friends.renderFriends(messages);
        }
      }
    });   
  }


    
};

