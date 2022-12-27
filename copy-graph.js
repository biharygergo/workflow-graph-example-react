/**
 * This script is used to copy the graph bundle to the /public folder of the CRA app. This is needed if the bundle needs to be served on the local server.
 * A better solution is to import the graph as a node_module and this trickery is not needed than.
 */

const fse = require('fs-extra');
const path = require('path');

const workflowGraphFolder = path.join(__dirname, 'node_modules/@google/workflow-graph/web-component');
const publicFolder = path.join(__dirname, 'public/workflow-graph');

fse.copySync(workflowGraphFolder, publicFolder);