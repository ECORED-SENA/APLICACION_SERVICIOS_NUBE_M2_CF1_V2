<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Lógica matemática

    p.mb-4 La lógica matemática es la disciplina que trata de métodos de razonamiento. En un nivel elemental, la lógica proporciona reglas y técnicas para determinar si es o no válido un argumento dado. El razonamiento lógico se emplea en matemáticas para demostrar teoremas; en ciencias de la computación para verificar si son o no correctos los programas; en las ciencias física y naturales, para sacar conclusiones de experimentos; y en las ciencias sociales y en la vida cotidiana, para resolver una multitud de problemas. Ciertamente se usa en forma constante el razonamiento lógico para realizar cualquier actividad. (EcuRed, s.f.)
    .row.mb-5
      .col-lg-auto
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=9zYDaZhS7Ac" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Para ampliar la definición puede visualizar el siguiente video
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Componentes de la lógica matemática
    p.mb-4 Todo razonamiento lógico está compuesto por una serie de elementos que se interrelacionan entre sí, y la correcta interpretación de estos componentes y de sus relaciones corresponde al análisis deductivo. Estos componentes son las preposiciones y conectores lógicos que se describen a continuación:
    ol.lista-ol--cuadro
      li
        .lista-ol--cuadro__vineta
          span a.
        | #[b Proposiciones]
      p.mb-4.mt-4 Una proposición o enunciado es una oración que puede ser falsa o verdadera, pero no ambas a la vez. La proposición es un elemento fundamental de la lógica matemática.
      p.mb-4 Las proposiciones pueden ser simples o compuestas. Las primeras están formadas por una sola proposición, por el contrario, las proposiciones compuestas están conformadas por dos o más proposiciones unidas por un conector.
      .row.mb-4
        .col-12.col-lg-8
          p.mb-4 A continuación, se muestra una serie de ejemplos de proposiciones válidas y no válidas, con estos se explicará por qué algunos enunciados no son proposiciones.
          p.mb-4 Para los enunciados anteriores se determina lo siguiente:
          p p y q son proposiciones simples válidas porque pueden tomar un valor verdadero o falso; sin embargo, los enunciados r y s son proposiciones no válidas, porque no pueden tomar un valor de falso o verdadero, uno de ellos es un saludo y el otro es una orden.
        .col-12.col-lg-4.mt-4.mt-lg-0
          .cajon--azul.p-4.mb-5.mb-lg-0
            p #[b p:] la tierra es plana.
            p #[b q:] -17 + 38 = 21
            p #[b r:] hola ¿cómo estás?
            p.mb-0 #[b S:] lava el carro por favor.
      li.mt-5.mb-4
        .lista-ol--cuadro__vineta
          span b.
        | #[b Conectores lógicos y proposiciones compuestas]
      p.mb-4 Existen las proposiciones compuestas que son las que se componen de varias proposiciones, las cuales utilizan para su conexión operadores o conectores lógicos que son:
    .row.justify-content-center.align-items-center       
      .col-lg-10      
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Operador AND (y) conjunción").justify-content-center
            .col-11
              p.mb-4 Conecta dos proposiciones que se deben unir para que se pueda obtener un resultado verdadero, esta se representa por el siguiente símbolo ∧.
              h5 Ejemplo:
              .list.align-items-star
                .list__item
                  .list__item__icon
                    img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
                .list__txt
                  p Nuestra bandera es de color amarillo, azul y rojo.
              .list.align-items-star.mt-2
                .list__item
                  .list__item__icon
                    img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
                .list__txt
                  p El número 9 es mayor que 7 y menor que 12.
              .list.align-items-star.mt-2
                .list__item
                  .list__item__icon
                    img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
                .list__txt
                  p El carro enciende cuando tiene corriente eléctrica y gasolina en el tanque.
          div(titulo="Operador OR (o) disyunción")
            .row.justify-content-center
              .col-11
                p.mb-4 Conecta dos proposiciones y se obtiene una proposición compuesta verdadera cuando por lo menos unas de las proposiciones son verdaderas.
                h5 Ejemplo:
                .list.align-items-star
                  .list__item
                    .list__item__icon
                      img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
                  .list__txt
                    p Puedo ir a Bogotá en avión o en bus.
                .list.align-items-star.mt-2
                  .list__item
                    .list__item__icon
                      img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
                  .list__txt
                    p Puedo entrar al estadio si compro mi boleta o si tengo un pase de cortesía.
                .list.align-items-star.mt-2
                  .list__item
                    .list__item__icon
                      img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
                  .list__txt
                    p Voy a desayunar con huevos revueltos o huevos pericos.
          div(titulo="Operador NOT (no) negación")
            .row.justify-content-center
              .col-11
                p.mb-4 Su propósito es negar una proposición, es decir, que si tenemos una proposición verdadera al aplicarle este tipo de operador se obtiene la negación, es decir, es falso.
                h5 Ejemplo:
                .list.align-items-star
                  .list__item
                    .list__item__icon
                      img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
                  .list__txt
                    p No es cierto que Gabriel García Márquez escribió la Ilíada.
                .list.align-items-star.mt-2
                  .list__item
                    .list__item__icon
                      img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
                  .list__txt
                    p No es cierto que el América de Cali es de la ciudad de Bogotá.
                .list.align-items-star.mt-2
                  .list__item
                    .list__item__icon
                      img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
                  .list__txt
                    p Es falso que el agua es un hidrocarburo.
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Tablas de verdad
    .row.mb-5
      .col-12.col-lg-7
        p Una estrategia de la lógica que tiene como objetivo determinar la validez de varias propuestas en alguna situación, es decir, determina las condiciones necesarias en las que un enunciado es verdadero, estas condiciones se representan con una tabla de verdad que determina el valor de verdad de todas las proposiciones que componen la situación. Así como lo explica el principio de bivalencia: #[b una proposición puede ser verdadera o falsa únicamente, nunca ambas].
      .col-12.col-lg-5
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 una proposición puede ser verdadera o falsa únicamente, nunca ambas.
            i.fas.fa-quote-right

    .row.mb-5
      .col-12.col-lg-6
        p.mb-4 Algunas consideraciones:
        .list.align-items-start.pl-4
          .list__item
            .list__item__bulletNumber
              span a.
          .list__txt
            p.mb-0.mt-2 El valor de una proposición verdadera se representa por “V” o un “1”.
        .hr2
        .list.align-items-start.mt-2.pl-4
          .list__item
            .list__item__bulletNumber
              span b.
          .list__txt
            p.mb-0.mt-2 El valor de una proposición falsa se representa por “F” o un “0”.
        .hr2
        .list.align-items-start.mt-2.pl-4
          .list__item
            .list__item__bulletNumber
              span c.
          .list__txt
            p.mb-0.mt-2 Existe una tabla de verdad para cada uno de los conectores lógicos, lo que se tiene que evaluar para responder si una proposición compuesta es verdadera o falsa es el estatus actual de las proposiciones simples. A continuación, se muestran las tablas de verdad.
      .col-12.col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/temas/img14.png', alt='Texto que describa la imagen')

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Tabla de verdad conjunción (Y)
    .row.justify-content-center.bg1.p-4.mb-5
      .col-lg-5.my-3(data-aos="fade-down") 
        .tabla-a.color-acento-contenido.text-center(data-aos="fade-left") 
          table.wt
            thead
              tr
                th P
                th Q
                th P Ù Q
            tbody
              tr.bgt1
                td V
                td V
                td V
              tr
                td V
                td F
                td F
              tr.bgt1
                td F
                td V
                td F
              tr
                td F
                td F
                td F
      .col-lg-2.my-3.j(data-aos="fade-down") 
        h4 O puede ser
      .col-lg-5.my-3(data-aos="fade-down") 
        .tabla-a.color-acento-contenido.text-center(data-aos="fade-left") 
          table.wt
            thead
              tr
                th P
                th Q
                th P Ù Q
            tbody
              tr.bgt1
                td 1
                td 1
                td 1
              tr
                td 1
                td 0
                td 0
              tr.bgt1
                td 0
                td 1
                td 0
              tr
                td 0
                td 0
                td 0

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Tabla de verdad conjunción (O)
    .row.justify-content-center.bg1.p-4.mb-5
      .col-lg-5.my-3(data-aos="fade-down") 
        .tabla-a.color-acento-contenido.text-center(data-aos="fade-left") 
          table.wt
            thead
              tr
                th P
                th Q
                th P &#94; Q
            tbody
              tr.bgt1
                td V
                td V
                td V
              tr
                td V
                td F
                td V
              tr.bgt1
                td F
                td V
                td V
              tr
                td F
                td F
                td F
      .col-lg-2.j.my-3(data-aos="fade-down") 
        h4 O puede ser
      .col-lg-5.my-3(data-aos="fade-down") 
        .tabla-a.color-acento-contenido.text-center(data-aos="fade-left") 
          table.wt
            thead
              tr
                th P
                th Q
                th P &#94; Q
            tbody
              tr.bgt1
                td 1
                td 1
                td 1
              tr
                td 1
                td 0
                td 1
              tr.bgt1
                td 0
                td 1
                td 1
              tr
                td 0
                td 0
                td 0

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Tabla de verdad negación (no)
    .row.justify-content-center.bg1.p-4.mb-5
      .col-lg-5.my-3(data-aos="fade-down") 
        .tabla-a.color-acento-contenido.text-center(data-aos="fade-left") 
          table.wt
            thead
              tr
                th P
                th ¬ P
            tbody
              tr.bgt1
                td V
                td F
              tr
                td F
                td V

      .col-lg-2.my-3.j(data-aos="fade-down") 
        h4 O puede ser

      .col-lg-5.my-3(data-aos="fade-down") 
        .tabla-a.color-acento-contenido.text-center(data-aos="fade-left") 
          table.wt
            thead
              tr
                th P
                th ¬ P
            tbody
              tr.bgt1
                td 1
                td 0

              tr
                td 0
                td 1
    p.mb-4 Existe otro tipo de conectores que se llaman proposiciones condicionales, aquellas que están formadas por dos proposiciones simples o compuesta por  p y q, la cual se representa y se lee de la siguiente manera:
    p.mb-5 p → q se lee “Si p entonces q”
    TabsB
      .py-4.py-md-5(titulo="Ejemplo 1:" :icono="require('@/assets/curso/temas/img1.svg')")
        .row
          .col-12
            h4 Si no llueve se arruina la cosecha.
            p.mb-4 Este tipo de proposición se conoce como la condición “para que”, de manera que para que no se arruine la cosecha se requiere que llueva.
            p.mb-4 p: si no llueve
            p.mb-4 q: se arruina la cosecha
            p.mb-5 Al aplicar el operador p → q su tabla de verdad quedaría de la siguiente manera:
            .titulo-sexto.color-acento-contenido
              h5 Tabla 4.
              span Tabla de verdad condicional (si... entonces)
            .row.justify-content-center.bg1.p-4.mb-5
              .col-lg-5.my-3
                .tabla-a.color-acento-contenido.text-center
                  table.wt
                    thead
                      tr
                        th P
                        th Q
                        th P → Q
                    tbody
                      tr.bgt1
                        td 1
                        td 1
                        td 1
                      tr
                        td 1
                        td 0
                        td 0
                      tr.bgt1
                        td 0
                        td 1
                        td 1
                      tr
                        td 0
                        td 0
                        td 1
              .col-lg-2.my-3.j 
                h4 O puede ser
              .col-lg-5.my-3
                .tabla-a.color-acento-contenido.text-center
                  table.wt
                    thead
                      tr
                        th P
                        th Q
                        th P → Q
                    tbody
                      tr.bgt1
                        td 1
                        td 1
                        td 1
                      tr
                        td 1
                        td 0
                        td 1
                      tr.bgt1
                        td 0
                        td 1
                        td 1
                      tr
                        td 0
                        td 0
                        td 0            

            p.mb-4 De igual manera existe una proposición bicondicional que indica que una proposición es verdadera si y solo si las proposiciones simples o compuestas que forman la proposición son verdaderas o son falsas si y solo si ambas proposiciones son falsas, esta se representa y se lee de la siguiente manera:
            p p ↔ q se lee "p si solo si q"
      .py-4.py-md-5(titulo="Ejemplo 2:" :icono="require('@/assets/curso/temas/img2.svg')")
        .row
          .col-12
            h4 Es buen estudiante.
            p.mb-4 Es buen estudiante, si y solo si tiene promedio de cinco, donde se puede concluir lo siguiente:
            p.mb-4 p: es un buen estudiante
            p.mb-4 q: tiene promedio de 5
            p.mb-5 al aplicar el operador p ↔ q su tabla de verdad quedaría de la siguiente manera:
            .titulo-sexto.color-acento-contenido
              h5 Tabla 5.
              span Tabla de verdad condicional
            .row.justify-content-center.bg1.p-4.mb-5
              .col-lg-5.my-3
                .tabla-a.color-acento-contenido.text-center
                  table.wt
                    thead
                      tr
                        th P
                        th Q
                        th P → Q
                    tbody
                      tr.bgt1
                        td V
                        td V
                        td V
                      tr
                        td V
                        td F
                        td F
                      tr.bgt1
                        td F
                        td V
                        td F
                      tr
                        td F
                        td F
                        td V
              .col-lg-2.my-3.j
                h4 O puede ser
              .col-lg-5.my-3
                .tabla-a.color-acento-contenido.text-center
                  table.wt
                    thead
                      tr
                        th P
                        th Q
                        th P → Q
                    tbody
                      tr.bgt1
                        td 1
                        td 1
                        td 1
                      tr
                        td 1
                        td 0
                        td 0
                      tr.bgt1
                        td 0
                        td 1
                        td 0
                      tr
                        td 0
                        td 0
                        td 1          

            p.mb-4 Cuando se aplican tablas de verdad se puede llegar a tres tipos de resultado que son:
            .list.align-items-star
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p #[b Tautología:] es una expresión lógica que es verdadera para todos los posibles valores de verdad de sus componentes atómicos. Las proposiciones dan el resultado positivo.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p #[b Contradicción:] son aquellas fórmulas que son falsas para cualquier valoración de los símbolos proposicionales que contiene. Las proposiciones dan el resultado negativo.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p #[b Contingencia:] son aquellas fórmulas cuyo valor de verdad o falsedad depende de la valoración de los símbolos proposicionales que contiene. Las proposiciones dan un resultado negativo y positivo. (TOMi.digital, 2021).
            p.mt-4 A continuación, se muestra cómo aplicando la lógica matemática se comprueba el valor de verdad de un enunciado, este tipo de práctica es muy útil en las computadoras porque permite tener inferencias y deducir acciones o actividades a seguir.
      .pt-4.pt-md-5(titulo="Ejemplo 3:" :icono="require('@/assets/curso/temas/img3.svg')")
        .row
          .col-12
            h4 Las palomas vuelan.
            p.mb-4 p: todas las palomas vuelan
            p.mb-4 q: todas las aves tienen plumas
            p.mb-4 r: luego todas las palomas son aves
            p.mb-4 Estas proposiciones se pueden escribir utilizando los operadores lógicos de la siguiente manera:
            p.mb-4 (p ∧ q) → r
            p.mb-5 Para el anterior ejercicio se construye la tabla de verdad:

            .row.justify-content-center.mb-5
              .col-lg-7
                .titulo-sexto.color-acento-contenido
                  h5 Tabla 6.
                  span Tabla de verdad condicional              
                .bg1.p-4
                  .tabla-a.color-acento-contenido.text-center
                    table.wt
                      thead
                        tr
                          th P
                          th Q
                          th R
                          th P &#94; Q
                          th → R
                      tbody
                        tr.bgt1
                          td V
                          td V
                          td V
                          td V
                          td V
                        tr
                          td V
                          td V 
                          td F
                          td V 
                          td F                        
                        tr.bgt1
                          td V
                          td F
                          td V
                          td F
                          td V                        
                        tr
                          td V
                          td F
                          td F
                          td F
                          td V 
                        tr.bgt1
                          td F
                          td V
                          td V
                          td F
                          td V 
                        tr
                          td F
                          td V
                          td F
                          td F
                          td V  
                        tr.bgt1
                          td F
                          td F
                          td V
                          td F
                          td V 
                        tr
                          td F
                          td F
                          td F
                          td F
                          td V          

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Ejercicios de lógica proposicional
    p.mb-5 A continuación, se plantean a manera de ejemplo algunos ejercicios con su respectiva solución que permiten identificar un problema, reconocer los datos de entrada y los procesos a ser aplicados como estrategia a seguir con la utilización de la lógica proposicional en la identificación y solución de problemas.
    h4 Ejercicio 1.
    .row.mb-4
      .col-lg-4.my-3
        .bloque-texto-d.p-4
          H4.pt-5.mb-2 Se necesita personal femenino que sepa Microsoft Office o Gsuite.
      .col-lg-8.my-3
        p.mb-4 Para dar solución al enunciado anterior se realiza las siguientes actividades.
        p.mb-4 Pasos a seguir:
        .list.align-items-star
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p Identificar el problema.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p Descomponer el enunciado en proposiciones atómicas.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p Evaluar los posibles casos derivados del enunciado anterior.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p Determinar los casos donde se cumpla la condición y hacer la selección de las personas de acuerdo con el requerimiento.
    h4.mb-4 Solución:
    .row.align-items-center.mb-4
      .col-lg-auto.my-3
        img.img-a.img-t(src='@/assets/curso/temas/img21.png', style='max-width: 100%;')
      .col-11.hr1.p-3.my-3
        .h6 Identificar el problema
        p.mb-0 Se trata de buscar o contratar personal femenino que sepa utilizar Microsoft Office o Google Suite.
    .row.align-items-center.mb-4
      .col-lg-auto.my-3
        img.img-a.img-t(src='@/assets/curso/temas/img22.png', style='max-width: 100%;')
      .col-11.hr1.p-3.my-3
        .h6 Descomponer el enunciado
        p.mb-4 Descomponer en proposiciones atómicas del enunciado (cuando están separadas del contexto del problema se llaman proposiciones atómicas).
        ol
          li #[b p:] es personal femenino.
          li #[b q:] sabe utilizar el Microsoft Office.
          li #[b r:] sabe utilizar la suite de Google.

    .row.align-items-center.mb-4
      .col-lg-auto.my-3
        img.img-a.img-t(src='@/assets/curso/temas/img23.png', style='max-width: 100%;')
      .col-11.hr1.p-3.my-3
        .h6 Determinar los casos
        p.mb-4 Determinar las relaciones lógicas de acuerdo con lo planteado en el enunciado, utilizando las proposiciones atómicas definidas en el punto anterior.
        ol
          li p ∧ (q V r).

    .row.align-items-center.mb-5
      .col-lg-auto.my-3
        img.img-a.img-t(src='@/assets/curso/temas/img24.png', style='max-width: 100%;')
      .col-11.hr1.p-3.my-3
        .h6.mb-0 Evaluar los posibles casos derivados del enunciado anterior.

    h4 Ejercicio 2.
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-4
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h3.mb-0 Juan sabe utilizar Microsoft Office y Gsuite, Martha sabe utilizar Gsuite, Natalia sabe utilizar Gsuite y Microsoft Office.
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p.mb-4 Crear la tabla de verdad y aplicar la lógica proposicional para elegir las personas que cumplan con los requisitos exigidos.
            p Para la construcción de la tabla de verdad se evalúa cada una de las preposiciones atómicas  y, se van validando para verificar si se cumple lo que la haría verdadera o si no se cumple, lo cual haría que la proposición sea falsa.
    p.mb-5 Se analiza cada posible caso por lo que se evalúa a Juan, para la primera proposición sería un valor falso, ya que p requiere que sea personal femenino, el cual se pondrá en la columna 2, luego se evalúa si Juan sabe utilizar Microsoft Office o la Suite de Google, el valor va en la columna tres y por último, se evalúa la conjunción para determinar la solución.
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Tabla de verdad condicional ejemplo 2       
        .bg1.p-4
          .tabla-a.color-acento-contenido.text-center
            table.wt
              thead
                tr
                  th Nombre
                  th p
                  th (q V r)
                  th p &#94; (q V r)

              tbody
                tr.bgt1
                  td Juan 
                  td F
                  td V
                  td F
                tr
                  td Martha  
                  td V
                  td V
                  td V    
                tr.bgt1
                  td Nathalia 
                  td V
                  td V
                  td V                                

    p.mb-5 De acuerdo con la anterior tabla, se concluye que Martha y Natalia son aptas para el trabajo, lo que permite seleccionarlas.
    h4 Ejemplo 3.
    .row.mb-4
      .col-lg-4.my-3
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          h4.mb-2 Sandra dice adelgazo o no hago dieta.     

      .col-lg-8.my-3
        p.mb-4 Para este enunciado además se propone una serie de alternativas que podrían ser válidas o no, dependiendo de la solución propuesta utilizando la lógica matemática. Las siguientes son las posibles respuestas de las cuales se deberá elegir la que se considera es real al problema planteado.
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span 1
            | #[b Si adelgazo, hago dieta.]
          li 
            .lista-ol--cuadro__vineta
              span 2
            | #[b Si no adelgazo, hago dieta.]
          li 
            .lista-ol--cuadro__vineta
              span 3
            | #[b Si hago dieta, no adelgazo.]
          li 
            .lista-ol--cuadro__vineta
              span 4
            | #[b Si hago dieta adelgazo.]
          li 
            .lista-ol--cuadro__vineta
              span 5
            | #[b Hago dieta o no adelgazo.]
    h4.mb-4 Solución:
    .row.justify-content-around.align-items-start.mb-4
      .col-lg-8
        .row.hr1
          .col-lg-auto.my-3
            img.img-a.img-t(src='@/assets/curso/temas/img21.png', style='max-width: 100%;')
          .col.my-3
            .h6 Problema
            p Identificar la respuesta correcta al problema presentado por Sandra.


        .row.hr1
          .col-lg-auto.my-3
            img.img-a.img-t(src='@/assets/curso/temas/img22.png', style='max-width: 100%;')
          .col.my-3
            .h6 Definir
            p.mb-4 Definir las proposiciones atómicas:
            ol
              li #[b p:] adelgazo.
              li #[b q:] hago dieta.

        .row.hr1
          .col-lg-auto.my-3
            img.img-a.img-t(src='@/assets/curso/temas/img23.png', style='max-width: 100%;')
          .col.my-3

            .h6 Determinar
            p.mb-4 Determinar la relación lógica.
            ol
              li p V ¬ q.

        .row.hr1
          .col-lg-auto.my-3
            img.img-a.img-t(src='@/assets/curso/temas/img24.png', style='max-width: 100%;')
          .col.my-3

            .h6 Crear
            p Crear la tabla de verdad.


    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Tabla de verdad condicional ejemplo 3    
        .bg1.p-4
          .tabla-a.color-acento-contenido.text-center
            table.wt
              thead
                tr
                  th p
                  th (q V r)
                  th p &#94; (q V r)

              tbody
                tr.bgt1
                  td V
                  td V
                  td V
                tr
                  td V
                  td F
                  td V   
                tr.bgt1
                  td F
                  td V
                  td F
                tr
                  td F
                  td F
                  td V                                   

</template>

<script>
export default {
  name: 'Tema2',
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
