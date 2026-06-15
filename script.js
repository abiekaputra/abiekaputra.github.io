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
        'playground.title': 'Try My ML Models',
        'playground.desc': 'Four live ML demos running entirely in your browser using TensorFlow.js — no backend, no data leaves your device. The same kind of model architectures I worked with during Bangkit Academy. Pick a demo, load the model, and try it out.',
        'ml.tab.classifier': 'Image Classifier',
        'ml.tab.detector': 'Object Detection',
        'ml.tab.toxicity': 'Text Toxicity',
        'ml.tab.webcam': 'Live Webcam',
        'ml.classifier.title': 'Image Classifier · MobileNet v2',
        'ml.classifier.desc': 'Upload a photo and get the top 5 guesses across 1,000 ImageNet classes.',
        'ml.detector.title': 'Object Detection · COCO-SSD',
        'ml.detector.desc': 'Find and draw boxes around 80 different object types — people, animals, vehicles, food, and more.',
        'ml.toxicity.title': 'Text Toxicity · BERT-lite',
        'ml.toxicity.desc': 'Type any sentence and the model rates it across 7 toxicity dimensions. Useful for content moderation.',
        'ml.webcam.title': 'Live Webcam · MobileNet',
        'ml.webcam.desc': 'Point your camera at anything — the model classifies what it sees in real-time, ~10 frames per second.',
        'ml.load_13': 'Load Model (~13 MB)',
        'ml.load_16': 'Load Model (~16 MB)',
        'ml.load_28': 'Load Model (~28 MB)',
        'ml.not_loaded': 'Model not loaded',
        'ml.loading': 'Loading model…',
        'ml.ready.classifier': 'Model ready — drop an image below',
        'ml.ready.detector': 'Model ready — drop an image below',
        'ml.ready.toxicity': 'Model ready — type something',
        'ml.ready.webcam': 'Model ready — start your camera',
        'ml.upload.classify': 'Drop an image here or click to upload',
        'ml.upload.detect': 'Drop an image with objects you want to detect',
        'ml.upload.hint': 'PNG, JPG, WEBP — anything goes',
        'ml.examples': 'Or try one of these:',
        'ml.top_preds': 'Top predictions',
        'ml.predicting': 'Predicting…',
        'ml.analyzing': 'Analyzing…',
        'ml.error': 'Error during prediction',
        'ml.objects_found': 'Objects detected',
        'ml.objects_count': 'objects detected',
        'ml.on_device': 'on-device',
        'ml.live': 'live',
        'ml.analyze': 'Analyze',
        'ml.toxicity.placeholder': 'Type a sentence to analyze...',
        'ml.tox.ex.nice': 'Nice comment',
        'ml.tox.ex.mean': 'Mean comment',
        'ml.tox.ex.neutral': 'Neutral',
        'ml.tox.scores': 'Toxicity scores',
        'ml.cam.start': 'Start Camera',
        'ml.cam.stop': 'Stop Camera',
        'ml.cam.permission': 'Browser will ask for camera permission. Nothing leaves your device.',
        'ml.cam.denied': 'Camera access denied or unavailable',
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
        'playground.desc': 'Empat demo ML yang berjalan langsung di browser kamu menggunakan TensorFlow.js — tanpa backend, tanpa data yang keluar dari device kamu. Arsitektur model serupa dengan yang saya pelajari di Bangkit Academy. Pilih demo, muat modelnya, dan coba.',
        'ml.tab.classifier': 'Image Classifier',
        'ml.tab.detector': 'Object Detection',
        'ml.tab.toxicity': 'Text Toxicity',
        'ml.tab.webcam': 'Webcam Live',
        'ml.classifier.title': 'Image Classifier · MobileNet v2',
        'ml.classifier.desc': 'Upload foto dan dapatkan 5 prediksi teratas dari 1.000 kelas ImageNet.',
        'ml.detector.title': 'Object Detection · COCO-SSD',
        'ml.detector.desc': 'Deteksi & gambar kotak di sekitar 80 jenis objek — orang, hewan, kendaraan, makanan, dan lainnya.',
        'ml.toxicity.title': 'Text Toxicity · BERT-lite',
        'ml.toxicity.desc': 'Ketik kalimat dan model akan menilai 7 dimensi toxicity. Berguna untuk moderasi konten.',
        'ml.webcam.title': 'Webcam Live · MobileNet',
        'ml.webcam.desc': 'Arahkan kamera ke objek apapun — model akan classify secara real-time, ~10 frame per detik.',
        'ml.load_13': 'Muat Model (~13 MB)',
        'ml.load_16': 'Muat Model (~16 MB)',
        'ml.load_28': 'Muat Model (~28 MB)',
        'ml.not_loaded': 'Model belum dimuat',
        'ml.loading': 'Memuat model…',
        'ml.ready.classifier': 'Model siap — letakkan gambar di bawah',
        'ml.ready.detector': 'Model siap — letakkan gambar di bawah',
        'ml.ready.toxicity': 'Model siap — ketik sesuatu',
        'ml.ready.webcam': 'Model siap — mulai kamera kamu',
        'ml.upload.classify': 'Letakkan gambar di sini atau klik untuk upload',
        'ml.upload.detect': 'Letakkan gambar dengan objek yang mau dideteksi',
        'ml.upload.hint': 'PNG, JPG, WEBP — apa saja boleh',
        'ml.examples': 'Atau coba salah satu ini:',
        'ml.top_preds': 'Prediksi teratas',
        'ml.predicting': 'Memprediksi…',
        'ml.analyzing': 'Menganalisis…',
        'ml.error': 'Error saat prediksi',
        'ml.objects_found': 'Objek terdeteksi',
        'ml.objects_count': 'objek terdeteksi',
        'ml.on_device': 'di browser',
        'ml.live': 'live',
        'ml.analyze': 'Analisis',
        'ml.toxicity.placeholder': 'Ketik kalimat untuk dianalisis...',
        'ml.tox.ex.nice': 'Komentar baik',
        'ml.tox.ex.mean': 'Komentar kasar',
        'ml.tox.ex.neutral': 'Netral',
        'ml.tox.scores': 'Skor toxicity',
        'ml.cam.start': 'Mulai Kamera',
        'ml.cam.stop': 'Hentikan Kamera',
        'ml.cam.permission': 'Browser akan minta izin akses kamera. Tidak ada data yang keluar dari device.',
        'ml.cam.denied': 'Akses kamera ditolak atau tidak tersedia',
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
    $$('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const val = translations[lang][key];
        if (val) el.placeholder = val;
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

/* ---------- ML Playground (4 demos) ---------- */
const loadScript = (src) => new Promise((resolve, reject) => {
    if (Array.from(document.scripts).some(s => s.src === src)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
});

const ML_CDN = {
    tf: 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js',
    mobilenet: 'https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.1.1/dist/mobilenet.min.js',
    cocoSsd: 'https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.2/dist/coco-ssd.min.js',
    toxicity: 'https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity@1.2.2/dist/toxicity.min.js',
};

const mlState = {
    mobilenet: null,
    cocoSsd: null,
    toxicity: null,
    webcamStream: null,
    webcamRaf: null,
};

const t = (key, fallback) => translations[currentLang]?.[key] || translations.en[key] || fallback || key;

function setPanelStatus(panel, mode, key) {
    const s = $(`[data-status="${panel}"]`);
    if (!s) return;
    s.classList.remove('loading', 'ready', 'error');
    if (mode) s.classList.add(mode);
    s.querySelector('.status-text').textContent = t(key, key);
}

function renderBars(listEl, items, options = {}) {
    listEl.innerHTML = '';
    items.forEach(({ name, value, levelClass }) => {
        const li = document.createElement('li');
        li.className = 'prediction-item' + (levelClass ? ' ' + levelClass : '');
        const pct = (value * 100).toFixed(1);
        li.innerHTML = `
            <div class="prediction-head">
                <span class="prediction-name">${name}</span>
                <span class="prediction-pct">${pct}%</span>
            </div>
            <div class="prediction-bar"><div class="prediction-fill"></div></div>
        `;
        listEl.appendChild(li);
        requestAnimationFrame(() => {
            li.querySelector('.prediction-fill').style.width = pct + '%';
        });
    });
}

/* ---------- Demo: Image Classifier ---------- */
async function loadMobileNet() {
    if (mlState.mobilenet) return mlState.mobilenet;
    await loadScript(ML_CDN.tf);
    await loadScript(ML_CDN.mobilenet);
    mlState.mobilenet = await mobilenet.load({ version: 2, alpha: 1.0 });
    return mlState.mobilenet;
}

async function runClassifier(imgEl) {
    const list = $('[data-list="classifier"]');
    const meta = $('[data-meta="classifier"]');
    const preview = $('[data-preview="classifier"]');
    const result = $('[data-result="classifier"]');

    preview.src = imgEl.src;
    result.hidden = false;
    meta.textContent = t('ml.predicting', 'Predicting…');

    try {
        await new Promise(res => {
            if (imgEl.complete && imgEl.naturalWidth > 0) res();
            else { imgEl.onload = res; imgEl.onerror = res; }
        });
        const t0 = performance.now();
        const preds = await mlState.mobilenet.classify(imgEl, 5);
        const ms = Math.round(performance.now() - t0);
        renderBars(list, preds.map(p => ({ name: p.className.split(',')[0], value: p.probability })));
        meta.textContent = `MobileNet v2 · ${ms} ms · ${t('ml.on_device', 'on-device')}`;
    } catch (err) {
        console.error(err);
        meta.textContent = t('ml.error', 'Error during prediction');
    }
}

/* ---------- Demo: Object Detection ---------- */
async function loadCocoSsd() {
    if (mlState.cocoSsd) return mlState.cocoSsd;
    await loadScript(ML_CDN.tf);
    await loadScript(ML_CDN.cocoSsd);
    mlState.cocoSsd = await cocoSsd.load();
    return mlState.cocoSsd;
}

async function runDetector(imgEl) {
    const canvas = $('[data-canvas="detector"]');
    const list = $('[data-list="detector"]');
    const meta = $('[data-meta="detector"]');
    const result = $('[data-result="detector"]');

    result.hidden = false;
    meta.textContent = t('ml.predicting', 'Predicting…');

    try {
        await new Promise(res => {
            if (imgEl.complete && imgEl.naturalWidth > 0) res();
            else { imgEl.onload = res; imgEl.onerror = res; }
        });

        const maxDim = 640;
        const scale = Math.min(maxDim / imgEl.naturalWidth, maxDim / imgEl.naturalHeight, 1);
        canvas.width = Math.round(imgEl.naturalWidth * scale);
        canvas.height = Math.round(imgEl.naturalHeight * scale);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imgEl, 0, 0, canvas.width, canvas.height);

        const t0 = performance.now();
        const predictions = await mlState.cocoSsd.detect(imgEl);
        const ms = Math.round(performance.now() - t0);

        ctx.lineWidth = 2;
        ctx.font = '14px JetBrains Mono, monospace';
        const palette = ['#64ffda', '#facc15', '#f87171', '#a78bfa', '#fb923c', '#4ade80'];
        predictions.forEach((p, i) => {
            const color = palette[i % palette.length];
            const [x, y, w, h] = p.bbox.map(v => v * scale);
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.strokeRect(x, y, w, h);
            const label = `${p.class} ${(p.score * 100).toFixed(0)}%`;
            const labelW = ctx.measureText(label).width + 10;
            ctx.fillRect(x, Math.max(y - 22, 0), labelW, 20);
            ctx.fillStyle = '#0a0e1a';
            ctx.fillText(label, x + 5, Math.max(y - 7, 13));
        });

        renderBars(list, predictions.slice(0, 8).map(p => ({ name: p.class, value: p.score })));
        meta.textContent = `COCO-SSD · ${ms} ms · ${predictions.length} ${t('ml.objects_count', 'objects detected')}`;
    } catch (err) {
        console.error(err);
        meta.textContent = t('ml.error', 'Error during prediction');
    }
}

/* ---------- Demo: Text Toxicity ---------- */
async function loadToxicity() {
    if (mlState.toxicity) return mlState.toxicity;
    await loadScript(ML_CDN.tf);
    await loadScript(ML_CDN.toxicity);
    mlState.toxicity = await toxicity.load(0.5);
    return mlState.toxicity;
}

async function runToxicity(text) {
    const list = $('[data-list="toxicity"]');
    const meta = $('[data-meta="toxicity"]');
    const result = $('[data-result="toxicity"]');
    if (!text.trim()) return;

    result.hidden = false;
    meta.textContent = t('ml.analyzing', 'Analyzing…');
    try {
        const t0 = performance.now();
        const preds = await mlState.toxicity.classify([text]);
        const ms = Math.round(performance.now() - t0);
        const labelMap = {
            'toxicity': 'Toxicity',
            'severe_toxicity': 'Severe Toxicity',
            'identity_attack': 'Identity Attack',
            'insult': 'Insult',
            'threat': 'Threat',
            'sexual_explicit': 'Sexual Explicit',
            'obscene': 'Obscene',
        };
        const items = preds.map(p => {
            const score = p.results[0].probabilities[1];
            const levelClass = score >= 0.7 ? 'high' : score >= 0.4 ? 'medium' : 'low';
            return { name: labelMap[p.label] || p.label, value: score, levelClass };
        }).sort((a, b) => b.value - a.value);
        renderBars(list, items);
        meta.textContent = `Toxicity BERT · ${ms} ms · ${t('ml.on_device', 'on-device')}`;
    } catch (err) {
        console.error(err);
        meta.textContent = t('ml.error', 'Error during prediction');
    }
}

/* ---------- Demo: Webcam ---------- */
async function startWebcam() {
    const video = $('[data-video="webcam"]');
    const result = $('[data-result="webcam"]');
    const startBtn = $('[data-cam="start"]');
    const stopBtn = $('[data-cam="stop"]');
    try {
        mlState.webcamStream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 }, audio: false });
        video.srcObject = mlState.webcamStream;
        result.hidden = false;
        startBtn.hidden = true;
        stopBtn.hidden = false;

        const list = $('[data-list="webcam"]');
        const meta = $('[data-meta="webcam"]');
        let lastFrame = 0;
        const loop = async (now) => {
            if (!mlState.webcamStream) return;
            if (now - lastFrame > 100) {
                lastFrame = now;
                try {
                    const t0 = performance.now();
                    const preds = await mlState.mobilenet.classify(video, 3);
                    const ms = Math.round(performance.now() - t0);
                    renderBars(list, preds.map(p => ({ name: p.className.split(',')[0], value: p.probability })));
                    meta.textContent = `MobileNet v2 · ${ms} ms/frame · ${t('ml.live', 'live')}`;
                } catch (e) {}
            }
            mlState.webcamRaf = requestAnimationFrame(loop);
        };
        mlState.webcamRaf = requestAnimationFrame(loop);
    } catch (err) {
        console.error(err);
        setPanelStatus('webcam', 'error', 'ml.cam.denied');
    }
}

