import {IPruebaReducerState} from '../store/reducers/Prueba';
import {IPublicacionReducer} from '../store/reducers/Publicaciones';
import {ITodosReducerState} from '../store/reducers/Todos';
import {IUsersState} from '../store/reducers/Users';
import {IAlbumsState} from '../store/reducers/Albums'
export interface IState {
  Users: IUsersState;
  Prueba: IPruebaReducerState;
  Todos: ITodosReducerState;
  Publicaciones: IPublicacionReducer;
  Albums: IAlbumsState;
}
