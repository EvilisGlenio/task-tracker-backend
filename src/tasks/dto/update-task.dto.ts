import { IsIn, IsOptional } from 'class-validator';

export class UpdateTaksDto {
  @IsOptional()
  title?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsIn(['pendente', 'em progresso', 'concluída'])
  status?: 'pendente' | 'em progresso' | 'concluída';
}
