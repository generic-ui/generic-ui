/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { ContainerTemplateArchive } from './template/container-template.archive';
var ContainerSourceComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerSourceComponent, _super);
    function ContainerSourceComponent(changeDetectorRef, structureId, structureSourceWarehouse, containerTemplateArchive) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        _this.containerTemplateArchive = containerTemplateArchive;
        _this.source = [];
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
                    template: "\n\n\t\t<gui-container-list-item *ngFor=\"let element of source\"\n\t\t\t\t\t   [item]=\"element\"\n\t\t\t\t\t   [template]=\"template\">\n\t\t</gui-container-list-item>\n\t\t\n\t\t<gui-empty-source [items]=\"source\">\n\t\t</gui-empty-source>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-container-source]': "\"true\""
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL2NvbnRhaW5lci1zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRWpGO0lBbUI4QyxvREFBYztJQU0zRCxrQ0FBNkIsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLHdCQUFrRCxFQUNsRCx3QkFBa0Q7UUFIdEUsWUFJQyxpQkFBTyxTQUNQO1FBTDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBUHRFLFlBQU0sR0FBZSxFQUFFLENBQUM7O0lBU3hCLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFBQSxpQkFvQkM7UUFuQkEsSUFBSSxDQUFDLHdCQUF3QjthQUMzQixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM1QixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQXdCO1lBQ25DLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBWCxDQUFXLEVBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsd0JBQXdCO2FBQzNCLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsUUFBMkI7WUFDdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBcERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMlBBVVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0wsOEJBQThCLEVBQUUsVUFBUTtxQkFDeEM7aUJBQ0Q7Ozs7Z0JBMUJpQyxpQkFBaUI7Z0JBSTFDLFdBQVc7Z0JBSFgsd0JBQXdCO2dCQUt4Qix3QkFBd0I7O0lBd0RqQywrQkFBQztDQUFBLEFBdERELENBbUI4QyxjQUFjLEdBbUMzRDtTQW5DWSx3QkFBd0I7OztJQUVwQywwQ0FBd0I7O0lBRXhCLDRDQUE0Qjs7Ozs7SUFFaEIscURBQXFEOzs7OztJQUM5RCwrQ0FBeUM7Ozs7O0lBQ3pDLDREQUFtRTs7Ozs7SUFDbkUsNERBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbnRhaW5lclRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9jb250YWluZXItdGVtcGxhdGUnO1xuaW1wb3J0IHsgQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS9jb250YWluZXItdGVtcGxhdGUuYXJjaGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jb250YWluZXItc291cmNlJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktY29udGFpbmVyLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgZWxlbWVudCBvZiBzb3VyY2VcIlxuXHRcdFx0XHRcdCAgIFtpdGVtXT1cImVsZW1lbnRcIlxuXHRcdFx0XHRcdCAgIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZVwiPlxuXHRcdDwvZ3VpLWNvbnRhaW5lci1saXN0LWl0ZW0+XG5cdFx0XG5cdFx0PGd1aS1lbXB0eS1zb3VyY2UgW2l0ZW1zXT1cInNvdXJjZVwiPlxuXHRcdDwvZ3VpLWVtcHR5LXNvdXJjZT5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWNvbnRhaW5lci1zb3VyY2VdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lclNvdXJjZUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHR0ZW1wbGF0ZTogQ29udGFpbmVyVGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZTogQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlXG5cdFx0XHQub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IGl0ZW1zLm1hcChpID0+IGkuZ2V0RGF0YSgpKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGVtcGxhdGU6IENvbnRhaW5lclRlbXBsYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=