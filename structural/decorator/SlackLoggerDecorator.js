const BaseDecorator = require('./BaseDecorator');

class SlackLoggerDecorator extends BaseDecorator {
    constructor(logger) {
        super();
        this.logger = logger;
    }

    log() {
        this.logger.log();
        console.log('SlackLoggerDecorator.log()');
    }
}

module.exports = SlackLoggerDecorator;
