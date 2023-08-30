<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la algoritmia
      
    .row.justify-content-center.align-items-center.mb-4           
      .col-12.col-lg-6.my-3
        .cajon--azul(style="background-color: #DBF6F9;").p-4
          h4 La aplicación apropiada de una serie de pasos detallados puede garantizar una solución correcta de un problema; es así como la programación de computadores o construcción de #[i software] se basa en esta práctica.
      .col-12.col-lg-6.my-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Pasos en la algoritmia básica       
        img.img-a.img-t(src='@/assets/curso/temas/img1.svg', alt='La figura representa los pasos de la algoritmia básica; entre ellos se encuentran el análisis, el diseño, la implementación y la validación.')
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Definición de algoritmo          
    p.mb-4 Según la Real Academia Española (2020) un algoritmo está definido como un “#[b conjunto ordenado y finito de operaciones que permite hallar la solución de un problema”].
    p.mb-4 Es importante comprender que computacionalmente las máquinas están en capacidad de hacer unas pocas operaciones matemáticas muy básicas y sencillas, pero también se considera que computan enormes cantidades de estas operaciones en unidades de tiempo muy corto.
    p.mb-4 Entonces, la solución de un problema utilizando computadoras, fácilmente se puede convertir en una enorme cantidad de pequeñas operaciones matemáticas, tal vez abrumadoras desde el punto de vista humano. Es por eso que se requiere la especialización de conjuntos de operaciones, los cuales se agrupan en pequeños procesos que componen la solución de un problema.
    .row.mb-5
      .col-6
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=U3CGMyjzlvM" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Para ampliar la definición puede visualizar el siguiente video
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Pensamiento algorítmico
    p.mb-5 Es así como un problema puede ser abordado de varias maneras y aportar la misma solución, pero lo que siempre tendrán en común es que para resolverlo usaron una secuencia de pasos ordenados, por ejemplo, si se pasa una hoja de papel cuadriculado a los aprendices de una clase y se les pide que dibujen un cuadrado sin levantar el lápiz, habrá quienes lo hagan de diferente manera y obtengan el mismo resultado como lo muestra la siguiente figura:
    .row.bg-color1.mb-5
      .col-12.col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Pensamiento lógico y procedimental       
        img(src='@/assets/curso/temas/img2.png', style='max-width: 80%; position: relative; left: 7%;')
      .col-12.col-lg-6.mt-4.mt-lg-0.j
        h4 Como se observa en la figura el aprendiz A inició realizando una línea vertical hacia arriba, mientras que el aprendiz B una vertical hacia abajo, o el aprendiz D una horizontal hacia la derecha, y todos los siguientes llevaron a cabo un proceso que les permitió cumplir con la solución al problema planteado, de forma global prácticamente existe una gran cantidad de soluciones al mismo problema.

    p.mb-4 Al imaginar que el problema es mucho más complejo que el descrito en el ejemplo anterior se concluye que existen tantas soluciones como el enfoque o lógica empleada por cada aprendiz o persona. Pero lo que sí es común en todos los casos es que se realizaron unas fases mentales secuencialmente ordenadas, las cuales son:
    ol.lista-ol--cuadro.mb-4
      li 
        .lista-ol--cuadro__vineta
          span 1
        | #[b Entender el problema enunciado por el instructor (entender el problema).]
      li 
        .lista-ol--cuadro__vineta
          span 2
        | #[b Escoger una ruta a seguir del rectángulo (hacer un plan).]
      li 
        .lista-ol--cuadro__vineta
          span 3
        | #[b Plasmar en el papel cuadriculado ese plan (ejecutar el plan).]
      li 
        .lista-ol--cuadro__vineta
          span 4
        | #[b Revisar el resultado y ver que se alcanzó el objetivo (revisar).]
    p.mb-5 Cuando el problema es muy complejo de resolver, muchas veces toca volver y analizar el problema, o trazar un nuevo plan o plasmar ese nuevo plan una y otra vez, revisando los resultados y volviendo a analizar hasta encontrar la solución del problema.
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Solución de problemas y programación
    figure.mb-4
          img(src='@/assets/curso/temas/img3.png', style='max-width: 100%;')
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h3.mb-0 “Los algoritmos son una herramienta que permite describir claramente un conjunto finito de instrucciones"
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p “En el ámbito de la computación los algoritmos son una herramienta que permite describir claramente un conjunto finito de instrucciones ordenadas secuencialmente y libres de ambigüedad, que debe llevar a cabo un computador para lograr un resultado previsible. Vale la pena recordar que un programa de computador consiste de una serie de instrucciones muy precisas y escritas en un lenguaje de programación que el computador entiende (Logo, Java, Pascal, etc.)” (López, 2019, p. 7).
    p.mb-3 #[b Ejemplo 1:] se propone diseñar un algoritmo para apagar una computadora.
    figure.mb-5
      img.img-t(src='@/assets/curso/temas/img4.png', alt='La imagen ilustra un ejemplo de cómo diseñar un algoritmo para apagar una computadora. En primer lugar, se debe hacer clic en el icono de inicio. A continuación, se debe seleccionar el icono que indica "apagar". Después, es necesario esperar a que la computadora se apague por completo. Por último, se deben desconectar los cables del enchufe.')
    p.mb-3 #[b Ejemplo 2:] se propone diseñar un algoritmo para cargar un celular.
    figure.mb-5
      img.img-t(src='@/assets/curso/temas/img5.png', alt='La imagen ilustra un ejemplo de cómo cargar un celular. En primer lugar, se debe buscar el cargador. Después, agarrar el cargador y el celular. A continuación, enchufar el cargador al celular y conectarlo al tomacorriente. Luego, esperar a que comience a cargarse. Una vez cargado, desconectarlo y colocarlo en un lugar seguro')
    p.mb-5 Con base en los ejemplos anteriormente planteados se puede concluir que un algoritmo debe ser:
    .row.align-items-center
      .col-lg-1.my-3
        img.img-a.img-t(src='@/assets/curso/temas/img6.png', style='max-width: 100%;')
      .col-11.my-3
        .hr1
        .h6 Realizable:
        p.mb-0 El proceso algorítmico debe terminar después de una cantidad finita de pasos. Se dice que un algoritmo es inaplicable cuando se ejecuta con un conjunto de datos iniciales y el proceso resulta infinito o durante la ejecución se encuentra con un obstáculo insuperable sin arrojar un resultado.
    .row.align-items-center
      .col-lg-1.my-3
        img.img-a.img-t(src='@/assets/curso/temas/img7.png', style='max-width: 100%;')
      .col-11.my-3
        .hr1
        .h6 Comprensible:
        p.mb-0 Debe ser claro lo que hace, de forma que quien ejecute los pasos (ser humano o máquina) sepa qué, cómo y cuándo hacerlo. Debe existir un procedimiento que determine el proceso de ejecución.
    .row.align-items-center.mb-5
      .col-lg-1.my-3
        img.img-a.img-t(src='@/assets/curso/temas/img8.png', style='max-width: 100%;')
      .col-11.my-3
        .hr1
        .h6 Preciso:
        p El orden de ejecución de las instrucciones debe estar perfectamente indicado. Cuando se ejecuta varias veces, con los mismos datos iniciales, el resultado debe ser el mismo siempre. La precisión implica determinismo. (López, 2009, p. 22)
        .hr2
    .row.align-items-start.bg-color1
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Fases para elaborar un programa de computador       
        img.img-a.img-t(src='@/assets/curso/temas/img9.png', , alt='La figura representa las fases para elaborar un programa de computadora. En primer lugar, se debe analizar el problema; posteriormente, se procede a diseñar el algoritmo. Después, se realiza la traducción del algoritmo, seguida de la depuración del programa.')
    .row.mb-4
      .col-12.bg-color2
        p.txt-deco1.mb-0 #[b Figura recuperada de Educación básica algoritmos y programación. Guía para docentes, de J. C. López García, 2007-2009, Fundación Gabriel Piedrahita Uribe www.eduteka.org p. 11.]
    p.mb-5 La figura 3 muestra las fases y sus relaciones en el proceso de diseño de algoritmos de programas informáticos, que están basados en un algoritmo que posteriormente es escrito en un lenguaje de programación.
    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Análisis del problema (entenderlo)
    p.mb-4 Como los programas de computador tienen por objetivo resolver problemas muy puntuales, lo primero que se debe realizar para resolverlos es lograr una mejor comprensión posible de estos.
    p.mb-4 Para realizar esta actividad se debe:
    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span 1
        | #[b Formular claramente el problema.]
      li 
        .lista-ol--cuadro__vineta
          span 2
        | #[b Especificar los resultados que se desean obtener con la solución.]
      li 
        .lista-ol--cuadro__vineta
          span 3
        | #[b Identificar la información disponible en los datos.]
    TabsC.mb-5
      .py-3.py-md-4(titulo="Formular el problema")
        .row
          .col-12.col-lg-5
            figure
              img(src='@/assets/curso/temas/img10.png', alt='Texto que describa la imagen')
          .col-12.col-lg-7.mt-4.mt-lg-0
            h4 Formular el problema
            p.mb-4 A continuación, algunas preguntas previas a la formulación del problema:
            .list.align-items-star
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Es posible definir de forma más clara el problema?
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Qué palabras no son conocidas o se desconoce su significado?
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Se ha resuelto antes algún problema similar?
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Qué información es importante para resolver el problema?
            .list.align-items-star.mt-2.mb-4
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Qué información no es importante y se puede omitir?
            h4 Ejemplo
            p.mb-4 Don Juan necesita decidir cómo comprar un teléfono celular que cuesta $870.000 de contado o $980.000 a crédito; él tiene $630.000 pesos en efectivo.
            p.mb-4 Luego de revisar las preguntas previas se puede concluir:
            p.mb-4 Como el efectivo que tiene don Juan no le alcanza para comprar el teléfono celular de contado, entonces él tiene dos opciones: comprarlo completamente a crédito o también pagar una parte de contado (como cuota inicial) y el resto diferirlo a crédito.
            p Para poder resolver este problema se debe conocer el número de cuotas en el que difiere si desea pagarlo totalmente a crédito o conocer el número de cuotas y el valor total del celular si se da una cuota inicial de $630.000 pesos.
      .py-3.py-md-4(titulo="Precisar elementos de entrada")
        .row
          .col-12.col-lg-5
            figure
              img(src='@/assets/curso/temas/img11.png', alt='Texto que describa la imagen')
          .col-12.col-lg-7.mt-4.mt-lg-0
            h4 Precisar elementos de entrada
            p.mb-4 Otro punto importante en la fase de análisis del problema es determinar cuál es la información disponible, por lo tanto:
            .list.align-items-star
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Qué información es importante y necesaria para resolver el problema?
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Qué información no es importante y se puede prescindir?
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Cuáles son los datos de entrada conocidos?
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Cuál es la incógnita o qué se debe calcular?
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Los datos se pueden agrupar en categorías?
            .list.align-items-star.mt-2.mb-4
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Qué información adicional hace falta para resolver el problema?
            p Otro elemento a resaltar es el nivel de conocimiento y las limitaciones que se tienen en el ámbito o el contexto del problema que está tratando de resolver. Por ejemplo, si el problema requiere conceptos financieros para entender la naturaleza de los datos, o si es necesario adquirir nueva información y/o poder consultarla, para estar seguros de que es posible tratarla conforme el contexto lo requiera.
      .py-3.py-md-4(titulo="Precisar resultados esperados")
        .row
          .col-12.col-lg-5
            figure
              img(src='@/assets/curso/temas/img12.png', alt='Texto que describa la imagen')
          .col-12.col-lg-7.mt-4.mt-lg-0
            h4 Precisar resultados esperados
            p.mb-4 Para determinar con claridad cuál es el resultado final esperado (o producto) que se quiere obtener es necesario determinar o definir qué resultados se solicitan y, en qué tipo o formato deben estar (mostrados en pantalla, diagramación, orden, etc.). Para ello, es importante tener en cuenta:
            .list.align-items-star
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿Qué información están solicitando?
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p ¿En qué formato se debe entregar esta información?
    Separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5 Desarrollo de la creatividad: elementos, modelos, fases y sus objetivos
    .row.align-items-start.mb-4
      .col-12.col-lg-7
        p.mb-4 Resolver algoritmos es una actividad que requiere en la mayoría de los casos creatividad por parte del programador, esta es una habilidad que se va fortaleciendo en la medida que se desempeña más y más en procesos de desarrollo de #[i software].
        p Para estimular “el pensamiento creativo propuesto por Resnick (2007) el programador debe imaginar qué quiere hacer; crea un proyecto basado en sus ideas; juega y comparte sus ideas y creaciones con otros para reflexionar sobre sus experiencias y permitirse imaginar nuevas ideas y nuevos proyectos. La espiral genera un proceso indefinido de mejoramiento continuo” (López, 2009, p. 19).
      .col-12.col-lg-5.mt-4.mt-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Espiral del Pensamiento Creativo diseñada       
        figure.mb-5
          img(src='@/assets/curso/temas/img13.png',, alt='La figura representa la espiral del pensamiento creativo. Para ello, se debe comenzar por imaginar, luego crear, después jugar, compartir, reflexionar y nuevamente imaginar.')
          figcaption Figura recuperada de Educación básica algoritmos y programación. Guía para docentes, de J. C. López García, 2007-2009, Fundación Gabriel Piedrahita Uribe, www.eduteka.org p. 19.
      p En conclusión, se puede decir que un algoritmo es la definición de una secuencia lógica de pasos que permiten solucionar un problema. Formular algoritmos es la base de los grandes adelantos en las ciencias matemáticas y la tecnología, porque se pueden aplicar a cualquier área del conocimiento.      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
