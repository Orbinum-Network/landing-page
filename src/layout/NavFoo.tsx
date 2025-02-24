import { Footer, Navbar } from "@/components/common";
import { Outlet } from "react-router";

export function NavFooLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}