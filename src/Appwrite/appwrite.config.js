import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('649fb15363ef42a33678');               // Your project ID

export const account = new Account(client);


