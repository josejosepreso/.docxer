const microserviceTable = require("./src/components/microservice_table");
const databaseScriptTable = require("./src/components/database_script_table");
const Constants = require("./src/const");

const DocxDocument = require("./document");
const { microservices, scripts } = require("./data");

const doc = new DocxDocument(Constants.INPUT_FILE);

doc.render({
    rawMicroserviceTable: (urlPullReq) => microserviceTable
        .replaceAll(Constants.MICROSERVICE_NAME_PARAM, urlPullReq.split("/")[6])
        .replace(Constants.MICROSERVICE_PULL_REQUEST_PARAM, urlPullReq)
        .replace(Constants.MICROSERVICE_REPO_PARAM, urlPullReq.split("/").splice(0, 7).join("/").concat("/browse")),
    microservices: microservices
});

doc.export();