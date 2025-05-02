# Strapi Blog Setup Guide

## Introduction
This guide will help you set up the content types needed for your blog in Strapi.

## Accessing Strapi Admin
1. Go to http://localhost:1337/admin
2. Log in with your credentials

## Content Types to Create

### 1. Category
1. Go to Content-Type Builder → Create new collection type
2. Name: Category
3. Fields:
   - name (Text, required)
   - slug (UID, required, based on name)
4. Save and continue

### 2. Tag
1. Go to Content-Type Builder → Create new collection type
2. Name: Tag
3. Fields:
   - name (Text, required)
   - slug (UID, required, based on name)
4. Save and continue

### 3. Author
1. Go to Content-Type Builder → Create new collection type
2. Name: Author
3. Fields:
   -   (Text, required)
   - avatar (Media, single file, image type)
4. Save and continue

### 4. Article
1. Go to Content-Type Builder → Create new collection type
2. Name: Article
3. Fields:
   - title (Text, required)
   - slug (UID, required, based on title)
   - content (Rich Text, required)
   - excerpt (Text, optional, long text)
   - readTime (Number, integer, optional)
   - coverImage (Media, single file, image type)
   - publishedAt (Date, datetime, required)
   - Relations:
     - category (Relation, many-to-one with Category)
     - author (Relation, many-to-one with Author)
     - tags (Relation, many-to-many with Tag)
4. Save and continue

## API Configuration
1. Go to Settings → Roles → Public
2. For each collection type (Article, Category, Tag, Author), enable:
   - Find and FindOne permissions
3. Save

## Sample Data Creation
1. Create at least one category (e.g., "Technology", "News")
2. Create at least one author with avatar
3. Create at least one tag (e.g., "Strapi", "Web Development")
4. Create a sample article linking to the created category, author, and tags

## Testing Your API
Test the endpoints:
- http://localhost:1337/api/articles
- http://localhost:1337/api/categories
- http://localhost:1337/api/tags
- http://localhost:1337/api/authors

## Next Steps
After setting up your content types, you can:
1. Update the Blog component to use your Strapi hooks
2. Ensure proper type mappings between Strapi response and your frontend 