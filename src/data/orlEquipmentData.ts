export interface OrlEquipmentItem {
  id: string;
  itemNumber: number;
  name: string;
  nameEu?: string;
  originalPhoto: string;
  badge: string;
  location: string;
  mainFunction: string;
  mainFunctionEu?: string;
  orlApplications: string[];
  orlApplicationsEu?: string[];
  celadorDuties: string[];
  celadorDutiesEu?: string[];
  precautionsAndWarnings: string[];
  precautionsAndWarningsEu?: string[];
}

export const ORL_EQUIPMENT_LIST: OrlEquipmentItem[] = [
  {
    id: 'zeiss-microscope',
    itemNumber: 1,
    name: 'Microscopio Quirúrgico ZEISS',
    nameEu: 'ZEISS Mikroskopio Kirurgikoa',
    originalPhoto: 'assets/aistudio/IMG20261030075111_00f2c65e.jpg',
    badge: 'Microcirugía Otológica & Laringe',
    location: 'Quirófano 2 (ORL BQG 2)',
    mainFunction: 'Magnificación óptica de alta resolución e iluminación coaxial profunda para estructuras anatómicas milimétricas del oído medio y laringe.',
    mainFunctionEu: 'Bereizmen handiko handipen optikoa eta argiztapen koaxial sakona erdiko belarriko eta laringeko egitura milimetrikoetarako.',
    orlApplications: [
      'Microcirugía otológica: timpanoplastias, mastoidectomías, estapedectomías y osiculoplastias.',
      'Microcirugía laríngea con laringoscopio de suspensión (cuerdas vocales, pólipos, nódulos).',
      'Cirugía del nervio facial e implantes cocleares.'
    ],
    orlApplicationsEu: [
      'Belarriko mikrokirurgia: timpanoplastiak, mastoidektomiak, estapedektomiak.',
      'Laringeko mikrokirurgia esekiduran (ahots-kordak, polipoak).',
      'Aurpegiko nerbioaren kirurgia eta inplante koklearrak.'
    ],
    celadorDuties: [
      'Desplazamiento sumamente pausado y con el brazo articulado bloqueado y plegado.',
      'Posicionamiento lateral a la cabecera de la mesa quirúrgica según lateralidad quirúrgica.',
      'Bloquear los frenos de la base inmediatamente tras ubicarlo en la posición indicada por el cirujano.',
      'Tendido de cables por el suelo perimetral evitando zonas de paso o estrangulamientos.',
      'Colocar la funda protectora antipolvo al finalizar la jornada quirúrgica y devolver al área asignada.'
    ],
    celadorDutiesEu: [
      'Mugimendu oso pausatua, besoa blokeatuta eta tolestuta dagoela.',
      'Mahaiaren alboan kokatzea zirujauak adierazitako belarriaren edo lepoaren aldean.',
      'Oinarriko balaztak berehala blokeatzea behin lekuan dagoenean.',
      'Kableak zoruan segurtasunez bideratzea zapaldu ez daitezen.',
      'Hauts-babeslekoa jartzea jardunaldia amaitzean eta dagokion lekuan gordetzea.'
    ],
    precautionsAndWarnings: [
      'NUNCA forzar el brazo articulado si los bloqueos mecánicos o electromagnéticos están activados.',
      'No tocar bajo ningún concepto las lentes ópticas con manos desnudas o productos abrasivos.',
      'Comprobar holgura suficiente en los cables antes de iniciar el movimiento del cabecero de la mesa.'
    ],
    precautionsAndWarningsEu: [
      'INOIZ ez behartu beso giltzatua blokeoak aktibatuta badaude.',
      'Ez ukitu leiar optikoak esku hutsez edo produktu urratzaileekin.',
      'Egiaztatu kableen tentsioa mahaia mugitu aurretik.'
    ]
  },
  {
    id: 'karl-storz-tower',
    itemNumber: 2,
    name: 'Torre de Vídeo-Endoscopia KARL STORZ',
    nameEu: 'KARL STORZ Bideo-Endoskopia Dorrea',
    originalPhoto: 'assets/aistudio/IMG20261030075236_cb3396df.jpg',
    badge: 'CENS & Rinología Endoscópica',
    location: 'Quirófano 2 (ORL)',
    mainFunction: 'Captura y visualización en pantalla de alta definición de la cavidad endonasal y senos paranasales con fuente de luz fría LED y sistema de grabación.',
    mainFunctionEu: 'Sudur-barrunbearen eta sinuen definizio handiko bistaratzea pantailan argi hotzeko LED iturriarekin.',
    orlApplications: [
      'Cirugía Endoscópica Nasosinusal (CENS): sinusitis crónica, poliposis nasosinusal.',
      'Dacricistorrinostomías endoscópicas y abordajes de base de cráneo.',
      'Septoplastias complejas y turbinectomías asistidas por endoscopio.'
    ],
    orlApplicationsEu: [
      'Sudur-sinusetako kirurgia endoskopikoa (CENS): sinusitisa, poliposia.',
      'Dakriozistorrinostomia endoskopikoak.',
      'Septoplastiak eta hanka-turbinektomiak.'
    ],
    celadorDuties: [
      'Colocar la torre en el lado contralateral a la posición de trabajo del cirujano principal para visión directa frontal.',
      'Conectar el cable de alimentación a toma hospitalaria de grado médico en quirófano.',
      'Proteger la fibra óptica: evitar radios de curvatura cerrados (ángulo recto) y no dejarla en el suelo donde pueda ser pisada.',
      'Limpieza de chasis y pantallas con toallitas de desinfección específicas del HUN tras la cirugía.'
    ],
    celadorDutiesEu: [
      'Dorrea zirujauaren aurkako aldean jartzea zuzenean pantaila ikus dezan.',
      'Ospitaleko sare elektriko segurura konektatzea.',
      'Zuntz optikoa babestea: ez tolestu angelu zuzenean eta ez utzi lurrean gurpilek zapaldu dezaten.',
      'Xasia eta pantailak NUOko toallatxo desinfektatzaileekin garbitzea amaieran.'
    ],
    precautionsAndWarnings: [
      'Las fibras ópticas son de cuarzo extremadamente frágil: el doblado excesivo provoca rotura interna irreversible.',
      'Comprobar frenos de las 4 ruedas antes de que el equipo quirúrgico conecte las cámaras esterilizadas.'
    ],
    precautionsAndWarningsEu: [
      'Zuntz optikoak oso hauskorrak dira: gehiegi tolestuz gero barneko haustura eragiten da.',
      'Egiaztatu 4 gurpilen balaztak ekipo esterila konektatu aurretik.'
    ]
  },
  {
    id: 'medtronic-ipc',
    itemNumber: 3,
    name: 'Consola MEDTRONIC IPC (Integrated Power Console)',
    nameEu: 'MEDTRONIC IPC Kontsola (Potentzia Integratua)',
    originalPhoto: 'assets/aistudio/IMG20261030075318_a1d38218.jpg',
    badge: 'Fresado Óseo & Microdebrider',
    location: 'Quirófano 2 (Montada en soporte vertical rodable)',
    mainFunction: 'Consola electrónica multipropósito que acciona motores de fresado de alta velocidad para hueso y piezas de mano para microdebrider (desbridador de tejidos blandos).',
    mainFunctionEu: 'Kontsola elektronikoa abiadura handiko hezur-fresak eta ehun bigunak kentzeko mikrodebriderra eragiteko.',
    orlApplications: [
      'Mastoidectomía con fresado del hueso temporal y peñasco en cirugía ótica.',
      'Desbridamiento tisular rápido y limpio de pólipos nasales en CENS.',
      'Apertura endoscópica de senos frontales y esfenoidales.'
    ],
    orlApplicationsEu: [
      'Mastoidektomia hezur tenporalaren fresaketarekin belarri-kirurgian.',
      'Polipo nasalen desbridamendu azkarra CENS bidez.',
      'Fronteko eta esfenoideko sinuen irekiera endoskopikoa.'
    ],
    celadorDuties: [
      'Traslado sobre su pie vertical con base rodable; sujetar con firmeza la barra vertical durante el movimiento.',
      'Ubicar la consola próxima al campo pero sin interferir con la circulación estéril.',
      'Bajar y colocar el pedal multifunción de pie en el suelo a disposición del cirujano.',
      'Colaborar con enfermería instrumentista y circulante en la colocación de la bolsa de suero de irrigación en el portasueros superior.'
    ],
    celadorDutiesEu: [
      'Oin bertikaleko zutoina bi eskuekin eutsita mugitu oreka mantentzeko.',
      'Ebakuntza-eremuaren ondoan kokatu baina zirkulazio esterila oztopatu gabe.',
      'Zoluko kontrol-pedala zirujauaren oinetan prest utzi.',
      'Erizaintzarekin lankidetzan goiko seruma zintzilikatu ureztatzerako.'
    ],
    precautionsAndWarnings: [
      'Centro de gravedad elevado: desplazar siempre a velocidad moderada para evitar vuelco del portasueros.',
      'Comprobar que el cable del pedal no quede tenso ni cruce el pasillo de paso del celador y circulante.'
    ],
    precautionsAndWarningsEu: [
      'Grabitate-zentro altua: beti abiadura kontrolatuan mugitu irauli ez dadin.',
      'Egiaztatu pedalaren kablea ez dela tenk geratzen igarotze-guneetan.'
    ]
  },
  {
    id: 'sillon-clinico',
    itemNumber: 4,
    name: 'Sillón Clínico Regulable con Reposabrazos',
    nameEu: 'Besaulkidun Eserleku Kliniko Erregulagarria',
    originalPhoto: 'assets/aistudio/IMG20261030075336_8764b581.jpg',
    badge: 'Exploración & Posición Incorporada',
    location: 'Quirófano 2 / Sala Exploración ORL',
    mainFunction: 'Sillón médico reclinable con acolchado higiénico, reposacabezas y reposabrazos abatibles para acomodar al paciente despierto o en procedimientos locales.',
    mainFunctionEu: 'Eserleku mediko etzangarria buru-euskarri eta beso-euskarriekin gaixoa eroso kokatuta aztertzeko.',
    orlApplications: [
      'Exploración nasofaringolaríngea prequirúrgica y colocación de anestesia tópica/descongestionante.',
      'Curas de oído, aspiración de secreciones y retirada de taponamientos.',
      'Procedimientos ambulatorios de laringe indirecta y biopsias menores.'
    ],
    orlApplicationsEu: [
      'Ebakuntza aurreko miaketak eta anestesia topikoaren aplikazioa.',
      'Belarriko sendaketak eta sudurreko taponamenduen erretiratzea.',
      'Laringearen miaketa zuzenak eta biopsia txikiak.'
    ],
    celadorDuties: [
      'Acomodar al paciente de forma ergonómica ayudándole al sentarse y levantarse.',
      'Regular la altura y la inclinación del respaldo según solicitud del especialista.',
      'Asegurar los apoyabrazos antes de que el paciente cargue su peso.',
      'Desinfección de superficies tras cada paciente con producto homologado del HUN.'
    ],
    celadorDutiesEu: [
      'Pazienteari esertzen eta zutitzen laguntzea modu seguruan.',
      'Altuera eta bizkarraldearen inklinazioa zirujauaren eskaeraren arabera doitzea.',
      'Beso-euskarriak ondo finkatuta daudela egiaztatzea.',
      'Paziente bakoitzaren ondoren azalak garbitu eta desinfektatzea.'
    ],
    precautionsAndWarnings: [
      'Comprobar la estabilidad del freno de la base antes de iniciar el transfer o sentar al paciente.',
      'Evitar movimientos bruscos del respaldo en pacientes con inestabilidad hemodinámica o cervical.'
    ],
    precautionsAndWarningsEu: [
      'Egiaztatu oinarriaren egonkortasuna gaixoa eseri aurretik.',
      'Ez egin mugimendu bortitzik bizkarraldearekin.'
    ]
  },
  {
    id: 'peso-metalico',
    itemNumber: 5,
    name: 'Peso Metálico Contrapeso para Bandeja sobre Paciente',
    nameEu: 'Paziente Gaineko Erretiluaren Kontrapisu Metalikoa',
    originalPhoto: 'assets/aistudio/IMG20261030075409_ac5f971b.jpg',
    badge: 'Estabilización Mayo en Cabeza y Cuello',
    location: 'Quirófano 2 (ORL)',
    mainFunction: 'Bloque macizo cilíndrico de acero de alto pesaje montado en vástago que ejerce de contrapeso estructural para evitar el balanceo de la bandeja de instrumental sobre el paciente.',
    mainFunctionEu: 'Altzairu trinkozko zilindro astuna mahai-hegaleko tresneria-erretilua egonkor mantentzeko buruko kirurgian.',
    orlApplications: [
      'Microcirugía de laringe con laringoscopio de suspensión.',
      'Cirugías con instrumental microquirúrgico delicado colocado encima del tórax.',
      'Amigdalectomías y faringoplastias con abrebocas de Davis-Boyle.'
    ],
    orlApplicationsEu: [
      'Laringeko mikrokirurgia laringoskopio esekiarekin.',
      'Mikrokirurgiako tresnak bularraren gaineko erretiluan bermatzeko.',
      'Amigdalektomiak Davis-Boyle aho-irekigailuarekin.'
    ],
    celadorDuties: [
      'Manipulación estricta a dos manos sujetando el vástago y la masa para evitar desprendimientos accidentales.',
      'Asegurar el roscado o acople mecánico en la barra de fijación con apriete firme.',
      'Comprobar que nunca repose sobre el paciente: debe quedar fijado al soporte externo homologado con separación de seguridad.',
      'Guardar tras limpieza en el mueble asignado para evitar riesgos de caída a nivel del suelo.'
    ],
    celadorDutiesEu: [
      'Beti bi eskuekin heldu zutoinari eta pisuzko masari ez erortzeko.',
      'Torlojua edo akoplamendua ondo estutu barra finkatzailean.',
      'Egiaztatu EZ DUELA INOIZ gaixoa zuzenean ukitzen: egiturak distantzia segurua bermatu behar du.',
      'Garbiketa ondoren altzari berezian gorde zoruan erortzeko arriskurik gabe.'
    ],
    precautionsAndWarnings: [
      'Elemento de elevado peso: riesgo grave de atrapamiento o caída sobre pies o extremidades si no se sujeta con firmeza.',
      'Asegurar el pasador antes de soltar el agarre manual.'
    ],
    precautionsAndWarningsEu: [
      'Pisu handiko elementua: oinetara edo eskuetara erortzeko arriskua bi eskuekin heltzen ez bada.',
      'Segurtasun-pasadizoa egiaztatu heldulekua askatu aurretik.'
    ]
  },
  {
    id: 'neurosign-v4',
    itemNumber: 6,
    name: 'Monitor de Nervio Intraoperatorio NEUROSIGN V4',
    nameEu: 'NEUROSIGN V4 Barne-Ebakuntzako Nerbio Monitorea',
    originalPhoto: 'assets/aistudio/IMG20261030075437_9437edd3.jpg',
    badge: 'Monitorización EMG Nervio Facial VII',
    location: 'Quirófano 2 (ORL)',
    mainFunction: 'Monitor electromiográfico (EMG) intraoperatorio que detecta y alerta acústicamente ante la proximidad, estimulación o irritación mecánica de nervios craneales motores.',
    mainFunctionEu: 'Nerbio motoreen estimulazioa eta hurbiltasuna soinu-alerta bidez abisatzen duen EMG monitorea.',
    orlApplications: [
      'Parotidectomías (disección y preservación obligatoria de las ramas del Nervio Facial VII).',
      'Timpanoplastias y mastoidectomías complejas (trayecto timpánico y mastoideo del nervio facial).',
      'Tiroidectomías y cirugía cervical (Nervio Laríngeo Recurrente X).'
    ],
    orlApplicationsEu: [
      'Parotidektomiak (Aurpegiko VII Nerbioaren adarrak babesteko).',
      'Mastoidektomia konplexuak (nerbio fazialaren ibilbidea babesteko).',
      'Tiroidektomiak (Laringeko Nerbio Errekurrentea babesteko).'
    ],
    celadorDuties: [
      'Ubicación en la cabecera o lado contralateral a la incisión con la pantalla visible para el cirujano y anestesista.',
      'Conexión eléctrica a enchufe de quirófano con toma de tierra hospitalaria.',
      'Comprobar paso libre de cables sin interferir con la movilidad del equipo ni del microscopio.',
      'Apagar correctamente desde el interruptor principal al terminar la intervención antes de desconectar.'
    ],
    celadorDutiesEu: [
      'Burualdean edo ebakiaren kontrako aldean kokatu zirujauak pantaila ondo ikus dezan.',
      'Ebakigelako sare elektriko segurura konektatu.',
      'Kableak modu ordenatuan bideratu mikroskopioaren mugimendua ez trabatzeko.',
      'Etengailu nagusitik itzali ebakuntza amaitutakoan.'
    ],
    precautionsAndWarnings: [
      'No desconectar cables de electrodos durante el acto quirúrgico; cualquier señal acústica debe ser comunicada inmediatamente al equipo quirúrgico.',
      'Mantener alejado de fuentes intensas de electrocauterio para evitar artefactos en la señal EMG.'
    ],
    precautionsAndWarningsEu: [
      'Ez deskonektatu elektrodoen kableak ebakuntza bitartean.',
      'Kauterio elektrikotik bereizita mantendu seinalearen interferentziak saihesteko.'
    ]
  },
  {
    id: 'silla-trabajo-pedales',
    itemNumber: 7,
    name: 'Silla de Trabajo Regulable con Ruedas y Pedales',
    nameEu: 'Gurpildun eta Pedaldun Lan Eserleku Erregulagarria',
    originalPhoto: 'assets/aistudio/IMG20261030075630_4bed967d.jpg',
    badge: 'Ergonomía Motorizada Microcirugía',
    location: 'Quirófano 2 (ORL)',
    mainFunction: 'Silla quirúrgica motorizada de alta precisión diseñada para largas intervenciones microquirúrgicas con microscopio, regulable en altura mediante pedales en la base sin contaminar las manos.',
    mainFunctionEu: 'Mikrokirurgiako eserleku motorizatua, oineko pedalen bidez altueran doigarria eskuak ez kutsatzeko.',
    orlApplications: [
      'Microcirugía ótica prolongada (mastoidectomías, estapedectomías, implantes cocleares de 3 a 5 horas).',
      'Microcirugía transoral laríngea y procedimientos reconstructivos de cabeza y cuello.'
    ],
    orlApplicationsEu: [
      'Iraupen luzeko belarriko mikrokirurgia (3-5 orduko mastoidektomiak eta inplanteak).',
      'Ahozko laringeko mikrokirurgia eta berreraikitze-prozedurak.'
    ],
    celadorDuties: [
      'PRECAUCIÓN DE USO: Desenchufar de la red eléctrica ANTES de trasladarla o antes de que el cirujano la use en el quirófano para evitar tirones o tropiezos.',
      'Posicionarla en la cabecera junto al microscopio según indicación del cirujano.',
      'Ajustar la altura inicial y los apoyabrazos orientables.',
      'PRECAUCIÓN AL GUARDAR: Al terminar la jornada quirúrgica y tras la desinfección, VOLVER A ENCHUFAR a la corriente eléctrica en su zona de aparcamiento para que la batería interna se recargue por completo para el día siguiente.'
    ],
    celadorDutiesEu: [
      'ERABILTZEKO OHARRA: Sare elektrikotik DESKONEKTATU mugitu edo erabili aurretik kablea ez hausteko.',
      'Burualdean kokatu mikroskopioaren alboan zirujauaren eskaeraren arabera.',
      'Beso-euskarriak eta hasierako altuera prestatu.',
      'GORDETZEKO OHARRA: Jardunaldia amaitzean, BERRIRO KONEKTATU korronte elektrikora barneko bateriak hurrengo egunerako karga daitezen.'
    ],
    precautionsAndWarnings: [
      '¡REGLA ESENCIAL HUN!: DESENCHUFAR para mover/usar -> VOLVER A ENCHUFAR siempre al terminar la jornada para recarga.',
      'No manipular los cables de carga con manos húmedas o durante la limpieza de suelos.',
      'Comprobar el correcto funcionamiento de los pedales de elevación y descenso antes de comenzar.'
    ],
    precautionsAndWarningsEu: [
      'NUO FUNTSEZKO ARAUA!: DESKONEKTATU mugitzeko/erabiltzeko -> BERRIRO KONEKTATU beti gordetzean kargatzeko.',
      'Ez ukitu karga-kableak esku bustiekin.',
      'Egiaztatu pedalen igotze- eta jaiste-funtzionamendua hasi aurretik.'
    ]
  },
  {
    id: 'laser-deka-smartxide',
    itemNumber: 8,
    name: 'Láser DEKA SmartXide² con Maletín Metálico',
    nameEu: 'DEKA SmartXide² Laserra Maletategi Metalikoarekin',
    originalPhoto: 'assets/aistudio/IMG20261030075719_96f811a2.jpg',
    badge: 'Láser CO₂ de Microprecisión & Maletín',
    location: 'Quirófano 2 / Almacén técnico',
    mainFunction: 'Sistema generador de láser de dióxido de carbono (CO₂) de alta precisión acoplado al microscopio para microsección y coagulación tisular mínimamente invasiva.',
    mainFunctionEu: 'Mikroskopioari akoplatutako karbono dioxidozko (CO₂) laser sistema, ahots-kordetan ebaki zehatzak egiteko.',
    orlApplications: [
      'Cordectomías y resección de tumores de cuerda vocal sin traqueotomía (TOLMS).',
      'Papilomatosis respiratoria recurrente y estenosis subglóticas.',
      'Resección de lesiones benignas de laringe con mínimo edema circundante.'
    ],
    orlApplicationsEu: [
      'Kordektomiak eta ahots-kordetako tumoreen erauzketa.',
      'Arnasbideetako papilomatosia eta estenosia.',
      'Laringeko kaltegarriak ez diren lesioak tratatzea.'
    ],
    celadorDuties: [
      '¡REGLA OBLIGATORIA HUN!: La torre del láser DEKA SmartXide² debe trasladarse SIEMPRE acompañada de su MALETÍN METÁLICO de aluminio rotulado "LÁSER" con sus adaptadores y piezas correspondientes.',
      'Traslado pausado protegiendo el brazo articulado emisor de haz.',
      'Colocación del pedal de emisión láser en el suelo, junto al pie del cirujano.',
      'Colocación obligatoria del cartel exterior de advertencia "PELIGRO LÁSER" en todas las puertas de acceso al Quirófano 2.',
      'Disponer de las gafas de protección de longitud de onda específica para CO₂ en la esclusa/entrada antes de encender el láser.'
    ],
    celadorDutiesEu: [
      'NUO BEHARREZKO ARAUA!: DEKA laser dorrea BETI "LASER" idatzita duen ALUMINIOZKO MALETATEGI METALIKOAREKIN eraman behar da.',
      'Emisio-besoa babestuz astiro eta kontuz mugitu.',
      'Laserraren pedala lurrean zirujauaren oinean jarri.',
      '2. Ebakigelako ate guztietan "LASER ARRISKUA" kartela zintzilikatu kanpotik.',
      'CO₂ uhin-luzerarako babes-betaurreko homologatuak atean prest utzi piztu aurretik.'
    ],
    precautionsAndWarnings: [
      '¡ATENCIÓN SEGURIDAD LÁSER!: La torre NUNCA se mueve sin su maletín metálico rotulado "LÁSER".',
      'Nadie puede ingresar al quirófano sin gafas de protección ocular específicas cuando el láser esté en modo "Ready".',
      'Asegurar el brazo articulado en su posición de bloqueo de transporte para no descalibrar los espejos internos.'
    ],
    precautionsAndWarningsEu: [
      'LASER SEGURTASUN OHARRA!: Dorrea EZ DA INOIZ mugitzen "LASER" maletatxo metalikorik gabe.',
      'Inor ezin da sartu ebakigelara babes-betaurrekorik gabe laserra martxan badago.',
      'Garraiorako blokeatu beso artikulatua barneko ispiluak ez deskalibratzeko.'
    ]
  }
];

