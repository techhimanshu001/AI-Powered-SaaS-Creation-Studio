# 🧠 Gp.ai – Your AI-Powered Creation Studio (SaaS)

Welcome to **Gp.ai**, a powerful SaaS application built for creators, marketers, and developers who want to boost productivity using cutting-edge AI tools—all in one place. 🌟

🟢 **Live Demo**: [https://gp-ai.vercel.app](https://gp-ai-plum.vercel.app/)

---

## 🚀 Features

🔐 **Authentication & Security**
- Powered by **Clerk** for secure sign-in/sign-up and session management.
- Integrated with **payment gateway** (Slice integration coming soon).

📋 **Dashboard**
- After logging in, users are redirected to a beautiful **dashboard** showing all of their AI-powered **creations**.

🧰 **AI Tools Included**
- ✍️ **Write Article** – Generate well-structured articles instantly.
- 📰 **Generate Blog Titles** – Brainstorm creative blog post titles.
- 🎨 **Generate Images** – AI-based image generation for content or social media.
- 🖼️ **Remove Background** – Upload and clean images in seconds.
- 🧽 **Remove Objects** – Magically erase unwanted elements from images.
- 📄 **Resume Review** – Upload your resume and get instant feedback and suggestions.

👥 **Community**
- Share your creations and get inspired by browsing the **community tab**, where users can post and view each other’s AI-generated content.

---

## 🛠️ Tech Stack

- ⚙️ **Frontend**: React.js + Tailwind CSS
- 🔑 **Authentication**: Clerk
- 🧾 **Payments**: Clerk Payments (Slice coming soon)
- 🗃️ **Database**: Neon (PostgreSQL)
- 📦 **Cloud Storage**: Cloudinary
- 🧠 **AI/ML APIs**: Gemini API, ClipDrop API
- 📋 **Clipboard API**: For easy copy/paste of generated content

- <img width="1886" height="851" alt="image" src="https://github.com/user-attachments/assets/7f52af74-b682-42bc-a532-c7cea0caa126" />
- <img width="1881" height="864" alt="image" src="https://github.com/user-attachments/assets/a1fcbc87-5302-4fe6-9473-e4ee4b16f324" />
- <img width="1869" height="835" alt="image" src="https://github.com/user-attachments/assets/d47a3fd4-9d2f-4d90-b845-b9ff91fd9b6f" />
- <img width="1887" height="851" alt="image" src="https://github.com/user-attachments/assets/d54a01af-31e5-4d18-bc08-0dde5a9229ae" />
- <img width="1894" height="863" alt="image" src="https://github.com/user-attachments/assets/2ba05dec-e61b-48f2-a017-6770b3febf8b" />






---

## 🧪 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/gp-ai.git
cd gp-ai


### Install Dependencies
bash
npm install


3. Add Environment Variables
⚙️Client (.env)
env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:5173


⚙️Server (.env)
env

DATABASE_URL=your_postgres_database_url

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

GEMINI_API_KEY=your_gemini_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key

CLOUNINARY_CLOUD_NAME=your_cloudinary_name
CLOUNINARY_API_KEY=your_cloudinary_api_key
CLOUNINARY_API_SECRET=your_cloudinary_api_secret


👍👍4. Run the Development Server
Client
bash
npm run dev

Server
bash
node server.js


🙋‍♂️ Made by
Gopal Verma
📧 Email: vermagopal1625@gmail.com
