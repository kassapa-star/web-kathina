// Endpoint Serverless Vercel: api/config.js
// Berkas ini dieksekusi di server Vercel menggunakan format CommonJS
// sehingga kompatibel 100% tanpa memerlukan package.json tambahan.

module.exports = (request, response) => {
  // Hanya izinkan metode GET
  if (request.method !== 'GET') {
    return response.status(405).json({ message: 'Metode tidak diizinkan' });
  }

  // Set header anti-cache agar nilai terbaru selalu terbaca di seluruh perangkat
  response.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  response.setHeader('Access-Control-Allow-Origin', '*');

  return response.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
  });
};
