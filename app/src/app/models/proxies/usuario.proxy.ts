import { CommentProxy } from './comment.proxy';

export interface UsuarioProxy{
    
    id: number;

    name: string;

    email: string;

    schoolName: string;

    tipo: number;

    comments?: CommentProxy[];
}