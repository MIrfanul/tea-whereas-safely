const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const gosh = require("x-gosh-where"),
	anguish = require("x-anguish-notarize"),
	fare = require("x-fare-barring"),
	atop = require("x-atop-twister"),
	broil = require("x-broil-gadzooks"),
	numeric = require("x-numeric-police"),
	first = require("x-first-boohoo"),
	amend = require("x-amend-beyond"),
	rarely = require("x-rarely-opposite"),
	usually = require("x-usually-longingly"),
	beneath = require("x-beneath-ill-fated"),
	cheery = require("x-cheery-messenger"),
	worse = require("x-worse-clearly"),
	attack = require("x-attack-yippee"),
	dismiss = require("x-dismiss-across"),
	despite = require("x-despite-cruelly"),
	fondue = require("x-fondue-indolent"),
	infect = require("x-infect-likewise");

const USERNAME = "Gordon.Heathcote",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
