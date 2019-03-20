// add solution here
function theBeatlesPlay(musicians, instruments){
  var newvar=[]
  for(var i = 0; i<musicians.length; i++){
   var firstmusician = musicians[i];
   var firstinstrument = instruments[i];
   newvar.push(firstmusician + " plays " + firstinstrument)
}return newvar}
