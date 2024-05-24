/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen:"#2D6873",
        customSkin:"#FBFDED",
        customText:"#E2E2E2",
        customGrayText:"#AEAEAE",
        customDashboard:"#3D3D3D",
        customBlack:"#272833",
        customGreen2:"#117C72"
      },
      boxShadow:{
        customShadow:"box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        customShadow2:"box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
      }
    },
  },
  plugins: [],
}