# Life Insurance Frontend – README.md

## Project Overview

A Next.js (TypeScript) frontend for the life insurance recommendation MVP. It collects user profile data and displays a personalized recommendation with explanation.

GitHub Repository: [life-insurance-frontend](https://github.com/manoj-fullstack-developer/life-insurance-frontend)

---

## Features Implemented

- Single-page form collecting:
  - Age
  - Income
  - Number of Dependents
  - Risk Tolerance (Low / Medium / High)
- Displays personalized recommendation and explanation after form submission.
- Displays recommendations table with Age, Income, Dependents, Risk Tolerance, and Recommendation.
- Responsive UI using Ant Design.

---

## ⚙️ Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/manoj-fullstack-developer/life-insurance-frontend.git
```

2. Install dependencies

```bash
npm install
```

3. Create `.env.local` file with:

```
NEXT_PUBLIC_API_URL=<your-backend-api-url>
```

4. Run the development server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🐳 Deployment (Vercel)

1. Push code to GitHub.
2. Import repository in Vercel.
3. Set environment variable `NEXT_PUBLIC_API_URL`.
4. Deploy.

---

## ✅ Technologies Used

- Next.js
- TypeScript
- Ant Design

