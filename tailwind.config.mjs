/** @type {import('tailwindcss').Config} */
const config = {
    corePlugins: {
        preflight: false, // 完全禁用 preflight
    },
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/ui/**/*.{js,ts,jsx,tsx}",
        "./src/stories/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    mode: 'jit',
    future: {
        hoverOnlyWhenSupported: true,
    },
};

export default config;
