const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || "localhost",
    user: env.DB_USER || "root",
    password: env.DB_PASSWORD || "",
    database: env.DB_NAME || "projeto_final",
  },
};

module.exports = config;
