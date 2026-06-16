# 🔐 React OTP Input

A clean and interactive **OTP (One-Time Password) Input Component** built with **React** and **Vite**. This project demonstrates how to create a multi-field OTP verification UI with automatic focus management, input validation, and instant verification feedback.

---

## ✨ Features

- 🔢 5-digit OTP input fields
- ⌨️ Automatically moves to the next input after typing
- 🎯 Auto-focuses the first input on page load
- 🚫 Accepts only numeric input
- ✅ Instantly verifies the OTP after all digits are entered
- 🔄 Displays success or error messages
- ⚡ Fast development environment powered by Vite
- ⚛️ Built using modern React Hooks

---

## 📸 Preview

> Enter the OTP shown in the alert dialog when the application starts.

Example:

```text
Your OTP is: 48291
```

After entering all five digits:

- ✅ **Verified** (if correct)
- ❌ **OTP is incorrect** (if wrong)

---

## 🛠️ Tech Stack

- React 19
- Vite
- JavaScript (ES6+)
- CSS
- React Hooks (`useState`, `useEffect`, `useRef`)

---

## 📂 Project Structure

```text
react-otp-input/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-otp-input.git
```

### 2. Navigate into the project

```bash
cd react-otp-input
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## ⚙️ How It Works

1. A random **5-digit OTP** is generated when the application loads.
2. The OTP is displayed through an alert (for demonstration purposes).
3. Users enter one digit per input field.
4. Focus automatically shifts to the next input.
5. Once all fields are filled, the entered OTP is compared with the generated OTP.
6. A success or error message is displayed immediately.

---

## 📚 React Concepts Used

- Functional Components
- State Management (`useState`)
- Side Effects (`useEffect`)
- DOM References (`useRef`)
- Controlled Components
- Event Handling
- Conditional Rendering

---

## 🔮 Possible Improvements

- API integration for real authentication
- Unit testing with React Testing Library
- Make NPM Package

---

## 🎯 Learning Objectives

This project is great for learning:

- React Hooks
- Managing multiple input fields
- Focus management
- Form validation
- Array state updates
- Building reusable UI components

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## ⭐ Support

If you found this project helpful:

- ⭐ Star the repository
- 🍴 Fork it
- 🛠️ Build upon it
- 📢 Share it with others

Happy Coding! 🚀
