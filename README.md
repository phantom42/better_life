# Adoption Means A Better Life

A standalone React site presenting articles that challenge the claim that adoption guarantees a better life. Built as a spinoff from [adoption-myths.com](https://adoption-myths.com).

## Stack

- **React 19** + **Vite**
- **TypeScript**
- **Tailwind CSS v4**
- **React Router v7** (loader-based data fetching)
- **Vitest** + **React Testing Library**

## Setup

```bash
npm install
```

Create a `.env` file at the project root:

```env
VITE_API_KEY=your_api_key
VITE_API_URL=http://localhost:3000
```

`VITE_API_URL` points to the [adoptionmyths server](../server), which proxies requests to the Raindrop.io API. The Vite dev server proxies all `/api` requests to that URL.

## Development

```bash
npm run dev       # starts on http://localhost:5174
```

The adoptionmyths server must also be running locally (`npm run dev` from `../server`) for data to load.

## Testing

```bash
npm test          # run tests in watch mode
npm run test:ui   # open Vitest UI
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── api/queries/       # fetch functions (getRaindrops)
├── components/        # Raindrop, SearchBox, SocialLinks
├── pages/BetterLife/  # page component + loader
├── types/             # TypeScript interfaces
└── test/              # Vitest setup
```

## Deployment

Set `VITE_API_URL` to the production server URL in your deployment environment. Ensure the server's CORS `allowedOrigins` includes the production domain of this site.
