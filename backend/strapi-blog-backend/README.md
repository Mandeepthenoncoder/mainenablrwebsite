# Enablr Blog Backend with Strapi

This is the Strapi backend for the Enablr blog system. It provides a headless CMS for managing blog content that is consumed by the frontend application.

## Content Types

The following content types are configured for the blog system:

1. **Article**
   - Basic fields: title, slug, content, excerpt, readTime, publishedAt
   - Media: coverImage
   - Relations: author, category, tags

2. **Category**
   - Fields: name, slug

3. **Author**
   - Fields: name
   - Media: avatar

4. **Tag**
   - Fields: name, slug

## Getting Started

### Development

Start the development server:

```bash
npm run develop
# or
yarn develop
```

### Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start Strapi in production mode:

```bash
npm run start
# or
yarn start
```

## Admin Setup

### Accessing the Admin Interface

1. Go to [http://localhost:1337/admin](http://localhost:1337/admin)
2. Log in with your administrator credentials

### API Permissions

For the blog API to work properly, ensure the following permissions are set:

1. Go to Settings → Roles → Public
2. Enable the following permissions for each content type:
   - Article: find, findOne
   - Category: find, findOne
   - Author: find, findOne
   - Tag: find, findOne
3. Save changes

## API Endpoints

### Main Endpoints

- Articles: `http://localhost:1337/api/articles`
- Categories: `http://localhost:1337/api/categories`
- Authors: `http://localhost:1337/api/authors`
- Tags: `http://localhost:1337/api/tags`

### Query Parameters

Strapi supports various query parameters:

- Filtering: `?filters[field][operator]=value`
- Sorting: `?sort[0]=field:asc`
- Pagination: `?pagination[page]=1&pagination[pageSize]=10`
- Field selection: `?fields[0]=title&fields[1]=content`
- Populate relations: `?populate=author,category,tags`

## Frontend Integration

The Enablr frontend uses the `@strapi/client` package to interact with the Strapi API. The integration is located in:

- `enablr-home-bliss/src/services/strapi.ts` - Strapi client setup
- `enablr-home-bliss/src/hooks/useStrapi.ts` - Data fetching hooks
- `enablr-home-bliss/src/utils/strapiUtils.ts` - Utilities for working with Strapi data

## Learn More

To learn more about Strapi, check out the [Strapi Documentation](https://docs.strapi.io).

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
