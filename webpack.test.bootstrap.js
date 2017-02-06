// creates and loads list of require statements for each regex match
const context = require.context("./test", true, /test\.js$/);
context.keys().forEach(context);
