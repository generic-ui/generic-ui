/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandService } from '../../../../ui-api/structure/structure-command.service';
import { StructureReadModelService } from '../../../../ui-api/structure/structure-read-model.service';
import { StructureSearchPlaceholderArchive } from '../../../../domain/structure/read/searching/placeholder/structure.search-placeholder.archive';
import { StructureSearchPhraseRepository } from '../../../../domain/structure/read/searching/phrase/structure.search-phrase.repository';
import { StructureId } from '../../../../domain/structure-id';
export class StructureSearchComponent extends SmartComponent {
    /**
     * @param {?} formBuilder
     * @param {?} renderer2
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} structureReadModelService
     * @param {?} structureSearchPhraseRepository
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(formBuilder, renderer2, changeDetectorRef, structureId, structureCommandService, structureReadModelService, structureSearchPhraseRepository, structureSearchPlaceholderArchive) {
        super();
        this.formBuilder = formBuilder;
        this.renderer2 = renderer2;
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureReadModelService = structureReadModelService;
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
        this.structureReadModelService
            .onRowHeight()
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
    { type: StructureCommandService },
    { type: StructureReadModelService },
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
    StructureSearchComponent.prototype.structureReadModelService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFuZWwvdG9wL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw4RkFBOEYsQ0FBQztBQUNqSixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUN4SSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFvQjlELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjOzs7Ozs7Ozs7OztJQVczRCxZQUFvQixXQUF3QixFQUNqQyxTQUFvQixFQUNwQixpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsdUJBQWdELEVBQ2hELHlCQUFvRCxFQUNwRCwrQkFBZ0UsRUFDaEUsaUNBQW9FO1FBQzlFLEtBQUssRUFBRSxDQUFDO1FBUlcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixzQkFBaUIsR0FB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QUpULGlCQUFpQjtZQWlCVCxXQUFXO1lBSlgsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUV6QiwrQkFBK0I7WUFEL0IsaUNBQWlDOzs7c0JBMEJ4QyxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7Ozs7OztJQUZ2QywwQ0FBMEQ7O0lBRTFELDJDQUNvQjs7SUFFcEIsOENBQXNCOztJQUV0QiwrQ0FBdUI7Ozs7O0lBRVgsK0NBQWdDOzs7OztJQUN6Qyw2Q0FBNEI7Ozs7O0lBQzVCLHFEQUE0Qzs7Ozs7SUFDNUMsK0NBQWdDOzs7OztJQUNoQywyREFBd0Q7Ozs7O0lBQ3hELDZEQUE0RDs7Ozs7SUFDNUQsbUVBQXdFOzs7OztJQUN4RSxxRUFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL3BsYWNlaG9sZGVyL3N0cnVjdHVyZS5zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtc2VhcmNoLWJhcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGZvcm0gI2Zvcm1SZWZcblx0XHRcdCAgW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCI+XG5cdFx0XHQ8c3ZnIGNsYXNzPVwiZ3VpLXNlYXJjaC1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAuMjMxXCIgaGVpZ2h0PVwiMTAuNjAxXCIgdmlld0JveD1cIjAgMCAxMC4yMzEgMTAuNjAxXCI+XG5cdFx0XHRcdDxsaW5lIHgyPVwiMS43N1wiIHkyPVwiMS43N1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3LjQgNy43NylcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRcdCAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIi8+XG5cdFx0XHRcdDxjaXJjbGUgY3g9XCI0LjAyXCIgY3k9XCI0LjAyXCIgcj1cIjQuMDJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC41IDAuNSlcIiBzdHJva2Utd2lkdGg9XCIxXCIgXG5cdFx0XHRcdFx0XHRzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBmaWxsPVwibm9uZVwiLz5cblx0XHRcdDwvc3ZnPlxuXHRcdFx0PGlucHV0IGZvcm1Db250cm9sTmFtZT1cInNlYXJjaFBocmFzZVwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiPlxuXHRcdDwvZm9ybT5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPUk1fU0VBUkNIX05BTUUgPSAnc2VhcmNoUGhyYXNlJztcblxuXHRAVmlld0NoaWxkKCdmb3JtUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGZvcm1SZWY6IEVsZW1lbnRSZWY7XG5cblx0c2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZTogU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGxldCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdGNvbnRyb2xzQ29uZmlnW1N0cnVjdHVyZVNlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSA9ICcnO1xuXG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChjb250cm9sc0NvbmZpZyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBsYWNlaG9sZGVyOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5XG5cdFx0XHQub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdGlmIChwaHJhc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHBocmFzZSA9IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRcdFx0Y29udHJvbHNDb25maWdbU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gcGhyYXNlO1xuXG5cdFx0XHRcdGlmIChwaHJhc2UgIT09IHRoaXMuc2VhcmNoRm9ybS5nZXQoW1N0cnVjdHVyZVNlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSkudmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaEZvcm0uc2V0VmFsdWUoY29udHJvbHNDb25maWcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUm93SGVpZ2h0KClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmZvcm1SZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICczMHB4Jyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGb3JtXG5cdFx0XHQuY29udHJvbHNbJ3NlYXJjaFBocmFzZSddXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMCksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2VhcmNoKHBocmFzZSk7XG5cdFx0XHR9KTtcblx0fVxufVxuIl19