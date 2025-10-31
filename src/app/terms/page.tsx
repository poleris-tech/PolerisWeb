import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Poleris Digital',
  description: 'Terms of Service for Poleris Digital - Understand the terms and conditions for using our web design and development services.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#001f3d] via-[#002D5C] to-[#001f3d] dark:from-[#001529] dark:via-[#001f3d] dark:to-[#001529] text-white py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-white/80">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Agreement to Terms</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              These Terms of Service ("Terms") govern your use of the Poleris Digital website and services.
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree with
              any part of these Terms, you may not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Services Provided</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              Poleris Digital provides the following services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li>Custom web design and development</li>
              <li>Website hosting and maintenance</li>
              <li>Search Engine Optimization (SEO) services</li>
              <li>Google PPC advertising management</li>
              <li>Technical support and consultation</li>
            </ul>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mt-4">
              Specific services, deliverables, timelines, and pricing will be outlined in individual project agreements or quotes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Use of Our Website</h2>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Permitted Use</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code, viruses, or malware</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to scrape or data mine our website</li>
              <li>Interfere with the proper functioning of our website</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Account Security</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              If you create an account with us, you are responsible for maintaining the confidentiality of your
              login credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Client Responsibilities</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              When engaging our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li>Provide accurate and complete information</li>
              <li>Provide timely feedback and approvals</li>
              <li>Supply necessary content, images, and materials</li>
              <li>Make payments according to agreed terms</li>
              <li>Have legal rights to any materials you provide</li>
              <li>Comply with all applicable laws regarding your website content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Payment Terms</h2>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Pricing</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              Our standard pricing includes a one-time development fee and monthly hosting fee as outlined on our
              pricing page. Custom quotes may vary based on project scope and requirements.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Payment Schedule</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              Unless otherwise agreed:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li>One-time development fees are typically paid 50% upfront and 50% upon completion</li>
              <li>Monthly hosting fees are billed in advance</li>
              <li>Additional services are invoiced separately</li>
              <li>Payment is due within 7 days of invoice date</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Late Payments</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              Late payments may result in service suspension or termination. A late fee may be applied to overdue invoices.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Refunds</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              Refund policies will be outlined in individual project agreements. Generally, work completed is non-refundable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Ownership</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              Upon full payment, you own the custom website code and design we create for you. We retain the right
              to use general techniques, methodologies, and reusable components in future projects.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Portfolio Use</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              We reserve the right to display completed projects in our portfolio and marketing materials unless
              otherwise agreed in writing.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Third-Party Assets</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              Any third-party software, plugins, or assets used in your project remain the property of their
              respective owners and are subject to their licensing terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Warranties and Disclaimers</h2>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Service Warranty</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              We warrant that our services will be performed professionally and in accordance with industry standards.
              We will correct any defects in our work at no additional charge for a period specified in your project agreement.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Disclaimer</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li>Uninterrupted or error-free website operation</li>
              <li>Specific search engine rankings or traffic results</li>
              <li>Compatibility with all browsers or devices (though we strive for broad compatibility)</li>
              <li>Complete security against cyber attacks or data breaches</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Limitation of Liability</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, POLERIS DIGITAL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY
              OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300 mt-4">
              <li>Your use of or inability to use our services</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Third-party conduct or content on our services</li>
              <li>Any other matter relating to our services</li>
            </ul>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mt-4">
              Our total liability for any claims under these Terms is limited to the amount you paid us in the
              12 months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Service Level Agreement</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              For hosting services, we guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300">
              <li><strong>99.9% Uptime:</strong> We strive to maintain your website's availability</li>
              <li><strong>24/7 Monitoring:</strong> We monitor server performance continuously</li>
              <li><strong>Daily Backups:</strong> Your website data is backed up daily</li>
              <li><strong>Priority Support:</strong> Technical support during business hours</li>
            </ul>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mt-4">
              Scheduled maintenance and circumstances beyond our control (force majeure) are excluded from uptime guarantees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Termination</h2>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">By Client</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              You may terminate hosting services with 30 days' written notice. One-time development fees for work
              completed are non-refundable. Upon termination, we will provide your website files and data.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">By Us</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              We may terminate services immediately if you breach these Terms, fail to make payments, or engage in
              illegal activities. We may also terminate with 30 days' notice for any reason.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3d] dark:text-white mt-6 mb-3">Effect of Termination</h3>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              Upon termination, all outstanding fees become immediately due. We will remove your website from our
              hosting servers and cease providing support services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Indemnification</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless Poleris Digital from any claims, damages, losses, liabilities,
              and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#001f3d]/80 dark:text-gray-300 mt-4">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Content you provide or publish using our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Dispute Resolution</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              In the event of a dispute, we encourage you to contact us first to seek an amicable resolution.
              If we cannot resolve the dispute informally, any legal action must be brought in the courts of
              the United States, and you consent to the jurisdiction of such courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Changes to Terms</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of significant changes
              via email or through a notice on our website. Your continued use of our services after such changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Severability</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be
              limited or eliminated to the minimum extent necessary, and the remaining provisions will remain
              in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Entire Agreement</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
              These Terms, together with any project agreements and our Privacy Policy, constitute the entire
              agreement between you and Poleris Digital regarding our services and supersede all prior agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-4">Contact Information</h2>
            <p className="text-[#001f3d]/80 dark:text-gray-300 leading-relaxed mb-4">
              For questions about these Terms or our services, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800">
              <p className="text-[#001f3d] dark:text-white font-semibold mb-2">Poleris Digital</p>
              <p className="text-[#001f3d]/80 dark:text-gray-300">Email: <a href="mailto:ohwdinfo@gmail.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">ohwdinfo@gmail.com</a></p>
              <p className="text-[#001f3d]/80 dark:text-gray-300">Phone: <a href="tel:+12195762539" className="text-cyan-600 dark:text-cyan-400 hover:underline">(219) 576-2539</a></p>
              <p className="text-[#001f3d]/80 dark:text-gray-300">Location: United States</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-[#001f3d]/60 dark:text-gray-500 text-center">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
