const { GoogleSpreadsheet } = require("google-spreadsheet");

module.exports = class Sheet {
  constructor() {
    // spreadsheet key is the long id in the sheets URL
    this.doc = new GoogleSpreadsheet(
      "1Pg6k5pcmnPAn-YBJRc0DVHNdt7EgfwlUrJefLI_UKH8"
    );
  }
  async load() {
    await this.doc.useServiceAccountAuth(require("./credentials.json"));
    await this.doc.loadInfo(); // loads document properties and worksheets}
  }

  async addRows(rows) {
    const sheet = this.doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    await sheet.addRows(rows);
  }
};
