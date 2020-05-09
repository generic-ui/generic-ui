/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { ContainerSourceComponent } from './source/container-source.component';
import { ContainerLayoutComponent } from './layout/container-layout.component';
import { ContainerListItemComponent } from './source/list-item/container-list-item.component';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { EmptySourceFeatureModule } from '../../empty-source/feature/empty-source.feature-module';
var ContainerModule = /** @class */ (function () {
    function ContainerModule(paging) {
        this.paging = paging;
    }
    ContainerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        PagingFeatureModule,
                        EmptySourceFeatureModule
                    ],
                    declarations: [
                        ContainerComponent,
                        ContainerListItemComponent,
                        ContainerLayoutComponent,
                        ContainerSourceComponent
                    ],
                    exports: [
                        ContainerComponent
                    ],
                    providers: []
                },] }
    ];
    /** @nocollapse */
    ContainerModule.ctorParameters = function () { return [
        { type: PagingFeatureModule }
    ]; };
    return ContainerModule;
}());
export { ContainerModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContainerModule.prototype.paging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jb250YWluZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUU5RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUdsRztJQW1CQyx5QkFBNkIsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7SUFBRyxDQUFDOztnQkFuQjVELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLHdCQUF3QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGtCQUFrQjt3QkFDbEIsMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGtCQUFrQjtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBcEJRLG1CQUFtQjs7SUF3QjVCLHNCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FIWSxlQUFlOzs7Ozs7SUFFZixpQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhaW5lclNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2NvbnRhaW5lci1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhaW5lckxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2NvbnRhaW5lci1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhaW5lckxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvbGlzdC1pdGVtL2NvbnRhaW5lci1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9lbXB0eS1zb3VyY2UvZmVhdHVyZS9lbXB0eS1zb3VyY2UuZmVhdHVyZS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UGFnaW5nRmVhdHVyZU1vZHVsZSxcblx0XHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29udGFpbmVyQ29tcG9uZW50LFxuXHRcdENvbnRhaW5lckxpc3RJdGVtQ29tcG9uZW50LFxuXHRcdENvbnRhaW5lckxheW91dENvbXBvbmVudCxcblx0XHRDb250YWluZXJTb3VyY2VDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbnRhaW5lckNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lck1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmc6IFBhZ2luZ0ZlYXR1cmVNb2R1bGUpIHt9XG59XG4iXX0=