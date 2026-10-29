import { Specialty, SurgeryProtocol } from '../types/operatingRoom';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'urgencias',
    name: 'Quirófano de Urgencias',
    nameEu: 'Larrialdietako Ebakigela',
    shortName: 'Urgencias (Q1)',
    shortNameEu: 'Larrialdiak (Q1)',
    operatingRooms: ['Quirófano 1'],
    description: 'Atención a patología quirúrgica urgente del HUN Área General V las 24 horas: cirugía general de urgencia, politrauma, torácica y soporte.',
    descriptionEu: 'NUO V. Eremu Orokorreko urgentziazko patologia kirurgikoa 24 orduz: larrialdietako kirurgia orokorra, politraumatismoak eta euskarria.',
    iconName: 'Flame',
    accentColor: '#DC2626',
    accessoriesDestination: 'antequirofano_limpio'
  },
  {
    id: 'otorrino',
    name: 'Otorrinolaringología (ORL)',
    nameEu: 'Otorrinolaringologia (ORL)',
    shortName: 'Otorrino (Q2)',
    shortNameEu: 'Otorrino (Q2)',
    operatingRooms: ['Quirófano 2'],
    description: 'Cirugías de cabeza y cuello, microcirugía ótica, timpanoplastias, endoscopia nasosinusal y faringolaringe.',
    descriptionEu: 'Buru eta lepoko kirurgiak, belarriko mikrokirurgia, timpanoplastiak, endoskopia nasosinusala eta faringolaringea.',
    iconName: 'Ear',
    accentColor: '#0284C7',
    accessoriesDestination: 'antequirofano_limpio'
  },
  {
    id: 'oftalmologia',
    name: 'Oftalmología',
    nameEu: 'Oftalmologia',
    shortName: 'Oftalmología (Q3-4)',
    shortNameEu: 'Oftalmologia (Q3-4)',
    operatingRooms: ['Quirófano 3', 'Quirófano 4'],
    description: 'Microcirugía ocular de alta precisión: cataratas, vitrectomía, glaucoma, desprendimiento de retina y trasplantes corneales.',
    descriptionEu: 'Zehaztasun handiko begiko mikrokirurgia: kataratak, bitrektomia, glaukoma, erretinaren askatzea eta korneako transplanteak.',
    iconName: 'Eye',
    accentColor: '#0D9488',
    accessoriesDestination: 'antequirofano_limpio'
  },
  {
    id: 'urologia',
    name: 'Urología',
    nameEu: 'Urologia',
    shortName: 'Urología (Q5-6)',
    shortNameEu: 'Urologia (Q5-6)',
    operatingRooms: ['Quirófano 5', 'Quirófano 6'],
    description: 'Cirugía laparoscópica y endourológica del HUN B: Nefrectomías con Pilé, RTU con Allen, URS con pierna bajada, NLP con rodillo, Prostatectomía en Trendelenburg.',
    descriptionEu: 'NUO Bko kirurgia laparoskopikoa eta endourologikoa: Nefrektomiak Pilé-rekin, RTU Allen-ekin, URS hanka jaitsita, NLP arrabolaz, Prostatektomia Trendelenburg-en.',
    iconName: 'Activity',
    accentColor: '#7C3AED',
    accessoriesDestination: 'mueble_interior'
  },
  {
    id: 'traumatologia',
    name: 'Traumatología y Cirugía Ortopédica',
    nameEu: 'Traumatologia eta Kirurgia Ortopedikoa',
    shortName: 'Traumatología (Q7-8)',
    shortNameEu: 'Traumatologia (Q7-8)',
    operatingRooms: ['Quirófano 7', 'Quirófano 8'],
    description: 'Prótesis de cadera y rodilla, artroscopias de hombro en silla de playa, mesa de tracción ortopédica para fracturas y columna.',
    descriptionEu: 'Aldaka eta belauneko protesiak, sorbaldako artroskopiak hondartza-aulkian, hausturetako trakzio-mahaia eta bizkarrezurra.',
    iconName: 'Bone',
    accentColor: '#EA580C',
    accessoriesDestination: 'antequirofano_limpio'
  }
];

