/*
  Every project on the site. The order here is the order on the page.

  To add a project: copy one { ... } block, paste it, and change the values.
  - id:        short name used in the address (project.html?id=...). No spaces.
  - featured:  true for the one big project at the top (only one).
  - filter:    "unity", "godot" or "cpp" (used by the filter buttons).
  - image:     path inside the img/ folder, or null to show a placeholder.
  - gallery:   extra images or videos for the project page (can be empty []).
               Videos: { video: "img/clip.mp4" }  ·  YouTube: { youtube: "VIDEO_ID" }
  - systems:   the "Key systems" on the project page. "code" is a link to the
               script on GitHub, or "" if you haven't added it yet.
*/
window.PROJECTS = [
  {
    id: "into-the-depths",
    featured: true,
    filter: "unity",
    title: "Into the Depths",
    engine: "Unity",
    language: "C#",
    team: { en: "Solo", es: "Individual" },
    role: { en: "Everything: programming, design and integration", es: "Todo: programación, diseño e integración" },
    image: null,
    gallery: [],
    summary: {
      en: "2D action-puzzle vertical slice built around indirect escort: you guide an autonomous robot through the level without ever controlling it directly.",
      es: "Vertical slice de acción y puzles en 2D centrada en la escolta indirecta: guías a un robot autónomo por el nivel sin controlarlo nunca directamente."
    },
    description: {
      en: [
        "My final degree project at UNIR, developed on my own in Unity. It is a side-view 2D action and puzzle game where the core challenge is protecting and guiding a robot that moves by itself.",
        "The slice includes two complete levels with different mechanics, and it was built with a modular architecture so new mechanics can be added without rewriting existing ones."
      ],
      es: [
        "Mi Trabajo de Fin de Grado en UNIR, desarrollado de forma individual en Unity. Es un juego 2D de acción y puzles con perspectiva lateral en el que el reto principal es proteger y guiar a un robot que se mueve solo.",
        "La vertical slice incluye dos niveles completos con mecánicas diferenciadas, y se construyó con una arquitectura modular para poder añadir mecánicas nuevas sin reescribir las existentes."
      ]
    },
    systems: [
      {
        title: { en: "Autonomous robot AI", es: "IA del robot autónomo" },
        text: {
          en: "Navigation and movement logic that lets the robot advance through the level on its own and react to what the player changes around it.",
          es: "Lógica de navegación y movimiento que permite al robot avanzar solo por el nivel y reaccionar a lo que el jugador cambia a su alrededor."
        },
        code: ""
      },
      {
        title: { en: "Data-driven dialogue", es: "Diálogos basados en datos" },
        text: {
          en: "Dialogue lives in structured data instead of code, so conversations can be written and changed without touching scripts.",
          es: "Los diálogos se guardan en datos estructurados en lugar de en el código, así se pueden escribir y cambiar sin tocar scripts."
        },
        code: ""
      },
      {
        title: { en: "Interfaces and events", es: "Interfaces y eventos" },
        text: {
          en: "Objects communicate through interfaces and events rather than direct references, which keeps systems independent and easy to extend.",
          es: "Los objetos se comunican mediante interfaces y eventos en lugar de referencias directas, lo que mantiene los sistemas independientes y fáciles de ampliar."
        },
        code: ""
      }
    ],
    links: {
      code: "https://github.com/Jose-Elar/Into-the-Depths",
      play: "https://jose-elguea.itch.io/into-the-depths-web"
    }
  },

  {
    id: "adopt-a-fighter",
    filter: "unity",
    title: "Adopt a Fighter",
    engine: "Unity",
    language: "C#",
    team: { en: "2 people", es: "2 personas" },
    role: { en: "All programming", es: "Toda la programación" },
    image: null,
    gallery: [],
    summary: {
      en: "Top-down turn-based tactical RPG prototype. Two teams fight, and positioning on the map decides who wins.",
      es: "Prototipo de RPG táctico por turnos con vista aérea. Dos equipos se enfrentan y el posicionamiento en el mapa decide quién gana."
    },
    description: {
      en: [
        "A vertical slice made by a team of two. The player manages a group of units, uses the terrain to their advantage and makes tactical decisions to defeat the rival team.",
        "I was responsible for all the programming: the turn system, combat mechanics, unit movement and the rest of the core systems."
      ],
      es: [
        "Una vertical slice desarrollada por un equipo de dos personas. El jugador gestiona sus unidades, aprovecha el terreno y toma decisiones tácticas para derrotar al equipo rival.",
        "Fui el responsable de toda la programación: el sistema de turnos, las mecánicas de combate, el movimiento de las unidades y el resto de sistemas principales."
      ]
    },
    systems: [
      {
        title: { en: "Turn system", es: "Sistema de turnos" },
        text: { en: "Controls whose turn it is and what each unit can still do during that turn.", es: "Controla a quién le toca y qué puede hacer cada unidad durante su turno." },
        code: ""
      },
      {
        title: { en: "Grid movement", es: "Movimiento en el mapa" },
        text: { en: "Works out where each unit can move and moves it there.", es: "Calcula a dónde puede moverse cada unidad y la desplaza." },
        code: ""
      },
      {
        title: { en: "Combat", es: "Combate" },
        text: { en: "Attacks, damage and defeat conditions between the two teams.", es: "Ataques, daño y condiciones de derrota entre los dos equipos." },
        code: ""
      }
    ],
    links: { code: "https://github.com/Jose-Elar/AdoptAFighter", play: "" }
  },

  {
    id: "the-labyrinth",
    filter: "unity",
    title: "The Labyrinth",
    engine: "Unity",
    language: "C#",
    team: { en: "Solo", es: "Individual" },
    role: { en: "Research and programming", es: "Investigación y programación" },
    image: null,
    gallery: [],
    summary: {
      en: "AI experiment where NPCs use fuzzy logic to make more natural decisions, with pathfinding written without Unity's NavMesh.",
      es: "Experimento de IA en el que los NPC usan lógica difusa para tomar decisiones más naturales, con búsqueda de caminos sin el NavMesh de Unity."
    },
    description: {
      en: [
        "A research prototype to explore AI techniques that make NPC behaviour feel more dynamic, adapting decisions to several conditions of the environment at once.",
        "Besides fuzzy logic, it includes custom pathfinding without NavMesh and an optimization that updates NPCs less often the further they are from the player."
      ],
      es: [
        "Un prototipo de investigación para explorar técnicas de IA que hagan que el comportamiento de los NPC resulte más dinámico, adaptando sus decisiones a varias condiciones del entorno a la vez.",
        "Además de la lógica difusa, incluye búsqueda de caminos propia sin NavMesh y una optimización que actualiza los NPC con menos frecuencia cuanto más lejos están del jugador."
      ]
    },
    systems: [
      {
        title: { en: "Fuzzy logic decisions", es: "Decisiones con lógica difusa" },
        text: { en: "NPCs weigh several inputs at once instead of following strict if/else rules.", es: "Los NPC valoran varias entradas a la vez en lugar de seguir reglas estrictas de tipo if/else." },
        code: ""
      },
      {
        title: { en: "Pathfinding without NavMesh", es: "Búsqueda de caminos sin NavMesh" },
        text: { en: "Custom navigation through the maze, written from scratch.", es: "Navegación propia por el laberinto, escrita desde cero." },
        code: ""
      },
      {
        title: { en: "Distance-based optimization", es: "Optimización por distancia" },
        text: { en: "NPCs far from the player update less often to save processing time.", es: "Los NPC lejos del jugador se actualizan con menos frecuencia para ahorrar tiempo de proceso." },
        code: ""
      }
    ],
    links: { code: "https://github.com/Jose-Elar/Basic-Unity-IA-Testing", play: "" }
  },

  {
    id: "fire-talk",
    filter: "godot",
    title: "Fire Talk",
    engine: "Godot",
    language: "GDScript",
    team: { en: "Solo", es: "Individual" },
    role: { en: "Programming and scene setup", es: "Programación y montaje de escenas" },
    image: null,
    gallery: [],
    summary: {
      en: "Small Godot 3D and VR project to learn how lighting and spatial voice audio work in virtual reality.",
      es: "Pequeño proyecto en Godot 3D y VR para aprender cómo funcionan la iluminación y el audio de voces espacial en realidad virtual."
    },
    description: {
      en: ["A learning project in Godot focused on two things that matter a lot in VR: how scenes are lit, and how voices sound depending on where you stand."],
      es: ["Un proyecto de aprendizaje en Godot centrado en dos cosas muy importantes en realidad virtual: cómo se iluminan las escenas y cómo suenan las voces según dónde estés."]
    },
    systems: [],
    links: { code: "https://github.com/Jose-Elar/Fire-Talk", play: "" }
  },

  {
    id: "space-shooter",
    filter: "unity",
    title: "Space Shooter",
    engine: "Unity",
    language: "C#",
    team: { en: "Solo", es: "Individual" },
    role: { en: "All programming", es: "Toda la programación" },
    image: null,
    gallery: [],
    summary: {
      en: "Classic 2D shoot 'em up: survive waves of enemies with three lives and chase the highest score.",
      es: "Shoot 'em up 2D clásico: sobrevive a oleadas de enemigos con tres vidas y consigue la máxima puntuación."
    },
    description: {
      en: ["A learning project to strengthen my Unity 2D skills, recreating the classic mechanics of the genre: movement, shooting, enemy waves and scoring. Art assets come from a Udemy course."],
      es: ["Un proyecto de aprendizaje para reforzar mis conocimientos de Unity 2D, recreando las mecánicas clásicas del género: movimiento, disparo, oleadas de enemigos y puntuación. Los recursos gráficos son de un curso de Udemy."]
    },
    systems: [],
    links: { code: "https://github.com/Jose-Elar/Space-Shooter", play: "" }
  },

  {
    id: "snake-cpp",
    filter: "cpp",
    title: "Snake in C++",
    engine: "raylib",
    language: "C++",
    team: { en: "Solo", es: "Individual" },
    role: { en: "All programming", es: "Toda la programación" },
    image: null,
    gallery: [],
    summary: {
      en: "Snake written in plain C++ with raylib and CMake, no engine, to practise the fundamentals of programming a game.",
      es: "Snake escrito en C++ puro con raylib y CMake, sin motor, para practicar los fundamentos de programar un videojuego."
    },
    description: {
      en: ["Without an engine, everything has to be written by hand: the game loop, the grid, the snake's body, food spawning and the game states. The code is split into small classes for the snake, the food and the game state."],
      es: ["Sin motor hay que escribirlo todo a mano: el bucle de juego, la cuadrícula, el cuerpo de la serpiente, la aparición de comida y los estados de la partida. El código está dividido en clases pequeñas para la serpiente, la comida y el estado del juego."]
    },
    systems: [],
    links: { code: "https://github.com/Jose-Elar/Snake-Game-C-", play: "" }
  }
];
