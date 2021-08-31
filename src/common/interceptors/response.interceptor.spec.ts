import { INestApplication } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import { AppModule } from 'app.module';
import * as request from 'supertest';

import { ResponseInterceptor } from './response.interceptor';

function createTestModule(interceptor) {
  return Test.createTestingModule({
    imports: [AppModule],
    providers: [
      {
        provide: APP_INTERCEPTOR,
        useValue: interceptor,
      },
    ],
  }).compile();
}

describe('ResponseInterceptor', () => {
  let app: INestApplication;

  it('should be defined', () => {
    expect(new ResponseInterceptor()).toBeDefined();
  });

  it('should return the response', async () => {
    app = (
      await createTestModule(new ResponseInterceptor())
    ).createNestApplication();
    await app.init();

    request(app.getHttpServer()).get('/').expect(200, {
      success: true,
      path: '/',
      message: 'NestJS template',
      result: null,
    });

    await app.close();
  });
});
