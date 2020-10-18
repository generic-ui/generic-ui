/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { RowSelectionTypeArchive } from '../core/api/formation/type/row-selection-type.archive';
import { SourceApiModule } from '../core/api/source.api-module';
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
            RowSelectionTypeArchive
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvc291cmNlLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHaEU7SUFReUMsK0NBQWE7SUFRckQsNkJBQXdCLGVBQWdDO1FBQXhELFlBQ0MsaUJBQU8sU0FJUDtRQUhBLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDL0M7O0lBQ0YsQ0FBQzs7OztJQVhNLGdDQUFZOzs7SUFBbkI7UUFDQyxPQUFPO1lBQ04sdUJBQXVCO1NBQ3ZCLENBQUM7SUFDSCxDQUFDOztnQkFkRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osZUFBZTtxQkFDZjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7Ozs7Z0JBVlEsZUFBZSx1QkFtQlYsUUFBUTs7SUFPdEIsMEJBQUM7Q0FBQSxBQXZCRCxDQVF5QyxhQUFhLEdBZXJEO1NBZlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU291cmNlQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvc291cmNlLmFwaS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U291cmNlQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlXG5cdFx0XTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHNvdXJjZUFwaU1vZHVsZTogU291cmNlQXBpTW9kdWxlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAoc291cmNlQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1NvdXJjZUFwaU1vZHVsZSBpcyByZXF1aXJlZCcpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=