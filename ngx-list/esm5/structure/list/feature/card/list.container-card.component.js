/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { ListCardTemplateArchive } from './template/list.card-template.archive';
var ListContainerCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListContainerCardComponent, _super);
    function ListContainerCardComponent(changeDetectorRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        _this.listCardTemplateArchive = listCardTemplateArchive;
        _this.items = [];
        return _this;
    }
    /**
     * @return {?}
     */
    ListContainerCardComponent.prototype.ngOnInit = /**
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
            _this.items = items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.getData(); }));
            _this.changeDetectorRef.detectChanges();
        }));
        this.listCardTemplateArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.cardTemplate = template;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    ListContainerCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-container-card',
                    template: "\n\n\t\t<gui-list-card-item *ngFor=\"let element of items\"\n\t\t\t\t\t\t\t\t [item]=\"element\"\n\t\t\t\t\t\t\t\t [template]=\"cardTemplate\">\n\t\t</gui-list-card-item>\n\n\t\t<gui-empty-source [items]=\"items\">\n\t\t</gui-empty-source>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-list-container-card]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    ListContainerCardComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: StructureSourceWarehouse },
        { type: ListCardTemplateArchive }
    ]; };
    return ListContainerCardComponent;
}(SmartComponent));
export { ListContainerCardComponent };
if (false) {
    /** @type {?} */
    ListContainerCardComponent.prototype.items;
    /** @type {?} */
    ListContainerCardComponent.prototype.cardTemplate;
    /**
     * @type {?}
     * @private
     */
    ListContainerCardComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListContainerCardComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListContainerCardComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListContainerCardComponent.prototype.listCardTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb250YWluZXItY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC9saXN0LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUU1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVoRjtJQW1CZ0Qsc0RBQWM7SUFNN0Qsb0NBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4Qix3QkFBa0QsRUFDbEQsdUJBQWdEO1FBSHBFLFlBSUMsaUJBQU8sU0FDUDtRQUw0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQVBwRSxXQUFLLEdBQWUsRUFBRSxDQUFDOztJQVN2QixDQUFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQUEsaUJBb0JDO1FBbkJBLElBQUksQ0FBQyx3QkFBd0I7YUFDM0IsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUF3QjtZQUNuQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHVCQUF1QjthQUMxQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQTBCO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXBERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLHVQQVVUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNMLGlDQUFpQyxFQUFFLFVBQVE7cUJBQzNDO2lCQUNEOzs7O2dCQTNCaUMsaUJBQWlCO2dCQUsxQyxXQUFXO2dCQUhYLHdCQUF3QjtnQkFLeEIsdUJBQXVCOztJQXdEaEMsaUNBQUM7Q0FBQSxBQXRERCxDQW1CZ0QsY0FBYyxHQW1DN0Q7U0FuQ1ksMEJBQTBCOzs7SUFFdEMsMkNBQXVCOztJQUV2QixrREFBK0I7Ozs7O0lBRW5CLHVEQUFxRDs7Ozs7SUFDOUQsaURBQXlDOzs7OztJQUN6Qyw4REFBbUU7Ozs7O0lBQ25FLDZEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IExpc3RDYXJkVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3QuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC1jb250YWluZXItY2FyZCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWxpc3QtY2FyZC1pdGVtICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIGl0ZW1zXCJcblx0XHRcdFx0XHRcdFx0XHQgW2l0ZW1dPVwiZWxlbWVudFwiXG5cdFx0XHRcdFx0XHRcdFx0IFt0ZW1wbGF0ZV09XCJjYXJkVGVtcGxhdGVcIj5cblx0XHQ8L2d1aS1saXN0LWNhcmQtaXRlbT5cblxuXHRcdDxndWktZW1wdHktc291cmNlIFtpdGVtc109XCJpdGVtc1wiPlxuXHRcdDwvZ3VpLWVtcHR5LXNvdXJjZT5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3QtY29udGFpbmVyLWNhcmRdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb250YWluZXJDYXJkQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cblx0Y2FyZFRlbXBsYXRlOiBMaXN0Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdENhcmRUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Vcblx0XHRcdC5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXMgPSBpdGVtcy5tYXAoaSA9PiBpLmdldERhdGEoKSk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGVtcGxhdGU6IExpc3RDYXJkVGVtcGxhdGUpID0+IHtcblx0XHRcdFx0dGhpcy5jYXJkVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=