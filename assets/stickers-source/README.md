# 고화질 스티커 원본 넣는 곳

여기에 고화질 원본 이미지 100장을 넣고 변환 스크립트를 실행하면 앱에서 쓰는 이미지가 자동으로 갱신됩니다.

권장 파일명:

- `sticker-001.png`
- `sticker-002.png`
- ...
- `sticker-100.png`

또는 `001.png`, `002.jpg`처럼 3자리 번호가 들어간 파일명도 인식합니다.

지원 포맷은 `png`, `jpg`, `jpeg`, `webp`, `avif`입니다.

권장 원본 크기:

- 최소 300×300 이상
- 가능하면 600×600 이상
- 배경 투명 PNG면 가장 좋습니다.

실행 명령:

```powershell
npm install
npm run prepare:stickers
```

결과물:

- `assets/stickers/sticker-001.webp` ~ `sticker-100.webp`
- `assets/sticker-data.js`

`assets/sticker-data.js`도 같이 갱신해야 도감 이미지 저장, 공유 이미지, QR 공유 후 미리보기 등에서도 새 화질이 적용됩니다.
