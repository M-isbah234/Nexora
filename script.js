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
        <div class="marquee-logo-item" title="${name}">
            <img src="./assets/companies-logo/${name}.svg" alt="${name}" draggable="false" onerror="this.style.display='none'">
        </div>
    `).join('');
}

function initKeyboardNavigation() {
    window.addEventListener('keydown', (e) => {
        // If any tab sheet or search modal is open, let them handle Escape
        const activeSheet = document.querySelector('.tab-sheet.open');
        const search = document.getElementById('searchModal');

        if (activeSheet) {
            if (e.key === 'Escape') closeAllTabSheets();
            return;
        }
        if (search && search.classList.contains('open')) {
            if (e.key === 'Escape') closeQuickSearch();
            return;
        }

        if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigateToProject(Math.round(cflowState.target) + 1);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigateToProject(Math.round(cflowState.target) - 1);
        } else if (e.key === 'Enter') {
            const activeIdx = Math.round(cflowState.pos);
            if (cflowState.list[activeIdx]) {
                openProjectDetails(cflowState.list[activeIdx]);
            }
        }
    });
}

// ==========================================================================
//  FLOATING BOTTOM DOCK CONTROLS (THE 6 PROJECTS)
// ==========================================================================

function initBottomDock() {
    const filtersContainer = document.getElementById('dockFilters');
    if (!filtersContainer) return;

    filtersContainer.innerHTML = '';

    // "ALL" Pill
    const allPill = document.createElement('button');
    allPill.className = 'dock-pill active';
    allPill.dataset.id = 'all';
    allPill.textContent = 'ALL';
    allPill.addEventListener('click', () => {
        navigateToProject(0);
    });
    filtersContainer.appendChild(allPill);

    // Pill for each of the 6 Projects
    cflowState.list.forEach((project, idx) => {
        const pill = document.createElement('button');
        pill.className = 'dock-pill';
        pill.dataset.id = project.id;
        pill.textContent = project.title;
        pill.addEventListener('click', () => {
            navigateToProject(idx);
        });
        filtersContainer.appendChild(pill);
    });
}

// ==========================================================================
//  AVAJEAN FULL-PAGE OVERLAY SHEETS ROUTER & CONTROLS
//  About, Services, Process, Pricing, Contact, and Project Details
// ==========================================================================

// Track pointer origin for AvaJean circular clip-path reveal animation
document.addEventListener('pointerdown', e => {
    document.documentElement.style.setProperty('--cx', e.clientX + 'px');
    document.documentElement.style.setProperty('--cy', e.clientY + 'px');
}, true);

document.addEventListener('keydown', () => {
    document.documentElement.style.setProperty('--cx', '50%');
    document.documentElement.style.setProperty('--cy', '50%');
}, true);

const TAB_SHEETS = {
    'about': 'sheet-about',
    'services': 'sheet-services',
    'process': 'sheet-process',
    'pricing': 'sheet-pricing',
    'contact': 'sheet-contact',
    'project': 'sheet-project'
};

function initTabSheets() {
    // Brand Link click returns to Work
    const brandLink = document.querySelector('.nav-brand');
    if (brandLink) {
        brandLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '#work';
            closeAllTabSheets();
        });
    }

    // Top Nav Tab Buttons
    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabName = btn.dataset.tab;
            if (tabName === 'work') {
                window.location.hash = '#work';
                closeAllTabSheets();
            } else {
                window.location.hash = '#' + tabName;
                openTabSheet(`sheet-${tabName}`);
                setActiveNavTab(tabName);
            }
        });
    });

    // Back buttons on all sheets
    document.querySelectorAll('.sheet .back').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '#work';
            closeAllTabSheets();
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openSheet = document.querySelector('.sheet.open');
            if (openSheet) {
                window.location.hash = '#work';
                closeAllTabSheets();
            }
        }
    });

    // Listen to hash changes for browser back/forward and deep linking
    window.addEventListener('hashchange', handleHashRoute);
    handleHashRoute();

    // Initialize Interactive Brief Builder in Contact Sheet
    initBriefBuilder();

    // Initialize Copy Email buttons
    initCopyEmail();
}

function handleHashRoute() {
    const raw = (window.location.hash || '#work').slice(1).toLowerCase();
    if (raw === 'work' || !raw) {
        closeAllTabSheets();
        setActiveNavTab('work');
    } else if (TAB_SHEETS[raw]) {
        openTabSheet(TAB_SHEETS[raw]);
        setActiveNavTab(raw);
    } else if (raw.startsWith('project-') || raw.startsWith('p-')) {
        const pid = raw.replace(/^(project-|p-)/, '');
        const p = FLAGSHIP_PROJECTS.find(x => x.slug === pid || x.id === pid);
        if (p) openProjectDetails(p, false);
    }
}

function setActiveNavTab(tabName) {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
}

function openTabSheet(sheetId) {
    document.querySelectorAll('.sheet').forEach(s => {
        if (s.id !== sheetId) s.classList.remove('open');
    });
    const targetSheet = document.getElementById(sheetId);
    if (targetSheet) {
        targetSheet.classList.add('open');
        targetSheet.scrollTop = 0;
        document.body.classList.add('sheet-open');
    }
}

function closeAllTabSheets(resetNav = true) {
    document.querySelectorAll('.sheet').forEach(sheet => {
        sheet.classList.remove('open');
    });
    document.body.classList.remove('sheet-open');
    if (resetNav) {
        setActiveNavTab('work');
    }
}

// Global window exposure for tab sheets and modals
window.closeAllTabSheets = closeAllTabSheets;
window.openTabSheet = openTabSheet;
window.openProjectDetails = openProjectDetails;

// Open Dedicated Project Details Sheet
function openProjectDetails(project, updateHash = true) {
    if (!project) return;
    const sheet = document.getElementById('sheet-project');
    const body = document.getElementById('projectSheetBody');
    if (!sheet || !body) return;

    if (updateHash) {
        window.location.hash = `#project-${project.slug}`;
    }

    body.innerHTML = `
        <div class="project-detail-layout">
            <div class="project-detail-media">
                <img src="${project.previewImg}" alt="${project.title}">
            </div>
            <div class="project-detail-info">
                <span class="project-detail-badge">${project.badge}</span>
                <h2 class="project-detail-title">${project.title}</h2>
                <p class="project-detail-subtitle">${project.subtitle} • ${project.category}</p>
                <p class="project-detail-desc">${project.desc}</p>
                <div class="project-detail-tags">
                    ${project.tags.map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
                </div>
                <div class="project-detail-actions">
                    <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="pill big">
                        <span>Visit Live Website</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                    ${project.videoLink ? `
                    <a href="${project.videoLink}" target="_blank" rel="noopener noreferrer" class="pill ghost">
                        <span>Video Demo</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </a>` : ''}
                    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="pill ghost">
                        <span>GitHub Code</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </a>
                </div>
            </div>
        </div>
    `;

    openTabSheet('sheet-project');
}

