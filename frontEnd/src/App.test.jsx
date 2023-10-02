import { Pact } from '@pact-foundation/pact';
import path from 'path';

const provider = new Pact({
  port: 5000,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  logLevel: 'INFO',
  consumer: 'YourConsumer',
  provider: 'YourProvider',
});

describe('React App - Pact Consumer Tests', () => {
  beforeAll(() => provider.setup());

  afterAll(() => provider.finalize());

  afterEach(() => provider.verify());

  it('should get data from provider', async () => {
    const data = {
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
    };

    await provider.addInteraction({
      state: 'Data exists',
      uponReceiving: 'a request for data',
      withRequest: {
        method: 'GET',
        path: '/',
      },
      willRespondWith: {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: data,
      },
    });

    const response = await fetch('http://localhost:5000/');
    const responseData = await response.json();

    expect(response.status).toBe(200);
    expect(responseData).toEqual(data);
  });
});
