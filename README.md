# 🎨 The Art Agora – Frontend

The **Art Agora Frontend** is a modern web application built with **React.js** and **Three.js** that provides an immersive 3D virtual gallery experience for exploring and purchasing artworks. It connects underrepresented artists with global audiences through an interactive platform that merges **art, fashion, and technology**.

---

## 🚀 Features

- 🖼️ **3D Virtual Gallery**(https://github.com/sdabbey/virtual-gallery) powered by Three.js for interactive art exploration.  
- 👩‍🎨 **Artist Profiles** with portfolios, bios, and stories.  
- 🛒 **E-Commerce Functionality** for purchasing original artworks, prints, and apparel.  
- 🔍 **Smart Search & Filters** to browse by artist, category, price, or medium.  
- 📱 **Responsive UI** built with Tailwind CSS for desktop and mobile.  
- 🔐 **Secure Checkout** integrated with Stripe/PayPal.  

---

## 🛠️ Tech Stack

- **React.js** – Frontend framework.  
- **Three.js** – 3D rendering and gallery interactions.  
- **Tailwind CSS** – Styling and responsive design.  
- **Axios** – API requests to backend.  
- **Vite / Create React App** – Project bundler & dev server.  

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/art-agora-frontend.git
cd art-agora-frontend
```

Install dependencies:
```bash
npm install


Create an .env file in the root directory:

VITE_API_BASE_URL=http://localhost:8000/api
VITE_STRIPE_KEY=your_stripe_public_key


Start the development server:
npm run dev


Build for production:
npm run build


Preview production build:
npm run preview
```

📂 Project Structure
```bash
art-agora-frontend/
│── public/               # Static assets
│── src/
│   ├── assets/           # Images, fonts
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application pages (Home, Gallery, Checkout, etc.)
│   ├── services/         # API calls
│   ├── styles/           # Global styles
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
│── .env                  # Environment variables
│── package.json          # Dependencies & scripts
```

🤝 Contributing

Contributions are welcome!

Fork the repo.

Create a new branch (feature/your-feature).

Commit changes (git commit -m "Add new feature").

Push to branch (git push origin feature/your-feature).

Open a Pull Request.

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this software with attribution.

🌍 Acknowledgements

Three.js
 for the 3D virtual gallery.

React.js
 for the frontend framework.

Tailwind CSS
 for clean and responsive design.

All underrepresented artists whose vision inspired The Art Agora.