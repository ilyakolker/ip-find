function run () {
   const request = require('C:\Users\syteam\Desktop\concept-master\node_modules\request-promise\lib\rp.js')
   const option = {
       url: 'http://lumtest.com/myip.json'
   }
    request(option).then(function(data){ 
        var ipTest = document.getElementById('ip-data');
        ipTest.innerHTML = data;
    }, function(err){ console.error(err); });
}
