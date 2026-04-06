import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
const Landing = lazy(() => import("./sections/Landing"));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Inventory = lazy(() => import("./sections/Inventory"));
const Services = lazy(() => import("./sections/Services"));
const Statistics = lazy(() => import("./sections/Statistics"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Blog = lazy(() => import("./sections/Blog"));
const CTA = lazy(() => import("./sections/CTA"));
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="/hero"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Hero />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/inventory"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Inventory />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/statistics"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Statistics />
                </Suspense>
              }
            />
            <Route
              path="/testimonials"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Testimonials />
                </Suspense>
              }
            />
            <Route
              path="/blog"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="/cta"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CTA />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
