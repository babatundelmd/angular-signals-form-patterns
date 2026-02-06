# Angular Signal Forms Patterns

Real-world examples for Angular 20+ Signal Forms. Copy, paste, ship.

[![Angular](https://img.shields.io/badge/Angular-21+-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.dev)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🚀 Live Demo

**[View all patterns →]()**

---

## Why This Exists

Angular introduced Signal Forms — a simpler, fully-typed forms API built on Signals. But the official docs only cover basics.

This repo has **production-ready patterns** you can copy into your apps today.

---

## Patterns

| # | Pattern | Description | Status |
|---|---------|-------------|--------|
| 01 | [Basic Form](#01-basic-form) | Login form with validation | ✅ Ready |
| 02 | [Nested Forms](#02-nested-forms) | User profile with address subform | ✅ Ready |
| 03 | [Dynamic Arrays](#03-dynamic-arrays) | Invoice with add/remove line items | ✅ Ready |
| 04 | [Async Validation](#04-async-validation) | Check username availability via API | ✅ Ready |
| 05 | Conditional Validation | Field X required if Y has value | 🔜 Coming |
| 06 | Custom Controls | Build controls without CVA | 🔜 Coming |
| 07 | Multi-Step Wizard | Step-by-step form flow | 🔜 Coming |
| 08 | Signal Store Integration | Forms + NgRx Signal Store | 🔜 Coming |
| 09 | Migration Guide | Reactive Forms → Signal Forms | 🔜 Coming |

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/babatundelmd/angular-signal-forms-patterns.git
cd angular-signal-forms-patterns

# Install dependencies
npm install

# Run the app
ng serve
```

Open `http://localhost:4200` to browse all patterns.

---

## Pattern Details

### 01. Basic Form

A simple login form demonstrating Signal Forms fundamentals.

```typescript
// Define model as a signal
loginModel = signal({ email: '', password: '' });

// Create form with validation
loginForm = form(this.loginModel, (path) => {
  required(path.email);
  email(path.email);
  required(path.password);
  minLength(path.password, 8);
});
```

```html
<!-- Bind with [formField] -->
<input [formField]="loginForm.email" />
<input [formField]="loginForm.password" />
```

**[View full code →](src/app/patterns/basic-form/)**

---

### 02. Nested Forms

User profile with embedded address — Signal Forms handle nested objects automatically.

```typescript
profileModel = signal({
  firstName: '',
  lastName: '',
  address: {
    street: '',
    city: '',
    zipCode: ''
  }
});

profileForm = form(this.profileModel, (path) => {
  required(path.firstName);
  required(path.address.street);  // Dot notation for nested
  required(path.address.city);
});
```

```html
<!-- Access nested fields naturally -->
<input [formField]="profileForm.address.street" />
<input [formField]="profileForm.address.city" />
```

**[View full code →](src/app/patterns/nested-forms/)**

---

### 03. Dynamic Arrays

Invoice with line items — add and remove array elements.

```typescript
invoiceModel = signal({
  customerName: '',
  items: [{ description: '', quantity: 1, price: 0 }]
});

// Add item
addItem() {
  this.invoiceModel.update(inv => ({
    ...inv,
    items: [...inv.items, newItem]
  }));
}

// Remove item  
removeItem(index: number) {
  this.invoiceModel.update(inv => ({
    ...inv,
    items: inv.items.filter((_, i) => i !== index)
  }));
}
```

```html
@for (item of invoiceModel().items; track item.id; let i = $index) {
  <input [formField]="invoiceForm.items[i].description" />
  <button (click)="removeItem(i)">Remove</button>
}
```

**[View full code →](src/app/patterns/dynamic-arrays/)**

---

### 04. Async Validation

Check username availability with API call, debouncing, and loading states.

```typescript
registerForm = form(this.registerModel, (path) => {
  required(path.username);
  
  asyncValidator(path.username, {
    validator: async (value) => {
      const response = await fetch(`/api/check?u=${value}`);
      const { available } = await response.json();
      
      if (!available) {
        return { message: 'Username taken' };
      }
      return null;
    },
    debounce: 300
  });
});
```

```html
@if (registerForm.username().pending()) {
  <span>Checking...</span>
}

<button [disabled]="registerForm.pending()">Submit</button>
```

**[View full code →](src/app/patterns/async-validation/)**

---

## Project Structure

```
src/app/
├── home/
│   └── home.component.ts         # Landing page with pattern grid
├── patterns/
│   ├── basic-form/
│   │   └── basic-form.component.ts
│   ├── nested-forms/
│   │   └── nested-forms.component.ts
│   ├── dynamic-arrays/
│   │   └── dynamic-arrays.component.ts
│   └── async-validation/
│       └── async-validation.component.ts
├── app.component.ts              # Shell with navigation
├── app.routes.ts                 # Route definitions
└── app.config.ts                 # App configuration
```

---

## What Are Signal Forms?

Signal Forms are Angular's new forms API built on Signals. Key differences:

| Reactive Forms | Signal Forms |
|----------------|--------------|
| `FormGroup`, `FormControl`, `FormArray` | Just `form()` function |
| `valueChanges` Observable | Direct signal access |
| Complex typing with generics | Type inference from model |
| ControlValueAccessor for custom controls | Simple `[formField]` directive |

---

## Requirements

- Angular 21+
- Node.js 18+

---

## Who Made This

**Babatunde Lamidi** — Angular GDE 

I've been building Angular apps at enterprise scale and mentoring developers across Africa through Google programs since 2012.

| Program | Role | Impact |
|---------|------|--------|
| GDG Ojo-Festac | Lead (2018–2025) | 7 years of workshops and events |
| Andela Learning Community | Mentor (3 cohorts) | Hundreds trained |
| Google for Startups Accelerator | Mentor | Guiding founders |
| Build with Gems | Mentor (2024) | 10 developers |

### Connect

- 🎥 [YouTube](https://youtube.com/@babatundelmd) — Angular tutorials
- ✍️ [Medium](https://medium.com/@babatundelamidi) — Technical articles
- 🐦 [Twitter](https://twitter.com/babatundelmd) — AOB
- 💼 [LinkedIn](https://linkedin.com/in/babatundelmd) — Connect

---

## Contributing

Found a bug? Want to add a pattern? PRs welcome!

1. Fork the repo
2. Create a branch (`git checkout -b pattern/new-pattern`)
3. Add your pattern in `src/app/patterns/`
4. Update `app.routes.ts` and the home component
5. Submit a PR

---

## License

MIT — use it however you want.

---

⭐ **If this saved you time, star the repo. It helps others find it.**