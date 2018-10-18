import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoElemComponent } from './todo-elem.component';

describe('TodoElemComponent', () => {
  let component: TodoElemComponent;
  let fixture: ComponentFixture<TodoElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
