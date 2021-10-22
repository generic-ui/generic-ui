/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { ListViewTemplateArchive } from './template/list-view-template.archive';
var ListViewSourceComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSourceComponent, _super);
    function ListViewSourceComponent(changeDetectorRef, elementRef, structureId, structureSourceWarehouse, containerTemplateArchive) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        _this.containerTemplateArchive = containerTemplateArchive;
        _this.source = [];
        _this.addClassToHost('gui-block');
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hermesSubscribe(this.structureSourceWarehouse.onEntities(this.structureId), (/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.source = items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.getSourceItem(); }));
        }));
        this.hermesSubscribe(this.containerTemplateArchive.on(), (/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.template = template;
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    ListViewSourceComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-list-view-source';
    };
    ListViewSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-list-view-source]',
                    template: "<div *ngFor=\"let element of source\"\n\t [item]=\"element\"\n\t [template]=\"template\"\n\t gui-list-view-item>\n</div>\n\n<div [items]=\"source\" gui-empty-source>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ListViewSourceComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: SourceWarehouse },
        { type: ListViewTemplateArchive }
    ]; };
    return ListViewSourceComponent;
}(SmartComponent));
export { ListViewSourceComponent };
if (false) {
    /** @type {?} */
    ListViewSourceComponent.prototype.source;
    /** @type {?} */
    ListViewSourceComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.containerTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRWhGO0lBTTZDLG1EQUFjO0lBTTFELGlDQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4Qix3QkFBeUMsRUFDekMsd0JBQWlEO1FBSnJFLFlBS0Msa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBRXBDO1FBUDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUFpQjtRQUN6Qyw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBUnJFLFlBQU0sR0FBZSxFQUFFLENBQUM7UUFVdkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFDbEMsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQWVDO1FBYkEsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7O1FBQzFELFVBQUMsS0FBd0I7WUFDeEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFqQixDQUFpQixFQUFDLENBQUM7UUFDakQsQ0FBQyxFQUNELENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxDQUNuQixJQUFJLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFOzs7O1FBQ2xDLFVBQUMsUUFBMEI7WUFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDMUIsQ0FBQyxFQUNELENBQUM7SUFDSCxDQUFDOzs7OztJQUVTLGlEQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOztnQkF4Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLDJMQUFnRDtvQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFiaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBSWpFLFdBQVc7Z0JBSFgsZUFBZTtnQkFLZix1QkFBdUI7O0lBMkNoQyw4QkFBQztDQUFBLEFBekNELENBTTZDLGNBQWMsR0FtQzFEO1NBbkNZLHVCQUF1Qjs7O0lBRW5DLHlDQUF3Qjs7SUFFeEIsMkNBQTJCOzs7OztJQUVmLG9EQUFxRDs7Ozs7SUFFOUQsOENBQXlDOzs7OztJQUN6QywyREFBMEQ7Ozs7O0lBQzFELDJEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmFyY2hpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWxpc3Qtdmlldy1zb3VyY2VdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cdHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ibG9jaycpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlLm9uRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoaXRlbXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlID0gaXRlbXMubWFwKGkgPT4gaS5nZXRTb3VyY2VJdGVtKCkpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlLm9uKCksXG5cdFx0XHQodGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGUpID0+IHtcblx0XHRcdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC12aWV3LXNvdXJjZSc7XG5cdH1cbn1cbiJdfQ==