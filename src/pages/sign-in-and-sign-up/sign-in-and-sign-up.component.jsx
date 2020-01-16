import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import Signin from '../../components/signin/signin.component';
import Signup from '../../components/sign-up/sign-up.component';

const SigninAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <Signup />
  </div>
);

export default SigninAndSignUpPage;
