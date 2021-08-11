/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricButtonModule } from '@generic-ui/fabric';
import { ActiveFilterMenuTriggerDirective } from './filter/active-filter-menu-trigger.directive';
import { ActiveFilterMenuComponent } from './filter/active-filter-menu.component';
import { ActiveFilterService } from './filter/active-filter.service';
import { FilterMenuFeatureModule } from '../../../filter/feature/menu/filter-menu.feature-module';
import { ActiveFilterListModule } from '../../../filter/feature/active-filters/active-filter-list.module';
var SourceCounterFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(SourceCounterFeatureModule, _super);
    function SourceCounterFeatureModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SourceCounterFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [];
    };
    SourceCounterFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FilterMenuFeatureModule,
                        ActiveFilterListModule,
                        FabricButtonModule
                    ],
                    declarations: [
                        ActiveFilterMenuTriggerDirective,
                        ActiveFilterMenuComponent
                    ],
                    exports: [
                        ActiveFilterMenuTriggerDirective
                    ],
                    providers: [
                        ActiveFilterService
                    ],
                    entryComponents: [
                        ActiveFilterMenuComponent
                    ]
                },] }
    ];
    return SourceCounterFeatureModule;
}(FeatureModule));
export { SourceCounterFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9jb3VudGVyL3NvdXJjZS1jb3VudGVyLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRzFHO0lBd0JnRCxzREFBYTtJQXhCN0Q7O0lBOEJBLENBQUM7Ozs7SUFKTyx1Q0FBWTs7O0lBQW5CO1FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztnQkE1QkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUVaLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUV0QixrQkFBa0I7cUJBRWxCO29CQUNELFlBQVksRUFBRTt3QkFDYixnQ0FBZ0M7d0JBQ2hDLHlCQUF5QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGdDQUFnQztxQkFDaEM7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG1CQUFtQjtxQkFDbkI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQix5QkFBeUI7cUJBQ3pCO2lCQUNEOztJQU9ELGlDQUFDO0NBQUEsQUE5QkQsQ0F3QmdELGFBQWEsR0FNNUQ7U0FOWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmFicmljQnV0dG9uTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyU2VydmljZSB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9mZWF0dXJlL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSxcblx0XHRBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlLFxuXG5cdFx0RmFicmljQnV0dG9uTW9kdWxlXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmUsXG5cdFx0QWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0QWN0aXZlRmlsdGVyU2VydmljZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQ291bnRlckZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==