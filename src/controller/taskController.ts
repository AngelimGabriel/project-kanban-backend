import { Request, Response } from 'express';
import { createTask, getAllTasks, getTask, deleteTask, updateTask } from '../services/taskService';

class Task {
  CreateTask = async (req: Request, res: Response) => {
    const result = await createTask(req.body.titulo);
    return res.status(result === 1 ? 201 : 400).json({
      message: result === 1 ? 'Tarefa criada' : 'Não foi possivel criar a tarefa',
    });
  };

  UpdateTask = async (req: Request, res: Response) => {
    const result = await updateTask(
      req.params.id,
      req.body.titulo,
      req.body.status as 'A fazer' | 'Em andamento' | 'Concluída',
      req.body.categoria as 'To Do' | 'Doing' | 'Done'
    );
    if (result.affected! > 0) {
      return res.status(201).json({ message: `O ID: ${req.params.id} foi atualizado com sucesso.` });
    }
    return res.status(404).json({ message: `O ID: ${req.params.id} não foi encontrada, verifique os valores colocados para status ou categoria.` });
  };

  DeleteTask = async (req: Request, res: Response) => {
    const result = await deleteTask(req.params.id);
    if (result.affected! > 0) {
      return res.status(200).json({ message: `O ID: ${req.params.id} foi deletado com sucesso.` });
    }
    return res.status(404).json({ message: `O ID: ${req.params.id} não foi encontrado.` });
  };

  getTask = async (req: Request, res: Response) => {
    const task = await getTask(req.params.id);
    if (Array.isArray(task) && task.length > 0) {
      return res.status(200).json(task);
    } else {
      return res.status(404).json({ message: 'Tarefa não encontrada, verifique o ID.' });
    }
  };

  getTasks = async (req: Request, res: Response) => {
    const tasks = await getAllTasks();
    if (Array.isArray(tasks) && tasks.length > 0) {
      return res.status(200).json(tasks);
    } else {
      return res.status(404).json({ message: 'Nenhuma tarefa cadastrada.' });
    }
  };
}

export default new Task();
