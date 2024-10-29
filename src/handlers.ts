import { fromRovarsprak, toRovarsprak } from 'jsr:@emillind/publishing-demo';
import type { TranslateRequest, TranslateResponse } from './types.ts';

export const toRovarsprakHandler = (
  req: TranslateRequest,
  res: TranslateResponse
) => {
  const { text } = req.body;
  res.send({
    originalText: text,
    translatedText: toRovarsprak(text),
  });
};

export const fromRovarsprakHandler = (
  req: TranslateRequest,
  res: TranslateResponse
) => {
  const { text } = req.body;
  res.send({
    originalText: text,
    translatedText: fromRovarsprak(text),
  });
};
