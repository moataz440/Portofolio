'use strict';

/* ============================================================
   PROJECT DATA
   ============================================================ */
const PROJECTS = [
  {
    id: 1,
    title: 'LRC — C++ Frontend Compiler',
    desc: 'A complete C++ compiler built in Python covering the full pipeline: preprocessing, lexical analysis, LR(1) parsing, semantic analysis, three-address code generation, pseudo-assembly, and HTE object code. Executed by a tree-walking AST interpreter with a custom CustomTkinter GUI visualizing every phase — tokens, AST, parse tree, symbol table, TAC, and assembly. Full error reporting at every stage with precise line/column info.',
    tags: ['Python', 'LR(1) Parsing', 'AST Interpretation', 'CustomTkinter', 'Compiler Design'],
    cats: ['systems'],
    github: 'https://github.com/moataz440/LRC-C-Compiler-with-AST-Interpreter-',
    demo: '#',
    featured: true
  },
  {
    id: 2,
    title: '1980 Coffee — Full-Stack Ordering Platform',
    desc: 'Production-grade coffee shop application with a full ordering system, real-time order management, loyalty points, and admin dashboard. Features Stripe card payments, MongoDB Atlas persistence, JWT access + refresh tokens via httpOnly cookies with rotation and reuse detection, bcrypt password hashing, rate limiting, Helmet security headers, Joi input validation, audit logs, and a Python analytics dashboard for KPIs and revenue charts.',
    tags: ['Node.js', 'Express', 'MongoDB Atlas', 'Mongoose', 'JWT', 'Stripe', 'Python', 'Helmet', 'Joi'],
    cats: ['web'],
    github: 'https://github.com/moataz440/Coffee-1980',
    demo: 'https://coffee-1980.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'CB350 QuizHub — AI University Quiz Platform',
    desc: 'Real-time interactive quiz platform built for CB350 Building Materials & Testing at AAST, used by actual university professors and students. Tutors generate AI-powered questions per topic using a Claude proxy, share a 6-character room code, and run live sessions with a countdown timer and real-time bar chart of student answers. Students join from any device with speed-based bonus scoring and a live leaderboard.',
    tags: ['React', 'Vite', 'Supabase', 'Supabase Realtime', 'Claude AI', 'JavaScript'],
    cats: ['web', 'ai'],
    github: 'https://github.com/moataz440/Building-materials',
    demo: 'https://building-materials-six.vercel.app',
    featured: true
  },
  {
    id: 4,
    title: 'Car Dealership Platform',
    desc: 'Full-stack car marketplace with a Next.js frontend and Node.js/Express REST API backend. Features real-time auction and bidding, role-based JWT authentication, bcrypt password hashing, and a relational MySQL schema managed with Prisma ORM. Includes listing management, lead capture, admin dashboard, comments, and status workflows.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Prisma', 'JWT'],
    cats: ['web'],
    github: 'https://github.com/moataz440/Car-Dealership',
    demo: '#',
    featured: false
  },
  {
    id: 5,
    title: 'FaceSecure — Face Recognition System',
    desc: 'Enterprise-grade desktop face recognition application with ONNX-based face detection and recognition models, real-time live camera feed, admin panel with access control, SQLite database for employee records, automated report generation, and a PyInstaller-packaged executable. Designed for attendance tracking and enterprise access control scenarios.',
    tags: ['Python', 'CustomTkinter', 'ONNX', 'OpenCV', 'SQLite', 'PyInstaller'],
    cats: ['ai', 'security'],
    github: 'https://github.com/moataz440/Face-Recognition',
    demo: '#',
    featured: true
  },
  {
    id: 6,
    title: 'CipherLens — Image Steganography Tool',
    desc: 'Desktop and web tool for hiding AES-256-GCM encrypted messages inside images using LSB steganography, with PBKDF2-HMAC-SHA256 key derivation. Supports XOR-based lightweight encryption; strips EXIF metadata on processed images to prevent privacy leakage. Flask API backend with drag-and-drop frontend, file validation, capacity checking, and detailed error reporting.',
    tags: ['Python', 'Flask', 'AES-256-GCM', 'LSB Steganography', 'PyCryptodome', 'Pillow'],
    cats: ['security', 'web'],
    github: 'https://github.com/moataz440/Cipher-Lens',
    demo: '#',
    featured: true
  },
  {
    id: 7,
    title: 'Collaborative Whiteboard',
    desc: 'Real-time P2P collaborative whiteboard platform with WebSocket architecture, multi-user simultaneous drawing, React frontend, Node.js backend, and a Java P2P connectivity layer.',
    tags: ['React', 'Node.js', 'WebSockets', 'Java', 'Canvas API'],
    cats: ['web'],
    github: 'https://github.com/moataz440/Collabrative-White-Board',
    demo: '#',
    featured: false
  },
  {
    id: 8,
    title: 'Beauty Salon Management System',
    desc: 'Full-stack desktop application for salon operations — appointment scheduling, staff management, service tracking, and client visit history. Built with Java 17 and JavaFX FXML in a clean MVC architecture, connected directly to a MySQL database via JDBC.',
    tags: ['Java 17', 'JavaFX', 'FXML', 'MySQL', 'JDBC', 'Maven'],
    cats: ['web'],
    github: 'https://github.com/moataz440/Beauty_Salon',
    demo: '#',
    featured: false
  },
  {
    id: 9,
    title: 'E-Commerce System',
    desc: 'Comprehensive e-commerce backend built with C# .NET 8, demonstrating advanced OOP principles and design patterns — Repository, Strategy, Decorator, Factory, Singleton, and Dependency Injection. Designed for enterprise-level applications with clean layered architecture, SOLID principles, and DTO patterns throughout.',
    tags: ['C#', '.NET 8', 'OOP', 'Design Patterns', 'REST API', 'Clean Architecture', 'SOLID'],
    cats: ['web'],
    github: 'https://github.com/moataz440/E-Commerce-System',
    demo: '#',
    featured: false
  },
  {
    id: 10,
    title: 'Rotten Tomatoes Analytics',
    desc: 'Exploratory data analysis on a large Rotten Tomatoes dataset. Cleaned and preprocessed data, then produced Pearson correlation matrices, pairplots, and heatmaps to surface trends in critic vs. audience scoring. Derived actionable insights on genre performance, score distributions, and rating drift over decades using statistical visualization.',
    tags: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'],
    cats: ['web'],
    github: 'https://github.com/moataz440/Rotten-Tomatoes-Analytics',
    demo: '#',
    featured: false
  },
  {
    id: 11,
    title: 'Weather Station IoT',
    desc: 'End-to-end IoT weather station: ESP32 reads temperature/humidity from a DHT22 sensor and displays live readings on an I2C LCD, then publishes data over MQTT (TLS) to HiveMQ Cloud. Python subscriber consumes the MQTT stream, logs readings, and plots real-time charts. GPIO-programmed alert thresholds trigger onboard indicators.',
    tags: ['ESP32', 'Arduino IDE', 'MQTT', 'HiveMQ Cloud', 'Python', 'paho-mqtt', 'DHT22'],
    cats: ['hardware'],
    github: 'https://github.com/moataz440/Weather-APP',
    demo: '#',
    featured: false
  },
  {
    id: 12,
    title: 'Online Examination System',
    desc: 'Web-based examination platform with question banks, timed assessments, auto-grading, result analytics, and an admin management panel. Built with PHP and MySQL with session-based authentication.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Sessions'],
    cats: ['web'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 13,
    title: 'Custom 3D Printer',
    desc: 'Built and programmed a 3D printer from scratch — firmware-level Arduino control, Python scripting for host-side communication, custom circuit design, and electronics assembly. Covers the full hardware-software integration stack from motor driver circuits to serial command interfaces and G-code interpretation.',
    tags: ['Arduino', 'Python', 'Electronics', 'Circuits', 'Embedded Systems', 'G-code'],
    cats: ['hardware'],
    github: '#',
    demo: '#',
    featured: true
  }
];

