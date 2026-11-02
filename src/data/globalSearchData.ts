/**
 * Motor de Búsqueda Global para HUN - Quirófanos
 * Indexación exhaustiva de especialidades, quirófanos, intervenciones,
 * posiciones, mesas, accesorios, aparataje, funciones de celadores,
 * vídeos y documentación oficial del hospital.
 */

export interface GlobalSearchResult {
  id: string;
  title: string;
  titleEu?: string;
  category: 
    | 'especialidades' 
    | 'intervenciones' 
    | 'posiciones' 
    | 'mesas_transfer' 
    | 'aparataje' 
    | 'funciones' 
    | 'videos_docs';
  categoryLabel: string;
  categoryLabelEu: string;
  operatingRoom?: string;
  description: string;
  descriptionEu?: string;
  badge?: string;
  badgeColor?: string;
  // Navigation instruction
  targetTab: string;
  targetSubParam?: string;
  keywords: string[];
}

export const GLOBAL_SEARCH_INDEX: GlobalSearchResult[] = [
  // =========================================================================
  // 1. ESPECIALIDADES Y QUIRÓFANOS
  // =========================================================================
  {
    id: 'spec-q1',
    title: 'Quirófano 1 (Q1) – Urgencias (24 Horas)',
    titleEu: '1. Ebakigela (Q1) – Larrialdiak (24 Ordu)',
    category: 'especialidades',
    categoryLabel: 'Especialidades & Quirófanos',
    categoryLabelEu: 'Espezialitateak & Ebakigelak',
    operatingRoom: 'Quirófano 1',
    description: 'Atención continuada a patología urgente del Área General V: cirugía general, politrauma, apendicectomías y laparotomías.',
    descriptionEu: 'V. Eremu Orokorreko urgentziazko patologia 24 orduz: kirurgia orokorra, politraumatismoak eta apendizitisak.',
    badge: 'Urgencias 24h',
    badgeColor: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
    targetTab: 'q1',
    keywords: ['q1', 'urgencias', '24 horas', 'apendicitis', 'guardia', 'peritonitis', 'laparotomia urgente']
  },
  {
    id: 'spec-q2',
    title: 'Quirófano 2 (Q2) – Otorrinolaringología (ORL)',
    titleEu: '2. Ebakigela (Q2) – Otorrinolaringologia (ORL)',
    category: 'especialidades',
    categoryLabel: 'Especialidades & Quirófanos',
    categoryLabelEu: 'Espezialitateak & Ebakigelak',
    operatingRoom: 'Quirófano 2',
    description: 'Cirugías de cabeza y cuello, microcirugía ótica con microscopio ZEISS, laringe en suspensión, CENS y amigdalectomía en posición de Rose.',
    descriptionEu: 'Buru eta lepoko kirurgiak, belarriko mikrokirurgia ZEISS mikroskopioarekin, CENS eta Rose posizioa.',
    badge: 'ORL Microcirugía',
    badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
    targetTab: 'q2',
    keywords: ['q2', 'orl', 'otorrino', 'otorrinolaringologia', 'oido', 'laringe', 'zeiss', 'cuernos', 'roser', 'rose']
  },
  {
    id: 'spec-q3-q4',
    title: 'Quirófano 3 y 4 (Q3 - Q4) – Oftalmología',
    titleEu: '3 eta 4 Ebakigelak (Q3 - Q4) – Oftalmologia',
    category: 'especialidades',
    categoryLabel: 'Especialidades & Quirófanos',
    categoryLabelEu: 'Espezialitateak & Ebakigelak',
    operatingRoom: 'Quirófanos 3 y 4',
    description: 'Microcirugía ocular: cataratas (facoemulsificación), retina, vitrectomía y trasplantes corneales. Camillas Stryker (Q3) y Middar (Q4).',
    descriptionEu: 'Begietako mikrokirurgia: kataratak, bitrektomia, erretina. Stryker (Q3) eta Middar (Q4) camillak.',
    badge: 'Oftalmología',
    badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300',
    targetTab: 'q3_q4',
    keywords: ['q3', 'q4', 'oftalmo', 'oftalmologia', 'ojos', 'cataratas', 'stryker', 'middar', 'vitrectomia', 'retina']
  },
  {
    id: 'spec-q5-q6',
    title: 'Quirófano 5 y 6 (Q5 - Q6) – Urología',
    titleEu: '5 eta 6 Ebakigelak (Q5 - Q6) – Urologia',
    category: 'especialidades',
    categoryLabel: 'Especialidades & Quirófanos',
    categoryLabelEu: 'Espezialitateak & Ebakigelak',
    operatingRoom: 'Quirófanos 5 y 6',
    description: 'Cirugía endourológica y laparoscópica: Nefrectomías con Pilé, RTU, URS, NLP, Prostatectomías en Trendelenburg con topes y perneras Allen.',
    descriptionEu: 'Urologia laparoskopikoa eta endourologikoa: Nefrektomiak Pilé-rekin, RTU, Allen hanka-euskarriak eta 20 irudi.',
    badge: 'Urología HUN',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    targetTab: 'q5_q6',
    keywords: ['q5', 'q6', 'urologia', 'uro', 'nefrectomia', 'pile', 'rtu', 'prostatectomia', 'allen', 'prolongador pelvico', 'dorsal']
  },
  {
    id: 'spec-q7-q8',
    title: 'Quirófano 7 y 8 (Q7 - Q8) – Traumatología y Cirugía Ortopédica',
    titleEu: '7 eta 8 Ebakigelak (Q7 - Q8) – Traumatologia eta Ortopedia',
    category: 'especialidades',
    categoryLabel: 'Especialidades & Quirófanos',
    categoryLabelEu: 'Espezialitateak & Ebakigelak',
    operatingRoom: 'Quirófanos 7 y 8',
    description: 'Prótesis de cadera (PTC/PPC), rodilla (PTR), artroscopia de hombro en silla de playa, mesa de tracción ortopédica (pelvistato) y Unidad del Dolor.',
    descriptionEu: 'Aldaka eta belauneko protesiak, sorbalda hondartza-aulkian, pelbistatoa eta Minaren Unitatea.',
    badge: 'Traumatología',
    badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300',
    targetTab: 'q7_q8',
    keywords: ['q7', 'q8', 'trauma', 'traumatologia', 'ortopedia', 'cadera', 'hombro', 'rodilla', 'pelvistato', 'silla de playa', 'traccion']
  },

  // =========================================================================
  // 2. APARATAJE Y EQUIPOS
  // =========================================================================
  {
    id: 'eq-microscopio-zeiss',
    title: 'Microscopio Quirúrgico ZEISS (Quirófano 2 ORL)',
    titleEu: 'ZEISS Mikroskopio Kirurgikoa (2. Ebakigela ORL)',
    category: 'aparataje',
    categoryLabel: 'Aparataje & Equipos',
    categoryLabelEu: 'Tresneria & Ekipoak',
    operatingRoom: 'Quirófano 2 (ORL)',
    description: 'Traslado OBLIGATORIO entre 2 personas. Brazo superior SIEMPRE plegado para cruzar puertas. Para plegarlo debe estar conectado a la corriente y usarse el panel de control motorizado validado.',
    descriptionEu: 'Garraioa DERRIGORREZKOA BI pertsonen artean. Besoa tolestuta ateetatik igarotzeko. Entxufatuta egon behar da tolesteko.',
    badge: 'Equipo 1 ORL',
    badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
    targetTab: 'orl_aparataje',
    keywords: ['microscopio', 'zeiss', 'microscopio zeiss', 'microscopio quirurgico', 'plegado brazo', 'lentes', 'orl']
  },
  {
    id: 'eq-torre-karl-storz',
    title: 'Torre de Vídeo-Endoscopia KARL STORZ (ORL)',
    titleEu: 'KARL STORZ Bideo-Endoskopia Dorrea (ORL)',
    category: 'aparataje',
    categoryLabel: 'Aparataje & Equipos',
    categoryLabelEu: 'Tresneria & Ekipoak',
    operatingRoom: 'Quirófano 2 (ORL)',
    description: 'Torre para cirugía endoscópica nasosinusal (CENS). Ubicación en lado contralateral a la posición de trabajo del cirujano para visión directa. Proteger fibra óptica.',
    descriptionEu: 'CENS kirurgiarako dorrea. Zirujauaren aurkako aldean kokatzen da. Zuntz optikoa babestu.',
    badge: 'Equipo 2 ORL',
    badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
    targetTab: 'orl_aparataje',
    keywords: ['torre orl', 'torre karl storz', 'storz', 'cens', 'endoscopia', 'fibra optica', 'camara']
  },
  {
    id: 'eq-laser-deka',
    title: 'Láser DEKA SmartXide² y Maletín Metálico «LÁSER»',
    titleEu: 'DEKA SmartXide² Laserra eta «LASER» Maletatxo Metalikoa',
    category: 'aparataje',
    categoryLabel: 'Aparataje & Equipos',
    categoryLabelEu: 'Tresneria & Ekipoak',
    operatingRoom: 'Quirófano 2 (ORL)',
    description: 'REGLA INSEPARABLE HUN: La torre del láser DEKA SmartXide² debe trasladarse y almacenarse SIEMPRE junto con su MALETÍN METÁLICO rotulado «LÁSER». Nunca separar ambos elementos.',
    descriptionEu: 'NUO ARAU ZATIEZINA: DEKA laser dorrea eta aluminiozko «LASER» maletatxo metalikoa BETI elkarrekin eraman eta gorde behar dira.',
    badge: 'Equipo 8 ORL',
    badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
    targetTab: 'orl_aparataje',
    keywords: ['laser', 'laser deka', 'smartxide', 'maletin', 'maletin metalico', 'maletin laser', 'deka']
  },
  {
    id: 'eq-base-mesa-quirurgica',
    title: 'Base de la Mesa Quirúrgica (Columna Trumpf)',
    titleEu: 'Mahai Kirurgikoaren Oinarria (Trumpf Zutabea)',
    category: 'aparataje',
    categoryLabel: 'Aparataje & Equipos',
    categoryLabelEu: 'Tresneria & Ekipoak',
    operatingRoom: 'Quirófano 2 y Quirófanos Centrales',
    description: 'Base motorizada de la mesa quirúrgica con columna electrohidráulica. ATENCIÓN: No es un peso o contrapeso; es la base fija del quirófano para anclaje de los tableros.',
    descriptionEu: 'Mahai kirurgikoaren oinarri motorduna. KONTUZ: ez da pisu edo kontrapisu bat, mahaiaren oinarria baizik.',
    badge: 'Mesa Quirúrgica',
    badgeColor: 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
    targetTab: 'orl_aparataje',
    keywords: ['base de la mesa', 'base mesa', 'columna mesa', 'trumpf', 'peso', 'contrapeso', 'mesa quirurgica']
  },
  {
    id: 'eq-respirador-anestesia',
    title: 'Respirador de Anestesia y Monitorización (GE Healthcare)',
    titleEu: 'Anestesia Respiragailua eta Monitoreak',
    category: 'aparataje',
    categoryLabel: 'Aparataje & Equipos',
    categoryLabelEu: 'Tresneria & Ekipoak',
    operatingRoom: 'Cabecera de Quirófano',
    description: 'Estación de anestesia con gases medicinales, vaporizadores y circuito ventilatorio. El celador debe vigilar no tirar de tubuladuras ni desconectar tomas durante el transfer.',
    descriptionEu: 'Anestesiako ekipo nagusia. Zeladoreak zaindu behar du hodirik ez askatzeko transferrean.',
    badge: 'Anestesia',
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    targetTab: 'orl_aparataje',
    keywords: ['respirador', 'anestesia', 'respirador anestesia', 'gases', 'monitor', 'tubuladuras']
  },
  {
    id: 'eq-sillon-clinico',
    title: 'Sillón Clínico Regulable Motorizado para Cirujano',
    titleEu: 'Zirujauaren Aulki Kliniko Motorduna',
    category: 'aparataje',
    categoryLabel: 'Aparataje & Equipos',
    categoryLabelEu: 'Tresneria & Ekipoak',
    operatingRoom: 'Quirófano 2 (ORL)',
    description: 'REGLA OBLIGATORIA: Desenchufar de la corriente antes de moverlo para su uso con el cirujano. Al terminar, enchufar SIEMPRE en su punto de estacionamiento para recargar baterías.',
    descriptionEu: 'ARAUA: Korrontetik deskonektatu mugitu aurretik. Eguna amaitzean berriro entxufatu bateriak kargatzeko.',
    badge: 'Equipo 4 ORL',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    targetTab: 'orl_aparataje',
    keywords: ['sillon', 'sillon clinico', 'silla', 'silla motorizada', 'bateria', 'recarga']
  },
  {
    id: 'eq-neurosign-v4',
    title: 'Consola Neurosign V4 (Monitorización de Nervio Facial)',
    titleEu: 'Neurosign V4 Kontsola (Aurpegi Nerbioaren Jarraipena)',
    category: 'aparataje',
    categoryLabel: 'Aparataje & Equipos',
    categoryLabelEu: 'Tresneria & Ekipoak',
    operatingRoom: 'Quirófano 2 (ORL)',
    description: 'Monitor de integridad del nervio facial en cirugías de parótida y mastoidectomía. Extremar cuidado con los cables de electrodos al mover al paciente.',
    descriptionEu: 'Aurpegi-nerbioa monitorizatzeko ekipoa parotida eta belarri kirurgian.',
    badge: 'Equipo 6 ORL',
    badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
    targetTab: 'orl_aparataje',
    keywords: ['neurosign', 'nervio facial', 'electrodos', 'estimulador facial', 'parotida']
  },
  {
    id: 'eq-carro-traccion',
    title: 'Carro de Tracción Ortopédica (Pelvistato Cadera / Fémur)',
    titleEu: 'Trakzio Orga Ortopedikoa (Pelbistatoa Aldaka / Femurra)',
    category: 'aparataje',
    categoryLabel: 'Aparataje & Equipos',
    categoryLabelEu: 'Tresneria & Ekipoak',
    operatingRoom: 'Quirófano 7 y 8 (Trauma)',
    description: 'Carro acoplable a mesa Trumpf para tracción en fracturas de cadera y fémur. Dispone de vídeos explicativos de conexión, atasco y desconexión.',
    descriptionEu: 'Trumpf mahaiari lotzen zaion trakzio-orga. Bideoak ikusgai daude atal teknikoan.',
    badge: 'Trauma Q7-8',
    badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300',
    targetTab: 'videos',
    keywords: ['carro de traccion', 'pelvistato', 'traccion', 'bota traccion', 'tratusystem', 'atasco', 'conexion']
  },

  // =========================================================================
  // 3. INTERVENCIONES Y POSICIONES QUIRÚRGICAS (INCLUYE "ROSER", ETC.)
  // =========================================================================
  {
    id: 'proc-roser-amigdalas',
    title: 'Posición de Rose / Roser (Amigdalectomía y Adenoidectomía en ORL)',
    titleEu: 'Rose / Roser Posizioa (Amigdalektomia eta Adenoidektomia)',
    category: 'posiciones',
    categoryLabel: 'Posiciones Quirúrgicas',
    categoryLabelEu: 'Posizio Kirurgikoak',
    operatingRoom: 'Quirófano 2 (ORL)',
    description: 'Decúbito supino con hiperextensión cervical mediante rodillo interescapular (Posición de Rose o Roser) y abrebocas de Davis-Boyle en suspensión sobre barra de Mayo.',
    descriptionEu: 'Bizkarrez etzana lepoaren hiperextentsioarekin sorbalda arteko arrabolaz (Rose edo Roser posizioa) orofaringea bistaratzeko.',
    badge: 'Posición Rose / Roser',
    badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
    targetTab: 'transfer',
    targetSubParam: 'q2',
    keywords: ['roser', 'rose', 'posicion de rose', 'posicion de roser', 'amigdalectomia', 'adenoidectomia', 'amigdalas', 'rodillo interescapular', 'orl']
  },
  {
    id: 'proc-apendicitis',
    title: 'Apendicitis Aguda Laparoscópica (Urgencias / Q1)',
    titleEu: 'Apendizitis Akutua Laparoskopikoa (Larrialdiak / Q1)',
    category: 'intervenciones',
    categoryLabel: 'Intervenciones Quirúrgicas',
    categoryLabelEu: 'Ebakuntzak',
    operatingRoom: 'Quirófano 1 (Urgencias)',
    description: 'REGLA DE ORO MANDATORIA: «TIENE QUE ORINAR ANTES». El paciente debe vaciar la vejiga antes de entrar a quirófano para evitar perforación accidental con trócares laparoscópicos.',
    descriptionEu: 'URREZKO ARAUA: «AURRETIK TXIZA EGIN BEHAR DU». Maskuria hustu behar du nahitaez trokarrekin zulaketak saihesteko.',
    badge: 'Urgencias Q1',
    badgeColor: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
    targetTab: 'transfer',
    targetSubParam: 'q1',
    keywords: ['apendicitis', 'apendice', 'orinar antes', 'vaciado vesical', 'q1', 'trocar']
  },
  {
    id: 'proc-nefrectomia-pile',
    title: 'Nefrectomía con Pilé / Partición Abdominal (Urología HUN)',
    titleEu: 'Nefrektomia Pilé-rekin / Sabel-banaketa (NUO Urologia)',
    category: 'intervenciones',
    categoryLabel: 'Intervenciones Quirúrgicas',
    categoryLabelEu: 'Ebakuntzak',
    operatingRoom: 'Quirófano 5 y 6',
    description: 'Protocolo Oficial HUN B con 20 figuras: Decúbito lateral con Pilé. Ombligo alineado al círculo central de la mesa antes de voltear (FIG. 2 y 3). Topes con hueveras, chocolatina entre piernas.',
    descriptionEu: 'NUO B Protokoloa: Albo-etzana Pilé-rekin. Zilborra biribilera biratu aurretik (FIG. 2 eta 3). Topak arrautzontziekin eta txokolatina hanken artean.',
    badge: 'Urología Fig. 1-20',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    targetTab: 'q5_q6',
    keywords: ['nefrectomia', 'pile', 'rinon', 'decubito lateral', 'ombligo al circulo', 'chocolatina', 'huevera', 'urologia', 'prolongador dorsal']
  },
  {
    id: 'proc-prostatectomia-trendelenburg',
    title: 'Prostatectomía Radical por Laparoscopia (PRL) – Trendelenburg con Topes',
    titleEu: 'Prostatektomia Erradikal Laparoskopikoa (PRL) – Trendelenburg',
    category: 'intervenciones',
    categoryLabel: 'Intervenciones Quirúrgicas',
    categoryLabelEu: 'Ebakuntzak',
    operatingRoom: 'Quirófano 5 y 6',
    description: 'Mesa con Prolongador Dorsal y Trendelenburg pronunciado con topes articulados de hombro (FIG. 20). Cubrir topes con hueveras dejando vía aérea y vías centrales libres.',
    descriptionEu: 'Mahaia Bizkarraldeko Luzagailuarekin eta Trendelenburg sakonean sorbalda-topekin (FIG. 20).',
    badge: 'PRL Urología',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    targetTab: 'transfer',
    targetSubParam: 'q5_q6',
    keywords: ['prostatectomia', 'prl', 'prostata', 'trendelenburg', 'topes hombro', 'urologia', 'prolongador dorsal']
  },
  {
    id: 'proc-hombro-silla-playa',
    title: 'Cirugía y Artroscopia de Hombro en Silla de Playa (Beach Chair)',
    titleEu: 'Sorbalda Kirurgia eta Artroskopia Hondartza Aulkian',
    category: 'intervenciones',
    categoryLabel: 'Intervenciones Quirúrgicas',
    categoryLabelEu: 'Ebakuntzak',
    operatingRoom: 'Quirófano 7 (Trauma)',
    description: 'Respaldo articulado con paneles escapulares desmontables y cabecero rígido específico. Vídeo oficial TruSystem disponible.',
    descriptionEu: 'Bizkarralde artikulatua orratz-panel kengarriekin eta buruko zurrunarekin.',
    badge: 'Trauma Q7',
    badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300',
    targetTab: 'transfer',
    targetSubParam: 'q7_q8',
    keywords: ['hombro', 'silla de playa', 'beach chair', 'clavicula', 'humero', 'pih', 'manguito', 'q7']
  },
  {
    id: 'proc-cataratas-oftalmo',
    title: 'Cirugía de Cataratas (Facoemulsificación en Camilla Stryker/Middar)',
    titleEu: 'Kataraten Kirurgia (Fakoemulsifikazioa Stryker/Middar Camillan)',
    category: 'intervenciones',
    categoryLabel: 'Intervenciones Quirúrgicas',
    categoryLabelEu: 'Ebakuntzak',
    operatingRoom: 'Quirófano 3 y 4',
    description: 'Microcirugía en camilla específica: Q3 utiliza STRYKER y Q4 utiliza MIDDAR. Cabecero ultrafino cóncavo con apoyo para muñecas del cirujano.',
    descriptionEu: 'Begietako mikrokirurgia camilla berezian: Q3 Stryker eta Q4 Middar.',
    badge: 'Oftalmología',
    badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300',
    targetTab: 'transfer',
    targetSubParam: 'q3_q4',
    keywords: ['catarata', 'faco', 'facoemulsificacion', 'lio', 'stryker', 'middar', 'oftalmologia', 'q3', 'q4']
  },
  {
    id: 'proc-protesis-pene',
    title: 'Prótesis de Pene (Trasladada oficialmente a Prolongación Dorsal)',
    titleEu: 'Zakileko Protesia (Bizkarraldeko Luzagailura Pasatua)',
    category: 'intervenciones',
    categoryLabel: 'Intervenciones Quirúrgicas',
    categoryLabelEu: 'Ebakuntzak',
    operatingRoom: 'Quirófano 5 y 6',
    description: 'ANOTACIÓN MANUSCRITA OFICIAL HUN: Tachada de camilla normal y trasladada expresamente a PROLONGACIÓN DORSAL por protocolo quirúrgico.',
    descriptionEu: 'ESKUZKO OHAR OFIZIALA: Ohiko camillatik kenduta eta BIZKARRALDEKO LUZAGAILURA pasatua.',
    badge: 'Nota HUN Q5-Q6',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    targetTab: 'transfer',
    targetSubParam: 'q5_q6',
    keywords: ['protesis de pene', 'pene', 'prolongador dorsal', 'anotacion manuscrita', 'urologia']
  },

  // =========================================================================
  // 4. PREPARACIÓN DE MESAS Y TRANSFER
  // =========================================================================
  {
    id: 'mesa-transfer-general',
    title: 'Transfer: Preparación de la Mesa Quirúrgica Pre-Entrada y Paso',
    titleEu: 'Transferra: Mahai Kirurgikoaren Prestaketa eta Pazientearen Paso',
    category: 'mesas_transfer',
    categoryLabel: 'Mesas & Transfer',
    categoryLabelEu: 'Mahaiak & Transferra',
    operatingRoom: 'Área de Transfer',
    description: 'Clasificación de mesas y tramos por especialidad (Q1 Urgencias, Q2 ORL, Q3-Q4 Oftalmo, Q5-Q6 Urología, Q7-Q8 Trauma). 3 Pasos de Seguridad: Nivelación, Frenos y Tabla.',
    descriptionEu: 'Mahaiaren zatiak eta konfigurazioak espezialitatez. 3 segurtasun-urrats.',
    badge: 'Transfer',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    targetTab: 'transfer',
    keywords: ['mesa quirurgica', 'transfer', 'preparacion de mesa', 'preparacion mesa', 'tabla transfer', 'frenos', 'nivelacion', 'paso del paciente']
  },
  {
    id: 'mesa-prolongador-pelvico-aviso',
    title: 'Aviso Mandatorio: Prolongador Pélvico y Perneras Manuales',
    titleEu: 'Arau Mandatorioa: Luzatzaile Pelbikoa eta Eskuzko Hankakoak',
    category: 'mesas_transfer',
    categoryLabel: 'Mesas & Transfer',
    categoryLabelEu: 'Mahaiak & Transferra',
    operatingRoom: 'Quirófano 5 y 6 (Urología)',
    description: 'CARTEL OFICIAL HUN: «Cuando se coloca el prolongador pélvico, NO se pueden mover las perneras por separado con el mando. Solo es posible hacerlo manualmente».',
    descriptionEu: 'NUO KARTEL OFIZIALA: Luzatzaile pelbikoarekin hankakoak EZIN dira agintearekin banan-banan mugitu. ESKUZ BAKARRIK.',
    badge: 'Alerta Perneras',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    targetTab: 'transfer',
    targetSubParam: 'q5_q6',
    keywords: ['prolongador pelvico', 'perneras', 'perneras manuales', 'mando', 'aviso perneras', 'urologia', 'cartel']
  },
  {
    id: 'mesa-unidad-dolor',
    title: 'Protocolo de Quirófano con la Unidad del Dolor',
    titleEu: 'Minaren Unitateko Ebakigelaren Protokoloa',
    category: 'mesas_transfer',
    categoryLabel: 'Mesas & Transfer',
    categoryLabelEu: 'Mahaiak & Transferra',
    operatingRoom: 'Quirófano Asignado HUN',
    description: 'Aparataje a traer (RX Maternal, Ecógrafo y Radiofrecuencia de la Unidad del Dolor). Mesa con Prolongador Dorsal. Pasar paciente boca abajo (decúbito prono), solo una sábana y rulo en pies.',
    descriptionEu: 'Minaren Unitateko protokoloa: RX Maternal, ekografoa, radiofrecuencia, bizkarraldeko luzagailua, ahoz behera pasa eta ruloa oinetan.',
    badge: 'Unidad del Dolor',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    targetTab: 'transfer',
    targetSubParam: 'q7_q8',
    keywords: ['unidad del dolor', 'dolor', 'radiofrecuencia', 'rx maternal', 'boca abajo', 'prono', 'rulo pies']
  },
  {
    id: 'mesa-cuernos-orl',
    title: 'Cabecero de Cuernos para Otorrinolaringología (Ficha 2 HUN)',
    titleEu: 'Adar-burukoa Otorrinolaringologiarako (NUO 2. Fitxa)',
    category: 'mesas_transfer',
    categoryLabel: 'Mesas & Transfer',
    categoryLabelEu: 'Mahaiak & Transferra',
    operatingRoom: 'Quirófano 2 (ORL)',
    description: 'REGLA MANDATORIA: Montar cabecero de cuernos en los raíles superiores antes de pasar al paciente para fijación cefálica rígida en microcirugía de oído y laringe.',
    descriptionEu: 'Adarrak motako buruko berezia mahaian jarri pazientea pasa aurretik.',
    badge: 'Cabecero Cuernos',
    badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
    targetTab: 'transfer',
    targetSubParam: 'q2',
    keywords: ['cuernos', 'cabecero cuernos', 'adarrak', 'orl', 'q2', 'timpanoplastia', 'fijacion cefalica']
  },

  // =========================================================================
  // 5. FUNCIONES DEL PERSONAL CELADOR
  // =========================================================================
  {
    id: 'func-celador-dentro',
    title: 'Funciones del Celador de Dentro de Quirófano',
    titleEu: 'Barruko Zeladorearen Funtzioak',
    category: 'funciones',
    categoryLabel: 'Funciones del Celador',
    categoryLabelEu: 'Zeladoreen Funtzioak',
    operatingRoom: 'Interior de Quirófano',
    description: 'Preparación y prueba de la mesa quirúrgica, recepción del paciente en transfer, posicionamiento con enfermería y anestesia, aparataje pesado intraoperatorio y cambio entre cirugías.',
    descriptionEu: 'Mahaia probatzea eta prestatzea, pazientea transferrean hartzea, posizio kirurgikoa jartzea eta aparatuekin laguntzea.',
    badge: 'Celador de Dentro',
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    targetTab: 'funciones',
    keywords: ['celador de dentro', 'dentro', 'funciones', 'posicionamiento', 'mesa quirurgica', 'cambio quirofano']
  },
  {
    id: 'func-celador-fuera',
    title: 'Funciones del Celador de Fuera de Quirófano',
    titleEu: 'Kanpoko Zeladorearen Funtzioak',
    category: 'funciones',
    categoryLabel: 'Funciones del Celador',
    categoryLabelEu: 'Zeladoreen Funtzioak',
    operatingRoom: 'Pasillos, Planta y Transfer',
    description: 'Recepción del paciente en planta/URPA con check list, traslado a transfer, control de balas de oxígeno, biopsias urgentes a Anatomía Patológica, banco de sangre y retorno a URPA.',
    descriptionEu: 'Pazientea plantatik ekartzea, oxigeno-balak, odol-bankua, biopsiak eramatea eta URPAra itzultzea.',
    badge: 'Celador de Fuera',
    badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300',
    targetTab: 'funciones',
    keywords: ['celador de fuera', 'fuera', 'funciones', 'urpa', 'planta', 'balas oxigeno', 'biopsias', 'sangre']
  },

  // =========================================================================
  // 6. VÍDEOS Y DOCUMENTACIÓN OFICIAL
  // =========================================================================
  {
    id: 'vid-carro-traccion-conexion',
    title: 'Vídeo: Carro de Tracción – Conexión a la Mesa (TruSystem 7500)',
    titleEu: 'Bideoa: Trakzio Orga – Konexioa (TruSystem 7500)',
    category: 'videos_docs',
    categoryLabel: 'Vídeos & Documentación',
    categoryLabelEu: 'Bideoak & Agiriak',
    operatingRoom: 'Videoteca TruSystem',
    description: 'Tutorial paso a paso sobre el acoplamiento seguro del carro de tracción mecánica a la base de la mesa Trumpf.',
    descriptionEu: 'Trakzio-orga mahaian lotzeko tutoriala urratsez urrats.',
    badge: 'Vídeo Oficial',
    badgeColor: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
    targetTab: 'videos',
    keywords: ['video carro traccion', 'conexion carro', 'traccion video', 'pelvistato video', 'trusystem']
  },
  {
    id: 'vid-silla-playa',
    title: 'Vídeo: Cirugía de Hombro en Silla de Playa (Mesa de Playa)',
    titleEu: 'Bideoa: Sorbalda Kirurgia Hondartza Aulkian',
    category: 'videos_docs',
    categoryLabel: 'Vídeos & Documentación',
    categoryLabelEu: 'Bideoak & Agiriak',
    operatingRoom: 'Videoteca TruSystem',
    description: 'Montaje del respaldo articulado de playa. ADVERTENCIA: Aflojar el casco y retirar soporte de mentón ANTES de hacer cero en el mando.',
    descriptionEu: 'Hondartza aulkiaren muntaia. Oharra: kaskoa askatu zeroa egin aurretik.',
    badge: 'Vídeo Oficial',
    badgeColor: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
    targetTab: 'videos',
    keywords: ['video silla playa', 'video hombro', 'mesa de playa', 'beach chair video', 'casco mentonera']
  },
  {
    id: 'doc-fichas-oficiales',
    title: 'Fichas Originales Escaneadas del Bloque Quirúrgico Central HUN (5)',
    titleEu: 'NUO Ebakigela Nagusiko Jatorrizko Fitxa Eskaneatuak (5)',
    category: 'videos_docs',
    categoryLabel: 'Vídeos & Documentación',
    categoryLabelEu: 'Bideoak & Agiriak',
    operatingRoom: 'Documentación Oficial',
    description: 'Colección de 5 fotografías y documentos originales del HUN: Urología Q5-Q6, aviso prolongador pélvico, reglas pre-paso, cirugías con prolongación pélvica y traumatología Q7-Q8.',
    descriptionEu: 'NUOko jatorrizko 5 fitxa eskaneatuak: Urologia, traumatologia, urrezko arauak.',
    badge: '5 Fichas Escaneadas',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    targetTab: 'transfer',
    targetSubParam: 'fichas',
    keywords: ['fichas', 'fichas oficiales', 'documentos', 'fotos escaneadas', 'documentacion', 'cartel aviso']
  }
];

