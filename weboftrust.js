const https = require('https');

var apiKey = "";

function checkDomains(hosts){
    var promise = new Promise(function(resolve, reject) {
        if (apiKey == "" ) reject(Error("Please set the api key using the function setApiKey(KEY)"));

        var str = ''
        var path = '/0.4/public_link_json2?hosts=';
        hosts.forEach(function(host){
            path += host + '/'
        })
        path += '&key='+apiKey;
        var options = {
            host: 'api.mywot.com',
            path: path
        };
        
        https.request(options, function(res){
              res.on('data', function(chunk){
                str += chunk;
              });
              res.on('end', function () {
                result = JSON.parse(str);
                if (result == '' || result == {}) reject(Error("Error using Web Of Trust: "+error));
                resolve(result);
              });
          }).end();
    });
    return promise;
}

exports.setApiKey = function(key){ apiKey = key; }
exports.checkDomains = checkDomains;
