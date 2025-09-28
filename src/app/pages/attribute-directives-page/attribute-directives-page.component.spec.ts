import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesPageComponent } from './attribute-directives-page.component';

describe('AttributeDirectivesPageComponent', () => {
  let component: AttributeDirectivesPageComponent;
  let fixture: ComponentFixture<AttributeDirectivesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirectivesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirectivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial neutral state', () => {
    expect(component.state()).toBe('neutral');
  });

  it('should change to active state when setActive is called', () => {
    component.setActive();
    expect(component.state()).toBe('active');
  });

  it('should change to error state when setError is called', () => {
    component.setError();
    expect(component.state()).toBe('error');
  });

  it('should change to neutral state when setNeutral is called', () => {
    component.setNeutral();
    expect(component.state()).toBe('neutral');
  });
});