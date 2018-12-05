exports.run = ()=>{
    const request = require('request-promise');
    const option = {
        url: 'http://lumtest.com/myip.json'
    }
request(option).then(function(data){ 
    const rese = JSON.parse(data);
    console.log(rese);
}, function(err){ console.error(err); })
}
