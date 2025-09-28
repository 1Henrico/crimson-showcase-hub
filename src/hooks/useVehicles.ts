import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export interface Vehicle {
  id: number
  name: string
  price: string
  year: string
  km: string
  fuel: string
  location: string
  image: string
  featured: boolean
  description?: string
}

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  // Buscar todos os veículos
  const fetchVehicles = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setVehicles(data || [])
    } catch (error) {
      console.error('Erro ao buscar veículos:', error)
      toast({
        title: "Erro",
        description: "Erro ao carregar veículos. Tente novamente.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  // Adicionar novo veículo
  const addVehicle = async (vehicleData: Omit<Vehicle, 'id'>) => {
    try {
      const { data, error } = await supabase
        .from('vehicles')
        .insert([vehicleData])
        .select()
        .single()

      if (error) throw error
      
      setVehicles(prev => [data, ...prev])
      toast({
        title: "Sucesso",
        description: "Veículo adicionado com sucesso!",
      })
      return data
    } catch (error) {
      console.error('Erro ao adicionar veículo:', error)
      toast({
        title: "Erro",
        description: "Erro ao adicionar veículo. Tente novamente.",
        variant: "destructive"
      })
      throw error
    }
  }

  // Atualizar veículo existente
  const updateVehicle = async (id: number, vehicleData: Partial<Vehicle>) => {
    try {
      const { data, error } = await supabase
        .from('vehicles')
        .update({ ...vehicleData, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      
      setVehicles(prev => 
        prev.map(vehicle => 
          vehicle.id === id ? data : vehicle
        )
      )
      toast({
        title: "Sucesso",
        description: "Veículo atualizado com sucesso!",
      })
      return data
    } catch (error) {
      console.error('Erro ao atualizar veículo:', error)
      toast({
        title: "Erro",
        description: "Erro ao atualizar veículo. Tente novamente.",
        variant: "destructive"
      })
      throw error
    }
  }

  // Remover veículo
  const deleteVehicle = async (id: number) => {
    try {
      const { error } = await supabase
        .from('vehicles')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      setVehicles(prev => prev.filter(vehicle => vehicle.id !== id))
      toast({
        title: "Sucesso",
        description: "Veículo removido com sucesso!",
        variant: "destructive"
      })
    } catch (error) {
      console.error('Erro ao remover veículo:', error)
      toast({
        title: "Erro",
        description: "Erro ao remover veículo. Tente novamente.",
        variant: "destructive"
      })
      throw error
    }
  }

  // Carregar veículos ao montar o hook
  useEffect(() => {
    fetchVehicles()
  }, [])

  return {
    vehicles,
    loading,
    addVehicle,
    updateVehicle,
    deleteVehicle,
    refetchVehicles: fetchVehicles
  }
}