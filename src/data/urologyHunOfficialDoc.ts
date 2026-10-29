/**
 * Documento Oficial de Quirófano Central HUN B - Urología
 * "POSICIONES QUIRÚRGICAS QUIRÓFANO CENTRAL HUN B - UROLOGÍA"
 * Archivo fuente: /assets/aistudio/POSICIONES_QUIR_GICAS_QUIR_FANO_CENTRAL_HUN_B_UROLOG_A_4d3f2210.pdf
 */

export interface UrologyFigure {
  id: string; // e.g. "FIG. 1"
  figureNumber: number;
  title: string;
  titleEu: string;
  description: string;
  descriptionEu: string;
  category: 'topes' | 'mesa' | 'proteccion' | 'perneras' | 'posicion';
  imageSrc: string;
}

export interface UrologyProtocolSection {
  id: string;
  title: string;
  titleEu: string;
  interventions: string[];
  interventionsEu: string[];
  summary: string;
  summaryEu: string;
  stepByStep: {
    order: number;
    text: string;
    textEu: string;
    figures: string[];
    important?: boolean;
  }[];
  accessoriesRequired: {
    name: string;
    nameEu: string;
    figure?: string;
    note: string;
    noteEu: string;
  }[];
  safetyChecks: string[];
  safetyChecksEu: string[];
}

export const UROLOGY_PDF_URL = "/assets/aistudio/POSICIONES_QUIR_GICAS_QUIR_FANO_CENTRAL_HUN_B_UROLOG_A_4d3f2210.pdf";
export const UROLOGY_PILE_VIDEO_URL = "/assets/aistudio/Pil__d683c7fe.mp4";

export interface VideoTutorialInfo {
  title: string;
  titleEu: string;
  tableModel: string;
  description: string;
  descriptionEu: string;
  keyInstructions: {
    title: string;
    titleEu: string;
    detail: string;
    detailEu: string;
  }[];
}

export const UROLOGY_PILE_VIDEO_DATA: VideoTutorialInfo = {
  title: "Video Tutorial: Cómo Realizar el Pilé / Flex en TruSystem 7500",
  titleEu: "Bideo-Tutoriala: Nola Egin Pilé / Flex TruSystem 7500 Mahaian",
  tableModel: "TruSystem 7500 SensorLine (Trumpf Medical / Normedan by Palex)",
  description: "Demostración práctica del manejo del mando electrónico, selección de Flex, resolución de colisión del motor con la columna central, retorno a 0º y cambio de orientación del paciente.",
  descriptionEu: "Aginte elektronikoaren erabilera praktikoa, Flex hautatzea, motorrak erdiko zutabearekin talka egitean sortutako blokeoaren ebazpena, 0º-ra itzultzea eta pazientearen orientazioa aldatzea.",
  keyInstructions: [
    {
      title: "1. Acceso a la Función Flex (Pilé)",
      titleEu: "1. Flex Funtziora (Pilé) Sarbidea",
      detail: "Desde el mando SensorLine, pulsar Menú -> Posición Flex -> Confirmar 'Colocar en posición Flex' -> Mantener pulsado 'Desplazar' hasta el ángulo deseado.",
      detailEu: "SensorLine agintetik: Menua -> Flex Posizioa -> 'Flex posizioan jarri' baieztatu -> 'Desplazar' sakatuta mantendu angelura iritsi arte."
    },
    {
      title: "2. Resolución de Incidencia: Motor sobre la Columna",
      titleEu: "2. Gorabeheraren Ebazpena: Motorra Zutabearen Gainean",
      detail: "Si la mesa está desplazada longitudinalmente y el motor cae sobre la columna central, el sistema se bloquea con aviso acústico e ilumina flechas. Solución: Desplazar la mesa hacia la cabeza con el botón del mando hasta que el motor quede FUERA de la columna. Una vez libre, ya permite ejecutar el Flex.",
      detailEu: "Mahaia luzetara desplazatuta badago eta motorra zutabearen gainera erortzen bada, sistemak blokeatu egiten du soinu-seinalearekin. Irtenbidea: Mahaia bururantz desplazatu botoiarekin motorra zutabetik KANPO geratu arte. Libre dagoenean, Flex-a egiten utziko du."
    },
    {
      title: "3. Retorno Rápido a Posición 0º (Plano)",
      titleEu: "3. 0º Posiziora (Laua) Itzulera Azkarra",
      detail: "Para nivelar la mesa a la posición normal plana al concluir la cirugía, basta con pulsar el botón '0º' en el teclado inferior del mando.",
      detailEu: "Ebakuntza amaitzean mahaia posizio lau arruntera berdintzeko, agintearen beheko tekladuko '0º' botoia sakatzea nahikoa da."
    },
    {
      title: "4. Cambio de Orientación del Paciente (Normal / Invertido)",
      titleEu: "4. Pazientearen Orientazio Aldaketa (Arrunta / Alderantzikatua)",
      detail: "Si la cabeza del paciente está en el otro extremo, entrar en Menú -> Pac. Direc. -> Seleccionar 'Invertido'. Así el Pilé se ejecuta en la articulación contraria según la anatomía.",
      detailEu: "Pazientearen burua beste muturrean badago, sartu Menua -> Pac. Direc. -> 'Invertido' hautatu. Horrela, Pilé-a dagokion artikulazioan egingo da."
    }
  ]
};

