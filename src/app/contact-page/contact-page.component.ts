import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
    email: string = '';
    message: string = '';
    listing: Listing;

    constructor(
        private route: ActivatedRoute,
        private listingService: ListingsService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.listingService.getListingById(id!)
            .subscribe(listing => {
                this.listing = listing;
                this.message = `Hi, I'm interested in your ${this.listing.name}!`;
            })
    }

    sendMessage(): void {
        alert('Your message has been sent!');
        this.router.navigateByUrl('/listings');
    }

}
