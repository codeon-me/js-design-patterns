const ConcreteLogger = require('./ConcreteLogger');
const SlackLoggerDecorator = require('./SlackLoggerDecorator');
const SumologicLoggerDecorator = require('./SumologicLoggerDecorator');


const loggers = ['slack', 'sumologic'];

let logger = new ConcreteLogger();
if (loggers.includes('slack')) logger = new SlackLoggerDecorator(logger);
if (loggers.includes('sumologic')) logger = new SumologicLoggerDecorator(logger);

logger.log();
