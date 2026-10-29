/**
 * Protocolos Oficiales del Quirófano Central II & Quirófano de Urgencias II (Área General V)
 * Hospital Universitario de Navarra (HUN)
 * Transcripción estructurada y verificada de la normativa de celadores/as
 */

export interface OfficialFunction {
  id: number;
  title: string;
  description: string;
  criticalStep?: boolean;
  departmentDestination?: string;
  safetyNote?: string;
}

export interface OfficialMethodologyStep {
  step: number;
  title: string;
  paragraphs: string[];
  keyPoints: string[];
  collaborationWith: string[];
}

export const HUN_TEAM_PHILOSOPHY = {
  title: "Equipo Único Dividido en Dos Grupos",
  hospital: "Hospital Universitario de Navarra (HUN)",
  pavilion: "Área General V - Quirófano Central II & Urgencias II",
  description: 
    "Dentro de quirófano los celadores/as somos un único equipo dividido en dos, con lo que independientemente del grupo en el que esté cada persona (dentro o fuera) si la carga de trabajo se descompensa o el compañero/a necesita ayuda, cualquiera puede y debe realizar las tareas necesarias para que el trabajo no se vea alterado de su normal funcionamiento.",
  coreValues: [
    "Solidaridad de equipo incondicional",
    "Apoyo inmediato si la carga de trabajo se descompensa",
    "Seguridad del paciente y preservación de tiempos quirúrgicos",
    "Colaboración estrecha con enfermería de anestesia e instrumentista"
  ]
};

export const HUN_OR_DISTRIBUTION = [
  {
    room: "Quirófano 1",
    specialty: "Urgencias",
    scope: "Urgencias 24h, politrauma, cirugía de guardia, cesárea/soporte urgente",
    celadorDedicado: "Celador/a de Urgencias rotado (SIEMPRE DENTRO)",
    accessoriesPolicy: "Los accesorios se dejan dentro de quirófano en un lugar seguro donde no se puedan caer. Una vez limpios por el personal de limpieza, se depositan en el mueble habilitado en el antequirófano."
  },
  {
    room: "Quirófano 2",
    specialty: "Otorrinolaringología (ORL)",
    scope: "Microcirugía de oído, CENS, timpanoplastias, laringe, faringe",
    celadorDedicado: "Celadores de Dentro (turno de mañana)",
    accessoriesPolicy: "Los accesorios se dejan dentro de quirófano en lugar protegido. Tras su desinfección, se guardan en el mueble del antequirófano."
  },
  {
    room: "Quirófano 3",
    specialty: "Oftalmología",
    scope: "Cataratas, vitrectomías, glaucoma, trasplante corneal",
    celadorDedicado: "Celadores de Dentro (turno de mañana)",
    accessoriesPolicy: "Cabeceros especiales y anillos de silicona se limpian y conservan en el área asignada."
  },
  {
    room: "Quirófano 4",
    specialty: "Oftalmología",
    scope: "Cirugía vitreorretiniana, facoemulsificación con LIO, párpados y anejos",
    celadorDedicado: "Celadores de Dentro (turno de mañana)",
    accessoriesPolicy: "Cabeceros especiales y anillos de silicona se limpian y conservan en el área asignada."
  },
  {
    room: "Quirófano 5",
    specialty: "Urología",
    scope: "RTU vesical/prostática, nefrectomías, laparoscopia urológica, litotricia",
    celadorDedicado: "Celadores de Dentro (turno de mañana)",
    accessoriesPolicy: "En los quirófanos 5 y 6 los accesorios se dejan en el mueble donde está el resto de los accesorios DENTRO de quirófano. El personal de limpieza limpia TODOS los accesorios."
  },
  {
    room: "Quirófano 6",
    specialty: "Urología",
    scope: "Cirugía endourológica, URS flexible con láser, prostatectomía radical",
    celadorDedicado: "Celadores de Dentro (turno de mañana)",
    accessoriesPolicy: "En los quirófanos 5 y 6 los accesorios se dejan en el mueble donde está el resto de los accesorios DENTRO de quirófano. El personal de limpieza limpia TODOS los accesorios."
  },
  {
    room: "Quirófano 7",
    specialty: "Traumatología",
    scope: "Prótesis total de cadera y rodilla, artroscopias de hombro en silla de playa",
    celadorDedicado: "Celadores de Dentro (turno de mañana)",
    accessoriesPolicy: "Los accesorios se dejan dentro en lugar seguro; una vez limpios por limpieza, se dejan en el mueble habilitado en el antequirófano."
  },
  {
    room: "Quirófano 8",
    specialty: "Traumatología",
    scope: "Mesa de tracción para enclavados de fémur/tibia, cirugía de columna con trineo, fracturas complejas",
    celadorDedicado: "Celadores de Dentro (turno de mañana)",
    accessoriesPolicy: "Los accesorios se dejan dentro en lugar seguro; una vez limpios por limpieza, se dejan en el mueble habilitado en el antequirófano."
  }
];

