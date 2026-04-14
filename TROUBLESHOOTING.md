# Troubleshooting Guide

## Can't Reach Homepage

If you're having trouble accessing the homepage, here are the steps to fix it:

### Step 1: Install Node.js (if not installed)

1. **Check if Node.js is installed:**
   ```bash
   node --version
   npm --version
   ```

2. **If not installed, download Node.js:**
   - Visit: https://nodejs.org/
   - Download the LTS version
   - Install it
   - Restart your terminal

### Step 2: Install Dependencies

Navigate to the project directory and run:
```bash
cd "/Users/diksha/New Portfolio Website"
npm install
```

This will install all required packages (Next.js, React, Framer Motion, etc.)

### Step 3: Start Development Server

```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 14.0.4
  - Local:        http://localhost:3000
```

### Step 4: Open in Browser

Open your browser and go to: **http://localhost:3000**

---

## Common Issues

### Issue: "command not found: npm"
**Solution:** Node.js is not installed. Install it from nodejs.org

### Issue: "Port 3000 already in use"
**Solution:** Either:
- Stop the other process using port 3000
- Or run: `npm run dev -- -p 3001` (uses port 3001 instead)

### Issue: "Module not found" errors
**Solution:** Run `npm install` again to ensure all dependencies are installed

### Issue: Page shows blank/white screen
**Solution:** 
1. Check browser console for errors (F12)
2. Make sure all dependencies are installed: `npm install`
3. Try clearing browser cache

### Issue: Build errors
**Solution:**
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm run dev`

---

## Alternative: View Static Preview

If you can't get the Next.js server running, you can view the static preview:

1. Open `preview.html` in your browser
2. This shows a static version of the design

Note: The static preview won't have all the interactive features, but it shows the design.

---

## Need More Help?

- Check the browser console (F12) for error messages
- Make sure you're in the correct directory
- Verify Node.js version is 18 or higher: `node --version`

