import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-empty-source", "", "items", ""];
function EmptySourceComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "guiTranslate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "sourceEmpty"), "\n");
} }
export class EmptySourceComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.addClassToHost('gui-py-23');
        this.addClassToHost('gui-px-6');
    }
    ngOnChanges(changes) {
        if (this.hasChanged(changes.items)) {
            if (this.items.length === 0) {
                this.removeClassFromHost('gui-hidden');
                this.addClassToHost('gui-block');
            }
            else {
                this.removeClassFromHost('gui-block');
                this.addClassToHost('gui-hidden');
            }
        }
    }
    getSelectorName() {
        return 'gui-empty-source';
    }
}
EmptySourceComponent.ɵfac = function EmptySourceComponent_Factory(t) { return new (t || EmptySourceComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
EmptySourceComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmptySourceComponent, selectors: [["div", "gui-empty-source", "", "items", ""]], inputs: { items: "items" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function EmptySourceComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EmptySourceComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.items.length === 0);
    } }, directives: [i1.NgIf], pipes: [i2.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptySourceComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-empty-source][items]',
                templateUrl: './empty-source.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { items: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3NvdXJjZS9mZWF0dXJlL2VtcHR5L2VtcHR5LXNvdXJjZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9lbXB0eS9lbXB0eS1zb3VyY2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7Ozs7SUNGaEYsNkJBQXlDO0lBQ3hDLFlBQ0Q7O0lBQUEsMEJBQWU7O0lBRGQsZUFDRDtJQURDLHFFQUNEOztBRFVBLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhO0lBS3RELFlBQVksS0FBaUI7UUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBd0M7UUFFbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDOzt3RkExQlcsb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNaakMsdUZBRWU7O1FBRkEsNkNBQXdCOzt1RkRZMUIsb0JBQW9CO2NBTmhDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7NkRBSUEsS0FBSztrQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZW1wdHktc291cmNlXVtpdGVtc10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZW1wdHktc291cmNlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRW1wdHlTb3VyY2VDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRpdGVtczogQXJyYXk8YW55PjtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcHktMjMnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcHgtNicpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEVtcHR5U291cmNlQ29tcG9uZW50Pikge1xuXG5cdFx0aWYgKHRoaXMuaGFzQ2hhbmdlZChjaGFuZ2VzLml0ZW1zKSkge1xuXHRcdFx0aWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NGcm9tSG9zdCgnZ3VpLWhpZGRlbicpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NGcm9tSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1oaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZW1wdHktc291cmNlJztcblx0fVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1zLmxlbmd0aCA9PT0gMFwiPlxuXHR7eydzb3VyY2VFbXB0eScgfCBndWlUcmFuc2xhdGV9fVxuPC9uZy1jb250YWluZXI+XG4iXX0=