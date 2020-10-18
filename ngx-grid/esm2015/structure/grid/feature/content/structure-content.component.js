/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { combineLatest } from 'rxjs';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FormationCommandInvoker } from '../../../source/core/api/formation/formation.command-invoker';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationWarehouse } from '../../../source/core/api/formation/formation.warehouse';
import { VerticalFormationRepository } from '../../../vertical-formation/core/api/vertical-formation.repository';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { SearchPhraseRepository } from '../../../search/core/api/phrase/search-phrase.repository';
import { SearchHighlightArchive } from '../../../search/core/api/highlight/search-highlight.archive';
import { StructureVerticalFormationWarehouse } from '../../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { RowSelectionType } from '../../../source/core/api/row-selection';
import { RowSelectToggleType } from '../../../source/core/domain/formation/core/row-select-toggle-type';
import { SchemaRowClassArchive } from '../../../../schema/core/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../../../../schema/core/api/styling/schema.row-style.archive';
export class StructureContentComponent extends SmartComponent {
    /**
     * @param {?} platformId
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} formationCommandService
     * @param {?} structureCellEditArchive
     * @param {?} structureEditModeArchive
     * @param {?} formationWarehouse
     * @param {?} structureWarehouse
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} verticalFormationRepository
     * @param {?} structureId
     * @param {?} rowSelectionTypeArchive
     * @param {?} structureSearchPhraseRepository
     * @param {?} structureSearchHighlightArchive
     * @param {?} schemaRowClassArchive
     * @param {?} schemaRowStyleArchive
     */
    constructor(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationWarehouse, structureWarehouse, structureVerticalFormationWarehouse, verticalFormationRepository, structureId, // REfactor
    rowSelectionTypeArchive, structureSearchPhraseRepository, structureSearchHighlightArchive, schemaRowClassArchive, schemaRowStyleArchive) {
        super(changeDetectorRef);
        this.platformId = platformId;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandService = formationCommandService;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationWarehouse = formationWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.verticalFormationRepository = verticalFormationRepository;
        this.structureId = structureId;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
        this.editMode = false;
        this.cellEditing = false;
        this.searchPhrase = '';
        this.highlighting = true;
        this.phrase = true;
        this.rowDetailOpened = 4;
        this.checkboxSelection = false;
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
        // this.formationWarehouse
        // 	.onRowSelectedReadModel()
        // 	.pipe(
        // 		filter(() => !this.checkboxSelection),
        // 		this.takeUntil()
        // 	)
        // 	.subscribe((rowSelected: RowSelectedReadModel) => {
        //
        // 		this.clearSelectedRows();
        //
        // 		rowSelected.getAll()
        // 				   .forEach((id: string) => {
        //
        // 					   const strippedId = 'gui' + id.replace(/-/g, ''),
        // 						   selectedRowEl = this.elementRef.nativeElement.querySelector(`#${strippedId}`);
        //
        // 					   if (selectedRowEl) {
        // 						   this.renderer.addClass(selectedRowEl, 'selected');
        // 					   }
        // 				   });
        // 	});
        this.structureEditModeArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.editMode = enabled;
            this.reRender();
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
            this.reRender();
        }));
        this.structureVerticalFormationWarehouse
            .onRowHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            this.rowHeight = rowHeight;
            this.reRender();
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
            this.reRender();
        }));
        this.schemaRowClassArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} schemaRowClass
         * @return {?}
         */
        (schemaRowClass) => {
            this.schemaRowClass = schemaRowClass;
            console.log(this.schemaRowClass);
            this.reRender();
        }));
        this.schemaRowStyleArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} schemaRowStyle
         * @return {?}
         */
        (schemaRowStyle) => {
            this.schemaRowStyle = schemaRowStyle;
            this.reRender();
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
        if (!this.checkboxSelection) {
            this.formationCommandService.toggleSelectedRow(entity.getId(), RowSelectToggleType.NONE);
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
                template: "<div class=\"gui-content\">\n\n\t<gui-structure-row (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [checkboxSelection]=\"checkboxSelection\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   [index]=\"index\"\n\t\t\t\t\t   [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [rowClass]=\"schemaRowClass\"\n\t\t\t\t\t   [rowStyle]=\"schemaRowStyle\"\n\t\t\t\t\t   [searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t   [style.height.px]=\"rowHeight\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
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
    { type: FormationCommandInvoker },
    { type: StructureCellEditArchive },
    { type: StructureEditModeArchive },
    { type: FormationWarehouse },
    { type: StructureWarehouse },
    { type: StructureVerticalFormationWarehouse },
    { type: VerticalFormationRepository },
    { type: StructureId },
    { type: RowSelectionTypeArchive },
    { type: SearchPhraseRepository },
    { type: SearchHighlightArchive },
    { type: SchemaRowClassArchive },
    { type: SchemaRowStyleArchive }
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
    StructureContentComponent.prototype.rowDetailOpened;
    /** @type {?} */
    StructureContentComponent.prototype.checkboxSelection;
    /** @type {?} */
    StructureContentComponent.prototype.schemaRowClass;
    /** @type {?} */
    StructureContentComponent.prototype.schemaRowStyle;
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
    StructureContentComponent.prototype.formationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureVerticalFormationWarehouse;
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
    StructureContentComponent.prototype.rowSelectionTypeArchive;
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
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.schemaRowClassArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.schemaRowStyleArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDdkcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFNUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDakgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZFQUE2RSxD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QUFtQzs7SUFFbkMsbURBQStCOztJQUUvQixtREFBK0I7Ozs7O0lBRW5CLCtDQUFxRDs7Ozs7SUFDOUQsNkNBQW9DOzs7OztJQUNwQywrQ0FBdUM7Ozs7O0lBQ3ZDLHNEQUFxRDs7Ozs7SUFDckQsNERBQWlFOzs7OztJQUNqRSw2REFBbUU7Ozs7O0lBQ25FLDZEQUFtRTs7Ozs7SUFDbkUsdURBQXVEOzs7OztJQUN2RCx1REFBdUQ7Ozs7O0lBQ3ZELHdFQUF5Rjs7Ozs7SUFDekYsZ0VBQXlFOzs7OztJQUN6RSxnREFBeUM7Ozs7O0lBQ3pDLDREQUFpRTs7Ozs7SUFDakUsb0VBQXdFOzs7OztJQUN4RSxvRUFBd0U7Ozs7O0lBQ3hFLDBEQUE2RDs7Ozs7SUFDN0QsMERBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3BocmFzZS9zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9oaWdobGlnaHQvc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3NBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcy5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hUm93U3R5bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbnRlbnQnLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+O1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cblx0ZWRpdE1vZGUgPSBmYWxzZTtcblxuXHRjZWxsRWRpdGluZyA9IGZhbHNlO1xuXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdHNlYXJjaFBocmFzZTogc3RyaW5nID0gJyc7XG5cblx0aGlnaGxpZ2h0aW5nOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwaHJhc2U6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHJvd0RldGFpbE9wZW5lZCA9IDQ7XG5cblx0Y2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzY2hlbWFSb3dDbGFzczogU2NoZW1hUm93Q2xhc3M7XG5cblx0c2NoZW1hUm93U3R5bGU6IFNjaGVtYVJvd1N0eWxlO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZFNlcnZpY2U6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIC8vIFJFZmFjdG9yXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFNlYXJjaFBocmFzZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZTogU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSb3dDbGFzc0FyY2hpdmU6IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSb3dTdHlsZUFyY2hpdmU6IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5yb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpID0+IHtcblx0XHRcdFx0dGhpcy5jaGVja2JveFNlbGVjdGlvbiA9IHR5cGUgPT09IFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHRcdHRoaXMucmVSZW5kZXIoKTtcblx0XHRcdH0pO1xuXG5cdFx0Ly8gdGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHQvLyBcdC5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKClcblx0XHQvLyBcdC5waXBlKFxuXHRcdC8vIFx0XHRmaWx0ZXIoKCkgPT4gIXRoaXMuY2hlY2tib3hTZWxlY3Rpb24pLFxuXHRcdC8vIFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0Ly8gXHQpXG5cdFx0Ly8gXHQuc3Vic2NyaWJlKChyb3dTZWxlY3RlZDogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHQvL1xuXHRcdC8vIFx0XHR0aGlzLmNsZWFyU2VsZWN0ZWRSb3dzKCk7XG5cdFx0Ly9cblx0XHQvLyBcdFx0cm93U2VsZWN0ZWQuZ2V0QWxsKClcblx0XHQvLyBcdFx0XHRcdCAgIC5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XG5cdFx0Ly9cblx0XHQvLyBcdFx0XHRcdFx0ICAgY29uc3Qgc3RyaXBwZWRJZCA9ICdndWknICsgaWQucmVwbGFjZSgvLS9nLCAnJyksXG5cdFx0Ly8gXHRcdFx0XHRcdFx0ICAgc2VsZWN0ZWRSb3dFbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3N0cmlwcGVkSWR9YCk7XG5cdFx0Ly9cblx0XHQvLyBcdFx0XHRcdFx0ICAgaWYgKHNlbGVjdGVkUm93RWwpIHtcblx0XHQvLyBcdFx0XHRcdFx0XHQgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNlbGVjdGVkUm93RWwsICdzZWxlY3RlZCcpO1xuXHRcdC8vIFx0XHRcdFx0XHQgICB9XG5cdFx0Ly8gXHRcdFx0XHQgICB9KTtcblx0XHQvLyBcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuZWRpdE1vZGUgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNlbGxFZGl0aW5nID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdFx0fSk7XG5cblx0XHRjb21iaW5lTGF0ZXN0KFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5XG5cdFx0XHRcdC5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZVxuXHRcdFx0XHQub25WYWx1ZSgpXG5cdFx0KS5waXBlKFxuXHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdCApXG5cdFx0IC5zdWJzY3JpYmUoKGFyZ3M6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0IGNvbnN0IHNlYXJjaFBocmFzZSA9IGFyZ3NbMF0sXG5cdFx0XHRcdCBoaWdobGlnaHRpbmcgPSBhcmdzWzFdO1xuXG5cdFx0XHQgdGhpcy5oaWdobGlnaHRpbmcgPSBoaWdobGlnaHRpbmc7XG5cdFx0XHQgdGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cblx0XHRcdCBpZiAoIXRoaXMuaGlnaGxpZ2h0aW5nKSB7XG5cdFx0XHRcdCB0aGlzLnNlYXJjaFBocmFzZSA9ICcnO1xuXHRcdFx0IH1cblxuXHRcdFx0IHRoaXMucmVSZW5kZXIoKTtcblx0XHQgfSk7XG5cblx0XHR0aGlzLnNjaGVtYVJvd0NsYXNzQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNjaGVtYVJvd0NsYXNzOiBTY2hlbWFSb3dDbGFzcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNjaGVtYVJvd0NsYXNzID0gc2NoZW1hUm93Q2xhc3M7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2NoZW1hUm93Q2xhc3MpO1xuXHRcdFx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hUm93U3R5bGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2NoZW1hUm93U3R5bGU6IFNjaGVtYVJvd1N0eWxlKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2NoZW1hUm93U3R5bGUgPSBzY2hlbWFSb3dTdHlsZTtcblx0XHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0cmFja0J5Rm4oKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHR0cmFuc2xhdGVZKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXG5cdFx0bGV0IGhlaWdodCA9IGluZGV4ICogdGhpcy5yb3dIZWlnaHQ7XG5cblx0XHQvLyBpZiAoaW5kZXggPiB0aGlzLnJvd0RldGFpbE9wZW5lZCkge1xuXHRcdC8vIFx0aGVpZ2h0ICs9IDIwMDtcblx0XHQvLyB9XG5cblx0XHRyZXR1cm4gYHRyYW5zbGF0ZVkoJHtoZWlnaHR9cHgpYDtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eTogSXRlbUVudGl0eSk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5jaGVja2JveFNlbGVjdGlvbikge1xuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kU2VydmljZS50b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHkuZ2V0SWQoKSwgUm93U2VsZWN0VG9nZ2xlVHlwZS5OT05FKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNsZWFyU2VsZWN0ZWRSb3dzKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQnKTtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRzZWxlY3RlZEVsZW1lbnRzLmZvckVhY2goKGVsOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgJ3NlbGVjdGVkJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=