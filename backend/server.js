const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors()); // CORS 설정 추가
app.use(express.json()); // 요청 본문을 JSON으로 파싱

// 서버 실행
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중...`);
});