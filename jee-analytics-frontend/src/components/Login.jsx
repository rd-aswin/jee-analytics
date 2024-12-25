import React, { useState } from "react";
import axios from "axios";

const Login = ({ toggleForm }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Added loading state
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true); // Start loading

        // Basic client-side validation
        if (!email || !password) {
            setError("Please fill in both fields.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post("/login", { email, password });
            console.log("Login successful", response.data);
            // Handle successful login (e.g., redirect or show success message)
        } catch (err) {
            console.error("Login failed", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong.");
        }
        setIsLoading(false); // Stop loading
    };

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />
                    <div className="hidden lg:relative lg:block lg:p-12">
                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome Back 🦑
                        </h2>
                        <p className="mt-4 leading-relaxed text-white/90">
                            Sign in to access your personalized dashboard and updates.
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <form onSubmit={handleLogin} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                    aria-label="Email"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="Password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        required
                                        aria-label="Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 text-gray-500"
                                        aria-label="Toggle password visibility"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            {error && (
                                <div className="col-span-6 text-sm text-red-500">
                                    {error}
                                </div>
                            )}
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    disabled={isLoading} // Disable button while loading
                                >
                                    {isLoading ? "Logging in..." : "Log in"}
                                </button>
                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Don't have an account?{" "}
                                    <a href="#" className="text-gray-700 underline" onClick={toggleForm}>
                                        Register
                                    </a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Login;
