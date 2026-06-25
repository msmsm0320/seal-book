const pokemon = [
  [1, "이상해씨", "풀 · 독"], [2, "이상해풀", "풀 · 독"], [3, "이상해꽃", "풀 · 독"],
  [4, "파이리", "불꽃"], [5, "리자드", "불꽃"], [6, "리자몽", "불꽃 · 비행"],
  [7, "꼬부기", "물"], [8, "어니부기", "물"], [9, "거북왕", "물"],
  [10, "캐터피", "벌레"], [11, "단데기", "벌레"], [12, "버터플", "벌레 · 비행"],
  [13, "뿔충이", "벌레 · 독"], [14, "딱충이", "벌레 · 독"], [15, "독침붕", "벌레 · 독"],
  [16, "구구", "노말 · 비행"], [17, "피죤", "노말 · 비행"], [18, "피죤투", "노말 · 비행"],
  [19, "꼬렛", "노말"], [20, "레트라", "노말"], [23, "아보", "독"], [24, "아보크", "독"],
  [25, "피카츄", "전기"], [26, "라이츄", "전기"], [37, "식스테일", "불꽃"],
  [38, "나인테일", "불꽃"], [39, "푸린", "노말 · 페어리"], [40, "푸크린", "노말 · 페어리"],
  [41, "주뱃", "독 · 비행"], [42, "골뱃", "독 · 비행"], [52, "나옹", "노말"],
  [53, "페르시온", "노말"], [54, "고라파덕", "물"], [55, "골덕", "물"],
  [56, "망키", "격투"], [57, "성원숭", "격투"], [58, "가디", "불꽃"],
  [59, "윈디", "불꽃"], [63, "캐이시", "에스퍼"], [64, "윤겔라", "에스퍼"],
  [65, "후딘", "에스퍼"], [66, "알통몬", "격투"], [67, "근육몬", "격투"],
  [68, "괴력몬", "격투"], [69, "모다피", "풀 · 독"], [70, "우츠동", "풀 · 독"],
  [71, "우츠보트", "풀 · 독"], [74, "꼬마돌", "바위 · 땅"], [75, "데구리", "바위 · 땅"],
  [76, "딱구리", "바위 · 땅"], [77, "포니타", "불꽃"], [78, "날쌩마", "불꽃"],
  [79, "야돈", "물 · 에스퍼"], [80, "야도란", "물 · 에스퍼"], [81, "코일", "전기 · 강철"],
  [82, "레어코일", "전기 · 강철"], [83, "파오리", "노말 · 비행"], [84, "두두", "노말 · 비행"],
  [85, "두트리오", "노말 · 비행"], [88, "질퍽이", "독"], [89, "질뻐기", "독"],
  [92, "고오스", "고스트 · 독"], [93, "고우스트", "고스트 · 독"], [94, "팬텀", "고스트 · 독"],
  [95, "롱스톤", "바위 · 땅"], [100, "찌리리공", "전기"], [101, "붐볼", "전기"],
  [104, "탕구리", "땅"], [105, "텅구리", "땅"], [109, "또가스", "독"], [110, "또도가스", "독"],
  [111, "뿔카노", "땅 · 바위"], [112, "코뿌리", "땅 · 바위"], [113, "럭키", "노말"],
  [115, "캥카", "노말"], [120, "별가사리", "물"], [121, "아쿠스타", "물 · 에스퍼"],
  [123, "스라크", "벌레 · 비행"], [125, "에레브", "전기"], [126, "마그마", "불꽃"],
  [127, "쁘사이저", "벌레"], [128, "켄타로스", "노말"], [129, "잉어킹", "물"],
  [130, "갸라도스", "물 · 비행"], [131, "라프라스", "물 · 얼음"], [132, "메타몽", "노말"],
  [133, "이브이", "노말"], [134, "샤미드", "물"], [135, "쥬피썬더", "전기"],
  [136, "부스터", "불꽃"], [137, "폴리곤", "노말"], [142, "프테라", "바위 · 비행"],
  [143, "잠만보", "노말"], [144, "프리져", "얼음 · 비행"], [145, "썬더", "전기 · 비행"],
  [146, "파이어", "불꽃 · 비행"], [147, "미뇽", "드래곤"], [148, "신뇽", "드래곤"],
  [149, "망나뇽", "드래곤 · 비행"], [150, "뮤츠", "에스퍼"],
].map(([id, name, type], index) => ({
  id,
  name,
  type,
  image: `./assets/stickers/sticker-${String(index + 1).padStart(3, "0")}.webp`,
}));

const STORAGE_KEY = "seal-book-collection-v1";
const PACK_PRICE_KEY = "seal-book-pack-price-v1";
const COMPLETION_CERTIFICATE_SEEN_KEY = "seal-book-completion-certificate-seen-v1";
const DEFAULT_PACK_PRICE = 2000;
const state = {
  counts: Object.fromEntries(pokemon.map(({ id }) => [id, 0])),
  filter: "all",
  search: "",
  sort: "number",
  packPrice: DEFAULT_PACK_PRICE,
};

const elements = {
  grid: document.querySelector("#stickerGrid"),
  template: document.querySelector("#stickerTemplate"),
  empty: document.querySelector("#emptyState"),
  filters: document.querySelector("#filterTabs"),
  search: document.querySelector("#searchInput"),
  sort: document.querySelector("#sortSelect"),
  progressPercent: document.querySelector("#progressPercent"),
  progressFill: document.querySelector("#progressFill"),
  owned: document.querySelector("#ownedStat"),
  missing: document.querySelector("#missingStat"),
  duplicate: document.querySelector("#duplicateStat"),
  packPriceInput: document.querySelector("#packPriceInput"),
  expectedTotalCost: document.querySelector("#expectedTotalCost"),
  expectedTotalPacks: document.querySelector("#expectedTotalPacks"),
  spentCost: document.querySelector("#spentCost"),
  spentPacks: document.querySelector("#spentPacks"),
  remainingCost: document.querySelector("#remainingCost"),
  remainingPacks: document.querySelector("#remainingPacks"),
  costNote: document.querySelector("#costNote"),
  summary: document.querySelector("#resultSummary"),
  shareButton: document.querySelector("#shareButton"),
  shareDialog: document.querySelector("#shareDialog"),
  codeButton: document.querySelector("#codeButton"),
  codeDialog: document.querySelector("#codeDialog"),
  codeTabs: document.querySelector("#codeTabs"),
  collectionCodeOutput: document.querySelector("#collectionCodeOutput"),
  collectionCodeInput: document.querySelector("#collectionCodeInput"),
  copyCodeButton: document.querySelector("#copyCodeButton"),
  importCodeButton: document.querySelector("#importCodeButton"),
  importPreview: document.querySelector("#importPreview"),
  importPreviewStats: document.querySelector("#importPreviewStats"),
  importPreviewCanvas: document.querySelector("#importPreviewCanvas"),
  importPreviewChanges: document.querySelector("#importPreviewChanges"),
  applyImportButton: document.querySelector("#applyImportButton"),
  cancelImportButton: document.querySelector("#cancelImportButton"),
  friendCodeInput: document.querySelector("#friendCodeInput"),
  compareCodeButton: document.querySelector("#compareCodeButton"),
  compareResult: document.querySelector("#compareResult"),
  compareSummary: document.querySelector("#compareSummary"),
  compareCanvas: document.querySelector("#compareCanvas"),
  saveCompareImageButton: document.querySelector("#saveCompareImageButton"),
  saveCompareKakaoImageButton: document.querySelector("#saveCompareKakaoImageButton"),
  myGiveList: document.querySelector("#myGiveList"),
  friendGiveList: document.querySelector("#friendGiveList"),
  codeStatus: document.querySelector("#codeStatus"),
  certificateDialog: document.querySelector("#certificateDialog"),
  certificateCanvas: document.querySelector("#certificateCanvas"),
  saveCertificateButton: document.querySelector("#saveCertificateButton"),
  collectionCanvas: document.querySelector("#collectionCanvas"),
  imageModeTabs: document.querySelector("#imageModeTabs"),
  shareStatus: document.querySelector("#shareStatus"),
  saveImageButton: document.querySelector("#saveImageButton"),
  saveKakaoImageButton: document.querySelector("#saveKakaoImageButton"),
  resetButton: document.querySelector("#resetButton"),
  toast: document.querySelector("#toast"),
  canvasMagnifier: document.querySelector("#canvasMagnifier"),
  magnifierCanvas: document.querySelector("#magnifierCanvas"),
};

let imageMode = "all";
let pendingImportCounts = null;
let latestComparison = null;
let latestFriendCounts = null;

