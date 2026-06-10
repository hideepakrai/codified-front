import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let threeInitialized = false;
let renderer: any = null;
let lenis: any;
let scrollProgress = 0;
let signalConverge = 0;
let coreOpen = 0;
let dataReveal = 0;
let apiReveal = 0;
let pulseAmt = 0;

const MOODS: Record<string, { bg: any, a: any, b: any }> = {
  signal:       { bg: new (THREE as any).Color('#04060d'), a: new (THREE as any).Color('#1DC3F3'), b: new (THREE as any).Color('#F300A6') },
  core:         { bg: new (THREE as any).Color('#0a1224'), a: new (THREE as any).Color('#1DC3F3'), b: new (THREE as any).Color('#9a7bff') },
  data:         { bg: new (THREE as any).Color('#04060d'), a: new (THREE as any).Color('#1DC3F3'), b: new (THREE as any).Color('#F300A6') },
  api:          { bg: new (THREE as any).Color('#0a1224'), a: new (THREE as any).Color('#1DC3F3'), b: new (THREE as any).Color('#9a7bff') },
  engine:       { bg: new (THREE as any).Color('#04060d'), a: new (THREE as any).Color('#F300A6'), b: new (THREE as any).Color('#1DC3F3') },
  ai:           { bg: new (THREE as any).Color('#0a1224'), a: new (THREE as any).Color('#1DC3F3'), b: new (THREE as any).Color('#F300A6') },
  command:      { bg: new (THREE as any).Color('#0a1224'), a: new (THREE as any).Color('#1DC3F3'), b: new (THREE as any).Color('#F300A6') },
  why:          { bg: new (THREE as any).Color('#050b14'), a: new (THREE as any).Color('#1DC3F3'), b: new (THREE as any).Color('#9a7bff') },
  services:     { bg: new (THREE as any).Color('#080d1a'), a: new (THREE as any).Color('#F300A6'), b: new (THREE as any).Color('#1DC3F3') },
  industries:   { bg: new (THREE as any).Color('#04060d'), a: new (THREE as any).Color('#9a7bff'), b: new (THREE as any).Color('#F300A6') },
  technologies: { bg: new (THREE as any).Color('#0a1224'), a: new (THREE as any).Color('#1DC3F3'), b: new (THREE as any).Color('#9a7bff') },
  contact:      { bg: new (THREE as any).Color('#05080f'), a: new (THREE as any).Color('#F300A6'), b: new (THREE as any).Color('#1DC3F3') },
  about:        { bg: new (THREE as any).Color('#0a0518'), a: new (THREE as any).Color('#F300A6'), b: new (THREE as any).Color('#9a7bff') },
};
const mood = { current: 'signal', a: MOODS.signal.a.clone(), b: MOODS.signal.b.clone(), bg: MOODS.signal.bg.clone() };

