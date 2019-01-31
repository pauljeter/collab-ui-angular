import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSectionComponent } from './list-item-section.component';

describe('ListItemSectionComponent', () => {
  let component: ListItemSectionComponent;
  let fixture: ComponentFixture<ListItemSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
