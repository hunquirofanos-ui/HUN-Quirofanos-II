import React, { useState } from 'react';
import { ShieldAlert, CheckCircle, Info, ChevronRight, User, Settings2, ImageIcon, Sparkles, Video, Play, X, AlertTriangle } from 'lucide-react';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface PositionData {
  id: string;
  name: string;
  nameEu: string;
  specialties: string;
  specialtiesEu: string;
  operatingRooms: string;
  description: string;
  descriptionEu: string;
  tableAdjustment: string;
  tableAdjustmentEu: string;
  accessoriesNeeded: string[];
  nerveRisks: {
    nerve: string;
    prevention: string;
  }[];
  celadorKeySteps: string[];
  nursingCollaborationTips: string[];
  figuresReferenced?: string[];
  videoUrl?: string;
  videoTitle?: string;
  videoWarning?: string;
}

export const POSITIONS_CATALOG: PositionData[] = [
  {
    id: 'pile_urologia',
    name: 'Decúbito Lateral con Pilé (Nefrectomías Laparoscópicas)',
    nameEu: 'Albo-etzana Pilé-arekin (Nefrektomia Laparoskopikoak)',
    specialties: 'Urología (Nefrectomías, Suprarrenalectomías, Pieloplastias)',
    specialtiesEu: 'Urologia (Nefrektomiak, Giltzurrun gainekoak, Pieloplastiak)',
    operatingRooms: 'Quirófano 5 y Quirófano 6',
    videoUrl: '/assets/aistudio/Pil__d683c7fe.mp4',
    videoTitle: 'Vídeo Oficial: Posición Pilé en Quirófano HUN B',
    description: 'Paciente en decúbito lateral con lado a operar arriba. Tripa al borde de la camilla. Ombligo alineado con el círculo de la mesa para partición abdominal (Pilé). Mesa articulada en posición Flex mediante mando SensorLine. Topes en escápulas y lumbares con hueveras.',
    descriptionEu: 'Pazientea alboz operatuko den aldea gora duela. Sabela ertzean. Zilborra mahaiko biribilarekin lerrokatuta sabel-banaketarako (Pilé). Mahaia Flex posizioan SensorLine agintearen bidez. Topak eskapula eta gerrialdean arrautzontziekin.',
    tableAdjustment: 'Comprobar que el ombligo coincide con el círculo de la mesa (FIG. 2 y 3). Poner mesa en posición Flex (Pilé) con mando Trumpf (FIG. 7 y 7 bis). Dos topes articulados en espalda con huevera (FIG. 8 y 9).',
    tableAdjustmentEu: 'Zilborra biribilarekin bat datorrela egiaztatu. Mahaia Flex (Pilé) posizioan jarri Trumpf agintearekin. Bi tope artikulatu bizkarrean arrautzontziekin.',
    accessoriesNeeded: [
      'Topes articulados con mordaza para espalda (FIG. 1)',
      'Protectores tipo huevera de espuma (FIG. 6)',
      'Protector de gel cuadriculado "chocolatina" (FIG. 5)',
      'Pernera tipo teja para brazo superior (FIG. 11)',
      'Cincha de seguridad ancha (FIG. 10)'
    ],
    nerveRisks: [
      { nerve: 'Plexo braquial y accesos venosos', prevention: 'Brazo superior en teja a altura de hombro; brazo inferior en bracero normal con velcros. Mantener vías accesibles (FIG. 11).' },
      { nerve: 'Piel y relieves óseos de espalda', prevention: 'Colocar SIEMPRE protectores de huevera en los topes articulados para evitar rojeces y úlceras (FIG. 6).' },
      { nerve: 'Miembros inferiores', prevention: 'Colocar protector de gel "chocolatina" entre ambas piernas (FIG. 5).' }
    ],
    celadorKeySteps: [
      'Punto de partida: supino. Una vez anestesiado, ombligo al círculo de la mesa (FIG. 2 y 3).',
      'Volteo coordinado a decúbito lateral con lado a operar hacia arriba (FIG. 4).',
      'Tripa al borde de la mesa; pierna inferior semiflexionada, superior extendida con chocolatina (FIG. 5).',
      'Poner mesa en pilé con botón Flex del mando SensorLine (FIG. 7 y 7 bis).',
      'Colocar topes articulados en escápulas y lumbares con hueveras sin molestar al cirujano (FIG. 8 y 9).',
      'Colocar cincha de seguridad (FIG. 10) y brazo superior en teja (FIG. 11).',
      'Regla Q5-6: Dejar accesorios limpios en el mueble INTERIOR de quirófano.'
    ],
    nursingCollaborationTips: [
      'Esperar visto bueno de anestesia antes de mover o voltear.',
      'Comprobar que los topes no invadan el campo estéril de la instrumentista.',
      'Verificar vía aérea y vías centrales totalmente libres.'
    ],
    figuresReferenced: ['FIG. 1', 'FIG. 2', 'FIG. 3', 'FIG. 4', 'FIG. 5', 'FIG. 6', 'FIG. 7', 'FIG. 8', 'FIG. 9', 'FIG. 10', 'FIG. 11']
  },
  {
    id: 'litotomia_urologia',
    name: 'Litotomía con Perneras Allen (RTU, Rezum, Botox)',
    nameEu: 'Litotomia Allen Hanka-euskarriekin (RTU, Rezum, Botox)',
    specialties: 'Urología (RTU de próstata y vejiga, Rezum, Cistoceles)',
    specialtiesEu: 'Urologia (RTU prostatikoa eta besikala, Rezum, Zistozelak)',
    operatingRooms: 'Quirófano 5 y Quirófano 6',
    videoUrl: '/assets/aistudio/Perneras_de_4_piezas_bf004810.mp4',
    videoTitle: 'Vídeo Oficial: Perneras de 4 Piezas TruSystem 7500 (Mecanismo y Cero)',
    videoWarning: 'Mecanismo de seguridad antipánico: presionar suavemente con la molleja de la mano para que el seguro quede libre y evitar caídas bruscas.',
    description: 'Decúbito supino con caderas y rodillas flexionadas, piernas en perneras Allen. Nalgas en el borde de la parte pélvica de la mesa. Calcetines de tubitón en piernas.',
    descriptionEu: 'Bizkarrez etzanda aldakak eta belaunak tolestuta, hankak Allen euskarrietan. Ipurmasailak zati pelbikoaren ertzean. Tubitón galtzerdiak hanketan.',
    tableAdjustment: 'Perneras Allen con pinza negra (FIG. 12) y rosca (FIG. 15) en zona de dos círculos (FIG. 13 y 14) o cercana al cabecero si hay prolongador. Desmontar tramo de pies tras subir piernas.',
    tableAdjustmentEu: 'Allen hanka-euskarriak pintza beltz (FIG. 12) eta torlojuarekin (FIG. 15) bi biribildun gunean (FIG. 13 eta 14). Oin-zatia kendu hankak igo ondoren.',
    accessoriesNeeded: [
      'Perneras ergonómicas Allen con botas amarillas (FIG. 12 y 16)',
      'Piezas negras de pinza con rosca manual (FIG. 15)',
      'Medias de tubitón protectoras para piernas (FIG. 16)',
      'Saco/aro colector de líquidos de RTU'
    ],
    nerveRisks: [
      { nerve: 'Nervio Ciático Poplíteo Externo (CPE)', prevention: 'Muslo en su cara interna relajado (FIG. 17). Pantorrilla en bota acolchada sin contacto metálico con el peroné.' },
      { nerve: 'Plexo Lumbosacro', prevention: 'Subir y bajar SIEMPRE ambas piernas de forma SIMULTÁNEA entre 2 personas tras preguntar a anestesia.' }
    ],
    celadorKeySteps: [
      'Acomodar nalgas al borde de la mesa tras visto bueno anestésico.',
      'Colocar calcetines de tubitón en piernas del paciente.',
      'Montar perneras en los dos círculos asegurando que los gatillos no choquen (FIG. 15).',
      'Bajar perneras para subir ambas piernas simultáneamente con enfermería.',
      'Comprobar muslos relajados en cara interna (FIG. 17).',
      'Al finalizar: poner tramo de pies antes de descender extremidades.',
      'Dejar perneras en el mueble INTERIOR de Quirófano 5-6.'
    ],
    nursingCollaborationTips: [
      'Avisar a anestesia antes de elevar o bajar extremidades.',
      'Controlar bolsas colectoras de líquido de irrigación de RTU.'
    ],
    figuresReferenced: ['FIG. 12', 'FIG. 13', 'FIG. 14', 'FIG. 15', 'FIG. 16', 'FIG. 17']
  },
  {
    id: 'silla_playa',
    name: 'Silla de Playa (Beach Chair)',
    nameEu: 'Hondartza Aulkia (Beach Chair)',
    specialties: 'Traumatología (Artroscopia de hombro, manguito rotador)',
    specialtiesEu: 'Traumatologia (Sorbaldako artroskopia, mahuka konponketa)',
    operatingRooms: 'Quirófano 7',
    videoUrl: '/assets/aistudio/Mesa_de_Playa_0672cadf.mp4',
    videoTitle: 'Vídeo Oficial: Cirugía de Hombro · Mesa de Playa (TruSystem 7500)',
    videoWarning: '¡PASO CRÍTICO MANDATORIO! Al finalizar la intervención, aflojar el casco y retirar el soporte de mentón ANTES de hacer el cero en el mando.',
    description: 'Elevación del tórax entre 45º y 60º respecto al plano horizontal con flexión de rodillas a 30º para descarga pélvica.',
    descriptionEu: 'Enborra 45º eta 60º artean goratzea plano horizontalarekiko, belaunak 30º tolestuta pelbisa deskargatzeko.',
    tableAdjustment: 'Retirar cabecero y colocar módulo de silla de playa en el pie de mesa; gajos escapulares desmontables según hombro.',
    tableAdjustmentEu: 'Buru-euskarria kendu eta hondartza-aulkiko modulua jarri mahaian; gajo eskapularrak desmuntagarriak.',
    accessoriesNeeded: [
      'Módulo de Respaldo articulado de playa',
      'Cabecero trilobular con mentonera',
      'Apoyabrazos simple para brazo no operado',
      'Cincha pélvica ancha acolchada',
      'Cojín poplíteo para flexión de rodillas'
    ],
    nerveRisks: [
      { nerve: 'Plexo Braquial contralateral', prevention: 'Apoyabrazos a menos de 90º y sin tracción cervical.' },
      { nerve: 'Médula espinal y tronco cerebral', prevention: 'Fijación cefálica rígida sin flexión extrema ni hiperextensión brusca.' },
      { nerve: 'Nervio Ciático', prevention: 'Flexión suave de rodillas para evitar tensión en isquiotibiales.' }
    ],
    celadorKeySteps: [
      'Montar el módulo en plano antes del paso del paciente.',
      'Ayudar en el transfer desde la camilla en supino estricto.',
      'Asistir en la intubación o bloqueo interescalénico.',
      'Subir el respaldo de forma suave y sincronizada a 50º asegurando la cincha.',
      'Retirar el gajo posterior del lado que se opera.',
      'Postoperatorio: Dejar módulo dentro para limpieza y tras desinfección guardar en mueble de antequirófano Q7-8.'
    ],
    nursingCollaborationTips: [
      'Confirmar lado con enfermera de anestesia antes de retirar gajo.',
      'Comprobar presión arterial durante la incorporación del tronco.',
      'Verificar campo estéril desobstruido con la enfermera instrumentista.'
    ]
  },
  {
    id: 'decubito_lateral',
    name: 'Decúbito Lateral Estricto con Soportes',
    nameEu: 'Albo-etzan Zorrotza Euskarriekin',
    specialties: 'Traumatología (Prótesis total de cadera) / Abdominal',
    specialtiesEu: 'Traumatologia (Aldakako protesi osoa) / Abdominala',
    operatingRooms: 'Quirófano 7 (PTC)',
    description: 'Paciente sobre el lado sano en ángulo estricto de 90º respecto a la mesa, sostenido por postes pélvicos púbico y sacro.',
    descriptionEu: 'Pazientea alde osasuntsuaren gainean mahaiarekiko 90º-ko angelu zorrotzean, euskarri pelbikoek finkatuta.',
    tableAdjustment: 'Mesa plana horizontal rígida con raíles limpios para fijar soportes pélvicos sacro y púbico.',
    tableAdjustmentEu: 'Mahai horizontal laua euskarri pelbikoak finkatzeko alboko errailekin.',
    accessoriesNeeded: [
      'Soportes pélvicos sacro y púbico acolchados',
      'Rodillo axilar de silicona o espuma viscoelástica',
      'Apoyabrazos doble de dos niveles',
      'Almohadón intercrural grande entre miembros inferiores',
      'Cincha de fijación troncal'
    ],
    nerveRisks: [
      { nerve: 'Plexo Braquial declive', prevention: 'Rodillo axilar obligatorio colocado a 5 cm bajo el hueco axilar del lado apoyado.' },
      { nerve: 'Nervio Peroneo común inferior', prevention: 'Almohadillado estricto bajo el maléolo y cabeza de peroné del miembro apoyado.' },
      { nerve: 'Pabellón auricular y órbita', prevention: 'Comprobar oreja y ojo declive libres de presión directa.' }
    ],
    celadorKeySteps: [
      'Asistir al anestesiólogo en la punción raquídea o intubación.',
      'Volteo coordinado a la de 3 personas liderado por la persona a la cabeza.',
      'Colocar de inmediato el rodillo axilar torácico.',
      'Fijar firmemente los soportes pélvicos anterior y posterior.',
      'Colocar almohadón intercrural entre las piernas.',
      'Al terminar: retirada de soportes y giro suave a decúbito supino.',
      'Gestión de accesorios: mueble de antequirófano Q7-8 tras desinfección.'
    ],
    nursingCollaborationTips: [
      'Comprobar pulsos radiales en el brazo del lado declive tras colocar el rodillo axilar.',
      'Verificar rigidez de las mordazas de los postes antes del pintado del campo.',
      'Mantener abducción de la extremidad operada al volver a supino.'
    ]
  },
  {
    id: 'mesa_traccion',
    name: 'Mesa de Tracción Ortopédica para Fractura',
    nameEu: 'Trakzio Mahai Ortopedikoa Hausturarako',
    specialties: 'Traumatología (Enclavado intramedular de fémur, cadera)',
    specialtiesEu: 'Traumatologia (Femurreko iltzatzea, aldaka)',
    operatingRooms: 'Quirófano 8',
    videoUrl: '/assets/aistudio/Carro_de_Tracci_n_Conexi_n_84cab43c.mp4',
    videoTitle: 'Vídeo Oficial: Carro de Tracción (Pelvistato) · Conexión y Montaje',
    description: 'Decúbito supino con poste perineal central, bota de tracción mecánica en pierna fracturada y pernera elevada en pierna sana.',
    descriptionEu: 'Bizkarrez etzanda erdiko perineo-zutoinarekin, trakzio-bota hankafektatuan eta hanka osasuntsua goratuta.',
    tableAdjustment: 'Retirar tableros inferiores de pies; ensamblar barras de tracción mecánica y poste perineal central.',
    tableAdjustmentEu: 'Oin-oholak kendu; trakzio-barrak eta erdiko perineo-zutoina muntatu.',
    accessoriesNeeded: [
      'Poste perineal central con funda acolchada cilíndrica',
      'Bota de tracción ortopédica acolchada',
      'Pernera tipo Goepel para pierna contralateral sana',
      'Arco en C de Rayos X (fluoroscopia móvil)',
      'Delantales plomados para el personal'
    ],
    nerveRisks: [
      { nerve: 'Nervio Pudendo', prevention: 'Acolchado grueso del poste central; no aplicar tracción excesiva continuada.' },
      { nerve: 'Nervio Ciático Poplíteo en pierna sana', prevention: 'Pernera Goepel bien acolchada sin contacto metálico con el peroné.' },
      { nerve: 'Tendón de Aquiles y piel maleolar', prevention: 'Bota de tracción bien almohadillada con venda de algodón previa.' }
    ],
    celadorKeySteps: [
      'Ensamblar barras de tracción y poste perineal en Q8.',
      'Ayudar en transfer con tracción manual cuidadosa de la fractura.',
      'Colocar bota de tracción en miembro afecto y pierna sana en pernera.',
      'Introducir el aparato de Rayos X (Arco en C) desde su almacén al quirófano.',
      'Al terminar: soltar tracción, retirar poste y bota, recolocar tableros de mesa.',
      'Devolver el aparato de RX a su almacén específico de Área General V.',
      'Depositar accesorios limpios en el mueble del antequirófano Q7-8.'
    ],
    nursingCollaborationTips: [
      'Cubrir arco en C con funda estéril antes de pasarlo al campo quirúrgico.',
      'Ajustar la rotación del pie bajo indicación estricta del traumatólogo.',
      'Control de constantes al iniciar la tracción longitudinal.'
    ]
  },
  {
    id: 'posicion_rose',
    name: 'Posición de Rose / Hiperextensión Cervical',
    nameEu: 'Rose Posizioa / Lepoaren Hiperextentsioa',
    specialties: 'Otorrinolaringología (Amigdalectomía, laringoscopia)',
    specialtiesEu: 'Otorrinolaringologia (Amigdalektomia, laringoskopia)',
    operatingRooms: 'Quirófano 2',
    description: 'Decúbito supino con rodillo interescapular que eleva el tórax y deja caer la cabeza en hiperextensión suave.',
    descriptionEu: 'Bizkarrez etzanda eskapula arteko arrabolarekin, toraxa goratuz eta burua atzerantz erortzen utziz.',
    tableAdjustment: 'Mesa quirúrgica horizontal estándar con rodillo bajo hombros y anillo de gel bajo occipucio.',
    tableAdjustmentEu: 'Mahai horizontal estandarra sorbaldapeko arrabolarekin eta gel-eraztunarekin buruan.',
    accessoriesNeeded: [
      'Rodillo interescapular viscoelástico',
      'Anillo cefálico de gel de silicona',
      'Barra / mesa de Mayo para suspensión de abrebocas',
      'Sábana de sujeción para brazos adosados al tronco'
    ],
    nerveRisks: [
      { nerve: 'Columna cervical y plexo braquial', prevention: 'Evitar hiperextensión extrema forzada; descenso controlado de la cabeza.' },
      { nerve: 'Labios, encías y dientes', prevention: 'Comprobar protección dental antes de suspender el abrebocas.' }
    ],
    celadorKeySteps: [
      'Colocar rodillo interescapular centrado entre ambas escápulas.',
      'Asistir en intubación y fijación del tubo endotraqueal anillado.',
      'Fijar brazos adosados al tronco para dejar libre el cabecero al cirujano.',
      'Montar puente de Mayo para suspensión del abrebocas.',
      'Al terminar: retirar rodillo y colocar cabeza en posición neutra para despertar.',
      'Accesorios limpios al mueble del antequirófano Q2.'
    ],
    nursingCollaborationTips: [
      'Asegurar que el tubo endotraqueal no se acode ni traccione.',
      'Vigilar protección ocular con pomada y apósito protector.',
      'Tener listo aspirador de secreciones y pinzas de amígdalas.'
    ]
  }
];

