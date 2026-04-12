'use client'

import {
  HeroJuridico,
  IntroJuridico,
  CinematicStrip,
  ServicosJuridico,
  BeneficiosJuridico,
} from '@/components/juridico/JuridicoComponents'

export default function JuridicoPage() {
  return (
    <>
      <HeroJuridico />
      <IntroJuridico />
      <CinematicStrip />
      <ServicosJuridico />
      <BeneficiosJuridico />
    </>
  )
}
