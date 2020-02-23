/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
     */
    constructor(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationQueryService, structureReadModelService, structureRowSelectEnabledArchive, verticalFormationRepository, structureId, // REfactor
    structureSearchPhraseRepository) {
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
        this.editMode = false;
        this.cellEditing = false;
        this.rowSelecting = StructureRowSelectEnabledArchive.DEFAULT_ROW_SELECT;
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
        this.structureSearchPhraseRepository
            .onPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} searchPhrase
         * @return {?}
         */
        (searchPhrase) => {
            this.searchPhrase = searchPhrase;
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
        return `translateY(${index * this.rowHeight}px)`;
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
                template: "<div class=\"gui-content\">\n\n\t<gui-structure-row (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [style.height.px]=\"rowHeight\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
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
    { type: StructureSearchPhraseRepository }
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
    StructureContentComponent.prototype.rowSelecting;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBR2hHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQzNILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQVNsSSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztJQWtCNUQsWUFBeUMsVUFBZSxFQUM3QyxRQUFtQixFQUNuQixVQUFz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LENBQUMsRUFBTyxFQUFFLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQUMsQ0FBQztTQUNIO0lBRUYsQ0FBQzs7O1lBeElELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxxcUJBQStDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7NENBbUJhLE1BQU0sU0FBQyxXQUFXO1lBN0MvQixTQUFTO1lBTFQsVUFBVTtZQUZWLGlCQUFpQjtZQWVULHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUl6Qix5QkFBeUI7WUFDekIsZ0NBQWdDO1lBRmhDLDJCQUEyQjtZQUczQixXQUFXO1lBQ1gsK0JBQStCOzs7cUJBV3RDLEtBQUs7c0JBR0wsS0FBSzs7OztJQUhOLDJDQUMwQjs7SUFFMUIsNENBQ3lDOztJQUV6Qyw2Q0FBaUI7O0lBRWpCLGdEQUFvQjs7SUFFcEIsOENBQWtCOztJQUVsQixpREFBcUI7O0lBRXJCLGlEQUFtRTs7Ozs7SUFFdkQsK0NBQTRDOzs7OztJQUNyRCw2Q0FBMkI7Ozs7O0lBQzNCLCtDQUE4Qjs7Ozs7SUFDOUIsc0RBQTRDOzs7OztJQUM1Qyw0REFBd0Q7Ozs7O0lBQ3hELDZEQUEwRDs7Ozs7SUFDMUQsNkRBQTBEOzs7OztJQUMxRCwwREFBd0Q7Ozs7O0lBQ3hELDhEQUE0RDs7Ozs7SUFDNUQscUVBQTBFOzs7OztJQUMxRSxnRUFBZ0U7Ozs7O0lBQ2hFLGdEQUFnQzs7Ozs7SUFDaEMsb0VBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3JlYWQvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi9yb3cvc3RydWN0dXJlLnJvdy1zZWxlY3QtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb250ZW50Jyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+O1xuXG5cdGVkaXRNb2RlID0gZmFsc2U7XG5cblx0Y2VsbEVkaXRpbmcgPSBmYWxzZTtcblxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRyb3dTZWxlY3RpbmcgPSBTdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZS5ERUZBVUxUX1JPV19TRUxFQ1Q7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBmb3JtYXRpb25Db21tYW5kU2VydmljZTogRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgZm9ybWF0aW9uUXVlcnlTZXJ2aWNlOiBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgLy8gUkVmYWN0b3Jcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkUm93cygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93c0xpc3Q6IFNlbGVjdGVkUm93c0xpc3QpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNsZWFyU2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRcdFx0cm93c0xpc3QuZ2V0SWRzKCkuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc3RyaXBwZWRJZCA9ICdndWknICsgaWQucmVwbGFjZSgvLS9nLCAnJyksXG5cdFx0XHRcdFx0XHRzZWxlY3RlZFJvd0VsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c3RyaXBwZWRJZH1gKTtcblxuXHRcdFx0XHRcdGlmIChzZWxlY3RlZFJvd0VsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNlbGVjdGVkUm93RWwsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmVkaXRNb2RlID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNlbGxFZGl0aW5nID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUm93SGVpZ2h0KClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dTZWxlY3Rpbmc6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5yb3dTZWxlY3RpbmcgPSByb3dTZWxlY3Rpbmc7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeVxuXHRcdFx0Lm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2VhcmNoUGhyYXNlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0fVxuXG5cdHRyYWNrQnlGbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHRyYW5zbGF0ZVkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGB0cmFuc2xhdGVZKCR7aW5kZXggKiB0aGlzLnJvd0hlaWdodH1weClgO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coZW50aXR5OiBJdGVtRW50aXR5KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucm93U2VsZWN0aW5nKSB7XG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNlbGVjdGVkUm93KChlbnRpdHkgYXMgYW55KS5pZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjbGVhclNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZEVsZW1lbnRzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJyk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0c2VsZWN0ZWRFbGVtZW50cy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsICdzZWxlY3RlZCcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19