function encodeBase64Url(text) {
  return btoa(text).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function decodeBase64Url(text) {
  const normalized = text.replaceAll("-", "+").replaceAll("_", "/");
  const padding = "=".repeat((4 - (normalized.length % 4)) % 4);
  return atob(normalized + padding);
}

function createCollectionCode() {
  const payload = {
    v: 1,
    c: pokemon.map(({ id }) => Math.min(99, Math.max(0, Number(state.counts[id]) || 0))),
  };
  return `SEALBOOK1:${encodeBase64Url(JSON.stringify(payload))}`;
}

function parseCollectionCode(rawCode) {
  const raw = rawCode.trim();
  let code = raw;
  if (raw.includes("collection=")) {
    try {
      code = new URL(raw, location.origin).searchParams.get("collection") || raw;
    } catch {
      code = new URLSearchParams(raw.replace(/^\?/, "")).get("collection") || raw;
    }
  }
  const body = code.startsWith("SEALBOOK1:") ? code.slice("SEALBOOK1:".length) : code;

  try {
    const parsed = JSON.parse(decodeBase64Url(body));
    if (Array.isArray(parsed.c)) {
      return Object.fromEntries(
        pokemon.map(({ id }, index) => [id, Math.max(0, Number(parsed.c[index]) || 0)]),
      );
    }
    return Object.fromEntries(
      pokemon.map(({ id }) => [id, Math.max(0, Number(parsed[id]) || 0)]),
    );
  } catch (error) {
    try {
      const parsed = JSON.parse(decodeURIComponent(escape(atob(body))));
      return Object.fromEntries(
        pokemon.map(({ id }) => [id, Math.max(0, Number(parsed[id]) || 0)]),
      );
    } catch {
      throw error;
    }
  }
}

function refreshCollectionCode() {
  elements.collectionCodeOutput.value = createCollectionCode();
}

function getCollectionStats(counts) {
  const values = pokemon.map(({ id }) => Math.max(0, Number(counts[id]) || 0));
  const owned = values.filter((count) => count > 0).length;
  const duplicates = values.reduce((sum, count) => sum + Math.max(0, count - 1), 0);
  return {
    owned,
    missing: pokemon.length - owned,
    duplicates,
  };
}

function harmonicNumber(count) {
  let total = 0;
  for (let index = 1; index <= count; index += 1) {
    total += 1 / index;
  }
  return total;
}

function formatWon(value) {
  return `${Math.round(value).toLocaleString("ko-KR")}원`;
}

function formatPacks(value) {
  return `${Math.ceil(value).toLocaleString("ko-KR")}개`;
}

function hideCanvasMagnifier() {
  elements.canvasMagnifier.hidden = true;
}

function showCanvasMagnifier(sourceCanvas, event) {
  const rect = sourceCanvas.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;
  const magnifierHost = sourceCanvas.closest("dialog") || document.body;
  if (elements.canvasMagnifier.parentElement !== magnifierHost) {
    magnifierHost.appendChild(elements.canvasMagnifier);
  }

  const sourceX = ((event.clientX - rect.left) / rect.width) * sourceCanvas.width;
  const sourceY = ((event.clientY - rect.top) / rect.height) * sourceCanvas.height;
  const magnifierContext = elements.magnifierCanvas.getContext("2d");
  const outputSize = elements.magnifierCanvas.width;
  const sampleSize = Math.min(420, sourceCanvas.width, sourceCanvas.height);
  const halfSample = sampleSize / 2;
  const sampleX = Math.max(0, Math.min(sourceCanvas.width - sampleSize, sourceX - halfSample));
  const sampleY = Math.max(0, Math.min(sourceCanvas.height - sampleSize, sourceY - halfSample));

  magnifierContext.clearRect(0, 0, outputSize, outputSize);
  magnifierContext.imageSmoothingEnabled = true;
  magnifierContext.imageSmoothingQuality = "high";
  magnifierContext.drawImage(
    sourceCanvas,
    sampleX,
    sampleY,
    sampleSize,
    sampleSize,
    0,
    0,
    outputSize,
    outputSize,
  );

  const margin = 16;
  const magnifierWidth = 332;
  const magnifierHeight = 332;
  let left = event.clientX + 18;
  let top = event.clientY + 18;
  if (left + magnifierWidth > window.innerWidth - margin) {
    left = event.clientX - magnifierWidth - 18;
  }
  if (top + magnifierHeight > window.innerHeight - margin) {
    top = event.clientY - magnifierHeight - 18;
  }

  elements.canvasMagnifier.style.left = `${Math.max(margin, left)}px`;
  elements.canvasMagnifier.style.top = `${Math.max(margin, top)}px`;
  elements.canvasMagnifier.hidden = false;
}

function enableHoverMagnifier(canvas) {
  canvas.addEventListener("pointermove", (event) => {
    event.stopPropagation();
    showCanvasMagnifier(canvas, event);
  });
  canvas.addEventListener("pointerleave", hideCanvasMagnifier);
  canvas.addEventListener("pointercancel", hideCanvasMagnifier);
  canvas.addEventListener("click", (event) => {
    event.stopPropagation();
    showCanvasMagnifier(canvas, event);
  });
}

function getChangedPokemon(nextCounts) {
  return pokemon.filter(({ id }) => (state.counts[id] || 0) !== (nextCounts[id] || 0));
}

function hideImportPreview(message = "코드가 준비됐어요.") {
  pendingImportCounts = null;
  elements.importPreview.hidden = true;
  elements.importPreviewStats.replaceChildren();
  elements.importPreviewChanges.textContent = "";
  elements.importPreviewCanvas.getContext("2d").clearRect(
    0,
    0,
    elements.importPreviewCanvas.width,
    elements.importPreviewCanvas.height,
  );
  elements.codeStatus.textContent = message;
}

function hideCompareResult() {
  latestComparison = null;
  latestFriendCounts = null;
  elements.compareResult.hidden = true;
  elements.compareSummary.replaceChildren();
  elements.myGiveList.replaceChildren();
  elements.friendGiveList.replaceChildren();
  elements.compareCanvas.getContext("2d").clearRect(
    0,
    0,
    elements.compareCanvas.width,
    elements.compareCanvas.height,
  );
}

function setCodeTab(tabName) {
  document.querySelectorAll("[data-code-tab]").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.codeTab === tabName);
  });
  document.querySelectorAll("[data-code-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.codePanel === tabName);
  });
  elements.codeStatus.textContent =
    tabName === "compare"
      ? "친구 코드를 붙여넣고 비교해 보세요."
      : "코드가 준비됐어요.";
}

