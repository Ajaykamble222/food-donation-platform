# Smart Food Donation and Distribution Platform
> **SmartFoodShare** — *Connecting surplus food from homes, restaurants, bakeries, and community kitchens with people and organizations that can use it.*

---

## 📌 1. Overview
The **Smart Food Donation and Distribution Platform** is a clean, accessible web application designed to bridge the gap between food surplus providers and local hunger-relief initiatives. 

Every day, large quantities of safe, wholesome food from restaurants, bakeries, community kitchens, and events are discarded simply due to the lack of timely local coordination. This platform provides an intuitive, zero-cost digital directory where food donors can quickly publish surplus items with preparation timestamps and strict pickup deadlines, and community shelters, food pantries, and volunteers can discover and reserve available items before freshness expires.

---

## 🌍 2. The Problem & Mission
- **Preventing Food Waste:** Tons of edible food end up in municipal landfills each year, generating significant volumes of methane ($CH_4$), a potent greenhouse gas.
- **Supporting Food Security:** While food is discarded, local shelters and vulnerable community members face urgent food deficits.
- **Fast, Direct Coordination:** By eliminating intermediary delays, donors and recipients connect directly to ensure hot meals, fresh produce, and baked goods are collected and consumed within safe timeframes.

---

## 🎯 3. Key Platform Features

| Page | Route | Description & Features |
| :--- | :--- | :--- |
| **Home** | `/` | Platform introduction, clear mission statement, live donation feed preview, practical service pillars, 4-step "How It Works" workflow, and food safety standards. |
| **Available Food** | `/available-food` | Community surplus inventory with live search, category filters (*All, Cooked Meals, Bakery & Bread, Fresh Produce, Packaged Goods, Dairy & Beverages*), status filter (*All vs Available Only*), interactive `ClaimModal`, and direct donor contact details. |
| **Donate Food** | `/donate` | Clean donation intake form with field validation for food title, category, quantity, donor name, donor type, dietary tag, pickup deadline, prepared time, contact phone, packaging notes, and representative photo options. Submissions save directly to local storage. |
| **Request Food** | `/request-food` | Community intake form for shelters, orphanages, and relief coordinators to submit requirements with urgency levels (*Immediate, Today, Tomorrow, Ongoing*), alongside an active community requirements log. |
| **About** | `/about` | Overview of the food waste challenge, the redistribution pipeline, comprehensive food safety responsibilities, and alignment with UN Sustainable Development Goals (SDG 2: Zero Hunger & SDG 12: Responsible Consumption). |
| **Contact & FAQs** | `/contact` | General contact helpdesk with validated form, regional coordination details, and practical operational FAQs. |

---

## 🛡️ 4. Food Safety Guidelines
- **Only Safe, Edible Food:** Donors must offer only wholesome, uncontaminated food fit for human consumption.
- **Accurate Timestamps:** Disclose exact preparation times and required storage conditions (hot holding, refrigeration, or dry storage).
- **Hygienic Packaging:** Use food-grade, clean containers.
- **Strict Collection Deadlines:** Handover must be completed before the stated expiration window.
- **Strict Warning:** Expired, spoiled, sour, moldy, or improperly stored food is strictly prohibited. The platform facilitates communication and does not independently inspect food.

---

## 💻 5. Technology Stack
- **Framework:** [Next.js](https://nextjs.org/) (v16.4 App Router with Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing for components and data contracts)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS Design Tokens
- **Color Palette:** Forest Green (`#1b4332`, `#2d6a4f`), Warm Cream (`#fdfbf7`, `#f4efe6`, `#efe8da`), and Crisp White
- **Icons:** Embedded zero-dependency SVG icon system (`src/components/Icons.tsx`)
- **Persistence & State:** HTML5 LocalStorage with custom window event dispatching for instantaneous multi-page synchronization

---

## 📂 6. Project Structure

```text
donationproject/
├── public/                       # Static public assets
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global layout (BannerNotice, Navbar, Footer)
│   │   ├── page.tsx              # Home page
│   │   ├── globals.css           # Design tokens, custom scrollbars, animations
│   │   ├── available-food/
│   │   │   └── page.tsx          # Available Food directory with search & filters
│   │   ├── donate/
│   │   │   └── page.tsx          # Donate Food form with validation & image selector
│   │   ├── request-food/
│   │   │   └── page.tsx          # Food Request form & active requirements log
│   │   ├── about/
│   │   │   └── page.tsx          # Mission, food waste overview & safety guidelines
│   │   └── contact/
│   │       └── page.tsx          # Contact helpdesk & operational FAQ
│   ├── components/
│   │   ├── BannerNotice.tsx      # Demo mode notice & "Reset Demo Data" action
│   │   ├── Navbar.tsx            # Responsive navigation with mobile menu drawer
│   │   ├── Footer.tsx            # Platform footer with SDG alignment badges
│   │   ├── FoodCard.tsx          # Interactive donation card with status indicators
│   │   ├── ClaimModal.tsx        # Community food reservation modal
│   │   └── Icons.tsx             # Zero-dependency SVG icon system
│   └── lib/
│       └── foodStore.ts          # LocalStorage data store with sample listings
├── next.config.ts                # Next.js configuration with Turbopack loader
├── package.json                  # Dependencies and build scripts
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🚀 7. Setup & Running Instructions

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

4. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

---

## ⚠️ 8. Platform Notice
This deployment operates in **demonstration mode** with pre-seeded sample listings illustrating various food categories (cooked meals, bakery rolls, fresh produce, packaged goods, and dairy). All reservations and submissions persist within the browser's local storage session.
