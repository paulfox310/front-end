// Not to be confused with UI error states
// This file is filled with strings that go within custom errors for devs
/* eslint-disable max-len */
const customErrorMessages = {
  missingBreakpoints: `We require a small, medium, large, and extra-large breakpoint. Ensure "common/styles/variables.css" has exactly 4 breakpoint values. This often occurs because "common/styles/themeMap.js" has been wiped.`,
};
/* eslint-enable max-len */

export default customErrorMessages;
