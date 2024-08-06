const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // 이미지를 'uploads/' 폴더에 저장
const vision = require('@google-cloud/vision');
const cors = require('cors');

app.use(cors());  // 모든 도메인의 요청을 허용
const client = new vision.ImageAnnotatorClient({
  keyFilename: './apikey.json'
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const [result] = await client.textDetection(filePath);
    const detections = result.textAnnotations;
    const textOutput = detections.map(text => text.description).join('\n');
    res.json({ text: textOutput });
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).json({ error: 'Error processing the image' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



