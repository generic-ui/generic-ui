import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { fromRxJsObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../core/api/structure.id";
import * as i3 from "../core/api/search.command-invoker";
import * as i4 from "../../grid/core/api/structure.warehouse";
import * as i5 from "../core/api/search.warehouse";
import * as i6 from "@angular/common";
import * as i7 from "./icon/search-icon.component";
const _c0 = ["formRef"];
const _c1 = ["gui-search-bar", ""];
function SearchComponent_ng_container_0_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵlistener("click", function SearchComponent_ng_container_0_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.clear(); });
    i0.ɵɵelementEnd();
} }
function SearchComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 1, 2);
    i0.ɵɵelement(3, "div", 3);
    i0.ɵɵelement(4, "input", 4);
    i0.ɵɵtemplate(5, SearchComponent_ng_container_0_span_5_Template, 1, 0, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.searchForm);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", ctx_r0.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.searchForm.controls["searchPhrase"].value);
} }
export class SearchComponent extends SmartComponent {
    constructor(formBuilder, changeDetectorRef, elementRef, structureId, searchCommandDispatcher, structureWarehouse, searchWarehouse) {
        super(changeDetectorRef, elementRef);
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.structureWarehouse = structureWarehouse;
        this.searchWarehouse = searchWarehouse;
        const controlsConfig = {};
        controlsConfig[SearchComponent.FORM_SEARCH_NAME] = '';
        this.searchForm = this.formBuilder.group(controlsConfig);
    }
    ngOnInit() {
        this.observeChanges();
        this.hermesSubscribe(this.searchWarehouse.onPlaceholder(this.structureId), (placeholder) => {
            this.placeholder = placeholder;
        });
        this.hermesSubscribe(this.searchWarehouse.onSearchEnabled(this.structureId), (searchingEnabled) => {
            this.searchingEnabled = searchingEnabled;
        });
        this.hermesSubscribeWithoutRender(this.searchWarehouse.onPhrase(this.structureId), (phrase) => {
            if (phrase === undefined) {
                phrase = null;
            }
            const controlsConfig = {};
            controlsConfig[SearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== this.searchForm.get([SearchComponent.FORM_SEARCH_NAME]).value) {
                this.stopObserveChanges();
                this.searchForm.setValue(controlsConfig);
                this.observeChanges();
            }
        });
    }
    clear() {
        this.searchForm.reset();
    }
    getSelectorName() {
        return 'gui-search-bar';
    }
    observeChanges() {
        this.searchInputSubscription =
            fromRxJsObservable(this.searchForm
                .controls[SearchComponent.FORM_SEARCH_NAME]
                .valueChanges
                .pipe(debounceTime(200)))
                .pipe(this.hermesTakeUntil())
                .subscribe((phrase) => {
                this.searchCommandDispatcher.search(phrase, this.structureId);
            });
    }
    stopObserveChanges() {
        this.searchInputSubscription.unsubscribe();
    }
}
SearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.StructureId), i0.ɵɵdirectiveInject(i3.SearchCommandInvoker), i0.ɵɵdirectiveInject(i4.StructureWarehouse), i0.ɵɵdirectiveInject(i5.SearchWarehouse)); };
SearchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchComponent, selectors: [["div", "gui-search-bar", ""]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formRef = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c1, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "gui-flex", "gui-relative", "gui-w-full", 3, "formGroup"], ["formRef", ""], ["gui-search-icon", ""], ["formControlName", "searchPhrase", 1, "gui-border-0", "gui-w-full", "gui-h-full", "gui-py-5", "gui-pr-5", "gui-pl-21", 3, "placeholder"], ["class", "gui-clear-search-icon", 3, "click", 4, "ngIf"], [1, "gui-clear-search-icon", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SearchComponent_ng_container_0_Template, 6, 3, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.searchingEnabled);
    } }, directives: [i6.NgIf, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i7.SearchIconComponent, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg line,.gui-search-bar form:hover .gui-search-icon-svg circle{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg line,.gui-search-bar .gui-search-icon-svg circle{stroke:#ccc;transition:stroke .3s ease-in-out}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-search-bar]',
                templateUrl: './search.component.html',
                styleUrls: [
                    './style/searching.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i2.StructureId }, { type: i3.SearchCommandInvoker }, { type: i4.StructureWarehouse }, { type: i5.SearchWarehouse }]; }, { formRef: [{
            type: ViewChild,
            args: ['formRef', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zZWFyY2gvZmVhdHVyZS9zZWFyY2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXNCLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4SSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0UxRSwrQkFFaUM7SUFGM0IsNkxBQWlCO0lBR3JCLGlCQUFPOzs7SUFkWCw2QkFBdUM7SUFDdEMsa0NBRTRDO0lBRTNDLHlCQUEyQjtJQUUzQiwyQkFFbUM7SUFFbkMsaUZBR1M7SUFDVixpQkFBTztJQUNSLDBCQUFlOzs7SUFkWCxlQUF3QjtJQUF4Qiw2Q0FBd0I7SUFLbkIsZUFBMkI7SUFBM0IsZ0RBQTJCO0lBSzlCLGVBQStDO0lBQS9DLHVFQUErQzs7QURTckQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsY0FBYztJQWVsRCxZQUE2QixXQUF3QixFQUNqQyxpQkFBb0MsRUFDckQsVUFBc0IsRUFDTCxXQUF3QixFQUN4Qix1QkFBNkMsRUFDN0Msa0JBQXNDLEVBQ3RDLGVBQWdDO1FBQ25ELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQVBULGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FB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O2NBVDNCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUU7b0JBQ1YsNEJBQTRCO2lCQUM1QjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7bVBBTUEsT0FBTztrQkFETixTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9ncmlkL2NvcmUvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uL2NvcmUvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc2VhcmNoLWJhcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvc2VhcmNoaW5nLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9TRUFSQ0hfTkFNRSA9ICdzZWFyY2hQaHJhc2UnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Zm9ybVJlZjogRWxlbWVudFJlZjtcblxuXHRzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblxuXHRzZWFyY2hpbmdFbmFibGVkOiBib29sZWFuO1xuXG5cdHNlYXJjaElucHV0U3Vic2NyaXB0aW9uOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHRjb25zdCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdGNvbnRyb2xzQ29uZmlnW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSA9ICcnO1xuXG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChjb250cm9sc0NvbmZpZyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uUGxhY2Vob2xkZXIodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocGxhY2Vob2xkZXI6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zZWFyY2hXYXJlaG91c2Uub25TZWFyY2hFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHNlYXJjaGluZ0VuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5zZWFyY2hpbmdFbmFibGVkID0gc2VhcmNoaW5nRW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5zZWFyY2hXYXJlaG91c2Uub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocGhyYXNlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRpZiAocGhyYXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRwaHJhc2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRcdFx0Y29udHJvbHNDb25maWdbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gcGhyYXNlO1xuXG5cdFx0XHRcdGlmIChwaHJhc2UgIT09IHRoaXMuc2VhcmNoRm9ybS5nZXQoW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSkudmFsdWUpIHtcblxuXHRcdFx0XHRcdHRoaXMuc3RvcE9ic2VydmVDaGFuZ2VzKCk7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hGb3JtLnNldFZhbHVlKGNvbnRyb2xzQ29uZmlnKTtcblx0XHRcdFx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGb3JtLnJlc2V0KCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc2VhcmNoLWJhcic7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoSW5wdXRTdWJzY3JpcHRpb24gPVxuXHRcdFx0ZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0XHR0aGlzLnNlYXJjaEZvcm1cblx0XHRcdFx0XHQuY29udHJvbHNbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdXG5cdFx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMClcblx0XHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZERpc3BhdGNoZXIuc2VhcmNoKHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzdG9wT2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hJbnB1dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwic2VhcmNoaW5nRW5hYmxlZFwiPlxuXHQ8Zm9ybSAjZm9ybVJlZlxuXHRcdCAgW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCJcblx0XHQgIGNsYXNzPVwiZ3VpLWZsZXggZ3VpLXJlbGF0aXZlIGd1aS13LWZ1bGxcIj5cblxuXHRcdDxkaXYgZ3VpLXNlYXJjaC1pY29uPjwvZGl2PlxuXG5cdFx0PGlucHV0IFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG5cdFx0XHQgICBjbGFzcz1cImd1aS1ib3JkZXItMCBndWktdy1mdWxsIGd1aS1oLWZ1bGwgZ3VpLXB5LTUgZ3VpLXByLTUgZ3VpLXBsLTIxXCJcblx0XHRcdCAgIGZvcm1Db250cm9sTmFtZT1cInNlYXJjaFBocmFzZVwiPlxuXG5cdFx0PHNwYW4gKGNsaWNrKT1cImNsZWFyKClcIlxuXHRcdFx0ICAqbmdJZj1cInNlYXJjaEZvcm0uY29udHJvbHNbJ3NlYXJjaFBocmFzZSddLnZhbHVlXCJcblx0XHRcdCAgY2xhc3M9XCJndWktY2xlYXItc2VhcmNoLWljb25cIj5cblx0XHRcdFx0PC9zcGFuPlxuXHQ8L2Zvcm0+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==