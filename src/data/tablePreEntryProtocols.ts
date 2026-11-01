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
