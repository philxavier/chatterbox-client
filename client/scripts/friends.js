var Friends = {

  friendsList: [],

  toggleStatus: function() {
    
    console.log('hello');

      
    //   $(event.target).addClass('friends');
      
    
  },

  renderFriends: function(msg) {
    if (this.friendsList.includes(msg.name)) {
      console.log(msg.name);
    }
  }

};