import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss',
})
export class CardModalComponent implements OnInit {
  cardForm!: FormGroup;

  constructor(
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.cardForm = this.fb.group({
      title: [
        this.data?.title || '',
        [Validators.required, Validators.maxLength(255)],
      ],
      name: [this.data?.name || '', [Validators.maxLength(50)]],
      phone: [
        this.data?.phone || '',
        [Validators.required, Validators.maxLength(20)],
      ],
      email: [
        this.data?.email || '',
        [Validators.email, Validators.maxLength(50)],
      ],
      address: [this.data?.address || '', [Validators.maxLength(255)]],
    });
  }

  addCard(): void {
    console.log(this.cardForm.value);
    this.cardService.addCard(this.cardForm.value).subscribe((res: any) => {
      console.log(res);
      this._snackBar.open('Card added successfully.', '', {
        duration: 3000,
      });
      this.cardService.getCards();
      this.dialogRef.close(true);
    });
  }

  updateCard(): void {
    this.cardService
      .updateCard(this.cardForm.value, this.data.id)
      .subscribe((res: any) => {
        console.log(res);
        this._snackBar.open(res || 'Card updated successfully.', '', {
          duration: 3000,
        });
      this.cardService.getCards();
      this.dialogRef.close(true);
      });
  }
}