export const HUN_ROTATION_RULES = {
  description: "Rueda de turnos de mañana en Quirófano Central HUN B",
  distribution: {
    dentro: "4 personas: 3 del turno fijo de mañana + 1 del turno rotado (Quirófano 1 de Urgencias - siempre dentro)",
    fuera: "3 personas del turno fijo de mañana"
  },
  rules: [
    "Entre los celadores/as del turno fijo de mañana, se formarán 3 parejas.",
    "Las parejas rotan para estar dentro y fuera cada 3 días laborables.",
    "Las personas que son pareja nunca coinciden en el mismo grupo (uno dentro y otro fuera), salvo casos excepcionales por alta carga de trabajo.",
    "Los festivos entre semana y los fines de semana no cuentan para el cómputo de 3 días.",
    "El celador/a de urgencias estará SIEMPRE dentro.",
    "Existe un calendario oficial donde figuran las rotaciones de las parejas."
  ],
  vacationPolicy: {
    rule: "En períodos de vacaciones donde haya menos quirófanos y por lo tanto menos celadores/as y éstos sean impares, SIEMPRE debe haber UNA PERSONA MÁS DENTRO QUE FUERA.",
    tieBreaker: "Si se da el caso de que fuera están los 3 titulares del puesto, deberá entrar 'dentro' el/la que se encuentre en su primer día fuera.",
    closingMotto: "Se tendrá en cuenta lo expuesto anteriormente de que tod@s somos un equipo indistintamente del grupo donde nos encontremos desempeñando nuestra labor."
  }
};

