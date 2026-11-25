// ==========================================================================
//  NEXORA SOLVEX — 3D COVER FLOW ENGINE & TAB SHEETS ROUTER
//  AvaJean Architecture | Interactive Starfield | 6 Flagship Projects
//  Zero Emojis | Fixed Viewport (No Long Scrolling)
// ==========================================================================

import { 
    FLAGSHIP_PROJECTS, 
    SERVICES_DATA, 
    PRICING_DATA, 
    BRAND_INFO 
} from './assets.js';

// Global Cover Flow State with Fluid Inertia & Parallax
let cflowState = {
    list: FLAGSHIP_PROJECTS,
    cards: [],
    pos: 0,
    target: 0,
    raf: 0,
    lastIdx: -1,
    isDragging: false,
    startX: 0,
    lastX: 0,
    lastTime: 0,
    pointerVx: 0,
    dragDistance: 0,
    wheelAcc: 0,
    wheelTimer: 0
};

// ==========================================================================
//  APPLICATION INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initAvaJeanStarfield();
    initCoverFlow();
    initBottomDock();
    initLogoMarquee();
    initTabSheets();
    initQuickSearch();
    initChatbotWidget();
    initContactForm();
    initKeyboardNavigation();
    initMobileMenu();
});

// ==========================================================================
//  AVAJEAN CANVAS STARFIELD ENGINE (IDENTICAL TO AVAJEAN BGFX)
// ==========================================================================

