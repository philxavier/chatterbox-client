var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(msg) {
    
    var $html = $(MessageView.render(msg));

    $html.on('click', '.username', function(event) {
      Friends.toggleStatus(event.target);
    });
    
    $html.appendTo(this.$chats);
  }

};