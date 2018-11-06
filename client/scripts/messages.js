var Messages = {

  $text: $('#message'),
  $form: $('#send'),
 
  createMessage: function() {
    var roomname = $('#rooms select').find(':selected').text();
    var message = {};
    message.text = this.$text.val();
    message.username = App.username;
    message.roomname = roomname;
    return message;
  }

  


};