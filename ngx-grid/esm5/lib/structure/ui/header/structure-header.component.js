/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureHeaderColumnsComponent } from './columns/structure-header-columns.component';
import { StructureId } from '../../domain/structure-id';
import { StructureFilterReadModelRepository } from '../../ui-api/structure/filter/structure.filter.read-model.repository';
import { CompositionReadModelService } from '../../ui-api/composition/composition-read-model.service';
var StructureHeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderComponent, _super);
    function StructureHeaderComponent(changeDetectorRef, renderer, eventBus, structureId, structureFilterReadModelRepository, compositionQueryService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.eventBus = eventBus;
        _this.structureId = structureId;
        _this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        _this.compositionQueryService = compositionQueryService;
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
        this.compositionQueryService
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
        this.compositionQueryService
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
        { type: StructureFilterReadModelRepository },
        { type: CompositionReadModelService }
    ]; };
    StructureHeaderComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: [StructureHeaderColumnsComponent, { read: ElementRef, static: true },] }]
    };
    return StructureHeaderComponent;
}(SmartComponent));
export { StructureHeaderComponent };
if (false) {
    /** @type {?} */
    StructureHeaderComponent.prototype.containerRef;
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
    StructureHeaderComponent.prototype.compositionQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuSixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRS9GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMxSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUd0RztJQU04QyxvREFBYztJQVMzRCxrQ0FBNkIsaUJBQW9DLEVBQzdDLFFBQW1CLEVBQ25CLFFBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGtDQUFzRSxFQUN0RSx1QkFBb0Q7UUFMeEUsWUFNQyxpQkFBTyxTQUNQO1FBUDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixjQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUN4QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3Q0FBa0MsR0FBbEMsa0NBQWtDLENBQW9DO1FBQ3RFLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNkI7UUFUeEUsbUJBQWEsR0FBbUMsRUFBRSxDQUFDO1FBRW5ELHNCQUFnQixHQUFZLEtBQUssQ0FBQzs7SUFTbEMsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUFBLGlCQStCQztRQTdCQSxJQUFJLENBQUMsdUJBQXVCO2FBQzFCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQXVDO1lBQ2xELEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyx1QkFBdUI7YUFDMUIsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEYsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsa0NBQWtDO2FBQ3JDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDcEMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUUzQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXZERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsNFJBQWdEO29CQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQWxCaUMsaUJBQWlCO2dCQUFpQyxTQUFTO2dCQUVwRixjQUFjO2dCQU1kLFdBQVc7Z0JBQ1gsa0NBQWtDO2dCQUNsQywyQkFBMkI7OzsrQkFXbEMsU0FBUyxTQUFDLCtCQUErQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQWlEL0UsK0JBQUM7Q0FBQSxBQXpERCxDQU04QyxjQUFjLEdBbUQzRDtTQW5EWSx3QkFBd0I7OztJQUVwQyxnREFDeUI7O0lBRXpCLGlEQUFtRDs7SUFFbkQsb0RBQWtDOzs7OztJQUV0QixxREFBcUQ7Ozs7O0lBQzlELDRDQUFvQzs7Ozs7SUFDcEMsNENBQXlDOzs7OztJQUN6QywrQ0FBeUM7Ozs7O0lBQ3pDLHNFQUF1Rjs7Ozs7SUFDdkYsMkRBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbnMvc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlYWQtbW9kZWwucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCwgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cdGhlYWRlckNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiA9IFtdO1xuXG5cdGZpbHRlclJvd0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblF1ZXJ5U2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uSGVhZGVyQ29sdW1ucygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaGVhZGVyQ29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uRmlsdGVyaW5nRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblxuXHRcdFx0XHR0aGlzLmZpbHRlclJvd0VuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==