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
      ai_embeddings: {
        Row: {
          facility_id: string | null
          id: string
          vector: number[] | null
        }
        Insert: {
          facility_id?: string | null
          id?: string
          vector?: number[] | null
        }
        Update: {
          facility_id?: string | null
          id?: string
          vector?: number[] | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_embeddings_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      facilities: {
        Row: {
          address: string | null
          city: string | null
          created_at: string | null
          data_source: string | null
          description: string | null
          facility_type: string | null
          geo: Json | null
          id: string
          is_promoted: boolean | null
          latitude: number | null
          longitude: number | null
          name: string
          phone: string | null
          place_id: string | null
          rating: number | null
          reviews_count: number | null
          state: string | null
          tags: string[] | null
          updated_at: string | null
          website: string | null
          zip: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          data_source?: string | null
          description?: string | null
          facility_type?: string | null
          geo?: Json | null
          id?: string
          is_promoted?: boolean | null
          latitude?: number | null
          longitude?: number | null
          name: string
          phone?: string | null
          place_id?: string | null
          rating?: number | null
          reviews_count?: number | null
          state?: string | null
          tags?: string[] | null
          updated_at?: string | null
          website?: string | null
          zip?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          data_source?: string | null
          description?: string | null
          facility_type?: string | null
          geo?: Json | null
          id?: string
          is_promoted?: boolean | null
          latitude?: number | null
          longitude?: number | null
          name?: string
          phone?: string | null
          place_id?: string | null
          rating?: number | null
          reviews_count?: number | null
          state?: string | null
          tags?: string[] | null
          updated_at?: string | null
          website?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      features: {
        Row: {
          facility_id: string | null
          feature_type: string | null
          id: string
          value: string | null
        }
        Insert: {
          facility_id?: string | null
          feature_type?: string | null
          id?: string
          value?: string | null
        }
        Update: {
          facility_id?: string | null
          feature_type?: string | null
          id?: string
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "features_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      photos: {
        Row: {
          alt_text: string | null
          facility_id: string | null
          id: string
          image_url: string | null
        }
        Insert: {
          alt_text?: string | null
          facility_id?: string | null
          id?: string
          image_url?: string | null
        }
        Update: {
          alt_text?: string | null
          facility_id?: string | null
          id?: string
          image_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "photos_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          author: string | null
          content: string | null
          facility_id: string | null
          id: string
          rating: number | null
          title: string | null
        }
        Insert: {
          author?: string | null
          content?: string | null
          facility_id?: string | null
          id?: string
          rating?: number | null
          title?: string | null
        }
        Update: {
          author?: string | null
          content?: string | null
          facility_id?: string | null
          id?: string
          rating?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      search_logs: {
        Row: {
          agent_mode: string | null
          id: string
          query: string | null
          session_id: string | null
          timestamp: string | null
        }
        Insert: {
          agent_mode?: string | null
          id?: string
          query?: string | null
          session_id?: string | null
          timestamp?: string | null
        }
        Update: {
          agent_mode?: string | null
          id?: string
          query?: string | null
          session_id?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
      serpapi_raw_results: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          parsing_status: string
          raw_json_data: Json
          user_search_request_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          parsing_status?: string
          raw_json_data: Json
          user_search_request_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          parsing_status?: string
          raw_json_data?: Json
          user_search_request_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "serpapi_raw_results_user_search_request_id_fkey"
            columns: ["user_search_request_id"]
            isOneToOne: false
            referencedRelation: "user_search_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      user_search_requests: {
        Row: {
          agent_id: string | null
          created_at: string
          error_message: string | null
          id: string
          search_criteria: Json
          serpapi_query_sent: string | null
          status: string
        }
        Insert: {
          agent_id?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          search_criteria: Json
          serpapi_query_sent?: string | null
          status?: string
        }
        Update: {
          agent_id?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          search_criteria?: Json
          serpapi_query_sent?: string | null
          status?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_locations_by_tags: {
        Args: { input_tags: string[] }
        Returns: {
          id: number
          name: string
          address: string
          tags: string[]
        }[]
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
      is_feature_enabled: {
        Args: {
          feature_key: string
          tier: Database["public"]["Enums"]["subscription_tier"]
        }
        Returns: boolean
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
    }
    Enums: {
      app_role: "user" | "admin"
      subscription_tier: "free" | "basic" | "premium"
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
      app_role: ["user", "admin"],
      subscription_tier: ["free", "basic", "premium"],
    },
  },
} as const
