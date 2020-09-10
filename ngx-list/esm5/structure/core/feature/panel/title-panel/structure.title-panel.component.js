/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureTitlePanelConfigArchive } from './structure.title-panel.config-archive';
import { DomSanitizer } from '@angular/platform-browser';
import { Reactive } from '../../../../../common/cdk/reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9wYW5lbC90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlEO0lBUWtELHdEQUFRO0lBSXpELHNDQUFvQixnQ0FBa0UsRUFDbEUsU0FBdUI7UUFEM0MsWUFFQyxpQkFBTyxTQWFQO1FBZm1CLHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsZUFBUyxHQUFULFNBQVMsQ0FBYztRQUUxQyxLQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsS0FBdUI7WUFDbEMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBRTVCLElBQUksT0FBTyxLQUFJLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtnQkFDckMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDOztnQkEzQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSwwRUFFVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVpRLGdDQUFnQztnQkFDaEMsWUFBWTs7SUFpQ3JCLG1DQUFDO0NBQUEsQUE3QkQsQ0FRa0QsUUFBUSxHQXFCekQ7U0FyQlksNEJBQTRCOzs7SUFDeEMsNkNBQXlDOztJQUN6QyxnREFBbUI7Ozs7O0lBRVAsd0VBQTBFOzs7OztJQUNuRixpREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBUaXRsZVBhbmVsQ29uZmlnIH0gZnJvbSAnLi90aXRsZS1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS10aXRsZS1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbaW5uZXJIVE1MXT1cInNhZmVIVE1MXCIgY2xhc3M9XCJndWktdGl0bGUtcGFuZWxcIj48L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVGl0bGVQYW5lbENvbXBvbmVudCBleHRlbmRzIFJlYWN0aXZlIHtcblx0dGl0bGU6IHN0cmluZyB8ICgodGl0bGU6IGFueSkgPT4gc3RyaW5nKTtcblx0c2FmZUhUTUw6IFNhZmVIdG1sO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgodGl0bGU6IFRpdGxlUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy50aXRsZSA9IHRpdGxlLnRlbXBsYXRlO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy50aXRsZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMudGl0bGUgPSB0aGlzLnRpdGxlKCdUaXRsZSBwYW5lbCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMudGl0bGUpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19