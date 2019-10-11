let fs = require('fs'),
    PDFParser = require("pdf2json");

let pdfParser = new PDFParser();


pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));

pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./foo.json", JSON.stringify(pdfData), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

pdfParser.loadPDF("./foo.pdf");