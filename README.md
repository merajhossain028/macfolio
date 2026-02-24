---
# macfolio

A modern portfolio web app inspired by macOS, built with React, Vite, and Tailwind CSS.

## Features

- **macOS-style UI:** Dock, windows, and navigation bar for a familiar desktop experience.
- **Animated Dock:** Smooth GSAP-powered dock icon animations.
- **Windowed Apps:** Portfolio, Resume, Contact, Gallery, Terminal, and more.
- **Draggable Folders:** Projects can be dragged and opened like macOS Finder.
- **PDF Resume Viewer:** View and download your resume directly in-app.
- **Social Links:** Connect with your social media profiles.
- **Responsive Design:** Works beautifully on desktop and mobile.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- GSAP (for animations)
- react-pdf (for PDF viewing)
- Zustand (for state management)
- Lucide React (for icons)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/merajhossain028/macfolio.git
cd macfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## Folder Structure

- `src/components/` — UI components (Navbar, Dock, Home, etc.)
- `src/windows/` — Windowed app components (Finder, Terminal, Safari, Resume, Contact, etc.)
- `src/constants/` — App data and configuration
- `public/files/` — Resume and other downloadable files
- `public/images/` — App images and icons

## Customization

- Update your profile image in `public/images/meraj-1.jpeg`
- Edit your resume in `public/files/resume.pdf`
- Add or modify projects in `src/constants/index.js` under `locations.work.children`
- Update social links in `src/constants/index.js` under `socials`

## License

MIT

---
