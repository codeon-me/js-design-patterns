const LoggerInterface = require('./LoggerInterface');

class BaseDecorator extends LoggerInterface {
    constructor(logger) {
        super();
        this.logger = logger;
    }

    log() {
        this.logger.log();
    }
}

module.exports = BaseDecorator;
