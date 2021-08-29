/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/domain/structure.id';
import { ListViewCardTemplateArchive } from './template/list-view.card-template.archive';
import { StreamCloser } from '../../../../common/cdk/reactive/stream-closer';
var ListViewContainerCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewContainerCardComponent, _super);
    function ListViewContainerCardComponent(changeDetectorRef, elementRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        _this.listCardTemplateArchive = listCardTemplateArchive;
        _this.items = [];
        _this.localStreamCloser = new StreamCloser();
        _this.addClassToHost('gui-flex');
        _this.addClassToHost('gui-flex-wrap');
        _this.addClassToHost('gui-m-0');
        _this.addClassToHost('gui-p-0');
        _this.addClassToHost('gui-rounded');
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewContainerCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.structureSourceWarehouse
            .onEntities(this.structureId)
            .pipe(this.localStreamCloser.takeUntil())
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
            .on()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.cardTemplate = template;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    ListViewContainerCardComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.localStreamCloser.unsubscribe();
    };
    /**
     * @protected
     * @return {?}
     */
    ListViewContainerCardComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-list-container-card';
    };
    ListViewContainerCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-list-container-card]',
                    template: "<div *ngFor=\"let element of items\" [item]=\"element\"\n\t [template]=\"cardTemplate\"\n\t gui-list-card-item>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ListViewContainerCardComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: SourceWarehouse },
        { type: ListViewCardTemplateArchive }
    ]; };
    return ListViewContainerCardComponent;
}(SmartComponent));
export { ListViewContainerCardComponent };
if (false) {
    /** @type {?} */
    ListViewContainerCardComponent.prototype.items;
    /** @type {?} */
    ListViewContainerCardComponent.prototype.cardTemplate;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.localStreamCloser;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.listCardTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRzdFO0lBTW9ELDBEQUFjO0lBUWpFLHdDQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4Qix3QkFBeUMsRUFDekMsdUJBQW9EO1FBSnhFLFlBS0Msa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBUXBDO1FBYjRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUFpQjtRQUN6Qyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQTZCO1FBVnhFLFdBQUssR0FBZSxFQUFFLENBQUM7UUFJTix1QkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBU3ZELEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7SUFFcEMsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUFBLGlCQW9CQztRQW5CQSxJQUFJLENBQUMsd0JBQXdCO2FBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzVCLElBQUksQ0FDSixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQ2xDO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBd0I7WUFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFYLENBQVcsRUFBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyx1QkFBdUI7YUFDMUIsRUFBRSxFQUFFO2FBQ0osSUFBSSxDQUNKLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FDbEM7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxRQUE4QjtZQUN6QyxLQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsb0RBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRVMsd0RBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7O2dCQXpERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMseUxBQXdEO29CQUN4RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWhCaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBS2pFLFdBQVc7Z0JBSFgsZUFBZTtnQkFLZiwyQkFBMkI7O0lBK0RwQyxxQ0FBQztDQUFBLEFBM0RELENBTW9ELGNBQWMsR0FxRGpFO1NBckRZLDhCQUE4Qjs7O0lBRTFDLCtDQUF1Qjs7SUFFdkIsc0RBQW1DOzs7OztJQUVuQywyREFBd0Q7Ozs7O0lBRTVDLDJEQUFxRDs7Ozs7SUFFOUQscURBQXlDOzs7OztJQUN6QyxrRUFBMEQ7Ozs7O0lBQzFELGlFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktbGlzdC1jb250YWluZXItY2FyZF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0aXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuXHRjYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9jYWxTdHJlYW1DbG9zZXIgPSBuZXcgU3RyZWFtQ2xvc2VyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktZmxleCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1mbGV4LXdyYXAnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbS0wJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXAtMCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1yb3VuZGVkJyk7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlXG5cdFx0XHQub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLml0ZW1zID0gaXRlbXMubWFwKGkgPT4gaS5nZXREYXRhKCkpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0ZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGUpID0+IHtcblx0XHRcdFx0dGhpcy5jYXJkVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LWNvbnRhaW5lci1jYXJkJztcblx0fVxuXG59XG4iXX0=