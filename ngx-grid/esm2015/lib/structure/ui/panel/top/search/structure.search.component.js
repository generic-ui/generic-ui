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
        this.placeholder = 'Search ...';
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
			<div class="gui-search-icon"></div>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFuZWwvdG9wL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw4RkFBOEYsQ0FBQztBQUNqSixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUN4SSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFlOUQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7Ozs7Ozs7Ozs7O0lBVzNELFlBQW9CLFdBQXdCLEVBQ2pDLFNBQW9CLEVBQ3BCLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4Qix1QkFBZ0QsRUFDaEQseUJBQW9ELEVBQ3BELCtCQUFnRSxFQUNoRSxpQ0FBb0U7UUFDOUUsS0FBSyxFQUFFLENBQUM7UUFSVyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHNCQUFpQixHQUFq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QWlDOzs7c0JBcUJ4QyxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7Ozs7OztJQUZ2QywwQ0FBMEQ7O0lBRTFELDJDQUNvQjs7SUFFcEIsOENBQXNCOztJQUV0QiwrQ0FBMkI7Ozs7O0lBRWYsK0NBQWdDOzs7OztJQUN6Qyw2Q0FBNEI7Ozs7O0lBQzVCLHFEQUE0Qzs7Ozs7SUFDNUMsK0NBQWdDOzs7OztJQUNoQywyREFBd0Q7Ozs7O0lBQ3hELDZEQUE0RDs7Ozs7SUFDNUQsbUVBQXdFOzs7OztJQUN4RSxxRUFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL3BsYWNlaG9sZGVyL3N0cnVjdHVyZS5zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtc2VhcmNoLWJhcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGZvcm0gI2Zvcm1SZWZcblx0XHRcdCAgW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNlYXJjaC1pY29uXCI+PC9kaXY+XG5cdFx0XHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoUGhyYXNlXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCI+XG5cdFx0PC9mb3JtPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9TRUFSQ0hfTkFNRSA9ICdzZWFyY2hQaHJhc2UnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Zm9ybVJlZjogRWxlbWVudFJlZjtcblxuXHRzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGxhY2Vob2xkZXIgPSAnU2VhcmNoIC4uLic7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZTogU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGxldCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdGNvbnRyb2xzQ29uZmlnW1N0cnVjdHVyZVNlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSA9ICcnO1xuXG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChjb250cm9sc0NvbmZpZyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBsYWNlaG9sZGVyOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5XG5cdFx0XHQub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdGxldCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdFx0XHRjb250cm9sc0NvbmZpZ1tTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0gPSBwaHJhc2U7XG5cblx0XHRcdFx0aWYgKHBocmFzZSAhPT0gdGhpcy5zZWFyY2hGb3JtLmdldChbU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdKS52YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoRm9ybS5zZXRWYWx1ZShjb250cm9sc0NvbmZpZyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Sb3dIZWlnaHQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd0hlaWdodDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZm9ybVJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJzMwcHgnKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlQ2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaEZvcm1cblx0XHRcdC5jb250cm9sc1snc2VhcmNoUGhyYXNlJ11cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRkZWJvdW5jZVRpbWUoMjAwKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZWFyY2gocGhyYXNlKTtcblx0XHRcdH0pO1xuXHR9XG59XG4iXX0=