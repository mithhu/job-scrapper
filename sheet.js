const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();
module.exports;

module.exports = class Sheet {
  constructor() {
    // spreadsheet key is the long id in the sheets URL
    this.doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_KEY);
  }

  async load() {
    await this.doc.useServiceAccountAuth(credentials);
    await this.doc.loadInfo(); // loads document properties and worksheets}`
  }

  // async addRows(rows) {
  //   const sheet = this.doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  //   await sheet.addRows(rows);
  // }
};
