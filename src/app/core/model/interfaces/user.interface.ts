export interface User {
  email: string;
  nome: string;
  telefone: string;
  id?: number;
  senha?: string;
  isLoggedIn?: boolean;
  photoUrl?: string;
}