async function drawImportPreviewCanvas(nextCounts, includeArtwork = true) {
  const canvas = elements.importPreviewCanvas;
  const context = canvas.getContext("2d");
  const stats = getCollectionStats(nextCounts);
  const columns = 10;
  const cardWidth = 104;
  const cardHeight = 78;
  const gap = 10;
  const startX = 58;
  const startY = 178;

  canvas.width = 1200;
  canvas.height = 980;

  const artworks = includeArtwork
    ? await Promise.all(
        pokemon.map((item, index) =>
          loadArtwork(window.STICKER_DATA_URLS?.[index] || item.image),
        ),
      )
    : pokemon.map(() => null);

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#f7f5ef";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#3564d8";
  context.fillRect(0, 0, canvas.width, 140);

  context.fillStyle = "#ffffff";
  context.font = "900 46px sans-serif";
  context.fillText("적용 후 도감 미리보기", 48, 64);
  context.font = "700 22px sans-serif";
  context.fillStyle = "rgba(255,255,255,.88)";
  context.fillText(
    `보유 ${stats.owned}종 · 미보유 ${stats.missing}종 · 중복 ${stats.duplicates}장`,
    50,
    104,
  );

  pokemon.forEach((item, index) => {
    const count = nextCounts[item.id] || 0;
    const isOwned = count > 0;
    const isChanged = (state.counts[item.id] || 0) !== count;
    const column = index % columns;
    const row = Math.floor(index / columns);
    const x = startX + column * (cardWidth + gap);
    const y = startY + row * (cardHeight + gap);
    const artwork = artworks[index];

    context.fillStyle = isOwned ? "#ffffff" : "#e7e4dc";
    roundedRect(context, x, y, cardWidth, cardHeight, 10);

    if (isChanged) {
      context.strokeStyle = "#3564d8";
      context.lineWidth = 4;
      context.strokeRect(x + 2, y + 2, cardWidth - 4, cardHeight - 4);
    } else if (isOwned) {
      context.strokeStyle = "#ff5b32";
      context.lineWidth = 2;
      context.strokeRect(x + 1, y + 1, cardWidth - 2, cardHeight - 2);
    }

    if (artwork) {
      context.save();
      context.filter = isOwned ? "none" : "grayscale(1) opacity(.33)";
      context.drawImage(artwork, x + 32, y + 5, 40, 40);
      context.restore();
    } else {
      context.fillStyle = isOwned ? "#ffede8" : "#d6d2c9";
      context.beginPath();
      context.arc(x + cardWidth / 2, y + 26, 18, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = isOwned ? "#ff5b32" : "#aaa69e";
      context.font = "900 15px sans-serif";
      context.textAlign = "center";
      context.fillText(item.name[0], x + cardWidth / 2, y + 31);
    }

    context.fillStyle = isOwned ? "#191918" : "#8d8981";
    context.font = "800 12px sans-serif";
    context.textAlign = "center";
    context.fillText(item.name, x + cardWidth / 2, y + 65);

    if (count > 1) {
      context.fillStyle = "#191918";
      context.beginPath();
      context.arc(x + cardWidth - 15, y + 15, 14, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#ffffff";
      context.font = "800 11px sans-serif";
      context.fillText(`×${count}`, x + cardWidth - 15, y + 19);
    }
    context.textAlign = "left";
  });

  context.fillStyle = "#77736b";
  context.font = "600 17px sans-serif";
  context.fillText("파란 테두리는 현재 도감과 달라지는 씰이에요.", 50, 940);
}

async function renderImportPreview(nextCounts) {
  const current = getCollectionStats(state.counts);
  const next = getCollectionStats(nextCounts);
  const changed = getChangedPokemon(nextCounts);
  const statItems = [
    ["보유", current.owned, next.owned, "종"],
    ["미보유", current.missing, next.missing, "종"],
    ["중복", current.duplicates, next.duplicates, "장"],
  ];

  elements.importPreviewStats.replaceChildren(
    ...statItems.map(([label, before, after, unit]) => {
      const item = document.createElement("div");
      item.innerHTML = `<span>${label}</span><strong>${before}${unit} → ${after}${unit}</strong>`;
      return item;
    }),
  );

  const changedNames = changed
    .slice(0, 10)
    .map(({ id, name }) => `${name} ${state.counts[id] || 0}장→${nextCounts[id] || 0}장`);
  elements.importPreviewChanges.textContent =
    changed.length === 0
      ? "현재 도감과 같은 코드예요. 적용해도 바뀌는 내용은 없습니다."
      : `바뀌는 씰 ${changed.length}종: ${changedNames.join(", ")}${
          changed.length > changedNames.length ? "…" : ""
        }`;
  elements.importPreview.hidden = false;
  elements.codeStatus.textContent = "이미지 미리보기를 만드는 중이에요…";
  await drawImportPreviewCanvas(nextCounts, true);
  elements.codeStatus.textContent = "미리보기를 확인한 뒤 적용하거나 취소해 주세요.";
}

function applyCollectionCounts(nextCounts) {
  pokemon.forEach(({ id }) => {
    state.counts[id] = nextCounts[id] || 0;
  });
  saveCollection();
  render();
  refreshCollectionCode();
}

function applyCollectionCode(code) {
  applyCollectionCounts(parseCollectionCode(code));
}

function getTradeComparison(friendCounts) {
  const myGive = pokemon.filter(
    ({ id }) => (state.counts[id] || 0) > 1 && (friendCounts[id] || 0) === 0,
  );
  const friendGive = pokemon.filter(
    ({ id }) => (friendCounts[id] || 0) > 1 && (state.counts[id] || 0) === 0,
  );

  return {
    myGive,
    friendGive,
    myGain: friendGive.length,
    friendGain: myGive.length,
  };
}

function renderCompareList(container, items, counts, emptyMessage) {
  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "compare-empty";
    empty.textContent = emptyMessage;
    container.replaceChildren(empty);
    return;
  }

  container.replaceChildren(
    ...items.map((item) => {
      const row = document.createElement("div");
      row.className = "compare-item";
      const spareCount = Math.max(0, (counts[item.id] || 0) - 1);
      row.innerHTML = `${item.name}<small>교환 가능 여분 ${spareCount}장 · NO.${String(
        item.id,
      ).padStart(3, "0")}</small>`;
      return row;
    }),
  );
}

async function drawTradeComparisonCanvas(comparison, friendCounts, includeArtwork = true) {
  const canvas = elements.compareCanvas;
  const context = canvas.getContext("2d");
  const columns = 4;
  const cardWidth = 150;
  const cardHeight = 150;
  const gap = 14;
  const sectionWidth = 650;
  const missingRows = Math.max(1, Math.ceil(comparison.myGive.length / columns));
  const friendRows = Math.max(1, Math.ceil(comparison.friendGive.length / columns));
  const rows = Math.max(missingRows, friendRows);
  const startY = 270;

  canvas.width = 1400;
  canvas.height = Math.max(820, startY + rows * (cardHeight + gap) + 80);

  const tradePokemon = [...comparison.myGive, ...comparison.friendGive];
  const artworks = includeArtwork
    ? await Promise.all(
        tradePokemon.map((item) => {
          const originalIndex = pokemon.findIndex(({ id }) => id === item.id);
          return loadArtwork(window.STICKER_DATA_URLS?.[originalIndex] || item.image);
        }),
      )
    : tradePokemon.map(() => null);
  const artworkById = new Map(tradePokemon.map((item, index) => [item.id, artworks[index]]));

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#f7f5ef";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#191918";
  context.fillRect(0, 0, canvas.width, 190);
  context.fillStyle = "#ffffff";
  context.font = "900 52px sans-serif";
  context.fillText("친구와 교환 비교", 60, 76);
  context.font = "700 24px sans-serif";
  context.fillStyle = "rgba(255,255,255,.86)";
  context.fillText(
    `내 신규 +${comparison.myGain}종 · 친구 신규 +${comparison.friendGain}종`,
    62,
    122,
  );

  function drawHeader(label, detail, x, color) {
    context.fillStyle = color;
    roundedRect(context, x, 215, sectionWidth, 42, 14);
    context.fillStyle = "#ffffff";
    context.font = "900 22px sans-serif";
    context.fillText(label, x + 22, 243);
    context.font = "700 17px sans-serif";
    context.textAlign = "right";
    context.fillText(detail, x + sectionWidth - 22, 242);
    context.textAlign = "left";
  }

  function drawEmpty(message, x) {
    context.fillStyle = "#e7e4dc";
    roundedRect(context, x, startY, sectionWidth, 140, 16);
    context.fillStyle = "#77736b";
    context.font = "800 24px sans-serif";
    context.textAlign = "center";
    context.fillText(message, x + sectionWidth / 2, startY + 78);
    context.textAlign = "left";
  }

  function drawCard(item, index, x, counts, accentColor) {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const cardX = x + column * (cardWidth + gap);
    const cardY = startY + row * (cardHeight + gap);
    const spareCount = Math.max(0, (counts[item.id] || 0) - 1);
    const artwork = artworkById.get(item.id);

    context.fillStyle = "#ffffff";
    roundedRect(context, cardX, cardY, cardWidth, cardHeight, 14);
    context.strokeStyle = accentColor;
    context.lineWidth = 3;
    context.strokeRect(cardX + 1.5, cardY + 1.5, cardWidth - 3, cardHeight - 3);

    if (artwork) {
      context.drawImage(artwork, cardX + 35, cardY + 8, 80, 80);
    } else {
      context.fillStyle = accentColor === "#3564d8" ? "#edf2ff" : "#ffede8";
      context.beginPath();
      context.arc(cardX + cardWidth / 2, cardY + 48, 34, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = accentColor;
      context.font = "900 22px sans-serif";
      context.textAlign = "center";
      context.fillText(item.name[0], cardX + cardWidth / 2, cardY + 56);
    }

    context.fillStyle = "#191918";
    context.font = "800 17px sans-serif";
    context.textAlign = "center";
    context.fillText(item.name, cardX + cardWidth / 2, cardY + 115);
    context.fillStyle = "#77736b";
    context.font = "700 13px sans-serif";
    context.fillText(`여분 ${spareCount}장`, cardX + cardWidth / 2, cardY + 135);
    context.textAlign = "left";
  }

  const leftX = 50;
  const rightX = 700;
  drawHeader("내가 줄 수 있어요", `${comparison.myGive.length}종`, leftX, "#ff5b32");
  drawHeader("친구가 줄 수 있어요", `${comparison.friendGive.length}종`, rightX, "#3564d8");

  if (comparison.myGive.length === 0) {
    drawEmpty("친구에게 줄 후보가 없어요.", leftX);
  } else {
    comparison.myGive.forEach((item, index) => drawCard(item, index, leftX, state.counts, "#ff5b32"));
  }

  if (comparison.friendGive.length === 0) {
    drawEmpty("친구에게 받을 후보가 없어요.", rightX);
  } else {
    comparison.friendGive.forEach((item, index) =>
      drawCard(item, index, rightX, friendCounts, "#3564d8"),
    );
  }

  context.fillStyle = "#77736b";
  context.font = "600 17px sans-serif";
  context.fillText("씰도감 · 친구 코드 교환 비교", 50, canvas.height - 35);
}

async function drawKakaoTradeComparisonCanvas(comparison, friendCounts, includeArtwork = true) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const columns = 3;
  const cardWidth = 220;
  const cardHeight = 190;
  const gap = 18;
  const startX = 48;
  let y = 300;

  const leftRows = Math.max(1, Math.ceil(comparison.myGive.length / columns));
  const rightRows = Math.max(1, Math.ceil(comparison.friendGive.length / columns));
  canvas.width = 800;
  canvas.height = Math.max(1200, 300 + (leftRows + rightRows) * (cardHeight + gap) + 280);

  const tradePokemon = [...comparison.myGive, ...comparison.friendGive];
  const artworks = includeArtwork
    ? await Promise.all(
        tradePokemon.map((item) => {
          const originalIndex = pokemon.findIndex(({ id }) => id === item.id);
          return loadArtwork(window.STICKER_DATA_URLS?.[originalIndex] || item.image);
        }),
      )
    : tradePokemon.map(() => null);
  const artworkById = new Map(tradePokemon.map((item, index) => [item.id, artworks[index]]));

  context.fillStyle = "#f7f5ef";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#191918";
  context.fillRect(0, 0, canvas.width, 230);
  context.fillStyle = "#ffffff";
  context.font = "900 52px sans-serif";
  context.fillText("친구와 교환 비교", 48, 78);
  context.font = "700 25px sans-serif";
  context.fillStyle = "rgba(255,255,255,.88)";
  context.fillText(`내 신규 +${comparison.myGain}종`, 50, 124);
  context.fillText(`친구 신규 +${comparison.friendGain}종`, 50, 160);

  function drawSectionTitle(label, count, color) {
    context.fillStyle = color;
    roundedRect(context, 48, y, canvas.width - 96, 54, 16);
    context.fillStyle = "#ffffff";
    context.font = "900 26px sans-serif";
    context.fillText(label, 74, y + 36);
    context.font = "800 20px sans-serif";
    context.textAlign = "right";
    context.fillText(`${count}종`, canvas.width - 74, y + 35);
    context.textAlign = "left";
    y += 74;
  }

  function drawEmpty(message) {
    context.fillStyle = "#e7e4dc";
    roundedRect(context, 48, y, canvas.width - 96, 150, 18);
    context.fillStyle = "#77736b";
    context.font = "800 25px sans-serif";
    context.textAlign = "center";
    context.fillText(message, canvas.width / 2, y + 86);
    context.textAlign = "left";
    y += 174;
  }

  function drawCards(items, counts, accentColor) {
    if (items.length === 0) return;
    items.forEach((item, index) => {
      const column = index % columns;
      const row = Math.floor(index / columns);
      const x = startX + column * (cardWidth + gap);
      const cardY = y + row * (cardHeight + gap);
      const spareCount = Math.max(0, (counts[item.id] || 0) - 1);
      const artwork = artworkById.get(item.id);

      context.fillStyle = "#ffffff";
      roundedRect(context, x, cardY, cardWidth, cardHeight, 18);
      context.strokeStyle = accentColor;
      context.lineWidth = 4;
      context.strokeRect(x + 2, cardY + 2, cardWidth - 4, cardHeight - 4);

      if (artwork) {
        context.drawImage(artwork, x + 55, cardY + 12, 110, 110);
      }

      context.fillStyle = "#191918";
      context.font = "900 24px sans-serif";
      context.textAlign = "center";
      context.fillText(item.name, x + cardWidth / 2, cardY + 148);
      context.fillStyle = "#77736b";
      context.font = "800 16px sans-serif";
      context.fillText(`여분 ${spareCount}장`, x + cardWidth / 2, cardY + 172);
      context.textAlign = "left";
    });
    y += Math.ceil(items.length / columns) * (cardHeight + gap) + 28;
  }

  drawSectionTitle("내가 줄 수 있어요", comparison.myGive.length, "#ff5b32");
  comparison.myGive.length === 0
    ? drawEmpty("친구에게 줄 후보가 없어요.")
    : drawCards(comparison.myGive, state.counts, "#ff5b32");

  drawSectionTitle("친구가 줄 수 있어요", comparison.friendGive.length, "#3564d8");
  comparison.friendGive.length === 0
    ? drawEmpty("친구에게 받을 후보가 없어요.")
    : drawCards(comparison.friendGive, friendCounts, "#3564d8");

  context.fillStyle = "#77736b";
  context.font = "600 18px sans-serif";
  context.fillText("씰도감 · 카톡 공유용 교환 비교", 48, canvas.height - 42);

  return canvas;
}

async function drawCompletionCertificate(includeArtwork = true) {
  const canvas = elements.certificateCanvas;
  const context = canvas.getContext("2d");
  const counts = Object.values(state.counts);
  const totalPacks = counts.reduce((sum, count) => sum + count, 0);
  const duplicates = counts.reduce((sum, count) => sum + Math.max(0, count - 1), 0);
  const spent = totalPacks * Math.max(0, Number(state.packPrice) || 0);
  const featured = includeArtwork
    ? await Promise.all(
        [25, 6, 150].map((id) => {
          const index = pokemon.findIndex((item) => item.id === id);
          return loadArtwork(window.STICKER_DATA_URLS?.[index] || pokemon[index]?.image);
        }),
      )
    : [];

  canvas.width = 1200;
  canvas.height = 1600;
  context.fillStyle = "#ffcf2e";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#fff8df";
  roundedRect(context, 80, 80, 1040, 1440, 40);
  context.strokeStyle = "#191918";
  context.lineWidth = 8;
  context.strokeRect(105, 105, 990, 1390);

  context.fillStyle = "#191918";
  context.font = "900 58px sans-serif";
  context.textAlign = "center";
  context.fillText("30주년 띠부씰", canvas.width / 2, 215);
  context.font = "900 86px sans-serif";
  context.fillText("COMPLETE", canvas.width / 2, 325);
  context.font = "800 34px sans-serif";
  context.fillStyle = "#ff5b32";
  context.fillText("100종 수집 완료 인증서", canvas.width / 2, 390);

  featured.forEach((artwork, index) => {
    if (!artwork) return;
    context.drawImage(artwork, 260 + index * 210, 465, 160, 160);
  });

  context.fillStyle = "#191918";
  context.font = "900 42px sans-serif";
  context.fillText("당신은 띠부씰 마스터입니다", canvas.width / 2, 720);

  const stats = [
    ["보유", "100종"],
    ["총 기록", `${totalPacks.toLocaleString("ko-KR")}장`],
    ["중복", `${duplicates.toLocaleString("ko-KR")}장`],
    ["기록상 지출", formatWon(spent)],
  ];
  stats.forEach(([label, value], index) => {
    const x = index % 2 === 0 ? 190 : 620;
    const y = 820 + Math.floor(index / 2) * 170;
    context.fillStyle = "#ffffff";
    roundedRect(context, x, y, 390, 120, 24);
    context.fillStyle = "#77736b";
    context.font = "800 24px sans-serif";
    context.textAlign = "left";
    context.fillText(label, x + 32, y + 42);
    context.fillStyle = "#191918";
    context.font = "900 36px sans-serif";
    context.fillText(value, x + 32, y + 88);
  });

  context.fillStyle = "#3564d8";
  roundedRect(context, 190, 1210, 820, 105, 26);
  context.fillStyle = "#ffffff";
  context.font = "900 36px sans-serif";
  context.textAlign = "center";
  context.fillText("씰도감이 인증합니다", canvas.width / 2, 1275);

  context.fillStyle = "#77736b";
  context.font = "600 22px sans-serif";
  context.fillText(new Date().toISOString().slice(0, 10), canvas.width / 2, 1410);
  context.textAlign = "left";
}

async function renderTradeComparison(friendCounts) {
  const comparison = getTradeComparison(friendCounts);
  latestComparison = comparison;
  latestFriendCounts = friendCounts;
  const summaryItems = [
    ["내 신규 획득", `+${comparison.myGain}종`],
    ["친구 신규 획득", `+${comparison.friendGain}종`],
    ["서로 교환 후보", `${comparison.myGive.length + comparison.friendGive.length}종`],
  ];

  elements.compareSummary.replaceChildren(
    ...summaryItems.map(([label, value]) => {
      const item = document.createElement("div");
      item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
      return item;
    }),
  );
  renderCompareList(
    elements.myGiveList,
    comparison.myGive,
    state.counts,
    "친구에게 줄 수 있는 중복 씰이 없어요.",
  );
  renderCompareList(
    elements.friendGiveList,
    comparison.friendGive,
    friendCounts,
    "친구에게 받을 수 있는 중복 씰이 없어요.",
  );
  elements.compareResult.hidden = false;
  elements.codeStatus.textContent = "교환 비교 이미지를 만드는 중이에요…";
  await drawTradeComparisonCanvas(comparison, friendCounts, true);
  elements.codeStatus.textContent = "친구 코드 비교 결과를 만들었어요.";
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function loadCollection() {
  const shared = new URLSearchParams(location.search).get("collection");
  if (shared) {
    try {
      applyCollectionCode(shared);
      history.replaceState({}, "", location.pathname);
      showToast("공유받은 컬렉션을 불러왔어요.");
      return;
    } catch (error) {
      console.warn("공유 데이터를 읽지 못했습니다.", error);
    }
  }

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      pokemon.forEach(({ id }) => {
        state.counts[id] = Math.max(0, Number(saved[id]) || 0);
      });
    }
  } catch (error) {
    console.warn("저장된 데이터를 읽지 못했습니다.", error);
  }

  const savedPackPrice = Number(localStorage.getItem(PACK_PRICE_KEY));
  if (Number.isFinite(savedPackPrice) && savedPackPrice >= 0) {
    state.packPrice = savedPackPrice;
  }
}

