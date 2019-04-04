import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoInfoComponent } from './veiculo-info.component';

describe('VeiculoInfoComponent', () => {
  let component: VeiculoInfoComponent;
  let fixture: ComponentFixture<VeiculoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
