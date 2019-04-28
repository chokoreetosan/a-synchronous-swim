(function() {

  // TODO: build the swim command fetcher here
  console.log('Client-side httpHandler running...')
  const serverUrl = 'http://127.0.0.1:3000';

  //passing in server URL w/ the endpoint '/moves'
  //when success, we get a move back from our server
    //the 2nd argument to jQuery .get is a success callback

  //   $.get(serverUrl + '/moves', (dir) => {
  //   console.log(dir);
  //   // SwimTeam.move(dir)
  // }) //polling the server for enqueued directions

  $.ajax({
    url: serverUrl + '/moves',
    type: 'GET',
    success: (dir) => {
      console.log('success (alt): ' + dir)
      SwimTeam.move(dir)
    }
  })

  // recursion to get it to continuously move
  // function getDirectionFromServer(){
  //   $.get(serverUrl + '/moves', (dir) => {
  //     SwimTeam.move(dir)
  //     setTimeout(getDirectionFromServer(), 200);
  //   })
  // }
  // getDirectionFromServer()

  // $.ajax({
  //   url: serverUrl + '/moves',
  //   type: 'GET',
  //   success: (dir) => {
  //     console.log('success: alternative ' + dir)
  //   }
  // })



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
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        // reload the page
        window.location = window.location.href;
        console.log('data sent!')
      }
    });
  };


  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
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
