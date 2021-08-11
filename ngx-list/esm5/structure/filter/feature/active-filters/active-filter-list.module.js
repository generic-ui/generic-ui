/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FilterApiModule } from '../../core/api/filter.api-module';
import { fabricImports } from '../../../grid/feature/structure-fabric.imports';
import { ActiveFilterListComponent } from './active-filter-list.component';
import { ActiveSearchComponent } from './search/active-search.component';
var ActiveFilterListModule = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveFilterListModule, _super);
    function ActiveFilterListModule(filterApiModule) {
        var _this = _super.call(this) || this;
        if (filterApiModule === null) {
            throw new Error('FilterApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    ActiveFilterListModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [];
    };
    ActiveFilterListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        FilterApiModule
                    ],
                    declarations: [
                        ActiveFilterListComponent,
                        ActiveSearchComponent
                    ],
                    exports: [
                        ActiveFilterListComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    ActiveFilterListModule.ctorParameters = function () { return [
        { type: FilterApiModule, decorators: [{ type: Optional }] }
    ]; };
    return ActiveFilterListModule;
}(FeatureModule));
export { ActiveFilterListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHekU7SUFjNEMsa0RBQWE7SUFNeEQsZ0NBQXdCLGVBQWdDO1FBQXhELFlBQ0MsaUJBQU8sU0FJUDtRQUhBLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7U0FDaEQ7O0lBQ0YsQ0FBQzs7OztJQVRNLG1DQUFZOzs7SUFBbkI7UUFDQyxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2dCQWxCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDYix5QkFBeUI7d0JBQ3pCLHFCQUFxQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLHlCQUF5QjtxQkFDekI7aUJBQ0Q7Ozs7Z0JBbkJRLGVBQWUsdUJBMEJWLFFBQVE7O0lBT3RCLDZCQUFDO0NBQUEsQUEzQkQsQ0FjNEMsYUFBYSxHQWF4RDtTQWJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJBcGlNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL2FjdGl2ZS1zZWFyY2guY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHMsXG5cdFx0RmlsdGVyQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFjdGl2ZUZpbHRlckxpc3RDb21wb25lbnQsXG5cdFx0QWN0aXZlU2VhcmNoQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyTGlzdE1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmaWx0ZXJBcGlNb2R1bGU6IEZpbHRlckFwaU1vZHVsZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKGZpbHRlckFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdGaWx0ZXJBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==