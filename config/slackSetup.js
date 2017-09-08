const config = require('config');
const SLACK_WEB_HOOK = config.get('Logging.SlackWebHook');

module.exports = (winston, winstonSlackWebHook) => {
  // add a transport for errors
  winston.add(winstonSlackWebHook, {
    name      : 'slack-errors-transport',
    level     : 'error',
    webhookUrl: SLACK_WEB_HOOK,
    channel   : '#speech-errors',
    username  : 'errorBot',
    iconEmoji : ':fire:',
  });
  // send test message
  winston.error('Testing @errorBot... @errorBot is online.');
};