export const FUNCIONES_CELADORES_FUERA: OfficialFunction[] = [
  {
    id: 1,
    title: "Revisión matutina de Balas de O2 y orden del bloque",
    description: "A primera hora revisar las balas de O2, las que estén en nivel rojo se cambiarán por las del almacén y las gastadas se sacan a la zona del control para que las repongan el personal de mantenimiento. Mirar si están recogidos los quirófanos. Si existe aparataje fuera de su sitio colocarlo en su lugar.",
    criticalStep: true,
    safetyNote: "Nivel rojo en manómetro = sustitución inmediata por bala con precinto verde del almacén."
  },
  {
    id: 2,
    title: "Traslado de pacientes a quirófano (Plantas, UCMA, otros servicios)",
    description: "Traer a los pacientes tanto de las plantas (tanto maternal como general) UCMA o cualquier otro servicio del HUN B exceptuando los de UCI que irá el personal 'de dentro'.",
    departmentDestination: "Plantas General / Maternal / UCMA",
    safetyNote: "Excepción estricta: Pacientes ingresados en UCI B son trasladados por celadores DE DENTRO."
  },
  {
    id: 3,
    title: "Suministro de material y aparataje externo",
    description: "Acudir a cualquier otro quirófano a por material u aparataje (excepto quirófano maternal).",
    safetyNote: "Quirófano maternal = corresponde al celador de dentro."
  },
  {
    id: 4,
    title: "Asistencia activa en el transfer",
    description: "Ayudar en el transfer tanto en la transferencia del paciente al entrar a la intervención como a su salida.",
    criticalStep: true,
    safetyNote: "Camas a la misma altura, freno activado, tabla de transfer suave evitando tirones en catéteres."
  },
  {
    id: 5,
    title: "Retorno de pacientes postoperados a URPA y UCMA",
    description: "Devolver a los pacientes tanto a la URPA como a la UCMA después de la intervención según orden médica.",
    departmentDestination: "URPA / UCMA"
  },
  {
    id: 6,
    title: "Retorno de bala de O2 y pulsioxímetro",
    description: "Devolver la bala y el pulsioxímetro a los celadores/as 'de dentro' en el transfer para la devolución a su quirófano de origen y su adecuada desinfección.",
    criticalStep: true
  },
  {
    id: 7,
    title: "Gestión de averías con Electromedicina y Mantenimiento",
    description: "Llevar material para reparar a electromedicina y mantenimiento siguiendo el protocolo existente para cada lugar. Generalmente se bajará el material junto con parte de avería impreso a no ser que se especifique lo contrario por el personal demandante del trabajo.",
    departmentDestination: "Electromedicina / Mantenimiento HUN"
  },
  {
    id: 8,
    title: "Gestión con el Servicio de Farmacia",
    description: "Acudir al servicio de farmacia para recoger o devolver productos de dicho servicio (sueros especiales, medicación hospitalaria, carros estandarizados).",
    departmentDestination: "Servicio de Farmacia HUN"
  },
  {
    id: 9,
    title: "Gestión de reciclaje y Punto Limpio",
    description: "Llevar productos de reciclaje al punto limpio del centro (pilas, tóner, contenedores de residuos clasificados).",
    departmentDestination: "Punto Limpio HUN"
  },
  {
    id: 10,
    title: "Apoyo en aprovisionamiento de material",
    description: "Acudir a otros servicios a por material u aparataje que se necesite en el bloque quirúrgico con prontitud.",
    departmentDestination: "Servicios hospitalarios HUN B"
  },
  {
    id: 11,
    title: "Envío a Anatomía Patológica y Citología",
    description: "Llevar o enviar por tubo neumático/bala (siempre que el servicio, envase o el contenido lo permita) las muestras intraoperatorias a anatomía patológica y citología.",
    departmentDestination: "Anatomía Patológica / Citología"
  },
  {
    id: 12,
    title: "Transporte de hemoderivados en Hemoterapia",
    description: "Acudir a hemoterapia a por sangre, concentrados de hematíes o plaquetas siguiendo el protocolo estricto existente para el transporte de esas sustancias con conservadora térmica y documentación de trazabilidad.",
    criticalStep: true,
    departmentDestination: "Banco de Sangre / Hemoterapia HUN"
  },
  {
    id: 13,
    title: "Diligencias propias de la categoría",
    description: "Cualquier otro requerimiento que se les solicite SIEMPRE que esté dentro de las funciones del personal celador/a del Servicio Navarro de Salud - Osasunbidea."
  },
  {
    id: 14,
    title: "Protocolo de Éxitus / Traslado al Mortuorio",
    description: "En el caso de que haya un fallecimiento, DOS de los celadores/as de fuera serán los responsables de trasladar el cadáver hasta el mortuorio según protocolo vigente en ese momento.",
    criticalStep: true,
    safetyNote: "Requiere la actuación coordinada de DOS celadores/as de fuera una vez realizado el embolsado por celador de dentro y enfermería."
  }
];