export function executeGlobalSearch(query: string): Record<string, GlobalSearchResult[]> {
  if (!query || !query.trim()) {
    return {};
  }

  const cleanQuery = query.toLowerCase().trim();
  const searchWords = cleanQuery.split(/\s+/).filter(w => w.length > 0);

  const matched = GLOBAL_SEARCH_INDEX.filter(item => {
    const haystack = [
      item.title.toLowerCase(),
      item.titleEu ? item.titleEu.toLowerCase() : '',
      item.description.toLowerCase(),
      item.descriptionEu ? item.descriptionEu.toLowerCase() : '',
      item.operatingRoom ? item.operatingRoom.toLowerCase() : '',
      item.badge ? item.badge.toLowerCase() : '',
      ...item.keywords
    ].join(' ');

    return searchWords.every(word => haystack.includes(word));
  });

  // Group by category
  const grouped: Record<string, GlobalSearchResult[]> = {
    especialidades: [],
    intervenciones: [],
    posiciones: [],
    mesas_transfer: [],
    aparataje: [],
    funciones: [],
    videos_docs: []
  };

  matched.forEach(item => {
    if (grouped[item.category]) {
      grouped[item.category].push(item);
    }
  });

  // Remove empty categories
  const filteredGrouped: Record<string, GlobalSearchResult[]> = {};
  Object.keys(grouped).forEach(cat => {
    if (grouped[cat].length > 0) {
      filteredGrouped[cat] = grouped[cat];
    }
  });

  return filteredGrouped;
}
