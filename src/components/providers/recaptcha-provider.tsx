'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ReactNode } from 'react';

interface ReCaptchaProviderProps {
  children: ReactNode;
}

export function ReCaptchaProvider({ children }: ReCaptchaProviderProps) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Always render the provider, but with a fallback key if not configured
  // This prevents the "Context has not been implemented" error
  const recaptchaKey = siteKey && siteKey !== 'your_site_key_here'
    ? siteKey
    : '6LfMX_YrAAAAADaelUr-2dVVI2TGXgpnNQ_67dN6'; // Your actual site key as fallback

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
