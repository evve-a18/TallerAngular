export interface Productos{
    name:string,
    description:string, 
    price:number,
    img: string,
}
export type Roles={
  rol: "Admin" | "Cliente" | "Vendedor" | "Maestro" | "Alumno"
}
export interface Usuarios{
  id: number,
  img?:string,
  price?:string,
  name: string,
  description: string,
  rol: Roles
}