var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(msg) {
    
    var $html = $(MessageView.render(msg));
    $html.appendTo(this.$chats);


  }


};