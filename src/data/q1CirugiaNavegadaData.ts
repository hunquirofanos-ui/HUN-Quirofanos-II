export interface Q1ProtocolPhoto {
  id: string;
  src: string;
  caption: string;
  captionEu?: string;
  detail?: string;
}

export interface Q1DutyLimitRow {
  celador: string;
  celadorEu: string;
  sanitario: string;
  sanitarioEu: string;
}

export interface Q1ChecklistItem {
  id: string;
  text: string;
  textEu: string;
}

export const Q1_NAVEGADA_PDF_URL = 'assets/aistudio/Protocolo_cirugia_navegada_Q1_reorganizado_f8424e6f.pdf';

export const Q1_NAVEGADA_PHOTOS: Record<string, Q1ProtocolPhoto> = {
  portada: {
    id: 'portada',
    src: 'assets/q1_navegada/obj_20.jpg',
    caption: 'Quirófano 1 preparado para Cirugía Navegada (Mesa de carbono, Loop-X y microscopio)',
    captionEu: '1. Ebakigela Kirurgia Nabigaturako prestatuta (karbonozko mahaia, Loop-X eta mikroskopioa)'
  },
  transformador: {
    id: 'transformador',
    src: 'assets/q1_navegada/obj_23.jpg',
    caption: 'Transformador de la mesa de carbono',
    captionEu: 'Karbonozko mahaiaren transformadorea'
  },
  mando1Enchufado: {
    id: 'mando1Enchufado',
    src: 'assets/q1_navegada/obj_26.jpg',
    caption: 'Mando 1 (enchufado a la mesa · MAQUET)',
    captionEu: '1. Agintea (mahaira entxufatua · MAQUET)'
  },
  mando2Inalambrico: {
    id: 'mando2Inalambrico',
    src: 'assets/q1_navegada/obj_27.jpg',
    caption: 'Mando 2 (inalámbrico · GETINGE)',
    captionEu: '2. Agintea (haririk gabekoa · GETINGE)',
    detail: 'Utilizado para el desplazamiento longitudinal hacia la cabeza o hacia los pies.'
  },
  mando1Acoplado: {
    id: 'mando1Acoplado',
    src: 'assets/q1_navegada/obj_28.jpg',
    caption: 'Mando 1 acoplado en el lateral de la mesa',
    captionEu: '1. Agintea mahaiaren alboan lotuta'
  },
  trineo: {
    id: 'trineo',
    src: 'assets/q1_navegada/obj_31.jpg',
    caption: 'Tríneo',
    captionEu: 'Lera (Trineoa)'
  },
  alargadera1: {
    id: 'alargadera1',
    src: 'assets/q1_navegada/obj_32.jpg',
    caption: 'Alargadera 1 (guardada en Q2)',
    captionEu: '1. Luzagarria (Q2n gordeta)'
  },
  alargadera2: {
    id: 'alargadera2',
    src: 'assets/q1_navegada/obj_33.jpg',
    caption: 'Alargadera 2 (guardada en Q2)',
    captionEu: '2. Luzagarria (Q2n gordeta)'
  },
  colocacionAlargaderas: {
    id: 'colocacionAlargaderas',
    src: 'assets/q1_navegada/obj_36.jpg',
    caption: 'Colocación de las alargaderas en los extremos de la estructura lateral en U',
    captionEu: 'Luzagarrien kokapena U formako albo-egituraren muturretan'
  },
  braceroAccesorio: {
    id: 'braceroAccesorio',
    src: 'assets/q1_navegada/obj_37.jpg',
    caption: 'Bracero. Accesorio de apoyo para los brazos',
    captionEu: 'Beso-euskarria (Bracero). Besoak eusteko osagarria'
  },
  colocacionBracero: {
    id: 'colocacionBracero',
    src: 'assets/q1_navegada/obj_38.jpg',
    caption: 'Colocación del Bracero en la mesa de carbono',
    captionEu: 'Beso-euskarriaren kokapena karbonozko mahaian'
  },
  referenciaSalaLoop: {
    id: 'referenciaSalaLoop',
    src: 'assets/q1_navegada/obj_41.jpg',
    caption: 'Desplazar las tomas para dejar espacio al Loop-X y tomar como referencia el marco',
    captionEu: 'Hartuneak mugitu Loop-X sistemari lekua uzteko eta markoa erreferentzia gisa hartu'
  },
  referenciaMarcoMesa: {
    id: 'referenciaMarcoMesa',
    src: 'assets/q1_navegada/obj_42.jpg',
    caption: 'Tomar el marco como referencia de alineación en sala',
    captionEu: 'Markoa gelako lerrokatze-erreferentzia gisa hartzea'
  },
  referenciaMarcoLoop: {
    id: 'referenciaMarcoLoop',
    src: 'assets/q1_navegada/obj_43.jpg',
    caption: 'Tomar el marco como referencia durante la aproximación del Loop-X',
    captionEu: 'Markoa erreferentzia gisa hartzea Loop-X hurbiltzean'
  },
  cabeceroPies: {
    id: 'cabeceroPies',
    src: 'assets/q1_navegada/obj_44.jpg',
    caption: 'Cabecero. Zona donde se colocan los pies',
    captionEu: 'Burukoa. Oinak kokatzen diren eremua'
  },
  sistemaLoopX: {
    id: 'sistemaLoopX',
    src: 'assets/q1_navegada/obj_47.jpg',
    caption: 'Sistema Loop-X. Equipo de imagen intraoperatoria (aproximación desde los pies hacia la cabeza)',
    captionEu: 'Loop-X sistema. Ebakuntza barruko irudi-ekipoa (oinetatik bururantz hurbiltzen da)'
  },
  seguimientoOptico: {
    id: 'seguimientoOptico',
    src: 'assets/q1_navegada/obj_50.jpg',
    caption: 'Unidad de seguimiento óptico (Brainlab Curve · cámara infrarroja plegada)',
    captionEu: 'Jarraipen optikoko unitatea (Brainlab Curve · kamera infragorria tolestuta)'
  },
  maletaBrainlab: {
    id: 'maletaBrainlab',
    src: 'assets/q1_navegada/obj_53.jpg',
    caption: 'Maleta protectora con ruedas (Brainlab)',
    captionEu: 'Gurpildun babes-maleta (Brainlab)'
  },
  brazoArticuladoSoporte: {
    id: 'brazoArticuladoSoporte',
    src: 'assets/q1_navegada/obj_54.jpg',
    caption: 'Brazo articulado de soporte dentro del estuche protector acolchado',
    captionEu: 'Euskarri-beso artikulatua babes-kaxa bigunaren barruan'
  },
  estacionVisualizacion: {
    id: 'estacionVisualizacion',
    src: 'assets/q1_navegada/obj_55.jpg',
    caption: 'Estación de visualización y control (Brainlab Curve 4K)',
    captionEu: 'Bistaratze eta kontrol estazioa (Brainlab Curve 4K)'
  },
  microscopioQ1: {
    id: 'microscopioQ1',
    src: 'assets/q1_navegada/obj_58.jpg',
    caption: 'Microscopio quirúrgico (traslado desde quirófano maternal si se solicita)',
    captionEu: 'Mikroskopio kirurgikoa (amatasun-ebakigelatik ekarria eskatuz gero)'
  }
};

