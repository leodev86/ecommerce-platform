import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

export default function MainLayout() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <section className="flex-1 overflow-hidden">
                <Outlet />
            </section>

            <Footer />
        </main>
    );
}