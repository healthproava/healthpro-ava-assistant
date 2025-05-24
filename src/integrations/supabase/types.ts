export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      amenities: {
        Row: {
          category: string | null
          created_at: string | null
          icon: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          icon?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          icon?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      analytics: {
        Row: {
          event_type: string | null
          id: string
          meta: Json | null
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          event_type?: string | null
          id?: string
          meta?: Json | null
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          event_type?: string | null
          id?: string
          meta?: Json | null
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          appointment_type: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_time: string | null
          id: string
          location_type: string | null
          start_time: string | null
          status: string | null
          title: string
          updated_at: string | null
          video_link: string | null
        }
        Insert: {
          appointment_type?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          id?: string
          location_type?: string | null
          start_time?: string | null
          status?: string | null
          title: string
          updated_at?: string | null
          video_link?: string | null
        }
        Update: {
          appointment_type?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          id?: string
          location_type?: string | null
          start_time?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
          video_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      care_types: {
        Row: {
          care_type_id: string | null
          created_at: string | null
          description: string | null
          facility_id: string | null
          id: string
          price_max: number | null
          price_min: number | null
          updated_at: string | null
        }
        Insert: {
          care_type_id?: string | null
          created_at?: string | null
          description?: string | null
          facility_id?: string | null
          id?: string
          price_max?: number | null
          price_min?: number | null
          updated_at?: string | null
        }
        Update: {
          care_type_id?: string | null
          created_at?: string | null
          description?: string | null
          facility_id?: string | null
          id?: string
          price_max?: number | null
          price_min?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      clients: {
        Row: {
          care_needs: string[] | null
          created_at: string | null
          diagnosis: string | null
          dob: string | null
          first_name: string
          id: string
          last_name: string
          notes: string | null
          referral_source: string | null
          updated_at: string | null
        }
        Insert: {
          care_needs?: string[] | null
          created_at?: string | null
          diagnosis?: string | null
          dob?: string | null
          first_name: string
          id?: string
          last_name: string
          notes?: string | null
          referral_source?: string | null
          updated_at?: string | null
        }
        Update: {
          care_needs?: string[] | null
          created_at?: string | null
          diagnosis?: string | null
          dob?: string | null
          first_name?: string
          id?: string
          last_name?: string
          notes?: string | null
          referral_source?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      commissions: {
        Row: {
          commission_amount: number | null
          commission_status: string | null
          created_at: string | null
          id: string
          move_in_date: string | null
          payment_date: string | null
          referral_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          commission_amount?: number | null
          commission_status?: string | null
          created_at?: string | null
          id?: string
          move_in_date?: string | null
          payment_date?: string | null
          referral_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          commission_amount?: number | null
          commission_status?: string | null
          created_at?: string | null
          id?: string
          move_in_date?: string | null
          payment_date?: string | null
          referral_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commissions_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referrals"
            referencedColumns: ["id"]
          },
        ]
      }
      contracts: {
        Row: {
          agent_id: string | null
          contract_url: string | null
          facility_id: string | null
          id: string
          signed_at: string | null
          status: string | null
        }
        Insert: {
          agent_id?: string | null
          contract_url?: string | null
          facility_id?: string | null
          id?: string
          signed_at?: string | null
          status?: string | null
        }
        Update: {
          agent_id?: string | null
          contract_url?: string | null
          facility_id?: string | null
          id?: string
          signed_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          created_at: string | null
          id: string
          is_archived: boolean | null
          last_message_at: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          last_message_at?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          last_message_at?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      document_shares: {
        Row: {
          created_at: string | null
          document_id: string | null
          id: string
          shared_with_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          document_id?: string | null
          id?: string
          shared_with_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          document_id?: string | null
          id?: string
          shared_with_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_shares_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_shares_shared_with_id_fkey"
            columns: ["shared_with_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string | null
          description: string | null
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          is_public: boolean | null
          owner_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          is_public?: boolean | null
          owner_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          is_public?: boolean | null
          owner_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      facility: {
        Row: {
          accepts_medicaid: boolean | null
          accepts_medicare: boolean | null
          accepts_va_benefits: boolean | null
          address_line1: string | null
          address_line2: string | null
          capacity: number | null
          city: string | null
          created_at: string | null
          current_availability: number | null
          description: string | null
          email: string | null
          facility_type: string | null
          id: string
          is_featured: boolean | null
          is_verified: boolean | null
          latitude: number | null
          license_number: string | null
          license_type: string | null
          longitude: number | null
          name: string
          phone: string | null
          price_range_max: number | null
          price_range_min: number | null
          rating: number | null
          state: string | null
          storepoint_id: string | null
          subscription_end_date: string | null
          subscription_start_date: string | null
          subscription_status: string | null
          subscription_tier: string | null
          updated_at: string | null
          website: string | null
          zip_code: string | null
        }
        Insert: {
          accepts_medicaid?: boolean | null
          accepts_medicare?: boolean | null
          accepts_va_benefits?: boolean | null
          address_line1?: string | null
          address_line2?: string | null
          capacity?: number | null
          city?: string | null
          created_at?: string | null
          current_availability?: number | null
          description?: string | null
          email?: string | null
          facility_type?: string | null
          id?: string
          is_featured?: boolean | null
          is_verified?: boolean | null
          latitude?: number | null
          license_number?: string | null
          license_type?: string | null
          longitude?: number | null
          name: string
          phone?: string | null
          price_range_max?: number | null
          price_range_min?: number | null
          rating?: number | null
          state?: string | null
          storepoint_id?: string | null
          subscription_end_date?: string | null
          subscription_start_date?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
          website?: string | null
          zip_code?: string | null
        }
        Update: {
          accepts_medicaid?: boolean | null
          accepts_medicare?: boolean | null
          accepts_va_benefits?: boolean | null
          address_line1?: string | null
          address_line2?: string | null
          capacity?: number | null
          city?: string | null
          created_at?: string | null
          current_availability?: number | null
          description?: string | null
          email?: string | null
          facility_type?: string | null
          id?: string
          is_featured?: boolean | null
          is_verified?: boolean | null
          latitude?: number | null
          license_number?: string | null
          license_type?: string | null
          longitude?: number | null
          name?: string
          phone?: string | null
          price_range_max?: number | null
          price_range_min?: number | null
          rating?: number | null
          state?: string | null
          storepoint_id?: string | null
          subscription_end_date?: string | null
          subscription_start_date?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
          website?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      facility_amenities: {
        Row: {
          amenity_id: string | null
          created_at: string | null
          description: string | null
          facility_id: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          amenity_id?: string | null
          created_at?: string | null
          description?: string | null
          facility_id?: string | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          amenity_id?: string | null
          created_at?: string | null
          description?: string | null
          facility_id?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      facility_images: {
        Row: {
          alt_text: string | null
          caption: string | null
          created_at: string | null
          facility_id: string | null
          id: string
          is_primary: boolean | null
          sort_order: number | null
          updated_at: string | null
          url: string | null
        }
        Insert: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string | null
          facility_id?: string | null
          id?: string
          is_primary?: boolean | null
          sort_order?: number | null
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string | null
          facility_id?: string | null
          id?: string
          is_primary?: boolean | null
          sort_order?: number | null
          updated_at?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "facility_images_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facility"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_flags: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          amount: number
          created_at: string | null
          description: string
          id: string
          invoice_id: string | null
          quantity: number
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          description: string
          id?: string
          invoice_id?: string | null
          quantity: number
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string
          id?: string
          invoice_id?: string | null
          quantity?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_payments: {
        Row: {
          amount: number
          created_at: string | null
          due_date: string | null
          from_user_id: string | null
          id: string
          invoice_id: string | null
          paid_date: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          due_date?: string | null
          from_user_id?: string | null
          id?: string
          invoice_id?: string | null
          paid_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          due_date?: string | null
          from_user_id?: string | null
          id?: string
          invoice_id?: string | null
          paid_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoice_payments_from_user_id_fkey"
            columns: ["from_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount: number | null
          created_at: string | null
          description: string | null
          due_date: string | null
          from_user_id: string | null
          id: string
          invoice_number: string | null
          paid_date: string | null
          status: string | null
          to_user_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          from_user_id?: string | null
          id?: string
          invoice_number?: string | null
          paid_date?: string | null
          status?: string | null
          to_user_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          from_user_id?: string | null
          id?: string
          invoice_number?: string | null
          paid_date?: string | null
          status?: string | null
          to_user_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_from_user_id_fkey"
            columns: ["from_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_to_user_id_fkey"
            columns: ["to_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          body: string | null
          id: string
          receiver_id: string | null
          sender_id: string | null
          timestamp: string | null
        }
        Insert: {
          body?: string | null
          id?: string
          receiver_id?: string | null
          sender_id?: string | null
          timestamp?: string | null
        }
        Update: {
          body?: string | null
          id?: string
          receiver_id?: string | null
          sender_id?: string | null
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          client_id: string | null
          id: string
          intake_form_url: string | null
          received_at: string | null
          status: string
          submitted_by: string | null
        }
        Insert: {
          client_id?: string | null
          id?: string
          intake_form_url?: string | null
          received_at?: string | null
          status: string
          submitted_by?: string | null
        }
        Update: {
          client_id?: string | null
          id?: string
          intake_form_url?: string | null
          received_at?: string | null
          status?: string
          submitted_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referrals_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_features: {
        Row: {
          created_at: string | null
          feature_id: string | null
          id: string
          tier: string
        }
        Insert: {
          created_at?: string | null
          feature_id?: string | null
          id?: string
          tier: string
        }
        Update: {
          created_at?: string | null
          feature_id?: string | null
          id?: string
          tier?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_features_feature_id_fkey"
            columns: ["feature_id"]
            isOneToOne: false
            referencedRelation: "feature_flags"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          created_at: string | null
          description: string | null
          features: Json | null
          id: string
          is_active: boolean | null
          name: string
          price: number
          tier: string | null
          updated_at: string | null
          user_type: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          price: number
          tier?: string | null
          updated_at?: string | null
          user_type?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
          tier?: string | null
          updated_at?: string | null
          user_type?: string | null
        }
        Relationships: []
      }
      user_favorites: {
        Row: {
          created_at: string | null
          facility_id: string | null
          id: string
          notes: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          facility_id?: string | null
          id?: string
          notes?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          facility_id?: string | null
          id?: string
          notes?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_favorites_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facility"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profile_end_user: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          budget_range: Database["public"]["Enums"]["budget_range"] | null
          care_needs: Json | null
          care_recepient_relationship:
            | Database["public"]["Enums"]["care_recepient_relationship"]
            | null
          care_urgency: Database["public"]["Enums"]["care_urgency"] | null
          city: string | null
          created_at: string | null
          date_of_birth: string | null
          id: string
          medical_conditions: Json | null
          preferred_amenities: Json | null
          state: string | null
          updated_at: string | null
          user_id: string | null
          zip_code: string | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          budget_range?: Database["public"]["Enums"]["budget_range"] | null
          care_needs?: Json | null
          care_recepient_relationship?:
            | Database["public"]["Enums"]["care_recepient_relationship"]
            | null
          care_urgency?: Database["public"]["Enums"]["care_urgency"] | null
          city?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          id?: string
          medical_conditions?: Json | null
          preferred_amenities?: Json | null
          state?: string | null
          updated_at?: string | null
          user_id?: string | null
          zip_code?: string | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          budget_range?: Database["public"]["Enums"]["budget_range"] | null
          care_needs?: Json | null
          care_recepient_relationship?:
            | Database["public"]["Enums"]["care_recepient_relationship"]
            | null
          care_urgency?: Database["public"]["Enums"]["care_urgency"] | null
          city?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          id?: string
          medical_conditions?: Json | null
          preferred_amenities?: Json | null
          state?: string | null
          updated_at?: string | null
          user_id?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profile_end_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profile_facility_admin: {
        Row: {
          admin_level: string | null
          created_at: string
          department: string | null
          id: string
          job_title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          admin_level?: string | null
          created_at?: string
          department?: string | null
          id?: string
          job_title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          admin_level?: string | null
          created_at?: string
          department?: string | null
          id?: string
          job_title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profile_facility_admin_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profile_professional: {
        Row: {
          bio: string | null
          created_at: string
          geographical_service_area: Json | null
          id: string
          license_number: string | null
          license_state: string | null
          professional_title: string | null
          specialities: Json | null
          subscription_end_date: string | null
          subscription_start_date: string | null
          subscription_status: string | null
          subscription_tier: string | null
          updated_at: string | null
          user_id: string | null
          years_experience: number | null
        }
        Insert: {
          bio?: string | null
          created_at?: string
          geographical_service_area?: Json | null
          id?: string
          license_number?: string | null
          license_state?: string | null
          professional_title?: string | null
          specialities?: Json | null
          subscription_end_date?: string | null
          subscription_start_date?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
          user_id?: string | null
          years_experience?: number | null
        }
        Update: {
          bio?: string | null
          created_at?: string
          geographical_service_area?: Json | null
          id?: string
          license_number?: string | null
          license_state?: string | null
          professional_title?: string | null
          specialities?: Json | null
          subscription_end_date?: string | null
          subscription_start_date?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
          user_id?: string | null
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profile_professional_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          first_name: string | null
          id: string
          is_active: boolean | null
          is_verified: boolean | null
          last_login: string | null
          last_name: string | null
          mfa_enabled: boolean | null
          password_hash: string | null
          phone: string | null
          profile_image_url: string | null
          role: string
          tier: string
          updated_at: string | null
          veteran_status: boolean | null
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name?: string | null
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          last_login?: string | null
          last_name?: string | null
          mfa_enabled?: boolean | null
          password_hash?: string | null
          phone?: string | null
          profile_image_url?: string | null
          role: string
          tier: string
          updated_at?: string | null
          veteran_status?: boolean | null
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          last_login?: string | null
          last_name?: string | null
          mfa_enabled?: boolean | null
          password_hash?: string | null
          phone?: string | null
          profile_image_url?: string | null
          role?: string
          tier?: string
          updated_at?: string | null
          veteran_status?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      budget_range:
        | "$2,000 - $4,000"
        | "$4,000 - $6,000"
        | "$6,000 - $8,000"
        | "$8,000 - $10,000+"
        | "sliding_scale"
        | "other"
      care_recepient_relationship:
        | "family"
        | "friend"
        | "medical_professional"
        | "spouse"
        | "child"
      care_urgency:
        | "immediately"
        | "2_weeks"
        | "30_days"
        | "6_months"
        | "1_year"
      contract_status_enum:
        | "PENDING_SIGNATURE"
        | "ACTIVE"
        | "EXPIRED"
        | "INACTIVE"
      invoice_status_enum:
        | "DRAFT"
        | "SUBMITTED"
        | "PROCESSING_HPA"
        | "PAID_HPA"
        | "SENT_TO_FACILITY"
        | "PAID_BY_FACILITY"
        | "OVERDUE"
        | "CANCELLED"
      invoice_type_enum: "HPA" | "FACILITY"
      role: "end_user" | "professional" | "facility_admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      budget_range: [
        "$2,000 - $4,000",
        "$4,000 - $6,000",
        "$6,000 - $8,000",
        "$8,000 - $10,000+",
        "sliding_scale",
        "other",
      ],
      care_recepient_relationship: [
        "family",
        "friend",
        "medical_professional",
        "spouse",
        "child",
      ],
      care_urgency: ["immediately", "2_weeks", "30_days", "6_months", "1_year"],
      contract_status_enum: [
        "PENDING_SIGNATURE",
        "ACTIVE",
        "EXPIRED",
        "INACTIVE",
      ],
      invoice_status_enum: [
        "DRAFT",
        "SUBMITTED",
        "PROCESSING_HPA",
        "PAID_HPA",
        "SENT_TO_FACILITY",
        "PAID_BY_FACILITY",
        "OVERDUE",
        "CANCELLED",
      ],
      invoice_type_enum: ["HPA", "FACILITY"],
      role: ["end_user", "professional", "facility_admin"],
    },
  },
} as const
