# Executive Leadership Portfolio

## Overview

This is a professional executive leadership portfolio website built as a single-page application showcasing C-level executive services. The application presents a polished, professional interface designed to attract high-level business clients seeking executive leadership expertise.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom executive theme colors
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints for contact form and file downloads
- **Development**: Hot module replacement via Vite middleware integration

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (via Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Storage**: In-memory storage implementation with interface for database integration

## Key Components

### User Interface Components
- **Navigation**: Responsive navigation with smooth scrolling and mobile hamburger menu
- **Hero Section**: Full-screen hero with call-to-action buttons and professional imagery
- **Experience Carousel**: Interactive showcase of success stories and achievements
- **About Section**: Professional biography with downloadable CV functionality
- **Rates Section**: Service pricing tiers with clear value propositions
- **Contact Section**: Professional contact form with validation and submission handling
- **Footer**: Clean footer with social links and branding

### Backend Services
- **Contact API**: Handles form submissions with validation and logging
- **File Download**: Serves CV/resume downloads
- **Static File Serving**: Integrated static file serving for production builds

### Design System
- **Theme**: Executive-focused color palette with professional blues and neutrals
- **Typography**: Inter font family for clean, modern readability
- **Components**: Comprehensive UI component library based on Radix primitives
- **Responsive**: Mobile-first responsive design with Tailwind breakpoints

## Data Flow

### Client-Side Flow
1. User navigates to homepage
2. React components render with TanStack Query for data fetching
3. Form submissions send POST requests to `/api/contact`
4. File downloads trigger GET requests to `/api/download-cv`
5. Toast notifications provide user feedback

### Server-Side Flow
1. Express server handles API routes under `/api/*`
2. Contact form data is validated and logged
3. File downloads are served from server filesystem
4. Development mode integrates Vite middleware for HMR
5. Production mode serves static files from build output

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Query for UI and state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Extensive Radix UI component collection for accessibility
- **Styling**: Tailwind CSS with PostCSS for utility-first styling

### Backend Dependencies
- **Server**: Express.js for HTTP server and API endpoints
- **Database**: Drizzle ORM with Neon serverless PostgreSQL adapter
- **Development**: tsx for TypeScript execution, ESBuild for production builds
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **TypeScript**: Full TypeScript support with strict configuration
- **Replit Integration**: Cartographer plugin for Replit development environment

## Deployment Strategy

### Development Environment
- **Start Command**: `npm run dev` - Runs development server with HMR
- **Type Checking**: `npm run check` - TypeScript type validation
- **Database**: `npm run db:push` - Push schema changes to database

### Production Build
- **Build Process**: 
  1. `vite build` - Creates optimized client bundle
  2. `esbuild` - Bundles server code for Node.js
- **Output**: 
  - Client files built to `dist/public/`
  - Server code bundled to `dist/index.js`
- **Start Command**: `npm start` - Runs production server

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Deployment**: Configured for Node.js hosting with static file serving
- **Session Storage**: PostgreSQL-backed session management for production

## Changelog

```
Changelog:
- July 02, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```