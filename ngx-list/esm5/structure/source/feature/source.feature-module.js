/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { RowSelectionTypeArchive } from '../domain-api/formation/type/row-selection-type.archive';
import { SourceApiModule } from '../domain-api/source.api-module';
var SourceFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(SourceFeatureModule, _super);
    function SourceFeatureModule(sourceApiModule) {
        var _this = _super.call(this) || this;
        if (sourceApiModule === null) {
            throw new Error('SourceApiModule is required');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    SourceFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [
            RowSelectionTypeArchive,
        ];
    };
    SourceFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SourceApiModule
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    SourceFeatureModule.ctorParameters = function () { return [
        { type: SourceApiModule, decorators: [{ type: Optional }] }
    ]; };
    return SourceFeatureModule;
}(FeatureModule));
export { SourceFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvc291cmNlLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJbEU7SUFReUMsK0NBQWE7SUFRckQsNkJBQXdCLGVBQWdDO1FBQXhELFlBQ0MsaUJBQU8sU0FJUDtRQUhBLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDL0M7O0lBQ0YsQ0FBQzs7OztJQVhNLGdDQUFZOzs7SUFBbkI7UUFDQyxPQUFPO1lBQ04sdUJBQXVCO1NBQ3ZCLENBQUM7SUFDSCxDQUFDOztnQkFkRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osZUFBZTtxQkFDZjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7Ozs7Z0JBWFEsZUFBZSx1QkFvQlYsUUFBUTs7SUFPdEIsMEJBQUM7Q0FBQSxBQXZCRCxDQVF5QyxhQUFhLEdBZXJEO1NBZlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTb3VyY2VBcGlNb2R1bGUgfSBmcm9tICcuLi9kb21haW4tYXBpL3NvdXJjZS5hcGktbW9kdWxlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLWFwaS9mb3JtYXRpb24vbW9kZS9yb3ctc2VsZWN0aW9uLW1vZGUucmVwb3NpdG9yeSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTb3VyY2VBcGlNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Um93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0XTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHNvdXJjZUFwaU1vZHVsZTogU291cmNlQXBpTW9kdWxlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAoc291cmNlQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1NvdXJjZUFwaU1vZHVsZSBpcyByZXF1aXJlZCcpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=