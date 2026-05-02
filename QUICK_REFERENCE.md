# 📋 QUICK REFERENCE - Portfolio Commands

## 🚀 START HERE

### First Time Setup
```bash
cd v:\prtotfolio
npm install
npm run dev
```

---

## 💻 DEVELOPMENT COMMANDS

### Start Development Server
```bash
npm run dev
```
**Result**: Opens at http://localhost:3001 with hot reload

### Build for Production
```bash
npm run build
```
**Result**: Creates optimized `dist/` folder (~450KB)

### Preview Production Build
```bash
npm run preview
```
**Result**: Test production build before deploying

---

## 🌐 DEPLOYMENT COMMANDS

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
**Result**: Site deployed to `your-name.vercel.app`

### Deploy to Netlify
```bash
npm run build
# Drag dist/ folder to netlify.com
```
**Result**: Site deployed to netlify

### Deploy to GitHub Pages
```bash
npm run build
git add .
git commit -m "Deploy portfolio"
git push origin main
```
**Result**: Site deployed to `github.com/your-name/your-name.github.io`

---

## 📝 FILE LOCATIONS FOR CUSTOMIZATION

### Change Your Name/Title
**File**: `src/components/Hero.jsx`
```
Line 40: Update <h1> tag
Line 45: Update <TypingEffect text="...">
```

### Update About Section
**File**: `src/components/About.jsx`
```
Lines 50-75: Replace text with your background
```

### Add Skills
**File**: `src/components/Skills.jsx`
```
Lines 10-33: Update skillsData array
```

### Add Projects
**File**: `src/components/Projects.jsx`
```
Lines 10-56: Update projectsData array
```

### Update Contact Info
**File**: `src/components/Contact.jsx`
```
Search for: email, phone, social links
Replace with your actual contact info
```

### Change Colors
**File**: `src/index.css`
```
Lines 1-20: Update :root variables
--primary-color: #667eea
--secondary-color: #764ba2
--tertiary-color: #00d4ff
```

### Add Your Photo
**Location**: `v:\prtotfolio\public\profile.png`
```
Size: 300×350px or portrait-oriented
Format: PNG, JPG, or WebP
```

---

## 🎨 ANIMATION CUSTOMIZATION

### Typing Speed
**File**: `src/components/Hero.jsx`
```
<TypingEffect text="..." speed={60} />
speed: lower = faster, higher = slower
```

### Photo Frame Rotation Speed
**File**: `src/components/Hero.css`
```
animation: rotateFrame 25s infinite linear;
Change 25s to adjust speed
```

### Gradient Flow Speed
**File**: `src/components/GradientWord.css`
```
animation: gradientFlow 3s ease infinite;
Change 3s to adjust speed
```

---

## 🔍 TROUBLESHOOTING COMMANDS

### Clear Node Modules & Reinstall
```bash
rm -r node_modules package-lock.json
npm install
```

### Check for Errors
```bash
npm run build
# Look for build errors in terminal
```

### Kill Running Process (Port Issue)
```bash
# Windows PowerShell
Get-Process node | Stop-Process

# Then run:
npm run dev
```

### View File Structure
```bash
tree /F /A src/
# Shows all component files
```

---

## 📊 PROJECT STRUCTURE

```
v:\prtotfolio\
├── public/
│   ├── profile.png          ← Add your photo here!
│   └── ...
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── TypingEffect.jsx
│   │   └── [component].css (styling)
│   ├── App.jsx              ← Main component
│   ├── App.css              ← Global styles
│   ├── index.css            ← CSS variables & base
│   └── main.jsx             ← Entry point
├── package.json             ← Dependencies
├── vite.config.js           ← Build config
├── DEPLOYMENT_GUIDE.md      ← How to deploy
├── FEATURES.md              ← Feature list
└── COMPLETION_SUMMARY.md    ← This summary
```

---

## 🆘 COMMON ISSUES & FIXES

