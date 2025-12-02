# The Closet - Frontend

A beautiful React frontend for The Closet application, built with Vite and Tailwind CSS.

## Features

- Browse clothing items from your virtual closet
- Search functionality to find items by name, brand, or category
- Responsive design with attractive UI
- Real-time connection to backend API

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` if you need to change the backend API URL:
```
VITE_API_BASE_URL=https://thecloset-backend.onrender.com
```

3. Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Build for Production

```bash
npm run build
```

This will create a `dist/` directory with optimized production files.

## Deploy to Netlify

### Option 1: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Option 2: Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Environment variables:** Add `VITE_API_BASE_URL` with value `https://thecloset-backend.onrender.com`
6. Click "Deploy site"

### Option 3: Netlify Drop

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist/` folder

## Project Structure

```
frontend_thecloset/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── ItemCard.jsx
│   │   └── Navbar.jsx
│   ├── pages/          # Page components
│   │   └── Home.jsx
│   ├── services/       # API services
│   │   └── api.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── .env.example        # Environment variables template
└── package.json        # Dependencies
```

## API Integration

The frontend connects to the backend API at `https://thecloset-backend.onrender.com`

Available endpoints:
- `GET /items` - Get all items
- `GET /items/:id` - Get item by ID
- `GET /items/search?q=query` - Search items

## License

MIT
# theCloset_frontend
