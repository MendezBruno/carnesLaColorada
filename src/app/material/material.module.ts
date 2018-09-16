import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatTooltipModule,
  MatBadgeModule,


  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatBadgeModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatBadgeModule,
  ]
})
export class MaterialModule { }
