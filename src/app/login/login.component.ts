import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public loading: boolean = false;

  public logou: boolean = false;

  public showRedirectMsg: boolean = false;

  public formularioLogin: FormGroup = new FormGroup({
    'usuario': new FormControl('', [Validators.required]),
    'senha': new FormControl('', [Validators.required])
  })

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  login(): boolean {
    if (this.formularioLogin?.get('usuario')?.value == 'bryan' && this.formularioLogin.get('senha')?.value == '123') {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.logou = true;
        setTimeout(() => {
          this.showRedirectMsg = true;
          setTimeout(() => {
            this.router.navigateByUrl('/painel-navegacao');
          }, 1500);
        }, 1500);
        return true;
      }, 3000);
    }

    return false;
  }

}
