/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { FeatureModule } from '@generic-ui/hermes';
import { SearchApiModule } from '../domain-api/search.api-module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2ZlYXR1cmUvc2VhcmNoLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFtQnJELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhOzs7O0lBTXJELFlBQVksZUFBZ0M7UUFDM0MsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLGVBQWUsS0FBSyxJQUFJLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1NBQzlDO0lBQ0YsQ0FBQzs7OztJQVRELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7O1lBcEJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsbUJBQW1CO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsbUJBQW1CO29CQUNuQixlQUFlO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUixtQkFBbUI7b0JBQ25CLGVBQWU7aUJBQ2Y7YUFDRDs7OztZQXBCUSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hBcGlNb2R1bGUgfSBmcm9tICcuLi9kb21haW4tYXBpL3NlYXJjaC5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vc2VhcmNoLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0Ly8gU2VhcmNoQXBpTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U2VhcmNoSWNvbkNvbXBvbmVudCxcblx0XHRTZWFyY2hDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFNlYXJjaEljb25Db21wb25lbnQsXG5cdFx0U2VhcmNoQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihzZWFyY2hBcGlNb2R1bGU6IFNlYXJjaEFwaU1vZHVsZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKHNlYXJjaEFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTZWFyY2hBcGlNb2R1bGUgaXMgcmVxdWlyZWQnKVxuXHRcdH1cblx0fVxuXG59XG4iXX0=