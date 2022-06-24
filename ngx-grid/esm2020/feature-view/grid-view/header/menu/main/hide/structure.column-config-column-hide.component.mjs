import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../feature/common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../feature/l10n/translation.pipe";
export class StructureColumnConfigColumnHideComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.columnHidden = new EventEmitter();
    }
    hideColumn() {
        this.columnHidden.emit();
    }
    getSelectorName() {
        return 'gui-structure-column-config-column-hide';
    }
}
StructureColumnConfigColumnHideComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnConfigColumnHideComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnConfigColumnHideComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: StructureColumnConfigColumnHideComponent, selector: "div[gui-structure-column-config-column-hide]", inputs: { column: "column" }, outputs: { columnHidden: "columnHidden" }, usesInheritance: true, ngImport: i0, template: "<div (click)=\"hideColumn()\"\n\t class=\"gui-header-menu-item\">\n\t{{'headerMenuMainTabHideColumn' | guiTranslate}}\n</div>\n", pipes: { "guiTranslate": i1.TranslationPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnConfigColumnHideComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-column-hide]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div (click)=\"hideColumn()\"\n\t class=\"gui-header-menu-item\">\n\t{{'headerMenuMainTabHideColumn' | guiTranslate}}\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { column: [{
                type: Input
            }], columnHidden: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2hlYWRlci9tZW51L21haW4vaGlkZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvaGVhZGVyL21lbnUvbWFpbi9oaWRlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtEQUErRCxDQUFDOzs7QUFTOUYsTUFBTSxPQUFPLHdDQUF5QyxTQUFRLGFBQWE7SUFRMUUsWUFBWSxLQUFpQjtRQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIZCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFJeEMsQ0FBQztJQUVELFVBQVU7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8seUNBQXlDLENBQUM7SUFDbEQsQ0FBQzs7c0lBbEJXLHdDQUF3QzswSEFBeEMsd0NBQXdDLG9MQ1pyRCxpSUFJQTs0RkRRYSx3Q0FBd0M7a0JBTnBELFNBQVM7K0JBQ0MsOENBQThDLG1CQUV2Qyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJO2lHQUtyQyxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uSGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxSZWYpO1xuXHR9XG5cblx0aGlkZUNvbHVtbigpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbkhpZGRlbi5lbWl0KCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLWhpZGUnO1xuXHR9XG5cbn1cbiIsIjxkaXYgKGNsaWNrKT1cImhpZGVDb2x1bW4oKVwiXG5cdCBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+XG5cdHt7J2hlYWRlck1lbnVNYWluVGFiSGlkZUNvbHVtbicgfCBndWlUcmFuc2xhdGV9fVxuPC9kaXY+XG4iXX0=