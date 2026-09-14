const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");

const fs = require("fs");
const path = require("path");

const Constants = require("./const.js");

class DocxDocument {
    constructor(inputFile) {
        const content = fs.readFileSync(
            path.resolve(__dirname, inputFile),
            "binary"
        );

        const zip = new PizZip(content);

        this.doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });
    }

    render(data) {
        this.doc.render(data);
    }

    export() {
        fs.writeFileSync(path.resolve(__dirname, Constants.OUTPUT_FILE), this.doc.toBuffer());
    }
}

module.exports = DocxDocument;