/* ============================================================
   PRELOADER
   ============================================================ */
(function initPreloader() {
  document.body.classList.add('loading');
  const fill = document.getElementById('preloader-fill');
  const num  = document.getElementById('preloader-num');
  let progress = 0;

  const tick = setInterval(() => {
    progress += Math.random() * 12 + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(tick);
      setTimeout(finishLoader, 300);
    }
    fill.style.width = progress + '%';
    num.textContent  = Math.floor(progress);
  }, 60);

  function finishLoader() {
    const loader = document.getElementById('preloader');
    loader.classList.add('hidden');
    document.body.classList.remove('loading');
    setTimeout(() => loader.remove(), 700);
  }
})();

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
(function initCursor() {
  const ring = document.getElementById('cursor-ring');
  const dot  = document.getElementById('cursor-dot');
  let rx = 0, ry = 0, dx = 0, dy = 0;

  document.addEventListener('mousemove', e => {
    dx = e.clientX;
    dy = e.clientY;
    dot.style.left  = dx + 'px';
    dot.style.top   = dy + 'px';
  });

  (function animRing() {
    rx += (dx - rx) * 0.10;
    ry += (dy - ry) * 0.10;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a, button, .fbtn, .proj-card, .stag, .mag-btn').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });

  document.addEventListener('mousedown', () => ring.classList.add('clicking'));
  document.addEventListener('mouseup',   () => ring.classList.remove('clicking'));
})();

/* ============================================================
   HERO CANVAS — PARTICLES
   ============================================================ */
(function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [];

  const GOLD      = 'rgba(201,168,76,';
  const COUNT     = 90;
  const MAX_DIST  = 120;
  const mouse     = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x   = Math.random() * W;
      this.y   = Math.random() * H;
      this.vx  = (Math.random() - 0.5) * 0.4;
      this.vy  = (Math.random() - 0.5) * 0.4;
      this.r   = Math.random() * 1.5 + 0.5;
      this.a   = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;

      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        const force = (100 - dist) / 100;
        this.vx += (dx / dist) * force * 0.3;
        this.vy += (dy / dist) * force * 0.3;
        const maxSpd = 2;
        const spd = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
        if (spd > maxSpd) { this.vx = (this.vx/spd)*maxSpd; this.vy = (this.vy/spd)*maxSpd; }
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = GOLD + this.a + ')';
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({length: COUNT}, () => new Particle());
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const p1 = particles[i], p2 = particles[j];
        const dx = p1.x - p2.x, dy = p1.y - p2.y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = GOLD + (0.12 * (1 - d/MAX_DIST)) + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }

  document.getElementById('hero').addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  document.getElementById('hero').addEventListener('mouseleave', () => {
    mouse.x = -9999; mouse.y = -9999;
  });

  window.addEventListener('resize', () => { resize(); });
  init();
  loop();
})();

