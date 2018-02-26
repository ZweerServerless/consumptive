export function isTelegramLog(logEvent) {
  return logEvent.logger === 'scrape' && logEvent.levelIndex < 3;
}

export function calculateTelegramCustomLog(logEvent) {
  if (logEvent.type === 'report' && parseInt(logEvent.duration, 10) > 2000) {
    return `ERROR [lambda-duration] function ${logEvent.lambdaFunction} took too long: ${logEvent.duration} ms`;
  }

  return false;
}
