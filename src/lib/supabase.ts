import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Database = {
  public: {
    Tables: {
      vehicles: {
        Row: {
          id: number
          name: string
          price: string
          year: string
          km: string
          fuel: string
          location: string
          image: string
          featured: boolean
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          price: string
          year: string
          km: string
          fuel: string
          location: string
          image: string
          featured?: boolean
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          price?: string
          year?: string
          km?: string
          fuel?: string
          location?: string
          image?: string
          featured?: boolean
          description?: string | null
          updated_at?: string
        }
      }
    }
  }
}