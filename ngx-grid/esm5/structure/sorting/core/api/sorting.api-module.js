/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SortingCommandInvoker } from './sorting.command-invoker';
import { SortingWarehouse } from './sorting.warehouse';
import { SortingEventRepository } from './sorting.event-repository';
import { SortingDomainModule } from '../domain/sorting.domain-module';
var SortingApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(SortingApiModule, _super);
    function SortingApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortingApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SortingDomainModule
                    ],
                    providers: [
                        SortingCommandInvoker,
                        SortingWarehouse,
                        SortingEventRepository
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return SortingApiModule;
}(ApiModule));
export { SortingApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5hcGktbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEU7SUFhc0MsNENBQVM7SUFiL0M7O0lBY0EsQ0FBQzs7Z0JBZEEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLG1CQUFtQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7cUJBQ3RCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFFRCx1QkFBQztDQUFBLEFBZEQsQ0Fhc0MsU0FBUyxHQUM5QztTQURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvcnRpbmdXYXJlaG91c2UgfSBmcm9tICcuL3NvcnRpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFNvcnRpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL3NvcnRpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTb3J0aW5nRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3NvcnRpbmcuZG9tYWluLW1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U29ydGluZ0RvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTb3J0aW5nQ29tbWFuZEludm9rZXIsXG5cdFx0U29ydGluZ1dhcmVob3VzZSxcblx0XHRTb3J0aW5nRXZlbnRSZXBvc2l0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19