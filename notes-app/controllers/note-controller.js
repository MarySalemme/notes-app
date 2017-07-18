window.onclick = function() {
  var greetings = document.getElementById('app');
  
  function changeGreeting(text) {
    greetings.innerHTML = text;
  };
  
  changeGreeting('Howdy');
};
