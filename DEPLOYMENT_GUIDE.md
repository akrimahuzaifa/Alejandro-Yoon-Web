# Yunere Website - Complete Deployment Guide

## 📋 Project Overview

This is a **Yunere Landing Page** - a one-page website with a waitlist form to collect user data for a CAM reconciliation automation platform demo.

**Stack:**

- **Frontend**: React + Tailwind CSS + shadcn/ui components
- **Backend**: FastAPI (Python) + MongoDB
- **Current Status**: Frontend fully built, Backend API ready

---

## 🚀 Quick Deployment Options

### **Option 1: Frontend Only (Recommended for Quick Start)**

Deploy just the landing page to Vercel - fastest way to get live!

### **Option 2: Full Stack Deployment**

Deploy both frontend (Vercel) + backend (Vercel Serverless/Railway/Render)

---

## 📦 Option 1: Frontend-Only Deployment (5 minutes)

This deploys the React app to Vercel. The waitlist form will show mock data (not save to database) until backend is connected.

### Prerequisites

- GitHub account
- Vercel account (free - sign up at https://vercel.com)

### Steps:

#### 1. **Push Code to GitHub**

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - Yunere landing page"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/yunere-website.git
git branch -M main
git push -u origin main
```

#### 2. **Deploy to Vercel**

**Via Vercel Website (Easiest):**

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure settings:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (or `yarn build`)
   - **Output Directory**: `build`
   - **Install Command**: `npm install` (or `yarn install`)
5. Click "Deploy"
6. Wait 2-3 minutes - Your site will be live! 🎉

**Via Vercel CLI:**

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - What's your project's name? yunere-website
# - In which directory is your code located? ./
# - Want to override settings? No
```

#### 3. **Connect Your Domain**

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update your domain's DNS settings

---

## 🔗 Option 2: Full Stack Deployment

### Backend Deployment Options

#### **Option A: Vercel Serverless Functions (Simplest)**

1. **Create `vercel.json` in project root:**

```json
{
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    },
    {
      "src": "backend/server.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/server.py"
    },
    {
      "src": "/(.*)",
      "dest": "frontend/build/$1"
    }
  ]
}
```

2. **Set up MongoDB Atlas** (Free):
   - Go to https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string

3. **Add Environment Variables in Vercel**:
   - Go to Project Settings → Environment Variables
   - Add:
     - `MONGO_URL`: Your MongoDB connection string
     - `DB_NAME`: `yunere`
     - `CORS_ORIGINS`: `*` (or your domain)

4. **Deploy**: Push to GitHub, Vercel auto-deploys

#### **Option B: Railway (Backend) + Vercel (Frontend)**

**Railway for Backend:**

1. Go to https://railway.app
2. Create new project from GitHub repo
3. Select backend directory
4. Add environment variables (same as above)
5. Deploy - You'll get a URL like `https://your-app.railway.app`

**Vercel for Frontend:**

1. Follow Option 1 steps
2. Add environment variable:
   - `REACT_APP_API_URL`: Your Railway backend URL

#### **Option C: Render (Full Stack)**

1. Go to https://render.com
2. Create "Web Service" for backend
3. Create "Static Site" for frontend
4. Configure both and deploy

---

## 🔧 Configuration Files Needed

### For Vercel Deployment

I've created configuration files in the next steps. Here's what they do:

1. **`vercel.json`** - Tells Vercel how to deploy both frontend and backend
2. **`.env.example`** - Template for environment variables
3. **`frontend/.env.production`** - Production environment config

---

## 🧪 Testing Your Deployment

### Test Frontend:

1. Visit your Vercel URL
2. Check all sections load correctly
3. Navigate to Resources page
4. Try the waitlist form (will show mock data if backend not connected)

### Test Backend (if deployed):

1. Visit `https://your-domain.com/api/` - Should see `{"message": "Hello World"}`
2. Check `/api/docs` - FastAPI auto-generated documentation
3. Test waitlist form submission - data should save to MongoDB

---

## 📝 Connecting Frontend to Backend

Once backend is deployed, update frontend to use real API:

### 1. Create `frontend/.env.production`:

```
REACT_APP_API_URL=https://your-backend-url.com
```

### 2. Update WaitlistSection.jsx to use environment variable:

```javascript
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";

// In handleSubmit:
const response = await axios.post(`${apiUrl}/api/status`, formData);
```

### 3. Redeploy frontend

---

## 🎓 Learning Resources

**Vercel Deployment:**

- Official Docs: https://vercel.com/docs
- React App Deployment: https://vercel.com/guides/deploying-react-with-vercel

**MongoDB Atlas:**

- Setup Guide: https://www.mongodb.com/docs/atlas/getting-started/

**FastAPI + Vercel:**

- Guide: https://vercel.com/guides/python-fastapi

---

## 🆘 Troubleshooting

### "Build failed" on Vercel

- Check that `Root Directory` is set to `frontend`
- Verify package.json has correct build script
- Check Node version compatibility

### Waitlist form not submitting

- Check browser console for errors
- Verify CORS settings in backend
- Ensure environment variables are set correctly

### Backend API not accessible

- Check Vercel Functions logs
- Verify MongoDB connection string
- Ensure routes are configured correctly in vercel.json

---

## 📞 What to Show Your Client

### Demo Checklist:

1. ✅ Show live website URL
2. ✅ Walk through all sections
3. ✅ Test waitlist form submission
4. ✅ Show Vercel dashboard for monitoring
5. ✅ Explain how to view form submissions (MongoDB or admin panel)
6. ✅ Show how to make future updates (GitHub → Auto-deploy)

### Client Handoff:

1. Vercel project access
2. MongoDB Atlas access (if using)
3. GitHub repository access
4. This deployment guide
5. How to update content/styling

---

## 🔄 Future Updates Workflow

1. Make changes locally
2. Test locally: `cd frontend && npm start`
3. Commit and push to GitHub
4. Vercel automatically deploys new version
5. Check deployment status in Vercel dashboard

---

## 💰 Cost Breakdown

- **Vercel**: Free for hobby projects (commercial use requires Pro: $20/month)
- **MongoDB Atlas**: Free tier (512MB storage)
- **Domain**: $10-15/year (if not already owned)
- **Total**: $0-20/month

---

## ✅ Current Project Status

**Frontend**: ✅ Complete and ready to deploy

- Landing page with all sections
- Waitlist form with validation
- Resources page
- Responsive design
- Professional styling

**Backend**: ✅ API ready, needs deployment

- FastAPI endpoints created
- MongoDB integration configured
- CORS enabled
- Ready for Vercel/Railway/Render

**Next Steps**:

1. Choose deployment option
2. Deploy frontend to Vercel
3. (Optional) Deploy backend
4. Connect custom domain
5. Test and handoff to client

---

**Need Help?** Contact Syed Amjad Ali for deployment assistance!
