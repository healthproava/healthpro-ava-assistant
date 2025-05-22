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
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          facility_id: string | null
          id: string
          last_login: string | null
          role: string
          tier: string
        }
        Insert: {
          created_at?: string | null
          email: string
          facility_id?: string | null
          id?: string
          last_login?: string | null
          role: string
          tier: string
        }
        Update: {
          created_at?: string | null
          email?: string
          facility_id?: string | null
          id?: string
          last_login?: string | null
          role?: string
          tier?: string
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
    },
  },
} as const
