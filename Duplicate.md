# Potential Unused File Analysis

**Disclaimer:** This analysis is based on automated text searches (`grep`) and file listings. It is **not definitive** and does **not guarantee** that the listed files are truly unused. Files might be referenced indirectly, dynamically, or through build configurations not detected by simple searches. **Always manually verify before deleting any file.**

## Methodology

1.  Key directories (`public`, `src/components`, `src/lib`, `src/styles`, `src/pages`) were listed.
2.  Basic `grep` searches were performed for import statements and JSX tag usage for a few selected components within the `src/**/*.{tsx,jsx}` files.
3.  Files with zero or very few apparent references were flagged for review.

## Strong Candidates for Review

The following files showed **zero direct references** in the limited search performed and warrant manual investigation:

*   `frontend/enablr-home-bliss/src/components/StaticInsights.tsx`
    *   **Reason:** No `import StaticInsights` statements or `<StaticInsights ...>` JSX tags were found in the search across `.tsx`/`.jsx` files.
*   `frontend/enablr-home-bliss/src/components/LazyImage.tsx`
    *   **Reason:** No `import LazyImage` statements or `<LazyImage ...>` JSX tags were found outside its own definition file. It might have been superseded by `Image.tsx`.

## Other Observations & Considerations

*   **Public Assets (`public/`)**:
    *   Contains numerous images (`.jpg`, `.png`, `.webp`, `.svg`) and videos (`.mp4`).
    *   Large video files (`Carousel_Video*.mp4`) are significant in size. Confirm usage in `HeroSection.tsx` and consider optimization.
    *   Duplicate-sounding names (e.g., `worksapce (1).png` / `worksapce (1).webp`) might indicate originals vs. optimized versions. Verify which are needed.
    *   Files like `logo-ph-1.png` (1 byte) seem suspicious and could be placeholders or errors.
    *   Many `.webp` versions exist alongside `.png`/`.jpg`. Ensure fallbacks are necessary for target browsers.
*   **Component Structure (`src/components/`)**: The deep directory structure increases complexity for tracking usage manually.
*   **Limitations**: This analysis did not check:
    *   CSS file references (`url(...)`).
    *   Dynamic imports or references constructed from strings.
    *   Usage within configuration files or build scripts.
    *   Re-exported components.

## Recommendations for Manual Verification

1.  **Review Candidates:**
    *   Examine `StaticInsights.tsx` and `LazyImage.tsx`.
    *   Check version control history (`git log -- <file_path>`) for context on their creation/modification.
    *   Perform more specific searches if needed.
2.  **Audit `public/` Assets:**
    *   Manually check components (esp. `HeroSection`, `Image`) and CSS (`index.css`, etc.) for references to images/videos.
    *   Consider image/video optimization tools.
    *   Delete assets confirmed to be unlinked.
3.  **Use Browser DevTools:**
    *   Open your site, navigate through *all* pages.
    *   Use the `Network` tab to see which assets are requested. Assets *not* requested might be unused (but beware of preloading/dynamic loading).
4.  **Consider Advanced Tools (Optional):**
    *   Linters like `eslint-plugin-import` can sometimes detect unused exports.
    *   Dependency analysis tools like `depcheck` might help identify unused npm packages (though not necessarily unused local files).

**Conclusion:** Use this list as a starting point. **Delete files only after thorough manual verification** to avoid breaking your website. 