// Interactive Project Brief Builder
function initBriefBuilder() {
    const chipsContainer = document.getElementById('briefChips');
    const msgInput = document.getElementById('briefMsg');
    const sendWaBtn = document.getElementById('briefSendWa');
    const sendMailBtn = document.getElementById('briefSendMail');
    const copyBriefBtn = document.getElementById('briefCopy');
    const statusText = document.getElementById('briefStatus');

    if (!chipsContainer) return;

    // Toggle active state on chips
    chipsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.chip-btn');
        if (!btn) return;
        btn.classList.toggle('active');
    });

    function getSelectedServices() {
        const active = chipsContainer.querySelectorAll('.chip-btn.active');
        return Array.from(active).map(b => b.dataset.service || b.textContent.trim());
    }

    function buildBriefSummary() {
        const services = getSelectedServices();
        const msg = (msgInput ? msgInput.value.trim() : '') || 'I would like to discuss engineering solutions for my business.';
        return `*Nexora Solvex Project Brief*\n` +
               `Services: ${services.length ? services.join(', ') : 'Web & AI Engineering'}\n` +
               `Details: ${msg}`;
    }

    if (sendWaBtn) {
        sendWaBtn.addEventListener('click', () => {
            const summary = buildBriefSummary().replace(/\n/g, '%0A');
            const url = `https://wa.me/923182370631?text=${encodeURIComponent(buildBriefSummary().replace(/\n/g, '\n'))}`;
            window.open(url, '_blank');
        });
    }

    if (sendMailBtn) {
        sendMailBtn.addEventListener('click', () => {
            const services = getSelectedServices().join(', ') || 'Digital Architecture';
            const msg = (msgInput ? msgInput.value.trim() : '') || 'We would like to consult on a new project.';
            const subject = encodeURIComponent(`Project Brief: ${services} - Nexora Solvex`);
            const body = encodeURIComponent(`Hello Nexora Team,\n\nServices Requested: ${services}\n\nProject Scope:\n${msg}\n\nLooking forward to your response.`);
            window.location.href = `mailto:nexoradevx@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    if (copyBriefBtn) {
        copyBriefBtn.addEventListener('click', async () => {
            const text = buildBriefSummary().replace(/\n/g, '\n');
            try {
                await navigator.clipboard.writeText(text);
                if (statusText) {
                    statusText.textContent = 'Brief copied to clipboard!';
                    setTimeout(() => { statusText.textContent = ''; }, 3000);
                }
            } catch {
                if (statusText) {
                    statusText.textContent = 'Failed to copy';
                }
            }
        });
    }
}

// Copy Email Button in Contact Sheet
function initCopyEmail() {
    const copyBtn = document.getElementById('copyMailBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText('nexoradevx@gmail.com');
                const orig = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(() => { copyBtn.textContent = orig; }, 2000);
            } catch {
                // fallback
            }
        });
    }
}

// ==========================================================================
//  QUICK SEARCH (FUZZY SEARCH MODAL)
// ==========================================================================

function initQuickSearch() {
    const triggerBtn = document.getElementById('searchTriggerBtn');
    const modal = document.getElementById('searchModal');
    const closeBtn = document.getElementById('searchEscBtn');
    const input = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');

    if (triggerBtn) {
        triggerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openQuickSearch();
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeQuickSearch);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeQuickSearch();
        });
    }

    window.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            openQuickSearch();
        } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            openQuickSearch();
        }
    });

    if (input && resultsContainer) {
        input.addEventListener('input', () => {
            const query = input.value.trim().toLowerCase();
            renderSearchResults(query, resultsContainer);
        });
    }
}

function openQuickSearch() {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');
    if (!modal) return;

    modal.classList.add('open');
    if (input) {
        input.value = '';
        setTimeout(() => input.focus(), 50);
    }
    if (resultsContainer) renderSearchResults('', resultsContainer);
}

function closeQuickSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) modal.classList.remove('open');
}

function renderSearchResults(query, container) {
    container.innerHTML = '';

    const filtered = FLAGSHIP_PROJECTS.filter(p => {
        if (!query) return true;
        const matchTitle = p.title.toLowerCase().includes(query);
        const matchDesc = p.desc.toLowerCase().includes(query);
        const matchCat = p.category.toLowerCase().includes(query);
        const matchTags = p.tags.some(t => t.toLowerCase().includes(query));
        return matchTitle || matchDesc || matchCat || matchTags;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-dim); font-size: 13.5px;">No projects found matching "${query}"</div>`;
        return;
    }

    filtered.forEach(p => {
        const item = document.createElement('div');
        item.className = 'search-item';
        item.addEventListener('click', () => {
            closeQuickSearch();
            openProjectDetails(p);
        });

        const img = document.createElement('img');
        img.src = p.previewImg;
        img.alt = p.title;
        img.className = 'search-item-img';

        const info = document.createElement('div');
        info.className = 'search-item-info';

        const title = document.createElement('div');
        title.className = 'search-item-title';
        title.textContent = p.title;

        const desc = document.createElement('div');
        desc.className = 'search-item-desc';
        desc.textContent = p.subtitle;

        info.appendChild(title);
        info.appendChild(desc);

        const badge = document.createElement('span');
        badge.className = 'search-item-badge';
        badge.textContent = p.badge;

        item.appendChild(img);
        item.appendChild(info);
        item.appendChild(badge);
        container.appendChild(item);
    });
}

// ==========================================================================
//  CONTACT FORM HANDLING (ZERO EMOJIS)
// ==========================================================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', () => {});
}

