# Node Simple Web Of Trust Api

Use Node to check for malicious domains in [WOT](https://www.mywot.com/)

## Install
`npm install weboftrust`

## How to use

```javascript
const weboftrust = require('weboftrust');

weboftrust.setApiKey = "<YOUR API KEY>"

// Use checkDomains([<domain>,<domain>...]) to check that domains against WOT
// A promise will be returned
var domains = ["example.com", "www.google.com"]
weboftrust.checkDomains(domains).then(function(result){ 
    console.log(result);
}, function(err) {
    console.log(err);
});

/*
Output example
{ 'example.com':
   { '0': [ 94, 55 ],
     '1': [ 94, 55 ],
     '2': [ 94, 55 ],
     '4': [ 94, 54 ],
     target: 'example.com',
     categories: { '304': 47, '501': 95 } },
  'www.google.com':
   { '0': [ 94, 69 ],
     '1': [ 94, 69 ],
     '2': [ 94, 69 ],
     '4': [ 93, 66 ],
     target: 'google.com',
     categories: { '301': 47, '304': 6, '501': 99 } 
    } 
}
*/
```