/* ============================================================
   NAVIGATION
   ============================================================ */
(function initNav() {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('nav-burger');
  const menu   = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    menu.classList.toggle('open', open);
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
    });
  });
})();

/* ============================================================
   ROLE TICKER
   ============================================================ */
(function initRoleTicker() {
  const items   = document.querySelectorAll('.role-item');
  let current   = 0;
  const DELAY   = 2600;

  if (!items.length) return;

  function nextRole() {
    const prev = current;
    current = (current + 1) % items.length;
    items[prev].classList.remove('active');
    items[prev].style.cssText = 'opacity:0; transform:translateY(-100%); position:absolute; top:0;';
    items[current].style.cssText = 'opacity:1; transform:translateY(0); position:relative;';
    items[current].classList.add('active');
    setTimeout(() => { items[prev].style.cssText = ''; }, 500);
  }

  setInterval(nextRole, DELAY);
})();

/* ============================================================
   SCROLL REVEAL — Intersection Observer
   ============================================================ */
(function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ============================================================
   STATS COUNTER
   ============================================================ */
(function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const to  = parseInt(el.dataset.to, 10);
      const dur = 1400;
      const start = performance.now();

      function tick(now) {
        const t  = Math.min((now - start) / dur, 1);
        const et = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
        el.textContent = Math.round(et * to);
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.count').forEach(el => obs.observe(el));
})();

/* ============================================================
   MAGNETIC BUTTONS
   ============================================================ */
(function initMagnetic() {
  document.querySelectorAll('.mag-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r  = btn.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      const dx = (e.clientX - cx) * 0.3;
      const dy = (e.clientY - cy) * 0.3;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

/* ============================================================
   CARD 3D TILT
   ============================================================ */
function applyTilt(card, e) {
  const r  = card.getBoundingClientRect();
  const cx = r.left + r.width  / 2;
  const cy = r.top  + r.height / 2;
  const rx = ((e.clientY - cy) / (r.height / 2)) * -6;
  const ry = ((e.clientX - cx) / (r.width  / 2)) *  6;
  card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
}

/* ============================================================
   PROJECT RENDERING + FILTERING
   ============================================================ */
(function initProjects() {
  const grid = document.getElementById('proj-grid');
  if (!grid) return;

  function renderProjects(filter) {
    grid.innerHTML = '';
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cats.includes(filter));

    list.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'proj-card reveal';
      card.style.transitionDelay = (i * 60) + 'ms';

      card.innerHTML = `
        ${p.featured ? '<div class="proj-featured">Featured</div>' : ''}
        <div class="proj-num">0${p.id}</div>
        <div class="proj-cats">${p.cats.map(c => `<span class="proj-cat-badge">${c}</span>`).join('')}</div>
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="proj-links">
          <a href="${p.github}" class="proj-link${p.github === '#' ? ' disabled' : ''}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="${p.demo}" class="proj-link${p.demo === '#' ? ' disabled' : ''}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            Live Demo
          </a>
        </div>
      `;

      card.addEventListener('mousemove', e => applyTilt(card, e));
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });

      grid.appendChild(card);
    });

    // Re-trigger reveal for newly added cards
    setTimeout(() => {
      const revObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }
        });
      }, { threshold: 0.08 });
      grid.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
    }, 50);
  }

  renderProjects('all');

  // Filter buttons
  document.querySelectorAll('.fbtn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderProjects(this.dataset.f);
    });
  });
})();

