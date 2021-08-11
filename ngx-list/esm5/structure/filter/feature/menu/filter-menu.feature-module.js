/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricModule } from '@generic-ui/fabric';
import { FilterIconComponent } from './icon/filter-icon.component';
import { FilterMenuTriggerComponent } from './filter-menu-trigger.component';
import { FilterMenuComponent } from './filter-menu.component';
import { ColumnSelectorComponent } from './column-selector/column-selector.component';
import { FilterTypeSelectorComponent } from './filter-selector/filter-type-selector.component';
import { FilterValueComponent } from './value/filter-value.component';
import { FieldSelectorComponent } from './field-selector/field-selector.component';
import { FilterApiModule } from '../../core/api/filter.api-module';
import { ActiveFilterListModule } from '../active-filters/active-filter-list.module';
var FilterMenuFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(FilterMenuFeatureModule, _super);
    function FilterMenuFeatureModule(filterApiModule) {
        var _this = _super.call(this) || this;
        if (filterApiModule === null) {
            throw new Error('FilterApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    FilterMenuFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [];
    };
    FilterMenuFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        ReactiveFormsModule,
                        FilterApiModule,
                        ActiveFilterListModule
                    ],
                    declarations: [
                        FilterIconComponent,
                        FilterMenuComponent,
                        FilterMenuTriggerComponent,
                        ColumnSelectorComponent,
                        FilterTypeSelectorComponent,
                        FilterValueComponent,
                        FieldSelectorComponent
                    ],
                    exports: [
                        FilterMenuTriggerComponent
                    ],
                    entryComponents: [
                        FilterMenuComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    FilterMenuFeatureModule.ctorParameters = function () { return [
        { type: FilterApiModule, decorators: [{ type: Optional }] }
    ]; };
    return FilterMenuFeatureModule;
}(FeatureModule));
export { FilterMenuFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR3JGO0lBd0I2QyxtREFBYTtJQU16RCxpQ0FBd0IsZUFBZ0M7UUFBeEQsWUFDQyxpQkFBTyxTQUlQO1FBSEEsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNoRDs7SUFDRixDQUFDOzs7O0lBVE0sb0NBQVk7OztJQUFuQjtRQUNDLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBNUJELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixzQkFBc0I7cUJBQ3RCO29CQUNELFlBQVksRUFBRTt3QkFDYixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3dCQUMxQix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0Isb0JBQW9CO3dCQUNwQixzQkFBc0I7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUiwwQkFBMEI7cUJBQzFCO29CQUNELGVBQWUsRUFBRTt3QkFDaEIsbUJBQW1CO3FCQUNuQjtpQkFDRDs7OztnQkEzQlEsZUFBZSx1QkFrQ1YsUUFBUTs7SUFPdEIsOEJBQUM7Q0FBQSxBQXJDRCxDQXdCNkMsYUFBYSxHQWF6RDtTQWJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZpbHRlckljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vZmlsdGVyLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi1zZWxlY3Rvci9jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXNlbGVjdG9yL2ZpbHRlci10eXBlLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdE1vZHVsZSB9IGZyb20gJy4uL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0RmlsdGVyQXBpTW9kdWxlLFxuXHRcdEFjdGl2ZUZpbHRlckxpc3RNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmlsdGVySWNvbkNvbXBvbmVudCxcblx0XHRGaWx0ZXJNZW51Q29tcG9uZW50LFxuXHRcdEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50LFxuXHRcdENvbHVtblNlbGVjdG9yQ29tcG9uZW50LFxuXHRcdEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCxcblx0XHRGaWx0ZXJWYWx1ZUNvbXBvbmVudCxcblx0XHRGaWVsZFNlbGVjdG9yQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGaWx0ZXJNZW51Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZmlsdGVyQXBpTW9kdWxlOiBGaWx0ZXJBcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChmaWx0ZXJBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRmlsdGVyQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=