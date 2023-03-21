import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
    selector: 'app-listing-detail-page',
    templateUrl: './listing-detail-page.component.html',
    styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
    isLoading: boolean = true;
    public listing: Listing;

    constructor(
        private route: ActivatedRoute,
        private listingService: ListingsService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.listingService.getListingById(id!)
            .subscribe(listing => {
                this.listing = listing;
                this.isLoading = false;
            });
        this.listingService.addViewToListing(id!)
            .subscribe(() => console.log('Views updated!'));
    }

}
