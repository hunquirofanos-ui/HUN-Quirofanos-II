/**
 * Protocolos Oficiales de Preparación de la Mesa Quirúrgica Antes de Entrar a Quirófano y Pasar al Paciente
 * Documentación auténtica del Bloque Quirúrgico Central HUN Área General V
 */

export interface PreEntryProtocolItem {
  id: string;
  name: string;
  nameEu: string;
  acronym?: string;
  category: 'mesa_normal' | 'pelvistato' | 'pelvico' | 'silla_playa' | 'prolongador_dorsal' | 'prolongacion_pelvica';
  categoryLabel: string;
  categoryLabelEu: string;
  operatingRooms: string;
  specialty: string;
  specialtyEu: string;
  tableSetupRequired: string;
  tableSetupRequiredEu: string;
  crucialRule?: string;
  crucialRuleEu?: string;
}

export interface GoldenRuleItem {
  id: string;
  specialtyOrSurgery: string;
  specialtyOrSurgeryEu: string;
  ruleInstruction: string;
  ruleInstructionEu: string;
  operatingRoom: string;
  clinicalReason: string;
  clinicalReasonEu: string;
  tag: string;
  severity: 'critical' | 'important';
}

const ASSETS_BASE = `${import.meta.env.BASE_URL}assets/aistudio/`;

export const PRE_ENTRY_TRAUMA_SHEET_IMG = `${ASSETS_BASE}IMG20251125101016_75cc8f18.jpg`;
export const PRE_ENTRY_URO_SHEET_IMG = `${ASSETS_BASE}IMG20251125101013_425cd304.jpg`;
export const PRE_ENTRY_RULES_SHEET_IMG = `${ASSETS_BASE}IMG20251125101020_modificado.jpg`;
export const PRE_ENTRY_URO_Q5Q6_MESAS_IMG = `${ASSETS_BASE}IMG20251125101010_20c7027f.jpg`;
export const PRE_ENTRY_PROLONGADOR_PELVICO_AVISO_IMG = `${ASSETS_BASE}IMG20251125101101_f90b49b9.jpg`;
export const OFFICIAL_HUN_LOGO_IMG = `${ASSETS_BASE}Logotipo_hospitalario_con_quir_fanos_II_413ef642.png`;


/**
 * REGLAS DE ORO PRE-PASO DEL PACIENTE (Ficha 2)
 */
export const PRE_ENTRY_GOLDEN_RULES: GoldenRuleItem[] = [
  {
    id: 'rule-apendicitis',
    specialtyOrSurgery: 'Apendicitis Aguda (Urgencias / Q1)',
    specialtyOrSurgeryEu: 'Apendizitis Akutua (Larrialdiak / Q1)',
    ruleInstruction: '“TIENE QUE ORINAR ANTES”',
    ruleInstructionEu: '“AURRETIK TXIZA EGIN BEHAR DU”',
    operatingRoom: 'Quirófano 1 (Urgencias)',
    clinicalReason: 'Es imperativo que el paciente orine antes de entrar a quirófano para vaciar completamente la vejiga. Esto previene perforaciones accidentales con los trócares laparoscópicos o bisturí suprapúbico.',
    clinicalReasonEu: 'Ezinbestekoa da pazienteak ebakigelara sartu aurretik maskuria hustea, trokar laparoskopikoekin edo ebaki suprapubikoarekin istripuzko zulaketak saihesteko.',
    tag: 'Micción Previa Obligatoria',
    severity: 'critical'
  },
  {
    id: 'rule-otorrino-criterio-cirujano',
    specialtyOrSurgery: 'Otorrino (ORL - Quirófano 2)',
    specialtyOrSurgeryEu: 'Otorrinoa (ORL - 2. Ebakigela)',
    ruleInstruction: '“CUERNOS”',
    ruleInstructionEu: '“ADARRAK (CUERNOS)”',
    operatingRoom: 'Quirófano 2 (ORL)',
    clinicalReason: 'En Otorrinolaringología (ORL / Q2), la mesa quirúrgica debe prepararse con el accesorio específico de cabecero tipo cuernos para adecuada fijación y extensión cervical en microcirugía.',
    clinicalReasonEu: 'Otorrinolaringologian (ORL / Q2), mahaia "adarrak" motako buru-euskarri bereziarekin prestatu behar da mikrokirurgian buru-finkapen zehatza lortzeko.',
    tag: 'Cabecero Cuernos ORL',
    severity: 'important'
  },
  {
    id: 'rule-trauma-edad',
    specialtyOrSurgery: 'Traumatología “EDAD” (Pacientes Geriátricos)',
    specialtyOrSurgeryEu: 'Traumatologia “ADINA” (Paziente Geriatrikoak)',
    ruleInstruction: 'PAÑAL Y EMPAPADOR',
    ruleInstructionEu: 'PUIKALA ETA ENPAPADOREA',
    operatingRoom: 'Quirófanos 7 y 8 (Trauma)',
    clinicalReason: 'En pacientes de edad avanzada de traumatología, colocar siempre pañal y empapador en la mesa de quirófano antes del transfer para proteger la piel y absorber posibles fluidos.',
    clinicalReasonEu: 'Adineko traumatologiako pazienteetan, beti jarri puikala eta enpapadorea mahaian transferra egin aurretik, larruazala babesteko eta jariakinak biltzeko.',
    tag: 'Pañal + Empapador',
    severity: 'important'
  },
  {
    id: 'rule-oftalmo-stryker-middar',
    specialtyOrSurgery: 'Oftalmología (Quirófanos 3 y 4)',
    specialtyOrSurgeryEu: 'Oftalmologia (3 eta 4 Ebakigelak)',
    ruleInstruction: 'Q3: HN – STRYKER  |  Q4: HVC – MIDDAR',
    ruleInstructionEu: 'Q3: HN – STRYKER  |  Q4: HVC – MIDDAR',
    operatingRoom: 'Quirófano 3 y Quirófano 4',
    clinicalReason: 'Configuración exacta de mesa/camilla por quirófano: Quirófano 3 (HN) utiliza sistema STRYKER; Quirófano 4 (HVC) utiliza sistema MIDDAR con cabeceros adaptados a microscopio oftalmológico.',
    clinicalReasonEu: 'Mahaiaren konfigurazio berezia: Q3 (HN) STRYKER sistemarekin; Q4 (HVC) MIDDAR sistemarekin oftalmologiako mikroskopiora egokituta.',
    tag: 'Modelos Stryker / Middar',
    severity: 'important'
  },
  {
    id: 'rule-urologia-empapador',
    specialtyOrSurgery: 'Urología General (Quirófanos 5 y 6)',
    specialtyOrSurgeryEu: 'Urologia Orokorra (5 eta 6 Ebakigelak)',
    ruleInstruction: 'EMPAPADOR',
    ruleInstructionEu: 'ENPAPADOREA',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    clinicalReason: 'Toda intervención urológica requiere preparar la mesa con empapador absorbente antes del paso del paciente debido al manejo abundante de fluidos de irrigación y sondajes.',
    clinicalReasonEu: 'Urologiako edozein ebakuntzak enpapadorea eskatzen du mahaian pazienteari pasatu aurretik, ureztatze likido ugari erabiltzen baita.',
    tag: 'Empapador Previo',
    severity: 'important'
  },
  {
    id: 'rule-maxilo-cama',
    specialtyOrSurgery: 'Cirugía Maxilofacial',
    specialtyOrSurgeryEu: 'Maxilofazial Kirurgia',
    ruleInstruction: 'CAMA NORMAL',
    ruleInstructionEu: 'OHIKO MAHAIA / OHIEA',
    operatingRoom: 'Quirófano Asignado',
    clinicalReason: 'La cirugía maxilofacial se prepara con cama o mesa estándar plana sin requerir módulos de tracción ni prolongaciones pélvicas complejas.',
    clinicalReasonEu: 'Maxilofazial kirurgian oinarrizko konfigurazio laua prestatzen da trakzio konplexurik gabe.',
    tag: 'Mesa Normal',
    severity: 'important'
  }
];

/**
 * CIRUGÍAS CON PROLONGACIÓN PÉLVICA EN UROLOGÍA (Ficha 1)
 */
export const UROLOGIA_PROLONGACION_PELVICA_LIST = [
  { name: 'DILATACION URETRAL', nameEu: 'Uretrako Dilatazioa', acronym: 'DILAT. URETRAL' },
  { name: 'NLP (Nefrolitotomía Percutánea)', nameEu: 'NLP (Giltzurruneko Harri-kentze Perkutaneroa)', acronym: 'NLP' },
  { name: 'URETEROSCOPIA. NEOPLASTIA URETRAL BILATERAL = URS', nameEu: 'Ureteroskopia. Aldebiko Uretra Neoplasia = URS', acronym: 'URS' },
  { name: 'LITIASIS CORALIFORME = RIRS', nameEu: 'Litiasi Koraliformea = RIRS', acronym: 'RIRS' },
  { 
    name: 'PIELOPLASTIA LAPAROSCOPICA (preguntar 1º) (estenosis pielouretral)', 
    nameEu: 'Pieloplastia Laparoskopikoa (aurretik galdetu!) (estenosi pielouretrala)', 
    acronym: 'PIELOPLASTIA',
    notes: '¡ATENCIÓN! Preguntar siempre al equipo antes de montar si se requiere prolongación pélvica o cambio de posición.'
  },
  { name: 'URETER (Procedimientos Ureterales)', nameEu: 'Uretereko Prozedurak', acronym: 'URETER' },
  { name: 'CATETERISMO URETRAL', nameEu: 'Uretrako Kateterismoa', acronym: 'CAT. URETRAL' },
  { name: 'DOBLE J (Colocación / Retirada Catéter Doble J)', nameEu: 'Doble J Kateterra Jarri / Kendu', acronym: 'DOBLE J' },
  { name: 'NEUROESTIMULADOR', nameEu: 'Neuroestimulatzailea', acronym: 'NEUROEST.' },
  { name: 'LITOTRICIA ENDOSCOPICA URETRAL Y RENAL', nameEu: 'Uretra eta Giltzurruneko Litotrizia Endoskopikoa', acronym: 'LITOTRICIA' },
  { name: 'URETERORRENOSCOPIA', nameEu: 'Ureterorrenoskopia', acronym: 'URS / URR' },
  { name: 'NEFROSTOMIA - CATETERISMO ANTEROGRADO', nameEu: 'Nefrostomia - Aurrerako Kateterismoa', acronym: 'NEFROSTOMIA' },
  { name: 'ESTENOSIS URETRAL', nameEu: 'Uretrako Estenosia', acronym: 'ESTENOSIS' },
  { name: 'NEFROLITOTOMIA', nameEu: 'Nefrolitotomia', acronym: 'NEFROLITOT.' },
  { name: 'CAMBIO DE NEFROSTOMIA', nameEu: 'Nefrostomia Aldaketa', acronym: 'CAMBIO NEFRO' },
  { name: 'LASERTRICIA', nameEu: 'Lasertrizia', acronym: 'LASER' },
  { name: 'CITOSCOPIA PIELOGRAFIA', nameEu: 'Zitoskopia Pielografia', acronym: 'CITOSCOPIA' },
  { name: 'URETEROSCOPIA DIAGNOSTICA', nameEu: 'Ureteroskopia Diagnostikoa', acronym: 'URS DIAG.' }
];

/**
 * CIRUGÍAS DE TRAUMATOLOGÍA Q7 - Q8 POR TIPO DE MESA PRE-ENTRADA (Ficha 3)
 */
