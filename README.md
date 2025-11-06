# PRO Juegos - Custom Gaming Table Showroom

![Next.js](https://img.shields.io/badge/Next.js-13.5.4-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-teal?logo=tailwindcss)
![React](https://img.shields.io/badge/React-18.0-blue?logo=react)

A modern gaming table showroom and e-commerce platform built with **Next.js 13** and **TypeScript**. This comprehensive application showcases custom-made gaming tables including pool tables, poker tables, foosball tables, dart boards, and multi-purpose gaming furniture with integrated contact and business management features.

## 🌟 Features

- **Product Showcase**: Interactive catalog of custom gaming tables with detailed specifications
- **Custom Design Consultation**: Contact system for personalized gaming table requests
- **Responsive Gallery**: High-quality image galleries for each product category
- **Business Information**: Company details, testimonials, and service information
- **Contact Integration**: Email contact form with photo upload capabilities
- **Location Services**: Interactive map integration for business location
- **Multi-Product Categories**: Pool, poker, foosball, darts, and multi-purpose tables
- **Testimonial System**: Customer reviews and feedback display
- **Service Process**: Step-by-step guide for custom table creation
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Static Export**: Optimized for static hosting with Next.js export functionality

## 🛠️ Tech Stack

| Technology       | Purpose                            | Version |
| ---------------- | ---------------------------------- | ------- |
| **Next.js**      | React Framework & Static Export    | 13.5.4  |
| **TypeScript**   | Type Safety & Developer Experience | 5.0     |
| **Tailwind CSS** | Utility-First CSS Framework        | 3.0     |
| **React**        | Frontend Library                   | 18.0    |
| **React Slick**  | Carousel/Slider Components         | 0.29.0  |
| **Google Maps**  | Location Services Integration      | 2.2.1   |
| **Mailgun.js**   | Email Service Integration          | 9.4.0   |
| **Form Data**    | File Upload Handling               | 4.0.0   |

## 📁 Project Structure

```
src/
├── components/                    # React components
│   ├── about-me/                  # About us section
│   │   └── index.tsx
│   ├── contact/                   # Contact form and info
│   │   └── index.tsx
│   ├── featured-products/         # Product highlights
│   │   └── index.tsx
│   ├── footer/                    # Site footer
│   │   └── index.tsx
│   ├── home/                      # Homepage components
│   │   └── index.tsx
│   ├── navbar/                    # Navigation bar
│   │   └── index.tsx
│   ├── products/                  # Product category pages
│   │   ├── dardos/               # Dart boards
│   │   ├── metegol/              # Foosball tables
│   │   ├── multiuso/             # Multi-purpose tables
│   │   ├── poker/                # Poker tables
│   │   └── pool/                 # Pool tables
│   └── ui/                       # Reusable UI components
│       ├── ProductCard.tsx
│       └── VerMasButton.tsx
├── pages/                        # Next.js pages
│   ├── _app.tsx                  # App wrapper
│   ├── _document.tsx             # Document structure
│   ├── index.tsx                 # Homepage
│   ├── about-me/                 # About page
│   ├── contact/                  # Contact page
│   └── products/                 # Product pages
├── json/                         # Data files
│   ├── products.json             # Product catalog
│   ├── properties.json           # Business properties
│   ├── steps.json               # Process steps
│   └── testimonials.json        # Customer reviews
├── assets/                       # Static assets
│   ├── footer/                   # Footer assets
│   └── productos/                # Product images
└── styles/
    └── globals.css               # Global styles

public/                           # Static files
├── Image-AboutMe/                # About section images
├── Image-Contact/                # Contact page icons
├── Image-DartBoards/             # Dart board images
├── Image-Foosball/               # Foosball table images
├── Image-Multipurpose/           # Multi-purpose table images
├── Image-Poker/                  # Poker table images
└── Image-Pool/                   # Pool table images
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16.0.0 or higher)
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ElielMato/pro-juego.git
   cd pro-juego
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment variables** (Optional)

   Create a `.env.local` file for any environment-specific configurations:

   ```env
   # Google Maps API (if using maps integration)
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

   # Email service configuration
   MAILGUN_API_KEY=your_mailgun_api_key
   MAILGUN_DOMAIN=your_mailgun_domain
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:3000` to see the application running.

## 🏗️ Building for Production

```bash
# Build the project for static export
npm run build

# The built files will be in the 'out' directory
# You can serve this directory with any static hosting service
```

## 📄 License

This project is proprietary software for PRO Juegos de Salón. All rights reserved.

---

<div align="center">

**Built with ❤️ for gaming enthusiasts and custom furniture lovers**

</div>
