# Developer Portfolio Website Specification

## 1. Project Overview

- **Project Name:** Developer Portfolio
- **Project Type:** Personal portfolio website with blog
- **Core Functionality:** A showcase portfolio for a software developer featuring animated transitions, a Keystatic-powered blog, project showcases, and real-time features via PartyKit
- **Target Users:** Potential employers, clients, and fellow developers

---

## 2. Technical Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Runtime | Bun |
| Styling | Vanilla Extract CSS |
| Animations | Framer Motion, React Spring |
| Blog | Keystatic |
| Syntax Highlighting | Shiki |
| Testing | Vitest |
| Linting | Biome |
| Real-time | PartyKit |

---

## 3. UI/UX Specification

### Color Palette

| Role | Color | Hex Code |
|------|-------|----------|
| Primary (Red) | Crimson Red | `#DC143C` |
| Primary Dark | Dark Red | `#8B0000` |
| Secondary (Blue) | Royal Blue | `#4169E1` |
| Secondary Dark | Navy | `#000080` |
| Background | Pure White | `#FFFFFF` |
| Background Alt | Off White | `#FAFAFA` |
| Text Primary | Charcoal | `#1A1A1A` |
| Text Secondary | Gray | `#666666` |
| Accent | Light Red | `#FF6B6B` |

### Typography

