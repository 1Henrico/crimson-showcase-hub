import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Plus, Edit, Trash2, ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useVehicles, Vehicle } from "@/hooks/useVehicles";

const Admin = () => {
  const { vehicles, loading, addVehicle, updateVehicle, deleteVehicle } = useVehicles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    year: "",
    km: "",
    fuel: "",
    location: "",
    image: "",
    featured: false,
    description: ""
  });

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      year: "",
      km: "",
      fuel: "",
      location: "",
      image: "",
      featured: false,
      description: ""
    });
    setEditingVehicle(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      if (editingVehicle) {
        await updateVehicle(editingVehicle.id, formData);
      } else {
        await addVehicle(formData);
      }
      
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      // Erro já tratado no hook
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
    setFormData({
      name: vehicle.name,
      price: vehicle.price,
      year: vehicle.year,
      km: vehicle.km,
      fuel: vehicle.fuel,
      location: vehicle.location,
      image: vehicle.image,
      featured: vehicle.featured,
      description: vehicle.description || ""
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este veículo?")) {
      await deleteVehicle(id);
    }
  };

  const openNewVehicleDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="text-muted-foreground">Carregando veículos...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Site
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">
              Painel Administrativo
            </h1>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openNewVehicleDialog} className="bg-luxury-red hover:bg-luxury-red-dark">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Veículo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingVehicle ? "Editar Veículo" : "Adicionar Novo Veículo"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome do Veículo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Preço</Label>
                    <Input
                      id="price"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      placeholder="R$ 100.000"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="year">Ano</Label>
                    <Input
                      id="year"
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="km">Quilometragem</Label>
                    <Input
                      id="km"
                      value={formData.km}
                      onChange={(e) => setFormData(prev => ({ ...prev, km: e.target.value }))}
                      placeholder="15.000 km"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fuel">Combustível</Label>
                    <Input
                      id="fuel"
                      value={formData.fuel}
                      onChange={(e) => setFormData(prev => ({ ...prev, fuel: e.target.value }))}
                      placeholder="Flex"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Localização</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="São Paulo, SP"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2 pt-6">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="featured">Veículo em destaque</Label>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="image">URL da Imagem</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                    placeholder="https://..."
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Descrição detalhada do veículo..."
                    rows={3}
                  />
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                    disabled={submitting}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-luxury-red hover:bg-luxury-red-dark"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {editingVehicle ? "Atualizando..." : "Adicionando..."}
                      </>
                    ) : (
                      editingVehicle ? "Atualizar" : "Adicionar"
                    )}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Veículos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{vehicles.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Veículos em Destaque
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-luxury-red">
                {vehicles.filter(v => v.featured).length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Veículos Regulares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {vehicles.filter(v => !v.featured).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabela de Veículos */}
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Veículos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Imagem</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Ano</TableHead>
                  <TableHead>KM</TableHead>
                  <TableHead>Destaque</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell>
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="w-16 h-12 object-cover rounded"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{vehicle.name}</TableCell>
                    <TableCell className="text-luxury-red font-semibold">
                      {vehicle.price}
                    </TableCell>
                    <TableCell>{vehicle.year}</TableCell>
                    <TableCell>{vehicle.km}</TableCell>
                    <TableCell>
                      {vehicle.featured ? (
                        <span className="px-2 py-1 bg-luxury-red/20 text-luxury-red text-xs rounded-full">
                          Destaque
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          Regular
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(vehicle)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(vehicle.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;