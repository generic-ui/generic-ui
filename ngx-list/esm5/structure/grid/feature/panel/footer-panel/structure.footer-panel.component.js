/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureFooterPanelConfigArchive } from './structure.footer-panel.config-archive';
import { DomSanitizer } from '@angular/platform-browser';
import { Reactive } from '../../../../../common/cdk/reactive';
var StructureFooterPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureFooterPanelComponent, _super);
    function StructureFooterPanelComponent(structureFooterPanelConfigArchive, sanitizer) {
        var _this = _super.call(this) || this;
        _this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        _this.sanitizer = sanitizer;
        _this.structureFooterPanelConfigArchive
            .onValue()
            .pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            _this.footerTitle = title.template;
            if (typeof _this.footerTitle === 'function') {
                _this.footerTitle = _this.footerTitle('Title panel');
            }
            _this.safeHTML = _this.sanitizer.bypassSecurityTrustHtml(_this.footerTitle);
        }));
        return _this;
    }
    StructureFooterPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-footer-panel',
                    template: "\n\t\t<div [innerHTML]=\"safeHTML\" class=\"gui-footer-panel\"></div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureFooterPanelComponent.ctorParameters = function () { return [
        { type: StructureFooterPanelConfigArchive },
        { type: DomSanitizer }
    ]; };
    return StructureFooterPanelComponent;
}(Reactive));
export { StructureFooterPanelComponent };
if (false) {
    /** @type {?} */
    StructureFooterPanelComponent.prototype.footerTitle;
    /** @type {?} */
    StructureFooterPanelComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureFooterPanelComponent.prototype.structureFooterPanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureFooterPanelComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlEO0lBUW1ELHlEQUFRO0lBSTFELHVDQUFvQixpQ0FBb0UsRUFDcEUsU0FBdUI7UUFEM0MsWUFFQyxpQkFBTyxTQWFQO1FBZm1CLHVDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7UUFDcEUsZUFBUyxHQUFULFNBQVMsQ0FBYztRQUUxQyxLQUFJLENBQUMsaUNBQWlDO2FBQ3BDLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsS0FBd0I7WUFDbkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBRWxDLElBQUksT0FBTyxLQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDM0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ25EO1lBRUQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRSxDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDOztnQkEzQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSwyRUFFVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVpRLGlDQUFpQztnQkFDakMsWUFBWTs7SUFpQ3JCLG9DQUFDO0NBQUEsQUE3QkQsQ0FRbUQsUUFBUSxHQXFCMUQ7U0FyQlksNkJBQTZCOzs7SUFDekMsb0RBQStDOztJQUMvQyxpREFBbUI7Ozs7O0lBRVAsMEVBQTRFOzs7OztJQUNyRixrREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvb3RlclBhbmVsQ29uZmlnIH0gZnJvbSAnLi9mb290ZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtZm9vdGVyLXBhbmVsJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIiBjbGFzcz1cImd1aS1mb290ZXItcGFuZWxcIj48L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cdGZvb3RlclRpdGxlOiBzdHJpbmcgfCAoKHRpdGxlOiBhbnkpID0+IHN0cmluZyk7XG5cdHNhZmVIVE1MOiBTYWZlSHRtbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHRpdGxlOiBGb290ZXJQYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmZvb3RlclRpdGxlID0gdGl0bGUudGVtcGxhdGU7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLmZvb3RlclRpdGxlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5mb290ZXJUaXRsZSA9IHRoaXMuZm9vdGVyVGl0bGUoJ1RpdGxlIHBhbmVsJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnNhZmVIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5mb290ZXJUaXRsZSk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=