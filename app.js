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
const state = {
  counts: Object.fromEntries(pokemon.map(({ id }) => [id, 0])),
  filter: "all",
  search: "",
  sort: "number",
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
  summary: document.querySelector("#resultSummary"),
  shareButton: document.querySelector("#shareButton"),
  shareDialog: document.querySelector("#shareDialog"),
  codeButton: document.querySelector("#codeButton"),
  codeDialog: document.querySelector("#codeDialog"),
  collectionCodeOutput: document.querySelector("#collectionCodeOutput"),
  collectionCodeInput: document.querySelector("#collectionCodeInput"),
  copyCodeButton: document.querySelector("#copyCodeButton"),
  importCodeButton: document.querySelector("#importCodeButton"),
  codeStatus: document.querySelector("#codeStatus"),
  collectionCanvas: document.querySelector("#collectionCanvas"),
  imageModeTabs: document.querySelector("#imageModeTabs"),
  shareStatus: document.querySelector("#shareStatus"),
  saveImageButton: document.querySelector("#saveImageButton"),
  resetButton: document.querySelector("#resetButton"),
  toast: document.querySelector("#toast"),
};

let imageMode = "all";

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
  const code = raw.includes("collection=")
    ? new URL(raw).searchParams.get("collection")
    : raw;
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

function applyCollectionCode(code) {
  const nextCounts = parseCollectionCode(code);
  pokemon.forEach(({ id }) => {
    state.counts[id] = nextCounts[id] || 0;
  });
  saveCollection();
  render();
  refreshCollectionCode();
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
    if (!saved) return;
    pokemon.forEach(({ id }) => {
      state.counts[id] = Math.max(0, Number(saved[id]) || 0);
    });
  } catch (error) {
    console.warn("저장된 데이터를 읽지 못했습니다.", error);
  }
}

function saveCollection() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.counts));
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
  const percent = Math.round((owned / pokemon.length) * 100);

  elements.owned.textContent = owned;
  elements.missing.textContent = pokemon.length - owned;
  elements.duplicate.textContent = duplicates;
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressFill.style.width = `${percent}%`;
}

function render() {
  renderCards();
  renderStats();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => elements.toast.classList.remove("show"), 2200);
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
  elements.codeStatus.textContent = "코드가 준비됐어요.";
  elements.codeDialog.showModal();
  elements.collectionCodeOutput.select();
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

elements.importCodeButton.addEventListener("click", () => {
  try {
    applyCollectionCode(elements.collectionCodeInput.value);
    elements.collectionCodeInput.value = "";
    elements.codeStatus.textContent = "도감 코드를 불러왔어요.";
    showToast("도감 코드를 불러왔어요!");
  } catch (error) {
    console.error(error);
    elements.codeStatus.textContent = "코드를 읽지 못했어요. 복사한 내용을 다시 확인해 주세요.";
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

elements.resetButton.addEventListener("click", () => {
  if (!confirm("모든 수집 기록을 초기화할까요?")) return;
  pokemon.forEach(({ id }) => {
    state.counts[id] = 0;
  });
  saveCollection();
  render();
  showToast("수집 기록을 초기화했어요.");
});

elements.shareDialog.addEventListener("click", (event) => {
  if (event.target === elements.shareDialog) elements.shareDialog.close();
});

elements.codeDialog.addEventListener("click", (event) => {
  if (event.target === elements.codeDialog) elements.codeDialog.close();
});

loadCollection();
render();
