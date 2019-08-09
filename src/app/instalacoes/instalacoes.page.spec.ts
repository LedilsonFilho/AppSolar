import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacoesPage } from './instalacoes.page';

describe('InstalacoesPage', () => {
  let component: InstalacoesPage;
  let fixture: ComponentFixture<InstalacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
