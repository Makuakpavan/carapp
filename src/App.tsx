import { lazy, Suspense } from "react";
import Loader from "./sections/Loader";
import ScrollToTop from "./components/ScrollToTop";
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
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="/hero"
              element={
                <Suspense fallback={<Loader />}>
                  <Hero />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<Loader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/inventory"
              element={
                <Suspense fallback={<Loader />}>
                  <Inventory />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense fallback={<Loader />}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/statistics"
              element={
                <Suspense fallback={<Loader />}>
                  <Statistics />
                </Suspense>
              }
            />
            <Route
              path="/testimonials"
              element={
                <Suspense fallback={<Loader />}>
                  <Testimonials />
                </Suspense>
              }
            />
            <Route
              path="/blog"
              element={
                <Suspense fallback={<Loader />}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="/cta"
              element={
                <Suspense fallback={<Loader />}>
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