export const PositionInteractiveViewer: React.FC<{ nightMode: boolean; language: Language }> = ({ nightMode, language }) => {
  const t = TRANSLATIONS[language];
  const [selectedPosId, setSelectedPosId] = useState<string>('pile_urologia');
  const [selectedVideoModal, setSelectedVideoModal] = useState<{ title: string; url: string; warning?: string } | null>(null);
  const currentPos = POSITIONS_CATALOG.find(p => p.id === selectedPosId) || POSITIONS_CATALOG[0];

  return (
    <div className="space-y-6">
      {/* Position selector strip */}
      <div className={`p-4 rounded-xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'es' ? 'Catálogo de Posiciones Quirúrgicas y Preparación de Mesas' : 'Posizio Kirurgikoen Katalogoa eta Mahaien Prestaketa'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'es' 
                ? 'Protocolos de seguridad, riesgos neurológicos y montaje mecánico para celadores y enfermería' 
                : 'Segurtasun protokoloak, arrisku neurologikoak eta muntaia mekanikoa zeladore eta erizaintzarentzat'}
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 self-start sm:self-auto">
            {POSITIONS_CATALOG.length} {language === 'es' ? 'Posiciones Clave HUN B' : 'Giltzarrizko Posizio NUO B'}
          </span>
        </div>

        {/* Horizontal tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {POSITIONS_CATALOG.map(pos => {
            const isSelected = pos.id === selectedPosId;
            return (
              <button
                key={pos.id}
                onClick={() => setSelectedPosId(pos.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : nightMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{language === 'es' ? pos.name : pos.nameEu}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected position main view */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left detail card */}
        <div className="lg:col-span-7 space-y-5">
          <div className={`p-6 rounded-2xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {currentPos.operatingRooms}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {language === 'es' ? currentPos.name : currentPos.nameEu}
                </h3>
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {language === 'es' ? currentPos.specialties : currentPos.specialtiesEu}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              {language === 'es' ? currentPos.description : currentPos.descriptionEu}
            </p>

            {/* Video Banner if available */}
            {currentPos.videoUrl && (
              <div className="mt-3.5 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-2xs">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Video className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-red-950 dark:text-red-200 block truncate">
                      {currentPos.videoTitle || (language === 'es' ? 'Vídeo Oficial Demostrativo' : 'Bideo Erakusgarri Ofiziala')}
                    </span>
                    <span className="text-[10px] text-red-700 dark:text-red-400">
                      TruSystem 7500 · Hospital Universitario de Navarra
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideoModal({
                    title: currentPos.videoTitle || (language === 'es' ? currentPos.name : currentPos.nameEu),
                    url: currentPos.videoUrl!,
                    warning: currentPos.videoWarning
                  })}
                  className="px-3 py-1.5 text-xs font-bold rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-1.5 shadow-2xs shrink-0 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'es' ? 'Ver Vídeo' : 'Ikusi Bideoa'}</span>
                </button>
              </div>
            )}

            {/* Figures Referenced */}
            {currentPos.figuresReferenced && (
              <div className="mt-3 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 flex items-center gap-2">
                <span className="text-xs font-bold text-blue-900 dark:text-blue-300">
                  {language === 'es' ? 'Figuras en documento oficial Urología:' : 'Urologia dokumentuko irudiak:'}
                </span>
                <div className="flex flex-wrap gap-1">
                  {currentPos.figuresReferenced.map(fig => (
                    <span key={fig} className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-blue-600 text-white">
                      {fig}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Table adjustment note */}
            <div className="mt-4 p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
              <div className="flex items-start gap-2.5">
                <Settings2 className="w-4 h-4 text-blue-700 dark:text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300">
                    {t.tableAdjustmentTitle}
                  </h4>
                  <p className="text-xs text-blue-800 dark:text-blue-300/90 mt-0.5">
                    {language === 'es' ? currentPos.tableAdjustment : currentPos.tableAdjustmentEu}
                  </p>
                </div>
              </div>
            </div>

            {/* Celador Step by step */}
            <div className="mt-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>{t.celadorKeyStepsTitle}</span>
              </h4>
              <div className="space-y-1.5">
                {currentPos.celadorKeySteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nursing collaboration */}
            <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.nursingTipsTitle}</span>
              </h4>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                {currentPos.nursingCollaborationTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right side: Schematic diagram & Neurological risks */}
        <div className="lg:col-span-5 space-y-5">
          {/* Schematic visual box */}
          <div className={`p-5 rounded-2xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              {language === 'es' ? 'Esquema de Distribución & Zonas de Carga' : 'Karga Guneen eta Banaketaren Eskema'}
            </h4>

            {/* SVG Interactive Diagram */}
            <div className="h-52 w-full rounded-xl bg-slate-950 flex items-center justify-center p-3 relative overflow-hidden border border-slate-800">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

              {selectedPosId === 'pile_urologia' && (
                <svg viewBox="0 0 320 180" className="w-full h-full text-purple-400">
                  <rect x="130" y="145" width="60" height="25" fill="#334155" rx="3" />
                  <rect x="150" y="115" width="20" height="30" fill="#475569" />
                  {/* Table with Pilé / Flex angle */}
                  <line x1="50" y1="125" x2="160" y2="105" stroke="#9333ea" strokeWidth="6" strokeLinecap="round" />
                  <line x1="160" y1="105" x2="270" y2="125" stroke="#9333ea" strokeWidth="6" strokeLinecap="round" />
                  {/* Navel circle */}
                  <circle cx="160" cy="105" r="7" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  {/* Body in lateral with Pilé */}
                  <ellipse cx="140" cy="95" rx="50" ry="14" fill="#a855f7" opacity="0.6" />
                  {/* Back articulated posts with hueveras */}
                  <rect x="120" y="75" width="10" height="28" fill="#e2e8f0" rx="2" />
                  <rect x="117" y="73" width="16" height="32" fill="#cbd5e1" opacity="0.3" rx="3" />
                  <rect x="180" y="80" width="10" height="28" fill="#e2e8f0" rx="2" />
                  <rect x="177" y="78" width="16" height="32" fill="#cbd5e1" opacity="0.3" rx="3" />
                  {/* Arm in teja */}
                  <path d="M 120 75 Q 140 60 170 65" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                  {/* Chocolatina gel */}
                  <rect x="210" y="115" width="20" height="8" fill="#0284c7" rx="2" />
                  <text x="135" y="125" fill="#facc15" fontSize="8" fontWeight="bold">Ombligo en Círculo (FIG. 2)</text>
                  <text x="75" y="70" fill="#c084fc" fontSize="8">Topes + Huevera (FIG. 8)</text>
                  <text x="180" y="60" fill="#38bdf8" fontSize="8">Brazo en teja (FIG. 11)</text>
                  <text x="200" y="140" fill="#38bdf8" fontSize="8">Chocolatina (FIG. 5)</text>
                </svg>
              )}

              {selectedPosId === 'litotomia_urologia' && (
                <svg viewBox="0 0 320 180" className="w-full h-full text-purple-400">
                  <rect x="130" y="145" width="60" height="25" fill="#334155" rx="3" />
                  <rect x="150" y="115" width="20" height="30" fill="#475569" />
                  <line x1="60" y1="115" x2="180" y2="115" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="45" cy="112" r="12" fill="#c084fc" />
                  {/* Allen boots and clamps */}
                  <line x1="175" y1="115" x2="175" y2="55" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
                  <line x1="175" y1="55" x2="230" y2="55" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
                  {/* Yellow Allen boots */}
                  <rect x="220" y="42" width="22" height="26" fill="#eab308" rx="4" />
                  {/* Black clamp with rosca */}
                  <circle cx="175" cy="115" r="5" fill="#0f172a" stroke="#94a3b8" />
                  <path d="M 180 120 L 195 150 L 165 150 Z" fill="#7c3aed" opacity="0.5" />
                  <text x="180" y="38" fill="#eab308" fontSize="9" fontWeight="bold">Bota Allen (FIG. 12)</text>
                  <text x="120" y="135" fill="#f87171" fontSize="9">Nalgas al borde</text>
                  <text x="190" y="145" fill="#c084fc" fontSize="9">Saco RTU</text>
                </svg>
              )}

              {selectedPosId === 'silla_playa' && (
                <svg viewBox="0 0 320 180" className="w-full h-full text-blue-400">
                  <rect x="130" y="145" width="60" height="25" fill="#334155" rx="3" />
                  <rect x="150" y="115" width="20" height="30" fill="#475569" />
                  <line x1="160" y1="115" x2="230" y2="125" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                  <line x1="230" y1="125" x2="270" y2="140" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                  <line x1="160" y1="115" x2="100" y2="50" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="85" cy="35" r="14" fill="#3b82f6" />
                  <rect x="68" y="24" width="8" height="22" fill="#e2e8f0" rx="2" />
                  <path d="M 120 75 Q 140 85 170 85" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                  <text x="110" y="110" fill="#60a5fa" fontSize="10" fontWeight="bold">50º-60º</text>
                  <text x="50" y="20" fill="#f87171" fontSize="9">Cabecero rígido</text>
                  <text x="180" y="80" fill="#38bdf8" fontSize="9">Apoyabrazos &lt;90º</text>
                </svg>
              )}

              {selectedPosId === 'decubito_lateral' && (
                <svg viewBox="0 0 320 180" className="w-full h-full text-amber-400">
                  <rect x="130" y="145" width="60" height="25" fill="#334155" rx="3" />
                  <rect x="150" y="115" width="20" height="30" fill="#475569" />
                  <line x1="50" y1="115" x2="270" y2="115" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                  <ellipse cx="140" cy="100" rx="60" ry="14" fill="#d97706" opacity="0.7" />
                  <circle cx="65" cy="98" r="13" fill="#f59e0b" />
                  <ellipse cx="110" cy="110" rx="8" ry="5" fill="#38bdf8" />
                  <rect x="160" y="80" width="8" height="35" fill="#e2e8f0" rx="2" />
                  <rect x="175" y="80" width="8" height="35" fill="#e2e8f0" rx="2" />
                  <text x="75" y="130" fill="#38bdf8" fontSize="9">Rodillo Axilar</text>
                  <text x="150" y="70" fill="#fbbf24" fontSize="9">Soportes pélvicos 90º</text>
                </svg>
              )}

              {selectedPosId === 'mesa_traccion' && (
                <svg viewBox="0 0 320 180" className="w-full h-full text-orange-400">
                  <rect x="90" y="125" width="40" height="40" fill="#334155" />
                  <line x1="40" y1="110" x2="130" y2="110" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="30" cy="108" r="12" fill="#ea580c" />
                  <rect x="130" y="85" width="12" height="35" fill="#ef4444" rx="4" />
                  <line x1="135" y1="105" x2="260" y2="110" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
                  <rect x="255" y="100" width="20" height="25" fill="#cbd5e1" rx="3" />
                  <text x="110" y="75" fill="#ef4444" fontSize="9">Poste perineal</text>
                  <text x="235" y="90" fill="#f97316" fontSize="9">Bota tracción</text>
                </svg>
              )}

              {selectedPosId === 'posicion_rose' && (
                <svg viewBox="0 0 320 180" className="w-full h-full text-sky-400">
                  <rect x="130" y="145" width="60" height="25" fill="#334155" rx="3" />
                  <rect x="150" y="115" width="20" height="30" fill="#475569" />
                  <line x1="40" y1="120" x2="280" y2="120" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                  <ellipse cx="85" cy="115" rx="10" ry="7" fill="#0284c7" />
                  <line x1="85" y1="110" x2="250" y2="118" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="55" cy="122" r="13" fill="#0ea5e9" />
                  <rect x="42" y="128" width="26" height="6" fill="#38bdf8" rx="3" />
                  <text x="75" y="95" fill="#0284c7" fontSize="9">Rodillo interescapular</text>
                  <text x="25" y="150" fill="#38bdf8" fontSize="9">Anillo gel</text>
                </svg>
              )}
            </div>

            {/* Accessories checklist for this position */}
            <div className="mt-4 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {t.requiredAccessoriesTitle}:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {currentPos.accessoriesNeeded.map((acc, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {acc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Neurological and anatomical risks */}
          <div className={`p-5 rounded-2xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {language === 'es' ? 'Prevención de Riesgos Neurológicos & Isquémicos' : 'Arrisku Neurologiko eta Iskemikoen Prebentzioa'}
              </h4>
            </div>

            <div className="space-y-2.5">
              {currentPos.nerveRisks.map((risk, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/50">
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-300 block">
                    {risk.nerve}
                  </span>
                  <p className="text-xs text-amber-800 dark:text-amber-400 mt-0.5">
                    {risk.prevention}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="px-4 py-3 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-md bg-red-600 text-white flex items-center justify-center shrink-0">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
                <h4 className="text-sm font-bold text-white truncate">
                  {selectedVideoModal.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedVideoModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0 ml-2"
                title="Cerrar vídeo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="bg-black flex items-center justify-center p-1 sm:p-3 overflow-hidden">
              <video
                src={selectedVideoModal.url}
                controls
                autoPlay
                playsInline
                className="max-h-[60vh] max-w-full rounded-lg shadow-inner object-contain"
              >
                Su navegador no soporta reproducción de vídeo HTML5.
              </video>
            </div>

            {selectedVideoModal.warning && (
              <div className="p-3 bg-amber-950/70 border-t border-amber-800/60 flex items-start gap-2.5 text-xs text-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-snug">{selectedVideoModal.warning}</p>
              </div>
            )}

            <div className="px-4 py-2.5 bg-slate-800/90 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                TruSystem 7500 · HUN Área General V
              </span>
              <button
                onClick={() => setSelectedVideoModal(null)}
                className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-medium transition-colors"
              >
                {language === 'es' ? 'Cerrar' : 'Itxi'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
