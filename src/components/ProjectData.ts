import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlutter, SiDart, SiTailwindcss, SiEthereum, SiTypescript } from 'react-icons/si';
import { TbLayoutDashboard, TbApiApp } from "react-icons/tb";
import aura from '../assets/aura.png'
import fin from '../assets/finance.png'
import sol from '../assets/solana.png'
import store from '../assets/store.png'
import blind from '../assets/blind.png'
export interface Project {
  title: string;
  description: string;
  features: string[];
  tech: { name: string; icon: any }[];
  links: {
    live?: string;
    github?: string;
  };
  image: string;
}

export const projectsData: Project[] = [
  {
    title: "Blinder - Student Community Hub",
    description: "An exclusive online community platform for students with college email domains, featuring real-time feed filtering and community engagement.",
    features: [
      "College domain email verification",
      "Real-time feed search",
      "Dynamic post creation",
      "Community segmentation",
      "Dark mode support"
    ],
    tech: [
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      live: "https://gvpblind-pi69.onrender.com/",
      github: "https://github.com/danixDe/Blinder/"
    },
    image: blind,
  },
  {
    title: "MintBridge",
    description: "A dApp for Solana Devnet Web 3 technology for phantom and solflare crypto wallet integration, Connection and Token Generation, Minting and Transactions",
    features: [
      "Phantom/ Solflare Wallet Connection",
      "Token Generation",
      "Minting Tokens",
      "Web 3 login",
      "Block chain Transactions"
    ],
    tech: [
      { name: "React.js", icon: FaReact },
      {name : "TypeScript", icon: SiTypescript},
      { name: "Web3.js", icon: SiEthereum },
      { name: "TailwindCss", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: TbLayoutDashboard },
    ],
    links: {
      live: " https://token-mint-alpha.vercel.app/",
      github: "https://github.com/danixDe/SolanaXchange"
    },
    image: sol,
  },
  {
    title: "AuraHP - Blood Donation Platform",
    description: "A comprehensive blood donation platform connecting medical facilities with donors, featuring real-time notifications and location-based services.",
    features: [
      "Dual login system (Medical & Donor)",
      "Real-time blood request notifications",
      "Donation history tracking",
      "Google Maps integration",
      "Analytics dashboard"
    ],
    tech: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      github: "https://github.com/bharadwaj-dasari/Aura"
    },
    image:aura,
  },
  {
    title: "AlumNet - Alumni Network",
    description: "A platform connecting college students with alumni, featuring AI-powered chatbot for enhanced interaction.",
    features: [
      "Alumni directory",
      "AI chatbot integration",
      "Student-alumni interaction",
      "Profile management"
    ],
    tech: [
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      github: "https://github.com/danixDe/sih"
    },
    image: '',
  },
  {
    title: "Finance Tracker",
    description: "A simple web app to track expenses, visualize spending, and manage budgets. ",
    features: [
      "CRUD Transactions",
      "Monthly Expenses Chart",
      "Category wise breakdown pie chart",
      "Setting Budget and vs. Actual Comparision",
      "Basic spending Insights"
    ],
    tech: [
      { name: "React.js", icon: FaReact },
      { name: "Tailwindcss", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: TbLayoutDashboard },
      { name: "Router DOM", icon: FaReact }
    ],
    links: {
      live: "https://finance-tracker-bg4y.vercel.app/",
      github: "https://github.com/danixDe/Finance_Tracker"
    },
    image: fin,
  },
  {
    title: "Fake Store",
    description: "This is a responsive shopping website built using React.js and the Fake Store API as an E-Commerce Web Application",
    features: [
      "JWT Login",
      "Product Listing Page",
      "Product Details Page",
      "Cart and Trasactions"
    ],
    tech: [
      { name: "React.js", icon: FaReact },
      { name: "Tailwindcss", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: TbLayoutDashboard },
      { name: "Fake Store Api", icon: TbApiApp }
    ],
    links: {
      live: "https://fake-stor.netlify.app/",
      github: "https://github.com/danixDe/fake_store"
    },
    image: store,
  },
];