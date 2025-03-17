/**
 * @copyright 2025 Seif Eddine Mouihbi
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { account } from '../../lib/appwrite';
import generateID from '../../utils/generateID';

/**
 * Handles user registration
 */

const registerAction = async ({ request }) => {
  // Retrieve the form data from the incoming request
  const formData = await request.formData();
  try {
    // Creates a new user account using the provided email, password and name
    await account.create( 
      generateID(), // Generates a unique ID for the user
      formData.get('email'), // Retrieves email from Form data
      formData.get('password'), // Retrieves password from Form data
      formData.get('name') // Retrieves name from Form data
    );
  } catch (error) {
    // Returns an error object if account creration fails
    return {
      message: error.message, // Error message from the cought error
    };
  }
  return null;
};

export default registerAction;