export const METODOLOGIA_CELADORES_FUERA: OfficialMethodologyStep[] = [
  {
    step: 1,
    title: "Recepción de la solicitud y traslado inicial desde planta/UCMA",
    paragraphs: [
      "La persona responsable de pedir al paciente entrega pegatina o similar con los datos del paciente, ubicación y nº de quirófano en el que se le realiza la intervención.",
      "Si el paciente se encuentra ingresado se acude a la UCMA o planta correspondiente con los datos del paciente, se pregunta al personal de planta por la documentación de la persona. Hay que asegurarse de que la documentación es la correspondiente a la persona que se lleva y de que están las pegatinas de identificación y el check list de quirófano rellenado por la enfermera/o correspondiente.",
      "Una vez en la habitación el celador/a se presenta (explicando quién es y dónde le lleva) y le pregunta al paciente el nombre y apellidos para cerciorarnos de que es la persona adecuada. Se le quita a la cama el cabecero y el triángulo de Balkan o potencia y se deja en la habitación.",
      "Una vez llegado a la puerta de quirófano se le informa a los acompañantes de cómo y dónde tienen que esperar. Dentro del mismo se le entrega la documentación a la persona del control para su verificación y cuando se dé la orden se procede a pasar al paciente a la mesa de quirófano que le corresponda."
    ],
    keyPoints: [
      "Verificación de pegatinas de identificación",
      "Checklist de quirófano cumplimentado por enfermería de planta",
      "Identificación activa verbal: preguntar nombre y apellidos en la habitación",
      "Retirada obligatoria de cabecero y triángulo de Balkan (dejar en la habitación)",
      "Información a los familiares sobre la sala de espera de quirófano",
      "Entrega de historia clínica en control para autorización de paso a transfer"
    ],
    collaborationWith: ["Enfermería de Planta/UCMA", "Administrativo/Control de Quirófano", "Acompañantes/Familia"]
  },
  {
    step: 2,
    title: "Técnica del transfer y paso a la mesa quirúrgica",
    paragraphs: [
      "Al pasar a la mesa de quirófano se pondrán las camas a la misma altura y si el paciente puede se moverá de su cama, camilla o sillón a la mesa de quirófano, en caso de no poder hacerlo por sus propios medios se le pasará con el transfer (tabla).",
      "A la salida de la intervención se procederá de la misma manera, siempre siguiendo las instrucciones del anestesista o enfermera/o."
    ],
    keyPoints: [
      "Nivelación rigurosa de alturas entre cama/camilla y mesa quirúrgica",
      "Frenos comprobados en ambos soportes",
      "Uso de tabla de transferencia para pacientes no colaboradores o encamados",
      "Protección de accesos vasculares, sondas vesicales y drenajes en el deslizamiento",
      "Seguir siempre las instrucciones del anestesista y enfermería"
    ],
    collaborationWith: ["Celador/a de Dentro", "Enfermería de Anestesia"]
  },
  {
    step: 3,
    title: "Circuito postquirúrgico y retorno de equipamiento de monitorización",
    paragraphs: [
      "Cuando el celador/a de fuera vuelva de la URPA con la bala y el pulsioxímetro se deja la bala en el transfer para que el celador/a de dentro (si está ocupado/a la lleva la misma persona que la lleva al transfer) la lleve al quirófano correspondiente para su limpieza (pulsioxímetro)."
    ],
    keyPoints: [
      "Retorno rápido de la bala de O2 y pulsioxímetro al área de transfer",
      "Coordinación ágil con el celador de dentro",
      "Limpieza y desinfección del pulsioxímetro antes del siguiente uso"
    ],
    collaborationWith: ["Personal de URPA", "Celador/a de Dentro"]
  }
];

