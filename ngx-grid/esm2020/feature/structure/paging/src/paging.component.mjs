import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PagingDisplayMode } from './mode/paging-display-mode';
import { PagingPosition } from './paging-position';
import { CssClass } from '../../common/src/css-class/css-class';
import { GuiState } from '../../../gui-angular/state/gui.state';
import { hermesMap } from '@generic-ui/hermes';
import { GuiComponent } from '../../../common/component';
import * as i0 from "@angular/core";
import * as i1 from "../../../gui-angular/state/gui.state";
import * as i2 from "../../common/src/css-class/css-class.modifier";
import * as i3 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i4 from "../../../../core/structure/paging/src/api/paging.warehouse";
import * as i5 from "../../../../core/structure/paging/src/api/paging.publisher";
import * as i6 from "../../../../core/structure/source/src/api/source.warehouse";
import * as i7 from "./mode/paging-display-mode.archive";
import * as i8 from "@angular/common";
import * as i9 from "../../../gui-angular/template/let/gui.let.directive";
import * as i10 from "./basic/navigator/paging-navigator.component";
import * as i11 from "./select/paging-select.component";
import * as i12 from "./basic/stats/paging-stats.component";
import * as i13 from "./advanced/navigator/alternative-paging-navigator.component";
import * as i14 from "./advanced/pages/alternative-paging-pages.component";
export class PagingComponent extends GuiComponent {
    constructor(elRef, state, cssClassModifier, structureId, pagingWarehouse, pagingCommandInvoker, sourceWarehouse, pagingDisplayModeArchive) {
        super(elRef);
        this.elRef = elRef;
        this.state = state;
        this.cssClassModifier = cssClassModifier;
        this.structureId = structureId;
        this.pagingWarehouse = pagingWarehouse;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.sourceWarehouse = sourceWarehouse;
        this.pagingDisplayModeArchive = pagingDisplayModeArchive;
        this.state$ = this.state.select();
        this.addClassToHost('gui-flex');
        this.addClassToHost('gui-justify-end');
        this.addClassToHost('gui-items-center');
        this.addClassToHost('gui-p-4');
        this.state.setValue({
            alternativeDisplay: false,
            isPagingVisible: false
        });
        this.state.connect('sourceSize', this.sourceWarehouse.onOriginSize(this.structureId));
        this.state.connect('alternativeDisplay', this.selectIsAdvancedPagingEnabled());
        this.state.connect('paging', this.pagingWarehouse.onPaging(this.structureId));
        this.state.connect('isPagingVisible', this.selectIsPagingVisible());
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
    changePageSize(pageSize) {
        this.pagingCommandInvoker.changePageSize(pageSize, this.structureId);
    }
    nextPage(sourceSize) {
        if (!sourceSize) {
            return;
        }
        this.pagingCommandInvoker.nextPage(this.structureId);
    }
    prevPage() {
        this.pagingCommandInvoker.prevPage(this.structureId);
    }
    getSelectorName() {
        return 'gui-paging';
    }
    selectIsPagingVisible() {
        return this.pagingWarehouse
            .onPaging(this.structureId)
            .pipe(hermesMap((paging) => {
            return this.mapIsPagingVisible(paging);
        }));
    }
    mapIsPagingVisible(paging) {
        return paging && paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && paging.isPagerBottom()));
    }
    selectIsAdvancedPagingEnabled() {
        return this.pagingDisplayModeArchive
            .on()
            .pipe(hermesMap((mode) => {
            return mode === PagingDisplayMode.ADVANCED;
        }));
    }
}
PagingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PagingComponent, deps: [{ token: i0.ElementRef }, { token: i1.GuiState }, { token: i2.CssClassModifier }, { token: i3.StructureId }, { token: i4.PagingWarehouse }, { token: i5.PagingPublisher }, { token: i6.SourceWarehouse }, { token: i7.PagingDisplayModeArchive }], target: i0.ɵɵFactoryTarget.Component });
PagingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PagingComponent, selector: "div[gui-paging][position]", inputs: { position: "position", minimal: "minimal" }, providers: [
        GuiState
    ], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *guiLet=\"state$; let localState\">\n\n\t<ng-container *ngIf=\"localState.isPagingVisible && !localState.alternativeDisplay\">\n\n\t\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t\t [paging]=\"localState.paging\"\n\t\t\t\t gui-paging-select>\n\t\t\t</div>\n\n\t\t\t<div [paging]=\"localState.paging\"\n\t\t\t\t gui-paging-stats>\n\t\t\t</div>\n\n\t\t\t<div (nextPageChanged)=\"nextPage(localState.sourceSize)\"\n\t\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t\t [paging]=\"localState.paging\"\n\t\t\t\t [sourceSize]=\"localState.sourceSize\"\n\t\t\t\t gui-paging-navigator>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t\t<ng-template #minimalTemplate>\n\n\t\t\t<div [paging]=\"localState.paging\"\n\t\t\t\t gui-paging-stats>\n\t\t\t</div>\n\n\t\t\t<div (nextPageChanged)=\"nextPage(localState.sourceSize)\"\n\t\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t\t [paging]=\"localState.paging\"\n\t\t\t\t [sourceSize]=\"localState.sourceSize\"\n\t\t\t\t gui-paging-navigator>\n\t\t\t</div>\n\n\t\t</ng-template>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"localState.isPagingVisible && localState.alternativeDisplay\">\n\n\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t [paging]=\"localState.paging\"\n\t\t\t gui-paging-select>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage(localState.sourceSize)\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"localState.paging\"\n\t\t\t [sourceSize]=\"localState.sourceSize\"\n\t\t\t class=\"gui-flex gui-p-0\"\n\t\t\t gui-paging-alternative-navigator>\n\n\t\t\t<div [paging]=\"localState.paging\"\n\t\t\t\t [sourceSize]=\"localState.sourceSize\"\n\t\t\t\t class=\"gui-flex gui-justify-center\"\n\t\t\t\t gui-paging-alternative-pages>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n</ng-container>\n", styles: [".gui-paging-alternative-navigator .gui-button{-ms-flex-line-pack:center;align-content:center;background:transparent;display:-ms-flexbox;display:flex;font-size:14px;line-height:21px;margin:0 2px;padding:0}.gui-paging-alternative-navigator .gui-button svg{-ms-flex-item-align:center;align-self:center;height:12px;margin:-1px 2px 0;width:auto}.gui-paging-alternative-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-paging-alternative-navigator .gui-button:hover svg path{stroke:#333}.gui-paging-alternative-navigator .gui-button:disabled svg{opacity:.4}.gui-paging-alternative-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging-alternative-pages{line-height:21px}.gui-paging-alternative-pages .gui-paging-page{display:none}.gui-paging-alternative-pages .gui-paging-visible-page .gui-paging-page{display:block;font-family:Arial,serif}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging-bottom{border-top:1px solid;border-top-color:inherit}.gui-paging-top{border-bottom:1px solid;border-bottom-color:inherit}\n", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:#2224261a;font-size:14px}\n"], dependencies: [{ kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i9.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i10.PagingNavigatorComponent, selector: "div[gui-paging-navigator][paging]", inputs: ["paging", "sourceSize"], outputs: ["nextPageChanged", "prevPageChanged"] }, { kind: "component", type: i11.PagingSelectComponent, selector: "div[gui-paging-select][paging]", inputs: ["paging"], outputs: ["pageSizeChanged"] }, { kind: "component", type: i12.PagingStatsComponent, selector: "div[gui-paging-stats][paging]", inputs: ["paging"] }, { kind: "component", type: i13.AlternativePagingNavigatorComponent, selector: "div[gui-paging-alternative-navigator][paging][sourceSize]", inputs: ["paging", "sourceSize"], outputs: ["nextPageChanged", "prevPageChanged"] }, { kind: "component", type: i14.AlternativePagingPagesComponent, selector: "div[gui-paging-alternative-pages][paging]", inputs: ["paging", "sourceSize"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PagingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging][position]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<ng-container *guiLet=\"state$; let localState\">\n\n\t<ng-container *ngIf=\"localState.isPagingVisible && !localState.alternativeDisplay\">\n\n\t\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t\t [paging]=\"localState.paging\"\n\t\t\t\t gui-paging-select>\n\t\t\t</div>\n\n\t\t\t<div [paging]=\"localState.paging\"\n\t\t\t\t gui-paging-stats>\n\t\t\t</div>\n\n\t\t\t<div (nextPageChanged)=\"nextPage(localState.sourceSize)\"\n\t\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t\t [paging]=\"localState.paging\"\n\t\t\t\t [sourceSize]=\"localState.sourceSize\"\n\t\t\t\t gui-paging-navigator>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t\t<ng-template #minimalTemplate>\n\n\t\t\t<div [paging]=\"localState.paging\"\n\t\t\t\t gui-paging-stats>\n\t\t\t</div>\n\n\t\t\t<div (nextPageChanged)=\"nextPage(localState.sourceSize)\"\n\t\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t\t [paging]=\"localState.paging\"\n\t\t\t\t [sourceSize]=\"localState.sourceSize\"\n\t\t\t\t gui-paging-navigator>\n\t\t\t</div>\n\n\t\t</ng-template>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"localState.isPagingVisible && localState.alternativeDisplay\">\n\n\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t [paging]=\"localState.paging\"\n\t\t\t gui-paging-select>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage(localState.sourceSize)\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"localState.paging\"\n\t\t\t [sourceSize]=\"localState.sourceSize\"\n\t\t\t class=\"gui-flex gui-p-0\"\n\t\t\t gui-paging-alternative-navigator>\n\n\t\t\t<div [paging]=\"localState.paging\"\n\t\t\t\t [sourceSize]=\"localState.sourceSize\"\n\t\t\t\t class=\"gui-flex gui-justify-center\"\n\t\t\t\t gui-paging-alternative-pages>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n</ng-container>\n", styles: [".gui-paging-alternative-navigator .gui-button{-ms-flex-line-pack:center;align-content:center;background:transparent;display:-ms-flexbox;display:flex;font-size:14px;line-height:21px;margin:0 2px;padding:0}.gui-paging-alternative-navigator .gui-button svg{-ms-flex-item-align:center;align-self:center;height:12px;margin:-1px 2px 0;width:auto}.gui-paging-alternative-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-paging-alternative-navigator .gui-button:hover svg path{stroke:#333}.gui-paging-alternative-navigator .gui-button:disabled svg{opacity:.4}.gui-paging-alternative-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging-alternative-pages{line-height:21px}.gui-paging-alternative-pages .gui-paging-page{display:none}.gui-paging-alternative-pages .gui-paging-visible-page .gui-paging-page{display:block;font-family:Arial,serif}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging-bottom{border-top:1px solid;border-top-color:inherit}.gui-paging-top{border-bottom:1px solid;border-bottom-color:inherit}\n", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:#2224261a;font-size:14px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.GuiState }, { type: i2.CssClassModifier }, { type: i3.StructureId }, { type: i4.PagingWarehouse }, { type: i5.PagingPublisher }, { type: i6.SourceWarehouse }, { type: i7.PagingDisplayModeArchive }]; }, propDecorators: { position: [{
                type: Input
            }], minimal: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9wYWdpbmcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL3BhZ2luZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQTJCekQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsWUFBWTtJQVVoRCxZQUE2QixLQUFpQixFQUMxQixLQUFxQyxFQUNyQyxnQkFBa0MsRUFDbEMsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsb0JBQXFDLEVBQ3JDLGVBQWdDLEVBQ2hDLHdCQUFrRDtRQUNyRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFSZSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWdDO1FBQ3JDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7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QUM7YUFDMUIsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQUVPLGtCQUFrQixDQUFDLE1BQW1CO1FBQzdDLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDbEMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMvRCxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU8sNkJBQTZCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QjthQUM5QixFQUFFLEVBQUU7YUFDSixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsSUFBdUIsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxLQUFLLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7NkdBOUZXLGVBQWU7aUdBQWYsZUFBZSwwR0FKaEI7UUFDVixRQUFRO0tBQ1Isc0VDeENGLHkwREFpRUE7NEZEdkJhLGVBQWU7a0JBYjNCLFNBQVM7K0JBQ0MsMkJBQTJCLG1CQU1wQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNWLFFBQVE7cUJBQ1I7a1RBS0QsUUFBUTtzQkFEUCxLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL21vZGVsL3BhZ2luZy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2FwaS9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL3BhZ2luZy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuaW1wb3J0IHsgUGFnaW5nUG9zaXRpb24gfSBmcm9tICcuL3BhZ2luZy1wb3NpdGlvbic7XG5pbXBvcnQgeyBDc3NDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NyYy9jc3MtY2xhc3MvY3NzLWNsYXNzLm1vZGlmaWVyJztcbmltcG9ydCB7IENzc0NsYXNzIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NyYy9jc3MtY2xhc3MvY3NzLWNsYXNzJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgR3VpU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9ndWktYW5ndWxhci9zdGF0ZS9ndWkuc3RhdGUnO1xuaW1wb3J0IHsgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luZ0NvbXBvbmVudFN0YXRlIHtcblxuXHRhbHRlcm5hdGl2ZURpc3BsYXk6IGJvb2xlYW47XG5cblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdHBhZ2luZzogUGFnaW5nTW9kZWw7XG5cblx0aXNQYWdpbmdWaXNpYmxlOiBib29sZWFuO1xuXG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nXVtwb3NpdGlvbl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvcGFnaW5nLmNvbXBvbmVudC5zY3NzJyxcblx0XHQnLi9zdHlsZS90aGVtZS9nZW5lcmljLnBhZ2luZy5jb21wb25lbnQuc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdEd1aVN0YXRlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29tcG9uZW50IGV4dGVuZHMgR3VpQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRwb3NpdGlvbiE6IFBhZ2luZ1Bvc2l0aW9uO1xuXG5cdEBJbnB1dCgpXG5cdG1pbmltYWw/OiBib29sZWFuO1xuXG5cdHJlYWRvbmx5IHN0YXRlJCA9IHRoaXMuc3RhdGUuc2VsZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZTogR3VpU3RhdGU8UGFnaW5nQ29tcG9uZW50U3RhdGU+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNzc0NsYXNzTW9kaWZpZXI6IENzc0NsYXNzTW9kaWZpZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWZsZXgnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktanVzdGlmeS1lbmQnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktaXRlbXMtY2VudGVyJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXAtNCcpO1xuXG5cdFx0dGhpcy5zdGF0ZS5zZXRWYWx1ZSh7XG5cdFx0XHRhbHRlcm5hdGl2ZURpc3BsYXk6IGZhbHNlLFxuXHRcdFx0aXNQYWdpbmdWaXNpYmxlOiBmYWxzZVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdzb3VyY2VTaXplJywgdGhpcy5zb3VyY2VXYXJlaG91c2Uub25PcmlnaW5TaXplKHRoaXMuc3RydWN0dXJlSWQpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ2FsdGVybmF0aXZlRGlzcGxheScsIHRoaXMuc2VsZWN0SXNBZHZhbmNlZFBhZ2luZ0VuYWJsZWQoKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdwYWdpbmcnLCB0aGlzLnBhZ2luZ1dhcmVob3VzZS5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdpc1BhZ2luZ1Zpc2libGUnLCB0aGlzLnNlbGVjdElzUGFnaW5nVmlzaWJsZSgpKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxQYWdpbmdDb21wb25lbnQ+KSB7XG5cblx0XHRpZiAoY2hhbmdlcy5wb3NpdGlvbikge1xuXG5cdFx0XHRpZiAodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfVE9QX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX0JPVFRPTV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfQk9UVE9NX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX1RPUF9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRuZXh0UGFnZShzb3VyY2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGlmICghc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIubmV4dFBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyLnByZXZQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZyc7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdElzUGFnaW5nVmlzaWJsZSgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdXYXJlaG91c2Vcblx0XHRcdFx0ICAgLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgocGFnaW5nOiBQYWdpbmdNb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMubWFwSXNQYWdpbmdWaXNpYmxlKHBhZ2luZyk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbWFwSXNQYWdpbmdWaXNpYmxlKHBhZ2luZzogUGFnaW5nTW9kZWwpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcGFnaW5nICYmIHBhZ2luZy5pc0VuYWJsZWQoKSAmJlxuXHRcdFx0KCgodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uVE9QKSAmJiBwYWdpbmcuaXNQYWdlclRvcCgpKSB8fFxuXHRcdFx0XHQoKHRoaXMucG9zaXRpb24gPT09IFBhZ2luZ1Bvc2l0aW9uLkJPVFRPTSkgJiYgcGFnaW5nLmlzUGFnZXJCb3R0b20oKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RJc0FkdmFuY2VkUGFnaW5nRW5hYmxlZCgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmVcblx0XHRcdFx0ICAgLm9uKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChtb2RlOiBQYWdpbmdEaXNwbGF5TW9kZSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1vZGUgPT09IFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqZ3VpTGV0PVwic3RhdGUkOyBsZXQgbG9jYWxTdGF0ZVwiPlxuXG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJsb2NhbFN0YXRlLmlzUGFnaW5nVmlzaWJsZSAmJiAhbG9jYWxTdGF0ZS5hbHRlcm5hdGl2ZURpc3BsYXlcIj5cblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhbWluaW1hbDsgZWxzZSBtaW5pbWFsVGVtcGxhdGVcIj5cblxuXHRcdFx0PGRpdiAocGFnZVNpemVDaGFuZ2VkKT1cImNoYW5nZVBhZ2VTaXplKCRldmVudClcIlxuXHRcdFx0XHQgW3BhZ2luZ109XCJsb2NhbFN0YXRlLnBhZ2luZ1wiXG5cdFx0XHRcdCBndWktcGFnaW5nLXNlbGVjdD5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IFtwYWdpbmddPVwibG9jYWxTdGF0ZS5wYWdpbmdcIlxuXHRcdFx0XHQgZ3VpLXBhZ2luZy1zdGF0cz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IChuZXh0UGFnZUNoYW5nZWQpPVwibmV4dFBhZ2UobG9jYWxTdGF0ZS5zb3VyY2VTaXplKVwiXG5cdFx0XHRcdCAocHJldlBhZ2VDaGFuZ2VkKT1cInByZXZQYWdlKClcIlxuXHRcdFx0XHQgW3BhZ2luZ109XCJsb2NhbFN0YXRlLnBhZ2luZ1wiXG5cdFx0XHRcdCBbc291cmNlU2l6ZV09XCJsb2NhbFN0YXRlLnNvdXJjZVNpemVcIlxuXHRcdFx0XHQgZ3VpLXBhZ2luZy1uYXZpZ2F0b3I+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNtaW5pbWFsVGVtcGxhdGU+XG5cblx0XHRcdDxkaXYgW3BhZ2luZ109XCJsb2NhbFN0YXRlLnBhZ2luZ1wiXG5cdFx0XHRcdCBndWktcGFnaW5nLXN0YXRzPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgKG5leHRQYWdlQ2hhbmdlZCk9XCJuZXh0UGFnZShsb2NhbFN0YXRlLnNvdXJjZVNpemUpXCJcblx0XHRcdFx0IChwcmV2UGFnZUNoYW5nZWQpPVwicHJldlBhZ2UoKVwiXG5cdFx0XHRcdCBbcGFnaW5nXT1cImxvY2FsU3RhdGUucGFnaW5nXCJcblx0XHRcdFx0IFtzb3VyY2VTaXplXT1cImxvY2FsU3RhdGUuc291cmNlU2l6ZVwiXG5cdFx0XHRcdCBndWktcGFnaW5nLW5hdmlnYXRvcj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHQ8L25nLWNvbnRhaW5lcj5cblxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwibG9jYWxTdGF0ZS5pc1BhZ2luZ1Zpc2libGUgJiYgbG9jYWxTdGF0ZS5hbHRlcm5hdGl2ZURpc3BsYXlcIj5cblxuXHRcdDxkaXYgKHBhZ2VTaXplQ2hhbmdlZCk9XCJjaGFuZ2VQYWdlU2l6ZSgkZXZlbnQpXCJcblx0XHRcdCBbcGFnaW5nXT1cImxvY2FsU3RhdGUucGFnaW5nXCJcblx0XHRcdCBndWktcGFnaW5nLXNlbGVjdD5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgKG5leHRQYWdlQ2hhbmdlZCk9XCJuZXh0UGFnZShsb2NhbFN0YXRlLnNvdXJjZVNpemUpXCJcblx0XHRcdCAocHJldlBhZ2VDaGFuZ2VkKT1cInByZXZQYWdlKClcIlxuXHRcdFx0IFtwYWdpbmddPVwibG9jYWxTdGF0ZS5wYWdpbmdcIlxuXHRcdFx0IFtzb3VyY2VTaXplXT1cImxvY2FsU3RhdGUuc291cmNlU2l6ZVwiXG5cdFx0XHQgY2xhc3M9XCJndWktZmxleCBndWktcC0wXCJcblx0XHRcdCBndWktcGFnaW5nLWFsdGVybmF0aXZlLW5hdmlnYXRvcj5cblxuXHRcdFx0PGRpdiBbcGFnaW5nXT1cImxvY2FsU3RhdGUucGFnaW5nXCJcblx0XHRcdFx0IFtzb3VyY2VTaXplXT1cImxvY2FsU3RhdGUuc291cmNlU2l6ZVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1mbGV4IGd1aS1qdXN0aWZ5LWNlbnRlclwiXG5cdFx0XHRcdCBndWktcGFnaW5nLWFsdGVybmF0aXZlLXBhZ2VzPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L2Rpdj5cblxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19