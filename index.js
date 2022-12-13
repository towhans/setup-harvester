const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool("https://techlin-gcp-eu.collibra.com/s/lineage-harvester-2022.11.1-1.zip");

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractZip(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
