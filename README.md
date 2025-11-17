# Skillprobe - Grow your skills, define your future

<div align="center">
  
A modern mentorship platform connecting aspiring professionals with experienced industry mentors for paid 1-on-1 sessions that drive real career growth.

**Website:** [skillprobe.co.in](https://skillprobe.co.in)

</div>

---

## 📖 About Skillprobe

Skillprobe empowers learners to unlock their true potential by connecting them with experienced mentors, showcasing real-world skills, and enabling meaningful career opportunities. Our mission is to bridge the gap between ambition and achievement through personalized guidance, verified capabilities, and a trusted ecosystem where skills matter.

**Vision:** We envision a future where every learner thrives with the right mentorship, opportunities, and recognition—beyond traditional credentials.

**Impact:** Over 100 mentors trust Skillprobe to connect with passionate learners, share their expertise, and grow their professional impact.

---

## ✨ Core Features

### Expert Mentor Matching

Get paired with industry professionals from top companies tailored to your career goals and interests using our intelligent matching algorithm.

### 1-on-1 Sessions

Book private, personalized mentorship calls for:

-   Career advice and planning
-   Skill-building and development
-   Portfolio reviews
-   Resume feedback
-   Mock interviews (FREE session available!)

### Mentorship Opportunities

A paid marketplace where:

-   **Mentees** invest in their future with expert guidance
-   **Mentors** earn side income by sharing their experience

### Psychometric and Behavioral Assessments

Enable you to identify the right candidates and help develop potential through comprehensive evaluations.

### Progress Tracking

Monitor your growth, session history, and goals through an intuitive dashboard experience.

### Flexible Scheduling

Choose time slots that work for you and connect with mentors across different time zones.

### Integrated Platform Tools

-   Calendar scheduling
-   Video conferencing
-   Real-time chat
-   Document sharing
-   Goal tracking

---

## 👥 For Mentees

### What You Get

-   Access to 100+ verified expert mentors from top companies
-   Personalized 1-on-1 mentorship sessions
-   Career clarity and guidance
-   Resume reviews and feedback
-   Mock interview preparation (FREE first session)
-   Skill-based learning paths curated by mentors
-   Progress tracking dashboard
-   Real-world knowledge and insider insights
-   No generic advice - focused, practical guidance based on your unique situation

### How It Works

1. **Find Your Mentor** - Browse through curated list of experts
2. **Book a Session** - Choose convenient time slots
3. **Connect & Learn** - Join video call and get guidance
4. **Grow Your Career** - Apply insights and track progress

---

## 🎓 For Mentors

### Why Become a Mentor

-   Share your expertise with aspiring professionals
-   Earn side income for your time and knowledge
-   Build your professional reputation
-   Make meaningful impact on careers
-   Flexible schedule that works for you

### Mentor Tools

-   Easy session management dashboard
-   Feedback and rating system
-   Progress tracking for mentees
-   Integrated video conferencing
-   Scheduling automation
-   Payment management

### How to Become a Mentor

1. Sign up as a mentor
2. Complete your multi-step profile (professional background, skills, availability)
3. Get verified by Skillprobe team
4. Your profile becomes visible to mentees seeking guidance
5. Start accepting session bookings

---

## 🛠 Tech Stack

### Frontend

-   **Framework:** Next.js 15 (App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS v4
-   **Animations:** Framer Motion
-   **Icons:** Lucide React
-   **Fonts:** Inter (body) & Poppins (display) via next/font

### Architecture

-   **React Compiler:** Enabled for automatic performance optimizations
-   **Server Components:** RSC for better performance and SEO
-   **Client Components:** Strategic use for interactivity
-   **Modular Design:** Component-based architecture for scalability
-   **Type Safety:** Full TypeScript coverage across the codebase

### Build Tools

-   **Bundler:** Turbopack (Next.js 15 default)
-   **Package Manager:** npm/yarn/pnpm/bun
-   **Linter:** ESLint with Next.js rules

---

## 🎨 Design System

### Color Palette

**Primary Colors (Purple):**

-   `primary-50`: #f3f0f9
-   `primary-100`: #e1d8f2
-   `primary-200`: #c8b6eb
-   `primary-300`: #a17fe5
-   `primary-400`: #7f4be6
-   `primary-500`: #5e17eb (Main brand color)
-   `primary-600`: #5111ce
-   `primary-700`: #420ea9
-   `primary-800`: #330b83
-   `primary-900`: #24085d

**Secondary Colors (Yellow-Green):**

-   Complementary accent for special highlights
-   Used sparingly for badges and notifications

**Accent Colors:**

-   **Teal:** #19e5e5 (Secondary CTAs, informational elements)
-   **Pink:** #e467ba (Premium features, highlights)
-   **Orange:** #ef9942 (Primary CTAs, important actions)

**Semantic Colors:**

-   **Success:** #2cd271 (Confirmations, success messages)
-   **Warning:** #efb542 (Cautions, important notices)
-   **Error:** #e23644 (Errors, destructive actions)
-   **Info:** #368ce2 (Informational messages, tips)

**Neutrals (Purple-tinted grays):**

-   Used for text, borders, and backgrounds
-   Range from `neutral-50` to `neutral-900`

### Typography

-   **Display Font:** Poppins (headings, bold statements)
-   **Body Font:** Inter (paragraphs, UI elements)
-   **Font Loading:** Optimized via next/font for performance

### Component Library

**Button Variants:**

```html
<button variant="primary">Primary CTA</button>
<button variant="secondary">Secondary Action</button>
<button variant="accent">Important Action</button>
<button variant="ghost">Subtle Action</button>
<button variant="outline">Outlined Style</button>
```

**Button Sizes:**

-   `sm`: Small (h-10, 40px)
-   `md`: Medium (h-12, 48px)
-   `lg`: Large (h-14, 56px)

**Card Component:**

```html
<Card hover padding="lg"> Content with hover effect </Card>
```

### 📁 Project Structure

```text
skillprobe/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (Navbar + Footer)
│   │   ├── page.tsx                  # Home page
│   │   ├── globals.css               # Global styles & Tailwind v4 config
│   │   ├── loading.tsx               # Loading UI
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── mentors/
│   │   │   ├── page.tsx              # Mentors listing
│   │   │   └── [id]/
│   │   │       └── page.tsx          # Individual mentor profile
│   │   ├── how-it-works/
│   │   │   └── page.tsx              # How it works
│   │   ├── pricing/
│   │   │   └── page.tsx              # Pricing page
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact page
│   │   ├── login/
│   │   │   └── page.tsx              # Login page
│   │   └── signup/
│   │       └── page.tsx              # Signup page
│   │
│   ├── components/
│   │   ├── ui/                       # Reusable UI primitives
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── types.ts
│   │   │   │   └── index.ts
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── types.ts
│   │   │   │   └── index.ts
│   │   │   ├── Badge/
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   └── index.ts              # Barrel exports
│   │   │
│   │   ├── layout/                   # Layout components
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx        # Main navigation
│   │   │   │   ├── NavLink.tsx       # Individual nav items
│   │   │   │   ├── MobileMenu.tsx    # Mobile navigation
│   │   │   │   ├── types.ts
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx        # Footer component
│   │   │   │   ├── FooterSection.tsx # Footer sections
│   │   │   │   ├── types.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── sections/                 # Page-specific sections
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── StatsSection.tsx
│   │   │   │   ├── FeaturesSection.tsx
│   │   │   │   ├── HowItWorksSection.tsx
│   │   │   │   ├── TestimonialsSection.tsx
│   │   │   │   ├── CTASection.tsx
│   │   │   │   └── index.ts
│   │   │   ├── mentors/
│   │   │   │   ├── MentorCard.tsx
│   │   │   │   ├── MentorFilters.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   └── features/                 # Feature-specific components
│   │       ├── auth/
│   │       │   ├── LoginForm.tsx
│   │       │   ├── SignupForm.tsx
│   │       │   └── index.ts
│   │       └── index.ts
│   │
│   ├── lib/
│   │   ├── utils.ts                  # Utility functions
│   │   ├── constants.ts              # App constants (nav links, etc.)
│   │   └── cn.ts                     # Tailwind class merge utility
│   │
│   ├── hooks/
│   │   ├── useMediaQuery.ts          # Responsive breakpoint hook
│   │   └── useScrollPosition.ts      # Scroll position tracking
│   │
│   └── types/
│       ├── index.ts                  # Common types
│       └── mentor.ts                 # Mentor-related types
│
├── public/
│   ├── logo.png                      # Main logo
│   ├── logo-white.png                # White logo for dark backgrounds
│   └── favicon.ico                   # Browser tab icon
│
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.js                 # PostCSS configuration
├── package.json                      # Dependencies
└── README.md                         # This file
```

### 🚀 Getting Started

#### Prerequisites

-   Node.js 18.17 or later
-   Package Manager: npm, yarn, pnpm, or bun

#### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/skillprobe.git
cd skillprobe
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser

```bash
Navigate to http://localhost:3000

# Could be the next available port if 3000 is busy
```

The app uses hot module replacement - your changes will be reflected instantly.

#### Development Tips

-   Edit pages in `src/app/page.tsx`
-   Modify components in `src/components/`
-   Update styles in `src/app/globals.css`
-   Add new routes by creating folders in `src/app/`

#### 📜 Available Scripts

-   `npm run dev` - Start development server with Turbopack
-   `npm run build` - Create production build
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint

#### 🌐 Deployment

##### Vercel (Recommended)

The easiest way to deploy your Next.js app:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will auto-detect Next.js and deploy
4. Your app will be live with automatic SSL and CDN

##### Environment Variables

Create a .env.local file for local development:

```bash
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
DATABASE_URL=your_database_url

# For production, add these in your Vercel dashboard under Environment Variables.
```

#### 🙏 Acknowledgments

-   Built with **[Next.js](https://nextjs.org/)**
-   Styled with **[Tailwind CSS](https://tailwindcss.com/)**
-   Animated with **[Framer Motion](https://www.framer.com/motion/)**
-   Icons from **[Lucide](https://lucide.dev/)**
-   Fonts from **[Google Fonts](https://fonts.google.com/)**

---

<div align="center">
Made with ❤️ by the Skillprobe Team

Empowering candidates everywhere through personalized mentorship

</div>

---
