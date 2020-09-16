const { GoogleSpreadsheet } = require("google-spreadsheet");

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(
  "1Pg6k5pcmnPAn-YBJRc0DVHNdt7EgfwlUrJefLI_UKH8"
);

(async function () {
  await doc.useServiceAccountAuth(require("./credentials.json"));
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  await doc.updateProperties({ title: "renamed doc" });

  // const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  // console.log(sheet.title);
  // console.log(sheet.rowCount);

  // // adding / removing sheets
  // const newSheet = await doc.addSheet({ title: "hot new sheet!" });
  // await newSheet.delete();
})();
