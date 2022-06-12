const axios = require('axios');

const url = 'input your url' // Input API Gateway URL
const max = 50;
const test_num = "01"; // Input truck num
let file_num = "";

for(let i = 1; i< max; i++){
    i < 10 ? file_num = '0' + String(i) : file_num = i;
    const filename = './truck' + String(test_num) + '_test_data/truck' + String(test_num) + '_route' + String(file_num) + '.json';
    const payload = require(filename);

    axios.post(url, {
        "truckId" : payload.truckId,
        "timestamp" : payload.timestamp,
        "location" : payload.location
    }).then((res) => {
        console.log(res)
    })
}