export const FUNCIONES_CELADORES_DENTRO: OfficialFunction[] = [
  {
    id: 1,
    title: "Revisión matutina de Balas de O2 y orden interno de quirófanos",
    description: "A primera hora revisar las balas de O2, las que estén en nivel rojo se cambiarán por las del almacén y las gastadas se sacan a la zona del control para que las repongan el personal de mantenimiento. Mirar si están recogidos los quirófanos. Si existe aparataje fuera de su sitio colocarlo en su lugar.",
    criticalStep: true,
    safetyNote: "Revisión compartida para garantizar suministro ininterrumpido en todo el bloque."
  },
  {
    id: 2,
    title: "Recepción y transfer en la esclusa",
    description: "Ayudar en el transfer tanto en la transferencia del paciente al entrar a la intervención como a su salida.",
    criticalStep: true
  },
  {
    id: 3,
    title: "Traslado en mesa quirúrgica al quirófano asignado",
    description: "Trasladar a los pacientes en su mesa de operaciones correspondiente al quirófano donde le hagan la intervención de forma suave y segura.",
    criticalStep: true
  },
  {
    id: 4,
    title: "Evacuación de paciente al terminar la intervención",
    description: "Sacar de quirófano a los pacientes tras finalizar la cirugía hacia la zona de transfer para su entrega al celador de fuera con destino a URPA o UCMA.",
    criticalStep: true
  },
  {
    id: 5,
    title: "Posicionamiento quirúrgico del paciente",
    description: "Ayudar a colocar a los pacientes dentro de quirófano tal y como indique el personal del mismo. Dependiendo de la técnica habrá que poner al paciente de una postura u otra (supino, prono, litotomía, decúbito lateral, silla de playa, mesa de tracción ortopédica).",
    criticalStep: true,
    safetyNote: "Respetar la alineación anatómica, protección de nervios periféricos y zonas de presión."
  },
  {
    id: 6,
    title: "Asistencia en técnicas: Anestesia raquídea, isquemia, pintado y desinfección",
    description: "Ayudar al personal del quirófano sujetando al paciente para realizar diferentes técnicas como anestesia raquídea, isquemia, pintado o desinfección de la zona quirúrgica.",
    criticalStep: true,
    safetyNote: "Sujeción firme y tranquilizadora en punción raquídea; sujeción aséptica en elevación de extremidad para isquemia/Esmarch."
  },
  {
    id: 7,
    title: "Aparato de Rayos X (RX): Introducción en quirófano",
    description: "Introducir el aparato de RX (arco en C de fluoroscopia) dentro de quirófano cuando lo requiera la intervención (Traumatología, Urología o Urgencias).",
    criticalStep: true,
    safetyNote: "Maniobra cuidadosa para no rozar campos estériles ni mesas de instrumental."
  },
  {
    id: 8,
    title: "Aparato de Rayos X (RX): Retorno a almacén",
    description: "Devolver el aparato de RX a su sitio en el almacén una vez finalizada la intervención.",
    departmentDestination: "Almacén de Rayos X Área General V"
  },
  {
    id: 9,
    title: "Conversión de mesas quirúrgicas según especialidad",
    description: "Convertir las mesas quirúrgicas para las diferentes técnicas a las que se le vaya a someter a los pacientes (quitar o poner prolongadores, mesa de playa, perneras, trineo de prono, etc.).",
    criticalStep: true,
    safetyNote: "Asegurar el perfecto anclaje mecánico y el correcto acople al pie quirúrgico antes de colocar peso."
  },
  {
    id: 10,
    title: "Movilización de aparataje pesado y mobiliario quirúrgico",
    description: "Movilizar cualquier tipo de aparataje necesario para la intervención, tanto la base de las mesas quirúrgicas, torres de aparataje (laparoscopia, artroscopia), sillas especiales, microscopios, etc.",
    safetyNote: "Uso de ergonomía postural para evitar sobrecargas lumbares."
  },
  {
    id: 11,
    title: "Traslado especializado de pacientes de UCI (Área General V)",
    description: "Acudir al servicio de UCI para el traslado de pacientes a quirófano. Al término de la intervención se encargará de su vuelta al servicio de UCI.",
    criticalStep: true,
    departmentDestination: "UCI Área General V",
    safetyNote: "Competencia exclusiva de los celadores DE DENTRO en coordinación con personal intensivista."
  },
  {
    id: 12,
    title: "Aprovisionamiento desde Quirófano Maternal",
    description: "Acudir a por aparataje o cualquier otra cosa al quirófano maternal cuando se precise en el bloque quirúrgico general.",
    departmentDestination: "Quirófano Maternal"
  },
  {
    id: 13,
    title: "Protocolo de Éxitus: Embolsado del cadáver",
    description: "En el caso de haber un fallecimiento los celadores/as se encargarán de embolsar el cadáver con las bolsas habilitadas para esa labor con la ayuda siempre que sea necesaria del personal de enfermería del quirófano correspondiente. Una vez embolsado se le trasladará a su cama o camilla y los celadores/as de fuera se encargarán de su traslado al mortuorio según protocolo vigente.",
    criticalStep: true,
    safetyNote: "El celador de dentro realiza el embolsado con enfermería; la transferencia y traslado a mortuorio lo efectúan los 2 celadores de fuera."
  }
];

