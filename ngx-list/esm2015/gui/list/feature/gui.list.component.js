/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { guiListProviders } from './gui.list.providers';
import { StructureSourceWarehouse } from '../../../lib/structure/feature-api/source/structure-source.warehouse';
export class GuiListComponent extends GuiListGateway {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} structureSourceWarehouse
     */
    constructor(platformId, elementRef, changeDetectorRef, structureSourceWarehouse) {
        super();
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.structureSourceWarehouse = structureSourceWarehouse;
    }
}
GuiListComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list',
                template: "<gui-container\n\t\t[source]=\"items\"\n\t\t[template]=\"containerTemplate\">\n\n</gui-container>\n",
                providers: [
                    ...guiListProviders
                ],
                host: {
                    '[class]': `"gui-list"`
                },
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
GuiListComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: StructureSourceWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.structureSourceWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFpQmhILE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjOzs7Ozs7O0lBRW5ELFlBQXlDLFVBQWUsRUFDN0MsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQzNCLHdCQUFrRDtRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUpnQyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUMzQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBRXRFLENBQUM7OztZQXJCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLCtHQUF3QztnQkFJeEMsU0FBUyxFQUFFO29CQUNWLEdBQUcsZ0JBQWdCO2lCQUNuQjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLFlBQVk7aUJBQ3ZCO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUNyQzs7Ozs0Q0FHYSxNQUFNLFNBQUMsV0FBVztZQXhCTyxVQUFVO1lBQXhDLGlCQUFpQjtZQUtqQix3QkFBd0I7Ozs7Ozs7SUFtQnBCLHNDQUE0Qzs7Ozs7SUFDckQsc0NBQThCOzs7OztJQUM5Qiw2Q0FBNEM7Ozs7O0lBQzVDLG9EQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RHYXRld2F5IH0gZnJvbSAnLi9ndWkubGlzdC5nYXRld2F5JztcbmltcG9ydCB7IGd1aUxpc3RQcm92aWRlcnMgfSBmcm9tICcuL2d1aS5saXN0LnByb3ZpZGVycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9ndWkubGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2d1aS5saXN0Lm5neC5zY3NzJ1xuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5ndWlMaXN0UHJvdmlkZXJzXG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6IGBcImd1aS1saXN0XCJgXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdENvbXBvbmVudCBleHRlbmRzIEd1aUxpc3RHYXRld2F5IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxufVxuIl19