# 🚀 CivicConnect – Multilingual Civic Issue Reporting App

## 📌 Project Overview

CivicConnect is a mobile-first **Progressive Web Application (PWA)** developed as part of the **Potens IT Services Frontend Internship Assessment (Q1 – Multilingual Civic-Style PWA)**.

The application enables users to report civic issues through a simple three-step workflow:

**Category → Details → Confirmation**

Users can:

- Select a complaint category
- Describe the issue using text or voice input
- Upload an image
- Submit the complaint
- Receive a unique complaint reference ID

The application supports **English** and **Marathi**, stores complaint data locally using **localStorage**, and can be installed as a **Progressive Web App (PWA)**.

---

# ✨ Features

- 🌐 English & Marathi Language Support
- 📱 Mobile-first Responsive Design
- 📋 Civic Issue Category Selection
- 🎤 Voice Input using Web Speech API
- 📷 Image Upload with Live Preview
- ✅ Client-side Form Validation
- 💾 Complaint Persistence using localStorage
- 📄 Complaint Confirmation Page with Reference ID
- 📱 Progressive Web App (PWA) Support
- 🎨 Responsive UI built using Tailwind CSS

---

# 🛠 Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router DOM
- React Icons
- Vite Plugin PWA
- Web Speech API
- Local Storage API

---

# ▶️ How to Run

Clone the repository

```bash
git clone https://github.com/Pranav29292/potens-intern-frontend-pranav-karande
```

Navigate into the project

```bash
cd potens-intern-frontend-pranav-karande
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📦 Production Build

Build the project

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---

# 🎨 Design Decisions

The application was designed with simplicity, accessibility, and maintainability in mind.

### Mobile-first Design

The interface is optimized for smartphones because civic complaints are commonly submitted using mobile devices.

### Simple Three-Step Workflow

The application follows a clear flow:

**Category → Details → Confirmation**

This minimizes user confusion and keeps navigation intuitive.

### React Router

React Router separates each screen into independent pages, improving modularity and maintainability.

### Tailwind CSS

Tailwind CSS enables rapid development while maintaining a consistent and responsive user interface.

### Local Storage

Complaint data is stored locally because the assessment does not require a backend implementation.

### Multilingual Support

A centralized translations object allows the interface to switch seamlessly between English and Marathi.

### Voice Input

The Web Speech API was integrated to improve accessibility and reduce typing effort.

### Progressive Web App

The application is configured as a Progressive Web App using **Vite Plugin PWA**, allowing users to install it for a more app-like experience.

---

# 📂 Project Structure

```text
potens-intern-frontend-pranav-karande/
│
├── public/
│   ├── favicon.svg
│   ├── icon-192.png
│   ├── icon-512.png
│
├── src/
│   ├── assets/
│   ├── data/
│   │   └── translations.js
│   ├── hooks/
│   │   └── useSpeech.js
│   ├── pages/
│   │   ├── Category.jsx
│   │   ├── Details.jsx
│   │   └── Confirmation.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── README.md
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

---

# 📱 Application Flow

1. Select the preferred language.
2. Choose a complaint category.
3. Continue to the Details page.
4. Describe the issue using text or voice input.
5. Upload an image.
6. Submit the complaint.
7. View the confirmation page with a unique complaint reference ID.

---

# ⚠ What is Broken / Unfinished

The current implementation satisfies the assessment requirements. However, a few enhancements remain:

- Complaint data is stored only in localStorage and is not synchronized with a backend.
- Voice recognition accuracy depends on browser support, particularly for Marathi speech recognition.
- Push notifications are not implemented.
- Complaint status tracking is unavailable because the application does not include a backend service.

---

# 🚀 What I Would Build Next

With additional development time, I would implement:

- Backend using Node.js and Express
- MongoDB database integration
- User authentication
- Complaint status tracking
- GPS location detection
- Google Maps integration
- Push notifications
- Offline complaint synchronization
- Admin dashboard

---

# 📚 Learning Outcomes

This project improved my understanding of:

- React Components
- React Hooks
- React Router
- Tailwind CSS
- Progressive Web Apps (PWA)
- Browser APIs
- Web Speech API
- Local Storage
- Responsive UI Design
- Multilingual Application Development

---

# 🎥 Demo

A short demonstration video showcasing the complete application workflow has been submitted along with this project.

---

# 👨‍💻 Developer

**Pranav Karande**

Electronics & Computer Engineering Student

---

# 🤖 AI Use Log

| Tool | Approximate Usage | Purpose |
|------|-------------------|---------|
| ChatGPT (OpenAI) | ~300 messages | React development guidance, debugging, Tailwind CSS, multilingual implementation, Web Speech API integration, Progressive Web App configuration, localStorage implementation, documentation, and code review. |

### Declaration

ChatGPT was used as a development assistant throughout this project. All AI-generated suggestions were reviewed, tested, modified where necessary, and integrated manually. The final implementation, debugging, testing, documentation, and project integration were completed by me.

---

# 📄 License

This project was developed for the **Potens IT Services Frontend Internship Assessment (2026)** and is intended solely for educational and evaluation purposes.
