var RoomsView = {

  holdRooms: [],
  flag: 0,


  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    
  },

  renderRoom: function(roomname) {
    // if (this.flag === 0) {
    //   var $defaultRoom = $('<option>All Rooms</option>');
    //   $defaultRoom.appendTo(this.$select);
    //   this.flag++;
    // }
    if (roomname) {
      if (!this.holdRooms.includes(roomname)) { 
        this.holdRooms.push(roomname); 
        var $roomToBeAdded = $(`<option>${roomname}</option>`);
        $roomToBeAdded.appendTo(this.$select);
      }
    }
  }

};
