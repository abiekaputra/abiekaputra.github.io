/* ==========================================================
   Abi Eka Putra Wulyono — Personal Site Interactivity
   ========================================================== */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = matchMedia('(hover: none) and (pointer: coarse)').matches;

/* ---------- Translations ---------- */
const translations = {
    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.playground': 'Playground',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hi, my name is',
        'hero.tagline.start': 'I build things for',
        'hero.description': "I'm a Fresh Graduate Software Engineer based in East Java, Indonesia, focused on machine learning, data science, and full-stack web development. Currently working as a Technical Support Engineer at PT Adi Media Expertindo and open to opportunities where I can grow, learn, and create meaningful impact.",
        'hero.cta.work': 'View My Work',
        'hero.cta.resume': 'Download Resume',
        'hero.working_on': 'Open to opportunities',
        'hero.working_on.value': 'OCR systems @ Adi Media',
        'about.title': 'About Me',
        'about.p1': "Hello! I'm Abi, a Fresh Graduate Software Engineer from Universitas Pembangunan Nasional Veteran Jawa Timur (UPN Veteran East Java), where I earned my Bachelor's in Informatics with a GPA of 3.90/4.00. My journey into technology started with curiosity and has grown into a deep passion for solving real-world problems through code.",
        'about.p2': 'I was selected as a Machine Learning Cohort at Bangkit Academy 2024, a program led by Google, GoTo, and Traveloka, where I built AWAIR — an AI-powered Android app that predicts Air Quality Index using TensorFlow and Google Cloud Platform.',
        'about.p3': "Beyond academic work, I run a small independent coffee shop in Mojokerto, which has taught me the value of consistency, customer focus, and entrepreneurial thinking. These days, I'm focused on:",
        'about.li1': 'Growing as a Technical Support Engineer at PT Adi Media Expertindo',
        'about.li2': 'Improving OCR systems for industrial code recognition and validation',
        'about.li3': 'Exploring opportunities in ML, data science, and full-stack development',
        'about.li4': 'Sharing knowledge through community service and mentorship',
        'about.stat.gpa': 'Final GPA',
        'about.stat.certs': 'Certificates',
        'about.stat.members': 'Members Led',
        'about.stat.years': 'Years Coding',
        'experience.title': "Where I've Worked",
        'projects.title': "Things I've Built",
        'projects.filter.all': 'All',
        'projects.filter.ml': 'Machine Learning',
        'projects.filter.web': 'Web Dev',
        'projects.filter.design': 'Design',
        'playground.title': 'Try My ML Model',
        'playground.desc': 'A live image classifier running entirely in your browser using TensorFlow.js and MobileNet — the same kind of model architecture I worked with during Bangkit Academy. Upload any photo and the model will guess what it sees.',
        'playground.load': 'Load Model (~16 MB)',
        'playground.not_loaded': 'Model not loaded',
        'playground.loading': 'Loading model…',
        'playground.ready': 'Model ready — drop an image below',
        'playground.upload': 'Drop an image here or click to upload',
        'playground.upload.hint': 'PNG, JPG, WEBP — anything goes',
        'playground.examples': 'Or try one of these:',
        'playground.predictions': 'Top predictions',
        'playground.predicting': 'Predicting…',
        'playground.error': 'Could not load image. Try a different one.',
        'edu.uni.desc': 'Focused on machine learning, software engineering, and full-stack development. Active in student organizations and community service initiatives.',
        'edu.kkn.inst': 'Thematic Community Service Program',
        'edu.kkn.desc': 'Managed communication and PR for the program, created publication materials, and built strong relationships with residents and local stakeholders.',
        'edu.himatifa.desc': 'Oversaw all initiatives within the department, led community empowerment programs, and managed team development, fundraising, and resource allocation.',
        'edu.abdi.desc': 'Led a team of 28 in implementing community education programs on the importance of technology in the modern era. Conducted seminars and hands-on training to boost digital literacy.',
        'edu.sma.title': 'Senior High School (Science)',
        'edu.sma.desc': 'Served as Student Council Member for two terms, coordinated school events including national celebrations and inter-class competitions.',
        'education.title': 'Education & Leadership',
        'skills.title': 'Skills & Certificates',
        'skills.cat.programming': 'Programming',
        'skills.cat.frameworks': 'Frameworks & Tools',
        'skills.cat.ml': 'Machine Learning',
        'skills.cat.soft': 'Soft Skills',
        'skills.soft.1': 'Problem-solving',
        'skills.soft.2': 'Critical thinking',
        'skills.soft.3': 'Teamwork',
        'skills.soft.4': 'Leadership',
        'skills.soft.5': 'Project management',
        'skills.soft.6': 'Communication',
        'skills.certifications': 'Certifications',
        'contact.pretitle': "What's Next?",
        'contact.title': 'Get In Touch',
        'contact.description': "I'm currently working at PT Adi Media Expertindo and exploring next opportunities, but I'm always open to interesting conversations about machine learning, web development, or just a good cup of coffee. Whether you have a question, an opportunity, or just want to say hi — my inbox is open.",
        'contact.cta': 'Say Hello',
        'footer.credit': 'Designed & built by Abi Eka Putra Wulyono · Mojokerto, East Java',
        'tagline_rotation': ['the web.', 'ML models.', 'data pipelines.', 'experiences.'],
    },
    id: {
        'nav.about': 'Tentang',
        'nav.experience': 'Pengalaman',
        'nav.projects': 'Proyek',
        'nav.playground': 'Demo ML',
        'nav.education': 'Pendidikan',
        'nav.skills': 'Keahlian',
        'nav.contact': 'Kontak',
        'hero.greeting': 'Halo, nama saya',
        'hero.tagline.start': 'Saya membangun',
        'hero.description': 'Saya seorang Fresh Graduate Software Engineer dari Jawa Timur, Indonesia, dengan fokus pada machine learning, data science, dan pengembangan web full-stack. Saat ini bekerja sebagai Technical Support Engineer di PT Adi Media Expertindo dan terbuka untuk peluang untuk berkembang, belajar, dan menciptakan dampak yang berarti.',
        'hero.cta.work': 'Lihat Karya Saya',
        'hero.cta.resume': 'Unduh Resume',
        'hero.working_on': 'Terbuka untuk peluang',
        'hero.working_on.value': 'OCR systems @ Adi Media',
        'about.title': 'Tentang Saya',
        'about.p1': 'Halo! Saya Abi, seorang Fresh Graduate Software Engineer dari Universitas Pembangunan Nasional Veteran Jawa Timur, tempat saya menyelesaikan S1 Informatika dengan IPK 3.90/4.00. Perjalanan saya di dunia teknologi berawal dari rasa ingin tahu dan kini berkembang menjadi gairah untuk menyelesaikan masalah dunia nyata melalui kode.',
        'about.p2': 'Saya terpilih sebagai Machine Learning Cohort di Bangkit Academy 2024, program yang dipimpin oleh Google, GoTo, dan Traveloka, di mana saya mengembangkan AWAIR — aplikasi Android berbasis AI yang memprediksi Air Quality Index menggunakan TensorFlow dan Google Cloud Platform.',
        'about.p3': 'Di luar dunia akademik, saya menjalankan kedai kopi kecil di Mojokerto, yang mengajarkan saya tentang konsistensi, fokus ke pelanggan, dan cara berpikir entrepreneur. Saat ini saya fokus pada:',
        'about.li1': 'Berkembang sebagai Technical Support Engineer di PT Adi Media Expertindo',
        'about.li2': 'Meningkatkan sistem OCR untuk pengenalan dan validasi kode industri',
        'about.li3': 'Menjelajahi peluang di bidang ML, data science, dan full-stack development',
        'about.li4': 'Berbagi pengetahuan melalui pengabdian masyarakat dan mentoring',
        'about.stat.gpa': 'IPK Akhir',
        'about.stat.certs': 'Sertifikat',
        'about.stat.members': 'Anggota Dipimpin',
        'about.stat.years': 'Tahun Coding',
        'experience.title': 'Tempat Saya Bekerja',
        'projects.title': 'Karya yang Saya Buat',
        'projects.filter.all': 'Semua',
        'projects.filter.ml': 'Machine Learning',
        'projects.filter.web': 'Web Dev',
        'projects.filter.design': 'Desain',
        'playground.title': 'Coba Model ML Saya',
        'playground.desc': 'Image classifier yang berjalan langsung di browser kamu menggunakan TensorFlow.js dan MobileNet — arsitektur model serupa dengan yang saya pelajari di Bangkit Academy. Upload foto apapun dan model akan menebak isinya.',
        'playground.load': 'Muat Model (~16 MB)',
        'playground.not_loaded': 'Model belum dimuat',
        'playground.loading': 'Memuat model…',
        'playground.ready': 'Model siap — letakkan gambar di bawah',
        'playground.upload': 'Letakkan gambar di sini atau klik untuk upload',
        'playground.upload.hint': 'PNG, JPG, WEBP — apa saja boleh',
        'playground.examples': 'Atau coba salah satu ini:',
        'playground.predictions': 'Prediksi teratas',
        'playground.predicting': 'Memprediksi…',
        'playground.error': 'Gagal memuat gambar. Coba yang lain.',
        'edu.uni.desc': 'Fokus pada machine learning, software engineering, dan full-stack development. Aktif di organisasi mahasiswa dan kegiatan pengabdian masyarakat.',
        'edu.kkn.inst': 'Program Kuliah Kerja Nyata Tematik',
        'edu.kkn.desc': 'Mengelola komunikasi dan hubungan masyarakat untuk program, membuat materi publikasi, dan membangun hubungan dengan warga serta stakeholder lokal.',
        'edu.himatifa.desc': 'Mengawasi seluruh inisiatif di departemen, memimpin program pemberdayaan masyarakat, serta mengelola pengembangan tim, penggalangan dana, dan alokasi sumber daya.',
        'edu.abdi.desc': 'Memimpin tim beranggotakan 28 orang dalam menjalankan program edukasi masyarakat tentang pentingnya teknologi di era modern. Mengadakan seminar dan pelatihan langsung untuk meningkatkan literasi digital.',
        'edu.sma.title': 'Sekolah Menengah Atas (IPA)',
        'edu.sma.desc': 'Menjadi anggota OSIS selama dua periode, mengoordinasikan kegiatan sekolah termasuk peringatan hari nasional dan lomba antar-kelas.',
        'education.title': 'Pendidikan & Kepemimpinan',
        'skills.title': 'Keahlian & Sertifikat',
        'skills.cat.programming': 'Pemrograman',
        'skills.cat.frameworks': 'Framework & Tools',
        'skills.cat.ml': 'Machine Learning',
        'skills.cat.soft': 'Soft Skills',
        'skills.soft.1': 'Problem-solving',
        'skills.soft.2': 'Berpikir kritis',
        'skills.soft.3': 'Kerja sama tim',
        'skills.soft.4': 'Kepemimpinan',
        'skills.soft.5': 'Manajemen proyek',
        'skills.soft.6': 'Komunikasi',
        'skills.certifications': 'Sertifikasi',
        'contact.pretitle': 'Apa Selanjutnya?',
        'contact.title': 'Hubungi Saya',
        'contact.description': 'Saat ini saya bekerja di PT Adi Media Expertindo dan menjajaki peluang berikutnya, tapi saya selalu terbuka untuk obrolan menarik soal machine learning, web development, atau sekadar secangkir kopi yang enak. Mau bertanya, ada peluang, atau cuma mau menyapa — inbox saya selalu terbuka.',
        'contact.cta': 'Sapa Saya',
        'footer.credit': 'Dirancang & dibangun oleh Abi Eka Putra Wulyono · Mojokerto, Jawa Timur',
        'tagline_rotation': ['web.', 'model ML.', 'data pipeline.', 'pengalaman.'],
    },
};

