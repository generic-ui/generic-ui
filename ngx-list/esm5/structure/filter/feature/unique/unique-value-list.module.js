/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { UniqueValueListComponent } from './unique-value-list.component';
import { FilterApiModule } from '../../core/api/filter.api-module';
import { fabricImports } from '../../../grid/feature/structure-fabric.imports';
var UniqueValueListModule = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueValueListModule, _super);
    function UniqueValueListModule(filterApiModule) {
        var _this = _super.call(this) || this;
        if (filterApiModule === null) {
            throw new Error('FilterApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    UniqueValueListModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [];
    };
    UniqueValueListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        FilterApiModule
                    ],
                    declarations: [
                        UniqueValueListComponent
                    ],
                    exports: [
                        UniqueValueListComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    UniqueValueListModule.ctorParameters = function () { return [
        { type: FilterApiModule, decorators: [{ type: Optional }] }
    ]; };
    return UniqueValueListModule;
}(FeatureModule));
export { UniqueValueListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUcvRTtJQWEyQyxpREFBYTtJQU12RCwrQkFBd0IsZUFBZ0M7UUFBeEQsWUFDQyxpQkFBTyxTQUlQO1FBSEEsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNoRDs7SUFDRixDQUFDOzs7O0lBVE0sa0NBQVk7OztJQUFuQjtRQUNDLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBakJELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGVBQWU7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLHdCQUF3QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLHdCQUF3QjtxQkFDeEI7aUJBQ0Q7Ozs7Z0JBaEJRLGVBQWUsdUJBdUJWLFFBQVE7O0lBT3RCLDRCQUFDO0NBQUEsQUExQkQsQ0FhMkMsYUFBYSxHQWF2RDtTQWJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJBcGlNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdEZpbHRlckFwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRVbmlxdWVWYWx1ZUxpc3RDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFVuaXF1ZVZhbHVlTGlzdENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlTGlzdE1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmaWx0ZXJBcGlNb2R1bGU6IEZpbHRlckFwaU1vZHVsZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKGZpbHRlckFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdGaWx0ZXJBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==