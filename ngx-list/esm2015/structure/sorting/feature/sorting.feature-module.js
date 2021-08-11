/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SortingApiModule } from '../core/api/sorting.api-module';
export class SortingFeatureModule extends FeatureModule {
    /**
     * @param {?} sortingApiModule
     */
    constructor(sortingApiModule) {
        super();
        if (sortingApiModule === null) {
            throw new Error('SortingApiModule is required.');
        }
    }
    /**
     * @return {?}
     */
    static forComponent() {
        return [];
    }
}
SortingFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SortingApiModule
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SortingFeatureModule.ctorParameters = () => [
    { type: SortingApiModule, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5mZWF0dXJlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvcnRpbmcvZmVhdHVyZS9zb3J0aW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBWWxFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhOzs7O0lBTXRELFlBQXdCLGdCQUFrQztRQUN6RCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksZ0JBQWdCLEtBQUssSUFBSSxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNqRDtJQUNGLENBQUM7Ozs7SUFURCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OztZQWJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFFWixnQkFBZ0I7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYOzs7O1lBWFEsZ0JBQWdCLHVCQWtCWCxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNvcnRpbmdBcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS9zb3J0aW5nLmFwaS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRTb3J0aW5nQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHNvcnRpbmdBcGlNb2R1bGU6IFNvcnRpbmdBcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChzb3J0aW5nQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1NvcnRpbmdBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==