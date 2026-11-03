/*
  Every project on the site. The order here is the order on the page.

  To add a project: copy one { ... } block, paste it, and change the values.
  - id:        short name used in the address (project.html?id=...). No spaces.
  - featured:  true for the one big project at the top (only one).
  - hidden:    true to keep a project off the site without deleting it.
  - inProgress: true to show an "In progress" label (remove it when finished).
  - filter:    "unity", "godot" or "cpp" (used by the filter buttons).
  - image:     path inside the img/ folder, or null to show a placeholder.
  - video:     optional looping clip (.mp4, no sound) shown instead of the image.
               Keep "image" too: it's shown while the video loads.
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
    image: "img/into-the-depths.jpg",
    video: "img/into-the-depths.mp4",
    gallery: [],
    summary: {
      en: "2D action-puzzle vertical slice built around indirect escort: the player guides an autonomous robot through the level without ever controlling it directly.",
      es: "Vertical slice de acción y puzles en 2D centrada en la escolta indirecta: el jugador guía a un robot autónomo por el nivel sin controlarlo nunca directamente."
    },
    description: {
      en: [
        "Final degree project at UNIR, developed solo in Unity. A side-view 2D action and puzzle game where the core challenge is protecting and guiding a robot that moves by itself. The player flies a small drone that clears the way, and the robot only keeps its strength while the drone stays close to it.",
        "The slice includes two complete levels with different mechanics, and it was built with a modular architecture so new mechanics can be added without rewriting existing ones."
      ],
      es: [
        "Trabajo de Fin de Grado en UNIR, desarrollado de forma individual en Unity. Un juego 2D de acción y puzles con perspectiva lateral en el que el reto principal es proteger y guiar a un robot que se mueve solo. El jugador maneja un pequeño dron que le abre camino, y el robot solo mantiene su energía mientras el dron se queda cerca de él.",
        "La vertical slice incluye dos niveles completos con mecánicas diferenciadas, y se construyó con una arquitectura modular para poder añadir mecánicas nuevas sin reescribir las existentes."
      ]
    },
    systems: [
      {
        title: { en: "Walker robot AI", es: "IA del robot caminante" },
        text: {
          en: "The robot follows a route of waypoints and uses raycasts to check it has a clear path to the next one. If something blocks it, it wanders and waits instead of walking into walls. It also detects gaps ahead, stops, and jumps over the holes marked as jumpable.",
          es: "El robot sigue una ruta de waypoints y usa raycasts para comprobar que tiene el camino libre hasta el siguiente. Si algo lo bloquea, deambula y espera en lugar de chocar con las paredes. También detecta huecos delante, se detiene y salta los agujeros marcados como saltables."
        },
        code: "https://github.com/Jose-Elar/Into-the-Depths/blob/HEAD/Assets/Scripts/WalkerDrone/MovementBehaviour.cs"
      },
      {
        title: { en: "Battery link", es: "Vínculo de batería" },
        text: {
          en: "The heart of the indirect escort. The robot's battery recharges while the player's drone stays close and drains when it leaves. Its light and walking speed scale with the battery, and a warning dialogue fires when it runs low.",
          es: "El núcleo de la escolta indirecta. La batería del robot se recarga mientras el dron del jugador está cerca y se agota cuando se aleja. Su luz y su velocidad dependen de la batería, y salta un diálogo de aviso cuando queda poca."
        },
        code: "https://github.com/Jose-Elar/Into-the-Depths/blob/HEAD/Assets/Scripts/WalkerDrone/WalkerBatteryLink.cs"
      },
      {
        title: { en: "Data-driven dialogue", es: "Diálogos basados en datos" },
        text: {
          en: "All dialogue lives in a JSON file, with an id, a speaker and its lines, loaded at runtime. The manager types each line letter by letter, colours the text by speaker, and raises an event when a conversation ends so gameplay can resume.",
          es: "Todos los diálogos están en un archivo JSON, con un id, un hablante y sus líneas, y se cargan en tiempo de ejecución. El gestor escribe cada línea letra a letra, colorea el texto según el hablante y lanza un evento al terminar para que el juego continúe."
        },
        code: "https://github.com/Jose-Elar/Into-the-Depths/blob/HEAD/Assets/Scripts/Texts/TextManager.cs"
      },
      {
        title: { en: "Interfaces and events", es: "Interfaces y eventos" },
        text: {
          en: "Everything the player can use (rocks, consoles, door pads) implements one IInteractable interface, so the drone needs a single interact action for all of them. Systems talk through C# events, such as the bridge, the last waypoint or the end of a dialogue, instead of direct references.",
          es: "Todo lo que el jugador puede usar (rocas, consolas, paneles de puertas) implementa una única interfaz IInteractable, así el dron necesita una sola acción de interacción para todos. Los sistemas se comunican con eventos de C#, como el puente, el último waypoint o el fin de un diálogo, en lugar de referencias directas."
        },
        code: "https://github.com/Jose-Elar/Into-the-Depths/blob/HEAD/Assets/Scripts/Interface_Interactable/IInteractable.cs"
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
    image: "img/adopt-a-fighter.jpg",
    gallery: [],
    summary: {
      en: "Isometric turn-based tactical RPG prototype. Two teams fight, and positioning on the map decides who wins.",
      es: "Prototipo de RPG táctico por turnos con vista isométrica. Dos equipos se enfrentan y el posicionamiento en el mapa decide quién gana."
    },
    description: {
      en: [
        "A vertical slice made by a team of two. The player manages a group of units, uses the terrain to their advantage and makes tactical decisions to defeat the rival team.",
        "All the programming is original work: the turn system, combat mechanics, unit movement and the rest of the core systems. The hex-grid pathfinding was adapted from a tutorial and integrated with the turn and state systems."
      ],
      es: [
        "Una vertical slice desarrollada por un equipo de dos personas. El jugador gestiona sus unidades, aprovecha el terreno y toma decisiones tácticas para derrotar al equipo rival.",
        "Toda la programación es propia: el sistema de turnos, las mecánicas de combate, el movimiento de las unidades y el resto de sistemas principales. La búsqueda de caminos en la cuadrícula hexagonal se adaptó de un tutorial y se integró con los sistemas de turnos y estados."
      ]
    },
    systems: [
      {
        title: { en: "Turn system", es: "Sistema de turnos" },
        text: {
          en: "The turn manager cycles through every unit on the board, gives control to the active one and puts the rest on hold. When a unit dies it is removed from the order, and the match ends as soon as one team has no units left.",
          es: "El gestor de turnos recorre todas las unidades del tablero, da el control a la activa y deja al resto en espera. Cuando una unidad muere se elimina del orden, y la partida termina en cuanto un equipo se queda sin unidades."
        },
        code: "https://github.com/Jose-Elar/AdoptAFighter/blob/HEAD/AdoptAFighter/Assets/Scripts/MaquinaEstados/TurnManager.cs"
      },
      {
        title: { en: "Unit state machine", es: "Máquina de estados de las unidades" },
        text: {
          en: "Each unit runs its own state machine: play, move, attack, wait, take damage and dead. Every state is a separate component that gets switched on and off, and a light on the unit changes colour to show its current state.",
          es: "Cada unidad tiene su propia máquina de estados: jugar, moverse, atacar, esperar, recibir daño y muerto. Cada estado es un componente independiente que se activa y desactiva, y una luz sobre la unidad cambia de color para mostrar su estado actual."
        },
        code: "https://github.com/Jose-Elar/AdoptAFighter/blob/HEAD/AdoptAFighter/Assets/Scripts/MaquinaEstados/MaquinaDeEstados.cs"
      },
      {
        title: { en: "Combat and stats", es: "Combate y estadísticas" },
        text: {
          en: "When an enemy unit comes within range, the attack option appears. Health and defence are ScriptableObjects, so each animal's stats are tuned in the editor, and incoming damage is scaled by the target's defence before its health bar updates.",
          es: "Cuando una unidad enemiga entra en rango, aparece la opción de atacar. La vida y la defensa son ScriptableObjects, así que las estadísticas de cada animal se ajustan en el editor, y el daño recibido se escala según la defensa del objetivo antes de actualizar su barra de vida."
        },
        code: "https://github.com/Jose-Elar/AdoptAFighter/blob/HEAD/AdoptAFighter/Assets/Scripts/MaquinaEstados/HeathSystem.cs"
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
    role: { en: "All programming and AI design", es: "Toda la programación y el diseño de la IA" },
    image: "img/the-labyrinth.jpg",
    gallery: [],
    summary: {
      en: "AI experiment where NPCs use fuzzy logic to make more natural decisions, with navigation written without Unity's NavMesh.",
      es: "Experimento de IA en el que los NPC usan lógica difusa para tomar decisiones más naturales, con una navegación escrita sin el NavMesh de Unity."
    },
    description: {
      en: [
        "Programmed from scratch in Unity as a research exercise into how fuzzy logic can make NPC behaviour feel more natural. NPCs patrol a maze and react to the player, deciding whether to chase or flee depending on how they read the situation. The map of rooms was built by a university classmate; all the code and AI are original work.",
        "Instead of jumping between fixed states, each NPC blends its behaviours with weights that change smoothly with its health and whether it can see the player. Navigation is written without Unity's NavMesh, and an on-screen HUD shows the nearest NPC's state and distance to make the AI easy to debug."
      ],
      es: [
        "Programado desde cero en Unity como un ejercicio de investigación sobre cómo la lógica difusa puede hacer que el comportamiento de los NPC resulte más natural. Los NPC patrullan un laberinto y reaccionan al jugador, decidiendo si perseguirlo o huir según cómo interpretan la situación. El mapa de salas lo construyó un compañero de universidad; todo el código y la IA son trabajo propio.",
        "En lugar de saltar entre estados fijos, cada NPC mezcla sus comportamientos con pesos que cambian de forma suave según su vida y si puede ver al jugador. La navegación está escrita sin el NavMesh de Unity, y un HUD en pantalla muestra el estado y la distancia del NPC más cercano para depurar la IA con facilidad."
      ]
    },
    systems: [
      {
        title: { en: "Fuzzy behaviour blending", es: "Mezcla difusa de comportamientos" },
        text: {
          en: "Wander, chase and flee all run at once, each with a weight. Low health while seeing the player raises the flee weight, high health raises chase, and wander takes over when the player is out of sight. Weights move smoothly, so NPCs change their minds gradually instead of snapping between states.",
          es: "Deambular, perseguir y huir funcionan a la vez, cada uno con un peso. Con poca vida y el jugador a la vista, aumenta el peso de huir; con mucha vida, el de perseguir; y deambular toma el control cuando el jugador no está a la vista. Los pesos cambian de forma suave, así que los NPC cambian de idea poco a poco en lugar de saltar de un estado a otro."
        },
        code: "https://github.com/Jose-Elar/The-Labyrinth-Fuzzy-Logic-AI/blob/HEAD/Basic%20Unity%20IA%20Testing/Assets/Scripts/Behaviors/SteeringManager.cs"
      },
      {
        title: { en: "Obstacle avoidance without NavMesh", es: "Evitar obstáculos sin NavMesh" },
        text: {
          en: "NPCs feel their way through the maze with sphere-cast feelers to the front and sides. They push away from walls when stuck in a corner, slide along them instead of stopping, and hold a direction briefly to avoid jittering. Hit buffers are pre-allocated to avoid garbage collection.",
          es: "Los NPC se orientan por el laberinto con sensores de sphere-cast hacia delante y a los lados. Se separan de las paredes cuando se atascan en una esquina, se deslizan por ellas en lugar de pararse y mantienen una dirección un instante para evitar temblores. Los buffers de impactos se reservan de antemano para no generar trabajo al recolector de basura."
        },
        code: "https://github.com/Jose-Elar/The-Labyrinth-Fuzzy-Logic-AI/blob/HEAD/Basic%20Unity%20IA%20Testing/Assets/Scripts/Optimizacion/AvoidTaggedObstaclesBehavior.cs"
      },
      {
        title: { en: "AI level of detail", es: "Nivel de detalle de la IA" },
        text: {
          en: "NPCs near the player recalculate their decisions every 0.1 seconds with every behaviour on. Distant ones only update every 0.3 seconds and switch off expensive behaviours like obstacle avoidance, saving processing time where the player won't notice.",
          es: "Los NPC cercanos al jugador recalculan sus decisiones cada 0,1 segundos con todos los comportamientos activos. Los lejanos solo se actualizan cada 0,3 segundos y desactivan comportamientos costosos como evitar obstáculos, ahorrando tiempo de proceso donde el jugador no lo nota."
        },
        code: "https://github.com/Jose-Elar/The-Labyrinth-Fuzzy-Logic-AI/blob/HEAD/Basic%20Unity%20IA%20Testing/Assets/Scripts/Optimizacion/AILODByDistance.cs"
      }
    ],
    links: { code: "https://github.com/Jose-Elar/The-Labyrinth-Fuzzy-Logic-AI", play: "" }
  },

  {
    id: "fire-talk",
    hidden: true, // work in progress: remove this line to show it on the site
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
      en: ["A learning project in Godot focused on two things that matter a lot in VR: how scenes are lit, and how voices sound depending on the listener's position."],
      es: ["Un proyecto de aprendizaje en Godot centrado en dos cosas muy importantes en realidad virtual: cómo se iluminan las escenas y cómo suenan las voces según dónde estés."]
    },
    systems: [],
    links: { code: "https://github.com/Jose-Elar/Fire-Talk", play: "" }
  },

  {
    id: "steering-agents",
    filter: "cpp",
    title: "Steering Agents",
    engine: "raylib",
    language: "C++",
    team: { en: "Solo", es: "Individual" },
    role: { en: "All programming", es: "Toda la programación" },
    image: "img/steering-agents.jpg",
    video: "img/steering-agents.mp4",
    gallery: [],
    summary: {
      en: "Flocking simulation in plain C++: a group of agents moves together using separation, alignment and cohesion, all written from scratch with vector maths.",
      es: "Simulación de bandadas en C++ puro: un grupo de agentes se mueve en conjunto usando separación, alineación y cohesión, todo escrito desde cero con matemática vectorial."
    },
    description: {
      en: [
        "A study of classic AI steering behaviours, written without an engine. Each agent only sees the neighbours inside its perception radius, and from them it works out three forces: keep some distance, match their direction, and stay close to the group.",
        "The three forces are weighted, added together and clamped to a maximum force and speed before moving the agent, so the group behaves like a flock instead of a crowd of individuals. The project is still growing, with more behaviours on the way."
      ],
      es: [
        "Un estudio de los comportamientos de steering clásicos de la IA, escrito sin motor. Cada agente solo ve a los vecinos dentro de su radio de percepción y, a partir de ellos, calcula tres fuerzas: mantener la distancia, seguir su dirección y no separarse del grupo.",
        "Las tres fuerzas se ponderan, se suman y se limitan a una fuerza y velocidad máximas antes de mover al agente, así el grupo se comporta como una bandada y no como individuos sueltos. El proyecto sigue creciendo, con más comportamientos en camino."
      ]
    },
    systems: [
      {
        title: { en: "Separation, alignment and cohesion", es: "Separación, alineación y cohesión" },
        text: {
          en: "The three classic flocking rules, each calculated only from the neighbours the agent can perceive.",
          es: "Las tres reglas clásicas de bandada, calculadas solo con los vecinos que el agente puede percibir."
        },
        code: "https://github.com/Jose-Elar/Agents-SteeringBehavior-C-/blob/HEAD/classes/Agent.cpp"
      },
      {
        title: { en: "Force-based movement", es: "Movimiento basado en fuerzas" },
        text: {
          en: "Forces are weighted, combined and clamped, then applied with delta time so movement is the same at any frame rate.",
          es: "Las fuerzas se ponderan, se combinan y se limitan, y se aplican con delta time para que el movimiento sea igual a cualquier frame rate."
        },
        code: "https://github.com/Jose-Elar/Agents-SteeringBehavior-C-/blob/HEAD/classes/Agent.cpp"
      }
    ],
    links: { code: "https://github.com/Jose-Elar/Agents-SteeringBehavior-C-", play: "" }
  },

  {
    id: "tactics-rpg-cpp",
    inProgress: true,
    filter: "cpp",
    title: "Tactics RPG",
    engine: "raylib",
    language: "C++",
    team: { en: "Solo", es: "Individual" },
    role: { en: "All programming", es: "Toda la programación" },
    image: null,
    gallery: [],
    summary: {
      en: "Turn-based tactics game built in plain C++ with raylib. The most ambitious engine-free project in this portfolio, currently in development.",
      es: "Juego de táctica por turnos hecho en C++ puro con raylib. El proyecto sin motor más ambicioso de este portfolio, actualmente en desarrollo."
    },
    description: {
      en: [
        "A follow-up to the turn system built for Adopt a Fighter in Unity: the genre rebuilt from the ground up in C++, where every system has to be written by hand.",
        "So far it has a tile grid with floors and walls, conversion between screen and grid coordinates, and mouse hover over tiles. The unit system, with player and enemy teams, is the current work in progress."
      ],
      es: [
        "Una continuación del sistema de turnos creado para Adopt a Fighter en Unity: el género reconstruido desde cero en C++, donde cada sistema hay que escribirlo a mano.",
        "Por ahora tiene una cuadrícula de casillas con suelos y muros, conversión entre coordenadas de pantalla y de cuadrícula, y detección del ratón sobre las casillas. El sistema de unidades, con equipos de jugador y enemigo, está actualmente en desarrollo."
      ]
    },
    systems: [
      {
        title: { en: "Tile grid", es: "Cuadrícula de casillas" },
        text: {
          en: "Stores each tile's type, checks bounds and walkability, and converts between screen and grid positions.",
          es: "Guarda el tipo de cada casilla, comprueba límites y si se puede caminar, y convierte entre posiciones de pantalla y de cuadrícula."
        },
        code: "https://github.com/Jose-Elar/TacticsRPG-C-/blob/HEAD/TacticsRPG/classes/Grid.cpp"
      },
      {
        title: { en: "Units and teams", es: "Unidades y equipos" },
        text: {
          en: "Units with a name, a team and a grid position. In progress.",
          es: "Unidades con nombre, equipo y posición en la cuadrícula. En desarrollo."
        },
        code: "https://github.com/Jose-Elar/TacticsRPG-C-/blob/HEAD/TacticsRPG/classes/Unit.cpp"
      }
    ],
    links: { code: "https://github.com/Jose-Elar/TacticsRPG-C-", play: "" }
  },

  {
    id: "space-shooter",
    filter: "unity",
    title: "Space Shooter",
    engine: "Unity",
    language: "C#",
    team: { en: "Solo", es: "Individual" },
    role: { en: "Programming, following a course", es: "Programación, siguiendo un curso" },
    image: "img/space-shooter.jpg",
    gallery: [],
    summary: {
      en: "Classic 2D shoot 'em up built following a Udemy course: the player survives waves of enemies with three lives while chasing the highest score.",
      es: "Shoot 'em up 2D clásico hecho siguiendo un curso de Udemy: el jugador sobrevive a oleadas de enemigos con tres vidas mientras busca la máxima puntuación."
    },
    description: {
      en: [
        "A learning project built by following a Udemy course on Unity 2D. The course provided the art and guided the structure of the code; each system was written and integrated step by step: movement, shooting, enemies, power-ups, lives and the game loop.",
        "An introduction to classic shoot 'em up mechanics and to organising a small Unity game into managers and components, later applied in the original projects in this portfolio."
      ],
      es: [
        "Un proyecto de aprendizaje hecho siguiendo un curso de Udemy sobre Unity 2D. El curso aportó el arte y guió la estructura del código; cada sistema se escribió e integró paso a paso: movimiento, disparo, enemigos, power-ups, vidas y el bucle de juego.",
        "Una introducción a las mecánicas clásicas de los shoot 'em up y a organizar un juego pequeño de Unity en gestores y componentes, algo que se aplicó después en los proyectos propios de este portfolio."
      ]
    },
    systems: [
      {
        title: { en: "Power-ups", es: "Power-ups" },
        text: {
          en: "Three timed power-ups: triple shot, speed boost and a shield that absorbs one hit. Each lasts five seconds and is switched off by a coroutine. They drift down the screen and bounce off the edges, so the player has to chase them.",
          es: "Tres power-ups temporales: disparo triple, aumento de velocidad y un escudo que absorbe un golpe. Cada uno dura cinco segundos y se desactiva con una corrutina. Bajan por la pantalla rebotando en los bordes, así que el jugador tiene que ir a por ellos."
        },
        code: "https://github.com/Jose-Elar/Space-Shooter/blob/HEAD/Space%20Shooter/Assets/Scripts/PowerUp.cs"
      },
      {
        title: { en: "Enemies and waves", es: "Enemigos y oleadas" },
        text: {
          en: "Enemies zig-zag down the screen, bouncing off the sides, and fire at random intervals so their attacks are hard to predict. The spawn manager starts the waves when the player destroys the first asteroid, keeps sending enemies and power-ups, and stops when the player dies.",
          es: "Los enemigos bajan en zigzag rebotando en los lados y disparan a intervalos aleatorios para que sus ataques sean difíciles de predecir. El gestor de apariciones empieza las oleadas cuando el jugador destruye el primer asteroide, sigue enviando enemigos y power-ups, y se detiene cuando el jugador muere."
        },
        code: "https://github.com/Jose-Elar/Space-Shooter/blob/HEAD/Space%20Shooter/Assets/Scripts/Enemies/Enemy.cs"
      },
      {
        title: { en: "Player, lives and damage", es: "Jugador, vidas y daño" },
        text: {
          en: "The ship wraps around the sides of the screen and has a short fire cooldown. It has three lives: each hit sets another engine on fire as visual feedback, the HUD updates, and losing the last life stops the spawns and shows a flashing game over screen with restart.",
          es: "La nave sale por un lateral de la pantalla y reaparece por el otro, y tiene un breve tiempo de recarga entre disparos. Tiene tres vidas: cada golpe incendia otro motor como respuesta visual, el HUD se actualiza, y al perder la última vida se detienen las apariciones y aparece una pantalla de fin de partida parpadeante con reinicio."
        },
        code: "https://github.com/Jose-Elar/Space-Shooter/blob/HEAD/Space%20Shooter/Assets/Scripts/Player.cs"
      }
    ],
    links: { code: "https://github.com/Jose-Elar/Space-Shooter", play: "" }
  },

  {
    id: "snake-cpp",
    filter: "cpp",
    title: "Snake",
    engine: "raylib",
    language: "C++",
    team: { en: "Solo", es: "Individual" },
    role: { en: "All programming", es: "Toda la programación" },
    image: "img/snake-cpp.jpg",
    video: "img/snake-cpp.mp4",
    gallery: [],
    summary: {
      en: "Snake written in plain C++ with raylib and CMake, no engine, to practise the fundamentals of programming a game.",
      es: "Snake escrito en C++ puro con raylib y CMake, sin motor, para practicar los fundamentos de programar un videojuego."
    },
    description: {
      en: ["Without an engine, everything has to be written by hand: the game loop, the grid, the snake's body, food spawning and the game states. The code is split into small classes for the snake, the food and the game state."],
      es: ["Sin motor hay que escribirlo todo a mano: el bucle de juego, la cuadrícula, el cuerpo de la serpiente, la aparición de comida y los estados de la partida. El código está dividido en clases pequeñas para la serpiente, la comida y el estado del juego."]
    },
    systems: [
      {
        title: { en: "Snake body as a deque", es: "El cuerpo de la serpiente como deque" },
        text: {
          en: "The body is a std::deque of grid positions. Each step pushes a new head and pops the tail, unless the snake has just eaten, so growing costs nothing extra. The same class blocks reversing into itself and checks wall and self collisions.",
          es: "El cuerpo es un std::deque de posiciones de la cuadrícula. Cada paso añade una cabeza nueva y quita la cola, salvo si la serpiente acaba de comer, así que crecer no cuesta nada extra. La misma clase impide invertir la dirección de golpe y comprueba los choques con las paredes y con su propio cuerpo."
        },
        code: "https://github.com/Jose-Elar/Snake-Game-Cpp/blob/HEAD/classes/Snake.cpp"
      },
      {
        title: { en: "Game loop and states", es: "Bucle de juego y estados" },
        text: {
          en: "A small state machine (start, playing, game over) drives the whole game. The snake moves on a fixed timer instead of every frame, so its speed is the same on any machine, and the game restarts without closing the window.",
          es: "Una pequeña máquina de estados (inicio, jugando, fin de partida) controla todo el juego. La serpiente se mueve con un temporizador fijo en lugar de en cada frame, así que su velocidad es la misma en cualquier equipo, y la partida se reinicia sin cerrar la ventana."
        },
        code: "https://github.com/Jose-Elar/Snake-Game-Cpp/blob/HEAD/main.cpp"
      }
    ],
    links: { code: "https://github.com/Jose-Elar/Snake-Game-Cpp", play: "" }
  }
];
