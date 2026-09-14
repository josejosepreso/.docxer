const { scriptName0, scriptName1, scriptName2 } = require("../components/script_name_item");
const { scriptUrl } = require("../components/script_url_item");
const { SCRIPTS } = require("../../data");

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

module.exports = { scriptsRendering };