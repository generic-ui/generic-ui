/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Inject, Injector, ViewEncapsulation } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FilterMenuComponent } from './menu/filter-menu.component';
import { filterContainerToken } from './config/filter-container-token';
export class FilterMenuTriggerComponent {
    /**
     * @param {?} injector
     * @param {?} drawerService
     * @param {?} filterContainerRef
     */
    constructor(injector, drawerService, filterContainerRef) {
        this.injector = injector;
        this.drawerService = drawerService;
        this.filterContainerRef = filterContainerRef;
    }
    /**
     * @return {?}
     */
    openDrawer() {
        /** @type {?} */
        const elementRef = this.filterContainerRef.getElementRef();
        this.drawerService.open(elementRef, FilterMenuComponent, { injector: this.injector });
    }
}
FilterMenuTriggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-filter-menu-trigger',
                template: `
		<div [gui-tooltip]="'Filters'"
			 (click)="openDrawer()"
			 class="gui-filter-icon-wrapper">
			<gui-filter-icon></gui-filter-icon>
		</div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.gui-filter-menu-trigger]': 'true'
                },
                styles: [".gui-filter-icon-wrapper{margin-right:24px}.gui-filter-icon-wrapper .gui-filter-icon{cursor:pointer}.gui-filter-icon-wrapper .gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon-wrapper .gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon-wrapper .gui-filter-icon:hover .cls-1{stroke:#464646}.gui-filter-menu{display:block;width:400px}"]
            }] }
];
/** @nocollapse */
FilterMenuTriggerComponent.ctorParameters = () => [
    { type: Injector },
    { type: FabricDrawerService },
    { type: undefined, decorators: [{ type: Inject, args: [filterContainerToken,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterMenuTriggerComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FilterMenuTriggerComponent.prototype.drawerService;
    /**
     * @type {?}
     * @private
     */
    FilterMenuTriggerComponent.prototype.filterContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBcUJ2RSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7SUFFdEMsWUFBNkIsUUFBa0IsRUFDM0IsYUFBa0MsRUFDSixrQkFBc0M7UUFGM0QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDSix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQ3hGLENBQUM7Ozs7SUFFRCxVQUFVOztjQUNILFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFO1FBRTFELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7WUE3QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7O0VBTVQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0wsaUNBQWlDLEVBQUUsTUFBTTtpQkFDekM7O2FBSUQ7Ozs7WUF6Qm9ELFFBQVE7WUFFcEQsbUJBQW1COzRDQTRCdkIsTUFBTSxTQUFDLG9CQUFvQjs7Ozs7OztJQUZuQiw4Q0FBbUM7Ozs7O0lBQzVDLG1EQUFtRDs7Ozs7SUFDbkQsd0RBQXFGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBJbmplY3RvciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IGZpbHRlckNvbnRhaW5lclRva2VuIH0gZnJvbSAnLi9jb25maWcvZmlsdGVyLWNvbnRhaW5lci10b2tlbic7XG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXJSZWYgfSBmcm9tICcuL2NvbmZpZy9maWx0ZXItY29udGFpbmVyLXJlZic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1maWx0ZXItbWVudS10cmlnZ2VyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInRmlsdGVycydcIlxuXHRcdFx0IChjbGljayk9XCJvcGVuRHJhd2VyKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWZpbHRlci1pY29uLXdyYXBwZXJcIj5cblx0XHRcdDxndWktZmlsdGVyLWljb24+PC9ndWktZmlsdGVyLWljb24+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktZmlsdGVyLW1lbnUtdHJpZ2dlcl0nOiAndHJ1ZSdcblx0fSxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvZmlsdGVyLm5neC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkcmF3ZXJTZXJ2aWNlOiBGYWJyaWNEcmF3ZXJTZXJ2aWNlLFxuXHRcdFx0XHRASW5qZWN0KGZpbHRlckNvbnRhaW5lclRva2VuKSBwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbnRhaW5lclJlZjogRmlsdGVyQ29udGFpbmVyUmVmKSB7XG5cdH1cblxuXHRvcGVuRHJhd2VyKCk6IHZvaWQge1xuXHRcdGNvbnN0IGVsZW1lbnRSZWYgPSB0aGlzLmZpbHRlckNvbnRhaW5lclJlZi5nZXRFbGVtZW50UmVmKCk7XG5cblx0XHR0aGlzLmRyYXdlclNlcnZpY2Uub3BlbihlbGVtZW50UmVmLCBGaWx0ZXJNZW51Q29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuXHR9XG59XG4iXX0=