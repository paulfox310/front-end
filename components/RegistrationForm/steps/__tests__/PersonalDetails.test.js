import React from 'react';
import { Formik } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import PersonalDetails from '../PersonalDetails';

describe('RegistrationForm/Steps/PersonalDetails', () => {
  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={PersonalDetails.initialValues}
        validationSchema={PersonalDetails.validationSchema}
      >
        <PersonalDetails />
      </Formik>,
    );
  });
});
