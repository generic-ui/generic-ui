/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandDispatcher } from '../../../../domain-api/structure.command-dispatcher';
import { StructureWarehouse } from '../../../../domain-api/structure.warehouse';
import { StructureSearchPlaceholderArchive } from '../../../../domain-api/search/placeholder/structure.search-placeholder.archive';
import { StructureSearchPhraseRepository } from '../../../../domain-api/search/phrase/structure.search-phrase.repository';
import { StructureId } from '../../../../domain/structure.id';
import { StructureVerticalFormationWarehouse } from '../../../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
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
     * @return {?}
     */
    clear() {
        this.searchForm.reset();
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
			<gui-structure-search-icon></gui-structure-search-icon>
			<input formControlName="searchPhrase" [placeholder]="placeholder">
			<span *ngIf="searchForm.controls['searchPhrase'].value" class="gui-clear-search-icon" (click)="clear()"></span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9wYW5lbC90b3Avc2VhcmNoL3N0cnVjdHVyZS5zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ25JLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzFILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQWdCdkksTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7Ozs7Ozs7Ozs7OztJQVczRCxZQUFvQixXQUF3QixFQUNqQyxTQUFvQixFQUNwQixpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsdUJBQW1ELEVBQ25ELGtCQUFzQyxFQUN0QywwQkFBK0QsRUFDL0QsK0JBQWdFLEVBQ2hFLGlDQUFvRTtRQUM5RSxLQUFLLEVBQUUsQ0FBQztRQVRX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QUFjLENBQUM7O1lBZjFELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7RUFPVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUF6QlEsV0FBVztZQUpuQixTQUFTO1lBSlQsaUJBQWlCO1lBaUJULFdBQVc7WUFKWCwwQkFBMEI7WUFDMUIsa0JBQWtCO1lBSWxCLG1DQUFtQztZQUZuQywrQkFBK0I7WUFEL0IsaUNBQWlDOzs7c0JBdUJ4QyxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7Ozs7OztJQUZ2QywwQ0FBMEQ7O0lBRTFELDJDQUNvQjs7SUFFcEIsOENBQXNCOztJQUV0QiwrQ0FBdUI7Ozs7O0lBRVgsK0NBQWdDOzs7OztJQUN6Qyw2Q0FBNEI7Ozs7O0lBQzVCLHFEQUE0Qzs7Ozs7SUFDNUMsK0NBQWdDOzs7OztJQUNoQywyREFBMkQ7Ozs7O0lBQzNELHNEQUE4Qzs7Ozs7SUFDOUMsOERBQXVFOzs7OztJQUN2RSxtRUFBd0U7Ozs7O0lBQ3hFLHFFQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRPbkluaXQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4tYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluLWFwaS9zZWFyY2gvcGxhY2Vob2xkZXIvc3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4tYXBpL3NlYXJjaC9waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4tYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1zZWFyY2gtYmFyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8Zm9ybSAjZm9ybVJlZlxuXHRcdFx0ICBbZm9ybUdyb3VwXT1cInNlYXJjaEZvcm1cIj5cblx0XHRcdDxndWktc3RydWN0dXJlLXNlYXJjaC1pY29uPjwvZ3VpLXN0cnVjdHVyZS1zZWFyY2gtaWNvbj5cblx0XHRcdDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hQaHJhc2VcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIj5cblx0XHRcdDxzcGFuICpuZ0lmPVwic2VhcmNoRm9ybS5jb250cm9sc1snc2VhcmNoUGhyYXNlJ10udmFsdWVcIiBjbGFzcz1cImd1aS1jbGVhci1zZWFyY2gtaWNvblwiIChjbGljayk9XCJjbGVhcigpXCI+PC9zcGFuPlxuXHRcdDwvZm9ybT5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPUk1fU0VBUkNIX05BTUUgPSAnc2VhcmNoUGhyYXNlJztcblxuXHRAVmlld0NoaWxkKCdmb3JtUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGZvcm1SZWY6IEVsZW1lbnRSZWY7XG5cblx0c2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0bGV0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gJyc7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGxhY2Vob2xkZXI6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnlcblx0XHRcdC5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0aWYgKHBocmFzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cGhyYXNlID0gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdFx0XHRjb250cm9sc0NvbmZpZ1tTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0gPSBwaHJhc2U7XG5cblx0XHRcdFx0aWYgKHBocmFzZSAhPT0gdGhpcy5zZWFyY2hGb3JtLmdldChbU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdKS52YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoRm9ybS5zZXRWYWx1ZShjb250cm9sc0NvbmZpZyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uUm93SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5mb3JtUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnMzBweCcpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaEZvcm0ucmVzZXQoKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGb3JtXG5cdFx0XHQuY29udHJvbHNbJ3NlYXJjaFBocmFzZSddXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMCksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2VhcmNoKHBocmFzZSk7XG5cdFx0XHR9KTtcblx0fVxufVxuIl19