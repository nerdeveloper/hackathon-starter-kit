/* eslint-disable prettier/prettier */
const environments:any = {};
environments.development = {
    port: 3000,
    database:`${process.env.DEV_MONGODB}`,
    envName: "Development enviroment",
    site: "http://localhost:3000",
};
environments.production = {
    port: 8080,
    database: `${process.env.PROD_MONGODB}`,
    envName: "Production enviroment",
    site: "https://hackathon-slhbx5lcqq-uc.a.run.app"
};

const currentEnvironment = process.env.NODE_ENV ? process.env.NODE_ENV : "";
const environmentToExport = typeof environments[currentEnvironment] === "object" ? environments[currentEnvironment] : environments.production;

// Export Module
export default environmentToExport;
