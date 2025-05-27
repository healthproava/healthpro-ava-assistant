
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
      .from('facilities')
      .select('*')
      .order('name');

    if (error) {
      throw error;
    }

    // Transform database results to match Facility interface
    const facilities: Facility[] = data.map(item => ({
      id: item.id,
      name: item.name,
      address: item.address || "",
      city: item.city || "",
      state: item.state || "",
      zip_code: item.zip || "",
      phone: item.phone || "",
      type: item.facility_type || "",
      website: item.website || "",
      rating: item.rating || 0,
      latitude: item.latitude || null,
      longitude: item.longitude || null,
      // Use null for price_min and price_max as they're not in the database schema
      price_min: null,
      price_max: null,
      description: item.description || "",
      created_at: item.created_at,
      contact_email: null, // Not in database schema
      phone_number: item.phone || "",
      amenities: [], // Not in database schema
      care_types: item.facility_type ? [item.facility_type] : [],
      image_urls: [], // Not in database schema
      is_featured: item.is_promoted || false,
      created_by: null, // Not in database schema
      updated_at: item.updated_at,
      url: item.website || "",
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
      .from('facilities')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    // Transform to match Facility interface
    const facility: Facility = {
      id: data.id,
      name: data.name,
      address: data.address || "",
      city: data.city || "",
      state: data.state || "",
      zip_code: data.zip || "",
      phone: data.phone || "",
      type: data.facility_type || "",
      website: data.website || "",
      rating: data.rating || 0,
      latitude: data.latitude || null,
      longitude: data.longitude || null,
      // Use null for price_min and price_max as they're not in the database schema
      price_min: null,
      price_max: null,
      description: data.description || "",
      contact_email: null, // Not in database schema
      phone_number: data.phone || "",
      amenities: [], // Not in database schema
      care_types: data.facility_type ? [data.facility_type] : [],
      image_urls: [], // Not in database schema
      is_featured: data.is_promoted || false,
      created_by: null, // Not in database schema
      updated_at: data.updated_at,
      url: data.website || "",
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
    // Extract and prepare the data for Supabase insert
    const facilityData = {
      name: facility.name,
      address: facility.address,
      city: facility.city,
      state: facility.state,
      zip: facility.zip_code,
      phone: facility.phone || facility.phone_number || "",
      website: facility.website || null,
      rating: facility.rating || 0,
      latitude: facility.latitude || null,
      longitude: facility.longitude || null,
      description: facility.description || "",
      facility_type: facility.type || (facility.care_types && facility.care_types[0]) || null,
      is_promoted: facility.is_featured || false,
      data_source: 'manual'
    };

    const { data, error } = await supabase
      .from('facilities')
      .insert(facilityData)
      .select();

    if (error) {
      throw error;
    }

    toast.success('Facility created successfully');
    return data[0] ? {
      id: data[0].id,
      name: data[0].name,
      address: data[0].address || "",
      city: data[0].city || "",
      state: data[0].state || "",
      zip_code: data[0].zip || "",
      phone: data[0].phone || "",
      type: data[0].facility_type || "",
      website: data[0].website || "",
      rating: data[0].rating || 0,
      latitude: data[0].latitude || null,
      longitude: data[0].longitude || null,
      price_min: null,
      price_max: null,
      description: data[0].description || "",
      contact_email: null,
      phone_number: data[0].phone || "",
      amenities: [],
      care_types: data[0].facility_type ? [data[0].facility_type] : [],
      image_urls: [],
      is_featured: data[0].is_promoted || false,
      created_by: null,
      updated_at: data[0].updated_at,
      url: data[0].website || "",
    } : null;
  } catch (error) {
    console.error('Error creating facility:', error);
    toast.error('Failed to create facility');
    return null;
  }
}

export async function updateFacility(id: string, facility: Partial<Facility>): Promise<Facility | null> {
  try {
    // Prepare data for update
    const updateData: any = {};
    
    if (facility.name !== undefined) updateData.name = facility.name;
    if (facility.address !== undefined) updateData.address = facility.address;
    if (facility.city !== undefined) updateData.city = facility.city;
    if (facility.state !== undefined) updateData.state = facility.state;
    if (facility.zip_code !== undefined) updateData.zip = facility.zip_code;
    if (facility.phone !== undefined) updateData.phone = facility.phone;
    if (facility.phone_number !== undefined) updateData.phone = facility.phone_number;
    if (facility.website !== undefined) updateData.website = facility.website;
    if (facility.rating !== undefined) updateData.rating = facility.rating;
    if (facility.latitude !== undefined) updateData.latitude = facility.latitude;
    if (facility.longitude !== undefined) updateData.longitude = facility.longitude;
    if (facility.description !== undefined) updateData.description = facility.description;
    if (facility.type !== undefined) updateData.facility_type = facility.type;
    if (facility.care_types !== undefined && facility.care_types.length > 0) {
      updateData.facility_type = facility.care_types[0];
    }
    if (facility.is_featured !== undefined) updateData.is_promoted = facility.is_featured;

    const { data, error } = await supabase
      .from('facilities')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    toast.success('Facility updated successfully');
    return data[0] ? {
      id: data[0].id,
      name: data[0].name,
      address: data[0].address || "",
      city: data[0].city || "",
      state: data[0].state || "",
      zip_code: data[0].zip || "",
      phone: data[0].phone || "",
      type: data[0].facility_type || "",
      website: data[0].website || "",
      rating: data[0].rating || 0,
      latitude: data[0].latitude || null,
      longitude: data[0].longitude || null,
      price_min: null,
      price_max: null,
      description: data[0].description || "",
      contact_email: null,
      phone_number: data[0].phone || "",
      amenities: [],
      care_types: data[0].facility_type ? [data[0].facility_type] : [],
      image_urls: [],
      is_featured: data[0].is_promoted || false,
      created_by: null,
      updated_at: data[0].updated_at,
      url: data[0].website || "",
    } : null;
  } catch (error) {
    console.error(`Error updating facility with ID ${id}:`, error);
    toast.error('Failed to update facility');
    return null;
  }
}

export async function deleteFacility(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('facilities')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    toast.success('Facility deleted successfully');
    return true;
  } catch (error) {
    console.error(`Error deleting facility with ID ${id}:`, error);
    toast.error('Failed to delete facility');
    return false;
  }
}
