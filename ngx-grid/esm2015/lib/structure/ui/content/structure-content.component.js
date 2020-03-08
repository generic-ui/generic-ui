/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { combineLatest } from 'rxjs';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FormationCommandService } from '../../ui-api/formation/formation-command.service';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { VerticalFormationRepository } from '../../domain/structure/read/vertical-formation/vertical-formation.repository';
import { StructureReadModelService } from '../../ui-api/structure/structure-read-model.service';
import { StructureRowSelectEnabledArchive } from './row/structure.row-select-enabled.archive';
import { StructureId } from '../../domain/structure-id';
import { StructureSearchPhraseRepository } from '../../domain/structure/read/searching/phrase/structure.search-phrase.repository';
import { StructureSearchHighlightArchive } from '../../domain/structure/read/searching/highlight/structure.search-highlight.archive';
export class StructureContentComponent extends SmartComponent {
    /**
     * @param {?} platformId
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} formationCommandService
     * @param {?} structureCellEditArchive
     * @param {?} structureEditModeArchive
     * @param {?} formationQueryService
     * @param {?} structureReadModelService
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} verticalFormationRepository
     * @param {?} structureId
     * @param {?} structureSearchPhraseRepository
     * @param {?} structureSearchHighlightArchive
     */
    constructor(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationQueryService, structureReadModelService, structureRowSelectEnabledArchive, verticalFormationRepository, structureId, // REfactor
    structureSearchPhraseRepository, structureSearchHighlightArchive) {
        super();
        this.platformId = platformId;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandService = formationCommandService;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationQueryService = formationQueryService;
        this.structureReadModelService = structureReadModelService;
        this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        this.verticalFormationRepository = verticalFormationRepository;
        this.structureId = structureId;
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        this.editMode = false;
        this.cellEditing = false;
        this.searchPhrase = '';
        this.highlighting = true;
        this.phrase = true;
        this.rowSelecting = StructureRowSelectEnabledArchive.DEFAULT_ROW_SELECT;
        this.rowDetailOpened = 4;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formationQueryService
            .onSelectedRows()
            .pipe(this.takeUntil())
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
            .onValue()
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
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.cellEditing = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            this.rowHeight = rowHeight;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureRowSelectEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowSelecting
         * @return {?}
         */
        (rowSelecting) => {
            this.rowSelecting = rowSelecting;
        }));
        combineLatest(this.structureSearchPhraseRepository
            .onPhrase(this.structureId), this.structureSearchHighlightArchive
            .onValue()).pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} args
         * @return {?}
         */
        (args) => {
            /** @type {?} */
            const searchPhrase = args[0];
            /** @type {?} */
            const highlighting = args[1];
            this.highlighting = highlighting;
            this.searchPhrase = searchPhrase;
            if (!this.highlighting) {
                this.searchPhrase = '';
            }
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
        /** @type {?} */
        let height = index * this.rowHeight;
        // if (index > this.rowDetailOpened) {
        // 	height += 200;
        // }
        return `translateY(${height}px)`;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    toggleSelectedRow(entity) {
        if (this.rowSelecting) {
            this.formationCommandService.toggleSelectedRow(((/** @type {?} */ (entity))).id);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearSelectedRows() {
        /** @type {?} */
        const selectedElements = this.elementRef.nativeElement.querySelectorAll('.selected');
        if (isPlatformBrowser(this.platformId)) {
            selectedElements.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                this.renderer.removeClass(el, 'selected');
            }));
        }
    }
}
StructureContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-content',
                template: "<div class=\"gui-content\">\n\n\t<gui-structure-row (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t   [index]=\"index\"\n\t\t\t\t\t   [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [style.height.px]=\"rowHeight\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureContentComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FormationCommandService },
    { type: StructureCellEditArchive },
    { type: StructureEditModeArchive },
    { type: FormationReadModelService },
    { type: StructureReadModelService },
    { type: StructureRowSelectEnabledArchive },
    { type: VerticalFormationRepository },
    { type: StructureId },
    { type: StructureSearchPhraseRepository },
    { type: StructureSearchHighlightArchive }
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
    /** @type {?} */
    StructureContentComponent.prototype.rowHeight;
    /** @type {?} */
    StructureContentComponent.prototype.searchPhrase;
    /** @type {?} */
    StructureContentComponent.prototype.highlighting;
    /** @type {?} */
    StructureContentComponent.prototype.phrase;
    /** @type {?} */
    StructureContentComponent.prototype.rowSelecting;
    /** @type {?} */
    StructureContentComponent.prototype.rowDetailOpened;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.platformId;
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
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureRowSelectEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.verticalFormationRepository;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureSearchPhraseRepository;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureSearchHighlightArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFHaEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDM0gsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ2xJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FB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QUl6Qix5QkFBeUI7WUFDekIsZ0NBQWdDO1lBRmhDLDJCQUEyQjtZQUczQixXQUFXO1lBQ1gsK0JBQStCO1lBQy9CLCtCQUErQjs7O3FCQVd0QyxLQUFLO3NCQUdMLEtBQUs7Ozs7SUFITiwyQ0FDMEI7O0lBRTFCLDRDQUN5Qzs7SUFFekMsNkNBQWlCOztJQUVqQixnREFBb0I7O0lBRXBCLDhDQUFrQjs7SUFFbEIsaURBQTBCOztJQUUxQixpREFBNkI7O0lBRTdCLDJDQUF1Qjs7SUFFdkIsaURBQW1FOztJQUVuRSxvREFBb0I7Ozs7O0lBRVIsK0NBQTRDOzs7OztJQUNyRCw2Q0FBMkI7Ozs7O0lBQzNCLCtDQUE4Qjs7Ozs7SUFDOUIsc0RBQTRDOzs7OztJQUM1Qyw0REFBd0Q7Ozs7O0lBQ3hELDZEQUEwRDs7Ozs7SUFDMUQsNkRBQTBEOzs7OztJQUMxRCwwREFBd0Q7Ozs7O0lBQ3hELDhEQUE0RDs7Ozs7SUFDNUQscUVBQTBFOzs7OztJQUMxRSxnRUFBZ0U7Ozs7O0lBQ2hFLGdEQUFnQzs7Ozs7SUFDaEMsb0VBQXdFOzs7OztJQUN4RSxvRUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25Jbml0LFxuXHRQTEFURk9STV9JRCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IEZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dzTGlzdCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vcmVhZC9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3Jvdy9zdHJ1Y3R1cmUucm93LXNlbGVjdC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL2hpZ2hsaWdodC9zdHJ1Y3R1cmUuc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbnRlbnQnLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+O1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cblx0ZWRpdE1vZGUgPSBmYWxzZTtcblxuXHRjZWxsRWRpdGluZyA9IGZhbHNlO1xuXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdHNlYXJjaFBocmFzZTogc3RyaW5nID0gJyc7XG5cblx0aGlnaGxpZ2h0aW5nOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwaHJhc2U6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHJvd1NlbGVjdGluZyA9IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlLkRFRkFVTFRfUk9XX1NFTEVDVDtcblxuXHRyb3dEZXRhaWxPcGVuZWQgPSA0O1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgZm9ybWF0aW9uQ29tbWFuZFNlcnZpY2U6IEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIGZvcm1hdGlvblF1ZXJ5U2VydmljZTogRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIC8vIFJFZmFjdG9yXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeTogU3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkUm93cygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93c0xpc3Q6IFNlbGVjdGVkUm93c0xpc3QpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNsZWFyU2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRcdFx0cm93c0xpc3QuZ2V0SWRzKCkuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc3RyaXBwZWRJZCA9ICdndWknICsgaWQucmVwbGFjZSgvLS9nLCAnJyksXG5cdFx0XHRcdFx0XHRzZWxlY3RlZFJvd0VsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c3RyaXBwZWRJZH1gKTtcblxuXHRcdFx0XHRcdGlmIChzZWxlY3RlZFJvd0VsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNlbGVjdGVkUm93RWwsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmVkaXRNb2RlID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNlbGxFZGl0aW5nID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUm93SGVpZ2h0KClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dTZWxlY3Rpbmc6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5yb3dTZWxlY3RpbmcgPSByb3dTZWxlY3Rpbmc7XG5cdFx0XHR9KTtcblxuXHRcdGNvbWJpbmVMYXRlc3QoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnlcblx0XHRcdFx0Lm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlXG5cdFx0XHRcdC5vblZhbHVlKClcblx0XHQpLnBpcGUoXG5cdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0IClcblx0XHQgLnN1YnNjcmliZSgoYXJnczogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0IFx0Y29uc3Qgc2VhcmNoUGhyYXNlID0gYXJnc1swXSxcblx0XHRcdFx0aGlnaGxpZ2h0aW5nID0gYXJnc1sxXTtcblxuXHRcdFx0IHRoaXMuaGlnaGxpZ2h0aW5nID0gaGlnaGxpZ2h0aW5nO1xuXHRcdFx0IHRoaXMuc2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlO1xuXG5cdFx0XHQgaWYgKCF0aGlzLmhpZ2hsaWdodGluZykge1xuXHRcdFx0IFx0dGhpcy5zZWFyY2hQaHJhc2UgPSAnJztcblx0XHRcdCB9XG5cblx0XHRcdCB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHQgfSk7XG5cdH1cblxuXHR0cmFja0J5Rm4oKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHR0cmFuc2xhdGVZKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXG5cdFx0bGV0IGhlaWdodCA9IGluZGV4ICogdGhpcy5yb3dIZWlnaHQ7XG5cblx0XHQvLyBpZiAoaW5kZXggPiB0aGlzLnJvd0RldGFpbE9wZW5lZCkge1xuXHRcdC8vIFx0aGVpZ2h0ICs9IDIwMDtcblx0XHQvLyB9XG5cblx0XHRyZXR1cm4gYHRyYW5zbGF0ZVkoJHtoZWlnaHR9cHgpYDtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eTogSXRlbUVudGl0eSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnJvd1NlbGVjdGluZykge1xuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kU2VydmljZS50b2dnbGVTZWxlY3RlZFJvdygoZW50aXR5IGFzIGFueSkuaWQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2xlYXJTZWxlY3RlZFJvd3MoKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRFbGVtZW50cyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RlZCcpO1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHNlbGVjdGVkRWxlbWVudHMuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCAnc2VsZWN0ZWQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==