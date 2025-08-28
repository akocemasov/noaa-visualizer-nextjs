# 🌌 NOAA Data Visualizer

A **Next.js 15 + React 19** application for visualizing real-time **NOAA SWPC (Space Weather Prediction Center)** data.  
Built with modern tools like **MUI**, **Recharts**, and **TypeScript**, the app is for **self-learning** purposes.

---

## ✨ Features

- **Next.js App Router (v15)** – modern routing, server components, metadata handling.
- **TypeScript** – type-safe code for reliability.
- **MUI (Material UI)** – responsive UI, light/dark theme toggle.
- **Recharts** – data visualization (e.g., Kp Index over time).
- **Server-Side Rendering (SSR)** – SEO-friendly and production proven.
- **NOAA SWPC API integration** – fetches real-time planetary K-index data.
- **Error handling & revalidation** – compliant with NOAA’s API usage policy.
- **Extensible project structure** – easy to add new datasets or visualizations.

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/akocemasov/noaa-visualizer-nextjs.git
cd noaa-visualizer-nextjs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

App will be available at [http://localhost:3000](http://localhost:3000).

### 4. Build & Run production

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

1. Push your repo to GitHub.
2. Go to [Vercel](https://vercel.com/), create a new project.
3. Import the GitHub repo and deploy.
4. Vercel handles builds, SSR, and CDN caching automatically.

---

## 📡 Data Source

Data comes from **NOAA Space Weather Prediction Center**’s public APIs:

* [Planetary K-Index (1 minute resolution)](https://services.swpc.noaa.gov/json/planetary_k_index_1m.json)

⚠️ **Usage policy**:

* Do not query more than **2 times per minute**.
* If a request fails, retry after **1 minute**.

---

## 📂 Project Structure

```
src/
 ├── app/                 # Next.js App Router
 │   ├── layout.tsx       # Root layout
 │   ├── page.tsx         # Home page
 │   └── ...              # Future routes
 ├── components/          # Reusable UI components
 │   ├── NavBar.tsx
 │   ├── ChartCard.tsx
 │   └── ThemeProviderWrapper.tsx
 ├── lib/                 # Utility functions
 │   └── fetchNoaaData.ts
 └── theme/               # MUI theme setup
     └── theme.ts
```

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 15](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **UI Library**: [MUI](https://mui.com/)
* **Charts**: [Recharts](https://recharts.org/en-US/)
* **Deployment**: [Vercel](https://vercel.com/)

---

## 💡 Future Improvements

* Add more NOAA datasets (solar wind, aurora forecast, etc.).
* Interactive map visualization (D3.js or Leaflet).
* User-selectable time ranges for charts.

---

## 📜 License

This project is for **learning and educational purposes only**.  
You are free to look at the code and experiment. NOAA data is public domain but subject to [NOAA’s data usage guidelines](https://www.weather.gov/disclaimer).

---

## 👨‍💻 Author

Made by [Alex Cocemasov](https://github.com/akocemasov)
