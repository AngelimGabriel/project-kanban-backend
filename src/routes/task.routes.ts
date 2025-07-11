import { Router } from 'express';
import task from '../controller/taskController';
import schemaTasks from '../services/schemaTasks';
const routes = Router();

routes.post('/tasks', schemaTasks.getValidator('insert'), task.CreateTask); // Cria uma nova tarefa
routes.get('/tasks', task.getTasks); // Buscar todas as tarefas
routes.get('/tasks/:id', schemaTasks.getValidator('getById'), task.getTask); // Busca a tarefa pelo ID
routes.put('/tasks/:id', schemaTasks.getValidator('update'), task.UpdateTask); // Atualiza uma tarefa pelo ID
routes.delete('/tasks/:id', schemaTasks.getValidator('delete'), task.DeleteTask); // Delelta uma tarefa pelo ID

export default routes;
