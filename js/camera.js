const medias = {audio: false, video: {
        // width: 300,
        // facingMode: 'environment'
        // facingMode: 'user'
        advanced: [
          { facingMode: 'environment' },
        ]
      }},
      video  = document.getElementById('video');

navigator.getUserMedia(medias, successCallback, errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
};

function errorCallback(err) {
  alert(err);
};
