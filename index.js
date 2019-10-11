let fs = require('fs'),
    PDFParser = require("pdf2json");

let pdfParser = new PDFParser();
// let pdfParser = new PDFParser(this,1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));


pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./foo.json", JSON.stringify(pdfParser.getAllFieldsTypes()), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    // fs.writeFile("./foo.json", JSON.stringify(pdfData), (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });

    // fs.writeFile("./foo.txt", pdfParser.getRawTextContent(), err => {});
});

pdfParser.loadPDF("./foo.pdf");