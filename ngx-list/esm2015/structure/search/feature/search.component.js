/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { StructureWarehouse } from '../../grid/core/api/structure.warehouse';
import { StructureId } from '../../core/api/structure.id';
import { SearchCommandInvoker } from '../core/api/search.command-invoker';
import { SearchWarehouse } from '../core/api/search.warehouse';
import { fromRxJsObservable } from '@generic-ui/hermes';
export class SearchComponent extends SmartComponent {
    /**
     * @param {?} formBuilder
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureId
     * @param {?} searchCommandDispatcher
     * @param {?} structureWarehouse
     * @param {?} searchWarehouse
     */
    constructor(formBuilder, changeDetectorRef, elementRef, structureId, searchCommandDispatcher, structureWarehouse, searchWarehouse) {
        super(changeDetectorRef, elementRef);
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.structureWarehouse = structureWarehouse;
        this.searchWarehouse = searchWarehouse;
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
        this.hermesSubscribe(this.searchWarehouse.onPlaceholder(this.structureId), (/**
         * @param {?} placeholder
         * @return {?}
         */
        (placeholder) => {
            this.placeholder = placeholder;
        }));
        this.hermesSubscribe(this.searchWarehouse.onSearchEnabled(this.structureId), (/**
         * @param {?} searchingEnabled
         * @return {?}
         */
        (searchingEnabled) => {
            this.searchingEnabled = searchingEnabled;
        }));
        this.hermesSubscribeWithoutRender(this.searchWarehouse.onPhrase(this.structureId), (/**
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
    }
    /**
     * @return {?}
     */
    clear() {
        this.searchForm.reset();
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-search-bar';
    }
    /**
     * @private
     * @return {?}
     */
    observeChanges() {
        this.searchInputSubscription =
            fromRxJsObservable(this.searchForm
                .controls[SearchComponent.FORM_SEARCH_NAME]
                .valueChanges
                .pipe(debounceTime(200)))
                .pipe(this.hermesTakeUntil())
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
}
SearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-search-bar]',
                template: "<ng-container *ngIf=\"searchingEnabled\">\n\t<form #formRef\n\t\t  [formGroup]=\"searchForm\"\n\t\t  class=\"gui-flex gui-relative gui-w-full\">\n\n\t\t<div gui-search-icon></div>\n\n\t\t<input [placeholder]=\"placeholder\"\n\t\t\t   class=\"gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21\"\n\t\t\t   formControlName=\"searchPhrase\">\n\n\t\t<span (click)=\"clear()\"\n\t\t\t  *ngIf=\"searchForm.controls['searchPhrase'].value\"\n\t\t\t  class=\"gui-clear-search-icon\">\n\t\t\t\t</span>\n\t</form>\n</ng-container>\n",
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
    { type: SearchWarehouse }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQztBQVk1RSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjOzs7Ozs7Ozs7O0lBZWxELFlBQTZCLFdBQXdCLEVBQ2pDLGlCQUFvQyxFQUNyRCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLHVCQUE2QyxFQUM3QyxrQkFBc0MsRUFDdEMsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBUFQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUVwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw0QkFBdUIsR0FBdkIsdUJB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bkJRLFdBQVc7WUFEYyxpQkFBaUI7WUFBYSxVQUFVO1lBTWpFLFdBQVc7WUFDWCxvQkFBb0I7WUFGcEIsa0JBQWtCO1lBR2xCLGVBQWU7OztzQkFpQnRCLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7Ozs7O0lBRnZDLGlDQUEwRDs7SUFFMUQsa0NBQ29COztJQUVwQixxQ0FBc0I7O0lBRXRCLHNDQUFvQjs7SUFFcEIsMkNBQTBCOztJQUUxQixrREFBNEM7Ozs7O0lBRWhDLHNDQUF5Qzs7Ozs7SUFDbEQsNENBQXFEOzs7OztJQUVyRCxzQ0FBeUM7Ozs7O0lBQ3pDLGtEQUE4RDs7Ozs7SUFDOUQsNkNBQXVEOzs7OztJQUN2RCwwQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9ncmlkL2NvcmUvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uL2NvcmUvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc2VhcmNoLWJhcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvc2VhcmNoaW5nLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9TRUFSQ0hfTkFNRSA9ICdzZWFyY2hQaHJhc2UnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Zm9ybVJlZjogRWxlbWVudFJlZjtcblxuXHRzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblxuXHRzZWFyY2hpbmdFbmFibGVkOiBib29sZWFuO1xuXG5cdHNlYXJjaElucHV0U3Vic2NyaXB0aW9uOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHRjb25zdCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdGNvbnRyb2xzQ29uZmlnW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSA9ICcnO1xuXG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChjb250cm9sc0NvbmZpZyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uUGxhY2Vob2xkZXIodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocGxhY2Vob2xkZXI6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zZWFyY2hXYXJlaG91c2Uub25TZWFyY2hFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHNlYXJjaGluZ0VuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5zZWFyY2hpbmdFbmFibGVkID0gc2VhcmNoaW5nRW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5zZWFyY2hXYXJlaG91c2Uub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocGhyYXNlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRpZiAocGhyYXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRwaHJhc2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRcdFx0Y29udHJvbHNDb25maWdbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gcGhyYXNlO1xuXG5cdFx0XHRcdGlmIChwaHJhc2UgIT09IHRoaXMuc2VhcmNoRm9ybS5nZXQoW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSkudmFsdWUpIHtcblxuXHRcdFx0XHRcdHRoaXMuc3RvcE9ic2VydmVDaGFuZ2VzKCk7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hGb3JtLnNldFZhbHVlKGNvbnRyb2xzQ29uZmlnKTtcblx0XHRcdFx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGb3JtLnJlc2V0KCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc2VhcmNoLWJhcic7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoSW5wdXRTdWJzY3JpcHRpb24gPVxuXHRcdFx0ZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0XHR0aGlzLnNlYXJjaEZvcm1cblx0XHRcdFx0XHQuY29udHJvbHNbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdXG5cdFx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMClcblx0XHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZERpc3BhdGNoZXIuc2VhcmNoKHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzdG9wT2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hJbnB1dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG59XG4iXX0=