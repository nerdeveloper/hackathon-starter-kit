/* eslint-disable prettier/prettier */
const environments:any = {};
environments.development = {
    port: 3000,
    database:`${process.env.DEV_MONGODB}`,
    envName: "Development enviroment",
    siteurl: "http://hack.xyz:3000"
};
environments.production = {
    port: 5000,
    database: `${process.env.PROD_MONGODB}`,
    envName: "Production enviroment",
    siteurl: "https://8210701d.ngrok.io"
};

const currentEnvironment = process.env.NODE_ENV ? process.env.NODE_ENV : "";
const environmentToExport = typeof environments[currentEnvironment] === "object" ? environments[currentEnvironment] : environments.production;

// Export Module
export default environmentToExport;
