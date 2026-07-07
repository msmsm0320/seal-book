import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourceDir = path.join(root, "assets", "stickers-source");
const outputDir = path.join(root, "assets", "stickers");
const dataFile = path.join(root, "assets", "sticker-data.js");
const supportedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

const options = {
  size: Number(process.env.STICKER_SIZE || 512),
  quality: Number(process.env.STICKER_QUALITY || 92),
};

function getStickerNumber(fileName) {
  const match = fileName.match(/(?:sticker[-_\s]?)?(\d{1,3})/i);
  if (!match) return null;
  const number = Number(match[1]);
  if (!Number.isInteger(number) || number < 1 || number > 100) return null;
  return number;
}

async function collectSourceImages() {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  const images = new Map();

  entries
    .filter((entry) => entry.isFile())
    .forEach((entry) => {
      const extension = path.extname(entry.name).toLowerCase();
      if (!supportedExtensions.has(extension)) return;
      const stickerNumber = getStickerNumber(entry.name);
      if (!stickerNumber) return;
      images.set(stickerNumber, path.join(sourceDir, entry.name));
    });

  return images;
}

async function imageToBase64DataUrl(filePath) {
  const buffer = await fs.readFile(filePath);
  return `data:image/webp;base64,${buffer.toString("base64")}`;
}

async function main() {
  await fs.mkdir(sourceDir, { recursive: true });
  await fs.mkdir(outputDir, { recursive: true });

  const sourceImages = await collectSourceImages();
  const missing = [];

  for (let number = 1; number <= 100; number += 1) {
    if (!sourceImages.has(number)) missing.push(String(number).padStart(3, "0"));
  }

  if (missing.length > 0) {
    console.error("원본 이미지가 부족합니다.");
    console.error(`누락된 번호: ${missing.join(", ")}`);
    console.error(`원본을 ${path.relative(root, sourceDir)} 폴더에 넣어 주세요.`);
    process.exit(1);
  }

  const outputFiles = [];

  for (let number = 1; number <= 100; number += 1) {
    const sourcePath = sourceImages.get(number);
    const outputName = `sticker-${String(number).padStart(3, "0")}.webp`;
    const outputPath = path.join(outputDir, outputName);

    await sharp(sourcePath)
      .rotate()
      .resize(options.size, options.size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
        withoutEnlargement: false,
      })
      .webp({
        quality: options.quality,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(outputPath);

    outputFiles.push(outputPath);
    console.log(`✓ ${path.relative(root, outputPath)}`);
  }

  const dataUrls = await Promise.all(outputFiles.map(imageToBase64DataUrl));
  const stickerData = `window.STICKER_DATA_URLS = ${JSON.stringify(dataUrls)};\n`;
  await fs.writeFile(dataFile, stickerData, "utf8");

  console.log("");
  console.log("완료!");
  console.log(`- 출력 크기: ${options.size}x${options.size}`);
  console.log(`- WebP 품질: ${options.quality}`);
  console.log(`- 갱신됨: ${path.relative(root, outputDir)}`);
  console.log(`- 갱신됨: ${path.relative(root, dataFile)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
