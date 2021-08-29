/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/domain/structure.id';
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
        this.subscribeAndRender(this.structureSourceWarehouse.onEntities(this.structureId), (/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.source = items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.getData(); }));
        }));
        this.subscribeAndRender(this.containerTemplateArchive.on(), (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRWhGO0lBTTZDLG1EQUFjO0lBTTFELGlDQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4Qix3QkFBeUMsRUFDekMsd0JBQWlEO1FBSnJFLFlBS0Msa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBRXBDO1FBUDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUFpQjtRQUN6Qyw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBUnJFLFlBQU0sR0FBZSxFQUFFLENBQUM7UUFVdkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFDbEMsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQWVDO1FBYkEsSUFBSSxDQUFDLGtCQUFrQixDQUN0QixJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7UUFDMUQsVUFBQyxLQUF3QjtZQUN4QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUNELENBQUM7UUFFRixJQUFJLENBQUMsa0JBQWtCLENBQ3RCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEVBQUU7Ozs7UUFDbEMsVUFBQyxRQUEwQjtZQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMxQixDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7Ozs7O0lBRVMsaURBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7O2dCQXhDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsMkxBQWdEO29CQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWJpQyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFJakUsV0FBVztnQkFIWCxlQUFlO2dCQUtmLHVCQUF1Qjs7SUEyQ2hDLDhCQUFDO0NBQUEsQUF6Q0QsQ0FNNkMsY0FBYyxHQW1DMUQ7U0FuQ1ksdUJBQXVCOzs7SUFFbkMseUNBQXdCOztJQUV4QiwyQ0FBMkI7Ozs7O0lBRWYsb0RBQXFEOzs7OztJQUU5RCw4Q0FBeUM7Ozs7O0lBQ3pDLDJEQUEwRDs7Ozs7SUFDMUQsMkRBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuYXJjaGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktbGlzdC12aWV3LXNvdXJjZV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U291cmNlQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0dGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kUmVuZGVyKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Uub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChpdGVtczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBpdGVtcy5tYXAoaSA9PiBpLmdldERhdGEoKSk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kUmVuZGVyKFxuXHRcdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZUFyY2hpdmUub24oKSxcblx0XHRcdCh0ZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LXZpZXctc291cmNlJztcblx0fVxufVxuIl19