<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/Falso_Verdadero.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Introducción a la algoritmia
        p.mb-4 Comprender sobre la algoritmia y la lógica matemática, destacando su relevancia en la programación y en la resolución de problemas en diversos campos. 
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 A continuación, encontrará una serie de afirmaciones relacionadas con el estudio del material de formación de introducción a la algoritmia. Léalas atentamente y responda si es verdadera o falsa para comprobar su aprendizaje.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
