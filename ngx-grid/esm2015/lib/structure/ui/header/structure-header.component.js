/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureHeaderColumnsComponent } from './columns/structure-header-columns.component';
import { StructureId } from '../../domain/structure-id';
import { StructureFilterReadModelRepository } from '../../ui-api/structure/filter/structure.filter.read-model.repository';
import { CompositionReadModelService } from '../../../composition/ui-api/composition-read-model.service';
import { StructureHeaderFiltersComponent } from './filters/structure-header-filters.component';
import { StructureReadModelService } from '../../ui-api/structure/structure-read-model.service';
export class StructureHeaderComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} eventBus
     * @param {?} structureId
     * @param {?} structureFilterReadModelRepository
     * @param {?} structureReadModelService
     * @param {?} compositionQueryService
     */
    constructor(changeDetectorRef, renderer, eventBus, structureId, structureFilterReadModelRepository, structureReadModelService, compositionQueryService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.eventBus = eventBus;
        this.structureId = structureId;
        this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        this.structureReadModelService = structureReadModelService;
        this.compositionQueryService = compositionQueryService;
        this.headerColumns = [];
        this.filterRowEnabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionQueryService
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
        this.compositionQueryService
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
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            /** @type {?} */
            const headerHeight = +(rowHeight) + 2;
            if (this.containerRef) {
                this.renderer.setStyle(this.containerRef.nativeElement, 'height', headerHeight + 'px');
            }
            if (this.filtersRef) {
                this.renderer.setStyle(this.filtersRef.nativeElement, 'height', headerHeight + 'px');
            }
        }));
    }
}
StructureHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header',
                template: "<gui-structure-header-columns\n\t[columns]=\"headerColumns\"\n\tclass=\"gui-header\">\n</gui-structure-header-columns>\n\n<gui-structure-header-filters\n\t*ngIf=\"filterRowEnabled\"\n\t[columns]=\"headerColumns\"\n\tclass=\"gui-header\">\n</gui-structure-header-filters>\n",
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
    { type: StructureFilterReadModelRepository },
    { type: StructureReadModelService },
    { type: CompositionReadModelService }
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
    StructureHeaderComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.compositionQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVsSyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRS9GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMxSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQVNoRyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7Ozs7OztJQVkzRCxZQUE2QixpQkFBb0MsRUFDN0MsUUFBbUIsRUFDbkIsUUFBd0IsRUFDeEIsV0FBd0IsRUFDeEIsa0NBQXNFLEVBQ3RFLHlCQUFvRCxFQUNwRCx1QkFBb0Q7UUFDdkUsS0FBSyxFQUFFLENBQUM7UUFQb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3hCLGdC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QUFtRDs7SUFFbkQsb0RBQWtDOzs7OztJQUV0QixxREFBcUQ7Ozs7O0lBQzlELDRDQUFvQzs7Ozs7SUFDcEMsNENBQXlDOzs7OztJQUN6QywrQ0FBeUM7Ozs7O0lBQ3pDLHNFQUF1Rjs7Ozs7SUFDdkYsNkRBQXFFOzs7OztJQUNyRSwyREFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCB9IGZyb20gJy4vY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIucmVhZC1tb2RlbC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZChTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZChTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRmaWx0ZXJzUmVmOiBFbGVtZW50UmVmO1xuXG5cdGhlYWRlckNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiA9IFtdO1xuXG5cdGZpbHRlclJvd0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlOiBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25IZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5oZWFkZXJDb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5XG5cdFx0XHQub25GaWx0ZXJpbmdFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXG5cdFx0XHRcdHRoaXMuZmlsdGVyUm93RW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Sb3dIZWlnaHQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd0hlaWdodDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gKyhyb3dIZWlnaHQpICsgMjtcblxuXHRcdFx0XHRpZiAodGhpcy5jb250YWluZXJSZWYpIHtcblx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLmZpbHRlcnNSZWYpIHtcblx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlsdGVyc1JlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==