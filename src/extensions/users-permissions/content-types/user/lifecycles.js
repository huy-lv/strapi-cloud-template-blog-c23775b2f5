module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    data.uuid = require("uuid").v4();
  },
};
