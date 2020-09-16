const { GoogleSpreadsheet } = require("google-spreadsheet");

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(
  "1Pg6k5pcmnPAn-YBJRc0DVHNdt7EgfwlUrJefLI_UKH8"
);

// use service account creds
// await doc.useServiceAccountAuth({
//   client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//   private_key: process.env.GOOGLE_PRIVATE_KEY,
// });
// OR load directly from json file if not in secure environment
// OR use service account to impersonate a user (see https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority)

// OR use API key -- only for read-only access to public sheets
//

(async function () {
  //   await doc.useServiceAccountAuth(
  //     require("./creds-from-google.json"),
  //     "some-user@my-domain.com"
  //   );
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
