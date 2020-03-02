const parse = require('csv-parse');
const fs = require('fs');
const output = [];
let csvFile = 'Data/smallworldcities.csv';


const processData = (err, data) => {
    data.shift(); // only required if csv has heading row

    const userList = data.map(row => new Cities(...row));
}

fs.createReadStream(csvFile)
    .pipe(parse({
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })
        .on('readable', function(){
            let record
            while (record = this.read()) {
                output.push(record)
            }
        })
        // When we are done, test that the parsed output matched what expected
        .on('end', function(){

            console.log(output);

        }));
