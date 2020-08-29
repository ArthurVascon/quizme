//#region Imports
import {UsuarioProxy} from './usuario.proxy';
//#endregion

/** Proxy é uma interface que descreve tudo que vem da API */
export interface CommentProxy{
    id: number;

    createdAt: string;

    message: string;

    userId: number;

    userName?: UsuarioProxy;
}

//** Fake Comment */

export function getFakeCommentProxy(): CommentProxy{
return {

    id: 1,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et nisi dapibus, mollis enim eget, egestas nibh. Vivamus scelerisque lacinia tellus sed elementum. Aenean maximus massa a maximus fermentum. Quisque id mattis dui. Vestibulum quis mollis orci. Sed quis augue interdum, elementum lacus id, accumsan lacus. Nullam porta, nulla non sollicitudin auctor, ex nibh varius mauris, quis elementum odio purus sed nibh. Sed et lectus lorem',
    userId: 2,
    createdAt: new Date().toISOString(),
    userName: {
        id: 2,
        name: 'Professor Teste',
        email: 'testedoteste@teste.com',
        schoolName: 'Escola Teste Nelsenson',
        tipo: 1,
      comments: [],
        },
    }
};

getFakeCommentProxy()