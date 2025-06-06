# <img src="https://raw.githubusercontent.com/erascu/musevio/refs/heads/main/public/logo.png" width="500">

**Musevio** is a virtual museum web app that allows users to navigate and explore artwork from multiple museums.</br></br>
Users can:

- Learn more about the app
- Browse and read detailed information about artworks
- Search, filter, and sort artworks
- Save their favorite pieces
- Organize favorites between custom collections
- Remove artworks from collections
- Delete collections

Built with modern web technologies, Musevio aims to make exploring art both immersive and interactive.</br></br>

## 🎨 UI & Design

The **name "Musevio"**, branding, and visual identity were fully created by **Eugeniu Rascu** from scratch.</br>
</br>
This includes:

- Original project name concept
- Custom logo design
- All UI/UX layout and component structure
- Color palette and typography choices

📐 **Figma Design Preview**:  
[Musevio – art. history. online.](https://www.figma.com/design/EGoxFumm0bbWL15DrG1PyT/Musevio-%C2%A9-Eugeniu-Rascu-2025)</br></br>

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide-React](https://lucide.dev/)
- **APIs**:
  - [Harvard Art Museums API](https://github.com/harvardartmuseums/api-docs)
  - [Cleveland Museum of Art API](https://openaccess-api.clevelandart.org/)</br></br>

## 🌐 Live Demo

🔗 [Musevio](https://musevio.vercel.app)</br></br>

## 🛠️ Getting Started

Follow the instructions below to set up the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/erascu/musevio.git
cd musevio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

If you plan to use the **Harvard Art Museums API**, you'll need to apply for an API key [here](https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform).</br>
Create a `.env.local` file in the root directory and add:

```bash
NEXT_PUBLIC_HARVARD_API_KEY=your_api_key_here
```

> ⚠️ If you’re not using the API key yet, this step can be skipped for now.

### 4. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.</br></br>

## ⚖️ License

This project was developed under a freelance agreement with **Tech Returners Limited**.  
According to Clause 7 of the signed consultancy contract, all **source code and application logic** created during the project is fully assigned to **Tech Returners Limited**.

However, the following assets were **independently created and are fully owned by Eugeniu Rascu**:

- The original **project name "Musevio"**
- The **Musevio logo**
- The full **Figma-based UI/UX design**

You may **not** copy, distribute, or reuse the codebase or these assets for public or commercial purposes without written permission from **Tech Returners Limited**.
