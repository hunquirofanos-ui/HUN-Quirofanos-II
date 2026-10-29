/**
 * Types for Quirófano Central II & Quirófano de Urgencias II - Hospital Universitario de Navarra (Área General V)
 * Protocolos de Celadores y Colaboración con Enfermería
 * Euskaraz eta Gaztelaniaz (Bilingüe ES / EU)
 */

export type Language = 'es' | 'eu';

export type SpecialtyId = 'urgencias' | 'otorrino' | 'oftalmologia' | 'urologia' | 'traumatologia';

export interface Specialty {
  id: SpecialtyId;
  name: string;
  nameEu?: string;
  shortName: string;
  shortNameEu?: string;
  operatingRooms: string[];
  description: string;
  descriptionEu?: string;
  iconName: string;
  accentColor: string;
  accessoriesDestination: 'antequirofano_limpio' | 'mueble_interior';
}

export type SurgicalPositionType = 
  | 'decubito_supino'
  | 'decubito_prono'
  | 'litotomia'
  | 'silla_de_playa'
  | 'decubito_lateral'
  | 'decubito_lateral_pile'
  | 'posicion_urs'
  | 'posicion_nlp'
  | 'trendelenburg_topes'
  | 'mesa_traccion'
  | 'posicion_rose';

export interface PositionDetails {
  name: string;
  nameEu?: string;
  code: SurgicalPositionType;
  description: string;
  descriptionEu?: string;
  pointsOfAttention: string[];
  pointsOfAttentionEu?: string[];
  anatomicalProtection: string[];
  anatomicalProtectionEu?: string[];
  svgIllustrationType: string;
  figuresReferenced?: string[]; // e.g. ["FIG. 1", "FIG. 2", "FIG. 3"]
}

export interface AccessoryItem {
  id: string;
  name: string;
  nameEu?: string;
  category: 'mesa' | 'apoyo_brazo' | 'perneras' | 'sujecion' | 'isquemia' | 'rx_escopia' | 'especial';
  description: string;
  placementGuide: string;
  cleaningDestinationNote: string;
  figureRef?: string;
}

export interface SurgeryProtocol {
  id: string;
  name: string;
  nameEu?: string;
  specialtyId: SpecialtyId;
  operatingRoom: string;
  estimatedDuration: string;
  summary: string;
  summaryEu?: string;
  position: PositionDetails;
  tableSetup: {
    configuration: string;
    headBoardPosition: 'estandar' | 'invertida' | 'retirada' | 'cabecero_oftalmologico' | 'corona_orl';
    footBoardPosition: 'estandar' | 'retirado' | 'perneras_acopladas' | 'prolongador';
    tableTiltNotes: string;
    transferNotes: string;
  };
  requiredAccessories: AccessoryItem[];
  celadorDentroActions: string[];
  celadorFueraActions: string[];
  nursingCollaboration: {
    anesthesiaCoordination: string[];
    scrubNurseCoordination: string[];
    positioningSafetyChecks: string[];
  };
  postOpAccessoryHandling: {
    cleaningLocation: string;
    destinationRule: string;
  };
}

export interface PairRotation {
  pairId: 'pareja_1' | 'pareja_2' | 'pareja_3';
  pairName: string;
  memberInside: string;
  memberOutside: string;
  dayInCycle: 1 | 2 | 3;
}

export interface PortfolioRecord {
  id: string;
  date: string;
  specialty: SpecialtyId;
  surgeryName: string;
  operatingRoom: string;
  role: 'dentro' | 'fuera';
  patientTransferDone: boolean;
  tableConverted: boolean;
  notes: string;
  nursingCollaborator?: string;
  verified: boolean;
}