export const METODOLOGIA_CELADORES_DENTRO: OfficialMethodologyStep[] = [
  {
    step: 1,
    title: "Recepción en transfer y paso a la mesa quirúrgica",
    paragraphs: [
      "Al pasar a la mesa de quirófano se pondrán las camas a la misma altura y si el paciente puede se moverá de su cama o camilla o sillón a la mesa de quirófano, en caso de no poder hacerlo por sus propios medios se le pasará con el transfer (tabla)."
    ],
    keyPoints: [
      "Nivelación milimétrica de alturas",
      "Frenado de ambas estructuras",
      "Colaboración armónica con el celador de fuera"
    ],
    collaborationWith: ["Celador/a de Fuera"]
  },
  {
    step: 2,
    title: "Montaje de mesa en pie, despeje de carro y coordinación con anestesia",
    paragraphs: [
      "Una vez dentro de quirófano se mete la mesa quirúrgica en el pie y se procede a sacar el carro, se quita el palo de gotero y junto con el carro se saca al antequirófano asegurándose de que no molesta ni puede causar ninguna incidencia.",
      "Se pregunta a la enfermera de anestesia si necesita el brazo auxiliar para poner el brazo del paciente para poder cogerle la vía, si es así se coloca y se pregunta si hace falta colocar al paciente de alguna manera en concreto o si se le va a realizar anestesia raquídea, en caso afirmativo esperamos y si en ese mismo momento no se requiere de ninguna acción se acude a la zona del transfer para llevar al siguiente paciente o cualquier otro trabajo que se necesite."
    ],
    keyPoints: [
      "Inserción firme de la mesa en el pie quirúrgico motorizado",
      "Retirada del carro transportador y palo de gotero hacia el antequirófano (evitar obstáculos)",
      "Consulta directa a enfermera de anestesia: ¿precisa brazo auxiliar para vía venosa?",
      "Consulta sobre técnica anestésica: ¿raquídea? (sujeción del paciente en flexión anterior)",
      "Optimización del tiempo: si no se requiere acción inmediata, acudir a transfer para el siguiente caso"
    ],
    collaborationWith: ["Enfermera de Anestesia", "Médico Anestesiólogo"]
  },
  {
    step: 3,
    title: "Salida de paciente y gestión diferenciada de accesorios por quirófano",
    paragraphs: [
      "Al sacar al paciente de quirófano se preguntará si hace falta bala de O2 y mascarilla ponerla en posición 50%, en caso afirmativo se cogerá y se introduce al quirófano.",
      "Si el paciente tiene puesto cualquier tipo de accesorio después de preguntar al personal del quirófano se procederá a quitarlo y dejarlo en su sitio para que el personal de limpieza lo pueda desinfectar:",
      "- En el quirófano 1, 2, 7 y 8 los accesorios se dejan dentro de quirófano en un lugar donde no se puedan caer y provocar un accidente. Una vez limpios se dejan en el antequirófano en el mueble habilitado para ello.",
      "- En el quirófano 5 y 6 se dejan en el mueble donde están el resto de los accesorios dentro de quirófano, el personal de limpieza limpia TODOS los accesorios."
    ],
    keyPoints: [
      "Preguntar a anestesia por oxígeno al 50% con mascarilla Venturi/reservorio para el traslado",
      "Retirada ordenada de accesorios previa confirmación con el equipo quirúrgico",
      "REGLA HUN Q1, 2, 7 y 8: Dejar protegidos dentro; una vez desinfectados por limpieza -> mueble del antequirófano",
      "REGLA HUN Q5 y 6 (Urología): Se dejan en el mueble INTERNO del propio quirófano; limpieza desinfecta TODO allí"
    ],
    collaborationWith: ["Personal de Limpieza Quirúrgica", "Enfermería de Quirófano"]
  },
  {
    step: 4,
    title: "Formación continua y dominio de mesas quirúrgicas",
    paragraphs: [
      "Aprender las diferentes posiciones y mesas quirúrgicas para poder preparar las mesas y los pacientes en quirófano de forma eficiente, ergonómica y segura."
    ],
    keyPoints: [
      "Conocimiento profundo de accesorios mecánicos de cada especialidad",
      "Prevención de lesiones por presión y plexopatías",
      "Aceleración de tiempos de recambio entre intervenciones"
    ],
    collaborationWith: ["Todo el equipo del Bloque Quirúrgico"]
  }
];