export const Q1_FUNCTIONS_AND_LIMITS: Q1DutyLimitRow[] = [
  {
    celador: 'Localizar y trasladar la mesa, cama y accesorios solicitados.',
    celadorEu: 'Mahaia, ohea eta eskatutako osagarriak aurkitu eta lekualdatzea.',
    sanitario: 'Determinar la posición clínica del paciente y supervisar la transferencia.',
    sanitarioEu: 'Pazientearen posizio klinikoa zehaztea eta transferentzia gainbegiratzea.'
  },
  {
    celador: 'Preparar logísticamente los accesorios y ordenar el cableado externo según el procedimiento autorizado.',
    celadorEu: 'Osagarriak logistikoki prestatzea eta kanpoko kableak baimendutako prozeduraren arabera antolatzea.',
    sanitario: 'Dirigir los giros y comprobar vía aérea, vías, tubos, drenajes, alineación y puntos de apoyo.',
    sanitarioEu: 'Biraketak zuzentzea eta arnasbidea, bideak, hodiak, drainatzeak, lerrokatzea eta euskarri-puntuak egiaztatzea.'
  },
  {
    celador: 'Facilitar el espacio y mantener despejada la trayectoria del Loop-X.',
    celadorEu: 'Espazioa erraztea eta Loop-X ekipoaren ibilbidea libre mantentzea.',
    sanitario: 'Realizar el posicionamiento técnico, la adquisición de imagen y los ajustes del sistema.',
    sanitarioEu: 'Posizionamendu teknikoa, irudien hartzea eta sistemaren doikuntzak egitea.'
  },
  {
    celador: 'Colaborar en las transferencias y el traslado a URPA cuando se autorice.',
    celadorEu: 'Transferentzietan eta baimentzean URPAra egiten den lekualdaketan laguntzea.',
    sanitario: 'Autorizar movimientos y confirmar que el paciente está preparado para el traslado.',
    sanitarioEu: 'Mugimenduak baimentzea eta pazientea lekualdatzeko prest dagoela baieztatzea.'
  }
];

