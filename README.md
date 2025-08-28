# 🚀 Startup Website

A fully responsive **startup landing page** built with **React + TailwindCSS**, featuring smooth navigation, modern UI sections, and a clean component structure.  

🔗 **Live Demo:** [View Here](https://startup-website-7yq2.vercel.app/)

## 📌 Features
- Responsive, mobile-first layout  
- Smooth scrolling navigation with active state  
- Hero, About, Services, Portfolio, and Contact sections  
- Portfolio items loaded dynamically from JSON  
- Contact form with validation  
- Clean, accessible design with semantic HTML  
- Deployed on Vercel  

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/y/startup-website.git
   cd startup-website

## Install dependencies
npm install

## Start development server
npm start
Open http://localhost:3000  in your browser.


## Build for production
npm run build

# 📂 Project Structure
src/
 ┣ components/      # Reusable UI components (Header, Hero, About, etc.)
 ┣ data/            # Portfolio JSON data
 ┣ App.js           # Main layout with section imports
 ┣ index.css        # Tailwind CSS styles
 ┗ index.js         # React entry point

# 🛠️ Tech Stack
React.js – UI library
TailwindCSS – Styling
react-scroll – Smooth scrolling navigation
Vercel – Deployment

# ✨ Decisions & Notes
Chose TailwindCSS for faster responsive design.
Used react-scroll to simplify navigation with active states.
Portfolio items separated into a JSON file for scalability.
Followed mobile-first approach with accessibility basics (alt text, semantic HTML).


