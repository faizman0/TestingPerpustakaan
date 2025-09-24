
// cypress/support/helpers/data.js
export const generateUniqueName = (baseName) => {
  const timestamp = new Date().getTime();
  return `${baseName}-${timestamp}`;
};