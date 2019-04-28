const serverUrl = 'http://127.0.0.1:3000';


$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);

  if (arrowPress) {
    var direction = arrowPress[1];

    $.ajax({
      url: serverUrl + '/moves',
      type: 'POST',
      data: JSON.stringify(direction.toLowerCase()),
      success: (dir) => {
        console.log('successful dir POST: ' + dir)
        SwimTeam.move(dir)
        // SwimTeam.move(dir)
      }
    })

    // SwimTeam.move(direction.toLowerCase());
  }

});

console.log('Client is running in the browser!');
