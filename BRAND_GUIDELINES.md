# Liquid Creative - Brand Guidelines

Welcome to the official Brand Guidelines for **Liquid Creative** (formerly StoryArc/Adihuman). This document outlines the core visual identity, design decisions, and stylistic components that define our digital presence.

## 1. Core Identity & Philosophy
Our brand has evolved from a technical "terminal" aesthetic to a **soft, organic, and dynamic design language**. The identity is built around fluidity, approachability, and premium visual excellence. We prioritize deep, immersive experiences over rigid, blocky layouts.

**Keywords:** Organic, Fluid, Modern, Premium, Dynamic.

## 2. Typography
We have shifted away from monospace, technical typefaces in favor of clean, modern sans-serifs that feel both professional and approachable.

- **Primary Typeface:** `Outfit`
- **Use Case:** Used globally across all headings (`h1` - `h4`), paragraphs, labels, buttons, and inputs.
- **Fallback Typefaces:** `Barlow`, `Instrument Serif` (for specific editorial accents).

## 3. Color Palette & Gradients

### Base Theme (Light Mode)
- **Background:** `#ffffff`
- **Primary Text:** `#030213`
- **Muted Text:** `#717182`
- **Accents:** `#e9ebef`
- **Destructive/Alert:** `#d4183d`

### Base Theme (Dark Mode)
- **Background:** Deep rich black (`oklch(0.145 0 0)`)
- **Primary Text:** Stark white (`oklch(0.985 0 0)`)

### The "Liquid" Gradient
The hallmark of our new identity is the animated, mesh-like background gradient. It introduces an organic, flowing feel to the application interface.
- **Background Gradient:** `radial-gradient(circle at 0% 0%, #1a0833 0%, #05010f 40%, #000000 100%)`
- **Animation:** `liquidPurple 15s ease infinite alternate` - Creates a slow, breathing, liquid motion effect across the dark canvas.

## 4. Component Aesthetics & Shape Language

### The "Pill" Shape (Extreme Rounded Corners)
We have completely abandoned sharp, rigid 90-degree corners. 
- All major UI containers, buttons, and structural elements employ extreme **rounded corners** (`pill` shapes), creating a soft, tactile interface.
- **Standard Radius:** `0.625rem` (scaled dynamically via `--radius-sm`, `--radius-lg`, etc.)

### Logo Treatments
- All client and partner logos must be rendered on **white-padded backdrops** to ensure maximum brand visibility and contrast against the dark/liquid backgrounds.

### Hero Section
- Our hero sections are designed for maximum legibility and impact.
- Heavy reliance on **refined overlays** and a clean, structural title area.
- Initial hero assets prioritize immediate loading, with below-the-fold media heavily strictly lazy-loaded to optimize performance.

## 5. Architectural Cleanups
As part of our transition to the Liquid Creative brand, we have intentionally sunset previous UI paradigms:
- 🚫 **Removed:** Multi-video Hero Carousels (Replaced with a single, high-performance impact video).
- 🚫 **Removed:** The outdated "Reels Carousel" section.
- 🚫 **Removed:** Legacy Testimonial layouts.

## 6. Tech Stack Implementation
Our brand is structurally integrated using:
- **Tailwind CSS v4** (for utility-first styling and theme token alignment).
- **CSS Variables** (for dynamic theming and OKLCH color spaces).
- **Vite & React** (for lightning-fast rendering of our liquid animations).
