# Diksha Sivaprasad - Portfolio Website

A modern, AI-inspired portfolio website built with Next.js, React, and Framer Motion.

## 🚀 Features

- **Modern Design**: Beautiful, responsive UI with smooth animations
- **AI-Inspired**: Gradient effects and dynamic visual elements
- **Performance Optimized**: Built with Next.js for optimal performance
- **Mobile Responsive**: Works seamlessly on all devices
- **Dark Mode Ready**: Supports dark mode (system preference)

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Free Hosting Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - Your site will be live in minutes!

**Benefits:**
- ✅ Free forever
- ✅ Automatic deployments on git push
- ✅ Custom domain support
- ✅ SSL certificate included
- ✅ Global CDN

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

**Benefits:**
- ✅ Free tier available
- ✅ Continuous deployment
- ✅ Custom domain support
- ✅ SSL included

### Option 3: GitHub Pages

1. **Update `next.config.js`:**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Add to `package.json`:**
   ```json
   "scripts": {
     "export": "next build"
   }
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   # Copy the 'out' folder contents to your GitHub Pages repository
   ```

### Option 4: Framer (Visual Editor)

If you prefer using Framer's visual editor:

1. Go to [framer.com](https://framer.com)
2. Create a new site
3. You can either:
   - Design from scratch in Framer
   - Export this Next.js site and import components
   - Use Framer's templates and customize

**Note:** Framer has a free tier but may require a paid plan for custom domains.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   └── Contact.tsx      # Contact section
├── public/
│   └── images/          # Project images
└── package.json
```

## 🎨 Customization

### Update Your Information

1. **Personal Info**: Edit `components/Hero.tsx` and `components/About.tsx`
2. **Projects**: Update the `projects` array in `components/Projects.tsx`
3. **Contact**: Modify social links in `components/Contact.tsx`
4. **Images**: Replace images in `public/images/` folder

### Styling

- Colors: Edit `tailwind.config.js` to change the color scheme
- Global styles: Modify `app/globals.css`
- Component styles: Each component uses Tailwind CSS classes

## 🔧 Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues, feel free to reach out:
- Email: dsivapra@uci.edu
- LinkedIn: [Diksha Sivaprasad](https://www.linkedin.com/in/diksha-sivaprasad/)

---

Built with ❤️ by Diksha Sivaprasad