function stopWebcam() {
    if (mlState.webcamStream) {
        mlState.webcamStream.getTracks().forEach(tr => tr.stop());
        mlState.webcamStream = null;
    }
    if (mlState.webcamRaf) {
        cancelAnimationFrame(mlState.webcamRaf);
        mlState.webcamRaf = null;
    }
    const video = $('[data-video="webcam"]');
    if (video) video.srcObject = null;
    $('[data-cam="start"]').hidden = false;
    $('[data-cam="stop"]').hidden = true;
    $('[data-result="webcam"]').hidden = true;
}

/* ---------- Image upload helpers (shared) ---------- */
function attachImageHandlers(panel, runner) {
    const upload = $(`[data-upload="${panel}"]`);
    const input = upload.querySelector('input[type="file"]');
    upload.addEventListener('click', () => input.click());

    const handleFile = (file) => {
        if (!file || !file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => runner(img);
        };
        reader.readAsDataURL(file);
    };

    input.addEventListener('change', (e) => handleFile(e.target.files[0]));

    ['dragenter', 'dragover'].forEach(evt =>
        upload.addEventListener(evt, (e) => { e.preventDefault(); upload.classList.add('dragover'); })
    );
    ['dragleave', 'drop'].forEach(evt =>
        upload.addEventListener(evt, (e) => { e.preventDefault(); upload.classList.remove('dragover'); })
    );
    upload.addEventListener('drop', (e) => handleFile(e.dataTransfer.files[0]));

    $$(`[data-panel="${panel}"]`).forEach(btn => {
        btn.addEventListener('click', () => {
            const img = new Image();
            img.src = btn.dataset.exampleSrc;
            img.onload = () => runner(img);
        });
    });
}

