# 🚀 Quick Start - Deploy in 10 Minutes!

## For Alejandro: Simplest Path to Live Website

### What You Need:

1. GitHub account (free)
2. Vercel account (free) - Sign up at https://vercel.com with GitHub
3. Your domain (you mentioned you already have it)

---

## 🎯 3-Step Deployment

### Step 1: Push Code to GitHub (2 minutes)

1. Go to https://github.com/new
2. Create a new repository called `yunere-website`
3. On your computer, open terminal/command prompt in this project folder
4. Run these commands:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/yunere-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

### Step 2: Deploy to Vercel (5 minutes)

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Click **"Import"** next to your `yunere-website` repository
4. **IMPORTANT**: Configure these settings:
   - **Root Directory**: Click "Edit" and select `frontend`
   - **Framework Preset**: Create React App (should auto-detect)
   - **Build Command**: Leave as default (`npm run build`)
   - **Output Directory**: Leave as default (`build`)
5. Click **"Deploy"**
6. Wait 2-3 minutes... ⏳

**🎉 Your website is now LIVE!**

Vercel will give you a URL like: `https://yunere-website-xxxxx.vercel.app`

---

### Step 3: Connect Your Domain (3 minutes)

1. In Vercel, click on your project
2. Go to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter your domain (e.g., `yunere.com`)
5. Vercel will show you DNS records to add
6. Go to your domain registrar (GoDaddy/Namecheap/etc.) and add those DNS records:
   - Usually an A record or CNAME record
   - Copy exactly what Vercel shows you
7. Wait 10-30 minutes for DNS to propagate

**Done! Your website will be live at your custom domain!**

---

## 📱 Test Your Website

Visit your Vercel URL and check:

- ✅ Landing page loads with hero section
- ✅ Scroll through all sections
- ✅ Click "Resources" in menu → Should go to resources page
- ✅ Try filling out waitlist form → Should show success message
- ✅ Check on mobile (responsive design)

---

## 📊 What's Working Now

**✅ Fully Functional:**

- Complete landing page
- All sections and animations
- Waitlist form (shows mock confirmation)
- Resources page
- Navigation
- Mobile responsive

**⚠️ Not Yet Connected:**

- Waitlist form submissions are NOT saved to database yet
- They show a success message but data isn't stored

---

## 🔄 Want to Save Form Data? (Optional - Extra 15 min)

To actually save waitlist form submissions, you need to deploy the backend:

### Quick Backend Setup:

1. **Get Free MongoDB Database:**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up free
   - Create a cluster (free tier)
   - Get your connection string (looks like `mongodb+srv://...`)

2. **Deploy Backend to Railway (Easiest):**
   - Go to https://railway.app
   - Sign in with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your `yunere-website` repo
   - Set root directory to `backend`
   - Add environment variables:
     - `MONGO_URL`: Your MongoDB connection string
     - `DB_NAME`: `yunere`
     - `CORS_ORIGINS`: `*`
   - Deploy!

3. **Connect Frontend to Backend:**
   - In Vercel project settings
   - Add environment variable:
     - Name: `REACT_APP_API_URL`
     - Value: Your Railway backend URL (e.g., `https://yunere-backend.railway.app`)
   - Redeploy (Vercel will auto-deploy when you save)

Now form submissions will be saved! ✅

---

## 🎓 What I'll Show You (Screen Share)

When we connect, I'll walk you through:

1. ✅ How to push code to GitHub (live demo)
2. ✅ How to deploy to Vercel (live demo)
3. ✅ How to connect your domain
4. ✅ How to check deployment status
5. ✅ How to make updates in the future
6. ✅ (Optional) How to set up backend if you want

---

## 🔄 Making Updates in the Future

**Super Simple Workflow:**

1. Make changes to code locally (I can show you basic editing)
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update hero text"
   git push
   ```
3. Vercel automatically detects the push and redeploys
4. Check Vercel dashboard to see deployment status
5. New version is live in 2-3 minutes!

**No need to manually redeploy every time!** 🎉

---

## 💰 Cost

- **Vercel**: FREE for hobby/personal projects
- **MongoDB Atlas**: FREE tier (more than enough for a waitlist)
- **Railway** (if you deploy backend): FREE tier includes $5/month credit
- **Domain**: You already have it!

**Total: $0/month** (until you need to scale)

---

## 📞 Ready to Deploy?

Once you're ready, we can hop on a quick call/screen share and I'll walk you through each step. It should take about 10-15 minutes total!

After that, you'll know how to:

- ✅ Deploy updates yourself
- ✅ Check deployment status
- ✅ Connect/disconnect domains
- ✅ View deployment logs if something goes wrong

**Let's get your website live!** 🚀
