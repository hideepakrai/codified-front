// Run: node scripts/test-smtp.mjs
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: 'hello@codifiedweb.com',
    pass: '#105MohanNagar',
  },
});

console.log('🔌 Testing SMTP connection...');

try {
  await transporter.verify();
  console.log('✅ SMTP connection successful!');

  const info = await transporter.sendMail({
    from: 'Codified Web <hello@codifiedweb.com>',
    to: 'vijendrachudhary3344@gmail.com',
    subject: '✅ SMTP Test — Codified Web Contact Form',
    html: '<p>SMTP is working correctly. Contact form emails will be delivered.</p>',
  });

  console.log('✅ Test email sent! Message ID:', info.messageId);
} catch (err) {
  console.error('❌ SMTP Error:', err.message);
  console.error('   Code:', err.code);
  console.error('   Response:', err.response);
}
