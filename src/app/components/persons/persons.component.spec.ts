import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Person } from '../../interfaces/person';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PersonService } from '../../services/person/person.service';
import { PersonsComponent } from './persons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from '../../components/field-error-display/field-error-display.component';
import { HttpClientModule } from '@angular/common/http';


describe('PersonsComponent', () => {
  let component: PersonsComponent;
  let fixture: ComponentFixture<PersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CurrencyMaskModule,
        HttpClientModule 
      ],
      declarations: [ 
        PersonsComponent,
        FieldErrorDisplayComponent
      ],
      providers: [
        PersonService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
