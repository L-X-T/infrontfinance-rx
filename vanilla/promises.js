function loadDataFromAPI() {
  return new Promise((resolve, reject) => {
    const apiUrl = 'http://www.angular.at/api/';
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.info('[xhr] readyState: ' + this.readyState);
        console.info('[xhr] status: ' + this.status);
        resolve(this.responseText);
      } else if (this.status && this.status !== 200) {
        console.warn('[xhr] readyState: ' + this.readyState);
        console.warn('[xhr] status: ' + this.status);
        reject(this);
      } else {
        console.debug('[xhr] readyState: ' + this.readyState);
        console.debug('[xhr] status: ' + this.status);
      }
    };

    xmlHttp.open('GET', apiUrl + 'passagier?name=Muster', true);
    xmlHttp.send();
  });
}

loadDataFromAPI()
  .then((response) => {
    console.debug(' ... and here later.');
    console.warn('[Resolve] Response:');
    console.log(response);
  })
  .catch((err) => {
    console.error('[Reject] Error:');
    console.log(err);
  });

console.debug("I'm here first ... ");
