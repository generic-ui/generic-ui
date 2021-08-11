/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var FabricRatingComponent = /** @class */ (function () {
    function FabricRatingComponent() {
        this.rating = 3;
        this.onRatingChange = new EventEmitter();
        this.stars = [];
        this.previewRating = 0;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricRatingComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.starsLength) {
            if (this.starsLength) {
                this.createStarsArray(this.starsLength);
            }
        }
    };
    /**
     * @return {?}
     */
    FabricRatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.stars.length === 0) {
            this.createStarsArray(5);
        }
    };
    /**
     * @param {?} starNumber
     * @param {?} rating
     * @return {?}
     */
    FabricRatingComponent.prototype.isRating = /**
     * @param {?} starNumber
     * @param {?} rating
     * @return {?}
     */
    function (starNumber, rating) {
        return !(rating >= starNumber);
    };
    /**
     * @param {?} star
     * @return {?}
     */
    FabricRatingComponent.prototype.changeRating = /**
     * @param {?} star
     * @return {?}
     */
    function (star) {
        this.rating = star;
        this.onRatingChange.emit(star);
    };
    /**
     * @param {?} star
     * @return {?}
     */
    FabricRatingComponent.prototype.changePreviewRating = /**
     * @param {?} star
     * @return {?}
     */
    function (star) {
        this.previewRating = star + 1;
    };
    /**
     * @param {?} length
     * @return {?}
     */
    FabricRatingComponent.prototype.createStarsArray = /**
     * @param {?} length
     * @return {?}
     */
    function (length) {
        for (var i = 1; i <= length; i++) {
            this.stars.push(i);
        }
    };
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
    return FabricRatingComponent;
}());
export { FabricRatingComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL3JhdGluZy9mYWJyaWMtcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBQUE7UUFlQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUUxQixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQWtDM0IsQ0FBQzs7Ozs7SUFoQ0EsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7U0FDRDtJQUNGLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7SUFDRixDQUFDOzs7Ozs7SUFFRCx3Q0FBUTs7Ozs7SUFBUixVQUFTLFVBQWtCLEVBQUUsTUFBYztRQUMxQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELG1EQUFtQjs7OztJQUFuQixVQUFvQixJQUFZO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixNQUFjO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkI7SUFDRixDQUFDOztnQkF2REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0Qix3WkFBNkM7b0JBRTdDLElBQUksRUFBRTt3QkFDTCxvQkFBb0IsRUFBRSxNQUFNO3FCQUM1QjtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7OzhCQUVDLEtBQUs7eUJBR0wsS0FBSztpQ0FHTCxNQUFNOztJQXVDUiw0QkFBQztDQUFBLEFBeERELElBd0RDO1NBOUNZLHFCQUFxQjs7O0lBQ2pDLDRDQUNvQjs7SUFFcEIsdUNBQ21COztJQUVuQiwrQ0FDb0M7O0lBRXBDLHNDQUEwQjs7SUFFMUIsOENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1yYXRpbmcnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLXJhdGluZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2ZhYnJpYy1yYXRpbmcubmd4LnNjc3MnXSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXJhdGluZ10nOiAndHJ1ZSdcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXHRASW5wdXQoKVxuXHRzdGFyc0xlbmd0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJhdGluZzogbnVtYmVyID0gMztcblxuXHRAT3V0cHV0KClcblx0b25SYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0c3RhcnM6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuXHRwcmV2aWV3UmF0aW5nOiBudW1iZXIgPSAwO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5zdGFyc0xlbmd0aCkge1xuXHRcdFx0aWYgKHRoaXMuc3RhcnNMZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVTdGFyc0FycmF5KHRoaXMuc3RhcnNMZW5ndGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5jcmVhdGVTdGFyc0FycmF5KDUpO1xuXHRcdH1cblx0fVxuXG5cdGlzUmF0aW5nKHN0YXJOdW1iZXI6IG51bWJlciwgcmF0aW5nOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIShyYXRpbmcgPj0gc3Rhck51bWJlcik7XG5cdH1cblxuXHRjaGFuZ2VSYXRpbmcoc3RhcjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yYXRpbmcgPSBzdGFyO1xuXHRcdHRoaXMub25SYXRpbmdDaGFuZ2UuZW1pdChzdGFyKTtcblx0fVxuXG5cdGNoYW5nZVByZXZpZXdSYXRpbmcoc3RhcjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2aWV3UmF0aW5nID0gc3RhciArIDE7XG5cdH1cblxuXHRjcmVhdGVTdGFyc0FycmF5KGxlbmd0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gbGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuc3RhcnMucHVzaChpKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==