- **Font Family:** Cartograph (Google Fonts - https://fonts.google.com/specimen/Cartograph)
- **Headings:**
  - H1: 64px, font-weight: 700
  - H2: 48px, font-weight: 600
  - H3: 32px, font-weight: 600
  - H4: 24px, font-weight: 500
- **Body:** 18px, font-weight: 400, line-height: 1.7
- **Small Text:** 14px
- **Code:** JetBrains Mono, 16px

### Layout Structure

#### Global Layout
- **Max Content Width:** 1200px
- **Page Padding:** 24px (mobile), 48px (tablet), 64px (desktop)
- **Navigation:** Fixed top navigation with blur backdrop
- **Footer:** Minimal footer with social links

#### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Effects

- **Page Transitions:** Smooth fade and slide using Framer Motion
- **Hover Effects:** Scale(1.02) with 0.2s ease transition
- **Card Shadows:** `0 4px 20px rgba(0, 0, 0, 0.08)`
- **Border Radius:** 12px for cards, 8px for buttons
- **Glassmorphism:** Navigation with backdrop-blur(12px)

---

## 4. Page Specifications

### 4.1 Home Page (`/`)

**Layout:**
- Hero section with animated greeting
- Brief introduction text (2-3 sentences)
- Featured projects preview (3 cards)
- Latest blog posts preview (3 posts)
- Call-to-action buttons

**Components:**
- `HeroSection` - Animated typing effect for greeting
- `ProjectPreviewCard` - Thumbnail, title, description, tech stack
- `BlogPreviewCard` - Date, title, excerpt
- `CTAButtons` - "View My Work" and "Get In Touch"

### 4.2 Writing Page (`/writing`)

**Layout:**
- Page title with decorative underline
- Blog posts list (grid layout: 2 columns desktop, 1 mobile)
- Each post card shows: date, title, excerpt, tags

**Keystatic Configuration:**
- Content collection: `posts`
- Fields: title, slug, date, excerpt, content (markdown), tags, published
- Sort by: date descending

**Components:**
- `BlogPostCard` - Link to individual post
- `TagList` - Filterable tags
- `BlogPost` - Full post view with Shiki syntax highlighting

### 4.3 My Work Page (`/work`)

**Layout:**
- Page header with subtitle
- Projects grid (2 columns desktop, 1 mobile)
- Each project: thumbnail, title, description, tech stack, links (live demo, GitHub)

**Components:**
- `ProjectCard` - Full project showcase
- `TechBadge` - Individual technology tag
- `ProjectLinks` - Demo and GitHub links

**Sample Projects Data:**
1. E-commerce Platform - React, Node.js, PostgreSQL
2. Real-time Chat App - Next.js, PartyKit, TypeScript
3. AI Dashboard - Python, FastAPI, React
4. Mobile Fitness App - React Native, Firebase

### 4.4 About Me Page (`/about`)

**Layout:**
- Profile photo placeholder (animated border)
- Bio section (2-3 paragraphs)
- Skills section with progress bars or tags
- Timeline of professional experience
- Fun facts section

**Components:**
- `ProfileSection` - Photo and name
- `BioText` - Personal introduction
- `SkillList` - Technical skills with categories
- `Timeline` - Work experience timeline
- `FunFacts` - Interactive fun facts cards

### 4.5 Let's Connect Page (`/connect`)

**Layout:**
- Contact form (name, email, message)
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Location and availability status
- Response time expectation

**Components:**
- `ContactForm` - Functional contact form
- `SocialLinks` - Icon-based social links
- `AvailabilityBadge` - Current availability status
- `ContactInfo` - Email, location details

### 4.6 Vitest Page (`/vitest`)

**Layout:**
- Introduction to testing philosophy
- Code examples with syntax highlighting (Shiki)
- Testing best practices
- Example test files structure

**Components:**
- `TestingIntro` - Why testing matters
- `CodeExample` - Shiki-highlighted test examples
- `TestStructure` - File organization diagram
- `BestPractices` - List of testing tips

---

## 5. Directory Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout with navigation
│   ├── page.tsx                # Home page
│   ├── writing/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx        # Individual post
│   ├── work/
│   │   └── page.tsx            # Projects showcase
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── connect/
│   │   └── page.tsx            # Contact page
│   └── vitest/
│       └── page.tsx            # Vitest showcase
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Main navigation
│   │   ├── Footer.tsx          # Site footer
│   │   └── PageTransition.tsx  # Animated page wrapper
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectPreview.tsx
│   │   └── BlogPreview.tsx
│   ├── writing/
│   │   ├── BlogCard.tsx
│   │   └── CodeBlock.tsx
│   ├── work/
│   │   └── ProjectCard.tsx
│   ├── about/
│   │   ├── Bio.tsx
│   │   ├── Skills.tsx
│   │   └── Timeline.tsx
│   └── connect/
│       ├── ContactForm.tsx
│       └── SocialLinks.tsx
├── styles/
│   ├── theme.css.ts             # Vanilla Extract theme
│   ├── global.css.ts            # Global styles
│   └── variants.css.ts          # Style variants
├── content/
│   └── posts/                   # Keystatic content
│       ├── hello-world.md
│       └── testing-best-practices.md
├── lib/
│   ├── keystatic.ts             # Keystatic config
│   └── utils.ts                 # Utility functions
├── hooks/
│   └── useAnimatedRoutes.ts     # Framer Motion hooks
├── public/
│   └── images/                  # Static images
├── tests/
│   ├── components/
│   └── utils/
├── party/
│   └── server.ts                # PartyKit server
├── biome.json                   # Biome config
├── vitest.config.ts             # Vitest config
├── next.config.ts               # Next.js config
└── package.json
```

---

## 6. Component API Specifications

### Navigation Component
```typescript
interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

interface NavigationProps {
  items: NavItem[];
  activePath: string;
}
```

### Project Card Component
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}
```

### Blog Post Component
```typescript
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}
```

---

## 7. Animations Specification

### Page Transitions
- **Enter:** fadeIn + slideUp (0.4s ease-out)
- **Exit:** fadeOut + slideDown (0.3s ease-in)

### Micro-interactions
- **Button hover:** scale(1.05), 0.2s ease
- **Card hover:** translateY(-4px), shadow increase, 0.3s ease
- **Link hover:** underline animation, 0.2s

### Special Effects
- **Hero text:** Staggered character reveal (0.05s per char)
- **Scroll reveal:** Elements fade in as they enter viewport
- **Navigation:** Smooth scroll with progress indicator

---

## 8. SEO & Accessibility

### SEO
- Meta titles (60 chars max)
- Meta descriptions (160 chars max)
- Open Graph tags for social sharing
- JSON-LD structured data for person
- Sitemap.xml generation
- Robots.txt

### Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast ratio > 4.5:1
- Alt text for all images
- Reduced motion preference support

---

## 9. PartyKit Integration

### Real-time Features
- Live visitor counter
- Real-time notifications for new messages
- Collaborative elements (optional)

### Server Configuration
- Port: 1999 (default PartyKit)
- Room: "portfolio"

---

## 10. Testing Strategy

### Unit Tests (Vitest)
- Utility functions
- Component rendering
- Hook behavior

### Integration Tests
- Navigation flow
- Form submissions
- Blog post rendering

### Test Coverage Target
- Utilities: 100%
- Components: 80%
- Pages: 70%

---

## 11. Acceptance Criteria

1. ✅ All 6 pages render without errors
2. ✅ Navigation works with animated transitions
3. ✅ Blog posts can be created and displayed via Keystatic
4. ✅ Projects display with proper styling and links
5. ✅ Contact form validates input
6. ✅ Vitest page shows code examples with syntax highlighting
7. ✅ Responsive design works on mobile, tablet, desktop
8. ✅ Framer Motion animations are smooth (60fps)
9. ✅ PartyKit server runs for real-time features
10. ✅ All tests pass
11. ✅ Biome linting passes with no errors
12. ✅ SEO meta tags are present on all pages
