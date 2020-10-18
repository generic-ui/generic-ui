/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { FeatureModule } from '@generic-ui/hermes';
import { SearchApiModule } from '../core/api/search.api-module';
import { SearchIconComponent } from './icon/search-icon.component';
import { SearchComponent } from './search.component';
export class SearchFeatureModule extends FeatureModule {
    /**
     * @param {?} searchApiModule
     */
    constructor(searchApiModule) {
        super();
        if (searchApiModule === null) {
            throw new Error('SearchApiModule is required');
        }
    }
    /**
     * @return {?}
     */
    static forComponent() {
        return [];
    }
}
SearchFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule,
                    // SearchApiModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    SearchIconComponent,
                    SearchComponent
                ],
                exports: [
                    SearchIconComponent,
                    SearchComponent
                ]
            },] }
];
/** @nocollapse */
SearchFeatureModule.ctorParameters = () => [
    { type: SearchApiModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2ZlYXR1cmUvc2VhcmNoLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFtQnJELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhOzs7O0lBTXJELFlBQVksZUFBZ0M7UUFDM0MsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLGVBQWUsS0FBSyxJQUFJLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQy9DO0lBQ0YsQ0FBQzs7OztJQVRELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7O1lBcEJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsbUJBQW1CO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsbUJBQW1CO29CQUNuQixlQUFlO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUixtQkFBbUI7b0JBQ25CLGVBQWU7aUJBQ2Y7YUFDRDs7OztZQXBCUSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hBcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS9zZWFyY2guYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL3NlYXJjaC1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdC8vIFNlYXJjaEFwaU1vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFNlYXJjaEljb25Db21wb25lbnQsXG5cdFx0U2VhcmNoQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTZWFyY2hJY29uQ29tcG9uZW50LFxuXHRcdFNlYXJjaENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3RydWN0b3Ioc2VhcmNoQXBpTW9kdWxlOiBTZWFyY2hBcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChzZWFyY2hBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU2VhcmNoQXBpTW9kdWxlIGlzIHJlcXVpcmVkJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==