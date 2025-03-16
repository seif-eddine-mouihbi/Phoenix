/**
 * @copyright 2025 Seif Eddine Mouihbi
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Client, Account } from 'appwrite';

/**
 * Initial appwrite client
 */

const client = new Client();
client
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint('https://cloud.appwrite.io/v1');

/**
 * Initial appwrite account
 */

const account = new Account(client);

const promise = account.updatePrefs({ darkTheme: true, language: 'en' });

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);

export { account };