/* ---------- Tab switcher + init ---------- */
function initMLPlayground() {
    if (!$('.ml-tabs')) return;

    $$('.ml-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.mlTab;
            $$('.ml-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            $$('.ml-panel').forEach(p => {
                p.hidden = p.dataset.mlPanel !== target;
                p.classList.toggle('active', p.dataset.mlPanel === target);
            });
            if (target !== 'webcam') stopWebcam();
        });
    });

    const wireLoadButton = (panel, loader, key) => {
        const btn = $(`[data-load="${panel}"]`);
        if (!btn) return;
        btn.addEventListener('click', async () => {
            btn.disabled = true;
            setPanelStatus(panel, 'loading', 'ml.loading');
            try {
                await loader();
                setPanelStatus(panel, 'ready', key);
                btn.hidden = true;
                $(`[data-workspace="${panel}"]`).hidden = false;
            } catch (err) {
                console.error(err);
                setPanelStatus(panel, 'error', 'ml.error');
                btn.disabled = false;
            }
        });
    };

    wireLoadButton('classifier', loadMobileNet, 'ml.ready.classifier');
    wireLoadButton('detector', loadCocoSsd, 'ml.ready.detector');
    wireLoadButton('toxicity', loadToxicity, 'ml.ready.toxicity');
    wireLoadButton('webcam', loadMobileNet, 'ml.ready.webcam');

    attachImageHandlers('classifier', runClassifier);
    attachImageHandlers('detector', runDetector);

    const runBtn = $('[data-run="toxicity"]');
    const txtInput = $('[data-input="toxicity"]');
    if (runBtn && txtInput) {
        runBtn.addEventListener('click', () => runToxicity(txtInput.value));
        txtInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) runToxicity(txtInput.value);
        });
        $$('.text-example').forEach(btn => {
            btn.addEventListener('click', () => {
                txtInput.value = btn.dataset.text;
                runToxicity(btn.dataset.text);
            });
        });
    }

    $('[data-cam="start"]')?.addEventListener('click', startWebcam);
    $('[data-cam="stop"]')?.addEventListener('click', stopWebcam);
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
    initMLPlayground();
});
