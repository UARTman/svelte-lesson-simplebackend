import { Body, Controller, Get, Post } from '@nestjs/common';

interface CounterResponse {
  counter: number
}

@Controller()
export class AppController {
  counter: number = 0;

  constructor() {}

  @Get()
  getCounter(): CounterResponse {
    return {
      counter: this.counter
    }
  }

  @Post("/inc")
  increment(@Body() body): CounterResponse {
    if (body) {
      this.counter += body.amount
    } else {
      this.counter += 1;
    }
    return this.getCounter()
  }

  @Post("/dec")
  decrement(@Body() body): CounterResponse {
    if (body) {
      this.counter += body.amount
    } else {
      this.counter += 1;
    }
    return this.getCounter()
  }
}
