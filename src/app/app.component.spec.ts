import { TestBed, async, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonService } from './services/person/person.service';
import { AppComponent } from './app.component';
import { PersonsComponent } from './components/persons/persons.component';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';
import { HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        PersonsComponent,
        FieldErrorDisplayComponent
      ],
      providers: [
        PersonService
      ],
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
