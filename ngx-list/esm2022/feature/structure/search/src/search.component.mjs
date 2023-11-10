import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../common/component/src/smart-component';
import { fromRxJsObservable } from '@generic-ui/hermes';
import { GuiEffects } from '../../../gui-angular/effect/gui.effects';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../gui-angular/effect/gui.effects";
import * as i3 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i4 from "../../../../core/structure/search/src/api/search.publisher";
import * as i5 from "../../../../core/structure/search/src/api/search.warehouse";
import * as i6 from "@angular/common";
import * as i7 from "../../../gui-angular/template/if/gui.if.directive";
import * as i8 from "./icon/search-icon.component";
import * as i9 from "../../../gui-angular/template/push/gui.push.pipe";
export class SearchComponent extends SmartComponent {
    formBuilder;
    changeDetectorRef;
    effects;
    structureId;
    searchCommandDispatcher;
    searchWarehouse;
    static FORM_SEARCH_NAME = 'searchPhrase';
    formRef;
    searchForm;
    // @ts-ignore
    placeholder$ = this.searchWarehouse.onPlaceholder(this.structureId);
    // @ts-ignore
    searchingEnabled$ = this.searchWarehouse.onSearchEnabled(this.structureId);
    searchInputSubscription;
    constructor(formBuilder, changeDetectorRef, elementRef, effects, structureId, searchCommandDispatcher, searchWarehouse) {
        super(changeDetectorRef, elementRef);
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.effects = effects;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.searchWarehouse = searchWarehouse;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SearchComponent, deps: [{ token: i1.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i2.GuiEffects }, { token: i3.StructureId }, { token: i4.SearchPublisher }, { token: i5.SearchWarehouse }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SearchComponent, selector: "div[gui-search-bar]", providers: [
            GuiEffects
        ], viewQueries: [{ propertyName: "formRef", first: true, predicate: ["formRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<ng-container *guiIf=\"searchingEnabled$\">\n\n\t<form #formRef\n\t\t  [formGroup]=\"searchForm\"\n\t\t  class=\"gui-flex gui-relative gui-w-full\">\n\n\t\t<div gui-search-icon></div>\n\n\t\t<input [placeholder]=\"placeholder$ | guiPush\"\n\t\t\t   class=\"gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21\"\n\t\t\t   formControlName=\"searchPhrase\">\n\n\t\t<span (click)=\"clear()\"\n\t\t\t  *ngIf=\"searchForm.controls['searchPhrase'].value\"\n\t\t\t  class=\"gui-clear-search-icon\">\n\t\t\t\t</span>\n\t</form>\n</ng-container>\n", styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg line,.gui-search-bar form:hover .gui-search-icon-svg circle{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg line,.gui-search-bar .gui-search-icon-svg circle{stroke:#ccc;transition:stroke .3s ease-in-out}\n"], dependencies: [{ kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i7.GuiIfDirective, selector: "[guiIf]", inputs: ["guiIf"] }, { kind: "component", type: i8.SearchIconComponent, selector: "div[gui-search-icon]" }, { kind: "pipe", type: i9.GuiPushPipe, name: "guiPush" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-search-bar]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiEffects
                    ], template: "<ng-container *guiIf=\"searchingEnabled$\">\n\n\t<form #formRef\n\t\t  [formGroup]=\"searchForm\"\n\t\t  class=\"gui-flex gui-relative gui-w-full\">\n\n\t\t<div gui-search-icon></div>\n\n\t\t<input [placeholder]=\"placeholder$ | guiPush\"\n\t\t\t   class=\"gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21\"\n\t\t\t   formControlName=\"searchPhrase\">\n\n\t\t<span (click)=\"clear()\"\n\t\t\t  *ngIf=\"searchForm.controls['searchPhrase'].value\"\n\t\t\t  class=\"gui-clear-search-icon\">\n\t\t\t\t</span>\n\t</form>\n</ng-container>\n", styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg line,.gui-search-bar form:hover .gui-search-icon-svg circle{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg line,.gui-search-bar .gui-search-icon-svg circle{stroke:#ccc;transition:stroke .3s ease-in-out}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i2.GuiEffects }, { type: i3.StructureId }, { type: i4.SearchPublisher }, { type: i5.SearchWarehouse }]; }, propDecorators: { formRef: [{
                type: ViewChild,
                args: ['formRef', { read: ElementRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL3NlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFJL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixNQUFNLG9CQUFvQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7QUFlckUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsY0FBYztJQWlCckI7SUFDVDtJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBckJaLE1BQU0sQ0FBVSxnQkFBZ0IsR0FBRyxjQUFjLENBQUM7SUFHakQsT0FBTyxDQUFjO0lBRTlCLFVBQVUsQ0FBWTtJQUV0QixhQUFhO0lBQ2IsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVwRSxhQUFhO0lBQ2IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTNFLHVCQUF1QixDQUFxQjtJQUU1QyxZQUE2QixXQUF3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LGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1YsVUFBVTtxQkFDVjswUUFPUSxPQUFPO3NCQURmLFNBQVM7dUJBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9hcGkvc2VhcmNoLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTZWFyY2hXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IGZyb21SeEpzT2JzZXJ2YWJsZSwgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aUVmZmVjdHMgfSBmcm9tICcuLi8uLi8uLi9ndWktYW5ndWxhci9lZmZlY3QvZ3VpLmVmZmVjdHMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc2VhcmNoLWJhcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvc2VhcmNoaW5nLmNvbXBvbmVudC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpRWZmZWN0c1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT1JNX1NFQVJDSF9OQU1FID0gJ3NlYXJjaFBocmFzZSc7XG5cblx0QFZpZXdDaGlsZCgnZm9ybVJlZicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRyZWFkb25seSBmb3JtUmVmPzogRWxlbWVudFJlZjtcblxuXHRzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRwbGFjZWhvbGRlciQgPSB0aGlzLnNlYXJjaFdhcmVob3VzZS5vblBsYWNlaG9sZGVyKHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0c2VhcmNoaW5nRW5hYmxlZCQgPSB0aGlzLnNlYXJjaFdhcmVob3VzZS5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0c2VhcmNoSW5wdXRTdWJzY3JpcHRpb246IEhlcm1lc1N1YnNjcmlwdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWZmZWN0czogR3VpRWZmZWN0cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hXYXJlaG91c2U6IFNlYXJjaFdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdGNvbnN0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gJyc7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblxuXHRcdHRoaXMucmVnaXN0ZXJPblBocmFzZUVmZmVjdCgpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5yZWdpc3Rlck9uQ2hhbmdlc0VmZmVjdCgpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGb3JtLnJlc2V0KCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc2VhcmNoLWJhcic7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdFBocmFzZSgpIHtcblxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRjb25zdCBzZWFyY2hQaHJhc2UkID0gdGhpcy5zZWFyY2hGb3JtXG5cdFx0XHQuY29udHJvbHNbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdXG5cdFx0XHQudmFsdWVDaGFuZ2VzIGFzIE9ic2VydmFibGU8c3RyaW5nPjtcblxuXHRcdHJldHVybiBmcm9tUnhKc09ic2VydmFibGUoXG5cdFx0XHRzZWFyY2hQaHJhc2UkXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGRlYm91bmNlVGltZSgyMDApXG5cdFx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3Rlck9uQ2hhbmdlc0VmZmVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaElucHV0U3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuZWZmZWN0cy5yZWdpc3Rlcihcblx0XHRcdFx0dGhpcy5zZWxlY3RQaHJhc2UoKSxcblx0XHRcdFx0KHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kRGlzcGF0Y2hlci5zZWFyY2gocGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJPblBocmFzZUVmZmVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVmZmVjdHMucmVnaXN0ZXIoXG5cdFx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZS5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwaHJhc2U6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdGlmIChwaHJhc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHBocmFzZSA9IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdFx0XHRjb250cm9sc0NvbmZpZ1tTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0gPSBwaHJhc2U7XG5cblx0XHRcdFx0aWYgKHBocmFzZSAhPT0gdGhpcy5zZWFyY2hGb3JtLmdldChbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdKS52YWx1ZSkge1xuXG5cdFx0XHRcdFx0dGhpcy51bnJlZ2lzdGVyT2JzZXJ2ZUNoYW5nZXNFZmZlY3QoKTtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaEZvcm0uc2V0VmFsdWUoY29udHJvbHNDb25maWcpO1xuXHRcdFx0XHRcdHRoaXMucmVnaXN0ZXJPbkNoYW5nZXNFZmZlY3QoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHVucmVnaXN0ZXJPYnNlcnZlQ2hhbmdlc0VmZmVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaElucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cbn1cbiIsIjxuZy1jb250YWluZXIgKmd1aUlmPVwic2VhcmNoaW5nRW5hYmxlZCRcIj5cblxuXHQ8Zm9ybSAjZm9ybVJlZlxuXHRcdCAgW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCJcblx0XHQgIGNsYXNzPVwiZ3VpLWZsZXggZ3VpLXJlbGF0aXZlIGd1aS13LWZ1bGxcIj5cblxuXHRcdDxkaXYgZ3VpLXNlYXJjaC1pY29uPjwvZGl2PlxuXG5cdFx0PGlucHV0IFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciQgfCBndWlQdXNoXCJcblx0XHRcdCAgIGNsYXNzPVwiZ3VpLWJvcmRlci0wIGd1aS13LWZ1bGwgZ3VpLWgtZnVsbCBndWktcHktNSBndWktcHItNSBndWktcGwtMjFcIlxuXHRcdFx0ICAgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoUGhyYXNlXCI+XG5cblx0XHQ8c3BhbiAoY2xpY2spPVwiY2xlYXIoKVwiXG5cdFx0XHQgICpuZ0lmPVwic2VhcmNoRm9ybS5jb250cm9sc1snc2VhcmNoUGhyYXNlJ10udmFsdWVcIlxuXHRcdFx0ICBjbGFzcz1cImd1aS1jbGVhci1zZWFyY2gtaWNvblwiPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdDwvZm9ybT5cbjwvbmctY29udGFpbmVyPlxuIl19