/* ---------- Language toggle ---------- */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = translations[lang][key];
        if (val) el.textContent = val;
    });
    const langBtn = $('.lang-current');
    if (langBtn) langBtn.textContent = lang === 'en' ? 'EN' : 'ID';
    const typeTarget = $('.type-target');
    if (typeTarget) typeTarget.dataset.rotate = JSON.stringify(translations[lang].tagline_rotation);
}

function initLangToggle() {
    applyLanguage(currentLang);
    $('.lang-toggle')?.addEventListener('click', () => {
        applyLanguage(currentLang === 'en' ? 'id' : 'en');
    });
}

/* ---------- Theme toggle ---------- */
function initThemeToggle() {
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.dataset.theme = saved;
    $('.theme-toggle')?.addEventListener('click', () => {
        const current = document.documentElement.dataset.theme || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem('theme', next);
    });
}

/* ---------- Navbar scroll & mobile menu ---------- */
function initNavbar() {
    const navbar = $('.navbar');
    const navToggle = $('.nav-toggle');
    const navMenu = $('.nav-menu');
    const navLinks = $$('.nav-menu a');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    const setMenuOpen = (open) => {
        navMenu.classList.toggle('open', open);
        navToggle.classList.toggle('open', open);
        document.body.classList.toggle('nav-open', open);
        navToggle.setAttribute('aria-expanded', String(open));
    };

    navToggle.addEventListener('click', () => setMenuOpen(!navMenu.classList.contains('open')));
    navLinks.forEach(l => l.addEventListener('click', () => setMenuOpen(false)));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMenuOpen(false);
    });

    const sections = $$('section[id], header[id]');
    const setActiveLink = () => {
        const y = window.scrollY + 140;
        sections.forEach(section => {
            const link = $(`.nav-menu a[href="#${section.id}"]`);
            if (!link) return;
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (y >= top && y < bottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', setActiveLink, { passive: true });
}

/* ---------- Tabs (Experience) ---------- */
function initTabs() {
    const tabs = $$('.tab');
    const contents = $$('.tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            $(`[data-content="${target}"]`)?.classList.add('active');
        });
    });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
    const revealEls = $$(
        '.section-title, .about-text, .about-stats, .experience-container, ' +
        '.project-card, .timeline-item, .skill-category, .certificates, ' +
        '.contact-pretitle, .contact-title, .contact-description, .contact .btn, ' +
        '.playground-desc, .ml-demo, .project-filters'
    );
    revealEls.forEach(el => el.classList.add('reveal'));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(el => observer.observe(el));
}

