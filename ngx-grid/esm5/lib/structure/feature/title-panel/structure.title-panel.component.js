/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureTitlePanelConfigArchive } from './structure.title-panel.config-archive';
import { DomSanitizer } from '@angular/platform-browser';
import { Reactive } from '../../../../common/cdk/reactive';
var StructureTitlePanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureTitlePanelComponent, _super);
    function StructureTitlePanelComponent(structureTitlePanelConfigArchive, sanitizer) {
        var _this = _super.call(this) || this;
        _this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        _this.sanitizer = sanitizer;
        _this.structureTitlePanelConfigArchive
            .onValue()
            .pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            _this.title = title.template;
            if (typeof _this.title === 'function') {
                _this.title = _this.title('Title panel');
            }
            _this.safeHTML = _this.sanitizer.bypassSecurityTrustHtml(_this.title);
        }));
        return _this;
    }
    StructureTitlePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-title-panel',
                    template: "\n\t\t<div [innerHTML]=\"safeHTML\" class=\"gui-title-panel\"></div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureTitlePanelComponent.ctorParameters = function () { return [
        { type: StructureTitlePanelConfigArchive },
        { type: DomSanitizer }
    ]; };
    return StructureTitlePanelComponent;
}(Reactive));
export { StructureTitlePanelComponent };
if (false) {
    /** @type {?} */
    StructureTitlePanelComponent.prototype.title;
    /** @type {?} */
    StructureTitlePanelComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureTitlePanelComponent.prototype.structureTitlePanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureTitlePanelComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHM0Q7SUFRa0Qsd0RBQVE7SUFJekQsc0NBQW9CLGdDQUFrRSxFQUNsRSxTQUF1QjtRQUQzQyxZQUVDLGlCQUFPLFNBYVA7UUFmbUIsc0NBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSxlQUFTLEdBQVQsU0FBUyxDQUFjO1FBRTFDLEtBQUksQ0FBQyxnQ0FBZ0M7YUFDbkMsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxLQUF1QjtZQUNsQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFFNUIsSUFBSSxPQUFPLEtBQUksQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFO2dCQUNyQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdkM7WUFFRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7O2dCQTNCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLDBFQUVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBWlEsZ0NBQWdDO2dCQUNoQyxZQUFZOztJQWlDckIsbUNBQUM7Q0FBQSxBQTdCRCxDQVFrRCxRQUFRLEdBcUJ6RDtTQXJCWSw0QkFBNEI7OztJQUN4Qyw2Q0FBeUM7O0lBQ3pDLGdEQUFtQjs7Ozs7SUFFUCx3RUFBMEU7Ozs7O0lBQ25GLGlEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBUaXRsZVBhbmVsQ29uZmlnIH0gZnJvbSAnLi90aXRsZS1wYW5lbC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXRpdGxlLXBhbmVsJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIiBjbGFzcz1cImd1aS10aXRsZS1wYW5lbFwiPjwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RpdmUge1xuXHR0aXRsZTogc3RyaW5nIHwgKCh0aXRsZTogYW55KSA9PiBzdHJpbmcpO1xuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aXRsZTogVGl0bGVQYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLnRpdGxlID0gdGl0bGUudGVtcGxhdGU7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLnRpdGxlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHRoaXMudGl0bGUoJ1RpdGxlIHBhbmVsJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnNhZmVIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy50aXRsZSk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=