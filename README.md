## Getting Started (For 3x03 members reference)
With reference to; https://www.youtube.com/watch?v=FcRWgWQale4&ab_channel=CodingwithBasir
1. Create a next app
```bash
npx create-next-app@latest
```
2. CD into created folder
```bash
npm install @mui/material @mui/styles @mui/icons-material @emotion/styled @emotion/server @emotion/react --legacy-peer-deps 
```
3.  Install Sanity (In Part 6) then activate coupon code
```bash
npm install -g @sanity/cli
sanity init --coupon codingwithbasir
```

3.  Install Sanity (In Part 7) (double check vid which file directory it was installed)
```bash
npm install @sanity/client --legacy-peer-deps 
```
Our Production ID
```bash
r1jsz9gv
```
Install Sanity Image URL (Part 7)
```bash
npm install @sanity/image-url --legacy-peer-deps
```

## List of errors encountered (nothing disastrous but good to note)
1. https://nextjs.org/docs/messages/react-hydration-error (At part 5)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started (Boilerpate Readme)

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
