export default function handler(request, response) {
  if (request.method !== 'GET') {
    return response.status(405).json({ message: 'Metode tidak diizinkan' });
  }

  response.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  return response.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
  });
}