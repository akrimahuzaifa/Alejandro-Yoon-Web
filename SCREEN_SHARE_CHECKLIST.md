# Screen Share Checklist - Deploy Yunere Website

## 🎯 Goal: Get website live on Vercel in 10-15 minutes

---

## ✅ STEP 1: GitHub Repository Setup (3 minutes)

### Create Repository:

- [ ] Go to https://github.com/new
- [ ] Repository name: `yunere-website`
- [ ] Make it **Private** or **Public** (client choice)
- [ ] DO NOT initialize with README (code already exists)
- [ ] Click **Create repository**

### Push Code:

- [ ] Open terminal/command prompt
- [ ] Navigate to project folder:
  ```bash
  cd e:\Projects\Office-Work\upwork\Alejandro-Yoon-Web
  ```
- [ ] Run these commands one by one:
  ```bash
  git init
  git add .
  git commit -m "Initial commit - Yunere landing page"
  git remote add origin https://github.com/ALEJANDRO_USERNAME/yunere-website.git
  git branch -M main
  git push -u origin main
  ```
- [ ] Verify code appears in GitHub repository

**✅ Checkpoint:** Code is now on GitHub

---

## ✅ STEP 2: Vercel Deployment (5 minutes)

### Sign In:

- [ ] Go to https://vercel.com
- [ ] Sign in with GitHub account
- [ ] Grant Vercel access to repositories

### Import Project:

- [ ] Click **"Add New Project"** or **"Import Project"**
- [ ] Find `yunere-website` repository
- [ ] Click **"Import"**

### Configure Build Settings:

- [ ] **Framework Preset:** Create React App ✅ (should auto-detect)
- [ ] **Root Directory:** Click **"Edit"** → Select **`frontend`** ⚠️ CRITICAL
- [ ] **Build Command:** `npm run build` (default, leave as-is)
- [ ] **Output Directory:** `build` (default, leave as-is)
- [ ] **Install Command:** `npm install` (default, leave as-is)

### Environment Variables (Skip for now):

- [ ] Skip this section (only needed if connecting backend later)

### Deploy:

- [ ] Click **"Deploy"** button
- [ ] Wait for build process (2-3 minutes)
- [ ] Watch build logs scroll by

**✅ Checkpoint:** Deployment successful! 🎉

---

## ✅ STEP 3: Verify Website (2 minutes)

- [ ] Click **"Visit"** button or the deployment URL
- [ ] Test all sections:
  - [ ] Hero section loads
  - [ ] Scroll through all sections
  - [ ] Navigation menu works
  - [ ] Click "Resources" → Goes to resources page
  - [ ] Click logo → Returns to home page
  - [ ] Fill out waitlist form → Should show success message
  - [ ] Test on mobile view (responsive design)

**✅ Checkpoint:** Website is live and functional!

---

## ✅ STEP 4: Connect Custom Domain (5 minutes)

### In Vercel Dashboard:

- [ ] Go to project
- [ ] Click **"Settings"** tab
- [ ] Click **"Domains"** in sidebar
- [ ] Click **"Add Domain"**
- [ ] Enter domain (e.g., `yunere.com` or `www.yunere.com`)
- [ ] Click **"Add"**

### Vercel Shows DNS Configuration:

- [ ] Copy the DNS records shown
- [ ] Note: Usually an **A record** or **CNAME record**

### In Domain Registrar (GoDaddy/Namecheap/etc.):

