# MovieApp

**MovieApp** is a React-based web application built with TypeScript and Vite. It allows users to explore movie details using data from [The Movie Database (TMDb)](https://www.themoviedb.org/).

## Features
- 🚀 Modern frontend stack: React + TypeScript + Vite
- 🔄 Client-side routing with React Router
- 🎬 Fetches movie data from TMDb API

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/omarkashour/MovieApp.git
   cd MovieApp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Install Vite (if not already installed):**
   ```sh
   npm install vite@latest
   ```

4. **Install React Router:**
   ```sh
   npm install react-router-dom
   ```

### Configuration
Before running the application, you need to set up an API key:

1. **Create an account and generate an API key** from [TMDb](https://www.themoviedb.org/).
2. **Open the `src/services/Api.ts` file** in the project directory.
3. **Replace the placeholder with your API key:**
   ```ts
   const API_KEY = "your_api_key_here";
   ```

### Running the App
Start the development server:
```sh
npm run dev
```

The app will be available at **`http://localhost:5173/`** (default Vite port).


💡 *Feel free to modify and enhance this project. Contributions are welcome!*
