import React from 'react';
import { Formik } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Initial from '../Initial';

describe('RegistrationForm/Steps/Initial', () => {
  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik initialValues={Initial.initialValues} validationSchema={Initial.validationSchema}>
        <Initial />
      </Formik>,
    );
  });
});
