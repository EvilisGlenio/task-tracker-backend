export class Task {
  id: string;
  title: string;
  description?: string;
  status: 'pendente' | 'em progresso' | 'concluída';
}