export const UROLOGY_FIGURES: UrologyFigure[] = [
  {
    id: "FIG. 1",
    figureNumber: 1,
    title: "Topes articulados de espalda con pieza de enganche a mesa quirúrgica",
    titleEu: "Bizkarreko tope artikulatuak mahai kirurgikoko kako-piezarekin",
    description: "Tope articulado metálico desmontable con vástagos ajustables para soporte dorsal y lumbar.",
    descriptionEu: "Metalezko tope artikulatu desmuntagarria, bizkar eta gerriaren euskarrirako haga erregulagarriekin.",
    category: "topes",
    imageSrc: "/assets/aistudio/fig1_cc169bba.jpg"
  },
  {
    id: "FIG. 2",
    figureNumber: 2,
    title: "Zona donde se coloca el ombligo del paciente en la mesa",
    titleEu: "Pazientearen zilborra mahaian jartzen den gunea",
    description: "Círculo / marca de referencia en la colchoneta de la mesa quirúrgica Trumpf.",
    descriptionEu: "Trumpf mahai kirurgikoko koltxonetako erreferentziazko biribila / marka.",
    category: "mesa",
    imageSrc: "/assets/aistudio/fig2_4cdcd28b.png"
  },
  {
    id: "FIG. 3",
    figureNumber: 3,
    title: "Alineación del ombligo con la partición de la mesa quirúrgica",
    titleEu: "Zilborraren lerrokatzea mahai kirurgikoaren banaketarekin",
    description: "Comprobación visual de que el ombligo coincide con el quiebro de la camilla antes de lateralizar.",
    descriptionEu: "Zilborra ohearen tolesturarekin bat datorrela egiaztatzea alboratu aurretik.",
    category: "mesa",
    imageSrc: "/assets/aistudio/fig2_4cdcd28b.png"
  },
  {
    id: "FIG. 4",
    figureNumber: 4,
    title: "Paso coordinado a decúbito lateral (lado a operar hacia arriba)",
    titleEu: "Albo-etzanerako urrats koordinatua (operatuko den aldea gora begira)",
    description: "Volteo del paciente asistido por celadores y enfermería manteniendo eje cervical y vías seguras.",
    descriptionEu: "Pazientearen biraketa zeladore eta erizainek lagunduta, lepo-ardatza eta bideak ziur mantenduz.",
    category: "posicion",
    imageSrc: "/assets/aistudio/fig4_a948405c.jpg"
  },
  {
    id: "FIG. 5",
    figureNumber: 5,
    title: "Protector de gel ('chocolatina') entre las piernas",
    titleEu: "Hanken arteko gel babeslea ('txokolatina')",
    description: "Almohadilla de gel cuadriculada para evitar roces, fricción o úlceras por presión entre rodillas y maléolos.",
    descriptionEu: "Koadrikulatutako gel-kuxina belaun eta orkatilen arteko marruskadura edo ultzerak saihesteko.",
    category: "proteccion",
    imageSrc: "/assets/aistudio/fig5_2f745ccf.png"
  },
  {
    id: "FIG. 6",
    figureNumber: 6,
    title: "Protector tipo 'huevera' de espuma viscoelástica para topes",
    titleEu: "Topetarako 'arrautzontzi' motako apar-babeslea",
    description: "Espuma alveolada que recubre los topes articulados para prevenir rojeces, cizallamiento y lesiones en piel.",
    descriptionEu: "Tope artikulatuak estaltzen dituen apar zulatua, gorritasunak eta azaleko lesioak eragozteko.",
    category: "proteccion",
    imageSrc: "/assets/aistudio/fig5_2f745ccf.png"
  },
  {
    id: "FIG. 7",
    figureNumber: 7,
    title: "Mando de la mesa quirúrgica Trumpf SensorLine: Botón 'Flex'",
    titleEu: "Trumpf SensorLine mahai kirurgikoaren agintea: 'Flex' botoia",
    description: "Puesta de la mesa en posición pilé / partición abdominal pulsando el botón 'Flex' en pantalla.",
    descriptionEu: "Mahaia pilé / sabel-banaketa posizioan jartzea pantailako 'Flex' botoia sakatuta.",
    category: "mesa",
    imageSrc: "/assets/aistudio/fig6_2a7075e5.png"
  },
  {
    id: "FIG. 7 BIS",
    figureNumber: 7.1,
    title: "Pantalla de confirmación 'Colocar en posición Flex' (Pilé)",
    titleEu: "'Flex posizioan jarri' (Pilé) baieztapen pantaila",
    description: "Confirmación del desplazamiento motorizado del pilé con el mando de la mesa.",
    descriptionEu: "Pilé-aren desplazamendu motorduna baieztatzea mahaiko kontrol-agintean.",
    category: "mesa",
    imageSrc: "/assets/aistudio/fig6_2a7075e5.png"
  },
  {
    id: "FIG. 8",
    figureNumber: 8,
    title: "Topes articulados colocados en la espalda (escápulas y zona lumbar)",
    titleEu: "Bizkarrean jarritako tope artikulatuak (eskapuletan eta gerrialdean)",
    description: "Fijación rígida en la espalda con protectores tipo huevera; no molestan ni a cirujano ni a instrumentista.",
    descriptionEu: "Bizkarreko finkapen zurruna arrautzontzi babesleekin; ez diete eragozpenik sortzen zirujauari ez instrumentistari.",
    category: "topes",
    imageSrc: "/assets/aistudio/fig7_b5a23c6a.jpg"
  },
  {
    id: "FIG. 9",
    figureNumber: 9,
    title: "Zona exacta de rieles donde se anclan los topes articulados",
    titleEu: "Tope artikulatuak ainguratzen diren errailen gune zehatza",
    description: "Visión panorámica de los soportes metálicos y vástagos de fijación a lo largo del riel lateral.",
    descriptionEu: "Alboko errailean zeharreko metalezko euskarrien eta finkapen-hagentzako ikuspegi orokorra.",
    category: "topes",
    imageSrc: "/assets/aistudio/fig8_a4c06b96.jpg"
  },
  {
    id: "FIG. 10",
    figureNumber: 10,
    title: "Cincha de seguridad ancha para evitar caídas del paciente",
    titleEu: "Pazientearen erorikoak saihesteko segurtasun-uhal zabala",
    description: "Banda acolchada que rodea la mesa y fija la pelvis/trocánter una vez colocados los topes.",
    descriptionEu: "Mahaia inguratzen duen banda kuxindua, topeen ondoren pelbisa/trokanterra finkatzeko.",
    category: "proteccion",
    imageSrc: "/assets/aistudio/fig9_3ddfbcfa.jpg"
  },
  {
    id: "FIG. 11",
    figureNumber: 11,
    title: "Colocación de brazos: brazo superior en pernera tipo teja y cincha de seguridad",
    titleEu: "Besoen kokapena: goiko besoa teila motako hanka-euskarrian eta segurtasun-uhala",
    description: "Brazo superior en teja con protector de huevera (hombro a la misma altura que antebrazo, muñeca bien alineada). Brazo inferior en bracero normal con velcro. Vía aérea y venosas accesibles.",
    descriptionEu: "Goiko besoa teilan arrautzontzi babeslearekin (sorbalda eta besaurrea altuera berean, eskumuturra ondo lerrokatuta). Beheko besoa ohiko besokoan belkroarekin. Aire-bidea eta bide benosoak eskuragarri.",
    category: "posicion",
    imageSrc: "/assets/aistudio/fig10_93cadf43.jpg"
  },
  {
    id: "FIG. 12",
    figureNumber: 12,
    title: "Pernera tipo bota (Allen) y pieza negra de enganche a la mesa (tipo pinza)",
    titleEu: "Bota motako hanka-euskarria (Allen) eta mahaira kakoa egiten duen pieza beltza (pintza motakoa)",
    description: "Pieza negra con mordaza que abraza el riel de la mesa quirúrgica para insertar la pernera.",
    descriptionEu: "Mahai kirurgikoko erraila besarkatzen duen pintza itxurako pieza beltza, hanka-euskarria sartzeko.",
    category: "perneras",
    imageSrc: "/assets/aistudio/fig13_c6703177.jpg"
  },
  {
    id: "FIG. 13",
    figureNumber: 13,
    title: "Zona de la mesa donde colocar la pernera (marca de dos círculos)",
    titleEu: "Mahaian hanka-euskarria jartzeko gunea (bi biribildun marka)",
    description: "Ubicación en mesas sin prolongador pélvico para inserción de la mordaza de la pernera.",
    descriptionEu: "Luzagailu pelbikorik gabeko mahaietako kokapena hanka-euskarriaren matxarda sartzeko.",
    category: "mesa",
    imageSrc: "/assets/aistudio/fig14_758a5004.png"
  },
  {
    id: "FIG. 14",
    figureNumber: 14,
    title: "Lugar donde se encaja la pieza para las perneras",
    titleEu: "Hanka-euskarrientzako pieza ahokatzen den lekua",
    description: "Detalle del ensamble de la mordaza en el riel quirúrgico lateral.",
    descriptionEu: "Alboko errail kirurgikoan matxarda ahokatzeko xehetasuna.",
    category: "perneras",
    imageSrc: "/assets/aistudio/fig14_758a5004.png"
  },
  {
    id: "FIG. 15",
    figureNumber: 15,
    title: "Rosca para apretar la pernera en la mesa y gatillos para soltar",
    titleEu: "Hanka-euskarria mahaian estutzeko torlojua eta askatzeko krisketa / gatilloak",
    description: "Ajuste firme de la rosca negra manual. Atención a la orientación con el prolongador para que los gatillos no choquen.",
    descriptionEu: "Eskuzko torloju beltzaren estutze sendoa. Kontuz luzagailuarekin krisketek talka egin ez dezaten.",
    category: "perneras",
    imageSrc: "/assets/aistudio/fig15_04bdb993.jpg"
  },
  {
    id: "FIG. 16",
    figureNumber: 16,
    title: "Litotomía completa con perneras Allen: Visión frontal desde los pies",
    titleEu: "Litotomia osoa Allen hanka-euskarriekin: Aurreko ikuspegia oinetatik",
    description: "Ambas piernas elevadas con botas acolchadas amarillas, nalgas al borde y campo perineal despejado.",
    descriptionEu: "Bi hankak goratuta bota kuxindu horiekin, ipurmasailak ertzean eta perineoko eremua libre.",
    category: "posicion",
    imageSrc: "/assets/aistudio/fig16_c63d8a43.png"
  },
  {
    id: "FIG. 17",
    figureNumber: 17,
    title: "Litotomía: Visión lateral demostrando muslo relajado en cara interna",
    titleEu: "Litotomia: Alboko ikuspegia barruko aldeko izterra lasai dagoela erakutsiz",
    description: "Comprobación de que la cara interna del muslo no sufre hiperabducción ni tensión en nervio ciático poplíteo externo.",
    descriptionEu: "Izterraren barruko aldeak gehiegizko abdukziorik edo tentsiorik jasaten ez duela egiaztatzea.",
    category: "posicion",
    imageSrc: "/assets/aistudio/fig16_c63d8a43.png"
  },
  {
    id: "FIG. 18",
    figureNumber: 18,
    title: "Posición URS (Ureteroscopia): Perneras con la pierna del lado afectada bajada",
    titleEu: "URS posizioa (Ureteroskopia): Hanka-euskarriak afektatutako aldeko hanka beheratuta",
    description: "La pierna no intervenida permanece elevada en pernera mientras la pierna afectada desciende para paso del ureteroscopio y arco de RX.",
    descriptionEu: "Ebakuntza jasaten ez duen hanka goratuta geratzen da eta afektatutako hanka jaisten da ureteroskopioa eta RX arkua sartzeko.",
    category: "posicion",
    imageSrc: "/assets/aistudio/fig17_ae2c1e5a.jpg"
  },
  {
    id: "FIG. 19",
    figureNumber: 19,
    title: "Posición NLP (Nefrolitotomía Percutánea): URS lateralizada con rodillo en riñón afecto",
    titleEu: "NLP posizioa: URS alboratua afektatutako giltzurrunean arrabola jarrita",
    description: "Configuración similar a URS con elevación/rodillo bajo el flanco renal afectado para punción percutánea radioscópica.",
    descriptionEu: "URS-ren antzeko konfigurazioa, afektatutako giltzurrun-alboaren azpian arrabola jarriz ziztada perkutaneorako.",
    category: "posicion",
    imageSrc: "/assets/aistudio/fig18_ef1ccf1c.jpg"
  },
  {
    id: "FIG. 20",
    figureNumber: 20,
    title: "Trendelenburg con topes: Prostatectomía y Cistectomía Radical Laparoscópica",
    titleEu: "Trendelenburg tope artikulatuekin: Prostatektomia eta Zistektomia Erradikal Laparoskopikoa",
    description: "Topes articulados en hombros/cuello con almohadillas protectoras (hueveras), brazos metidos dentro con entremetida, vía aérea y vías centrales libres.",
    descriptionEu: "Tope artikulatuak sorbaldetan/lepoan kuxin babesleekin (arrautzontziak), besoak barrutik maindirearekin sartuta, aire-bidea eta bide zentralak libre.",
    category: "posicion",
    imageSrc: "/assets/aistudio/fig19_895287fc.jpg"
  }
];

