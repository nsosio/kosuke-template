'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Mail,
  Phone,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';

import { useOrganization } from '@/hooks/use-organization';
import { useUser } from '@/hooks/use-user';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: ShoppingBag,
    title: 'Productos Premium',
    description:
      'Ofrecemos una amplia selección de productos de alta calidad para satisfacer todas tus necesidades empresariales.',
  },
  {
    icon: Building2,
    title: 'Soluciones Empresariales',
    description:
      'Desarrollamos soluciones personalizadas que se adaptan perfectamente a los requerimientos de tu organización.',
  },
  {
    icon: Users,
    title: 'Consultoría Profesional',
    description:
      'Nuestro equipo de expertos te guiará en cada paso para alcanzar tus objetivos comerciales.',
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento Sostenible',
    description:
      'Estrategias comprobadas que impulsan el crecimiento continuo y sostenible de tu negocio.',
  },
];

const benefits = [
  {
    metric: '500+',
    label: 'Clientes Satisfechos',
    description: 'Empresas confían en nuestros servicios',
  },
  {
    metric: '98%',
    label: 'Satisfacción',
    description: 'Índice de satisfacción del cliente',
  },
  {
    metric: '24/7',
    label: 'Soporte',
    description: 'Atención disponible todo el tiempo',
  },
  {
    metric: '15+',
    label: 'Años de Experiencia',
    description: 'Trayectoria en el mercado',
  },
];

const features = [
  'Garantía de calidad en todos nuestros productos',
  'Envío rápido y seguro a todo el país',
  'Precios competitivos del mercado',
  'Atención personalizada para cada cliente',
];

export function Home() {
  const { user } = useUser();
  const { organization } = useOrganization();

  const dashboardUrl = organization ? `/org/${organization.slug}/dashboard` : '/';

  return (
    <div className="bg-background min-h-screen w-full pt-[60px]">
      {/* Hero Section */}
      <section className="px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-8 text-center sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge
                variant="outline"
                className="relative mb-4 cursor-default overflow-hidden px-2 py-1 text-xs sm:mb-6 sm:px-3"
              >
                <motion.div
                  className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                />
                <Sparkles className="mr-1 h-3 w-3" />
                Calidad Garantizada
              </Badge>
            </motion.div>

            <h1 className="mb-4 px-2 text-4xl leading-tight font-bold tracking-tight sm:mb-6 sm:text-6xl lg:text-7xl">
              VAMOS PANOS
            </h1>

            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl px-2 font-sans text-base sm:mb-8 sm:text-lg lg:text-xl">
              Tu socio estratégico para el crecimiento empresarial. Ofrecemos soluciones
              integrales que impulsan tu negocio al siguiente nivel.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {user ? (
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href={dashboardUrl}>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Ir al Dashboard
                </Link>
              </Button>
            ) : (
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/sign-up">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Comenzar Ahora
                </Link>
              </Button>
            )}

            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="#servicios">
                <ArrowRight className="mr-2 h-4 w-4" />
                Conocer Más
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services/Products Section */}
      <section id="servicios" className="bg-background py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="mb-12 text-center sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl px-2 font-sans text-base sm:text-lg">
              Soluciones diseñadas para impulsar tu éxito empresarial
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full py-4 transition-colors hover:bg-card/80">
                  <CardContent className="py-0">
                    <div className="mb-3 sm:mb-4">
                      <div className="bg-muted text-muted-foreground rounded-lg p-2 inline-block">
                        <service.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground font-sans text-sm leading-relaxed sm:text-base">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="bg-background py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="mb-12 text-center sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">
              Por Qué Elegirnos
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl px-2 font-sans text-base sm:text-lg">
              Resultados comprobados que marcan la diferencia
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="mx-auto mb-12 grid max-w-5xl grid-cols-2 gap-4 sm:mb-16 sm:gap-6 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center p-4 sm:p-6">
                  <CardContent className="p-0">
                    <div className="mb-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                      {benefit.metric}
                    </div>
                    <div className="mb-1 text-sm font-semibold sm:text-base">
                      {benefit.label}
                    </div>
                    <div className="text-muted-foreground text-xs sm:text-sm">
                      {benefit.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Features List */}
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 sm:p-8">
              <CardContent className="p-0">
                <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
                  Ventajas Competitivas
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-background px-4 py-16 sm:px-6 sm:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 sm:p-12 text-center">
              <CardContent className="p-0">
                <h2 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl lg:text-5xl">
                  ¿Listo para Crecer?
                </h2>

                <p className="text-muted-foreground mb-8 px-2 font-sans text-base sm:mb-12 sm:text-lg">
                  Únete a cientos de empresas que ya confían en VAMOS PANOS para alcanzar sus
                  objetivos. Comienza tu transformación hoy mismo.
                </p>

                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 mb-8">
                  {user ? (
                    <>
                      <Button size="lg" className="w-full sm:w-auto" asChild>
                        <Link href={dashboardUrl}>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Ir al Dashboard
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                        <Link href="/settings">
                          <Users className="mr-2 h-4 w-4" />
                          Mi Cuenta
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size="lg" className="w-full sm:w-auto" asChild>
                        <Link href="/sign-up">
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Crear Cuenta
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                        <Link href="/sign-in">Iniciar Sesión</Link>
                      </Button>
                    </>
                  )}
                </div>

                {/* Contact Information */}
                <div className="border-t pt-8 mt-8">
                  <h3 className="mb-4 text-lg font-semibold sm:text-xl">Contáctanos</h3>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm sm:text-base">contacto@vamospanos.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm sm:text-base">Lun - Vie, 9:00 - 18:00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
