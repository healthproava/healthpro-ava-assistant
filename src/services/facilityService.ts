
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Facility {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
  type: string;
  website?: string;
  rating?: number;
  latitude?: number;
  longitude?: number;
  price_min?: number;
  price_max?: number;
  created_at?: string;
  description?: string;
  contact_email?: string;
  phone_number?: string;
  amenities?: string[];
  care_types?: string[];
  image_urls?: string[];
  is_featured?: boolean;
  created_by?: string;
  updated_at?: string;
  url?: string;
}

export async function getFacilities(): Promise<Facility[]> {
  try {
    const { data, error } = await supabase
      .from('nationwide_facilities')
      .select('*')
      .order('Provider Name');

    if (error) {
      throw error;
    }

    // Transform database results to match Facility interface
    const facilities: Facility[] = data.map(item => ({
      id: item.UUID,
      name: item["Provider Name"] || "",
      address: item["Provider Address"] || "",
      city: item["City/Town"] || "",
      state: item.State || "",
      zip_code: item["ZIP Code"]?.toString() || "",
      phone: item["Telephone Number"]?.toString() || "",
      type: item["Provider Type"] || "",
      website: "",
      rating: item["Overall Rating"] || 0,
      latitude: item.Latitude || null,
      longitude: item.Longitude || null,
      price_min: null,
      price_max: null,
      description: "",
      created_at: item["Date First Approved to Provide Medicare and Medicaid Services"] || "",
      contact_email: null,
      phone_number: item["Telephone Number"]?.toString() || "",
      amenities: [],
      care_types: item["Provider Type"] ? [item["Provider Type"]] : [],
      image_urls: [],
      is_featured: false,
      created_by: null,
      updated_at: "",
      url: "",
    }));

    return facilities;
  } catch (error) {
    console.error('Error fetching facilities:', error);
    toast.error('Failed to load facilities');
    return [];
  }
}

export async function getFacilityById(id: string): Promise<Facility | null> {
  try {
    const { data, error } = await supabase
      .from('nationwide_facilities')
      .select('*')
      .eq('UUID', id)
      .single();

    if (error) {
      throw error;
    }

    // Transform to match Facility interface
    const facility: Facility = {
      id: data.UUID,
      name: data["Provider Name"] || "",
      address: data["Provider Address"] || "",
      city: data["City/Town"] || "",
      state: data.State || "",
      zip_code: data["ZIP Code"]?.toString() || "",
      phone: data["Telephone Number"]?.toString() || "",
      type: data["Provider Type"] || "",
      website: "",
      rating: data["Overall Rating"] || 0,
      latitude: data.Latitude || null,
      longitude: data.Longitude || null,
      price_min: null,
      price_max: null,
      description: "",
      contact_email: null,
      phone_number: data["Telephone Number"]?.toString() || "",
      amenities: [],
      care_types: data["Provider Type"] ? [data["Provider Type"]] : [],
      image_urls: [],
      is_featured: false,
      created_by: null,
      updated_at: "",
      url: "",
    };

    return facility;
  } catch (error) {
    console.error(`Error fetching facility with ID ${id}:`, error);
    toast.error('Failed to load facility details');
    return null;
  }
}

export async function createFacility(facility: Omit<Facility, 'id' | 'created_at'>): Promise<Facility | null> {
  try {
    // For now, we'll just show a toast that this feature isn't implemented
    // since we're using the read-only nationwide_facilities table
    toast.error('Creating facilities is not available with the current data source');
    return null;
  } catch (error) {
    console.error('Error creating facility:', error);
    toast.error('Failed to create facility');
    return null;
  }
}

export async function updateFacility(id: string, facility: Partial<Facility>): Promise<Facility | null> {
  try {
    // For now, we'll just show a toast that this feature isn't implemented
    // since we're using the read-only nationwide_facilities table
    toast.error('Updating facilities is not available with the current data source');
    return null;
  } catch (error) {
    console.error(`Error updating facility with ID ${id}:`, error);
    toast.error('Failed to update facility');
    return null;
  }
}

export async function deleteFacility(id: string): Promise<boolean> {
  try {
    // For now, we'll just show a toast that this feature isn't implemented
    // since we're using the read-only nationwide_facilities table
    toast.error('Deleting facilities is not available with the current data source');
    return false;
  } catch (error) {
    console.error(`Error deleting facility with ID ${id}:`, error);
    toast.error('Failed to delete facility');
    return false;
  }
}
