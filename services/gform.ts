import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  scopes: [
    "https://www.googleapis.com/auth/forms",
    "https://www.googleapis.com/auth/forms.body",
    "https://www.googleapis.com/auth/forms.currentonly",
    "https://www.googleapis.com/auth/forms.responses.readonly",
    "https://www.googleapis.com/auth/spreadsheets",
  ],
  credentials: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
});

const gform = google.forms({
  version: "v1",
  auth,
});

const gsheet = google.sheets({
  version: "v4",
  auth,
});

const ygFormId = process.env.YG_GOOGLE_FORM_ID;
// const ygFormId = "16Z_B2DNIADBW573dbunb3BP8rjuEEZjxx8ptCY0D1Xk";

export const getYouthGatheringFormResponses = async () => {
  const responses = await gform.forms.responses.list({ formId: ygFormId });

  return responses.data.responses;
};

export const getYouthGatheringFormFields = async () => {
  const res = await gform.forms.get({ formId: ygFormId });

  const form = res.data;

  const linkedSheetId = form.linkedSheetId!;

  const sheet = gsheet.spreadsheets.values.append({
    spreadsheetId: linkedSheetId,
    range: "Form Responses 1!A1:D1",
  });

  const fields = form.items;

  return fields;
};

export const addToSheet = async (values: any) => {
  const res = await gform.forms.get({ formId: ygFormId });

  const form = res.data;

  const linkedSheetId = form.linkedSheetId!;

  const result = await gsheet.spreadsheets.values.append({
    spreadsheetId: linkedSheetId,
    range: "Form Responses 1",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",

    requestBody: {
      range: "Form Responses 1",
      majorDimension: "ROWS",
      values: [values],
    },
  });

  return result.data;
};
