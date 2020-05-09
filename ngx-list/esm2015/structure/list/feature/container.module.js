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
export class ContainerModule {
    /**
     * @param {?} paging
     */
    constructor(paging) {
        this.paging = paging;
    }
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
ContainerModule.ctorParameters = () => [
    { type: PagingFeatureModule }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContainerModule.prototype.paging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jb250YWluZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUU5RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQW9CbEcsTUFBTSxPQUFPLGVBQWU7Ozs7SUFFM0IsWUFBNkIsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7SUFBRyxDQUFDOzs7WUFuQjVELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLHdCQUF3QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGtCQUFrQjtvQkFDbEIsMEJBQTBCO29CQUMxQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDYjs7OztZQXBCUSxtQkFBbUI7Ozs7Ozs7SUF1QmYsaUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWluZXJTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9jb250YWluZXItc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWluZXJMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9jb250YWluZXItbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWluZXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2xpc3QtaXRlbS9jb250YWluZXItbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZW1wdHktc291cmNlL2ZlYXR1cmUvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbnRhaW5lckNvbXBvbmVudCxcblx0XHRDb250YWluZXJMaXN0SXRlbUNvbXBvbmVudCxcblx0XHRDb250YWluZXJMYXlvdXRDb21wb25lbnQsXG5cdFx0Q29udGFpbmVyU291cmNlQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb250YWluZXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmdGZWF0dXJlTW9kdWxlKSB7fVxufVxuIl19