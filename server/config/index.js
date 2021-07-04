require("dotenv").config();

const { env } = process;

module.exports = {
  dbConfig: {
    user: env.user,
    host: env.host,
    password: env.password,
    database: env.database,
  },
  s3Config: {
    accessKeyId: env.accessKeyId,
    secretAccessKey: env.secretAccessKey,
  },
  s3Bucket: env.bucket,
};
