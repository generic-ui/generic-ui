import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../icon/structure.column-menu-arrow-icon.component";
import * as i2 from "../../../../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-structure-column-config-column-move", "", "column", ""];
export class StructureColumnConfigColumnMoveComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.movedLeft = new EventEmitter();
        this.movedRight = new EventEmitter();
    }
    moveLeft() {
        this.movedLeft.emit();
    }
    moveRight() {
        this.movedRight.emit();
    }
    getSelectorName() {
        return 'gui-structure-column-config-column-move';
    }
}
StructureColumnConfigColumnMoveComponent.ɵfac = function StructureColumnConfigColumnMoveComponent_Factory(t) { return new (t || StructureColumnConfigColumnMoveComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureColumnConfigColumnMoveComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureColumnConfigColumnMoveComponent, selectors: [["div", "gui-structure-column-config-column-move", "", "column", ""]], inputs: { column: "column" }, outputs: { movedLeft: "movedLeft", movedRight: "movedRight" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 9, vars: 7, consts: [[1, "gui-header-menu-column-move"], [1, "gui-header-menu-column-move-item", "left", 3, "click"], ["gui-structure-column-menu-arrow-icon", "", 3, "rotateDeg"], [1, "gui-header-menu-column-move-item", "right", 3, "click"], ["gui-structure-column-menu-arrow-icon", ""]], template: function StructureColumnConfigColumnMoveComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function StructureColumnConfigColumnMoveComponent_Template_div_click_1_listener() { return ctx.moveLeft(); });
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵlistener("click", function StructureColumnConfigColumnMoveComponent_Template_div_click_5_listener() { return ctx.moveRight(); });
        i0.ɵɵtext(6);
        i0.ɵɵpipe(7, "guiTranslate");
        i0.ɵɵelement(8, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("rotateDeg", -90);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "headerMenuMainTabMoveLeft"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 5, "headerMenuMainTabMoveRight"), " ");
    } }, directives: [i1.StructureColumnMenuArrowIconComponent], pipes: [i2.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnConfigColumnMoveComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-column-config-column-move][column]',
                templateUrl: './structure.column-config-column-move.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { column: [{
            type: Input
        }], movedLeft: [{
            type: Output
        }], movedRight: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9tb3ZlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOzs7OztBQVF6RixNQUFNLE9BQU8sd0NBQXlDLFNBQVEsYUFBYTtJQVcxRSxZQUFZLEtBQWlCO1FBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQU5kLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBR3JDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBSXRDLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx5Q0FBeUMsQ0FBQztJQUNsRCxDQUFDOztnSUF6Qlcsd0NBQXdDOzJGQUF4Qyx3Q0FBd0M7UUNYckQsOEJBQXlDO1FBQ3hDLDhCQUNnRDtRQUQzQyxrSEFBUyxjQUFVLElBQUM7UUFFeEIseUJBQWtFO1FBQ2xFLFlBQ0Q7O1FBQUEsaUJBQU07UUFFTiw4QkFDaUQ7UUFENUMsa0hBQVMsZUFBVyxJQUFDO1FBRXpCLFlBQ0E7O1FBQUEseUJBQWdEO1FBQ2pELGlCQUFNO1FBQ1AsaUJBQU07O1FBVEMsZUFBaUI7UUFBakIsK0JBQWlCO1FBQ3RCLGVBQ0Q7UUFEQyxrRkFDRDtRQUlDLGVBQ0E7UUFEQSxtRkFDQTs7dUZEQ1csd0NBQXdDO2NBTnBELFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsc0RBQXNEO2dCQUNoRSxXQUFXLEVBQUUsc0RBQXNEO2dCQUNuRSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7NkRBSUEsTUFBTTtrQkFETCxLQUFLO1lBSU4sU0FBUztrQkFEUixNQUFNO1lBSVAsVUFBVTtrQkFEVCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlXVtjb2x1bW5dJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0QE91dHB1dCgpXG5cdG1vdmVkTGVmdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRAT3V0cHV0KClcblx0bW92ZWRSaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0fVxuXG5cdG1vdmVMZWZ0KCk6IHZvaWQge1xuXHRcdHRoaXMubW92ZWRMZWZ0LmVtaXQoKTtcblx0fVxuXG5cdG1vdmVSaWdodCgpOiB2b2lkIHtcblx0XHR0aGlzLm1vdmVkUmlnaHQuZW1pdCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlJztcblx0fVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWNvbHVtbi1tb3ZlXCI+XG5cdDxkaXYgKGNsaWNrKT1cIm1vdmVMZWZ0KClcIlxuXHRcdCBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZS1pdGVtIGxlZnRcIj5cblx0XHQ8ZGl2IFtyb3RhdGVEZWddPVwiLTkwXCIgZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPjwvZGl2PlxuXHRcdHt7J2hlYWRlck1lbnVNYWluVGFiTW92ZUxlZnQnIHwgZ3VpVHJhbnNsYXRlfX1cblx0PC9kaXY+XG5cblx0PGRpdiAoY2xpY2spPVwibW92ZVJpZ2h0KClcIlxuXHRcdCBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZS1pdGVtIHJpZ2h0XCI+XG5cdFx0e3snaGVhZGVyTWVudU1haW5UYWJNb3ZlUmlnaHQnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHQ8ZGl2IGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbj48L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==