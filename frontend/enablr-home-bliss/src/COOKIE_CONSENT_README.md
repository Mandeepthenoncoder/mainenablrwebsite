# Enablr Cookie Consent Implementation Guide

This document provides comprehensive information on implementing and customizing the cookie consent solution for the Enablr website.

## Table of Contents
1. [Overview](#overview)
2. [Implementation](#implementation)
3. [Features](#features)
4. [Customization](#customization)
5. [GDPR Compliance](#gdpr-compliance)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

## Overview

The cookie consent solution follows Enablr's brand colors and provides a user-friendly interface for visitors to control their cookie preferences. It consists of:

1. **CookieConsent component**: A banner that appears at the bottom of the page when a user first visits
2. **CookiePreferencesModal component**: A modal dialog for detailed cookie preference management
3. **cookieUtils**: Utility functions for cookie management and consent tracking

## Implementation

### 1. File Structure

```
src/
├── components/
│   └── cookies/
│       ├── CookieConsent.tsx
│       └── CookiePreferencesModal.tsx
├── utils/
│   └── cookieUtils.ts
└── App.tsx (with CookieConsent integration)
```

### 2. Integration

The cookie consent system is already integrated into the application in `App.tsx`. It:

- Initializes cookies on app load with `initializeCookies()`
- Includes the `<CookieConsent />` component at the root level

### 3. Using Cookie Utilities

To check if a specific cookie category is allowed:

```tsx
import { isCookieAllowed } from './utils/cookieUtils';

// Example: Check if analytics cookies are allowed
if (isCookieAllowed('analytics')) {
  // Initialize analytics
}
```

## Features

### 1. Banner Behavior

- Appears on first visit or when consent expires (1 year)
- Offers three options: Accept All, Reject All, Customize
- Smooth animation for appearance and disappearance
- Responsive design for all screen sizes

### 2. Preferences Modal

- Lists all cookie categories with clear descriptions
- Toggle switches for optional categories
- Necessary cookies cannot be disabled
- Save and Cancel options
- Smooth animation

### 3. Consent Management

- Preferences stored in localStorage under `enablr_cookie_consent`
- Automatic expiration after 1 year (configurable)
- Permissions tracked by category (necessary, analytics, marketing, functional)

## Customization

### 1. Changing Text Content

Edit the text in `CookieConsent.tsx` and `CookiePreferencesModal.tsx` to modify:
- Banner message
- Button labels
- Cookie category descriptions
- Legal links

### 2. Styling

The components use Tailwind CSS with Enablr's brand colors:
- `bg-enablr-navy` (dark blue-navy, #0f172a)
- `bg-white` (white, #ffffff)
- `bg-black` (black, #000000)
- `bg-enablr-dark-blue` (darker blue, #1A1F2C)
- `bg-enablr-coral` (coral, #FDE1D3)
- `bg-enablr-light-coral` (light coral, #fff1ec)
- `bg-enablr-purple` (purple, #7E69AB)

To modify styles, edit the className properties in the components.

### 3. Adding New Cookie Categories

1. Update the `CookiePreferences` interface in `CookieConsent.tsx`
2. Add the new category to `defaultCookiePreferences`
3. Add the category information in `cookieCategoryInfo` in `CookiePreferencesModal.tsx`
4. Update the `enableCookiesForCategory` function in `cookieUtils.ts`

## GDPR Compliance

The implementation follows GDPR requirements:

1. **Prior Consent**: Cookies are only enabled after explicit consent
2. **Granular Control**: Users can select specific categories
3. **Equal Choice**: "Accept" and "Reject" buttons have equal prominence
4. **Informed Consent**: Clear descriptions for each cookie category
5. **Easy Withdrawal**: Preferences can be changed at any time
6. **Consent Record**: Timestamp recorded with preferences
7. **Renewed Consent**: Expires after 1 year

## Best Practices

1. **Performance**: 
   - Banner appears after the main content loads
   - Components use code-splitting
   - Animations optimized for performance

2. **Accessibility**:
   - All interactive elements are keyboard navigable
   - Color contrast meets WCAG guidelines
   - Screen reader friendly with appropriate ARIA attributes

3. **Mobile Experience**:
   - Fully responsive design
   - Touch-friendly toggle switches
   - Optimized layout for small screens

## Troubleshooting

### Common Issues

1. **Banner appears for users who already consented**:
   - Check if localStorage is available/enabled
   - Verify the consent hasn't expired
   - Check browser privacy settings

2. **Scripts still loading without consent**:
   - Ensure all scripts check consent status before loading
   - Verify implementation of `isCookieAllowed()`

3. **Banner styling issues**:
   - Check if Tailwind CSS classes are properly configured
   - Verify z-index settings

### Debugging

For debugging consent status:

```js
// In browser console
console.log(JSON.parse(localStorage.getItem('enablr_cookie_consent')));
```

## Testing

Test the following scenarios:

1. First-time visitor experience
2. Returning visitor with saved preferences
3. Changing preferences
4. Preference expiration
5. Mobile device display and interaction
6. Screen reader accessibility

---

For further assistance or to report issues, please contact the development team. 