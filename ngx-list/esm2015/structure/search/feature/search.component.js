/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { StructureWarehouse } from '../../grid/core/api/structure.warehouse';
import { SearchPlaceholderArchive } from '../core/api/placeholder/search-placeholder.archive';
import { StructureId } from '../../core/domain/structure.id';
import { StructureVerticalFormationWarehouse } from '../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { SearchCommandInvoker } from '../core/api/search.command-invoker';
import { SearchWarehouse } from '../core/api/search.warehouse';
export class SearchComponent extends SmartComponent {
    /**
     * @param {?} formBuilder
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureId
     * @param {?} searchCommandDispatcher
     * @param {?} structureWarehouse
     * @param {?} searchWarehouse
     * @param {?} verticalFormationWarehouse
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(formBuilder, changeDetectorRef, elementRef, structureId, searchCommandDispatcher, structureWarehouse, searchWarehouse, verticalFormationWarehouse, structureSearchPlaceholderArchive) {
        super(changeDetectorRef, elementRef);
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.structureWarehouse = structureWarehouse;
        this.searchWarehouse = searchWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
        this.placeholder = 'Search';
        this.searchingEnabled = false;
        /** @type {?} */
        const controlsConfig = {};
        controlsConfig[SearchComponent.FORM_SEARCH_NAME] = '';
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
        this.searchWarehouse
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
            const controlsConfig = {};
            controlsConfig[SearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== this.searchForm.get([SearchComponent.FORM_SEARCH_NAME]).value) {
                this.stopObserveChanges();
                this.searchForm.setValue(controlsConfig);
                this.observeChanges();
            }
        }));
        this.searchWarehouse
            .onSearchEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} searchingEnabled
         * @return {?}
         */
        (searchingEnabled) => {
            this.searchingEnabled = searchingEnabled;
            this.changeDetectorRef.detectChanges();
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
        this.searchInputSubscription =
            this.searchForm
                .controls[SearchComponent.FORM_SEARCH_NAME]
                .valueChanges
                .pipe(debounceTime(200), this.takeUntil())
                .subscribe((/**
             * @param {?} phrase
             * @return {?}
             */
            (phrase) => {
                this.searchCommandDispatcher.search(phrase, this.structureId);
            }));
    }
    /**
     * @private
     * @return {?}
     */
    stopObserveChanges() {
        this.searchInputSubscription.unsubscribe();
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-search-bar';
    }
}
SearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-search-bar]',
                template: `
		<ng-container *ngIf="searchingEnabled">
			<form #formRef
				  [formGroup]="searchForm"
				  class="gui-flex gui-relative gui-w-full">

				<div gui-search-icon></div>

				<input formControlName="searchPhrase"
					   class="gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21"
					   [placeholder]="placeholder">

				<span *ngIf="searchForm.controls['searchPhrase'].value"
					  class="gui-clear-search-icon"
					  (click)="clear()">
				</span>
			</form>
		</ng-container>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg circle,.gui-search-bar form:hover .gui-search-icon-svg line{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg circle,.gui-search-bar .gui-search-icon-svg line{stroke:#ccc;transition:stroke .3s ease-in-out}"]
            }] }
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: SearchCommandInvoker },
    { type: StructureWarehouse },
    { type: SearchWarehouse },
    { type: StructureVerticalFormationWarehouse },
    { type: SearchPlaceholderArchive }
];
SearchComponent.propDecorators = {
    formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchComponent.FORM_SEARCH_NAME;
    /** @type {?} */
    SearchComponent.prototype.formRef;
    /** @type {?} */
    SearchComponent.prototype.searchForm;
    /** @type {?} */
    SearchComponent.prototype.placeholder;
    /** @type {?} */
    SearchComponent.prototype.searchingEnabled;
    /** @type {?} */
    SearchComponent.prototype.searchInputSubscription;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.searchWarehouse;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.verticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.structureSearchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDL0gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBOEIvRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjOzs7Ozs7Ozs7Ozs7SUFlbEQsWUFBNkIsV0FBd0IsRUFDakMsaUJBQW9DLEVBQ3JELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsdUJBQTZDLEVBQzdDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQywwQkFBK0QsRUFDL0QsaUNBQTJEO1FBQzlFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQVRULGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHNC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QztZQUMvRCxDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOztBQXJHdUIsZ0NBQWdCLEdBQUcsY0FBYyxDQUFDOztZQTdCMUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFJckM7Ozs7WUF2Q1EsV0FBVztZQURjLGlCQUFpQjtZQUFhLFVBQVU7WUFRakUsV0FBVztZQUVYLG9CQUFvQjtZQUpwQixrQkFBa0I7WUFLbEIsZUFBZTtZQUZmLG1DQUFtQztZQUZuQyx3QkFBd0I7OztzQkFzQy9CLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7Ozs7O0lBRnZDLGlDQUEwRDs7SUFFMUQsa0NBQ29COztJQUVwQixxQ0FBc0I7O0lBRXRCLHNDQUF1Qjs7SUFFdkIsMkNBQWtDOztJQUVsQyxrREFBc0M7Ozs7O0lBRTFCLHNDQUF5Qzs7Ozs7SUFDbEQsNENBQXFEOzs7OztJQUVyRCxzQ0FBeUM7Ozs7O0lBQ3pDLGtEQUE4RDs7Ozs7SUFDOUQsNkNBQXVEOzs7OztJQUN2RCwwQ0FBaUQ7Ozs7O0lBQ2pELHFEQUFnRjs7Ozs7SUFDaEYsNERBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9ncmlkL2NvcmUvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS9hcGkvcGxhY2Vob2xkZXIvc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uL2NvcmUvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc2VhcmNoLWJhcl0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWFyY2hpbmdFbmFibGVkXCI+XG5cdFx0XHQ8Zm9ybSAjZm9ybVJlZlxuXHRcdFx0XHQgIFtmb3JtR3JvdXBdPVwic2VhcmNoRm9ybVwiXG5cdFx0XHRcdCAgY2xhc3M9XCJndWktZmxleCBndWktcmVsYXRpdmUgZ3VpLXctZnVsbFwiPlxuXG5cdFx0XHRcdDxkaXYgZ3VpLXNlYXJjaC1pY29uPjwvZGl2PlxuXG5cdFx0XHRcdDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hQaHJhc2VcIlxuXHRcdFx0XHRcdCAgIGNsYXNzPVwiZ3VpLWJvcmRlci0wIGd1aS13LWZ1bGwgZ3VpLWgtZnVsbCBndWktcHktNSBndWktcHItNSBndWktcGwtMjFcIlxuXHRcdFx0XHRcdCAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiPlxuXG5cdFx0XHRcdDxzcGFuICpuZ0lmPVwic2VhcmNoRm9ybS5jb250cm9sc1snc2VhcmNoUGhyYXNlJ10udmFsdWVcIlxuXHRcdFx0XHRcdCAgY2xhc3M9XCJndWktY2xlYXItc2VhcmNoLWljb25cIlxuXHRcdFx0XHRcdCAgKGNsaWNrKT1cImNsZWFyKClcIj5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvc2VhcmNoaW5nLm5neC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT1JNX1NFQVJDSF9OQU1FID0gJ3NlYXJjaFBocmFzZSc7XG5cblx0QFZpZXdDaGlsZCgnZm9ybVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRmb3JtUmVmOiBFbGVtZW50UmVmO1xuXG5cdHNlYXJjaEZvcm06IEZvcm1Hcm91cDtcblxuXHRwbGFjZWhvbGRlciA9ICdTZWFyY2gnO1xuXG5cdHNlYXJjaGluZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzZWFyY2hJbnB1dFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmU6IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdGNvbnN0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gJyc7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGxhY2Vob2xkZXI6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZVxuXHRcdFx0Lm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRpZiAocGhyYXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRwaHJhc2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRcdFx0Y29udHJvbHNDb25maWdbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gcGhyYXNlO1xuXG5cdFx0XHRcdGlmIChwaHJhc2UgIT09IHRoaXMuc2VhcmNoRm9ybS5nZXQoW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSkudmFsdWUpIHtcblxuXHRcdFx0XHRcdHRoaXMuc3RvcE9ic2VydmVDaGFuZ2VzKCk7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hGb3JtLnNldFZhbHVlKGNvbnRyb2xzQ29uZmlnKTtcblx0XHRcdFx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZVxuXHRcdFx0Lm9uU2VhcmNoRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNlYXJjaGluZ0VuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5zZWFyY2hpbmdFbmFibGVkID0gc2VhcmNoaW5nRW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRm9ybS5yZXNldCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlQ2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaElucHV0U3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuc2VhcmNoRm9ybVxuXHRcdFx0XHQuY29udHJvbHNbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMCksXG5cdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kRGlzcGF0Y2hlci5zZWFyY2gocGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHN0b3BPYnNlcnZlQ2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaElucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc2VhcmNoLWJhcic7XG5cdH1cbn1cbiJdfQ==