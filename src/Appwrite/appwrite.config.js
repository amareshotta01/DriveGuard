import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('649fb15363ef42a33678');               // Your project ID

export const account = new Account(client);

// export const databases = new Databases(client, "649fb9f5e4a61e78e20a");

