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
import { VerticalFormationRepository } from '../../read/structure/vertical-formation/vertical-formation.repository';
import { StructureReadModelWarehouse } from '../../ui-api/structure/structure.read-model-warehouse';
import { StructureRowSelectEnabledArchive } from './row/structure.row-select-enabled.archive';
import { StructureId } from '../../domain/structure.id';
import { StructureSearchPhraseRepository } from '../../read/structure/searching/phrase/structure.search-phrase.repository';
import { StructureSearchHighlightArchive } from '../../read/structure/searching/highlight/structure.search-highlight.archive';
export class StructureContentComponent extends SmartComponent {
    /**
     * @param {?} platformId
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} formationCommandService
     * @param {?} structureCellEditArchive
     * @param {?} structureEditModeArchive
     * @param {?} formationReadModelService
     * @param {?} structureReadModelService
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} verticalFormationRepository
     * @param {?} structureId
     * @param {?} structureSearchPhraseRepository
     * @param {?} structureSearchHighlightArchive
     */
    constructor(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationReadModelService, structureReadModelService, structureRowSelectEnabledArchive, verticalFormationRepository, structureId, // REfactor
    structureSearchPhraseRepository, structureSearchHighlightArchive) {
        super();
        this.platformId = platformId;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandService = formationCommandService;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationReadModelService = formationReadModelService;
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
        this.formationReadModelService
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
                template: "<div class=\"gui-content\">\n\n\t<gui-structure-row (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   [index]=\"index\"\n\t\t\t\t\t   [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t   [style.height.px]=\"rowHeight\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
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
    { type: StructureReadModelWarehouse },
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
    StructureContentComponent.prototype.formationReadModelService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFHaEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDcEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQzNILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FB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QUl6QiwyQkFBMkI7WUFDM0IsZ0NBQWdDO1lBRmhDLDJCQUEyQjtZQUczQixXQUFXO1lBQ1gsK0JBQStCO1lBQy9CLCtCQUErQjs7O3FCQVd0QyxLQUFLO3NCQUdMLEtBQUs7Ozs7SUFITiwyQ0FDMEI7O0lBRTFCLDRDQUN5Qzs7SUFFekMsNkNBQWlCOztJQUVqQixnREFBb0I7O0lBRXBCLDhDQUFrQjs7SUFFbEIsaURBQTBCOztJQUUxQixpREFBNkI7O0lBRTdCLDJDQUF1Qjs7SUFFdkIsaURBQW1FOztJQUVuRSxvREFBb0I7Ozs7O0lBRVIsK0NBQTRDOzs7OztJQUNyRCw2Q0FBMkI7Ozs7O0lBQzNCLCtDQUE4Qjs7Ozs7SUFDOUIsc0RBQTRDOzs7OztJQUM1Qyw0REFBd0Q7Ozs7O0lBQ3hELDZEQUEwRDs7Ozs7SUFDMUQsNkRBQTBEOzs7OztJQUMxRCw4REFBNEQ7Ozs7O0lBQzVELDhEQUE4RDs7Ozs7SUFDOUQscUVBQTBFOzs7OztJQUMxRSxnRUFBZ0U7Ozs7O0lBQ2hFLGdEQUFnQzs7Ozs7SUFDaEMsb0VBQXdFOzs7OztJQUN4RSxvRUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25Jbml0LFxuXHRQTEFURk9STV9JRCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd3NMaXN0IH0gZnJvbSAnLi4vLi4vcmVhZC9mb3JtYXRpb24vc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi9yb3cvc3RydWN0dXJlLnJvdy1zZWxlY3QtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9zZWFyY2hpbmcvaGlnaGxpZ2h0L3N0cnVjdHVyZS5zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGVudCcsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRlZGl0TW9kZSA9IGZhbHNlO1xuXG5cdGNlbGxFZGl0aW5nID0gZmFsc2U7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0c2VhcmNoUGhyYXNlOiBzdHJpbmcgPSAnJztcblxuXHRoaWdobGlnaHRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHBocmFzZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cm93U2VsZWN0aW5nID0gU3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmUuREVGQVVMVF9ST1dfU0VMRUNUO1xuXG5cdHJvd0RldGFpbE9wZW5lZCA9IDQ7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBmb3JtYXRpb25Db21tYW5kU2VydmljZTogRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgZm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZTogRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgLy8gUkVmYWN0b3Jcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmU6IFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkUm93cygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93c0xpc3Q6IFNlbGVjdGVkUm93c0xpc3QpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNsZWFyU2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRcdFx0cm93c0xpc3QuZ2V0SWRzKCkuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc3RyaXBwZWRJZCA9ICdndWknICsgaWQucmVwbGFjZSgvLS9nLCAnJyksXG5cdFx0XHRcdFx0XHRzZWxlY3RlZFJvd0VsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c3RyaXBwZWRJZH1gKTtcblxuXHRcdFx0XHRcdGlmIChzZWxlY3RlZFJvd0VsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNlbGVjdGVkUm93RWwsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmVkaXRNb2RlID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNlbGxFZGl0aW5nID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUm93SGVpZ2h0KClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dTZWxlY3Rpbmc6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5yb3dTZWxlY3RpbmcgPSByb3dTZWxlY3Rpbmc7XG5cdFx0XHR9KTtcblxuXHRcdGNvbWJpbmVMYXRlc3QoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnlcblx0XHRcdFx0Lm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlXG5cdFx0XHRcdC5vblZhbHVlKClcblx0XHQpLnBpcGUoXG5cdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0IClcblx0XHQgLnN1YnNjcmliZSgoYXJnczogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHQgY29uc3Qgc2VhcmNoUGhyYXNlID0gYXJnc1swXSxcblx0XHRcdFx0IGhpZ2hsaWdodGluZyA9IGFyZ3NbMV07XG5cblx0XHRcdCB0aGlzLmhpZ2hsaWdodGluZyA9IGhpZ2hsaWdodGluZztcblx0XHRcdCB0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZTtcblxuXHRcdFx0IGlmICghdGhpcy5oaWdobGlnaHRpbmcpIHtcblx0XHRcdFx0IHRoaXMuc2VhcmNoUGhyYXNlID0gJyc7XG5cdFx0XHQgfVxuXG5cdFx0XHQgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0IH0pO1xuXHR9XG5cblx0dHJhY2tCeUZuKCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0dHJhbnNsYXRlWShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblxuXHRcdGxldCBoZWlnaHQgPSBpbmRleCAqIHRoaXMucm93SGVpZ2h0O1xuXG5cdFx0Ly8gaWYgKGluZGV4ID4gdGhpcy5yb3dEZXRhaWxPcGVuZWQpIHtcblx0XHQvLyBcdGhlaWdodCArPSAyMDA7XG5cdFx0Ly8gfVxuXG5cdFx0cmV0dXJuIGB0cmFuc2xhdGVZKCR7aGVpZ2h0fXB4KWA7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yb3dTZWxlY3RpbmcpIHtcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UudG9nZ2xlU2VsZWN0ZWRSb3coKGVudGl0eSBhcyBhbnkpLmlkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNsZWFyU2VsZWN0ZWRSb3dzKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQnKTtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRzZWxlY3RlZEVsZW1lbnRzLmZvckVhY2goKGVsOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgJ3NlbGVjdGVkJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=