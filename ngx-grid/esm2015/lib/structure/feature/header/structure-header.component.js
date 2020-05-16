/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureHeaderColumnsComponent } from './columns/structure-header-columns.component';
import { StructureId } from '../../domain/structure.id';
import { StructureFilterWarehouse } from '../../domain-api/filter/structure-filter.warehouse';
import { CompositionWarehouse } from '../../../composition/domain-api/composition.warehouse';
import { StructureHeaderFiltersComponent } from './filters/structure-header-filters.component';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { StructureVerticalFormationWarehouse } from '../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
export class StructureHeaderComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} eventBus
     * @param {?} structureId
     * @param {?} structureFilterReadModelRepository
     * @param {?} structureWarehouse
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, renderer, eventBus, structureId, structureFilterReadModelRepository, structureWarehouse, structureVerticalFormationWarehouse, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.eventBus = eventBus;
        this.structureId = structureId;
        this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        this.structureWarehouse = structureWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.compositionReadModelService = compositionReadModelService;
        this.headerColumns = [];
        this.filterRowEnabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionReadModelService
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.headerColumns = columns;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionReadModelService
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.renderer.setStyle(this.containerRef.nativeElement, 'width', width + 'px');
        }));
        this.structureFilterReadModelRepository
            .onFilteringEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.filterRowEnabled = enabled;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
            // if (this.containerRef) {
            // 	this.renderer.setStyle(this.containerRef.nativeElement, 'height', headerHeight + 'px');
            // }
            if (this.filtersRef) {
                this.renderer.setStyle(this.filtersRef.nativeElement, 'height', headerHeight + 'px');
            }
        }));
    }
}
StructureHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header',
                template: "<gui-structure-header-columns\n\t\t[columns]=\"headerColumns\"\n\t\tclass=\"gui-header\">\n</gui-structure-header-columns>\n\n<gui-structure-header-filters\n\t\t*ngIf=\"filterRowEnabled\"\n\t\t[columns]=\"headerColumns\"\n\t\tclass=\"gui-header\">\n</gui-structure-header-filters>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureHeaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: DomainEventBus },
    { type: StructureId },
    { type: StructureFilterWarehouse },
    { type: StructureWarehouse },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUUvRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDOUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFTakksTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7Ozs7Ozs7Ozs7O0lBWTNELFlBQTZCLGlCQUFvQyxFQUM3QyxRQUFtQixFQUNuQixRQUF3QixFQUN4QixXQUF3QixFQUN4QixrQ0FBNEQsRUFDNUQsa0JBQXNDLEVBQ3RDLG1DQUF3RSxFQUN4RSwyQkFBaUQ7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFSb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixD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QUN5Qjs7SUFFekIsOENBQ3VCOztJQUV2QixpREFBbUQ7O0lBRW5ELG9EQUFrQzs7Ozs7SUFFdEIscURBQXFEOzs7OztJQUM5RCw0Q0FBb0M7Ozs7O0lBQ3BDLDRDQUF5Qzs7Ozs7SUFDekMsK0NBQXlDOzs7OztJQUN6QyxzRUFBNkU7Ozs7O0lBQzdFLHNEQUF1RDs7Ozs7SUFDdkQsdUVBQXlGOzs7OztJQUN6RiwrREFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbnMvc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpbHRlci9zdHJ1Y3R1cmUtZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGZpbHRlcnNSZWY6IEVsZW1lbnRSZWY7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+ID0gW107XG5cblx0ZmlsdGVyUm93RW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uSGVhZGVyQ29sdW1ucygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaGVhZGVyQ29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB3aWR0aCArICdweCcpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vbkZpbHRlcmluZ0VuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5maWx0ZXJSb3dFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGhlYWRlckhlaWdodCA9ICsocm93SGVpZ2h0KSArIDI7XG5cblx0XHRcdFx0Ly8gaWYgKHRoaXMuY29udGFpbmVyUmVmKSB7XG5cdFx0XHRcdC8vIFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG5cdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRpZiAodGhpcy5maWx0ZXJzUmVmKSB7XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpbHRlcnNSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGhlYWRlckhlaWdodCArICdweCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=