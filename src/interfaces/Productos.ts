export interface Producto{
   
id: number;
name: string;
air_date: string;	
episode: string;	
created: string;
image: string;
species: string;
type: string;
origin: 
    {
    name: string;
    }
}

export interface ResponseProducto{
    info: string;
    results: Producto[];
}