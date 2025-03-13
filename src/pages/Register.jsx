/**
 * @copyright 2025 Seif Eddine Mouihbi
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Custom modules
 */
import { logoLight, logoDark } from '../assets/assets';

/**
 * Components
 */
import PageTitle from '../components/PageTitle';

function Register() {
  return (
    <>
      <PageTitle title="Create an account" />

      <div className="">
        <div className="">
          <Link>
            <img src={logoLight} alt="phoenix logo" width={133} height={24} className="" />
            <img src={logoDark} alt="phoenix logo" width={133} height={24} className="" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
