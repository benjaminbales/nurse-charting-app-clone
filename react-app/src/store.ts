import { create } from 'zustand';

export interface Patient {
  id: string;
  name: string;
  mrn: string; // Medical Record Number? "I14" in screenshot
  location: string; // "SN11"
  phone: string;
  visitDate: string;
  visitNumber: number;
  isOverdue: boolean;
}

export interface AppState {
  patients: Patient[];
  selectedPatientId: string | null;
  selectPatient: (id: string) => void;
  
  // Form States (Simplified for demo)
  mileage: { start: string; end: string; total: string; driveTime: string };
  setMileage: (data: Partial<AppState['mileage']>) => void;
  
  visitActions: Record<string, boolean>;
  toggleVisitAction: (action: string) => void;
}

export const useStore = create<AppState>((set) => ({
  patients: [
    {
      id: '1',
      name: 'POOLE, JIMMY A',
      mrn: 'I14',
      location: 'SN11',
      phone: '(229)291-8020',
      visitDate: '2/25',
      visitNumber: 3,
      isOverdue: true,
    },
    {
      id: '2',
      name: 'LOCKE, JOSEPH W',
      mrn: 'I14',
      location: 'SN11',
      phone: '(555)123-4567',
      visitDate: '2/25',
      visitNumber: 1,
      isOverdue: true,
    },
  ],
  selectedPatientId: null,
  selectPatient: (id) => set({ selectedPatientId: id }),

  mileage: { start: '', end: '', total: '0', driveTime: '20' },
  setMileage: (data) => set((state) => ({ mileage: { ...state.mileage, ...data } })),

  visitActions: {
    'Mileage/Drive Time': true,
    'Demographics': true,
    'Vital Signs & Measures': true,
    'Physical Assessment': false,
    'Patient Goals': false,
    'Interventions/Goals': true,
    'New Order': false,
    'Integumentary Command Center': false,
    'Order Supplies': false,
    'Supplies Delivered': false,
    'Aide Care Plan': false,
  },
  toggleVisitAction: (action) =>
    set((state) => ({
      visitActions: {
        ...state.visitActions,
        [action]: !state.visitActions[action],
      },
    })),
}));

