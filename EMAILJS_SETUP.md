# 📧 EmailJS Setup Guide for Portfolio Contact Form

## ✅ What's Already Done
- EmailJS library installed (@emailjs/browser)
- Contact form updated to use EmailJS
- Environment variables configured
- Security setup with .gitignore

## 🔧 Next Steps to Complete Setup

### 1. EmailJS Dashboard Configuration

1. **Login to EmailJS**: Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)

2. **Create an Email Service**:
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Connect your email account (your-email@example.com)
   - Note down the **Service ID**

3. **Create an Email Template**:
   - Click "Create New Template"
   - Use this template structure:
   ```
   Subject: New Portfolio Contact from {{from_name}}
   
   Hello Akshit,
   
   You have received a new message from your portfolio website:
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   Please reply to: {{reply_to}}
   ```
   - Note down the **Template ID**

4. **Get Public Key**:
   - Go to "Account" > "General"
   - Copy your **Public Key**

### 2. Update Environment Variables

Edit the `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Replace the `xxxxxxx` with your actual values from EmailJS dashboard.

### 3. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (your-email@example.com) for the message

## 📧 What Happens When Someone Contacts You

1. **User fills out contact form** on your portfolio
2. **EmailJS sends email** to your-email@example.com
3. **You receive notification** with:
   - Sender's name and email
   - Their message
   - Reply-to address for easy response

## 🔒 Security Features

- Environment variables keep your keys secure
- .gitignore prevents credentials from being committed
- Client-side validation prevents spam
- EmailJS handles email delivery securely

## 🎯 Benefits

✅ **No backend required** - Works with static hosting  
✅ **Direct email delivery** - Messages go straight to your inbox  
✅ **Professional presentation** - Formatted email templates  
✅ **Easy to maintain** - No server management needed  
✅ **Free tier available** - Perfect for personal portfolios  

## 🚨 Important Notes

- Keep your EmailJS credentials secure
- Don't commit .env.local to version control
- Test thoroughly before deployment
- Monitor your EmailJS usage limits

## 🔧 Troubleshooting

If form submissions fail:
1. Check browser console for errors
2. Verify environment variables are set correctly
3. Ensure EmailJS service and template are active
4. Check EmailJS dashboard for delivery status

---

Once you complete these steps, your portfolio contact form will be fully functional and you'll receive all inquiries directly in your email inbox! 🚀
