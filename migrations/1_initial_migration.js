const Dairy = artifacts.require("Dairy");

module.exports = function (deployer) {
  deployer.deploy(Dairy);
};
