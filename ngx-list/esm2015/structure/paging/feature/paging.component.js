import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { PagingDisplayMode } from './mode/paging-display-mode';
import { PagingPosition } from './paging-position';
import { StreamCloser } from '../../../common/cdk/reactive/stream-closer';
import { CssClass } from '../../common/css-class/css-class';
import * as i0 from "@angular/core";
import * as i1 from "../../common/css-class/css-class.modifier";
import * as i2 from "../../core/api/structure.id";
import * as i3 from "../core/api/paging.warehouse";
import * as i4 from "../core/api/paging.command-invoker";
import * as i5 from "../../source/core/api/source.warehouse";
import * as i6 from "./mode/paging-display-mode.archive";
import * as i7 from "@angular/common";
import * as i8 from "./select/paging-select.component";
import * as i9 from "./basic/stats/paging-stats.component";
import * as i10 from "./basic/navigator/paging-navigator.component";
import * as i11 from "./advanced/navigator/alternative-paging-navigator.component";
import * as i12 from "./advanced/pages/alternative-paging-pages.component";
const _c0 = ["gui-paging", "", "position", ""];
function PagingComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵlistener("pageSizeChanged", function PagingComponent_ng_container_0_ng_container_1_Template_div_pageSizeChanged_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.changePageSize($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵlistener("nextPageChanged", function PagingComponent_ng_container_0_ng_container_1_Template_div_nextPageChanged_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.nextPage(); })("prevPageChanged", function PagingComponent_ng_container_0_ng_container_1_Template_div_prevPageChanged_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.prevPage(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("paging", ctx_r2.paging);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("paging", ctx_r2.paging);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("paging", ctx_r2.paging)("sourceSize", ctx_r2.sourceSize);
} }
function PagingComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵlistener("nextPageChanged", function PagingComponent_ng_container_0_ng_template_2_Template_div_nextPageChanged_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.nextPage(); })("prevPageChanged", function PagingComponent_ng_container_0_ng_template_2_Template_div_prevPageChanged_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.prevPage(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("paging", ctx_r4.paging);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("paging", ctx_r4.paging)("sourceSize", ctx_r4.sourceSize);
} }
function PagingComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PagingComponent_ng_container_0_ng_container_1_Template, 4, 4, "ng-container", 1);
    i0.ɵɵtemplate(2, PagingComponent_ng_container_0_ng_template_2_Template, 2, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r3 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.minimal)("ngIfElse", _r3);
} }
function PagingComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵlistener("pageSizeChanged", function PagingComponent_ng_container_1_Template_div_pageSizeChanged_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.changePageSize($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵlistener("nextPageChanged", function PagingComponent_ng_container_1_Template_div_nextPageChanged_2_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.nextPage(); })("prevPageChanged", function PagingComponent_ng_container_1_Template_div_prevPageChanged_2_listener() { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.prevPage(); });
    i0.ɵɵelement(3, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("paging", ctx_r1.paging);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("paging", ctx_r1.paging)("sourceSize", ctx_r1.sourceSize);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("paging", ctx_r1.paging)("sourceSize", ctx_r1.sourceSize);
} }
export class PagingComponent extends SmartComponent {
    constructor(elRef, changeDetectorRef, cssClassModifier, structureId, pagingWarehouse, pagingCommandInvoker, sourceWarehouse, pagingDisplayModeArchive) {
        super(changeDetectorRef, elRef);
        this.elRef = elRef;
        this.changeDetectorRef = changeDetectorRef;
        this.cssClassModifier = cssClassModifier;
        this.structureId = structureId;
        this.pagingWarehouse = pagingWarehouse;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.sourceWarehouse = sourceWarehouse;
        this.pagingDisplayModeArchive = pagingDisplayModeArchive;
        this.alternativeDisplay = false;
        this.isPagingVisible = false;
        this.localStreamCloser = new StreamCloser();
        this.addClassToHost('gui-flex');
        this.addClassToHost('gui-justify-end');
        this.addClassToHost('gui-items-center');
        this.addClassToHost('gui-p-4');
    }
    ngOnChanges(changes) {
        if (changes.position) {
            if (this.position === PagingPosition.BOTTOM) {
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
            }
            else {
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
            }
        }
    }
    ngOnInit() {
        this.hermesSubscribe(this.pagingDisplayModeArchive.on(), (mode) => {
            this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
        });
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.paging = paging;
            this.calculatePagingVisibility();
        });
        this.hermesSubscribe(this.sourceWarehouse.onOriginSize(this.structureId), (size) => {
            this.sourceSize = size;
        });
    }
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
    }
    changePageSize(pageSize) {
        this.pagingCommandInvoker.changePageSize(pageSize, this.structureId);
    }
    nextPage() {
        if (!this.sourceSize) {
            return;
        }
        this.pagingCommandInvoker.nextPage(this.structureId);
    }
    prevPage() {
        this.pagingCommandInvoker.prevPage(this.structureId);
    }
    calculatePagingVisibility() {
        this.isPagingVisible = this.paging && this.paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && this.paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && this.paging.isPagerBottom()));
    }
    getSelectorName() {
        return 'gui-paging';
    }
}
PagingComponent.ɵfac = function PagingComponent_Factory(t) { return new (t || PagingComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.CssClassModifier), i0.ɵɵdirectiveInject(i2.StructureId), i0.ɵɵdirectiveInject(i3.PagingWarehouse), i0.ɵɵdirectiveInject(i4.PagingCommandInvoker), i0.ɵɵdirectiveInject(i5.SourceWarehouse), i0.ɵɵdirectiveInject(i6.PagingDisplayModeArchive)); };
PagingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PagingComponent, selectors: [["div", "gui-paging", "", "position", ""]], inputs: { position: "position", minimal: "minimal" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["minimalTemplate", ""], ["gui-paging-select", "", 3, "paging", "pageSizeChanged"], ["gui-paging-stats", "", 3, "paging"], ["gui-paging-navigator", "", 3, "paging", "sourceSize", "nextPageChanged", "prevPageChanged"], ["gui-paging-alternative-navigator", "", 1, "gui-flex", "gui-p-0", 3, "paging", "sourceSize", "nextPageChanged", "prevPageChanged"], ["gui-paging-alternative-pages", "", 1, "gui-flex", "gui-justify-center", 3, "paging", "sourceSize"]], template: function PagingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PagingComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        i0.ɵɵtemplate(1, PagingComponent_ng_container_1_Template, 4, 5, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isPagingVisible && !ctx.alternativeDisplay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPagingVisible && ctx.alternativeDisplay);
    } }, directives: [i7.NgIf, i8.PagingSelectComponent, i9.PagingStatsComponent, i10.PagingNavigatorComponent, i11.AlternativePagingNavigatorComponent, i12.AlternativePagingPagesComponent], styles: [".gui-paging-alternative-navigator .gui-button{-ms-flex-line-pack:center;align-content:center;background:transparent;display:-ms-flexbox;display:flex;font-size:14px;line-height:21px;margin:0 2px;padding:0}.gui-paging-alternative-navigator .gui-button svg{-ms-flex-item-align:center;align-self:center;height:12px;margin:-1px 2px 0;width:auto}.gui-paging-alternative-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-paging-alternative-navigator .gui-button:hover svg path{stroke:#333}.gui-paging-alternative-navigator .gui-button:disabled svg{opacity:.4}.gui-paging-alternative-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging-alternative-pages{line-height:21px}.gui-paging-alternative-pages .gui-paging-page{display:none}.gui-paging-alternative-pages .gui-paging-visible-page .gui-paging-page{display:block;font-family:Arial,serif}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:bold}.gui-paging-bottom{border-top:1px solid;border-top-color:inherit}.gui-paging-top{border-bottom:1px solid;border-bottom-color:inherit}\n", ".gui-generic .gui-paging{border-color:rgba(34,36,38,.102);font-size:14px}.gui-generic .gui-paging *{border-color:rgba(34,36,38,.102);font-size:14px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagingComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-paging][position]',
                templateUrl: './paging.component.html',
                styleUrls: [
                    './style/paging.ngx.scss',
                    './style/theme/generic.paging.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.CssClassModifier }, { type: i2.StructureId }, { type: i3.PagingWarehouse }, { type: i4.PagingCommandInvoker }, { type: i5.SourceWarehouse }, { type: i6.PagingDisplayModeArchive }]; }, { position: [{
            type: Input
        }], minimal: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQU8vRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNYM0QsNkJBQXFEO0lBRXBELDhCQUVvQjtJQUZmLDZPQUEwQztJQUcvQyxpQkFBTTtJQUVOLHlCQUVNO0lBRU4sOEJBSXVCO0lBSmxCLDJOQUE4Qiw4TUFBQTtJQUtuQyxpQkFBTTtJQUVQLDBCQUFlOzs7SUFmWixlQUFpQjtJQUFqQixzQ0FBaUI7SUFJZCxlQUFpQjtJQUFqQixzQ0FBaUI7SUFNcEIsZUFBaUI7SUFBakIsc0NBQWlCLGlDQUFBOzs7O0lBU25CLHlCQUVNO0lBRU4sOEJBSXVCO0lBSmxCLDJOQUE4QixnTkFBQTtJQUtuQyxpQkFBTTs7O0lBVEQsc0NBQWlCO0lBTXBCLGVBQWlCO0lBQWpCLHNDQUFpQixpQ0FBQTs7O0lBOUJyQiw2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LENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs4RUF0R1csZUFBZTtrRUFBZixlQUFlO1FDNUI1QixrRkFxQ2U7UUFFZixrRkFzQmU7O1FBN0RBLHFFQUE0QztRQXVDNUMsZUFBMkM7UUFBM0Msb0VBQTJDOzt1RkRYN0MsZUFBZTtjQVYzQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFO29CQUNWLHlCQUF5QjtvQkFDekIsdUNBQXVDO2lCQUN2QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7NFJBSUEsUUFBUTtrQkFEUCxLQUFLO1lBSU4sT0FBTztrQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vY29yZS9hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vY29yZS9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlJztcbmltcG9ydCB7IFBhZ2luZ1Bvc2l0aW9uIH0gZnJvbSAnLi9wYWdpbmctcG9zaXRpb24nO1xuaW1wb3J0IHsgU3RyZWFtQ2xvc2VyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyJztcbmltcG9ydCB7IENzc0NsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi9jb21tb24vY3NzLWNsYXNzL2Nzcy1jbGFzcy5tb2RpZmllcic7XG5pbXBvcnQgeyBDc3NDbGFzcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9jc3MtY2xhc3MvY3NzLWNsYXNzJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nXVtwb3NpdGlvbl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvcGFnaW5nLm5neC5zY3NzJyxcblx0XHQnLi9zdHlsZS90aGVtZS9nZW5lcmljLnBhZ2luZy5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHBvc2l0aW9uOiBQYWdpbmdQb3NpdGlvbjtcblxuXHRASW5wdXQoKVxuXHRtaW5pbWFsOiBib29sZWFuO1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRhbHRlcm5hdGl2ZURpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRpc1BhZ2luZ1Zpc2libGUgPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGxvY2FsU3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNzc0NsYXNzTW9kaWZpZXI6IENzc0NsYXNzTW9kaWZpZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWZsZXgnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktanVzdGlmeS1lbmQnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktaXRlbXMtY2VudGVyJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXAtNCcpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFBhZ2luZ0NvbXBvbmVudD4pIHtcblxuXHRcdGlmIChjaGFuZ2VzLnBvc2l0aW9uKSB7XG5cblx0XHRcdGlmICh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5CT1RUT00pIHtcblx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnJlbW92ZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIENzc0NsYXNzLlBBR0lOR19UT1BfQ0xBU1NfTkFNRSk7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5hZGQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfQk9UVE9NX0NMQVNTX05BTUUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnJlbW92ZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIENzc0NsYXNzLlBBR0lOR19CT1RUT01fQ0xBU1NfTkFNRSk7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5hZGQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfVE9QX0NMQVNTX05BTUUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KG1vZGU6IFBhZ2luZ0Rpc3BsYXlNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMuYWx0ZXJuYXRpdmVEaXNwbGF5ID0gbW9kZSA9PT0gUGFnaW5nRGlzcGxheU1vZGUuQURWQU5DRUQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5wYWdpbmdXYXJlaG91c2Uub25QYWdpbmcodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocGFnaW5nOiBQYWdpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0XHRcdHRoaXMuY2FsY3VsYXRlUGFnaW5nVmlzaWJpbGl0eSgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc291cmNlV2FyZWhvdXNlLm9uT3JpZ2luU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VTaXplID0gc2l6ZTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5uZXh0UGFnZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIucHJldlBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVBhZ2luZ1Zpc2liaWxpdHkoKTogdm9pZCB7XG5cdFx0dGhpcy5pc1BhZ2luZ1Zpc2libGUgPSB0aGlzLnBhZ2luZyAmJiB0aGlzLnBhZ2luZy5pc0VuYWJsZWQoKSAmJlxuXHRcdFx0KCgodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uVE9QKSAmJiB0aGlzLnBhZ2luZy5pc1BhZ2VyVG9wKCkpIHx8XG5cdFx0XHRcdCgodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSAmJiB0aGlzLnBhZ2luZy5pc1BhZ2VyQm90dG9tKCkpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1wYWdpbmcnO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc1BhZ2luZ1Zpc2libGUgJiYgIWFsdGVybmF0aXZlRGlzcGxheVwiPlxuXG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCIhbWluaW1hbDsgZWxzZSBtaW5pbWFsVGVtcGxhdGVcIj5cblxuXHRcdDxkaXYgKHBhZ2VTaXplQ2hhbmdlZCk9XCJjaGFuZ2VQYWdlU2l6ZSgkZXZlbnQpXCJcblx0XHRcdCBbcGFnaW5nXT1cInBhZ2luZ1wiXG5cdFx0XHQgZ3VpLXBhZ2luZy1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IFtwYWdpbmddPVwicGFnaW5nXCJcblx0XHRcdCBndWktcGFnaW5nLXN0YXRzPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiAobmV4dFBhZ2VDaGFuZ2VkKT1cIm5leHRQYWdlKClcIlxuXHRcdFx0IChwcmV2UGFnZUNoYW5nZWQpPVwicHJldlBhZ2UoKVwiXG5cdFx0XHQgW3BhZ2luZ109XCJwYWdpbmdcIlxuXHRcdFx0IFtzb3VyY2VTaXplXT1cInNvdXJjZVNpemVcIlxuXHRcdFx0IGd1aS1wYWdpbmctbmF2aWdhdG9yPlxuXHRcdDwvZGl2PlxuXG5cdDwvbmctY29udGFpbmVyPlxuXG5cdDxuZy10ZW1wbGF0ZSAjbWluaW1hbFRlbXBsYXRlPlxuXG5cdFx0PGRpdiBbcGFnaW5nXT1cInBhZ2luZ1wiXG5cdFx0XHQgZ3VpLXBhZ2luZy1zdGF0cz5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgKG5leHRQYWdlQ2hhbmdlZCk9XCJuZXh0UGFnZSgpXCJcblx0XHRcdCAocHJldlBhZ2VDaGFuZ2VkKT1cInByZXZQYWdlKClcIlxuXHRcdFx0IFtwYWdpbmddPVwicGFnaW5nXCJcblx0XHRcdCBbc291cmNlU2l6ZV09XCJzb3VyY2VTaXplXCJcblx0XHRcdCBndWktcGFnaW5nLW5hdmlnYXRvcj5cblx0XHQ8L2Rpdj5cblxuXHQ8L25nLXRlbXBsYXRlPlxuXG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUGFnaW5nVmlzaWJsZSAmJiBhbHRlcm5hdGl2ZURpc3BsYXlcIj5cblxuXHQ8ZGl2IChwYWdlU2l6ZUNoYW5nZWQpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50KVwiXG5cdFx0IFtwYWdpbmddPVwicGFnaW5nXCJcblx0XHQgZ3VpLXBhZ2luZy1zZWxlY3Q+XG5cdDwvZGl2PlxuXG5cdDxkaXYgKG5leHRQYWdlQ2hhbmdlZCk9XCJuZXh0UGFnZSgpXCJcblx0XHQgKHByZXZQYWdlQ2hhbmdlZCk9XCJwcmV2UGFnZSgpXCJcblx0XHQgW3BhZ2luZ109XCJwYWdpbmdcIlxuXHRcdCBbc291cmNlU2l6ZV09XCJzb3VyY2VTaXplXCJcblx0XHQgY2xhc3M9XCJndWktZmxleCBndWktcC0wXCJcblx0XHQgZ3VpLXBhZ2luZy1hbHRlcm5hdGl2ZS1uYXZpZ2F0b3I+XG5cblx0XHQ8ZGl2IFtwYWdpbmddPVwicGFnaW5nXCJcblx0XHRcdCBbc291cmNlU2l6ZV09XCJzb3VyY2VTaXplXCJcblx0XHRcdCBjbGFzcz1cImd1aS1mbGV4IGd1aS1qdXN0aWZ5LWNlbnRlclwiXG5cdFx0XHQgZ3VpLXBhZ2luZy1hbHRlcm5hdGl2ZS1wYWdlcz5cblx0XHQ8L2Rpdj5cblxuXHQ8L2Rpdj5cblxuPC9uZy1jb250YWluZXI+XG4iXX0=