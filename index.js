// default modules
const shortid = require("shortid");
const resolve = require("path").resolve;
const { Sequelize, Model, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: resolve(__dirname, "database/database.sqlite"),
  logging: false,
});

const short_id = shortid.generate();

class ShortUrl extends Model {}

ShortUrl.init(
  {
    short_url: DataTypes.STRING,
    original_url: DataTypes.STRING,
  },
  { sequelize, modelName: "urls" }
);

/* insert function */
const insert = async (original) => {
  await sequelize.sync();
  const url = await ShortUrl.create({
    short_url: short_id,
    original_url: original,
  });
  return url.toJSON().short_url;
};

/* get function */
const getUrl = async (short_url) => {
  try {
    const url = await ShortUrl.findOne({
      where: {
        short_url,
        /**
         * 
         * uncomment and change this if you need to filter result
         * 
          createdAt: {
            [Op.lt]: new Date(),
            [Op.gt]: new Date(new Date() - 5 * 60 * 60 * 1000),
          },
         */
      },
    });
    if (url) return url.original_url;
    else return new Error(`your token is wrong or expire`);
  } catch (e) {
    throw new Error(`error on get url: ${short_url}`);
  }
};

module.exports.insert = insert;
module.exports.getUrl = getUrl;
