module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    data.key = require("uuid").v4();
  },
};
