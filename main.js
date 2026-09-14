const Constants = require("./src/const");

const DocxDocument = require("./src/document");
const { SCRIPTS_PR_URL } = require("./data");

const { microservicesRendering } = require("./src/rendering/microservices");
const { scriptsRendering } = require("./src/rendering/scripts");

DocxDocument
    .builder(Constants.INPUT_FILE)
    .render({
        ...microservicesRendering
        , ...scriptsRendering
        , SCRIPTS_PR_URL: SCRIPTS_PR_URL
    })
    .export();