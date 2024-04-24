import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from '../../models/card';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss',
})
export class CardModalComponent implements OnInit {
  cardForm!: FormGroup;
  showSpinner: boolean = false;

  constructor(
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Card,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
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
    this.showSpinner = true;
    console.log(this.cardForm.value);
    this.cardService.addCard(this.cardForm.value).subscribe(
      (res: any) => {
        this.getSuccess(res || 'Card added successfully.');
      },
      (err: any) => {
        this.getError(err.message || 'An error occured while card adding .');
      }
    );
  }

  updateCard(): void {
    this.showSpinner = true;
    this.cardService.updateCard(this.cardForm.value, this.data.id).subscribe(
      (res: any) => {
        this.getSuccess(res || 'Card updated successfully.');
      },
      (err: any) => {
        this.getError(err.message || 'An error occured while card updating.');
      }
    );
  }

  deleteCard(): void {
    this.showSpinner = true;
    this.cardService.deleteCard(this.data.id).subscribe(
      (res: any) => {
        this.getSuccess(res || 'Card deleted succesfully.');
      },
      (err: any) => {
        this.getError(err.message || 'An error occured while card deleting.');
      }
    );
  }

  getSuccess(message: string): void {
    this.snackbarService.createSnackBar('success', message);

    this.cardService.getCards();
    this.showSpinner = false;
    this.dialogRef.close(true);
  }

  getError(message: string): void {
    this.snackbarService.createSnackBar('error', message);

    this.showSpinner = false;
  }
}
