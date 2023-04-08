import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout/layout";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import { Products } from "@/components/sections/products";
import { Categories } from "@/components/sections/categories";
import Blog from "@/components/sections/blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Products />
      <Categories />
      <Blog />
    </Layout>
  );
}
