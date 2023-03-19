import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
    public name: string = '';
    public description: string = '';
    public price: string = '';

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        alert('Creating a new listing...');
        this.router.navigateByUrl('/my-listings');
    }

}
