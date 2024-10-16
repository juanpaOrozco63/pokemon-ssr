import { CommonModule, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID)
  ngOnInit(): void {
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({name:'description', content:'Pricing Page personal'});
  } 
}