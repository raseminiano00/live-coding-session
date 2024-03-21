import { VetStatus } from './pet.enum';

export interface IPet {
  id: number;
  name: string;
  status: VetStatus;
}
