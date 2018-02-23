import { createSuccessMessage } from './utils/libraries/aws';

export function handle(event, context, callback) {
  callback(null, createSuccessMessage('helloWorld'));
}
