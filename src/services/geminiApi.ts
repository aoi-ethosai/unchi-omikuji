import { GoogleGenerativeAI } from '@google/generative-ai';
import { DEFAULT_COMMENTS } from '../constants/fortunes';
import type { FortuneLevel } from '../types/fortune';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | null = null;

function getGenAI(): GoogleGenerativeAI | null {
  if (!API_KEY) {
    console.warn('Gemini API key not found. Using fallback comments.');
    return null;
  }
  if (!genAI) {
    genAI = new GoogleGenerativeAI(API_KEY);
  }
  return genAI;
}

export async function generateFortuneComment(
  unchiName: string,
  fortuneLevel: FortuneLevel
): Promise<string> {
  const ai = getGenAI();

  if (!ai) {
    return getDefaultComment(fortuneLevel);
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `あなたはユーモアあふれる占い師です。
「${unchiName}」という名前のうんちが出ました。運勢は「${fortuneLevel}」です。

この結果に対して、面白くてポジティブな占いコメントを1文で生成してください。
うんちに関連したダジャレや言葉遊びを含めてください。
下品すぎず、誰でも笑える内容にしてください。
50文字以内で答えてください。`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    if (text.length > 0) {
      return text;
    }
    return getDefaultComment(fortuneLevel);
  } catch (error) {
    console.error('Gemini API error:', error);
    return getDefaultComment(fortuneLevel);
  }
}

function getDefaultComment(fortuneLevel: FortuneLevel): string {
  const comments = DEFAULT_COMMENTS[fortuneLevel];
  return comments[Math.floor(Math.random() * comments.length)];
}