export const SURGERY_PROTOCOLS: SurgeryProtocol[] = [
  // --- UROLOGÍA (QUIRÓFANOS 5 Y 6) - ACTUALIZADO CON DOCUMENTO OFICIAL HUN B ---
  {
    id: 'uro-nefrectomia-pile-oficial',
    name: 'Nefrectomía Laparoscópica / Suprarrenalectomía con Pilé (Protocolo HUN B)',
    nameEu: 'Nefrektomia Laparoskopikoa / Giltzurrun Gainekoa Pilé-rekin (NUO B Protokoloa)',
    specialtyId: 'urologia',
    operatingRoom: 'Quirófano 5 o Quirófano 6',
    estimatedDuration: '120 - 180 min',
    summary: 'Protocolo Oficial HUN: Decúbito lateral con lado a operar hacia arriba. Tripa al borde de la camilla (ombligo en círculo FIG. 2 y 3). Pilé con mando SensorLine (FIG. 7). Dos topes articulados (FIG. 1) en escápulas y lumbares (FIG. 8 y 9) con protector tipo huevera (FIG. 6). Chocolatina entre piernas (FIG. 5), cincha (FIG. 10) y brazo en teja (FIG. 11).',
    summaryEu: 'NUO Protokolo Ofiziala: Albo-etzana operatuko den aldea gora begira. Sabela ertzean (zilborra biribilean FIG. 2 eta 3). Pilé SensorLine agintearekin (FIG. 7). Bi tope artikulatu (FIG. 1) eskapula eta gerrialdean (FIG. 8 eta 9) arrautzontzi aparrarekin (FIG. 6). Txokolatina hanken artean (FIG. 5), uhala (FIG. 10) eta besoa teilan (FIG. 11).',
    position: {
      name: 'Decúbito Lateral con Pilé / Partición Abdominal (FIG. 1 - FIG. 11)',
      nameEu: 'Albo-etzana Pilé / Sabel-banaketarekin (FIG. 1 - FIG. 11)',
      code: 'decubito_lateral_pile',
      description: 'Partir de supino. Una vez anestesiado y con vías, ombligo al círculo de la mesa. Volteo a decúbito lateral con lado a operar arriba. Tripa al borde de la camilla (si es muy obeso queda colgando asegurada). Pierna inferior semiflexionada, pierna superior extendida con chocolatina de gel en medio. Mesa en Pilé con mando (botón Flex). Topes en escápulas y lumbares con huevera. Cincha de seguridad. Brazo en teja a altura de hombro y muñeca alineada.',
      descriptionEu: 'Bizkarrez hasi. Anestesiatuta eta bideak jarrita, zilborra biribilera. Albo-etzanera biratu operatuko den aldea gora utziz. Sabela ertzean. Beheko hanka erdi tolestuta, goikoa luzatuta txokolatina erdian duela. Mahaia Pilé-an Flex botoiarekin. Topak eskapula eta gerrialdean arrautzontziarekin. Segurtasun-uhala. Besoa teilan.',
      pointsOfAttention: [
        'Ombligo estrictamente a la altura del círculo de la mesa antes de voltear (FIG. 2 y 3)',
        'Tripa al borde de la camilla en laparoscopia; si es cirugía abierta, espalda al borde',
        'Topes articulados colocados en escápulas y lumbares con hueveras sin estorbar al urólogo ni a la instrumentista (FIG. 8 y 9)',
        'Brazo superior en teja con huevera: hombro a la misma altura que antebrazo y muñeca bien colocada; brazo inferior en bracero normal con velcros (FIG. 11)',
        'Mantener vía aérea y venosas totalmente accesibles'
      ],
      anatomicalProtection: [
        'Protector de gel cuadriculado ("chocolatina" FIG. 5) entre las piernas para evitar roces o úlceras',
        'Protector tipo "huevera" (FIG. 6) cubriendo ambos topes articulados',
        'Cincha de seguridad ancha (FIG. 10) para evitar caída del paciente'
      ],
      svgIllustrationType: 'lateral_decubitus',
      figuresReferenced: ['FIG. 1', 'FIG. 2', 'FIG. 3', 'FIG. 4', 'FIG. 5', 'FIG. 6', 'FIG. 7', 'FIG. 7 BIS', 'FIG. 8', 'FIG. 9', 'FIG. 10', 'FIG. 11']
    },
    tableSetup: {
      configuration: 'Mesa quirúrgica Trumpf con mando SensorLine. Puesta en pilé con botón "Flex".',
      headBoardPosition: 'estandar',
      footBoardPosition: 'estandar',
      tableTiltNotes: 'Posición Flex (Pilé) activada desde el mando tras colocar ombligo en círculo y voltear.',
      transferNotes: 'Transfer en decúbito supino plano. No lateralizar hasta visto bueno de anestesia.'
    },
    requiredAccessories: [
      {
        id: 'acc-uro-topes-art',
        name: 'Topes articulados con pieza de enganche a mesa (FIG. 1)',
        nameEu: 'Tope artikulatuak mahairako kakoarekin (FIG. 1)',
        category: 'especial',
        description: 'Dos topes mecánicos articulados para soporte escapular y lumbar.',
        placementGuide: 'Anclar en los rieles laterales a nivel de escápulas y columna lumbar (FIG. 8 y 9).',
        cleaningDestinationNote: 'Dejar en el mueble INTERIOR de Quirófano 5-6 (limpieza limpia todo allí).'
      },
      {
        id: 'acc-uro-hueveras',
        name: 'Protectores tipo huevera de espuma (FIG. 6)',
        nameEu: 'Arrautzontzi motako apar-babesleak (FIG. 6)',
        category: 'sujecion',
        description: 'Espuma acolchada alveolada para recubrir los topes y la teja del brazo.',
        placementGuide: 'Envolver los topes antes de apoyarlos en la espalda.',
        cleaningDestinationNote: 'Mueble INTERIOR de Quirófano 5-6.'
      },
      {
        id: 'acc-uro-chocolatina',
        name: 'Protector de gel cuadriculado "chocolatina" (FIG. 5)',
        nameEu: 'Gel-babeslea "txokolatina" (FIG. 5)',
        category: 'especial',
        description: 'Almohadilla de gel para situar entre las extremidades inferiores.',
        placementGuide: 'Colocar entre muslos, rodillas y piernas.',
        cleaningDestinationNote: 'Mueble INTERIOR de Quirófano 5-6.'
      },
      {
        id: 'acc-uro-teja-brazo',
        name: 'Pernera tipo teja para brazo superior (FIG. 11)',
        nameEu: 'Teila motako hanka-euskarria goiko besoarentzat (FIG. 11)',
        category: 'apoyo_brazo',
        description: 'Soporte curvo acolchado con protector de huevera para el brazo no declive.',
        placementGuide: 'Alinear hombro y antebrazo a misma altura; sujetar con velcros.',
        cleaningDestinationNote: 'Mueble INTERIOR de Quirófano 5-6.'
      },
      {
        id: 'acc-uro-cincha-seguridad',
        name: 'Cincha de seguridad ancha (FIG. 10)',
        nameEu: 'Segurtasun-uhal zabala (FIG. 10)',
        category: 'sujecion',
        description: 'Correa de seguridad acolchada para evitar caídas.',
        placementGuide: 'Pasar sobre pelvis / trocánter rodeando la mesa.',
        cleaningDestinationNote: 'Mueble INTERIOR de Quirófano 5-6.'
      }
    ],
    celadorDentroActions: [
      'Esperar visto bueno de anestesia y comprobación de vías con el paciente en supino.',
      'Deslizar al paciente hasta colocar el ombligo en el círculo de la mesa (FIG. 2 y 3).',
      'Volteo coordinado a decúbito lateral con el lado a operar hacia arriba (FIG. 4).',
      'Tripa al borde de la camilla. Colocar chocolatina de gel entre las piernas (FIG. 5).',
      'Coger el mando SensorLine y poner la mesa en pilé pulsando "Flex" (FIG. 7 y 7 bis).',
      'Colocar los dos topes articulados en escápulas y lumbares con protector de huevera (FIG. 1, 6, 8, 9).',
      'Fijar la cincha de seguridad (FIG. 10).',
      'Colocar el brazo superior en la teja con huevera y el inferior en bracero normal con velcros (FIG. 11).',
      'Al terminar: volver a plano, retirar accesorios y DEJARLOS EN EL MUEBLE INTERIOR DE Q5-6.'
    ],
    celadorFueraActions: [
      'Recepción del paciente en planta/UCMA con documentación y check list.',
      'Transferencia en transfer supino.',
      'Transporte de la pieza quirúrgica renal a Anatomía Patológica.',
      'Retorno a URPA y devolución de bala al transfer.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: [
        'Visto bueno obligatorio de anestesia antes de mover ombligo al círculo o voltear',
        'Vigilancia estricta de vía aérea y vías venosas libres al colocar los brazos'
      ],
      scrubNurseCoordination: [
        'Comprobación de que los topes articulados no invaden el campo estéril ni molestan a la instrumentista',
        'Conexión de torre laparoscópica y aspirador'
      ],
      positioningSafetyChecks: [
        'Verificar que el ombligo coincide con la partición de la mesa',
        'Verificar que los protectores de huevera impiden contacto metálico con la piel'
      ]
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'En el mueble dentro de quirófano 5-6',
      destinationRule: 'En los quirófanos 5 y 6 los accesorios se dejan en el mueble donde está el resto de los accesorios DENTRO de quirófano. El personal de limpieza limpia TODOS los accesorios allí.'
    }
  },
  {
    id: 'uro-litotomia-allen-oficial',
    name: 'Litotomía con Perneras Allen: RTU, Rezum, Botox, Cistoceles, Mallas (Protocolo HUN B)',
    nameEu: 'Litotomia Allen Hanka-euskarriekin: RTU, Rezum, Botox, Zistozelak (NUO B Protokoloa)',
    specialtyId: 'urologia',
    operatingRoom: 'Quirófano 5 o Quirófano 6',
    estimatedDuration: '45 - 90 min',
    summary: 'Protocolo Oficial HUN: Decúbito supino con nalgas en el borde de la parte pélvica de la mesa. Calcetines de tubitón para proteger piernas. Perneras Allen con piezas negras de pinza (FIG. 12) y rosca (FIG. 15) en la zona de dos círculos (FIG. 13 y 14) o zona cercana al cabecero si hay prolongador para no chocar gatillos. Subir piernas tras preguntar a anestesia. Muslo relajado en cara interna (FIG. 16 y 17).',
    summaryEu: 'NUO Protokolo Ofiziala: Bizkarrez etzanda ipurmasailak zati pelbikoaren ertzean. Tubitón galtzerdiak hankak babesteko. Allen hanka-euskarriak pintza beltz (FIG. 12) eta torlojuarekin (FIG. 15) bi biribildun gunean (FIG. 13 eta 14). Hankak anestesiari galdetu ondoren igo. Izterrak barnealdetik lasai (FIG. 16 eta 17).',
    position: {
      name: 'Litotomía con Perneras Allen (FIG. 12 - FIG. 17)',
      nameEu: 'Litotomia Allen Hanka-euskarriekin (FIG. 12 - FIG. 17)',
      code: 'litotomia',
      description: 'Nalgas al borde de la mesa pélvica. Piernas protegidas con calcetines de tubitón. Perneras Allen encajadas con mordaza en zona de dos círculos. Subida y bajada sincronizada. Cara interna del muslo relajada.',
      descriptionEu: 'Ipurmasailak zati pelbikoaren ertzean. Hankak tubitón galtzerdiekin babestuta. Allen hanka-euskarriak bi biribildun gunean lotuta. Bi hankak batera igo eta jaitsi. Izterra barnealdetik erlaxatuta.',
      pointsOfAttention: [
        'Nalgas exactamente en el borde de la parte pélvica de la mesa de quirófano',
        'Colocar calcetines o medias de "tubitón" antes de subir a las perneras',
        'Piezas negras de pinza (FIG. 12) con rosca manual (FIG. 15) bien fijadas',
        'Si la mesa tiene prolongador, colocar pernera en la zona más cercana al cabecero para que los gatillos no choquen con la pieza negra (FIG. 15)',
        'Preguntar SIEMPRE a la persona responsable de anestesia antes de bajar perneras o subir piernas',
        'Muslo en su cara interna relajado para evitar lesiones del nervio ciático poplíteo externo (FIG. 17)'
      ],
      anatomicalProtection: [
        'Medias de tubitón en miembros inferiores',
        'Botas Allen acolchadas amarillas sin contacto metálico con la piel',
        'Almohadillado sacro'
      ],
      svgIllustrationType: 'lithotomy',
      figuresReferenced: ['FIG. 12', 'FIG. 13', 'FIG. 14', 'FIG. 15', 'FIG. 16', 'FIG. 17']
    },
    tableSetup: {
      configuration: 'Mesa quirúrgica con perneras Allen / Goepel montadas con pinza negra y rosca en los dos círculos.',
      headBoardPosition: 'estandar',
      footBoardPosition: 'perneras_acopladas',
      tableTiltNotes: 'Nivelada o ligero Trendelenburg a criterio del urólogo.',
      transferNotes: 'Paso en supino; deslizar nalgas al borde tras visto bueno anestésico.'
    },
    requiredAccessories: [
      {
        id: 'acc-allen-stirrups',
        name: 'Perneras ergonómicas Allen con botas amarillas (FIG. 12 y 16)',
        nameEu: 'Allen hanka-euskarriak bota horiekin (FIG. 12 eta 16)',
        category: 'perneras',
        description: 'Perneras con pistón neumático y botas de pantorrilla integradas.',
        placementGuide: 'Insertar en piezas negras en la zona de dos círculos (FIG. 13).',
        cleaningDestinationNote: 'Dejar en el mueble INTERIOR de Quirófano 5-6.'
      },
      {
        id: 'acc-pinza-negra',
        name: 'Piezas negras de enganche a la mesa con rosca (FIG. 12 y 15)',
        nameEu: 'Mahaira lotzeko pieza beltzak torlojuarekin (FIG. 12 eta 15)',
        category: 'perneras',
        description: 'Mordazas metálicas con pomo giratorio de fijación.',
        placementGuide: 'Apretar con fuerza en riel; comprobar que los gatillos quedan libres.',
        cleaningDestinationNote: 'Mueble INTERIOR de Quirófano 5-6.'
      },
      {
        id: 'acc-tubiton-socks',
        name: 'Medias de tubitón protectoras para piernas',
        nameEu: 'Hankak babesteko tubitón galtzerdiak',
        category: 'sujecion',
        description: 'Calcetín tubular elástico suave.',
        placementGuide: 'Colocar desde los pies hasta mitad de pantorrilla.',
        cleaningDestinationNote: 'Desechable / Lavandería.'
      }
    ],
    celadorDentroActions: [
      'Colocar las perneras Allen en los dos círculos con las piezas negras y roscas bien apretadas (FIG. 13, 14, 15).',
      'Deslizar al paciente con nalgas al borde de la mesa tras el visto bueno de anestesia.',
      'Poner medias de tubitón al paciente.',
      'Preguntar a anestesia y bajar las perneras para subir ambas piernas de forma SIMULTÁNEA.',
      'Verificar que el muslo queda relajado en su cara interna (FIG. 16 y 17).',
      'Retirar tramo de pies y colocar saco colector si es RTU.',
      'Al terminar: colocar tramo de pies ANTES de bajar las piernas.',
      'Bajar ambas piernas simultáneamente con suavidad.',
      'DEJAR TODOS LOS ACCESORIOS EN EL MUEBLE DENTRO DE QUIRÓFANO 5-6.'
    ],
    celadorFueraActions: [
      'Recepción en UCMA o planta.',
      'Ayuda en transfer.',
      'Aporte de sueros de irrigación de glicina o fisiológico.',
      'Retorno a URPA/UCMA y devolución de bala al transfer.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: [
        'Preguntar obligatoriamente antes de mover o elevar piernas',
        'Coordinar descenso de extremidades por posible descompensación hemodinámica'
      ],
      scrubNurseCoordination: [
        'Conexión de resectoscopio o fibra láser Rezum',
        'Control de recuento y recogida de fragmentos para anatomía patológica'
      ],
      positioningSafetyChecks: [
        'Verificar gatillos de perneras libres de obstáculos',
        'Ausencia de tensión en hueco poplíteo y peroné'
      ]
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'En el mueble dentro de Quirófano 5-6',
      destinationRule: 'En los quirófanos 5 y 6 los accesorios se dejan en el mueble donde está el resto de los accesorios DENTRO de quirófano. El personal de limpieza limpia TODOS los accesorios allí.'
    }
  },
  {
    id: 'uro-urs-pierna-bajada-oficial',
    name: 'Posición URS: Ureteroscopias y Litotricia con Pierna Afectada Bajada (Protocolo HUN B)',
    nameEu: 'URS Posizioa: Ureteroskopiak eta Litotrizia Afektatutako Hanka Jaitsita (NUO B Protokoloa)',
    specialtyId: 'urologia',
    operatingRoom: 'Quirófano 5 o Quirófano 6',
    estimatedDuration: '45 - 90 min',
    summary: 'Protocolo Oficial HUN: Posición URS con perneras en la que la pierna del lado afectada se baja (FIG. 18). El paciente debe tener las nalgas en el borde de la mesa de quirófano y las piernas con una posición lo más natural y relajada posible para evitar lesiones. Permite paso del Arco de RX y ureteroscopio.',
    summaryEu: 'NUO Protokolo Ofiziala: URS posizioa hanka-euskarriekin, afektatutako aldeko hanka JAITSITA duela (FIG. 18). Pazienteak ipurmasailak mahaiaren ertzean izan behar ditu eta hankak modu natural eta erlaxatuan. RX Arkuari lekua uzten dio.',
    position: {
      name: 'Posición URS con Pierna Afecta Bajada (FIG. 18)',
      nameEu: 'URS Posizioa Afektatutako Hanka Beheratuta (FIG. 18)',
      code: 'posicion_urs',
      description: 'Nalgas en el borde de la mesa. Pierna del lado no afectado elevada en pernera Allen; pierna del lado afectado descendida en pernera para dar paso al cirujano y fluoroscopia de Rayos X (FIG. 18).',
      descriptionEu: 'Ipurmasailak mahaiko ertzean. Afektatu gabeko hanka Allen euskarrian goratuta; afektatutako aldeko hanka beheratuta zirujauari eta RX fluoroskopiari bidea emateko (FIG. 18).',
      pointsOfAttention: [
        'Nalgas al borde de la mesa de quirófano',
        'Confirmar con el urólogo el uréter afecto (derecho o izquierdo)',
        'Bajar la pernera del lado afectado de forma suave (FIG. 18)',
        'Mantener posición lo más natural y relajada posible para evitar cualquier tipo de lesión'
      ],
      anatomicalProtection: [
        'Acolchado de bota en ambas extremidades',
        'Evitar hiperabducción en la pierna no intervenida'
      ],
      svgIllustrationType: 'lithotomy',
      figuresReferenced: ['FIG. 18']
    },
    tableSetup: {
      configuration: 'Mesa con perneras Allen de descenso independiente. Espacio libre para arco de RX.',
      headBoardPosition: 'estandar',
      footBoardPosition: 'perneras_acopladas',
      tableTiltNotes: 'Horizontal.',
      transferNotes: 'Paso en supino plano.'
    },
    requiredAccessories: [
      {
        id: 'acc-allen-stirrups-urs',
        name: 'Perneras Allen de regulación independiente (FIG. 18)',
        nameEu: 'Erregulazio independenteko Allen hanka-euskarriak (FIG. 18)',
        category: 'perneras',
        description: 'Permiten mantener una pierna arriba y otra descendida.',
        placementGuide: 'Ancladas con pinza negra y rosca en zona de dos círculos.',
        cleaningDestinationNote: 'Mueble INTERIOR de Quirófano 5-6.'
      }
    ],
    celadorDentroActions: [
      'Montar perneras en Quirófano 5 o 6.',
      'Acomodar al paciente con nalgas al borde de la mesa.',
      'Preguntar al urólogo cuál es el lado a intervenir.',
      'Bajar la pernera del lado afectado suavemente (FIG. 18).',
      'Introducir el aparato de Rayos X (Arco en C) si se solicita escopia.',
      'Al terminar: volver a subir pernera para retirar campos y pasar paciente a plano.',
      'Accesorios al mueble INTERIOR de Quirófano 5-6.'
    ],
    celadorFueraActions: [
      'Traslado de paciente desde planta con check list.',
      'Aporte de fibras láser desde almacén si se precisa.',
      'Retorno a URPA y devolución de bala al transfer.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: ['Verificar relajación muscular y estabilidad'],
      scrubNurseCoordination: ['Protección estéril del arco de RX'],
      positioningSafetyChecks: ['Comprobar ausencia de apoyo forzado en pierna descendida']
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'En el mueble dentro de Quirófano 5-6',
      destinationRule: 'En los quirófanos 5 y 6 los accesorios se dejan en el mueble donde está el resto de los accesorios DENTRO de quirófano. El personal de limpieza limpia TODOS los accesorios allí.'
    }
  },
  {
    id: 'uro-nlp-rodillo-oficial',
    name: 'Posición NLP: Nefrolitotomía Percutánea Lateralizada con Rodillo (Protocolo HUN B)',
    nameEu: 'NLP Posizioa: Nefrolitotomia Perkutaneoa Arrabolarekin Alboratua (NUO B Protokoloa)',
    specialtyId: 'urologia',
    operatingRoom: 'Quirófano 6',
    estimatedDuration: '90 - 150 min',
    summary: 'Protocolo Oficial HUN: Posición NLP: como la de Ureteroscopia y lateralizada con rodillo en el riñón afectado (FIG. 19). El paciente tiene que tener las nalgas en el borde de la mesa de quirófano y las piernas con una posición lo más natural y relajada posible para evitar algún tipo de lesión. Permite acceso renal simultáneo.',
    summaryEu: 'NUO Protokolo Ofiziala: NLP posizioa: Ureteroskopiakoa bezala eta afektatutako giltzurrunean arrabola jarriz alboratua (FIG. 19). Ipurmasailak ertzean eta hankak ahalik eta naturalen eta lasaien. Sarbide bikoitza ahalbidetzen du.',
    position: {
      name: 'Posición NLP: URS Lateralizada con Rodillo Renal (FIG. 19)',
      nameEu: 'NLP Posizioa: URS Alboratua Giltzurruneko Arrabolarekin (FIG. 19)',
      code: 'posicion_nlp',
      description: 'Nalgas al borde de la mesa. Pierna afecta bajada y tronco lateralizado con rodillo cilíndrico bajo el flanco renal afectado para acceso percutáneo directo (FIG. 19).',
      descriptionEu: 'Ipurmasailak ertzean. Afektatutako hanka jaitsita eta enborra alboratuta giltzurrunaren azpian arrabol zilindrikoa jarriz (FIG. 19).',
      pointsOfAttention: [
        'Nalgas en el borde de la mesa de quirófano',
        'Pierna del lado afecto descendida como en URS',
        'Lateralizar tronco con rodillo cilíndrico en el riñón afectado (FIG. 19)',
        'Piernas en posición lo más natural y relajada posible'
      ],
      anatomicalProtection: [
        'Rodillo acolchado bajo el flanco renal',
        'Descarga de prominencias óseas en perneras Allen'
      ],
      svgIllustrationType: 'lithotomy',
      figuresReferenced: ['FIG. 19']
    },
    tableSetup: {
      configuration: 'Mesa con perneras Allen y rodillo de elevación renal radiotransparente.',
      headBoardPosition: 'estandar',
      footBoardPosition: 'perneras_acopladas',
      tableTiltNotes: 'Horizontal.',
      transferNotes: 'Paso en supino.'
    },
    requiredAccessories: [
      {
        id: 'acc-rodillo-renal-nlp',
        name: 'Rodillo de soporte lumbar / riñón afecto (FIG. 19)',
        nameEu: 'Gerri / giltzurruneko arrabol babeslea (FIG. 19)',
        category: 'especial',
        description: 'Rodillo cilíndrico radiotransparente para lateralizar el riñón.',
        placementGuide: 'Deslizar bajo el flanco lumbar del riñón a intervenir (FIG. 19).',
        cleaningDestinationNote: 'Mueble INTERIOR de Quirófano 5-6.'
      }
    ],
    celadorDentroActions: [
      'Montar perneras en Quirófano 6.',
      'Colocar nalgas al borde de la mesa.',
      'Bajar pernera del lado afectado.',
      'Deslizar el rodillo bajo el flanco del riñón afectado según orden médica (FIG. 19).',
      'Introducir aparato de Rayos X (Arco en C).',
      'Al terminar: retirar rodillo y volver a plano.',
      'Accesorios al mueble INTERIOR de Quirófano 5-6.'
    ],
    celadorFueraActions: [
      'Recepción de paciente con check list.',
      'Retorno a URPA y devolución de bala al transfer.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: ['Control de ventilación con el rodillo lumbar'],
      scrubNurseCoordination: ['Disposición de set de dilatación percutánea y nefroscopio'],
      positioningSafetyChecks: ['Verificar estabilidad del rodillo sin desplazamientos']
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'En el mueble dentro de Quirófano 5-6',
      destinationRule: 'En los quirófanos 5 y 6 los accesorios se dejan en el mueble donde está el resto de los accesorios DENTRO de quirófano. El personal de limpieza limpia TODOS los accesorios allí.'
    }
  },
  {
    id: 'uro-trendelenburg-topes-oficial',
    name: 'Prostatectomía y Cistectomía Radical: Trendelenburg con Topes (Protocolo HUN B)',
    nameEu: 'Prostatektomia eta Zistektomia Erradikala: Trendelenburg Toperekin (NUO B Protokoloa)',
    specialtyId: 'urologia',
    operatingRoom: 'Quirófano 5 o Quirófano 6',
    estimatedDuration: '150 - 240 min',
    summary: 'Protocolo Oficial HUN: Trendelenburg con topes: Prostatectomía radical y Cistectomía Radical por laparoscopia. Brazos metidos por dentro sujetos con la entremetida o sábana habilitada. Topes articulados colocados en la parte de arriba de la mesa (tenga cabecero o no), SIEMPRE con almohadillas protectoras (hueveras) que cubran hombro y cara del paciente, con especial atención a mantener la vía aérea y posibles vías centrales libres (FIG. 20).',
    summaryEu: 'NUO Protokolo Ofiziala: Trendelenburg tope artikulatuekin: Prostatektomia erradikala eta Zistektomia Erradikala laparoskopiaz. Besoak barrutik sartuta maindirearekin lotuta. Tope artikulatuak mahaiaren goiko aldean (burukoa eduki zein ez), BETI kuxin babesleekin (arrautzontziak) sorbalda eta aurpegia babestuz, aire-bidea eta bide zentralak libre utziz (FIG. 20).',
    position: {
      name: 'Trendelenburg con Topes Articulados de Hombro (FIG. 20)',
      nameEu: 'Trendelenburg Sorbaldako Tope Artikulatu Erregulagarriekin (FIG. 20)',
      code: 'trendelenburg_topes',
      description: 'Paciente en decúbito supino inclinado en Trendelenburg pronunciado. Brazos empaquetados por dentro pegados al tronco. Topes articulados en la parte superior con almohadillas protectoras (hueveras) en hombro y cuello (FIG. 20). Vía aérea y vías centrales escrupulosamente libres de presión.',
      descriptionEu: 'Pazientea Trendelenburg nabarmenean etzanda. Besoak barrutik enborrari itsatsita. Tope artikulatuak goiko aldean arrautzontzi kuxinekin sorbalda eta lepoan (FIG. 20). Aire-bidea eta bide zentralak presiorik gabe.',
      pointsOfAttention: [
        'Brazos metidos por dentro sujetos con entremetida o sábana habilitada para tal efecto',
        'Topes articulados colocados en la parte de arriba de la mesa (tenga cabecero o no) (FIG. 20)',
        'SIEMPRE con almohadillas protectoras (hueveras) que cubran hombro y cara del paciente',
        'ESPECIAL ATENCIÓN: Mantener la vía aérea (tubo orotraqueal) y vías centrales totalmente libres de roce o presión',
        'Activar Trendelenburg motorizado de forma gradual'
      ],
      anatomicalProtection: [
        'Protectores acolchados tipo huevera entre topes metálicos y hombros',
        'Entremetida envolvente para protección de dedos y nervio radial/cubital',
        'Protección ocular'
      ],
      svgIllustrationType: 'supine',
      figuresReferenced: ['FIG. 20']
    },
    tableSetup: {
      configuration: 'Mesa quirúrgica con mandos de Trendelenburg motorizado y topes articulados superiores.',
      headBoardPosition: 'estandar',
      footBoardPosition: 'estandar',
      tableTiltNotes: 'Trendelenburg pronunciado (20º - 25º) bajo indicación de cirujano.',
      transferNotes: 'Paso en supino plano con tabla.'
    },
    requiredAccessories: [
      {
        id: 'acc-topes-trendelenburg',
        name: 'Topes articulados superiores de hombros (FIG. 20)',
        nameEu: 'Goiko sorbalda-tope artikulatuak (FIG. 20)',
        category: 'especial',
        description: 'Soportes para impedir el deslizamiento cefálico del paciente.',
        placementGuide: 'Anclar en los rieles superiores a ambos lados de los hombros (FIG. 20).',
        cleaningDestinationNote: 'Mueble INTERIOR de Quirófano 5-6.'
      },
      {
        id: 'acc-huevera-hombros',
        name: 'Protectores acolchados de huevera para hombros (FIG. 20)',
        nameEu: 'Sorbaldetarako arrautzontzi apar-babesleak (FIG. 20)',
        category: 'sujecion',
        description: 'Espuma de protección cutánea y del plexo braquial.',
        placementGuide: 'Colocar entre los topes y los hombros/cuello del paciente.',
        cleaningDestinationNote: 'Mueble INTERIOR de Quirófano 5-6.'
      },
      {
        id: 'acc-entremetida-brazos',
        name: 'Entremetida / sábana para brazos por dentro',
        nameEu: 'Besoak barrutik eusteko maindirea',
        category: 'sujecion',
        description: 'Sábana envolvente para adosar miembros superiores al tronco.',
        placementGuide: 'Pasar bajo el paciente y fijar bajo la colchoneta.',
        cleaningDestinationNote: 'Lavandería.'
      }
    ],
    celadorDentroActions: [
      'Colocar al paciente en decúbito supino.',
      'Meter los brazos por dentro pegados al cuerpo con la entremetida o sábana.',
      'Colocar los topes articulados en la parte superior de la mesa (FIG. 20).',
      'Cubrir SIEMPRE los topes con almohadillas protectoras (hueveras) en hombro y cuello.',
      'Comprobar con la enfermera de anestesia que el tubo orotraqueal y vías centrales están libres de presión (FIG. 20).',
      'Accionar Trendelenburg motorizado cuando el urólogo lo solicite.',
      'Al terminar: volver a plano con suavidad, retirar topes y entremetida.',
      'Dejar accesorios en el mueble INTERIOR de Quirófano 5-6.'
    ],
    celadorFueraActions: [
      'Recepción de paciente con check list.',
      'Envío de ganglios linfáticos a biopsia intraoperatoria si se requiere.',
      'Traslado a URPA y retorno de bala al transfer.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: [
        'Vigilar rigurosamente presiones en vía aérea y no compresión de vías yugulares',
        'Coordinar el descenso progresivo del Trendelenburg al finalizar'
      ],
      scrubNurseCoordination: ['Disposición de instrumental laparoscópico / robótico'],
      positioningSafetyChecks: ['Verificar ausencia de contacto de los topes con el cuello o tráquea']
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'En el mueble dentro de Quirófano 5-6',
      destinationRule: 'En los quirófanos 5 y 6 los accesorios se dejan en el mueble donde está el resto de los accesorios DENTRO de quirófano. El personal de limpieza limpia TODOS los accesorios allí.'
    }
  },

  // --- TRAUMATOLOGÍA (QUIRÓFANOS 7 Y 8) ---
  {
    id: 'trauma-artroscopia-hombro',
    name: 'Artroscopia de Hombro / Reparación de Manguito (Silla de Playa)',
    nameEu: 'Sorbaldako Artroskopia / Mahuka Konponketa (Hondartza Aulkia)',
    specialtyId: 'traumatologia',
    operatingRoom: 'Quirófano 7',
    estimatedDuration: '90 - 120 min',
    summary: 'Procedimiento artroscópico de hombro realizado en posición de silla de playa (beach-chair), con respaldo articulado y acceso posterior desobstruido.',
    summaryEu: 'Hondartza-aulkian egindako sorbaldako prozedura artroskopikoa, bizkarralde artikulatuarekin eta atzeko sarbide librearekin.',
    position: {
      name: 'Silla de Playa (Beach-Chair)',
      nameEu: 'Hondartza Aulkia (Beach-Chair)',
      code: 'silla_de_playa',
      description: 'El paciente se eleva en ángulo de 45º a 60º respecto a la horizontal, con ligera flexión de rodillas para evitar deslizamiento caudal.',
      pointsOfAttention: [
        'Asegurar fijación rígida de la cabeza en el cabecero trilobular con mentonera para evitar hiperflexión o torsión cervical.',
        'Retirar el segmento lateral posterior del respaldo correspondiente al hombro intervenido.',
        'Colocar rodillo o cuña poplítea con rodillas flexionadas para relajar el nervio ciático.',
        'Proteger el plexo braquial del brazo contralateral manteniéndolo en apoyabrazos acolchado a menos de 90º.'
      ],
      anatomicalProtection: [
        'Protección de la columna cervical con fijación en posición neutra',
        'Descarga de talones con almohadillas de gel',
        'Protección del nervio cubital contralateral en apoyabrazos',
        'Cincha pélvica ancha acolchada asegurada'
      ],
      svgIllustrationType: 'beach_chair'
    },
    tableSetup: {
      configuration: 'Mesa quirúrgica con accesorio específico de Respaldo de Silla de Playa acoplado al pie.',
      headBoardPosition: 'retirada',
      footBoardPosition: 'prolongador',
      tableTiltNotes: 'Elevación del respaldo a 45º-60º previa intubación o bloqueo interescalénico.',
      transferNotes: 'Paso del paciente con transfer en decúbito supino plano antes de montar los ángulos de la silla de playa.'
    },
    requiredAccessories: [
      {
        id: 'acc-beach-chair',
        name: 'Módulo Respaldo Silla de Playa con gajos desmontables',
        category: 'mesa',
        description: 'Respaldo articulado con paneles escapulares desmontables a izquierda o derecha.',
        placementGuide: 'Insertar en los bulones del pie de mesa; comprobar anclaje con pestillo de seguridad.',
        cleaningDestinationNote: 'Tras limpieza, guardar en el mueble del antequirófano Q7-8.'
      },
      {
        id: 'acc-head-trilobular',
        name: 'Cabecero trilobular articulado con mentonera y correas',
        category: 'especial',
        description: 'Soporte occipital y mentoniano acolchado para inmovilización cefálica rígida.',
        placementGuide: 'Acoplar al extremo superior del respaldo de playa; graduar altura según la longitud del tronco.',
        cleaningDestinationNote: 'Dejar en antequirófano Q7-8 una vez desinfectado.'
      }
    ],
    celadorDentroActions: [
      'Acoplar la mesa quirúrgica con el respaldo de silla de playa antes de meter al paciente.',
      'Ayudar al transfer del paciente en plano junto con el celador de fuera.',
      'Asistir a la enfermera de anestesia en el bloqueo interescalénico o intubación sujetando la cabeza si se solicita.',
      'Elevar de forma sincronizada y gradual el respaldo a 50º asegurando la cincha pélvica.',
      'Retirar el panel escapular del lado a operar una vez colocado el paciente.',
      'Al finalizar la intervención, bajar la mesa suavemente a posición horizontal para el despertar y transfer.',
      'Desmontar el módulo de playa, depositarlo dentro del quirófano para desinfección y tras su limpieza llevarlo al mueble del antequirófano de Q7-8.'
    ],
    celadorFueraActions: [
      'Comprobar check list de quirófano en planta/UCMA y retirar cabecero/Balkan.',
      'Traer al paciente al transfer con su cama bien nivelada.',
      'Ayudar en la transferencia en el transfer.',
      'Tras la cirugía, retornar al paciente a URPA con bala de O2 y pulsioxímetro, devolviendo después la bala al transfer.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: [
        'Confirmar con enfermera de anestesia el lado a intervenir antes de colocar accesorios',
        'Coordinar el momento exacto de la incorporación del tronco con la estabilidad hemodinámica del paciente'
      ],
      scrubNurseCoordination: [
        'Confirmar la retirada del gajo escapular correspondiente antes del pintado del campo estéril'
      ],
      positioningSafetyChecks: [
        'Verificar ausencia de compresión del lóbulo auricular y ojos en el cabecero',
        'Confirmar anclajes mecánicos con doble comprobación visual'
      ]
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'Dentro del quirófano 7 en zona segura sin riesgo de caídas',
      destinationRule: 'Una vez limpios y desinfectados por el personal de limpieza, se depositan en el mueble habilitado en el ANTEQUIRÓFANO.'
    }
  },
  {
    id: 'trauma-protesis-cadera',
    name: 'Prótesis Total de Cadera (PTC) / Artroplastia (Decúbito Lateral)',
    nameEu: 'Aldakako Protesi Osoa (PTC) (Albo-etzana)',
    specialtyId: 'traumatologia',
    operatingRoom: 'Quirófano 7',
    estimatedDuration: '100 - 140 min',
    summary: 'Colocación de prótesis de cadera en decúbito lateral estricto a 90º con fijadores pélvicos sacro y púbico.',
    summaryEu: 'Aldakako protesia jartzea 90º-ko albo-etzan zorrotzean sakro eta pubis euskarri pelbikoekin.',
    position: {
      name: 'Decúbito Lateral Estricto',
      nameEu: 'Albo-etzan Zorrotza',
      code: 'decubito_lateral',
      description: 'Paciente sobre el lado no afecto, en ángulo de 90º perpendicular a la mesa, fijado con soportes pélvicos púbico y sacro.',
      pointsOfAttention: [
        'Alinear la columna vertebral en un plano paralelo a la mesa.',
        'Colocar rodillo axilar bajo el hemitórax declive (a 2 dedos bajo la axila) para proteger el plexo braquial.',
        'Brazo inferior en apoyabrazos inferior; brazo superior en soporte de puente o apoyabrazos doble.',
        'Almohada o cojín intercrural amplio entre las rodillas para mantener abducción.'
      ],
      anatomicalProtection: [
        'Rodillo axilar de descarga torácica',
        'Protección de nervio ciático poplíteo externo y maléolos',
        'Protección de oreja y ojo declive'
      ],
      svgIllustrationType: 'lateral_decubitus'
    },
    tableSetup: {
      configuration: 'Mesa quirúrgica estándar con raíles laterales limpios para fijar soportes pélvicos.',
      headBoardPosition: 'estandar',
      footBoardPosition: 'estandar',
      tableTiltNotes: 'Mesa completamente nivelada.',
      transferNotes: 'Paso en supino desde transfer; anestesia raquídea asistida por celador.'
    },
    requiredAccessories: [
      {
        id: 'acc-pelvic-posts',
        name: 'Soportes pélvicos acolchados (Púbico y Sacro) con vástagos',
        category: 'especial',
        description: 'Postes cilíndricos acolchados con mordaza para fijar la pelvis de forma rígida a 90º.',
        placementGuide: 'Fijar en raíles laterales: uno en sínfisis púbica y otro en sacro.',
        cleaningDestinationNote: 'Dejar en antequirófano Q7-8 tras desinfección.'
      },
      {
        id: 'acc-axillary-roll',
        name: 'Rodillo axilar de silicona / espuma viscoelástica',
        category: 'especial',
        description: 'Rodillo cilíndrico para evitar compresión del plexo braquial del lado declive.',
        placementGuide: 'Situar debajo de la axila del lado apoyado a 5 cm del hueco axilar.',
        cleaningDestinationNote: 'Antequirófano Q7-8 tras limpieza.'
      }
    ],
    celadorDentroActions: [
      'Asistir en la anestesia raquídea sujetando al paciente con espalda curvada.',
      'Volteo a decúbito lateral con 3 personas liderado por anestesiólogo.',
      'Colocar rodillo axilar inmediatamente.',
      'Fijar soportes pélvicos sacro y anterior a 90º.',
      'Colocar cojín entre piernas.',
      'Al terminar: retirar soportes, voltear a supino con suavidad.',
      'Dejar accesorios dentro para limpieza y tras desinfección llevar al mueble del antequirófano Q7-8.'
    ],
    celadorFueraActions: [
      'Traslado desde planta comprobando documentación.',
      'Retirar cabecero y Balkan de la cama.',
      'Traslado a URPA con bala de O2 y pulsioxímetro.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: ['Sujeción estable durante punción raquídea', 'Vigilancia de pulsos periféricos'],
      scrubNurseCoordination: ['Verificar campo quirúrgico libre de fijaciones metálicas'],
      positioningSafetyChecks: ['Verificar ausencia de presión sobre ojos y oreja inferior']
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'Dentro del quirófano en ubicación estable',
      destinationRule: 'Una vez limpios por limpieza, guardar en el mueble habilitado en el ANTEQUIRÓFANO.'
    }
  },
  {
    id: 'trauma-fractura-femur-traccion',
    name: 'Enclavado Intramedular de Fémur en Mesa de Tracción (Fluoroscopia RX)',
    nameEu: 'Femurreko Iltzatze Intramedularra Trakzio Mahaian (RX)',
    specialtyId: 'traumatologia',
    operatingRoom: 'Quirófano 8',
    estimatedDuration: '90 - 150 min',
    summary: 'Reducción y enclavado de fractura de fémur o cadera en mesa de tracción ortopédica con control continuo de fluoroscopia (Arco en C de Rayos X).',
    position: {
      name: 'Decúbito Supino en Mesa de Tracción Ortopédica',
      nameEu: 'Bizkarrez Etzana Trakzio Mahai Ortopedikoan',
      code: 'mesa_traccion',
      description: 'Paciente en decúbito supino con poste perineal central, bota de tracción en extremidad afectada y pernera Goepel elevada en la pierna sana.',
      pointsOfAttention: [
        'Poste perineal central fuertemente acolchado para evitar neuropatía del nervio pudendo.',
        'Tracción de extremidad afecta en bota ortopédica con tornillo micrométrico.',
        'Pierna contralateral sana flexionada en pernera Goepel despejando el campo de RX.',
        'Brazos cruzados sobre el tórax o en apoyabrazos superior.'
      ],
      anatomicalProtection: [
        'Protección acolchada de periné y genitales frente al poste central',
        'Protección de talón y tendón de Aquiles en bota de tracción',
        'Descarga de hueco poplíteo en pierna sana'
      ],
      svgIllustrationType: 'traction_table'
    },
    tableSetup: {
      configuration: 'Mesa de tracción ortopédica especializada: se retiran tableros inferiores y se ensamblan barras de tracción.',
      headBoardPosition: 'estandar',
      footBoardPosition: 'retirado',
      tableTiltNotes: 'Horizontal estricta.',
      transferNotes: 'Manejo cuidadoso de la fractura en el transfer con tracción manual continua.'
    },
    requiredAccessories: [
      {
        id: 'acc-perineal-post',
        name: 'Poste perineal central con funda acolchada cilíndrica',
        category: 'especial',
        description: 'Poste vertical de contratracción colocado entre las piernas del paciente.',
        placementGuide: 'Insertar en orificio central de la mesa; acolchar abundantemente con gel o esponja.',
        cleaningDestinationNote: 'Mueble del antequirófano Q7-8 tras desinfección.'
      },
      {
        id: 'acc-rx-c-arm',
        name: 'Aparato de Rayos X (Arco en C de fluoroscopia)',
        category: 'rx_escopia',
        description: 'Equipo de fluoroscopia móvil para control intraoperatorio continuo de reducción.',
        placementGuide: 'Introducir desde el antequirófano; posicionar el arco transversalmente.',
        cleaningDestinationNote: 'Devolver al Almacén de Rayos X tras la intervención.'
      }
    ],
    celadorDentroActions: [
      'Montar la mesa de tracción ortopédica en Q8.',
      'Ayudar en transfer con tracción manual.',
      'Colocar bota de tracción y pernera de pierna sana.',
      'Introducir el aparato de Rayos X (Arco en C) desde su almacén al quirófano 8.',
      'Al terminar: soltar tracción, recolocar tableros de mesa para transfer.',
      'Devolver el aparato de RX a su sitio en el almacén de Rayos X de Área General V.',
      'Dejar accesorios limpios en el mueble del antequirófano Q7-8.'
    ],
    celadorFueraActions: [
      'Traer al paciente desde planta con check list.',
      'Acompañar al paciente a URPA con bala de O2 al finalizar.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: ['Vigilar constantes durante la tracción inicial de la extremidad'],
      scrubNurseCoordination: ['Cubrir el arco en C con funda estéril transparente'],
      positioningSafetyChecks: ['Verificar que el poste perineal no comprime genitales externos']
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'Dentro del quirófano 8',
      destinationRule: 'Limpieza desinfecta; depositar en mueble del ANTEQUIRÓFANO. El aparato de RX se devuelve a su almacén.'
    }
  },

  // --- OFTALMOLOGÍA (QUIRÓFANOS 3 Y 4) ---
  {
    id: 'oft-catarata-faco',
    name: 'Facoemulsificación de Catarata con Implante de LIO (Cabecero Oftalmológico)',
    nameEu: 'Katarataren Fakoemultsiifikazioa LIOrekin (Buru Oftalmologikoa)',
    specialtyId: 'oftalmologia',
    operatingRoom: 'Quirófano 3 o 4',
    estimatedDuration: '20 - 40 min',
    summary: 'Microcirugía oftalmológica ambulatoria en decúbito supino en cabecero estrecho con anillo de silicona y arco de aireación.',
    position: {
      name: 'Decúbito Supino con Cabecero Oftalmológico',
      nameEu: 'Bizkarrez Etzana Buru Oftalmologikoarekin',
      code: 'decubito_supino',
      description: 'Decúbito supino estricto, cabeza inmovilizada en cabecero ultrafino con anillo de silicona centrado.',
      pointsOfAttention: [
        'Brazos adosados al cuerpo con cincha suave',
        'Arco de anestesia elevado para aire fresco u oxígeno sin agobio',
        'Cojín poplíteo bajo rodillas para confort lumbar',
        'Mesa a baja altura para acople de microscopio oftalmológico'
      ],
      anatomicalProtection: [
        'Anillo de silicona para centrado cefálico',
        'Almohadillado poplíteo para relajar columna lumbar'
      ],
      svgIllustrationType: 'supine'
    },
    tableSetup: {
      configuration: 'Mesa quirúrgica con cabecero estrecho especial de oftalmología acoplado.',
      headBoardPosition: 'cabecero_oftalmologico',
      footBoardPosition: 'estandar',
      tableTiltNotes: 'Completamente plana.',
      transferNotes: 'Paso desde sillón de UCMA o camilla.'
    },
    requiredAccessories: [
      {
        id: 'acc-eye-headrest',
        name: 'Cabecero especial de oftalmología estrecho y plano',
        category: 'mesa',
        description: 'Cabecero de perfil bajo que permite situar los pies del cirujano.',
        placementGuide: 'Insertar en los alojamientos cefálicos del pie de mesa.',
        cleaningDestinationNote: 'Dejar en antequirófano Q3-4 tras limpieza.'
      },
      {
        id: 'acc-eye-silicone-ring',
        name: 'Anillo de silicona blanda para centrado cefálico',
        category: 'especial',
        description: 'Anillo blando que inmoviliza la nuca y el occipucio.',
        placementGuide: 'Centrar en el cabecero oftalmológico.',
        cleaningDestinationNote: 'Antequirófano Q3-4.'
      }
    ],
    celadorDentroActions: [
      'Montar el cabecero especial de oftalmología y anillo de silicona.',
      'Ayudar al paciente en el transfer comprobando centrado de cabeza.',
      'Colocar cojín relajador bajo las rodillas.',
      'Asegurar los brazos pegados al tronco.',
      'Al terminar, retirar accesorios limpios al antequirófano Q3-4.'
    ],
    celadorFueraActions: [
      'Recepción del paciente de UCMA con dilatación comprobada y check list.',
      'Devolver a UCMA tras la intervención.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: ['Vigilar confort respiratorio bajo el paño'],
      scrubNurseCoordination: ['Preparación del faco y lente intraocular verificada'],
      positioningSafetyChecks: ['Inmovilidad cefálica total durante la microcirugía']
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'Dentro del Quirófano 3-4',
      destinationRule: 'Una vez limpios por el personal de limpieza, se depositan en el mueble del ANTEQUIRÓFANO.'
    }
  },

  // --- OTORRINOLARINGOLOGÍA (QUIRÓFANO 2) ---
  {
    id: 'orl-amigdalectomia-rose',
    name: 'Amigdalectomía / Adenoidectomía (Posición de Rose)',
    nameEu: 'Amigdalektomia / Adenoidektomia (Rose Posizioa)',
    specialtyId: 'otorrino',
    operatingRoom: 'Quirófano 2',
    estimatedDuration: '30 - 60 min',
    summary: 'Cirugía orofaríngea en decúbito supino con hiperextensión cervical mediante rodillo interescapular (Posición de Rose) y abrebocas en suspensión.',
    position: {
      name: 'Posición de Rose / Hiperextensión Cervical',
      nameEu: 'Rose Posizioa / Lepoaren Hiperextentsioa',
      code: 'posicion_rose',
      description: 'Decúbito supino con rodillo bajo los hombros que hace descender la cabeza hacia atrás, exponiendo la orofaringe.',
      pointsOfAttention: [
        'Rodillo interescapular centrado entre ambas escápulas',
        'Cabeza desciende suavemente en anillo de gel',
        'Suspensión del abrebocas de Davis-Boyle sobre la barra de Mayo',
        'Brazos pegados al tronco'
      ],
      anatomicalProtection: [
        'Protección cervical para evitar hiperextensión brusca',
        'Protección de dientes y labios frente al abrebocas'
      ],
      svgIllustrationType: 'supine'
    },
    tableSetup: {
      configuration: 'Mesa quirúrgica plana en decúbito supino con rodillo interescapular.',
      headBoardPosition: 'estandar',
      footBoardPosition: 'estandar',
      tableTiltNotes: 'Plana o ligero Trendelenburg.',
      transferNotes: 'Transfer estándar con tabla deslizante.'
    },
    requiredAccessories: [
      {
        id: 'acc-rose-roll',
        name: 'Rodillo interescapular de espuma para Posición de Rose',
        category: 'especial',
        description: 'Cilindro acolchado para situar bajo la espalda/hombros del paciente.',
        placementGuide: 'Colocar transversalmente a nivel de escápulas.',
        cleaningDestinationNote: 'Guardar en antequirófano Q2 tras desinfección.'
      }
    ],
    celadorDentroActions: [
      'Preparar la mesa con el rodillo interescapular listo.',
      'Ayudar en transfer y deslizar el rodillo bajo los hombros tras intubación.',
      'Al terminar la cirugía, retirar rodillo y colocar cabeza en neutro para despertar.',
      'Llevar accesorios limpios al mueble del antequirófano Q2.'
    ],
    celadorFueraActions: [
      'Recepción de paciente con acompañante en esclusa.',
      'Informar a familiares de sala de espera.',
      'Traslado a URPA al terminar.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: ['Vigilar que el tubo traqueal no se acode con el rodillo'],
      scrubNurseCoordination: ['Fijación de abrebocas y aspiradores de campo'],
      positioningSafetyChecks: ['Comprobar ojos ocluidos y protegidos']
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'Dentro del Quirófano 2',
      destinationRule: 'Una vez limpios por el personal de limpieza, se depositan en el mueble habilitado en el ANTEQUIRÓFANO.'
    }
  },

  // --- QUIRÓFANO DE URGENCIAS (QUIRÓFANO 1) ---
  {
    id: 'urg-laparotomia-urgente',
    name: 'Laparotomía Exploradora Urgente / Hemoperitoneo / Politrauma (Urgencias 24h)',
    nameEu: 'Larrialdietako Laparotomia Esploratzailea / Hemoperitoneoa (24h)',
    specialtyId: 'urgencias',
    operatingRoom: 'Quirófano 1',
    estimatedDuration: '60 - 180 min',
    summary: 'Intervención de emergencia para control de hemorragia intraabdominal, peritonitis o perforación de víscera hueca en paciente inestable.',
    position: {
      name: 'Decúbito Supino con Brazos en Cruz (<90º)',
      nameEu: 'Bizkarrez Etzana Besoak Gurutzean (<90º)',
      code: 'decubito_supino',
      description: 'Decúbito supino rápido con ambos miembros superiores en apoyabrazos abiertos a menos de 90º para accesos vasculares y monitorización invasiva.',
      pointsOfAttention: [
        'Apertura de brazos estrictamente menor a 90º para evitar distensión del plexo braquial',
        'Mesa rápidamente regulable en altura e inclinación Trendelenburg',
        'Cincha de seguridad en muslos',
        'Dos aspiradores de alta potencia comprobados'
      ],
      anatomicalProtection: [
        'Apoyabrazos con almohadillas viscoelásticas y protección de nervio cubital',
        'Almohadillado occipital y de talones'
      ],
      svgIllustrationType: 'supine'
    },
    tableSetup: {
      configuration: 'Mesa quirúrgica estándar en decúbito supino libre, pie de mesa con máxima batería.',
      headBoardPosition: 'estandar',
      footBoardPosition: 'estandar',
      tableTiltNotes: 'Capacidad de Trendelenburg rápido.',
      transferNotes: 'Transfer de emergencia: coordinación de 4 personas si procede de UCI B o Urgencias.'
    },
    requiredAccessories: [
      {
        id: 'acc-dual-armboards-urg',
        name: 'Dos apoyabrazos acolchados con mordaza rápida',
        category: 'apoyo_brazo',
        description: 'Apoyabrazos radiotransparentes con cinchas acolchadas.',
        placementGuide: 'Fijar en rieles bilaterales; apertura menor de 85º.',
        cleaningDestinationNote: 'Dejar en antequirófano Q1 tras desinfección.'
      }
    ],
    celadorDentroActions: [
      'Celador de Urgencias (siempre dentro): Preparar Q1 con mesa y apoyabrazos.',
      'Recepción inmediata en transfer con tabla deslizante.',
      'Colocar ambos apoyabrazos a <90º para que anestesia canalice vías arteriales y centrales.',
      'Si procede de UCI B: el celador de dentro acude a UCI B para traslado y retorno.',
      'Al terminar, salida con bala de O2 al 50%.',
      'Accesorios limpios al mueble del antequirófano Q1.'
    ],
    celadorFueraActions: [
      'Apoyo en recepción si llega desde Urgencias.',
      'Acudir de emergencia a Hemoterapia por concentrados de hematíes con conservadora.',
      'En caso de fallecimiento: DOS celadores de fuera trasladan cadáver al mortuorio tras embolsado.',
      'Retorno de bala y pulsioxímetro al transfer.'
    ],
    nursingCollaboration: {
      anesthesiaCoordination: ['Monitorización invasiva inmediata y calentador de fluidos'],
      scrubNurseCoordination: ['Apertura urgente de caja de laparotomía básica y compresas radiopacas'],
      positioningSafetyChecks: ['Comprobar ángulo de brazos < 90º']
    },
    postOpAccessoryHandling: {
      cleaningLocation: 'Dentro del Quirófano 1',
      destinationRule: 'Los accesorios se dejan dentro de quirófano protegidos; una vez limpios por el personal de limpieza, se depositan en el mueble del ANTEQUIRÓFANO.'
    }
  }
];
