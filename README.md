# UNCP ACM Website

This is the website for the UNCP ACM (Association for Computing Machinery) student chapter. I built it with React, Vite, and Tailwind CSS for our class assignment.

## What's on the site?

- **Home** - Shows what ACM is about with a bunch of cool features and why you should join
- **About** - Talks about our mission, what we do, and why you don't need prior experience to join
- **Officers** - Meet the team running the club
- **Events** - See what events we're hosting and when
- **Join** - Sign up form if you're interested in joining us

## How to run it

First, clone the repo and install dependencies:

```bash
git clone https://github.com/sp0076/uncp-acm.git
cd uncp-acm
npm install
```

Then start the development server:

```bash
npm run dev
```

It'll run on `http://localhost:5173/`. Just open that up in your browser.

If you want to build it for production:

```bash
npm run build
```

## Technologies I used

- **React** - to build the UI components
- **Vite** - for fast development and building
- **Tailwind CSS** - to style everything
- **React Router** - so we can navigate between pages

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx       # The navigation bar at the top
│   └── Footer.jsx       # Footer at the bottom
├── pages/
│   ├── Home.jsx         # Landing page
│   ├── About.jsx        # About page
│   ├── Officers.jsx     # Officers page
│   ├── Events.jsx       # Events page
│   └── Join.jsx         # Join page
├── App.jsx              # Main app file with routing
└── index.css            # Global styles
```

## Features

- Mobile responsive design (works on phones, tablets, and desktops)
- Smooth navigation between pages
- Clickable feature cards that take you to relevant pages
- Event details with dates and times
- Sign-up form for new members
- FAQ sections on the Events and Join pages
- Student testimonials on the Events page
- Social media links in the footer

## Contact

If you have questions about the club, email us at **acm@uncp.edu**

---

Made by Shruti Pallissery 💻
