'use strict';

var Room = function() {};

// player: {playerName: str}

// Player name is in-mutable during game
Room.prototype.createRoom = function (opts){
  this._roomName = opts.roomName;
  this._currentPlayerNum = 0;
  this._playerList = [];
  this._roomSize = opts.roomSize;
};

Room.prototype.addNewPlayer = function(opts){
  if(this._currentPlayerNum >= this._roomSize) return -1;
  this._playerList.push(opts);
  this._currentPlayerNum++;
  return 1;
}

Room.prototype.updatePlayer = function(opts){
  for (var i = 0; i < this._roomSize; i++){
    if(this._playerList[i].playerName == opts.playerName){
      this._playerList[i] = opts;
      return 1;
    }
  }
  return -1;
}

Room.prototype.roomInfo = function(){
  return this._roomName;
};

module.exports = new Room();  
