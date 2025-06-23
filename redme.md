//https://v3.tailwindcss.com/docs/guides/vite :tailwind install
client/
├── public/
├── src/
│ ├── assets/ # Images, logos, etc.
│ ├── components/ # Reusable UI components (Input, Button, etc.)
│ ├── features/
│ │ ├── auth/ # Login/Register UI & logic
│ │ └── tasks/ # Task CRUD UI & logic
│ ├── layout/ # Main layout (e.g., Navbar, Sidebar)
│ ├── pages/ # Route pages (Login, Register, Dashboard)
│ ├── services/ # API calls (axios setup, auth service, etc.)
│ ├── hooks/ # Custom React hooks (if needed)
│ ├── context/ # Auth Context / App-wide state
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css # Tailwind base styles
├── tailwind.config.js
├── postcss.config.js
├── package.json
cmd:mkdir -p src/{assets,components,features/auth,features/tasks,layout,pages,services,context}