/* ============================================================
   CONTACT FORM
   ============================================================ */
(function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"]');
    const span = btn.querySelector('span');
    const orig = span.textContent;

    span.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate sending (replace with actual EmailJS or backend call)
    setTimeout(() => {
      span.textContent = 'Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #16a34a, #22c55e)';
      setTimeout(() => {
        span.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }, 1200);
  });
})();

/* ============================================================
   SMOOTH ANCHOR CLICKS
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ============================================================
   UPDATE LINKS HELPER  — call this after adding your real URLs
   e.g. updateLinks('https://github.com/youruser', 'https://linkedin.com/in/you', '+201234567890')
   ============================================================ */
window.updateLinks = function(github, linkedin, phone) {
  const githubEls  = document.querySelectorAll('#h-github, #c-github, #f-github');
  const linkedinEls = document.querySelectorAll('#h-linkedin, #c-linkedin, #f-linkedin');

  githubEls.forEach(el  => { el.href = github;  if (el.classList.contains('c-val')) el.textContent = github.replace('https://', ''); });
  linkedinEls.forEach(el => { el.href = linkedin; if (el.classList.contains('c-val')) el.textContent = linkedin.replace('https://', ''); });

  const ph = document.getElementById('c-phone');
  if (ph && phone) {
    ph.textContent = phone;
    ph.href = 'tel:' + phone.replace(/\s/g,'');
    ph.tagName !== 'A' && (ph.outerHTML = `<a href="tel:${phone.replace(/\s/g,'')}" class="c-val">${phone}</a>`);
  }

  // Update project links
  PROJECTS.forEach((p, i) => {
    if (p.github !== '#') PROJECTS[i].github = p.github;
    if (p.demo   !== '#') PROJECTS[i].demo   = p.demo;
  });
};
