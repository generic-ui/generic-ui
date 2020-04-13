/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandDispatcher } from '../../../../ui-api/structure.command-dispatcher';
import { StructureWarehouse } from '../../../../ui-api/structure.warehouse';
import { StructureSearchPlaceholderArchive } from '../../../../read/structure/searching/placeholder/structure.search-placeholder.archive';
import { StructureSearchPhraseRepository } from '../../../../read/structure/searching/phrase/structure.search-phrase.repository';
import { StructureId } from '../../../../domain/structure.id';
import { StructureVerticalFormationWarehouse } from '../../../../ui-api/vertical-formation/structure-vertical-formation.warehouse';
export class StructureSearchComponent extends SmartComponent {
    /**
     * @param {?} formBuilder
     * @param {?} renderer2
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} structureWarehouse
     * @param {?} verticalFormationWarehouse
     * @param {?} structureSearchPhraseRepository
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(formBuilder, renderer2, changeDetectorRef, structureId, structureCommandService, structureWarehouse, verticalFormationWarehouse, structureSearchPhraseRepository, structureSearchPlaceholderArchive) {
        super();
        this.formBuilder = formBuilder;
        this.renderer2 = renderer2;
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureWarehouse = structureWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
        this.placeholder = 'Search';
        /** @type {?} */
        let controlsConfig = {};
        controlsConfig[StructureSearchComponent.FORM_SEARCH_NAME] = '';
        this.searchForm = this.formBuilder.group(controlsConfig);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.observeChanges();
        this.structureSearchPlaceholderArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} placeholder
         * @return {?}
         */
        (placeholder) => {
            this.placeholder = placeholder;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureSearchPhraseRepository
            .onPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            if (phrase === undefined) {
                phrase = null;
            }
            /** @type {?} */
            let controlsConfig = {};
            controlsConfig[StructureSearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== this.searchForm.get([StructureSearchComponent.FORM_SEARCH_NAME]).value) {
                this.searchForm.setValue(controlsConfig);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.verticalFormationWarehouse
            .onRowHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            this.renderer2.setStyle(this.formRef.nativeElement, 'height', '30px');
        }));
    }
    /**
     * @private
     * @return {?}
     */
    observeChanges() {
        this.searchForm
            .controls['searchPhrase']
            .valueChanges
            .pipe(debounceTime(200), this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            this.structureCommandService.search(phrase);
        }));
    }
}
StructureSearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
StructureSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-search-bar',
                template: `
		<form #formRef
			  [formGroup]="searchForm">
			<svg class="gui-search-icon" xmlns="http://www.w3.org/2000/svg" width="10.231" height="10.601" viewBox="0 0 10.231 10.601">
				<line x2="1.77" y2="1.77" transform="translate(7.4 7.77)" fill="none" stroke-linecap="round"
					  stroke-linejoin="round" stroke-width="1.5"/>
				<circle cx="4.02" cy="4.02" r="4.02" transform="translate(0.5 0.5)" stroke-width="1" 
						stroke-linecap="round" stroke-linejoin="round" fill="none"/>
			</svg>
			<input formControlName="searchPhrase" [placeholder]="placeholder">
		</form>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureSearchComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: StructureCommandDispatcher },
    { type: StructureWarehouse },
    { type: StructureVerticalFormationWarehouse },
    { type: StructureSearchPhraseRepository },
    { type: StructureSearchPlaceholderArchive }
];
StructureSearchComponent.propDecorators = {
    formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.FORM_SEARCH_NAME;
    /** @type {?} */
    StructureSearchComponent.prototype.formRef;
    /** @type {?} */
    StructureSearchComponent.prototype.searchForm;
    /** @type {?} */
    StructureSearchComponent.prototype.placeholder;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.verticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureSearchPhraseRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureSearchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFuZWwvdG9wL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUMxSSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUNqSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFvQm5JLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjOzs7Ozs7Ozs7Ozs7SUFXM0QsWUFBb0IsV0FBd0IsRUFDakMsU0FBb0IsRUFDcEIsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLHVCQUFtRCxFQUNuRCxrQkFBc0MsRUFDdEMsMEJBQStELEVBQy9ELCtCQUFnRSxFQUNoRSxpQ0FBb0U7UUFDOUUsS0FBSyxFQUFFLENBQUM7UUFUVyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE0QjtRQUNuRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBcUM7UUFDL0Qsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQUNoRSxzQ0FBaUMsR0FBakMsaUNBQWlDLENBQW1DO1FBVi9FLGdCQUFXLEdBQUcsUUFBUSxDQUFDOztZQWFsQixjQUFjLEdBQUcsRUFBRTtRQUN2QixjQUFjLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsaUNBQWlDO2FBQ3BDLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQywrQkFBK0I7YUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDMUIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUU3QixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDZDs7Z0JBRUcsY0FBYyxHQUFHLEVBQUU7WUFDdkIsY0FBYyxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDLEdBQUcsTUFBTSxDQUFDO1lBRW5FLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDdEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekM7UUFFRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLDBCQUEwQjthQUM3QixXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGNBQWM7UUFDckIsSUFBSSxDQUFDLFVBQVU7YUFDYixRQUFRLENBQUMsY0FBYyxDQUFDO2FBQ3hCLFlBQVk7YUFDWixJQUFJLENBQ0osWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O0FBbEZ1Qix5Q0FBZ0IsR0FBRyxjQUFjLENBQUM7O1lBbkIxRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztFQVdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQTdCUSxXQUFXO1lBSm5CLFNBQVM7WUFKVCxpQkFBaUI7WUFpQlQsV0FBVztZQUpYLDBCQUEwQjtZQUMxQixrQkFBa0I7WUFJbEIsbUNBQW1DO1lBRm5DLCtCQUErQjtZQUQvQixpQ0FBaUM7OztzQkEyQnhDLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7Ozs7O0lBRnZDLDBDQUEwRDs7SUFFMUQsMkNBQ29COztJQUVwQiw4Q0FBc0I7O0lBRXRCLCtDQUF1Qjs7Ozs7SUFFWCwrQ0FBZ0M7Ozs7O0lBQ3pDLDZDQUE0Qjs7Ozs7SUFDNUIscURBQTRDOzs7OztJQUM1QywrQ0FBZ0M7Ozs7O0lBQ2hDLDJEQUEyRDs7Ozs7SUFDM0Qsc0RBQThDOzs7OztJQUM5Qyw4REFBdUU7Ozs7O0lBQ3ZFLG1FQUF3RTs7Ozs7SUFDeEUscUVBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL3BsYWNlaG9sZGVyL3N0cnVjdHVyZS5zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtc2VhcmNoLWJhcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGZvcm0gI2Zvcm1SZWZcblx0XHRcdCAgW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCI+XG5cdFx0XHQ8c3ZnIGNsYXNzPVwiZ3VpLXNlYXJjaC1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAuMjMxXCIgaGVpZ2h0PVwiMTAuNjAxXCIgdmlld0JveD1cIjAgMCAxMC4yMzEgMTAuNjAxXCI+XG5cdFx0XHRcdDxsaW5lIHgyPVwiMS43N1wiIHkyPVwiMS43N1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3LjQgNy43NylcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRcdCAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIi8+XG5cdFx0XHRcdDxjaXJjbGUgY3g9XCI0LjAyXCIgY3k9XCI0LjAyXCIgcj1cIjQuMDJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC41IDAuNSlcIiBzdHJva2Utd2lkdGg9XCIxXCIgXG5cdFx0XHRcdFx0XHRzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBmaWxsPVwibm9uZVwiLz5cblx0XHRcdDwvc3ZnPlxuXHRcdFx0PGlucHV0IGZvcm1Db250cm9sTmFtZT1cInNlYXJjaFBocmFzZVwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiPlxuXHRcdDwvZm9ybT5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPUk1fU0VBUkNIX05BTUUgPSAnc2VhcmNoUGhyYXNlJztcblxuXHRAVmlld0NoaWxkKCdmb3JtUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGZvcm1SZWY6IEVsZW1lbnRSZWY7XG5cblx0c2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0bGV0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gJyc7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGxhY2Vob2xkZXI6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnlcblx0XHRcdC5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0aWYgKHBocmFzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cGhyYXNlID0gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdFx0XHRjb250cm9sc0NvbmZpZ1tTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0gPSBwaHJhc2U7XG5cblx0XHRcdFx0aWYgKHBocmFzZSAhPT0gdGhpcy5zZWFyY2hGb3JtLmdldChbU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdKS52YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoRm9ybS5zZXRWYWx1ZShjb250cm9sc0NvbmZpZyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uUm93SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5mb3JtUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnMzBweCcpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRm9ybVxuXHRcdFx0LmNvbnRyb2xzWydzZWFyY2hQaHJhc2UnXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGRlYm91bmNlVGltZSgyMDApLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNlYXJjaChwaHJhc2UpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==