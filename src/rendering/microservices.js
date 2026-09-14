const Constants = require("../const");
const microserviceTable = require("../components/microservice_table");
const { MICROSERVICES } = require("../../data");

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

module.exports = { microservicesRendering };