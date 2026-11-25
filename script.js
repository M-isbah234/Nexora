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
    wheelTimer: 0,
    wheelSnapTimer: null,
    tiltX: 0,
    tiltY: 0,
    targetTiltX: 0,
    targetTiltY: 0
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

    // Smooth spring physics with fluid damping
    const lerpRate = cflowState.isDragging ? 0.22 : 0.095;
    const posDiff = cflowState.target - cflowState.pos;
    cflowState.pos += posDiff * lerpRate;

    if (Math.abs(posDiff) < 0.0005 && !cflowState.isDragging) {
        cflowState.pos = cflowState.target;
    }

    // Smooth 3D stage tilt following mouse cursor (Nexora Parallax)
    cflowState.tiltX += (cflowState.targetTiltX - cflowState.tiltX) * 0.08;
    cflowState.tiltY += (cflowState.targetTiltY - cflowState.tiltY) * 0.08;
    const stage = document.getElementById('cflowStage');
    if (stage) {
        stage.style.transform = `perspective(1350px) rotateX(${cflowState.tiltX.toFixed(2)}deg) rotateY(${cflowState.tiltY.toFixed(2)}deg)`;
    }

    // Generous breathing room calculations
    const gap = cw * (isMobile ? 0.9 : 1.15);
    const side = cw * (isMobile ? 1.05 : 1.25);
    const rot = 24; // Balanced tilt angle
    const now = performance.now();

    cflowState.cards.forEach((card, i) => {
        const offset = i - cflowState.pos;
        const absOffset = Math.abs(offset);

        if (absOffset > 5) {
            card.style.visibility = 'hidden';
            return;
        }
        card.style.visibility = 'visible';

        const sign = Math.sign(offset);
        const clampOffset = Math.min(1, absOffset);

        const x = offset === 0 ? 0 : sign * (side * clampOffset + gap * Math.max(0, absOffset - 1));
        const rotY = -sign * rot * clampOffset;
        const transZ = -220 * clampOffset + (1 - clampOffset) * 40;

        // Subtle organic breathing float wave for weightless, alive feel
        const waveFloat = Math.sin(now * 0.0016 + i * 0.65) * 3.5;

        card.style.transform = `translate3d(${x.toFixed(1)}px, ${waveFloat.toFixed(1)}px, ${transZ.toFixed(1)}px) rotateY(${rotY.toFixed(2)}deg)`;
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

    // Maintain smooth 60fps loop for fluid motion and organic breathing
    const isMoving = Math.abs(cflowState.target - cflowState.pos) > 0.0005 || 
                     cflowState.isDragging || 
                     Math.abs(cflowState.targetTiltX - cflowState.tiltX) > 0.02;

    if (isMoving || force) {
        cflowState.raf = requestAnimationFrame(() => renderCoverFlowFrame());
    } else {
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
        pointerStartX = e.clientX;
        startTarget = cflowState.target;
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

        // Exponential smoothing for velocity (px/ms)
        const currentVx = instantDx / dt;
        velocityX = velocityX * 0.4 + currentVx * 0.6;
        lastX = e.clientX;
        lastTime = now;

        if (Math.abs(deltaX) > 5) hasMoved = true;

        const { cw } = getDimensions();
        const maxIdx = cflowState.list.length - 1;

        // Free drag tracking with soft rubber-band resistance at boundaries
        const dragCards = deltaX / (cw * 0.75);
        let desiredTarget = startTarget - dragCards;
        if (desiredTarget < 0) {
            desiredTarget = desiredTarget * 0.35;
        } else if (desiredTarget > maxIdx) {
            desiredTarget = maxIdx + (desiredTarget - maxIdx) * 0.35;
        }
        cflowState.target = desiredTarget;

        if (!cflowState.raf) {
            cflowState.raf = requestAnimationFrame(() => renderCoverFlowFrame());
        }
    });

    const endPointer = (e) => {
        if (pointerStartX === null) return;
        stage.classList.remove('grabbing');
        pointerStartX = null;
        cflowState.isDragging = false;

        const { cw } = getDimensions();
        const maxIdx = cflowState.list.length - 1;

        if (!hasMoved) {
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
            // Apply natural flick momentum!
            let momentumCards = 0;
            if (Math.abs(velocityX) > 0.16) {
                // Carry momentum through based on flick speed
                momentumCards = -velocityX * 350 / cw;
                momentumCards = Math.max(-2.5, Math.min(2.5, momentumCards));
            }
            const predictedTarget = cflowState.target + momentumCards;
            const finalIdx = Math.max(0, Math.min(maxIdx, Math.round(predictedTarget)));
            navigateToProject(finalIdx);
        }
    };

    stage.addEventListener('pointerup', endPointer);
    stage.addEventListener('pointercancel', endPointer);

    // Continuous, buttery-smooth mouse wheel & trackpad glide
    stage.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        const maxIdx = cflowState.list.length - 1;

        // Fluid trackpad & wheel accumulation
        cflowState.target = Math.max(-0.4, Math.min(maxIdx + 0.4, cflowState.target + delta * 0.0022));

        if (!cflowState.raf) {
            cflowState.raf = requestAnimationFrame(() => renderCoverFlowFrame());
        }

        clearTimeout(cflowState.wheelSnapTimer);
        cflowState.wheelSnapTimer = setTimeout(() => {
            navigateToProject(Math.round(cflowState.target));
        }, 110);
    }, { passive: false });

    // Interactive 3D Cursor Parallax
    window.addEventListener('pointermove', (e) => {
        const W = window.innerWidth;
        const H = window.innerHeight;
        cflowState.targetTiltX = (e.clientY / H - 0.5) * -5.0; // degrees
        cflowState.targetTiltY = (e.clientX / W - 0.5) * 6.5; // degrees
        if (!cflowState.raf) {
            cflowState.raf = requestAnimationFrame(() => renderCoverFlowFrame());
        }
    }, { passive: true });

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
//  TAB SHEETS ROUTER (SERVICES, ABOUT, PRICING, CONTACT, PROJECT DETAILS)
//  No Long Vertical Scrolling | Clean Dedicated Overlays
// ==========================================================================

