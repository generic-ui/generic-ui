/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FilterApiModule } from '../../core/api/filter.api-module';
import { fabricImports } from '../../../grid/feature/structure-fabric.imports';
import { ActiveFilterListComponent } from './active-filter-list.component';
import { ActiveSearchComponent } from './search/active-search.component';
export class ActiveFilterListModule extends FeatureModule {
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
ActiveFilterListModule.ctorParameters = () => [
    { type: FilterApiModule, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQWlCekUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7Ozs7SUFNeEQsWUFBd0IsZUFBZ0M7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLGVBQWUsS0FBSyxJQUFJLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7OztJQVRELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7O1lBbEJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLGVBQWU7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHlCQUF5QjtvQkFDekIscUJBQXFCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IseUJBQXlCO2lCQUN6QjthQUNEOzs7O1lBbkJRLGVBQWUsdUJBMEJWLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uLy4uLy4uL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC9hY3RpdmUtc2VhcmNoLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdEZpbHRlckFwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50LFxuXHRcdEFjdGl2ZVNlYXJjaENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWN0aXZlRmlsdGVyTGlzdENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZmlsdGVyQXBpTW9kdWxlOiBGaWx0ZXJBcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChmaWx0ZXJBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRmlsdGVyQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=