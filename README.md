# Ankit Raj - Developer Portfolio

### Architecture

- **Frontend**: Vanilla HTML5, CSS3, Tailwind CSS (CDN), Vanilla ES6 JavaScript (No React/Next.js/Angular/Vue).
- **Backend**: Node.js & Express.js.
- **Database**: PostgreSQL hosted on Supabase, managed with Prisma ORM.
- **Auth**: Stateless JWT with bcrypt password hashing.

---

### Step-by-Step Setup

#### 1. Supabase Database Configuration

1. Go to [Supabase](https://supabase.com) and create a free project.
2. In Project Settings -> Database, copy your **Connection String (URI)**:
   - Use the **Transaction Pooler URL** for `DATABASE_URL` (port 6543 or 5432).
   - Use the **Direct Connection URL** for `DIRECT_URL` (port 5432).

#### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and paste your Supabase DATABASE_URL and DIRECT_URL
```
