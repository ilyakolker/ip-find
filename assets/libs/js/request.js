


 exports.run = function ()  {
    const request = require('request-promise')
    const option = {
        url: 'http://lumtest.com/myip.json'
    }
request(option).then(function(data){ 
    const res = JSON.parse(data);
    return res;
}, function(err){ console.error(err); })
}








