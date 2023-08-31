export default {
  global: {
    componenteFormativo: 'Introducción a la algoritmia',
    descripcionCurso:
      'Es importante reconocer los componentes que forman parte de un problema desde un punto de vista lógico y procedimental, debido a que estos son las bases del análisis y diseño de algoritmos. El presente componente orienta el pensamiento y despierta la conciencia sobre este tipo de análisis, aportando un enfoque metodológico para la solución de problemas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //   },
    // ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la algoritmia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de algoritmo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Pensamiento algorítmico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Solución de problemas y programación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Análisis del problema (entenderlo)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Desarrollo de la creatividad: elementos, modelos, fases y sus objetivos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lógica matemática',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Componentes de la lógica matemática',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tablas de verdad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ejercicios de lógica proposicional',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción a la algoritmia',
      referencia: 'Magic Markers. (2015). ¿Qué es un algoritmo?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=U3CGMyjzlvM',
    },
    {
      tema: 'Lógica matemática',
      referencia: 'Calderón, J. P. (2015). Fundamentos de lógica matemática',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9zYDaZhS7Ac',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
    },
    {
      termino: 'Conjunción',
      significado:
        'conecta dos proposiciones que se deben unir para que se pueda obtener un resultado verdadero.',
    },
    {
      termino: 'Contingencia',
      significado:
        'son aquellas fórmulas cuyo valor de verdad o falsedad depende de la valoración de los símbolos proposicionales que contiene. Las proposiciones dan un resultado negativo y positivo (TOMi.digital, 2021).',
    },
    {
      termino: 'Contradicción',
      significado:
        'son aquellas fórmulas que son falsas para cualquier valoración de los símbolos proposicionales que contiene. Las proposiciones dan el resultado negativo (TOMi.digital, 2021).',
    },
    {
      termino: 'Disyunción',
      significado:
        'conecta dos proposiciones y se obtiene una proposición compuesta verdadera cuando por lo menos unas de las proposiciones son verdaderas.',
    },
    {
      termino: 'Negación',
      significado:
        'su propósito es negar una proposición, es decir, que si se tiene una proposición verdadera al aplicar este tipo de operador se obtiene la negación, es decir, es falsa.',
    },
    {
      termino: 'Programa',
      significado:
        'conjunto unitario de instrucciones que permite a una computadora realizar funciones diversas, como el tratamiento de textos, el diseño de gráficos, la resolución de problemas matemáticos, el manejo de bancos de datos (RAE, 2021).',
    },
    {
      termino: 'Proposición bicondicional',
      significado:
        'indica que una proposición es verdadera si y solo si las proposiciones simples o compuestas que forman la proposición son verdaderas, o son falsas si y solo si ambas proposiciones son falsas.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
    {
      termino: 'Tautología',
      significado:
        'es una expresión lógica que es verdadera para todos los posibles valores de verdad de sus componentes atómicos. Las proposiciones dan el resultado positivo (TOMi.digital, 2021).',
    },
  ],
  referencias: [
    {
      referencia:
        'Eduteka.org. (2008). Sembrando las semillas para una sociedad más creativa. Dr. Mitchel Resnick. [Traducción]. Universidad ICESI.',
      link: 'http://www.eduteka.org/ScratchResnickCreatividad.php',
    },
    {
      referencia:
        'López, J., C. (2009). Educación básica algoritmos y programación. Guía para docentes. Segunda edición. Fundación Gabriel Piedrahita Uribe, www.eduteka.org',
      link: 'http://www.eduteka.org/pdfdir/AlgoritmosProgramacion.pdf',
    },
    {
      referencia:
        'Medina, H., M. (2018). Estrategias metodológicas para el desarrollo del pensamiento lógico-matemático. Didasc@lia: Didáctica y Educación, 9(1), p. 125-132.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6595073.pdf',
    },
    {
      referencia:
        'Real Academia Española (2020). Algoritmo | Diccionario de la lengua española. RAE.',
      link: 'https://dle.rae.es/algoritmo',
    },
    {
      referencia:
        'Real Academia Española (2020). Programa | Diccionario de la lengua española. RAE.',
      link: 'https://dle.rae.es/programa',
    },
    {
      referencia:
        'Suppes, P., y Hill, S. (2021). Introducción a la lógica matemática. Editorial Reverté.',
      link:
        'https://www.reverte.com/libro/introduccion-a-la-logica-matematica_91496/',
    },
    {
      referencia:
        'Tapia, L. (1995). Cómo desarrollar el razonamiento lógico matemático. Editorial Universitaria.',
      link:
        'https://www.worldcat.org/title/como-desarrollar-el-razonamiento-logico-y-matematico/oclc/50414752',
    },
    {
      referencia:
        'TOMi.digital. (s.f.). Valores de las tablas de verdad. Colegio Nuestra Señora de las Victorias.',
      link:
        'https://tomi.digital/es/59552/valores-de-las-tablas-de-verdad?utm_source=google&utm_medium=seo',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta temática',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Bogotá - Centro de gestión industrial',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Bogotá - Centro de gestión industrial',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la industria y la comunicación gráfica',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la industria y la comunicación gráfica',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisión metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la industria y la comunicación gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: [
            'Lizeth Karina Manchego Suarez',
            'Luis Gabriel Urueta Alvarez',
          ],
          cargo: 'Desarrollo Front-End',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollo Front-End',
          centro: 'Regional Tolima - Centro de comercio y servicios',
        },
        {
          nombre: 'María Isabel Román Rueda',
          cargo: 'Revisora de contenido',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: [
            'Camilo Andrés Villamizar Lizcano',
            'José Jaime Luis Tang Pinzón',
            'Juan Daniel Polanco Muñoz',
            'Nelson Iván Vera Briceño',
            'Wilson Andres Arenales Cáceres',
            'Yuly Andrea Rey Quiñonez',
          ],
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
