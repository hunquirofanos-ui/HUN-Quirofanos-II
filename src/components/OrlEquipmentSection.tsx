import React, { useState } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  ShieldAlert, 
  Eye, 
  X, 
  Zap, 
  Activity, 
  ChevronRight,
  Maximize2,
  Plug,
  Briefcase,
  Layers,
  ArrowRight,
  FileText
} from 'lucide-react';
import { 
  ORL_EQUIPMENT_LIST, 
  ORL_GENERAL_RULES, 
  ORL_PANORAMIC_PHOTO, 
  ORL_GUIDE_PDF, 
  OrlEquipmentItem 
} from '../data/orlEquipmentData';
import { Language } from '../types/operatingRoom';

export interface PanoramicHotspotDetail {
  id: string;
  number: number;
  name: string;
  nameEu: string;
  badge: string;
  badgeEu: string;
  warningAlert?: string;
  warningAlertEu?: string;
  photo: string;
  secondaryPhoto?: string;
  secondaryPhotoCaption?: string;
  // 1. Nombre (covered by name)
  // 2. Fotografia individual (covered by photo)
  // 3. Función y utilidad en ORL
  functionUtility: string;
  functionUtilityEu: string;
  clinicalProcedures: string[];
  clinicalProceduresEu: string[];
  // 4. Consideraciones para el personal celador
  celadorDuties: string[];
  celadorDutiesEu: string[];
  // 5. Precauciones de traslado, preparación y almacenamiento
  precautions: string[];
  precautionsEu: string[];
}