export const TRAUMA_TABLE_PREPARATION_SECTIONS = [
  {
    id: 'trauma-mesa-normal',
    title: 'MESA NORMAL',
    titleEu: 'MAHAI ARRUNTA',
    description: 'Mesa quirúrgica estándar horizontal acolchada sin aditamentos de tracción.',
    descriptionEu: 'Ohiko mahai kirurgiko horizontala trakzio-tresnarik gabe.',
    operatingRooms: 'Quirófano 7 y Quirófano 8',
    procedures: [
      { name: 'SUBCAPITAL CADERA', nameEu: 'Aldaka Azpikapitala', desc: 'Fractura subcapital sin canulados' },
      { name: 'PPC (Prótesis Parcial de Cadera)', nameEu: 'PPC (Aldakako Protesi Partziala)', desc: 'Hemiartroplastia cadera' },
      { name: 'PTC (Prótesis Total de Cadera)', nameEu: 'PTC (Aldakako Protesi Osoa)', desc: 'Artroplastia total cadera' },
      { name: 'PTR (Prótesis Total de Rodilla)', nameEu: 'PTR (Belauneko Protesi Osoa)', desc: 'Artroplastia total rodilla' }
    ]
  },
  {
    id: 'trauma-pelvistato',
    title: 'PELVISTATO',
    titleEu: 'PELBISTATOA (Trakzio zutoina & gailua)',
    description: 'Mesa con poste perineal y fijación pélvica para tracción mecánica y radioscopia en fracturas de cadera y fémur.',
    descriptionEu: 'Perineo-zutoina eta pelbis finkapena trakzio mekanikorako eta eskanerrerako.',
    operatingRooms: 'Quirófano 7 y Quirófano 8',
    procedures: [
      { name: 'SUBCAPITAL CADERA (CANULADOS)', nameEu: 'Aldaka Azpikapitala (Tornulu Kanulatuak)', desc: 'Fijación con tornillos canulados' },
      { name: 'CLAVO TIBIA', nameEu: 'Tibiako Iltzea', desc: 'Enclavado intramedular de tibia' },
      { name: 'DHS (Dynamic Hip Screw)', nameEu: 'DHS (Aldakako Torloju Dinamikoa)', desc: 'Tornillo deslizante cadera' },
      { name: 'OSTEOSINTESIS DE CADERA', nameEu: 'Aldakako Osteosintesisa', desc: 'Placas o fijaciones de cadera' },
      { name: 'PERTROCANTEREA', nameEu: 'Pertrokanderearra', desc: 'Fractura pertrocantérea fémur' },
      { name: 'GAMMA (Clavo Gamma)', nameEu: 'Gamma Iltzea', desc: 'Enclavado cefalomedular Gamma' },
      { name: 'SUBTROCANTEREA', nameEu: 'Azpitrokanderearra', desc: 'Fractura subtrocantérea femoral' },
      { name: 'BASICERVICAL', nameEu: 'Basizerbikala', desc: 'Fractura de cuello femoral basicervical' }
    ]
  },
  {
    id: 'trauma-pelvico',
    title: 'PÉLVICO',
    titleEu: 'PELBIKOA',
    description: 'Soporte pélvico radiotransparente especial para cirugía compleja de anillo pelviano y cotilo.',
    descriptionEu: 'Pelbiseko euskarri erradiotransparente berezia hezur-eraztuneko ebakuntzetarako.',
    operatingRooms: 'Quirófanos 7 y 8',
    procedures: [
      { name: 'PELVIS', nameEu: 'Pelbisa', desc: 'Fracturas de acetábulo, cotilo y anillo pélvico' }
    ]
  },
  {
    id: 'trauma-silla-playa',
    title: 'MESA DE HOMBRO; SILLA DE PLAYA',
    titleEu: 'SORBALDAKO MAHAIA; HONDARTZA AULKIA (Beach Chair)',
    description: 'Respaldo articulado con paneles escapulares desmontables y cabecero rígido específico.',
    descriptionEu: 'Bizkarralde artikulatua orratz-panela kengarriekin eta buru-euskarri zurrunarekin.',
    operatingRooms: 'Quirófano 7 (Trauma)',
    procedures: [
      { name: 'FX DE CLAVICULA', nameEu: 'Klabikula Fraktura', desc: 'Osteosíntesis de clavícula en silla playa' },
      { name: 'FX DE HUMERO', nameEu: 'Humero Fraktura', desc: 'Fractura proximal de húmero' },
      { name: 'PIH (prótesis invertida de hombro)', nameEu: 'PIH (Sorbaldako Alderantzizko Protesia)', desc: 'Artroplastia invertida de hombro' }
    ]
  },
  {
    id: 'trauma-prolongador-dorsal',
    title: 'PROLONGADOR DORSAL',
    titleEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGADOR DORSAL',
    description: 'Prolongador acoplado para extremidad superior permitiendo acceso radiológico 360º y fijación en prono/supino.',
    descriptionEu: 'Goiko gorputz-adarretarako luzagailua 360º RX sarbidearekin.',
    operatingRooms: 'Quirófano 7 y Quirófano 8',
    procedures: [
      { name: 'FX CODO', nameEu: 'Ukondo Fraktura', desc: 'Fractura articular de codo' },
      { name: 'FX OLECRANON', nameEu: 'Olekranon Fraktura', desc: 'Osteosíntesis de olecranon' },
      { name: 'FX CUBITO - RADIO', nameEu: 'Kubito - Erradio Fraktura', desc: 'Diafisarias de antebrazo' },
      { name: 'FX CABEZA RADIO', nameEu: 'Erradio-buruaren Fraktura', desc: 'Cúpula radial / prótesis' },
      { name: 'FX RADIO DISTAL', nameEu: 'Erradio Distaleko Fraktura', desc: 'Colles / placa volar' },
      { name: 'FX MANO', nameEu: 'Esku Fraktura', desc: 'Metacarpianos y falanges' },
      { name: 'BICEPS', nameEu: 'Bizepsa', desc: 'Reinserción tendinosa bíceps distal' }
    ]
  }
];

/**
 * AVISO MANDATORIO DE SEGURIDAD - PROLONGADOR PÉLVICO (Ficha Oficial HUN)
 */
export const PELVIC_EXTENDER_WARNING = {
  title: '¡ATENCIÓN! PROLONGADOR PÉLVICO',
  titleEu: 'KONTUZ! LUZATZAILE PELBIKOA',
  warningEs: 'CUANDO SE COLOCA EL PROLONGADOR PÉLVICO, NO SE PUEDEN MOVER LAS PERNERAS POR SEPARADO CON EL MANDO. SOLO ES POSIBLE HACERLO MANUALMENTE.',
  warningEu: 'LUZATZAILE PELBIKOA JARTZEN DENEAN, EZIN DIRA HANKA-EUSKARRIAK AGINTEAREKIN BANAN-BANAN MUGITU. ESKUZ BAKARRIK EGIN DAITEKE.',
  operatingRooms: 'Quirófano 5 y Quirófano 6 (Urología HUN)',
  severity: 'critical' as const
};

export interface UroQ5Q6Procedure {
  name: string;
  nameEu: string;
  notes?: string;
  notesEu?: string;
  isCorrection?: boolean;
}

export interface UroQ5Q6TableCategory {
  id: 'prolongacion-dorsal' | 'camilla-normal';
  title: string;
  titleEu: string;
  subtitle: string;
  subtitleEu: string;
  badge: string;
  procedures: UroQ5Q6Procedure[];
}

/**
 * MESAS QUIRÚRGICAS Q5-Q6 (Urología HUN)
 * Transcripción exhaustiva y fidedigna del documento oficial con anotaciones y flechas manuscritas.
 */
export const URO_Q5Q6_TABLE_DATA: UroQ5Q6TableCategory[] = [
  {
    id: 'prolongacion-dorsal',
    title: 'PROLONGACIÓN DORSAL',
    titleEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    subtitle: 'Intervenciones que requieren módulo de prolongación dorsal acoplado a la mesa',
    subtitleEu: 'Bizkarraldeko luzagailua mahaian muntatzea eskatzen duten ebakuntzak',
    badge: '19 Cirugías',
    procedures: [
      { name: 'ORQUIECTOMÍA + PRÓTESIS', nameEu: 'Orkiektomia + Protesia' },
      { name: 'NEO RENAL', nameEu: 'Neo Renala (Giltzurruneko Neoplasia)' },
      { name: 'DIVERTICULECTOMÍA', nameEu: 'Dibertikulektomia' },
      { name: 'T. RENAL NLP (Laparoscopia)', nameEu: 'Giltzurruneko Tratamendua NLP (Laparoskopia)' },
      { 
        name: 'NEFRECTOMÍA (Riñones: Laparoscopia o Laparotomía)', 
        nameEu: 'Nefrektomia (Giltzurrunak: Laparoskopia edo Laparotomia)',
        notes: 'En riñones, tanto abordaje laparoscópico como laparotomía se realizan con prolongación dorsal.',
        notesEu: 'Giltzurrunetan, bai laparoskopia bidez bai laparotomiaz, bizkarraldeko luzagailuarekin egiten dira.'
      },
      { name: 'PIELOPLASTIA', nameEu: 'Pieloplastia' },
      { name: 'SUPRARRENALECTOMÍA', nameEu: 'Giltzurrungaineko Guruinaren Ebakuntza (Suprarrenalektomia)' },
      { name: 'CISTECTOMÍA', nameEu: 'Zistektomia' },
      { 
        name: 'REIMPLANTACIÓN URETERAL', 
        nameEu: 'Uretereko Birlandaketa',
        notes: 'Corrección oficial manuscrita en documento: de uretral a ureteral.',
        notesEu: 'Eskuz zuzendua agirian: uretrala beharrean ureterala.',
        isCorrection: true
      },
      { name: 'ADENOMECTOMÍA PRÓSTATA', nameEu: 'Prostatako Adenomektomia' },
      { name: 'PROSTATECTOMÍA RADICAL POR LAPAROSCOPIA (PRL)', nameEu: 'Prostatektomia Erradikal Laparoskopikoa (PRL)' },
      { name: 'NEFRECTOMÍA PARCIAL POR LAPAROSCOPIA', nameEu: 'Nefrektomia Partzial Laparoskopikoa' },
      { name: 'PIELOLITOTOMÍA LAPAROSCÓPICA', nameEu: 'Pielolitotomia Laparoskopikoa' },
      { name: 'LINFADENECTOMÍA RETROPERITONEAL', nameEu: 'Linfadenektomia Erretroperitoneala' },
      { name: 'MASA RETROPERITONEAL', nameEu: 'Masa Erretroperitoneala' },
      { name: 'URETERECTOMÍA PARCIAL', nameEu: 'Ureterektomia Partziala' },
      { name: 'LAPAROTOMÍA', nameEu: 'Laparotomia' },
      { 
        name: 'PRÓTESIS DE PENE', 
        nameEu: 'Zakileko Protesia',
        notes: '¡ANOTACIÓN MANUSCRITA IMPORTANTE! Tachado de camilla normal y trasladado expresamente a Prolongación Dorsal por protocolo quirúrgico.',
        notesEu: 'ESKUZKO OHARRA: Camilla normaletik kenduta eta berariaz Bizkarraldeko Luzagailura pasatuta.',
        isCorrection: true
      },
      { 
        name: 'LINFADENECTOMÍA PELVIANA BILATERAL', 
        nameEu: 'Aldebiko Pelbiseko Linfadenektomia',
        notes: '¡ANOTACIÓN MANUSCRITA IMPORTANTE! Añadido expresamente a la derecha en Prolongación Dorsal.',
        notesEu: 'ESKUZKO OHARRA: Berariaz gehitua eskuineko zutabean Bizkarraldeko Luzagailuarekin.',
        isCorrection: true
      }
    ]
  },
  {
    id: 'camilla-normal',
    title: 'CAMILLA NORMAL',
    titleEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    subtitle: 'Intervenciones en mesa quirúrgica plana estándar sin prolongación dorsal',
    subtitleEu: 'Ohiko mahai estandarra luzagailu dorsalik gabe',
    badge: '12 Cirugías',
    procedures: [
      { name: 'HERNIA', nameEu: 'Hernia' },
      { name: 'RTU (Resección Transuretral)', nameEu: 'RTU (Maskuri/Prostatako Transuretrala)' },
      { name: 'CISTOSCOPIA (Citoscopia)', nameEu: 'Zistoskopia' },
      { name: 'URETROPLASTIA', nameEu: 'Uretroplastia' },
      { name: 'BOTOX', nameEu: 'Botox (Infiltrazio Besikala)' },
      { name: 'ESFÍNTER AMS', nameEu: 'AMS Esfinter Artifiziala' },
      { name: 'URETROTOMÍA = SASCHE', nameEu: 'Uretrotomia = Sachse' },
      { 
        name: 'MALLAS INCONTINENCIA: REMEX, TVT, SOLIX, ADVANCE', 
        nameEu: 'Inkontinentzia Sareak: REMEX, TVT, SOLIX, ADVANCE',
        notes: 'Comprende mallas suburetrales y cabestrillos de continencia femenina y masculina.'
      },
      { name: 'LITOTRICIA ENDOSCÓPICA VESICAL', nameEu: 'Maskuriko Litotrizia Endoskopikoa' },
      { name: 'BMNS', nameEu: 'BMNS' },
      { name: 'CISTOCELE', nameEu: 'Zistozele (Zoru Pelbikoaren Jaitsiera)' },
      { name: 'HOLEP (Enucleación Prostática con Láser Holmium)', nameEu: 'HOLEP (Láser Holmium Prostatako Enukleazioa)' }
    ]
  }
];

