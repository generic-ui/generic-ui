/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureHeaderColumnsComponent } from './column/structure-header-columns.component';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../../filter/core/api/filter.warehouse';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { StructureHeaderFiltersComponent } from './filters/structure-header-filters.component';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { StructureVerticalFormationWarehouse } from '../../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { RowSelectionType } from '../../../source/core/api/row-selection';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
export class StructureHeaderComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} eventBus
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} filterWarehouse
     * @param {?} structureWarehouse
     * @param {?} rowSelectionTypeArchive
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} compositionWarehouse
     */
    constructor(changeDetectorRef, elementRef, eventBus, structureId, compositionId, filterWarehouse, structureWarehouse, rowSelectionTypeArchive, structureVerticalFormationWarehouse, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.eventBus = eventBus;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.filterWarehouse = filterWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.compositionWarehouse = compositionWarehouse;
        this.headerColumns = [];
        this.filterRowEnabled = false;
        this.checkboxSelection = false;
        this.showGroups = false;
        this.styleModifier = new StyleModifier(elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rowSelectionTypeArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
            this.reRender();
        }));
        this.compositionWarehouse
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.headerColumns = columns;
            this.reRender();
        }));
        this.compositionWarehouse
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.styleModifier.getElement(this.containerRef.nativeElement).setWidth(width);
        }));
        this.filterWarehouse
            .onFilteringEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.filterRowEnabled = enabled;
            this.reRender();
        }));
        this.compositionWarehouse
            .onGroups(this.compositionId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} collection
         * @return {?}
         */
        (collection) => {
            this.showGroups = collection.isVisible();
            this.groups = collection.getGroups();
            this.reRender();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.structureVerticalFormationWarehouse
            .onRowHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            /** @type {?} */
            const headerHeight = +(rowHeight) + 2;
            if (this.filtersRef) {
                this.styleModifier.getElement(this.filtersRef.nativeElement).setHeight(headerHeight);
            }
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-header';
    }
}
StructureHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-header]',
                template: "<div *ngIf=\"showGroups\"\n\t [checkboxSelection]=\"checkboxSelection\"\n\t [groups]=\"groups\"\n\t class=\"gui-header\"\n\t gui-structure-header-groups>\n</div>\n\n<div [checkboxSelection]=\"checkboxSelection\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-columns>\n</div>\n\n<div *ngIf=\"filterRowEnabled\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-filters>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureHeaderComponent.ctorParameters = () => [
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
];
StructureHeaderComponent.propDecorators = {
    containerRef: [{ type: ViewChild, args: [StructureHeaderColumnsComponent, { read: ElementRef, static: true },] }],
    filtersRef: [{ type: ViewChild, args: [StructureHeaderFiltersComponent, { read: ElementRef, static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVsRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUU5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBQ2xJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFTaEYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7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RTs7OztJQUg5RSxnREFDeUI7O0lBRXpCLDhDQUN1Qjs7SUFFdkIsaURBQW1EOztJQUVuRCxvREFBa0M7O0lBRWxDLHFEQUFtQzs7SUFFbkMsMENBQXFCOztJQUVyQiw4Q0FBNEI7Ozs7O0lBRTVCLGlEQUE4Qzs7Ozs7SUFFbEMscURBQXFEOzs7OztJQUU5RCw0Q0FBeUM7Ozs7O0lBQ3pDLCtDQUF5Qzs7Ozs7SUFDekMsaURBQTZDOzs7OztJQUM3QyxtREFBaUQ7Ozs7O0lBQ2pELHNEQUF1RDs7Ozs7SUFDdkQsMkRBQWlFOzs7OztJQUNqRSx1RUFBeUY7Ozs7O0lBQ3pGLHdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRPbkluaXQsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9ncm91cC9ncm91cCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgR3JvdXBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvZ3JvdXAvZ3JvdXAuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vc3R5bGUvc3R5bGUtbW9kaWZpZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWhlYWRlcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGZpbHRlcnNSZWY6IEVsZW1lbnRSZWY7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+ID0gW107XG5cblx0ZmlsdGVyUm93RW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0Z3JvdXBzOiBBcnJheTxHcm91cD47XG5cblx0c2hvd0dyb3VwczogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBldmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyID0gbmV3IFN0eWxlTW9kaWZpZXIoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5yb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpID0+IHtcblx0XHRcdFx0dGhpcy5jaGVja2JveFNlbGVjdGlvbiA9IHR5cGUgPT09IFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHRcdHRoaXMucmVSZW5kZXIoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uSGVhZGVyQ29sdW1ucygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaGVhZGVyQ29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMucmVSZW5kZXIoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCkuc2V0V2lkdGgod2lkdGgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0Lm9uRmlsdGVyaW5nRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblxuXHRcdFx0XHR0aGlzLmZpbHRlclJvd0VuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkdyb3Vwcyh0aGlzLmNvbXBvc2l0aW9uSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29sbGVjdGlvbjogR3JvdXBDb2xsZWN0aW9uKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5zaG93R3JvdXBzID0gY29sbGVjdGlvbi5pc1Zpc2libGUoKTtcblx0XHRcdFx0dGhpcy5ncm91cHMgPSBjb2xsZWN0aW9uLmdldEdyb3VwcygpO1xuXHRcdFx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblJvd0hlaWdodCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd0hlaWdodDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gKyhyb3dIZWlnaHQpICsgMjtcblxuXHRcdFx0XHRpZiAodGhpcy5maWx0ZXJzUmVmKSB7XG5cdFx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5maWx0ZXJzUmVmLm5hdGl2ZUVsZW1lbnQpLnNldEhlaWdodChoZWFkZXJIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyJztcblx0fVxuXG59XG4iXX0=