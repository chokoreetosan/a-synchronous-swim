(function() {

  // TODO: build the swim command fetcher here
  console.log('Client-side httpHandler running...')
  const serverUrl = 'http://127.0.0.1:3000';

  //passing in server URL w/ the endpoint '/moves'
  //when success, we get a move back from our server
    //the 2nd argument to jQuery .get is a success callback

//   $.get(serverUrl + '/moves', (dir) => {
//     console.log(dir);
//     // SwimTeam.move(dir)
//   }) //polling the server for enqueued directions

//   $.ajax({
//     url: serverUrl + '/moves',
//     type: 'GET',
//     success: (dir) => {
//       console.log('success (alt): ' + dir)
//       SwimTeam.move(dir)
//     }
//   })

// //  recursion to get it to continuously move
//   function getDirectionFromServer(){
//     $.get(serverUrl + '/moves', (dir) => {
//       SwimTeam.move(dir)
//       setTimeout(getDirectionFromServer(), 200);
//     })
//   }
//   getDirectionFromServer()

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUpload = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl + '/background.jpg',
      cache: false,
      contentType: false,
      processData: false, //since we are sending a 'buffer' we do not want it to be processed into key:value pairs
      success: (data) => {

        console.log('file POST test success!')

        // reload the page
        window.location = window.location.href;

      },
      error: (err) => {
        console.log(err)
      }
    });
  };

  function getDirectionFromServer(){
    // get the file from the input tag
    // send an ajax request to our server

    // refresh page
  }

  $('form').on('submit', function(event) {
    event.preventDefault();

    var form = $('form .file')[0]; //
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }


    ajaxFileUpload(file);
  });

})();
