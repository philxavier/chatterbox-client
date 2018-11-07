var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(msg) {
    
    var $html = $(MessageView.render(msg));
    $html.on('click', '.username', Friends.toggleStatus);
    $html.appendTo(this.$chats);
  }

};