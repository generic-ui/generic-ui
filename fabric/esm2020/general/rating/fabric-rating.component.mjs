import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../common/icons/star-icon/star-icon.component";
export class FabricRatingComponent {
    constructor() {
        this.starsLength = 5;
        this.rating = 3;
        this.onRatingChange = new EventEmitter();
        this.stars = [];
        this.previewRating = 0;
    }
    ngOnChanges(changes) {
        if (changes['starsLength']) {
            this.createStarsArray(this.starsLength);
        }
    }
    ngOnInit() {
        this.createStarsArray(this.starsLength);
    }
    isRating(starNumber, rating) {
        return !(rating >= starNumber);
    }
    changeRating(star) {
        this.rating = star;
        this.onRatingChange.emit(star);
    }
    changePreviewRating(star) {
        this.previewRating = star + 1;
    }
    createStarsArray(length) {
        if (length) {
            for (let i = 1; i <= length; i++) {
                this.stars.push(i);
            }
        }
    }
}
FabricRatingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricRatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricRatingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FabricRatingComponent, selector: "gui-rating", inputs: { starsLength: "starsLength", rating: "rating" }, outputs: { onRatingChange: "onRatingChange" }, host: { properties: { "class.gui-rating": "true" } }, usesOnChanges: true, ngImport: i0, template: "<div class=\"gui-rating-container\">\n\t<gui-star-icon (click)=\"changeRating(star)\"\n\t\t\t\t   (mouseenter)=\"changePreviewRating(star)\"\n\t\t\t\t   (mouseleave)=\"changePreviewRating(0)\"\n\t\t\t\t   *ngFor=\"let star of stars\"\n\t\t\t\t   [class.star-icon-gray]=\"isRating(star, rating)\"\n\t\t\t\t   [class.star-icon-hover]=\"isRating(previewRating, star)\">\n\t</gui-star-icon>\n</div>\n", styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.StarIconComponent, selector: "gui-star-icon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricRatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-rating', host: {
                        '[class.gui-rating]': 'true'
                    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-rating-container\">\n\t<gui-star-icon (click)=\"changeRating(star)\"\n\t\t\t\t   (mouseenter)=\"changePreviewRating(star)\"\n\t\t\t\t   (mouseleave)=\"changePreviewRating(0)\"\n\t\t\t\t   *ngFor=\"let star of stars\"\n\t\t\t\t   [class.star-icon-gray]=\"isRating(star, rating)\"\n\t\t\t\t   [class.star-icon-hover]=\"isRating(previewRating, star)\">\n\t</gui-star-icon>\n</div>\n", styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}\n"] }]
        }], propDecorators: { starsLength: [{
                type: Input
            }], rating: [{
                type: Input
            }], onRatingChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9yYXRpbmcvZmFicmljLXJhdGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9yYXRpbmcvZmFicmljLXJhdGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZckosTUFBTSxPQUFPLHFCQUFxQjtJQVZsQztRQWFDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFHVixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFFMUIsa0JBQWEsR0FBVyxDQUFDLENBQUM7S0FnQzFCO0lBOUJBLFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0YsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxRQUFRLENBQUMsVUFBa0IsRUFBRSxNQUFjO1FBQzFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQVk7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzlCLElBQUksTUFBTSxFQUFFO1lBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkI7U0FDRDtJQUNGLENBQUM7O21IQTVDVyxxQkFBcUI7dUdBQXJCLHFCQUFxQixzT0NabEMsOFlBU0E7NEZER2EscUJBQXFCO2tCQVZqQyxTQUFTOytCQUNDLFlBQVksUUFHaEI7d0JBQ0wsb0JBQW9CLEVBQUUsTUFBTTtxQkFDNUIsaUJBQ2MsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs4QkFLL0MsV0FBVztzQkFEVixLQUFLO2dCQUlOLE1BQU07c0JBREwsS0FBSztnQkFJRyxjQUFjO3NCQUR0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXJhdGluZycsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLXJhdGluZy5jb21wb25lbnQuc2NzcyddLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktcmF0aW5nXSc6ICd0cnVlJ1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0c3RhcnNMZW5ndGg6IG51bWJlciA9IDU7XG5cblx0QElucHV0KClcblx0cmF0aW5nOiBudW1iZXIgPSAzO1xuXG5cdEBPdXRwdXQoKVxuXHRyZWFkb25seSBvblJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdGFyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cdHByZXZpZXdSYXRpbmc6IG51bWJlciA9IDA7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzWydzdGFyc0xlbmd0aCddKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVN0YXJzQXJyYXkodGhpcy5zdGFyc0xlbmd0aCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jcmVhdGVTdGFyc0FycmF5KHRoaXMuc3RhcnNMZW5ndGgpO1xuXHR9XG5cblx0aXNSYXRpbmcoc3Rhck51bWJlcjogbnVtYmVyLCByYXRpbmc6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHJhdGluZyA+PSBzdGFyTnVtYmVyKTtcblx0fVxuXG5cdGNoYW5nZVJhdGluZyhzdGFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJhdGluZyA9IHN0YXI7XG5cdFx0dGhpcy5vblJhdGluZ0NoYW5nZS5lbWl0KHN0YXIpO1xuXHR9XG5cblx0Y2hhbmdlUHJldmlld1JhdGluZyhzdGFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZpZXdSYXRpbmcgPSBzdGFyICsgMTtcblx0fVxuXG5cdGNyZWF0ZVN0YXJzQXJyYXkobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAobGVuZ3RoKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLnN0YXJzLnB1c2goaSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZ3VpLXJhdGluZy1jb250YWluZXJcIj5cblx0PGd1aS1zdGFyLWljb24gKGNsaWNrKT1cImNoYW5nZVJhdGluZyhzdGFyKVwiXG5cdFx0XHRcdCAgIChtb3VzZWVudGVyKT1cImNoYW5nZVByZXZpZXdSYXRpbmcoc3RhcilcIlxuXHRcdFx0XHQgICAobW91c2VsZWF2ZSk9XCJjaGFuZ2VQcmV2aWV3UmF0aW5nKDApXCJcblx0XHRcdFx0ICAgKm5nRm9yPVwibGV0IHN0YXIgb2Ygc3RhcnNcIlxuXHRcdFx0XHQgICBbY2xhc3Muc3Rhci1pY29uLWdyYXldPVwiaXNSYXRpbmcoc3RhciwgcmF0aW5nKVwiXG5cdFx0XHRcdCAgIFtjbGFzcy5zdGFyLWljb24taG92ZXJdPVwiaXNSYXRpbmcocHJldmlld1JhdGluZywgc3RhcilcIj5cblx0PC9ndWktc3Rhci1pY29uPlxuPC9kaXY+XG4iXX0=