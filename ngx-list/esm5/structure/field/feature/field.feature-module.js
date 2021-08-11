/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FieldApiModule } from '../core/api/field.api-module';
var FieldFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(FieldFeatureModule, _super);
    function FieldFeatureModule(fieldApiModule) {
        var _this = _super.call(this) || this;
        if (fieldApiModule === null) {
            throw new Error('FieldApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    FieldFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [];
    };
    FieldFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FieldApiModule
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    FieldFeatureModule.ctorParameters = function () { return [
        { type: FieldApiModule, decorators: [{ type: Optional }] }
    ]; };
    return FieldFeatureModule;
}(FeatureModule));
export { FieldFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9mZWF0dXJlL2ZpZWxkLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFOUQ7SUFRd0MsOENBQWE7SUFNcEQsNEJBQXdCLGNBQThCO1FBQXRELFlBQ0MsaUJBQU8sU0FJUDtRQUhBLElBQUksY0FBYyxLQUFLLElBQUksRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDL0M7O0lBQ0YsQ0FBQzs7OztJQVRNLCtCQUFZOzs7SUFBbkI7UUFDQyxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2dCQVpELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixjQUFjO3FCQUNkO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7OztnQkFUUSxjQUFjLHVCQWdCVCxRQUFROztJQU90Qix5QkFBQztDQUFBLEFBckJELENBUXdDLGFBQWEsR0FhcEQ7U0FiWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEZpZWxkQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvZmllbGQuYXBpLW1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmllbGRBcGlNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGZpZWxkQXBpTW9kdWxlOiBGaWVsZEFwaU1vZHVsZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKGZpZWxkQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZpZWxkQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=