function saveCollection() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.counts));
}

function savePackPrice() {
  localStorage.setItem(PACK_PRICE_KEY, String(state.packPrice));
}

function getVisiblePokemon() {
  const search = state.search.trim().toLowerCase();
  const list = pokemon.filter((item) => {
    const count = state.counts[item.id];
    const matchesSearch =
      !search ||
      item.name.toLowerCase().includes(search) ||
      String(item.id).includes(search);
    const matchesFilter =
      state.filter === "all" ||
      (state.filter === "owned" && count > 0) ||
      (state.filter === "missing" && count === 0) ||
      (state.filter === "duplicate" && count > 1);
    return matchesSearch && matchesFilter;
  });

  return list.sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name, "ko");
    if (state.sort === "count") {
      return state.counts[b.id] - state.counts[a.id] || a.id - b.id;
    }
    return a.id - b.id;
  });
}

function changeCount(id, nextCount) {
  state.counts[id] = Math.max(0, nextCount);
  saveCollection();
  render();
  if (elements.codeDialog.open) refreshCollectionCode();
}

function renderCards() {
  const visible = getVisiblePokemon();
  const fragment = document.createDocumentFragment();

  visible.forEach((item) => {
    const count = state.counts[item.id];
    const card = elements.template.content.firstElementChild.cloneNode(true);
    const toggle = card.querySelector(".sticker-toggle");

    card.dataset.id = item.id;
    card.classList.toggle("owned", count > 0);
    card.querySelector(".sticker-number").textContent = `NO.${String(item.id).padStart(3, "0")}`;
    card.querySelector(".sticker-image").src = item.image;
    card.querySelector(".sticker-name").textContent = item.name;
    card.querySelector(".sticker-type").textContent = item.type;
    card.querySelector(".quantity").textContent = count;
    toggle.setAttribute(
      "aria-label",
      count > 0 ? `${item.name} 보유 체크 해제` : `${item.name} 보유 체크`,
    );
    toggle.setAttribute("aria-pressed", String(count > 0));
    toggle.addEventListener("click", () => changeCount(item.id, count > 0 ? 0 : 1));
    card
      .querySelector(".minus")
      .addEventListener("click", () => changeCount(item.id, count - 1));
    card
      .querySelector(".plus")
      .addEventListener("click", () => changeCount(item.id, count + 1));
    fragment.appendChild(card);
  });

  elements.grid.replaceChildren(fragment);
  elements.empty.hidden = visible.length !== 0;
  elements.grid.hidden = visible.length === 0;
  elements.summary.textContent =
    visible.length === pokemon.length
      ? `전체 ${pokemon.length}종을 확인하고 있어요.`
      : `조건에 맞는 ${visible.length}종을 보여드려요.`;
}

