export interface TableVideoItem {
  id: string;
  title: string;
  titleEu: string;
  category: 'trauma' | 'urologia' | 'mesa_trusystem' | 'transfer';
  categoryLabel: string;
  categoryLabelEu: string;
  videoUrl: string;
  operatingRooms: string;
  operatingRoomsEu: string;
  duration: string;
  badge: string;
  badgeEu: string;
  summary: string;
  summaryEu: string;
  keySteps: string[];
  keyStepsEu: string[];
  warningNote?: string;
  warningNoteEu?: string;
}

export const OPERATING_TABLE_VIDEOS: TableVideoItem[] = [
  {
    id: 'mesa-playa-hombro',
    title: 'Cirugía de Hombro · Preparación Mesa de Playa (TruSystem 7500)',
    titleEu: 'Sorbalda Kirurgia · Hondartza Aulkiaren Prestaketa (TruSystem 7500)',
    category: 'trauma',
    categoryLabel: 'Traumatología (Q7 – Q8)',
    categoryLabelEu: 'Traumatologia (Q7 – Q8)',
    videoUrl: '/assets/aistudio/Mesa_de_Playa_0672cadf.mp4',
    operatingRooms: 'Quirófanos 7 y 8 (Traumatología HUN B)',
    operatingRoomsEu: '7 eta 8 Ebakigelak (NUO B Traumatologia)',
    duration: '06:48',
    badge: 'Protocolo Hombro',
    badgeEu: 'Sorbalda Protokoloa',
    summary: 'Procedimiento completo para montar el módulo de hombro (silla de playa / beach chair), retirada de placa de cabeza, desacople del casco en 2 pasos, anclaje de sección de espalda, soporte articulado y fijación cefálica.',
    summaryEu: 'Sorbalda-modulua (hondartza aulkia) muntatzeko prozedura osoa, buru-plaka kentzea, kaskoa 2 urratsetan askatzea, bizkarraldea ainguratzea, beso-euskarri artikulatua eta buru-finkapena.',
    keySteps: [
      'Retirar la placa de cabeza estándar de la mesa.',
      'Acercar el carrito de hombro. El sistema viene sujeto por gravedad en la pieza central.',
      'Paso 1: Desconectar el casco aflojando la palomilla y deslizando hacia arriba.',
      'Paso 2: Encajar los ganchos de la sección de espalda desde la parte frontal de la mesa.',
      'Reconectar el casco deslizándolo hasta escuchar el clic sonoro y apretar palomilla.',
      'Ajustar almohadillas acolchadas de frente y mentón según la estatura del paciente.',
      'Colocar soporte de brazo (opción 3D con rótula o dispositivo Sure-Lok con una sola palanca).'
    ],
    keyStepsEu: [
      'Kendu mahaiaren buru-plaka estandarra.',
      'Hurbildu sorbalda-orga. Grabitatez eusten da erdiko piezan.',
      '1. urratsa: Aska kaskoa tximeleta-torlojua askatuz eta gorantz irristatuz.',
      '2. urratsa: Lotu bizkarraldeko kakoak aurrealdeko zatitik.',
      'Berriz sartu kaskoa klika entzun arte eta estutu tximeleta-torlojua.',
      'Egokitu bekokiko eta kokotseko kuxin bigunak pazientearen altueraren arabera.',
      'Jarri beso-euskarria (3D aukera errotularekin edo Sure-Lok palanka bakarrarekin).'
    ],
    warningNote: '¡PASO CRÍTICO MANDATORIO! Al finalizar la cirugía y antes de pulsar el cero en el mando para bajar al paciente a posición horizontal, es OBLIGATORIO aflojar el casco y retirar el soporte de mentón. Al hacer el cero, la cabeza desciende directamente a la colchoneta; no soltarlo lesionaría las vértebras cervicales.',
    warningNoteEu: 'URRATS KRITIKO DERRIGORREZKOA! Kirurgia amaitzean eta agintean zeroa sakatu aurretik pazientea posizio horizontalera jaisteko, DERRIGORREZKOA da kaskoa askatzea eta kokotseko euskarria kentzea. Zeroa egitean burua koltxonetara jaisten da; askatu ezean zerbikalak kalte ditzake.'
  },
  {
    id: 'carro-traccion-conexion',
    title: 'Carro de Tracción · Conexión y Montaje (Pelvistato Cadera / Fémur)',
    titleEu: 'Trakzio Orga · Konexioa eta Muntaia (Pelbistatoa Aldaka / Femurra)',
    category: 'trauma',
    categoryLabel: 'Traumatología (Q7 – Q8)',
    categoryLabelEu: 'Traumatologia (Q7 – Q8)',
    videoUrl: '/assets/aistudio/Carro_de_Tracci_n_Conexi_n_84cab43c.mp4',
    operatingRooms: 'Quirófanos 7 y 8 (Traumatología HUN B)',
    operatingRoomsEu: '7 eta 8 Ebakigelak (NUO B Traumatologia)',
    duration: '02:30',
    badge: 'Mesa Tracción',
    badgeEu: 'Trakzio Mahaia',
    summary: 'Guía paso a paso para acoplar el carro de tracción esquelética para fracturas de fémur, clavos gamma y prótesis de cadera con escopia.',
    summaryEu: 'Trakzio-orga akoplatzeko gida femurreko hausturetarako, gamma iltzeetarako eta aldaka-protesietarako eskopiarekin.',
    keySteps: [
      'Retirar las placas de piernas de la mesa quirúrgica.',
      'Efectuar desplazamiento longitudinal máximo hacia la cabecera mediante el mando para liberar las dos arandelas de anclaje.',
      'Retirar el transfer de pies y el triángulo para ganar visibilidad.',
      'Acercar el carro de tracción encarando las arandelas en el hueco entre el pitorro y el seguro.',
      'Subir la altura de la mesa quirúrgica hasta que las ruedas del carro queden en el aire.',
      'Asegurar los dos bulones de seguridad (apretar y bajar a ambos lados).',
      'Colocar el contratiro alineando pestaña verde con verde y girar para trabar.'
    ],
    keyStepsEu: [
      'Kendu mahaiaren hanka-plakak.',
      'Egin gehienezko luzetarako desplazamendua bururantz arandelak askatzeko.',
      'Kendu oinen transferra eta triangelua ikusgaitasuna irabazteko.',
      'Hurbildu trakzio-orga arandelak pitorroaren eta seguruaren arteko zuloan kokatuz.',
      'Igo mahaiaren altuera gurpilak airean geratu arte.',
      'Ziurtatu bi segurtasun-buloiak (estutu eta jaitsi alde bietan).',
      'Jarri kontratira fitxa berdea berdearekin lerrokatuz eta biratu trabatzeko.'
    ],
    warningNote: 'Asegurar siempre firmemente los bulones de seguridad y verificar que el contratiro quede trabado antes del transfer del paciente.',
    warningNoteEu: 'Beti ondo finkatu segurtasun-buloiak eta egiaztatu kontratira trabaturik geratzen dela pazientea pasa aurretik.'
  },
  {
    id: 'carro-traccion-desconexion',
    title: 'Carro de Tracción · Desconexión y Retirada Segura',
    titleEu: 'Trakzio Orga · Deskonexioa eta Kentze Segurua',
    category: 'trauma',
    categoryLabel: 'Traumatología (Q7 – Q8)',
    categoryLabelEu: 'Traumatologia (Q7 – Q8)',
    videoUrl: '/assets/aistudio/Carro_de_Tracci_n_Desconexi_n_dc932998.mp4',
    operatingRooms: 'Quirófanos 7 y 8 (Traumatología HUN B)',
    operatingRoomsEu: '7 eta 8 Ebakigelak (NUO B Traumatologia)',
    duration: '02:00',
    badge: 'Desconexión',
    badgeEu: 'Deskonexioa',
    summary: 'Cómo retirar el carro de tracción tras la intervención quirúrgica sin forzar los mecanismos ni golpear la columna de quirófano.',
    summaryEu: 'Nola kendu trakzio-orga ebakuntzaren ondoren mekanismoak behartu gabe eta zutabea jo gabe.',
    keySteps: [
      'Quitar el triángulo y el transfer de pies.',
      'Alinear las barras y las piezas en C totalmente rectas para que el carro pueda deslizar sin obstrucciones.',
      'Elevar la altura de la mesa para disponer de hueco de entrada.',
      'Colocar el carro bajo el sistema de tracción.',
      'Liberar los dos bulones de seguridad (paso fundamental).',
      'Hacer coincidir las marcas amarillas del carro con las pestañas de la mesa.',
      'Bajar la mesa quirúrgica hasta que apoye y deslizar el carro hacia fuera.'
    ],
    keyStepsEu: [
      'Kendu triangelua eta oinen transferra.',
      'Lerrokatu barrak eta C piezak zuzen-zuzen orga trabarik gabe sar dadin.',
      'Igo mahaiaren altuera sarrera-lekua izateko.',
      'Jarri orga trakzio-sistemaren azpian.',
      'Askatu bi segurtasun-buloiak (funtsezko urratsa).',
      'Bat etorrarazi orgaren marka horiak mahaiko fitxekin.',
      'Jaitsi mahaia bermatu arte eta irristatu orga kanporantz.'
    ]
  },
  {
    id: 'carro-traccion-atascado',
    title: 'Carro de Tracción Atascado · Resolución de Problemas y Desbloqueo',
    titleEu: 'Trakzio Orga Trabaturik · Arazoak Konpontzea eta Desblokeatzea',
    category: 'trauma',
    categoryLabel: 'Traumatología & Urgencias',
    categoryLabelEu: 'Traumatologia & Larrialdiak',
    videoUrl: '/assets/aistudio/Carro_de_Tracci_n_Atascado_e8c3a68a.mp4',
    operatingRooms: 'Quirófanos 7 y 8 (Traumatología HUN B)',
    operatingRoomsEu: '7 eta 8 Ebakigelak (NUO B Traumatologia)',
    duration: '01:25',
    badge: 'Solución Avería',
    badgeEu: 'Arazo Konponbidea',
    summary: 'Causas de bloqueo del carro de tracción (no quitar los seguros al bajar el carro o detección de obstáculo) y protocolo manual de desmontaje y reinicio desde el mando.',
    summaryEu: 'Trakzio-orga trabatzeko arrazoiak eta eskuzko desmuntaketa zein aginte bidezko berrezarpen protokoloa.',
    keySteps: [
      'Motivo común 1: No se quitaron los seguros al colocar el carro abajo.',
      'Motivo común 2: La mesa detecta un obstáculo y bloquea todos los movimientos de motor.',
      'Desmontar el dispositivo de tracción soltando las barras desde los extremos.',
      'Quitar el transfer de pies.',
      'Abrir las barras mediante las levas inferiores para retirarlas sin golpear el dispositivo superior.',
      'Soltar rosca inferior azul y extraer barra.',
      'Desbloquear los seguros de seguridad manualmente.',
      'Desacoplar la barra de carbono central.',
      'Con todo desacoplado, reiniciar la mesa desde el mando para devolver la respuesta normal.'
    ],
    keyStepsEu: [
      '1. arrazoia: Ez ziren seguruak kendu orga azpian jartzean.',
      '2. arrazoia: Mahaiak oztopo bat detektatu du eta motorren mugimenduak blokeatu ditu.',
      'Desmuntatu trakzio-gailua barrak muturretatik askatuz.',
      'Kendu oinen transferra.',
      'Ireki barrak beheko palanken bidez goiko gailua jo gabe ateratzeko.',
      'Askatu beheko torloju urdina eta atera barra.',
      'Desblokeatu segurtasun-gailuak eskuz.',
      'Askatu karbonozko erdiko barra.',
      'Dena askatuta dagoela, berrabiarazi mahaia agintearekin funtzionamendu normalera itzultzeko.'
    ],
    warningNote: 'Recordad: MUY IMPORTANTE quitar siempre los seguros cuando el carro está abajo para evitar que se bloquee el sistema.',
    warningNoteEu: 'Gogoratu: OSO GARRANTZITSUA beti seguruak kentzea orga behean dagoenean sistema trabatu ez dadin.'
  },
  {
    id: 'perneras-4-piezas',
    title: 'Perneras de 4 Piezas TruSystem 7500 · Montaje, Palanca de Seguridad y Cero',
    titleEu: '4 Ataleko Hanka-Euskarriak TruSystem 7500 · Muntaia, Segurtasun Palanka eta Zeroa',
    category: 'urologia',
    categoryLabel: 'Urología, Gineco y Litotomía',
    categoryLabelEu: 'Urologia, Gineko eta Litotomia',
    videoUrl: '/assets/aistudio/Perneras_de_4_piezas_bf004810.mp4',
    operatingRooms: 'Quirófano 5 y 6 (Urología), Q7-8 y Quirófano Central',
    operatingRoomsEu: '5 eta 6 Ebakigelak (NUO Urologia), Q7-8 eta Erdiko Ebakigela',
    duration: '02:22',
    badge: 'Perneras 4P',
    badgeEu: '4A Hanka-Eusk.',
    summary: 'Ajuste biomecánico de perneras de 4 piezas en la mesa TruSystem: movimientos de apertura y abducción, mecanismo de palanca con seguro antipánico, marcas de posición cero y desplazamiento en altura.',
    summaryEu: '4 ataleko hanka-euskarrien doikuntza biomekanikoa TruSystem mahaian: irekiera eta abdukzioa, segurtasun-palanka, zero markak eta altuerako desplazamendua.',
    keySteps: [
      'Retirar acolchados para tener visibilidad de los engranajes.',
      'Abrir la palanca inferior para liberar las dos rótulas: giro y abducción.',
      'Alcanzada la posición deseada, volver a fijar la palanca.',
      'Mecanismo de seguridad de palanca articulada: presionar ligeramente con la molleja de la mano para que el pestillo quede libre; si no se presiona, el engranaje permanece bloqueado para evitar que caiga la pierna.',
      'Posición cero: alinear la rayita verde con rayita verde y bloquear la palanca con clic sonoro.',
      'Extracción: sobrepasar la posición cero para desencajar hacia arriba.',
      'Colocación: introducir con ligera inclinación desde arriba, presionar y fijar en la marca verde.',
      'Ajuste vertical: tirar de la bolita azul inferior para desplazar la placa hacia arriba o abajo.'
    ],
    keyStepsEu: [
      'Kendu kuxinak engranajeak ondo ikusteko.',
      'Ireki beheko palanka bi errotulak askatzeko: biraketa eta abdukzioa.',
      'Nahi den posiziora iritsita, finkatu berriz palanka.',
      'Palankaren segurtasun mekanismoa: eskuaren mamiarekin leunki sakatu segurua libre geratzeko; sakatu ezean engranajea trabatuta geratzen da hanka eror ez dadin.',
      'Zero posizioa: lerrokatu marra berdea marra berdearekin eta finkatu klika entzun arte.',
      'Ateratzea: gainditu zero posizioa gorantz askatzeko.',
      'Jartzea: sartu goitik inklinazio txikiarekin, sakatu eta finkatu marka berdean.',
      'Doikuntza bertikala: tira beheko bola urdinetik plaka gora edo behera mugitzeko.'
    ],
    warningNote: '¡Atención al mecanismo de palanca! Cuenta con mecanismo de seguridad: si se suelta bruscamente sin presionar la molleja, la pieza puede caer. Asegurarse siempre de oír el clic y comprobar la firmeza.',
    warningNoteEu: 'Kontuz palankaren mekanismoarekin! Segurtasun-gailua du: eskuaren mamiarekin sakatu gabe askatzen bada, pieza eror daiteke. Ziurtatu beti klika entzuten dela eta sendotasuna egiaztatu.'
  },
  {
    id: 'pile-urologia',
    title: 'Posición Pilé · Decúbito Prono con Flexión en Urología HUN',
    titleEu: 'Pilé Posizioa · Ahoz Behera Tolestearekin NUO Urologian',
    category: 'urologia',
    categoryLabel: 'Urología (Q5 – Q6)',
    categoryLabelEu: 'Urologia (Q5 – Q6)',
    videoUrl: '/assets/aistudio/Pil__d683c7fe.mp4',
    operatingRooms: 'Quirófano 5 y 6 (Urología HUN Área General V)',
    operatingRoomsEu: '5 eta 6 Ebakigelak (NUO V. Eremu Orokorra Urologia)',
    duration: '00:45',
    badge: 'Vídeo Pilé',
    badgeEu: 'Pilé Bideoa',
    summary: 'Demostración de la preparación de la mesa quirúrgica para la postura de Pilé (flexión pélvica en decúbito prono / Jackknife) utilizada en nefrolitotomías percutáneas y técnicas urológicas complejas.',
    summaryEu: 'Mahai kirurgikoaren prestaketaren erakustaldia Pilé posiziorako (pelbis-flexioa ahoz behera / Jackknife) nefrolitotomia perkutaneoetan eta teknika urologiko konplexuetan.',
    keySteps: [
      'Colocación del paciente en decúbito prono con rodillo torácico y pélvico.',
      'Flexión central de la mesa mediante el mando Trumpf / TruSystem (botón Flex/Pilé).',
      'Protección minuciosa de rodillas, dorso de los pies y región genital.',
      'Comprobación de tubo endotraqueal y accesos venosos en coordinación con Anestesia.'
    ],
    keyStepsEu: [
      'Pazientea ahoz behera kokatzea torax eta pelbis arrabolekin.',
      'Mahaiaren erdiko tolestura Trumpf / TruSystem agintearen bidez (Flex/Pilé botoia).',
      'Belaunen, oinbeteen eta genitalen babes zaindua.',
      'Hodi endotrakeala eta bide benosoak egiaztatzea Anestesiarekin koordinatuta.'
    ]
  },
  {
    id: 'trusystem-memorias',
    title: 'TruSystem 7500 · Memorización y Recuperación de Posiciones en Mando',
    titleEu: 'TruSystem 7500 · Posizioak Agintean Gordetzea eta Berreskuratzea',
    category: 'mesa_trusystem',
    categoryLabel: 'Manejo Mesa TruSystem',
    categoryLabelEu: 'TruSystem Mahaiaren Erabilera',
    videoUrl: '/assets/aistudio/Memorias_de_Posiciones_3bc24e03.mp4',
    operatingRooms: 'Mesa TruSystem 7500 (Todos los quirófanos)',
    operatingRoomsEu: 'TruSystem 7500 Mahaia (Ebakigela guztiak)',
    duration: '00:35',
    badge: 'Memorias Mando',
    badgeEu: 'Aginte Memoriak',
    summary: 'Cómo programar y guardar en la memoria del mando inalámbrico cualquier postura quirúrgica habitual para reproducirla automáticamente con exactitud milimétrica.',
    summaryEu: 'Nola programatu eta gorde haririk gabeko agintean edozein posizio kirurgiko ohiko zehaztasun milimetrikoz automatikoki erreproduzitzeko.',
    keySteps: [
      'Acceder a la pantalla del mando y pulsar en el submenú "Posición".',
      'Elegir el slot de memoria ("Memoria 1" o "Memoria 2").',
      'Hacer clic en el icono del "Disquete" para guardar la postura actual.',
      'Para desplazar la mesa a dicha memoria en cualquier momento: Menú Posición -> Elegir Memoria -> Pulsar botón "✓" (Desplazar). La mesa adopta la configuración automáticamente.'
    ],
    keyStepsEu: [
      'Sartu aginteko pantailan eta sakatu "Posizioa" azpimenuan.',
      'Aukeratu memoriaren lekua ("Memoria 1" edo "Memoria 2").',
      'Sakatu "Disketearen" ikonoan uneko posizioa gordetzeko.',
      'Mahaia memoria horretara eramateko: Posizio Menua -> Aukeratu Memoria -> Sakatu "✓" (Desplazatu). Mahaiak posizioa automatikoki hartuko du.'
    ]
  },
  {
    id: 'trusystem-orientacion',
    title: 'TruSystem 7500 · Orientación del Paciente (Normal vs Invertida)',
    titleEu: 'TruSystem 7500 · Pazientearen Noranzkoa (Normala vs Alderantzikatua)',
    category: 'mesa_trusystem',
    categoryLabel: 'Manejo Mesa TruSystem',
    categoryLabelEu: 'TruSystem Mahaiaren Erabilera',
    videoUrl: '/assets/aistudio/Orientacion_del_Paciente_2d071a3d.mp4',
    operatingRooms: 'Mesa TruSystem 7500 (HUN Área General V)',
    operatingRoomsEu: 'TruSystem 7500 Mahaia (NUO V. Eremu Orokorra)',
    duration: '00:35',
    badge: 'Orientación',
    badgeEu: 'Noranzkoa',
    summary: 'Cómo invertir la orientación del paciente en la mesa quirúrgica (cabeza a pies) tanto desde el panel de emergencia de la columna como desde el menú del mando.',
    summaryEu: 'Nola alderantzikatu pazientearen noranzkoa mahaian (burua oinetara) bai zutabeko larrialdi-paneletik bai aginteko menutik.',
    keySteps: [
      'Opción 1 (Panel de Emergencia en Columna): pulsar en la llave de encendido y seleccionar la figura que indica la cabeza del paciente hacia el lado deseado.',
      'Opción 2 (Mando a Distancia): entrar en Menú -> pulsar en Dirección / Orientación -> seleccionar "Invertida" o "Normal" -> confirmar con el botón "✓".',
      'La mesa invierte los controles lógicos para que las flechas de Trendelenburg e inclinación correspondan exactamente a la anatomía invertida.'
    ],
    keyStepsEu: [
      '1. aukera (Zutabeko Larrialdi Panela): sakatu pizte-giltzan eta aukeratu burua nahi den aldera adierazten duen irudia.',
      '2. aukera (Agintea): sartu Menura -> sakatu Noranzkoa / Orientazioa -> hautatu "Alderantzikatua" edo "Normala" -> berretsi "✓" botoiarekin.',
      'Mahaiak kontrol logikoak egokitzen ditu Trendelenburg eta inklinazio geziek anatomiari zehatz erantzun diezaioten.'
    ]
  },
  {
    id: 'trusystem-mover-columna',
    title: 'TruSystem 7500 · Mover la Base y Columna con Carro Especial',
    titleEu: 'TruSystem 7500 · Oinarria eta Zutabea Orga Bereziarekin Mugitzea',
    category: 'transfer',
    categoryLabel: 'Transfer y Movilización',
    categoryLabelEu: 'Transferra eta Mugikortasuna',
    videoUrl: '/assets/aistudio/Mover_la_Columna_a0f09222.mp4',
    operatingRooms: 'Bloque Quirúrgico HUN Área General V',
    operatingRoomsEu: 'NUO V. Eremu Orokorreko Ebakuntza Blokea',
    duration: '00:48',
    badge: 'Mover Columna',
    badgeEu: 'Zutabea Mugitu',
    summary: 'Protocolo para trasladar la columna pesada de quirófano en caso de mantenimiento, limpieza a fondo o reconfiguración de quirófanos.',
    summaryEu: 'Ebakigelako zutabe astuna eramateko protokoloa mantentze-lanetarako, garbiketa sakonerako edo ebakigelen berregituraketarako.',
    keySteps: [
      'Requisito indispensable: el tablero debe estar colocado sobre la columna.',
      'Colocar el carro bajo la columna y conectarlo al enganche.',
      'Utilizar el botón de transfer del mando o el pedal correspondiente.',
      'Mantener pulsado el botón del carro mientras la mesa baja.',
      'El carro se encarga automáticamente de tomar tablero y columna en un único bloque elevado sobre ruedas.',
      'Transportar a la nueva ubicación y realizar el proceso inverso para desacoplar.'
    ],
    keyStepsEu: [
      'Derrigorrezko baldintza: taula zutabearen gainean jarrita egon behar da.',
      'Jarri orga zutabearen azpian eta lotu kakoari.',
      'Erabili aginteko transfer botoia edo dagokion pedala.',
      'Mahaia jaisten den bitartean orgako botoia sakatuta mantendu.',
      'Orgak taula eta zutabea bloke bakarrean hartzen ditu gurpilen gainean.',
      'Garraiatu toki berrira eta egin alderantzizko prozesua askatzeko.'
    ]
  },
  {
    id: 'trusystem-transferencia-mesa-carro',
    title: 'TruSystem 7500 · Transferencia del Tablero a Carro Transfer',
    titleEu: 'TruSystem 7500 · Taularen Transferentzia Transfer Orgara',
    category: 'transfer',
    categoryLabel: 'Transfer y Movilización',
    categoryLabelEu: 'Transferra eta Mugikortasuna',
    videoUrl: '/assets/aistudio/Transferencia_Mesa_a_Carro_acabf85a.mp4',
    operatingRooms: 'Zona de Transfer e Intercambio HUN B',
    operatingRoomsEu: 'NUO B Transfer eta Truke Gunea',
    duration: '01:38',
    badge: 'Carro Transfer',
    badgeEu: 'Transfer Orga',
    summary: 'Procedimiento operativo del carro transfer (5ª rueda direccional, frenos y pedal) para intercambiar el tablero quirúrgico con el paciente entre quirófano y antequirófano.',
    summaryEu: 'Transfer-orgaren erabilera (5. gurpila, balaztak eta pedala) pazientea daraman taula ebakigela eta aurre-ebakigelaren artean trukatzeko.',
    keySteps: [
      'Componentes del carro transfer: regulación de altura, 5ª rueda de guiado, freno central y pedal de transferencia.',
      'Introducir el carro de transferencia debajo de la mesa quirúrgica hasta el tope.',
      'Opción 1: Accionar el pedal de transferencia del carro.',
      'Opción 2: Pulsar el botón "0" en el mando de control.',
      'En ambos casos la columna libera los anclajes y la mesa pasa al carro transfer.',
      'Retirar el tablero sobre el carro transfer hacia el antequirófano o despertar.',
      'Para dejar el tablero de nuevo en la columna: conectar el carro y accionar pedal o botón "0".'
    ],
    keyStepsEu: [
      'Transfer-orgaren osagaiak: altuera doikuntza, 5. gida-gurpila, balazta zentrala eta transfer-pedala.',
      'Sartu transfer-orga mahaiaren azpian toperaino.',
      '1. aukera: Sakatu orgako transfer-pedala.',
      '2. aukera: Sakatu "0" botoia agintean.',
      'Bietan zutabeak ainguraketak askatzen ditu eta taula orga gainera pasatzen da.',
      'Atera taula orgaren gainean aurre-ebakigelarantz edo suspertze-gelarantz.',
      'Taula berriz zutabean uzteko: konektatu orga eta sakatu pedala edo "0" botoia.'
    ]
  },
  {
    id: 'trusystem-transferencia-no-cero',
    title: 'TruSystem 7500 · Transferencia con Posición Diferente a Cero (Mando SensorLine)',
    titleEu: 'TruSystem 7500 · Zerotik Kanpoko Posizioan Transferentzia (SensorLine Agintea)',
    category: 'transfer',
    categoryLabel: 'Transfer y Movilización',
    categoryLabelEu: 'Transferra eta Mugikortasuna',
    videoUrl: '/assets/aistudio/Transferencia_de_Posici_n_5c2f9d02.mp4',
    operatingRooms: 'Quirófano Central HUN B',
    operatingRoomsEu: 'NUO B Erdiko Ebakigela',
    duration: '01:38',
    badge: 'SensorLine',
    badgeEu: 'SensorLine',
    summary: 'Cómo realizar la transferencia del paciente sin devolver la mesa a la posición plana cero (por ejemplo, con respaldo elevado en pacientes respiratorios o placas flexionadas) utilizando el mando SensorLine.',
    summaryEu: 'Nola egin pazientearen transferentzia mahaia zero posizio lau batera itzuli gabe (adibidez, arnas gaixoetan bizkarraldea jasota) SensorLine agintea erabiliz.',
    keySteps: [
      'Requisito indispensable: disponer del mando negro TruSystem SensorLine.',
      'Entrar en el submenú "Posición" del mando SensorLine.',
      'En la parte inferior izquierda, pinchar en "Transferir".',
      'Pulsar "Ejecutar". La mesa efectúa un micromovimiento de ajuste automático avisando de que está preparada.',
      'Ajustar la altura de la mesa e introducir el carro transfer hasta el tope.',
      'El carro recibe el tablero en su posición angulada.',
      '¡REGLA FUNDAMENTAL PARA PONER A CERO!: Es obligatorio conectar la mesa a la columna para hacer el cero; no se puede hacer el cero con el tablero montado sobre el carro transfer.'
    ],
    keyStepsEu: [
      'Derrigorrezko baldintza: TruSystem SensorLine aginte beltza izatea.',
      'Sartu SensorLine aginteko "Posizioa" azpimenuan.',
      'Beheko ezkerrean sakatu "Transferitu" botoia.',
      'Sakatu "Exekutatu". Mahaiak doikuntza automatiko txiki bat egingo du prest dagoela adieraziz.',
      'Egokitu mahaiaren altuera eta sartu transfer-orga toperaino.',
      'Orgak taula inklinazio horretan jasoko du.',
      'ZEROA EGITEKO FUNTSEZKO ARAUA: Derrigorrezkoa da mahaia zutabera konektatzea zeroa egiteko; ezin da zeroa egin taula transfer-orgaren gainean dagoela.'
    ],
    warningNote: 'Para volver a poner la mesa a cero tras una transferencia con postura no cero, es IMPRESCINDIBLE conectar el tablero a la columna primero. Nunca forzar el cero sobre el carro.',
    warningNoteEu: 'Zerotik kanpoko transferentziaren ondoren mahaia berriz zerora jartzeko, BEHAR-BEHARREZKOA da taula zutabera konektatzea lehenik. Inoiz ez behartu zeroa orgaren gainean.'
  }
];
