'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { CustomButton } from '@/components/ui/custom-button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prev) => ({
      ...prev,
      phone: value || '',
    }));
    // Clear phone error
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation (2-50 characters)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but validate if provided)
    if (formData.phone && formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Subject validation (5-100 characters)
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = 'Subject must be less than 100 characters';
    }

    // Message validation (10-1000 characters)
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);

    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.',
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        .phone-input-custom .PhoneInputInput {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          color: #001f3d;
          font-size: 0.875rem;
          transition: all 0.3s;
        }
        .phone-input-custom .PhoneInputInput:focus {
          outline: none;
          border-color: transparent;
          box-shadow: 0 0 0 2px #3b82f6;
        }
        .phone-input-custom .PhoneInputInput::placeholder {
          color: #9ca3af;
        }
        .phone-input-custom.phone-error .PhoneInputInput {
          border-color: #ef4444;
        }
        .phone-input-custom .PhoneInputCountry {
          margin-right: 0.5rem;
        }
        .phone-input-custom .PhoneInputCountryIcon {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 0.25rem;
          overflow: hidden;
          box-shadow: none;
          border: none;
        }
        .phone-input-custom .PhoneInputCountrySelect {
          padding: 0.5rem;
          margin-right: 0.5rem;
          border: none;
          background: transparent;
          outline: none;
        }
        .phone-input-custom .PhoneInputCountrySelect:focus {
          outline: none;
          border: none;
        }
        .phone-input-custom .PhoneInputCountrySelectArrow {
          border: none;
          opacity: 0.5;
        }
      `}</style>
      <section
        id="contact"
        className="relative bg-white overflow-hidden py-12 md:py-16"
      >
      <div className="container relative max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="text-blue-600 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Get In Touch
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#001f3d] mb-3">
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-sm sm:text-base md:text-lg text-[#001f3d]/70 max-w-2xl">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </ScrollReveal>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start px-4 sm:px-0">
          {/* Left Column: Image & Contact Info - Hidden on mobile */}
          <ScrollReveal direction="left" delay={0.4} duration={0.8}>
            <div className="relative hidden lg:block lg:order-1">
              {/* Contact Image/Illustration */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/Contact_us.svg"
                    alt="Contact Us"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal direction="right" delay={0.5} duration={0.8}>
            <div className="relative lg:order-2 order-1">
            <div className="relative bg-white rounded-xl border-2 border-gray-100 p-6 sm:p-8 shadow-xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 rounded-xl pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="relative space-y-4">
                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg border-2 ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 border-green-200 text-green-800'
                        : 'bg-red-50 border-red-200 text-red-800'
                    } animate-fade-in`}
                  >
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#001f3d] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={50}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg text-[#001f3d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#001f3d] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg text-[#001f3d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#001f3d] mb-2">
                    Phone Number (Optional)
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`phone-input-custom ${errors.phone ? 'phone-error' : ''}`}
                    placeholder="Enter phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#001f3d] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    maxLength={100}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg text-[#001f3d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.subject ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Web Development Project"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#001f3d] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1000}
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg text-[#001f3d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && (
                      <p className="text-sm text-red-600">{errors.message}</p>
                    )}
                    <p className={`text-xs ${errors.message ? 'ml-auto' : ''} ${formData.message.length > 1000 ? 'text-red-600' : 'text-gray-500'}`}>
                      {formData.message.length}/1000
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <CustomButton
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<Send className="w-5 h-5" />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </CustomButton>
              </form>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    </>
  );
}
