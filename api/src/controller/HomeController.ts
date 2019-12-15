import { Request, Response } from 'express';
import { getManager } from 'typeorm';

import { Greeting } from '../entity/Greeting';

export async function helloAction(request: Request, response: Response) {
  const greetingRepository = getManager().getRepository(Greeting);
  const greetings = await greetingRepository.find();

  console.log(`I just received a GET request on port ${process.env.NODE_PORT}!`);

  response.json({
    greetings,
    message: process.env.MESSAGE || '',
  });
}
