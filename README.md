# DevStrologer

<img width="264" alt="logo" src="https://github.com/user-attachments/assets/65400e98-e500-46c6-8cc5-17d881f7a6cb">
DevStrologer is a fun application that mixes actual horoscopes with developer personality based on some user input. The app generates personalized "Dev Horoscopes" for developers and tech enthusiasts.

## Features

- **Personalized Horoscopes**: Generate daily horoscopes tailored to developers based on their tech preferences.
- **Social Media Sharing**: Share your personalized horoscope on X.
- **Responsive Design**: Fully responsive design that works seamlessly on mobile and desktop.

## Technology Stack

- **Frontend**:

  - **Next.js**: React framework for server-side rendering and static site generation.
  - **Shadcn**: For creating UI components.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **Lucide React**: Icon library for React.

- **Backend**:

  - **Node.js**: Server-side JavaScript runtime.
  - **Google Generative AI (Gemini)**: External AI API for generating horoscopes.

- **Deployment**:
  - **Vercel**: Hosting and deployment platform for frontend and backend.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Harry-kp/devstrologer.git
   cd devstrologer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   GEMINI_API_KEY=your_gemini_api_key
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To create a production build, run:

```bash
npm run build
```

To start the production server, run:

```bash
npm start
```

### Deployment

This project is configured to be deployed on Vercel. Follow these steps to deploy:

1. **Sign Up and Log In**: Go to [Vercel](https://vercel.com/) and sign up or log in with your GitHub account.
2. **Import Your Project**: Import your GitHub repository to Vercel.
3. **Configure Environment Variables**: Add your `GEMINI_API_KEY` in the Vercel dashboard under "Settings" > "Environment Variables".
4. **Deploy**: Vercel will automatically deploy your project whenever you push changes to your GitHub repository.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Shadcn](https://shadcn.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Google Generative AI (Gemini)](https://makersuite.google.com/)
