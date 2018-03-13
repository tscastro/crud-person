import { TestBed, async, inject } from '@angular/core/testing';
import { PersonService } from './person.service';
import { HttpClient, HttpParams, HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('PersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PersonService, HttpClientModule, HttpClientTestingModule]
    });
  });

  it('should be created', async(inject([PersonService], (service: PersonService) => {
    expect(service).toBeTruthy();
  }));
});
