import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IPet } from './pets.model';
import { VetStatus } from './pet.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  VET_STATUS = VetStatus;
  listedStatus = VetStatus.LISTED;

  examiningStatus = VetStatus.EXAMINING;

  backStatus = VetStatus.FINALLY_BACK_TO_HOOMAN;
  title = 'live-coding';
  petInputName = '';
  pets: IPet[] = [];

  getListedPets(): IPet[] {
    return this.pets.filter((pet) => pet.status === VetStatus.LISTED);
  }
  getExaminedPets(): IPet[] {
    return this.pets.filter((pet) => pet.status === VetStatus.EXAMINING);
  }

  getBackPets(): IPet[] {
    return this.pets.filter(
      (pet) => pet.status === VetStatus.FINALLY_BACK_TO_HOOMAN
    );
  }

  onAddPetClick() {
    this.pets.push({
      id: this.pets.length,
      name: this.petInputName,
      status: VetStatus.LISTED,
    });
  }

  promotePet(update: IPet, status: VetStatus) {
    const toUpdatePet = this.pets.find((pet) => pet.id === update.id);
    if (!toUpdatePet) {
      return;
    }

    toUpdatePet.status = status;
  }
}
