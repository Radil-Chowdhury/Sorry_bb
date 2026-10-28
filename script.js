/* =====================================================
   EDIT THIS PART — your words and photos
   ===================================================== */
const CONFIG = {
  // Photos: put image files in the "photos" folder and list them here.
  // If a file is missing, a sunset placeholder is shown instead.
  // pos (optional): which part of the photo stays visible in the square frame, e.g. "50% 30%".
  photos: [
    { src: "photos/photo1.jpg", caption: "us 💛", tape: "#ffd84d", pos: "50% 30%" },
    { src: "photos/photo2.jpg", caption: "that day…", tape: "#6fe3a8" },
    { src: "photos/photo3.jpg", caption: "I miss this", tape: "#7fb4ff" },
  ],

  // The letter: one string per paragraph.
  letter: [
    "You're so beautiful, but I still hurt you… I'm so sorry. 💔",
    "I know I don't call you even when I am free, the calls are always from your side. But I need you to know that your calls mean everything to me, you can't even realize how much I wait for them. Sometimes I think about our meeting together, and still don't understand when you became so important to me. I realize how much I've hurt the most precious person in my life. I promise to do better, to be better, for you, Raisa. ✨",
  ],

  promise:
    "Just like my love for you, I promise to cherish you every single day, and never take your beautiful heart for granted again. 💗",
};

/* =====================================================
   Everything below makes the site work
   ===================================================== */

/* ---------- Original SVG bears (drawn from scratch) ---------- */
function bearSVG({ fur = "#c98f63", ear = "#a8714a", belly = "#e8bd96", mood = "happy", flower = false, id = "" }) {
  const eyes = {
    happy: `<path d="M40 60 q6 -7 12 0" stroke="#3a2418" stroke-width="3.5" fill="none" stroke-linecap="round"/>
            <path d="M68 60 q6 -7 12 0" stroke="#3a2418" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
    sad: `<circle cx="46" cy="62" r="4.5" fill="#3a2418"/><circle cx="74" cy="62" r="4.5" fill="#3a2418"/>
          <circle cx="44.5" cy="60.5" r="1.4" fill="#fff"/><circle cx="72.5" cy="60.5" r="1.4" fill="#fff"/>
          <path d="M38 55 l12 -5 M82 55 l-12 -5" stroke="#3a2418" stroke-width="2.5" stroke-linecap="round"/>`,
    cry: `<path d="M40 62 q6 -6 12 0" stroke="#3a2418" stroke-width="3.5" fill="none" stroke-linecap="round"/>
          <path d="M68 62 q6 -6 12 0" stroke="#3a2418" stroke-width="3.5" fill="none" stroke-linecap="round"/>
          <path d="M44 68 q-3 8 0 12 q3 -4 0 -12 M76 68 q-3 8 0 12 q3 -4 0 -12" fill="#7fd0ff"/>`,
    dot: `<circle cx="46" cy="60" r="4.5" fill="#3a2418"/><circle cx="74" cy="60" r="4.5" fill="#3a2418"/>
          <circle cx="44.5" cy="58.5" r="1.4" fill="#fff"/><circle cx="72.5" cy="58.5" r="1.4" fill="#fff"/>`,
  }[mood === "hurt" ? "cry" : mood === "flower" ? "dot" : mood] || "";

  const mouth = mood === "sad" || mood === "hurt"
    ? `<path d="M53 80 q7 -6 14 0" stroke="#3a2418" stroke-width="3" fill="none" stroke-linecap="round"/>`
    : `<path d="M52 76 q8 9 16 0" stroke="#3a2418" stroke-width="3" fill="none" stroke-linecap="round"/>`;

  const rose = flower ? `
    <g transform="translate(92 98)">
      <path d="M0 6 q-4 14 -2 22" stroke="#3f9a52" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle r="9" fill="#e0334d"/><circle r="5.5" fill="#f25a70"/>
      <path d="M-4 -1 q4 -5 8 0 q-4 5 -8 0" stroke="#a81f38" stroke-width="1.6" fill="none"/>
    </g>` : "";

  return `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg" ${id ? `id="${id}"` : ""} role="img" aria-label="cute bear">
    <ellipse cx="60" cy="108" rx="30" ry="22" fill="${fur}"/>
    <ellipse cx="60" cy="112" rx="18" ry="14" fill="${belly}"/>
    <circle cx="26" cy="28" r="15" fill="${fur}"/><circle cx="26" cy="28" r="8" fill="${ear}"/>
    <circle cx="94" cy="28" r="15" fill="${fur}"/><circle cx="94" cy="28" r="8" fill="${ear}"/>
    <ellipse cx="60" cy="62" rx="42" ry="38" fill="${fur}"/>
    <ellipse cx="60" cy="74" rx="16" ry="12" fill="${belly}"/>
    <ellipse cx="60" cy="69" rx="5" ry="3.5" fill="#3a2418"/>
    <circle cx="34" cy="74" r="7" fill="#ff9db8" opacity=".6"/><circle cx="86" cy="74" r="7" fill="#ff9db8" opacity=".6"/>
    ${eyes}${mouth}${rose}
  </svg>`;
}

const CREAM = { fur: "#f6efe9", ear: "#f2c6d4", belly: "#ffffff" };
const BROWN = { fur: "#c98f63", ear: "#a8714a", belly: "#e8bd96" };

function renderBears() {
  document.querySelectorAll(".bear-slot").forEach((el) => {
    const kind = el.dataset.bear;
    if (kind === "alone") el.innerHTML = bearSVG({ ...BROWN, mood: "sad" });
    else if (kind === "flower") el.innerHTML = bearSVG({ ...BROWN, mood: "happy", flower: true });
    else if (kind === "hurt")
      el.innerHTML = `<div style="display:flex;justify-content:center;align-items:flex-end;gap:0">
        <div style="width:50%">${bearSVG({ ...CREAM, mood: "sad" })}</div>
        <div style="width:50%">${bearSVG({ ...BROWN, mood: "cry" })}</div></div>`;
    else if (kind === "hug")
      el.innerHTML = `<div style="display:flex;justify-content:center;align-items:flex-end">
        <div style="width:54%;margin-right:-12%;transform:rotate(-8deg)">${bearSVG({ ...CREAM, mood: "happy" })}</div>
        <div style="width:54%;transform:rotate(8deg)">${bearSVG({ ...BROWN, mood: "happy" })}</div></div>`;
  });
}

/* ---------- Sky & floating stuff ---------- */
function makeStars(n = 90) {
  const sky = document.getElementById("stars");
  for (let i = 0; i < n; i++) {
    const s = document.createElement("div");
    const size = Math.random() * 2.2 + 0.8;
    s.className = "star";
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${size}px;height:${size}px;--d:${2 + Math.random() * 4}s;--delay:${Math.random() * 4}s`;
    sky.appendChild(s);
  }
}

