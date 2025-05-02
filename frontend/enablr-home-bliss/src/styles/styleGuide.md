# Enablr Design System Style Guide

## Color Palette

### Primary Colors
- **Enablr Navy** (`bg-enablr-navy`): Primary brand color used for buttons, headers, and accent elements
- **White** (`text-white`): Used for text on dark backgrounds and as background for cards

### Secondary Colors
- **Blue Gradient**: `from-blue-50/70 to-gray-50` for light section backgrounds
- **Blue/Red Gradient**: Used for hover states `from-blue-800 to-red-600`

### Accent Colors
- **Light Blue**: `bg-blue-100` for subtle highlights and hover states
- **Pink/Purple**: Used in decorative gradients

## Typography

Leverage the typography utility:
```jsx
import { typography } from "@/styles/typography";

// Usage examples
<h1 className={`${typography.h1} text-enablr-navy`}>Heading 1</h1>
<h2 className={`${typography.h2} text-enablr-navy tracking-tight`}>Heading 2</h2>
<h3 className={`${typography.h3} text-enablr-navy`}>Heading 3</h3>
<h4 className={`${typography.h4} text-enablr-navy`}>Heading 4</h4>
<p className={`${typography.body.base} text-gray-600`}>Regular text</p>
<p className={`${typography.body.lg} text-gray-600`}>Larger body text</p>
```

## Layout Patterns

### Section Containers
```jsx
<section className="py-24 relative overflow-hidden">
  {/* Background patterns and decorative elements */}
  
  <div className="container mx-auto px-4 max-w-6xl relative z-10">
    {/* Content here */}
  </div>
</section>
```

### Grid Layouts
```jsx
<div className="flex flex-col md:flex-row items-start justify-between gap-12">
  <div className="w-full md:w-2/5">
    {/* Left content */}
  </div>
  <div className="w-full md:w-3/5">
    {/* Right content */}
  </div>
</div>
```

### Card Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Card components */}
</div>
```

## Background Patterns

### Grid Pattern
```jsx
{/* Light background with dark grid */}
<div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-[0.03]"></div>

{/* Dark background with light grid */}
<div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-10"></div>
```

### Decorative Elements
```jsx
{/* Gradient blobs for corners */}
<div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-purple-200 to-blue-200 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
```

## Component Styles

### Buttons
```jsx
<Button 
  asChild
  size="lg"
  className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy hover:border hover:border-enablr-navy shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
>
  <Link to="/contact" className="flex items-center gap-2">
    Button Text
    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
</Button>
```

### Feature Cards
```jsx
<div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group relative">
  {/* Top accent line with gradient hover */}
  <div className="absolute top-0 left-0 w-full h-1 bg-enablr-navy opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-red-600 transition-colors duration-300"></div>
  
  {/* Decorative corner gradient */}
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-red-50 rounded-tl-[80px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  
  {/* Icon with card content */}
  <div className="flex items-start gap-4">
    <div className="relative w-12 h-12 flex-shrink-0">
      <div className="absolute inset-0 bg-enablr-navy/10 rounded-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <YourIcon className="w-5 h-5 text-enablr-navy" />
      </div>
    </div>
    
    <div>
      <h3 className={`${typography.h4} text-enablr-navy group-hover:text-enablr-navy transition-colors duration-300 mb-2`}>
        Card Title
      </h3>
      <p className={`${typography.body.base} text-gray-600 leading-relaxed font-light`}>
        Card description goes here with detailed explanation.
      </p>
    </div>
  </div>
</div>
```

## Animation Patterns

### Scroll Animations with Framer Motion
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  {/* Content */}
</motion.div>
```

### Staggered Animations
```jsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
  >
    {/* Content */}
  </motion.div>
))}
```

## Responsive Design Guidelines

- Use `flex-col md:flex-row` for column-to-row layouts
- Use width utilities like `w-full md:w-2/5` for responsive widths
- Standard breakpoints:
  - Mobile: Default
  - Tablet: `md:` (768px and up)
  - Desktop: `lg:` (1024px and up)
  - Large Desktop: `xl:` (1280px and up)

## Accessibility Guidelines

- Maintain appropriate color contrast (4.5:1 for regular text)
- Use semantic HTML elements
- Include proper focus states for interactive elements
- Ensure all interactive elements are keyboard accessible
- Add appropriate alt text for images 