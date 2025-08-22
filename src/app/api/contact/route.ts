import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, businessType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !company || !businessType) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Lazlle & Co Website

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Company: ${company}
- Business Type: ${businessType}

Message:
${message || 'No additional message provided'}

---
This email was sent from the Lazlle & Co contact form.
`;

    // Create mailto link
    const subject = encodeURIComponent(`New Contact Form Submission from ${name} at ${company}`);
    const bodyEncoded = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:lazlleanco@gmail.com?subject=${subject}&body=${bodyEncoded}`;

    // Return the mailto link to be opened on the client side
    return NextResponse.json({
      success: true,
      mailtoLink: mailtoLink
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}