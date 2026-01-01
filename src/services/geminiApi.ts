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

    const prompt = `あなたは神秘的でユーモアもある占い師「うん命鑑定士」です。
「${unchiName}」が出現し、運勢は「${fortuneLevel}」と出ました。

以下の条件でお告げを生成してください：
- 本格的な占い風の言い回し（「〜の兆しあり」「天が示す〜」など）を使いつつ
- うんちやトイレに関するダジャレ・言葉遊びを自然に織り交ぜる
- 「うん」を「運」にかけた表現を入れる
- ポジティブで前向きな内容に
- 60文字以内の1文で

例：「黄金のうん気があなたを包み、すべてが快調に流れる兆しあり」`;

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
