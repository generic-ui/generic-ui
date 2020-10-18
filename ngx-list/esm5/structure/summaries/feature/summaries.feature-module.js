/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SummariesApiModule } from '../core/api/summaries.api-module';
var SummariesFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesFeatureModule, _super);
    function SummariesFeatureModule(summariesApiModule) {
        var _this = _super.call(this) || this;
        if (summariesApiModule === null) {
            throw new Error('SummariesApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    SummariesFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [];
    };
    SummariesFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SummariesApiModule
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    SummariesFeatureModule.ctorParameters = function () { return [
        { type: SummariesApiModule, decorators: [{ type: Optional }] }
    ]; };
    return SummariesFeatureModule;
}(FeatureModule));
export { SummariesFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUd0RTtJQVE0QyxrREFBYTtJQU14RCxnQ0FBd0Isa0JBQXNDO1FBQTlELFlBQ0MsaUJBQU8sU0FJUDtRQUhBLElBQUksa0JBQWtCLEtBQUssSUFBSSxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNuRDs7SUFDRixDQUFDOzs7O0lBVE0sbUNBQVk7OztJQUFuQjtRQUNDLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBWkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGtCQUFrQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOzs7O2dCQVZRLGtCQUFrQix1QkFpQmIsUUFBUTs7SUFPdEIsNkJBQUM7Q0FBQSxBQXJCRCxDQVE0QyxhQUFhLEdBYXhEO1NBYlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0FwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL3N1bW1hcmllcy5hcGktbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFN1bW1hcmllc0FwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHN1bW1hcmllc0FwaU1vZHVsZTogU3VtbWFyaWVzQXBpTW9kdWxlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAoc3VtbWFyaWVzQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1N1bW1hcmllc0FwaU1vZHVsZSBpcyByZXF1aXJlZC4nKTtcblx0XHR9XG5cdH1cblxufVxuIl19