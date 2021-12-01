import { Controller, Get, Post } from '@nestjs/common';

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
  increment(): CounterResponse {
    this.counter += 1;
    return this.getCounter()
  }

  @Post("/dec")
  decrement(): CounterResponse {
    this.counter -= 1;
    return this.getCounter()
  }
}
