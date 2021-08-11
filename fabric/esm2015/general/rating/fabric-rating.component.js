/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class FabricRatingComponent {
    constructor() {
        this.rating = 3;
        this.onRatingChange = new EventEmitter();
        this.stars = [];
        this.previewRating = 0;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.starsLength) {
            if (this.starsLength) {
                this.createStarsArray(this.starsLength);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.stars.length === 0) {
            this.createStarsArray(5);
        }
    }
    /**
     * @param {?} starNumber
     * @param {?} rating
     * @return {?}
     */
    isRating(starNumber, rating) {
        return !(rating >= starNumber);
    }
    /**
     * @param {?} star
     * @return {?}
     */
    changeRating(star) {
        this.rating = star;
        this.onRatingChange.emit(star);
    }
    /**
     * @param {?} star
     * @return {?}
     */
    changePreviewRating(star) {
        this.previewRating = star + 1;
    }
    /**
     * @param {?} length
     * @return {?}
     */
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
                styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}"]
            }] }
];
FabricRatingComponent.propDecorators = {
    starsLength: [{ type: Input }],
    rating: [{ type: Input }],
    onRatingChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabricRatingComponent.prototype.starsLength;
    /** @type {?} */
    FabricRatingComponent.prototype.rating;
    /** @type {?} */
    FabricRatingComponent.prototype.onRatingChange;
    /** @type {?} */
    FabricRatingComponent.prototype.stars;
    /** @type {?} */
    FabricRatingComponent.prototype.previewRating;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL3JhdGluZy9mYWJyaWMtcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBWXZCLE1BQU0sT0FBTyxxQkFBcUI7SUFWbEM7UUFlQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUUxQixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQWtDM0IsQ0FBQzs7Ozs7SUFoQ0EsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7U0FDRDtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFVBQWtCLEVBQUUsTUFBYztRQUMxQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLElBQVk7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBYztRQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQzs7O1lBdkRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsd1pBQTZDO2dCQUU3QyxJQUFJLEVBQUU7b0JBQ0wsb0JBQW9CLEVBQUUsTUFBTTtpQkFDNUI7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7OzBCQUVDLEtBQUs7cUJBR0wsS0FBSzs2QkFHTCxNQUFNOzs7O0lBTlAsNENBQ29COztJQUVwQix1Q0FDbUI7O0lBRW5CLCtDQUNvQzs7SUFFcEMsc0NBQTBCOztJQUUxQiw4Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXJhdGluZycsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLXJhdGluZy5uZ3guc2NzcyddLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktcmF0aW5nXSc6ICd0cnVlJ1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cdEBJbnB1dCgpXG5cdHN0YXJzTGVuZ3RoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cmF0aW5nOiBudW1iZXIgPSAzO1xuXG5cdEBPdXRwdXQoKVxuXHRvblJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdGFyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cdHByZXZpZXdSYXRpbmc6IG51bWJlciA9IDA7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnN0YXJzTGVuZ3RoKSB7XG5cdFx0XHRpZiAodGhpcy5zdGFyc0xlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZVN0YXJzQXJyYXkodGhpcy5zdGFyc0xlbmd0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuc3RhcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVN0YXJzQXJyYXkoNSk7XG5cdFx0fVxuXHR9XG5cblx0aXNSYXRpbmcoc3Rhck51bWJlcjogbnVtYmVyLCByYXRpbmc6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHJhdGluZyA+PSBzdGFyTnVtYmVyKTtcblx0fVxuXG5cdGNoYW5nZVJhdGluZyhzdGFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJhdGluZyA9IHN0YXI7XG5cdFx0dGhpcy5vblJhdGluZ0NoYW5nZS5lbWl0KHN0YXIpO1xuXHR9XG5cblx0Y2hhbmdlUHJldmlld1JhdGluZyhzdGFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZpZXdSYXRpbmcgPSBzdGFyICsgMTtcblx0fVxuXG5cdGNyZWF0ZVN0YXJzQXJyYXkobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5zdGFycy5wdXNoKGkpO1xuXHRcdH1cblx0fVxufVxuIl19