export const Q1_PRE_OP_CHECKLIST: Q1ChecklistItem[] = [
  {
    id: 'chk-1',
    text: 'Confirmar en la programación que se trata de una cirugía navegada en Q1.',
    textEu: 'Programazioan Q1ean kirurgia nabigatua dela baieztatzea.'
  },
  {
    id: 'chk-2',
    text: 'Localizar y trasladar la mesa de carbono.',
    textEu: 'Karbonozko mahaia aurkitu eta lekualdatzea.'
  },
  {
    id: 'chk-3',
    text: 'Prever la cama habitual completa del paciente en las cirugías de espalda.',
    textEu: 'Bizkarreko ebakuntzetan pazientearen ohiko ohe osoa aurreikustea.'
  },
  {
    id: 'chk-4',
    text: 'Realizar el cambio del pie de mesa según el procedimiento del servicio.',
    textEu: 'Zerbitzuaren prozeduraren arabera mahai-oinaren aldaketa egitea.'
  },
  {
    id: 'chk-5',
    text: 'Localizar y conectar el transformador conforme al procedimiento autorizado.',
    textEu: 'Baimendutako prozeduraren arabera transformadorea aurkitu eta konektatzea.'
  },
  {
    id: 'chk-6',
    text: 'Comprobar la disponibilidad de los dos mandos.',
    textEu: 'Bi aginteen erabilgarritasuna egiaztatzea.'
  },
  {
    id: 'chk-7',
    text: 'Traer del Q2 las alargaderas y preparar los soportes de brazos compatibles.',
    textEu: 'Q2tik luzagarriak ekartzea eta beso-euskarri bateragarriak prestatzea.'
  },
  {
    id: 'chk-8',
    text: 'Preparar el tríneo y el bracero cuando estén solicitados.',
    textEu: 'Eskatuta daudenean lera (trineoa) eta beso-euskarria (bracero) prestatzea.'
  },
  {
    id: 'chk-9',
    text: 'Confirmar con Enfermería y Anestesia la configuración y los accesorios necesarios.',
    textEu: 'Erizaintzarekin eta Anestesiarekin konfigurazioa eta beharrezko osagarriak baieztatzea.'
  },
  {
    id: 'chk-10',
    text: 'Dejar libre el recorrido del Loop-X desde los pies hacia la cabeza.',
    textEu: 'Loop-X sistemaren ibilbidea libre uztea oinetatik bururantz.'
  },
  {
    id: 'chk-11',
    text: 'Confirmar si se necesita microscopio, pantalla u otro equipo complementario.',
    textEu: 'Mikroskopioa, pantaila edo beste ekipo osagarriren bat behar den baieztatzea.'
  },
  {
    id: 'chk-12',
    text: 'Mantener el cableado ordenado y las zonas de paso despejadas.',
    textEu: 'Kableak antolatuta eta pasabideak libre mantentzea.'
  },
  {
    id: 'chk-13',
    text: 'Confirmar que la configuración final está validada por el equipo responsable.',
    textEu: 'Azken konfigurazioa talde arduradunak baliozkotu duela baieztatzea.'
  }
];