// ==========================================================================
//  NEXORA AI CHATBOT WIDGET (ZERO EMOJIS)
// ==========================================================================

function initChatbotWidget() {
    const toggleBtn = document.getElementById('chatbotToggle');
    const closeBtn = document.getElementById('chatbotClose');
    const widget = document.getElementById('chatbotWidget');
    const sendBtn = document.getElementById('chatSend');
    const input = document.getElementById('chatInput');

    if (!toggleBtn || !widget) return;

    toggleBtn.addEventListener('click', () => widget.classList.toggle('open'));
    if (closeBtn) closeBtn.addEventListener('click', () => widget.classList.remove('open'));

    const handleSend = () => {
        const text = input.value.trim();
        if (!text) return;
        addChatMessage(text, 'user');
        input.value = '';

        setTimeout(() => {
            const reply = generateBotReply(text);
            addChatMessage(reply, 'bot');
        }, 400);
    };

    if (sendBtn) sendBtn.addEventListener('click', handleSend);
    if (input) input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    window.sendQuickMsg = (msg) => {
        addChatMessage(msg, 'user');
        setTimeout(() => {
            const reply = generateBotReply(msg);
            addChatMessage(reply, 'bot');
        }, 350);
    };
}

function addChatMessage(text, sender = 'bot') {
    const messages = document.getElementById('chatMessages');
    if (!messages) return;

    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = `<div class="chat-bubble">${text}</div>`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function generateBotReply(userQuery) {
    const q = userQuery.toLowerCase();
    if (q.includes('service') || q.includes('offer')) {
        return "Nexora provides 6 specialized services: 1) Modern Websites, 2) Domain-Trained AI Chatbots, 3) Autonomous Agents, 4) Canva Designing & Posters, 5) 24/7 Customer Support Desks, and 6) Custom CRM Dashboards. Open the Services tab above to explore full deliverables!";
    }
    if (q.includes('price') || q.includes('cost') || q.includes('pricing') || q.includes('rate')) {
        return "Our pricing starts from PKR 11,000 for Basic landing sites, PKR 17,000 for Pro sites with AI Chatbot integration, and PKR 26,000+ for complete custom Enterprise CRM and Agent systems. Check our Pricing tab for complete details.";
    }
    if (q.includes('contact') || q.includes('whatsapp') || q.includes('phone') || q.includes('call')) {
        return "You can reach us directly on WhatsApp at +92 315 1196495 or via email at nexoradevx@gmail.com. We are based in Karachi, Pakistan.";
    }
    if (q.includes('project') || q.includes('portfolio') || q.includes('work')) {
        return "Our 6 featured projects in the Cover Flow carousel are Hot N Tasty Roll, Aetheric Store, QuickStay Hotel Booking, Saud Emporium, MedixWeb AI Hospital, and Edusity. Click any project card to view its live deployment!";
    }
    return "Thank you for reaching out! Would you like to discuss a custom web application, AI chatbot, or administrative dashboard for your business? Click our WhatsApp button to chat with our team directly.";
}

// ==========================================================================
//  MOBILE MENU
// ==========================================================================

function initMobileMenu() {
    const toggle = document.getElementById('navMobileToggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        const isHidden = links.style.display === 'flex';
        links.style.display = isHidden ? 'none' : 'flex';
        if (!isHidden) {
            links.style.position = 'fixed';
            links.style.top = '72px';
            links.style.left = '0';
            links.style.right = '0';
            links.style.flexDirection = 'column';
            links.style.background = 'rgba(0, 0, 0, 0.96)';
            links.style.padding = '24px';
            links.style.borderBottom = '1px solid var(--border-subtle)';
        }
    });
}