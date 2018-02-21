import { createSuccessMessage } from './utils/src/aws';

export function handle(event, context, callback) {
  callback(null, createSuccessMessage('helloWorld'));
}
