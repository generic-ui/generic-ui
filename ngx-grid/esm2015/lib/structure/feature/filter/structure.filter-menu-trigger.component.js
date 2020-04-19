/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { structureComponentToken } from '../structure-component-token';
import { StructureComponent } from '../structure.component';
import { StructureFilterMenuComponent } from './structure.filter-menu.component';
export class StructureFilterMenuTriggerComponent {
    /**
     * @param {?} injector
     * @param {?} drawerService
     * @param {?} structureComponent
     */
    constructor(injector, drawerService, structureComponent) {
        this.injector = injector;
        this.drawerService = drawerService;
        this.structureComponent = structureComponent;
    }
    /**
     * @return {?}
     */
    openDrawer() {
        /** @type {?} */
        const structureElement = this.structureComponent.getElementRef();
        this.drawerService.open(structureElement, StructureFilterMenuComponent, { injector: this.injector });
    }
}
StructureFilterMenuTriggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-filter-menu-trigger',
                template: `
		<div [gui-tooltip]="'Filters'"
			 (click)="openDrawer()"
			 class="gui-structure-filter-icon-wrapper">
			<gui-structure-filter-icon></gui-structure-filter-icon>
		</div>
	`
            }] }
];
/** @nocollapse */
StructureFilterMenuTriggerComponent.ctorParameters = () => [
    { type: Injector },
    { type: FabricDrawerService },
    { type: StructureComponent, decorators: [{ type: Inject, args: [structureComponentToken,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterMenuTriggerComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureFilterMenuTriggerComponent.prototype.drawerService;
    /**
     * @type {?}
     * @private
     */
    StructureFilterMenuTriggerComponent.prototype.structureComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBWWpGLE1BQU0sT0FBTyxtQ0FBbUM7Ozs7OztJQUUvQyxZQUE2QixRQUFrQixFQUMzQixhQUFrQyxFQUNELGtCQUFzQztRQUY5RCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUNELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDM0YsQ0FBQzs7OztJQUVELFVBQVU7O2NBQ0gsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRTtRQUVoRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSw0QkFBNEIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0RyxDQUFDOzs7WUFyQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFFBQVEsRUFBRTs7Ozs7O0VBTVQ7YUFDRDs7OztZQWYyQixRQUFRO1lBQzNCLG1CQUFtQjtZQUVuQixrQkFBa0IsdUJBaUJ0QixNQUFNLFNBQUMsdUJBQXVCOzs7Ozs7O0lBRnRCLHVEQUFtQzs7Ozs7SUFDNUMsNERBQW1EOzs7OztJQUNuRCxpRUFBd0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgc3RydWN0dXJlQ29tcG9uZW50VG9rZW4gfSBmcm9tICcuLi9zdHJ1Y3R1cmUtY29tcG9uZW50LXRva2VuJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL3N0cnVjdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtZmlsdGVyLW1lbnUtdHJpZ2dlcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ0ZpbHRlcnMnXCJcblx0XHRcdCAoY2xpY2spPVwib3BlbkRyYXdlcigpXCJcblx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtZmlsdGVyLWljb24td3JhcHBlclwiPlxuXHRcdFx0PGd1aS1zdHJ1Y3R1cmUtZmlsdGVyLWljb24+PC9ndWktc3RydWN0dXJlLWZpbHRlci1pY29uPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkcmF3ZXJTZXJ2aWNlOiBGYWJyaWNEcmF3ZXJTZXJ2aWNlLFxuXHRcdFx0XHRASW5qZWN0KHN0cnVjdHVyZUNvbXBvbmVudFRva2VuKSBwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbXBvbmVudDogU3RydWN0dXJlQ29tcG9uZW50KSB7XG5cdH1cblxuXHRvcGVuRHJhd2VyKCk6IHZvaWQge1xuXHRcdGNvbnN0IHN0cnVjdHVyZUVsZW1lbnQgPSB0aGlzLnN0cnVjdHVyZUNvbXBvbmVudC5nZXRFbGVtZW50UmVmKCk7XG5cblx0XHR0aGlzLmRyYXdlclNlcnZpY2Uub3BlbihzdHJ1Y3R1cmVFbGVtZW50LCBTdHJ1Y3R1cmVGaWx0ZXJNZW51Q29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuXHR9XG59XG4iXX0=