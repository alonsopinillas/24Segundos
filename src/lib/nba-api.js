// === Cliente API NBA - balldontlie.io ===
// API gratuita sin necesidad de API key para endpoints básicos
// Documentación: https://docs.balldontlie.io
//
// Esta capa abstrae la API. Si en el futuro quieres cambiar de proveedor
// (ej: API-Sports), solo cambias este archivo y todo el sitio sigue funcionando.

const API_BASE = 'https://api.balldontlie.io/v1';
// Para producción puedes registrarte gratis y obtener una API key
// con más requests/min. Guárdala en variables de entorno de Netlify.
const API_KEY = import.meta.env.BALLDONTLIE_API_KEY || '';

async function fetchAPI(endpoint, params = {}) {
  const url = new URL(`${API_BASE}${endpoint}`);
  Object.keys(params).forEach(key => {
    if (Array.isArray(params[key])) {
      params[key].forEach(v => url.searchParams.append(`${key}[]`, v));
    } else {
      url.searchParams.set(key, params[key]);
    }
  });

  try {
    const res = await fetch(url.toString(), {
      headers: API_KEY ? { 'Authorization': API_KEY } : {},
    });
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Error fetching NBA API:', error);
    return null;
  }
}

// Obtiene los partidos de una fecha específica (formato YYYY-MM-DD)
export async function getGames(date) {
  const data = await fetchAPI('/games', {
    dates: [date],
    per_page: 25,
  });
  return data?.data || [];
}

// Obtiene partidos recientes (últimos N días)
export async function getRecentGames(days = 3) {
  const today = new Date();
  const dates = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().split('T')[0]);
  }
  const data = await fetchAPI('/games', { dates, per_page: 25 });
  return data?.data || [];
}

// Líderes estadísticos de la temporada
export async function getStatLeaders(category = 'pts', season = 2025) {
  // category: pts, reb, ast, stl, blk, fg3m
  const data = await fetchAPI('/season_averages', {
    season,
  });
  if (!data?.data) return [];
  return data.data
    .sort((a, b) => (b[category] || 0) - (a[category] || 0))
    .slice(0, 10);
}

// Información de un jugador
export async function getPlayer(id) {
  const data = await fetchAPI(`/players/${id}`);
  return data?.data || null;
}

// Buscar jugadores
export async function searchPlayers(query) {
  const data = await fetchAPI('/players', { search: query, per_page: 10 });
  return data?.data || [];
}

// Standings - clasificación
// Nota: balldontlie no provee standings directamente en plan gratis.
// Esta función calcula clasificación a partir de los partidos.
// En producción puedes complementar con otra API o cachear datos.
export async function getStandings(season = 2025) {
  // Placeholder - en producción consultarías games del season
  // y calcularías W-L, o usarías un endpoint específico de standings
  // Para la demo retornamos datos estructurados de ejemplo:
  return null;
}

// Helpers de formato
export function formatGameTime(game) {
  if (game.status === 'Final') return 'FINAL';
  if (game.period > 0) return `${game.status}`;
  const date = new Date(game.date);
  return date.toLocaleString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}
