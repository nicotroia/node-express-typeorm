import { Request, Response } from 'express';
import { getManager } from 'typeorm';

import { Greeting } from '../entity/Greeting';

export async function helloAction(request: Request, response: Response) {
  const manager = await getManager();
  await manager.query('SELECT pg_advisory_lock($1)', [0]);
  console.log('lock');
  // console.log('1');
  // const greetingRepository = manager.getRepository(Greeting);
  // const greetings = await greetingRepository.find();
  // const greetings = manager.query('SELECT * from "poop"')
  // console.log('2');
  await manager.query('SELECT pg_advisory_unlock_all()');
  console.log('unlock');

  console.log(`I just received a GET request on port ${process.env.NODE_PORT}!`);

  response.json({
    greetings: 'wow',
    message: process.env.MESSAGE || '',
  });
}