function renderStats() {
  const counts = Object.values(state.counts);
  const owned = counts.filter((count) => count > 0).length;
  const duplicates = counts.reduce((sum, count) => sum + Math.max(0, count - 1), 0);
  const totalPacks = counts.reduce((sum, count) => sum + count, 0);
  const percent = Math.round((owned / pokemon.length) * 100);
  const fullExpectedPacks = pokemon.length * harmonicNumber(pokemon.length);
  const remainingExpectedPacks =
    owned >= pokemon.length
      ? 0
      : pokemon.length * (harmonicNumber(pokemon.length) - harmonicNumber(owned));
  const price = Math.max(0, Number(state.packPrice) || 0);

  elements.owned.textContent = owned;
  elements.missing.textContent = pokemon.length - owned;
  elements.duplicate.textContent = duplicates;
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressFill.style.width = `${percent}%`;
  elements.packPriceInput.value = String(price);
  elements.expectedTotalCost.textContent = formatWon(fullExpectedPacks * price);
  elements.expectedTotalPacks.textContent = `평균 ${formatPacks(fullExpectedPacks)}`;
  elements.spentCost.textContent = formatWon(totalPacks * price);
  elements.spentPacks.textContent = `기록 ${totalPacks.toLocaleString("ko-KR")}개`;
  elements.remainingCost.textContent = formatWon(remainingExpectedPacks * price);
  elements.remainingPacks.textContent =
    owned >= pokemon.length ? "컴플리트!" : `평균 ${formatPacks(remainingExpectedPacks)}`;
  elements.costNote.textContent =
    owned >= pokemon.length
      ? "축하해요. 계산상 앞으로 필요한 평균 비용은 0원이에요."
      : "실제 봉입률, 교환, 중고 구매 여부에 따라 달라질 수 있는 재미용 추정치예요.";
}

function render() {
  renderCards();
  renderStats();
  maybeShowCompletionCertificate();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => elements.toast.classList.remove("show"), 2200);
}

async function maybeShowCompletionCertificate() {
  const isComplete = pokemon.every(({ id }) => state.counts[id] > 0);
  if (!isComplete || localStorage.getItem(COMPLETION_CERTIFICATE_SEEN_KEY)) return;
  localStorage.setItem(COMPLETION_CERTIFICATE_SEEN_KEY, "true");
  await drawCompletionCertificate(true);
  elements.certificateDialog.showModal();
  showToast("컴플리트 인증서가 준비됐어요!");
}

function roundedRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.roundRect(x, y, width, height, radius);
  context.fill();
}

