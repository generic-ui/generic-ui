import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../common/icons/star-icon/star-icon.component";
function FabricRatingComponent_gui_star_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-star-icon", 2);
    i0.ɵɵlistener("click", function FabricRatingComponent_gui_star_icon_1_Template_gui_star_icon_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const star_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.changeRating(star_r1); })("mouseenter", function FabricRatingComponent_gui_star_icon_1_Template_gui_star_icon_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const star_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.changePreviewRating(star_r1); })("mouseleave", function FabricRatingComponent_gui_star_icon_1_Template_gui_star_icon_mouseleave_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changePreviewRating(0); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const star_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("star-icon-gray", ctx_r0.isRating(star_r1, ctx_r0.rating))("star-icon-hover", ctx_r0.isRating(ctx_r0.previewRating, star_r1));
} }
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
FabricRatingComponent.ɵfac = function FabricRatingComponent_Factory(t) { return new (t || FabricRatingComponent)(); };
FabricRatingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricRatingComponent, selectors: [["gui-rating"]], hostVars: 2, hostBindings: function FabricRatingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-rating", true);
    } }, inputs: { starsLength: "starsLength", rating: "rating" }, outputs: { onRatingChange: "onRatingChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "gui-rating-container"], [3, "star-icon-gray", "star-icon-hover", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"]], template: function FabricRatingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FabricRatingComponent_gui_star_icon_1_Template, 1, 4, "gui-star-icon", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.stars);
    } }, directives: [i1.NgForOf, i2.StarIconComponent], styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricRatingComponent, [{
        type: Component,
        args: [{
                selector: 'gui-rating',
                templateUrl: './fabric-rating.component.html',
                styleUrls: ['./fabric-rating.ngx.scss'],
                host: {
                    '[class.gui-rating]': 'true'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { starsLength: [{
            type: Input
        }], rating: [{
            type: Input
        }], onRatingChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9yYXRpbmcvZmFicmljLXJhdGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9yYXRpbmcvZmFicmljLXJhdGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0NwSix3Q0FLOEQ7SUFML0MsOFFBQTRCLGtSQUFBLDJNQUVILENBQUMsS0FGRTtJQU0zQyxpQkFBZ0I7Ozs7SUFGVix5RUFBK0MsbUVBQUE7O0FET3RELE1BQU0sT0FBTyxxQkFBcUI7SUFWbEM7UUFlQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUUxQixrQkFBYSxHQUFXLENBQUMsQ0FBQztLQWtDMUI7SUFoQ0EsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7U0FDRDtJQUNGLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFrQixFQUFFLE1BQWM7UUFDMUMsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBWTtRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQWM7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7OzBGQTdDVyxxQkFBcUI7d0VBQXJCLHFCQUFxQjs7O1FDWmxDLDhCQUFrQztRQUNqQywwRkFNZ0I7UUFDakIsaUJBQU07O1FBSmtCLGVBQVE7UUFBUixtQ0FBUTs7dUZEUW5CLHFCQUFxQjtjQVZqQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0wsb0JBQW9CLEVBQUUsTUFBTTtpQkFDNUI7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DO2dCQUdBLFdBQVc7a0JBRFYsS0FBSztZQUlOLE1BQU07a0JBREwsS0FBSztZQUlOLGNBQWM7a0JBRGIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1yYXRpbmcnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLXJhdGluZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2ZhYnJpYy1yYXRpbmcubmd4LnNjc3MnXSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXJhdGluZ10nOiAndHJ1ZSdcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXHRASW5wdXQoKVxuXHRzdGFyc0xlbmd0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJhdGluZzogbnVtYmVyID0gMztcblxuXHRAT3V0cHV0KClcblx0b25SYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0c3RhcnM6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuXHRwcmV2aWV3UmF0aW5nOiBudW1iZXIgPSAwO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5zdGFyc0xlbmd0aCkge1xuXHRcdFx0aWYgKHRoaXMuc3RhcnNMZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVTdGFyc0FycmF5KHRoaXMuc3RhcnNMZW5ndGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5jcmVhdGVTdGFyc0FycmF5KDUpO1xuXHRcdH1cblx0fVxuXG5cdGlzUmF0aW5nKHN0YXJOdW1iZXI6IG51bWJlciwgcmF0aW5nOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIShyYXRpbmcgPj0gc3Rhck51bWJlcik7XG5cdH1cblxuXHRjaGFuZ2VSYXRpbmcoc3RhcjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yYXRpbmcgPSBzdGFyO1xuXHRcdHRoaXMub25SYXRpbmdDaGFuZ2UuZW1pdChzdGFyKTtcblx0fVxuXG5cdGNoYW5nZVByZXZpZXdSYXRpbmcoc3RhcjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2aWV3UmF0aW5nID0gc3RhciArIDE7XG5cdH1cblxuXHRjcmVhdGVTdGFyc0FycmF5KGxlbmd0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gbGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuc3RhcnMucHVzaChpKTtcblx0XHR9XG5cdH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJndWktcmF0aW5nLWNvbnRhaW5lclwiPlxuXHQ8Z3VpLXN0YXItaWNvbiAoY2xpY2spPVwiY2hhbmdlUmF0aW5nKHN0YXIpXCJcblx0XHRcdFx0ICAgKG1vdXNlZW50ZXIpPVwiY2hhbmdlUHJldmlld1JhdGluZyhzdGFyKVwiXG5cdFx0XHRcdCAgIChtb3VzZWxlYXZlKT1cImNoYW5nZVByZXZpZXdSYXRpbmcoMClcIlxuXHRcdFx0XHQgICAqbmdGb3I9XCJsZXQgc3RhciBvZiBzdGFyc1wiXG5cdFx0XHRcdCAgIFtjbGFzcy5zdGFyLWljb24tZ3JheV09XCJpc1JhdGluZyhzdGFyLCByYXRpbmcpXCJcblx0XHRcdFx0ICAgW2NsYXNzLnN0YXItaWNvbi1ob3Zlcl09XCJpc1JhdGluZyhwcmV2aWV3UmF0aW5nLCBzdGFyKVwiPlxuXHQ8L2d1aS1zdGFyLWljb24+XG48L2Rpdj5cbiJdfQ==