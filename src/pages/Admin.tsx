import { useState, useEffect } from "react";
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
import { Plus, Edit, Trash2, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Vehicle {
  id: number;
  name: string;
  price: string;
  year: string;
  km: string;
  fuel: string;
  location: string;
  image: string;
  featured: boolean;
  description?: string;
}

const Admin = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
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
  const { toast } = useToast();

  // Carregar dados iniciais (simulando dados do banco)
  useEffect(() => {
    const initialVehicles: Vehicle[] = [
      {
        id: 1,
        name: "Honda Civic 2023",
        price: "R$ 125.000",
        year: "2023",
        km: "15.000 km",
        fuel: "Flex",
        location: "São Paulo, SP",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop&crop=center",
        featured: true,
        description: "Honda Civic em excelente estado, revisões em dia."
      },
      {
        id: 2,
        name: "Toyota Corolla 2022",
        price: "R$ 110.000",
        year: "2022",
        km: "28.000 km",
        fuel: "Flex",
        location: "São Paulo, SP",
        image: "https://images.unsplash.com/photo-1549399137-99c61b4df73b?w=600&h=400&fit=crop&crop=center",
        featured: false,
        description: "Toyota Corolla confiável, único dono."
      },
      {
        id: 3,
        name: "Hyundai HB20 2024",
        price: "R$ 95.000",
        year: "2024",
        km: "5.000 km",
        fuel: "Flex",
        location: "São Paulo, SP",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop&crop=center",
        featured: false,
        description: "Hyundai HB20 seminovo, garantia de fábrica."
      }
    ];
    setVehicles(initialVehicles);
  }, []);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingVehicle) {
      // Editar veículo existente
      setVehicles(prev => prev.map(vehicle => 
        vehicle.id === editingVehicle.id 
          ? { ...formData, id: editingVehicle.id }
          : vehicle
      ));
      toast({
        title: "Veículo atualizado",
        description: "As informações do veículo foram atualizadas com sucesso.",
      });
    } else {
      // Adicionar novo veículo
      const newVehicle: Vehicle = {
        ...formData,
        id: Math.max(...vehicles.map(v => v.id), 0) + 1
      };
      setVehicles(prev => [...prev, newVehicle]);
      toast({
        title: "Veículo adicionado",
        description: "O novo veículo foi adicionado com sucesso.",
      });
    }
    
    setIsDialogOpen(false);
    resetForm();
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

  const handleDelete = (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este veículo?")) {
      setVehicles(prev => prev.filter(vehicle => vehicle.id !== id));
      toast({
        title: "Veículo removido",
        description: "O veículo foi removido com sucesso.",
        variant: "destructive"
      });
    }
  };

  const openNewVehicleDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

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
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" className="bg-luxury-red hover:bg-luxury-red-dark">
                    {editingVehicle ? "Atualizar" : "Adicionar"}
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