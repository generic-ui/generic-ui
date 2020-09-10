/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { combineLatest } from 'rxjs';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FormationCommandInvoker } from '../../../source/domain-api/formation/formation.command-invoker';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationWarehouse } from '../../../source/domain-api/formation/formation.warehouse';
import { VerticalFormationRepository } from '../../domain-api/vertical-formation/vertical-formation.repository';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { StructureId } from '../../domain/structure.id';
import { SearchPhraseRepository } from '../../../search/domain-api/phrase/search-phrase.repository';
import { SearchHighlightArchive } from '../../../search/domain-api/highlight/search-highlight.archive';
import { StructureVerticalFormationWarehouse } from '../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
import { RowSelectionTypeArchive } from '../../../source/domain-api/formation/type/row-selection-type.archive';
import { RowSelectionType } from '../../../source/domain-api/row-selection';
import { RowSelectToggleType } from '../../../source/domain/formation/core/row-select-toggle-type';
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
     */
    constructor(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationWarehouse, structureWarehouse, structureVerticalFormationWarehouse, verticalFormationRepository, structureId, // REfactor
    rowSelectionTypeArchive, structureSearchPhraseRepository, structureSearchHighlightArchive) {
        super();
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
            this.changeDetectorRef.detectChanges();
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
        this.structureVerticalFormationWarehouse
            .onRowHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            this.rowHeight = rowHeight;
            this.changeDetectorRef.detectChanges();
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
                template: "<div class=\"gui-content\">\n\n\t<gui-structure-row (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [checkboxSelection]=\"checkboxSelection\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   [index]=\"index\"\n\t\t\t\t\t   [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t   [style.height.px]=\"rowHeight\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
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
    { type: SearchHighlightArchive }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFOUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDaEgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBU25HLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3QjVELFlBQWtELFVBQWUsRUFDN0MsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCx3QkFBa0QsRUFDbEQsd0JBQWtELEVBQ2xELGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDdEMsbUNBQXdFLEVBQ3hFLDJCQUF3RCxFQUN4RCxXQUF3QixFQUFFLFdBQVc7SUFDckMsdUJBQWdELEVBQ2hELCtCQUF1RCxFQUN2RCwrQkFBdUQ7UUFDMUUsS0FBSyxFQUFFLENBQUM7UUFmeUMsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztRQUN4RSxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsb0NBQStCLEdBQS9CLCtCQUErQixDQUF3QjtRQUN2RCxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQXdCO1FBOUIzRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXBCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFFcEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0lBa0JuQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyx1QkFBdUI7YUFDMUIsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QixVQUFVO1FBQ1YsMkNBQTJDO1FBQzNDLHFCQUFxQjtRQUNyQixLQUFLO1FBQ0wsdURBQXVEO1FBQ3ZELEVBQUU7UUFDRiw4QkFBOEI7UUFDOUIsRUFBRTtRQUNGLHlCQUF5QjtRQUN6QixvQ0FBb0M7UUFDcEMsRUFBRTtRQUNGLDJEQUEyRDtRQUMzRCwwRkFBMEY7UUFDMUYsRUFBRTtRQUNGLCtCQUErQjtRQUMvQiw4REFBOEQ7UUFDOUQsWUFBWTtRQUNaLGFBQWE7UUFDYixPQUFPO1FBRVAsSUFBSSxDQUFDLHdCQUF3QjthQUMzQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsd0JBQXdCO2FBQzNCLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxtQ0FBbUM7YUFDdEMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDN0IsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosYUFBYSxDQUNaLElBQUksQ0FBQywrQkFBK0I7YUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDNUIsSUFBSSxDQUFDLCtCQUErQjthQUNsQyxPQUFPLEVBQUUsQ0FDWCxDQUFDLElBQUksQ0FDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2Y7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7O2tCQUV6QixZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7a0JBQzNCLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXZCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzthQUN2QjtZQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFhOztZQUVuQixNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTO1FBRW5DLHNDQUFzQztRQUN0QyxrQkFBa0I7UUFDbEIsSUFBSTtRQUVKLE9BQU8sY0FBYyxNQUFNLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE1BQWtCO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RjtJQUNGLENBQUM7Ozs7O0lBRU8saUJBQWlCOztjQUNsQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFFcEYsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsZ0JBQWdCLENBQUMsT0FBTzs7OztZQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQUMsQ0FBQztTQUNIO0lBRUYsQ0FBQzs7O1lBdEtELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywwekJBQStDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7NENBeUJhLE1BQU0sU0FBQyxXQUFXO1lBdkQvQixTQUFTO1lBTFQsVUFBVTtZQUZWLGlCQUFpQjtZQWdCVCx1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4QixrQkFBa0I7WUFHbEIsa0JBQWtCO1lBSWxCLG1DQUFtQztZQUxuQywyQkFBMkI7WUFFM0IsV0FBVztZQUlYLHVCQUF1QjtZQUh2QixzQkFBc0I7WUFDdEIsc0JBQXNCOzs7cUJBZTdCLEtBQUs7c0JBR0wsS0FBSzs7OztJQUhOLDJDQUMwQjs7SUFFMUIsNENBQ3lDOztJQUV6Qyw2Q0FBaUI7O0lBRWpCLGdEQUFvQjs7SUFFcEIsOENBQWtCOztJQUVsQixpREFBMEI7O0lBRTFCLGlEQUE2Qjs7SUFFN0IsMkNBQXVCOztJQUV2QixvREFBb0I7O0lBRXBCLHNEQUFtQzs7Ozs7SUFFdkIsK0NBQXFEOzs7OztJQUM5RCw2Q0FBb0M7Ozs7O0lBQ3BDLCtDQUF1Qzs7Ozs7SUFDdkMsc0RBQXFEOzs7OztJQUNyRCw0REFBaUU7Ozs7O0lBQ2pFLDZEQUFtRTs7Ozs7SUFDbkUsNkRBQW1FOzs7OztJQUNuRSx1REFBdUQ7Ozs7O0lBQ3ZELHVEQUF1RDs7Ozs7SUFDdkQsd0VBQXlGOzs7OztJQUN6RixnRUFBeUU7Ozs7O0lBQ3pFLGdEQUF5Qzs7Ozs7SUFDekMsNERBQWlFOzs7OztJQUNqRSxvRUFBd0U7Ozs7O0lBQ3hFLG9FQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPbkluaXQsXG5cdFBMQVRGT1JNX0lELFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9kb21haW4tYXBpL3BocmFzZS9zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9kb21haW4tYXBpL2hpZ2hsaWdodC9zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGVudCcsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRlZGl0TW9kZSA9IGZhbHNlO1xuXG5cdGNlbGxFZGl0aW5nID0gZmFsc2U7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0c2VhcmNoUGhyYXNlOiBzdHJpbmcgPSAnJztcblxuXHRoaWdobGlnaHRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHBocmFzZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cm93RGV0YWlsT3BlbmVkID0gNDtcblxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZFNlcnZpY2U6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIC8vIFJFZmFjdG9yXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFNlYXJjaFBocmFzZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZTogU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMucm93U2VsZWN0aW9uVHlwZUFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hlY2tib3hTZWxlY3Rpb24gPSB0eXBlID09PSBSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0Ly8gdGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHQvLyBcdC5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKClcblx0XHQvLyBcdC5waXBlKFxuXHRcdC8vIFx0XHRmaWx0ZXIoKCkgPT4gIXRoaXMuY2hlY2tib3hTZWxlY3Rpb24pLFxuXHRcdC8vIFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0Ly8gXHQpXG5cdFx0Ly8gXHQuc3Vic2NyaWJlKChyb3dTZWxlY3RlZDogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHQvL1xuXHRcdC8vIFx0XHR0aGlzLmNsZWFyU2VsZWN0ZWRSb3dzKCk7XG5cdFx0Ly9cblx0XHQvLyBcdFx0cm93U2VsZWN0ZWQuZ2V0QWxsKClcblx0XHQvLyBcdFx0XHRcdCAgIC5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XG5cdFx0Ly9cblx0XHQvLyBcdFx0XHRcdFx0ICAgY29uc3Qgc3RyaXBwZWRJZCA9ICdndWknICsgaWQucmVwbGFjZSgvLS9nLCAnJyksXG5cdFx0Ly8gXHRcdFx0XHRcdFx0ICAgc2VsZWN0ZWRSb3dFbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3N0cmlwcGVkSWR9YCk7XG5cdFx0Ly9cblx0XHQvLyBcdFx0XHRcdFx0ICAgaWYgKHNlbGVjdGVkUm93RWwpIHtcblx0XHQvLyBcdFx0XHRcdFx0XHQgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNlbGVjdGVkUm93RWwsICdzZWxlY3RlZCcpO1xuXHRcdC8vIFx0XHRcdFx0XHQgICB9XG5cdFx0Ly8gXHRcdFx0XHQgICB9KTtcblx0XHQvLyBcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuZWRpdE1vZGUgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2VsbEVkaXRpbmcgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uUm93SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHRjb21iaW5lTGF0ZXN0KFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5XG5cdFx0XHRcdC5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZVxuXHRcdFx0XHQub25WYWx1ZSgpXG5cdFx0KS5waXBlKFxuXHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdCApXG5cdFx0IC5zdWJzY3JpYmUoKGFyZ3M6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0IGNvbnN0IHNlYXJjaFBocmFzZSA9IGFyZ3NbMF0sXG5cdFx0XHRcdCBoaWdobGlnaHRpbmcgPSBhcmdzWzFdO1xuXG5cdFx0XHQgdGhpcy5oaWdobGlnaHRpbmcgPSBoaWdobGlnaHRpbmc7XG5cdFx0XHQgdGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cblx0XHRcdCBpZiAoIXRoaXMuaGlnaGxpZ2h0aW5nKSB7XG5cdFx0XHRcdCB0aGlzLnNlYXJjaFBocmFzZSA9ICcnO1xuXHRcdFx0IH1cblxuXHRcdFx0IHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdCB9KTtcblx0fVxuXG5cdHRyYWNrQnlGbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHRyYW5zbGF0ZVkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cblx0XHRsZXQgaGVpZ2h0ID0gaW5kZXggKiB0aGlzLnJvd0hlaWdodDtcblxuXHRcdC8vIGlmIChpbmRleCA+IHRoaXMucm93RGV0YWlsT3BlbmVkKSB7XG5cdFx0Ly8gXHRoZWlnaHQgKz0gMjAwO1xuXHRcdC8vIH1cblxuXHRcdHJldHVybiBgdHJhbnNsYXRlWSgke2hlaWdodH1weClgO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coZW50aXR5OiBJdGVtRW50aXR5KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0aW9uKSB7XG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eS5nZXRJZCgpLCBSb3dTZWxlY3RUb2dnbGVUeXBlLk5PTkUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2xlYXJTZWxlY3RlZFJvd3MoKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRFbGVtZW50cyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RlZCcpO1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHNlbGVjdGVkRWxlbWVudHMuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCAnc2VsZWN0ZWQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==