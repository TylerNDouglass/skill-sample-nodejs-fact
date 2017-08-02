'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.94816c36-2b0c-490d-bdf4-45d6f572e1f1";

var SKILL_NAME = "Space Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a Tim Melia fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "His full name is Timothy. But, I feel you could have guessed that.",
    "He is 31, not too old, not too young. Just right!.",
    "The guy can make epic saves. If you think you're going to have an easy time with Timmy, think again!.",
    "Hartzell Gray pronounces his name Tim Meeeeeeeeeeeeeelia.",
    "He has been with Sporting since 2015 and made 65 appearances.",
    "He past teams include Chivas USA, FC New York, Charleston Battery, Real Salt Lake, Rochester Rhinos and the Long Island Rough Rhiders.",
    "Tim played college soccer for the Oneonta Red Dragons and the Lynn Fighting Knights.",
    "He is just the best.",
    "My dude Tim is on track to break records.",
    "Tim received his call up from the league goalie pool after two of Sporting Kansas City's goal keepers were injured.",
    "He was the 2015 MLS Comeback Player Of The Year.",
    "He is better than your no-name goalie.",
    "He IS the BEST goalie in the MLS and was snubbed from the 2017 All-Star game.",
    "Follow him on Twitter, @TIMMELIA28.",
    "Bro, he saves 80% of all shots on goal.",
    "Number One in the league for Clean Sheets (as of August 1st), with 9 shut outs...Also, number one in your heart.",
    "Good ole Timmy has made 67 saves this year... which puts him at tied for 5th. Dude, no one really wants that many saves. That means the defense is horrible!",
    "Tim makes about 165K, which is more than you Sally!",
    "This guy could go toe-to-toe against the best striker in the land and not concede a goal.",
    "If I had to pick between Tim Melia saving goals for Sporting and marrying my dream girl, I'd crack a Boulevard in the Member's Stand and start chanting I believe!"

];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
