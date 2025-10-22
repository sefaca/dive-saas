# Dive SaaS - Professional Dive Center Management System

A comprehensive SaaS platform for managing scuba diving operations, designed specifically for dive centers in the Cayman Islands and Caribbean region.

## Features

- **Dive Session Management**: Schedule and manage diving sessions, courses, and certifications
- **Student/Diver Management**: Track student progress, certifications, and dive logs
- **Instructor Management**: Manage dive instructors, their schedules and assignments
- **Equipment Tracking**: Monitor dive equipment inventory and maintenance
- **Booking System**: Online booking for dive trips and courses
- **Payment Integration**: Handle payments and subscriptions via Stripe
- **Multi-language Support**: English and Spanish interfaces
- **Mobile-First Design**: Responsive design optimized for mobile and desktop
- **Real-time Updates**: Live notifications and booking updates

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: shadcn/ui + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **Authentication**: Supabase Auth with social providers
- **Payments**: Stripe Connect
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **i18n**: i18next

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Stripe account (for payments)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sefaca/dive-saas.git
cd dive-saas
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```env
VITE_SUPABASE_PROJECT_ID="your-project-id"
VITE_SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
VITE_SUPABASE_URL="https://your-project.supabase.co"
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
dive-saas/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── auth/         # Authentication components
│   │   └── ...           # Feature components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── contexts/         # React contexts
│   ├── integrations/     # External integrations (Supabase)
│   ├── types/            # TypeScript types
│   ├── utils/            # Utility functions
│   └── i18n/             # Internationalization
├── supabase/
│   ├── functions/        # Edge Functions
│   └── migrations/       # Database migrations
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run screenshots:desktop` - Capture desktop screenshots
- `npm run screenshots:mobile` - Capture mobile screenshots

## Color Palette

Our ocean-inspired color scheme:

- **Deep Ocean Blue** (#0E7490) - Primary color
- **Tropical Water** (#06B6D4) - Secondary color
- **Coral Orange** (#F97316) - Accent color
- **Marine Green** (#10B981) - Success/Active states
- **Deep Sea Blue** (#0C4A6E) - Sidebar/Navigation

## License

Private - All Rights Reserved

## Support

For support, email support@divesaas.com or contact us through the platform.

---

Made with ❤️ for dive centers worldwide
