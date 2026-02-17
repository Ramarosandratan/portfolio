# Email Configuration Guide

## Setting up Email Sending with EmailJS

The contact form now includes email sending functionality using **EmailJS**, which allows you to send emails directly from your portfolio without needing a backend server.

### Steps to Enable Email Sending:

#### 1. Create a Free EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

#### 2. Get Your Credentials

**A. Public Key:**
- In your EmailJS dashboard, go to **Account** → **API Keys**
- Copy your **Public Key**

**B. Service ID:**
- Go to **Email Services** in the sidebar
- Connect an email service (Gmail, Yahoo, Outlook, or add a custom SMTP)
- For Gmail:
  - Click "Connect with Gmail"
  - Authorize the application
  - Copy the **Service ID**

**C. Template ID:**
- Go to **Email Templates** in the sidebar
- Click **Create New Template**
- Name it something like "Contact Form" 
- Use this template structure:

```
To Email: {{to_email}}
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}
```

- Click **Save** and copy the **Template ID**

#### 3. Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Fill in your credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Save the file (it's in `.gitignore` so it won't be committed)

#### 4. Update Your Email Address (Important!)

In `src/pages/Contact.jsx`, find line where the email is sent and update:

```jsx
const templateParams = {
    to_email: 'your-email@example.com', // ← Change this to YOUR email
    // ...
};
```

#### 5. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out the form and submit
4. Check your email inbox for the message

### What Happens When Someone Submits the Form:

1. Form validation checks that all fields are filled correctly
2. Email is sent via EmailJS to your configured email address
3. A success message appears to the visitor
4. The form is cleared for the next submission

### Error Handling:

- If required fields are empty → Error message shown
- If email format is invalid → Error message shown  
- If EmailJS credentials are not configured → Error message shown
- All errors are gracefully handled with user-friendly messages

### Security Notes:

- Your Public Key is safe to expose (it's meant to be public)
- Keep your `.env` file out of version control (already in `.gitignore`)
- Never commit your `.env` file with real credentials
- EmailJS handles all security and email delivery

### Troubleshooting:

**Email not sending?**
- Check that all `.env` variables are correctly set
- Verify your email service is properly connected in EmailJS
- Check the browser console for error messages
- Ensure your email service allows sending

**Too many emails from same sender?**
- EmailJS has rate limits on free tier (~200 emails/day)
- Consider upgrading plan if needed

**Template not working?**
- Make sure template variables match exactly: `{{to_email}}`, `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Double-check the Template ID

### Deployment Considerations:

When deploying to production (Vercel, Netlify, etc.):
1. Set environment variables in your deployment platform
2. Add the same three variables to your hosting provider's environment settings
3. The code will automatically use these variables in production

For **Vercel**: Project Settings → Environment Variables
For **Netlify**: Site Settings → Build & Deploy → Environment

### Free Plan Limitations:

EmailJS Free tier includes:
- 200 emails per day
- 1 email service
- 1 email template
- Sufficient for most portfolio websites

---

If you need help, visit [EmailJS Documentation](https://www.emailjs.com/docs/)