function loadArtwork(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

async function drawTradeSummaryImage(includeArtwork = true) {
  const canvas = elements.collectionCanvas;
  const missingPokemon = pokemon.filter((item) => state.counts[item.id] === 0);
  const duplicatePokemon = pokemon.filter((item) => state.counts[item.id] > 1);
  const counts = Object.values(state.counts);
  const owned = counts.filter((count) => count > 0).length;
  const duplicates = counts.reduce((sum, count) => sum + Math.max(0, count - 1), 0);
  const columnsPerSection = 4;
  const cardWidth = 180;
  const cardHeight = 172;
  const gap = 16;
  const missingRows = Math.max(1, Math.ceil(missingPokemon.length / columnsPerSection));
  const duplicateRows = Math.max(1, Math.ceil(duplicatePokemon.length / columnsPerSection));
  const rows = Math.max(missingRows, duplicateRows);
  const startY = 385;
  const sectionWidth = 800;
  const sectionGap = 40;
  const minHeight = 850;

  canvas.width = 1800;
  canvas.height = Math.max(minHeight, startY + rows * (cardHeight + gap) + 95);

  const context = canvas.getContext("2d");
  const tradePokemon = [...missingPokemon, ...duplicatePokemon];
  const artworks = includeArtwork
    ? await Promise.all(
        tradePokemon.map((item) => {
          const originalIndex = pokemon.findIndex(({ id }) => id === item.id);
          return loadArtwork(window.STICKER_DATA_URLS?.[originalIndex] || item.image);
        }),
      )
    : tradePokemon.map(() => null);
  const artworkById = new Map(tradePokemon.map((item, index) => [item.id, artworks[index]]));

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#f7f5ef";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#191918";
  context.fillRect(0, 0, canvas.width, 270);
  context.fillStyle = "#ffffff";
  context.font = "900 72px sans-serif";
  context.fillText("띠부씰 교환 요약", 80, 105);
  context.font = "600 30px sans-serif";
  context.fillStyle = "rgba(255,255,255,.84)";
  context.fillText("구해요 / 드려요를 한 장으로 공유해요", 82, 158);

  context.fillStyle = "#ffd84d";
  context.font = "900 62px sans-serif";
  context.textAlign = "right";
  context.fillText(`보유 ${owned}종`, 1720, 102);
  context.font = "700 25px sans-serif";
  context.fillStyle = "#ffffff";
  context.fillText(`구해요 ${missingPokemon.length}종  ·  드려요 ${duplicatePokemon.length}종 / ${duplicates}장`, 1720, 153);
  context.textAlign = "left";

  function drawSectionHeader(label, detail, x, color) {
    context.fillStyle = color;
    roundedRect(context, x, 305, sectionWidth, 56, 16);
    context.fillStyle = "#ffffff";
    context.font = "900 28px sans-serif";
    context.fillText(label, x + 28, 342);
    context.font = "700 20px sans-serif";
    context.textAlign = "right";
    context.fillText(detail, x + sectionWidth - 28, 340);
    context.textAlign = "left";
  }

  function drawTradeCard(item, index, x, accentColor, mode) {
    const column = index % columnsPerSection;
    const row = Math.floor(index / columnsPerSection);
    const cardX = x + column * (cardWidth + gap);
    const cardY = startY + row * (cardHeight + gap);
    const count = state.counts[item.id];
    const artwork = artworkById.get(item.id);

    context.fillStyle = "#ffffff";
    roundedRect(context, cardX, cardY, cardWidth, cardHeight, 16);
    context.strokeStyle = accentColor;
    context.lineWidth = 3;
    context.strokeRect(cardX + 1.5, cardY + 1.5, cardWidth - 3, cardHeight - 3);

    if (artwork) {
      context.drawImage(artwork, cardX + 34, cardY + 10, 112, 112);
    } else {
      context.fillStyle = mode === "missing" ? "#edf2ff" : "#ffede8";
      context.beginPath();
      context.arc(cardX + cardWidth / 2, cardY + 66, 44, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = accentColor;
      context.font = "900 26px sans-serif";
      context.textAlign = "center";
      context.fillText(item.name[0], cardX + cardWidth / 2, cardY + 76);
    }

    context.fillStyle = "#191918";
    context.font = "800 20px sans-serif";
    context.textAlign = "center";
    context.fillText(item.name, cardX + cardWidth / 2, cardY + 150);

    if (mode === "duplicate") {
      context.fillStyle = "#191918";
      context.beginPath();
      context.arc(cardX + cardWidth - 24, cardY + 25, 22, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#ffffff";
      context.font = "800 18px sans-serif";
      context.fillText(`×${count}`, cardX + cardWidth - 24, cardY + 32);
    }

    context.textAlign = "left";
  }

  function drawEmptyMessage(message, x) {
    context.fillStyle = "#e7e4dc";
    roundedRect(context, x, startY, sectionWidth, 170, 18);
    context.fillStyle = "#77736b";
    context.font = "800 30px sans-serif";
    context.textAlign = "center";
    context.fillText(message, x + sectionWidth / 2, startY + 94);
    context.textAlign = "left";
  }

  const missingX = 70;
  const duplicateX = missingX + sectionWidth + sectionGap;
  drawSectionHeader("구해요", `${missingPokemon.length}종`, missingX, "#3564d8");
  drawSectionHeader("드려요", `${duplicatePokemon.length}종`, duplicateX, "#ff5b32");

  if (missingPokemon.length === 0) {
    drawEmptyMessage("전부 모았어요!", missingX);
  } else {
    missingPokemon.forEach((item, index) => drawTradeCard(item, index, missingX, "#3564d8", "missing"));
  }

  if (duplicatePokemon.length === 0) {
    drawEmptyMessage("아직 교환할 중복 씰이 없어요.", duplicateX);
  } else {
    duplicatePokemon.forEach((item, index) => drawTradeCard(item, index, duplicateX, "#ff5b32", "duplicate"));
  }

  context.fillStyle = "#77736b";
  context.font = "500 20px sans-serif";
  context.fillText("씰도감 · 교환 매칭용 요약 이미지", 66, canvas.height - 40);
}

async function drawCollectionImage(includeArtwork = true) {
  if (imageMode === "trade") {
    await drawTradeSummaryImage(includeArtwork);
    return;
  }

  const canvas = elements.collectionCanvas;
  const duplicatePokemon = pokemon.filter((item) => state.counts[item.id] > 1);
  const missingPokemon = pokemon.filter((item) => state.counts[item.id] === 0);
  const imagePokemon =
    imageMode === "duplicates"
      ? duplicatePokemon
      : imageMode === "missing"
        ? missingPokemon
        : pokemon;
  const isListMode = imageMode === "duplicates" || imageMode === "missing";
  const columns = isListMode ? 5 : 10;
  const rows = Math.max(1, Math.ceil(imagePokemon.length / columns));
  canvas.width = 1800;
  canvas.height = isListMode ? Math.max(650, 330 + rows * 235) : 1740;
  const context = canvas.getContext("2d");
  const counts = Object.values(state.counts);
  const owned = counts.filter((count) => count > 0).length;
  const duplicates = counts.reduce((sum, count) => sum + Math.max(0, count - 1), 0);
  const percent = Math.round((owned / pokemon.length) * 100);
  const headerColor =
    imageMode === "duplicates" ? "#191918" : imageMode === "missing" ? "#3564d8" : "#ff5b32";
  const accentColor = imageMode === "missing" ? "#3564d8" : "#ff5b32";
  const title =
    imageMode === "duplicates"
      ? "나의 중복 띠부씰"
      : imageMode === "missing"
        ? "아직 없는 띠부씰"
        : "나의 30주년 띠부씰 도감";
  const subtitle =
    imageMode === "duplicates"
      ? "교환 가능한 중복 씰 모음"
      : imageMode === "missing"
        ? "친구에게 공유하기 좋은 미보유 씰 목록"
        : "포켓몬 아트웍 스페셜 · 100종";
  const headlineMetric =
    imageMode === "duplicates"
      ? `${duplicatePokemon.length}종`
      : imageMode === "missing"
        ? `${missingPokemon.length}종`
        : `${percent}%`;
  const headlineDetail =
    imageMode === "duplicates"
      ? `여분으로 가진 씰 ${duplicates}장`
      : imageMode === "missing"
        ? `아직 필요한 씰 ${missingPokemon.length}종`
        : `보유 ${owned}종  ·  미보유 ${100 - owned}종  ·  중복 ${duplicates}장`;
  const artworks = includeArtwork
    ? await Promise.all(
        imagePokemon.map((item) => {
          const originalIndex = pokemon.findIndex(({ id }) => id === item.id);
          return loadArtwork(
            window.STICKER_DATA_URLS?.[originalIndex] || item.image,
          );
        }),
      )
    : imagePokemon.map(() => null);

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#f7f5ef";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = headerColor;
  context.fillRect(0, 0, canvas.width, 255);

  context.fillStyle = "#ffffff";
  context.font = "900 68px sans-serif";
  context.fillText(title, 80, 100);
  context.font = "600 28px sans-serif";
  context.fillStyle = "rgba(255,255,255,.85)";
  context.fillText(subtitle, 82, 150);

  context.fillStyle = "#ffd84d";
  context.font = "900 76px sans-serif";
  context.textAlign = "right";
  context.fillText(headlineMetric, 1720, 105);
  context.font = "700 25px sans-serif";
  context.fillStyle = "#ffffff";
  context.fillText(headlineDetail, 1720, 155);
  context.textAlign = "left";

  const cardWidth = isListMode ? 312 : 156;
  const cardHeight = isListMode ? 210 : 125;
  const gap = isListMode ? 20 : 12;
  const startX = isListMode ? 80 : 66;
  const startY = 295;

  if (isListMode && imagePokemon.length === 0) {
    context.fillStyle = "#77736b";
    context.font = "700 42px sans-serif";
    context.textAlign = "center";
    context.fillText(
      imageMode === "duplicates"
        ? "아직 중복으로 가진 씰이 없어요."
        : "전부 모았어요! 없는 씰이 없어요.",
      canvas.width / 2,
      430,
    );
    context.textAlign = "left";
  }

  imagePokemon.forEach((item, index) => {
    const count = state.counts[item.id];
    const isOwned = count > 0;
    const showAsActive = isOwned || imageMode === "missing";
    const column = index % columns;
    const row = Math.floor(index / columns);
    const x = startX + column * (cardWidth + gap);
    const y = startY + row * (cardHeight + gap);

    context.fillStyle = showAsActive ? "#ffffff" : "#e7e4dc";
    roundedRect(context, x, y, cardWidth, cardHeight, 14);

    if (showAsActive) {
      context.strokeStyle = accentColor;
      context.lineWidth = 3;
      context.strokeRect(x + 1.5, y + 1.5, cardWidth - 3, cardHeight - 3);
    }

    const artwork = artworks[index];
    if (artwork) {
      context.save();
      context.filter = showAsActive ? "none" : "grayscale(1) opacity(.35)";
      if (isListMode) {
        context.drawImage(artwork, x + 76, y + 12, 160, 160);
      } else {
        context.drawImage(artwork, x + 38, y + 8, 80, 80);
      }
      context.restore();
    } else {
      context.fillStyle = showAsActive ? (imageMode === "missing" ? "#edf2ff" : "#ffede8") : "#d6d2c9";
      context.beginPath();
      context.arc(
        x + cardWidth / 2,
        y + (isListMode ? 86 : 47),
        isListMode ? 60 : 34,
        0,
        Math.PI * 2,
      );
      context.fill();
      context.fillStyle = showAsActive ? accentColor : "#aaa69e";
      context.font = "900 27px sans-serif";
      context.textAlign = "center";
      context.fillText(
        item.name[0],
        x + cardWidth / 2,
        y + (isListMode ? 96 : 57),
      );
    }

    context.textAlign = "center";
    context.fillStyle = showAsActive ? "#191918" : "#8d8981";
    context.font = `800 ${isListMode ? 25 : 18}px sans-serif`;
    context.fillText(
      item.name,
      x + cardWidth / 2,
      y + (isListMode ? 192 : 105),
    );
    context.textAlign = "left";

    if (count > 1) {
      context.fillStyle = "#191918";
      context.beginPath();
      context.arc(
        x + cardWidth - (isListMode ? 30 : 18),
        y + (isListMode ? 30 : 18),
        isListMode ? 25 : 16,
        0,
        Math.PI * 2,
      );
      context.fill();
      context.fillStyle = "#ffffff";
      context.font = `800 ${isListMode ? 21 : 15}px sans-serif`;
      context.textAlign = "center";
      context.fillText(
        `×${count}`,
        x + cardWidth - (isListMode ? 30 : 18),
        y + (isListMode ? 37 : 23),
      );
      context.textAlign = "left";
    }
  });

  context.fillStyle = "#77736b";
  context.font = "500 20px sans-serif";
  context.fillText(
    imageMode === "duplicates"
      ? "씰도감 · 중복 씰 교환용 목록"
      : imageMode === "missing"
        ? "씰도감 · 아직 필요한 씰 목록"
      : "씰도감 · 브라우저에 저장된 나의 수집 기록",
    66,
    canvas.height - 40,
  );
}

async function drawKakaoCollectionImage(includeArtwork = true) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const counts = Object.values(state.counts);
  const owned = counts.filter((count) => count > 0).length;
  const duplicates = counts.reduce((sum, count) => sum + Math.max(0, count - 1), 0);
  const percent = Math.round((owned / pokemon.length) * 100);
  const missingPokemon = pokemon.filter((item) => state.counts[item.id] === 0);
  const duplicatePokemon = pokemon.filter((item) => state.counts[item.id] > 1);
  const isTradeMode = imageMode === "trade";
  const isAllMode = imageMode === "all";
  const columns = isAllMode ? 4 : 3;
  const cardWidth = isAllMode ? 166 : 220;
  const cardHeight = isAllMode ? 138 : 190;
  const gap = isAllMode ? 14 : 18;
  const startX = 48;
  let y = 300;

  const imagePokemon =
    imageMode === "duplicates"
      ? duplicatePokemon
      : imageMode === "missing"
        ? missingPokemon
        : pokemon;
  const rows = isTradeMode
    ? Math.max(1, Math.ceil(missingPokemon.length / 3)) +
      Math.max(1, Math.ceil(duplicatePokemon.length / 3))
    : Math.max(1, Math.ceil(imagePokemon.length / columns));

  canvas.width = 800;
  canvas.height = Math.max(1200, 320 + rows * (cardHeight + gap) + (isTradeMode ? 320 : 150));

  const artworkPokemon = isTradeMode ? [...missingPokemon, ...duplicatePokemon] : imagePokemon;
  const artworks = includeArtwork
    ? await Promise.all(
        artworkPokemon.map((item) => {
          const originalIndex = pokemon.findIndex(({ id }) => id === item.id);
          return loadArtwork(window.STICKER_DATA_URLS?.[originalIndex] || item.image);
        }),
      )
    : artworkPokemon.map(() => null);
  const artworkById = new Map(artworkPokemon.map((item, index) => [item.id, artworks[index]]));

  const title =
    imageMode === "duplicates"
      ? "나의 중복 띠부씰"
      : imageMode === "missing"
        ? "아직 없는 띠부씰"
        : imageMode === "trade"
          ? "띠부씰 교환 요약"
          : "나의 띠부씰 도감";
  const subtitle =
    imageMode === "duplicates"
      ? `교환 가능한 중복 ${duplicatePokemon.length}종 · 여분 ${duplicates}장`
      : imageMode === "missing"
        ? `아직 필요한 씰 ${missingPokemon.length}종`
        : imageMode === "trade"
          ? `구해요 ${missingPokemon.length}종 · 드려요 ${duplicatePokemon.length}종`
          : `보유 ${owned}종 · 미보유 ${pokemon.length - owned}종 · 중복 ${duplicates}장`;
  const headerColor =
    imageMode === "missing" ? "#3564d8" : imageMode === "duplicates" ? "#191918" : "#ff5b32";

  context.fillStyle = "#f7f5ef";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = headerColor;
  context.fillRect(0, 0, canvas.width, 230);
  context.fillStyle = "#ffffff";
  context.font = "900 52px sans-serif";
  context.fillText(title, 48, 78);
  context.font = "700 24px sans-serif";
  context.fillStyle = "rgba(255,255,255,.88)";
  context.fillText(subtitle, 50, 124);
  context.fillStyle = "#ffd84d";
  context.font = "900 42px sans-serif";
  context.fillText(imageMode === "all" ? `${percent}%` : "공유용", 50, 178);

  function drawSectionTitle(label, count, color) {
    context.fillStyle = color;
    roundedRect(context, 48, y, canvas.width - 96, 54, 16);
    context.fillStyle = "#ffffff";
    context.font = "900 26px sans-serif";
    context.fillText(label, 74, y + 36);
    context.font = "800 20px sans-serif";
    context.textAlign = "right";
    context.fillText(`${count}종`, canvas.width - 74, y + 35);
    context.textAlign = "left";
    y += 74;
  }

  function drawEmpty(message) {
    context.fillStyle = "#e7e4dc";
    roundedRect(context, 48, y, canvas.width - 96, 150, 18);
    context.fillStyle = "#77736b";
    context.font = "800 25px sans-serif";
    context.textAlign = "center";
    context.fillText(message, canvas.width / 2, y + 86);
    context.textAlign = "left";
    y += 174;
  }

  function drawCard(item, index, options = {}) {
    const localColumns = options.columns || columns;
    const localCardWidth = options.cardWidth || cardWidth;
    const localCardHeight = options.cardHeight || cardHeight;
    const localGap = options.gap || gap;
    const column = index % localColumns;
    const row = Math.floor(index / localColumns);
    const x = startX + column * (localCardWidth + localGap);
    const cardY = y + row * (localCardHeight + localGap);
    const count = state.counts[item.id] || 0;
    const isOwned = count > 0;
    const showAsActive = isOwned || imageMode === "missing" || options.forceActive;
    const accentColor = options.accentColor || (imageMode === "missing" ? "#3564d8" : "#ff5b32");
    const artwork = artworkById.get(item.id);
    const imageSize = isAllMode && !isTradeMode ? 72 : 110;
    const imageX = x + (localCardWidth - imageSize) / 2;

    context.fillStyle = showAsActive ? "#ffffff" : "#e7e4dc";
    roundedRect(context, x, cardY, localCardWidth, localCardHeight, 18);
    if (showAsActive) {
      context.strokeStyle = accentColor;
      context.lineWidth = 4;
      context.strokeRect(x + 2, cardY + 2, localCardWidth - 4, localCardHeight - 4);
    }

    if (artwork) {
      context.save();
      context.filter = showAsActive ? "none" : "grayscale(1) opacity(.33)";
      context.drawImage(artwork, imageX, cardY + 12, imageSize, imageSize);
      context.restore();
    }

    context.fillStyle = showAsActive ? "#191918" : "#8d8981";
    context.font = `900 ${isAllMode && !isTradeMode ? 18 : 24}px sans-serif`;
    context.textAlign = "center";
    context.fillText(item.name, x + localCardWidth / 2, cardY + localCardHeight - 42);
    if (count > 1 || options.showSpare) {
      context.fillStyle = "#77736b";
      context.font = `800 ${isAllMode && !isTradeMode ? 13 : 16}px sans-serif`;
      context.fillText(
        options.showSpare ? `여분 ${Math.max(0, count - 1)}장` : `×${count}`,
        x + localCardWidth / 2,
        cardY + localCardHeight - 18,
      );
    }
    context.textAlign = "left";
  }

  function drawCards(items, options = {}) {
    if (items.length === 0) {
      drawEmpty(options.emptyMessage || "표시할 씰이 없어요.");
      return;
    }
    items.forEach((item, index) => drawCard(item, index, options));
    const localColumns = options.columns || columns;
    const localCardHeight = options.cardHeight || cardHeight;
    const localGap = options.gap || gap;
    y += Math.ceil(items.length / localColumns) * (localCardHeight + localGap) + 28;
  }

  if (isTradeMode) {
    drawSectionTitle("구해요", missingPokemon.length, "#3564d8");
    drawCards(missingPokemon, {
      columns: 3,
      cardWidth: 220,
      cardHeight: 190,
      gap: 18,
      accentColor: "#3564d8",
      forceActive: true,
      emptyMessage: "전부 모았어요!",
    });
    drawSectionTitle("드려요", duplicatePokemon.length, "#ff5b32");
    drawCards(duplicatePokemon, {
      columns: 3,
      cardWidth: 220,
      cardHeight: 190,
      gap: 18,
      accentColor: "#ff5b32",
      forceActive: true,
      showSpare: true,
      emptyMessage: "아직 교환할 중복 씰이 없어요.",
    });
  } else {
    drawCards(imagePokemon, {
      accentColor: imageMode === "missing" ? "#3564d8" : "#ff5b32",
      forceActive: imageMode === "missing" || imageMode === "duplicates",
      showSpare: imageMode === "duplicates",
      emptyMessage:
        imageMode === "duplicates"
          ? "아직 중복으로 가진 씰이 없어요."
          : "전부 모았어요! 없는 씰이 없어요.",
    });
  }

  context.fillStyle = "#77736b";
  context.font = "600 18px sans-serif";
  context.fillText("씰도감 · 카톡 공유용 이미지", 48, canvas.height - 42);
  return canvas;
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error("이미지를 만들 수 없습니다."));
      }, "image/png");
    } catch (error) {
      reject(error);
    }
  });
}

