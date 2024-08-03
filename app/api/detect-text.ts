import vision from '@google-cloud/vision';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// 절대 경로 설정
const keyFilePath = path.join(process.cwd(), 'public', 'keyfile.json');

const client = new vision.ImageAnnotatorClient({
  keyFilename: keyFilePath,  // 절대 경로 사용
});

type Data = {
  text?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { imageUrl } = req.body;
    console.log('Received imageUrl:', imageUrl); // 로그 추가
    try {
      const [result] = await client.textDetection(imageUrl);
      const detections = result.textAnnotations;
      const text = detections.map((text: any) => text.description).join('\n');
      console.log('Detected text:', text); // 로그 추가
      res.status(200).json({ text });
    } catch (error) {
      console.error('Error detecting text:', error); // 로그 추가
      res.status(500).json({ error: 'Failed to detect text from image' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
