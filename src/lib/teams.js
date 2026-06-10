// Datos estáticos de los 30 equipos NBA
export const teams = [
  // CONFERENCIA ESTE - ATLÁNTICO
  { id: 'BOS', name: 'Boston Celtics', city: 'Boston', conference: 'Este', division: 'Atlántico', color: '#007A33', secondary: '#BA9653' },
  { id: 'BKN', name: 'Brooklyn Nets', city: 'Brooklyn', conference: 'Este', division: 'Atlántico', color: '#000000', secondary: '#FFFFFF' },
  { id: 'NYK', name: 'New York Knicks', city: 'Nueva York', conference: 'Este', division: 'Atlántico', color: '#006BB6', secondary: '#F58426' },
  { id: 'PHI', name: 'Philadelphia 76ers', city: 'Filadelfia', conference: 'Este', division: 'Atlántico', color: '#006BB6', secondary: '#ED174C' },
  { id: 'TOR', name: 'Toronto Raptors', city: 'Toronto', conference: 'Este', division: 'Atlántico', color: '#CE1141', secondary: '#000000' },
  // CONFERENCIA ESTE - CENTRAL
  { id: 'CHI', name: 'Chicago Bulls', city: 'Chicago', conference: 'Este', division: 'Central', color: '#CE1141', secondary: '#000000' },
  { id: 'CLE', name: 'Cleveland Cavaliers', city: 'Cleveland', conference: 'Este', division: 'Central', color: '#860038', secondary: '#FDBB30' },
  { id: 'DET', name: 'Detroit Pistons', city: 'Detroit', conference: 'Este', division: 'Central', color: '#C8102E', secondary: '#1D42BA' },
  { id: 'IND', name: 'Indiana Pacers', city: 'Indiana', conference: 'Este', division: 'Central', color: '#002D62', secondary: '#FDBB30' },
  { id: 'MIL', name: 'Milwaukee Bucks', city: 'Milwaukee', conference: 'Este', division: 'Central', color: '#00471B', secondary: '#EEE1C6' },
  // CONFERENCIA ESTE - SURESTE
  { id: 'ATL', name: 'Atlanta Hawks', city: 'Atlanta', conference: 'Este', division: 'Sureste', color: '#E03A3E', secondary: '#C1D32F' },
  { id: 'CHA', name: 'Charlotte Hornets', city: 'Charlotte', conference: 'Este', division: 'Sureste', color: '#1D1160', secondary: '#00788C' },
  { id: 'MIA', name: 'Miami Heat', city: 'Miami', conference: 'Este', division: 'Sureste', color: '#98002E', secondary: '#F9A01B' },
  { id: 'ORL', name: 'Orlando Magic', city: 'Orlando', conference: 'Este', division: 'Sureste', color: '#0077C0', secondary: '#C4CED4' },
  { id: 'WAS', name: 'Washington Wizards', city: 'Washington', conference: 'Este', division: 'Sureste', color: '#002B5C', secondary: '#E31837' },
  // CONFERENCIA OESTE - NOROESTE
  { id: 'DEN', name: 'Denver Nuggets', city: 'Denver', conference: 'Oeste', division: 'Noroeste', color: '#0E2240', secondary: '#FEC524' },
  { id: 'MIN', name: 'Minnesota Timberwolves', city: 'Minnesota', conference: 'Oeste', division: 'Noroeste', color: '#0C2340', secondary: '#236192' },
  { id: 'OKC', name: 'Oklahoma City Thunder', city: 'Oklahoma City', conference: 'Oeste', division: 'Noroeste', color: '#007AC1', secondary: '#EF3B24' },
  { id: 'POR', name: 'Portland Trail Blazers', city: 'Portland', conference: 'Oeste', division: 'Noroeste', color: '#E03A3E', secondary: '#000000' },
  { id: 'UTA', name: 'Utah Jazz', city: 'Utah', conference: 'Oeste', division: 'Noroeste', color: '#002B5C', secondary: '#00471B' },
  // CONFERENCIA OESTE - PACÍFICO
  { id: 'GSW', name: 'Golden State Warriors', city: 'Golden State', conference: 'Oeste', division: 'Pacífico', color: '#1D428A', secondary: '#FFC72C' },
  { id: 'LAC', name: 'LA Clippers', city: 'Los Ángeles', conference: 'Oeste', division: 'Pacífico', color: '#C8102E', secondary: '#1D428A' },
  { id: 'LAL', name: 'Los Angeles Lakers', city: 'Los Ángeles', conference: 'Oeste', division: 'Pacífico', color: '#552583', secondary: '#FDB927' },
  { id: 'PHX', name: 'Phoenix Suns', city: 'Phoenix', conference: 'Oeste', division: 'Pacífico', color: '#1D1160', secondary: '#E56020' },
  { id: 'SAC', name: 'Sacramento Kings', city: 'Sacramento', conference: 'Oeste', division: 'Pacífico', color: '#5A2D81', secondary: '#63727A' },
  // CONFERENCIA OESTE - SUROESTE
  { id: 'DAL', name: 'Dallas Mavericks', city: 'Dallas', conference: 'Oeste', division: 'Suroeste', color: '#00538C', secondary: '#002B5E' },
  { id: 'HOU', name: 'Houston Rockets', city: 'Houston', conference: 'Oeste', division: 'Suroeste', color: '#CE1141', secondary: '#000000' },
  { id: 'MEM', name: 'Memphis Grizzlies', city: 'Memphis', conference: 'Oeste', division: 'Suroeste', color: '#5D76A9', secondary: '#12173F' },
  { id: 'NOP', name: 'New Orleans Pelicans', city: 'Nueva Orleans', conference: 'Oeste', division: 'Suroeste', color: '#0C2340', secondary: '#C8102E' },
  { id: 'SAS', name: 'San Antonio Spurs', city: 'San Antonio', conference: 'Oeste', division: 'Suroeste', color: '#C4CED4', secondary: '#000000' },
];

export function getTeamById(id) {
  return teams.find(t => t.id === id);
}

export function getTeamsByConference(conf) {
  return teams.filter(t => t.conference === conf);
}
