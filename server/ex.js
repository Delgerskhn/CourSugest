const fetch = require('node-fetch');
fetch('http://data.num.edu.mn/dataset/d522ffe5-e540-4ddd-b02f-4eb8ce70243d/resource/f45d39b1-ad02-4528-b4db-4cb211f5147d/download/-2018-autumn.json')
    .then(response => response.json())
    .then(json => console.log(json));
