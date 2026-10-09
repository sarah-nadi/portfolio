import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Reveal } from '../../core/directives/reveal';
import { CONTACT } from '../../core/data/portfolio.data';
import { EMAILJS } from '../../core/config/emailjs.config';

type TextField = 'sender' | 'email' | 'message';
type Status = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly info = CONTACT;
  readonly status = signal<Status>('idle');

  readonly form = this.fb.group({
    sender: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    domain: [CONTACT.domains[0], Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
    website: [''],   // honeypot: حقل مخفي البوتات بتملاه
  });

  bad(name: TextField): boolean {
    const c = this.form.controls[name];
    return c.invalid && c.touched;
  }

  async submit(): Promise<void> {
    if (this.status() === 'sending') return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();

    // لو الحقل المخفي اتملا يبقى بوت: نتجاهل الطلب بهدوء
    if (v.website) {
      this.status.set('sent');
      return;
    }

    this.status.set('sending');
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        { from_name: v.sender, reply_to: v.email, domain: v.domain, message: v.message },
        { publicKey: EMAILJS.publicKey },
      );
      this.status.set('sent');
      this.form.reset();
    } catch {
      this.status.set('error');
    }
  }
}