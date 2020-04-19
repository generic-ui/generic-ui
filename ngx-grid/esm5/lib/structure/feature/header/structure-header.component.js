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
import { StructureFilterWarehouse } from '../../feature-api/filter/structure-filter.warehouse';
import { CompositionWarehouse } from '../../../composition/feature-api/composition.warehouse';
import { StructureHeaderFiltersComponent } from './filters/structure-header-filters.component';
import { StructureWarehouse } from '../../feature-api/structure.warehouse';
import { StructureVerticalFormationWarehouse } from '../../feature-api/vertical-formation/structure-vertical-formation.warehouse';
var StructureHeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderComponent, _super);
    function StructureHeaderComponent(changeDetectorRef, renderer, eventBus, structureId, structureFilterReadModelRepository, structureWarehouse, structureVerticalFormationWarehouse, compositionReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.eventBus = eventBus;
        _this.structureId = structureId;
        _this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        _this.structureWarehouse = structureWarehouse;
        _this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
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
        this.structureVerticalFormationWarehouse
            .onRowHeight(this.structureId)
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
                    template: "<gui-structure-header-columns\n\t\t[columns]=\"headerColumns\"\n\t\tclass=\"gui-header\">\n</gui-structure-header-columns>\n\n<gui-structure-header-filters\n\t\t*ngIf=\"filterRowEnabled\"\n\t\t[columns]=\"headerColumns\"\n\t\tclass=\"gui-header\">\n</gui-structure-header-filters>\n",
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
        { type: StructureFilterWarehouse },
        { type: StructureWarehouse },
        { type: StructureVerticalFormationWarehouse },
        { type: CompositionWarehouse }
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
    StructureHeaderComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureVerticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBR2xJO0lBTThDLG9EQUFjO0lBWTNELGtDQUE2QixpQkFBb0MsRUFDN0MsUUFBbUIsRUFDbkIsUUFBd0IsRUFDeEIsV0FBd0IsRUFDeEIsa0NBQTRELEVBQzVELGtCQUFzQyxFQUN0QyxtQ0FBd0UsRUFDeEUsMkJBQWlEO1FBUHJFLFlBUUMsaUJBQU8sU0FDUDtRQVQ0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGNBQVEsR0FBUixR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bEZELENBTThDLGNBQWMsR0E0RTNEO1NBNUVZLHdCQUF3Qjs7O0lBRXBDLGdEQUN5Qjs7SUFFekIsOENBQ3VCOztJQUV2QixpREFBbUQ7O0lBRW5ELG9EQUFrQzs7Ozs7SUFFdEIscURBQXFEOzs7OztJQUM5RCw0Q0FBb0M7Ozs7O0lBQ3BDLDRDQUF5Qzs7Ozs7SUFDekMsK0NBQXlDOzs7OztJQUN6QyxzRUFBNkU7Ozs7O0lBQzdFLHNEQUF1RDs7Ozs7SUFDdkQsdUVBQXlGOzs7OztJQUN6RiwrREFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbnMvc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvZmlsdGVyL3N0cnVjdHVyZS1maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG5cdEBWaWV3Q2hpbGQoU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCwgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGQoU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCwgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZmlsdGVyc1JlZjogRWxlbWVudFJlZjtcblxuXHRoZWFkZXJDb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4gPSBbXTtcblxuXHRmaWx0ZXJSb3dFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBldmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25IZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5oZWFkZXJDb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uRmlsdGVyaW5nRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblxuXHRcdFx0XHR0aGlzLmZpbHRlclJvd0VuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblJvd0hlaWdodCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd0hlaWdodDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gKyhyb3dIZWlnaHQpICsgMjtcblxuXHRcdFx0XHQvLyBpZiAodGhpcy5jb250YWluZXJSZWYpIHtcblx0XHRcdFx0Ly8gXHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcblx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdGlmICh0aGlzLmZpbHRlcnNSZWYpIHtcblx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlsdGVyc1JlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==