export const PANORAMIC_HOTSPOTS: PanoramicHotspotDetail[] = [
  {
    id: 'base-mesa',
    number: 1,
    name: 'Base de la mesa quirúrgica',
    nameEu: 'Mahai kirurgikoaren oinarria',
    badge: 'Columna Motriz Trumpf TruSystem',
    badgeEu: 'Trumpf TruSystem Motore Zutabea',
    warningAlert: '¡IDENTIFICACIÓN OFICIAL HUN!: Se trata estrictamente de la BASE DE LA MESA QUIRÚRGICA fija sobre placa de acero (NO es un peso ni contrapeso).',
    warningAlertEu: 'NUO IDENTIFIKAZIO OFIZIALA: Altzairuzko plakaren gainean finkatutako MAHAI KIRURGIKOAREN OINARRIA da zorrotz (EZ da contrapisu bat).',
    photo: 'assets/aistudio/ee926c55b711c8b2b1fd7f640aff27bd7789544b76f87c5f9b257fedd74a2574_4267f004.png',
    functionUtility: 'Columna electromecánica motorizada central que sustenta, eleva, inclina (Trendelenburg/anti-Trendelenburg, lateralización) y bloquea los tableros quirúrgicos universales del Quirófano 2 de ORL.',
    functionUtilityEu: 'Zutabe elektromekaniko motorduna, 2. Ebakigelako mahai-ohol unibertsalak eutsi, altxatu, inklinatu eta finkatzen dituena.',
    clinicalProcedures: [
      'Posicionamiento y articulación de la mesa en microcirugía de oído (timpanoplastias, mastoidectomías).',
      'Articulación para laringoscopia en suspensión e hiperextensión cervical controlada.',
      'Ajuste ergonómico de altura según la técnica quirúrgica (cirujano sentado o de pie).'
    ],
    clinicalProceduresEu: [
      'Belarriko mikrokirurgian mahaia artikulatu eta kokatzea.',
      'Esekidura-laringoskopian hiperextentsio kontrolatua lortzea.',
      'Altuera ergonomikoa doitzea zirujauaren lan-posizioaren arabera.'
    ],
    celadorDuties: [
      'Comprobar que la placa base esté libre de cables o tubos antes de articular o desplazar tableros.',
      'Comprobar el anclaje seguro del transfer de mesa a carro antes de mover al paciente.',
      'Conocer el manejo tanto del mando a distancia TruSystem como de la botonera de emergencia de la columna.',
      'Verificar el bloqueo del freno de columna antes de permitir el acceso del equipo quirúrgico.'
    ],
    celadorDutiesEu: [
      'Egiaztatu oinarriko plakak ez duela kable edo hodirik harrapatzen zatiak artikulatu aurretik.',
      'Mahaiaren eta orgaren arteko lotura segurua egiaztatu pazientea pasa aurretik.',
      'Zutabeko larrialdi-teklatua zein haririk gabeko agintea erabiltzen jakitea.',
      'Zutabearen blokeoa egiaztatu ekipo kirurgikoa hurbildu aurretik.'
    ],
    precautions: [
      'REGLA MANDATORIA: Nunca confundir la base de la columna con contrapesos o piezas auxiliares.',
      'Mantener la zona perimetral de acero inoxidable limpia de sueros salinos para evitar corrosión de los sensores.',
      'Al concluir la jornada quirúrgica, dejar la columna conectada a la red eléctrica para recarga de batería si procede.'
    ],
    precautionsEu: [
      'MANDATORIOA: Inoiz ez nahastu zutabe-oinarria kontrapisuekin.',
      'Altzairu herdoilgaitzeko perimetroa likidoetatik garbi mantendu sentsoreak babesteko.',
      'Jardunaldia amaitzean, zutabea sare elektrikoan konektatuta utzi barne-bateriak kargatzeko.'
    ]
  },
  {
    id: 'microscopio-zeiss',
    number: 2,
    name: 'Microscopio quirúrgico ZEISS',
    nameEu: 'ZEISS Mikroskopio Kirurgikoa',
    badge: 'Microcirugía Otológica & Laringe',
    badgeEu: 'Belarriko eta Laringeko Mikrokirurgia',
    warningAlert: '¡PAUTA CRÍTICA HUN!: Traslado obligatorio SIEMPRE entre DOS personas. Brazo superior SIEMPRE PLEGADO para pasar puertas. Plegar enchufado y con panel de control.',
    warningAlertEu: 'NUO JARRAIBIDE KRITIKOA: Garraioa DERRIGORREZKOA beti BI pertsonen artean. Goiko besoa BETI TOLESTUTA ateak zeharkatzeko. Tolesteko KONEKTATUTA egon behar da eta KONTROL-PANELA erabili.',
    photo: 'assets/aistudio/IMG20261030075111_00f2c65e.jpg',
    functionUtility: 'Sistema óptico quirúrgico de alta resolución con iluminación coaxial profunda y aumentos continuos para intervenir estructuras milimétricas del oído medio, laringe y base de cráneo.',
    functionUtilityEu: 'Bereizmen handiko sistema optiko kirurgikoa argiztapen koaxial sakonarekin erdiko belarriko eta laringeko egitura txikiak operatzeko.',
    clinicalProcedures: [
      'Timpanoplastias, mastoidectomías, estapedectomías y osiculoplastias.',
      'Microcirugía laríngea de cuerdas vocales con laringoscopio de suspensión.',
      'Implantes cocleares y monitorización del nervio facial VII.'
    ],
    clinicalProceduresEu: [
      'Timpanoplastiak, mastoidektomiak, estapedektomiak eta osikuloplastiak.',
      'Ahots-korden mikrokirurgia laringoskopio esekiarekin.',
      'Inplante koklearrak eta aurpegiko nerbioaren zaintza.'
    ],
    celadorDuties: [
      'Traslado OBLIGATORIO siempre entre DOS personas: una dirige la base rodable con visión directa del suelo y otra estabiliza y guía el brazo superior.',
      'El brazo superior debe permanecer SIEMPRE PLEGADO para atravesar puertas del quirófano y pasillos.',
      'Para plegar o desplegar el brazo superior: el microscopio DEBE ESTAR ENCHUFADO a la corriente y accionarse a través del panel de control.',
      'Ubicación a la cabecera del paciente según el lado quirúrgico y bloqueo inmediato de los frenos de las ruedas.',
      'Tendido seguro de cables por el perímetro exterior evitando zonas de paso continuo del personal.'
    ],
    celadorDutiesEu: [
      'Garraioa DERRIGORREZKOA beti BI pertsonen artean: batek oinarria gidatzen du eta besteak besoa egonkortzen du.',
      'Goiko besoa BETI TOLESTUTA egon behar da ateak eta pasilloak igarotzeko.',
      'Besoa tolesteko: mikroskopioa KONEKTATUTA egon behar da eta KONTROL-PANELA erabili.',
      'Burualdean kokatu operatu beharreko aldean eta gurpilen balaztak blokeatu.',
      'Kableak perimetroan modu seguruan bideratu zirkulazio-guneak ez oztopatzeko.'
    ],
    precautions: [
      'NUNCA forzar el brazo superior manualmente si los bloqueos mecánicos o electromagnéticos están activados.',
      'Si el panel de control no responde o no pliega el brazo, AVISAR DE INMEDIATO al personal de Enfermería o al Servicio de Electromedicina (no manipular con violencia).',
      'Extremar precauciones al atravesar puertas para no golpear marcos y descalibrar las lentes.',
      'No tocar las ópticas con guantes sucios o materiales rugosos; colocar siempre la funda protectora antipolvo al terminar la jornada.'
    ],
    precautionsEu: [
      'INOIZ ez behartu goiko besoa eskuz blokeoak aktibatuta badaude.',
      'Panelak ez badu erantzuten, ABISATU BEREHALA Erizaintzari edo Elektromedizinari (ez behartu eskuz).',
      'Ateetatik igarotzean arreta handitu leiarrak deskalibratu ez daitezen.',
      'Ez ukitu leiarrak eskularru zikinekin; jarri beti babes-estalkia jardunaldia bukatzean.'
    ]
  },
  {
    id: 'respirador-anestesia',
    number: 3,
    name: 'Respirador de anestesia',
    nameEu: 'Anestesiako arnasgailua',
    badge: 'Soporte Vital & Monitorización',
    badgeEu: 'Bizitzeko Euskarria & Monitorizazioa',
    warningAlert: '¡EQUIPO CRÍTICO VITAL!: Manejo reservado. Cuidado estricto con mangueras corrugadas, gases medicinales y tomas de pared.',
    warningAlertEu: 'TALDE BIZI-KRITIKOA: Zaintza berezia. Kontuz hodi korrugatuekin, gas medizinalekin eta hormako hartuneekin.',
    photo: 'assets/aistudio/ee926c55b711c8b2b1fd7f640aff27bd7789544b76f87c5f9b257fedd74a2574_4267f004.png',
    functionUtility: 'Estación de anestesia integrada (GE Healthcare) con respirador volumétrico/presométrico, vaporizadores anestésicos y monitor hemodinámico para ventilación controlada durante toda la cirugía.',
    functionUtilityEu: 'Anestesia-estazio integratua arnasgailuarekin eta monitorearekin ebakuntzan zehar gaixoa aireztatzeko.',
    clinicalProcedures: [
      'Anestesia general balanceada e inhalatoria en cirugías de ORL de larga duración.',
      'Ventilación mecánica durante microcirugía laríngea con tubos endotraqueales micro-cuff o láser-flex.',
      'Monitorización continua de pulsioximetría, capnografía, ECG y presión arterial.'
    ],
    clinicalProceduresEu: [
      'Anestesia orokorra ORLeko iraupen luzeko ebakuntzetan.',
      'Aireztatze mekanikoa laringeko ebakuntzetan hodi bereziekin.',
      'ECG, pultsioximetria eta presio arterialaren zaintza jarraitua.'
    ],
    celadorDuties: [
      'Respetar el espacio ergonómico del anestesiólogo en la cabecera del paciente.',
      'Durante el transfer del paciente desde la cama a la mesa, coordinarse estrechamente con anestesia a la voz del médico para no traccionar el tubo ni las vías.',
      'Asistir en el tendido y protección de mangueras de gases medicinales (O₂, aire, vacío) evitando pisadas con las ruedas.',
      'Bloquear los frenos de las ruedas de la estación en cuanto quede ubicada.'
    ],
    celadorDutiesEu: [
      'Anestesiologoaren lan-eremua errespetatu burualdean.',
      'Pazientearen transferrean anestesiarekin koordinatu hodia eta serumen bideak ez askatzeko.',
      'Gasen hodiak zaindu gurpilekin ez zapaltzeko.',
      'Gurpilen balaztak blokeatu behin kokatuta.'
    ],
    precautions: [
      'Jamás desconectar mangueras de gases o cables eléctricos del respirador sin orden de Anestesia.',
      'No colgar objetos pesados de los brazos del respirador ni de las mangueras corrugadas.',
      'Verificar que las ruedas no queden sobre cables durante la intervención.'
    ],
    precautionsEu: [
      'Inoiz ez deskonektatu gasen hodiak Anestesiaren agindurik gabe.',
      'Ez zintzilikatu zama astunik arnasgailuaren besoetan.',
      'Egiaztatu gurpilek ez dituztela kableak zapaltzen.'
    ]
  },
  {
    id: 'torre-orl',
    number: 4,
    name: 'Torre de ORL (KARL STORZ)',
    nameEu: 'ORL Dorrea (KARL STORZ)',
    badge: 'CENS & Rinología Endoscópica',
    badgeEu: 'CENS & Rinologia Endoskopikoa',
    warningAlert: '¡FOTOGRAFÍA ADICIONAL DE DETALLE INCORPORADA!: Con identificación de la pieza metálica superior (pendiente de confirmar denominación técnica exacta).',
    warningAlertEu: 'GOIKO XEHETASUN-ARGAZKIA GEHITUTA: Goiko pieza metalikoaren identifikazioarekin (izen tekniko zehatza baieztatzearen zain).',
    photo: 'assets/aistudio/IMG20261030075236_cb3396df.jpg',
    secondaryPhoto: 'assets/aistudio/ee926c55b711c8b2b1fd7f640aff27bd7789544b76f87c5f9b257fedd74a2574_4267f004.png',
    secondaryPhotoCaption: 'Detalle de la pieza metálica superior en la torre KARL STORZ (pendiente de confirmación de denominación técnica exacta).',
    functionUtility: 'Torre compacta rodable con procesador de imagen HD, cámara endoscópica, fuente de luz fría LED y sistema de insuflación/grabación para visualizar cavidades nasosinusales.',
    functionUtilityEu: 'Bideo-endoskopia dorrea definizio handiko pantaila eta argi hotzeko iturriarekin sudur-barrunbea ikusteko.',
    clinicalProcedures: [
      'Cirugía Endoscópica Nasosinusal (CENS): sinusitis crónica, poliposis y antrostomías.',
      'Dacricistorrinostomías endoscópicas y septoplastias complejas.',
      'Abordajes de base de cráneo y exploraciones diagnósticas rígidas.'
    ],
    clinicalProceduresEu: [
      'Sudur-sinusetako kirurgia endoskopikoa (CENS): sinusitisa eta polipoak.',
      'Dakriozistorrinostomiak eta septoplastiak.',
      'Buru-oinarriko sarbideak eta miaketa diagnostikoak.'
    ],
    celadorDuties: [
      'Incorporada fotografía adicional de detalle de la parte superior con identificación de la pieza metálica (pendiente confirmación técnica).',
      'Colocar la torre en el lado contralateral a la posición de trabajo del cirujano para visión directa sin forzar el cuello.',
      'Conectar el cable de alimentación a toma hospitalaria segura en pared/torreta.',
      'Proteger la fibra óptica: evitar dobleces en ángulo recto y mantenerla alejada del suelo.',
      'Limpieza de chasis y pantallas con toallitas homologadas del HUN tras finalizar.'
    ],
    celadorDutiesEu: [
      'Goiko pieza metalikoaren xehetasun-argazkia gehituta (izen tekniko zehatza baieztatzearen zain).',
      'Dorrea zirujauaren aurkako aldean jarri zuzenean pantaila ikus dezan.',
      'Ospitaleko hartune segurura konektatu.',
      'Zuntz optikoa babestu: ez tolestu angelu zuzenean eta ez utzi lurrean.',
      'Xasia eta pantailak NUOko toallatxoekin garbitu amaieran.'
    ],
    precautions: [
      'Pieza metálica superior: fotografiada y registrada; confirmar con el equipo médico su uso específico.',
      'La fibra óptica es de cuarzo sumamente frágil: el doblado excesivo provoca fractura de filamentos internos irreversible.',
      'Bloquear las 4 ruedas antes de conectar los cables y cámaras estériles.'
    ],
    precautionsEu: [
      'Goiko pieza metalikoa: erregistratua; talde medikuarekin erabilera baieztatu.',
      'Zuntz optikoa oso hauskorra da: gehiegi tolestuz gero hautsi egiten da.',
      'Gurpilen 4 balaztak blokeatu tresna esterilak konektatu aurretik.'
    ]
  },
  {
    id: 'sillon-clinico',
    number: 5,
    name: 'Sillón clínico regulable',
    nameEu: 'Eserleku kliniko erregulagarria',
    badge: 'Exploración & Posición Incorporada',
    badgeEu: 'Miaketa & Posizio Eseria',
    warningAlert: '¡REGLA ESENCIAL HUN!: DESENCHUFAR de la red eléctrica para mover/usar -> VOLVER A ENCHUFAR siempre al terminar la jornada para recarga.',
    warningAlertEu: 'NUO FUNTSEZKO ARAUA: DESKONEKTATU mugitu edo erabiltzeko -> BERRIRO KONEKTATU beti gordetzean bateriak kargatzeko.',
    photo: 'assets/aistudio/IMG20261030075336_8764b581.jpg',
    functionUtility: 'Sillón médico motorizado regulable en altura e inclinación con apoyabrazos abatibles para acomodar al paciente despierto en exploraciones o procedimientos con anestesia local.',
    functionUtilityEu: 'Eserleku mediko erregulagarria gaixoa eseri eta eroso aztertzeko edo anestesia lokaleko prozeduretan.',
    clinicalProcedures: [
      'Exploración prequirúrgica de fosas nasales, faringe y laringe indirecta.',
      'Colocación de anestesia tópica y descongestionantes nasales.',
      'Curas de oído, aspiración de cerumen o secreciones y retirada de taponamientos.'
    ],
    clinicalProceduresEu: [
      'Sudur, faringe eta laringearen ebakuntza aurreko miaketak.',
      'Anestesia topikoa eta deskongestionatzaileak jartzea.',
      'Belarriko sendaketak eta sudurreko taponamenduak kentzea.'
    ],
    celadorDuties: [
      'PRECAUCIÓN DE USO: Desenchufar de la corriente eléctrica antes de desplazarlo para evitar tropiezos o tirones.',
      'Acomodar al paciente ayudándole al sentarse y levantarse con seguridad ergonómica.',
      'Regular la altura e inclinación del respaldo a petición del facultativo.',
      'Comprobar la firmeza de los apoyabrazos antes de que el paciente cargue su peso.',
      'PRECAUCIÓN AL GUARDAR: Tras la desinfección, VOLVER A ENCHUFAR en su plaza asignada para que la batería se recargue por completo.'
    ],
    celadorDutiesEu: [
      'ERABILTZEKO OHARRA: Sare elektrikotik deskonektatu mugitu aurretik.',
      'Pazienteari esertzen eta zutitzen lagundu modu seguruan.',
      'Bizkarraldearen altuera eta angelua doitu medikuak eskatzen dion moduan.',
      'Beso-euskarriak ondo finkatuta daudela egiaztatu.',
      'GORDETZEKO OHARRA: Garbitu ondoren, BERRIRO KONEKTATU bateriak kargatzeko.'
    ],
    precautions: [
      'Comprobar siempre el freno de la base antes de invitar al paciente a tomar asiento.',
      'No forzar el motor eléctrico con el cable conectado a la pared si el paciente se mueve.',
      'Limpieza y desinfección homologada entre paciente y paciente.'
    ],
    precautionsEu: [
      'Oinarriaren balazta egiaztatu gaixoa eseri aurretik.',
      'Ez behartu motorra kablea tenkatuta badago.',
      'Garbitu eta desinfektatu paziente bakoitzaren artean.'
    ]
  },
  {
    id: 'laser-deka',
    number: 6,
    name: 'Láser DEKA SmartXide²',
    nameEu: 'DEKA SmartXide² Laserra',
    badge: 'Láser CO₂ de Microprecisión',
    badgeEu: 'Mikroprezisioko CO₂ Laserra',
    warningAlert: '¡REGLA OBLIGATORIA HUN!: La torre del láser DEKA SmartXide² debe trasladarse y guardarse SIEMPRE acompañada de su MALETÍN METÁLICO rotulado “LÁSER”.',
    warningAlertEu: 'NUO BEHARREZKO ARAUA: DEKA laserraren dorrea BETI "LASER" idatzita duen MALETATEGI METALIKOAREKIN batera mugitu eta gorde behar da.',
    photo: 'assets/aistudio/IMG20261030075719_96f811a2.jpg',
    secondaryPhoto: 'assets/aistudio/ee926c55b711c8b2b1fd7f640aff27bd7789544b76f87c5f9b257fedd74a2574_4267f004.png',
    secondaryPhotoCaption: 'Ubicación del láser DEKA SmartXide² junto a su maletín metálico rotulado "LÁSER" en el Quirófano 2.',
    functionUtility: 'Generador de radiación láser de dióxido de carbono (CO₂) acoplado al microscopio para microsección tisular de altísima precisión y mínima carbonización térmica en cuerdas vocales.',
    functionUtilityEu: 'Karbono dioxidozko (CO₂) laser sistema zehatza ahots-kordetan ebaki garbiak egiteko mikroskopioari lotuta.',
    clinicalProcedures: [
      'Cordectomías y resección transoral de tumores de cuerda vocal (TOLMS).',
      'Papilomatosis respiratoria recurrente y estenosis subglóticas.',
      'Microcirugía de lesiones benignas de laringe (pólipos, nódulos, quistes).'
    ],
    clinicalProceduresEu: [
      'Kordektomiak eta ahots-kordetako tumoreen erauzketa.',
      'Arnasbideetako papilomatosia eta estenosia.',
      'Laringeko lesio onberak tratatzea gutxieneko hanturarekin.'
    ],
    celadorDuties: [
      '¡REGLA MANDATORIA!: La torre y el MALETÍN METÁLICO rotulado "LÁSER" viajan y se guardan SIEMPRE JUNTOS, nunca separados.',
      'Traslado sumamente pausado sujetando el chasis y protegiendo el brazo articulado emisor.',
      'Colocación del pedal de emisión en el suelo junto al pie del cirujano.',
      'Colocación obligatoria de los carteles exteriores de advertencia "PELIGRO LÁSER" en todas las puertas del Q2 antes de iniciar.',
      'Disponer las gafas de protección de longitud de onda CO₂ en la esclusa de acceso.'
    ],
    celadorDutiesEu: [
      'MANDATORIOA: Dorrea eta "LASER" maletatxo metalikoa BETI ELKARREKIN garraiatu eta gorde behar dira.',
      'Astiro eta kontuz mugitu igortze-besoa babestuz.',
      'Laserraren pedala lurrean zirujauaren oinean utzi.',
      '2. Ebakigelako ate guztietan "LASER ARRISKUA" kartelak zintzilikatu kanpotik.',
      'CO₂ uhin-luzerarako babes-betaurrekoak atean prest utzi sartu aurretik.'
    ],
    precautions: [
      '¡SEGURIDAD LÁSER!: La torre NUNCA se mueve sin su maletín metálico rotulado "LÁSER".',
      'Nadie puede acceder al quirófano sin gafas de protección ocular homologadas cuando el láser esté encendido.',
      'Asegurar el brazo articulado en su horquilla de transporte para no descalibrar los espejos ópticos reflectores.'
    ],
    precautionsEu: [
      'SEGURTASUNA: Dorrea EZ DA INOIZ mugitzen "LASER" maletatxo metalikorik gabe.',
      'Inor ezin da sartu betaurreko homologaturik gabe laserra piztuta dagoenean.',
      'Besoko finkagailua blokeatu barneko ispiluak ez desorekatzeko.'
    ]
  },
  {
    id: 'maletin-metalico',
    number: 7,
    name: 'Maletín metálico del láser (LÁSER)',
    nameEu: 'Laserraren maletatxo metalikoa (LASER)',
    badge: 'Micromanipuladores & Ópticas CO₂',
    badgeEu: 'Mikromanipulatzaileak & CO₂ Optikak',
    warningAlert: '¡COMPAÑERO INSEPARABLE DEL LÁSER DEKA!: Custodia conjunta obligatoria en quirófano y almacén técnico.',
    warningAlertEu: 'DEKA LASERRAREN LAGUN BEREIZTEZINA: Zaintza bateratua ezinbestekoa ebakigelan eta biltegian.',
    photo: 'assets/aistudio/ee926c55b711c8b2b1fd7f640aff27bd7789544b76f87c5f9b257fedd74a2574_4267f004.png',
    secondaryPhoto: 'assets/aistudio/IMG20261030075719_96f811a2.jpg',
    secondaryPhotoCaption: 'Maletín metálico rotulado "LÁSER" en el suelo junto a la base rodable del láser DEKA SmartXide².',
    functionUtility: 'Maletín rígido de aluminio reforzado con acolchado técnico interior de alta densidad que protege los micromanipuladores quirúrgicos, guías de luz, lentes colimadoras y piezas de mano del láser DEKA.',
    functionUtilityEu: 'Aluminiozko maletatega indartua, barruan DEKA laserraren pieza optiko garestiak eta mikromanipulatzaileak babesten dituena.',
    clinicalProcedures: [
      'Acoplamiento del micromanipulador al microscopio quirúrgico ZEISS.',
      'Suministro de las piezas de mano para cirugía laríngea abierta o transoral.',
      'Calibración milimétrica del punto focal del rayo láser en cuerdas vocales.'
    ],
    clinicalProceduresEu: [
      'Mikromanipulatzailea ZEISS mikroskopioarekin akoplatzea.',
      'Laringeko kirurgiarako esku-piezak eskaintzea.',
      'Laserraren foku-puntua ahots-kordetan doitzeko tresnak.'
    ],
    celadorDuties: [
      'Moverlo SIEMPRE junto a la torre del láser DEKA SmartXide² en cualquier traslado entre quirófanos o al almacén.',
      'Comprobar que los cierres metálicos de seguridad estén cerrados antes de levantarlo por el asa.',
      'Depositarlo en una superficie plana y segura (nunca en lugares donde pueda sufrir caídas o patadas accidentales).',
      'Custodiarlo en el antequirófano o almacén junto a la torre correspondiente.'
    ],
    celadorDutiesEu: [
      'BETI DEKA laser dorrearekin batera mugitu ebakigelen artean edo biltegira.',
      'Egiaztatu segurtasun-itxiturak ondo sartuta daudela heldulekutik altxatu aurretik.',
      'Leku lau eta seguruan utzi kolpeak edo erorketak saihesteko.',
      'Dorrearen ondoan gorde beti aurre-ebakigelan edo biltegian.'
    ],
    precautions: [
      'No colocar equipos pesados ni cajas encima del maletín.',
      'No abrir el maletín en zonas húmedas o sucias; su apertura está reservada al personal instrumentista y técnico.',
      'Cualquier anomalía en los cierres debe notificarse de inmediato a Electromedicina.'
    ],
    precautionsEu: [
      'Ez jarri pisu astunik maletatxoaren gainean.',
      'Ez ireki gune zikin edo bustietan; irekitzea erizain instrumentistari dagokio.',
      'Itxituretan arazoren bat badago, abisatu berehala Elektromedizinari.'
    ]
  }
];

