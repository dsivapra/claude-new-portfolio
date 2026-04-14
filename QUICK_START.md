# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit: http://localhost:3000

---

## 📤 Deploy to Vercel (Free & Easy)

### Option A: Via Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy:**
   - Go to https://vercel.com
   - Click "Sign Up" → Use GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (no configuration needed!)
   - Done! Your site is live 🎉

### Option B: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and your site will be deployed!

---

## 🎨 Customize Your Portfolio

### Update Your Info

1. **Name & Title**: Edit `components/Hero.tsx` (lines 40-50)
2. **About Section**: Edit `components/About.tsx` (lines 30-35)
3. **Projects**: Edit `components/Projects.tsx` (projects array starting at line 20)
4. **Contact Info**: Edit `components/Contact.tsx` (socialLinks array starting at line 20)

### Change Colors

Edit `tailwind.config.js` to customize the color scheme.

### Replace Images

Place your project images in `public/images/` folder and update the image paths in `components/Projects.tsx`.

---

## 📝 Notes

- The linting errors you see are normal until you run `npm install`
- All images are already copied to `public/images/`
- The site is fully responsive and works on all devices
- Dark mode is automatically enabled based on system preferences

---

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- All components include logging for debugging
- Check browser console for component lifecycle logs

