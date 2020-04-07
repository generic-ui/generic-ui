/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureHeaderColumnsComponent } from './columns/structure-header-columns.component';
import { StructureId } from '../../domain/structure.id';
import { StructureFilterReadModelWarehouse } from '../../ui-api/structure/filter/structure-filter.read-model-warehouse';
import { CompositionReadModelWarehouse } from '../../../composition/ui-api/composition.read-model-warehouse';
import { StructureHeaderFiltersComponent } from './filters/structure-header-filters.component';
import { StructureReadModelWarehouse } from '../../ui-api/structure/structure.read-model-warehouse';
var StructureHeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderComponent, _super);
    function StructureHeaderComponent(changeDetectorRef, renderer, eventBus, structureId, structureFilterReadModelRepository, structureReadModelService, compositionReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.eventBus = eventBus;
        _this.structureId = structureId;
        _this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        _this.structureReadModelService = structureReadModelService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.headerColumns = [];
        _this.filterRowEnabled = false;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.compositionReadModelService
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.headerColumns = columns;
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionReadModelService
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.renderer.setStyle(_this.containerRef.nativeElement, 'width', width + 'px');
        }));
        this.structureFilterReadModelRepository
            .onFilteringEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.filterRowEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        function (rowHeight) {
            /** @type {?} */
            var headerHeight = +(rowHeight) + 2;
            // if (this.containerRef) {
            // 	this.renderer.setStyle(this.containerRef.nativeElement, 'height', headerHeight + 'px');
            // }
            if (_this.filtersRef) {
                _this.renderer.setStyle(_this.filtersRef.nativeElement, 'height', headerHeight + 'px');
            }
        }));
    };
    StructureHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header',
                    template: "<gui-structure-header-columns\n\t[columns]=\"headerColumns\"\n\tclass=\"gui-header\">\n</gui-structure-header-columns>\n\n<gui-structure-header-filters\n\t*ngIf=\"filterRowEnabled\"\n\t[columns]=\"headerColumns\"\n\tclass=\"gui-header\">\n</gui-structure-header-filters>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: DomainEventBus },
        { type: StructureId },
        { type: StructureFilterReadModelWarehouse },
        { type: StructureReadModelWarehouse },
        { type: CompositionReadModelWarehouse }
    ]; };
    StructureHeaderComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: [StructureHeaderColumnsComponent, { read: ElementRef, static: true },] }],
        filtersRef: [{ type: ViewChild, args: [StructureHeaderFiltersComponent, { read: ElementRef, static: true },] }]
    };
    return StructureHeaderComponent;
}(SmartComponent));
export { StructureHeaderComponent };
if (false) {
    /** @type {?} */
    StructureHeaderComponent.prototype.containerRef;
    /** @type {?} */
    StructureHeaderComponent.prototype.filtersRef;
    /** @type {?} */
    StructureHeaderComponent.prototype.headerColumns;
    /** @type {?} */
    StructureHeaderComponent.prototype.filterRowEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.eventBus;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureFilterReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRS9GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUdwRztJQU04QyxvREFBYztJQVkzRCxrQ0FBNkIsaUJBQW9DLEVBQzdDLFFBQW1CLEVBQ25CLFFBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGtDQUFxRSxFQUNyRSx5QkFBc0QsRUFDdEQsMkJBQTBEO1FBTjlFLFlBT0MsaUJBQU8sU0FDUDtRQVI0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGNBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsY0FBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDeEIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0NBQWtDLEdBQWxDLGtDQUFrQyxDQUFtQztRQUNyRSwrQkFBeUIsR0FBekIseUJBQXlCLENBQTZCO1FBQ3RELGlDQUEyQixHQUEzQiwyQkFBMkIsQ0FBK0I7UUFWOUUsbUJBQWEsR0FBbUMsRUFBRSxDQUFDO1FBRW5ELHNCQUFnQixHQUFZLEtBQUssQ0FBQzs7SUFVbEMsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUFBLGlCQStCQztRQTdCQSxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQXVDO1lBQ2xELEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQywyQkFBMkI7YUFDOUIsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEYsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsa0NBQWtDO2FBQ3JDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDcEMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUUzQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxrREFBZTs7O0lBQWY7UUFBQSxpQkFrQkM7UUFqQkEsSUFBSSxDQUFDLHlCQUF5QjthQUM1QixXQUFXLEVBQUU7YUFDYixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFNBQWlCOztnQkFFdEIsWUFBWSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBRXJDLDJCQUEyQjtZQUMzQiwyRkFBMkY7WUFDM0YsSUFBSTtZQUVKLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNyRjtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBL0VELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw0UkFBZ0Q7b0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBM0JBLGlCQUFpQjtnQkFJakIsU0FBUztnQkFLRCxjQUFjO2dCQU1kLFdBQVc7Z0JBQ1gsaUNBQWlDO2dCQUdqQywyQkFBMkI7Z0JBRjNCLDZCQUE2Qjs7OytCQWFwQyxTQUFTLFNBQUMsK0JBQStCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBRzdFLFNBQVMsU0FBQywrQkFBK0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFzRS9FLCtCQUFDO0NBQUEsQUFqRkQsQ0FNOEMsY0FBYyxHQTJFM0Q7U0EzRVksd0JBQXdCOzs7SUFFcEMsZ0RBQ3lCOztJQUV6Qiw4Q0FDdUI7O0lBRXZCLGlEQUFtRDs7SUFFbkQsb0RBQWtDOzs7OztJQUV0QixxREFBcUQ7Ozs7O0lBQzlELDRDQUFvQzs7Ozs7SUFDcEMsNENBQXlDOzs7OztJQUN6QywrQ0FBeUM7Ozs7O0lBQ3pDLHNFQUFzRjs7Ozs7SUFDdEYsNkRBQXVFOzs7OztJQUN2RSwrREFBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbnMvc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLWZpbHRlci5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZChTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZChTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRmaWx0ZXJzUmVmOiBFbGVtZW50UmVmO1xuXG5cdGhlYWRlckNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiA9IFtdO1xuXG5cdGZpbHRlclJvd0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVJlYWRNb2RlbFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uUmVhZE1vZGVsV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmhlYWRlckNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5XG5cdFx0XHQub25GaWx0ZXJpbmdFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXG5cdFx0XHRcdHRoaXMuZmlsdGVyUm93RW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Sb3dIZWlnaHQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd0hlaWdodDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gKyhyb3dIZWlnaHQpICsgMjtcblxuXHRcdFx0XHQvLyBpZiAodGhpcy5jb250YWluZXJSZWYpIHtcblx0XHRcdFx0Ly8gXHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcblx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdGlmICh0aGlzLmZpbHRlcnNSZWYpIHtcblx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlsdGVyc1JlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==