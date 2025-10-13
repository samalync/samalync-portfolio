# EmailJS Setup Instructions

This document explains how to set up EmailJS to enable email functionality on your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create an account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from the Samalync portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here', 
  PUBLIC_KEY: 'your_public_key_here',
  TO_EMAIL: 'support@samalync.com'
};
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the Contact section
3. Fill out and submit the contact form
4. Check your email for the message

## Troubleshooting

- **Emails not sending**: Check that all IDs and keys are correct
- **Template errors**: Ensure template variables match exactly ({{from_name}}, {{from_email}}, etc.)
- **Service errors**: Verify your email service is properly configured
- **Rate limits**: Free accounts have sending limits

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in frontend code

## Support

If you need help with EmailJS setup, refer to their documentation:
[https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
