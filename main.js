angular.module('messageEditorApp', [])

.controller('textCtrl', function textCtrl() {
  this.moods = ['neutral', 'happy', 'sad', 'tired'];
  this.inCurr = 'neutral';
  this.fontSize = 18;
});
