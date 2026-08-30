// src/services/exerciseDatabase.ts
import { Exercise } from '../types/wger';

// Pre-fetched subset of wger exercises in Spanish with mapped images
export const EXTENDED_CLINICAL_EXERCISES: Exercise[] = [
  {
    "id": 9,
    "name": "2 Handed Kettlebell Swing",
    "description": "<p>Two Handed Russian Style Kettlebell swing</p>",
    "category": 10,
    "equipment": [
      10
    ],
    "muscles": [
      11,
      8
    ],
    "muscles_secondary": [
      10,
      6
    ],
    "image_url": "https://static.vecteezy.com/system/resources/thumbnails/016/124/165/small_2x/man-doing-two-arm-kettlebell-swing-exercise-flat-illustration-isolated-on-white-background-vector.jpg"
  },
  {
    "id": 12,
    "name": "Aducción de Cadera en Máquina",
    "description": "<p>Este es un ejercicio de aislamiento que se realiza en una máquina específica para fortalecer los músculos aductores, es decir, la musculatura de la parte interna de los muslos. Ayuda a mejorar la estabilidad de la cadera y a equilibrar la fuerza de las piernas.</p>\n<p><strong>Cómo realizarlo:</strong></p>\n<ol>\n<li><strong>Preparación:</strong> Siéntate en la máquina con la espalda y la cadera completamente apoyadas en el respaldo. Coloca la parte interna de tus muslos o rodillas contra las almohadillas acolchadas. Ajusta la palanca de la máquina para establecer un rango de movimiento inicial que te resulte cómodo pero que genere un ligero estiramiento.</li>\n<li><strong>Ejecución:</strong> Usando la fuerza de la parte interna de tus muslos, junta las piernas de manera lenta y controlada. Haz una breve pausa en el punto de máxima contracción (cuando las almohadillas casi se tocan), apretando fuertemente los aductores.</li>\n<li><strong>Regreso:</strong> Vuelve a la posición inicial de forma igualmente controlada, resistiendo el peso a medida que tus piernas se separan. Evita que las placas de peso choquen bruscamente.</li>\n</ol>",
    "category": 9,
    "equipment": [],
    "muscles": [
      8
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/12/4a42cc6f-648d-40cc-a72a-c49dd47e1667.webp"
  },
  {
    "id": 20,
    "name": "Press Arnold",
    "description": "<p>Siéntate en un banco con la espalda bien apoyada. Sostén un par de mancuernas frente a tus hombros, con las palmas de las manos mirando hacia tu cuerpo. A medida que empujas las mancuernas hacia arriba, rota las muñecas de forma que al final del movimiento tus palmas miren hacia el frente. Invierte el movimiento de forma controlada para volver a la posición inicial.</p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [
      9,
      5
    ],
    "image_url": "https://static.vecteezy.com/system/resources/thumbnails/006/417/649/small/man-doing-arnold-press-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg"
  },
  {
    "id": 31,
    "name": "Sostenimiento Lateral Isométrico",
    "description": "<p>Toma un par de mancuernas, extiende los brazos hacia los lados y mantén la posición el mayor tiempo que puedas.</p>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/31/92f6451b-f89d-49d6-9531-8970ea420d97.png"
  },
  {
    "id": 41,
    "name": "Rollout Abdominal con Barra",
    "description": "<p><strong>Cómo realizarlo:</strong></p>\n<ol>\n<li><strong>Preparación:</strong> Carga una barra con discos redondos (de 5 o 10 kg es suficiente para que ruede bien). Arrodíllate en el suelo, preferiblemente sobre una colchoneta. Agarra la barra con las palmas hacia abajo (agarre prono) y las manos separadas al ancho de los hombros.</li>\n<li><strong>El Despliegue (Rollout):</strong> Manteniendo el abdomen y los glúteos fuertemente contraídos, rueda la barra hacia adelante de manera lenta y controlada. Extiende tu cuerpo en una línea lo más recta posible, llegando tan lejos como puedas sin que tu espalda baja se arquee.</li>\n<li><strong>El Regreso:</strong> Haz una breve pausa en el punto de máxima extensión. Luego, usa la fuerza de tus abdominales para jalar la barra hacia ti, revirtiendo el movimiento hasta volver a la posición inicial de forma controlada.</li>\n</ol>",
    "category": 10,
    "equipment": [
      1
    ],
    "muscles": [
      14
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/41/34b37423-269f-43d4-9d29-d2a90eeaa6b4.png"
  },
  {
    "id": 43,
    "name": "Sentadilla Hack con Barra",
    "description": "<p>Para realizarla, coloca una barra en el suelo justo detrás de tus talones. Párate con los pies relativamente juntos (al ancho de las caderas o menos) y, manteniendo el pecho erguido y la espalda recta, agáchate para agarrar la barra. Desde esa posición, ponte de pie extendiendo las rodillas y la cadera, deslizando la barra por la parte posterior de tus piernas. Baja de forma controlada para completar la repetición.</p>",
    "category": 9,
    "equipment": [
      1
    ],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      11,
      8
    ],
    "image_url": "https://live.staticflickr.com/1164/3168783915_84ea860203_b.jpg"
  },
  {
    "id": 46,
    "name": "Zancadas con Barra",
    "description": "<p>Este es un ejercicio compuesto fundamental para fortalecer piernas y glúteos, que además desafía el equilibrio y la estabilidad del core.</p>\n<p><strong>Cómo realizarlo:</strong></p>\n<p>Primero, coloca la barra sobre la parte alta de tu espalda (trapecios), de la misma forma que para una sentadilla. Párate derecho con los pies al ancho de las caderas.</p>\n<p>Da un paso largo hacia adelante con una pierna y baja la cadera de forma controlada hasta que la rodilla de la pierna de atrás casi toque el suelo. La pierna delantera debe formar un ángulo de 90 grados. Empuja con fuerza a través del talón de la pierna delantera para regresar a la posición inicial. Luego, repite el movimiento alternando con la otra pierna.</p>\n<p>Recuerda mantener una buena postura, con el torso erguido y el abdomen contraído durante todo el ejercicio.</p>",
    "category": 9,
    "equipment": [
      1
    ],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://i.pinimg.com/736x/b5/1a/d3/b51ad3102e88cdae9f58f7a5004ffca9.jpg"
  },
  {
    "id": 48,
    "name": "Curl de Muñeca Inverso con Barra",
    "description": "<p>Este ejercicio se enfoca en fortalecer los músculos extensores del antebrazo, ubicados en la parte superior del mismo. Es clave para mejorar la fuerza de agarre y la estabilidad de la muñeca.</p>\n<p><strong>Cómo realizarlo:</strong></p>\n<ol>\n<li><strong>Preparación:</strong> Siéntate en un banco y agarra una barra con las palmas mirando hacia abajo (agarre prono), con las manos separadas al ancho de los hombros. Apoya tus antebrazos firmemente sobre los muslos, de manera que tus muñecas queden libres justo por delante de las rodillas.</li>\n<li><strong>Ejecución:</strong> Desde esa posición, extiende las muñecas para levantar la barra tan alto como puedas, llevando los nudillos hacia el techo. Haz una pausa en el punto de máxima contracción y luego baja la barra de forma lenta y controlada, permitiendo que tus muñecas se flexionen completamente hacia abajo en la parte inferior del movimiento para un estiramiento completo.</li>\n</ol>",
    "category": 8,
    "equipment": [
      1,
      8
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/4323/35986604152_6c88ed4c42_b.jpg"
  },
  {
    "id": 50,
    "name": "Extensión de triceps",
    "description": "<p>Coloque la barra sobre la cabeza con un agarre en pronación estrecho. Baje el antebrazo detrás de la parte superior del brazo con los codos sobre la cabeza. Extienda el antebrazo por encima de la cabeza. Baja y repite.</p>",
    "category": 8,
    "equipment": [
      1
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [
      2,
      4
    ],
    "image_url": "https://wger.de/media/exercise-images/50/695ced5c-9961-4076-add2-cb250d01089e.png"
  },
  {
    "id": 51,
    "name": "Curl de Muñeca con Barra (Agarre Supino)",
    "description": "<p>Este ejercicio es fundamental para desarrollar los músculos flexores del antebrazo (la parte interna o de abajo), que son cruciales para la fuerza de agarre.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado en un banco, apoya tus antebrazos sobre los muslos y sujeta una barra con las palmas mirando hacia arriba (agarre supino). Las muñecas deben quedar libres, por delante de las rodillas.</p>\n<p>Deja que la barra baje para estirar bien la muñeca y, desde ese punto, flexiónala para subir el peso lo más que puedas. Aprieta con fuerza en la cima y luego baja de manera lenta y controlada para maximizar el trabajo</p>",
    "category": 8,
    "equipment": [
      1,
      8
    ],
    "muscles": [],
    "muscles_secondary": [
      1
    ],
    "image_url": "https://wger.de/media/exercise-images/51/f1730f56-7aca-4566-8338-3e42b1bee6e1.webp"
  },
  {
    "id": 56,
    "name": "Estabilización abdominal",
    "description": "<p>Acuéstate con las rodillas flexionadas y contrae el abdomen como si te prepararas para recibir un golpe suave. Siente la tensión en el frente, los costados y la espalda baja. Mantén esta firmeza durante 10-20 segundos sin dejar de respirar y sin aplastar la zona lumbar contra el suelo.</p>",
    "category": 10,
    "equipment": [
      4
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14
    ],
    "image_url": "https://live.staticflickr.com/3471/3749355444_2e7c42345b_b.jpg"
  },
  {
    "id": 57,
    "name": "Caminata del Oso",
    "description": "<p><strong>Instrucciones:</strong></p>\n<ul>\n<li><strong>Posición Inicial:</strong> Colócate en cuatro apoyos (manos y pies) con las manos directamente debajo de los hombros y las rodillas debajo de las caderas. Desde ahí, levanta las rodillas del suelo unos pocos centímetros, manteniendo la espalda recta y el core activado. El peso debe estar sobre las palmas de las manos y las puntas de los pies.</li>\n<li><strong>Movimiento:</strong> Para avanzar, da un paso simultáneo con tu mano derecha y tu pie izquierdo, seguido inmediatamente por un paso con tu mano izquierda y tu pie derecho. La clave es este movimiento contralateral, como un oso caminando.</li>\n<li><strong>Intensidad y Medición:</strong> Muévete tan rápido como puedas manteniendo una buena forma. Las series se miden normalmente por distancia (ej: avanzar 20 o 30 metros) o por tiempo (ej: 45 segundos continuos).</li>\n<li><strong>Músculos Trabajados:</strong> Es un ejercicio muy completo que involucra: pectorales, deltoides, tríceps, trapecios, dorsales, abdominales y espalda baja (core), flexores de cadera, cuádriceps, glúteos y pantorrillas.</li>\n</ul>",
    "category": 11,
    "equipment": [
      7
    ],
    "muscles": [
      2,
      7,
      4,
      6,
      3,
      15,
      5
    ],
    "muscles_secondary": [
      8,
      12,
      14,
      10,
      9
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 71,
    "name": "Extensión de Cuádriceps a una Pierna",
    "description": "<p>Esta variante es excelente para aislar cada cuádriceps de forma individual, ayudando a corregir desbalances de fuerza y a mejorar la conexión mente-músculo.</p>\n<p><strong>Descripción:</strong></p>\n<p>Siéntate en la máquina de extensión de piernas y ajusta el rodillo sobre el tobillo de una sola pierna. Extiende esa pierna hasta que quede completamente recta, contrayendo el cuádriceps con fuerza en la parte alta del movimiento.</p>\n<p>Baja el peso de forma lenta y controlada. Completa todas las repeticiones con una pierna antes de cambiar a la otra.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      10
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/4082/4894971579_34db736108_b.jpg"
  },
  {
    "id": 73,
    "name": "Press de Banca",
    "description": "<p>Acuéstate en un banco plano. La barra debe estar directamente sobre tus ojos, las rodillas deben estar ligeramente flexionadas y los pies firmemente apoyados en el suelo. Concéntrate, respira profundamente y agarra la barra con una apertura mayor a la anchura de tus hombros. Bájala lentamente hasta que toque brevemente tu pecho a la altura de los pezones. Empuja la barra hacia arriba.</p>\n<p>Si entrenas con un peso elevado, es aconsejable tener un ayudante (<em>spotter</em>) que pueda asistirte si no puedes levantar el peso por ti mismo.</p>\n<p>Con la anchura del agarre también puedes controlar qué parte del pecho se trabaja más:</p>\n<ul>\n<li><strong>Agarre ancho:</strong> musculatura externa del pecho.</li>\n<li><strong>Agarre cerrado:</strong> musculatura interna del pecho y tríceps.</li>\n</ul>",
    "category": 11,
    "equipment": [
      1,
      8
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      2,
      5
    ],
    "image_url": "https://wger.de/media/exercise-images/192/Bench-press-1.png"
  },
  {
    "id": 75,
    "name": "Press de banca con mancuernas",
    "description": "<p>Es un ejercicio multiarticular de fuerza y de hipertrofia destinado al desarrollo del tren superior, específicamente el pecho. Al usar mancuernas en lugar de barra, se corrige el desequilibrio de fuerza entre ambos lados del cuerpo y se permite un movimiento más natural y amigable para las articulaciones del hombro.</p>\n<ol>\n<li>\n<p>Preparación y Posición Inicial: Siéntate en el extremo de un banco plano con una mancuerna apoyada verticalmente en cada muslo. Túmbate hacia atrás con cuidado mientras impulsas las mancuernas con las rodillas hacia tu pecho.</p>\n</li>\n<li>\n<p>El \"Leg Drive\" y Postura: Apoya los pies firmemente en el suelo. Retrae las escápulas (junta los omóplatos contra el banco) y mantén un ligero arco lumbar natural.</p>\n</li>\n<li>\n<p>Posición de Salida: Empuja las mancuernas hacia el techo. Tus muñecas deben estar alineadas con los codos. Gira ligeramente las mancuernas hacia adentro (unos 45 grados) para que los codos no se abran en exceso hacia los lados, protegiendo así tus hombros.</p>\n</li>\n<li>\n<p>Fase Excéntrica (Bajada): Baja las mancuernas de forma controlada hacia los lados de tu pecho. Los codos deben bajar formando un ángulo de unos 45-60 grados respecto a tu cuerpo. Siente el estiramiento en el pectoral en la parte baja.</p>\n</li>\n<li>\n<p>Fase Concéntrica (Subida): Empuja el peso hacia arriba siguiendo una ligera trayectoria en arco (hacia el centro), sin llegar a chocar las mancuernas arriba ni bloquear los codos por completo para mantener la tensión muscular. Expulsa el aire al subir.</p>\n</li>\n</ol>",
    "category": 11,
    "equipment": [
      8,
      3
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      2,
      5
    ],
    "image_url": "https://wger.de/media/exercise-images/97/Dumbbell-bench-press-1.png"
  },
  {
    "id": 76,
    "name": "Press de Banca con Agarre Cerrado",
    "description": "<p>Esta variante del press de banca pone un mayor énfasis en los tríceps y la parte interna del pecho. La posición inicial en el banco es la misma que en un press normal, pero con estas diferencias clave:</p>\n<ol>\n<li><strong>Agarre:</strong> Sujeta la barra con un agarre cerrado, aproximadamente al ancho de los hombros (unos 20-30 cm de separación entre las manos).</li>\n<li><strong>Movimiento:</strong> Baja la barra de forma controlada hacia la parte baja de tu pecho o el esternón (más abajo que en el press convencional), manteniendo los codos cerca de tu cuerpo. Desde ahí, empuja con fuerza hacia arriba hasta extender los brazos, enfocándote en la contracción de los tríceps.</li>\n</ol>",
    "category": 8,
    "equipment": [
      1,
      8
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [
      2,
      4
    ],
    "image_url": "https://wger.de/media/exercise-images/88/Narrow-grip-bench-press-1.png"
  },
  {
    "id": 79,
    "name": "Jalón Alto Inclinado con Mancuernas",
    "description": "<p>Este ejercicio se enfoca en la parte alta de la espalda, los trapecios y los deltoides posteriores.</p>\n<p><strong>Descripción:</strong></p>\n<p>Sostén un par de mancuernas e inclina el torso ligeramente hacia adelante, manteniendo la <strong>espalda recta</strong>. Desde esa posición, jala las mancuernas verticalmente hacia la parte alta de tu pecho.</p>\n<p>La clave es liderar el movimiento con los codos, elevándolos lo más alto y hacia afuera posible. Asegúrate de que tus codos siempre permanezcan por encima de tus muñecas durante el jalón. Baja de forma controlada.</p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/79/da58dfbf-748a-461b-891e-3d6bc9cc4be2.png"
  },
  {
    "id": 81,
    "name": "Remo con mancuernas",
    "description": "<p>Con las mancuernas en la mano, flexiona la cadera hasta que las manos cuelguen justo por debajo de las rodillas (similar a la posición inicial de pierna recta). Mantenga constante el ángulo de la parte superior del cuerpo mientras contrae los músculos dorsales para llevar los codos hacia atrás, pellizcando los omóplatos en la parte superior. Intenta no levantarte en cada repetición, comprueba que las manos quedan por debajo de las rodillas en cada repetición.</p>",
    "category": 12,
    "equipment": [
      8,
      3
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/81/a751a438-ae2d-4751-8d61-cef0e9292174.png"
  },
  {
    "id": 82,
    "name": "Elevaciones Posteriores",
    "description": "<p>Este ejercicio es excelente para aislar los deltoides posteriores (la parte trasera del hombro) y la espalda alta.</p>\n<p><strong>Descripción:</strong></p>\n<p>Siéntate en el borde de un banco, sosteniendo un par de mancuernas. Inclina el torso hacia adelante, manteniendo la <strong>espalda recta</strong>, hasta que tu pecho quede cerca de tus rodillas.</p>\n<p>Con una ligera flexión en los codos, eleva los brazos hacia los lados en un movimiento de arco, como si estuvieras abriendo unas alas. Concéntrate en contraer la parte alta de la espalda en la cima del movimiento y luego baja las pesas de forma lenta y controlada.</p>",
    "category": 13,
    "equipment": [
      8,
      3
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dumbbell-lateral-raises-1.png"
  },
  {
    "id": 83,
    "name": "Remo Inclinado con Barra (agarre prono)",
    "description": "<p>Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos un poco más abiertas que el ancho de tus hombros. Inclina tu torso hacia adelante desde la cadera, manteniendo la <strong>espalda completamente recta</strong> y las rodillas ligeramente flexionadas, hasta que el torso quede casi paralelo al suelo. La barra debe colgar con los brazos extendidos.</p>\n<p>Desde esa posición, y manteniendo el torso fijo, jala la barra hacia la parte baja de tu abdomen. Mantén los codos cerca del cuerpo, aprieta los músculos de la espalda por un segundo en la cima del movimiento y luego baja la barra de forma lenta y controlada hasta la posición inicial.</p>",
    "category": 12,
    "equipment": [
      1
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      2,
      1
    ],
    "image_url": "https://wger.de/media/exercise-images/109/Barbell-rear-delt-row-1.png"
  },
  {
    "id": 84,
    "name": "Remo inclinado con agarre invertido",
    "description": "<p>Igual que el remo <em>normal</em>, pero con un agarre invertido (las palmas apuntando hacia delante):</p>\n<p>Agarra la barra con un agarre amplio (algo más que la anchura de los hombros) e inclínate hacia delante. Tu tronco no queda del todo paralelo al suelo, sino que forma un ligero ángulo. El pecho permanece hacia fuera durante todo el ejercicio.</p>\n<p>Ahora tira de la barra con un movimiento rápido hacia el ombligo, no más arriba. Baja lentamente a la posición inicial. No te balancees con el cuerpo y mantén los brazos pegados al cuerpo.</p>",
    "category": 12,
    "equipment": [
      1
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      2,
      1
    ],
    "image_url": "https://wger.de/media/exercise-images/110/Reverse-grip-bent-over-rows-1.png"
  },
  {
    "id": 91,
    "name": "Curl con barra",
    "description": "<p>Sostén la barra a la anchura de los hombros, con la espalda recta, los hombros ligeramente hacia atrás y los brazos estirados. Flexiona los brazos y levanta la pesa con un movimiento rápido. Sin pausa, baja la barra con un movimiento lento y controlado.\nNo balancees el cuerpo durante el ejercicio; todo el trabajo lo realizan los bíceps, que son los únicos músculos que deben moverse (presta atención a los codos).</p>",
    "category": 8,
    "equipment": [
      1
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [
      13
    ],
    "image_url": "https://wger.de/media/exercise-images/74/Bicep-curls-1.png"
  },
  {
    "id": 92,
    "name": "Curl de bíceps con mancuerna",
    "description": "<p>Sujeta dos pesas, los brazos estirados, las manos a los lados, las palmas hacia dentro. Flexiona los brazos y sube el peso con un movimiento rápido. Al mismo tiempo, gira los brazos 90 grados al principio del movimiento. En el punto más alto, gira un poco las pesas hacia fuera. Sin pausa, bájalas lentamente.No permitas que tu cuerpo se balancee durante el ejercicio, todo el trabajo lo realizan los bíceps, que son los únicos músculos que deben moverse (presta atención a los codos).</p>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [
      13
    ],
    "image_url": "https://wger.de/media/exercise-images/81/Biceps-curl-1.png"
  },
  {
    "id": 94,
    "name": "Curl de biceps con barra Z",
    "description": "<p>Sostenga la barra SZ a la altura de los hombros, la espalda recta, los hombros ligeramente hacia atrás, los brazos estirados. Dobla los brazos, elevando el peso, con un movimiento rápido. Sin pausa, baja la barra con un movimiento lento y controlado.\nNo dejes que tu cuerpo se balancee durante el ejercicio, todo el trabajo lo hacen los bíceps, que son los únicos músculos que deben moverse (presta atención a los codos).</p>",
    "category": 8,
    "equipment": [
      2
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [
      13
    ],
    "image_url": "https://wger.de/media/exercise-images/94/6dee2f60-aea2-4f2d-9bf6-aef50c4f9483.png"
  },
  {
    "id": 95,
    "name": "Curl de Bíceps en Polea",
    "description": "<p>Párate a uno o dos pasos de una polea en su posición más baja y sujeta la barra o el agarre con las palmas hacia arriba (agarre supino).</p>\n<p>Manteniendo los codos fijos a los costados de tu cuerpo, sube el peso con un movimiento relativamente rápido y potente, contrayendo el bíceps en la parte alta. La clave del ejercicio está en la bajada: regresa a la posición inicial de forma lenta y controlada, resistiendo la tensión constante del cable.</p>",
    "category": 8,
    "equipment": [
      12
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/129/Standing-biceps-curl-1.png"
  },
  {
    "id": 112,
    "name": "Plancha a Flexión",
    "description": "<p>Comienza en una posición de plancha baja, apoyado sobre tus antebrazos y con el cuerpo formando una línea recta. Desde ahí, apoya una mano en el suelo y luego la otra para subir hasta una plancha alta (la posición de una flexión).</p>\n<p>Invierte el movimiento, bajando un antebrazo y luego el otro para regresar de forma controlada a la posición inicial. La clave del ejercicio es mantener la cadera lo más estable posible, evitando que se balancee de lado a lado durante las transiciones.</p>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [
      2,
      6
    ],
    "image_url": "https://live.staticflickr.com/8419/8703788718_9278041f2d_b.jpg"
  },
  {
    "id": 124,
    "name": "Sentadilla con Disco al Frente",
    "description": "<p>Esta variante de la sentadilla utiliza un disco sostenido al frente como contrapeso, lo que facilita mantener el torso erguido y alcanzar una mayor profundidad, siendo excelente para aprender la técnica correcta.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>De pie, con los pies un poco más anchos que tus hombros, sostén un disco (placa) con los brazos completamente extendidos frente a tu pecho.</p>\n<p>Manteniendo el core activado y la espalda recta, empuja la cadera hacia atrás y baja a una sentadilla tan profunda como te sea posible. Haz una breve pausa en el fondo y luego sube de forma controlada a la posición inicial.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 129,
    "name": "Press de Pecho en Máquina",
    "description": "<p>Este ejercicio es excelente para trabajar los músculos pectorales de forma segura y controlada, ideal para principiantes o para aislar el músculo al final de una rutina.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Siéntate en la máquina con la espalda firmemente apoyada en el respaldo. Ajusta la altura del asiento para que los agarres queden a la altura de la parte media de tu pecho.</p>\n<p>Empuja los agarres hacia adelante hasta que tus brazos estén extendidos (pero sin bloquear los codos), enfocándote en apretar los músculos del pecho en la contracción final. Regresa de forma lenta y controlada a la posición inicial.</p>",
    "category": 11,
    "equipment": [],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/129/b263c968-e067-4750-916a-d8758a7df23e.webp"
  },
  {
    "id": 132,
    "name": "Burpees",
    "description": "<p>El burpee es uno de los ejercicios de acondicionamiento metabólico más completos, combinando fuerza de empuje, potencia de piernas y alta exigencia cardiovascular.</p>\n<p><strong>La secuencia del movimiento completo es:</strong></p>\n<ol>\n<li><strong>Agáchate</strong> y apoya las manos en el suelo.</li>\n<li><strong>Salta hacia atrás</strong> a una posición de plancha y realiza una <strong>flexión de pecho</strong> (el pecho toca el suelo).</li>\n<li><strong>Salta hacia adelante</strong> para volver a la posición de cuclillas.</li>\n<li><strong>Termina</strong> con un <strong>salto vertical</strong> explosivo, usualmente con un aplauso sobre la cabeza.</li>\n</ol>\n<p>Esa es una repetición. El ejercicio se realiza de forma continua y fluida.</p>",
    "category": 11,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/7012/6660182531_110b696b05.jpg"
  },
  {
    "id": 135,
    "name": "Aperturas en máquina",
    "description": "<p>Posición inicial Sentado en la máquina \"Peck deck\" con la espalda pegada al respaldo, los antebrazos bien apoyados contra las piezas acolchadas previstas para este fin. La parte superior de los brazos debe estar paralela al suelo y en línea con los hombros.</p>",
    "category": 11,
    "equipment": [],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      2
    ],
    "image_url": "https://wger.de/media/exercise-images/98/Butterfly-machine-2.png"
  },
  {
    "id": 137,
    "name": "Pectoral en Máquina",
    "description": "<p>Este ejercicio de aislamiento es excelente para enfocar el trabajo en la contracción de la parte interna del pecho.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Siéntate en la máquina con la espalda firmemente apoyada en el respaldo. Ajusta la altura del asiento de manera que tus brazos, al tomar los agarres, queden aproximadamente paralelos al suelo.</p>\n<p>Con una ligera y constante flexión en los codos, junta los agarres al frente en un movimiento de arco controlado. Contrae el pecho fuertemente en el punto de máxima tensión y luego regresa de forma lenta a la posición inicial, sin dejar que las placas de peso choquen.</p>",
    "category": 11,
    "equipment": [],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 139,
    "name": "Pec-Deck Inverso",
    "description": "<p>Este ejercicio en máquina es excelente para aislar los músculos deltoides posteriores (la parte trasera del hombro) y la espalda alta (romboides y trapecios).</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Siéntate en la máquina de pectoral (Pec-Deck) al revés, es decir, con el pecho firmemente apoyado en el respaldo. Ajusta la altura del asiento para que los agarres queden al nivel de tus hombros.</p>\n<p>Con los codos ligeramente flexionados, empuja los agarres hacia atrás y hacia los lados en un movimiento de arco amplio. Concéntrate en apretar los omóplatos al final del recorrido. Regresa de forma lenta y controlada a la posición inicial.</p>",
    "category": 13,
    "equipment": [],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 142,
    "name": "Rotación externa con polea",
    "description": "<p>Pasos:</p>\n<ol>\n<li>Comienza colocando una banda elástica alrededor de un poste o en una posición segura donde no se suelte y quede a la altura del codo.</li>\n<li>Colócate al lado de la banda y, con la mano contraria a la banda, alcanza y agarra el asa.</li>\n<li>Lleva la banda hacia el pecho manteniendo el codo flexionado en un ángulo de 90 grados, luego rota lentamente el brazo en un movimiento de revés de modo que la banda rote hacia fuera.</li>\n<li>Continúa hacia fuera lo máximo posible para sentir un estiramiento en los hombros, mantén un instante y luego vuelve a la posición inicial.</li>\n<li>Repite tantas repeticiones y series como desees.</li>\n</ol>",
    "category": 13,
    "equipment": [
      12
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 145,
    "name": "Leñadores en Polea",
    "description": "<p>Este es un ejercicio funcional clave para desarrollar la fuerza de rotación del core, trabajando intensamente los músculos oblicuos.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Ajusta la polea a una altura entre el pecho y el hombro. De pie, de lado a la máquina, sujeta el agarre con ambas manos y los brazos extendidos.</p>\n<p>Manteniendo la cadera estable, jala el cable en un movimiento diagonal a través de tu cuerpo, rotando el torso como si estuvieras dando un hachazo. Sostén la contracción por un segundo al final del recorrido y regresa lentamente a la posición inicial antes de cambiar de lado.</p>",
    "category": 10,
    "equipment": [
      12
    ],
    "muscles": [
      14
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 146,
    "name": "Gemelos en prensa",
    "description": "<p>Sentado sobre el aparato, la parte alta de los muslos apoyada sobre el asiento, la punta de los pies sobre la calza, los tobillos en flexión pasiva: - Efectuar una extensión de los pies (flexión plantar).</p>",
    "category": 14,
    "equipment": [],
    "muscles": [
      7,
      15
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/146/8b284904-d072-4381-a256-4c81d8fd9c1f.png"
  },
  {
    "id": 148,
    "name": "Elevación de Pantorrillas en Hack",
    "description": "<p>Este ejercicio permite aislar las pantorrillas (gemelos) con la estabilidad de la máquina Hack, facilitando el uso de cargas pesadas y un rango de movimiento completo.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Apoya la espalda firmemente en el respaldo de la máquina. Coloca las puntas de los pies en el borde inferior de la plataforma, de manera que los talones queden en el aire y puedan bajar completamente.</p>\n<p>Manteniendo las rodillas rectas (pero sin bloquearlas), empuja con la parte delantera de los pies para elevar los talones lo más alto posible, apretando la pantorrilla en la cima. Luego, baja de forma controlada hasta sentir un estiramiento profundo.</p>",
    "category": 14,
    "equipment": [],
    "muscles": [
      7
    ],
    "muscles_secondary": [
      15
    ],
    "image_url": "https://live.staticflickr.com/2697/4423049916_97950ca011_b.jpg"
  },
  {
    "id": 152,
    "name": "Dominadas con Agarre Supino",
    "description": "<p>Esta es una variante de la dominada que se caracteriza por el tipo de agarre, lo cual involucra de forma muy activa a los bíceps junto con los músculos de la espalda (dorsales). A menudo resulta más accesible que la dominada con agarre prono (pull-up).</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sujeta la barra con las palmas de las manos mirando hacia ti (agarre supino), con una separación similar al ancho de tus hombros.</p>\n<p>Desde una posición colgado con los brazos extendidos, jala tu cuerpo hacia arriba hasta que tu mentón o barbilla sobrepase la barra. Baja de forma controlada hasta la extensión completa para terminar la repetición.</p>",
    "category": 12,
    "equipment": [
      6
    ],
    "muscles": [
      1,
      12
    ],
    "muscles_secondary": [
      13,
      9
    ],
    "image_url": "https://wger.de/media/exercise-images/152/6c1a7459-266d-491a-bd50-7cbaea2bc771.png"
  },
  {
    "id": 158,
    "name": "Jalón al Pecho con Agarre Cerrado",
    "description": "<p>Esta variante del jalón, con un agarre más estrecho, se enfoca en la densidad de la espalda y permite un mayor rango de movimiento para la contracción de los dorsales.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sujeta la barra con un agarre cerrado (manos más juntas que el ancho de los hombros) y prono (palmas mirando hacia abajo/lejos de ti). Inclina tu torso ligeramente hacia atrás.</p>\n<p>Jala la barra verticalmente hacia la parte superior de tu pecho, manteniendo los codos siempre cerca de tus costados. Al final del recorrido, aprieta la espalda y junta los omóplatos. Regresa a la posición inicial de forma controlada.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      12
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/158/0d51a0f2-622f-434b-beb8-1a003c54712a.png"
  },
  {
    "id": 161,
    "name": "Pullover con Mancuerna",
    "description": "<p>Este ejercicio clásico es excelente para estirar y trabajar simultáneamente los músculos del pecho (pectorales) y la espalda (dorsales), además de ayudar a la expansión de la caja torácica.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Acuéstate de forma transversal (atravesado) sobre un banco plano, apoyando únicamente la parte alta de tu espalda y hombros. Mantén los pies firmes en el suelo para darte estabilidad y la cadera a un nivel bajo.</p>\n<p>Sujeta una mancuerna con ambas manos y extiéndela sobre tu pecho. Con una ligera pero constante flexión en los codos, baja la mancuerna en un arco amplio por detrás de tu cabeza hasta sentir un estiramiento profundo. Regresa a la posición inicial siguiendo el mismo arco y de forma controlada.</p>",
    "category": 11,
    "equipment": [
      3
    ],
    "muscles": [
      12,
      4,
      3
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/161/b9b1803e-2817-40bf-8ac7-e398ca86d8b4.png"
  },
  {
    "id": 165,
    "name": "Abdominales en Bola de Estabilidad",
    "description": "<p>Realizar el crunch sobre una bola aumenta el rango de movimiento, permitiendo un mayor estiramiento y contracción del abdomen, además de activar los músculos estabilizadores del core para mantener el equilibrio.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Apoya la parte baja y media de tu espalda sobre la bola, con los pies firmes en el suelo y las rodillas flexionadas a 90 grados. Coloca las manos a los lados de la cabeza (sin jalar el cuello) o cruzadas sobre el pecho.</p>\n<p>Contrae el abdomen para elevar tus hombros y la parte alta de la espalda. Haz una pausa en la cima y baja de forma controlada. La clave es mantener la bola lo más estable posible durante todo el movimiento.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14
    ],
    "image_url": "https://live.staticflickr.com/3471/3749355444_2e7c42345b_b.jpg"
  },
  {
    "id": 167,
    "name": "Abdominales",
    "description": "<ol>\n<li>Acuéstese boca arriba en el suelo con las rodillas dobladas.</li>\n<li>Flexione los hombros hacia la pelvis. Las manos pueden estar detrás o al costado del cuello o cruzadas sobre el pecho.</li>\n<li>Repita</li>\n</ol>",
    "category": 10,
    "equipment": [
      4
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      3
    ],
    "image_url": "https://wger.de/media/exercise-images/91/Crunches-1.png"
  },
  {
    "id": 171,
    "name": "Abdominales en Banco Inclinado",
    "description": "<p>Este ejercicio aumenta la intensidad del trabajo abdominal y de los flexores de cadera gracias al ángulo del banco.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Acuéstate en un banco inclinado, asegurando firmemente tus pies en los soportes de la parte superior. Coloca las manos a los lados de la cabeza (sin jalar el cuello) o cruzadas sobre el pecho.</p>\n<p>Contrae el abdomen y levanta tu torso \"enrollando\" la espalda, hasta que tus codos se acerquen a las rodillas. Baja de forma lenta y controlada a la posición inicial, sin dejarte caer.</p>\n<p><em>(Nota: Para un <strong>crunch</strong> inclinado, solo se levantan los hombros y la parte alta de la espalda del banco, es un movimiento mucho más corto).</em></p>",
    "category": 10,
    "equipment": [
      9
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/56/Decline-crunch-1.png"
  },
  {
    "id": 172,
    "name": "Abdominales en Máquina",
    "description": "<p>Esta máquina permite aislar y añadir resistencia de forma segura y controlada para fortalecer el recto abdominal.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Siéntate en la máquina y ajusta el asiento y las almohadillas (que usualmente van sobre los hombros o el pecho, según el diseño). Sujeta firmemente los agarres con los pies bien apoyados.</p>\n<p>Contrae con fuerza el abdomen para flexionar tu columna vertebral, como si intentaras \"enrollarte\" sobre ti mismo y llevar tus costillas hacia tu pelvis. El movimiento debe ser un encogimiento abdominal, no una simple inclinación desde la cadera. Regresa de forma lenta y controlada, resistiendo el peso.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/3471/3749355444_2e7c42345b_b.jpg"
  },
  {
    "id": 173,
    "name": "Encogimientos abdominales en polea",
    "description": "<p>Coge el cable con las manos y sujétalo junto a las sienes. Arrodíllate, mantén el torso recto e inclínate hacia delante. Baja con un movimiento rápido, enrollando la espalda (los codos apuntan hacia las rodillas). Una vez abajo, vuelve lentamente a la posición inicial.</p>",
    "category": 10,
    "equipment": [
      12
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/3471/3749355444_2e7c42345b_b.jpg"
  },
  {
    "id": 174,
    "name": "Encogimientos con Piernas Elevadas",
    "description": "<p>Al tener las piernas en alto, esta variante de crunch concentra el esfuerzo en la parte superior y central del abdomen.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Acuéstate boca arriba y eleva las piernas, manteniéndolas lo más rectas posible y perpendiculares al suelo (apuntando hacia el techo).</p>\n<p>Extiende los brazos y contrae el abdomen para despegar los hombros y la parte alta de la espalda del suelo, como si intentaras tocarte las puntas de los pies. La zona lumbar debe permanecer en contacto con el piso. Baja de forma controlada.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 177,
    "name": "Ciclismo",
    "description": "<p>El ciclismo es el uso de la bicicleta como ejercicio, transporte o deporte. Es una de las actividades cardiovasculares más completas y populares.</p>\n<p><strong>Descripción:</strong></p>\n<p>Como ejercicio, el ciclismo es una actividad de <strong>bajo impacto</strong>, ideal para la salud del corazón y para proteger las articulaciones (rodillas, tobillos). Fortalece principalmente el tren inferior del cuerpo: cuádriceps, isquiotibiales, glúteos y pantorrillas. Se puede practicar al aire libre (ciclismo de ruta o de montaña) o en interiores, utilizando una bicicleta estacionaria o en clases de spinning.</p>",
    "category": 15,
    "equipment": [
      7
    ],
    "muscles": [
      14,
      9
    ],
    "muscles_secondary": [
      11,
      13,
      8,
      12,
      10
    ],
    "image_url": "https://live.staticflickr.com/3232/2509431325_5956163ce7_b.jpg"
  },
  {
    "id": 178,
    "name": "Bicho Muerto",
    "description": "<p>Este es un ejercicio fundamental para el control y la estabilidad del core, enfocado en mantener la espalda baja segura mientras se mueven las extremidades.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Acuéstate boca arriba con las caderas y rodillas flexionadas a 90° (posición de \"mesa\") y los brazos extendidos rectos hacia el techo.</p>\n<p><strong>La regla de oro:</strong> Presiona tu espalda baja contra el suelo para eliminar cualquier espacio. Esta conexión debe mantenerse durante todo el ejercicio.</p>\n<p>De forma lenta y controlada, baja tu brazo derecho y tu pierna izquierda simultáneamente, casi hasta tocar el suelo. Regresa a la posición inicial y alterna con el otro lado. Exhala profundamente a medida que extiendes las extremidades.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 182,
    "name": "Suspensiones en Regleta",
    "description": "<p>Este es un ejercicio fundamental en el entrenamiento para escalada, diseñado para desarrollar la fuerza máxima y la resistencia de los dedos.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>En una tabla de multipresas (hangboard), elije una regleta (borde) y cuélgate de ella. Mantén los brazos casi extendidos pero con una \"suspensión activa\": contrae los músculos de la espalda para mantener los hombros estables y lejos de las orejas.</p>\n<p>Sostén la posición por el tiempo indicado. Para ajustar la dificultad, puedes usar una regleta más pequeña, añadir peso con un cinturón de lastre, o quitar peso con una banda elástica.</p>",
    "category": 8,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 184,
    "name": "Peso Muerto Convencional",
    "description": "<p>Considerado uno de los ejercicios de fuerza más completos, es fundamental para desarrollar la cadena posterior (espalda, glúteos, isquiotibiales) y la fuerza general de todo el cuerpo. La técnica correcta es crucial.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Párate con los pies separados al ancho de las caderas, con la barra sobre la mitad de tus pies (casi tocando tus canillas/espinillas). Agáchate manteniendo la <strong>espalda completamente recta</strong> y el pecho erguido; sujeta la barra justo por fuera de tus piernas (puedes usar un agarre prono o mixto).</p>\n<p>Para levantar, empuja el suelo con las piernas y extiende la cadera y las rodillas simultáneamente, manteniendo la barra siempre pegada a tu cuerpo. En la posición final, párate completamente erguido y aprieta los glúteos, <strong>sin hiperextender la espalda hacia atrás</strong>. Baja la barra de forma controlada invirtiendo el movimiento.</p>",
    "category": 12,
    "equipment": [
      1
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://wger.de/media/exercise-images/184/1709c405-620a-4d07-9658-fade2b66a2df.jpeg"
  },
  {
    "id": 185,
    "name": "Press de Banca Declinado con Barra",
    "description": "<p>Esta variante del press de banca pone un mayor énfasis en la <strong>porción inferior</strong> de los músculos pectorales.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Acuéstate en un banco declinado y asegura tus piernas firmemente en los soportes. Sujeta la barra con un agarre un poco más ancho que tus hombros.</li>\n<li><strong>Descenso:</strong> Baja la barra de forma controlada hasta que toque la parte baja de tu pecho o el esternón.</li>\n<li><strong>Ascenso:</strong> Empuja la barra con fuerza hacia arriba hasta extender los brazos (sin bloquear los codos), concentrándote en apretar la parte baja del pectoral.</li>\n</ol>",
    "category": 11,
    "equipment": [
      1,
      8
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/100/Decline-bench-press-1.png"
  },
  {
    "id": 186,
    "name": "Press de Banca Declinado con Mancuernas",
    "description": "<p>Al usar mancuernas, esta variante del press declinado permite un rango de movimiento más natural y ayuda a desarrollar la estabilidad, enfocándose en la porción inferior de los pectorales.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Siéntate en un banco declinado sosteniendo un par de mancuernas sobre tus muslos. Asegura tus piernas en los soportes y luego acuéstate.</li>\n<li><strong>Inicio:</strong> Lleva las mancuernas a los costados de tu pecho con los brazos flexionados.</li>\n<li><strong>Ascenso:</strong> Empuja las mancuernas hacia arriba en un movimiento de arco, juntándolas en el centro sobre la parte baja de tu pecho. Contrae los pectorales en la cima del movimiento.</li>\n<li><strong>Descenso:</strong> Baja las mancuernas de forma lenta y controlada por el mismo camino hasta sentir un estiramiento en el pecho.</li>\n</ol>",
    "category": 11,
    "equipment": [
      8,
      3
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8187/8114102549_f7513ca335_b.jpg"
  },
  {
    "id": 189,
    "name": "Peso Muerto con Déficit",
    "description": "<p>Esta es una variante avanzada del peso muerto que se realiza de pie sobre un disco o plataforma para aumentar el rango de movimiento. Su principal objetivo es desarrollar más fuerza en el despegue inicial del suelo (la parte más baja del levantamiento).</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Párate sobre un disco o una plataforma baja y estable (generalmente de 2 a 5 cm de altura) con la barra sobre tus pies. Con la <strong>espalda completamente recta</strong>, baja y sujeta la barra con tu agarre habitual (prono o mixto).</p>\n<p>La ejecución es la misma que la de un peso muerto convencional: mantén la barra pegada a tu cuerpo, el pecho erguido y empuja con las piernas para extender la cadera y las rodillas simultáneamente. Regresa de forma controlada a la posición inicial.</p>",
    "category": 12,
    "equipment": [
      1
    ],
    "muscles": [],
    "muscles_secondary": [
      11,
      8,
      12,
      6,
      15
    ],
    "image_url": "https://images.rawpixel.com/editor_1024/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDk4OTM0LWltYWdlLWt3dnkzcGxlLmpwZw.jpg"
  },
  {
    "id": 193,
    "name": "Press Diagonal para Hombros",
    "description": "<p>Este ejercicio se realiza en una máquina convergente específica que permite un movimiento de empuje en un ángulo diagonal, situándose a medio camino entre un press de banca y un press militar. Es ideal para trabajar los hombros, especialmente la cabeza anterior del deltoides, minimizando la implicación del pectoral.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Siéntate en la máquina con la espalda firmemente apoyada en el respaldo, que debe tener una ligera inclinación hacia atrás.</p>\n<p>Sujeta los agarres y empújalos hacia adelante y hacia arriba en la trayectoria diagonal que marca la máquina, hasta que tus brazos estén casi completamente extendidos. Haz una pausa contrayendo los hombros y regresa de forma lenta y controlada a la posición inicial.</p>",
    "category": 13,
    "equipment": [
      8
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8334/8114106482_85830f16c1_b.jpg"
  },
  {
    "id": 194,
    "name": "Fondos en Paralelas",
    "description": "<p>Los fondos son un ejercicio fundamental con peso corporal para desarrollar fuerza de empuje, enfocándose en el pecho, los tríceps y los hombros. La forma en que se realiza determina qué músculo se lleva el mayor énfasis.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Sostén tu cuerpo sobre las barras paralelas con los brazos completamente extendidos.</li>\n<li><strong>Descenso:</strong> Flexiona los codos y baja tu cuerpo de forma controlada hasta que tus hombros queden ligeramente por debajo de tus codos, sintiendo un estiramiento en el pecho.</li>\n<li><strong>Ascenso:</strong> Empuja con fuerza para volver a la posición inicial hasta extender los brazos.</li>\n</ol>\n<p><strong>Para enfocar en el pecho:</strong> Usa un agarre más ancho, inclina el torso hacia adelante durante el movimiento y permite que los codos se abran un poco.\n<strong>Para enfocar en los tríceps:</strong> Usa un agarre al ancho de los hombros, mantén el torso lo más vertical posible y los codos pegados al cuerpo.</p>",
    "category": 11,
    "equipment": [
      7
    ],
    "muscles": [
      4,
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/194/34600351-8b0b-4cb0-8daa-583537be15b0.png"
  },
  {
    "id": 197,
    "name": "Fondos entre Bancos",
    "description": "<p>Esta es una excelente variante de los fondos para aislar y trabajar los tríceps utilizando únicamente bancos y tu peso corporal.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Coloca dos bancos paralelos entre sí. Siéntate en uno y apoya las palmas de tus manos en el borde, junto a tu cadera. Extiende las piernas y apoya los talones sobre el otro banco. Levanta la cadera del banco, sosteniendo tu peso con los brazos.</li>\n<li><strong>Descenso:</strong> Manteniendo los codos apuntando hacia atrás, flexiónalos para bajar tu cuerpo de forma controlada hasta que sientas un buen estiramiento en los tríceps (aproximadamente a un ángulo de 90 grados en el codo).</li>\n<li><strong>Ascenso:</strong> Empuja con fuerza a través de las palmas de tus manos para volver a la posición inicial, contrayendo los tríceps. Evita extender por completo los codos en la parte alta para mantener la tensión.</li>\n</ol>\n<p><em>(Para hacerlo más difícil, pide a un compañero que coloque un disco sobre tus muslos. Para hacerlo más fácil, apoya los pies en el suelo con las rodillas flexionadas).</em></p>",
    "category": 8,
    "equipment": [
      8
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/83/Bench-dips-1.png"
  },
  {
    "id": 202,
    "name": "Curl de concentración con mancuerna",
    "description": "<p>Siéntate en un banco. Coge la mancuerna entre los pies. Apoya la parte posterior del brazo superior en la cara interna del muslo. Inclínate sobre la pierna para elevar ligeramente el codo.</p>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      13
    ],
    "muscles_secondary": [
      1
    ],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 203,
    "name": "Sentadilla con disco",
    "description": "<p>Tipos de sentadillas con disco\nGoblet Squat:\nEs la sentadilla con disco más común, donde el disco se sostiene a la altura del pecho, ayudando a mantener una buena postura y mejorando la estabilidad del tobillo.&nbsp;\nOverhead Plate Squat:\nEn esta variación, el disco se mantiene por encima de la cabeza durante todo el movimiento de la sentadilla, lo que aumenta la demanda de movilidad y estabilidad del hombro.</p>",
    "category": 9,
    "equipment": [
      3
    ],
    "muscles": [
      10
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/203/1c052351-2af0-4227-aeb0-244008e4b0a8.jpeg"
  },
  {
    "id": 204,
    "name": "Curl Inclinado con Mancuernas",
    "description": "<p>Este ejercicio es excelente para un estiramiento profundo y una contracción máxima del bíceps, gracias al ángulo del banco y la posición de los brazos.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Siéntate en un banco inclinado (a unos 45-60 grados) con una mancuerna en cada mano. Deja que los brazos cuelguen rectos a los costados, con las palmas de las manos mirándose entre sí (agarre neutro).</li>\n<li><strong>Movimiento:</strong> Manteniendo la parte superior del brazo inmóvil, flexiona un codo para levantar la mancuerna. A medida que subes, rota la muñeca para que la palma de la mano termine mirando hacia tu hombro.</li>\n<li><strong>Contracción:</strong> Aprieta el bíceps en la cima del movimiento. Baja la mancuerna de forma lenta y controlada, invirtiendo la rotación, y luego repite con el otro brazo. Continúa alternando.</li>\n</ol>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [
      13
    ],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 205,
    "name": "Zancadas con Mancuernas",
    "description": "<p>Esta es la versión clásica de las zancadas, ideal para fortalecer piernas y glúteos (cuádriceps, femorales y glúteos). El uso de mancuernas facilita el equilibrio y reduce la carga directa sobre la columna en comparación con la barra.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> De pie, con la espalda recta, sostén una mancuerna en cada mano a los costados de tu cuerpo con los brazos extendidos.</li>\n<li><strong>Movimiento:</strong> Da un paso largo hacia adelante con una pierna. Baja tu cadera de forma controlada hasta que ambas rodillas estén cerca de formar un ángulo de 90 grados, sin que la rodilla de atrás toque el suelo.</li>\n<li><strong>Regreso:</strong> Manteniendo el torso erguido, empuja con fuerza a través del talón del pie delantero para volver a la posición inicial. Alterna las piernas en cada repetición.</li>\n</ol>",
    "category": 9,
    "equipment": [
      3
    ],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://live.staticflickr.com/4323/35986604152_6c88ed4c42_b.jpg"
  },
  {
    "id": 206,
    "name": "Zancadas Caminando con Mancuernas",
    "description": "<p>Esta es la variante dinámica de las zancadas. Al avanzar con cada paso en lugar de permanecer en el mismo sitio, se incrementa el trabajo de estabilización, equilibrio y coordinación.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> De pie, con la espalda recta, sostén una mancuerna en cada mano a los costados de tu cuerpo.</li>\n<li><strong>Zancada:</strong> Da un paso largo hacia adelante. Baja la cadera de forma controlada hasta que ambas rodillas se flexionen en un ángulo de aproximadamente 90 grados. La rodilla de atrás debe quedar cerca del suelo, sin tocarlo.</li>\n<li><strong>Avance:</strong> Manteniendo el torso erguido, impúlsate hacia adelante: presiona con el talón del pie delantero para ponerte de pie y dar inmediatamente el siguiente paso con la otra pierna. Continúa \"caminando\" con zancadas de forma fluida.</li>\n</ol>",
    "category": 9,
    "equipment": [
      3
    ],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://wger.de/media/exercise-images/113/Walking-lunges-1.png"
  },
  {
    "id": 208,
    "name": "Curl con Mancuernas en Banco Scott",
    "description": "<p>Este ejercicio utiliza el banco Scott (o banco predicador) para aislar completamente el bíceps, eliminando cualquier impulso o ayuda de los hombros y la espalda. Usar mancuernas permite un movimiento más natural para la muñeca y un trabajo unilateral.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Siéntate en el banco Scott y ajusta la altura para que la parte posterior de tu brazo (desde el codo hasta la axila) quede completamente apoyada sobre la almohadilla.</li>\n<li><strong>Movimiento:</strong> Sostén una mancuerna con agarre supino (palma hacia arriba). Baja el peso de forma controlada hasta que tu brazo esté casi completamente extendido, sintiendo el estiramiento en el bíceps.</li>\n<li><strong>Contracción:</strong> Sube la mancuerna en un arco, contrayendo el bíceps con fuerza en la parte alta del movimiento. Concéntrate en que la parte superior de tu brazo no se despegue de la almohadilla en ningún momento.</li>\n</ol>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 211,
    "name": "Press Francés con Mancuerna",
    "description": "<p>Este ejercicio es excelente para aislar los tríceps, con un énfasis especial en la cabeza larga del músculo debido a la posición de los brazos sobre la cabeza, lo que permite un mayor estiramiento.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Preferiblemente sentado en un banco, sostén una mancuerna en posición vertical con ambas manos (usando un agarre de \"copa\" o diamante) y elévala por encima de tu cabeza.</li>\n<li><strong>Descenso:</strong> Manteniendo la parte superior de los brazos inmóvil y los codos apuntando al techo, baja la mancuerna por detrás de tu cabeza flexionando los codos hasta sentir un estiramiento profundo en los tríceps.</li>\n<li><strong>Ascenso:</strong> Extiende los codos para volver a la posición inicial, contrayendo con fuerza los tríceps en la parte final del movimiento.</li>\n</ol>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [
      2,
      4
    ],
    "image_url": "https://live.staticflickr.com/8334/8114106482_85830f16c1_b.jpg"
  },
  {
    "id": 222,
    "name": "Jalón a la Cara",
    "description": "<p>Este es un ejercicio fundamental para la salud de los hombros, la corrección de la postura y el fortalecimiento de la espalda alta (deltoides posteriores, romboides y trapecios).</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Ajusta una polea con un agarre de cuerda (soga) a la altura de tu pecho o cara. De pie, toma los extremos de la cuerda y da un paso hacia atrás para generar tensión.</p>\n<p>Jala la cuerda directamente hacia tu cara. La clave del movimiento es pensar en dos cosas a la vez: <strong>jalar hacia ti y separar los extremos de la cuerda</strong> hacia los lados. Al final del recorrido, tus manos deben quedar a la altura de tus orejas, con los nudillos apuntando hacia atrás.</p>\n<p>Sostén la contracción de la espalda alta por un segundo y regresa de forma lenta y controlada a la posición inicial.</p>",
    "category": 13,
    "equipment": [
      12
    ],
    "muscles": [
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48834290862_b2cefd3954_b.jpg"
  },
  {
    "id": 235,
    "name": "Patadas de Aleteo",
    "description": "<p>Este ejercicio se enfoca en la resistencia de los abdominales inferiores y los flexores de la cadera. Aunque a veces se confunde con las \"tijeras\" (que son movimientos más amplios), el aleteo consiste en patadas cortas y rápidas.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Acuéstate boca arriba, con las piernas estiradas. Puedes colocar las manos debajo de los glúteos para dar soporte a la espalda baja.</p>\n<p>Levanta las piernas rectas del suelo unos 15 cm. Desde esa posición, realiza patadas verticales, cortas y rápidas de forma alterna, como el aleteo de un nadador. Es fundamental mantener la espalda baja presionada contra el suelo en todo momento.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      14,
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 237,
    "name": "Cruce de Poleas para Pecho",
    "description": "<p>Este ejercicio de aislamiento es excelente para lograr una fuerte contracción y estiramiento en los músculos pectorales, enfocándose en la parte interna del pecho.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> En una estación de poleas, ajusta ambas poleas a una posición alta. Toma un agarre en cada mano, da un paso al frente para generar tensión y mantén el torso ligeramente inclinado hacia adelante.</li>\n<li><strong>Movimiento:</strong> Con una ligera pero constante flexión en los codos, junta las manos al frente y abajo de tu cuerpo en un movimiento de arco amplio, como si estuvieras abrazando un árbol.</li>\n<li><strong>Contracción:</strong> Aprieta el pecho con fuerza en el punto de máxima contracción. Regresa de forma lenta y controlada a la posición inicial, sintiendo cómo se estira el pectoral.</li>\n</ol>",
    "category": 11,
    "equipment": [
      12
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/122/Incline-cable-flyes-1.png"
  },
  {
    "id": 238,
    "name": "Aperturas con Mancuernas",
    "description": "<p>Este es un ejercicio de aislamiento clásico, excelente para estirar las fibras musculares del pecho y lograr una fuerte contracción, ideal para trabajar la amplitud pectoral.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Acuéstate en un banco plano con los pies firmes en el suelo y la espalda bien apoyada. Sostén las mancuernas directamente sobre tu pecho con las palmas de las manos enfrentadas.</li>\n<li><strong>Apertura:</strong> Manteniendo una ligera y constante flexión en los codos, baja las mancuernas hacia los lados en un arco amplio y controlado, hasta que sientas un buen estiramiento en el pecho.</li>\n<li><strong>Cierre:</strong> Regresa a la posición inicial siguiendo el mismo arco y apretando los pectorales, como si estuvieras dando un gran abrazo. El movimiento debe ser fluido y controlado.</li>\n</ol>",
    "category": 11,
    "equipment": [
      3
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/238/2fc242d3-5bdd-4f97-99bd-678adb8c96fc.png"
  },
  {
    "id": 239,
    "name": "Aperturas con Mancuernas Declinadas",
    "description": "<p>Esta variante de las aperturas enfoca el trabajo de estiramiento y contracción en la <strong>porción inferior de los músculos pectorales</strong> debido al ángulo del banco.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Siéntate en un banco declinado con un par de mancuernas sobre tus muslos. Asegura tus piernas en los soportes y acuéstate. Sostén las mancuernas sobre tu pecho con los brazos casi extendidos y las palmas de las manos enfrentadas.</li>\n<li><strong>Apertura:</strong> Con una ligera flexión constante en los codos, baja las mancuernas hacia los lados en un arco amplio y controlado, hasta que sientas un buen estiramiento en el pecho.</li>\n<li><strong>Cierre:</strong> Regresa las mancuernas a la posición inicial siguiendo el mismo arco, como si estuvieras dando un gran abrazo. Concéntrate en apretar los músculos del pecho para realizar el movimiento.</li>\n</ol>",
    "category": 11,
    "equipment": [
      8,
      3
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 245,
    "name": "Press Francés con Mancuernas",
    "description": "<p>Este ejercicio, también conocido como \"rompecráneos\" (<em>skullcrushers</em>), es uno de los más efectivos para aislar y añadir masa a los tríceps, con un gran enfoque en la cabeza larga del músculo.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Acuéstate en un banco plano. Sostén un par de mancuernas sobre tu pecho con un agarre neutro (palmas enfrentadas) y luego inclina los brazos ligeramente hacia atrás de la vertical. Esta inclinación es clave para mantener una tensión constante sobre el tríceps.</li>\n<li><strong>Descenso:</strong> Manteniendo la parte superior de los brazos completamente inmóvil en ese ángulo, flexiona únicamente los codos para bajar las mancuernas a los costados de tu cabeza hasta sentir un buen estiramiento.</li>\n<li><strong>Ascenso:</strong> Extiende los codos para volver a la posición inicial, enfocándote en contraer con fuerza los tríceps. El único movimiento debe provenir de la articulación del codo.</li>\n</ol>",
    "category": 8,
    "equipment": [
      8,
      3
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8334/8114106482_85830f16c1_b.jpg"
  },
  {
    "id": 246,
    "name": "Press Francés con Barra SZ",
    "description": "<p>Este ejercicio, popularmente conocido como \"rompecráneos\" (<em>skullcrusher</em>), es uno de los más efectivos para añadir masa y fuerza a los tríceps. El uso de la barra SZ (o EZ) reduce la tensión sobre las muñecas en comparación con una barra recta.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Acuéstate en un banco plano. Sujeta una barra SZ sobre tu pecho con un agarre cerrado (manos en las curvas interiores de la barra) y los brazos extendidos.</li>\n<li><strong>Descenso:</strong> Manteniendo la parte superior de los brazos inmóvil y perpendicular al suelo, flexiona únicamente los codos para bajar la barra de forma controlada en dirección a tu frente.</li>\n<li><strong>Ascenso:</strong> Justo antes de que la barra toque tu frente, empújala de vuelta a la posición inicial extendiendo los codos. Concéntrate en apretar los tríceps al final del movimiento.</li>\n</ol>",
    "category": 8,
    "equipment": [
      8,
      2
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/84/Lying-close-grip-triceps-press-to-chin-1.png"
  },
  {
    "id": 254,
    "name": "Elevaciones Frontales con Disco",
    "description": "<p>La elevación frontal con disco es una variante de la elevación frontal con mancuerna en la que sujetas un disco entre las dos manos, en lugar de usar una mancuerna, una barra u otro peso. Puede aportar variedad en un entrenamiento de hipertrofia centrado en los hombros, o como parte de un circuito de tren superior o de cuerpo completo.</p>\n<ol>\n<li>De pie y erguido, sujeta un disco con ambas manos en las posiciones de las 3 y las 9 del reloj. Las palmas deben mirarse entre sí y los brazos deben estar extendidos y bloqueados con una ligera flexión en los codos, y el disco debe quedar abajo, cerca de tu cintura y por delante de ti, tan lejos como puedas. <strong>Consejo</strong>: Los brazos permanecerán en esta posición durante todo el ejercicio. Esta será tu posición inicial.</li>\n<li>Eleva lentamente el disco mientras exhalas hasta que quede un poco por encima de la altura de los hombros. Mantén la contracción durante un segundo. Mientras inhalas, baja lentamente el disco de nuevo hasta la posición inicial.</li>\n<li>Repite el número de repeticiones recomendado.</li>\n</ol>",
    "category": 13,
    "equipment": [],
    "muscles": [
      2,
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dumbbell-lateral-raises-1.png"
  },
  {
    "id": 256,
    "name": "Elevaciones frontales",
    "description": "<p>Para ejecutar el ejercicio, el levantador se para con los pies separados al ancho de los hombros y las pesas o los mangos de resistencia se sostienen a los lados con un agarre en pronación (por encima de la cabeza).\nEl movimiento consiste en llevar los brazos por delante del cuerpo a la altura de los ojos y con sólo una ligera flexión del codo. Esto aísla el músculo deltoides anterior (frente al hombro) y utiliza el deltoides anterior para levantar el peso.\nAl levantar es importante mantener el cuerpo inmóvil para que el deltoides anterior se utilice por completo; si el peso no se puede levantar estando quieto, entonces es demasiado pesado y se necesita un peso menor. Es importante mantener una ligera flexión en el codo al levantar, ya que mantener el codo trabado agregará tensión a la articulación del codo y podría causar lesiones.\nTambién se puede usar un agarre neutral, similar al que se usa en el curl de martillo. Con esta variación, el peso se eleva nuevamente al nivel de los ojos, pero en un ángulo de 45 grados desde la parte frontal del cuerpo. Esto puede ser beneficioso para las personas con lesiones en el hombro, en particular las relacionadas con el manguito de los rotadores.</p>",
    "category": 13,
    "equipment": [
      1,
      3
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/256/b7def5bc-2352-499b-b9e5-fff741003831.png"
  },
  {
    "id": 257,
    "name": "Sentadilla Frontal",
    "description": "<p>Contrario a la creencia popular, esta variante de la sentadilla pone un énfasis mucho mayor en los <strong>cuádriceps</strong> y en la <strong>fuerza del core</strong> (abdominales y espalda alta), ya que la posición de la barra obliga a mantener el torso extremadamente erguido.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Sostén la barra sobre la parte frontal de tus hombros (deltoides). Puedes usar un agarre de levantamiento olímpico (\"clean grip\", con los codos apuntando al frente) o cruzando los brazos para estabilizar la barra.</li>\n<li><strong>Descenso:</strong> Manteniendo el pecho y los codos elevados en todo momento, baja a una sentadilla profunda. El torso debe permanecer lo más vertical posible durante todo el recorrido.</li>\n<li><strong>Ascenso:</strong> Empuja con fuerza a través de tus piernas (enfocándote en los cuádriceps) para volver a la posición inicial.</li>\n</ol>",
    "category": 9,
    "equipment": [
      1
    ],
    "muscles": [
      8
    ],
    "muscles_secondary": [
      6
    ],
    "image_url": "https://wger.de/media/exercise-images/191/Front-squat-1-857x1024.png"
  },
  {
    "id": 260,
    "name": "Sit Outs completos",
    "description": "<p>(A) Colócate en posición de plancha alta sobre las manos y los dedos de los pies. (B) Desplaza el peso hacia la mano izquierda mientras giras el cuerpo hacia la derecha; flexiona la pierna derecha por detrás de ti y extiende el brazo derecho hacia arriba. Vuelve al centro y repite hacia el lado contrario. Continúa alternando los lados. <strong>Para hacerlo más fácil:</strong> no eleves el brazo después de flexionar la pierna por detrás. <strong>Para hacerlo más difícil:</strong> mantén el equilibrio con el brazo y la pierna extendidos durante dos tiempos.</p>",
    "category": 10,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      14,
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 265,
    "name": "Puente de glúteos",
    "description": "<p>Túmbate boca arriba con las caderas y las rodillas flexionadas y los pies en el suelo. Desde esta posición, eleva los glúteos del suelo hasta una altura en la que tu cuerpo forme una línea recta desde las rodillas hasta los hombros. Para hacer el ejercicio más intenso, puedes añadir peso dejando que una barra repose sobre tus caderas mientras realizas el movimiento, o puedes apoyar los pies sobre una superficie algo más elevada, como un escalón o un banco.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      8
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://wger.de/media/exercise-images/265/7528acb4-b2cc-4b75-b6ae-d514cbd4f78b.png"
  },
  {
    "id": 272,
    "name": "Curl Martillo",
    "description": "<p>Esta variante del curl utiliza un agarre neutro (como si sostuvieras un martillo) para enfocar el trabajo en el músculo braquial (ubicado debajo del bíceps) y el antebrazo (braquiorradial), lo que ayuda a dar más grosor y densidad al brazo.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> De pie o sentado, sostén un par de mancuernas a los costados de tu cuerpo con las palmas de las manos mirándose entre sí (agarre neutro).</li>\n<li><strong>Movimiento:</strong> Manteniendo los codos fijos a los costados de tu torso, levanta las mancuernas hasta la altura de los hombros. La clave es <strong>no rotar las muñecas</strong> en ningún momento; la orientación de las palmas no cambia.</li>\n<li><strong>Tempo:</strong> Sube el peso de forma potente y bájalo de manera lenta y controlada para maximizar la tensión muscular. Evita balancear el cuerpo.</li>\n</ol>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/86/Bicep-hammer-curl-1.png"
  },
  {
    "id": 275,
    "name": "Biceps concentrado martillo con cable",
    "description": "<p>Ejecución 1. Realice la posición inicial. 2. Mantenga el agarre firme en todo momento, suba hasta la altura de los hombros, y hasta que ambos brazos queden flexionados. Exhale y contraiga los bíceps. 3. Luego baje lentamente, buscando que sus brazos se encuentren totalmente extendidos. En este punto inhale. 4. Repita las veces que desee.</p>",
    "category": 8,
    "equipment": [
      12
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [
      13
    ],
    "image_url": "https://wger.de/media/exercise-images/138/Hammer-curls-with-rope-1.png"
  },
  {
    "id": 279,
    "name": "Fortalecedor de Agarre",
    "description": "<p>Esta herramienta, comúnmente llamada \"hand grip\", está diseñada para aislar y desarrollar la fuerza de agarre (<em>crushing strength</em>) y los músculos flexores del antebrazo.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Sostén el \"hand grip\" firmemente en una mano.</li>\n<li><strong>Contracción:</strong> Aprieta con la máxima fuerza posible, intentando que los dos mangos se toquen. Concéntrate en la presión que ejercen tus dedos y la palma de tu mano.</li>\n<li><strong>Regreso:</strong> Sostén la contracción por uno o dos segundos y luego abre la mano de forma lenta y controlada. Es crucial resistir la tensión del resorte en la fase de apertura para trabajar el músculo de forma completa.</li>\n</ol>",
    "category": 8,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/279/36605bc8-d7e1-43e1-87c1-b9cb50db62b2.webp"
  },
  {
    "id": 282,
    "name": "Flexiones en pino",
    "description": "<p>La flexión en pino, también llamada flexión vertical o flexión invertida, es un tipo de flexión en el que el cuerpo se coloca en posición de pino. Para un pino real, el ejercicio se realiza de forma libre, manteniéndose en el aire. Para desarrollar la fuerza hasta lograr el equilibrio adecuado, los pies a menudo se apoyan contra una pared, los sujeta un compañero o se aseguran de alguna otra forma para evitar la caída. Las flexiones en pino requieren una fuerza considerable, así como equilibrio y control si se realizan de forma libre.</p>",
    "category": 13,
    "equipment": [
      7
    ],
    "muscles": [
      2,
      5
    ],
    "muscles_secondary": [
      9
    ],
    "image_url": "https://wger.de/media/exercise-images/282/f6121ac9-330e-4ed7-8219-91ce246bf871.png"
  },
  {
    "id": 283,
    "name": "Elevaciones de Piernas (Colgado)",
    "description": "<p>Este es uno de los ejercicios más efectivos y desafiantes para la parte baja del abdomen y los flexores de cadera. La dificultad varía según si las piernas se mantienen rectas o flexionadas.</p>\n<p>Instrucciones</p>\n<p>Cuélgate de una barra con los brazos completamente extendidos y el cuerpo estable.</p>\n<ul>\n<li><strong>Versión con Rodillas Flexionadas (más fácil):</strong> Contrae el abdomen y eleva las rodillas hacia tu pecho, manteniendo las piernas dobladas.</li>\n<li><strong>Versión con Piernas Rectas (más difícil):</strong> Manteniendo las piernas estiradas, elévalas hasta que queden paralelas al suelo (formando una \"L\") o tan alto como puedas.</li>\n</ul>\n<p>En ambas versiones, la clave es <strong>minimizar el balanceo</strong> y bajar las piernas de forma lenta y controlada.</p>",
    "category": 10,
    "equipment": [
      6
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dumbbell-lateral-raises-1.png"
  },
  {
    "id": 284,
    "name": "Hercules Pillars",
    "description": "<p>Grab two cables stand in the middle so both have tension and hold</p>",
    "category": 8,
    "equipment": [
      12
    ],
    "muscles": [
      1,
      13,
      5
    ],
    "muscles_secondary": [
      2
    ],
    "image_url": "https://live.staticflickr.com/1708/23786081844_b6c3637e0c_b.jpg"
  },
  {
    "id": 285,
    "name": "Saltos al Pecho",
    "description": "<p>Este es un ejercicio pliométrico de alta intensidad diseñado para desarrollar la máxima potencia y explosividad en el tren inferior.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Carga:</strong> De pie, con los pies al ancho de los hombros, baja rápidamente a una media sentadilla para tomar impulso.</li>\n<li><strong>Explosión:</strong> Desde el fondo de la sentadilla, salta verticalmente con la mayor fuerza posible. En el punto más alto del salto, lleva las rodillas hacia el pecho (en una posición agrupada o \"tuck\").</li>\n<li><strong>Aterrizaje:</strong> Aterriza de forma suave sobre la parte delantera de los pies, flexionando inmediatamente las rodillas y la cadera para absorber el impacto. Desde ahí, puedes encadenar la siguiente repetición.</li>\n</ol>",
    "category": 15,
    "equipment": [],
    "muscles": [
      11,
      7,
      10,
      15
    ],
    "muscles_secondary": [
      14,
      6,
      3
    ],
    "image_url": "https://wger.de/media/exercise-images/285/4141e8b2-d9f2-4597-8ef0-7768127fd0ec.png"
  },
  {
    "id": 289,
    "name": "High pull",
    "description": "<p>Usa una barra ligera y realiza un tirón explosivo hacia arriba comenzando desde debajo del nivel de la rótula. Eleva/tira de forma explosiva usando la cadera, hasta la altura de los hombros. Tempo: 2111</p>",
    "category": 13,
    "equipment": [],
    "muscles": [
      2
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://live.staticflickr.com/7505/15494123789_eb8c26b65a_b.jpg"
  },
  {
    "id": 291,
    "name": "Sentadillas Hindúes",
    "description": "<p>Esta es una sentadilla fluida y dinámica con peso corporal, enfocada en la resistencia, el equilibrio y un rango de movimiento completo, a diferencia de una sentadilla tradicional con peso.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición Inicial:</strong> De pie, con los pies separados al ancho de los hombros y los brazos a los costados o ligeramente detrás de la espalda.</li>\n<li><strong>Descenso:</strong> Inicia el descenso y, al mismo tiempo, levanta los talones del suelo. Baja a una sentadilla profunda mientras balanceas los brazos hacia atrás. Mantén el torso lo más vertical posible.</li>\n<li><strong>Ascenso:</strong> Sube de forma explosiva, balanceando los brazos hacia adelante y hacia arriba para generar impulso. Los talones deben volver a apoyarse en el suelo justo al final del movimiento, cuando estás completamente de pie.</li>\n</ol>",
    "category": 9,
    "equipment": [],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 292,
    "name": "Elevación de cadera tumbado",
    "description": "<p>Túmbate boca arriba, con los pies apoyados en el suelo. Eleva la cadera de forma uniforme tan alto como puedas y mantén la posición todo el tiempo que puedas.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [
      8
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 294,
    "name": "Hip thrust con barra",
    "description": "<p>Este es considerado uno de los ejercicios más efectivos para desarrollar la fuerza y el tamaño de los músculos glúteos.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Siéntate en el suelo con la parte superior de tu espalda apoyada en el costado de un banco. Rueda una barra sobre tus piernas hasta que quede en el pliegue de tu cadera. Se recomienda usar una almohadilla (pad) para que el ejercicio sea más cómodo.</li>\n<li><strong>Inicio:</strong> Apoya los pies firmemente en el suelo, con las rodillas flexionadas. La parte alta de tu espalda debe funcionar como un pivote sobre el banco.</li>\n<li><strong>Empuje:</strong> Empujando a través de tus talones, eleva la cadera hacia el techo hasta que tu cuerpo forme una línea recta desde los hombros hasta las rodillas. Contrae los glúteos con fuerza en la posición final.</li>\n<li><strong>Descenso:</strong> Baja la cadera de forma controlada y repite el movimiento.</li>\n</ol>",
    "category": 9,
    "equipment": [
      1,
      8
    ],
    "muscles": [
      8
    ],
    "muscles_secondary": [],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/df/Barbell_pad_%28cropped%29.jpg"
  },
  {
    "id": 297,
    "name": "Hollow hold",
    "description": "<p>Colócate sobre una esterilla y túmbate boca arriba. Contrae los abdominales, estira los brazos y las piernas y elévalos (la cabeza y los hombros también se elevan). Asegúrate de que la zona lumbar permanezca en contacto con la esterilla.</p>",
    "category": 10,
    "equipment": [
      4
    ],
    "muscles": [
      14,
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/297/b10d3341-baa8-49ab-b462-5b3529389aac.png"
  },
  {
    "id": 301,
    "name": "Extensiones lumbares a 45°",
    "description": "<p>Túmbate sobre el cojín de hiperextensiones con el ombligo en el borde delantero, dejando que la parte superior del cuerpo cuelgue libremente. Tensa todos los músculos de la espalda y eleva el torso hasta quedar en horizontal, pero no más alto. Desciende lentamente, manteniendo un flujo constante de los músculos.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/301/2d5c2f99-b8ff-4095-b515-4c2a85afde70.png"
  },
  {
    "id": 308,
    "name": "Aperturas con mancuernas en banco inclinado",
    "description": "<p>Utiliza un banco inclinado. Sujeta las mancuernas con los brazos extendidos hacia los lados, con los codos ligeramente flexionados. Junta los brazos por encima de ti, manteniendo fijo el ángulo de los codos.</p>",
    "category": 11,
    "equipment": [
      3,
      9
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 310,
    "name": "Remo con mancuernas en banco inclinado",
    "description": "<ol>\n<li>Con un agarre neutro, apóyate sobre un banco inclinado.</li>\n<li>Toma una mancuerna en cada mano con agarre neutro, empezando con los brazos estirados. Esta será tu posición inicial.</li>\n<li>Retrae las escápulas y flexiona los codos para remar las mancuernas hacia tus costados.</li>\n<li>Haz una pausa en la parte superior del movimiento y luego vuelve a la posición inicial.</li>\n</ol>",
    "category": 12,
    "equipment": [
      3,
      9
    ],
    "muscles": [],
    "muscles_secondary": [
      12
    ],
    "image_url": "https://live.staticflickr.com/2207/2393321524_58bf2a6f7a_b.jpg"
  },
  {
    "id": 312,
    "name": "Plancha inclinada con toque alterno al suelo",
    "description": "<p>Realiza la plancha con las piernas elevadas y los pies sobre una pelota de gimnasia. Una vez estabilizado, desplaza lentamente un pie hacia un lado fuera de la pelota, haz que toque el suelo y luego vuelve a la posición inicial. Alterna con el otro pie.</p>\n<p>Este es un ejercicio de core.</p>",
    "category": 10,
    "equipment": [
      7
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14
    ],
    "image_url": "https://live.staticflickr.com/65535/51306639791_b76ca449a2_b.jpg"
  },
  {
    "id": 314,
    "name": "Limpiaparabrisas isométricos",
    "description": "<p>Adopta la posición de flexión, con las manos un poco más separadas que el ancho de los hombros.</p>\n<p>Desplaza el peso de tu cuerpo lo máximo posible hacia un lado, permitiendo que el codo de ese lado se flexione.</p>\n<p>Invierte el movimiento, desplazándote por completo hacia el otro lado.</p>\n<p>Vuelve a la posición inicial y repite el número de repeticiones que desees.</p>",
    "category": 11,
    "equipment": [
      7
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      6
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 319,
    "name": "Jogging",
    "description": "<p>Get your shoes on, go outside and start running at a moderate pace.</p>",
    "category": 15,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8004/7577206066_c529eb3e62.jpg"
  },
  {
    "id": 320,
    "name": "Polichilenas",
    "description": "<ol>\n<li>Párese con los pies juntos y los brazos a los lados</li>\n<li>Salte a una posición con las piernas abiertas y las manos tocandose por encima de la cabeza</li>\n<li>Repita</li>\n</ol>",
    "category": 9,
    "equipment": [],
    "muscles": [
      10
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/320/6c9124b6-3551-47a8-9c22-20141c8b9c53.png"
  },
  {
    "id": 323,
    "name": "Aperturas en polea",
    "description": "<p>Este ejercicio trabaja y tensa todo el músculo del pecho. Este entrenamiento de pecho es bueno, pero el equipo generalmente solo se encuentra en gimnasios públicos.</p>",
    "category": 11,
    "equipment": [
      12
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      2
    ],
    "image_url": "https://wger.de/media/exercise-images/71/Cable-crossover-2.png"
  },
  {
    "id": 331,
    "name": "Kettlebell Swings",
    "description": "<p>Sujeta la kettlebell con firmeza con ambas manos. Mantén la espalda recta durante todo el movimiento, evitando cualquier redondeo de la columna. Manteniendo las rodillas \"sueltas\", lleva la cadera hacia atrás, dejando que la kettlebell oscile entre tus rodillas.</p>\n<p>Debes flexionarte desde la cadera todo lo que puedas <em>sin dejar que la espalda se redondee hacia delante</em>. Luego, impulsa la cadera rápidamente hacia delante y ponte de pie erguido, fijando el cuerpo en una postura vertical.</p>\n<p>La velocidad con la que hagas esto hará que tus brazos y la kettlebell oscilen hacia arriba frente a ti. No intentes <em>levantar</em> la kettlebell con los brazos. El impulso de la cadera hacia delante hará que la kettlebell oscile hacia delante por el momentum. Según el peso de la kettlebell y la velocidad del movimiento de tu cadera, tus brazos oscilarán hasta aproximadamente la altura de los hombros. En la parte alta de este balanceo, deja que la cadera vuelva a flexionarse hacia atrás mientras la kettlebell baja de nuevo entre tus piernas y al inicio de la siguiente repetición.</p>",
    "category": 9,
    "equipment": [
      10
    ],
    "muscles": [
      8
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://live.staticflickr.com/1164/3168783915_84ea860203_b.jpg"
  },
  {
    "id": 348,
    "name": "Elevación lateral con mancuernas",
    "description": "<p>Posición inicial De pie con los pies separados a la anchura de los hombros, los brazos a lo largo del cuerpo y una mancuerna en cada mano.</p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/148/lateral-dumbbell-raises-large-2.png"
  },
  {
    "id": 349,
    "name": "Remo lateral en polea a un brazo",
    "description": "<p>Coloca la polea a la altura de la cintura, comienza con el brazo cruzado sobre el abdomen y desplaza la mano hacia el otro lado y hacia afuera, un brazo cada vez.</p>",
    "category": 13,
    "equipment": [
      12
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/349/9d969203-9cb6-4d47-9c31-fef53bfe1de5.png"
  },
  {
    "id": 351,
    "name": "Elevaciones lateral a frontal",
    "description": "<p>-(1) Realiza una elevación lateral y haz una pausa en la parte alta del movimiento (2).</p>\n<p>-En lugar de bajar el peso, llévalo hacia el frente de tu cuerpo, de modo que parezca que estás en la posición alta de una elevación frontal. Esto lo lograrás con un movimiento de aperturas (Pec Fly), manteniendo los brazos rectos. (3)</p>\n<p>-Ahora baja el peso hacia los cuádriceps, es decir, baja las mancuernas como si completaras una repetición de elevación frontal. (4)</p>\n<p>-Invierte el movimiento: realiza una elevación frontal (5), en el punto más alto del movimiento usa un movimiento de aperturas inversas para colocar los pesos en la posición alta de una elevación lateral (6), y por último, baja los pesos hasta que las palmas prácticamente toquen los laterales de tus muslos (7). ESTO ES UNA REPETICIÓN.</p>\n<p>(1) l <em>vista frontal</em> (2) -l- <em>VF</em> (3) l- <em>vista lateral</em> (4) l <em>VL/VF</em> (5) l- <em>VL</em> (6) -l- <em>VF</em> (7) l <em>VF/VL</em></p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [
      2,
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dumbbell-lateral-raises-1.png"
  },
  {
    "id": 354,
    "name": "Jalón al pecho (inclinado)",
    "description": "<p>Con el cuerpo ligeramente inclinado hacia atrás y el agarre un poco más abierto de la altura de los hombros, tirar la barra hacia el pecho.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      12
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48834290862_b2cefd3954_b.jpg"
  },
  {
    "id": 355,
    "name": "Jalón al pecho",
    "description": "<p>El jalón al pecho es un ejercicio que se utiliza para desarrollar los músculos de la espalda. Aunque el ejercicio trabaja principalmente los dorsales, también notarás una considerable activación del bíceps y de la parte media de la espalda.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      12
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48834290862_b2cefd3954_b.jpg"
  },
  {
    "id": 364,
    "name": "Curl femoral",
    "description": "<p>El curl de piernas, también conocido como curl de isquiotibiales, es un ejercicio de aislamiento que se enfoca en los músculos isquiotibiales. El ejercicio consiste en flexionar la parte inferior de la pierna contra la resistencia hacia las nalgas. Otros ejercicios que se pueden utilizar para fortalecer los isquiotibiales son las elevaciones de glúteos y isquiotibiales y el peso muerto.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      11,
      8
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/364/b318dde9-f5f2-489f-940a-cd864affb9e3.png"
  },
  {
    "id": 365,
    "name": "Curl de piernas (tumbado)",
    "description": "<p>Túmbate en un banco y coloca los gemelos detrás del soporte para las piernas (mejor si quedan sujetos por la parte baja de los gemelos). Agárrate a las barras para asegurarte de que el cuerpo queda firmemente fijado. Flexiona las piernas llevando el peso hacia arriba y baja lentamente. Durante el ejercicio el cuerpo no debe moverse, todo el trabajo lo hacen las piernas.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      11
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/154/lying-leg-curl-machine-large-1.png"
  },
  {
    "id": 366,
    "name": "Curl femoral sentado",
    "description": "<p>Ajusta la palanca de la máquina para adaptarla a tu altura y siéntate en la máquina con la espalda contra la almohadilla de respaldo. Coloca los tobillos sobre los cojines , los muslos debajo del cojinete de sujeción justo por encima de las rodillas y las manos en los agarres.Al inspirar realiza una flexión de las rodillas. Mantener la espalda inmóvil en todo momento únicamente solo debe movilizarse&nbsp; los pies por la flexión de rodilla. Mantén la posición contraída por un segundo. Lentamente regresa a la posición inicial. Espirar al final del movimiento.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      11
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/117/seated-leg-curl-large-1.png"
  },
  {
    "id": 369,
    "name": "Curl cuadriceps",
    "description": "<p>La extensión de piernas es un ejercicio de entrenamiento con pesas de resistencia que se enfoca en el músculo cuádriceps de las piernas. El ejercicio se realiza utilizando una máquina llamada Leg Extension Machine. Hay varios fabricantes de estas máquinas y cada uno es ligeramente diferente. La mayoría de los gimnasios y salas de pesas tendrán la máquina en sus instalaciones. La extensión de piernas es un ejercicio aislado dirigido a un grupo muscular específico, los cuádriceps. No debe considerarse como un entrenamiento total de piernas, como la sentadilla o el peso muerto. El ejercicio consiste en doblar la pierna a la altura de la rodilla y extender las piernas, para luego volver a bajarlas a la posición original.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      10
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/369/78c915d1-e46d-4d30-8124-65d68664c3ef.png"
  },
  {
    "id": 371,
    "name": "Prensa de piernas",
    "description": "<p>La prensa de piernas es un ejercicio de entrenamiento con pesas en el que el individuo empuja un peso o una resistencia con las piernas.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      11,
      7,
      8,
      10
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/371/d2136f96-3a43-4d4c-9944-1919c4ca1ce1.webp"
  },
  {
    "id": 373,
    "name": "Prensa de piernas cerrada",
    "description": "<p>El ejercicio es muy similar a la prensa de pierna ancha:\nSiéntese en la máquina y coloque los pies en la plataforma tan separados que podría poner otro pie entre ellos. Los pies son paralelos y apuntan hacia arriba.\nBaje tanto el peso, que las rodillas formen un ángulo recto. Vuelva a empujar inmediatamente la plataforma hacia arriba, sin ninguna pausa. Cuando está en la posición más baja, las rodillas apuntan un poco hacia afuera y el movimiento debe ser siempre fluido.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://wger.de/media/exercise-images/373/60e2aa21-1910-40d3-9fed-babfee06dd48.png"
  },
  {
    "id": 374,
    "name": "Press de piernas abierto",
    "description": "<p>Siéntese en la máquina y coloque los pies en la plataforma, un poco más anchos que los hombros. Los pies están girados hacia afuera unos pocos grados.\nBaje tanto el peso, que las rodillas formen un ángulo recto. Vuelva a empujar inmediatamente la plataforma hacia arriba, sin ninguna pausa. Cuando está en la posición más baja, las rodillas apuntan un poco hacia afuera y el movimiento debe ser siempre fluido.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://live.staticflickr.com/8334/8114106482_85830f16c1_b.jpg"
  },
  {
    "id": 376,
    "name": "Levantamiento de piernas",
    "description": "<p>Posición inicial:</p>\n<p>Túmbate de espaldas, con los pies juntos y los brazos a los lados.</p>\n<p>Pasos:</p>\n<ol>\n<li>Dobla las rodillas y luego enderézalas para que apunten hacia arriba.</li>\n<li>Manteniendo las piernas rectas, bájalas juntas sin tocar el suelo. Cuanto más bajes, más intenso será el ejercicio.</li>\n<li>Sube las dos piernas juntas hasta que vuelvan a apuntar hacia arriba.</li>\n<li>Repite desde el paso 2.</li>\n</ol>",
    "category": 9,
    "equipment": [],
    "muscles": [
      14,
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 377,
    "name": "Elevaciones de piernas tumbado",
    "description": "<p>Túmbate en un banco y sujétate al respaldo con las manos para mantenerte estable. Mantén las piernas rectas y elévalas hasta que formen un ángulo de unos 45°. Haz una breve pausa de 1 seg. y baja lentamente hasta la posición inicial. Para aumentar la intensidad puedes hacer una pausa más larga de 7 seg. cada 5 repeticiones.</p>",
    "category": 10,
    "equipment": [
      4
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      3
    ],
    "image_url": "https://wger.de/media/exercise-images/125/Leg-raises-2.png"
  },
  {
    "id": 378,
    "name": "Elevaciones de piernas de pie",
    "description": "<p>Coloca los antebrazos sobre las almohadillas de la máquina de elevación de piernas, con el cuerpo colgando libremente. Eleva ahora las piernas con un movimiento rápido tan alto como puedas, haz una breve pausa de 1 seg. arriba y bájalas de nuevo. Asegúrate de que durante el ejercicio el cuerpo no se balancee, solo deben moverse las piernas.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      3
    ],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dumbbell-lateral-raises-1.png"
  },
  {
    "id": 379,
    "name": "Press de pecho con máquina",
    "description": "<p>Sentado en 90º escoger el peso en máquina y agarrar las manijas de atrás hacia adelante y volver a la posición inicial.\nAsegúrese de ajustar la altura del asiento de modo que las manijas queden hacia la parte inferior de los pectorales.</p>",
    "category": 11,
    "equipment": [],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8334/8114106482_85830f16c1_b.jpg"
  },
  {
    "id": 380,
    "name": "Leverage Machine Iso Row",
    "description": "<p>Adjust seat height so that the handles are at the bottom of your pectorals or just below.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      12
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 382,
    "name": "L Hold",
    "description": "<p>Hold the L position for as long as possible</p>",
    "category": 10,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/5506/10309531864_b65b1b55be_b.jpg"
  },
  {
    "id": 386,
    "name": "Flexiones diamante",
    "description": "<p>Inicio: Colócate en posición de plancha. Coloca las manos juntas debajo del pecho de modo que los pulgares y los índices formen la figura de un diamante.</p>\n<p>Bajada: Flexiona los codos para bajar el pecho hacia las manos. Mantén el cuerpo recto.</p>\n<p>Empuje: Empuja hacia arriba hasta que los brazos queden completamente extendidos.</p>\n<p>Nota: Mantén los codos cerca del cuerpo y el core activado.</p>",
    "category": 11,
    "equipment": [
      7
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      5
    ],
    "image_url": "https://live.staticflickr.com/8419/8703788718_9278041f2d_b.jpg"
  },
  {
    "id": 394,
    "name": "Remo sentado",
    "description": "<p>Siéntate, apoya los pies en los puntos de apoyo y agarra la barra con un agarre amplio. Tire de la pesa con un movimiento rápido hacia el ombligo, no hacia arriba. Durante el movimiento, mantén los brazos y los codos pegados al cuerpo. Junta los hombros. Deja que el peso baje lentamente hasta que tus brazos estén completamente estirados.</p>",
    "category": 12,
    "equipment": [
      12
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      1,
      13
    ],
    "image_url": "https://wger.de/media/exercise-images/394/5e0c015f-9e4c-4034-beea-b0afbf15d0bd.png"
  },
  {
    "id": 395,
    "name": "Remo en polea baja, agarre estrecho",
    "description": "<p>El ejercicio es el mismo que el remo en polea baja normal, pero con un agarre estrecho:</p>\n<p>Siéntate, apoya los pies en los puntos de apoyo y agarra la barra con un agarre amplio. Tira del peso con un movimiento rápido hacia el ombligo, no más arriba. Mantén los brazos y los codos cerca del cuerpo durante el movimiento. Junta las escápulas. Deja bajar el peso lentamente hasta que tus brazos queden completamente estirados.</p>",
    "category": 12,
    "equipment": [
      12
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      1,
      13
    ],
    "image_url": "https://live.staticflickr.com/2207/2393321524_58bf2a6f7a_b.jpg"
  },
  {
    "id": 397,
    "name": "Sentadilla a cajón bajo con stance ancho",
    "description": "<p>Saca la barra del soporte y coloca una postura ancha, más allá de las caderas. Empuja las caderas hacia atrás y siéntate en un cajón que te lleve por debajo de la paralela. Siéntate por completo, no hagas touch and go. Después, ponte de pie de forma explosiva. Mantén la parte alta de la espalda y el torso firmes durante todo el movimiento.</p>",
    "category": 9,
    "equipment": [
      1
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 406,
    "name": "Ejercicio del manguito rotador tumbado",
    "description": "<p>Este es un ejercicio para problemas del manguito rotador. Trabaja principalmente el infraespinoso y, de forma secundaria, el redondo menor.</p>\n<p>Túmbate de lado. Mantén el codo pegado a la cintura y en un ángulo de 90°. Rota hacia el estómago. Añade peso según te convenga.</p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 418,
    "name": "Press militar",
    "description": "<p>En una barra SZ, tome sus manos en el exterior de cada curva y párese con los brazos rectos hacia abajo, con las palmas hacia las piernas. Tire de la barra (doblando los brazos por el codo) hacia el pecho y empuje la barra por encima de la cabeza (los brazos lo más rectos posible). Regrese la barra a su pecho dejando caer los brazos a la altura de los codos. Regrese la barra a su posición original (párese con los brazos hacia abajo, las palmas hacia las piernas).</p>",
    "category": 13,
    "equipment": [
      2
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [
      9,
      5
    ],
    "image_url": "https://wger.de/media/exercise-images/418/fa2a2207-43cb-4dc0-bc2a-039e32544790.png"
  },
  {
    "id": 423,
    "name": "Muscle-up",
    "description": "<p>A continuación, el cuerpo se impulsa de forma explosiva con los brazos en una dominada potente, con mayor velocidad que una dominada normal. Cuando la barra se acerca a la parte alta del pecho, las muñecas se flexionan rápidamente para llevar los antebrazos por encima de la barra. El cuerpo se inclina hacia delante y los codos se estiran activando el tríceps. El movimiento se considera completo cuando la barra queda a la altura de la cintura y los brazos están totalmente estirados.</p>\n<p>Para bajar, se flexionan los brazos por el codo y el cuerpo desciende hacia el suelo, y el ejercicio puede repetirse.</p>\n<p>Al ser un ejercicio relativamente avanzado, los muscle-ups suelen aprenderse primero con un impulso de piernas (kip) de ayuda. Las piernas se balancean (kip) hacia arriba y aportan impulso para ayudar a generar la fuerza explosiva hacia arriba necesaria para ascender por encima de la barra. Los atletas más avanzados pueden realizar una variante estricta del muscle-up, que se hace lentamente y sin ningún impulso de piernas. Esta variante empieza desde una suspensión muerta e inmóvil y emplea la contracción muscular isométrica para ascender por encima de la barra de forma lenta y controlada.</p>",
    "category": 12,
    "equipment": [
      6
    ],
    "muscles": [
      1,
      12
    ],
    "muscles_secondary": [
      2,
      5
    ],
    "image_url": "https://live.staticflickr.com/2092/2517026291_9ab1210a60_b.jpg"
  },
  {
    "id": 427,
    "name": "Crunches negativos",
    "description": "<p>Siéntate en el banco declinado y fija las piernas. Cruza los brazos sobre el pecho y eleva el torso con un movimiento de enrollamiento; baja ahora de nuevo sin pausa y con un movimiento lento. No dejes que la cabeza se mueva durante el ejercicio.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/93/Decline-crunch-1.png"
  },
  {
    "id": 439,
    "name": "Overhand Cable Curl",
    "description": "<p>Hands at shoulder height, curl arms in toward head, then back out.</p>",
    "category": 10,
    "equipment": [
      12
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 441,
    "name": "Sentadilla por encima de la cabeza",
    "description": "<p>La barra se mantiene por encima de la cabeza con un agarre ancho de arrancada; sin embargo, también es posible usar un agarre más cerrado si el equilibrio lo permite.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      2,
      11,
      9
    ],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 445,
    "name": "Press de banca con pausa",
    "description": "<p>Baja la barra al pecho y haz una pausa (pero sin descansar) durante 2 segundos. Empuja de nuevo hacia arriba. Usa el mismo peso que usarías en el press de banca, pero realiza solo repeticiones individuales. Suma el número total de repeticiones que harías en una serie de press de banca (si hicieras 3 series de 8, haz 8 repeticiones individuales de press de banca con pausa).</p>",
    "category": 11,
    "equipment": [
      1,
      8
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      5
    ],
    "image_url": "https://live.staticflickr.com/8187/8114102549_f7513ca335_b.jpg"
  },
  {
    "id": 448,
    "name": "Remo Pendlay",
    "description": "<p>Ejercicio de espalda con barra cuya posición inicial es inclinada hacia delante, con la espalda paralela al suelo. La barra está en el suelo a la altura del pecho. Para el movimiento, agarra la barra con un agarre a la anchura de los hombros y tira hacia el pecho sin perder la posición inclinada y sin mover nada más que los brazos.</p>",
    "category": 12,
    "equipment": [
      1
    ],
    "muscles": [
      12,
      9
    ],
    "muscles_secondary": [
      1,
      5
    ],
    "image_url": "https://live.staticflickr.com/2207/2393321524_58bf2a6f7a_b.jpg"
  },
  {
    "id": 454,
    "name": "Flexiones de pica",
    "description": "<p>Posición de mirada fija:</p>\n<p>Perro mirando hacia abajo:Tu cuerpo debe hacer una forma de V, con la espalda, los brazos y las piernas rectas. Las caderas deben estar en el aire.Puedes llegar a esta posición caminando con las manos hacia atrás desde una plancha alta.</p>\n<p>Pasos:</p>\n<p>1.Dobla los codos hacia los lados, manteniendo la espalda y las piernas rectas y acercando la cabeza al suelo.</p>\n<ol>\n<li>Estira los brazos, empujando las caderas hacia atrás y manteniendo la espalda y las piernas rectas.</li>\n<li>\n<ol>\n<li>Repite la operación.</li>\n</ol>\n</li>\n</ol>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      5
    ],
    "image_url": "https://wger.de/media/exercise-images/454/447f3c17-405f-46e0-b138-65c2a8caaab0.png"
  },
  {
    "id": 456,
    "name": "Sentadillas en pistol izquierda",
    "description": "<ol>\n<li>Párese en una pierna, con la otra pierna estirada y ligeramente hacia adelante.</li>\n<li>Doble una rodilla lentamente, bajando en sentadilla y manteniendo la espalda y la otra pierna estirada.</li>\n<li>Levántese lentamente de la sentadilla, enderezando la rodilla doblada y manteniendo la otra pierna recta.</li>\n<li>Repita</li>\n</ol>",
    "category": 9,
    "equipment": [],
    "muscles": [
      11,
      8
    ],
    "muscles_secondary": [
      2,
      1,
      13
    ],
    "image_url": "https://wger.de/media/exercise-images/456/3b681e59-377b-40db-9113-ca5873ce084b.jpg"
  },
  {
    "id": 458,
    "name": "Plancha de antebrazo",
    "description": "<p>Posición de salida:</p>\n<ol>\n<li>Empiece a cuatro patas.Los brazos deben estar doblados en ángulo recto, con los hombros justo sobre los codos.La espalda debe estar recta, todo el cuerpo en línea recta.</li>\n</ol>\n<p>Pasos:</p>\n<ol>\n<li>Mantenga esta posición.</li>\n</ol>",
    "category": 10,
    "equipment": [
      7
    ],
    "muscles": [
      14,
      6
    ],
    "muscles_secondary": [
      1,
      10,
      5
    ],
    "image_url": "https://wger.de/media/exercise-images/458/b7bd9c28-9f1d-4647-bd17-ab6a3adf5770.png"
  },
  {
    "id": 465,
    "name": "Curl en banco Scott",
    "description": "<p>Coloca la barra Z sobre los soportes situados delante del banco Scott. Inclínate sobre el banco y agarra la barra Z con las palmas hacia arriba. Siéntate en el asiento del banco Scott de modo que la parte superior de los brazos descanse sobre la almohadilla y el pecho quede apoyado contra ella. Baja el peso hasta que los codos queden extendidos y los brazos rectos. Vuelve a subir los pesos hasta el punto inicial contrayendo los bíceps. Repite.</p>",
    "category": 8,
    "equipment": [
      2
    ],
    "muscles": [
      13
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/193/Preacher-curl-3-1.png"
  },
  {
    "id": 468,
    "name": "Retracción escapular en prono – brazos en cruz",
    "description": "<p>Túmbate boca abajo con la cabeza apoyada en una toalla.</p>\n<p>Estira los brazos rectos hacia los lados.</p>\n<p>Levanta lentamente los brazos, juntando las escápulas, y mantén la posición durante 3 segundos.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 475,
    "name": "Dominadas",
    "description": "<p>Toma la barra con los brazos a la altura de los hombros y las palmas de las manos hacia el frente. Intenta sacar el pecho, apretar el abdomen y tirar con las dorsales para elevarte hacia arriba hasta sobrepasar la barra con la barbilla intentando mantener el resto del cuerpo completamente estático</p>",
    "category": 12,
    "equipment": [
      6
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      2,
      1,
      9
    ],
    "image_url": "https://wger.de/media/exercise-images/475/b0554016-16fd-4dbe-be47-a2a17d16ae0e.jpg"
  },
  {
    "id": 478,
    "name": "Press de hombro con mancuernas",
    "description": "<p>El press de hombro con mancuernas es un\nejercicio fundamental para fortalecer los deltoides, tríceps y músculos estabilizadores, que se puede realizar sentado o de pie, implicando empujar mancuernas desde la altura de los hombros hasta la extensión casi completa de los brazos, manteniendo la espalda recta y los codos ligeramente hacia adelante para proteger el manguito rotador, y bajando de forma controlada</p>",
    "category": 13,
    "equipment": [],
    "muscles": [
      9
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://wger.de/media/exercise-images/478/70a2d72c-a822-45f3-8de2-54ea85951b84.jpg"
  },
  {
    "id": 484,
    "name": "Peso muerto en rack",
    "description": "<p>Peso muerto que se realiza con una máquina Smith o un rack libre. La barra debe quedar justo por debajo del nivel de la rótula. Levanta con los glúteos y a través de los talones, y luego vuelve a la posición inicial con un movimiento controlado de 2 segundos.</p>\n<p>Este ejercicio trabaja principalmente la zona lumbar y los glúteos.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      8
    ],
    "muscles_secondary": [
      1
    ],
    "image_url": "https://wger.de/media/exercise-images/161/Dead-lifts-2.png"
  },
  {
    "id": 487,
    "name": "Elevaciones de deltoides posterior",
    "description": "<p>Sentado en un banco con las mancuernas en el suelo, inclínate 45 grados hacia delante y luego eleva lentamente cada mancuerna hasta la altura de los hombros, manteniéndola un par de segundos antes de bajarla a la posición inicial.</p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/487/ad724e5c-b1ed-49e8-9279-a17545b0dd0b.png"
  },
  {
    "id": 490,
    "name": "Remo renegado",
    "description": "<p>Colócate en posición de flexión agarrando un par de mancuernas. Realiza una flexión y luego lleva el codo izquierdo hacia arriba, subiendo la mancuerna hacia tu cuerpo. Devuelve la mancuerna a la posición inicial.</p>\n<p>Realiza otra flexión y luego rema con el otro brazo para completar una repetición.</p>",
    "category": 12,
    "equipment": [
      3
    ],
    "muscles": [
      12,
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/2207/2393321524_58bf2a6f7a_b.jpg"
  },
  {
    "id": 493,
    "name": "Reverse Bar Curl",
    "description": "<p>Hold bar with reverse (or \"overhand\") grip, palms facing the floor.</p>",
    "category": 8,
    "equipment": [
      2
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 495,
    "name": "Curl invertido",
    "description": "<p>El curl con barra y agarre invertido es una variante del curl de bíceps en la que las palmas miran hacia abajo. El cambio de un agarre supino a un agarre prono involucra más en el ejercicio los músculos del antebrazo y el braquial.</p>",
    "category": 8,
    "equipment": [
      1,
      3
    ],
    "muscles": [
      1,
      13
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 498,
    "name": "Reverse Grip Bench Press",
    "description": "<p>Upper chest focuses exercise that also works triceps</p>",
    "category": 11,
    "equipment": [
      1,
      8
    ],
    "muscles": [
      4,
      5
    ],
    "muscles_secondary": [
      2
    ],
    "image_url": "https://live.staticflickr.com/8334/8114106482_85830f16c1_b.jpg"
  },
  {
    "id": 500,
    "name": "Reverse Plank",
    "description": "<p>Plank with stomach towards ceiling</p>",
    "category": 10,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 501,
    "name": "Ring Dips",
    "description": "<p>Dips peformed on gymnastic rings.</p>",
    "category": 8,
    "equipment": [],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 505,
    "name": "Crunch en silla romana",
    "description": "<p>Crunches en la silla romana. Mantén el torso recto y los abdominales contraídos, y no subas del todo hasta la vertical ni te tumbes completamente, para mantener una tensión constante en los abdominales.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 507,
    "name": "Peso muerto rumano con barra",
    "description": "<p>De pie con los pies separados a la anchura de los hombros y los dedos de los pies mirando hacia adelante. Dobla las rodillas ligeramente y empuja el pecho hacia afuera. Agarra una barra que descanse en la parte superior de los muslos, con las manos en pronación a la anchura de los hombros.</p>",
    "category": 9,
    "equipment": [
      1
    ],
    "muscles": [
      11,
      8
    ],
    "muscles_secondary": [
      9
    ],
    "image_url": "https://wger.de/media/exercise-images/507/13d526ab-12fc-461e-828a-051dd7c13fb1.png"
  },
  {
    "id": 508,
    "name": "Remo maquina abierto",
    "description": "<p>Remo en maquina o maquina de polea con barra ancha y agarre supino</p>",
    "category": 12,
    "equipment": [
      1,
      3,
      6
    ],
    "muscles": [
      12,
      9
    ],
    "muscles_secondary": [
      10
    ],
    "image_url": "https://live.staticflickr.com/2207/2393321524_58bf2a6f7a_b.jpg"
  },
  {
    "id": 512,
    "name": "Remo Gironda",
    "description": "<p>Coloca la polea en el peldaño más bajo de la máquina. Coloque los pies en los soportes disponibles, si no hay soporte, busca un step y colócalo delante de la máquina antes de colocar los pies en ella. Comienza con los brazos completamente extendidos, ya que este movimiento se dirige a los dorsales y esta posición es la que mejor compromete la zona. Mantén la cabeza, la espalda y la columna vertebral alineadas de forma neutra, con el pecho elevado y el núcleo comprometido. Con una pequeña flexión de las rodillas, tira del accesorio hacia tu cuerpo hasta justo debajo del ombligo, iniciando el movimiento llevando los codos hacia las caderas, manteniendo los codos dentro. Cuando el agarre (accesorio) llegue a tu torso, aprieta los dorsales y los omóplatos, manteniendo la contracción durante 1-2 segundos. Vuelve al principio y repite el número de repeticiones deseado.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      12
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/512/b938437e-ff00-4679-9036-acb41bb28bbd.png"
  },
  {
    "id": 513,
    "name": "Remo en \"T\"",
    "description": "<p>La ejecución de este ejercicio es muy similar a la del remo inclinado normal, solo que aquí la barra está fija.</p>\n<ol>\n<li>Agarra la barra con un agarre amplio (ligeramente más ancho que los hombros) e inclínate hacia delante. La parte superior del cuerpo no debe quedar totalmente paralela al suelo, sino formar un ligero ángulo. Mantén el pecho hacia fuera durante todo el ejercicio.</li>\n<li>Tira de la barra con un movimiento rápido hacia el ombligo, sin subirla más.</li>\n<li>Vuelve lentamente a la posición inicial.</li>\n</ol>\n<p>No balancees el cuerpo y mantén los brazos pegados al cuerpo.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      2,
      1,
      13
    ],
    "image_url": "https://wger.de/media/exercise-images/106/T-bar-row-1.png"
  },
  {
    "id": 527,
    "name": "Run",
    "description": "<p>Running or jogging outside in a park, on the tracks,...</p>",
    "category": 15,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 529,
    "name": "Run - Interval Training",
    "description": "<p>Run and do some interval trainings such as hill repat, fartlek,..</p>",
    "category": 15,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 530,
    "name": "Correr en cinta",
    "description": "<p>La caminadora, o cinta de correr, es una herramienta versátil para el ejercicio que permite caminar, trotar o correr a diferentes velocidades e inclinaciones. Se puede utilizar para mejorar la salud cardiovascular, fortalecer músculos, quemar calorías y aumentar la resistencia.</p>",
    "category": 15,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 537,
    "name": "Press inclinado con mancuernas",
    "description": "<p>Es una variante del press plano orientada a enfatizar el trabajo en el haz clavicular del pectoral (la sección superior). Al inclinar el torso, el ángulo de empuje cambia, transfiriendo más tensión hacia la parte alta del pecho y los hombros, lo que ayuda a conseguir un desarrollo más estético, equilibrado y tridimensional del torso.</p>\n<ol>\n<li>\n<p>Ajuste del banco y preparación: Coloca el banco a una inclinación de entre 30 y 45 grados (una inclinación mayor a 45° pasará demasiado esfuerzo al hombro y restará estímulo al pecho). Siéntate con una mancuerna sobre cada muslo.</p>\n</li>\n<li>\n<p>Posición de inicio: Túmbate hacia atrás apoyando la espalda en el respaldo, mientras usas las rodillas secuencialmente para impulsar las mancuernas hacia arriba, a la altura de tus hombros.</p>\n</li>\n<li>\n<p>Estabilización anatómica: Planta los pies firmemente en el suelo. Retrae las escápulas (junta los omóplatos y húndelos en el banco) para proteger los hombros y estabilizar la carga.</p>\n</li>\n<li>\n<p>Fase Excéntrica (Bajada): Baja las mancuernas de forma lenta y controlada hacia la parte superior de tu pecho. Los codos no deben abrirse en cruz (90°); mantén un ángulo seguro de unos 45 a 60 grados respecto a tu torso.</p>\n</li>\n<li>\n<p>Fase Concéntrica (Subida): Empuja las mancuernas verticalmente hacia arriba expulsando el aire. Sigue una trayectoria ligeramente convergente (sin que lleguen a tocarse arriba). Detén el movimiento justo antes de bloquear los codos para mantener la tensión muscular en el pectoral alto.</p>\n</li>\n</ol>",
    "category": 11,
    "equipment": [
      3,
      9
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      2,
      5
    ],
    "image_url": "https://wger.de/media/exercise-images/16/Incline-press-1.png"
  },
  {
    "id": 538,
    "name": "Press de banca inclinado",
    "description": "<p>Press de banca inclinado con barra fija.</p>",
    "category": 11,
    "equipment": [
      1,
      9
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      2,
      5
    ],
    "image_url": "https://wger.de/media/exercise-images/41/Incline-bench-press-1.png"
  },
  {
    "id": 543,
    "name": "Press de hombro con maquina",
    "description": "<p>Sentarse en la máquina con las piernas separadas a la anchura de los hombros.\nMantener&nbsp; la espalda erguida y también los brazos flexionados para tomar la barra a la altura de los hombro, alzar la barra lo mas alto que se pueda con los brazos extendidos.\nBajar lentamente y repetir.</p>",
    "category": 13,
    "equipment": [],
    "muscles": [
      2
    ],
    "muscles_secondary": [
      5
    ],
    "image_url": "https://wger.de/media/exercise-images/53/Shoulder-press-machine-2.png"
  },
  {
    "id": 545,
    "name": "Tijeras",
    "description": "<p>Las tijeras son un ejercicio abdominal que fortalece el transverso abdominal, ayudando a aplanar el vientre y a fortalecer todo el core. Las tijeras no solo son un movimiento de fuerza para el core, sino que también son un gran estiramiento para los isquiotibiales y la zona lumbar. Todo el mundo busca nuevas formas de trabajar el core, aplanar el vientre y mejorar la flexibilidad. Si aprendes a hacer las tijeras, lo tendrás todo reunido en un solo movimiento.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/4111/5215681310_2261bbb912_b.jpg"
  },
  {
    "id": 549,
    "name": "Press de tríceps sentado",
    "description": "<p>Siéntese boca arriba (mejor con respaldo). Tome una mancuerna firmemente con ambas manos y sosténgala con los brazos extendidos sobre su cabeza. Con las palmas de las manos hacia arriba y sosteniendo el peso de la mancuerna, baje lentamente el peso detrás de la cabeza.</p>",
    "category": 8,
    "equipment": [
      8,
      3
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8334/8114106482_85830f16c1_b.jpg"
  },
  {
    "id": 562,
    "name": "Shotgun Row",
    "description": "<ol>\n<li>Engancha una sola agarradera a una polea baja.</li>\n<li>Tras seleccionar el peso correcto, sitúate un par de pasos atrás con una postura amplia de zancada. Tu brazo debe estar extendido y el hombro hacia delante. Esta será tu posición inicial.</li>\n<li>Realiza el movimiento retrayendo el hombro y flexionando el codo. Mientras tiras, supina la muñeca, girando la palma hacia arriba a medida que avanzas.</li>\n<li>Tras una breve pausa, vuelve a la posición inicial.</li>\n</ol>",
    "category": 12,
    "equipment": [
      12
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 566,
    "name": "Press de hombros con barra",
    "description": "<p>Siéntate en un banco; el respaldo debe estar casi vertical. Coge una barra con un agarre del ancho de los hombros y súbela hasta la altura del pecho. Empuja el peso hacia arriba, pero no estires los brazos por completo. Baja lentamente y repite.</p>",
    "category": 13,
    "equipment": [
      1
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/119/seated-barbell-shoulder-press-large-1.png"
  },
  {
    "id": 567,
    "name": "Press Militar mancuerna",
    "description": "<p>Siéntate en un banco, con el respaldo casi vertical. Toma dos mancuernas y súbelas a la altura de los hombros, con las palmas y los codos apuntando hacia adelante durante todo el ejercicio. Empuja las mancuernas hacia arriba; en el punto más alto, se acercarán mucho, pero sin tocarse. Baja lentamente y repite.</p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/123/dumbbell-shoulder-press-large-1.png"
  },
  {
    "id": 569,
    "name": "Press de hombros en multipower",
    "description": "<p>El ejercicio es básicamente el mismo que con una barra libre:</p>\n<p>Siéntate en un banco, con el respaldo casi vertical. Agarra una barra con un agarre a la anchura de los hombros y bájala hasta la altura del pecho. Empuja el peso hacia arriba, pero no estires los brazos por completo. Baja lentamente y repite.</p>",
    "category": 13,
    "equipment": [],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8334/8114106482_85830f16c1_b.jpg"
  },
  {
    "id": 570,
    "name": "Encogimiento de hombros",
    "description": "<p>El encogimiento de hombros (normalmente llamado simplemente encogimiento) es un ejercicio de entrenamiento con pesas usado para desarrollar el trapecio superior. Quien levanta el peso se mantiene erguido, con las manos aproximadamente al ancho de los hombros, eleva los hombros lo más alto posible y luego los baja, sin flexionar los codos ni mover el cuerpo en absoluto. Es posible que no se tenga un rango de movimiento tan amplio como en un encogimiento normal realizado para flexibilidad activa. Suele considerarse buena técnica si la línea de los hombros queda horizontal en la posición elevada.</p>",
    "category": 13,
    "equipment": [
      7
    ],
    "muscles": [
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/570/68b4a33f-40f1-4dda-b56c-a2e20ed13903.jpg"
  },
  {
    "id": 571,
    "name": "Encogimientos de hombros con barra",
    "description": "<p>Coge una barra y ponte de pie con el cuerpo erguido; los brazos cuelgan libremente delante de ti. Desde esta posición, eleva los hombros lo más alto que puedas, pero no flexiones los brazos durante el movimiento. En el punto más alto, haz una breve pausa de 1 o 2 segundos antes de volver lentamente a la posición inicial.</p>\n<p>Cuando entrenes con un peso mayor, asegúrate de seguir realizando el movimiento completo.</p>",
    "category": 13,
    "equipment": [
      1
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/150/Barbell-shrugs-1.png"
  },
  {
    "id": 572,
    "name": "Encogimientos de hombros con mancuernas",
    "description": "<p>Ponte de pie con el cuerpo erguido; las manos cuelgan libremente a los lados, cada una sujetando una mancuerna. Desde esta posición, eleva los hombros lo más alto que puedas, pero no flexiones los brazos durante el movimiento. En el punto más alto, haz una breve pausa de 1 o 2 segundos antes de volver lentamente a la posición inicial.</p>\n<p>Cuando entrenes con un peso mayor, asegúrate de seguir realizando el movimiento completo.</p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/151/Dumbbell-shrugs-2.png"
  },
  {
    "id": 576,
    "name": "Side Crunch",
    "description": "<p>Hold weight in one hand. Bend side ways to the knee. Pull upo to upright position using your obliquus.</p>",
    "category": 10,
    "equipment": [
      4
    ],
    "muscles": [
      14
    ],
    "muscles_secondary": [
      6
    ],
    "image_url": "https://wger.de/media/exercise-images/176/Cross-body-crunch-1.png"
  },
  {
    "id": 577,
    "name": "Flexión lateral del tronco con mancuerna",
    "description": "<p>También conocida como inclinaciones laterales con mancuerna. Ponte de pie a la altura de las caderas con las rodillas ligeramente flexionadas, mantén la curvatura natural de la columna, con una mano estirada a lo largo del cuerpo, y agarra la mancuerna con esa mano. Realiza flexiones laterales del torso lentas y controladas hasta alcanzar un ángulo de aproximadamente 45°.</p>",
    "category": 10,
    "equipment": [
      3
    ],
    "muscles": [
      14
    ],
    "muscles_secondary": [
      6
    ],
    "image_url": "https://live.staticflickr.com/8419/8703788718_9278041f2d_b.jpg"
  },
  {
    "id": 578,
    "name": "Rotación externa tumbado de lado",
    "description": "<p>Con un peso en una mano, túmbate sobre el lado opuesto al peso. Mantén las rodillas ligeramente flexionadas. Mantén el codo pegado al costado y extiende el antebrazo recto hacia delante. Sin dejar de mantener el codo pegado al costado, rota el antebrazo 90 grados hacia arriba.</p>\n<p>Resulta útil colocar una toalla bajo la axila para ayudar con la técnica de este ejercicio. También es buena idea poner un apoyo bajo la cabeza durante todo el ejercicio.</p>",
    "category": 13,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 580,
    "name": "Plancha de lado izquierdo",
    "description": "<p>La plancha lateral es un entrenamiento eficaz para fortalecer el tronco. Puede ayudarlo a fortalecer y desarrollar los músculos de la parte superior e inferior del cuerpo. Al ser un movimiento multifuncional, este ejercicio se enfoca no solo en los músculos abdominales, sino también en la columna vertebral y los glúteos. La plancha fortalece y tensa todo el cuerpo, mejora la postura y el equilibrio, reduce la grasa corporal y puede ayudar a acelerar el metabolismo.</p>",
    "category": 10,
    "equipment": [
      7
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14
    ],
    "image_url": "https://live.staticflickr.com/65535/51306639791_b76ca449a2_b.jpg"
  },
  {
    "id": 583,
    "name": "Flexiones de lado a lado",
    "description": "<p>-Comienza en posición de flexión</p>\n<p>-Desplaza el peso del cuerpo hacia el lado derecho y completa una flexión con el pecho sobre la mano derecha</p>\n<p>-Vuelve a la posición centrada</p>\n<p>-En la repetición 2, desplázate hacia el lado izquierdo</p>",
    "category": 11,
    "equipment": [],
    "muscles": [
      2,
      14,
      4,
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8419/8703788718_9278041f2d_b.jpg"
  },
  {
    "id": 584,
    "name": "Curl en banco Scott a un brazo",
    "description": "<p>Siéntate en el banco de curl Scott y realiza un curl de bíceps con una mancuerna en una mano. Tu otra mano puede estar en reposo o debajo del codo del brazo con el que haces el curl.</p>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 590,
    "name": "Elevación de talón sentados",
    "description": "<ul>\n<li>Siéntese&nbsp; en&nbsp; la&nbsp; máquina&nbsp; y&nbsp; coloque&nbsp; las&nbsp; rodillas&nbsp; y&nbsp; los&nbsp; muslos&nbsp; debajo&nbsp; de&nbsp; las&nbsp; almohadillas.</li>\n<li>Coloque&nbsp; las&nbsp; puntas&nbsp; de&nbsp; los&nbsp; pies&nbsp; en&nbsp; el&nbsp; borde&nbsp; más&nbsp; cercano&nbsp; del&nbsp; escalón&nbsp; con&nbsp; los&nbsp; pies&nbsp; &nbsp;paralelos&nbsp; entre&nbsp; sí.</li>\n<li>Apunte&nbsp; ligeramente&nbsp; &nbsp;con&nbsp; los&nbsp; dedos&nbsp; de&nbsp; los&nbsp; pies&nbsp; para&nbsp; levantar&nbsp; las&nbsp; almohadillas&nbsp; de&nbsp; los&nbsp; muslos&nbsp; y&nbsp; quitar&nbsp; la&nbsp; barra&nbsp; &nbsp;de&nbsp; apoyo.</li>\n<li>Permita&nbsp; que&nbsp; sus&nbsp; talones&nbsp; &nbsp;bajen&nbsp; más&nbsp; abajo&nbsp; que&nbsp; el&nbsp; escalón&nbsp; hasta&nbsp; que&nbsp; sienta&nbsp; un Movimiento&nbsp; hacia&nbsp; arriba</li>\n<li>Ponga&nbsp; los&nbsp; dedos&nbsp; de&nbsp; los&nbsp; pies&nbsp; en&nbsp; punta&nbsp; para&nbsp; &nbsp;levantar&nbsp; los&nbsp; talones.</li>\n<li>No&nbsp; tire&nbsp; de&nbsp; las&nbsp; asas&nbsp; ni&nbsp; incline&nbsp; el&nbsp; torso&nbsp; hacia&nbsp; atrás. Elevación&nbsp; de&nbsp; talón&nbsp; sentado Movimiento&nbsp; descendente estirar. Posición&nbsp; inicial</li>\n<li>Permita&nbsp; que&nbsp; sus&nbsp; talones&nbsp; vuelvan&nbsp; a&nbsp; caer&nbsp; a&nbsp; la&nbsp; posición&nbsp; inicial.</li>\n<li>Cuando&nbsp; &nbsp;complete&nbsp; el&nbsp; conjunto,&nbsp; mueva&nbsp; la&nbsp; barra&nbsp; de&nbsp; apoyo&nbsp; a&nbsp; su&nbsp; lugar.</li>\n</ul>",
    "category": 14,
    "equipment": [],
    "muscles": [
      15
    ],
    "muscles_secondary": [
      7
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 591,
    "name": "Abdominales",
    "description": "<p>Siéntese en una colchoneta, sus pantorrillas descansan en un banco, las rodillas forman un ángulo recto. Mantenga sus manos detrás de su cuello. Sube ahora con un movimiento de balanceo de tu espalda, debes sentir cómo las vértebras individuales pierden contacto con la colchoneta. En el punto más alto, contrae los abdominales tanto como puedas y mantenlos allí durante 2 segundos. Baja ahora, desenrollando tu espalda.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 595,
    "name": "Saltar a la comba – estándar",
    "description": "<p>Haz un único salto con ambos pies por cada giro de la cuerda.</p>\n<p>Trabaja un movimiento fluido y rítmico, rebotando ligeramente sobre las puntas de los pies.</p>",
    "category": 15,
    "equipment": [],
    "muscles": [
      7
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 598,
    "name": "Press de banca con agarre cerrado en multipower",
    "description": "<p>Realiza un press de banca estándar en la máquina multipower, pero coloca las manos en la barra aproximadamente al ancho de los hombros y mantén los codos cerca del cuerpo.</p>",
    "category": 8,
    "equipment": [],
    "muscles": [
      5
    ],
    "muscles_secondary": [
      4
    ],
    "image_url": "https://live.staticflickr.com/8187/8114102549_f7513ca335_b.jpg"
  },
  {
    "id": 599,
    "name": "Arrancada (Snatch)",
    "description": "<p>Colócate de pie con los pies a la anchura de la cadera y las espinillas contra la barra. Agarra la barra al doble del ancho de los hombros y, manteniendo la zona lumbar recta, empuja los talones contra el suelo para empezar a levantar la barra. Cuando esté por encima de las rodillas, extiende la cadera de forma explosiva y encoge los hombros. Deja que el impulso lleve el peso por encima de la cabeza.</p>",
    "category": 13,
    "equipment": [
      1
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 604,
    "name": "Speed Deadlift",
    "description": "<p>Deadlift with short (less than one 1min) rest between sets.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      11,
      8
    ],
    "muscles_secondary": [
      10,
      9
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 607,
    "name": "Abdominales splinter",
    "description": "<p>Túmbate boca arriba con las piernas rectas y los brazos a los lados, manteniendo los codos flexionados a 90 grados. Al incorporarte, gira el torso hacia la derecha y lleva la rodilla izquierda hacia el codo derecho mientras balanceas el brazo izquierdo hacia atrás. Baja el cuerpo a la posición inicial y repite hacia la derecha. Eso es 1 repetición.</p>",
    "category": 10,
    "equipment": [],
    "muscles": [
      14
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/3471/3749355444_2e7c42345b_b.jpg"
  },
  {
    "id": 614,
    "name": "Squat Jumps",
    "description": "<p>Jump wide, then close</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      10
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 615,
    "name": "Sentadillas",
    "description": "<ol>\n<li>Levántese con los pies separados al ancho de hombros</li>\n<li>Mueva las caderas hacia atrás y doble las rodillas y caderas para bajar el torso</li>\n<li>Repita</li>\n</ol>",
    "category": 9,
    "equipment": [
      1
    ],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 616,
    "name": "Sentadilla con salto (squat thrust)",
    "description": "<p>El burpee, o squat thrust, es un ejercicio de cuerpo completo usado en el entrenamiento de fuerza y como ejercicio aeróbico. El movimiento básico se realiza en cuatro pasos y se conoce como burpee de cuatro tiempos: Comienza de pie. Pasa a una posición de sentadilla con las manos en el suelo. (tiempo 1) Lanza los pies hacia atrás hasta una posición de plancha, manteniendo los brazos extendidos. (tiempo 2) Vuelve inmediatamente los pies a la posición de sentadilla. (tiempo 3) Levántate desde la posición de sentadilla (tiempo 4)</p>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10,
      6,
      15
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 621,
    "name": "Curl de bíceps de pie",
    "description": "<p>Ponte de pie sujetando las mancuernas separadas al ancho de los hombros. Orienta el antebrazo hacia arriba y mantén el brazo superior inmóvil mientras subes cada mancuerna hasta el hombro.</p>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      1,
      13
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 622,
    "name": "Elevación de talón de pie",
    "description": "<ul>\n<li>Mire&nbsp; hacia&nbsp; la&nbsp; máquina&nbsp; y&nbsp; coloque&nbsp; las&nbsp; puntas&nbsp; de&nbsp; los&nbsp; pies&nbsp; en&nbsp; el&nbsp; borde&nbsp; más&nbsp; cercano&nbsp; del&nbsp; escalón&nbsp; con&nbsp; los&nbsp; pies&nbsp; paralelos&nbsp; entre&nbsp; sí.</li>\n<li>Sumerja&nbsp; su&nbsp; cuerpo&nbsp; debajo&nbsp; de&nbsp; las hombreras&nbsp; y&nbsp; póngase&nbsp; de&nbsp; pie&nbsp; con&nbsp; el&nbsp; cuerpo&nbsp; completamente&nbsp; erguido.</li>\n<li>Permita&nbsp; que&nbsp; sus&nbsp; talones&nbsp; caigan&nbsp; más&nbsp; abajo&nbsp; que&nbsp; el&nbsp; escalón&nbsp; hasta&nbsp; que&nbsp; sienta&nbsp; un&nbsp; estiramiento.</li>\n<li>No&nbsp; permita&nbsp; que&nbsp; le&nbsp; bloqueen&nbsp; las&nbsp; rodillas.&nbsp; Movimiento&nbsp; hacia&nbsp; arriba</li>\n<li>Ponga&nbsp; los&nbsp; dedos&nbsp; de&nbsp; los&nbsp; pies&nbsp; en&nbsp; punta&nbsp; para&nbsp; levantar&nbsp; los&nbsp; talones arriba.</li>\n<li>Mantenga&nbsp; su&nbsp; cuerpo&nbsp; erguido&nbsp; y&nbsp; no&nbsp; mire&nbsp; hacia&nbsp; abajo&nbsp; ni&nbsp; se&nbsp; incline&nbsp; hacia&nbsp; adelante&nbsp; o&nbsp; hacia&nbsp; atrás. Movimiento&nbsp; descendente</li>\n<li>Permita&nbsp; que&nbsp; sus&nbsp; talones&nbsp; vuelvan&nbsp; a&nbsp; caer&nbsp; a&nbsp; la&nbsp; posición&nbsp; inicial.</li>\n<li>Mantenga&nbsp; su&nbsp; cuerpo&nbsp; completamente&nbsp; erguido&nbsp; y&nbsp; no&nbsp; rebote&nbsp; desde&nbsp; la&nbsp; posición&nbsp; más&nbsp; baja&nbsp; para&nbsp;&nbsp; comenzar&nbsp; el&nbsp; movimiento&nbsp; ascendente.</li>\n</ul>",
    "category": 14,
    "equipment": [],
    "muscles": [
      7
    ],
    "muscles_secondary": [
      15
    ],
    "image_url": "https://wger.de/media/exercise-images/622/9a429bd0-afd3-4ad0-8043-e9beec901c81.jpeg"
  },
  {
    "id": 623,
    "name": "Antebrazo con rodillo de muñeca de pie",
    "description": "<p>Agarra un rodillo de muñeca con ambas manos mientras estás de pie con los pies separados aproximadamente al ancho de los hombros. Si tu gimnasio no tiene un rodillo de muñeca, puedes montar uno fácilmente. Solo necesitas un disco de 5 o 10 libras, una cuerda fina y resistente de aproximadamente 90 cm de largo y un palo o barra de 15 a 20 cm. Fija de forma segura la cuerda en el centro de la barra/palo y ata el otro extremo de la cuerda al disco. Para empezar este ejercicio, agarra la barra/palo con ambas manos usando un agarre prono. Extiende ambos brazos rectos por delante de ti, paralelos al suelo. A continuación, enrolla el peso desde el suelo girando rápidamente la barra/palo con las manos y las muñecas. Una vez que el peso llegue arriba, baja lentamente el disco de nuevo hasta el suelo invirtiendo el movimiento de tus manos y muñecas. Repite (¡si puedes!).</p>",
    "category": 8,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 624,
    "name": "Stationary Bike",
    "description": "<p>Ride a Stationary Bike with various&nbsp;tensions.</p>",
    "category": 15,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 627,
    "name": "Stiff-legged Deadlifts",
    "description": "<ul>\n<li>Keep legs straight</li>\n<li>Keep back straight</li>\n</ul>",
    "category": 9,
    "equipment": [
      1
    ],
    "muscles": [
      11
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 628,
    "name": "Jalón con brazos rectos (agarre de barra)",
    "description": "<p>Usa el accesorio de barra recta en una polea alta. Agarra los dos extremos de la barra con las palmas hacia abajo y los brazos rectos extendidos delante de ti. Tira de las manos hacia las caderas manteniendo los brazos rectos, y luego vuelve a subirlas a la posición inicial.</p>",
    "category": 12,
    "equipment": [
      12
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      5
    ],
    "image_url": "https://live.staticflickr.com/65535/48834290862_b2cefd3954_b.jpg"
  },
  {
    "id": 629,
    "name": "Jalón con brazos rectos (agarre de cuerda)",
    "description": "<p>Usa el accesorio de cuerda en una polea alta. Agarra los dos extremos de la cuerda con los brazos rectos extendidos delante de ti. Tira de las manos hacia las caderas manteniendo los brazos rectos, y luego vuelve a subirlas a la posición inicial.</p>",
    "category": 12,
    "equipment": [
      12
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      5
    ],
    "image_url": "https://live.staticflickr.com/65535/48834290862_b2cefd3954_b.jpg"
  },
  {
    "id": 630,
    "name": "Peso muerto sumo",
    "description": "<ol>\n<li>Comienza con una barra cargada en el suelo. Acércate a la barra de modo que esta cruce la mitad de los pies. Los pies deben colocarse muy separados, cerca de los discos. Flexiona las caderas para agarrar la barra. Los brazos deben quedar directamente debajo de los hombros, por dentro de las piernas, y puedes usar un agarre prono, un agarre mixto o un agarre de gancho. Relaja los hombros, lo que en efecto alarga los brazos.</li>\n<li>Toma aire y luego baja las caderas, mirando al frente con la cabeza y el pecho hacia arriba. Empuja contra el suelo, separando los pies, con el peso en la mitad trasera de los pies. Extiende las caderas y las rodillas.</li>\n<li>Cuando la barra pase las rodillas, échate hacia atrás y lleva las caderas hacia la barra, juntando los omóplatos.</li>\n<li>Devuelve el peso al suelo flexionando las caderas y controlando el peso durante la bajada.</li>\n</ol>",
    "category": 9,
    "equipment": [],
    "muscles": [
      11,
      8,
      10
    ],
    "muscles_secondary": [
      9
    ],
    "image_url": "https://wger.de/media/exercise-images/630/b0f0c7d8-5878-4d9e-b820-21acc013741d.webp"
  },
  {
    "id": 632,
    "name": "Sentadillas sumo",
    "description": "<p>Ponte de pie con los pies más separados que los hombros, con las puntas de los pies apuntando hacia fuera en un ángulo de 45 grados y la barra sobre los hombros.</p>\n<p>Manteniendo la espalda recta, desciende lentamente flexionando las rodillas y las caderas como si te fueras a sentar (sentadilla).</p>\n<p>Baja hasta que los cuádriceps y los isquiotibiales queden paralelos al suelo.</p>\n<p>Vuelve a la posición inicial empujando hacia arriba y extendiendo las piernas, manteniendo una distribución equilibrada del peso entre el antepié y el talón.</p>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 636,
    "name": "Superman",
    "description": "<p>Túmbate boca abajo con los brazos extendidos por delante de ti sobre el suelo y las piernas estiradas en el suelo. Levanta a la vez los brazos y las piernas, como si estuvieras volando, y contrae la zona lumbar. Asegúrate de respirar y, según tu nivel de forma física, mantén el movimiento al menos de dos a cinco segundos por repetición.</p>",
    "category": 12,
    "equipment": [
      4
    ],
    "muscles": [
      8,
      12
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 650,
    "name": "Thruster",
    "description": "<ol>\n<li>Comienza realizando una sentadilla frontal</li>\n<li>En la posición superior, empuja la barra por encima de la cabeza (similar a un press)</li>\n<li>Baja la barra de nuevo hasta los hombros</li>\n</ol>",
    "category": 9,
    "equipment": [
      1
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [
      9
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 655,
    "name": "Contragolpe de tríceps con mancuernas",
    "description": "<p>Comience con una mancuerna en cada mano y las palmas de las manos hacia el torso. Mantenga la espalda recta con una ligera flexión de las rodillas e inclínese hacia adelante por la cintura. Tu torso debe estar casi paralelo al piso. Asegúrate de mantener la cabeza en alto. Tus brazos superiores deben estar cerca de tu torso y paralelos al piso. Tus antebrazos deben apuntar hacia el suelo mientras sostienes las pesas. Debe haber un ángulo de 90 grados formado entre el antebrazo y la parte superior del brazo. Esta es tu posición de inicio. Ahora, mientras mantiene la parte superior de sus brazos inmóviles, exhale y use sus tríceps para levantar las pesas hasta que el brazo esté completamente extendido. Concéntrese en mover el antebrazo. Después de una breve pausa en la contracción superior, inhala y baja lentamente las mancuernas hasta la posición inicial. Repita el movimiento la cantidad prescrita de repeticiones. Variaciones: este ejercicio también se puede ejecutar con un brazo a la vez, al igual que se realizan las filas de un brazo. Además, si le gusta la variedad de un solo brazo, puede usar un mango de polea baja en lugar de una mancuerna para una mejor contracción máxima. En este caso, las palmas deben estar hacia arriba (agarre en supinación) en lugar del torso (agarre neutral).</p>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 659,
    "name": "Extension de triceps polea",
    "description": "<p>Coge el cable, párate con los pies a la altura de los hombros, mantén la espalda recta e inclínate un poco hacia delante. Empuje la barra hacia abajo, asegurándose de que los codos no se muevan durante el ejercicio. Gire las manos hacia afuera al final y vuelva a la posición inicial sin pausa.</p>",
    "category": 8,
    "equipment": [
      12
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/659/a60452f1-e2ea-43fe-baa6-c1a2208d060c.png"
  },
  {
    "id": 660,
    "name": "Extensiones de tríceps en polea con barra",
    "description": "<p>Agarra la barra, ponte de pie con los pies al ancho de los hombros, mantén la espalda recta e inclínate ligeramente hacia delante. Empuja la barra hacia abajo, asegurándote de que los codos no se muevan durante el ejercicio. Sin pausa, vuelve a la posición inicial.</p>",
    "category": 8,
    "equipment": [
      12
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 661,
    "name": "Tríceps en máquina",
    "description": "<p>Siéntate y sujeta firmemente la barra con las manos. Ahora empuja el peso hacia arriba (sin extender del todo los brazos) y bájalo de nuevo lentamente. Como en otros ejercicios de tríceps, es importante no mover los brazos.</p>",
    "category": 8,
    "equipment": [],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 672,
    "name": "Trunk Rotation With Cable",
    "description": "<p>Seated trunk rotation with cable</p>",
    "category": 10,
    "equipment": [
      12
    ],
    "muscles": [
      14
    ],
    "muscles_secondary": [
      12
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 674,
    "name": "Rowing with TRX band",
    "description": "<p>Rowing with resistance bands - Bodyweight Exercise</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      1,
      9
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 675,
    "name": "Turkish Get-Up",
    "description": "<p>Starting on back, move to the standing position with dumbbell in one hand. &nbsp;Switch hands between reps.</p>",
    "category": 10,
    "equipment": [
      3
    ],
    "muscles": [
      2,
      8,
      14,
      3
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 683,
    "name": "Power Clean",
    "description": "<p>Olympic weight lifting</p>",
    "category": 11,
    "equipment": [
      1
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8757/17360233935_3d88d7f153.jpg"
  },
  {
    "id": 684,
    "name": "Jalón al pecho con agarre supino",
    "description": "<p>Agarra la barra del jalón con las palmas hacia ti y las manos más juntas que el ancho de los hombros. Inclínate ligeramente hacia atrás y mantén la espalda recta. Tira de la barra hacia el pecho, llevando los hombros ligeramente hacia atrás al final del movimiento.</p>",
    "category": 12,
    "equipment": [],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      1
    ],
    "image_url": "https://live.staticflickr.com/65535/48834290862_b2cefd3954_b.jpg"
  },
  {
    "id": 688,
    "name": "Upper External Oblique",
    "description": "<p>Exercise for upper external oblique muscles</p>",
    "category": 11,
    "equipment": [
      6
    ],
    "muscles": [
      14
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/4137/4850053983_b1b3e0aab9_b.jpg"
  },
  {
    "id": 691,
    "name": "Remo al mentón en multipower",
    "description": "<p>Los movimientos son básicamente los mismos que con una barra SZ, pero usas la barra del multipower:</p>\n<p>Ponte de pie erguido, con los pies separados al ancho de los hombros. Sujeta la barra con un agarre prono a la altura de los muslos, con los brazos estirados. Sube la barra cerca del cuerpo hasta el mentón. Los codos apuntan hacia fuera, de modo que en el punto más alto forman una V. Haz aquí una breve pausa antes de bajar lentamente y repetir el movimiento.</p>",
    "category": 13,
    "equipment": [],
    "muscles": [
      2,
      9
    ],
    "muscles_secondary": [
      1
    ],
    "image_url": "https://wger.de/media/exercise-images/691/297d4ce1-7e9e-4adb-8f5c-7d54054be885.jpg"
  },
  {
    "id": 693,
    "name": "Remo al Menton",
    "description": "<p>Separamos las piernas a la&nbsp; distancia&nbsp; de&nbsp; los hombros. Cogemos la barra con agarre&nbsp; &nbsp;Prono, siendo el agarre ancho a la altura de los hombros por lo menos.(explicaremos en los errores comunes el porque de este agarre). Elevamos la barra hacia el mentón pero sin llegar a tocarlo, aguantamos 1 segundo y volvemos a bajar de forma controlada. La espalda siempre recta y sin ningún tipo de balanceo corporal.</p>",
    "category": 13,
    "equipment": [
      2
    ],
    "muscles": [
      2,
      9
    ],
    "muscles_secondary": [
      1
    ],
    "image_url": "https://wger.de/media/exercise-images/693/05c91bd2-7814-40b6-b2d1-51ae942b8321.png"
  },
  {
    "id": 694,
    "name": "Remo al mentón con mancuernas",
    "description": "<p>Sujeta una mancuerna en cada mano delante del cuerpo. Mantén las palmas hacia el cuerpo. Sube las manos en línea recta hasta que queden bajo el mentón, y luego bájalas. Repite el ejercicio.</p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [
      2,
      9
    ],
    "muscles_secondary": [
      1
    ],
    "image_url": "https://wger.de/media/exercise-images/694/119e6823-6960-4341-a9e1-aaf78d7fb57c.png"
  },
  {
    "id": 695,
    "name": "V-Bar Pulldown",
    "description": "<p>Pulldowns using close grip v-bar.</p>",
    "category": 12,
    "equipment": [
      12
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      1,
      9
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 702,
    "name": "Elevación de pantorrilla izquierda",
    "description": "<ol>\n<li>Párese en el suelo o en el borde de un escalón para aumentar el rango de movimiento. Levante un pie, colocando la parte superior de su pantorrilla</li>\n<li>Levante los talones hasta que esté de pie</li>\n<li>Manténgase en esta posición durante tres segundos, luego baje el pie sin tocar el suelo con el talón.</li>\n</ol>",
    "category": 14,
    "equipment": [],
    "muscles": [
      7
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/2697/4423049916_97950ca011_b.jpg"
  },
  {
    "id": 711,
    "name": "Flexión a pino contra la pared",
    "description": "<p>Flexiones a pino contra ma pared (pecho cara a la pared). Progresión de las flexiones a pino. Ideal para ganar fuerza en deltoides</p>",
    "category": 13,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8419/8703788718_9278041f2d_b.jpg"
  },
  {
    "id": 713,
    "name": "Wall Pushup",
    "description": "<p>Pushup against a wall</p>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [
      2,
      4,
      5
    ],
    "muscles_secondary": [
      8,
      6,
      3,
      9
    ],
    "image_url": "https://live.staticflickr.com/3002/2903368600_547215c1ff_b.jpg"
  },
  {
    "id": 716,
    "name": "Deslizamientos en la pared",
    "description": "<p>Ponte de pie con los talones, los hombros, la nuca y las caderas tocando la pared. Empieza con los brazos rectos hacia los lados y los codos en un ángulo de 90 grados. Estira los brazos mientras permaneces contra la pared, sin arquear la espalda separándola de la pared, imitando el movimiento de un press de hombros.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [
      1,
      11,
      4,
      9,
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 718,
    "name": "Asiento en pared",
    "description": "<ol>\n<li>Apóyese en la pared, mirando hacia adelante y con los pies plantados firmemente en el suelo, sus hombros deben separarse y estar a 50 centímetros de la pared</li>\n<li>Deslízate por la pared, manteniendo la espalda presionada a ella, hasta que las piernas estén en ángulo recto. Las rodillas deben estar directamente sobre los tobillosEl dolor en el cuádriceps es normal, deténgase si siente dolor en la rodilla o en la rótula</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      11,
      10
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 722,
    "name": "Weighted Step-ups",
    "description": "<p>box step ups w/ barbell and 45's on each side</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11,
      7
    ],
    "image_url": "https://live.staticflickr.com/65535/52017578827_332703697f_b.jpg"
  },
  {
    "id": 723,
    "name": "Jalón con agarre ancho",
    "description": "<ol>\n<li>\n<p><strong>Posición inicial:</strong></p>\n<ul>\n<li>Brazos extendidos por encima de la cabeza, sintiendo un estiramiento en los dorsales.</li>\n<li>Mantén los hombros deprimidos (no los encojas hacia arriba).</li>\n</ul>\n</li>\n<li>\n<p><strong>Fase de tirón (concéntrica):</strong></p>\n<ul>\n<li>Tira de la barra hacia la parte alta del pecho o la zona de la clavícula impulsando los codos hacia abajo y hacia atrás.</li>\n<li>Mantén el pecho elevado y aprieta los omóplatos en la parte baja.</li>\n</ul>\n</li>\n</ol>",
    "category": 12,
    "equipment": [
      12
    ],
    "muscles": [
      12
    ],
    "muscles_secondary": [
      2,
      13,
      3,
      9
    ],
    "image_url": "https://live.staticflickr.com/65535/48834290862_b2cefd3954_b.jpg"
  },
  {
    "id": 801,
    "name": "Flexiones con mancuernas",
    "description": "<p>Son flexiones normales realizadas sobre mancuernas. Esto permite un rango de movimiento más amplio.</p>",
    "category": 11,
    "equipment": [
      3
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [
      2,
      5
    ],
    "image_url": "https://live.staticflickr.com/8419/8703788718_9278041f2d_b.jpg"
  },
  {
    "id": 802,
    "name": "Zancadas Caminando con Barra",
    "description": "<p><strong>Cómo realizarlo:</strong></p>\n<ol>\n<li><strong>Preparación:</strong> Coloca una barra sobre la parte alta de tu espalda (trapecios), igual que lo harías para una sentadilla. Párate derecho con los pies al ancho de las caderas, asegurándote de tener un pasillo o espacio libre por delante.</li>\n<li><strong>Ejecución:</strong> Da un paso largo hacia adelante con una pierna. Baja la cadera de forma controlada hasta que la rodilla de la pierna de atrás quede muy cerca del suelo. La pierna delantera debe formar un ángulo de 90 grados.</li>\n<li><strong>El Avance:</strong> En lugar de empujar hacia atrás para volver al inicio, impúlsate hacia adelante. Presiona con el talón de la pierna delantera y lleva la pierna de atrás hacia el frente para iniciar inmediatamente la siguiente zancada con esa pierna.</li>\n<li><strong>Continuación:</strong> Sigue alternando las piernas, \"caminando\" hacia adelante con cada zancada de manera fluida pero controlada. Mantén siempre el torso erguido y el abdomen contraído para no perder el equilibrio.</li>\n</ol>",
    "category": 9,
    "equipment": [
      1
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11,
      7
    ],
    "image_url": "https://live.staticflickr.com/4323/35986604152_6c88ed4c42_b.jpg"
  },
  {
    "id": 803,
    "name": "Extensión de Tríceps a una Mano en Polea",
    "description": "<p>Este ejercicio es ideal para aislar y concentrarse en cada cabeza del tríceps de forma individual.</p>\n<p><strong>Descripción:</strong></p>\n<p>Coloca la polea en una posición alta y utiliza un agarre individual (maneral). De pie, mantén tu codo pegado al costado del cuerpo; este debe actuar como una bisagra y permanecer fijo durante todo el movimiento.</p>\n<p>Extiende el brazo completamente hacia abajo hasta sentir una fuerte contracción en el tríceps. Haz una breve pausa y regresa de forma lenta y controlada a la posición inicial.</p>",
    "category": 8,
    "equipment": [
      12
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48834282762_b5de67c04d_b.jpg"
  },
  {
    "id": 804,
    "name": "Suspensión en Romos",
    "description": "<p>Este es un ejercicio avanzado específico de escalada, diseñado para fortalecer el agarre de mano abierta y la tensión corporal en presas redondeadas o inclinadas que no tienen un borde definido.</p>\n<p>Para realizarlo, cuélgate de los agarres romos (slopers) de una tabla de multipresas. La técnica es crucial: mantén los <strong>hombros activos</strong> (lejos de las orejas) y los <strong>codos ligeramente flexionados</strong> para proteger las articulaciones. A diferencia de otros agarres, en los romos es vital usar la <strong>mano lo más abierta posible</strong> para maximizar la superficie de contacto y la fricción. Contrae el core para mantener el cuerpo estable y sostén la posición durante los segundos indicados en tu rutina.</p>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/804/6f4b8bd9-fa05-49de-870b-1f79b595ce89.png"
  },
  {
    "id": 805,
    "name": "Empuje de tríceps en cable",
    "description": "<p>El empuje hacia abajo de la cuerda del cable es un ejercicio popular dirigido a los músculos tríceps. Es fácil de aprender y realizar, lo que lo convierte en el favorito de todos, desde principiantes hasta levantadores avanzados. Por lo general, se realiza para repeticiones de moderadas a altas, como 8-12 repeticiones o más por serie, como parte de un entrenamiento centrado en la parte superior del cuerpo o en los brazos.</p>",
    "category": 8,
    "equipment": [
      12
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/805/7a437824-e2cc-46e1-804a-674f0ea31d25.png"
  },
  {
    "id": 820,
    "name": "Suspensión en regleta de 20 mm",
    "description": "<p>Realiza una suspensión de 10 segundos en una regleta de 20 mm de la tabla de multipresas. Para hacerlo correctamente, mantén los hombros activos y lejos de las orejas, contrayendo la musculatura de la espalda para proteger las articulaciones. Conserva siempre una ligera flexión en los codos y activa el core para evitar que el cuerpo se balancee.</p>",
    "category": 8,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 821,
    "name": "Dominadas en Tabla de Multipresas",
    "description": "<p><strong>1-Calentamiento:</strong> Antes de empezar, es crucial haber calentado adecuadamente los dedos, muñecas, codos y hombros. No intentes este ejercicio en frío.\n<strong>2- Selección del Agarre:</strong> Elige un par de presas (agarres) o regletas que sean simétricas en la tabla de multipresas. Comienza con las más grandes y cómodas que te permitan realizar el movimiento de forma segura antes de progresar a otras más pequeñas.\n<strong>3-</strong>&nbsp;<strong>Ejecución:</strong> Cuélgate de las presas seleccionadas con los brazos extendidos pero manteniendo los <strong>hombros activos</strong> (lejos de las orejas). Desde esa posición, realiza una dominada estricta, jalando con la espalda y los brazos hasta que tu barbilla supere la altura de tus manos.\n<strong>4-</strong>&nbsp;<strong>Descenso Controlado:</strong> La parte más importante es la bajada. Desciende de forma lenta y controlada (tardando 2-3 segundos) hasta volver a la posición inicial. Evita dejarte caer bruscamente, ya que esto puede causar lesiones.</p>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [
      1,
      12
    ],
    "muscles_secondary": [
      13,
      9
    ],
    "image_url": "https://live.staticflickr.com/6201/6121731303_9aea9849ef_b.jpg"
  },
  {
    "id": 822,
    "name": "Aperturas Posteriores en Polea",
    "description": "<p>Ajusta el peso y sitúa las poleas en una posición alta, por encima de tu cabeza. Con la mano derecha, agarra el mango de la polea izquierda, y con la mano izquierda, el de la polea derecha, cruzando los cables frente a ti. Esta es tu posición de inicio.</p>\n<p>Comienza el movimiento abriendo los brazos hacia los lados y hacia atrás en un arco amplio, manteniendo una ligera flexión en los codos. Haz una breve pausa al final del movimiento para contraer al máximo los músculos de la espalda, antes de regresar los mangos a la posición inicial de forma controlada.</p>",
    "category": 13,
    "equipment": [
      12
    ],
    "muscles": [
      2,
      9
    ],
    "muscles_secondary": [
      5
    ],
    "image_url": "https://wger.de/media/exercise-images/822/74affc0d-03b6-4f33-b5f4-a822a2615f68.png"
  },
  {
    "id": 828,
    "name": "Aperturas Inversas",
    "description": "<p>Los \"pájaros\" con mancuernas en banco inclinado son un ejercicio del tren superior que se enfoca en los deltoides posteriores, así como en los músculos posturales de la espalda alta. Para ejecutarlo, debes acostarte boca abajo sobre el banco inclinado, con el pecho firmemente apoyado.</p>\n<p>Debido a que trabaja músculos relativamente pequeños, este ejercicio se suele realizar con un peso ligero a cambio de un número alto de repeticiones, como series de 10 a 15 repeticiones o más.</p>",
    "category": 12,
    "equipment": [
      3,
      9
    ],
    "muscles": [
      2,
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/828/2e959dab-f39b-4c7c-9063-eb43064ab5eb.png"
  },
  {
    "id": 908,
    "name": "Carrera en Zona 2",
    "description": "<p>La carrera en Zona 2 es un entrenamiento cardiovascular de baja intensidad, fundamental para construir una sólida base de resistencia (endurance). Se caracteriza por mantener un ritmo que se sienta relativamente fácil y que puedas sostener por un largo periodo.</p>\n<p>La forma más sencilla de saber si estás en esta zona es la \"prueba del habla\": debes ser capaz de mantener una conversación completa y fluida sin tener que jadear para tomar aire. Técnicamente, este ritmo corresponde a un esfuerzo de entre el 60% y el 70% de tu frecuencia cardíaca máxima, lo que optimiza la capacidad del cuerpo para usar la grasa como fuente de energía.</p>",
    "category": 15,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 909,
    "name": "Curl Nórdico Inverso",
    "description": "<p>Arrodíllate con los tobillos asegurados por un compañero o un objeto fijo. Manteniendo una línea recta desde las rodillas hasta la cabeza, inclínate lentamente hacia atrás, controlando el movimiento con tus cuádriceps. Usa la misma fuerza para volver a la posición inicial. Es una alternativa muy efectiva a la máquina de extensión de piernas.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      10
    ],
    "muscles_secondary": [
      8,
      6
    ],
    "image_url": "https://wger.de/media/exercise-images/909/159222d9-c1e4-46ae-89ee-6a2dfaab978d.png"
  },
  {
    "id": 910,
    "name": "Curl Nórdico",
    "description": "<p>Este es uno de los mejores ejercicios para construir fuerza en los isquiotibiales (la parte posterior del muslo), mejorar la salud de las rodillas y prevenir lesiones, especialmente desgarros.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Arrodíllate sobre una superficie cómoda y pide a un compañero que sujete firmemente tus tobillos, o asegúralos debajo de un objeto pesado y estable.</p>\n<p>Manteniendo una línea recta desde las rodillas hasta la cabeza, inclínate hacia adelante, bajando tu torso de la forma más lenta y controlada posible. La fuerza para frenar la caída debe venir exclusivamente de tus isquiotibiales. Cuando ya no puedas resistir más, usa las manos para amortiguar la llegada al suelo.</p>",
    "category": 9,
    "equipment": [],
    "muscles": [
      11
    ],
    "muscles_secondary": [
      8
    ],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 911,
    "name": "Incline Skull Crush",
    "description": "<p>Siting in a 45 Degree Angle, using DB to do Incline Skull Crush</p>",
    "category": 8,
    "equipment": [],
    "muscles": [
      5
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 912,
    "name": "Curl en Polea con Barra Recta",
    "description": "<p>De pie frente a una polea baja, toma la barra recta con las palmas hacia arriba. Manteniendo los codos fijos a los costados de tu cuerpo, flexiónalos para subir la barra y contraer fuertemente los bíceps. Baja de manera controlada para mantener la tensión constante del cable.</p>",
    "category": 8,
    "equipment": [
      12
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/912/e10a034f-6370-4dd6-b1c2-416b27844529.png"
  },
  {
    "id": 913,
    "name": "Curl de Predicador Inverso",
    "description": "<p>Este ejercicio es excelente para desarrollar los músculos braquial (ubicado bajo el bíceps) y braquiorradial (la parte superior del antebrazo), creando un aspecto más denso y completo en el brazo.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Apoya tu pecho en el lado vertical de un banco predicador (banco Scott) o en el espaldar de un banco inclinado, dejando que tus brazos cuelguen rectos hacia el suelo.</p>\n<p>Sujeta una barra (recta o EZ) con un agarre estrecho y <strong>prono</strong> (las palmas de las manos mirando hacia abajo). Manteniendo la parte superior de los brazos completamente inmóvil, flexiona los codos para subir la barra. Contrae con fuerza en la cima y baja de forma lenta y controlada.</p>",
    "category": 8,
    "equipment": [
      2
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 914,
    "name": "Curl Inverso con Barra EZ en Polea",
    "description": "<p>Este ejercicio es clave para desarrollar el músculo braquial (que se encuentra debajo del bíceps) y el braquiorradial (la parte superior del antebrazo), lo que añade grosor y una apariencia más completa al brazo. El uso de la barra EZ y la polea hace que el movimiento sea más cómodo para las muñecas y mantenga una tensión constante.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Conecta una barra EZ a una polea en su posición más baja. De pie, sujeta la barra con un agarre prono (palmas mirando hacia abajo) y con las manos sobre las curvas exteriores de la barra.</li>\n<li><strong>Movimiento:</strong> Manteniendo los codos fijos y pegados a los costados de tu cuerpo, flexiónalos para subir la barra en un arco controlado.</li>\n<li><strong>Contracción:</strong> Concéntrate en apretar los antebrazos en la parte alta del movimiento. Baja de forma lenta, resistiendo la tensión del cable, hasta que tus brazos estén completamente extendidos.</li>\n</ol>",
    "category": 8,
    "equipment": [
      12,
      2
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 915,
    "name": "Volante",
    "description": "<p>Este ejercicio, que simula el movimiento de girar el volante de un autobús, es excelente para trabajar la resistencia y la fuerza de rotación del core, además de los deltoides.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Siéntate en el suelo o en un banco, manteniendo la espalda recta y el abdomen contraído. Sostén un disco (placa) con ambas manos frente a ti, a la altura del pecho o los hombros, como si fuera un volante.</li>\n<li><strong>Movimiento:</strong> Gira el disco de un lado a otro de forma controlada, rotando desde el torso. Imagina que estás conduciendo un autobús y girando el volante en curvas pronunciadas.</li>\n<li><strong>Control:</strong> El movimiento debe originarse en tu core, no solo en tus brazos. Mantén los brazos relativamente extendidos durante todo el ejercicio.</li>\n</ol>\n<p><em>(Para mayor dificultad, realízalo sentado en el suelo con los pies elevados).</em></p>",
    "category": 13,
    "equipment": [],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/915/fe8ebece-dff8-4700-b84c-9110e2e074f5.png"
  },
  {
    "id": 916,
    "name": "Prensa Smith",
    "description": "<p>Sentado en un ángulo de casi 90 grados, máquina Smith</p>",
    "category": 13,
    "equipment": [
      9
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/916/9bf7555a-fec6-43a9-b343-aae496744e5e.png"
  },
  {
    "id": 917,
    "name": "Elevación frontal con cable",
    "description": "<p>olver a torre de cable, cable entre patas, barra SZ</p>",
    "category": 13,
    "equipment": [
      12,
      2
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 918,
    "name": "Seated Dumbbell Side Lateral",
    "description": "<p>seated slightly leaned forward at beginning of exercise</p>",
    "category": 13,
    "equipment": [
      3
    ],
    "muscles": [
      2
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 919,
    "name": "T-Bar row",
    "description": "<p>bent over with triangle grip, slightly bent knees</p>",
    "category": 12,
    "equipment": [
      1
    ],
    "muscles": [
      12,
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/T-bar-row-2.png"
  },
  {
    "id": 922,
    "name": "Seated Cable Mid Trap Shrug",
    "description": "<p>seated straight back, slight hold at top</p>",
    "category": 12,
    "equipment": [
      12
    ],
    "muscles": [
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 923,
    "name": "Lying Dumbbell Row SS Seated Shrug",
    "description": "<p>laying on the stomach on a bench with slight angle</p>",
    "category": 12,
    "equipment": [
      3
    ],
    "muscles": [
      12,
      9
    ],
    "muscles_secondary": [
      1
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 925,
    "name": "Press Inclinado Ligero en Máquina Smith",
    "description": "<p>Esta variante con una inclinación muy leve (aproximadamente 15-30 grados) es excelente para enfocar el trabajo en la parte superior del pectoral y la sección clavicular del deltoide, con la estabilidad que ofrece la máquina Smith.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Coloca un banco ajustable debajo de la barra de la máquina Smith y ajústalo a un ángulo de inclinación bajo (uno o dos puntos por encima de la posición plana).</p>\n<p>Sujeta la barra con un agarre ligeramente más ancho que tus hombros. Baja la barra de forma controlada hasta la parte alta de tu pecho, y luego empújala explosivamente hacia arriba hasta la posición inicial, contrayendo los pectorales superiores.</p>",
    "category": 11,
    "equipment": [],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/925/67dbb1c9-b378-46f9-adb6-1f55b3d3007a.png"
  },
  {
    "id": 926,
    "name": "Aperturas en Máquina para Pecho",
    "description": "<p>Este es un ejercicio de aislamiento excelente para enfocar el trabajo en la contracción de los músculos pectorales, especialmente en la parte interna del pecho.</p>\n<p>Instrucciones</p>\n<ol>\n<li><strong>Posición:</strong> Siéntate en la máquina con la espalda firmemente apoyada en el respaldo. Ajusta la altura del asiento para que tus hombros, codos y manos queden al mismo nivel (los brazos paralelos al suelo).</li>\n<li><strong>Movimiento:</strong> Con una ligera flexión constante en los codos, junta los agarres al frente en un movimiento de arco, como si dieras un gran abrazo.</li>\n<li><strong>Contracción:</strong> Aprieta con fuerza los músculos del pecho en el punto de máxima contracción. Regresa a la posición inicial de forma lenta y controlada, sin dejar que las placas de peso choquen.</li>\n</ol>",
    "category": 11,
    "equipment": [],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/926/ae9deb5d-a1e9-4c30-b1e3-c128ba5d4969.png"
  },
  {
    "id": 927,
    "name": "flexiones en TRX",
    "description": "<p>Las&nbsp;flexiones de brazos&nbsp;en TRX añaden un componente de inestabilidad que hará que tus&nbsp;hombros y tus pectorales trabajen de manera diferente. Puedes hacer que el ejercicio sea más o menos intenso colocando tu cuerpo más paralelo o menos al suelo. Evita que tus brazos rocen con las cuerdas porque puede que no lo notes mientras entrenas, pero podrás tener rozaduras y moratones después.</p>",
    "category": 15,
    "equipment": [
      7
    ],
    "muscles": [
      4
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/927/7b392101-9c47-4693-935e-a88b1887eec5.jpg"
  },
  {
    "id": 957,
    "name": "Elevación de brazo y pierna en cuadrupedia",
    "description": "<p>En este ejercicio se activan los músculos de la espalda y los músculos de la parte posterior de la pierna y del brazo al levantar al mismo tiempo el brazo y la pierna cruzados en posición de cuadrupedia. También mejora el equilibrio y la propiocepción. El movimiento se realiza de forma simétrica.</p>\n<ol>\n<li>Colócate en posición de cuadrupedia.2. Mete el abdomen y luego levanta tu pierna derecha y tu brazo izquierdo.3. Debes mantener el abdomen metido durante 8 segundos.4. Después de 8 segundos, baja lentamente el brazo y la pierna.5. Luego relaja los músculos.</li>\n</ol>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [
      2,
      8,
      3,
      9
    ],
    "muscles_secondary": [
      12
    ],
    "image_url": "https://wger.de/media/exercise-images/957/0fd94587-6021-4763-856e-7227f5fcba2a.png"
  },
  {
    "id": 958,
    "name": "Biceps con TRX",
    "description": "<p>músculos implicados: bíceps Agarre las asas de las correas TRX, incline el cuerpo hacia atrás, brazos y piernas extendidos, cuerpo posicionado en una sola línea. (no es de abdominales, es de brazos)</p>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/958/947ac249-475d-44ed-bed3-8dc433374f59.png"
  },
  {
    "id": 959,
    "name": "Remo en TRX",
    "description": "<p>Ejercicio clave para construir la fuerza necesaria para las dominadas (pull-ups).</p>\n<p>Sujeta las agarraderas del TRX e inclínate hacia atrás, manteniendo el cuerpo en una línea recta. Desde ahí, jala tu pecho hacia tus manos, contrayendo fuertemente los músculos de la espalda. La dificultad del ejercicio se ajusta con el ángulo de tu cuerpo: mientras más horizontal estés, más difícil será.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [
      2,
      1,
      12
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/959/53a5e008-bc31-4ee0-9463-69a858c2ec18.png"
  },
  {
    "id": 960,
    "name": "Swing con Kettlebell",
    "description": "<p>Este es un ejercicio balístico fundamental que se basa en un movimiento de bisagra de cadera (hip hinge), no en una sentadilla. El poder para elevar la kettlebell no viene de los brazos, sino de un empuje explosivo de la cadera hacia adelante, manteniendo la espalda recta en todo momento.</p>\n<p>Aunque el swing con kettlebell es un ejercicio de cuerpo completo, se enfoca mayormente en los músculos de la cadena posterior (la parte trasera del cuerpo). Los principales músculos trabajados son los glúteos, los isquiotibiales, los erectores de la columna y la musculatura de la espalda alta</p>",
    "category": 9,
    "equipment": [
      10
    ],
    "muscles": [
      2,
      8
    ],
    "muscles_secondary": [
      10,
      6,
      9
    ],
    "image_url": "https://wger.de/media/exercise-images/960/da4d0560-da89-4bb5-b91f-746458fb04ad.png"
  },
  {
    "id": 961,
    "name": "Piques de 50m en Natación",
    "description": "<p>Este es un set de entrenamiento de velocidad en natación. La indicación \"a 1 minuto\" se refiere al intervalo de tiempo total para nadar el pique y descansar.</p>\n<p>Esto significa que inicias un nuevo pique de 50 metros a máxima velocidad cada 60 segundos, sin importar cuánto tardes en el anterior. El tiempo que te sobre dentro de ese minuto es tu descanso. Por ejemplo, si nadas el pique en 40 segundos, tienes 20 segundos para descansar antes de que comience el siguiente. El objetivo es desarrollar velocidad y capacidad anaeróbica.</p>",
    "category": 15,
    "equipment": [],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 962,
    "name": "La Elíptica",
    "description": "<p>La elíptica es una máquina de ejercicio cardiovascular estática que ofrece un entrenamiento de bajo impacto, ideal para proteger las articulaciones. Su movimiento simula una mezcla entre correr, caminar y subir escaleras, manteniendo los pies siempre apoyados en los pedales.</p>\n<p>Su uso mejora la tonificación muscular, fortalece las piernas (cuádriceps, glúteos, pantorrillas), favorece la vascularización y aumenta la resistencia cardiovascular. Además, la elíptica es una herramienta muy útil si tu objetivo es perder peso.</p>",
    "category": 15,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10,
      9
    ],
    "muscles_secondary": [
      1,
      6,
      5
    ],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 974,
    "name": "Curl con pesa rusa a dos manos",
    "description": "<p>Ponte de pie erguido y agarra la pesa rusa con ambas manos. Realiza el movimiento de flexión del codo, partiendo desde una posición totalmente extendida hasta que tu mano llegue a la altura del hombro. Separa un poco las piernas para tener estabilidad y, para hacer el ejercicio correctamente, intenta no impulsarte con la espalda ni con el cuerpo en general. Cambia el peso de la pesa rusa para ajustar la dificultad.</p>",
    "category": 8,
    "equipment": [
      10
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/65535/48441712506_2a4cc5946c_b.jpg"
  },
  {
    "id": 975,
    "name": "Curl de Bíceps con Kettlebell a una Mano",
    "description": "<p>De pie, sostén una kettlebell en una mano con el brazo totalmente extendido. Comienza el movimiento flexionando el codo y levantando la pesa hasta que tu mano alcance la altura del hombro, contrayendo fuertemente el bíceps.</p>\n<p>Para realizar el ejercicio correctamente, evita impulsarte con la espalda o balancear el cuerpo; el codo debe permanecer relativamente fijo a un costado de tu torso. El movimiento debe ser controlado, enfocándose únicamente en la fuerza del brazo.</p>",
    "category": 8,
    "equipment": [
      10
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/975/41d9267a-99bc-4e94-b1c4-0e39fe7a968f.png"
  },
  {
    "id": 976,
    "name": "Abdominales en V con Balón Medicinal",
    "description": "<p>Este es un ejercicio abdominal avanzado. Al usar un balón medicinal como sobrecarga, se aumenta significativamente la intensidad y la dificultad del movimiento en comparación con la versión sin peso.</p>\n<p>Para realizarlo, acuéstate boca arriba con las piernas rectas y los brazos extendidos por encima de tu cabeza, sosteniendo el balón con ambas manos. Contrayendo el abdomen, levanta simultáneamente las piernas y el torso del suelo, buscando tocar el balón con los pies en el punto más alto y formando una \"V\" con tu cuerpo. Baja de forma lenta y controlada a la posición inicial.</p>",
    "category": 10,
    "equipment": [
      7
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/976/94649ea6-bf58-4fd9-90c1-b2ec96ee20cd.png"
  },
  {
    "id": 977,
    "name": "Sentadilla al Cajón",
    "description": "<p>Este ejercicio es una variante de la sentadilla tradicional que ayuda a mejorar la técnica, desarrollar potencia y asegurar que se alcanza la profundidad correcta en el movimiento.</p>\n<p><strong>Instrucciones:</strong></p>\n<ol>\n<li><strong>Prepara el cajón:</strong> Colócalo detrás de ti. Si vas a usar una barra, posiciona el cajón dentro de la jaula de sentadillas. Elige una altura que te permita bajar hasta que tus glúteos toquen suavemente el cajón, manteniendo la espalda recta (generalmente, con los muslos paralelos al suelo).</li>\n<li><strong>Adopta la postura correcta:</strong> Párate frente al cajón con los pies separados al ancho de los hombros y las puntas ligeramente hacia afuera. Activa el core y mantén la espalda en una posición neutral. Si usas barra, apóyala firmemente sobre la parte alta de tu espalda.</li>\n<li><strong>Baja de forma controlada:</strong> Inicia el movimiento empujando la cadera hacia atrás, como si te fueras a sentar en una silla. Baja lentamente hasta que tus glúteos hagan un contacto suave con el cajón. Es crucial que no te dejes caer; el descenso debe ser controlado.</li>\n<li><strong>Pausa y sube:</strong> Una vez sentado en el cajón, haz una breve pausa manteniendo la tensión en el core y la espalda recta. Desde esa posición, empuja firmemente a través de tus talones para volver a ponerte de pie de forma explosiva hasta la posición inicial.</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10,
      15
    ],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/977/3124c091-6395-4377-96c5-56048b627ceb.png"
  },
  {
    "id": 978,
    "name": "Elevaciones de Rodillas en Barra",
    "description": "<p>Este es un ejercicio fundamental para fortalecer la pared abdominal, con un gran enfoque en la sección inferior. Para realizarlo, cuélgate de una barra con los brazos extendidos y, sin balancearte, utiliza la fuerza de tu abdomen para elevar las rodillas hacia el pecho. El descenso debe ser lento y controlado.</p>\n<p>Una vez dominado, puedes progresar a la <strong>elevación de piernas a 90°</strong>. Como mencionas, esta es una versión mucho más intensa que involucra toda la musculatura abdominal. En lugar de flexionar las rodillas, se levantan las piernas completamente rectas hasta que quedan paralelas al suelo, formando un ángulo de 90 grados con el torso.</p>",
    "category": 10,
    "equipment": [
      6
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14
    ],
    "image_url": "https://wger.de/media/exercise-images/978/d3ffe51f-7eb8-4cc9-9eae-105847af3005.png"
  },
  {
    "id": 979,
    "name": "Elevaciones de Piernas en Barra",
    "description": "<p>Colgado de una barra y manteniendo el cuerpo estable (sin balanceo), eleva las piernas completamente rectas hasta que formen un ángulo de 90° con tu torso. Sostén la contracción un instante y luego baja de forma lenta y controlada para maximizar el trabajo en el abdomen.</p>",
    "category": 10,
    "equipment": [
      6
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14,
      10
    ],
    "image_url": "https://wger.de/media/exercise-images/979/27097a3a-5749-428d-b94c-6082afe390f6.png"
  },
  {
    "id": 980,
    "name": "Dominadas comando",
    "description": "<p>Variación del ejercicio de dominadas (pull-ups). Se realiza con un agarre mixto, con una mano en supinación y la otra en pronación. No gires el torso para volver al frente; la cabeza pasa una vez por un lado de la barra y la siguiente vez por el otro.</p>",
    "category": 12,
    "equipment": [
      6
    ],
    "muscles": [
      2,
      1,
      12,
      9
    ],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/6201/6121731303_9aea9849ef_b.jpg"
  },
  {
    "id": 981,
    "name": "Subida a peldaño",
    "description": "<ol>\n<li>Párese frente a una silla</li>\n<li>Súbase a la silla</li>\n<li>Bájese de la silla</li>\n<li>Repita</li>\n</ol>",
    "category": 9,
    "equipment": [
      8
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11,
      7
    ],
    "image_url": "https://wger.de/media/exercise-images/981/f9377a7e-eb58-4cca-b805-2d36863aeb03.png"
  },
  {
    "id": 983,
    "name": "Rodillas elevadas",
    "description": "<ol>\n<li>Trote en el lugar, con las rodillas tan altas como pueda y cambie de pierna a un ritmo rápido</li>\n</ol>",
    "category": 15,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/983/16245344-9957-4a24-8d61-f9939ed5f964.png"
  },
  {
    "id": 984,
    "name": "Zancadas con peso",
    "description": "<ol>\n<li>Párese con la espalda recta</li>\n<li>Dé un gran paso adelante con su pierna izquierda</li>\n<li>Baje la pelvis hasta que casi toque el suelo con la rodilla derecha</li>\n<li>Vuelva a subir la pelvis</li>\n<li>Vuelva a la posición con el pie hacia atrás</li>\n<li>Repita, cambiando de pierna cada vez</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://wger.de/media/exercise-images/984/5c7ffe68-e7b2-47f3-a22a-f9cc28640432.png"
  },
  {
    "id": 985,
    "name": "Flexiones a rotación",
    "description": "<ol>\n<li>Haga una flexión de brazos estándar1.a Acuéstese boca abajo1.b Coloque las manos cerca de las orejas1.c Levante el estómago con los brazos hasta que los brazos estén rectos, manteniendo la espalda recta1.d Flexione los brazos hasta que el pecho casi toque el suelo, asegurándose de que la espalda esté recta1.e Levante el estómago de nuevo, volviendo al paso 3</li>\n<li>Gire el cuerpo hacia un lado para que la espalda quede recta, la mano inferior que sostiene el cuerpo esté completamente extendida y sólo las extremidades inferiores toquen el suelo</li>\n<li>Repita, cambiando de lado en el paso 2 otra vez</li>\n</ol>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [
      4,
      5
    ],
    "muscles_secondary": [
      2,
      14
    ],
    "image_url": "https://live.staticflickr.com/8419/8703788718_9278041f2d_b.jpg"
  },
  {
    "id": 986,
    "name": "Sentadilla de lado izquierdo",
    "description": "<ol>\n<li>Póngase de pie y dé un amplio paso lateral, un poco más grande que el ancho de los hombros</li>\n<li>Doble una rodilla hasta que su muslo esté paralelo al suelo. La rodilla doblada debe estar en línea con el pie</li>\n<li>Vuelva a la posición inicial y repita.</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 987,
    "name": "Sentadilla de lado derecho",
    "description": "<ol>\n<li>Póngase de pie y dé un amplio paso lateral, un poco más grande que el ancho de los hombros</li>\n<li>Doble una rodilla hasta que su muslo esté paralelo al suelo. La rodilla doblada debe estar en línea con el pie</li>\n<li>Vuelva a la posición inicial y repita.</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 988,
    "name": "Sentadilla búlgara izquierda",
    "description": "<ol>\n<li>Póngase de pie delante de una silla y dé un largo paso. Ponga la parte superior de uno de sus pies en la silla</li>\n<li>Doble la rodilla delantera, balanceando los brazos hasta que la rodilla trasera casi toque el suelo.</li>\n<li>Empuje hacia atrás a la posición inicial y repita.</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://wger.de/media/exercise-images/988/6283b258-a4d7-4833-84f7-a38987022d3d.png"
  },
  {
    "id": 989,
    "name": "Sentadilla búlgara derecha",
    "description": "<ol>\n<li>Póngase de pie delante de una silla y dé un largo paso. Ponga la parte superior de uno de sus pies en la silla</li>\n<li>Doble la rodilla delantera, balanceando los brazos hasta que la rodilla trasera casi toque el suelo.</li>\n<li>Empuje hacia atrás a la posición inicial y repita.</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 990,
    "name": "Patada de rodilla",
    "description": "<ol>\n<li>Ponga a cuatro patas</li>\n<li>Empuje un pie hacia atrás hasta que se extienda completamente, concentrándose en los músculos de los glúteos</li>\n<li>Quédese un segundo, y luego vuelva a la posición inicial</li>\n<li>Repita, alternando los pies</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://wger.de/media/exercise-images/990/de20457c-914a-45c9-8cf9-0ad9739759a1.png"
  },
  {
    "id": 991,
    "name": "Media sentadillas izquierda",
    "description": "<ol>\n<li>Párese con la espalda recta</li>\n<li>De un largo paso adelante con su pierna izquierda</li>\n<li>Baje la pelvis hasta que casi toque el suelo con la rodilla derecha</li>\n<li>Suba la pelvis</li>\n<li>Repita desde el paso 3.</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 992,
    "name": "Media sentadillas derecha",
    "description": "<ol>\n<li>Párese con la espalda recta</li>\n<li>De un largo paso adelante con su pierna derecha</li>\n<li>Baje la pelvis hasta que casi toque el suelo con la rodilla izquierda</li>\n<li>Suba la pelvis</li>\n<li>Repita desde el paso 3.</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 993,
    "name": "Saltar la cuerda: saltos básicos",
    "description": "<p>Este ejercicio requiere una cuerda para saltar. Asegúrate de que la longitud de la cuerda se ajusta a tu altura. Una forma de comprobarlo es agarrar las dos asas con una mano y situarse en el centro de la cuerda colgando del suelo con un pie. Si la cuerda (excluyendo las asas) te llega justo por debajo del pecho, su longitud es la adecuada. Una cuerda más corta sería peligrosa, ya que podrías golpearte, y una cuerda más larga sería una mala forma.</p>\n<ol>\n<li>Pon los pies juntos, dobla un poco las rodillas, mantén la cabeza y el cuerpo rectos, mantén los codos dentro, abre los brazos.</li>\n<li>Gira sólo las muñecas con la fuerza suficiente para hacer girar la cuerda.</li>\n<li>Salta lo suficiente para pasar la cuerda por debajo de tus pies.</li>\n<li>Repite desde el paso 2.</li>\n</ol>",
    "category": 15,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 994,
    "name": "Círculos de brazo",
    "description": "<ol>\n<li>Ponte de pie con la espalda recta.</li>\n<li>Lleva los brazos hacia delante, levántalos por encima de la cabeza y luego continúa el movimiento por detrás de la espalda y baja a la posición inicial.</li>\n<li>Siga haciendo círculos con los brazos como se describe en el paso 2.</li>\n</ol>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 995,
    "name": "Círculos con los Brazos Hacia Atrás",
    "description": "<p>De pie, con la espalda recta y los brazos extendidos, dibuja círculos grandes y controlados hacia atrás, pasando por encima de la cabeza y completando el rango de movimiento. Es un excelente ejercicio de movilidad y calentamiento para los hombros.</p>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 996,
    "name": "Montañeros",
    "description": "<p>Posición inicial:</p>\n<p>Comienza en la posición de flexión vertical o plancha alta.Las manos deben estar directamente debajo de los hombros.Mantenga la cabeza alineada con la espalda, mirando al suelo.Los pies deben estar separados a la anchura de las caderas.</p>\n<p>Pasos:</p>\n<ol>\n<li>Mueve una rodilla hacia el centro del cuerpo, hacia los codos, manteniendo la otra pierna extendida.</li>\n<li>Con un movimiento rápido de salto, estira la pierna doblada y tira de la otra rodilla hacia tu cuerpo.</li>\n<li>Sigue repitiendo el paso 2, alternando las piernas.</li>\n</ol>\n<p>Notas:</p>\n<p>Durante todo el ejercicio, la espalda debe permanecer lo más recta posible, evitando una joroba o una espalda flácida.</p>",
    "category": 11,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 997,
    "name": "Burpees de 4 Tiempos",
    "description": "<p>Esta es la versión del burpee sin la flexión de pecho ni el salto vertical. La secuencia de 4 pasos es la siguiente:</p>\n<ol>\n<li>Baja a una posición de cuclillas y apoya las manos en el suelo.</li>\n<li>Salta con los pies hacia atrás hasta quedar en una plancha alta.</li>\n<li>Salta con los pies de vuelta hacia tus manos para regresar a la cuclillas.</li>\n<li>Ponte de pie para completar la repetición.</li>\n</ol>",
    "category": 11,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 998,
    "name": "Burpees sin Flexión",
    "description": "<p>Esta es la variante del burpee que omite la flexión de pecho pero sí incluye el salto vertical al final, haciéndola más explosiva que la versión de 4 tiempos.</p>\n<p>La secuencia es: agáchate y pon las manos en el suelo, salta con los pies hacia atrás a una plancha, salta de nuevo con los pies hacia adelante y termina impulsándote en un salto vertical.</p>",
    "category": 11,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://live.staticflickr.com/8419/8703788718_9278041f2d_b.jpg"
  },
  {
    "id": 999,
    "name": "Arremetidas inversas",
    "description": "<p>Posición inicial:</p>\n<p>De pie, con los pies separados a la altura de las caderas.</p>\n<p>Pasos:</p>\n<ol>\n<li>Da un paso hacia atrás con una pierna para que pueda doblarse cómodamente hasta un ángulo de 90 grados.</li>\n<li>Doble lentamente ambas rodillas hasta formar un ángulo de 90 grados.</li>\n<li>Vuelva a la posición inicial.</li>\n<li>Repita, alternando las piernas.</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11
    ],
    "image_url": "https://wger.de/media/exercise-images/999/d0931eb3-8db0-4049-bb08-aa4036072056.jfif"
  },
  {
    "id": 1000,
    "name": "Fondos",
    "description": "<p>Posición inicial:</p>\n<p>Siéntate con los brazos detrás de ti, apoyando la espalda.Los dedos deben apuntar hacia adelante.Las rodillas deben estar dobladas y los pies juntos.</p>\n<p>Pasos:</p>\n<ol>\n<li>Levanta las caderas del suelo, estirando los brazos.</li>\n<li>Dobla los codos, llevando las caderas hacia abajo.</li>\n<li>Endereza los brazos, volviendo a la posición anterior.</li>\n<li>Repita los pasos 2 y 3.</li>\n</ol>\n<p>Notas:</p>\n<p>La dificultad del ejercicio depende de la altura de las caderas.</p>",
    "category": 8,
    "equipment": [
      7
    ],
    "muscles": [
      5
    ],
    "muscles_secondary": [
      2,
      4
    ],
    "image_url": "https://wger.de/media/exercise-images/1000/553266a8-a972-48c5-a014-b12afac66f65.png"
  },
  {
    "id": 1001,
    "name": "Plancha Alta",
    "description": "<p>Colócate en la posición inicial de una flexión de pecho (push-up), con las manos directamente debajo de los hombros y los brazos extendidos. Aprieta con fuerza el abdomen y los glúteos para mantener tu cuerpo en una línea completamente recta desde la cabeza hasta los talones. Sostén la posición por el tiempo deseado sin dejar que la cadera se caiga.</p>",
    "category": 11,
    "equipment": [
      7
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      2,
      14,
      5
    ],
    "image_url": "https://live.staticflickr.com/65535/51306639791_b76ca449a2_b.jpg"
  },
  {
    "id": 1002,
    "name": "Postura del Niño",
    "description": "<p>Es una postura de descanso fundamental en yoga que estira la espalda, caderas y muslos.</p>\n<p>Desde una posición arrodillada, siéntate sobre tus talones e inclina el torso hacia adelante hasta que tu frente toque el suelo. Deja los brazos extendidos al frente o relájalos a los lados de tu cuerpo. Mantén la postura y respira profundamente.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/1002/ddf91765-8045-4087-bece-de17f33332ce.png"
  },
  {
    "id": 1003,
    "name": "Peso Muerto con Kettlebell",
    "description": "<p>Coloca la pesa rusa entre tus pies. La clave es mantener la <strong>espalda completamente recta</strong> y empujar la <strong>cadera hacia atrás</strong> (es una bisagra de cadera, no una sentadilla) para tomar el agarre.</p>\n<p>Desde esa posición, contrae los glúteos y el abdomen para ponerte de pie con fuerza. Regresa al suelo de la misma manera controlada, iniciando de nuevo con la cadera hacia atrás.</p>",
    "category": 12,
    "equipment": [
      10
    ],
    "muscles": [
      11,
      8
    ],
    "muscles_secondary": [
      10,
      9
    ],
    "image_url": "https://wger.de/media/exercise-images/1003/772d6e47-3865-4944-9255-7435d0b06782.png"
  },
  {
    "id": 1004,
    "name": "Rotación de Hombros Hacia Adelante",
    "description": "<p>Este ejercicio es ideal para la movilidad y el calentamiento de la articulación del hombro.</p>\n<p><strong>Descripción:</strong></p>\n<p>De pie o sentado con la espalda recta, coloca las yemas de tus dedos sobre tus hombros. Desde esa posición, dibuja círculos amplios y controlados con tus codos.</p>\n<p>Para la rotación hacia adelante, lleva los codos hacia el frente (buscando que se toquen), luego hacia arriba, hacia atrás y finalmente hacia abajo para completar el círculo.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1005,
    "name": "Rotación de Hombros Hacia Atrás",
    "description": "<p>Este movimiento es ideal para la movilidad y el calentamiento de la articulación del hombro, complementando la rotación hacia adelante.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>De pie o sentado con la espalda recta, coloca las yemas de tus dedos sobre los hombros. Dibuja círculos amplios y controlados con los codos, llevando el movimiento hacia atrás: primero junta los codos por detrás (apretando los omóplatos), luego súbelos, llévalos al frente y finalmente bájalos para completar el círculo.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1006,
    "name": "Retracción Cervical",
    "description": "<p>Este es un ejercicio postural clave para corregir la postura de \"cabeza adelantada\" y aliviar la tensión en el cuello.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>De pie o sentado con la espalda y el cuello rectos, mira hacia el frente. Suavemente, lleva tu mentón y tu cabeza rectos hacia atrás, como si intentaras crear una \"papada\", hasta sentir un estiramiento en la nuca.</p>\n<p>Es un movimiento horizontal, no debes inclinar la cabeza hacia abajo. Sostén la posición por 5 segundos, relaja y repite. Puedes usar tus dedos en el mentón para guiar el movimiento.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1007,
    "name": "Rotación de Cabeza",
    "description": "<p>Este ejercicio mejora la movilidad y ayuda a aliviar la rigidez del cuello.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie, con la espalda recta y los hombros relajados, gira lentamente tu cabeza hacia un lado como si intentaras mirar sobre tu hombro.</p>\n<p>Avanza solo hasta sentir un estiramiento suave, sin forzar el movimiento. Sostén esa posición por 5 segundos, regresa al centro con control y repite hacia el otro lado.</p>",
    "category": 13,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/1007/757846d3-78e4-4068-bbca-62e567372c94.png"
  },
  {
    "id": 1008,
    "name": "Estiramiento Lateral Izquierdo de Cuello",
    "description": "<p>Este ejercicio busca alargar los músculos del costado del cuello, principalmente el trapecio superior.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie, con la espalda recta y los hombros relajados, inclina suavemente tu oreja izquierda hacia tu hombro izquierdo.</p>\n<p>Para profundizar el estiramiento, coloca tu mano izquierda sobre el costado derecho de la cabeza y aplica una <strong>presión muy suave y gentil</strong> para ayudar a bajar un poco más. Mantén el estiramiento de 15 a 30 segundos sin forzar ni rebotar. Luego, hazlo del otro lado.</p>",
    "category": 13,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1009,
    "name": "Estiramiento Lateral Derecho de Cuello",
    "description": "<p>Este ejercicio busca alargar los músculos del costado del cuello, principalmente el trapecio superior y escalenos.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie, con la espalda recta y los hombros relajados, inclina suavemente tu oreja derecha hacia tu hombro derecho.</p>\n<p>Para profundizar el estiramiento, coloca tu mano derecha sobre el costado izquierdo de la cabeza y aplica una <strong>presión muy suave y gentil</strong> para ayudar a bajar un poco más. Mantén el estiramiento de 15 a 30 segundos sin forzar ni rebotar.</p>",
    "category": 13,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1010,
    "name": "Estiramiento Posterior de Cuello (Nuca)",
    "description": "<p>Este ejercicio es ideal para aliviar la tensión en la parte trasera del cuello (nuca) y la parte alta de la espalda.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie con la espalda recta y los hombros relajados, baja lentamente el mentón en dirección al pecho hasta sentir un estiramiento.</p>\n<p>Para profundizarlo, puedes entrelazar los dedos y colocar las manos sobre la parte posterior de la cabeza. <strong>Deja que solo el peso de tus brazos</strong> aplique una presión muy suave y gentil. Es crucial que <strong>no jales la cabeza hacia abajo con fuerza</strong>. Mantén el estiramiento por 15-30 segundos y regresa lentamente a la posición inicial.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1011,
    "name": "Estiramiento del cuello frontal",
    "description": "<p>Posición inicial:</p>\n<p>Siéntate o ponte de pie con la espalda recta.</p>\n<p>Pasos:</p>\n<ol>\n<li>Abre bien la boca.</li>\n<li>Inclina lentamente la cabeza hacia atrás con la boca abierta. Si sientes que necesitas apoyo, entrelaza las manos detrás de la cabeza.</li>\n<li>Cierra y abre la boca muy despacio.</li>\n<li>Al final, vuelve lentamente a la posición inicial y cierra la boca.</li>\n</ol>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1012,
    "name": "Curl de biceps alterno",
    "description": "<p>Posición inicial: Comience de pie con pesas en cada mano, la espalda recta y los pies separados al ancho de las caderas. Tus brazos deben estar relajados, apuntando hacia abajo. Tus rodillas deben estar ligeramente flexionadas, tus abdominales contraídos y tus hombros hacia abajo.&nbsp;Pasos:</p>\n<ol>\n<li>Dobla un brazo por el codo, llevando la mancuerna hasta tu hombro. La parte superior del brazo debe permanecer inmóvil durante este movimiento. 2. Lleva la mancuerna hacia abajo hasta que tu brazo esté en su posición original relajada.</li>\n<li>Repita, cambiando de brazo.</li>\n</ol>",
    "category": 8,
    "equipment": [
      3
    ],
    "muscles": [
      1
    ],
    "muscles_secondary": [
      13
    ],
    "image_url": "https://wger.de/media/exercise-images/1012/8270fdb8-28f1-4eff-b410-af8642085b3f.png"
  },
  {
    "id": 1013,
    "name": "Estiramiento del Elevador de la Escápula",
    "description": "<p>Este es un estiramiento específico para un músculo que a menudo causa tensión entre el cuello y la esquina superior del omóplato.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie con la espalda recta, gira tu cabeza unos 45 grados hacia la izquierda. Luego, baja el mentón en diagonal, como si quisieras mirar hacia tu axila izquierda.</p>\n<p>Para profundizar el estiramiento, coloca tu mano izquierda sobre la parte posterior de la cabeza y aplica una <strong>presión muy suave y gentil</strong> para guiar el movimiento. Para aumentar la sensación, puedes anclar el hombro opuesto sentándote sobre tu mano derecha o llevándola detrás de la espalda. Mantén el estiramiento por 15-30 segundos.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1014,
    "name": "Estiramiento del Elevador de la Escápula",
    "description": "<p>Este es un estiramiento específico para un músculo que a menudo causa tensión entre el cuello y la esquina superior del omóplato.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie con la espalda recta, gira tu cabeza unos 45 grados hacia la derecha. Luego, baja el mentón en diagonal, como si quisieras mirar hacia tu axila derecha.</p>\n<p>Para profundizar el estiramiento, coloca tu mano derecha sobre la parte posterior de la cabeza y aplica una <strong>presión muy suave y gentil</strong> para guiar el movimiento. Para aumentar la sensación, puedes anclar el hombro opuesto sentándote sobre tu mano izquierda o llevándola detrás de la espalda. Mantén el estiramiento por 15-30 segundos.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1015,
    "name": "Círculos de Cuello (Sentido Horario)",
    "description": "<p><strong>Precaución:</strong> Este es un ejercicio de movilidad que debe realizarse siempre de forma muy lenta y controlada. Si sientes dolor, mareo o pinzamientos, detente inmediatamente.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie con la espalda recta y los hombros relajados, baja suavemente el mentón hacia el pecho.</p>\n<p>Desde ahí, comienza a dibujar un círculo muy lento en el sentido de las agujas del reloj: rueda tu cabeza llevando la oreja derecha hacia el hombro derecho, luego (con mucho cuidado) hacia atrás, después la oreja izquierda hacia el hombro izquierdo, y finalmente regresa a la posición inicial con el mentón en el pecho. El movimiento debe ser fluido y sin forzar.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1016,
    "name": "Círculos de Cuello (Sentido Antihorario)",
    "description": "<p><strong>Precaución:</strong> Este es un ejercicio de movilidad que debe realizarse siempre de forma muy lenta y controlada. Si sientes dolor, mareo o pinzamientos, detente inmediatamente.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie con la espalda recta y los hombros relajados, baja suavemente el mentón hacia el pecho.</p>\n<p>Desde ahí, comienza a dibujar un círculo muy lento en sentido antihorario: rueda tu cabeza llevando la oreja izquierda hacia el hombro izquierdo, luego (con mucho cuidado) hacia atrás, después la oreja derecha hacia el hombro derecho, y finalmente regresa a la posición inicial con el mentón en el pecho.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1017,
    "name": "Medios Círculos de Cuello (Media Luna)",
    "description": "<p>Esta es una alternativa más segura que los círculos completos para mejorar la movilidad del cuello, ya que evita la compresión de las cervicales al no llevar la cabeza hacia atrás.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie con la espalda recta y los hombros relajados, inclina suavemente la cabeza llevando tu oreja derecha hacia el hombro derecho.</p>\n<p>Desde esa posición, dibuja lentamente una \"U\" o media luna con tu mentón: bájalo suavemente en dirección al pecho y continúa el arco hasta que tu oreja izquierda se acerque al hombro izquierdo. Invierte el movimiento de forma fluida y controlada para volver al otro lado.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  },
  {
    "id": 1018,
    "name": "Inclinaciones Laterales de Cabeza",
    "description": "<p>Este es un estiramiento fundamental para aliviar la tensión en los músculos a los costados del cuello.</p>\n<p><strong>Instrucciones:</strong></p>\n<p>Sentado o de pie, con la espalda recta y los hombros relajados y abajo, inclina lentamente la cabeza hacia un lado, llevando la oreja en dirección al hombro hasta que sientas un estiramiento suave en el lado opuesto.</p>\n<p>Mantén el hombro del lado que se estira apuntando hacia abajo para maximizar la sensación. Sostén la posición por 15-30 segundos, regresa al centro con suavidad y repite hacia el otro lado.</p>",
    "category": 12,
    "equipment": [
      7
    ],
    "muscles": [],
    "muscles_secondary": [],
    "image_url": "https://wger.de/media/exercise-images/1018/5bbd3879-b6fc-4aaa-9e8e-33ae9a688112.png"
  },
  {
    "id": 1019,
    "name": "Plancha de lado derecho",
    "description": "<ol>\n<li>Acuéstese sobre su lado correspondiente, con el codo en ángulo recto y el brazo hacia afuera</li>\n<li>Levante la pelvis del suelo levantando el hombro hacia arriba, manteniendo el antebrazo en el suelo; la cabeza, la pelvis y los pies deben estar en línea recta</li>\n<li>Mantenga esta posición</li>\n</ol>",
    "category": 10,
    "equipment": [
      7
    ],
    "muscles": [
      6
    ],
    "muscles_secondary": [
      14
    ],
    "image_url": "https://live.staticflickr.com/65535/51306639791_b76ca449a2_b.jpg"
  },
  {
    "id": 1020,
    "name": "Sentadillas en pistol derecha",
    "description": "<ol>\n<li>Párese en una pierna, con la otra pierna estirada y ligeramente hacia adelante.</li>\n<li>Doble una rodilla lentamente, bajando en sentadilla y manteniendo la espalda y la otra pierna estirada.</li>\n<li>Levántese lentamente de la sentadilla, enderezando la rodilla doblada y manteniendo la otra pierna recta.</li>\n<li>Repita</li>\n</ol>",
    "category": 9,
    "equipment": [
      7
    ],
    "muscles": [
      8,
      10
    ],
    "muscles_secondary": [
      11,
      7,
      6
    ],
    "image_url": "https://live.staticflickr.com/4850/32344653788_0234875efa.jpg"
  },
  {
    "id": 1021,
    "name": "Elevación de pantorrilla derecha",
    "description": "<ol>\n<li>Párese en el suelo o en el borde de un escalón para aumentar el rango de movimiento. Levante un pie, colocando la parte superior de su pantorrilla</li>\n<li>Levante los talones hasta que esté de pie</li>\n<li>Manténgase en esta posición durante tres segundos, luego baje el pie sin tocar el suelo con el talón.</li>\n</ol>",
    "category": 14,
    "equipment": [
      7
    ],
    "muscles": [
      7
    ],
    "muscles_secondary": [
      15
    ],
    "image_url": "https://live.staticflickr.com/2697/4423049916_97950ca011_b.jpg"
  }
];
