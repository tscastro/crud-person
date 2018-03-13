import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Person } from '../../interfaces/person';
import { PersonService } from '../../services/person/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  name: string;
  persons: Person[];
  person:  Person =  new Person();
  risks = [{'name': 'A'}, {'name': 'B'}, {'name': 'C'}];
  form: FormGroup;

  constructor(private _personService: PersonService, private formBuilder: FormBuilder) { }

  savePerson(person: Person) {
    this._personService.rateCalculator(person.risk)
    .subscribe((rate) => {
      person.rate = <number>rate;
      this._personService.savePerson(person)
      .subscribe((_person) => {
        this._personService.getPersons()
        .subscribe((persons) => {
         this.persons = <Person[]>persons;
         this.person = new Person();
        });
      });
    });
  }

  updatePerson(person: Person) {
    this.person = person;
  }

  deletePerson(id: number) {
    this._personService.deletePerson(id)
    .subscribe((data) => {
       this._personService.getPersons()
        .subscribe((_persons) => {
        this.persons = <Person[]>_persons;
    });
    });
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      creditLimit: [null, Validators.required],
      risk: [null, Validators.required],
      shortAddress: [null, Validators.required],
    });

    this._personService.getPersons()
    .subscribe((_persons) => {
      this.persons = <Person[]>_persons;
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).pristine && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
}
