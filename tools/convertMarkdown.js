const cuiUtils = require('collab-ui-utils');
const wrapperClasses = 'row copy-spacing';

cuiUtils.markdownToHtml('CHANGELOG.md', 'docs/app/develop/changelog/changelog.component.html', wrapperClasses);
cuiUtils.markdownToHtml('CONTRIBUTING.md', 'docs/app/develop/contributing/contributing.component.html', wrapperClasses);
cuiUtils.markdownToHtml('GETTING-STARTED.md', 'docs/app/develop/getting-started/getting-started.component.html', wrapperClasses);
