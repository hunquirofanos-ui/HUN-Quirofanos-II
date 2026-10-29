/**
 * Sistema de Rueda de Turnos de Parejas - HUN Quirófano Central II & Urgencias II (Área General V)
 * Reglas oficiales:
 * - 3 Parejas fijas del turno de mañana (6 personas)
 * - 1 Celador/a de Urgencias rotado (SIEMPRE DENTRO)
 * - Rotación dentro / fuera cada 3 días laborables (fines de semana y festivos no computan)
 * - Los miembros de una pareja nunca coinciden en el mismo grupo
 * - Período de vacaciones con personal impar: siempre 1 persona más dentro que fuera
 * - Si están los 3 titulares fuera: entra dentro el/la que esté en su primer día fuera
 */

export interface StaffPair {
  id: number;
  name: string;
  memberA: string; // Inicialmente asignado a grupo base A
  memberB: string; // Inicialmente asignado a grupo base B
}

export interface ShiftState {
  date: string;
  isWeekend: boolean;
  isHoliday: boolean;
  cycleDay: 1 | 2 | 3;
  cycleBlockIndex: number;
  dentroTeam: {
    urgencias: string;
    fijoManana: string[];
  };
  fueraTeam: {
    fijoManana: string[];
  };
  vacationAdjustmentApplied?: boolean;
  vacationNotes?: string;
}

export const DEFAULT_PAIRS: StaffPair[] = [
  { id: 1, name: "Pareja 1", memberA: "Mikel Aranguren", memberB: "Laura Goñi" },
  { id: 2, name: "Pareja 2", memberA: "Iñigo Elizalde", memberB: "Maite Oteiza" },
  { id: 3, name: "Pareja 3", memberA: "Javier Beaumont", memberB: "Amaia Zabaleta" }
];

export const DEFAULT_URGENCIAS_STAFF = "Patxi Irujo (Rotado Urgencias Q1)";

// Reference anchor: 2026-10-05 (Monday) = Cycle Block 0, Day 1
const ANCHOR_DATE = new Date(2026, 9, 5); // Month is 0-indexed: 9 = October

/**
 * Counts working days between two dates (excluding Saturday & Sunday)
 */
export function getWorkingDaysDifference(startDate: Date, targetDate: Date): number {
  let count = 0;
  const cur = new Date(startDate);
  cur.setHours(0, 0, 0, 0);
  
  const end = new Date(targetDate);
  end.setHours(0, 0, 0, 0);

  const direction = cur <= end ? 1 : -1;
  
  while (cur.getTime() !== end.getTime()) {
    const dayOfWeek = cur.getDay(); // 0 is Sunday, 6 is Saturday
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count += direction;
    }
    cur.setDate(cur.getDate() + direction);
  }
  
  return count;
}

/**
 * Computes shift distribution for a given date
 */
export function calculateShiftForDate(
  date: Date,
  pairs: StaffPair[] = DEFAULT_PAIRS,
  urgenciasStaff: string = DEFAULT_URGENCIAS_STAFF,
  vacationMode: boolean = false,
  absentCount: number = 1
): ShiftState {
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  // Working day offset from anchor
  const workingDays = getWorkingDaysDifference(ANCHOR_DATE, date);
  
  // Normalize positive modulo
  const modulo3 = ((workingDays % 3) + 3) % 3; // 0, 1, 2
  const cycleDay = (modulo3 + 1) as 1 | 2 | 3; // 1, 2, 3
  
  // Cycle block index: changes every 3 working days
  const cycleBlockIndex = Math.floor(workingDays / 3);
  
  // Even block: Member A is DENTRO, Member B is FUERA
  // Odd block: Member B is DENTRO, Member A is FUERA
  const isEvenBlock = Math.abs(cycleBlockIndex) % 2 === 0;

  let dentroFijo: string[] = [];
  let fueraFijo: string[] = [];

  pairs.forEach(pair => {
    if (isEvenBlock) {
      dentroFijo.push(pair.memberA);
      fueraFijo.push(pair.memberB);
    } else {
      dentroFijo.push(pair.memberB);
      fueraFijo.push(pair.memberA);
    }
  });

  let vacationAdjustmentApplied = false;
  let vacationNotes = "";

  // Vacation rules
  if (vacationMode && absentCount > 0) {
    const totalFijos = dentroFijo.length + fueraFijo.length - absentCount;
    if (totalFijos % 2 !== 0) { // impar
      // Regla HUN B: siempre 1 persona más dentro que fuera
      // Si fuera están los 3 titulares, pasa dentro el que esté en su primer día fuera
      if (cycleDay === 1 && fueraFijo.length >= 3) {
        const movedMember = fueraFijo.shift();
        if (movedMember) {
          dentroFijo.push(movedMember);
          vacationAdjustmentApplied = true;
          vacationNotes = `Ajuste vacaciones HUN B: Se incorpora ${movedMember} (en su 1er día de fuera) al grupo DENTRO para garantizar que haya más personas dentro que fuera.`;
        }
      }
    }
  }

  const dateStr = date.toISOString().split('T')[0];

  return {
    date: dateStr,
    isWeekend,
    isHoliday: false,
    cycleDay,
    cycleBlockIndex,
    dentroTeam: {
      urgencias: urgenciasStaff,
      fijoManana: dentroFijo
    },
    fueraTeam: {
      fijoManana: fueraFijo
    },
    vacationAdjustmentApplied,
    vacationNotes
  };
}
