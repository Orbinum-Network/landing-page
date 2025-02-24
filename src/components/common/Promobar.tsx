import { Link } from "react-router";

export const Promobar = () => {
    return (
        <div className="bg-primary text-white text-center py-2">
            <p className="mb-0">
                Coming soon! 🎉 We'll be launching an exclusive pre-sale. 
                <Link to="/pre-sale" className="text-white font-bold ml-2 hover:underline">
                    Read more here!
                </Link>
            </p>
        </div>
    );
};