# Recommendation App

## Setup Instructions

1. Clone the repository

```
git clone https://github.com/your-username/recommendation-app.git
```

2. Install dependencies

```
npm install
```

3. Create `.env.local` file with:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Run the development server

```
npm run dev
```

## Deployment

### Vercel

1. Push to GitHub
2. Import to Vercel
3. Set environment variable `NEXT_PUBLIC_API_URL`
4. Deploy

### Other servers

```
npm run build
npm start
```