export interface SearchableTransferProcedure {
  id: string;
  name: string;
  nameEu: string;
  acronym?: string;
  specialtyId: 'q1-urgencias' | 'q2-orl' | 'q3-q4-oftalmo' | 'q5-q6-urologia' | 'q7-q8-trauma';
  specialtyLabel: string;
  specialtyLabelEu: string;
  operatingRoom: string;
  tableType: string;
  tableTypeEu: string;
  accessories?: string;
  accessoriesEu?: string;
  goldenRuleOrNote?: string;
  goldenRuleOrNoteEu?: string;
  positionSummary: string;
  positionSummaryEu: string;
  isCorrection?: boolean;
  priorityAlert?: string;
}

export const PAIN_UNIT_TRANSFER_PROTOCOL = {
  title: 'Protocolo de Quirófano con la Unidad del Dolor',
  titleEu: 'Minaren Unitateko Ebakigelaren Protokoloa',
  operatingRooms: 'Quirófano Asignado (HUN)',
  equipmentToBring: [
    'Traer aparato de RX del Quirófano Maternal',
    'Traer Ecógrafo de la Unidad del Dolor',
    'Traer Aparato de Radiofrecuencia de la Unidad del Dolor'
  ],
  equipmentToBringEu: [
    'Amatasun Ebakigelako RX aparatua ekarri',
    'Minaren Unitateko Ekografoa ekarri',
    'Minaren Unitateko Irrati-maiztasun aparatua ekarri'
  ],
  tablePreparation: [
    'Meter Base de Mesa de Quirófano',
    'Preparar Mesa de Quirófano con Prolongador Dorsal'
  ],
  tablePreparationEu: [
    'Ebakigelako Mahaiaren Oinarria sartu',
    'Ebakigelako Mahaia Bizkarraldeko Luzagailuarekin (Prolongador Dorsal) prestatu'
  ],
  patientTransferAndCare: [
    'Pasar Paciente Boca Abajo (Decúbito Prono)',
    'Solo una sábana por encima',
    'Dentro de Quirófano poner un rulo en los pies'
  ],
  patientTransferAndCareEu: [
    'Pazientea Ahoz Behera pasatu (Albo/Ahoz beherako etzanean)',
    'Maindire bakarra gainetik jarri',
    'Ebakigela barruan oinetan rulo bat jarri'
  ]
};

