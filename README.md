
## Peace Udotong

Portfolio Frontend 💻
The interactive, high-performance frontend for my professional portfolio. Built with a focus on clean UI/UX, responsive design, and seamless integration with a custom Django REST API.

✨ Key Features
Modern UI: Developed using Tailwind CSS for a sleek, utility-first design.

Dynamic Contact Form: A custom-built modal form with real-time validation and asynchronous submission handling.

Type Safety: Built with TypeScript to ensure robust code and catch errors during development.

Lucide Icons: Integrated for a consistent and lightweight iconography system.

Smooth Animations: CSS-based floating particles and gradient pulses for an immersive background effect.

🛠️ Tech Stack
Framework: React 18

Language: TypeScript

Styling: Tailwind CSS + Lucide React (Icons)

Form Handling: React State + Native Fetch API

Build Tool: Vite (or Create React App, depending on your setup)

🔌 API Integration
The frontend communicates with a Django backend via a custom handleSubmit hook. It handles three specific states:

Loading: Disables the button and shows a Loader2 spinner.

Success: Displays a CheckCircle animation and clears the form data.

Error Handling: Maps Django REST Framework (DRF) validation errors directly to the relevant input fields (e.g., "Invalid email format").

🚀**Getting Started**
```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

🎨 Design Decisions
Glassmorphism: Contact cards utilize a semi-transparent background (bg-gradient-card) to create depth.

Accessibility: Buttons include :disabled states to prevent double-submissions, and input fields use aria-labels where appropriate.

Performance: Background animations are handled via optimized CSS @keyframes to reduce CPU load compared to JS-heavy libraries.

👨‍💻 Author
Peace Udotong

Portfolio: peaceudotong.com

LinkedIn: in/peaceudotong




## This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

