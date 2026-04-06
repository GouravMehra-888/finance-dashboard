# 💰 Finance Dashboard

A simple and interactive finance dashboard built to understand how users track, analyze, and manage their financial data.

This project focuses more on clarity, usability, and structure rather than over-engineering — exactly how real-world frontend tasks are approached.


## What this project does

The dashboard allows users to:

* View an overall financial summary (balance, income, expenses)
* Explore and filter transactions
* Understand spending patterns through charts
* Interact with the UI based on roles (Admin / Viewer)


## Why I built this

This project was built as part of a frontend assignment to demonstrate:

* How I structure a React application
* How I manage state effectively
* How I design clean and usable UI
* How I implement real-world features like RBAC and data handling


## Tech Stack

Frontend

* React (with Vite)

Styling

* Tailwind CSS

State Management

* Zustand

Charts

* Recharts

Icons

* Lucide React


## Libraries & Tools

* `zustand` → global state (transactions, role, filters)
* `recharts` → charts (line + pie)
* `tailwindcss` → styling & responsiveness
* `lucide-react` → icons
* `localStorage` → persistence (role / data)
* Custom utilities → CSV export, formatting


## Features

### Dashboard

* Summary cards (Balance, Income, Expenses)
* Visual charts:

  * Spending trend over time
  * Category-wise breakdown


### Transactions

* List of all transactions
* Includes:

  * Date
  * Amount
  * Category
  * Type (income/expense)

Functionalities:

* Search by category
* Filter by type
* Export data as CSV


### Role-Based UI (RBAC Simulation)

This is a frontend-only simulation of role-based access:

* Admin

  * Can add transactions
* Viewer

  * Can only view data

Switch roles using a dropdown — UI updates instantly.


### Add Transaction

* Modal-based form
* Validates inputs
* Updates global state instantly


### Insights

* Basic insights like:

  * Highest spending category
  * Monthly comparisons


## Project Structure

src/
│
├── components/
│   ├── dashboard/          # Chart components
│   ├── insights/           # cards
    ├── layout/             # Navbar, Sidebar
    ├──UI/                  # Skeleton  
│   └── transactions/       # Table, Filter, Modal
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   └── Insights.jsx
│
├── store/
│   └── useStore.js      # Zustand store
│
├── data/
│   └── mockTransactions.js
│
├── utils/
│   ├── exportCSV.js
│   └── formatCurrency.js
│
├── App.jsx
└── main.jsx

## State Management Approach

I used Zustand to keep things simple and clean.

It handles:

* Transactions data
* Role switching (Admin / Viewer)
* Updates (add transaction)

This avoids prop-drilling and keeps a single source of truth.


## Responsiveness

The UI is built to work across:

* Desktop
* Tablet
* Mobile

Handled using Tailwind’s responsive utilities.


## How to run this project

# Clone the repo
git clone <your-repo-link>

# Go into the project
cd finance-dashboard

# Install dependencies
npm install

# Start development server
npm run dev


## Build

npm run build


##  What I focused on

* Clean and readable UI
* Logical component structure
* Practical state management
* Real-world features over unnecessary complexity


##  Future Improvements

If I had more time, I would add:

* Dark mode
* Backend integration (API)
* Authentication
* Advanced filters
* Animations


## Author

Gourav Mehra


## Final Note

This project is not about perfection — it’s about showing how I think, structure, and build a frontend application.

If you’re reviewing this, I’d love your feedback 