const floaters = document.getElementById("floaters");
const HEARTS = ["💖", "💜", "💕", "💗", "✨", "🌸"];

function spawnFloater(emoji, opts = {}) {
  const el = document.createElement("span");
  el.className = "floater";
  el.textContent = emoji || HEARTS[Math.floor(Math.random() * HEARTS.length)];
  const dur = opts.dur || 7 + Math.random() * 6;
  el.style.cssText = `left:${opts.x ?? Math.random() * 100}%;font-size:${opts.size || 14 + Math.random() * 18}px;--dur:${dur}s;--drift:${(Math.random() - 0.5) * 120}px;--rot:${(Math.random() - 0.5) * 90}deg`;
  floaters.appendChild(el);
  setTimeout(() => el.remove(), dur * 1000 + 200);
}

function burstHearts(n = 36) {
  for (let i = 0; i < n; i++) setTimeout(() => spawnFloater(null, { dur: 3.5 + Math.random() * 3, size: 18 + Math.random() * 22 }), i * 45);
}

let petalTimer = null;
function startPetals() {
  stopPetals();
  const PETALS = ["🌸", "🌺", "💮", "✨", "💖"];
  petalTimer = setInterval(() => {
    const p = document.createElement("span");
    p.className = "petal";
    p.textContent = PETALS[Math.floor(Math.random() * PETALS.length)];
    const dur = 5 + Math.random() * 5;
    p.style.cssText = `left:${Math.random() * 100}%;font-size:${14 + Math.random() * 14}px;--dur:${dur}s;--drift:${(Math.random() - 0.5) * 140}px;--rot:${Math.random() * 540}deg`;
    floaters.appendChild(p);
    setTimeout(() => p.remove(), dur * 1000);
  }, 260);
}
function stopPetals() { clearInterval(petalTimer); petalTimer = null; }

