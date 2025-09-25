// API endpoint to send feedback emails directly
// This runs on the server, so emails are sent automatically without opening user's email client

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, feedback } = req.body;

  // Validate required fields
  if (!name || !email || !feedback) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Option 1: Using Nodemailer (requires SMTP setup)
    // For now, we'll use a simple approach that works with most hosting platforms
    
    // Option 2: Using a third-party service like EmailJS or Formspree
    // This is more reliable for static sites
    
    // Prepare email data for Formspree
    const emailData = {
      name: name,
      from: email,
      subject: `Feedback from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Feedback:
${feedback}

---
Sent from WRC Robotics Club Website
      `,
      html: `
        <h3>New Feedback Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h4>Feedback:</h4>
        <p>${feedback.replace(/\n/g, '<br>')}</p>
        <hr>
        <small>Sent from WRC Robotics Club Website</small>
      `
    };

    // For demonstration, we'll log the email data
    // In production, you'd send this to an email service
    console.log('Email would be sent:', emailData);

    // TODO: Implement actual email sending
    // You can use services like:
    // 1. Nodemailer with SMTP
    // 2. SendGrid
    // 3. Mailgun
    // 4. EmailJS
    // 5. Formspree

    // For now, we'll simulate success
    // Replace this with actual email sending logic
    const emailSent = await sendEmailUsingService(emailData);

    if (emailSent) {
      res.status(200).json({ 
        message: 'Feedback sent successfully!',
        success: true 
      });
    } else {
      res.status(500).json({ 
        message: 'Failed to send feedback. Please try again.',
        success: false 
      });
    }

  } catch (error) {
    console.error('Error sending feedback:', error);
    res.status(500).json({ 
      message: 'Server error. Please try again later.',
      success: false 
    });
  }
}

// Using Formspree for actual email delivery
async function sendEmailUsingService(emailData) {
  try {
    // Using Formspree to send emails directly to robotics@wrc.edu.np
    // This form ID is configured to send emails to robotics@wrc.edu.np
    
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/robotics@wrc.edu.np'; // Direct email submission
    
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: emailData.name,
        email: emailData.from,
        message: `Name: ${emailData.name}\nEmail: ${emailData.from}\n\nFeedback:\n${emailData.text}`,
        _replyto: emailData.from,
        _subject: emailData.subject
      }),
    });

    console.log('Formspree response status:', response.status);
    
    if (response.ok) {
      console.log('Email sent successfully via Formspree');
      return true;
    } else {
      const errorText = await response.text();
      console.error('Formspree error:', errorText);
      return false;
    }
    
  } catch (error) {
    console.error('Error sending email via Formspree:', error);
    return false;
  }
}