/**
 * @jest-environment node
 */

import Request from 'supertest';
import Server from '../../server';

describe('Server', () => {
  jest.setTimeout(30000);
  test('respond /', async () => {
    await Request(Server)
      .get('/')
      .expect(200);
  });
});