/* ---------- Content from CONFIG ---------- */
function renderContent() {
  document.getElementById("letterText").innerHTML = CONFIG.letter.map((t) => `<span style="display:block;margin-bottom:12px">${t}</span>`).join("");
  document.getElementById("promise").textContent = CONFIG.promise;

  const wrap = document.getElementById("polaroids");
  CONFIG.photos.forEach((p, i) => {
    const d = document.createElement("div");
    d.className = "polaroid";
    d.style.cssText = `--tilt:${i % 2 ? 3 : -3}deg;--delay:${0.8 + i * 0.7}s;--tape:${p.tape || "#ffd84d"};--tape-rot:${i % 2 ? 6 : -6}deg`;
    d.innerHTML = `<span class="tape"></span><div class="photo"><img alt="" src="${p.src}" style="object-position:${p.pos || '50% 50%'}"></div><div class="cap">${p.caption || ""}</div>`;
    d.querySelector("img").addEventListener("error", (e) => e.target.remove()); // placeholder gradient stays
    wrap.appendChild(d);
  });
}

/* ---------- Scene engine ---------- */
const scenes = [...document.querySelectorAll(".scene")];
let current = -1;
let autoScroll = null;

function revealScene(scene) {
  const items = scene.querySelectorAll(".reveal:not(.hidden)");
  items.forEach((el, i) => {
    el.classList.remove("show");
    void el.offsetWidth; // restart animation
    el.style.animationDelay = `${0.4 + i * 1.1}s`;
    el.classList.add("show");
  });
}

function go(index) {
  clearInterval(autoScroll);
  stopPetals();
  const prev = scenes[current];
  if (prev) prev.classList.remove("active");

  setTimeout(() => {
    current = index;
    const scene = scenes[index];
    scene.scrollTop = 0;
    scene.classList.add("active");
    revealScene(scene);

    const name = scene.dataset.scene;
    if (name === "photos") startAutoScroll(scene);
    if (name === "finale") { startPetals(); burstHearts(24); }
    if (name === "hug") scene.querySelector("#hugBears").classList.remove("squish");
  }, prev ? 700 : 0);
}

function startAutoScroll(scene) {
  let userTouched = false;
  const stop = () => { userTouched = true; clearInterval(autoScroll); };
  ["touchstart", "wheel", "mousedown"].forEach((ev) => scene.addEventListener(ev, stop, { once: true, passive: true }));
  setTimeout(() => {
    autoScroll = setInterval(() => {
      if (userTouched) return;
      scene.scrollTop += 1;
    }, 28);
  }, 3500);
}

/* ---------- Wiring ---------- */
document.querySelectorAll(".btn.next").forEach((btn) =>
  btn.addEventListener("click", () => go(current + 1))
);

document.getElementById("hugBtn").addEventListener("click", (e) => {
  burstHearts(40);
  const bears = document.getElementById("hugBears");
  bears.classList.remove("squish"); void bears.offsetWidth; bears.classList.add("squish");
  e.currentTarget.textContent = "💞 Hug sent";
  const next = document.getElementById("hugNext");
  next.classList.remove("hidden");
  next.classList.add("show");
  next.style.animationDelay = "0.8s";
});

const gift = document.getElementById("gift");
function openGift() {
  if (gift.classList.contains("open")) return;
  gift.classList.add("open");
  burstHearts(30);
  setTimeout(() => go(current + 1), 900);
}
gift.addEventListener("click", openGift);
gift.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") openGift(); });

document.getElementById("replay").addEventListener("click", () => {
  gift.classList.remove("open");
  document.getElementById("hugBtn").textContent = "♡ Send a hug";
  document.getElementById("hugNext").classList.add("hidden");
  go(0);
});

/* ---------- Start ---------- */
makeStars();
renderBears();
renderContent();
setInterval(() => spawnFloater(), 1800); // gentle ambient hearts
go(0);
