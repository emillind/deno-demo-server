import { Request, Response } from 'npm:express';

export type TranslateRequest = Request<{ text: string }>;

export type TranslateResponse = Response<{
  originalText: string;
  translatedText: string;
}>;
