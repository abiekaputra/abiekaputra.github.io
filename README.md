# abiekaputra.is-a.dev

> Personal portfolio of **Abi Eka Putra Wulyono** — Fresh Graduate Software Engineer focused on machine learning, data science, and full-stack web development. Based in East Java, Indonesia.

**🌐 Live**: <https://abiekaputra.is-a.dev>

---

## ✨ Highlights

- **4 live in-browser ML demos** — image classification, object detection, text toxicity, real-time webcam classification. All models run on-device via TensorFlow.js, zero backend.
- **Hand-crafted notebook aesthetic** — paper grid, marker highlights, polaroid avatar, sticky notes. Designed to feel less like a template, more like a working notebook.
- **Bilingual (EN / ID)** — full UI toggle with 80+ translation keys.
- **Dark / light theme** — paper notebook ↔ chalkboard variants.
- **Zero framework** — pure HTML, CSS, and vanilla JavaScript. No React, no build step, no bundler.
- **Mobile-first responsive** — verified across 320 / 360 / 375 / 412 / 768 / 1280 px viewports.

## 🧪 ML Playground

Each model lazy-loads from CDN only when the user activates its tab — keeping the initial page fast.

| Demo | Model | Library |
|---|---|---|
| Image Classifier | MobileNet v2 | `@tensorflow-models/mobilenet@2.1.1` |
| Object Detection | COCO-SSD | `@tensorflow-models/coco-ssd@2.2.2` |
| Text Toxicity | BERT-based toxicity | `@tensorflow-models/toxicity@1.2.2` |
| Live Webcam | MobileNet v2 + getUserMedia | shared MobileNet instance |

A modal busy overlay locks scroll during inference so the user's input doesn't stutter while TF.js works on the main thread.

## 🛠 Stack

| Layer | Choice |
|---|---|
| Markup | Vanilla HTML5 |
| Styles | Vanilla CSS (custom properties, container queries, ~4,000 lines) |
| Behavior | Vanilla JavaScript (modular IIFE pattern, ~900 lines) |
| Display font | [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) |
| Body font | [Spectral](https://fonts.google.com/specimen/Spectral) (humanist serif) |
| Mono font | [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |
| Handwritten accents | [Patrick Hand](https://fonts.google.com/specimen/Patrick+Hand) |
| ML runtime | [TensorFlow.js 4.22](https://www.tensorflow.org/js) |
| Host | GitHub Pages |
| Domain | [is-a.dev](https://www.is-a.dev/) (free dev community domain) |

## 🎯 Interactive features

- Typewriter tagline that cycles through "ML models / data pipelines / experiences"
- 3D tilt on project cards + avatar (`mousemove` → CSS transforms)
- Magnetic buttons that lean toward the cursor
- Scroll progress bar + cursor spotlight with mix-blend-mode
- Stat counters animate from 0 → target on viewport enter
- Project filter pills (All / Machine Learning / Web Dev / Design)
- Timeline draws itself in as you scroll past Education
- Konami code easter egg (↑↑↓↓←→←→BA) — confetti + a hidden message
- Console message for devs who pop open DevTools

All animations respect `prefers-reduced-motion`. Custom cursor and tilt effects auto-disable on touch devices.

## 🚀 Running locally

```bash
git clone https://github.com/abiekaputra/abiekaputra.github.io.git
cd abiekaputra.github.io
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. No build step required.

## 📂 Project structure

```
.
├── index.html                  # Single-page document
├── styles.css                  # All styles (theme variables, layouts, animations)
├── script.js                   # All behavior (i18n, ML demos, animations)
├── assets/examples/            # Sample images for the ML playground
└── Abi-Eka-Putra-Wulyono-resume.pdf
```

## 📫 Contact

- **Email**: abiekapw@gmail.com
- **LinkedIn**: [abiekaputrawulyono](https://linkedin.com/in/abiekaputrawulyono)
- **GitHub**: [@abiekaputra](https://github.com/abiekaputra)

## 📜 License

Code in this repo is released under the MIT License. Feel free to learn from it, fork it, remix it — just please don't copy it 1:1 as your own portfolio. Build your own story.
