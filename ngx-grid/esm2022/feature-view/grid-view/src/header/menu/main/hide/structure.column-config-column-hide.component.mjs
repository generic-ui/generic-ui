import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../../feature/common/component/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../feature/l10n/src/translation.pipe";
export class StructureColumnConfigColumnHideComponent extends PureComponent {
    column;
    columnHidden = new EventEmitter();
    constructor(elRef) {
        super(elRef);
    }
    hideColumn() {
        this.columnHidden.emit();
    }
    getSelectorName() {
        return 'gui-structure-column-config-column-hide';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureColumnConfigColumnHideComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureColumnConfigColumnHideComponent, selector: "div[gui-structure-column-config-column-hide]", inputs: { column: "column" }, outputs: { columnHidden: "columnHidden" }, usesInheritance: true, ngImport: i0, template: "<div (click)=\"hideColumn()\"\n\t class=\"gui-header-menu-item\">\n\t{{'headerMenuMainTabHideColumn' | guiTranslate}}\n</div>\n", dependencies: [{ kind: "pipe", type: i1.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureColumnConfigColumnHideComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-column-hide]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div (click)=\"hideColumn()\"\n\t class=\"gui-header-menu-item\">\n\t{{'headerMenuMainTabHideColumn' | guiTranslate}}\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { column: [{
                type: Input
            }], columnHidden: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9oZWFkZXIvbWVudS9tYWluL2hpZGUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9oZWFkZXIvbWVudS9tYWluL2hpZGUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7OztBQVNqRyxNQUFNLE9BQU8sd0NBQXlDLFNBQVEsYUFBYTtJQUcxRSxNQUFNLENBQTBCO0lBR2hDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBRXhDLFlBQVksS0FBaUI7UUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELFVBQVU7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8seUNBQXlDLENBQUM7SUFDbEQsQ0FBQzt3R0FsQlcsd0NBQXdDOzRGQUF4Qyx3Q0FBd0Msb0xDWnJELGlJQUlBOzs0RkRRYSx3Q0FBd0M7a0JBTnBELFNBQVM7K0JBQ0MsOENBQThDLG1CQUV2Qyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJO2lHQUtyQyxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUtcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3B1cmUtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbkhpZGVDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdH1cblxuXHRoaWRlQ29sdW1uKCk6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uSGlkZGVuLmVtaXQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZSc7XG5cdH1cblxufVxuIiwiPGRpdiAoY2xpY2spPVwiaGlkZUNvbHVtbigpXCJcblx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj5cblx0e3snaGVhZGVyTWVudU1haW5UYWJIaWRlQ29sdW1uJyB8IGd1aVRyYW5zbGF0ZX19XG48L2Rpdj5cbiJdfQ==