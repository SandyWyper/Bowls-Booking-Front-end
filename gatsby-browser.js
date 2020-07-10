/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// styles for the site that get purged
require("./src/styles/styles.scss")
// styles for the markdown files that wont be purged because they are rendered after the purge process
require("./src/styles/unpurged.scss")
