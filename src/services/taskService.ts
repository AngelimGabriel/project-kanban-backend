import { TaskSchema } from '../entities/TaskSchema';
import { AppDataSource } from '../database/data-source';

export async function createTask(titulo: string) {
  try {
    const newTask = AppDataSource.manager.create(TaskSchema, {
      titulo,
      status: 'A fazer',
      categoria: 'To Do',
    });
    await AppDataSource.manager.insert(TaskSchema, newTask);
    return 1;
  } catch (e) {
    return 0;
  }
}

export async function getAllTasks() {
  return await AppDataSource.manager.find(TaskSchema);
}

export async function getTask(id: string) {
  try {
    return await AppDataSource.manager.findBy(TaskSchema, { id: id });
  } catch {
    return [];
  }
}

export async function updateTask(id: string, titulo?: string, status?: 'A fazer' | 'Em andamento' | 'Concluída', categoria?: 'To Do' | 'Doing' | 'Done') {
  const taskFieldsUpdate: { titulo?: string; status?: 'A fazer' | 'Em andamento' | 'Concluída'; categoria?: 'To Do' | 'Doing' | 'Done' } = {};

  if (titulo !== undefined) {
    taskFieldsUpdate.titulo = titulo;
  }
  if (status !== undefined) {
    taskFieldsUpdate.status = status;
  }
  if (categoria !== undefined) {
    taskFieldsUpdate.categoria = categoria;
  }

  if (Object.keys(taskFieldsUpdate).length === 0) {
    return {
      affected: 0,
    };
  }

  try {
    return await AppDataSource.manager.update(TaskSchema, { id: id }, taskFieldsUpdate);
  } catch {
    return {
      affected: 0,
    };
  }
}

export async function deleteTask(id: string) {
  return await AppDataSource.manager.delete(TaskSchema, { id: id });
}