### Issue: "Port 3000 already in use"
```bash
npm run dev -- --port 5173
# Or just wait for automatic port switch to 3001
```

### Issue: Photo not showing
```bash
# Check file is at: public/profile.png
# Verify file name & extension exactly
# Clear browser cache: Ctrl+Shift+Delete
```

### Issue: Changes not showing
```bash
# Save file
# Check browser console for errors (F12)
# Do a hard refresh: Ctrl+Shift+R
```

### Issue: Animations stuttering
```bash
# Close other browser tabs
# Check GPU acceleration enabled
# Update browser to latest version
```

### Issue: Build fails
```bash
npm run build
# Look at error messages in terminal
# Check for missing commas in code
# Verify all imports are correct
```

---

## 📱 TESTING COMMANDS

### Test Mobile View
- Open DevTools: F12
- Click device toggle button
- Select iPhone/Android preset
- Refresh page

### Test Lighthouse Performance
- DevTools → Lighthouse tab
- Click "Analyze page load"
- View performance score

### Test on Different Browsers
```bash
# Desktop browsers
Chrome, Firefox, Safari, Edge

# Mobile devices
Use actual phone and visit localhost:3001
(May need to find your computer's IP first)
```

---

## 🧹 CLEANUP COMMANDS

### Remove Build Artifacts
```bash
rm -r dist
# or on Windows:
rmdir /s /q dist
```

### Remove All Generated Files
```bash
rm -r node_modules dist
# Then: npm install && npm run build
```

### Check Project Size
```bash
du -sh .
# Shows total project size
```

---

## 📈 PERFORMANCE CHECKS

### Check Bundle Size
```bash
npm run build
# Look at dist/ folder size
# Should be < 500KB
```

### Check Dependencies
```bash
npm list
# Shows all installed packages (130 total)
```

### Analyze Bundle
```bash
npm install -g webpack-bundle-analyzer
# Advanced: analyze what's in bundle
```

---

## 🔐 SECURITY CHECKS

### Check for Vulnerabilities
```bash
npm audit
npm audit fix  # Fix security issues
```

### Update Dependencies
```bash
npm update
npm outdated   # Show outdated packages
```

---

## 📚 USEFUL NPM SCRIPTS

### View All Available Scripts
```bash
npm run
# Shows all available commands
```

### Custom Scripts (if needed)
**Edit**: `package.json`
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src"
}
```

---

## 🌍 ENVIRONMENT VARIABLES (Optional)

### Create .env File
```
VITE_APP_NAME=My Portfolio
VITE_APP_TITLE=Visrutha U S
```

### Use in Components
```javascript
const appName = import.meta.env.VITE_APP_NAME
```

---

## 📞 HELP RESOURCES

### Official Documentation
- **Vite**: https://vitejs.dev/guide/
- **React**: https://react.dev/learn
- **Framer Motion**: https://www.framer.com/motion/

### Stack Overflow
- Search: "react vite deployment"
- Search: "framer motion tutorial"

### Community
- React Discord: https://discord.gg/react
- GitHub Issues: Check repository

---

## ✅ FINAL CHECKLIST

Before deploying:
- [ ] Run `npm run build` successfully
- [ ] No console errors in DevTools
- [ ] Tested on mobile & desktop
- [ ] Photo displays correctly
- [ ] All text is updated
- [ ] Social links work
- [ ] Animations are smooth

---

## 🎯 ONE-LINER COMMANDS

```bash
# Install, build, and deploy all at once
npm install && npm run build && vercel

# Quick local test
npm run dev

# Production test locally
npm run build && npm run preview

# Clean install
rm -r node_modules && npm install

# Update everything
npm update && npm run build
```

---

## 🚀 YOU'RE READY!

**Remember**: Most customization is just text changes in component files.  
**Commands**: Are mainly for building and deploying.  
**Questions**: Check the documentation files or component comments.

---

**Happy deploying! 🎉**

