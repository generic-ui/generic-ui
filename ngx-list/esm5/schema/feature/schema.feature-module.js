/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SchemaApiModule } from '../core/api/schema.api-module';
import { SchemaRowClassArchive } from '../core/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../core/api/styling/schema.row-style.archive';
var SchemaFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaFeatureModule, _super);
    function SchemaFeatureModule(schemaApiModule) {
        var _this = _super.call(this) || this;
        if (schemaApiModule === null) {
            throw new Error('SchemaApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    SchemaFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [
            SchemaRowClassArchive,
            SchemaRowStyleArchive
        ];
    };
    SchemaFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SchemaApiModule
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    SchemaFeatureModule.ctorParameters = function () { return [
        { type: SchemaApiModule, decorators: [{ type: Optional }] }
    ]; };
    return SchemaFeatureModule;
}(FeatureModule));
export { SchemaFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9zY2hlbWEuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUdyRjtJQVF5QywrQ0FBYTtJQVNyRCw2QkFBd0IsZUFBZ0M7UUFBeEQsWUFDQyxpQkFBTyxTQUlQO1FBSEEsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNoRDs7SUFDRixDQUFDOzs7O0lBWk0sZ0NBQVk7OztJQUFuQjtRQUNDLE9BQU87WUFDTixxQkFBcUI7WUFDckIscUJBQXFCO1NBQ3JCLENBQUM7SUFDSCxDQUFDOztnQkFmRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osZUFBZTtxQkFDZjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7Ozs7Z0JBWlEsZUFBZSx1QkFzQlYsUUFBUTs7SUFPdEIsMEJBQUM7Q0FBQSxBQXhCRCxDQVF5QyxhQUFhLEdBZ0JyRDtTQWhCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvc2NoZW1hLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3NBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hUm93U3R5bGVBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U2NoZW1hQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYUZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSxcblx0XHRcdFNjaGVtYVJvd1N0eWxlQXJjaGl2ZVxuXHRcdF07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBzY2hlbWFBcGlNb2R1bGU6IFNjaGVtYUFwaU1vZHVsZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKHNjaGVtYUFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTY2hlbWFBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==