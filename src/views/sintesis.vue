<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis  representa la algoritmia esto implica la aplicación de pasos ordenados para resolver problemas, siendo esencial en la programación. Un algoritmo se compone de operaciones finitas que resuelven problemas al dividir soluciones en procesos manejables. El pensamiento algorítmico implica abordar problemas con pasos ordenados, donde diferentes enfoques pueden llevar a la misma solución. Comprende etapas clave como comprender el problema, planificar una ruta, ejecutar el plan y revisar los resultados. Los algoritmos son cruciales en la programación, describiendo secuencias precisas de instrucciones que utilizan proposiciones y conectores lógicos para construir proposiciones compuestas y tomar decisiones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
