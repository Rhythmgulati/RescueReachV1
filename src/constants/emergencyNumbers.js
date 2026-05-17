export const EMERGENCY_NUMBERS = {
  ambulance: '108',
  police: '100',
  fire: '101',
  healthWorker: '104',
  localAmbulance: '102',
  disaster: '1077',
  womenHelpline: '1091',
  childHelpline: '1098',
};

export const CONTACTS = [
  {
    id: 'police',
    title: 'Police Station',
    subtitle: 'Control Room',
    phone: EMERGENCY_NUMBERS.police,
    mapQuery: 'police station',
    icon: '👮',
  },
  {
    id: 'hospital',
    title: 'Govt. Hospital',
    subtitle: 'District Hospital',
    phone: EMERGENCY_NUMBERS.ambulance,
    mapQuery: 'government hospital',
    icon: '🏥',
  },
  {
    id: 'fire',
    title: 'Fire & Rescue',
    subtitle: 'Fire Station',
    phone: EMERGENCY_NUMBERS.fire,
    mapQuery: 'fire station',
    icon: '🔥',
  },
  {
    id: 'health',
    title: 'Health Worker',
    subtitle: 'ASHA / ANM',
    phone: EMERGENCY_NUMBERS.healthWorker,
    mapQuery: 'primary health center',
    icon: '👩‍⚕️',
  },
  {
    id: 'localAmbulance',
    title: 'Local Ambulance',
    subtitle: 'Private Driver',
    phone: EMERGENCY_NUMBERS.localAmbulance,
    mapQuery: 'ambulance service',
    icon: '🚑',
  },
];