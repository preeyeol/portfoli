# Preeti Raskoti Portfolio - MERN Stack

This is a full stack portfolio project for **Preeti Raskoti - Full Stack Developer**.

## Features

- Modern React portfolio frontend
- Node.js + Express backend
- MongoDB database integration
- Contact form with message saving
- Resume upload feature from frontend
- Resume download button for latest uploaded PDF
- Clean code architecture on backend

## Backend Architecture

```bash
controllers -> services -> usecases -> repositories -> models
```

This keeps the code clean and scalable.

## Project Structure

```bash
preeti-portfolio/
├── backend/
├── frontend/
└── README.md
```

## 1. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside `backend` using `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/preeti_portfolio
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm run dev
```

## 2. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file inside `frontend` using `.env.example`:

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

## 3. Resume Upload

- Open the portfolio in browser
- Go to **Resume** section
- Upload a **PDF** file
- Latest uploaded resume becomes downloadable from the **Download Resume** button

## 4. Notes

- Resume upload accepts only PDF files
- Max file size is 2 MB
- Uploaded files are stored in `backend/uploads/`
- Contact form data and resume metadata are stored in MongoDB

## 5. Suggested Improvements

- Add authentication for admin-only resume upload
- Add GitHub and LinkedIn links
- Add live project links
- Add resume preview modal
- Deploy frontend and backend separately

