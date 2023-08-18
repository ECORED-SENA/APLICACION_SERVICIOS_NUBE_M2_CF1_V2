<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7bu6jnb5q8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4 #[b En la vida cotidiana se deben imaginar, diseñar y planear soluciones a problemas corrientes del día a día], por ende, muchas veces la estrategia “divide y vencerás” es empleada para afrontar la solución a estos problemas, la cual consiste en tomar un problema grande y segmentarlo en pequeños subproblemas (o pequeñas metas) que son más fácil de abordar, y la unión logra la solución a lo inicialmente planteado.
    p.mb-4 Desde un punto de vista computacional esta estrategia es la más empleada y, los grandes sistemas informáticos son la unión de un conjunto de instrucciones computacionales que resuelven problemas  puntuales.
    p Aquí se propone facilitar técnicas para el análisis de problemas, usando algoritmos que a futuro pueden llegar a ser parte constitutiva de un sistema teleinformático.    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
