/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { guiListProviders } from './gui.list.providers';
import { StructureSourceWarehouse } from '../../../lib/structure/domain-api/source/structure-source.warehouse';
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
                template: "<gui-container\n\t\t[items]=\"source\"\n\t\t[template]=\"containerTemplate\"\n\t\t[cardTemplate]=\"listCardTemplate\"\n\t\t[paging]=\"paging\"\n\t\t[mode]=\"listViewMode\"\n\t\t[modeSelector]=\"listViewModeSelector\"\n>\n</gui-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFpQi9HLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjOzs7Ozs7O0lBRW5ELFlBQXlDLFVBQWUsRUFDN0MsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQzNCLHdCQUFrRDtRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUpnQyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUMzQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBRXRFLENBQUM7OztZQXJCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDJQQUF3QztnQkFJeEMsU0FBUyxFQUFFO29CQUNWLEdBQUcsZ0JBQWdCO2lCQUNuQjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wsa0JBQWtCLEVBQUUsUUFBUTtpQkFDNUI7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7OzRDQUdhLE1BQU0sU0FBQyxXQUFXO1lBeEJPLFVBQVU7WUFBeEMsaUJBQWlCO1lBS2pCLHdCQUF3Qjs7Ozs7OztJQW1CcEIsc0NBQTRDOzs7OztJQUNyRCxzQ0FBOEI7Ozs7O0lBQzlCLDZDQUE0Qzs7Ozs7SUFDNUMsb0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpTGlzdEdhdGV3YXkgfSBmcm9tICcuL2d1aS5saXN0LmdhdGV3YXknO1xuaW1wb3J0IHsgZ3VpTGlzdFByb3ZpZGVycyB9IGZyb20gJy4vZ3VpLmxpc3QucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZ3VpLmxpc3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9ndWkubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uZ3VpTGlzdFByb3ZpZGVyc1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdF0nOiBgXCJ0cnVlXCJgXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdENvbXBvbmVudCBleHRlbmRzIEd1aUxpc3RHYXRld2F5IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxufVxuIl19