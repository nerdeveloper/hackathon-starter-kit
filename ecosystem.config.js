module.exports = {
    apps: [
        {
            name: "hackathon-starter-kit",
            script: "dist/server.js",

            // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
            instances: "3",
            exec_mode: "cluster",
            autorestart: true,
            watch: true,
            max_memory_restart: "1G",
            ignore_watch: ["node_modules", "public"],
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};
