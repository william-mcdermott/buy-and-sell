import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeMyListings } from '../fake-data';
import { ListingsService } from '../listings.service';
import { Listing, NewListingForm } from '../types';

@Component({
    selector: 'app-edit-listing-page',
    templateUrl: './edit-listing-page.component.html',
    styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
    public listing: Listing

    constructor(
        private router: Router,
        private listingService: ListingsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.listingService.getListingById(id!)
            .subscribe(listing => this.listing = listing);
    }

    onSubmit({ name, description, price }: NewListingForm): void {
        this.listingService.editListing(this.listing.id!, name, description, price)
            .subscribe(() => {
                this.router.navigateByUrl('/my-listings');
            });
    }

}
