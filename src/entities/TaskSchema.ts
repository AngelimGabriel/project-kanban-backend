import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks')
export class TaskSchema {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  titulo!: string;

  @Column({ default: 'A fazer' })
  status!: 'A fazer' | 'Em andamento' | 'Concluída';

  @Column({ default: 'To Do' })
  categoria!: 'To Do' | 'Doing' | 'Done';
}
