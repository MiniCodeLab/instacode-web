const { configure } = require('@testing-library/react');

require('@testing-library/jest-dom');

configure({ testIdAttribute: 'data-testid' });
