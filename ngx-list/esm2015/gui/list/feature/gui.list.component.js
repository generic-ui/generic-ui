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
                template: "<gui-container\n\t\t[items]=\"items\"\n\t\t[template]=\"containerTemplate\"\n\t\t[paging]=\"paging\"\n>\n</gui-container>\n",
                providers: [
                    ...guiListProviders
                ],
                host: {
                    '[class.gui-list]': `"true"`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFpQmhILE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjOzs7Ozs7O0lBRW5ELFlBQXlDLFVBQWUsRUFDN0MsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQzNCLHdCQUFrRDtRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUpnQyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUMzQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBRXRFLENBQUM7OztZQXJCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHVJQUF3QztnQkFJeEMsU0FBUyxFQUFFO29CQUNWLEdBQUcsZ0JBQWdCO2lCQUNuQjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wsa0JBQWtCLEVBQUUsUUFBUTtpQkFDNUI7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7OzRDQUdhLE1BQU0sU0FBQyxXQUFXO1lBeEJPLFVBQVU7WUFBeEMsaUJBQWlCO1lBS2pCLHdCQUF3Qjs7Ozs7OztJQW1CcEIsc0NBQTRDOzs7OztJQUNyRCxzQ0FBOEI7Ozs7O0lBQzlCLDZDQUE0Qzs7Ozs7SUFDNUMsb0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpTGlzdEdhdGV3YXkgfSBmcm9tICcuL2d1aS5saXN0LmdhdGV3YXknO1xuaW1wb3J0IHsgZ3VpTGlzdFByb3ZpZGVycyB9IGZyb20gJy4vZ3VpLmxpc3QucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2d1aS5saXN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZ3VpLmxpc3Qubmd4LnNjc3MnXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmd1aUxpc3RQcm92aWRlcnNcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3RdJzogYFwidHJ1ZVwiYFxuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RDb21wb25lbnQgZXh0ZW5kcyBHdWlMaXN0R2F0ZXdheSB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cbn1cbiJdfQ==