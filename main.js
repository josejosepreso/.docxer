const microserviceTable = require("./src/components/microservice_table");
const databaseScriptTable = require("./src/components/database_script_table");
const { scriptName0, scriptName1, scriptName2 } = require("./src/components/script_name_item");
const { scriptUrl } = require("./src/components/script_url_item");

const Constants = require("./src/const");

const DocxDocument = require("./src/document");
const { MICROSERVICES, SCRIPTS, SCRIPTS_PR_URL } = require("./data");

const microservicesRendering = {
    rawMicroserviceTable: urlPullReq => microserviceTable
        .replaceAll(Constants.MICROSERVICE_NAME_PARAM, urlPullReq.split("/")[6])
        .replace(Constants.MICROSERVICE_PULL_REQUEST_PARAM, urlPullReq)
        .replace(Constants.MICROSERVICE_REPO_PARAM, urlPullReq.split("/")
            .splice(0, 7)
            .join("/")
            .concat("/browse")),
    microservices: MICROSERVICES
};

const scriptsRendering = (function() {
    const scripts = SCRIPTS[0];
    const prs = scripts.prs;

    function getRawScriptsNames(scriptsNamesItem) {
        return function(pr) {
            return scriptsNamesItem.replace("{SCRIPT_NAME}",
                pr.split("/")[10].replaceAll("%20", " "));
        }
    }

    function getRawScriptsNamesItems(scriptNames) {
        return prs.map(getRawScriptsNames(scriptNames)).join("");
    }
    
    return {
        rawScriptsNameItems0: getRawScriptsNamesItems(scriptName0),
        rawScriptsNameItems1: getRawScriptsNamesItems(scriptName1),
        rawScriptsNameItems2: getRawScriptsNamesItems(scriptName2),
        rawScriptsUrlsItems: prs.map(prUrl => scriptUrl.replace("{SCRIPT_URL}", prUrl)).join(""),
        DATABASE_NAME: scripts.db
    };
} ());

const renderingData = {
    ...microservicesRendering
    , ...scriptsRendering
    , SCRIPTS_PR_URL: SCRIPTS_PR_URL
};

DocxDocument
    .builder(Constants.INPUT_FILE)
    .render(renderingData)
    .export();