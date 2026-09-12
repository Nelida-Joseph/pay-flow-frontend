# PayFlow — Fintech Merchant Dashboard

PayFlow is a responsive fintech merchant dashboard designed to help businesses monitor transactions, track settlements, view account performance, and manage digital payment activity.

This project was created as part of a **UI/UX Designer & Web Developer assessment**.

## Features

- Merchant login interface
- Dashboard overview
- Transaction performance metrics
- Available balance and pending settlements
- Transaction trends
- Payment status overview
- Recent transactions
- Responsive desktop and mobile layouts

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Lucide Icons
- Figma

## Design

The PayFlow interface was designed in Figma using a reusable design system focused on clarity, consistency, and ease of use.

**Figma Design & Prototype:**  
https://www.figma.com/design/LWbSYrsSyU1g3AN1z7Sj8R/Fintech-Merchant-Dashboard-%E2%80%94-Nelida-Joseph?node-id=0-1&t=HanSev2bIojkMz2X-1

## Live Demo

**Login Page:**  
https://pay-flow-frontend-omega.vercel.app/

**Dashboard Overview:**  
https://pay-flow-frontend-omega.vercel.app/overview

## Accessing the Dashboard

There are two ways to access the Dashboard Overview.

### Option 1 — Through the Login Page

Open the PayFlow login page:

https://pay-flow-frontend-omega.vercel.app/

Enter any credentials that satisfy the email and password validation requirements.

Once the form is successfully submitted, you will be redirected to the Dashboard Overview.

### Option 2 — Direct Access

The Dashboard Overview can also be accessed directly without going through the login page:

https://pay-flow-frontend-omega.vercel.app/overview

## Authentication Note

The login interface is a **front-end demonstration** and is not connected to a backend authentication service.

Therefore, any credentials that satisfy the form validation requirements can be used to proceed to the dashboard.

The merchant profile information displayed on the Dashboard Overview is **mock, hard-coded data**. The credentials entered on the login page are not stored and are not used to populate or update the merchant profile.

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/Nelida-Joseph/pay-flow-frontend.git
```

Navigate into the project directory:

```bash
cd pay-flow-frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the application in your browser:

```text
http://localhost:3000
```

The Dashboard Overview can also be accessed directly at:

```text
http://localhost:3000/overview
```

## Project Notes

- The application uses mock data for demonstration purposes.
- No backend authentication service is implemented.
- No real payment processing or payment integration is included.
- The merchant profile displayed on the dashboard uses hard-coded demonstration data.
- The login page demonstrates the intended user flow and form validation rather than real user authentication.

## Author

**Nelida Joseph**  
UI/UX Designer & Front-End Developer