export const UROLOGY_FIGURES_IMAGE_MAP: Record<string, { imageSrc: string; title: string; titleEu: string }> = {
  "FIG. 1": { imageSrc: "/assets/aistudio/fig1_cc169bba.jpg", title: "Topes articulados con mordaza", titleEu: "Bizkarreko tope artikulatuak" },
  "FIG. 2": { imageSrc: "/assets/aistudio/fig2_4cdcd28b.png", title: "Zona del ombligo en la mesa", titleEu: "Zilborraren kokapena mahaian" },
  "FIG. 3": { imageSrc: "/assets/aistudio/fig2_4cdcd28b.png", title: "Alineación ombligo con partición de mesa", titleEu: "Zilborraren lerrokatzea" },
  "FIG. 4": { imageSrc: "/assets/aistudio/fig4_a948405c.jpg", title: "Volteo coordinado a decúbito lateral", titleEu: "Albo-etzanerako urrats koordinatua" },
  "FIG. 5": { imageSrc: "/assets/aistudio/fig5_2f745ccf.png", title: "Protector de gel ('chocolatina')", titleEu: "Gel babeslea ('txokolatina')" },
  "FIG. 6": { imageSrc: "/assets/aistudio/fig5_2f745ccf.png", title: "Protector de huevera para topes", titleEu: "Arrautzontzi babeslea" },
  "FIG. 7": { imageSrc: "/assets/aistudio/fig6_2a7075e5.png", title: "Mando Trumpf: Botón Flex (Pilé)", titleEu: "Trumpf agintea: Flex botoia" },
  "FIG. 7 BIS": { imageSrc: "/assets/aistudio/fig6_2a7075e5.png", title: "Confirmación 'Posición Flex'", titleEu: "Flex posizioaren baieztapena" },
  "FIG. 8": { imageSrc: "/assets/aistudio/fig7_b5a23c6a.jpg", title: "Topes en escápulas y lumbares con hueveras", titleEu: "Topak eskapuletan eta gerrialdean" },
  "FIG. 9": { imageSrc: "/assets/aistudio/fig8_a4c06b96.jpg", title: "Zona donde se colocan los topes", titleEu: "Topak jartzen diren errailen gunea" },
  "FIG. 10": { imageSrc: "/assets/aistudio/fig9_3ddfbcfa.jpg", title: "Cincha de seguridad ancha", titleEu: "Segurtasun-uhal zabala" },
  "FIG. 11": { imageSrc: "/assets/aistudio/fig10_93cadf43.jpg", title: "Brazo en teja y cincha de seguridad fijada", titleEu: "Besoa teilan eta uhala finkatuta" },
  "FIG. 12": { imageSrc: "/assets/aistudio/fig13_c6703177.jpg", title: "Pieza negra de enganche para perneras Allen", titleEu: "Hanka-euskarrientzako pieza beltza" },
  "FIG. 13": { imageSrc: "/assets/aistudio/fig14_758a5004.png", title: "Zona de la mesa donde colocar pernera (2 círculos)", titleEu: "Hanka-euskarria jartzeko gunea" },
  "FIG. 14": { imageSrc: "/assets/aistudio/fig14_758a5004.png", title: "Encaje de pieza en riel para pernera", titleEu: "Piezaren ahokatzea errailean" },
  "FIG. 15": { imageSrc: "/assets/aistudio/fig15_04bdb993.jpg", title: "Rosca y gatillos para perneras", titleEu: "Torlojua eta gatilloak" },
  "FIG. 16": { imageSrc: "/assets/aistudio/fig16_c63d8a43.png", title: "Litotomía completa (visión frontal)", titleEu: "Litotomia osoa (aurreko ikuspegia)" },
  "FIG. 17": { imageSrc: "/assets/aistudio/fig16_c63d8a43.png", title: "Litotomía (visión lateral con muslo relajado)", titleEu: "Litotomia (alboko ikuspegia)" },
  "FIG. 18": { imageSrc: "/assets/aistudio/fig17_ae2c1e5a.jpg", title: "Posición URS (pierna intervenida bajada)", titleEu: "URS posizioa (hanka beheratua)" },
  "FIG. 19": { imageSrc: "/assets/aistudio/fig18_ef1ccf1c.jpg", title: "Posición NLP (URS lateralizada con rodillo)", titleEu: "NLP posizioa (arraboladuna)" },
  "FIG. 20": { imageSrc: "/assets/aistudio/fig19_895287fc.jpg", title: "Trendelenburg con topes en hombros y cuello", titleEu: "Trendelenburg topak sorbaldetan" }
};