export const ORL_GENERAL_RULES = {
  titleEs: 'Normas Generales de Manejo y Seguridad del Aparataje en ORL (Quirófano 2)',
  titleEu: 'ORLeko Tresneriaren Maneiu eta Segurtasun Arau Orokorrak (2. Ebakigela)',
  rulesEs: [
    {
      title: 'Desplazamiento y frenos',
      desc: 'Mover todos los equipos a paso moderado, sujetando las estructuras principales y evitando tirones en cables. Al alcanzar la ubicación definitiva en quirófano, activar SIEMPRE los frenos de bloqueo en las ruedas antes de soltar el equipo.'
    },
    {
      title: 'Gestión y protección de cables y fibras ópticas',
      desc: 'Los cables de conexión eléctrica y pedales deben tenderse por el perímetro sin generar bucles sueltos ni zonas de tropiezo. Las fibras ópticas de Karl Storz y microscopios de cuarzo NO deben doblarse en ángulo agudo ni ser pisadas bajo ningún concepto por ruedas de mesas o carros.'
    },
    {
      title: 'Conexión eléctrica y protocolo de recarga',
      desc: 'Conectar únicamente a tomas hospitalarias de grado médico con toma de tierra. En aparatos con batería autónoma (especialmente la Silla de Cirujano con pedales): DESENCHUFAR para su uso y traslado, y VOLVER A ENCHUFAR obligatoriamente al finalizar la jornada para garantizar su carga completa.'
    },
    {
      title: 'Custodia inseparable de maletines de accesorios',
      desc: 'Equipos como el Láser DEKA SmartXide² requieren piezas y lentes ópticas específicas alojadas en su MALETÍN METÁLICO DE ALUMINIO rotulado "LÁSER". Dicho maletín debe viajar SIEMPRE y de manera indivisible junto a la torre.'
    },
    {
      title: 'Limpieza y desinfección reglamentaria',
      desc: 'Tras cada intervención, aplicar toallitas con solución desinfectante autorizada por el Servicio de Medicina Preventiva del HUN sobre chasis y cables. JAMÁS aplicar pulverizaciones directas ni productos abrasivos sobre pantallas táctiles, lentes de microscopio u ópticas de vídeo.'
    },
    {
      title: 'NOTA DE PRECAUCIÓN CRUCIAL EN MESA QUIRÚRGICA',
      desc: 'Ante cualquier modificación de los tramos de la mesa quirúrgica Trumpf, intercambio de cabecero (cuernos, herradura, plano) o la retirada de cualquier accesorio (incluido el portasueros de anestesia), el celador debe CONSULTAR PREVIAMENTE con el personal de Enfermería de Anestesia antes de actuar.'
    }
  ],
  rulesEu: [
    {
      title: 'Mugimendua eta balaztak',
      desc: 'Ekipo guztiak erritmo pausatuan mugitu egitura nagusietatik helduta. Ebakigelan behin betiko lekuan uztean, gurpilen balaztak BETI aktibatu heldulekua askatu aurretik.'
    },
    {
      title: 'Kableen eta zuntz optikoen kudeaketa',
      desc: 'Kableak perimetroan bideratu behaztoparik ez sortzeko. Zuntz optikoak ez tolestu angelu itxian eta ez utzi lurrean gurpilek zapal ez ditzaten.'
    },
    {
      title: 'Konexio elektrikoa eta birkarga protokoloa',
      desc: 'Ospitaleko sare segurura soilik konektatu. Bateriadun gailuetan (bereziki zirujauren pedaldun aulkian): DESKONEKTATU erabiltzeko eta BERRIRO KONEKTATU gordetzean.'
    },
    {
      title: 'Osagarrien maletatxoak zatiezin mantentzea',
      desc: 'DEKA SmartXide² laserrak "LASER" idatzitako ALUMINIOZKO MALETATEGI METALIKOA behar du; dorrearekin batera eraman behar da beti zatiezin.'
    },
    {
      title: 'Garbiketa eta desinfekzio arautua',
      desc: 'Ebakuntza bakoitzaren ondoren, NUOko zapi desinfektatzaile homologatuekin garbitu azalak. Inoiz ez bota likidorik zuzenean pantaila edo optika gainera.'
    },
    {
      title: 'MAHAI KIRURGIKOAREN PREKAUZIO OHARRA',
      desc: 'Trumpf mahaiaren zatiak aldatu edo edozein osagarri kendu aurretik (serum-euskarria barne), zeladoreak BETI Anestesiako Erizaintzari galdetu behar dio lehendabizi.'
    }
  ]
};
