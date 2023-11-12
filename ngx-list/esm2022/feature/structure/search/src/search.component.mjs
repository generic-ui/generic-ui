import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../common/component/src/smart-component';
import { StructureId } from '../../../../core/structure/structure-core/src/api/global/structure.id';
import { SearchWarehouse } from '../../../../core/structure/search/src/api/search.warehouse';
import { fromRxJsObservable } from '@generic-ui/hermes';
import { GuiEffects } from '../../../gui-angular/effect/gui.effects';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../gui-angular/effect/gui.effects";
import * as i3 from "../../../../core/structure/search/src/api/search.publisher";
import * as i4 from "@angular/common";
import * as i5 from "../../../gui-angular/template/if/gui.if.directive";
import * as i6 from "./icon/search-icon.component";
import * as i7 from "../../../gui-angular/template/push/gui.push.pipe";
export class SearchComponent extends SmartComponent {
    formBuilder;
    effects;
    searchCommandDispatcher;
    static FORM_SEARCH_NAME = 'searchPhrase';
    formRef;
    structureId = inject(StructureId);
    searchWarehouse = inject(SearchWarehouse);
    searchForm;
    placeholder$ = this.searchWarehouse.onPlaceholder(this.structureId);
    searchingEnabled$ = this.searchWarehouse.onSearchEnabled(this.structureId);
    searchInputSubscription;
    constructor(formBuilder, changeDetectorRef, elementRef, effects, searchCommandDispatcher) {
        super(changeDetectorRef, elementRef);
        this.formBuilder = formBuilder;
        this.effects = effects;
        this.searchCommandDispatcher = searchCommandDispatcher;
        const controlsConfig = {};
        controlsConfig[SearchComponent.FORM_SEARCH_NAME] = '';
        this.searchForm = this.formBuilder.group(controlsConfig);
        this.registerOnPhraseEffect();
    }
    ngOnInit() {
        this.registerOnChangesEffect();
    }
    clear() {
        this.searchForm.reset();
    }
    getSelectorName() {
        return 'gui-search-bar';
    }
    selectPhrase() {
        // @ts-ignore
        const searchPhrase$ = this.searchForm
            .controls[SearchComponent.FORM_SEARCH_NAME]
            .valueChanges;
        return fromRxJsObservable(searchPhrase$
            .pipe(debounceTime(200)));
    }
    registerOnChangesEffect() {
        this.searchInputSubscription =
            this.effects.register(this.selectPhrase(), (phrase) => {
                this.searchCommandDispatcher.search(phrase, this.structureId);
            });
    }
    registerOnPhraseEffect() {
        this.effects.register(this.searchWarehouse.onPhrase(this.structureId), (phrase) => {
            if (phrase === undefined) {
                phrase = null;
            }
            const controlsConfig = {};
            controlsConfig[SearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== this.searchForm.get([SearchComponent.FORM_SEARCH_NAME]).value) {
                this.unregisterObserveChangesEffect();
                this.searchForm.setValue(controlsConfig);
                this.registerOnChangesEffect();
            }
        });
    }
    unregisterObserveChangesEffect() {
        this.searchInputSubscription.unsubscribe();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SearchComponent, deps: [{ token: i1.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i2.GuiEffects }, { token: i3.SearchPublisher }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: SearchComponent, selector: "div[gui-search-bar]", providers: [
            GuiEffects
        ], viewQueries: [{ propertyName: "formRef", first: true, predicate: ["formRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<ng-container *guiIf=\"searchingEnabled$\">\n\n\t<form #formRef\n\t\t  [formGroup]=\"searchForm\"\n\t\t  class=\"gui-flex gui-relative gui-w-full\">\n\n\t\t<div gui-search-icon></div>\n\n\t\t<input [placeholder]=\"placeholder$ | guiPush\"\n\t\t\t   class=\"gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21\"\n\t\t\t   formControlName=\"searchPhrase\">\n\n\t\t<span (click)=\"clear()\"\n\t\t\t  *ngIf=\"searchForm.controls['searchPhrase'].value\"\n\t\t\t  class=\"gui-clear-search-icon\">\n\t\t\t\t</span>\n\t</form>\n</ng-container>\n", styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg line,.gui-search-bar form:hover .gui-search-icon-svg circle{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg line,.gui-search-bar .gui-search-icon-svg circle{stroke:#ccc;transition:stroke .3s ease-in-out}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i5.GuiIfDirective, selector: "[guiIf]", inputs: ["guiIf"] }, { kind: "component", type: i6.SearchIconComponent, selector: "div[gui-search-icon]" }, { kind: "pipe", type: i7.GuiPushPipe, name: "guiPush" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-search-bar]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiEffects
                    ], template: "<ng-container *guiIf=\"searchingEnabled$\">\n\n\t<form #formRef\n\t\t  [formGroup]=\"searchForm\"\n\t\t  class=\"gui-flex gui-relative gui-w-full\">\n\n\t\t<div gui-search-icon></div>\n\n\t\t<input [placeholder]=\"placeholder$ | guiPush\"\n\t\t\t   class=\"gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21\"\n\t\t\t   formControlName=\"searchPhrase\">\n\n\t\t<span (click)=\"clear()\"\n\t\t\t  *ngIf=\"searchForm.controls['searchPhrase'].value\"\n\t\t\t  class=\"gui-clear-search-icon\">\n\t\t\t\t</span>\n\t</form>\n</ng-container>\n", styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg line,.gui-search-bar form:hover .gui-search-icon-svg circle{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg line,.gui-search-bar .gui-search-icon-svg circle{stroke:#ccc;transition:stroke .3s ease-in-out}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i2.GuiEffects }, { type: i3.SearchPublisher }], propDecorators: { formRef: [{
                type: ViewChild,
                args: ['formRef', { read: ElementRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL3NlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoSixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixNQUFNLG9CQUFvQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7O0FBZXJFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGNBQWM7SUFvQmhDO0lBR0E7SUFDQTtJQXRCVixNQUFNLENBQVUsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDO0lBR2pELE9BQU8sQ0FBYztJQUViLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFbEMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUUzRCxVQUFVLENBQVk7SUFFdEIsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFB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LG1CQUtkLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1YsVUFBVTtxQkFDVjtnTUFPUSxPQUFPO3NCQURmLFNBQVM7dUJBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2FwaS9zZWFyY2gucHVibGlzaGVyJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgR3VpRWZmZWN0cyB9IGZyb20gJy4uLy4uLy4uL2d1aS1hbmd1bGFyL2VmZmVjdC9ndWkuZWZmZWN0cyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zZWFyY2gtYmFyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9zZWFyY2hpbmcuY29tcG9uZW50LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFtcblx0XHRHdWlFZmZlY3RzXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPUk1fU0VBUkNIX05BTUUgPSAnc2VhcmNoUGhyYXNlJztcblxuXHRAVmlld0NoaWxkKCdmb3JtUmVmJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdHJlYWRvbmx5IGZvcm1SZWY/OiBFbGVtZW50UmVmO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQgPSBpbmplY3QoU3RydWN0dXJlSWQpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlID0gaW5qZWN0KFNlYXJjaFdhcmVob3VzZSk7XG5cblx0c2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBsYWNlaG9sZGVyJCA9IHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uUGxhY2Vob2xkZXIodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0c2VhcmNoaW5nRW5hYmxlZCQgPSB0aGlzLnNlYXJjaFdhcmVob3VzZS5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0c2VhcmNoSW5wdXRTdWJzY3JpcHRpb246IEhlcm1lc1N1YnNjcmlwdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IGVmZmVjdHM6IEd1aUVmZmVjdHMsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoUHVibGlzaGVyXG5cdCkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdGNvbnN0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gJyc7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblxuXHRcdHRoaXMucmVnaXN0ZXJPblBocmFzZUVmZmVjdCgpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5yZWdpc3Rlck9uQ2hhbmdlc0VmZmVjdCgpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGb3JtLnJlc2V0KCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc2VhcmNoLWJhcic7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdFBocmFzZSgpIHtcblxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRjb25zdCBzZWFyY2hQaHJhc2UkID0gdGhpcy5zZWFyY2hGb3JtXG5cdFx0XHQuY29udHJvbHNbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdXG5cdFx0XHQudmFsdWVDaGFuZ2VzIGFzIE9ic2VydmFibGU8c3RyaW5nPjtcblxuXHRcdHJldHVybiBmcm9tUnhKc09ic2VydmFibGUoXG5cdFx0XHRzZWFyY2hQaHJhc2UkXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGRlYm91bmNlVGltZSgyMDApXG5cdFx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3Rlck9uQ2hhbmdlc0VmZmVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaElucHV0U3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuZWZmZWN0cy5yZWdpc3Rlcihcblx0XHRcdFx0dGhpcy5zZWxlY3RQaHJhc2UoKSxcblx0XHRcdFx0KHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kRGlzcGF0Y2hlci5zZWFyY2gocGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJPblBocmFzZUVmZmVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVmZmVjdHMucmVnaXN0ZXIoXG5cdFx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZS5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwaHJhc2U6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdGlmIChwaHJhc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHBocmFzZSA9IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdFx0XHRjb250cm9sc0NvbmZpZ1tTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0gPSBwaHJhc2U7XG5cblx0XHRcdFx0aWYgKHBocmFzZSAhPT0gdGhpcy5zZWFyY2hGb3JtLmdldChbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdKS52YWx1ZSkge1xuXG5cdFx0XHRcdFx0dGhpcy51bnJlZ2lzdGVyT2JzZXJ2ZUNoYW5nZXNFZmZlY3QoKTtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaEZvcm0uc2V0VmFsdWUoY29udHJvbHNDb25maWcpO1xuXHRcdFx0XHRcdHRoaXMucmVnaXN0ZXJPbkNoYW5nZXNFZmZlY3QoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHVucmVnaXN0ZXJPYnNlcnZlQ2hhbmdlc0VmZmVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaElucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cbn1cbiIsIjxuZy1jb250YWluZXIgKmd1aUlmPVwic2VhcmNoaW5nRW5hYmxlZCRcIj5cblxuXHQ8Zm9ybSAjZm9ybVJlZlxuXHRcdCAgW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCJcblx0XHQgIGNsYXNzPVwiZ3VpLWZsZXggZ3VpLXJlbGF0aXZlIGd1aS13LWZ1bGxcIj5cblxuXHRcdDxkaXYgZ3VpLXNlYXJjaC1pY29uPjwvZGl2PlxuXG5cdFx0PGlucHV0IFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciQgfCBndWlQdXNoXCJcblx0XHRcdCAgIGNsYXNzPVwiZ3VpLWJvcmRlci0wIGd1aS13LWZ1bGwgZ3VpLWgtZnVsbCBndWktcHktNSBndWktcHItNSBndWktcGwtMjFcIlxuXHRcdFx0ICAgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoUGhyYXNlXCI+XG5cblx0XHQ8c3BhbiAoY2xpY2spPVwiY2xlYXIoKVwiXG5cdFx0XHQgICpuZ0lmPVwic2VhcmNoRm9ybS5jb250cm9sc1snc2VhcmNoUGhyYXNlJ10udmFsdWVcIlxuXHRcdFx0ICBjbGFzcz1cImd1aS1jbGVhci1zZWFyY2gtaWNvblwiPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdDwvZm9ybT5cbjwvbmctY29udGFpbmVyPlxuIl19