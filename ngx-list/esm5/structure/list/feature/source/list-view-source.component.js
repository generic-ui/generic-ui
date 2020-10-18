/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { ListViewTemplateArchive } from './template/list-view-template.archive';
var ListViewSourceComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSourceComponent, _super);
    function ListViewSourceComponent(changeDetectorRef, structureId, structureSourceWarehouse, containerTemplateArchive) {
        var _this = _super.call(this, changeDetectorRef) || this;
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
    ListViewSourceComponent.prototype.ngOnInit = /**
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
    ListViewSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-view-source',
                    template: "\n\n\t\t<gui-list-view-item *ngFor=\"let element of source\"\n\t\t\t\t\t\t\t[item]=\"element\"\n\t\t\t\t\t\t\t[template]=\"template\">\n\t\t</gui-list-view-item>\n\n\t\t<gui-empty-source [items]=\"source\">\n\t\t</gui-empty-source>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-list-view-source]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    ListViewSourceComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVoRjtJQW1CNkMsbURBQWM7SUFNMUQsaUNBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4Qix3QkFBeUMsRUFDekMsd0JBQWlEO1FBSHJFLFlBSUMsa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFMNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQWlCO1FBQ3pDLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFQckUsWUFBTSxHQUFlLEVBQUUsQ0FBQzs7SUFTeEIsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQW9CQztRQW5CQSxJQUFJLENBQUMsd0JBQXdCO2FBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzVCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBd0I7WUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFYLENBQVcsRUFBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyx3QkFBd0I7YUFDM0IsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxRQUEwQjtZQUNyQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFwREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSwrT0FVVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDTCw4QkFBOEIsRUFBRSxVQUFRO3FCQUN4QztpQkFDRDs7OztnQkExQmlDLGlCQUFpQjtnQkFJMUMsV0FBVztnQkFIWCxlQUFlO2dCQUtmLHVCQUF1Qjs7SUF3RGhDLDhCQUFDO0NBQUEsQUF0REQsQ0FtQjZDLGNBQWMsR0FtQzFEO1NBbkNZLHVCQUF1Qjs7O0lBRW5DLHlDQUF3Qjs7SUFFeEIsMkNBQTJCOzs7OztJQUVmLG9EQUFxRDs7Ozs7SUFDOUQsOENBQXlDOzs7OztJQUN6QywyREFBMEQ7Ozs7O0lBQzFELDJEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmFyY2hpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3LXNvdXJjZScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWxpc3Qtdmlldy1pdGVtICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIHNvdXJjZVwiXG5cdFx0XHRcdFx0XHRcdFtpdGVtXT1cImVsZW1lbnRcIlxuXHRcdFx0XHRcdFx0XHRbdGVtcGxhdGVdPVwidGVtcGxhdGVcIj5cblx0XHQ8L2d1aS1saXN0LXZpZXctaXRlbT5cblxuXHRcdDxndWktZW1wdHktc291cmNlIFtpdGVtc109XCJzb3VyY2VcIj5cblx0XHQ8L2d1aS1lbXB0eS1zb3VyY2U+XG5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0LXZpZXctc291cmNlXSc6IGBcInRydWVcImBcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHR0ZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlXG5cdFx0XHQub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IGl0ZW1zLm1hcChpID0+IGkuZ2V0RGF0YSgpKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGUpID0+IHtcblx0XHRcdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==