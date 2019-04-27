const serverUrl = 'http://127.0.0.1:3000';

// const ajaxKeyPress = (dir) => {
//   $.ajax({
//     type: 'POST',
//     data: dir,
//     url: serverUrl,
//     cache: false,
//     contentType: false,
//     processData: false,
//     success: (data) => {
//       // reload the page
//       // window.location = window.location.href;
//       console.log('data sent!')
//     }
//   });
// };

const ajaxRequest = ()=>{
  $.ajax({
    type: 'GET',
    url: serverUrl,
    cache: false,
    data: null,
    contentType: false,
    processData: false,
    success: ()=> {
      console.log('asking for a random movement direction');
    },
    error: (error)=>{
      console.log('failed GET request')
    }
  });
}

ajaxRequest();




$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);

  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  //  ajaxKeyPress(direction)
  }

});

console.log('Client is running in the browser!');
