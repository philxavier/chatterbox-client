var Friends = {

  friendsList: [],

  toggleStatus: function(inputElement) {

    var $element = $(inputElement);
    var searchWord = $element[0].innerHTML;
    
    if (!this.friendsList.includes(searchWord)) {
      this.friendsList.push(searchWord);
    }
 
    var names = $('.username');
    //console.log(names);
    
    for (let i = 0; i < names.length; i++) {
      var $name = $(names[i]);
      if (this.friendsList.includes($name[0].innerHTML)) {
        var $text = $name.siblings();
        var $textToBeChanged = $($text[0]);
        $textToBeChanged.addClass('text_bold');
        var $nameToBeChanged = $($name[0]);
        $nameToBeChanged.addClass('friends');
      }
    }
  
      
    
  },

  // renderFriends: function(msg) {
  //   if (this.friendsList.includes(msg.name)) {
  //     console.log(msg.name);
  //   }
  // }

};