import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMediaComponent } from './calcular-media.component';

describe('CalcularMediaComponent', () => {
  let component: CalculadoraMediaComponent;
  let fixture: ComponentFixture<CalculadoraMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraMediaComponent]
    });
    fixture = TestBed.createComponent(CalculadoraMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Angular-TypeScript'`, () => {
    expect(component.title).toEqual('Angular-TypeScript');
  });

  it('should render title in the template', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Angular-TypeScript app is running!');
  });
});