async function getCollectionBlob() {
  try {
    return await canvasToBlob(elements.collectionCanvas);
  } catch {
    await drawCollectionImage(false);
    return canvasToBlob(elements.collectionCanvas);
  }
}

elements.filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  elements.filters.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle("active", filter === button);
  });
  renderCards();
});

elements.search.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCards();
});

elements.sort.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderCards();
});

elements.packPriceInput.addEventListener("input", (event) => {
  state.packPrice = Math.max(0, Number(event.target.value) || 0);
  savePackPrice();
  renderStats();
});

elements.shareButton.addEventListener("click", async () => {
  elements.shareDialog.showModal();
  elements.saveImageButton.disabled = true;
  elements.shareStatus.textContent = "이미지를 만드는 중이에요…";
  await drawCollectionImage(true);
  elements.saveImageButton.disabled = false;
  elements.shareStatus.textContent = "이미지가 준비됐어요.";
});

elements.codeButton.addEventListener("click", () => {
  refreshCollectionCode();
  hideImportPreview("코드가 준비됐어요.");
  hideCompareResult();
  setCodeTab("share");
  elements.codeDialog.showModal();
  elements.collectionCodeOutput.select();
});

elements.codeTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-code-tab]");
  if (!tab) return;
  setCodeTab(tab.dataset.codeTab);
});

