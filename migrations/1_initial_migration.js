const Migrations = artifacts.require("Migrations");
const Color = artifacts.require("Color");

module.exports = function(deployer) {
  deployer.deploy(Color);
};
