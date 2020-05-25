const LoggerInterface = require('./LoggerInterface');

class ConcreteLogger extends LoggerInterface {
    log() {
        console.log('ConcreteLogger.log()');
    }
}

module.exports = ConcreteLogger;