interface OrlEquipmentSectionProps {
  nightMode: boolean;
  language: Language;
  onBackToOrl?: () => void;
}

export const OrlEquipmentSection: React.FC<OrlEquipmentSectionProps> = ({
  nightMode,
  language,
  onBackToOrl
}) => {
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<{ src: string; alt: string; name: string } | null>(null);
  const [selectedItemTab, setSelectedItemTab] = useState<string>('all');
  const [selectedPanoramicHotspot, setSelectedPanoramicHotspot] = useState<string | null>(null);

  const activeHotspotData = selectedPanoramicHotspot 
    ? PANORAMIC_HOTSPOTS.find(h => h.id === selectedPanoramicHotspot)
    : null;

  const filteredItems = selectedItemTab === 'all' 
    ? ORL_EQUIPMENT_LIST 
    : ORL_EQUIPMENT_LIST.filter(item => item.id === selectedItemTab);

  return (
    <div className="space-y-6 pb-10">
      {/* Top Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100/90 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              <Stethoscope className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>{language === 'es' ? 'Guía Oficial HUN · Quirófano 2' : 'NUO Gida Ofiziala · 2. Ebakigela'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? 'Aparataje Específico de ORL' : 'ORLeko Tresneria Espezifikoa'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {language === 'es'
                ? 'Catálogo técnico y operativo con los 8 equipos específicos de Otorrinolaringología del HUN: fotografías reales, funciones clínicas, cometidos del celador de dentro/fuera y advertencias de seguridad.'
                : 'NUOko Otorrinolaringologiako 8 ekipo espezifikoen katalogo tekniko eta operatiboa: benetako argazkiak, funtzio klinikoak, zeladorearen zereginak eta segurtasun-oharrak.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
            {onBackToOrl && (
              <button
                onClick={onBackToOrl}
                className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'es' ? '← Volver a Q2 ORL' : '← Itzuli Q2 ORLera'}</span>
              </button>
            )}
            <a
              href={`${import.meta.env.BASE_URL}${ORL_GUIDE_PDF}`}
              target="_blank"
              rel="noopener noreferrer"
              download="Guia_Aparataje_ORL_HUN_Actualizada.pdf"
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white transition-all shadow-2xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Descargar Guía Actualizada (PDF)' : 'Gida Eguneratua (PDF)'}</span>
            </a>
            <span className="px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-900 text-sky-700 dark:text-sky-300 font-bold text-xs">
              {language === 'es' ? '8 Equipos' : '8 Ekipo'}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Panoramic View of Quirófano 2 ORL */}
      <div className={`p-4 sm:p-6 rounded-3xl border transition-all ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                {language === 'es' ? 'Fotografía Interactiva del Quirófano 2 de ORL (HUN)' : '2. Ebakigelaren Argazki Interaktiboa (ORL - NUO)'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {language === 'es'
                ? 'Haz clic sobre los 7 puntos interactivos de la fotografía o en los botones inferiores para abrir la ficha técnica y las pautas obligatorias del celador.'
                : 'Klikatu argazkiko 7 puntu interaktiboetan edo beheko botoietan fitxa teknikoa eta zeladorearen zereginak ikusteko.'}
            </p>
          </div>
          <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 self-start sm:self-auto flex items-center gap-1 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-1 rounded-full border border-sky-200 dark:border-sky-800">
            <Sparkles className="w-3 h-3" />
            <span>{language === 'es' ? '7 Elementos Interactivos' : '7 Elementu Interaktibo'}</span>
          </span>
        </div>

        {/* Interactive Panoramic Container with Hotspots */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-md">
          <img 
            src={`${import.meta.env.BASE_URL}${ORL_PANORAMIC_PHOTO}`}
            alt="Vista general Quirófano 2 ORL HUN con elementos señalizados"
            className="w-full h-auto object-cover select-none"
          />

          {/* Hotspot 1: Base de la mesa quirúrgica (x: 8%, y: 78%) */}
          <button
            onClick={() => setSelectedPanoramicHotspot('base-mesa')}
            title="1. Base de la mesa quirúrgica"
            className="absolute left-[7%] bottom-[14%] sm:bottom-[16%] -translate-x-1/2 p-1.5 sm:p-2 rounded-xl bg-blue-900/90 hover:bg-blue-800 text-white border-2 border-white/90 shadow-xl transition-all duration-150 hover:scale-110 flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping group-hover:scale-125" />
            <span className="text-[10px] sm:text-xs font-black tracking-wide hidden sm:inline">1. Base Mesa</span>
            <span className="text-[10px] sm:text-xs font-black tracking-wide sm:hidden">1</span>
          </button>

          {/* Hotspot 2: Microscopio quirúrgico ZEISS (x: 27%, y: 22%) */}
          <button
            onClick={() => setSelectedPanoramicHotspot('microscopio-zeiss')}
            title="2. Microscopio quirúrgico ZEISS"
            className="absolute left-[27%] top-[18%] sm:top-[20%] -translate-x-1/2 p-1.5 sm:p-2 rounded-xl bg-blue-900/90 hover:bg-blue-800 text-white border-2 border-white/90 shadow-xl transition-all duration-150 hover:scale-110 flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping group-hover:scale-125" />
            <span className="text-[10px] sm:text-xs font-black tracking-wide hidden sm:inline">2. Microscopio ZEISS</span>
            <span className="text-[10px] sm:text-xs font-black tracking-wide sm:hidden">2</span>
          </button>

          {/* Hotspot 3: Respirador de anestesia (x: 46%, y: 18%) */}
          <button
            onClick={() => setSelectedPanoramicHotspot('respirador-anestesia')}
            title="3. Respirador de anestesia"
            className="absolute left-[46%] top-[15%] sm:top-[17%] -translate-x-1/2 p-1.5 sm:p-2 rounded-xl bg-blue-900/90 hover:bg-blue-800 text-white border-2 border-white/90 shadow-xl transition-all duration-150 hover:scale-110 flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping group-hover:scale-125" />
            <span className="text-[10px] sm:text-xs font-black tracking-wide hidden sm:inline">3. Respirador Anestesia</span>
            <span className="text-[10px] sm:text-xs font-black tracking-wide sm:hidden">3</span>
          </button>

          {/* Hotspot 4: Torre de ORL (x: 64%, y: 15%) */}
          <button
            onClick={() => setSelectedPanoramicHotspot('torre-orl')}
            title="4. Torre de ORL (KARL STORZ)"
            className="absolute left-[64%] top-[12%] sm:top-[14%] -translate-x-1/2 p-1.5 sm:p-2 rounded-xl bg-blue-900/90 hover:bg-blue-800 text-white border-2 border-white/90 shadow-xl transition-all duration-150 hover:scale-110 flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping group-hover:scale-125" />
            <span className="text-[10px] sm:text-xs font-black tracking-wide hidden sm:inline">4. Torre ORL</span>
            <span className="text-[10px] sm:text-xs font-black tracking-wide sm:hidden">4</span>
          </button>

          {/* Hotspot 5: Sillón clínico regulable (x: 78%, y: 23%) */}
          <button
            onClick={() => setSelectedPanoramicHotspot('sillon-clinico')}
            title="5. Sillón clínico regulable"
            className="absolute left-[78%] top-[20%] sm:top-[22%] -translate-x-1/2 p-1.5 sm:p-2 rounded-xl bg-blue-900/90 hover:bg-blue-800 text-white border-2 border-white/90 shadow-xl transition-all duration-150 hover:scale-110 flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping group-hover:scale-125" />
            <span className="text-[10px] sm:text-xs font-black tracking-wide hidden sm:inline">5. Sillón Regulable</span>
            <span className="text-[10px] sm:text-xs font-black tracking-wide sm:hidden">5</span>
          </button>

          {/* Hotspot 6: Láser DEKA SmartXide² (x: 92%, y: 15%) */}
          <button
            onClick={() => setSelectedPanoramicHotspot('laser-deka')}
            title="6. Láser DEKA SmartXide²"
            className="absolute right-[2%] top-[12%] sm:top-[14%] p-1.5 sm:p-2 rounded-xl bg-blue-900/90 hover:bg-blue-800 text-white border-2 border-white/90 shadow-xl transition-all duration-150 hover:scale-110 flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping group-hover:scale-125" />
            <span className="text-[10px] sm:text-xs font-black tracking-wide hidden sm:inline">6. Láser DEKA</span>
            <span className="text-[10px] sm:text-xs font-black tracking-wide sm:hidden">6</span>
          </button>

          {/* Hotspot 7: Maletín metálico (LÁSER) (x: 90%, y: 92%) */}
          <button
            onClick={() => setSelectedPanoramicHotspot('maletin-metalico')}
            title="7. Maletín metálico (LÁSER)"
            className="absolute right-[3%] bottom-[3%] sm:bottom-[5%] p-1.5 sm:p-2 rounded-xl bg-blue-900/90 hover:bg-blue-800 text-white border-2 border-white/90 shadow-xl transition-all duration-150 hover:scale-110 flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping group-hover:scale-125" />
            <span className="text-[10px] sm:text-xs font-black tracking-wide hidden sm:inline">7. Maletín Láser</span>
            <span className="text-[10px] sm:text-xs font-black tracking-wide sm:hidden">7</span>
          </button>
        </div>

        {/* 7 Quick Selectors Beneath the Photo */}
        <div className="mt-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              {language === 'es' ? 'Acceso directo a cada elemento señalado:' : 'Elementu bakoitzerako sarbidea:'}
            </span>
            <button
              onClick={() => setSelectedPhotoModal({
                src: `${import.meta.env.BASE_URL}${ORL_PANORAMIC_PHOTO}`,
                alt: 'Vista general del quirófano 2 de Otorrinolaringología (HUN)',
                name: 'Vista Panorámica del Quirófano 2 (ORL) · Hospital Universitario de Navarra'
              })}
              className="text-[11px] font-bold text-sky-600 hover:underline flex items-center gap-1"
            >
              <Maximize2 className="w-3 h-3" />
              <span>{language === 'es' ? 'Ver foto original completa' : 'Handitu'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {PANORAMIC_HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setSelectedPanoramicHotspot(spot.id)}
                className={`p-2.5 rounded-xl border text-left transition-all hover:scale-102 flex flex-col justify-between ${
                  selectedPanoramicHotspot === spot.id
                    ? 'bg-sky-600 text-white border-sky-700 shadow-sm'
                    : nightMode
                      ? 'bg-slate-950 border-slate-800 text-slate-200 hover:bg-slate-800'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-sky-50 hover:border-sky-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${
                    selectedPanoramicHotspot === spot.id ? 'bg-white text-sky-800' : 'bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200'
                  }`}>
                    {spot.number}
                  </span>
                  <ChevronRight className="w-3 h-3 opacity-60" />
                </div>
                <span className="text-[11px] font-bold line-clamp-2 leading-tight">
                  {spot.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CRITICAL WARNING BANNER (Enfermería de Anestesia consultation required) */}
      <div className={`p-5 rounded-2xl border transition-all ${
        nightMode 
          ? 'bg-rose-950/40 border-rose-800/80 text-rose-200' 
          : 'bg-rose-50 border-rose-300 text-rose-950 shadow-2xs'
      }`}>
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-black tracking-tight text-rose-900 dark:text-rose-200 uppercase">
              {language === 'es' 
                ? 'PRECAUCIÓN CRUCIAL EN MESA QUIRÚRGICA TRUMPF' 
                : 'MAHAI KIRURGIKOAREN PREKAUZIO OHARRA'}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-rose-800 dark:text-rose-300">
              {language === 'es'
                ? 'Ante cualquier cambio de tramos de mesa (cabeceros de cuernos, de herradura o plano) o retirada de cualquier accesorio (incluido portasueros), el personal celador debe CONSULTAR PREVIAMENTE con el personal de Enfermería de Anestesia antes de intervenir.'
                : 'Mahaiaren zatiak aldatu aurretik (adarrak, ferra edo buru-euskarri laua) edo edozein osagarri kendu aurretik (serum-euskarria barne), zeladoreak BETI Anestesiako Erizaintzari galdetu behar dio lehendabizi.'}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Nav Chips for the 8 equipment items */}
      <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
        <button
          onClick={() => setSelectedItemTab('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 border ${
            selectedItemTab === 'all'
              ? 'bg-sky-600 text-white border-sky-600 shadow-2xs'
              : nightMode
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-2xs'
          }`}
        >
          {language === 'es' ? 'Ver Todos (8 Equipos)' : 'Guztiak Ikusi (8 Ekipo)'}
        </button>

        {ORL_EQUIPMENT_LIST.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItemTab(item.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 border flex items-center gap-1.5 ${
              selectedItemTab === item.id
                ? 'bg-sky-600 text-white font-bold border-sky-600 shadow-2xs'
                : nightMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-2xs'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-sky-100 dark:bg-sky-900/80 text-sky-800 dark:text-sky-300 text-[10px] font-bold flex items-center justify-center">
              {item.itemNumber}
            </span>
            <span className="truncate max-w-[150px]">{language === 'es' ? item.name : (item.nameEu || item.name)}</span>
          </button>
        ))}
      </div>

      {/* Equipment List Grid */}
      <div className="space-y-8">
        {filteredItems.map((item) => {
          const photoUrl = `${import.meta.env.BASE_URL}${item.originalPhoto}`;
          const isChair = item.id === 'silla-trabajo-pedales';
          const isLaser = item.id === 'laser-deka-smartxide';

          return (
            <div
              key={item.id}
              id={`orl-eq-${item.id}`}
              className={`p-5 sm:p-7 rounded-3xl border transition-all ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                    {item.itemNumber}
                  </span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                      {language === 'es' ? item.name : (item.nameEu || item.name)}
                    </h2>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Special Warning Banners for Silla & Láser */}
              {isChair && (
                <div className="mt-4 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200 font-medium">
                  <Plug className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-amber-950 dark:text-amber-100 block">
                      {language === 'es' ? 'REGLA OBLIGATORIA DE BATERÍA Y RECARGA:' : 'BATERIA ETA BIRKARGAREN ARAU OBLIGATORIOA:'}
                    </strong>
                    {language === 'es'
                      ? 'DESENCHUFAR de la corriente ANTES de moverla o usarla con el cirujano. Al terminar la jornada quirúrgica y desinfectarla, VOLVER A ENCHUFAR siempre en su punto de estacionamiento para recargar sus baterías internas.'
                      : 'Korronte elektrikotik DESKONEKTATU erabili edo mugitu aurretik. Eguna amaitzean, BERRIRO KONEKTATU beti bateriak birkargatu daitezen.'}
                  </div>
                </div>
              )}

              {isLaser && (
                <div className="mt-4 p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 flex items-start gap-3 text-xs text-rose-900 dark:text-rose-200 font-medium">
                  <Briefcase className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-rose-950 dark:text-rose-100 block">
                      {language === 'es' ? 'REGLA INSEPARABLE HUN:' : 'NUO ARAU ZATIEZINA:'}
                    </strong>
                    {language === 'es'
                      ? 'La torre del láser DEKA SmartXide² debe viajar SIEMPRE y de forma inseparable acompañada del MALETÍN METÁLICO de aluminio rotulado "LÁSER" con sus adaptadores y accesorios.'
                      : 'DEKA SmartXide² laser dorrea BETI "LASER" idatzitako ALUMINIOZKO MALETATEGI METALIKOAREKIN eraman behar da zatiezin.'}
                  </div>
                </div>
              )}

              {/* Main Content Grid: Image + Clinical & Operational Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 items-start">
                {/* Photo Column */}
                <div className="lg:col-span-4 space-y-2">
                  <div 
                    onClick={() => setSelectedPhotoModal({ src: photoUrl, alt: item.name, name: item.name })}
                    className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 group cursor-pointer aspect-[4/3] sm:aspect-square flex items-center justify-center shadow-xs"
                    title={language === 'es' ? 'Click para ampliar fotografía original' : 'Egin klik argazki originala handitzeko'}
                  >
                    <img 
                      src={photoUrl} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                      <span className="text-white text-xs font-bold flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{language === 'es' ? 'Ver foto en grande' : 'Handitu'}</span>
                      </span>
                      <span className="text-[10px] text-slate-300 font-mono bg-black/60 px-2 py-0.5 rounded">
                        HUN Q2
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 text-center font-medium italic">
                    {language === 'es' 
                      ? `Fotografía original de Quirófano 2: ${item.name}` 
                      : `2. Ebakigelako jatorrizko argazkia: ${item.nameEu || item.name}`}
                  </p>

                  {/* Secondary detail photo (e.g. KARL STORZ top metallic piece) */}
                  {item.secondaryPhoto && (
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                      <div
                        onClick={() => setSelectedPhotoModal({
                          src: `${import.meta.env.BASE_URL}${item.secondaryPhoto}`,
                          alt: item.secondaryPhotoCaption || item.name,
                          name: `${item.name} - Detalle Superior`
                        })}
                        className="relative rounded-xl overflow-hidden border border-sky-300 dark:border-sky-800 bg-slate-950 group cursor-pointer aspect-video flex items-center justify-center shadow-xs"
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}${item.secondaryPhoto}`}
                          alt="Detalle superior"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2">
                          <span className="text-white text-[11px] font-bold flex items-center gap-1">
                            <Maximize2 className="w-3 h-3" />
                            <span>{language === 'es' ? 'Ver detalle ampliado' : 'Xehetasuna handitu'}</span>
                          </span>
                          <span className="text-[9px] text-sky-200 bg-sky-950/80 px-1.5 py-0.5 rounded font-bold">
                            Detalle Superior
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-sky-900 dark:text-sky-200 leading-tight p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-900 font-medium">
                        <strong className="block text-sky-950 dark:text-sky-100 mb-0.5 font-bold">
                          {language === 'es' ? 'Detalle de la parte superior:' : 'Goiko parteko xehetasuna:'}
                        </strong>
                        {language === 'es' ? item.secondaryPhotoCaption : item.secondaryPhotoCaptionEu}
                      </p>
                    </div>
                  )}
                </div>

                {/* Information Column */}
                <div className="lg:col-span-8 space-y-4">
                  {/* Main Function */}
                  <div className={`p-4 rounded-2xl border ${
                    nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      <span>{language === 'es' ? 'Función Principal y Utilidad Quirúrgica' : 'Funtzio Nagusia eta Erabilera'}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {language === 'es' ? item.mainFunction : (item.mainFunctionEu || item.mainFunction)}
                    </p>
                  </div>

                  {/* ORL Applications */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      <span>{language === 'es' ? 'Intervenciones y Aplicaciones en ORL' : 'Interbentzioak eta Aplikazioak'}</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {(language === 'es' ? item.orlApplications : (item.orlApplicationsEu || item.orlApplications)).map((app, i) => (
                        <li key={i} className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                          nightMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
                        }`}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Celador Duties */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>{language === 'es' ? 'Tareas Concretas del Celador/a' : 'Zeladorearen Zeregin Zehatzak'}</span>
                    </h4>
                    <div className="space-y-1.5">
                      {(language === 'es' ? item.celadorDuties : (item.celadorDutiesEu || item.celadorDuties)).map((duty, idx) => (
                        <div key={idx} className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${
                          nightMode ? 'bg-slate-950/40 border-slate-800 text-slate-200' : 'bg-sky-50/40 border-sky-100 text-slate-800'
                        }`}>
                          <span className="w-4 h-4 rounded-full bg-sky-200 dark:bg-sky-900 text-sky-900 dark:text-sky-200 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{duty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Precautions and Warnings */}
                  <div className={`p-3.5 rounded-2xl border ${
                    nightMode ? 'bg-red-950/20 border-red-900/50' : 'bg-red-50/50 border-red-200'
                  }`}>
                    <h4 className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                      <span>{language === 'es' ? 'Precauciones Específicas' : 'Prekauzio Zehatzak'}</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-red-900 dark:text-red-300">
                      {(language === 'es' ? item.precautionsAndWarnings : (item.precautionsAndWarningsEu || item.precautionsAndWarnings)).map((warn, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-2">
                          <span className="text-red-600 shrink-0 font-bold">•</span>
                          <span>{warn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GENERAL RULES BLOCK (From HUN ORL Protocol) */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
        nightMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border-slate-800' 
          : 'bg-gradient-to-br from-white via-sky-50/40 to-blue-50/50 border-sky-200 shadow-sm'
      }`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? ORL_GENERAL_RULES.titleEs : ORL_GENERAL_RULES.titleEu}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'es' ? 'Normativa institucional del Bloque Quirúrgico HUN' : 'NUO Ebakuntza Blokeko arau instituzionalak'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {(language === 'es' ? ORL_GENERAL_RULES.rulesEs : ORL_GENERAL_RULES.rulesEu).map((rule, rIdx) => (
            <div 
              key={rIdx}
              className={`p-4 rounded-2xl border flex flex-col justify-between ${
                nightMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-xs font-black flex items-center justify-center">
                    {rIdx + 1}
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Interactive Hotspot Detail (5 Puntos Mandatorios) */}
      {activeHotspotData && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setSelectedPanoramicHotspot(null)}
        >
          <div 
            className={`relative max-w-2xl w-full rounded-3xl border shadow-2xl max-h-[92vh] overflow-y-auto p-5 sm:p-7 space-y-5 ${
              nightMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-black flex items-center justify-center">
                    {activeHotspotData.number}
                  </span>
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                    {language === 'es' ? activeHotspotData.badge : activeHotspotData.badgeEu}
                  </span>
                </div>
                {/* 1. NOMBRE DEL ELEMENTO */}
                <h3 className="text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white mt-1">
                  {language === 'es' ? activeHotspotData.name : activeHotspotData.nameEu}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'es' ? 'Elemento identificado en Quirófano 2 (ORL) · Hospital Universitario de Navarra' : '2. Ebakigelan identifikatutako tresna (ORL - NUO)'}
                </p>
              </div>

              <button
                onClick={() => setSelectedPanoramicHotspot(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Warning Alert Banner (if any) */}
            {activeHotspotData.warningAlert && (
              <div className="p-3.5 rounded-2xl bg-amber-500/15 border-2 border-amber-500/40 text-amber-900 dark:text-amber-200 text-xs font-semibold flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>{language === 'es' ? activeHotspotData.warningAlert : activeHotspotData.warningAlertEu}</span>
              </div>
            )}

            {/* 2. FOTOGRAFÍA INDIVIDUAL */}
            <div className="space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                {language === 'es' ? '2. Fotografía Individual del Equipo:' : '2. Ekipoaren Argazki Banakakoa:'}
              </span>
              <div 
                onClick={() => setSelectedPhotoModal({
                  src: `${import.meta.env.BASE_URL}${activeHotspotData.photo}`,
                  alt: activeHotspotData.name,
                  name: activeHotspotData.name
                })}
                className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-video sm:aspect-[16/9] flex items-center justify-center group cursor-pointer shadow-sm"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}${activeHotspotData.photo}`}
                  alt={activeHotspotData.name}
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3 text-white text-xs">
                  <span>{language === 'es' ? 'Haz clic para ampliar la fotografía' : 'Klik egin handitzeko'}</span>
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Secondary photo if present (e.g. Karl Storz metallic top detail) */}
              {activeHotspotData.secondaryPhoto && (
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <img
                    src={`${import.meta.env.BASE_URL}${activeHotspotData.secondaryPhoto}`}
                    alt="Detalle de la pieza metálica superior"
                    className="w-16 h-16 object-cover rounded-lg border border-slate-300 dark:border-slate-600 shrink-0 cursor-pointer"
                    onClick={() => setSelectedPhotoModal({
                      src: `${import.meta.env.BASE_URL}${activeHotspotData.secondaryPhoto!}`,
                      alt: activeHotspotData.secondaryPhotoCaption || activeHotspotData.name,
                      name: activeHotspotData.secondaryPhotoCaption || activeHotspotData.name
                    })}
                  />
                  <div className="text-xs">
                    <strong className="font-bold text-slate-900 dark:text-white block">
                      {language === 'es' ? 'Detalle superior incorporado:' : 'Goiko xehetasuna:'}
                    </strong>
                    <span className="text-slate-600 dark:text-slate-300 text-[11px] leading-tight block mt-0.5">
                      {activeHotspotData.secondaryPhotoCaption}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* 3. FUNCIÓN Y UTILIDAD EN ORL */}
            <div className="p-4 rounded-2xl bg-sky-50/80 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900/60 space-y-2">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <h4 className="text-xs font-black uppercase tracking-wider text-sky-950 dark:text-sky-200">
                  {language === 'es' ? '3. Función y Utilidad en ORL' : '3. Funtzioa eta Erabilgarritasuna ORLen'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {language === 'es' ? activeHotspotData.functionUtility : activeHotspotData.functionUtilityEu}
              </p>
              <div className="pt-1">
                <span className="text-[10px] font-bold uppercase text-sky-800 dark:text-sky-300 block mb-1">
                  {language === 'es' ? 'Intervenciones donde interviene:' : 'Erabiltzen den ebakuntzak:'}
                </span>
                <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
                  {(language === 'es' ? activeHotspotData.clinicalProcedures : activeHotspotData.clinicalProceduresEu).map((p, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. CONSIDERACIONES PARA EL PERSONAL CELADOR */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  {language === 'es' ? '4. Consideraciones para el Personal Celador' : '4. Zeladorearentzako Zereginak eta Oharrak'}
                </h4>
              </div>
              <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                {(language === 'es' ? activeHotspotData.celadorDuties : activeHotspotData.celadorDutiesEu).map((duty, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{duty}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. PRECAUCIONES DE TRASLADO, PREPARACIÓN Y ALMACENAMIENTO */}
            <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <h4 className="text-xs font-black uppercase tracking-wider text-rose-950 dark:text-rose-200">
                  {language === 'es' ? '5. Precauciones de Traslado, Preparación y Almacenamiento' : '5. Garraio, Prestaketa eta Biltegiratze Prekauzioak'}
                </h4>
              </div>
              <ul className="text-xs space-y-1.5 text-rose-900 dark:text-rose-200 font-medium">
                {(language === 'es' ? activeHotspotData.precautions : activeHotspotData.precautionsEu).map((prec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{prec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Buttons */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedItemTab(activeHotspotData.id);
                  setSelectedPanoramicHotspot(null);
                }}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white flex items-center gap-1.5 shadow-2xs"
              >
                <span>{language === 'es' ? 'Ver ficha ampliada en catálogo' : 'Katalogoan ikusi'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedPanoramicHotspot(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {language === 'es' ? 'Cerrar' : 'Itxi'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Zoom for Authentic Photos */}
      {selectedPhotoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhotoModal(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <div>
                <h3 className="text-sm font-bold">{selectedPhotoModal.name}</h3>
                <p className="text-xs text-slate-400">Hospital Universitario de Navarra · Quirófano 2 (ORL)</p>
              </div>
              <button 
                onClick={() => setSelectedPhotoModal(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-black p-2">
              <img 
                src={selectedPhotoModal.src} 
                alt={selectedPhotoModal.alt} 
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>
            <div className="p-3 bg-slate-950 text-center text-xs text-slate-400 border-t border-slate-800">
              {language === 'es' ? 'Fotografía de archivo técnico del HUN Quirófanos II' : 'NUO II Ebakigeletako artxibo teknikoko argazkia'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
