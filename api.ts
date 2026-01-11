
import { createClient } from '@supabase/supabase-js';

export const handler = async (event: any) => {
  const method = event.httpMethod;
  
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    const missing = !supabaseUrl && !supabaseKey ? 'URL and Key' : (!supabaseUrl ? 'URL' : 'Key');
    return {
      statusCode: 200, // Return 200 so our frontend can handle the error state gracefully
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        status: 'error', 
        error: `Supabase ${missing} missing in Netlify Environment Variables. Setup required.` 
      }),
    };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    if (method === 'GET') {
      // Test the connection by trying to read the config
      const { data: configData, error: configError } = await supabase
        .from('site_config')
        .select('value')
        .eq('key', 'logo')
        .maybeSingle();
      
      // If table doesn't exist, Supabase returns a 42P01 error code
      if (configError && (configError.code === '42P01' || configError.message.includes('relation'))) {
        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            status: 'setup_required', 
            error: 'Supabase connected, but tables were not found. Please run the provided SQL script.' 
          }),
        };
      }

      // Fetch other data
      const { data: posts } = await supabase.from('posts').select('*').order('created_at', { ascending: false }).limit(5);
      const { data: testimonials } = await supabase.from('testimonials').select('*').order('id', { ascending: false });

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'connected',
          posts: posts || [],
          testimonials: testimonials || [],
          logo: configData?.value || null,
        }),
      };
    }

    if (method === 'POST') {
      const { logo } = JSON.parse(event.body);
      if (!logo) return { statusCode: 400, body: JSON.stringify({ error: 'Logo data required' }) };

      const { error } = await supabase
        .from('site_config')
        .upsert({ key: 'logo', value: logo }, { onConflict: 'key' });

      if (error) throw error;

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Success' }),
      };
    }

    return { statusCode: 405, body: 'Method Not Allowed' };
  } catch (error: any) {
    console.error('API Error:', error);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'error', error: error.message }),
    };
  }
};
