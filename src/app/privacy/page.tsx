import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Poleris Digital',
  description: 'Privacy Policy for Poleris Digital - Learn how we collect, use, and protect your personal information when you use our web design and development services.',
  openGraph: {
    title: 'Privacy Policy | Poleris Digital',
    description: 'Learn how Poleris Digital protects your privacy and handles your personal information.',
    url: 'https://polerisdigital.com/privacy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://polerisdigital.com/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#001f3d] via-[#002D5C] to-[#001f3d] dark:from-[#001529] dark:via-[#001f3d] dark:to-[#001529] text-white py-12 sm:py-16 md:py-20 px-6 sm:px-0">
        <div className="container mx-auto sm:px-8 md:px-10 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-base sm:text-lg text-white/80">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Introduction</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              Poleris Digital ("we," "our," or "us") respects your privacy and is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services.
            </p>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Personal Information</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li>Fill out our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a quote or consultation</li>
              <li>Communicate with us via email or live chat</li>
            </ul>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mt-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Message content</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Operating system</li>
            </ul>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">How We Use Your Information</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services</li>
              <li>Process your service requests and quotes</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze website usage and trends</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files
              stored on your device. You can control cookie preferences through your browser settings.
            </p>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              We may use:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Third-Party Services</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              We may use third-party services to help us operate our website and provide our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li><strong>Resend:</strong> Email delivery service for contact form submissions</li>
              <li><strong>Google reCAPTCHA:</strong> Spam protection (subject to Google's Privacy Policy)</li>
              <li><strong>Tawk.to:</strong> Live chat service (subject to Tawk.to's Privacy Policy)</li>
              <li><strong>Vercel/Netlify:</strong> Website hosting and analytics</li>
            </ul>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mt-4">
              These third parties have their own privacy policies and may collect data independently.
            </p>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Data Security</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information.
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Your Rights</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
            </ul>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at the email address below.
            </p>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Children's Privacy</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If you believe we have collected information from a child, please contact us
              immediately.
            </p>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Data Retention</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">International Data Transfers</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence.
              We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be indicated by the
              "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8 px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Contact Us</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800">
              <p className="text-[#001f3d] dark:text-white font-semibold mb-2">Poleris Digital</p>
              <p className="text-[#001f3d]/80 dark:text-gray-300">Email: <a href="mailto:ohwdinfo@gmail.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">ohwdinfo@gmail.com</a></p>
              <p className="text-[#001f3d]/80 dark:text-gray-300">Phone: <a href="tel:+12195762539" className="text-cyan-600 dark:text-cyan-400 hover:underline">(219) 576-2539</a></p>
              <p className="text-[#001f3d]/80 dark:text-gray-300">Location: United States</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 px-4 sm:px-0">
            <p className="text-sm text-[#001f3d]/60 dark:text-gray-500 text-center">
              This Privacy Policy is effective as of {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} and will remain in effect except with respect to any changes in its provisions in the future.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
