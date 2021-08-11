/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { UniqueValueListComponent } from './unique-value-list.component';
import { FilterApiModule } from '../../core/api/filter.api-module';
import { fabricImports } from '../../../grid/feature/structure-fabric.imports';
export class UniqueValueListModule extends FeatureModule {
    /**
     * @param {?} filterApiModule
     */
    constructor(filterApiModule) {
        super();
        if (filterApiModule === null) {
            throw new Error('FilterApiModule is required.');
        }
    }
    /**
     * @return {?}
     */
    static forComponent() {
        return [];
    }
}
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
UniqueValueListModule.ctorParameters = () => [
    { type: FilterApiModule, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBZ0IvRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTs7OztJQU12RCxZQUF3QixlQUFnQztRQUN2RCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7U0FDaEQ7SUFDRixDQUFDOzs7O0lBVEQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzs7WUFqQkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZUFBZTtpQkFDZjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2Isd0JBQXdCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Isd0JBQXdCO2lCQUN4QjthQUNEOzs7O1lBaEJRLGVBQWUsdUJBdUJWLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVW5pcXVlVmFsdWVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uLy4uLy4uL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0ZmFicmljSW1wb3J0cyxcblx0XHRGaWx0ZXJBcGlNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0VW5pcXVlVmFsdWVMaXN0Q29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRVbmlxdWVWYWx1ZUxpc3RDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZUxpc3RNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZmlsdGVyQXBpTW9kdWxlOiBGaWx0ZXJBcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChmaWx0ZXJBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRmlsdGVyQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=