/* ---------- Scroll progress bar ---------- */
function initScrollProgress() {
    const bar = $('.scroll-progress');
    if (!bar) return;
    const update = () => {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const pct = total > 0 ? (scrolled / total) * 100 : 0;
        bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
}

/* ---------- Typewriter ---------- */
function initTypewriter() {
    const target = $('.type-target');
    if (!target || reduceMotion) return;
    let phrases = [];
    try { phrases = JSON.parse(target.dataset.rotate); } catch (e) {}
    if (!phrases.length) return;

    let i = 0, j = 0, deleting = false;

    const tick = () => {
        phrases = JSON.parse(target.dataset.rotate);
        const word = phrases[i % phrases.length];
        if (!deleting) {
            target.textContent = word.slice(0, j++);
            if (j > word.length) {
                deleting = true;
                setTimeout(tick, 1800);
                return;
            }
            setTimeout(tick, 70 + Math.random() * 50);
        } else {
            target.textContent = word.slice(0, j--);
            if (j === 0) {
                deleting = false;
                i++;
            }
            setTimeout(tick, 35);
        }
    };
    tick();
}

/* ---------- Stat counters ---------- */
function initCounters() {
    const counters = $$('[data-count-to]');
    if (!counters.length) return;

    const animate = (el) => {
        const target = parseFloat(el.dataset.countTo);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();
        const startVal = 0;
        const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = startVal + (target - startVal) * eased;
            el.textContent = current.toFixed(decimals) + suffix;
            if (t < 1) requestAnimationFrame(step);
            else el.textContent = target.toFixed(decimals) + suffix;
        };
        requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
}

/* ---------- Custom cursor + spotlight ---------- */
function initCursor() {
    if (isTouch || reduceMotion) return;
    const dot = $('.cursor-dot');
    const ring = $('.cursor-ring');
    const spotlight = $('.cursor-spotlight');
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let sx = mx, sy = my;

    const onMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
        document.body.classList.add('cursor-active');
    };

    const animate = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        sx += (mx - sx) * 0.08;
        sy += (my - sy) * 0.08;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
        spotlight.style.transform = `translate3d(${sx}px, ${sy}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(animate);
    };
    animate();
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));

    const hoverables = 'a, button, .btn, .tab, .filter-pill, .ctrl-btn, .project-card, .stat-card, .upload-area, .example-btn, input, label';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverables)) document.body.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverables)) document.body.classList.remove('cursor-hover');
    });
}

/* ---------- Magnetic buttons ---------- */
function initMagnetic() {
    if (isTouch || reduceMotion) return;
    const els = $$('.magnetic');
    els.forEach(el => {
        const strength = 0.35;
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) * strength;
            const dy = (e.clientY - cy) * strength;
            el.style.transform = `translate(${dx}px, ${dy}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

/* ---------- 3D tilt ---------- */
function initTilt() {
    if (isTouch || reduceMotion) return;
    const els = $$('[data-tilt]');
    els.forEach(el => {
        const max = parseFloat(el.dataset.tiltStrength || '8');
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateY = (x - 0.5) * max * 2;
            const rotateX = (0.5 - y) * max * 2;
            el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

/* ---------- Project filter ---------- */
function initProjectFilter() {
    const pills = $$('.filter-pill');
    const cards = $$('.project-card[data-category]');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const filter = pill.dataset.filter;
            cards.forEach(card => {
                const matches = filter === 'all' || card.dataset.category === filter;
                card.classList.toggle('is-hidden', !matches);
            });
        });
    });
}

/* ---------- Timeline progress draw-in ---------- */
function initTimelineProgress() {
    const timeline = $('.timeline');
    const progress = $('.timeline-progress');
    const items = $$('.timeline-item');
    if (!timeline || !progress) return;

    const update = () => {
        const rect = timeline.getBoundingClientRect();
        const visible = Math.min(window.innerHeight - rect.top - 100, rect.height);
        const height = Math.max(0, Math.min(visible, rect.height));
        progress.style.height = height + 'px';

        items.forEach(item => {
            const marker = item.querySelector('.timeline-marker');
            if (!marker) return;
            const mRect = marker.getBoundingClientRect();
            const passed = mRect.top < window.innerHeight - 150;
            item.classList.toggle('reached', passed);
        });
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
}

/* ---------- Console easter egg ---------- */
function initConsoleEgg() {
    const css = 'color: #64ffda; font-family: monospace; font-size: 12px;';
    const cssBig = 'color: #64ffda; font-family: monospace; font-size: 14px; font-weight: bold;';
    console.log('%c☕ Hi there!', cssBig);
    console.log('%cLooks like you popped open DevTools. Welcome behind the curtain.', css);
    console.log('%c\nThis site is hand-built with vanilla HTML, CSS, and JavaScript — no frameworks.', css);
    console.log('%cIf you spot something to improve or want to say hi:', css);
    console.log('%c  📧 abiekapw@gmail.com', cssBig);
    console.log('%c  🐙 github.com/abiekaputra', cssBig);
    console.log('%c  💼 linkedin.com/in/abiekaputrawulyono\n', cssBig);
    console.log('%c💡 Tip: try the Konami code (↑↑↓↓←→←→BA) for a surprise.', css);
}

/* ---------- Konami code ---------- */
function initKonami() {
    const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let i = 0;
    document.addEventListener('keydown', (e) => {
        const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (key === seq[i]) {
            i++;
            if (i === seq.length) {
                triggerKonami();
                i = 0;
            }
        } else {
            i = key === seq[0] ? 1 : 0;
        }
    });
}

function triggerKonami() {
    const overlay = $('.konami-overlay');
    if (!overlay) return;
    overlay.classList.add('active');
    spawnConfetti();
    setTimeout(() => overlay.classList.remove('active'), 4500);
}

function spawnConfetti() {
    const colors = ['#64ffda', '#facc15', '#f87171', '#4ade80', '#a78bfa', '#fb923c'];
    const count = 80;
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * window.innerWidth + 'px';
        piece.style.top = '-20px';
        piece.style.background = colors[i % colors.length];
        piece.style.borderRadius = Math.random() > 0.5 ? '2px' : '50%';
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(piece);

        const xDrift = (Math.random() - 0.5) * 400;
        const rotation = Math.random() * 720;
        const duration = 2000 + Math.random() * 1500;

        piece.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${xDrift}px, ${window.innerHeight + 50}px) rotate(${rotation}deg)`, opacity: 0 }
        ], {
            duration,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'forwards'
        }).onfinish = () => piece.remove();
    }
}

/* ---------- ML Demo (TF.js + MobileNet) ---------- */
function initMLDemo() {
    const loadBtn = $('#load-model');
    const status = $('#model-status');
    const statusText = status.querySelector('.status-text');
    const workspace = $('#ml-workspace');
    const uploadArea = $('#upload-area');
    const fileInput = $('#image-input');
    const preview = $('#result-preview');
    const result = $('#ml-result');
    const list = $('#prediction-list');
    const meta = $('#prediction-meta');

    let model = null;
    let loading = false;

    const setStatus = (mode, key) => {
        status.classList.remove('loading', 'ready', 'error');
        if (mode) status.classList.add(mode);
        const txt = translations[currentLang][key] || translations.en[key] || key;
        statusText.textContent = txt;
    };

    const loadScript = (src) => new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });

    const loadModel = async () => {
        if (model || loading) return;
        loading = true;
        loadBtn.disabled = true;
        setStatus('loading', 'playground.loading');
        try {
            if (typeof tf === 'undefined') {
                await loadScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js');
            }
            if (typeof mobilenet === 'undefined') {
                await loadScript('https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.1.1/dist/mobilenet.min.js');
            }
            model = await mobilenet.load({ version: 2, alpha: 1.0 });
            setStatus('ready', 'playground.ready');
            loadBtn.hidden = true;
            workspace.hidden = false;
        } catch (err) {
            console.error(err);
            setStatus('error', 'playground.error');
            loadBtn.disabled = false;
        } finally {
            loading = false;
        }
    };

    const predict = async (imgEl) => {
        if (!model) return;
        preview.src = imgEl.src;
        result.hidden = false;
        list.innerHTML = '';
        meta.textContent = translations[currentLang]['playground.predicting'] || 'Predicting…';

        try {
            await new Promise((res) => {
                if (imgEl.complete && imgEl.naturalWidth > 0) res();
                else {
                    imgEl.onload = res;
                    imgEl.onerror = res;
                }
            });
            const t0 = performance.now();
            const predictions = await model.classify(imgEl, 5);
            const ms = Math.round(performance.now() - t0);

            list.innerHTML = '';
            predictions.forEach((p, idx) => {
                const li = document.createElement('li');
                li.className = 'prediction-item';
                const pct = (p.probability * 100).toFixed(1);
                li.innerHTML = `
                    <div class="prediction-head">
                        <span class="prediction-name">${p.className.split(',')[0]}</span>
                        <span class="prediction-pct">${pct}%</span>
                    </div>
                    <div class="prediction-bar"><div class="prediction-fill"></div></div>
                `;
                list.appendChild(li);
                requestAnimationFrame(() => {
                    li.querySelector('.prediction-fill').style.width = pct + '%';
                });
            });
            meta.textContent = `MobileNet v2 · ${ms} ms · ${currentLang === 'id' ? 'di browser' : 'on-device'}`;
        } catch (err) {
            console.error(err);
            meta.textContent = translations[currentLang]['playground.error'] || 'Error';
        }
    };

    const handleFile = (file) => {
        if (!file || !file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = e.target.result;
            img.onload = () => predict(img);
        };
        reader.readAsDataURL(file);
    };

    const handleExampleURL = (url) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = url;
        img.onload = () => predict(img);
        img.onerror = () => {
            meta.textContent = translations[currentLang]['playground.error'] || 'Error';
        };
    };

    loadBtn.addEventListener('click', loadModel);

    fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));

    ['dragenter', 'dragover'].forEach(evt =>
        uploadArea.addEventListener(evt, (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        })
    );
    ['dragleave', 'drop'].forEach(evt =>
        uploadArea.addEventListener(evt, (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
        })
    );
    uploadArea.addEventListener('drop', (e) => {
        const file = e.dataTransfer.files[0];
        handleFile(file);
    });

    $$('.example-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.dataset.exampleUrl;
            handleExampleURL(url);
        });
    });
}

/* ---------- Init all ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initLangToggle();
    initThemeToggle();
    initNavbar();
    initTabs();
    initReveal();
    initScrollProgress();
    initTypewriter();
    initCounters();
    initCursor();
    initMagnetic();
    initTilt();
    initProjectFilter();
    initTimelineProgress();
    initConsoleEgg();
    initKonami();
    initMLDemo();
});