function initAvaJeanStarfield() {
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W = window.innerWidth;
    let H = window.innerHeight;
    let dpr = Math.min(2, window.devicePixelRatio || 1);
    let stars = [];

    function seedStars() {
        stars = [];
        const count = Math.round((W * H) / 3400); // Dense, elegant starfield
        for (let i = 0; i < count; i++) {
            const z = Math.random();
            stars.push({
                x: Math.random() * W,
                y: Math.random() * H,
                z: z,
                r: 0.35 + z * 1.05,
                tw: Math.random() * 6.28,
                ts: 0.6 + Math.random() * 2.2,
                col: ((r) => r < 0.1 ? '201,194,227' : r < 0.35 ? '139,124,199' : '255,255,255')(Math.random())
            });
        }
    }

    function resizeCanvas() {
        W = window.innerWidth;
        H = window.innerHeight;
        dpr = Math.min(2, window.devicePixelRatio || 1);
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        seedStars();
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Parallax mouse tracking
    let mx = 0, my = 0, px = 0, py = 0;
    window.addEventListener('pointermove', (e) => {
        mx = (e.clientX / W - 0.5);
        my = (e.clientY / H - 0.5);
    }, { passive: true });

    // Occasional shooting star
    let shootingStar = null;
    let nextShootTime = 3000;

    function renderStarfield(t) {
        px += (mx - px) * 0.04;
        py += (my - py) * 0.04;
        ctx.clearRect(0, 0, W, H);

        for (const s of stars) {
            s.x += 0.02 + s.z * 0.06; // Slow organic drift
            if (s.x > W + 4) s.x = -4;

            const x = s.x - px * s.z * 55; // Parallax
            const y = s.y - py * s.z * 55;

            // Twinkle calculation
            const alpha = (0.35 + 0.65 * Math.abs(Math.sin(t * 0.001 * s.ts + s.tw))) * (0.35 + s.z * 0.65);

            ctx.fillStyle = `rgba(${s.col}, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, s.r, 0, 6.283);
            ctx.fill();
        }

        // Shooting Star logic
        if (!shootingStar && t > nextShootTime) {
            shootingStar = {
                x: Math.random() * W * 0.7,
                y: Math.random() * H * 0.4,
                vx: 7 + Math.random() * 4,
                vy: 2.5 + Math.random() * 2,
                l: 1
            };
        }

        if (shootingStar) {
            const grad = ctx.createLinearGradient(
                shootingStar.x,
                shootingStar.y,
                shootingStar.x - shootingStar.vx * 14,
                shootingStar.y - shootingStar.vy * 14
            );
            grad.addColorStop(0, `rgba(201, 194, 227, ${shootingStar.l})`);
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(shootingStar.x, shootingStar.y);
            ctx.lineTo(shootingStar.x - shootingStar.vx * 14, shootingStar.y - shootingStar.vy * 14);
            ctx.stroke();

            shootingStar.x += shootingStar.vx;
            shootingStar.y += shootingStar.vy;
            shootingStar.l -= 0.014;

            if (shootingStar.l <= 0 || shootingStar.x > W + 50) {
                shootingStar = null;
                nextShootTime = t + 5000 + Math.random() * 7000;
            }
        }

        requestAnimationFrame(renderStarfield);
    }

    requestAnimationFrame(renderStarfield);
}

// ==========================================================================
//  3D COVER FLOW ENGINE (DRIVING THE 6 FLAGSHIP PROJECTS)
// ==========================================================================

function initCoverFlow() {
    const stage = document.getElementById('cflowStage');
    if (!stage) return;

    stage.innerHTML = '';
    cflowState.cards = [];

    // Build the 6 Flagship Project Cards
    cflowState.list.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'cf-card';
        card.dataset.index = index;
        card.dataset.id = project.id;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${project.title} - ${project.subtitle}`);

        // Badge
        const badge = document.createElement('div');
        badge.className = 'cf-card-badge';
        badge.textContent = project.tag;

        // Preview Image Container
        const preview = document.createElement('div');
        preview.className = 'cf-card-preview';
        const img = document.createElement('img');
        img.src = project.previewImg;
        img.alt = project.title;
        img.loading = 'eager';
        preview.appendChild(img);

        // Hover Hint
        const hint = document.createElement('div');
        hint.className = 'cf-card-hint';
        hint.innerHTML = `<span>View Details</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

        card.appendChild(badge);
        card.appendChild(preview);
        card.appendChild(hint);

        // Click Handler
        card.addEventListener('click', () => {
            const idx = parseInt(card.dataset.index, 10);
            if (idx === Math.round(cflowState.pos)) {
                openProjectDetails(cflowState.list[idx]);
            } else {
                navigateToProject(idx);
            }
        });

        stage.appendChild(card);
        cflowState.cards.push(card);
    });

    cflowState.target = 0;
    cflowState.pos = 0;
    cflowState.lastIdx = -1;

    setupCoverFlowEvents(stage);
    renderCoverFlowFrame(true);
}

function getDimensions() {
    const W = window.innerWidth;
    const isMobile = W < 760;
    const cw = isMobile ? 240 : Math.min(285, Math.round(W * 0.25));
    const ch = Math.round(cw * 1.32);
    const cfy = Math.round(window.innerHeight * 0.42);

    const root = document.documentElement;
    root.style.setProperty('--cw', `${cw}px`);
    root.style.setProperty('--ch', `${ch}px`);
    root.style.setProperty('--cfy', `${cfy}px`);

    return { cw, ch, isMobile };
}

function renderCoverFlowFrame(force = false) {
    cflowState.raf = 0;
    const { cw, isMobile } = getDimensions();

    if (!cflowState.isDragging) {
        // Silky smooth, organic spring ease toward target (AvaJean 0.16 rate)
        const diff = cflowState.target - cflowState.pos;
        cflowState.pos += diff * 0.16;

        // STOP ON COMMAND: When settled within 0.001, snap exactly to target and STOP
        if (Math.abs(diff) < 0.001) {
            cflowState.pos = cflowState.target;
        }
    }

    // Exact AvaJean Cover Flow perspective spacing
    const few = cflowState.list.length <= 6;
    const gap = cw * (isMobile ? 0.82 : few ? 1.2 : 1.05);
    const side = cw * (isMobile ? 0.96 : few ? 1.18 : 1.1);
    const rot = few ? 24 : 28;

    cflowState.cards.forEach((card, i) => {
        const offset = i - cflowState.pos;
        const absOffset = Math.abs(offset);

        if (absOffset > 6) {
            card.style.visibility = 'hidden';
            return;
        }
        card.style.visibility = 'visible';

        const sign = Math.sign(offset);
        const clampOffset = Math.min(1, absOffset);

        const x = offset === 0 ? 0 : sign * (side * clampOffset + gap * Math.max(0, absOffset - 1));
        const rotY = -sign * rot * clampOffset;
        const transZ = -260 * clampOffset + (1 - clampOffset) * 60;

        card.style.transform = `translate3d(${x.toFixed(1)}px, 0, ${transZ.toFixed(1)}px) rotateY(${rotY.toFixed(2)}deg)`;
        card.style.zIndex = 100 - Math.round(absOffset * 10);
        card.style.setProperty('--sh', (clampOffset * 0.55).toFixed(2));
        card.classList.toggle('r', offset > 0);
        card.classList.toggle('active', Math.round(cflowState.pos) === i);
    });

    const activeIdx = Math.max(0, Math.min(cflowState.list.length - 1, Math.round(cflowState.pos)));
    if (activeIdx !== cflowState.lastIdx) {
        cflowState.lastIdx = activeIdx;
        updateActiveDisplay(activeIdx);
    }

    // ONLY continue animation loop if position hasn't settled yet or forced
    // When settled, IT STOPS COMPLETELY ON COMMAND!
    if (cflowState.pos !== cflowState.target || force) {
        cflowState.raf = requestAnimationFrame(() => renderCoverFlowFrame());
    }
}

function updateActiveDisplay(idx) {
    const project = cflowState.list[idx];
    if (!project) return;

    const tagEl = document.getElementById('activeProjectTag');
    const titleEl = document.getElementById('activeProjectTitle');
    const countEl = document.getElementById('activeProjectCount');
    const fillEl = document.getElementById('cfProgressFill');
    const dockProjEl = document.getElementById('dockCurrentProject');

    if (tagEl) tagEl.textContent = project.category;
    if (titleEl) titleEl.textContent = project.title;
    if (countEl) countEl.textContent = project.subtitle;
    if (fillEl) fillEl.style.width = `${((idx + 1) / cflowState.list.length) * 100}%`;
    if (dockProjEl) dockProjEl.textContent = project.title;

    // Sync Bottom Dock Filter Pills
    document.querySelectorAll('.dock-pill').forEach(pill => {
        const isMatch = pill.dataset.id === project.id;
        pill.classList.toggle('active', isMatch);
    });
}

function navigateToProject(idx) {
    const maxIdx = cflowState.list.length - 1;
    cflowState.target = Math.max(0, Math.min(maxIdx, idx));
    if (!cflowState.raf) {
        cflowState.raf = requestAnimationFrame(() => renderCoverFlowFrame());
    }
}

function setupCoverFlowEvents(stage) {
    let pointerStartX = null;
    let startTarget = 0;
    let hasMoved = false;
    let lastX = 0;
    let lastTime = 0;
    let velocityX = 0;

    stage.addEventListener('pointerdown', (e) => {
        // STOP ON COMMAND: If carousel was moving, immediately freeze in place at exact position
        cflowState.target = cflowState.pos;
        startTarget = cflowState.pos;
        pointerStartX = e.clientX;
        lastX = e.clientX;
        lastTime = performance.now();
        velocityX = 0;
        hasMoved = false;
        cflowState.isDragging = true;
        stage.classList.add('grabbing');
        stage.setPointerCapture(e.pointerId);
    });

    stage.addEventListener('pointermove', (e) => {
        if (pointerStartX === null) return;
        const now = performance.now();
        const dt = Math.max(1, now - lastTime);
        const deltaX = e.clientX - pointerStartX;
        const instantDx = e.clientX - lastX;

        // Exponential smoothing for swipe velocity (px/ms)
        const currentVx = instantDx / dt;
        velocityX = velocityX * 0.3 + currentVx * 0.7;
        lastX = e.clientX;
        lastTime = now;

        if (Math.abs(deltaX) > 4) hasMoved = true;

        const { cw } = getDimensions();
        const maxIdx = cflowState.list.length - 1;

        // DIRECT 1:1 FINGER TRACKING: moves immediately under your cursor
        const dragCards = deltaX / (cw * 0.52);
        let desired = startTarget - dragCards;

        // Soft rubber-band resistance at ends
        if (desired < -0.3) desired = -0.3 + (desired + 0.3) * 0.25;
        if (desired > maxIdx + 0.3) desired = (maxIdx + 0.3) + (desired - (maxIdx + 0.3)) * 0.25;

        cflowState.target = desired;
        cflowState.pos = desired; // 1:1 instant position tracking while dragging

        renderCoverFlowFrame(false);
    });

    const endPointer = (e) => {
        if (pointerStartX === null) return;
        stage.classList.remove('grabbing');
        pointerStartX = null;
        cflowState.isDragging = false;

        const { cw } = getDimensions();
        const maxIdx = cflowState.list.length - 1;

        if (!hasMoved) {
            // Tap or Click
            const elements = document.elementsFromPoint(e.clientX, e.clientY);
            const cardEl = elements.find(el => el.classList && el.classList.contains('cf-card'));
            if (cardEl) {
                const clickedIdx = parseInt(cardEl.dataset.index, 10);
                if (clickedIdx === Math.round(cflowState.pos)) {
                    openProjectDetails(cflowState.list[clickedIdx]);
                } else {
                    navigateToProject(clickedIdx);
                }
            }
        } else {
            // Swipe release: move and stop on command
            let snapIdx;
            if (Math.abs(velocityX) > 0.18) {
                // Flick gesture: step in flick direction
                const flickDir = -Math.sign(velocityX);
                const flickSteps = Math.abs(velocityX) > 0.75 ? 2 : 1;
                snapIdx = Math.round(cflowState.pos) + flickDir * flickSteps;
            } else {
                // Slower drag: snap cleanly to nearest card
                snapIdx = Math.round(cflowState.pos);
            }

            snapIdx = Math.max(0, Math.min(maxIdx, snapIdx));
            navigateToProject(snapIdx);
        }
    };

    stage.addEventListener('pointerup', endPointer);
    stage.addEventListener('pointercancel', endPointer);

    // Mouse Wheel & Trackpad Navigation (Responsive, smooth step and snap)
    let wheelAcc = 0;
    let wheelTimer = 0;
    stage.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        wheelAcc += delta;
        const now = performance.now();

        if (Math.abs(wheelAcc) > 30 && now - wheelTimer > 80) {
            const step = Math.sign(wheelAcc);
            navigateToProject(Math.round(cflowState.target) + step);
            wheelAcc = 0;
            wheelTimer = now;
        }
    }, { passive: false });

    window.addEventListener('resize', () => {
        renderCoverFlowFrame(true);
    });
}

// ==========================================================================
//  INFINITE SEAMLESS LOGO MARQUEE (FROM NEXORA WEBSITE)
// ==========================================================================

function initLogoMarquee() {
    const track = document.getElementById('logoTrack');
    if (!track) return;

    const logos = ['framer', 'huawei', 'instagram', 'microsoft', 'walmart'];
    const repeated = [...logos, ...logos, ...logos, ...logos];
    track.innerHTML = repeated.map(name => `

// Direct pointer tracking active
