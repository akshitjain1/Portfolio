# 🚀 Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (free)
- Your EmailJS credentials

## Step 1: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to [https://github.com/new](https://github.com/new)
   - Repository name: `portfolio` (or your preferred name)
   - Set as Public
   - Don't initialize with README (we already have one)

2. **Connect your local repository**:
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Import Project**:
   - Go to [https://vercel.com/](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**:
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add these variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID = your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = your_template_id  
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = your_public_key
   ```

3. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Get your live URL: `https://yourproject.vercel.app`

## Step 3: Custom Domain (Optional)

1. **Purchase Domain** (optional):
   - Use providers like Namecheap, GoDaddy, or Vercel Domains

2. **Add Domain in Vercel**:
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## Step 4: Post-Deployment Setup

1. **Test Contact Form**:
   - Visit your live site
   - Test the contact form
   - Verify emails are received

2. **Update Links**:
   - Update your live URL in social media profiles
   - Add to your resume/CV
   - Share with potential employers

## Step 5: Continuous Deployment

- Any push to `main` branch automatically deploys
- Preview deployments for pull requests
- Rollback capability from Vercel dashboard

## Troubleshooting

### Contact Form Not Working
- Check environment variables in Vercel
- Verify EmailJS service is active
- Check browser console for errors

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript errors locally

### Performance Issues
- Use Vercel Analytics to monitor
- Optimize images (already done)
- Check Core Web Vitals

## Security Checklist ✅

- [x] No sensitive data in repository
- [x] Environment variables properly configured
- [x] .gitignore includes .env files
- [x] No hardcoded API keys or passwords
- [x] EmailJS credentials in environment variables only

## Next Steps

1. **Analytics**: Add Google Analytics or Vercel Analytics
2. **SEO**: Submit to Google Search Console
3. **Monitoring**: Set up Vercel monitoring alerts
4. **Backup**: Regular repository backups

---

🎉 **Your portfolio is now live and ready to impress!**
