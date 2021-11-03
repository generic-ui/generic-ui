import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class FabricRatingComponent {
    constructor() {
        this.rating = 3;
        this.onRatingChange = new EventEmitter();
        this.stars = [];
        this.previewRating = 0;
    }
    ngOnChanges(changes) {
        if (changes.starsLength) {
            if (this.starsLength) {
                this.createStarsArray(this.starsLength);
            }
        }
    }
    ngOnInit() {
        if (this.stars.length === 0) {
            this.createStarsArray(5);
        }
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
        for (let i = 1; i <= length; i++) {
            this.stars.push(i);
        }
    }
}
FabricRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-rating',
                template: "<div class=\"gui-rating-container\">\n\t<gui-star-icon (click)=\"changeRating(star)\"\n\t\t\t\t   (mouseenter)=\"changePreviewRating(star)\"\n\t\t\t\t   (mouseleave)=\"changePreviewRating(0)\"\n\t\t\t\t   *ngFor=\"let star of stars\"\n\t\t\t\t   [class.star-icon-gray]=\"isRating(star, rating)\"\n\t\t\t\t   [class.star-icon-hover]=\"isRating(previewRating, star)\">\n\t</gui-star-icon>\n</div>\n",
                host: {
                    '[class.gui-rating]': 'true'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}\n"]
            },] }
];
FabricRatingComponent.propDecorators = {
    starsLength: [{ type: Input }],
    rating: [{ type: Input }],
    onRatingChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9yYXRpbmcvZmFicmljLXJhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWXJKLE1BQU0sT0FBTyxxQkFBcUI7SUFWbEM7UUFlQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUUxQixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQWtDM0IsQ0FBQztJQWhDQSxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN4QztTQUNEO0lBQ0YsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7SUFDRixDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQWtCLEVBQUUsTUFBYztRQUMxQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxJQUFZO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBYztRQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQzs7O1lBdkRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsd1pBQTZDO2dCQUU3QyxJQUFJLEVBQUU7b0JBQ0wsb0JBQW9CLEVBQUUsTUFBTTtpQkFDNUI7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7OzBCQUVDLEtBQUs7cUJBR0wsS0FBSzs2QkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXJhdGluZycsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLXJhdGluZy5uZ3guc2NzcyddLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktcmF0aW5nXSc6ICd0cnVlJ1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cdEBJbnB1dCgpXG5cdHN0YXJzTGVuZ3RoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cmF0aW5nOiBudW1iZXIgPSAzO1xuXG5cdEBPdXRwdXQoKVxuXHRvblJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdGFyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cdHByZXZpZXdSYXRpbmc6IG51bWJlciA9IDA7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnN0YXJzTGVuZ3RoKSB7XG5cdFx0XHRpZiAodGhpcy5zdGFyc0xlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZVN0YXJzQXJyYXkodGhpcy5zdGFyc0xlbmd0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuc3RhcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVN0YXJzQXJyYXkoNSk7XG5cdFx0fVxuXHR9XG5cblx0aXNSYXRpbmcoc3Rhck51bWJlcjogbnVtYmVyLCByYXRpbmc6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHJhdGluZyA+PSBzdGFyTnVtYmVyKTtcblx0fVxuXG5cdGNoYW5nZVJhdGluZyhzdGFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJhdGluZyA9IHN0YXI7XG5cdFx0dGhpcy5vblJhdGluZ0NoYW5nZS5lbWl0KHN0YXIpO1xuXHR9XG5cblx0Y2hhbmdlUHJldmlld1JhdGluZyhzdGFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZpZXdSYXRpbmcgPSBzdGFyICsgMTtcblx0fVxuXG5cdGNyZWF0ZVN0YXJzQXJyYXkobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5zdGFycy5wdXNoKGkpO1xuXHRcdH1cblx0fVxufVxuIl19