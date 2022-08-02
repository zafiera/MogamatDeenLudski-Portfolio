import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramTemplateComponent } from './instagram-template.component';

describe('InstagramTemplateComponent', () => {
  let component: InstagramTemplateComponent;
  let fixture: ComponentFixture<InstagramTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
