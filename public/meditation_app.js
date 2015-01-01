var largeListOfNotes = [
  "hearing",
  "feeling",
  "touching",
  "seeing",
  "smelling",
  "thinking",
  "anger",
  "amusement",
  "calmness",
  "don't know",
  "judgement thought",
  "processing thought",
  "kindness",
  "pain",
  "stiffness",
  "opening",
  "surrender",
  "fear",
  "happiness",
  "visual thought",
  "audio thought",
  "coldness",
  "warmth",
  "witnessing",
  "itching"
]

var startNoting;

window.start_speaking = function() {
  frequency = parseInt($('#noting_speed').val()) * 1000;
  noteFunction = function() { speak(largeListOfNotes[Math.floor(Math.random() * largeListOfNotes.length)]); }
  startNoting = setInterval(noteFunction, frequency);
  $('#start_noting').prop('disabled', true);
  $('#stop_noting').prop('disabled', false);
}

window.stop_speaking = function() {
  clearInterval(startNoting);
  $('#start_noting').prop('disabled', false);
  $('#stop_noting').prop('disabled', true);
}
