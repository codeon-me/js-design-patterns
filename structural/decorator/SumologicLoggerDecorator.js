const BaseDecorator = require('./BaseDecorator');

class SumologicLoggerDecorator extends BaseDecorator {
    constructor(logger) {
        super();
        this.logger = logger;
    }

    log() {
        this.logger.log();
        console.log('SumoLogicLoggerDecorator.log()');
    }
}

module.exports = SumologicLoggerDecorator;