function initTabSheets() {
    // Brand Link click returns to Work
    const brandLink = document.querySelector('.nav-brand');
    if (brandLink) {
        brandLink.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllTabSheets();
        });
    }

    // Top Nav Tab Buttons
    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            if (tabName === 'work') {
                closeAllTabSheets();
                setActiveNavTab('work');
            } else {
                openTabSheet(`sheet-${tabName}`);
                setActiveNavTab(tabName);
            }
        });
    });

    // Close buttons on all sheets
    document.querySelectorAll('.sheet-close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllTabSheets();
        });
    });

    // Backdrop clicks on all sheets
    document.querySelectorAll('.tab-sheet').forEach(sheet => {
        sheet.addEventListener('click', (e) => {
            if (e.target === sheet) {
                closeAllTabSheets();
            }
        });
    });

    // Render contents inside tab sheets
    renderServicesSheet();
    renderPricingSheet();
}

function setActiveNavTab(tabName) {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
}

function openTabSheet(sheetId) {
    closeAllTabSheets(false);
    const targetSheet = document.getElementById(sheetId);
    if (targetSheet) {
        targetSheet.classList.add('open');
    }
}

function closeAllTabSheets(resetNav = true) {
    document.querySelectorAll('.tab-sheet').forEach(sheet => {
        sheet.classList.remove('open');
    });
    if (resetNav) {
        setActiveNavTab('work');
    }
}

// Global window exposure for tab sheets and modals
window.closeAllTabSheets = closeAllTabSheets;
window.openTabSheet = openTabSheet;
window.openProjectDetails = openProjectDetails;

// Render Services Sheet
function renderServicesSheet() {
    const container = document.getElementById('servicesSheetBody');
    if (!container) return;

    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'services-sheet-grid';

    SERVICES_DATA.forEach(srv => {
        const card = document.createElement('div');
        card.className = 'service-sheet-card';
        card.innerHTML = `
            <span class="service-card-tag">${srv.category}</span>
            <h4 class="service-card-title">${srv.title}</h4>
            <p class="service-card-desc">${srv.desc}</p>
            <ul class="service-deliverables-list">
                ${srv.deliverables.map(d => `<li>${d}</li>`).join('')}
            </ul>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
}

// Render Pricing Sheet
function renderPricingSheet() {
    const container = document.getElementById('pricingSheetBody');
    if (!container) return;

    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'pricing-sheet-grid';

    PRICING_DATA.forEach(plan => {
        const card = document.createElement('div');
        card.className = `pricing-sheet-card ${plan.popular ? 'featured' : ''}`;
        card.innerHTML = `
            <h4 class="pricing-tier-name">${plan.tier}</h4>
            <p class="pricing-best-for">${plan.bestFor}</p>
            <div class="pricing-amount">${plan.range}</div>
            <ul class="pricing-features-list">
                ${plan.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <a href="${BRAND_INFO.whatsappLink}?text=${encodeURIComponent(plan.whatsappMsg)}" target="_blank" rel="noopener noreferrer" class="pricing-action-btn">
                ${plan.buttonText}
            </a>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
}

// Open Dedicated Project Details Sheet
function openProjectDetails(project) {
    if (!project) return;
    const sheet = document.getElementById('sheet-project');
    const body = document.getElementById('projectSheetBody');
    if (!sheet || !body) return;

    body.innerHTML = `
        <div class="project-detail-layout">
            <div class="project-detail-media">
                <img src="${project.previewImg}" alt="${project.title}">
            </div>
            <div class="project-detail-info">
                <span class="project-detail-badge">${project.badge}</span>
                <h3 class="project-detail-title">${project.title}</h3>
                <p class="project-detail-subtitle">${project.subtitle} • ${project.category}</p>
                <p class="project-detail-desc">${project.desc}</p>
                <div class="project-detail-tags">
                    ${project.tags.map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
                </div>
                <div class="project-detail-actions">
                    <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="action-link-btn primary">
                        <span>Live Deployment</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                    ${project.videoLink ? `
                    <a href="${project.videoLink}" target="_blank" rel="noopener noreferrer" class="action-link-btn secondary">
                        <span>Video Demo</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </a>` : `
                    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="action-link-btn secondary">
                        <span>GitHub Code</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </a>`}
                </div>
            </div>
        </div>
    `;

    openTabSheet('sheet-project');
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