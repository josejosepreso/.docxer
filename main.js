const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");

const fs = require("fs");
const path = require("path");

const microServiceTable = require("./components/microservice_table");
const databaseScriptTable = require("./components/database_script_table");
const { microservices, scripts } = require("./data");
const Constants = require("./const.js");

const content = fs.readFileSync(
    path.resolve(__dirname, "input.docx"),
    "binary"
);

const zip = new PizZip(content);

const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

doc.render({
    rawMicroserviceTable: (urlPullReq) => microServiceTable
        .replaceAll(Constants.MICROSERVICE_NAME_PARAM, urlPullReq.split("/")[6])
        .replace(Constants.MICROSERVICE_PULL_REQUEST_PARAM, urlPullReq)
        .replace(Constants.MICROSERVICE_REPO_PARAM, urlPullReq.split("/").splice(0, 7).join("/").concat("/browse")),
    microservices: microservices
});

const buf = doc.toBuffer();

fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
