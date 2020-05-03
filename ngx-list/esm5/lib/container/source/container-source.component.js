/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureSourceWarehouse } from '../../structure/feature-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../common/cdk/smart-component';
import { StructureId } from '../../structure/domain/structure.id';
import { ContainerTemplateArchive } from '../template/container-template.archive';
var ContainerSourceComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerSourceComponent, _super);
    function ContainerSourceComponent(changeDetectorRef, structureId, structureSourceWarehouse, containerTemplateArchive) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        _this.containerTemplateArchive = containerTemplateArchive;
        return _this;
    }
    /**
     * @return {?}
     */
    ContainerSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.structureSourceWarehouse
            .onEntities(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.source = items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.getData(); }));
            _this.changeDetectorRef.detectChanges();
        }));
        this.containerTemplateArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.template = template;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    ContainerSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-container-source',
                    template: "\n\n\t\t<gui-container-list-item *ngFor=\"let element of source\"\n\t\t\t\t\t   [item]=\"element\"\n\t\t\t\t\t   [template]=\"template\">\n\t\t</gui-container-list-item>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class]': "\"gui-container-source\""
                    }
                }] }
    ];
    /** @nocollapse */
    ContainerSourceComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: StructureSourceWarehouse },
        { type: ContainerTemplateArchive }
    ]; };
    return ContainerSourceComponent;
}(SmartComponent));
export { ContainerSourceComponent };
if (false) {
    /** @type {?} */
    ContainerSourceComponent.prototype.source;
    /** @type {?} */
    ContainerSourceComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    ContainerSourceComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ContainerSourceComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ContainerSourceComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ContainerSourceComponent.prototype.containerTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb250YWluZXIvc291cmNlL2NvbnRhaW5lci1zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR2xGO0lBZ0I4QyxvREFBYztJQU0zRCxrQ0FBNkIsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLHdCQUFrRCxFQUNsRCx3QkFBa0Q7UUFIdEUsWUFJQyxpQkFBTyxTQUNQO1FBTDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCOztJQUV0RSxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQUEsaUJBb0JDO1FBbkJBLElBQUksQ0FBQyx3QkFBd0I7YUFDM0IsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUF3QjtZQUNuQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHdCQUF3QjthQUMzQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQTJCO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWpERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLGlMQU9UO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNMLFNBQVMsRUFBRSwwQkFBd0I7cUJBQ25DO2lCQUNEOzs7O2dCQXZCaUMsaUJBQWlCO2dCQUkxQyxXQUFXO2dCQUhYLHdCQUF3QjtnQkFJeEIsd0JBQXdCOztJQXNEakMsK0JBQUM7Q0FBQSxBQW5ERCxDQWdCOEMsY0FBYyxHQW1DM0Q7U0FuQ1ksd0JBQXdCOzs7SUFFcEMsMENBQW1COztJQUVuQiw0Q0FBNEI7Ozs7O0lBRWhCLHFEQUFxRDs7Ozs7SUFDOUQsK0NBQXlDOzs7OztJQUN6Qyw0REFBbUU7Ozs7O0lBQ25FLDREQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi4vdGVtcGxhdGUvY29udGFpbmVyLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29udGFuaWVyVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS9jb250YW5pZXItdGVtcGxhdGUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktY29udGFpbmVyLXNvdXJjZScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWNvbnRhaW5lci1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGVsZW1lbnQgb2Ygc291cmNlXCJcblx0XHRcdFx0XHQgICBbaXRlbV09XCJlbGVtZW50XCJcblx0XHRcdFx0XHQgICBbdGVtcGxhdGVdPVwidGVtcGxhdGVcIj5cblx0XHQ8L2d1aS1jb250YWluZXItbGlzdC1pdGVtPlxuXG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiBgXCJndWktY29udGFpbmVyLXNvdXJjZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lclNvdXJjZUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzb3VyY2U6IEFycmF5PGFueT47XG5cblx0dGVtcGxhdGU6IENvbnRhbmllclRlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IENvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZVxuXHRcdFx0Lm9uRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBpdGVtcy5tYXAoaSA9PiBpLmdldERhdGEoKSk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRlbXBsYXRlOiBDb250YW5pZXJUZW1wbGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19