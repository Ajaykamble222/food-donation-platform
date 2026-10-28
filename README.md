# Smart Food Donation and Distribution Platform
> **College Academic Community Engagement Project (CEP)**  
> *A student-engineered digital solution connecting surplus food donors with community shelters, NGOs, and volunteers.*

---

## 📌 1. Abstract
Urban food waste and community hunger represent two pressing socio-ecological challenges. Daily, substantial quantities of fresh, edible food from university hostels, canteens, restaurants, and catered events are discarded simply due to the lack of timely hyper-local communication. 

The **Smart Food Donation and Distribution Platform** is a lightweight, responsive web application developed as a college-level academic Community Engagement Project (CEP). It provides an intuitive, zero-cost digital bridge enabling food providers to post surplus meal details within minutes and allowing verified shelters, community kitchens, and student volunteers to discover and reserve available items before expiration windows elapse.

---

## 🌍 2. Problem Statement
- **Global & Local Food Waste Crisis:** According to the UNEP Food Waste Index Report, over 1 billion metric tons of food are wasted annually, generating 8–10% of global greenhouse gas emissions (notably methane, $CH_4$, which has a global warming potential 28× higher than $CO_2$).
- **The Urban Surplus Disparity:** In college campuses and metropolitan neighborhoods, banquet halls, hostel messes, and supermarkets regularly discard surplus food that is fresh, safe, and nutritious, while local community shelters operate on strained budgets.
- **Communication Inefficiency:** Existing manual coordination (phone calls, sporadic WhatsApp messages) leads to miscommunication, delayed dispatch, and food spoilage before pickup can be completed.
- **Infrastructure Barrier:** Commercial logistics platforms require subscription fees, backend server overhead, and payment gateways that small community shelters cannot afford.

---

## 🎯 3. Project Objectives
1. **Hyper-Local Real-Time Listing:** Allow canteens, bakeries, and event caterers to rapidly post surplus food inventory with preparation timestamps and strict pickup deadlines.
2. **Instant Discovery & Filtering:** Provide community partners with responsive search and category filters (Cooked Meals, Bakery & Bread, Fresh Produce, Packaged Goods, Dairy).
3. **Frictionless Claim Flow:** Allow shelters and volunteers to reserve donations in one click, immediately updating the card status to `Reserved` to prevent duplicate efforts.
4. **NGO Requirement Registry:** Allow shelters to submit specific ongoing needs (e.g., meals for 40 children, dry rations) so donors can prioritize donations.
5. **Zero Infrastructure Cost:** Run completely on modern client-side technologies (Next.js App Router, TypeScript, and HTML5 LocalStorage), ensuring zero monthly operational costs and 100% determinism for academic evaluations.
6. **Alignment with UN Sustainable Development Goals:**
   - **SDG 2:** Zero Hunger
   - **SDG 12:** Responsible Consumption & Production

---

## ✨ 4. Key Features & Page Overview

| Page | Route | Description & Features |
| :--- | :--- | :--- |
| **Home** | `/` | Hero section, project introduction, live donation feed preview, simulated impact statistics (1,480+ meals recovered, 42 shelters), and a 4-step "How It Works" workflow. |
| **Available Food** | `/available-food` | Real-time surplus inventory with search bar, category pills (All, Cooked Meals, Bakery, Fresh Produce, Packaged Goods, Dairy), status toggle, interactive `ClaimModal`, and direct contact buttons. |
| **Donate Food** | `/donate` | Clean intake form with validation for food name, category, quantity, donor name, donor type, dietary tag, pickup deadline, prepared time, contact number, and preset photo preview. Instant localStorage persistence. |
| **Request Food** | `/request-food` | Form for NGOs, orphanages, and community coordinators to submit requirements with urgency levels (`Immediate`, `Today`, `Tomorrow`), accompanied by an active community request log. |
| **About Project** | `/about` | Formal academic report documentation including literature review, problem statement, objectives, multi-dimensional benefits, and system architecture. |
| **Contact & FAQ** | `/contact` | Academic helpdesk form with interactive validation, campus innovation lab details, and comprehensive viva evaluation FAQs. |

---

## 💻 5. Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (v16.4 App Router with Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing for robust state and component contracts)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS Design Tokens
- **Design Palette:** Forest Green (`#1b4332`, `#2d6a4f`), Warm Cream (`#fdfbf7`, `#f4efe6`), and Crisp White
- **Icons:** Embedded, zero-dependency inline SVG icon library (`src/components/Icons.tsx`)
- **Persistence & State:** HTML5 LocalStorage with custom window event dispatching for instantaneous multi-page synchronization
- **Deployment Target:** Cross-platform (Vercel, Node.js, static container)

---

## 📂 6. Project Structure

```text
donationproject/
├── public/                       # Static public assets
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout (BannerNotice, Navbar, Footer)
│   │   ├── page.tsx              # Home page
│   │   ├── globals.css           # Design tokens, custom scrollbars, animations
│   │   ├── about/
│   │   │   └── page.tsx          # About CEP & Academic Problem Statement
│   │   ├── available-food/
│   │   │   └── page.tsx          # Available Food directory with search & filters
│   │   ├── donate/
│   │   │   └── page.tsx          # Donate Food form with validation & image selector
│   │   ├── request-food/
│   │   │   └── page.tsx          # NGO Food Request form & active requirements log
│   │   └── contact/
│   │       └── page.tsx          # Contact helpdesk & viva evaluation FAQ
│   ├── components/
│   │   ├── BannerNotice.tsx      # Academic prototype disclaimer & demo reset button
│   │   ├── Navbar.tsx            # Responsive navigation with mobile drawer
│   │   ├── Footer.tsx            # CEP academic footer with SDG alignment badges
│   │   ├── FoodCard.tsx          # Interactive donation card with status indicators
│   │   ├── ClaimModal.tsx        # Volunteer / NGO food reservation modal
│   │   └── Icons.tsx             # Zero-dependency SVG icon system
│   └── lib/
│       └── foodStore.ts          # LocalStorage data store, sample data, event hub
├── .gitignore                    # Standard Git ignore file
├── next.config.ts                # Next.js configuration with remote image patterns
├── package.json                  # Dependencies and npm build scripts
├── tsconfig.json                 # TypeScript compiler configuration
├── PROJECT_REPORT.md             # Formal academic project report for college submission
└── README.md                     # Project documentation & evaluation guide
```

---

## 🚀 7. Setup & Running Instructions

### Prerequisites
- **Node.js**: Version `18.x` or higher (tested on Node v24.16.0)
- **npm**: Version `9.x` or higher

### Step-by-Step Installation

1. **Clone or Open the Repository:**
   ```bash
   cd donationproject
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Local Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to: `http://localhost:3000`

4. **Build for Production Testing:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🎓 8. Student Viva & Evaluation Guide

### Frequently Asked Viva Questions:

**Q1: Why was client-side localStorage selected instead of an external database like MongoDB or Firebase?**  
*Answer:* As an academic prototype for college evaluation, our goal was zero-cost deployment, zero configuration barrier for evaluators, and deterministic behavior. LocalStorage provides persistent browser storage that allows any evaluator to add donations and test claims immediately without configuring API keys, environment variables, or paid cloud databases.

**Q2: How does the platform synchronize state between pages without a full reload?**  
*Answer:* The application uses `CustomEvent("food-donations-updated")` emitted by `src/lib/foodStore.ts`. When a user submits a donation on `/donate` or claims an item via `ClaimModal`, the event notifies the listener in `AvailableFoodPage` and `HomePage`, immediately refreshing the reactive state.

**Q3: How are food safety and hygiene accounted for?**  
*Answer:* The donation schema enforces mandatory preparation timestamps, dietary classification (Vegetarian, Vegan, Non-Veg), storage instructions, and explicit safe pickup deadlines (e.g., *"Today by 8:30 PM"*). Items past their deadline can be automatically filtered out.

**Q4: How does this project align with UN Sustainable Development Goals?**  
*Answer:* It directly targets **SDG 2 (Zero Hunger)** by directing edible surplus to marginalized communities and shelters, and **SDG 12 (Responsible Consumption and Production)** by reducing municipal organic food waste and associated landfill emissions.

---

## ⚠️ 9. Limitations & Academic Disclaimer
- **Simulated Demonstration:** This platform is an educational academic prototype created for a college Community Engagement Project (CEP). All listings, donor organizations, and phone numbers are illustrative demo data.
- **Logistics Assumption:** The platform facilitates *information exchange* and claim coordination. Physical pickup and transport are carried out by designated community volunteers or NGOs; no automated commercial shipping is implemented.
- **Client-Side Scope:** Data stored in `localStorage` is scoped to the individual user's browser session.

---

## 📄 10. Project Deliverables
- Complete GitHub source code
- Comprehensive Formal Project Report ([`PROJECT_REPORT.md`](./PROJECT_REPORT.md))
