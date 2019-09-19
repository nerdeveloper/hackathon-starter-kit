/* eslint-disable prettier/prettier */
const environments:any = {}
environments.development = {
    port: 3000,
    database: "mongodb://obinna:odirionye@localhost/hack",
    envName: "Development enviroment",
    siteurl: "http://hack.xyz:3000"
};
environments.production = {
    port: 5000,
    database: "mongodb://phirmware:itachi1@ds237120.mlab.com:37120/iservice?retryWrites=true",
    envName: "Production enviroment",
    siteurl: " https://095674b5.ngrok.io"
};

const currentEnvironment = process.env.NODE_ENV ? process.env.NODE_ENV : "";
const environmentToExport = typeof environments[currentEnvironment] === "object" ? environments[currentEnvironment] : environments.production;

// Export Module
export default environmentToExport;
