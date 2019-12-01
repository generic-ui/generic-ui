/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FormationCommandService } from '../../app/formation/formation-command.service';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationQueryService } from '../../app/formation/formation-query.service';
export class StructureContentComponent extends SmartComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} formationCommandService
     * @param {?} structureCellEditArchive
     * @param {?} structureEditModeArchive
     * @param {?} formationQueryService
     */
    constructor(renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationQueryService) {
        super();
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandService = formationCommandService;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationQueryService = formationQueryService;
        this.editMode = false;
        this.cellEditing = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formationQueryService
            .selectSelectedRows()
            .subscribe((/**
         * @param {?} rowsList
         * @return {?}
         */
        (rowsList) => {
            this.clearSelectedRows();
            rowsList.getIds().forEach((/**
             * @param {?} id
             * @return {?}
             */
            (id) => {
                /** @type {?} */
                const strippedId = 'gui' + id.replace(/-/g, '');
                /** @type {?} */
                const selectedRowEl = this.elementRef.nativeElement.querySelector(`#${strippedId}`);
                if (selectedRowEl) {
                    this.renderer.addClass(selectedRowEl, 'selected');
                }
            }));
        }));
        this.structureEditModeArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.editMode = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureCellEditArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.cellEditing = enabled;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    trackByFn() {
        return 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    translateY(index) {
        return `translateY(${index * 30}px)`;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    toggleSelectedRow(entity) {
        this.formationCommandService.toggleSelectedRow(((/** @type {?} */ (entity))).id);
    }
    /**
     * @private
     * @return {?}
     */
    clearSelectedRows() {
        /** @type {?} */
        const selectedElements = this.elementRef.nativeElement.querySelectorAll('.selected');
        selectedElements.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            this.renderer.removeClass(el, 'selected');
        }));
    }
}
StructureContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-content',
                template: "<div class=\"gui-content\">\n\n\t<gui-structure-row *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureContentComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FormationCommandService },
    { type: StructureCellEditArchive },
    { type: StructureEditModeArchive },
    { type: FormationQueryService }
];
StructureContentComponent.propDecorators = {
    source: [{ type: Input }],
    columns: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureContentComponent.prototype.source;
    /** @type {?} */
    StructureContentComponent.prototype.columns;
    /** @type {?} */
    StructureContentComponent.prototype.editMode;
    /** @type {?} */
    StructureContentComponent.prototype.cellEditing;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.formationCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureEditModeArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.formationQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9JLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUl4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQVdwRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsY0FBYzs7Ozs7Ozs7OztJQVk1RCxZQUFvQixRQUFtQixFQUM1QixVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsdUJBQWdELEVBQ2hELHdCQUFrRCxFQUNsRCx3QkFBa0QsRUFDbEQscUJBQTRDO1FBQ3RELEtBQUssRUFBRSxDQUFDO1FBUFcsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVZ2RCxhQUFR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LDREQUF3RDs7Ozs7SUFDeEQsNkRBQTBEOzs7OztJQUMxRCw2REFBMEQ7Ozs7O0lBQzFELDBEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2VudGl0eSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAvZm9ybWF0aW9uL2Zvcm1hdGlvbi1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uUXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL2Zvcm1hdGlvbi9mb3JtYXRpb24tcXVlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd3NMaXN0IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9xdWVyeS9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdCc7XG5cblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbnRlbnQnLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PEVudGl0eT47XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRlZGl0TW9kZSA9IGZhbHNlO1xuXG5cdGNlbGxFZGl0aW5nID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIGZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlOiBGb3JtYXRpb25Db21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSBmb3JtYXRpb25RdWVyeVNlcnZpY2U6IEZvcm1hdGlvblF1ZXJ5U2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZm9ybWF0aW9uUXVlcnlTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0U2VsZWN0ZWRSb3dzKClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd3NMaXN0OiBTZWxlY3RlZFJvd3NMaXN0KSA9PiB7XG5cblx0XHRcdFx0dGhpcy5jbGVhclNlbGVjdGVkUm93cygpO1xuXG5cdFx0XHRcdHJvd3NMaXN0LmdldElkcygpLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHN0cmlwcGVkSWQgPSAnZ3VpJyArIGlkLnJlcGxhY2UoLy0vZywgJycpLFxuXHRcdFx0XHRcdFx0c2VsZWN0ZWRSb3dFbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3N0cmlwcGVkSWR9YCk7XG5cblx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRSb3dFbCkge1xuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzZWxlY3RlZFJvd0VsLCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZVxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmVkaXRNb2RlID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlXG5cdFx0XHQuc2VsZWN0KClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2VsbEVkaXRpbmcgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdH1cblxuXHR0cmFja0J5Rm4oKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHR0cmFuc2xhdGVZKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgdHJhbnNsYXRlWSgke2luZGV4ICogMzB9cHgpYDtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eTogRW50aXR5KTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kU2VydmljZS50b2dnbGVTZWxlY3RlZFJvdygoZW50aXR5IGFzIGFueSkuaWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbGVhclNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZEVsZW1lbnRzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJyk7XG5cblx0XHRzZWxlY3RlZEVsZW1lbnRzLmZvckVhY2goKGVsOiBhbnkpID0+IHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsICdzZWxlY3RlZCcpO1xuXHRcdH0pXG5cblx0fVxuXG59XG4iXX0=