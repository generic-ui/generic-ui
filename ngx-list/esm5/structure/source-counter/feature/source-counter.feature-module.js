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
import { FilterMenuFeatureModule } from '../../filter/feature/filter-menu.feature-module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UtY291bnRlci9mZWF0dXJlL3NvdXJjZS1jb3VudGVyLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRzFGO0lBdUJnRCxzREFBYTtJQXZCN0Q7O0lBNkJBLENBQUM7Ozs7SUFKTyx1Q0FBWTs7O0lBQW5CO1FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztnQkEzQkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUVaLHVCQUF1Qjt3QkFFdkIsa0JBQWtCO3FCQUVsQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsZ0NBQWdDO3dCQUNoQyx5QkFBeUI7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUixnQ0FBZ0M7cUJBQ2hDO29CQUNELFNBQVMsRUFBRTt3QkFDVixtQkFBbUI7cUJBQ25CO29CQUNELGVBQWUsRUFBRTt3QkFDaEIseUJBQXlCO3FCQUN6QjtpQkFDRDs7SUFPRCxpQ0FBQztDQUFBLEFBN0JELENBdUJnRCxhQUFhLEdBTTVEO1NBTlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEZhYnJpY0J1dHRvbk1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9maWx0ZXIvZmVhdHVyZS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlLFxuXG5cdFx0RmFicmljQnV0dG9uTW9kdWxlXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmUsXG5cdFx0QWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0QWN0aXZlRmlsdGVyU2VydmljZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQ291bnRlckZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==