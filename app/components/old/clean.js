const { log } = require('console');
var fs = require('fs')

fs.readFile("./map.tsx", 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ');
    const lines = data.split('\n')
    const linesArray = lines.map(line => {
        if(!line.includes('style')) {
            return line
        }

        const [styleAttribute, stringValue] = line.split('=')
        const valueAsArray = stringValue.replaceAll('"', '').split(";")
        const valueAsArrayFormatted = valueAsArray.map(item => {
            const [key, value] = item.split(":")
            return `"${key.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })}": "${value}"`
        })

        return `${styleAttribute}={{${valueAsArrayFormatted.join(", ")}}}`
      
      
        //const value = `{{${stringValue.replace(";", ', ').replaceAll('"', '')}}}`
        //return `${key}=${value}`
    });
    const newData = linesArray.join("\n")

    fs.writeFile("./map2.tsx", newData, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});