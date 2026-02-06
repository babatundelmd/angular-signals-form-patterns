import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { form, required, email, minLength, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-basic-form',
  imports: [JsonPipe, FormField],
  templateUrl: './basic-form.html',
  styleUrl: './basic-form.scss',
})
export class BasicForm {
  // 1. Define your model as a signal
  loginModel = signal({
    email: '',
    password: ''
  });

  // 2. Create the form with validation schema
  loginForm = form(this.loginModel, (path: { email: any; password: any; }) => {
    required(path.email, { message: 'Email is required' });
    email(path.email, { message: 'Please enter a valid email address' });
    required(path.password, { message: 'Password is required' });
    minLength(path.password, 8, { message: 'Password must be at least 8 characters' });
  });

  // 3. Handle submission
  onSubmit(): void {
    if (this.loginForm().valid()) {
      const credentials = this.loginModel();
      console.log('✅ Form submitted:', credentials);
      alert(`Login successful!\nEmail: ${credentials.email}`);
      this.loginModel.set({ email: '', password: '' });
    } else {
      this.loginForm.email().markAsTouched();
      this.loginForm.password().markAsTouched();
    }
  }

  codeExample = `// 1. Define your model as a signal
loginModel = signal({
  email: '',
  password: ''
});

// 2. Create the form with validation schema
loginForm = form(this.loginModel, (path) => {
  required(path.email, { message: 'Email is required' });
  email(path.email, { message: 'Please enter a valid email' });
  required(path.password, { message: 'Password is required' });
  minLength(path.password, 8, { message: 'Min 8 characters' });
});

// 3. Bind in template
<input [formField]="loginForm.email" />
<input [formField]="loginForm.password" />`;
}
