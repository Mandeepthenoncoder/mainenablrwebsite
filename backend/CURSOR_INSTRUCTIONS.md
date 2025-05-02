# Cursor IDE - Project Instructions

## General Guidelines

- **No Edits Without Request**: Don't modify any section entirely unless specifically requested
- **Premium Look**: Maintain high design standards across all components
- **Responsive First**: Always consider mobile, tablet, and desktop views equally

## Workflow Recommendations

### 1. Component Development

When creating new components:
- Reference existing components in `/src/components` for styling conventions
- Follow the established pattern for props and state management
- Use the shadcn/ui component library as foundation

### 2. Responsiveness Guidelines

- Use the existing Tailwind breakpoints consistently
- Test all components across multiple screen sizes
- Ensure touch targets are at least 44×44px on mobile
- Avoid fixed pixel widths that may cause overflow on small screens

### 3. Code Quality

- Maintain type safety with TypeScript
- Follow the established naming conventions
- Organize imports consistently
- Add JSDoc comments for complex functions

### 4. Working with Carousel Components

- Use the same embla-carousel version (8.6.0) for all carousel-related packages
- Test carousel interactions on touch devices
- Ensure proper keyboard navigation for accessibility

### 5. Performance Considerations

- Lazy load images and heavy components
- Use React.memo for expensive renders
- Implement proper loading states for async operations
- Consider code splitting for larger page components

### 6. Premium Design Elements

- Maintain proper spacing between elements (consistent margin/padding)
- Ensure text has sufficient contrast with backgrounds
- Use animations sparingly and purposefully
- Keep brand colors consistent throughout the application

## Troubleshooting

### Common Issues

- **Package Version Conflicts**: Ensure all embla-carousel packages use the same version
- **Type Errors**: Check for proper TypeScript typing, especially with third-party libraries
- **Responsive Issues**: Test problematic components in isolation at different breakpoints

### Using Cursor Effectively

- Use the Semantic Search feature to find relevant code patterns
- Leverage AI-assisted code completion for consistent styling
- Save common Tailwind patterns as snippets for reuse
- Use Cursor's multi-cursor feature for batch edits across similar components

## Project-specific Notes

- The project uses Tailwind CSS for styling
- Component library is based on shadcn/ui
- React Router is used for navigation
- State management is primarily through React hooks 