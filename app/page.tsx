import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import ServicesGrid from "@/app/components/ServicesGrid";
import LegalSection from "@/app/components/LegalSection";
import ConsultoriaEmpresasSection from "@/app/components/ConsultoriaEmpresasSection";
import AboutSection from "@/app/components/AboutSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio"><Hero /></section>
        <section id="alta-performance"><ServicesGrid /></section>
        <section id="juridico"><LegalSection /></section>
        <section id="empresas"><ConsultoriaEmpresasSection /></section>
        <section id="sobre"><AboutSection /></section>
      </main>
      <footer id="contato"><Footer /></footer>
    </>
  );
}