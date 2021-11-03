import { Component, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GuiGridGateway } from './gui.grid-gateway';
import { structureParentComponent } from '../../../../structure/grid/feature/structure-parent-component';
import { GuiGridApiProvider } from './api/gui.grid.api-provider';
import { GuiGridThemeCommandInvoker } from './theme/gui.grid.theme.command-invoker';
import { ClassModifier } from '../../../../common/cdk/dom/class/class-modifier';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
import { AttributeModifier } from '../../../../common/cdk/dom/attribute/attribute-modifier';
import { StructureDefinition } from '../../../../structure/grid/feature/structure-definition';
import { guiGridStructureDefinition } from './gui.grid-structure-definition';
import * as i0 from "@angular/core";
import * as i1 from "./register/gui.grid.register";
import * as i2 from "./register/gui.grid-id.generator";
import * as i3 from "../../../../structure/source/core/api/formation/formation.command-invoker";
import * as i4 from "../../../../structure/source/core/api/formation/formation.warehouse";
import * as i5 from "../../../../structure/source/core/api/source.command-invoker";
import * as i6 from "../../../../structure/search/core/api/search.command-invoker";
import * as i7 from "../../../../schema/core/api/schema.command-invoker";
import * as i8 from "../../../../structure/core/api/structure.command-invoker";
import * as i9 from "../../../../structure/summaries/core/api/summaries.command-invoker";
import * as i10 from "../../../../structure/sorting/core/api/sorting.command-invoker";
import * as i11 from "../../../../structure/paging/core/api/paging.command-invoker";
import * as i12 from "../../../../structure/grid/feature/structure.component";
import * as i13 from "../../../../structure/grid/feature/gate/column/header/structure-column-header.gate";
import * as i14 from "../../../../structure/grid/feature/gate/column/menu/structure-column-menu.gate";
import * as i15 from "../../../../structure/filter/feature/gate/structure-filter.gate";
import * as i16 from "../../../../structure/grid/feature/gate/panel/info/structure-info-panel.gate";
import * as i17 from "../../../../structure/grid/feature/gate/source/source-loading.gate";
import * as i18 from "../../../../structure/grid/feature/gate/l10n/structure-l10n.gate";
import * as i19 from "../../../../structure/grid/feature/gate/paging/structure-paging.gate";
import * as i20 from "../../../../structure/filter/feature/gate/structure-quick-filters.gate";
import * as i21 from "../../../../structure/grid/feature/gate/row/class/structure-row-class.gate";
import * as i22 from "../../../../structure/grid/feature/gate/row/coloring/structure-row-coloring.gate";
import * as i23 from "../../../../structure/grid/feature/gate/row/detail/structure-row-detail.gate";
import * as i24 from "../../../../structure/grid/feature/gate/source/structure-selection.gate";
import * as i25 from "../../../../structure/grid/feature/gate/row/style/structure-row-style.gate";
import * as i26 from "../../../../structure/grid/feature/gate/searching/structure-searching.gate";
import * as i27 from "../../../../structure/sorting/feature/gate/structure-sorting.gate";
import * as i28 from "../../../../structure/summaries/feature/gate/structure-summaries.gate";
import * as i29 from "../../../../structure/grid/feature/gate/panel/structure-panel.gate";
import * as i30 from "../../../../schema/feature/gate/grid/theme-grid.gate";
import * as i31 from "../../../../structure/vertical-formation/feature/gate/vertical-formation.gate";
const _c0 = ["structure"];
export class GuiGridComponent extends GuiGridGateway {
    constructor(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator, 
    // delegate
    formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher, searchCommandInvoker, schemaCommandInvoker, structureCommandDispatcher, summariesCommandInvoker, sortingCommandInvoker, pagingCommandInvoker) {
        super();
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.gridRegister = gridRegister;
        this.gridIdGenerator = gridIdGenerator;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.sourceCommandDispatcher = sourceCommandDispatcher;
        this.searchCommandInvoker = searchCommandInvoker;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.structureCommandDispatcher = structureCommandDispatcher;
        this.summariesCommandInvoker = summariesCommandInvoker;
        this.sortingCommandInvoker = sortingCommandInvoker;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.gridThemeCommandInvoker = new GuiGridThemeCommandInvoker(this.schemaCommandInvoker, this.gridThemeConverter, this.gridRowColoringConverter);
        this.classModifier = new ClassModifier(this.elementRef.nativeElement);
        this.styleModifier = new StyleModifier(this.elementRef.nativeElement);
        this.attributeModifier = new AttributeModifier(this.elementRef.nativeElement);
    }
    ngOnInit() {
        this.classModifier.getHost().add('gui-grid');
        // this.styleModifier.getHost().setHeight(this.maxHeight);
        this.initApi();
        let gridId = this.gridId;
        if (gridId === undefined) {
            gridId = this.gridIdGenerator.generateId();
        }
        this.localGridId = gridId;
        this.exposeGridId();
        // register
        this.gridRegister.register(gridId, this, this.structureRef.getStructureId());
        if (isPlatformBrowser(this.platformId)) {
            window['getGuiGrid'] = (gridId) => {
                const gridConsoleConfig = this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return this.api;
                }
                else {
                    return undefined;
                }
            };
        }
    }
    ngOnDestroy() {
        this.gridRegister.unregister(this.localGridId);
    }
    getElementRef() {
        return this.elementRef;
    }
    getGridId() {
        return '';
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    exposeGridId() {
        this.attributeModifier.getHost().setAttribute(GuiGridComponent.GUI_GRID_ID, this.localGridId);
    }
    initApi() {
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker, this.structureCommandDispatcher, this.summariesCommandInvoker, this.sortingCommandInvoker, this.pagingCommandInvoker).provide();
    }
}
GuiGridComponent.GUI_GRID_ID = 'gui-grid-id';
GuiGridComponent.ɵfac = function GuiGridComponent_Factory(t) { return new (t || GuiGridComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.GuiGridRegister), i0.ɵɵdirectiveInject(i2.GuiGridIdGenerator), i0.ɵɵdirectiveInject(i3.FormationCommandInvoker), i0.ɵɵdirectiveInject(i4.FormationWarehouse), i0.ɵɵdirectiveInject(i5.SourceCommandInvoker), i0.ɵɵdirectiveInject(i6.SearchCommandInvoker), i0.ɵɵdirectiveInject(i7.SchemaCommandInvoker), i0.ɵɵdirectiveInject(i8.StructureCommandInvoker), i0.ɵɵdirectiveInject(i9.SummariesCommandInvoker), i0.ɵɵdirectiveInject(i10.SortingCommandInvoker), i0.ɵɵdirectiveInject(i11.PagingCommandInvoker)); };
GuiGridComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GuiGridComponent, selectors: [["gui-grid"]], viewQuery: function GuiGridComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structureRef = _t.first);
    } }, inputs: { gridId: "gridId" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: StructureDefinition,
                useValue: guiGridStructureDefinition
            },
            {
                provide: structureParentComponent,
                useExisting: GuiGridComponent
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 31, consts: [[3, "autoResizeWidth", "cellEditing", "columnHeaderBottom", "columnHeaderTop", "columnMenu", "columns", "editMode", "filtering", "footerPanel", "horizontalGrid", "infoPanel", "loading", "localization", "maxHeight", "paging", "quickFilters", "rowClass", "rowColoring", "rowDetail", "rowHeight", "rowSelection", "rowStyle", "searching", "sorting", "source", "summaries", "theme", "titlePanel", "verticalGrid", "virtualScroll", "width", "cellEditCanceled", "cellEditEntered", "cellEditSubmitted", "columnsChanged", "containerWidthChanged", "horizontalGridChanged", "itemsSelected", "pageChanged", "pageSizeChanged", "rowColoringChanged", "searchPhraseChanged", "selectedRows", "sourceEdited", "themeChanged", "verticalGridChanged"], ["structure", ""]], template: function GuiGridComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "gui-structure", 0, 1);
        i0.ɵɵlistener("cellEditCanceled", function GuiGridComponent_Template_gui_structure_cellEditCanceled_0_listener() { return ctx.onCellEditCancel(); })("cellEditEntered", function GuiGridComponent_Template_gui_structure_cellEditEntered_0_listener() { return ctx.onCellEditEnter(); })("cellEditSubmitted", function GuiGridComponent_Template_gui_structure_cellEditSubmitted_0_listener() { return ctx.onCellEditSubmit(); })("columnsChanged", function GuiGridComponent_Template_gui_structure_columnsChanged_0_listener() { return ctx.onColumnsChange(); })("containerWidthChanged", function GuiGridComponent_Template_gui_structure_containerWidthChanged_0_listener($event) { return ctx.onContainerWidthChange($event); })("horizontalGridChanged", function GuiGridComponent_Template_gui_structure_horizontalGridChanged_0_listener($event) { return ctx.onHorizontalGrid($event); })("itemsSelected", function GuiGridComponent_Template_gui_structure_itemsSelected_0_listener($event) { return ctx.onItemSelect($event); })("pageChanged", function GuiGridComponent_Template_gui_structure_pageChanged_0_listener($event) { return ctx.onPageChange($event); })("pageSizeChanged", function GuiGridComponent_Template_gui_structure_pageSizeChanged_0_listener($event) { return ctx.onPageSizeChange($event); })("rowColoringChanged", function GuiGridComponent_Template_gui_structure_rowColoringChanged_0_listener($event) { return ctx.onRowColoring($event); })("searchPhraseChanged", function GuiGridComponent_Template_gui_structure_searchPhraseChanged_0_listener($event) { return ctx.onSearchPhrase($event); })("selectedRows", function GuiGridComponent_Template_gui_structure_selectedRows_0_listener($event) { return ctx.onRowsSelect($event); })("sourceEdited", function GuiGridComponent_Template_gui_structure_sourceEdited_0_listener($event) { return ctx.onSourceEdit($event); })("themeChanged", function GuiGridComponent_Template_gui_structure_themeChanged_0_listener($event) { return ctx.onTheme($event); })("verticalGridChanged", function GuiGridComponent_Template_gui_structure_verticalGridChanged_0_listener($event) { return ctx.onVerticalGrid($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("autoResizeWidth", ctx.autoResizeWidth)("cellEditing", ctx.cellEditingConfig)("columnHeaderBottom", ctx.columnHeaderBottom)("columnHeaderTop", ctx.columnHeaderTop)("columnMenu", ctx.columnMenuConfig)("columns", ctx.columnsConfig)("editMode", ctx.editMode)("filtering", ctx.filtering)("footerPanel", ctx.footerPanel)("horizontalGrid", ctx.horizontalGrid)("infoPanel", ctx.infoPanel)("loading", ctx.loading)("localization", ctx.localization)("maxHeight", ctx.maxHeight)("paging", ctx.paging)("quickFilters", ctx.quickFilters)("rowClass", ctx.rowClass)("rowColoring", ctx.rowColoringConfig)("rowDetail", ctx.rowDetail)("rowHeight", ctx.rowHeight)("rowSelection", ctx.rowSelectionConfig)("rowStyle", ctx.rowStyle)("searching", ctx.searching)("sorting", ctx.sorting)("source", ctx.source)("summaries", ctx.summaries)("theme", ctx.themeConfig)("titlePanel", ctx.titlePanel)("verticalGrid", ctx.verticalGrid)("virtualScroll", ctx.virtualScroll)("width", ctx.width);
    } }, directives: [i12.StructureComponent, i13.StructureColumnHeaderGate, i14.StructureColumnMenuGate, i15.StructureFilterGate, i16.StructureInfoPanelGate, i17.SourceLoadingGate, i18.StructureL10nGate, i19.StructurePagingGate, i20.StructureQuickFiltersGate, i21.StructureRowClassGate, i22.StructureRowColoringGate, i23.StructureRowDetailGate, i24.StructureSelectionGate, i25.StructureRowStyleGate, i26.StructureSearchingGate, i27.StructureSortingGate, i28.StructureSummariesGate, i29.StructurePanelGate, i30.ThemeGridGate, i31.VerticalFormationGate], styles: [".gui-grid{display:block;width:100%}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuiGridComponent, [{
        type: Component,
        args: [{
                selector: 'gui-grid',
                templateUrl: './gui.grid.component.html',
                styleUrls: [
                    '../gui.grid.ngx.scss'
                ],
                providers: [
                    {
                        provide: StructureDefinition,
                        useValue: guiGridStructureDefinition
                    },
                    {
                        provide: structureParentComponent,
                        useExisting: GuiGridComponent
                    }
                ],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.GuiGridRegister }, { type: i2.GuiGridIdGenerator }, { type: i3.FormationCommandInvoker }, { type: i4.FormationWarehouse }, { type: i5.SourceCommandInvoker }, { type: i6.SearchCommandInvoker }, { type: i7.SchemaCommandInvoker }, { type: i8.StructureCommandInvoker }, { type: i9.SummariesCommandInvoker }, { type: i10.SortingCommandInvoker }, { type: i11.PagingCommandInvoker }]; }, { structureRef: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }], gridId: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBcUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFJekcsT0FBTyxFQUFjLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUk1RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CN0UsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGNBQWM7SUFzQm5E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bWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFBMQVRGT1JNX0lELCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEd1aUdyaWRHYXRld2F5IH0gZnJvbSAnLi9ndWkuZ3JpZC1nYXRld2F5JztcblxuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aUdyaWRJZEdlbmVyYXRvciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEd1aUdyaWRSZWdpc3RlciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQucmVnaXN0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZEFwaSwgR3VpR3JpZEFwaVByb3ZpZGVyIH0gZnJvbSAnLi9hcGkvZ3VpLmdyaWQuYXBpLXByb3ZpZGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vc3R5bGUvc3R5bGUtbW9kaWZpZXInO1xuaW1wb3J0IHsgQXR0cmlidXRlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9hdHRyaWJ1dGUvYXR0cmlidXRlLW1vZGlmaWVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2FwaS9zdW1tYXJpZXMuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IGd1aUdyaWRTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi9ndWkuZ3JpZC1zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ncmlkJyxcblx0dGVtcGxhdGVVcmw6ICcuL2d1aS5ncmlkLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4uL2d1aS5ncmlkLm5neC5zY3NzJ1xuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdFx0dXNlVmFsdWU6IGd1aUdyaWRTdHJ1Y3R1cmVEZWZpbml0aW9uXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQsXG5cdFx0XHR1c2VFeGlzdGluZzogR3VpR3JpZENvbXBvbmVudFxuXHRcdH1cblx0XSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29tcG9uZW50IGV4dGVuZHMgR3VpR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgR1VJX0dSSURfSUQgPSAnZ3VpLWdyaWQtaWQnO1xuXG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdHN0cnVjdHVyZVJlZjogYW55O1xuXG5cdEBJbnB1dCgpXG5cdGdyaWRJZDogc3RyaW5nOyAvLyBjYW4gYmUgc2V0IG9uY2VcblxuXHRwdWJsaWMgYXBpOiBHdWlHcmlkQXBpO1xuXG5cdHByaXZhdGUgbG9jYWxHcmlkSWQ6IHN0cmluZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHlsZU1vZGlmaWVyOiBTdHlsZU1vZGlmaWVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXR0cmlidXRlTW9kaWZpZXI6IEF0dHJpYnV0ZU1vZGlmaWVyO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRSZWdpc3RlcjogR3VpR3JpZFJlZ2lzdGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRJZEdlbmVyYXRvcjogR3VpR3JpZElkR2VuZXJhdG9yLFxuXHRcdFx0XHQvLyBkZWxlZ2F0ZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kRGlzcGF0Y2hlcjogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzQ29tbWFuZEludm9rZXI6IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRpbmdDb21tYW5kSW52b2tlcjogU29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdDb21tYW5kSW52b2tlclxuXHQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IG5ldyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcihcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbnZlcnRlcixcblx0XHRcdHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyXG5cdFx0KTtcblxuXHRcdHRoaXMuY2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIgPSBuZXcgU3R5bGVNb2RpZmllcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0dGhpcy5hdHRyaWJ1dGVNb2RpZmllciA9IG5ldyBBdHRyaWJ1dGVNb2RpZmllcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKCdndWktZ3JpZCcpO1xuXHRcdC8vIHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0SGVpZ2h0KHRoaXMubWF4SGVpZ2h0KTtcblxuXHRcdHRoaXMuaW5pdEFwaSgpO1xuXG5cdFx0bGV0IGdyaWRJZCA9IHRoaXMuZ3JpZElkO1xuXG5cdFx0aWYgKGdyaWRJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRncmlkSWQgPSB0aGlzLmdyaWRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2NhbEdyaWRJZCA9IGdyaWRJZDtcblxuXHRcdHRoaXMuZXhwb3NlR3JpZElkKCk7XG5cblx0XHQvLyByZWdpc3RlclxuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnJlZ2lzdGVyKGdyaWRJZCwgdGhpcywgdGhpcy5zdHJ1Y3R1cmVSZWYuZ2V0U3RydWN0dXJlSWQoKSk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydnZXRHdWlHcmlkJ10gPSAoZ3JpZElkOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRjb25zdCBncmlkQ29uc29sZUNvbmZpZyA9IHRoaXMuZ3JpZFJlZ2lzdGVyLmdldFZhbHVlcyhncmlkSWQpO1xuXG5cdFx0XHRcdGlmIChncmlkQ29uc29sZUNvbmZpZykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFwaTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnVucmVnaXN0ZXIodGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxuXHRnZXRHcmlkSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBleHBvc2VHcmlkSWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVNb2RpZmllci5nZXRIb3N0KCkuc2V0QXR0cmlidXRlKEd1aUdyaWRDb21wb25lbnQuR1VJX0dSSURfSUQsIHRoaXMubG9jYWxHcmlkSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0QXBpKCk6IHZvaWQge1xuXHRcdHRoaXMuYXBpID0gbmV3IEd1aUdyaWRBcGlQcm92aWRlcihcblx0XHRcdHRoaXMuc3RydWN0dXJlUmVmLnN0cnVjdHVyZUlkLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLnNvcnRpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXJcblx0XHQpLnByb3ZpZGUoKTtcblx0fVxuXG59XG4iLCI8Z3VpLXN0cnVjdHVyZVxuXHQjc3RydWN0dXJlXG5cdChjZWxsRWRpdENhbmNlbGVkKT1cIm9uQ2VsbEVkaXRDYW5jZWwoKVwiXG5cdChjZWxsRWRpdEVudGVyZWQpPVwib25DZWxsRWRpdEVudGVyKClcIlxuXHQoY2VsbEVkaXRTdWJtaXR0ZWQpPVwib25DZWxsRWRpdFN1Ym1pdCgpXCJcblx0KGNvbHVtbnNDaGFuZ2VkKT1cIm9uQ29sdW1uc0NoYW5nZSgpXCJcblx0KGNvbnRhaW5lcldpZHRoQ2hhbmdlZCk9XCJvbkNvbnRhaW5lcldpZHRoQ2hhbmdlKCRldmVudClcIlxuXHQoaG9yaXpvbnRhbEdyaWRDaGFuZ2VkKT1cIm9uSG9yaXpvbnRhbEdyaWQoJGV2ZW50KVwiXG5cdChpdGVtc1NlbGVjdGVkKT1cIm9uSXRlbVNlbGVjdCgkZXZlbnQpXCJcblx0KHBhZ2VDaGFuZ2VkKT1cIm9uUGFnZUNoYW5nZSgkZXZlbnQpXCJcblx0KHBhZ2VTaXplQ2hhbmdlZCk9XCJvblBhZ2VTaXplQ2hhbmdlKCRldmVudClcIlxuXHQocm93Q29sb3JpbmdDaGFuZ2VkKT1cIm9uUm93Q29sb3JpbmcoJGV2ZW50KVwiXG5cdChzZWFyY2hQaHJhc2VDaGFuZ2VkKT1cIm9uU2VhcmNoUGhyYXNlKCRldmVudClcIlxuXHQoc2VsZWN0ZWRSb3dzKT1cIm9uUm93c1NlbGVjdCgkZXZlbnQpXCJcblxuXHQoc291cmNlRWRpdGVkKT1cIm9uU291cmNlRWRpdCgkZXZlbnQpXCJcblx0KHRoZW1lQ2hhbmdlZCk9XCJvblRoZW1lKCRldmVudClcIlxuXHQodmVydGljYWxHcmlkQ2hhbmdlZCk9XCJvblZlcnRpY2FsR3JpZCgkZXZlbnQpXCJcblx0W2F1dG9SZXNpemVXaWR0aF09XCJhdXRvUmVzaXplV2lkdGhcIlxuXHRbY2VsbEVkaXRpbmddPVwiY2VsbEVkaXRpbmdDb25maWdcIlxuXHRbY29sdW1uSGVhZGVyQm90dG9tXT1cImNvbHVtbkhlYWRlckJvdHRvbVwiXG5cdFtjb2x1bW5IZWFkZXJUb3BdPVwiY29sdW1uSGVhZGVyVG9wXCJcblx0W2NvbHVtbk1lbnVdPVwiY29sdW1uTWVudUNvbmZpZ1wiXG5cdFtjb2x1bW5zXT1cImNvbHVtbnNDb25maWdcIlxuXHRbZWRpdE1vZGVdPVwiZWRpdE1vZGVcIlxuXHRbZmlsdGVyaW5nXT1cImZpbHRlcmluZ1wiXG5cdFtmb290ZXJQYW5lbF09XCJmb290ZXJQYW5lbFwiXG5cdFtob3Jpem9udGFsR3JpZF09XCJob3Jpem9udGFsR3JpZFwiXG5cdFtpbmZvUGFuZWxdPVwiaW5mb1BhbmVsXCJcblx0W2xvYWRpbmddPVwibG9hZGluZ1wiXG5cdFtsb2NhbGl6YXRpb25dPVwibG9jYWxpemF0aW9uXCJcblx0W21heEhlaWdodF09XCJtYXhIZWlnaHRcIlxuXHRbcGFnaW5nXT1cInBhZ2luZ1wiXG5cdFtxdWlja0ZpbHRlcnNdPVwicXVpY2tGaWx0ZXJzXCJcblx0W3Jvd0NsYXNzXT1cInJvd0NsYXNzXCJcblx0W3Jvd0NvbG9yaW5nXT1cInJvd0NvbG9yaW5nQ29uZmlnXCJcblx0W3Jvd0RldGFpbF09XCJyb3dEZXRhaWxcIlxuXHRbcm93SGVpZ2h0XT1cInJvd0hlaWdodFwiXG5cdFtyb3dTZWxlY3Rpb25dPVwicm93U2VsZWN0aW9uQ29uZmlnXCJcblx0W3Jvd1N0eWxlXT1cInJvd1N0eWxlXCJcblx0W3NlYXJjaGluZ109XCJzZWFyY2hpbmdcIlxuXHRbc29ydGluZ109XCJzb3J0aW5nXCJcblx0W3NvdXJjZV09XCJzb3VyY2VcIlxuXHRbc3VtbWFyaWVzXT1cInN1bW1hcmllc1wiXG5cdFt0aGVtZV09XCJ0aGVtZUNvbmZpZ1wiXG5cdFt0aXRsZVBhbmVsXT1cInRpdGxlUGFuZWxcIlxuXHRbdmVydGljYWxHcmlkXT1cInZlcnRpY2FsR3JpZFwiXG5cdFt2aXJ0dWFsU2Nyb2xsXT1cInZpcnR1YWxTY3JvbGxcIlxuXHRbd2lkdGhdPVwid2lkdGhcIlxuPlxuPC9ndWktc3RydWN0dXJlPlxuIl19