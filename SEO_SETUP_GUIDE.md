# SEO Setup Guide - Poleris Digital

## ✅ Completed SEO Enhancements

### 1. Sitemap.xml ✅
- **Location**: `/src/app/sitemap.ts`
- **Auto-generated** at build time by Next.js
- **Accessible at**: `https://polerisdigital.com/sitemap.xml`
- **Includes**: Home, Privacy, Terms pages
- **Action Required**: Update `baseUrl` with your actual domain when you deploy

### 2. Robots.txt ✅
- **Location**: `/src/app/robots.ts`
- **Auto-generated** at build time by Next.js
- **Accessible at**: `https://polerisdigital.com/robots.txt`
- **Configuration**:
  - Allows all search engine crawlers
  - Blocks: `/api/`, `/admin/`, `/_next/`
  - Links to sitemap
- **Action Required**: Update `baseUrl` with your actual domain

### 3. Schema.org Structured Data ✅
- **Location**: `/src/components/seo/schema-markup.tsx`
- **Integrated in**: `/src/app/layout.tsx`
- **Includes**:
  - ✅ Organization Schema
  - ✅ LocalBusiness Schema
  - ✅ Service Schema
  - ✅ Website Schema

**Action Required**:
- Add your social media URLs in `organizationSchema.sameAs`
- Add physical coordinates if you have a location in `localBusinessSchema.geo`
- Update contact information if needed

### 4. Enhanced Meta Tags ✅
- **Location**: `/src/app/layout.tsx`
- **Includes**:
  - Title tags
  - Meta descriptions (expanded and detailed)
  - Keywords (10 relevant keywords)
  - OpenGraph tags
  - Twitter Card tags
  - Canonical URLs
  - Publisher info
  - Robots directives

**Action Required**:
- Update `verification.google` with your Google Search Console verification code
- Update `twitter.creator` with your actual Twitter handle

### 5. Page-Specific Meta Tags ✅
- **Privacy Page**: Enhanced meta description + OpenGraph
- **Terms Page**: Enhanced meta description + OpenGraph
- **Home Page**: Comprehensive meta tags

---

## 🎨 Action Required: Create OpenGraph Image

### What is an OpenGraph Image?
When someone shares your website on social media (Facebook, Twitter, LinkedIn, etc.), this image appears as a preview.

### Specifications:
- **File Name**: `og-image.jpg` (or `.png`)
- **Location**: `/public/og-image.jpg`
- **Dimensions**: **1200px x 630px** (required)
- **File Size**: Under 5MB (recommended under 1MB)
- **Format**: JPG or PNG

### Design Recommendations:
1. **Include**:
   - Your logo
   - Tagline: "Hand-Coded Websites That Deliver Results"
   - Brand colors (Navy blue #001f3d and Cyan #06b6d4)
   - Clean, professional design

2. **Tools to Create It**:
   - Canva (free template: "Facebook Post" 1200x630)
   - Figma
   - Photoshop
   - Online OG image generators

3. **Example Text**:
   ```
   POLERIS DIGITAL
   Professional Web Design & Development
   Custom Websites • SEO • Google Ads • Hosting
   ```

### Quick Setup:
1. Create the image (1200x630px)
2. Save as `/public/og-image.jpg`
3. Done! It's already configured in your code

---

## 📊 How to Verify SEO Setup

### 1. Test Structured Data
- Visit: https://search.google.com/test/rich-results
- Enter your website URL
- Verify all 4 schemas appear (Organization, LocalBusiness, Service, Website)

### 2. Test OpenGraph Tags
- Visit: https://www.opengraph.xyz/
- Enter your website URL
- Check how it looks on Facebook, Twitter, LinkedIn

### 3. Test Sitemap
- Visit: `https://yoursite.com/sitemap.xml`
- Should see XML with all your pages listed

### 4. Test Robots.txt
- Visit: `https://yoursite.com/robots.txt`
- Should see crawl rules and sitemap link

---

## 🚀 Next Steps After Deployment

### 1. Submit to Google Search Console
1. Go to: https://search.google.com/search-console
2. Add your property (website)
3. Verify ownership with the code in `layout.tsx` (line 76)
4. Submit your sitemap: `https://yoursite.com/sitemap.xml`

### 2. Submit to Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add your site
3. Submit sitemap

### 3. Create Google Business Profile
- Important for local SEO
- Adds your business to Google Maps
- Shows in local search results

### 4. Monitor Performance
- Google Search Console: Track rankings and clicks
- Google Analytics: Track traffic and user behavior
- Bing Webmaster Tools: Monitor Bing/Yahoo search performance

---

## 📝 Configuration Checklist

Before deploying, update these values:

### In `/src/app/sitemap.ts`:
```typescript
const baseUrl = 'https://polerisdigital.com'; // ← Your actual domain
```

### In `/src/app/robots.ts`:
```typescript
const baseUrl = 'https://polerisdigital.com'; // ← Your actual domain
```

### In `/src/app/layout.tsx`:
```typescript
// Line 37
metadataBase: new URL("https://polerisdigital.com"), // ← Your domain

// Line 76
google: "your-google-verification-code", // ← From Search Console

// Line 62
creator: "@polerisdigital", // ← Your Twitter handle
```

### In `/src/components/seo/schema-markup.tsx`:
```typescript
// Add social media URLs (lines 28-32)
sameAs: [
  'https://www.facebook.com/yourpage',
  'https://www.linkedin.com/company/yourcompany',
  'https://twitter.com/yourhandle',
],

// Add physical location if you have one (lines 57-60)
geo: {
  '@type': 'GeoCoordinates',
  latitude: 40.7128,  // Your coordinates
  longitude: -74.0060,
},
```

---

## 🎯 Expected Results

After implementing these SEO enhancements, you should see:

1. **Better Search Rankings**: Rich snippets in Google search results
2. **Higher Click Rates**: Attractive social media previews
3. **Improved Visibility**: Proper indexing by search engines
4. **Professional Appearance**: Branded cards when shared on social media
5. **Local Discovery**: Better local SEO with LocalBusiness schema

---

## 📧 Need Help?

If you need assistance with any of these steps, reach out to your development team or SEO specialist.

**Remember**: SEO is a long-term investment. Results typically take 3-6 months to fully materialize.
