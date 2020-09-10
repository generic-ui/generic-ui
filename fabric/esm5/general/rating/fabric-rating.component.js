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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL3JhdGluZy9mYWJyaWMtcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJKO0lBQUE7UUFlQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUUxQixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQWtDM0IsQ0FBQzs7Ozs7SUFoQ0EsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7U0FDRDtJQUNGLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7SUFDRixDQUFDOzs7Ozs7SUFFRCx3Q0FBUTs7Ozs7SUFBUixVQUFTLFVBQWtCLEVBQUUsTUFBYztRQUMxQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELG1EQUFtQjs7OztJQUFuQixVQUFvQixJQUFZO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixNQUFjO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkI7SUFDRixDQUFDOztnQkF2REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0Qix3WkFBNkM7b0JBRTdDLElBQUksRUFBRTt3QkFDTCxvQkFBb0IsRUFBRSxNQUFNO3FCQUM1QjtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7OzhCQUVDLEtBQUs7eUJBR0wsS0FBSztpQ0FHTCxNQUFNOztJQXVDUiw0QkFBQztDQUFBLEFBeERELElBd0RDO1NBOUNZLHFCQUFxQjs7O0lBQ2pDLDRDQUNvQjs7SUFFcEIsdUNBQ21COztJQUVuQiwrQ0FDb0M7O0lBRXBDLHNDQUEwQjs7SUFFMUIsOENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXJhdGluZycsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLXJhdGluZy5uZ3guc2NzcyddLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktcmF0aW5nXSc6ICd0cnVlJ1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cdEBJbnB1dCgpXG5cdHN0YXJzTGVuZ3RoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cmF0aW5nOiBudW1iZXIgPSAzO1xuXG5cdEBPdXRwdXQoKVxuXHRvblJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdGFyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cdHByZXZpZXdSYXRpbmc6IG51bWJlciA9IDA7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnN0YXJzTGVuZ3RoKSB7XG5cdFx0XHRpZiAodGhpcy5zdGFyc0xlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZVN0YXJzQXJyYXkodGhpcy5zdGFyc0xlbmd0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuc3RhcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVN0YXJzQXJyYXkoNSk7XG5cdFx0fVxuXHR9XG5cblx0aXNSYXRpbmcoc3Rhck51bWJlcjogbnVtYmVyLCByYXRpbmc6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHJhdGluZyA+PSBzdGFyTnVtYmVyKTtcblx0fVxuXG5cdGNoYW5nZVJhdGluZyhzdGFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJhdGluZyA9IHN0YXI7XG5cdFx0dGhpcy5vblJhdGluZ0NoYW5nZS5lbWl0KHN0YXIpO1xuXHR9XG5cblx0Y2hhbmdlUHJldmlld1JhdGluZyhzdGFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZpZXdSYXRpbmcgPSBzdGFyICsgMTtcblx0fVxuXG5cdGNyZWF0ZVN0YXJzQXJyYXkobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5zdGFycy5wdXNoKGkpO1xuXHRcdH1cblx0fVxufVxuIl19