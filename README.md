# MentorAI -AI Career Coach 

**Your Personal AI Career Coach**
Build professional resumes, generate tailored cover letters, gain industry insights, and practice AI-powered mock interviews — all in one modern web application.

---

## ✨ Core Features

### 🔐 Secure Authentication

* Clerk authentication (Google, Email, OAuth)
* Protected routes with session handling

### 📋 Smart Onboarding

* Industry and sub-industry selection
* Personalized user setup flow

### 📊 Intelligent Dashboard

* Real-time industry insights
* Salary trend analysis
* AI-generated recommendations (Google Gemini)

### 📄 Resume Builder

* Structured sections:

  * Contact Information
  * Professional Summary
  * Skills
  * Experience
  * Education
  * Projects
* Live Markdown preview
* One-click PDF export (html2pdf.js)
* Stores structured data with Markdown fallback

### ✉️ AI Cover Letter Generator

* Generates tailored cover letters from job descriptions
* Optimized for role-specific applications

### 🎤 AI Mock Interview Preparation

* Technical and behavioral interview simulations
* AI-based performance analysis
* Personalized improvement suggestions
* Historical interview attempt tracking

### 🌙 UI & Experience

* Dark mode (default)
* Fully responsive design
* Modern component system (shadcn/ui)

---

## 🛠 Tech Stack

| Layer           | Technology Used                   |
| --------------- | --------------------------------- |
| Framework       | Next.js 15 (App Router)           |
| Language        | TypeScript                        |
| Authentication  | Clerk                             |
| Database        | Prisma + PostgreSQL               |
| AI Integration  | Google Generative AI (Gemini)     |
| UI System       | shadcn/ui + Tailwind CSS + Lucide |
| Form Handling   | React Hook Form + Zod             |
| Markdown Editor | @uiw/react-md-editor              |
| PDF Export      | html2pdf.js                       |
| Background Jobs | Inngest                           |
| Deployment      | Vercel                            |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AbdullahAli2005/MentorAI.git
cd mentorai
npm install
```

---

### 2️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/mentorai"

# Google Gemini AI
GOOGLE_GENERATIVE_AI_API_KEY=AIza...

# Optional: Inngest (Background AI jobs)
INNGEST_EVENT_KEY=...
INNGEST_SIGNING_KEY=...
```

---

### 3️⃣ Database Setup

```bash
npx prisma generate
npx prisma db push   # or: npx prisma migrate dev
```

---

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Open your browser at:

```
http://localhost:3000
```

---

## 📂 Project Structure

```
app/
 ├── (main)/
 │   ├── dashboard/
 │   ├── resume/
 │   ├── ai-cover-letter/
 │   ├── interview/
 │   └── onboarding/
 ├── layout.tsx
 └── page.tsx

components/
 ├── header.tsx
 ├── resume-builder/
 └── ...

lib/
 ├── actions/
 ├── checkUser.ts
 └── helper.ts

prisma/
 └── schema.prisma

actions/
package.json
```

---

## 🔧 Current Status

### ✅ Strengths

* Modern Next.js 15 + React 19 architecture
* Proper use of Server Components and Server Actions
* Clean and structured Prisma schema
* Comprehensive Zod validation
* Accessible and responsive UI


---

## 🤝 Contributing

Pull requests are welcome.
For significant changes, please open an issue first to discuss the proposal.

---

## 📄 License

MIT License
© Abdullah Ali

---

**If you find this project helpful, consider giving it a ⭐ on GitHub.**
