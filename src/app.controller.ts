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
  increment(@Body("amount") amount): CounterResponse {
    if (amount != undefined) {
      this.counter += amount
    } else {
      this.counter += 1;
    }
    return this.getCounter()
  }

  @Post("/dec")
  decrement(@Body("amount") amount): CounterResponse {
    if (amount) {
      this.counter -= amount
    } else {
      this.counter -= 1;
    }
    return this.getCounter()
  }
}