- [ ] Log in to domain registrar
- [ ] Find DNS settings/DNS management
- [ ] Add the records Vercel showed:
  - **A Record:**
    - Type: A
    - Name: @ (or leave blank)
    - Value: 76.76.21.21 (Vercel's IP)
  - **CNAME Record (www):**
    - Type: CNAME
    - Name: www
    - Value: cname.vercel-dns.com
- [ ] Save DNS changes

### Wait for Propagation:

- [ ] Explain: DNS takes 10-30 minutes to propagate
- [ ] Check status in Vercel dashboard (will show "Valid Configuration")

**✅ Checkpoint:** Domain configured (waiting for DNS propagation)

---

## ✅ STEP 5: Show Future Update Workflow (3 minutes)

### Make a Simple Change:

- [ ] Open `frontend/src/pages/LandingPage.jsx` (or any file)
- [ ] Make a small visible change (e.g., edit hero text)
- [ ] Save file

### Push Update:

- [ ] In terminal:
  ```bash
  git add .
  git commit -m "Update hero text"
  git push
  ```

### Watch Auto-Deploy:

- [ ] Go to Vercel dashboard
- [ ] Click **"Deployments"** tab
- [ ] Watch new deployment start automatically
- [ ] Wait 2-3 minutes
- [ ] Visit website to see change live

**Explain:** "This is all you need to do for future updates! Push to GitHub, and Vercel deploys automatically."

**✅ Checkpoint:** Client understands update workflow

---

## ✅ STEP 6: Handoff & Documentation (2 minutes)

### Share Access:

- [ ] Add client as collaborator to GitHub repo
- [ ] Add client as team member in Vercel (Settings → Team)

### Share Documentation:

- [ ] Send **QUICK_START.md** (for quick reference)
- [ ] Send **DEPLOYMENT_GUIDE.md** (comprehensive guide)
- [ ] Send **PROJECT_ANALYSIS.md** (technical details)

### Key Points to Emphasize:

- [ ] Website is live and functional
- [ ] Form shows success messages (not saving to DB yet)
- [ ] To update: edit code → git push → auto-deploys
- [ ] Backend setup is optional (can do later if needed)
- [ ] Domain will be fully active in 10-30 minutes

### Optional Backend Setup:

- [ ] Ask if client wants form data saved to database
- [ ] If yes: Schedule separate session for backend deployment
- [ ] If no: Client can request later when needed

**✅ Checkpoint:** Client has everything they need!

---

## 📞 TALKING POINTS

### At Start:

"We're going to get your website live in the next 10-15 minutes. I'll walk you through each step, and by the end, you'll know how to make updates yourself. Sound good?"

### During GitHub Setup:

"GitHub is like Dropbox for code. We're just uploading your website files there so Vercel can access them."

### During Vercel Setup:

"Vercel is a hosting platform that makes deployment super easy. It watches your GitHub repo and automatically deploys any changes you make."

### Setting Root Directory:

"⚠️ This is the most important setting - we need to tell Vercel to look in the 'frontend' folder for your website code."

### After Deployment:

"🎉 Congratulations! Your website is now live! Anyone with this link can access it."

### About the Form:

"The form currently shows a success message when someone submits it, but it's not saving to a database yet. That's an optional next step we can do if you'd like - takes about 15 more minutes."

### About Future Updates:

"Making changes is super simple: edit your code, push to GitHub, and Vercel automatically deploys it. No need to do anything in Vercel manually."

### Wrap-up:

"You're all set! Your website is live, and you know how to update it. I've sent you detailed guides, and I'm available if you need any help or want to add the backend later."

---

## 🚨 TROUBLESHOOTING

### Issue: Git not recognized

**Solution:**

- Install Git: https://git-scm.com/downloads
- Or use GitHub Desktop (easier): https://desktop.github.com/

### Issue: Build fails on Vercel

**Check:**

- [ ] Root directory is set to `frontend`
- [ ] Framework preset is Create React App
- [ ] Look at build logs for specific error
- [ ] Most common: missing dependencies (Vercel should auto-install)

### Issue: Website loads but styling broken

**Solution:**

- [ ] Check browser console for errors
- [ ] Verify build output directory is `build`
- [ ] Clear browser cache and reload

### Issue: Form submission not working

**Expected:**

- If backend not deployed, form shows mock success message
- This is normal and expected behavior
- Can add backend later if needed

### Issue: Domain not connecting

**Check:**

- [ ] DNS records added correctly in registrar
- [ ] Wait 10-30 minutes for propagation
- [ ] Use DNS checker: https://www.whatsmydns.net/
- [ ] Verify records match what Vercel shows

---

## 📝 POST-SESSION FOLLOW-UP

### Immediate:

- [ ] Send confirmation email with:
  - Website URL
  - Vercel dashboard link
  - GitHub repository link
  - Documentation files
  - Your contact info for questions

### Within 24 Hours:

- [ ] Check in: "How's the domain connection going?"
- [ ] Answer any questions
- [ ] Offer backend setup if interested

### Optional Backend Session:

If client wants form data saved:

- [ ] Schedule 30-minute session
- [ ] Set up MongoDB Atlas
- [ ] Deploy backend to Railway or Vercel
- [ ] Connect frontend to backend
- [ ] Test form submission
- [ ] Show how to view/export data

---

## ✅ SUCCESS CRITERIA

- ✅ Website accessible via Vercel URL
- ✅ All pages and sections working
- ✅ Navigation functional
- ✅ Forms validate and submit (mock data)
- ✅ Responsive on all devices
- ✅ Client understands update workflow
- ✅ Documentation shared
- ✅ Access granted to Vercel/GitHub
- ✅ Domain configuration in progress
- ✅ Client is happy and confident! 😊

---

**You've got this! Keep it simple, friendly, and educational. Good luck!** 🚀