export const UROLOGY_SECTIONS: UrologyProtocolSection[] = [
  {
    id: "decubito_lateral_urologia",
    title: "1. Decúbito Lateral con Pilé (Nefrectomías, Suprarrenalectomías, Pieloplastias)",
    titleEu: "1. Albo-etzana Pilé-arekin (Nefrektomiak, Giltzurrun gaineko guruinekoak, Pieloplastiak)",
    interventions: [
      "Nefrectomía Radical Laparoscópica",
      "Nefrectomía Parcial Laparoscópica",
      "Suprarrenalectomía Laparoscópica",
      "Pieloplastia Laparoscópica",
      "Cirugía Abierta Renal (con espalda al borde)"
    ],
    interventionsEu: [
      "Nefrektomia Erradikal Laparoskopikoa",
      "Nefrektomia Partzial Laparoskopikoa",
      "Giltzurrun gaineko Guruineko Laparoskopikoa",
      "Pieloplastia Laparoskopikoa",
      "Giltzurruneko Ebakuntza Irekia (bizkarra ertzean)"
    ],
    summary: "El paciente se coloca de medio lado con el lado a operar hacia arriba. Tripa al borde de la camilla en laparoscopia (en pacientes muy obesos queda colgando con seguridad) o espalda al borde en cirugía abierta. Ombligo a la altura del círculo de la mesa para partición abdominal (Pilé).",
    summaryEu: "Pazientea alboz jartzen da, operatuko den aldea gora begira. Sabela ohearen ertzean laparoskopian (oso obesoetan zintzilik segurtasunez) edo bizkarra ertzean ebakuntza irekian. Zilborra mahaiko biribilaren parean sabel-banaketarako (Pilé).",
    stepByStep: [
      {
        order: 1,
        text: "Partir de decúbito supino (boca arriba). Esperar visto bueno de anestesia y comprobación de vías.",
        textEu: "Bizkarrez etzanda hasi (gora begira). Erizaintza eta anestesiaren oniritzia itxaron.",
        figures: ["FIG. 2", "FIG. 3"]
      },
      {
        order: 2,
        text: "Colocar el ombligo del paciente exactamente a la altura del círculo de la camilla (FIG. 2 y 3).",
        textEu: "Jarri pazientearen zilborra zehazki ohearen biribilaren parean (2. eta 3. IRUDIAK).",
        figures: ["FIG. 2", "FIG. 3"],
        important: true
      },
      {
        order: 3,
        text: "Poner al paciente en decúbito lateral (de medio lado), SIEMPRE con el lado a operar hacia arriba (FIG. 4). Tripa al borde de la mesa. Pierna apoyada semiflexionada y pierna superior extendida.",
        textEu: "Jarri pazientea albo-etzanean, BETI operatuko den aldea gora begira (4. IRUDIA). Sabela ertzean. Beheko hanka erdi tolestuta eta goikoa luzatuta.",
        figures: ["FIG. 4"],
        important: true
      },
      {
        order: 4,
        text: "Colocar el protector de gel ('chocolatina' FIG. 5) entre las piernas para evitar roces, fricción o úlceras.",
        textEu: "Jarri gel-babeslea ('txokolatina' 5. IRUDIA) hanken artean marruskadura edo ultzerak saihesteko.",
        figures: ["FIG. 5"]
      },
      {
        order: 5,
        text: "Poner la mesa en posición pilé / partición abdominal utilizando el mando de la mesa Trumpf (botón 'Flex' FIG. 7 y 7 bis).",
        textEu: "Jarri mahaia pilé / sabel-banaketa posizioan Trumpf mahaiko agintea erabiliz ('Flex' botoia 7. eta 7 bis IRUDIAK).",
        figures: ["FIG. 7", "FIG. 7 BIS"],
        important: true
      },
      {
        order: 6,
        text: "Colocar los dos topes articulados (FIG. 1) en la espalda del paciente: uno entre las escápulas y el otro en la parte lumbar (FIG. 8 y 9). SIEMPRE van con protector tipo 'huevera' para evitar rojeces en la piel (FIG. 6).",
        textEu: "Jarri bi tope artikulatuak (1. IRUDIA) pazientearen bizkarrean: bata eskapulen artean eta bestea gerrialdean (8. eta 9. IRUDIAK). BETI 'arrautzontzi' apar-babeslearekin (6. IRUDIA).",
        figures: ["FIG. 1", "FIG. 6", "FIG. 8", "FIG. 9"],
        important: true
      },
      {
        order: 7,
        text: "Colocar la cincha de seguridad (FIG. 10) abrazando al paciente y la mesa para evitar cualquier posible caída.",
        textEu: "Jarri segurtasun-uhala (10. IRUDIA) pazientea eta mahaia lotuz edozein eroriko eragozteko.",
        figures: ["FIG. 10"]
      },
      {
        order: 8,
        text: "Colocación de brazos: El brazo de arriba en la pernera tipo teja con protector de huevera, hombro a la misma altura que antebrazo y muñeca bien colocada. El otro brazo en bracero normal de quirófano. Sujetar con velcros. Mantener vía aérea y vías venosas accesibles (FIG. 11).",
        textEu: "Besoak jartzea: Goiko besoa teila motako hanka-euskarrian arrautzontzi aparrarekin, sorbalda besaurrearen altuera berean eta eskumuturra lerrokatuta. Beheko besoa ohiko besokoan. Belkroekin lotu. Bideak libre (11. IRUDIA).",
        figures: ["FIG. 11"],
        important: true
      }
    ],
    accessoriesRequired: [
      {
        name: "Topes articulados de espalda con mordaza (2 unidades)",
        nameEu: "Bizkarreko tope artikulatuak matxardarekin (2 unitate)",
        figure: "FIG. 1",
        note: "Anclaje en rieles a nivel escapular y lumbar",
        noteEu: "Eskarpetan eta gerrialdean ainguratuak"
      },
      {
        name: "Protectores tipo huevera de espuma",
        nameEu: "Arrautzontzi motako apar-babesleak",
        figure: "FIG. 6",
        note: "Para recubrir los dos topes y la teja del brazo",
        noteEu: "Bi topeetan eta besoko teilan jartzeko"
      },
      {
        name: "Protector de gel cuadriculado ('chocolatina')",
        nameEu: "Koadrikulatutako gel-babeslea ('txokolatina')",
        figure: "FIG. 5",
        note: "Entre ambas piernas para protección de relieves óseos",
        noteEu: "Hanken artean erliebe hezurtsuak babesteko"
      },
      {
        name: "Pernera tipo teja para brazo superior",
        nameEu: "Teila motako hanka-euskarria goiko besoarentzat",
        figure: "FIG. 11",
        note: "Acolchada con huevera y velcros de sujeción",
        noteEu: "Arrautzontziarekin eta belkroekin lotua"
      },
      {
        name: "Cincha de seguridad ancha",
        nameEu: "Segurtasun-uhal zabala",
        figure: "FIG. 10",
        note: "Para fijar al paciente a la mesa una vez puesto el pilé",
        noteEu: "Pilé-a jarritakoan pazienteari eusteko"
      }
    ],
    safetyChecks: [
      "Verificar que el ombligo coincide con el círculo de la mesa antes del quiebro",
      "Confirmar que los topes no molestan al urólogo ni a la enfermera instrumentista",
      "Comprobar pulsos y acceso libre a vía aérea y accesos venosos periféricos",
      "Regla HUN Q5-6: Dejar todos los accesorios en el mueble INTERIOR de quirófano al finalizar"
    ],
    safetyChecksEu: [
      "Egiaztatu zilborra mahaiko biribilarekin bat datorrela tolestu aurretik",
      "Baieztatu tope artikulatuek ez diotela traba egiten urologoari ez instrumentistari",
      "Egiaztatu pultsuak eta bide benoso zein aire-bidearen sarbide librea",
      "NUO Q5-6 araua: Amaieran osagarri guztiak ebakigelako BARRUKO altzarian utzi"
    ]
  },
  {
    id: "litotomia_urologia",
    title: "2. Decúbito Supino en Litotomía con Perneras (RTU, Rezum, Botox, Cistoceles)",
    titleEu: "2. Bizkarrez Etzana Litotomian Hanka-euskarriekin (RTU, Rezum, Botox, Zistozelak)",
    interventions: [
      "Resección Transuretral (RTU) Vesical y Prostática",
      "Cirugía de Cistoceles y Colocación de Mallas",
      "Inyección intravesical de Toxina Botulínica (Botox)",
      "Tratamiento Rezum prostático",
      "Litotricia Vesical"
    ],
    interventionsEu: [
      "RTU Besikala eta Prostatikoa",
      "Zistozelen ebakuntza eta Sareak jartzea",
      "Toxina Botulinikoaren Injekzioa (Botox)",
      "Rezum Tratamendua",
      "Litotrizia Besikala"
    ],
    summary: "Paciente en supino con nalgas en el borde de la parte pélvica de la mesa. Medias de tubitón para proteger piernas. Perneras Allen/Goepel enganchadas con piezas negras de pinza (FIG. 12) y rosca (FIG. 15) en la zona de dos círculos. Muslos en cara interna relajados para evitar lesiones nerviosas.",
    summaryEu: "Pazientea gora begira ipurmasailak mahaiko zati pelbikoaren ertzean dituela. Tubitón galtzerdiak hankak babesteko. Allen hanka-euskarriak bi biribildun gunean pintza beltz (12. IRUDIA) eta torlojuarekin (15. IRUDIA) finkatuta. Izterrak barnealdetik lasai lesioak saihesteko.",
    stepByStep: [
      {
        order: 1,
        text: "Paciente en decúbito supino. Al recibir el visto bueno de la persona responsable de anestesia, deslizar al paciente hasta colocar las nalgas en el borde de la mesa pélvica.",
        textEu: "Pazientea bizkarrez etzanda. Anestesiako arduradunaren oniritziarekin, lerratu ipurmasailak zati pelbikoaren ertzeraino.",
        figures: ["FIG. 16"]
      },
      {
        order: 2,
        text: "Colocar al paciente unas medias o calcetines de 'tubitón' para proteger las piernas de rozaduras.",
        textEu: "Jarri pazienteari 'tubitón' galtzerdi edo babesleak hanketan urradurak saihesteko.",
        figures: ["FIG. 16", "FIG. 17"]
      },
      {
        order: 3,
        text: "El celador coloca las perneras en la mesa mediante las piezas negras que se enganchan como una pinza (FIG. 12) y se aprietan con la rosca (FIG. 15).",
        textEu: "Zeladoreak hanka-euskarriak jartzen ditu mahaian pintza moduan lotzen diren pieza beltzekin (12. IRUDIA) eta torlojuarekin estutu (15. IRUDIA).",
        figures: ["FIG. 12", "FIG. 14", "FIG. 15"],
        important: true
      },
      {
        order: 4,
        text: "Ubicación de anclaje: Se colocan en la zona donde hay dos círculos si la mesa NO tiene prolongador pélvico (FIG. 13 y 14). Si tiene prolongador, se coloca en la zona más cercana al cabecero para evitar que los gatillos de soltar choquen con la pieza negra (FIG. 15).",
        textEu: "Ainguratzeko lekua: Luzagailu pelbikorik EZ badago bi biribildun gunean jartzen dira (13. eta 14. IRUDIAK). Luzagailua badu, burualdetik gertuen dagoen gunean jarri krisketek talka ez egiteko (15. IRUDIA).",
        figures: ["FIG. 13", "FIG. 14", "FIG. 15"],
        important: true
      },
      {
        order: 5,
        text: "Una vez colocadas las perneras, se bajan para subir las piernas al paciente SIEMPRE después de preguntar a la persona responsable de anestesia.",
        textEu: "Hanka-euskarriak jarritakoan, jaitsi hankak igotzeko BETI anestesiako arduradunari galdetu ondoren.",
        figures: ["FIG. 15", "FIG. 16"],
        important: true
      },
      {
        order: 6,
        text: "Las piernas deben quedar de manera que el muslo en su cara interna quede relajado para evitar lesiones del nervio ciático poplíteo externo (FIG. 16 y FIG. 17).",
        textEu: "Hankak kokatu behar dira barnealdeko izterra erlaxatuta gera dadin kanpoko nerbio ziatiko popliteoaren kalteak saihesteko (16. eta 17. IRUDIAK).",
        figures: ["FIG. 16", "FIG. 17"],
        important: true
      }
    ],
    accessoriesRequired: [
      {
        name: "Perneras ergonómicas Allen con botas amarillas",
        nameEu: "Allen hanka-euskarri ergonomikoak bota horiekin",
        figure: "FIG. 12",
        note: "Con gatillos neumáticos de elevación",
        noteEu: "Igotzeko krisketa pneumatikoekin"
      },
      {
        name: "Piezas negras de enganche tipo pinza con rosca",
        nameEu: "Pintza motako pieza beltzak torlojuarekin",
        figure: "FIG. 12",
        note: "Para morder el riel lateral de la mesa",
        noteEu: "Mahaiko alboko erraila eusteko"
      },
      {
        name: "Medias / calcetines de tubitón",
        nameEu: "Tubitón galtzerdi babesleak",
        figure: "FIG. 16",
        note: "Protección cutánea contra fricción",
        noteEu: "Marruskaduraren aurkako azaleko babesa"
      }
    ],
    safetyChecks: [
      "Subida y bajada rigurosamente SIMULTÁNEA de ambas piernas entre dos personas",
      "Comprobar que los gatillos de las perneras quedan libres de colisión",
      "Verificar nalgas al borde sin quedar suspendidas en vacío",
      "Al concluir: dejar perneras en mueble DENTRO de Q5-6 para desinfección"
    ],
    safetyChecksEu: [
      "Bi hankak BATERA eta aldi berean igo eta jaitsi bi pertsonen artean",
      "Egiaztatu hanka-euskarrien krisketek ez dutela trabarik egiten",
      "Ziurtatu ipurmasailak ertzean daudela airera geratu gabe",
      "Amaieran: hanka-euskarriak Q5-6ko BARRUKO altzarian utzi garbitzeko"
    ]
  },
  {
    id: "posicion_urs_urologia",
    title: "3. Posición URS (Ureteroscopias y Litotricia Ureteral)",
    titleEu: "3. URS Posizioa (Ureteroskopiak eta Uretereko Litotrizia)",
    interventions: [
      "Ureteroscopia Semirrígida y Flexible",
      "Litotricia Ureteral con Láser Holmium/Tulio",
      "Colocación de Catéter Doble J"
    ],
    interventionsEu: [
      "Ureteroskopia Erdi-zurruna eta Malgua",
      "Uretereko Litotrizia Laser bidez",
      "Doble J Kateterra jartzea"
    ],
    summary: "Posición con perneras en la que la pierna del lado afectada se baja (FIG. 18). Permite el acceso sin interferencias mecánicas para el urólogo y el paso del intensificador de imagen de Rayos X (Arco en C). Nalgas en el borde de la mesa y piernas en posición natural y relajada.",
    summaryEu: "Hanka-euskarriekin egindako posizioa, non afektatutako aldeko hanka BEHERATUTA geratzen den (18. IRUDIA). Urologoari sartzeko bidea eta RX arkuari mugitzeko lekua uzten dio. Ipurmasailak ertzean eta hankak modu naturalean.",
    stepByStep: [
      {
        order: 1,
        text: "Montar las perneras en la mesa y acomodar al paciente con las nalgas al borde de la mesa.",
        textEu: "Jarri hanka-euskarriak mahaian eta kokatu pazientea ipurmasailak ertzean dituela.",
        figures: ["FIG. 18"]
      },
      {
        order: 2,
        text: "Consultar con el urólogo cuál es el uréter / riñón afecto (derecho o izquierdo).",
        textEu: "Galdetu urologoari zein den afektatutako giltzurrun edo ureterra (eskuina ala ezkerra).",
        figures: ["FIG. 18"],
        important: true
      },
      {
        order: 3,
        text: "Bajar la pernera del lado afectado, manteniendo la extremidad inferior extendida y en declive, mientras la pierna sana permanece elevada en su pernera (FIG. 18).",
        textEu: "Jaitsi afektatutako aldeko hanka-euskarria, hanka luzatuta eta beheratuta utziz; hanka osasuntsua goratuta mantendu (18. IRUDIA).",
        figures: ["FIG. 18"],
        important: true
      },
      {
        order: 4,
        text: "Verificar que la posición sea lo más natural y relajada posible para evitar tirones o lesiones nerviosas.",
        textEu: "Egiaztatu posizioa ahalik eta naturalena dela nerbio-lesioak saihesteko.",
        figures: ["FIG. 18"]
      }
    ],
    accessoriesRequired: [
      {
        name: "Perneras Allen regulables de descenso independiente",
        nameEu: "Jaitsiera independenteko Allen hanka-euskarri erregulagarriak",
        figure: "FIG. 18",
        note: "Permite bajar una extremidad y mantener la otra arriba",
        noteEu: "Hanka bat jaitsi eta bestea gora mantentzea ahalbidetzen du"
      }
    ],
    safetyChecks: [
      "Confirmar lateralidad antes de descender la pierna",
      "Dejar espacio suficiente para el giro y avance del Arco de Rayos X",
      "Protección de piel en bota"
    ],
    safetyChecksEu: [
      "Baieztatu zein alde den hanka jaitsi aurretik",
      "Utzi leku nahikoa RX Arkuak eroso biratu dezan",
      "Azalaren babesa botan"
    ]
  },
  {
    id: "posicion_nlp_urologia",
    title: "4. Posición NLP (Nefrolitotomía Percutánea)",
    titleEu: "4. NLP Posizioa (Nefrolitotomia Perkutaneoa)",
    interventions: [
      "Nefrolitotomía Percutánea (NLP) para Litiasis Coraliforme",
      "Punción Renal guiada por Escopia y Ecografía"
    ],
    interventionsEu: [
      "Nefrolitotomia Perkutaneoa (NLP)",
      "Giltzurruneko Ziztada Eskopia bidez gidatua"
    ],
    summary: "Posición como la de Ureteroscopia (URS) pero lateralizada mediante un rodillo colocado bajo el riñón afectado (FIG. 19). Expone el flanco lumbar posterolateral para la punción renal manteniendo acceso endourológico simultáneo por la vía urinaria.",
    summaryEu: "Ureteroskopiakoaren (URS) antzeko posizioa, baina afektatutako giltzurrunaren azpian arrabola jarriz alboratua (19. IRUDIA). Gerrialdea agerian uzten du giltzurrun-ziztadarentzat.",
    stepByStep: [
      {
        order: 1,
        text: "Colocar al paciente en posición base de URS con nalgas al borde de la mesa de quirófano.",
        textEu: "Jarri pazientea URS oinarrizko posizioan ipurmasailak mahaiaren ertzean dituela.",
        figures: ["FIG. 19"]
      },
      {
        order: 2,
        text: "Bajar la pernera del lado afectado según la técnica de ureteroscopia.",
        textEu: "Jaitsi afektatutako aldeko hanka-euskarria ureteroskopia teknikaren arabera.",
        figures: ["FIG. 19"]
      },
      {
        order: 3,
        text: "Lateralizar el tronco del paciente introduciendo un rodillo cilíndrico debajo del riñón afectado para elevar el flanco (FIG. 19).",
        textEu: "Pazientearen enborra alboratu arrabol zilindrikoa afektatutako giltzurrunaren azpian sartuz albo-aldea goratzeko (19. IRUDIA).",
        figures: ["FIG. 19"],
        important: true
      },
      {
        order: 4,
        text: "Verificar estabilidad del paciente y que las piernas permanezcan en posición natural y relajada.",
        textEu: "Egiaztatu pazientearen egonkortasuna eta hankak modu lasaian daudela.",
        figures: ["FIG. 19"]
      }
    ],
    accessoriesRequired: [
      {
        name: "Rodillo cilíndrico de soporte lumbar / renal",
        nameEu: "Gerri / giltzurruneko arrabol zilindrikoa",
        figure: "FIG. 19",
        note: "Para elevar el riñón y facilitar la punción percutánea",
        noteEu: "Giltzurruna goratzeko eta ziztada errazteko"
      },
      {
        name: "Perneras Allen con descenso lateral",
        nameEu: "Allen hanka-euskarriak alboko jaitsierarekin",
        figure: "FIG. 19",
        note: "Para posición URS lateralizada",
        noteEu: "URS alboratuko posiziorako"
      }
    ],
    safetyChecks: [
      "Evitar desplazamiento accidental del rodillo durante la escopia de RX",
      "Comprobar fijación pélvica adecuada"
    ],
    safetyChecksEu: [
      "Saihestu arrabolaren mugimendua RX eskopia egiten den bitartean",
      "Egiaztatu finkapen pelbiko egokia"
    ]
  },
  {
    id: "trendelenburg_topes_urologia",
    title: "5. Trendelenburg con Topes (Prostatectomía y Cistectomía Radical)",
    titleEu: "5. Trendelenburg Toperekin (Prostatektomia eta Zistektomia Erradikala)",
    interventions: [
      "Prostatectomía Radical Laparoscópica",
      "Prostatectomía Robótica / Laparoscópica 3D",
      "Cistectomía Radical con Conducto Ileal (Bricker)"
    ],
    interventionsEu: [
      "Prostatektomia Erradikal Laparoskopikoa",
      "Prostatektomia Robotikoa / Laparoskopikoa 3D",
      "Zistektomia Erradikala (Bricker)"
    ],
    summary: "Inclinación de Trendelenburg pronunciado con los brazos metidos por dentro sujetos con la entremetida o sábana habilitada. Topes articulados colocados en la parte superior de la mesa (tenga cabecero o no) con almohadillas protectoras que cubren hombros y cuello, manteniendo vía aérea y vías centrales libres (FIG. 20).",
    summaryEu: "Trendelenburg inklinazio nabarmena besoak barruan maindirearekin sartuta dituela. Tope artikulatuak mahaiaren goiko aldean sorbalda eta lepoa estaltzen dituzten kuxin babesleekin (arrautzontziak), aire-bidea eta bide zentralak libre utziz (20. IRUDIA).",
    stepByStep: [
      {
        order: 1,
        text: "Paciente en decúbito supino. Colocar los brazos metidos por dentro pegados al tronco, sujetos con la entremetida o una sábana habilitada para tal efecto.",
        textEu: "Pazientea bizkarrez etzanda. Besoak enborrari itsatsita barrutik sartu eta maindirearekin ondo eutsi.",
        figures: ["FIG. 20"],
        important: true
      },
      {
        order: 2,
        text: "Colocar los topes articulados en la parte de arriba de la mesa de quirófano (ya tenga cabecero o no) (FIG. 20).",
        textEu: "Jarri tope artikulatuak mahai kirurgikoaren goiko aldean (burukoa eduki zein ez) (20. IRUDIA).",
        figures: ["FIG. 20"]
      },
      {
        order: 3,
        text: "Cubrir SIEMPRE los topes con almohadillas protectoras que protejan el hombro y la cara del paciente (FIG. 20).",
        textEu: "Estali BETI tope artikulatuak sorbalda eta aurpegia babesten dituzten kuxin babesleekin (20. IRUDIA).",
        figures: ["FIG. 20"],
        important: true
      },
      {
        order: 4,
        text: "Especial atención de celadores y enfermería: Mantener la vía aérea (tubo endotraqueal) y posibles vías centrales o yugulares totalmente libres de presión.",
        textEu: "Zeladore eta erizaintzaren arreta berezia: Aire-bidea (hodi endotrakeala) eta bide zentralak presiorik gabe eta erabat libre mantendu.",
        figures: ["FIG. 20"],
        important: true
      },
      {
        order: 5,
        text: "Accionar la inclinación en Trendelenburg motorizada con el mando de la mesa según requerimiento del cirujano.",
        textEu: "Trendelenburg inklinazio motorduna aktibatu mahaiko agintearekin zirujauaren esanera.",
        figures: ["FIG. 20"]
      }
    ],
    accessoriesRequired: [
      {
        name: "Topes articulados superiores de hombro",
        nameEu: "Goiko sorbalda-tope artikulatuak",
        figure: "FIG. 20",
        note: "Para impedir desplazamiento cefálico durante el Trendelenburg",
        noteEu: "Trendelenburg-ean pazienteak bururantz irrist egin ez dezan"
      },
      {
        name: "Protectores acolchados de hombro y cuello (huevera)",
        nameEu: "Sorbalda eta lepoko kuxin babesleak (arrautzontzia)",
        figure: "FIG. 20",
        note: "Evita plexopatía braquial por compresión directa",
        noteEu: "Presio zuzenagatik plexu brakialeko kaltea saihesten du"
      },
      {
        name: "Entremetida / sábana de sujeción para brazos",
        nameEu: "Besoak eusteko maindirea",
        figure: "FIG. 20",
        note: "Para empaquetar brazos a lo largo del cuerpo",
        noteEu: "Besoak gorputzean zehar bilduta mantentzeko"
      }
    ],
    safetyChecks: [
      "Vigilancia rigurosa del tubo orotraqueal: no debe rozar contra los topes",
      "Comprobar vías venosas y catéter arterial permeables",
      "Retirada gradual del Trendelenburg al finalizar la cirugía"
    ],
    safetyChecksEu: [
      "Hodi orotrakealaren zaintza zorrotza: ez du topeekin marruskatu behar",
      "Egiaztatu bide benosoak eta arteria-kateterrak zabalik daudela",
      "Trendelenburg-a poliki eta mailakatuz kendu ebakuntza bukatzean"
    ]
  },
  {
    id: "laparotomia_abierta_urologia",
    title: "6. Cirugía Abierta Urológica / Laparotomía (Brazos en Cruz)",
    titleEu: "6. Ebakuntza Ireki Urologikoa / Laparotomia (Besoak Gurutzean)",
    interventions: [
      "Nefrectomía Abierta",
      "Laparotomía Urológica Exploradora",
      "Cirugía de Grandes Masas Renales o Retroperitoneales"
    ],
    interventionsEu: [
      "Nefrektomia Irekia",
      "Laparotomia Urologiko Esploratzailea",
      "Giltzurruneko Masa Handien Ebakuntza"
    ],
    summary: "Decúbito supino con brazos en cruz utilizando dos apoyabrazos (uno a cada lado). Importante colocarlos de tal manera que no molesten a los cirujanos/as y sobre todo que el hombro de la persona a operar no esté forzado (ángulo menor de 90º) para evitar plexopatías braquiales.",
    summaryEu: "Bizkarrez etzanda besoak gurutzean bi besoko erabiliz (bata alde bakoitzean). Garrantzitsua da zirujauen lana ez eragozteko moduan jartzea eta sorbalda bortxatu gabe mantentzea (90º baino gutxiago) plexu brakialeko lesioak eragozteko.",
    stepByStep: [
      {
        order: 1,
        text: "Paciente en decúbito supino.",
        textEu: "Pazientea bizkarrez etzanda.",
        figures: []
      },
      {
        order: 2,
        text: "Colocar los dos apoyabrazos acolchados a cada lado de la mesa quirúrgica.",
        textEu: "Jarri bi besoko kuxinduak mahai kirurgikoaren alde bakoitzean.",
        figures: []
      },
      {
        order: 3,
        text: "Extender los brazos en cruz con ángulo menor a 90º respecto al tronco. No forzar el hombro.",
        textEu: "Luzatu besoak gurutzean enborrarekiko 90º baino gutxiagoko angeluan. Ez bortxatu sorbalda.",
        figures: [],
        important: true
      },
      {
        order: 4,
        text: "Verificar con el cirujano que los apoyabrazos no impiden la posición de trabajo de los facultativos.",
        textEu: "Egiaztatu zirujauarekin besokoek ez dietela medikuei lanean traba egiten.",
        figures: []
      }
    ],
    accessoriesRequired: [
      {
        name: "Dos apoyabrazos acolchados de quirófano",
        nameEu: "Ebakigelako bi besoko kuxindu",
        note: "Con correas de sujeción suaves",
        noteEu: "Eusteko uhal bigunekin"
      }
    ],
    safetyChecks: [
      "Ángulo de abducción estrictamente menor a 90º",
      "Almohadillado del canal cubital en codo"
    ],
    safetyChecksEu: [
      "Abdukzio angelua zorrozki 90º baino txikiagoa",
      "Kybitoko kanalaren babesa ukondoan"
    ]
  }
];
