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
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-search-bar]',
                template: "<ng-container *ngIf=\"searchingEnabled\">\n\t<form #formRef\n\t\t  [formGroup]=\"searchForm\"\n\t\t  class=\"gui-flex gui-relative gui-w-full\">\n\n\t\t<div gui-search-icon></div>\n\n\t\t<input [placeholder]=\"placeholder\"\n\t\t\t   class=\"gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21\"\n\t\t\t   formControlName=\"searchPhrase\">\n\n\t\t<span (click)=\"clear()\"\n\t\t\t  *ngIf=\"searchForm.controls['searchPhrase'].value\"\n\t\t\t  class=\"gui-clear-search-icon\">\n\t\t\t\t</span>\n\t</form>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg line,.gui-search-bar form:hover .gui-search-icon-svg circle{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg line,.gui-search-bar .gui-search-icon-svg circle{stroke:#ccc;transition:stroke .3s ease-in-out}\n"]
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixNQUFNLG9CQUFvQixDQUFDO0FBWTVFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGNBQWM7SUFlbEQsWUFBNkIsV0FBd0IsRUFDakMsaUJBQW9DLEVBQ3JELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsdUJBQTZDLEVBQzdDLGtCQUFzQyxFQUN0QyxlQUFnQztRQUNuRCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFQVCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRXBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDRCQUF1QixH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QVc7WUFEYyxpQkFBaUI7WUFBYSxVQUFVO1lBTWpFLFdBQVc7WUFDWCxvQkFBb0I7WUFGcEIsa0JBQWtCO1lBR2xCLGVBQWU7OztzQkFpQnRCLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZ3JpZC9jb3JlL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWFyY2hXYXJlaG91c2UgfSBmcm9tICcuLi9jb3JlL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IGZyb21SeEpzT2JzZXJ2YWJsZSwgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNlYXJjaC1iYXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3N0eWxlL3NlYXJjaGluZy5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPUk1fU0VBUkNIX05BTUUgPSAnc2VhcmNoUGhyYXNlJztcblxuXHRAVmlld0NoaWxkKCdmb3JtUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGZvcm1SZWY6IEVsZW1lbnRSZWY7XG5cblx0c2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cblx0c2VhcmNoaW5nRW5hYmxlZDogYm9vbGVhbjtcblxuXHRzZWFyY2hJbnB1dFN1YnNjcmlwdGlvbjogSGVybWVzU3Vic2NyaXB0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0Y29uc3QgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRjb250cm9sc0NvbmZpZ1tTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0gPSAnJztcblxuXHRcdHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoY29udHJvbHNDb25maWcpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlQ2hhbmdlcygpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZS5vblBsYWNlaG9sZGVyKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBsYWNlaG9sZGVyOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uU2VhcmNoRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChzZWFyY2hpbmdFbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoaW5nRW5hYmxlZCA9IHNlYXJjaGluZ0VuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBocmFzZTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0aWYgKHBocmFzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cGhyYXNlID0gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0XHRcdGNvbnRyb2xzQ29uZmlnW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSA9IHBocmFzZTtcblxuXHRcdFx0XHRpZiAocGhyYXNlICE9PSB0aGlzLnNlYXJjaEZvcm0uZ2V0KFtTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0pLnZhbHVlKSB7XG5cblx0XHRcdFx0XHR0aGlzLnN0b3BPYnNlcnZlQ2hhbmdlcygpO1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoRm9ybS5zZXRWYWx1ZShjb250cm9sc0NvbmZpZyk7XG5cdFx0XHRcdFx0dGhpcy5vYnNlcnZlQ2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRm9ybS5yZXNldCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNlYXJjaC1iYXInO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlQ2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaElucHV0U3Vic2NyaXB0aW9uID1cblx0XHRcdGZyb21SeEpzT2JzZXJ2YWJsZShcblx0XHRcdFx0dGhpcy5zZWFyY2hGb3JtXG5cdFx0XHRcdFx0LmNvbnRyb2xzW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXVxuXHRcdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdGRlYm91bmNlVGltZSgyMDApXG5cdFx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaENvbW1hbmREaXNwYXRjaGVyLnNlYXJjaChwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RvcE9ic2VydmVDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoSW5wdXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0fVxufVxuIl19