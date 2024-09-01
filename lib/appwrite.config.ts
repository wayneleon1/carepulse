import * as sdk from "node-appwrite";
export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66cf7fda002210ba412a")
  .setKey(
    "5badc42c4359bdb62d3878317f6790d29697e58f2641e9d746d0751a4c1e0cad048a4a43774c8377180bedbc72922598b834600b0ec66045c709822fb04dc57bc09e084272e816bd540143e7777287f863223768cdbb957c23673bf98f3091e52f29137d302e714dbd5c55fcf807f4dee91557ee9c88b46c9849ceb7b31d3e92"
  );

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
