var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(msg) {
    
    var testString = msg.text.split('');

    if (testString.includes('<')) {
      return;
    }

    var $html = $(MessageView.render(msg));

    $html.appendTo(this.$chats);

  
  }


};