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
                template: "<div class=\"gui-rating-container\">\n\t<gui-star-icon *ngFor=\"let star of stars\"\n\t\t\t\t   [class.star-icon-gray]=\"isRating(star, rating)\"\n\t\t\t\t   [class.star-icon-hover]=\"isRating(previewRating, star)\"\n\t\t\t\t   (click)=\"changeRating(star)\"\n\t\t\t\t   (mouseenter)=\"changePreviewRating(star)\"\n\t\t\t\t   (mouseleave)=\"changePreviewRating(0)\">\n\t</gui-star-icon>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL3JhdGluZy9mYWJyaWMtcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWXJKLE1BQU0sT0FBTyxxQkFBcUI7SUFWbEM7UUFlQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUUxQixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQWtDM0IsQ0FBQzs7Ozs7SUFoQ0EsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7U0FDRDtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFVBQWtCLEVBQUUsTUFBYztRQUMxQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLElBQVk7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBYztRQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQzs7O1lBdkRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsd1pBQTZDO2dCQUU3QyxJQUFJLEVBQUU7b0JBQ0wsb0JBQW9CLEVBQUUsTUFBTTtpQkFDNUI7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7OzBCQUVDLEtBQUs7cUJBR0wsS0FBSzs2QkFHTCxNQUFNOzs7O0lBTlAsNENBQ29COztJQUVwQix1Q0FDbUI7O0lBRW5CLCtDQUNvQzs7SUFFcEMsc0NBQTBCOztJQUUxQiw4Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktcmF0aW5nJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9mYWJyaWMtcmF0aW5nLm5neC5zY3NzJ10sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1yYXRpbmddJzogJ3RydWUnXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1JhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblx0QElucHV0KClcblx0c3RhcnNMZW5ndGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyYXRpbmc6IG51bWJlciA9IDM7XG5cblx0QE91dHB1dCgpXG5cdG9uUmF0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHN0YXJzOiBBcnJheTxudW1iZXI+ID0gW107XG5cblx0cHJldmlld1JhdGluZzogbnVtYmVyID0gMDtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMuc3RhcnNMZW5ndGgpIHtcblx0XHRcdGlmICh0aGlzLnN0YXJzTGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlU3RhcnNBcnJheSh0aGlzLnN0YXJzTGVuZ3RoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5zdGFycy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuY3JlYXRlU3RhcnNBcnJheSg1KTtcblx0XHR9XG5cdH1cblxuXHRpc1JhdGluZyhzdGFyTnVtYmVyOiBudW1iZXIsIHJhdGluZzogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEocmF0aW5nID49IHN0YXJOdW1iZXIpO1xuXHR9XG5cblx0Y2hhbmdlUmF0aW5nKHN0YXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucmF0aW5nID0gc3Rhcjtcblx0XHR0aGlzLm9uUmF0aW5nQ2hhbmdlLmVtaXQoc3Rhcik7XG5cdH1cblxuXHRjaGFuZ2VQcmV2aWV3UmF0aW5nKHN0YXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucHJldmlld1JhdGluZyA9IHN0YXIgKyAxO1xuXHR9XG5cblx0Y3JlYXRlU3RhcnNBcnJheShsZW5ndGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnN0YXJzLnB1c2goaSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=