export const ALL_TRANSFER_SEARCHABLE_PROCEDURES: SearchableTransferProcedure[] = [
  // --- Q1 URGENCIAS ---
  {
    id: 'q1-apendicitis',
    name: 'Apendicitis Aguda (Laparoscopia / Abierta)',
    nameEu: 'Apendizitis Akutua (Laparoskopia / Irekia)',
    acronym: 'APENDICITIS',
    specialtyId: 'q1-urgencias',
    specialtyLabel: 'Q1 – Urgencias (24 h.)',
    specialtyLabelEu: 'Q1 – Larrialdiak (24 ordu)',
    operatingRoom: 'Quirófano 1 (Urgencias 24 h.)',
    tableType: 'Mesa Estándar Plana Radiotransparente',
    tableTypeEu: 'Ohiko Mahai Erradiotransparente Laua',
    accessories: 'Tabla de transfer, sábanas de tiro, soporte de sueros',
    accessoriesEu: 'Transfer taula, maindireak, serumen euskarria',
    goldenRuleOrNote: '“TIENE QUE ORINAR ANTES”: Vaciado vesical mandatorio previo al paso del paciente para evitar perforación con trócares.',
    goldenRuleOrNoteEu: '“AURRETIK TXIZA EGIN BEHAR DU”: Maskuria hustu behar du nahitaez sartu aurretik trokarrekin zulaketak saihesteko.',
    positionSummary: 'Decúbito supino (posible Trendelenburg según necesidad quirúrgica)',
    positionSummaryEu: 'Bizkarrez (behar denean Trendelenburg)',
    priorityAlert: 'Micción Previa Obligatoria'
  },
  {
    id: 'q1-colecistectomia',
    name: 'Colecistectomía Urgente Laparoscópica',
    nameEu: 'Larrialdietako Kolezistektomia Laparoskopikoa',
    acronym: 'COLECISTO',
    specialtyId: 'q1-urgencias',
    specialtyLabel: 'Q1 – Urgencias (24 h.)',
    specialtyLabelEu: 'Q1 – Larrialdiak (24 ordu)',
    operatingRoom: 'Quirófano 1 (Urgencias 24 h.)',
    tableType: 'Mesa Estándar Plana',
    tableTypeEu: 'Ohiko Mahai Laua',
    accessories: 'Perneras o mesa plana según cirujano (francesa vs americana), soporte lateral',
    accessoriesEu: 'Ohiko mahaia edo hankak irekita zirujauaren arabera',
    goldenRuleOrNote: 'Mesa plana con anti-Trendelenburg ligero; brazos abiertos protegidos a <90º.',
    goldenRuleOrNoteEu: 'Mahai laua anti-Trendelenburg arinarekin; besoak babestuta <90º.',
    positionSummary: 'Decúbito supino / Fowler ligero',
    positionSummaryEu: 'Bizkarrez / Fowler arina'
  },
  {
    id: 'q1-laparotomia-urgente',
    name: 'Laparotomía Exploradora Urgente / Peritonitis',
    nameEu: 'Premiazko Laparotomia Esploratzailea / Peritonitisa',
    acronym: 'LAPAROTOMÍA URG.',
    specialtyId: 'q1-urgencias',
    specialtyLabel: 'Q1 – Urgencias (24 h.)',
    specialtyLabelEu: 'Q1 – Larrialdiak (24 ordu)',
    operatingRoom: 'Quirófano 1 (Urgencias 24 h.)',
    tableType: 'Mesa Quirúrgica Estándar Radiotransparente',
    tableTypeEu: 'Ohiko Mahai Erradiotransparente Laua',
    accessories: 'Tabla de transfer, manta térmica, soportes apoyabrazos dobles',
    accessoriesEu: 'Transfer taula, manta termikoa, beso-euskarri bikoitzak',
    goldenRuleOrNote: 'Paso urgente coordinado entre celador dentro, celador fuera, anestesia y enfermería; vigilar vía venosa central y tubo endotraqueal.',
    goldenRuleOrNoteEu: 'Premiazko transferra koordinatuta; zaindu bide nagusiak eta intubazio-hodia.',
    positionSummary: 'Decúbito supino estricto',
    positionSummaryEu: 'Bizkarrez zorrotz'
  },
  {
    id: 'q1-obstruccion-intestinal',
    name: 'Obstrucción Intestinal / Vólvulo / Hernia Estrangulada',
    nameEu: 'Heste-buxadura / Bolbuloa / Hernia Itoa',
    acronym: 'OBSTRUCCIÓN',
    specialtyId: 'q1-urgencias',
    specialtyLabel: 'Q1 – Urgencias (24 h.)',
    specialtyLabelEu: 'Q1 – Larrialdiak (24 ordu)',
    operatingRoom: 'Quirófano 1 (Urgencias 24 h.)',
    tableType: 'Mesa Quirúrgica Estándar Radiotransparente',
    tableTypeEu: 'Ohiko Mahai Erradiotransparente Laua',
    accessories: 'Sonda nasogástrica protegida, tabla de transfer',
    accessoriesEu: 'Sonda nasogastrikoa zainduta, transfer taula',
    goldenRuleOrNote: 'Vigilar estrictamente la fijación de la sonda nasogástrica durante el deslizamiento por la tabla de transfer.',
    goldenRuleOrNoteEu: 'Arreta handia eman sonda nasogastrikoari transfer taulatik pasatzean.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez'
  },

  // --- Q2 ORL ---
  {
    id: 'q2-timpanoplastia',
    name: 'Timpanoplastia / Mastoidectomía / Estapedectomía (Oído)',
    nameEu: 'Timpanoplastia / Mastoidektomia / Estapedektomia (Belarria)',
    acronym: 'OÍDO ORL',
    specialtyId: 'q2-orl',
    specialtyLabel: 'Q2 – Otorrinolaringología (ORL)',
    specialtyLabelEu: 'Q2 – Otorrinolaringologia (ORL)',
    operatingRoom: 'Quirófano 2 (ORL)',
    tableType: 'Mesa Trumpf con Cabecero de Cuernos',
    tableTypeEu: 'Trumpf Mahaia Adar-burukoarekin',
    accessories: 'Cabecero tipo cuernos / herradura, almohadilla occipital de gel, microscopio ZEISS',
    accessoriesEu: 'Adar motako buruko berezia, gel-orratza, ZEISS mikroskopioa',
    goldenRuleOrNote: '“CUERNOS”: Es mandatorio montar el cabecero de cuernos antes de pasar al paciente. Soporte cervical entre dos personas durante el paso.',
    goldenRuleOrNoteEu: '“ADARRAK (CUERNOS)”: Ezinbestekoa da adar-burukoa jartzea pazientea pasa aurretik. Bi pertsonen artean burua babestu.',
    positionSummary: 'Decúbito supino, cabeza ladeada contralateral con sujeción en cuernos',
    positionSummaryEu: 'Bizkarrez, burua alde batera biratuta adarretan helduta',
    priorityAlert: 'Cabecero Cuernos Mandatorio'
  },
  {
    id: 'q2-laringoscopia',
    name: 'Microcirugía Laríngea en Suspensión (Cuerdas Vocales)',
    nameEu: 'Laringeko Mikrokirurgia Esekiduran (Ahots-kordak)',
    acronym: 'LARINGE SUSP.',
    specialtyId: 'q2-orl',
    specialtyLabel: 'Q2 – Otorrinolaringología (ORL)',
    specialtyLabelEu: 'Q2 – Otorrinolaringologia (ORL)',
    operatingRoom: 'Quirófano 2 (ORL)',
    tableType: 'Mesa Trumpf con Cabecero de Cuernos / Extensión',
    tableTypeEu: 'Trumpf Mahaia Luzapen / Adar-burukoarekin',
    accessories: 'Cabecero de cuernos, protector dental, soporte de laringoscopio de suspensión, láser DEKA',
    accessoriesEu: 'Adarrak, hortz-babeslea, esekidura euskarria, DEKA laserra',
    goldenRuleOrNote: 'Cabecero de cuernos preparado; máxima delicadeza con el tubo endotraqueal láser y alineación cervical.',
    goldenRuleOrNoteEu: 'Adar-burukoa prest; arreta handia intubazio hodiarekin eta lepoaren luzapenarekin.',
    positionSummary: 'Decúbito supino con hiperextensión cervical controlada',
    positionSummaryEu: 'Bizkarrez lepoa hiperextensio kontrolatuan duela'
  },
  {
    id: 'q2-cens',
    name: 'Cirugía Endoscópica Nasosinusal (CENS)',
    nameEu: 'Sudur-sinusetako Kirurgia Endoskopikoa (CENS)',
    acronym: 'CENS',
    specialtyId: 'q2-orl',
    specialtyLabel: 'Q2 – Otorrinolaringología (ORL)',
    specialtyLabelEu: 'Q2 – Otorrinolaringologia (ORL)',
    operatingRoom: 'Quirófano 2 (ORL)',
    tableType: 'Mesa Trumpf con Cabecero Articulado / Cuernos',
    tableTypeEu: 'Trumpf Mahaia Buruko Artikulatuarekin',
    accessories: 'Torre de vídeo KARL STORZ situada en lado contralateral al cirujano, consola Medtronic IPC',
    accessoriesEu: 'KARL STORZ bideo-dorrea zirujauaren aurkako aldean, Medtronic IPC',
    goldenRuleOrNote: 'Torre KARL STORZ ubicada contralateral para visualización directa; comprobar tendido seguro de cables.',
    goldenRuleOrNoteEu: 'KARL STORZ dorrea zirujauaren aurkako aldean zuzen ikusteko; kableak seguru bideratu.',
    positionSummary: 'Decúbito supino con ligera elevación cefálica (anti-Trendelenburg)',
    positionSummaryEu: 'Bizkarrez burua pixka bat altxatuta (anti-Trendelenburg)'
  },
  {
    id: 'q2-cuello-parotida',
    name: 'Cirugía de Cuello / Parotidectomía / Tiroidectomía / Traqueotomía',
    nameEu: 'Lepo / Parotida / Tiroidektomia / Trakeotomia Kirurgia',
    acronym: 'CUELLO / PARÓTIDA',
    specialtyId: 'q2-orl',
    specialtyLabel: 'Q2 – Otorrinolaringología (ORL)',
    specialtyLabelEu: 'Q2 – Otorrinolaringologia (ORL)',
    operatingRoom: 'Quirófano 2 (ORL)',
    tableType: 'Mesa Trumpf con Cabecero Especial',
    tableTypeEu: 'Trumpf Mahaia Buruko Berezian',
    accessories: 'Cabecero de cuernos o rodillo interescapular, Neurosign V4 para monitorización facial',
    accessoriesEu: 'Adarrak edo sorbalda arteko arrabola, Neurosign V4',
    goldenRuleOrNote: 'Extensión cervical mediante rodillo o cabecero; proteger electrodos del Neurosign V4.',
    goldenRuleOrNoteEu: 'Lepoa luzatuta; Neurosign V4 elektrodoak babestu.',
    positionSummary: 'Decúbito supino con hiperextensión cervical moderada',
    positionSummaryEu: 'Bizkarrez lepoa luzatuta'
  },

  // --- Q3 Y Q4 OFTALMOLOGÍA ---
  {
    id: 'q3-catarata-stryker',
    name: 'Facoemulsificación / Cirugía de Cataratas (Quirófano 3)',
    nameEu: 'Fakoemulsifikazioa / Kataraten Kirurgia (3. Ebakigela)',
    acronym: 'CATARATA Q3',
    specialtyId: 'q3-q4-oftalmo',
    specialtyLabel: 'Q3 y Q4 – Oftalmología',
    specialtyLabelEu: 'Q3 eta Q4 – Oftalmologia',
    operatingRoom: 'Quirófano 3 (HN)',
    tableType: 'Camilla Quirúrgica STRYKER',
    tableTypeEu: 'STRYKER Begietako Camilla Berezia',
    accessories: 'Reposacabezas cóncavo Stryker con soporte para muñecas del cirujano',
    accessoriesEu: 'Stryker burukoa eskumuturrak bermatzeko euskarriarekin',
    goldenRuleOrNote: '“Q3: HN – STRYKER”: Camilla Stryker verificada y ajustada con espacio libre para los pedales del microscopio.',
    goldenRuleOrNoteEu: '“Q3: HN – STRYKER”: Stryker camilla prest pedalei lekua utziz.',
    positionSummary: 'Decúbito supino estricto, cabeza centrada en concavidad anatómica',
    positionSummaryEu: 'Bizkarrez zorrotz burua erdian ondo finkatuta'
  },
  {
    id: 'q4-catarata-middar',
    name: 'Facoemulsificación / Cirugía de Cataratas (Quirófano 4)',
    nameEu: 'Fakoemulsifikazioa / Kataraten Kirurgia (4. Ebakigela)',
    acronym: 'CATARATA Q4',
    specialtyId: 'q3-q4-oftalmo',
    specialtyLabel: 'Q3 y Q4 – Oftalmología',
    specialtyLabelEu: 'Q3 eta Q4 – Oftalmologia',
    operatingRoom: 'Quirófano 4 (HVC)',
    tableType: 'Camilla Quirúrgica MIDDAR',
    tableTypeEu: 'MIDDAR Begietako Camilla Berezia',
    accessories: 'Reposacabezas Middar anatómico articulado',
    accessoriesEu: 'Middar buruko anatomiko artikulatua',
    goldenRuleOrNote: '“Q4: HVC – MIDDAR”: Camilla Middar verificada; acomodación pausada del paciente para evitar sobresaltos intraoperatorios.',
    goldenRuleOrNoteEu: '“Q4: HVC – MIDDAR”: Middar camilla prest; pazientea poliki egokitu.',
    positionSummary: 'Decúbito supino estricto, cabeza nivelada',
    positionSummaryEu: 'Bizkarrez zorrotz burua lerrokatuta'
  },
  {
    id: 'q3q4-vitrectomia',
    name: 'Vitrectomía Posterior / Cirugía de Retina',
    nameEu: 'Atzeko Bitrektomia / Erretinaren Kirurgia',
    acronym: 'VITRECTOMÍA',
    specialtyId: 'q3-q4-oftalmo',
    specialtyLabel: 'Q3 y Q4 – Oftalmología',
    specialtyLabelEu: 'Q3 eta Q4 – Oftalmologia',
    operatingRoom: 'Quirófano 3 (HN) / Quirófano 4 (HVC)',
    tableType: 'Camilla Oftalmológica (Stryker en Q3 / Middar en Q4)',
    tableTypeEu: 'Begietako Camilla (Stryker Q3 / Middar Q4)',
    accessories: 'Cabecero anatómico, consola vitréctomo, soporte para sueros de infusión intraocular',
    accessoriesEu: 'Burukoa, bitrektomo kontsola, serumen zutoina',
    goldenRuleOrNote: 'Cirugía de larga duración: comprobar almohadillado lumbar y confort del paciente antes de preparar el campo.',
    goldenRuleOrNoteEu: 'Iraupen luzeko ebakuntza: gerrialdeko erosotasuna egiaztatu hasi aurretik.',
    positionSummary: 'Decúbito supino estricto sin inclinación cefálica',
    positionSummaryEu: 'Bizkarrez zorrotz burua okertu gabe'
  },
  {
    id: 'q3q4-glaucoma-cornea',
    name: 'Cirugía de Glaucoma / Trasplante de Córnea (Queratoplastia)',
    nameEu: 'Glaukoma / Kornea Transplantea (Keratoplastia)',
    acronym: 'GLAUCOMA / CÓRNEA',
    specialtyId: 'q3-q4-oftalmo',
    specialtyLabel: 'Q3 y Q4 – Oftalmología',
    specialtyLabelEu: 'Q3 eta Q4 – Oftalmologia',
    operatingRoom: 'Quirófano 3 y Quirófano 4',
    tableType: 'Camilla Quirúrgica Oftalmológica',
    tableTypeEu: 'Begietako Camilla Berezia',
    accessories: 'Cabecero estabilizador cóncavo',
    accessoriesEu: 'Buruko egonkortzaile konkaboa',
    goldenRuleOrNote: 'Inmovilización cefálica óptima; comprobar bloqueo de ruedas de la camilla antes del inicio.',
    goldenRuleOrNoteEu: 'Buruaren gelditasun maximoa; gurpilen blokeoa egiaztatu.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez'
  },

  // --- Q5 Y Q6 UROLOGÍA (19 DORSAL + 12 CAMILLA NORMAL + 16 PELVICA) ---
  // Uro Dorsal (19)
  {
    id: 'uro-dorsal-orquiectomia',
    name: 'ORQUIECTOMÍA + PRÓTESIS',
    nameEu: 'Orkiektomia + Protesia',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Módulo de prolongación dorsal acoplado a la mesa, empapador absorbente',
    accessoriesEu: 'Bizkarraldeko luzagailua mahaian, enpapadorea',
    goldenRuleOrNote: 'EMPAPADOR OBLIGATORIO en mesa antes del transfer.',
    goldenRuleOrNoteEu: 'ENPAPADOREA DERRIGORREZKOA mahaian jarri aurretik.',
    positionSummary: 'Decúbito supino sobre prolongador dorsal',
    positionSummaryEu: 'Bizkarrez bizkarraldeko luzagailuaren gainean'
  },
  {
    id: 'uro-dorsal-neo-renal',
    name: 'NEO RENAL (Neoplasia Renal)',
    nameEu: 'Neo Renala (Giltzurruneko Neoplasia)',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongación dorsal, Pilé si abordaje lateral, topes articulados con hueveras',
    accessoriesEu: 'Bizkarraldeko luzagailua, Pilé alboan bada, tope artikulatuak',
    goldenRuleOrNote: 'Tanto laparoscopia como laparotomía se realizan con prolongación dorsal.',
    goldenRuleOrNoteEu: 'Bai laparoskopia bai laparotomia bizkarraldeko luzagailuarekin egiten dira.',
    positionSummary: 'Decúbito lateral con Pilé o supino según abordaje',
    positionSummaryEu: 'Albo-etzana Pilé-rekin edo bizkarrez'
  },
  {
    id: 'uro-dorsal-diverticulectomia',
    name: 'DIVERTICULECTOMÍA VESICAL',
    nameEu: 'Dibertikulektomia Besikala',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Módulo de prolongación dorsal, empapador',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadorea',
    goldenRuleOrNote: 'Mesa con prolongador dorsal; Trendelenburg para abordaje pélvico profundo.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailuarekin; Trendelenburg pelbisa ikusteko.',
    positionSummary: 'Decúbito supino / Trendelenburg',
    positionSummaryEu: 'Bizkarrez / Trendelenburg'
  },
  {
    id: 'uro-dorsal-t-renal-nlp',
    name: 'T. RENAL NLP (Laparoscopia)',
    nameEu: 'Giltzurruneko Tratamendua NLP (Laparoskopia)',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongación dorsal, rodillo de volteo, radioscopia',
    accessoriesEu: 'Bizkarraldeko luzagailua, biraketa arrabola, erradioskopia',
    goldenRuleOrNote: 'Mesa con prolongador dorsal radiotransparente para acceso percutáneo.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailu erradiotransparentea bide perkutaneorako.',
    positionSummary: 'Decúbito prono con rodillo o decúbito lateral modificado',
    positionSummaryEu: 'Ahoz behera arrabolaz edo albo-etzana aldatua'
  },
  {
    id: 'uro-dorsal-nefrectomia',
    name: 'NEFRECTOMÍA (Laparoscopia o Laparotomía)',
    nameEu: 'Nefrektomia (Laparoskopia edo Laparotomia)',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Módulo de prolongador dorsal, mando Pilé (SensorLine), topes en escápulas y lumbares con huevera, teja de brazo',
    accessoriesEu: 'Bizkarraldeko luzagailua, Pilé agintea, topak eskapula eta gerrian arrautzontziarekin, besoa teilan',
    goldenRuleOrNote: 'En riñones, tanto abordaje laparoscópico como laparotomía se realizan SIEMPRE con prolongación dorsal.',
    goldenRuleOrNoteEu: 'Giltzurrunetan, laparoskopia zein laparotomia BETI bizkarraldeko luzagailuarekin egiten dira.',
    positionSummary: 'Decúbito lateral con Pilé (ombligo al círculo de la mesa antes del volteo)',
    positionSummaryEu: 'Albo-etzana Pilé-rekin (zilborra biribilera biratu aurretik)'
  },
  {
    id: 'uro-dorsal-pieloplastia',
    name: 'PIELOPLASTIA (Estenosis Pielouretral)',
    nameEu: 'Pieloplastia (Estenosi Pielouretrala)',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal; si se realiza por vía laparoscópica preguntar 1º si requiere prolongación pélvica añadida.',
    accessoriesEu: 'Bizkarraldeko luzagailua; galdetu aurretik luzapen pelbikoa behar duen.',
    goldenRuleOrNote: '¡PREGUNTAR 1º! Confirmar con el cirujano si requiere decúbito lateral con Pilé o prolongación pélvica.',
    goldenRuleOrNoteEu: 'AURRETIK GALDETU: Konfirmatu zirujauarekin albo-etzana Pilé-rekin edo luzapen pelbikoa behar duen.',
    positionSummary: 'Decúbito lateral o supino según técnica indicada',
    positionSummaryEu: 'Albo-etzana edo bizkarrez teknikaren arabera'
  },
  {
    id: 'uro-dorsal-suprarrenalectomia',
    name: 'SUPRARRENALECTOMÍA',
    nameEu: 'Suprarrenalektomia (Giltzurrungaineko Guruina)',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Módulo de prolongación dorsal, topes acolchados, empapador',
    accessoriesEu: 'Bizkarraldeko luzagailua, topak, enpapadorea',
    goldenRuleOrNote: 'Mesa con prolongador dorsal; acceso retroperitoneal o transperitoneal.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailua mahaian prestatuta.',
    positionSummary: 'Decúbito lateral con flexión de mesa (Pilé)',
    positionSummaryEu: 'Albo-etzana Pilé-rekin'
  },
  {
    id: 'uro-dorsal-cistectomia',
    name: 'CISTECTOMÍA RADICAL',
    nameEu: 'Zistektomia Erradikala (Maskuria Kentzea)',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal, empapador grande, fijadores de hombros para Trendelenburg pronunciado',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapagailu handia, sorbalda-topak',
    goldenRuleOrNote: 'Cirugía de larga duración: proteger sacro con hidrocoloide/gel; prolongador dorsal instalado antes del transfer.',
    goldenRuleOrNoteEu: 'Iraupen luzekoa: sakroa babestu gelarekin; luzagailua aurretik jarri.',
    positionSummary: 'Decúbito supino en Trendelenburg moderado a pronunciado',
    positionSummaryEu: 'Bizkarrez Trendelenburg posizioan'
  },
  {
    id: 'uro-dorsal-reimplantacion-ureteral',
    name: 'REIMPLANTACIÓN URETERAL',
    nameEu: 'Uretereko Birlandaketa',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal montado, empapador',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadorea',
    goldenRuleOrNote: 'Corrección oficial manuscrita en documento HUN: de uretral a ureteral.',
    goldenRuleOrNoteEu: 'Eskuzko zuzenketa agirian: uretrala beharrean ureterala.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez',
    isCorrection: true
  },
  {
    id: 'uro-dorsal-adenomectomia',
    name: 'ADENOMECTOMÍA PRÓSTATA',
    nameEu: 'Prostatako Adenomektomia',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal, empapador absorbente impermeable',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadore iragazgaitza',
    goldenRuleOrNote: 'Cirugía abierta de próstata con prolongación dorsal y empapador.',
    goldenRuleOrNoteEu: 'Prostata kirurgia irekia bizkarraldeko luzagailuarekin.',
    positionSummary: 'Decúbito supino con hiperextensión lumbar suave si lo pide cirujano',
    positionSummaryEu: 'Bizkarrez'
  },
  {
    id: 'uro-dorsal-prl',
    name: 'PROSTATECTOMÍA RADICAL POR LAPAROSCOPIA (PRL)',
    nameEu: 'Prostatektomia Erradikal Laparoskopikoa (PRL)',
    acronym: 'PRL',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal, perneras Allen desdobladas, cincha de seguridad, topes de hombros',
    accessoriesEu: 'Bizkarraldeko luzagailua, Allen hankakoak, uhala, sorbalda-topak',
    goldenRuleOrNote: 'Trendelenburg pronunciado: asegurar paciente con cinchas y soportes antes de inclinar.',
    goldenRuleOrNoteEu: 'Trendelenburg handia: pazientea uhalekin ondo heldu okertu aurretik.',
    positionSummary: 'Decúbito supino / Litotomía baja en Trendelenburg profundo',
    positionSummaryEu: 'Bizkarrez / Litotomia baxua Trendelenburg sakonean'
  },
  {
    id: 'uro-dorsal-nefrectomia-parcial',
    name: 'NEFRECTOMÍA PARCIAL POR LAPAROSCOPIA',
    nameEu: 'Nefrektomia Partzial Laparoskopikoa',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Módulo de prolongador dorsal, mando Pilé, topes articulados con hueveras',
    accessoriesEu: 'Bizkarraldeko luzagailua, Pilé agintea, topak arrautzontziarekin',
    goldenRuleOrNote: 'Requiere prolongador dorsal; colocación lateral estricta con ombligo alineado al centro de mesa.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailua behar du; albo-posizioa zilborra lerrokatuta.',
    positionSummary: 'Decúbito lateral con Pilé',
    positionSummaryEu: 'Albo-etzana Pilé-rekin'
  },
  {
    id: 'uro-dorsal-pielolitotomia',
    name: 'PIELOLITOTOMÍA LAPAROSCÓPICA',
    nameEu: 'Pielolitotomia Laparoskopikoa',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal, empapador, sujeciones de seguridad',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadorea',
    goldenRuleOrNote: 'Mesa configurada con prolongador dorsal.',
    goldenRuleOrNoteEu: 'Mahaia bizkarraldeko luzagailuarekin prestatuta.',
    positionSummary: 'Decúbito lateral con Pilé o supino',
    positionSummaryEu: 'Albo-etzana Pilé-rekin edo bizkarrez'
  },
  {
    id: 'uro-dorsal-linfadenectomia-retro',
    name: 'LINFADENECTOMÍA RETROPERITONEAL',
    nameEu: 'Linfadenektomia Erretroperitoneala',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal, empapador',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadorea',
    goldenRuleOrNote: 'Mesa con prolongador dorsal.',
    goldenRuleOrNoteEu: 'Mahaia bizkarraldeko luzagailuarekin.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez'
  },
  {
    id: 'uro-dorsal-masa-retro',
    name: 'MASA RETROPERITONEAL',
    nameEu: 'Masa Erretroperitoneala',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal, empapador',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadorea',
    goldenRuleOrNote: 'Mesa con prolongador dorsal.',
    goldenRuleOrNoteEu: 'Mahaia bizkarraldeko luzagailuarekin.',
    positionSummary: 'Decúbito supino o lateral según localización de la masa',
    positionSummaryEu: 'Bizkarrez edo albo-etzana masaren arabera'
  },
  {
    id: 'uro-dorsal-ureterectomia-parcial',
    name: 'URETERECTOMÍA PARCIAL',
    nameEu: 'Ureterektomia Partziala',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal montado, empapador',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadorea',
    goldenRuleOrNote: 'Mesa con prolongador dorsal.',
    goldenRuleOrNoteEu: 'Mahaia bizkarraldeko luzagailuarekin.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez'
  },
  {
    id: 'uro-dorsal-laparotomia',
    name: 'LAPAROTOMÍA UROLÓGICA',
    nameEu: 'Laparotomia Urologikoa',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Prolongador dorsal montado, empapador',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadorea',
    goldenRuleOrNote: 'Mesa con prolongador dorsal.',
    goldenRuleOrNoteEu: 'Mahaia bizkarraldeko luzagailuarekin.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez'
  },
  {
    id: 'uro-dorsal-protesis-pene',
    name: 'PRÓTESIS DE PENE',
    nameEu: 'Zakileko Protesia',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Módulo de prolongador dorsal montado, empapador',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadorea',
    goldenRuleOrNote: '¡ANOTACIÓN MANUSCRITA IMPORTANTE EN EL HUN! Tachado de camilla normal y trasladado expresamente a Prolongación Dorsal por protocolo quirúrgico.',
    goldenRuleOrNoteEu: 'ESKUZKO OHAR GARRANTZITSUA: Camilla normaletik kenduta eta Bizkarraldeko Luzagailura pasatuta protokolo ofizialez.',
    positionSummary: 'Decúbito supino sobre prolongador dorsal',
    positionSummaryEu: 'Bizkarrez bizkarraldeko luzagailuan',
    isCorrection: true
  },
  {
    id: 'uro-dorsal-linfadenectomia-pelviana',
    name: 'LINFADENECTOMÍA PELVIANA BILATERAL',
    nameEu: 'Aldebiko Pelbiseko Linfadenektomia',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGACIÓN DORSAL',
    accessories: 'Módulo de prolongación dorsal acoplado, empapador absorbente',
    accessoriesEu: 'Bizkarraldeko luzagailua, enpapadorea',
    goldenRuleOrNote: '¡ANOTACIÓN MANUSCRITA IMPORTANTE EN EL HUN! Añadido expresamente a la derecha en Prolongación Dorsal.',
    goldenRuleOrNoteEu: 'ESKUZKO OHAR GARRANTZITSUA: Berariaz gehitua eskuineko zutabean Bizkarraldeko Luzagailuarekin.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez',
    isCorrection: true
  },

  // Uro Camilla Normal (12)
  {
    id: 'uro-normal-hernia',
    name: 'HERNIA UROLÓGICA / INGUINAL',
    nameEu: 'Hernia Urologikoa / Inginala',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Mesa plana sin prolongador dorsal, empapador absorbente',
    accessoriesEu: 'Ohiko mahai laua luzagailu gabe, enpapadorea',
    goldenRuleOrNote: 'Mesa plana estándar; empapador colocado antes de transferir.',
    goldenRuleOrNoteEu: 'Ohiko mahai laua; enpapadorea aldez aurretik.',
    positionSummary: 'Decúbito supino plano',
    positionSummaryEu: 'Bizkarrez lau'
  },
  {
    id: 'uro-normal-rtu',
    name: 'RTU (Resección Transuretral Vesical o Prostática)',
    nameEu: 'RTU (Maskuri edo Prostatako Transuretrala)',
    acronym: 'RTU',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Perneras Allen o Goepel, empapador impermeable, bolsa colectora de irrigación',
    accessoriesEu: 'Allen edo Goepel hankakoak, enpapadore iragazgaitza',
    goldenRuleOrNote: 'Transfer en decúbito supino; colocación simultánea de perneras con dos personas una vez anestesiado.',
    goldenRuleOrNoteEu: 'Transferra bizkarrez; bi pertsonen artean jarri hankakoak aldi berean anestesiatuta dagoenean.',
    positionSummary: 'Posición de Litotomía / Ginecológica',
    positionSummaryEu: 'Litotomia / Posizio Ginekologikoa'
  },
  {
    id: 'uro-normal-cistoscopia',
    name: 'CISTOSCOPIA (Citoscopia Diagnóstica / Terapéutica)',
    nameEu: 'Zistoskopia (Diagnostikoa / Terapeutikoa)',
    acronym: 'CISTOSCOPIA',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, perneras Goepel/Allen, empapador',
    accessoriesEu: 'Ohiko mahaia, hankakoak, enpapadorea',
    goldenRuleOrNote: 'Mesa estándar; perneras para litotomía.',
    goldenRuleOrNoteEu: 'Ohiko mahaia; litotomiako hankakoak.',
    positionSummary: 'Litotomía / Posición ginecológica',
    positionSummaryEu: 'Litotomia'
  },
  {
    id: 'uro-normal-uretroplastia',
    name: 'URETROPLASTIA',
    nameEu: 'Uretroplastia',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, perneras de litotomía, empapador',
    accessoriesEu: 'Ohiko mahaia, hankakoak, enpapadorea',
    goldenRuleOrNote: 'Camilla normal con perneras.',
    goldenRuleOrNoteEu: 'Ohiko mahaia hankakoekin.',
    positionSummary: 'Litotomía extendida',
    positionSummaryEu: 'Litotomia zabaldua'
  },
  {
    id: 'uro-normal-botox',
    name: 'BOTOX (Infiltración Vesical de Toxina Botulínica)',
    nameEu: 'Botox (Infiltrazio Besikala)',
    acronym: 'BOTOX',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, perneras, empapador',
    accessoriesEu: 'Ohiko mahaia, hankakoak, enpapadorea',
    goldenRuleOrNote: 'Procedimiento endoscópico breve en camilla normal.',
    goldenRuleOrNoteEu: 'Ohiko mahaia prozedura azkarrerako.',
    positionSummary: 'Litotomía',
    positionSummaryEu: 'Litotomia'
  },
  {
    id: 'uro-normal-esfinter-ams',
    name: 'ESFÍNTER AMS (Implante Esfínter Artificial)',
    nameEu: 'AMS Esfinter Artifiziala',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, perneras, empapador',
    accessoriesEu: 'Ohiko mahaia, hankakoak, enpapadorea',
    goldenRuleOrNote: 'Camilla normal; asepsia rigurosa por material protésico.',
    goldenRuleOrNoteEu: 'Ohiko mahaia; zorroztasun handia asepsian.',
    positionSummary: 'Litotomía / Supino',
    positionSummaryEu: 'Litotomia / Bizkarrez'
  },
  {
    id: 'uro-normal-uretrotomia-sasche',
    name: 'URETROTOMÍA = SASCHE',
    nameEu: 'Uretrotomia = Sachse',
    acronym: 'SASCHE',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, perneras, empapador',
    accessoriesEu: 'Ohiko mahaia, hankakoak, enpapadorea',
    goldenRuleOrNote: 'Camilla normal en litotomía.',
    goldenRuleOrNoteEu: 'Ohiko mahaia litotomian.',
    positionSummary: 'Litotomía',
    positionSummaryEu: 'Litotomia'
  },
  {
    id: 'uro-normal-mallas',
    name: 'MALLAS INCONTINENCIA: REMEX, TVT, SOLIX, ADVANCE',
    nameEu: 'Inkontinentzia Sareak: REMEX, TVT, SOLIX, ADVANCE',
    acronym: 'MALLAS',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, perneras con flexión de cadera >90º, empapador',
    accessoriesEu: 'Ohiko mahaia, pernerak aldaka flexioarekin >90º, enpapadorea',
    goldenRuleOrNote: 'Comprende mallas suburetrales y cabestrillos de continencia femenina y masculina.',
    goldenRuleOrNoteEu: 'Emakume eta gizonentzako inkontinentzia sareak eta xingolak.',
    positionSummary: 'Litotomía',
    positionSummaryEu: 'Litotomia'
  },
  {
    id: 'uro-normal-litotricia-vesical',
    name: 'LITOTRICIA ENDOSCÓPICA VESICAL',
    nameEu: 'Maskuriko Litotrizia Endoskopikoa',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, perneras, empapador absorbente para lavado',
    accessoriesEu: 'Ohiko mahaia, hankakoak, enpapadorea',
    goldenRuleOrNote: 'Camilla normal con perneras.',
    goldenRuleOrNoteEu: 'Ohiko mahaia hankakoekin.',
    positionSummary: 'Litotomía',
    positionSummaryEu: 'Litotomia'
  },
  {
    id: 'uro-normal-bmns',
    name: 'BMNS',
    nameEu: 'BMNS',
    acronym: 'BMNS',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, empapador',
    accessoriesEu: 'Ohiko mahaia, enpapadorea',
    goldenRuleOrNote: 'Camilla normal.',
    goldenRuleOrNoteEu: 'Ohiko mahaia.',
    positionSummary: 'Decúbito supino o litotomía',
    positionSummaryEu: 'Bizkarrez edo litotomian'
  },
  {
    id: 'uro-normal-cistocele',
    name: 'CISTOCELE (Corrección Quirúrgica Prolapso)',
    nameEu: 'Zistozele (Zoru Pelbikoaren Jaitsiera)',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, perneras Allen, empapador',
    accessoriesEu: 'Ohiko mahaia, Allen hankakoak, enpapadorea',
    goldenRuleOrNote: 'Camilla normal en litotomía.',
    goldenRuleOrNoteEu: 'Ohiko mahaia litotomian.',
    positionSummary: 'Litotomía',
    positionSummaryEu: 'Litotomia'
  },
  {
    id: 'uro-normal-holep',
    name: 'HOLEP (Enucleación Prostática con Láser Holmium)',
    nameEu: 'HOLEP (Láser Holmium Prostatako Enukleazioa)',
    acronym: 'HOLEP',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'CAMILLA NORMAL',
    tableTypeEu: 'OHIKO MAHAIA / CAMILLA NORMAL',
    accessories: 'Camilla normal, perneras Goepel/Allen, empapador impermeable, láser Holmium',
    accessoriesEu: 'Ohiko mahaia, hankakoak, enpapadorea, Holmium laserra',
    goldenRuleOrNote: 'Camilla normal; irrigación continua abundante.',
    goldenRuleOrNoteEu: 'Ohiko mahaia; etengabeko ureztatze ugaria.',
    positionSummary: 'Litotomía',
    positionSummaryEu: 'Litotomia'
  },

  // Cirugías con Prolongación Pélvica (Ficha 1 Uro)
  {
    id: 'uro-pelv-dilatacion-uretral',
    name: 'DILATACIÓN URETRAL',
    nameEu: 'Uretrako Dilatazioa',
    acronym: 'DILAT. URETRAL',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN PÉLVICA',
    tableTypeEu: 'LUZATZAILE PELBIKOA / PROLONGACIÓN PÉLVICA',
    accessories: 'Prolongador pélvico montado, perneras manuales, empapador',
    accessoriesEu: 'Luzatzaile pelbikoa, eskuzko hankakoak, enpapadorea',
    goldenRuleOrNote: '¡AVISO MANDATORIO! Con prolongador pélvico, las perneras NO se pueden mover por separado con el mando: SOLO MANUALMENTE.',
    goldenRuleOrNoteEu: 'KONTUZ: Luzatzaile pelbikoarekin, hankakoak EZIN dira agintearekin banan-banan mugitu: ESKUZ BAKARRIK.',
    positionSummary: 'Litotomía sobre prolongador pélvico',
    positionSummaryEu: 'Litotomia luzatzaile pelbikoaren gainean',
    priorityAlert: 'Perneras Solo Manuales'
  },
  {
    id: 'uro-pelv-nlp',
    name: 'NLP (Nefrolitotomía Percutánea)',
    nameEu: 'NLP (Giltzurruneko Harri-kentze Perkutaneroa)',
    acronym: 'NLP',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN PÉLVICA / DORSAL',
    tableTypeEu: 'LUZATZAILE PELBIKOA / BIZKARRALDEKOA',
    accessories: 'Prolongador pélvico, arco de RX, rodillo para prono',
    accessoriesEu: 'Luzatzaile pelbikoa, RX arkua, arrabola',
    goldenRuleOrNote: 'Ficha 1 Urología HUN: Procedimiento con prolongación pélvica.',
    goldenRuleOrNoteEu: 'NUO 1. Fitxa: Luzapen pelbikoarekin.',
    positionSummary: 'Decúbito prono con rodillo toraco-abdominal',
    positionSummaryEu: 'Ahoz behera arrabolaz'
  },
  {
    id: 'uro-pelv-urs',
    name: 'URS (Ureteroscopia / Neoplasia Uretral Bilateral)',
    nameEu: 'URS (Ureteroskopia / Aldebiko Uretra Neoplasia)',
    acronym: 'URS',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN PÉLVICA',
    tableTypeEu: 'LUZATZAILE PELBIKOA / PROLONGACIÓN PÉLVICA',
    accessories: 'Prolongador pélvico, pernera contralateral bajada para arco de RX, empapador',
    accessoriesEu: 'Luzatzaile pelbikoa, aurkako hanka jaitsita RXrako',
    goldenRuleOrNote: 'Técnica de pierna bajada para entrada libre del arco de radioscopia.',
    goldenRuleOrNoteEu: 'Hanka jaitsita RX arkua sartu ahal izateko.',
    positionSummary: 'Litotomía con pierna contralateral descendida',
    positionSummaryEu: 'Litotomia kontrako hanka jaitsita'
  },
  {
    id: 'uro-pelv-rirs',
    name: 'RIRS (Litiasis Coraliforme / Ureterorrenoscopia Retrógrada)',
    nameEu: 'RIRS (Litiasi Koraliformea / Atzerako Ureterorrenoskopia)',
    acronym: 'RIRS',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN PÉLVICA',
    tableTypeEu: 'LUZATZAILE PELBIKOA / PROLONGACIÓN PÉLVICA',
    accessories: 'Prolongador pélvico, láser, perneras manuales, empapador',
    accessoriesEu: 'Luzatzaile pelbikoa, laserra, eskuzko hankakoak',
    goldenRuleOrNote: 'Prolongación pélvica; perneras reguladas manualmente.',
    goldenRuleOrNoteEu: 'Luzapen pelbikoa; hankakoak eskuz araututa.',
    positionSummary: 'Litotomía',
    positionSummaryEu: 'Litotomia'
  },
  {
    id: 'uro-pelv-doble-j',
    name: 'DOBLE J (Colocación / Retirada Catéter Doble J)',
    nameEu: 'Doble J Kateterra Jarri / Kendu',
    acronym: 'DOBLE J',
    specialtyId: 'q5-q6-urologia',
    specialtyLabel: 'Q5 y Q6 – Urología',
    specialtyLabelEu: 'Q5 eta Q6 – Urologia',
    operatingRoom: 'Quirófano 5 y Quirófano 6',
    tableType: 'PROLONGACIÓN PÉLVICA',
    tableTypeEu: 'LUZATZAILE PELBIKOA / PROLONGACIÓN PÉLVICA',
    accessories: 'Prolongador pélvico, arco de escopia, perneras manuales',
    accessoriesEu: 'Luzatzaile pelbikoa, RX eskopia arkua',
    goldenRuleOrNote: 'Arco de RX a la altura de hipocondrio / fosa ilíaca.',
    goldenRuleOrNoteEu: 'RX arkua prest.',
    positionSummary: 'Litotomía',
    positionSummaryEu: 'Litotomia'
  },

  // --- Q7 Y Q8 TRAUMATOLOGÍA (MESA NORMAL, PELVISTATO, PÉLVICO, SILLA PLAYA, PROLONGADOR DORSAL, UNIDAD DEL DOLOR) ---
  // Trauma Mesa Normal (4)
  {
    id: 'trauma-subcapital-normal',
    name: 'SUBCAPITAL CADERA (Sin Canulados)',
    nameEu: 'Aldaka Azpikapitala (Tornulurik gabe)',
    acronym: 'SUBCAPITAL',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'MESA NORMAL',
    tableTypeEu: 'MAHAI ARRUNTA',
    accessories: 'Mesa plana acolchada sin aditamentos de tracción, pañal y empapador en mesa',
    accessoriesEu: 'Ohiko mahai arrunta trakzio gabe, puikala eta enpapadorea',
    goldenRuleOrNote: '“EDAD”: En pacientes geriátricos, pañal y empapador siempre en la mesa antes del transfer.',
    goldenRuleOrNoteEu: '“ADINA”: Adinekoetan, puikala eta enpapadorea beti mahaian jarri transferra baino lehen.',
    positionSummary: 'Decúbito supino plano o lateral según abordaje de cadera',
    positionSummaryEu: 'Bizkarrez lau edo albo-etzana'
  },
  {
    id: 'trauma-ppc',
    name: 'PPC (Prótesis Parcial de Cadera)',
    nameEu: 'PPC (Aldakako Protesi Partziala)',
    acronym: 'PPC',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'MESA NORMAL',
    tableTypeEu: 'MAHAI ARRUNTA',
    accessories: 'Mesa normal, topes laterales para lateral o decúbito supino, pañal y empapador',
    accessoriesEu: 'Ohiko mahaia, albo-topak, puikala eta enpapadorea',
    goldenRuleOrNote: 'Mesa normal sin pelvistato; movilización en bloque para no luxar.',
    goldenRuleOrNoteEu: 'Ohiko mahaia pelbistato gabe; blokean mugitu luxaziorik ez sortzeko.',
    positionSummary: 'Decúbito lateral o decúbito supino',
    positionSummaryEu: 'Albo-etzana edo bizkarrez'
  },
  {
    id: 'trauma-ptc',
    name: 'PTC (Prótesis Total de Cadera)',
    nameEu: 'PTC (Aldakako Protesi Osoa)',
    acronym: 'PTC',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'MESA NORMAL',
    tableTypeEu: 'MAHAI ARRUNTA',
    accessories: 'Mesa normal, soportes pélvicos anterior/posterior si abordaje posterolateral',
    accessoriesEu: 'Ohiko mahaia, pelbis-euskarriak',
    goldenRuleOrNote: 'Mesa normal sin tracción; pañal y empapador en ancianos.',
    goldenRuleOrNoteEu: 'Ohiko mahaia trakzio gabe; puikala eta enpapadorea adinekoetan.',
    positionSummary: 'Decúbito lateral estricto fijado con topes pélvicos',
    positionSummaryEu: 'Albo-etzana zorrotza pelbiseko topekin helduta'
  },
  {
    id: 'trauma-ptr',
    name: 'PTR (Prótesis Total de Rodilla)',
    nameEu: 'PTR (Belauneko Protesi Osoa)',
    acronym: 'PTR',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'MESA NORMAL',
    tableTypeEu: 'MAHAI ARRUNTA',
    accessories: 'Mesa normal, tope articulado para flexión de rodilla a 90º, manguito de isquemia en muslo',
    accessoriesEu: 'Ohiko mahaia, belauna 90º tolesteko topea, iskemia eskalafean',
    goldenRuleOrNote: 'Mesa normal; verificar fijación firme del tope de rodilla en el raíl lateral.',
    goldenRuleOrNoteEu: 'Ohiko mahaia; belaun-topea ondo finkatu albo-errailean.',
    positionSummary: 'Decúbito supino con pierna en flexión',
    positionSummaryEu: 'Bizkarrez hanka tolestuta'
  },

  // Trauma Pelvistato (8)
  {
    id: 'trauma-pelvistato-subcapital-canulados',
    name: 'SUBCAPITAL CADERA (CANULADOS)',
    nameEu: 'Aldaka Azpikapitala (Tornulu Kanulatuak)',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PELVISTATO',
    tableTypeEu: 'PELBISTATOA (Trakzio Gailua & Zutoina)',
    accessories: 'Poste perineal acolchado, botas de tracción mecánica, barras telescópicas',
    accessoriesEu: 'Perineo-zutoina, trakzio botak, barra teleskopikoak',
    goldenRuleOrNote: 'Mesa con poste perineal y tracción para control por radioscopia en dos planos (AP y axial).',
    goldenRuleOrNoteEu: 'Pelbistatoa trakzio botekin RX eskopia bi noranzkotan egiteko.',
    positionSummary: 'Decúbito supino en mesa de tracción ortopédica (pelvistato)',
    positionSummaryEu: 'Bizkarrez trakzio-mahaian (pelbistatoa)'
  },
  {
    id: 'trauma-pelvistato-clavo-tibia',
    name: 'CLAVO TIBIA (Enclavado Intramedular)',
    nameEu: 'Tibiako Iltzea (Hezur Barnekoa)',
    acronym: 'CLAVO TIBIA',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PELVISTATO',
    tableTypeEu: 'PELBISTATOA',
    accessories: 'Pelvistato / arco de tracción con rodilla en flexión >90º, arco de RX',
    accessoriesEu: 'Pelbistatoa, belauna flexioan >90º, RX arkua',
    goldenRuleOrNote: 'Fijación en pelvistato; permitir flexión articular para entrada del clavo proximal.',
    goldenRuleOrNoteEu: 'Pelbistatoan finkatuta; belaunari flexioa eman sarrera proximalerako.',
    positionSummary: 'Decúbito supino en pelvistato con rodilla flexionada',
    positionSummaryEu: 'Bizkarrez pelbistatoan belauna tolestuta'
  },
  {
    id: 'trauma-pelvistato-dhs',
    name: 'DHS (Dynamic Hip Screw - Tornillo Deslizante Cadera)',
    nameEu: 'DHS (Aldakako Torloju Dinamikoa)',
    acronym: 'DHS',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PELVISTATO',
    tableTypeEu: 'PELBISTATOA',
    accessories: 'Poste perineal acolchado, botas de tracción, arco de escopia',
    accessoriesEu: 'Perineo-zutoina, trakzio botak, RX arkua',
    goldenRuleOrNote: 'Pelvistato: tracción y rotación interna de la extremidad afecta.',
    goldenRuleOrNoteEu: 'Pelbistatoa: trakzioa eta barne-biraketa kaltetutako hankan.',
    positionSummary: 'Decúbito supino en pelvistato',
    positionSummaryEu: 'Bizkarrez pelbistatoan'
  },
  {
    id: 'trauma-pelvistato-osteosintesis-cadera',
    name: 'OSTEOSÍNTESIS DE CADERA',
    nameEu: 'Aldakako Osteosintesisa',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PELVISTATO',
    tableTypeEu: 'PELBISTATOA',
    accessories: 'Poste perineal, tracción, arco en C',
    accessoriesEu: 'Perineo-zutoina, trakzioa, C arkua',
    goldenRuleOrNote: 'Pelvistato con poste perineal acolchado para evitar neuropatía pudenda.',
    goldenRuleOrNoteEu: 'Pelbistatoa zutoin kuxinatuarekin pudendo nerbioa babesteko.',
    positionSummary: 'Decúbito supino en pelvistato',
    positionSummaryEu: 'Bizkarrez pelbistatoan'
  },
  {
    id: 'trauma-pelvistato-pertrocanterea',
    name: 'FRACTURA PERTROCANTÉREA (Fémur)',
    nameEu: 'Pertrokanderear Fraktura (Femurra)',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PELVISTATO',
    tableTypeEu: 'PELBISTATOA',
    accessories: 'Poste perineal, bota de tracción mecánica, control fluoroscópico',
    accessoriesEu: 'Perineo-zutoina, bota mekanikoa, RX kontrola',
    goldenRuleOrNote: 'Pelvistato: tracción longitudinal bajo escopia.',
    goldenRuleOrNoteEu: 'Pelbistatoa: luzetarako trakzioa eskopiaz.',
    positionSummary: 'Decúbito supino en pelvistato',
    positionSummaryEu: 'Bizkarrez pelbistatoan'
  },
  {
    id: 'trauma-pelvistato-gamma',
    name: 'GAMMA (Clavo Gamma Cefalomedular)',
    nameEu: 'Gamma Iltzea (Zefalomedularra)',
    acronym: 'GAMMA',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PELVISTATO',
    tableTypeEu: 'PELBISTATOA',
    accessories: 'Pelvistato con poste perineal y bota de tracción, arco de escopia',
    accessoriesEu: 'Pelbistatoa zutoin eta botarekin, RX arkua',
    goldenRuleOrNote: 'Pelvistato mandatorio; extremidad contralateral abducida para libre paso del arco de escopia.',
    goldenRuleOrNoteEu: 'Pelbistatoa ezinbestekoa; beste hanka irekita RX arkuari lekua uzteko.',
    positionSummary: 'Decúbito supino en mesa de tracción',
    positionSummaryEu: 'Bizkarrez trakzio-mahaian'
  },
  {
    id: 'trauma-pelvistato-subtrocanterea',
    name: 'FRACTURA SUBTROCANTÉREA (Fémur)',
    nameEu: 'Azpitrokanderear Fraktura (Femurra)',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PELVISTATO',
    tableTypeEu: 'PELBISTATOA',
    accessories: 'Pelvistato con poste perineal y tracción',
    accessoriesEu: 'Pelbistatoa zutoin eta trakzioarekin',
    goldenRuleOrNote: 'Pelvistato.',
    goldenRuleOrNoteEu: 'Pelbistatoa.',
    positionSummary: 'Decúbito supino en pelvistato',
    positionSummaryEu: 'Bizkarrez pelbistatoan'
  },
  {
    id: 'trauma-pelvistato-basicervical',
    name: 'FRACTURA BASICERVICAL (Cuello Femoral)',
    nameEu: 'Basizerbikal Fraktura (Femur Lepoa)',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PELVISTATO',
    tableTypeEu: 'PELBISTATOA',
    accessories: 'Pelvistato con poste perineal y botas de tracción',
    accessoriesEu: 'Pelbistatoa zutoin eta botekin',
    goldenRuleOrNote: 'Pelvistato.',
    goldenRuleOrNoteEu: 'Pelbistatoa.',
    positionSummary: 'Decúbito supino en pelvistato',
    positionSummaryEu: 'Bizkarrez pelbistatoan'
  },

  // Trauma Pélvico (1)
  {
    id: 'trauma-pelvico-pelvis',
    name: 'CIRUGÍA DE PELVIS (Acetábulo, Cotilo y Anillo Pélvico)',
    nameEu: 'Pelbis Kirurgia (Azetabulua, Kotiloa eta Eraztuna)',
    acronym: 'PELVIS',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PÉLVICO',
    tableTypeEu: 'PELBIKOA (Euskarri Erradiotransparente Berezia)',
    accessories: 'Soporte pélvico radiotransparente especial para fracturas de acetábulo y cotilo',
    accessoriesEu: 'Pelbiseko euskarri erradiotransparente berezia',
    goldenRuleOrNote: 'Soporte pélvico radiotransparente para visualización 360º de palas ilíacas y cotilo.',
    goldenRuleOrNoteEu: 'Pelbis euskarri erradiotransparentea ikuspen osoa lortzeko.',
    positionSummary: 'Decúbito supino o decúbito prono según abordaje ilioinguinal vs posterior Kocher-Langenbeck',
    positionSummaryEu: 'Bizkarrez edo ahoz behera abordajearen arabera'
  },

  // Trauma Silla de Playa / Mesa Hombro (3)
  {
    id: 'trauma-silla-clavicula',
    name: 'FRACTURA DE CLAVÍCULA',
    nameEu: 'Klabikula Fraktura',
    acronym: 'FX CLAVÍCULA',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 (Trauma)',
    tableType: 'MESA DE HOMBRO; SILLA DE PLAYA',
    tableTypeEu: 'SORBALDAKO MAHAIA; HONDARTZA AULKIA (Beach Chair)',
    accessories: 'Módulo silla de playa (Beach Chair), cabecero rígido específico, panel escapular retirado en lado afecto',
    accessoriesEu: 'Hondartza aulkia modulu berezia, orratz-panela kenduta',
    goldenRuleOrNote: 'Silla de playa: cabeza fijada con correas craneales; panel escapular retirado del hombro a operar.',
    goldenRuleOrNoteEu: 'Hondartza aulkia: burua ondo helduta eta sorbaldako panela kenduta.',
    positionSummary: 'Fowler a 45º - 60º (Silla de Playa)',
    positionSummaryEu: 'Fowler 45º - 60º (Hondartza Aulkia)'
  },
  {
    id: 'trauma-silla-humero',
    name: 'FRACTURA DE HÚMERO (Proximal)',
    nameEu: 'Humero Fraktura (Proximala)',
    acronym: 'FX HÚMERO',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 (Trauma)',
    tableType: 'MESA DE HOMBRO; SILLA DE PLAYA',
    tableTypeEu: 'SORBALDAKO MAHAIA; HONDARTZA AULKIA',
    accessories: 'Silla de playa con panel escapular desmontado, tracción manual, arco de escopia posterior',
    accessoriesEu: 'Hondartza aulkia panela kengarriarekin, RX arkua',
    goldenRuleOrNote: 'Silla de playa; comprobar arco de escopia con libre acceso por detrás del hombro.',
    goldenRuleOrNoteEu: 'Hondartza aulkia; egiaztatu RX arkuak atzetik sarbide librea duela.',
    positionSummary: 'Silla de playa a 45º',
    positionSummaryEu: 'Hondartza aulkia 45º-ra'
  },
  {
    id: 'trauma-silla-pih',
    name: 'PIH (Prótesis Invertida de Hombro)',
    nameEu: 'PIH (Sorbaldako Alderantzizko Protesia)',
    acronym: 'PIH',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 (Trauma)',
    tableType: 'MESA DE HOMBRO; SILLA DE PLAYA',
    tableTypeEu: 'SORBALDAKO MAHAIA; HONDARTZA AULKIA',
    accessories: 'Módulo silla de playa Beach Chair Trumpf, cabecero rígido anatómico, soporte de brazo articulado',
    accessoriesEu: 'Beach Chair modulua, buruko zurruna, beso-euskarri artikulatua',
    goldenRuleOrNote: 'Silla de playa obligatoria; proteger ojos y orejas durante la fijación del cabecero cefálico.',
    goldenRuleOrNoteEu: 'Hondartza aulkia ezinbestekoa; begiak eta belarriak babestu burua finkatzean.',
    positionSummary: 'Silla de playa (Semi-Fowler 45º-60º)',
    positionSummaryEu: 'Hondartza aulkia (Semi-Fowler 45º-60º)'
  },

  // Trauma Prolongador Dorsal (7)
  {
    id: 'trauma-dorsal-codo',
    name: 'FRACTURA DE CODO',
    nameEu: 'Ukondo Fraktura',
    acronym: 'FX CODO',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PROLONGADOR DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGADOR DORSAL',
    accessories: 'Prolongador dorsal acoplado para extremidad superior permitiendo acceso RX 360º',
    accessoriesEu: 'Bizkarraldeko luzagailua goiko adarrerako RX 360º sarbidearekin',
    goldenRuleOrNote: 'Mesa con prolongador dorsal para máxima visibilidad fluoroscópica del codo.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailua ukondoa erradiologikoki ongi ikusteko.',
    positionSummary: 'Decúbito supino o decúbito prono según vía posterior vs anterior',
    positionSummaryEu: 'Bizkarrez edo ahoz behera sarbidearen arabera'
  },
  {
    id: 'trauma-dorsal-olecranon',
    name: 'FRACTURA DE OLECRANON',
    nameEu: 'Olekranon Fraktura',
    acronym: 'FX OLECRANON',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PROLONGADOR DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGADOR DORSAL',
    accessories: 'Módulo de prolongador dorsal acoplado',
    accessoriesEu: 'Bizkarraldeko luzagailua',
    goldenRuleOrNote: 'Prolongador dorsal preparado en mesa antes del transfer.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailua prest transferra egin aurretik.',
    positionSummary: 'Decúbito supino con brazo cruzado sobre el tórax o en mesa de mano radiotransparente',
    positionSummaryEu: 'Bizkarrez besoa bular gainean duela edo eskuko mahaian'
  },
  {
    id: 'trauma-dorsal-cubito-radio',
    name: 'FRACTURA DE CÚBITO - RADIO',
    nameEu: 'Kubito - Erradio Fraktura',
    acronym: 'FX CÚBITO-RADIO',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PROLONGADOR DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGADOR DORSAL',
    accessories: 'Prolongador dorsal, mesa auxiliar de mano radiotransparente',
    accessoriesEu: 'Bizkarraldeko luzagailua, eskuko mahai erradiotransparentea',
    goldenRuleOrNote: 'Prolongador dorsal acoplado.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailua.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez'
  },
  {
    id: 'trauma-dorsal-cabeza-radio',
    name: 'FRACTURA CABEZA DE RADIO',
    nameEu: 'Erradio-buruaren Fraktura',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PROLONGADOR DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGADOR DORSAL',
    accessories: 'Prolongador dorsal, arco de escopia',
    accessoriesEu: 'Bizkarraldeko luzagailua, RX arkua',
    goldenRuleOrNote: 'Prolongador dorsal.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailua.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez'
  },
  {
    id: 'trauma-dorsal-radio-distal',
    name: 'FRACTURA DE RADIO DISTAL (Colles / Muñeca)',
    nameEu: 'Erradio Distaleko Fraktura (Colles / Eskumuturra)',
    acronym: 'FX RADIO DISTAL',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PROLONGADOR DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGADOR DORSAL',
    accessories: 'Prolongador dorsal o mesa de mano radiotransparente acoplada',
    accessoriesEu: 'Bizkarraldeko luzagailua edo eskuko mahaia',
    goldenRuleOrNote: 'Prolongador dorsal acoplado.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailua.',
    positionSummary: 'Decúbito supino con antebrazo en mesa de mano',
    positionSummaryEu: 'Bizkarrez besaurrea eskuko mahaian duela'
  },
  {
    id: 'trauma-dorsal-mano',
    name: 'FRACTURA DE MANO (Metacarpianos y Falanges)',
    nameEu: 'Esku Fraktura (Metakarpoak eta Falangeak)',
    acronym: 'FX MANO',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PROLONGADOR DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGADOR DORSAL',
    accessories: 'Prolongador dorsal, mesa de mano radiotransparente',
    accessoriesEu: 'Bizkarraldeko luzagailua, eskuko mahaia',
    goldenRuleOrNote: 'Prolongador dorsal.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailua.',
    positionSummary: 'Decúbito supino',
    positionSummaryEu: 'Bizkarrez'
  },
  {
    id: 'trauma-dorsal-biceps',
    name: 'BÍCEPS (Reinserción Tendinosa Bíceps Distal)',
    nameEu: 'Bizepsa (Distalaren Birfinkapena)',
    acronym: 'BÍCEPS',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano 7 y Quirófano 8',
    tableType: 'PROLONGADOR DORSAL',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA / PROLONGADOR DORSAL',
    accessories: 'Prolongador dorsal acoplado',
    accessoriesEu: 'Bizkarraldeko luzagailua',
    goldenRuleOrNote: 'Prolongador dorsal.',
    goldenRuleOrNoteEu: 'Bizkarraldeko luzagailua.',
    positionSummary: 'Decúbito supino con brazo extendido',
    positionSummaryEu: 'Bizkarrez besoa luzatuta'
  },

  // Unidad del Dolor en Traumatología
  {
    id: 'trauma-unidad-dolor',
    name: 'PROCEDIMIENTOS DE LA UNIDAD DEL DOLOR (Radiofrecuencia / Bloqueos)',
    nameEu: 'Minaren Unitateko Prozedurak (Irrati-maiztasuna / Blokeoak)',
    acronym: 'UNIDAD DEL DOLOR',
    specialtyId: 'q7-q8-trauma',
    specialtyLabel: 'Q7 y Q8 – Traumatología',
    specialtyLabelEu: 'Q7 eta Q8 – Traumatologia',
    operatingRoom: 'Quirófano Asignado (HUN)',
    tableType: 'PROLONGADOR DORSAL + DECÚBITO PRONO',
    tableTypeEu: 'BIZKARRALDEKO LUZAGAILUA + AHOZ BEHERA',
    accessories: 'RX Maternal, Ecógrafo y Radiofrecuencia Unidad del Dolor, base mesa de quirófano, prolongador dorsal, rulo en pies',
    accessoriesEu: 'Amatasun RX, Ekografoa, Irrati-maiztasuna, luzagailua, oinetako arrabola',
    goldenRuleOrNote: 'Protocolo mandatorio HUN: Base de mesa con prolongador dorsal; pasar paciente boca abajo (prono); solo una sábana por encima; dentro de quirófano poner rulo en los pies.',
    goldenRuleOrNoteEu: 'NUO protokoloa: Mahaia bizkarraldeko luzagailuarekin; ahoz behera pasa; maindire bakarra gainetik; barruan oinetan ruloa jarri.',
    positionSummary: 'Decúbito prono (boca abajo) con rulo bajo empeines/tobillos',
    positionSummaryEu: 'Ahoz behera ruloarekin oinetan'
  }
];