elements.copyCodeButton.addEventListener("click", async () => {
  refreshCollectionCode();
  try {
    await copyText(elements.collectionCodeOutput.value);
    elements.codeStatus.textContent = "도감 코드를 복사했어요.";
    showToast("도감 코드를 복사했어요!");
  } catch (error) {
    console.error(error);
    elements.codeStatus.textContent = "복사에 실패했어요. 코드를 직접 선택해서 복사해 주세요.";
  }
});

elements.importCodeButton.addEventListener("click", async () => {
  try {
    pendingImportCounts = parseCollectionCode(elements.collectionCodeInput.value);
    await renderImportPreview(pendingImportCounts);
  } catch (error) {
    console.error(error);
    hideImportPreview("코드를 읽지 못했어요. 복사한 내용을 다시 확인해 주세요.");
  }
});

elements.applyImportButton.addEventListener("click", () => {
  if (!pendingImportCounts) {
    elements.codeStatus.textContent = "코드를 읽지 못했어요. 복사한 내용을 다시 확인해 주세요.";
    return;
  }
  applyCollectionCounts(pendingImportCounts);
  elements.collectionCodeInput.value = "";
  hideImportPreview("도감 코드 변경을 적용했어요.");
  showToast("도감 코드 변경을 적용했어요!");
});

elements.cancelImportButton.addEventListener("click", () => {
  elements.collectionCodeInput.value = "";
  hideImportPreview("변경을 취소했어요.");
  showToast("도감 코드 변경을 취소했어요.");
});

elements.collectionCodeInput.addEventListener("input", () => {
  if (!elements.importPreview.hidden) {
    hideImportPreview("코드를 다시 확인하려면 변경 미리보기를 눌러 주세요.");
  }
});

elements.compareCodeButton.addEventListener("click", async () => {
  try {
    elements.compareCodeButton.disabled = true;
    const friendCounts = parseCollectionCode(elements.friendCodeInput.value);
    await renderTradeComparison(friendCounts);
    showToast("친구 코드 비교를 완료했어요!");
  } catch (error) {
    console.error(error);
    hideCompareResult();
    elements.codeStatus.textContent = "친구 코드를 읽지 못했어요. 복사한 내용을 다시 확인해 주세요.";
  } finally {
    elements.compareCodeButton.disabled = false;
  }
});

elements.saveCompareImageButton.addEventListener("click", async () => {
  if (elements.compareResult.hidden) {
    elements.codeStatus.textContent = "먼저 친구 코드 비교를 만들어 주세요.";
    return;
  }

  elements.saveCompareImageButton.disabled = true;
  elements.codeStatus.textContent = "비교 이미지를 저장하는 중이에요…";
  try {
    const blob = await canvasToBlob(elements.compareCanvas);
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `띠부씰-친구-교환-비교-${new Date().toISOString().slice(0, 10)}.png`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    elements.codeStatus.textContent = "비교 이미지를 저장했어요.";
    showToast("비교 이미지를 저장했어요!");
  } catch (error) {
    console.error(error);
    elements.codeStatus.textContent = "비교 이미지 저장에 실패했어요.";
  } finally {
    elements.saveCompareImageButton.disabled = false;
  }
});

elements.saveCompareKakaoImageButton.addEventListener("click", async () => {
  if (!latestComparison || !latestFriendCounts) {
    elements.codeStatus.textContent = "먼저 친구 코드 비교를 만들어 주세요.";
    return;
  }

  elements.saveCompareKakaoImageButton.disabled = true;
  elements.codeStatus.textContent = "카톡용 세로 이미지를 저장하는 중이에요…";
  try {
    const kakaoCanvas = await drawKakaoTradeComparisonCanvas(
      latestComparison,
      latestFriendCounts,
      true,
    );
    const blob = await canvasToBlob(kakaoCanvas);
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `띠부씰-친구-교환-비교-카톡용-${new Date().toISOString().slice(0, 10)}.png`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    elements.codeStatus.textContent = "카톡용 세로 이미지를 저장했어요.";
    showToast("카톡용 비교 이미지를 저장했어요!");
  } catch (error) {
    console.error(error);
    elements.codeStatus.textContent = "카톡용 이미지 저장에 실패했어요.";
  } finally {
    elements.saveCompareKakaoImageButton.disabled = false;
  }
});

elements.friendCodeInput.addEventListener("input", () => {
  if (!elements.compareResult.hidden) {
    hideCompareResult();
    elements.codeStatus.textContent = "친구 코드를 다시 확인하려면 비교하기를 눌러 주세요.";
  }
});

elements.imageModeTabs.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-image-mode]");
  if (!button || button.dataset.imageMode === imageMode) return;
  imageMode = button.dataset.imageMode;
  elements.imageModeTabs.querySelectorAll(".image-mode").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  elements.saveImageButton.disabled = true;
  elements.shareStatus.textContent = "이미지를 다시 만드는 중이에요…";
  await drawCollectionImage(true);
  elements.saveImageButton.disabled = false;
  elements.shareStatus.textContent =
    imageMode === "duplicates" && !pokemon.some((item) => state.counts[item.id] > 1)
      ? "아직 중복으로 가진 씰이 없어요."
      : imageMode === "missing" && !pokemon.some((item) => state.counts[item.id] === 0)
        ? "전부 모았어요! 없는 씰이 없어요."
      : imageMode === "trade"
        ? "교환 요약 이미지가 준비됐어요."
      : "이미지가 준비됐어요.";
});

elements.saveImageButton.addEventListener("click", async () => {
  elements.saveImageButton.disabled = true;
  elements.shareStatus.textContent = "PNG 파일로 저장하는 중이에요…";
  try {
    const blob = await getCollectionBlob();
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    const fileName =
      imageMode === "duplicates"
        ? "나의-중복-띠부씰"
        : imageMode === "missing"
          ? "나의-없는-띠부씰"
          : imageMode === "trade"
            ? "나의-띠부씰-교환-요약"
          : "나의-띠부씰-도감";
    link.download = `${fileName}-${new Date().toISOString().slice(0, 10)}.png`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    elements.shareStatus.textContent = "PNG 이미지를 저장했어요.";
    showToast("도감 이미지를 저장했어요!");
  } catch (error) {
    console.error(error);
    elements.shareStatus.textContent = "이미지 저장에 실패했어요.";
  } finally {
    elements.saveImageButton.disabled = false;
  }
});

elements.saveKakaoImageButton.addEventListener("click", async () => {
  elements.saveKakaoImageButton.disabled = true;
  elements.shareStatus.textContent = "카톡용 세로 이미지를 저장하는 중이에요…";
  try {
    const kakaoCanvas = await drawKakaoCollectionImage(true);
    const blob = await canvasToBlob(kakaoCanvas);
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    const fileName =
      imageMode === "duplicates"
        ? "나의-중복-띠부씰-카톡용"
        : imageMode === "missing"
          ? "나의-없는-띠부씰-카톡용"
          : imageMode === "trade"
            ? "나의-띠부씰-교환-요약-카톡용"
          : "나의-띠부씰-도감-카톡용";
    link.download = `${fileName}-${new Date().toISOString().slice(0, 10)}.png`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    elements.shareStatus.textContent = "카톡용 세로 이미지를 저장했어요.";
    showToast("카톡용 이미지를 저장했어요!");
  } catch (error) {
    console.error(error);
    elements.shareStatus.textContent = "카톡용 이미지 저장에 실패했어요.";
  } finally {
    elements.saveKakaoImageButton.disabled = false;
  }
});

elements.resetButton.addEventListener("click", () => {
  if (!confirm("모든 수집 기록을 초기화할까요?")) return;
  pokemon.forEach(({ id }) => {
    state.counts[id] = 0;
  });
  localStorage.removeItem(COMPLETION_CERTIFICATE_SEEN_KEY);
  saveCollection();
  render();
  showToast("수집 기록을 초기화했어요.");
});

elements.saveCertificateButton.addEventListener("click", async () => {
  elements.saveCertificateButton.disabled = true;
  try {
    await drawCompletionCertificate(true);
    const blob = await canvasToBlob(elements.certificateCanvas);
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `띠부씰-컴플리트-인증서-${new Date().toISOString().slice(0, 10)}.png`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    showToast("컴플리트 인증서를 저장했어요!");
  } catch (error) {
    console.error(error);
    showToast("인증서 저장에 실패했어요.");
  } finally {
    elements.saveCertificateButton.disabled = false;
  }
});

elements.shareDialog.addEventListener("click", (event) => {
  if (event.target === elements.shareDialog) {
    hideCanvasMagnifier();
    elements.shareDialog.close();
  }
});

elements.codeDialog.addEventListener("click", (event) => {
  if (event.target === elements.codeDialog) {
    hideCanvasMagnifier();
    elements.codeDialog.close();
  }
});

enableHoverMagnifier(elements.collectionCanvas);
enableHoverMagnifier(elements.importPreviewCanvas);
enableHoverMagnifier(elements.compareCanvas);
document.addEventListener("click", hideCanvasMagnifier);
window.addEventListener("scroll", hideCanvasMagnifier, true);

loadCollection();
render();
