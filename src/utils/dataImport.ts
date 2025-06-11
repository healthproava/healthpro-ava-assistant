
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Example hardcoded facilities data that matches our schema
const sampleFacilities = [
  {
    name: 'Sunny Pines Care Center',
    address: '123 Pine Street, Phoenix, AZ 85001',
    city: 'Phoenix',
    state: 'AZ',
    zip_code: '85001',
    type: 'Assisted Living',
    phone: '(602) 555-1234',
    website: 'sunnypines.com',
    rating: 4.5,
    latitude: 33.4484,
    longitude: -112.074,
    price_min: 3500,
    price_max: 5500
  },
  {
    name: 'Golden Years Retirement Home',
    address: '456 Oak Avenue, Phoenix, AZ 85004',
    city: 'Phoenix',
    state: 'AZ',
    zip_code: '85004',
    type: 'Independent Living',
    phone: '(602) 555-5678',
    website: 'goldenyears.com',
    rating: 4.2,
    latitude: 33.4539,
    longitude: -112.0691,
    price_min: 2800,
    price_max: 4000
  },
  {
    name: 'Serene Valley Care Facility',
    address: '789 Maple Road, Phoenix, AZ 85006',
    city: 'Phoenix',
    state: 'AZ',
    zip_code: '85006',
    type: 'Memory Care',
    phone: '(602) 555-9012',
    website: 'serenevalley.com',
    rating: 4.7,
    latitude: 33.4602,
    longitude: -112.0645,
    price_min: 4200,
    price_max: 6200
  },
  {
    name: 'Tranquil Gardens Senior Living',
    address: '101 Elm Street, Phoenix, AZ 85008',
    city: 'Phoenix',
    state: 'AZ',
    zip_code: '85008',
    type: 'Assisted Living',
    phone: '(602) 555-3456',
    website: 'tranquilgardens.com',
    rating: 4.0,
    latitude: 33.4484,
    longitude: -112.0599,
    price_min: 3200,
    price_max: 4800
  },
  {
    name: 'Sunset Manor',
    address: '202 Willow Lane, Phoenix, AZ 85020',
    city: 'Phoenix',
    state: 'AZ',
    zip_code: '85020',
    type: 'Nursing Home',
    phone: '(602) 555-7890',
    website: 'sunsetmanor.com',
    rating: 3.9,
    latitude: 33.4637,
    longitude: -112.0822,
    price_min: 5200,
    price_max: 7500
  },
  {
    name: 'Riverside Retirement Community',
    address: '303 River Road, Phoenix, AZ 85040',
    city: 'Phoenix',
    state: 'AZ',
    zip_code: '85040',
    type: 'Independent Living',
    phone: '(602) 555-2345',
    website: 'riversideretirement.com',
    rating: 4.3,
    latitude: 33.4246,
    longitude: -112.0684,
    price_min: 2500,
    price_max: 3800
  }
];

/**
 * Import sample facility data to the database
 * Note: This function is disabled as we're using the nationwide_facilities table
 * which contains real CMS data and should not be modified.
 */
export async function importSampleFacilities(): Promise<boolean> {
  try {
    // Check if nationwide facilities data exists
    const { count, error: countError } = await supabase
      .from('nationwide_facilities')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('Error checking facility count:', countError);
      toast.error('Failed to check facility data');
      return false;
    }
    
    if (count && count > 0) {
      toast.info(`Database already contains ${count} facilities from the nationwide CMS dataset`);
      return true;
    } else {
      toast.info('No facility data found. The app uses real CMS data from the nationwide_facilities table.');
      return false;
    }
  } catch (error) {
    console.error('Unexpected error checking facilities:', error);
    toast.error('An unexpected error occurred');
    return false;
  }
}

/**
 * Admin function to clear all facilities data
 * Note: This function is disabled as the nationwide_facilities table
 * contains official CMS data and should not be modified.
 */
export async function clearAllFacilities() {
  try {
    toast.error('Cannot clear nationwide facilities data - this contains official CMS data');
    return false;
  } catch (error) {
    console.error('Unexpected error:', error);
    toast.error('An unexpected error occurred');
    return false;
  }
}

// Add this function to the global window object for the admin interface
declare global {
  interface Window {
    importSampleFacilities: () => Promise<boolean>;
  }
}

// Can be called from the developer console to check facility data
window.importSampleFacilities = importSampleFacilities;
