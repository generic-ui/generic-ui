/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureHeaderColumnsComponent } from './column/structure-header-columns.component';
import { StructureId } from '../../../core/domain/structure.id';
import { FilterWarehouse } from '../../../filter/core/api/filter.warehouse';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { StructureHeaderFiltersComponent } from './filters/structure-header-filters.component';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { StructureVerticalFormationWarehouse } from '../../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { RowSelectionType } from '../../../source/core/api/row-selection';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { CompositionId } from '../../../../composition/core/domain/composition.id';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
var StructureHeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderComponent, _super);
    function StructureHeaderComponent(changeDetectorRef, elementRef, eventBus, structureId, compositionId, filterWarehouse, structureWarehouse, rowSelectionTypeArchive, structureVerticalFormationWarehouse, compositionWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.eventBus = eventBus;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.filterWarehouse = filterWarehouse;
        _this.structureWarehouse = structureWarehouse;
        _this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        _this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        _this.compositionWarehouse = compositionWarehouse;
        _this.headerColumns = [];
        _this.filterRowEnabled = false;
        _this.checkboxSelection = false;
        _this.showGroups = false;
        _this.styleModifier = new StyleModifier(elementRef.nativeElement);
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
        this.rowSelectionTypeArchive
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            _this.checkboxSelection = type === RowSelectionType.CHECKBOX;
            _this.reRender();
        }));
        this.compositionWarehouse
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.headerColumns = columns;
            _this.reRender();
        }));
        this.compositionWarehouse
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.styleModifier.getElement(_this.containerRef.nativeElement).setWidth(width);
        }));
        this.filterWarehouse
            .onFilteringEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.filterRowEnabled = enabled;
            _this.reRender();
        }));
        this.compositionWarehouse
            .onGroups(this.compositionId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} collection
         * @return {?}
         */
        function (collection) {
            _this.showGroups = collection.isVisible();
            _this.groups = collection.getGroups();
            _this.reRender();
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
        _super.prototype.ngAfterViewInit.call(this);
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
            if (_this.filtersRef) {
                _this.styleModifier.getElement(_this.filtersRef.nativeElement).setHeight(headerHeight);
            }
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    StructureHeaderComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-header';
    };
    StructureHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-header]',
                    template: "<div *ngIf=\"showGroups\"\n\t [checkboxSelection]=\"checkboxSelection\"\n\t [groups]=\"groups\"\n\t class=\"gui-header\"\n\t gui-structure-header-groups>\n</div>\n\n<div [checkboxSelection]=\"checkboxSelection\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-columns>\n</div>\n\n<div *ngIf=\"filterRowEnabled\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-filters>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: DomainEventBus },
        { type: StructureId },
        { type: CompositionId },
        { type: FilterWarehouse },
        { type: StructureWarehouse },
        { type: RowSelectionTypeArchive },
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
    /** @type {?} */
    StructureHeaderComponent.prototype.checkboxSelection;
    /** @type {?} */
    StructureHeaderComponent.prototype.groups;
    /** @type {?} */
    StructureHeaderComponent.prototype.showGroups;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.styleModifier;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.changeDetectorRef;
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
    StructureHeaderComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.rowSelectionTypeArchive;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureVerticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDbEksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFFN0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRW5GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUdoRjtJQU04QyxvREFBYztJQW9CM0Qsa0NBQTZCLGlC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SEQsQ0FNOEMsY0FBYyxHQStHM0Q7U0EvR1ksd0JBQXdCOzs7SUFFcEMsZ0RBQ3lCOztJQUV6Qiw4Q0FDdUI7O0lBRXZCLGlEQUFtRDs7SUFFbkQsb0RBQWtDOztJQUVsQyxxREFBbUM7O0lBRW5DLDBDQUFxQjs7SUFFckIsOENBQTRCOzs7OztJQUU1QixpREFBOEM7Ozs7O0lBRWxDLHFEQUFxRDs7Ozs7SUFFOUQsNENBQXlDOzs7OztJQUN6QywrQ0FBeUM7Ozs7O0lBQ3pDLGlEQUE2Qzs7Ozs7SUFDN0MsbURBQWlEOzs7OztJQUNqRCxzREFBdUQ7Ozs7O0lBQ3ZELDJEQUFpRTs7Ozs7SUFDakUsdUVBQXlGOzs7OztJQUN6Rix3REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9ncm91cC9ncm91cCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgR3JvdXBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvZ3JvdXAvZ3JvdXAuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vc3R5bGUvc3R5bGUtbW9kaWZpZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWhlYWRlcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGZpbHRlcnNSZWY6IEVsZW1lbnRSZWY7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+ID0gW107XG5cblx0ZmlsdGVyUm93RW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0Z3JvdXBzOiBBcnJheTxHcm91cD47XG5cblx0c2hvd0dyb3VwczogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBldmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyID0gbmV3IFN0eWxlTW9kaWZpZXIoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5yb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hlY2tib3hTZWxlY3Rpb24gPSB0eXBlID09PSBSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YO1xuXHRcdFx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmhlYWRlckNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQpLnNldFdpZHRoKHdpZHRoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vbkZpbHRlcmluZ0VuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5maWx0ZXJSb3dFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Hcm91cHModGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbGxlY3Rpb246IEdyb3VwQ29sbGVjdGlvbikgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc2hvd0dyb3VwcyA9IGNvbGxlY3Rpb24uaXNWaXNpYmxlKCk7XG5cdFx0XHRcdHRoaXMuZ3JvdXBzID0gY29sbGVjdGlvbi5nZXRHcm91cHMoKTtcblx0XHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGhlYWRlckhlaWdodCA9ICsocm93SGVpZ2h0KSArIDI7XG5cblx0XHRcdFx0aWYgKHRoaXMuZmlsdGVyc1JlZikge1xuXHRcdFx0XHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuZmlsdGVyc1JlZi5uYXRpdmVFbGVtZW50KS5zZXRIZWlnaHQoaGVhZGVySGVpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWhlYWRlcic7XG5cdH1cblxufVxuIl19