export function initCinematic() {
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const IS_MOBILE = window.innerWidth < 720;

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach((t: any) => t.kill());
  ScrollTrigger.refresh();

  const canvas = document.getElementById('webgl') as HTMLCanvasElement;
  if (!canvas) return; // safety

  // If renderer exists but canvas changed (client-side navigation), re-attach renderer to the new canvas
  if (threeInitialized && renderer) {
    // Update the renderer to use the new canvas element
    const domElement = renderer.domElement;
    if (domElement !== canvas) {
      // Copy the renderer context to the new canvas by re-initializing
      threeInitialized = false;
      renderer.dispose();
      renderer = null;
    }
  }

  if (!threeInitialized) {

    /* ----------------------------------------------------------
       SMOOTH SCROLL (Lenis)
    ---------------------------------------------------------- */
    if (!REDUCED) {
      // Destroy previous Lenis instance before re-creating
      if (lenis) { lenis.destroy(); lenis = null; }
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });
      function raf(time: number) { 
        lenis.raf(time); 
        requestAnimationFrame(raf); 
      }
      requestAnimationFrame(raf);
      // Bridge Lenis scroll to GSAP ScrollTrigger
      lenis.on('scroll', () => ScrollTrigger.update());
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    /* ----------------------------------------------------------
       THREE.JS — fixed background scene
    ---------------------------------------------------------- */
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    threeInitialized = true;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05080f, 0.018);

  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0, 14);

  // Mood initialized at top level

  /* ---- 1. Starfield ---- */
  function makeStarfield() {
    const count = IS_MOBILE ? 600 : 1600;
    const geom = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 30 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - 30;
      const c = Math.random();
      col[i * 3] = 0.6 + c * 0.4;
      col[i * 3 + 1] = 0.7 + c * 0.3;
      col[i * 3 + 2] = 0.9 + c * 0.1;
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mat = new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending });
    return new THREE.Points(geom, mat);
  }
  const stars = makeStarfield();
  scene.add(stars);

  /* ---- 2. Signal particles ---- */
  const SIG_COUNT = IS_MOBILE ? 600 : 1800;
  function makeSignal() {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(SIG_COUNT * 3);
    const home = new Float32Array(SIG_COUNT * 3);
    const phase = new Float32Array(SIG_COUNT);
    for (let i = 0; i < SIG_COUNT; i++) {
      const r = 4 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 8;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r - 2;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      home[i * 3] = x; home[i * 3 + 1] = y; home[i * 3 + 2] = z;
      phase[i] = Math.random() * Math.PI * 2;
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('home', new THREE.BufferAttribute(home, 3));
    g.setAttribute('phase', new THREE.BufferAttribute(phase, 1));
    const mat = new THREE.PointsMaterial({
      size: 0.045, color: 0x1DC3F3, transparent: true, opacity: 0.85,
      depthWrite: false, blending: THREE.AdditiveBlending
    });
    return new THREE.Points(g, mat);
  }
  const signal = makeSignal();
  scene.add(signal);

  /* central pulse */
  const pulseGeo = new THREE.SphereGeometry(0.14, 24, 24);
  const pulseMat = new THREE.MeshBasicMaterial({ color: 0x1DC3F3, transparent: true, opacity: 0.9 });
  const pulse = new THREE.Mesh(pulseGeo, pulseMat);
  scene.add(pulse);

  const pulseRingGeo = new THREE.RingGeometry(0.6, 0.62, 64);
  const pulseRingMat = new THREE.MeshBasicMaterial({ color: 0x1DC3F3, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
  const pulseRing1 = new THREE.Mesh(pulseRingGeo, pulseRingMat.clone());
  const pulseRing2 = new THREE.Mesh(pulseRingGeo, pulseRingMat.clone());
  scene.add(pulseRing1, pulseRing2);

  /* ---- 3. Soft atmospheric blob ---- */
  const blobMat = new THREE.MeshBasicMaterial({
    color: 0x1DC3F3, transparent: true, opacity: 0.18, depthWrite: false, blending: THREE.AdditiveBlending
  });
  const blob = new THREE.Mesh(new THREE.SphereGeometry(8, 48, 48), blobMat);
  blob.position.set(0, 0, -12);
  blob.scale.setScalar(1.4);
  scene.add(blob);

  const blob2 = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 32), blobMat.clone());
  blob2.material.color = new THREE.Color(0x9a7bff);
  blob2.material.opacity = 0.12;
  blob2.position.set(-8, 4, -8);
  scene.add(blob2);

  /* ---- 4. Perspective grid plane ---- */
  function makeGridLines() {
    const size = 40, divisions = 28;
    const grid = new THREE.GridHelper(size, divisions, 0x3a6cb8, 0x1a2c5a);
    grid.material.transparent = true;
    grid.material.opacity = 0.0;
    grid.position.set(0, -6, -2);
    return grid;
  }
  const grid = makeGridLines();
  scene.add(grid);

  /* ---- 5. Packets ---- */
  const PACKETS = 20;
  const packets: any[] = [];
  const packetGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
  const packetMat = new THREE.MeshBasicMaterial({ color: 0x1DC3F3, transparent: true, opacity: 0.0 });
  for (let i = 0; i < PACKETS; i++) {
    const m = new THREE.Mesh(packetGeo, packetMat.clone());
    m.userData = {
      radius: 3 + Math.random() * 5,
      speed: 0.2 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
      yOff: (Math.random() - 0.5) * 3,
      tilt: Math.random() * Math.PI
    };
    scene.add(m);
    packets.push(m);
  }

  /* ---- Render loop ---- */
  const clock = new THREE.Clock();
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    const t = clock.getElapsedTime();
    const dt = Math.min(0.05, clock.getDelta());

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    camera.position.x = mouse.x * 0.6;
    camera.position.y = -mouse.y * 0.4;
    camera.lookAt(0, 0, 0);

    scene.fog!.color.lerp(mood.bg, 0.04);
    blob.material.color.lerp(mood.a, 0.04);
    blob2.material.color.lerp(mood.b, 0.04);
    grid.material.color.lerp(mood.a, 0.04);

    stars.rotation.y = t * 0.01;
    stars.rotation.x = Math.sin(t * 0.02) * 0.05;

    const pos = signal.geometry.attributes.position.array as Float32Array;
    const home = signal.geometry.attributes.home.array as Float32Array;
    const ph = signal.geometry.attributes.phase.array as Float32Array;
    const k = Math.min(1, signalConverge);
    for (let i = 0; i < SIG_COUNT; i++) {
      const i3 = i * 3;
      const drift = Math.sin(t * 0.6 + ph[i]) * 0.15;
      const hx = home[i3], hy = home[i3 + 1], hz = home[i3 + 2];
      pos[i3] = hx * (1 - k * 0.95) + drift * (1 - k);
      pos[i3 + 1] = hy * (1 - k * 0.95) + drift * 0.6 * (1 - k);
      pos[i3 + 2] = hz * (1 - k * 0.95) + drift * (1 - k);
    }
    signal.geometry.attributes.position.needsUpdate = true;
    signal.material.opacity = 0.55 + 0.35 * (1 - k);
    signal.material.size = 0.045 + 0.02 * k;

    const pulseScale = 0.6 + Math.sin(t * 2) * 0.08 + k * 0.6;
    pulse.scale.setScalar(pulseScale);
    pulse.material.opacity = 0.35 + 0.6 * k;

    const r1 = (t * 0.7) % 2;
    pulseRing1.scale.setScalar(0.6 + r1 * 3);
    pulseRing1.material.opacity = (1 - r1 / 2) * 0.45 * k;
    pulseRing1.lookAt(camera.position);

    const r2 = ((t * 0.7) + 1) % 2;
    pulseRing2.scale.setScalar(0.6 + r2 * 3);
    pulseRing2.material.opacity = (1 - r2 / 2) * 0.35 * k;
    pulseRing2.lookAt(camera.position);

    grid.material.opacity = 0.16 * dataReveal;
    grid.position.z = -2 - (1 - dataReveal) * 4;
    grid.rotation.x = -0.2 + (1 - dataReveal) * 0.2;

    for (let i = 0; i < PACKETS; i++) {
      const p = packets[i];
      const u = p.userData;
      u.phase += dt * u.speed;
      p.position.set(
        Math.cos(u.phase) * u.radius,
        u.yOff + Math.sin(u.phase * 1.3) * 0.6,
        Math.sin(u.phase) * u.radius - 2
      );
      p.rotation.y += dt;
      p.rotation.x += dt * 0.5;
      p.material.opacity = 0.85 * apiReveal;
    }

    const z = 14 - scrollProgress * 5;
    camera.position.z += (z - camera.position.z) * 0.06;

    blob.position.x = Math.sin(t * 0.1) * 1.2;
    blob.position.y = Math.cos(t * 0.13) * 0.6;
    blob2.position.x = -8 + Math.sin(t * 0.12) * 1.5;
    blob2.position.y = 4 + Math.cos(t * 0.11) * 0.8;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  if (!REDUCED) requestAnimationFrame(animate);

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
} // close if (!threeInitialized)

  /* ----------------------------------------------------------
     GLOBAL SCROLL
  ---------------------------------------------------------- */
  const progressEl = document.getElementById('progress');
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: self => {
      scrollProgress = self.progress;
      if (progressEl) progressEl.style.transform = `scaleX(${self.progress})`;
    }
  });

  document.querySelectorAll('.section').forEach((el: any) => {
    const moodKey = el.dataset.mood;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 60%', end: 'bottom 40%',
      onToggle: self => {
        if (self.isActive && moodKey && MOODS[moodKey]) {
          const m = MOODS[moodKey];
          gsap.to(mood.bg, { r: m.bg.r, g: m.bg.g, b: m.bg.b, duration: 1.2, ease: 'power2.out' });
          gsap.to(mood.a, { r: m.a.r, g: m.a.g, b: m.a.b, duration: 1.2 });
          gsap.to(mood.b, { r: m.b.r, g: m.b.g, b: m.b.b, duration: 1.2 });
          document.querySelectorAll('#rail .item').forEach((i: any) => i.classList.toggle('active', i.dataset.target === el.id));
        }
      }
    });
  });

  document.querySelectorAll('#rail .item').forEach((it: any) => {
    it.addEventListener('click', () => {
      const target = document.getElementById(it.dataset.target);
      if (lenis) lenis.scrollTo(target, { offset: -20, duration: 1.2 });
      else target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* 1. SIGNAL & REVEAL */
  gsap.utils.toArray('.reveal').forEach((el: any, i) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: (i % 8) * 0.08, scrollTrigger: { trigger: el, start: 'top 95%' } });
  });

  ScrollTrigger.create({
    trigger: '#signal', start: 'top top', end: 'bottom top', scrub: 0.5,
    onUpdate: self => { signalConverge = self.progress; pulseAmt = self.progress; }
  });

  gsap.utils.toArray('#signal [data-count]').forEach((el: any) => {
    const target = parseInt(el.dataset.count, 10);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: '#signal', start: 'top 60%', once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target, duration: 2.0, ease: 'power2.out',
          onUpdate: () => {
            const v = obj.v;
            if (target > 1e6) el.textContent = (v / 1e6).toFixed(1) + 'M';
            else el.textContent = Math.round(v).toLocaleString();
          }
        });
      }
    });
  });

  /* 2. CORE */
  gsap.from('.core-tag', { opacity: 0, y: 12, stagger: 0.08, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '#core', start: 'top 60%' } });
  gsap.from('.core-spec .spec-cell', { opacity: 0, y: 18, stagger: 0.08, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '#core', start: 'top 50%' } });
  gsap.from('#core h2.display, #core .lede', { opacity: 0, y: 18, stagger: 0.1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '#core', start: 'top 60%' } });

  ScrollTrigger.create({
    trigger: '#core', start: 'top bottom', end: 'bottom top', scrub: 0.5,
    onUpdate: self => { coreOpen = self.progress; }
  });

  /* 2b. WHY — "Built on trust and quality" section */
  gsap.fromTo('#why h2.display, #why .lede, #why .label',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '#why', start: 'top 70%' } }
  );
  gsap.fromTo('#why .core-spec .spec-cell',
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '#why', start: 'top 60%' } }
  );
  gsap.fromTo('#why .card',
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '#why', start: 'top 60%' } }
  );

  /* 3. DATA GRID */
  gsap.from('#moduleGrid .module', {
    opacity: 0, y: 30, scale: 0.96, stagger: { each: 0.05, grid: [3, 4], from: 'random' },
    duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '#data-grid', start: 'top 60%' }
  });
  gsap.from('#data-grid .head .copy > *, #data-grid .status-bar', { opacity: 0, y: 18, stagger: 0.08, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '#data-grid', start: 'top 70%' } });

  ScrollTrigger.create({
    trigger: '#data-grid', start: 'top bottom', end: 'bottom top', scrub: 0.5,
    onUpdate: self => { dataReveal = self.progress; }
  });

  /* 4. API NETWORK */
  const netSvg = document.getElementById('netSvg');
  const netStage = document.getElementById('netStage');

  // Helper: always get the live list of nodes from DOM (handles async Redux render)
  const getNodes = () => Array.from(netStage?.querySelectorAll('.net-node') || []) as HTMLElement[];
  const getCenter = () => getNodes().find((n: HTMLElement) => n.dataset.id === 'core');

  // Modal elements — declared early so buildNet() click handlers can reference them
  const netModal = document.getElementById('netModal');
  const netTitle = document.getElementById('netTitle');
  const netDesc = document.getElementById('netDesc');
  const netEndpoint = document.getElementById('netEndpoint');
  const netClose = document.getElementById('netClose');

  function buildNet() {
    if (!netSvg) return;
    const liveNodes = getNodes();
    const liveCenter = getCenter();
    if (!liveNodes.length) return; // nodes not rendered yet — MutationObserver will retry

    netSvg.innerHTML = '';
    const W = 600, H = 600;
    const cx = 50, cy = 50;

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
      <linearGradient id="lineG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#1DC3F3" stop-opacity="0.5"/>
        <stop offset="1" stop-color="#9a7bff" stop-opacity="0.5"/>
      </linearGradient>
    `;
    netSvg.appendChild(defs);

    liveNodes.forEach((n: HTMLElement) => {
      if (n === liveCenter) return;
      const x = parseFloat(n.style.left) / 100 * W;
      const y = parseFloat(n.style.top) / 100 * H;
      const ccx = cx / 100 * W, ccy = cy / 100 * H;
      const mx = (x + ccx) / 2 + (Math.random() - 0.5) * 40;
      const my = (y + ccy) / 2 + (Math.random() - 0.5) * 40;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${ccx} ${ccy} Q ${mx} ${my} ${x} ${y}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'url(#lineG)');
      path.setAttribute('stroke-width', '1');
      path.setAttribute('opacity', '0');
      path.setAttribute('stroke-dasharray', '4 6');
      path.dataset.target = n.dataset.id;
      netSvg.appendChild(path);

      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('r', '3');
      c.setAttribute('class', 'packet');
      c.setAttribute('opacity', '0');
      c.dataset.target = n.dataset.id;
      netSvg.appendChild(c);
    });

    // Attach click handlers to newly rendered nodes
    liveNodes.forEach((n: HTMLElement) => {
      n.addEventListener('click', () => {
        getNodes().forEach((x: HTMLElement) => x.classList.remove('active'));
        n.classList.add('active');
        if (netTitle) netTitle.textContent = n.textContent?.trim() || '';
        if (netDesc) netDesc.textContent = n.dataset.desc || '';
        if (netEndpoint) netEndpoint.textContent = n.dataset.endpoint || '';
        if (netModal) netModal.classList.add('show');
      });
    });
  }

  // Watch for React-rendered nodes arriving asynchronously from Redux
  let netBuilt = false;
  if (netStage) {
    const mo = new MutationObserver(() => {
      if (!netBuilt && getNodes().length > 0) {
        netBuilt = true;
        buildNet();
        mo.disconnect();
        // Trigger reveal animation if section is already in view
        ScrollTrigger.refresh();
        if (netSvg && netPaths().length > 0) {
          gsap.fromTo(netPaths(), { opacity: 0, strokeDashoffset: 40 }, { opacity: 0.6, strokeDashoffset: 0, duration: 1.2, stagger: 0.08, ease: 'power2.out' });
          gsap.fromTo(getNodes(), { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 });
          netPaths().forEach((p: any, i: number) => animatePacket(p, i * 0.3));
        }
      }
    });
    mo.observe(netStage, { childList: true, subtree: true });
  }

  // Initial build attempt (nodes may already be in DOM on refresh)
  buildNet();
  if (getNodes().length > 0) netBuilt = true;
  window.addEventListener('resize', buildNet);

  const netPaths = () => Array.from(netSvg?.querySelectorAll('path') || []);
  const netPackets = () => Array.from(netSvg?.querySelectorAll('circle.packet') || []);

  ScrollTrigger.create({
    trigger: '#api', start: 'top 60%', once: false,
    onEnter: () => {
      apiReveal = 1;
      // If nodes weren't built yet, build now
      if (!netBuilt && getNodes().length > 0) { netBuilt = true; buildNet(); }
      gsap.fromTo(netPaths(), { opacity: 0, strokeDashoffset: 40 }, { opacity: 0.6, strokeDashoffset: 0, duration: 1.2, stagger: 0.08, ease: 'power2.out' });
      gsap.fromTo(getNodes(), { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 });
      netPaths().forEach((p: any, i: number) => animatePacket(p, i * 0.3));
    }
  });

  ScrollTrigger.create({
    trigger: '#api', start: 'top bottom', end: 'bottom top', scrub: 0.5,
    onUpdate: self => { apiReveal = self.progress; }
  });

  function animatePacket(path: any, delay: number) {
    const target = path.dataset.target;
    const packet = netSvg?.querySelector(`circle.packet[data-target="${target}"]`);
    if (!packet) return;
    const length = path.getTotalLength();
    const obj = { t: 0 };
    packet.setAttribute('opacity', '0.95');
    gsap.to(obj, {
      t: 1, duration: 2 + Math.random() * 1.5, repeat: -1, delay,
      ease: 'power1.inOut',
      onUpdate: () => {
        const pt = path.getPointAtLength(obj.t * length);
        packet.setAttribute('cx', pt.x.toString());
        packet.setAttribute('cy', pt.y.toString());
      }
    });
  }

  if (netClose) netClose.addEventListener('click', () => netModal?.classList.remove('show'));
  if (netStage) netStage.addEventListener('click', (e) => {
    if (e.target === netStage || e.target === netSvg) netModal?.classList.remove('show');
  });

  /* 5. PRODUCT ENGINE */
  const t1 = document.getElementById('engineTrack1');
  const t2 = document.getElementById('engineTrack2');
  if (!IS_MOBILE && t1 && t2) {
    const pinDist = () => t1.scrollWidth - window.innerWidth + 200;
    const eng = gsap.timeline({
      scrollTrigger: {
        trigger: '#engine', start: 'top top', end: () => '+=' + Math.max(800, pinDist()),
        pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true
      }
    });
    eng.to(t1, { x: () => -(t1.scrollWidth - window.innerWidth + 100), ease: 'none' }, 0);
    eng.to(t2, { x: () => (t2.scrollWidth - window.innerWidth + 100) * 0.6 - (t2.scrollWidth - window.innerWidth + 100), ease: 'none' }, 0);
  } else if (t1 && t2) {
    t1.style.overflowX = 'auto';
    t2.style.overflowX = 'auto';
  }

  /* 6. AI WORKFLOW */
  const steps = Array.from(document.querySelectorAll('.pipe-step'));
  const pipeProgress = document.getElementById('pipeProgress');

  if (!IS_MOBILE) {
    // Entrance animations for desktop
    gsap.fromTo('#ai .pipe-step', 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '#ai', start: 'top 75%' } }
    );
    gsap.fromTo('#ai .read-cell', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '#ai', start: 'top 60%' } }
    );

    ScrollTrigger.create({
      trigger: '#ai', start: 'top top', end: '+=2200', pin: true, scrub: 0.6,
      onUpdate: self => {
        const p = self.progress;
        if (pipeProgress) pipeProgress.style.width = (p * 100) + '%';
        const activeIndex = Math.min(steps.length - 1, Math.floor(p * (steps.length + 0.4)));
        steps.forEach((s, i) => {
          s.classList.remove('active', 'done');
          const badge = s.querySelector('.badge');
          if (!badge) return;
          if (i < activeIndex) { 
            s.classList.add('done'); 
            badge.textContent = ['Sent', 'Generated', 'Validated', 'Stored', 'Delivered'][i]; 
          } else if (i === activeIndex) { 
            s.classList.add('active'); 
            badge.textContent = ['Drafting', 'Generating', 'Validating', 'Storing', 'Delivering'][i]; 
          } else { 
            badge.textContent = 'Queued'; 
          }
        });
      }
    });

    const tick = () => {
      const active = document.getElementById('aiActive'); if (active) active.textContent = Math.floor(120 + Math.random() * 80).toString();
      const tok = document.getElementById('rTok'); if (tok) tok.textContent = (9 + Math.random() * 1.4).toFixed(1) + 'M';
      const val = document.getElementById('rVal'); if (val) val.textContent = (98.8 + Math.random() * 0.6).toFixed(2) + '%';
      const cost = document.getElementById('rCost'); if (cost) cost.textContent = '$' + (0.012 + Math.random() * 0.006).toFixed(3);
      const lat = document.getElementById('rLat'); if (lat) lat.textContent = (1.4 + Math.random() * 0.8).toFixed(1) + ' s';
    };
    setInterval(tick, 1800);
  } else {
    gsap.from('.pipe-step', { opacity: 0, y: 20, stagger: 0.1, duration: 0.7, scrollTrigger: { trigger: '#ai', start: 'top 70%' } });
  }

  /* 7. COMMAND CENTER */
  gsap.fromTo('#ccGrid .cc-tile', 
    { opacity: 0, y: 30, scale: 0.96 },
    { opacity: 1, y: 0, scale: 1, stagger: { each: 0.06, from: 'random' },
      duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '#command', start: 'top 65%' }
    }
  );
  gsap.fromTo('.cc-cta > *', 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.cc-cta', start: 'top 80%' }
    }
  );

  document.querySelectorAll('.cc-tile [data-target]').forEach((el: any) => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: '#command', start: 'top 60%', once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target, duration: 2.2, ease: 'power2.out',
          onUpdate: () => {
            const v = obj.v;
            if (decimals > 0) {
              const txt = v.toFixed(decimals);
              if (el.firstChild && el.firstChild.nodeType === 3) el.firstChild.nodeValue = txt; else el.textContent = txt;
            } else if (target > 1e6) {
              const txt = (v / 1e6).toFixed(2) + 'M';
              if (el.firstChild && el.firstChild.nodeType === 3) el.firstChild.nodeValue = txt; else el.textContent = txt;
            } else {
              const txt = Math.round(v).toLocaleString();
              if (el.firstChild && el.firstChild.nodeType === 3) el.firstChild.nodeValue = txt; else el.textContent = txt;
            }
          }
        });
      }
    });
  });

  /* 8. TESTIMONIALS */
  gsap.fromTo('#testimonials .status-bar > *', 
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '#testimonials .head', start: 'top 85%' }
    }
  );
  gsap.fromTo('#testimonials .card', 
    { opacity: 0, x: 40, scale: 0.95 },
    { opacity: 1, x: 0, scale: 1, stagger: 0.15, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#testimonials', start: 'top 70%' }
    }
  );

  gsap.utils.toArray('.section h2.display, .section .lede, .section .label').forEach((el: any) => {
    if (el.closest('#signal')) return;
    gsap.fromTo(el, 
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' }
      }
    );
  });

  ScrollTrigger.refresh();
}
