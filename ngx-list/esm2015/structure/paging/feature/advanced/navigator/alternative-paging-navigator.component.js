import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../core/api/paging.command-invoker";
import * as i3 from "@generic-ui/fabric";
const _c0 = ["gui-paging-alternative-navigator", "", "paging", "", "sourceSize", ""];
const _c1 = ["*"];
export class AlternativePagingNavigatorComponent extends PureComponent {
    constructor(elRef, structureId, pagingCommandInvoker) {
        super(elRef);
        this.structureId = structureId;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    ngOnChanges() {
        this.calculatePrev();
        this.calculateNext();
    }
    prevPage() {
        this.prevPageChanged.emit();
    }
    nextPage() {
        this.nextPageChanged.emit();
    }
    firstPage() {
        this.pagingCommandInvoker.goToPage(1, this.paging.getPage(), this.structureId);
    }
    lastPage() {
        const numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
        this.pagingCommandInvoker.goToPage(numberOfPages, this.paging.getPage(), this.structureId);
    }
    calculatePrev() {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    }
    calculateNext() {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    }
    getSelectorName() {
        return 'gui-paging-alternative-navigator';
    }
}
AlternativePagingNavigatorComponent.ɵfac = function AlternativePagingNavigatorComponent_Factory(t) { return new (t || AlternativePagingNavigatorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.PagingCommandInvoker)); };
AlternativePagingNavigatorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlternativePagingNavigatorComponent, selectors: [["div", "gui-paging-alternative-navigator", "", "paging", "", "sourceSize", ""]], inputs: { paging: "paging", sourceSize: "sourceSize" }, outputs: { nextPageChanged: "nextPageChanged", prevPageChanged: "prevPageChanged" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 17, vars: 4, consts: [["gui-button", "", 3, "disabled", "click"], ["height", "10.661", "viewBox", "0 0 11.081 10.661", "width", "11.081", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(-522.98 669.601) rotate(180)"], ["d", "M.75.75,5.02,5.02.75,9.29", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "transform", "translate(-533.75 659.25)"], ["d", "M.75.75,5.02,5.02.75,9.29", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "transform", "translate(-528.75 659.25)"], ["gui-button", "", 1, "gui-paging-navigator-prev", 3, "disabled", "click"], ["height", "10.661", "viewBox", "0 0 6.081 10.661", "width", "6.081", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M.75.75,5.02,5.02.75,9.29", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "transform", "translate(5.77 10.351) rotate(180)"], ["gui-button", "", 1, "gui-paging-navigator-next", 3, "disabled", "click"], ["d", "M.75.75,5.02,5.02.75,9.29", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "transform", "translate(0.311 0.311)"], ["transform", "translate(534.061 -658.939)"]], template: function AlternativePagingNavigatorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function AlternativePagingNavigatorComponent_Template_button_click_0_listener() { return ctx.firstPage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelementStart(2, "g", 2);
        i0.ɵɵelement(3, "path", 3);
        i0.ɵɵelement(4, "path", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(5, "button", 5);
        i0.ɵɵlistener("click", function AlternativePagingNavigatorComponent_Template_button_click_5_listener() { return ctx.prevPage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(6, "svg", 6);
        i0.ɵɵelement(7, "path", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(8);
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(9, "button", 8);
        i0.ɵɵlistener("click", function AlternativePagingNavigatorComponent_Template_button_click_9_listener() { return ctx.nextPage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(10, "svg", 6);
        i0.ɵɵelement(11, "path", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(12, "button", 0);
        i0.ɵɵlistener("click", function AlternativePagingNavigatorComponent_Template_button_click_12_listener() { return ctx.lastPage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(13, "svg", 1);
        i0.ɵɵelementStart(14, "g", 10);
        i0.ɵɵelement(15, "path", 3);
        i0.ɵɵelement(16, "path", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.prevDisabled);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("disabled", ctx.prevDisabled);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.nextDisabled);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.nextDisabled);
    } }, directives: [i3.FabricButtonComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlternativePagingNavigatorComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-paging-alternative-navigator][paging][sourceSize]',
                templateUrl: './alternative-paging-navigator.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.PagingCommandInvoker }]; }, { paging: [{
            type: Input
        }], sourceSize: [{
            type: Input
        }], nextPageChanged: [{
            type: Output
        }], prevPageChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9hZHZhbmNlZC9uYXZpZ2F0b3IvYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9hZHZhbmNlZC9uYXZpZ2F0b3IvYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7OztBQVVuRixNQUFNLE9BQU8sbUNBQW9DLFNBQVEsYUFBYTtJQWtCckUsWUFBWSxLQUFpQixFQUNULFdBQXdCLEVBQ3hCLG9CQUEwQztRQUM3RCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGTSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBWDlELG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFNOUIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsUUFBUTtRQUNQLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVPLGFBQWE7UUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVPLGFBQWE7UUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sa0NBQWtDLENBQUM7SUFDM0MsQ0FBQzs7c0hBbEVXLG1DQUFtQztzRkFBbkMsbUNBQW1DOztRQ2RoRCxpQ0FFYTtRQUZMLGdIQUFTLGVBQVcsSUFBQztRQUc1QixtQkFBbUc7UUFBbkcsOEJBQW1HO1FBQ2xHLDRCQUFzRDtRQUNyRCwwQkFDNkQ7UUFDN0QsMEJBQ3FGO1FBQ3RGLGlCQUFJO1FBQ0wsaUJBQU07UUFDUCxpQkFBUztRQUVULG9CQUdhO1FBSGIsaUNBR2E7UUFITCxnSEFBUyxjQUFVLElBQUM7UUFJM0IsbUJBQWlHO1FBQWpHLDhCQUFpRztRQUNoRywwQkFDc0U7UUFDdkUsaUJBQU07UUFDUCxpQkFBUztRQUVULGtCQUF5QjtRQUV6QixvQkFHYTtRQUhiLGlDQUdhO1FBSEwsZ0hBQVMsY0FBVSxJQUFDO1FBSTNCLG1CQUFpRztRQUFqRywrQkFBaUc7UUFDaEcsMkJBQzBEO1FBQzNELGlCQUFNO1FBQ1AsaUJBQVM7UUFFVCxvQkFFYTtRQUZiLGtDQUVhO1FBRkwsaUhBQVMsY0FBVSxJQUFDO1FBRzNCLG1CQUFtRztRQUFuRywrQkFBbUc7UUFDbEcsOEJBQTJDO1FBQzFDLDJCQUM2RDtRQUM3RCwyQkFDcUY7UUFDdEYsaUJBQUk7UUFDTCxpQkFBTTtRQUNQLGlCQUFTOztRQTdDUCwyQ0FBeUI7UUFhekIsZUFBeUI7UUFBekIsMkNBQXlCO1FBWXpCLGVBQXlCO1FBQXpCLDJDQUF5QjtRQVV6QixlQUF5QjtRQUF6QiwyQ0FBeUI7O3VGRHRCZCxtQ0FBbUM7Y0FOL0MsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwyREFBMkQ7Z0JBQ3JFLFdBQVcsRUFBRSwrQ0FBK0M7Z0JBQzVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzswSEFJQSxNQUFNO2tCQURMLEtBQUs7WUFJTixVQUFVO2tCQURULEtBQUs7WUFJTixlQUFlO2tCQURkLE1BQU07WUFJUCxlQUFlO2tCQURkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1wYWdpbmctYWx0ZXJuYXRpdmUtbmF2aWdhdG9yXVtwYWdpbmddW3NvdXJjZVNpemVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2FsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRAT3V0cHV0KClcblx0bmV4dFBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwcmV2UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJldkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0bmV4dERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlUHJldigpO1xuXHRcdHRoaXMuY2FsY3VsYXRlTmV4dCgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2UGFnZUNoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0UGFnZUNoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0Zmlyc3RQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIuZ29Ub1BhZ2UoMSwgdGhpcy5wYWdpbmcuZ2V0UGFnZSgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGxhc3RQYWdlKCk6IHZvaWQge1xuXHRcdGNvbnN0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5zb3VyY2VTaXplIC8gdGhpcy5wYWdpbmcuZ2V0UGFnZVNpemUoKSk7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5nb1RvUGFnZShudW1iZXJPZlBhZ2VzLCB0aGlzLnBhZ2luZy5nZXRQYWdlKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVQcmV2KCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnBhZ2luZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucHJldkRpc2FibGVkID0gdGhpcy5wYWdpbmcuaXNQcmV2UGFnZURpc2FibGVkKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZU5leHQoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMucGFnaW5nICYmICF0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLm5leHREaXNhYmxlZCA9IHRoaXMucGFnaW5nLmlzTmV4dFBhZ2VEaXNhYmxlZCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZy1hbHRlcm5hdGl2ZS1uYXZpZ2F0b3InO1xuXHR9XG5cbn1cbiIsIjxidXR0b24gKGNsaWNrKT1cImZpcnN0UGFnZSgpXCJcblx0XHRbZGlzYWJsZWRdPVwicHJldkRpc2FibGVkXCJcblx0XHRndWktYnV0dG9uPlxuXHQ8c3ZnIGhlaWdodD1cIjEwLjY2MVwiIHZpZXdCb3g9XCIwIDAgMTEuMDgxIDEwLjY2MVwiIHdpZHRoPVwiMTEuMDgxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTIyLjk4IDY2OS42MDEpIHJvdGF0ZSgxODApXCI+XG5cdFx0XHQ8cGF0aCBkPVwiTS43NS43NSw1LjAyLDUuMDIuNzUsOS4yOVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0ICBzdHJva2Utd2lkdGg9XCIxLjVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUzMy43NSA2NTkuMjUpXCIvPlxuXHRcdFx0PHBhdGggZD1cIk0uNzUuNzUsNS4wMiw1LjAyLjc1LDkuMjlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHQgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01MjguNzUgNjU5LjI1KVwiLz5cblx0XHQ8L2c+XG5cdDwvc3ZnPlxuPC9idXR0b24+XG5cbjxidXR0b24gKGNsaWNrKT1cInByZXZQYWdlKClcIlxuXHRcdFtkaXNhYmxlZF09XCJwcmV2RGlzYWJsZWRcIlxuXHRcdGNsYXNzPVwiZ3VpLXBhZ2luZy1uYXZpZ2F0b3ItcHJldlwiXG5cdFx0Z3VpLWJ1dHRvbj5cblx0PHN2ZyBoZWlnaHQ9XCIxMC42NjFcIiB2aWV3Qm94PVwiMCAwIDYuMDgxIDEwLjY2MVwiIHdpZHRoPVwiNi4wODFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PHBhdGggZD1cIk0uNzUuNzUsNS4wMiw1LjAyLjc1LDkuMjlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHQgIHN0cm9rZS13aWR0aD1cIjEuNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1Ljc3IDEwLjM1MSkgcm90YXRlKDE4MClcIi8+XG5cdDwvc3ZnPlxuPC9idXR0b24+XG5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cblxuPGJ1dHRvbiAoY2xpY2spPVwibmV4dFBhZ2UoKVwiXG5cdFx0W2Rpc2FibGVkXT1cIm5leHREaXNhYmxlZFwiXG5cdFx0Y2xhc3M9XCJndWktcGFnaW5nLW5hdmlnYXRvci1uZXh0XCJcblx0XHRndWktYnV0dG9uPlxuXHQ8c3ZnIGhlaWdodD1cIjEwLjY2MVwiIHZpZXdCb3g9XCIwIDAgNi4wODEgMTAuNjYxXCIgd2lkdGg9XCI2LjA4MVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8cGF0aCBkPVwiTS43NS43NSw1LjAyLDUuMDIuNzUsOS4yOVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcblx0XHRcdCAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMzExIDAuMzExKVwiLz5cblx0PC9zdmc+XG48L2J1dHRvbj5cblxuPGJ1dHRvbiAoY2xpY2spPVwibGFzdFBhZ2UoKVwiXG5cdFx0W2Rpc2FibGVkXT1cIm5leHREaXNhYmxlZFwiXG5cdFx0Z3VpLWJ1dHRvbj5cblx0PHN2ZyBoZWlnaHQ9XCIxMC42NjFcIiB2aWV3Qm94PVwiMCAwIDExLjA4MSAxMC42NjFcIiB3aWR0aD1cIjExLjA4MVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTM0LjA2MSAtNjU4LjkzOSlcIj5cblx0XHRcdDxwYXRoIGQ9XCJNLjc1Ljc1LDUuMDIsNS4wMi43NSw5LjI5XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHQgIHN0cm9rZS13aWR0aD1cIjEuNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTMzLjc1IDY1OS4yNSlcIi8+XG5cdFx0XHQ8cGF0aCBkPVwiTS43NS43NSw1LjAyLDUuMDIuNzUsOS4yOVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdCAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUyOC43NSA2NTkuMjUpXCIvPlxuXHRcdDwvZz5cblx0PC9zdmc+XG48L2J1dHRvbj5cbiJdfQ==