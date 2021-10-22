/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GuiGridGateway } from './gui.grid-gateway';
import { guiGridProviders } from './gui.grid.providers';
import { structureParentComponent } from '../../../../structure/grid/feature/structure-parent-component';
import { GuiGridIdGenerator } from './register/gui.grid-id.generator';
import { GuiGridRegister } from './register/gui.grid.register';
import { GuiGridApiProvider } from './api/gui.grid.api-provider';
import { FormationCommandInvoker } from '../../../../structure/source/core/api/formation/formation.command-invoker';
import { SourceCommandInvoker } from '../../../../structure/source/core/api/source.command-invoker';
import { FormationWarehouse } from '../../../../structure/source/core/api/formation/formation.warehouse';
import { SearchCommandInvoker } from '../../../../structure/search/core/api/search.command-invoker';
import { GuiGridThemeCommandInvoker } from './theme/gui.grid.theme.command-invoker';
import { SchemaCommandInvoker } from '../../../../schema/core/api/schema.command-invoker';
import { StructureCommandInvoker } from '../../../../structure/core/api/structure.command-invoker';
import { ClassModifier } from '../../../../common/cdk/dom/class/class-modifier';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
import { AttributeModifier } from '../../../../common/cdk/dom/attribute/attribute-modifier';
import { PagingCommandInvoker } from '../../../../structure/paging/core/api/paging.command-invoker';
import { SummariesCommandInvoker } from '../../../../structure/summaries/core/api/summaries.command-invoker';
import { SortingCommandInvoker } from '../../../../structure/sorting/core/api/sorting.command-invoker';
export class GuiGridComponent extends GuiGridGateway {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} gridRegister
     * @param {?} gridIdGenerator
     * @param {?} formationCommandDispatcher
     * @param {?} formationWarehouse
     * @param {?} sourceCommandDispatcher
     * @param {?} searchCommandInvoker
     * @param {?} schemaCommandInvoker
     * @param {?} structureCommandDispatcher
     * @param {?} summariesCommandInvoker
     * @param {?} sortingCommandInvoker
     * @param {?} pagingCommandInvoker
     */
    constructor(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator, formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher, searchCommandInvoker, schemaCommandInvoker, structureCommandDispatcher, summariesCommandInvoker, sortingCommandInvoker, pagingCommandInvoker) {
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.classModifier.getHost().add('gui-grid');
        // this.styleModifier.getHost().setHeight(this.maxHeight);
        this.initApi();
        /** @type {?} */
        let gridId = this.gridId;
        if (gridId === undefined) {
            gridId = this.gridIdGenerator.generateId();
        }
        this.localGridId = gridId;
        this.exposeGridId();
        // register
        this.gridRegister.register(gridId, this, this.structureRef.getStructureId());
        if (isPlatformBrowser(this.platformId)) {
            window['getGuiGrid'] = (/**
             * @param {?} gridId
             * @return {?}
             */
            (gridId) => {
                /** @type {?} */
                const gridConsoleConfig = this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return this.api;
                }
                else {
                    return undefined;
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.gridRegister.unregister(this.localGridId);
    }
    /**
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
    }
    /**
     * @return {?}
     */
    getGridId() {
        return '';
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    exposeGridId() {
        this.attributeModifier.getHost().setAttribute(GuiGridComponent.GUI_GRID_ID, this.localGridId);
    }
    /**
     * @private
     * @return {?}
     */
    initApi() {
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker, this.structureCommandDispatcher, this.summariesCommandInvoker, this.sortingCommandInvoker, this.pagingCommandInvoker).provide();
    }
}
GuiGridComponent.GUI_GRID_ID = 'gui-grid-id';
GuiGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-grid',
                template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(selectedRows)=\"onRowsSelect($event)\"\n\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[localization]=\"localization\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowClass]=\"rowClass\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelection]=\"rowSelectionConfig\"\n\t[rowStyle]=\"rowStyle\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
                providers: [
                    ...guiGridProviders,
                    {
                        provide: structureParentComponent,
                        useExisting: GuiGridComponent
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-grid{display:block;width:100%}"]
            }] }
];
/** @nocollapse */
GuiGridComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: GuiGridRegister },
    { type: GuiGridIdGenerator },
    { type: FormationCommandInvoker },
    { type: FormationWarehouse },
    { type: SourceCommandInvoker },
    { type: SearchCommandInvoker },
    { type: SchemaCommandInvoker },
    { type: StructureCommandInvoker },
    { type: SummariesCommandInvoker },
    { type: SortingCommandInvoker },
    { type: PagingCommandInvoker }
];
GuiGridComponent.propDecorators = {
    structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
    gridId: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.GUI_GRID_ID;
    /** @type {?} */
    GuiGridComponent.prototype.structureRef;
    /** @type {?} */
    GuiGridComponent.prototype.gridId;
    /** @type {?} */
    GuiGridComponent.prototype.api;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.localGridId;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.gridThemeCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.classModifier;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.styleModifier;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.attributeModifier;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.gridRegister;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.gridIdGenerator;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.formationWarehouse;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.sourceCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.searchCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.schemaCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.structureCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.summariesCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.sortingCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.pagingCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RKLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUV6RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFjLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDcEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDekcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQWlCdkcsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JuRCxZQUFrRCxVQUFlLEVBQzdDLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxZQUE2QixFQUM3QixlQUFtQyxFQUVuQywwQkFBbUQsRUFDbkQsa0JBQXNDLEVBQ3RDLHVCQUE2QyxFQUM3QyxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzFDLDBCQUFtRCxFQUNuRCx1QkFBZ0QsRUFDaEQscUJBQTRDLEVBQzVDLG9CQUEwQztRQUU3RCxLQUFLLEVBQUUsQ0FBQztRQWhCeUMsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzdCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUVuQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXlCO1FBQ25ELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUM3Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUF5QjtRQUNuRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUk3RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSwwQkFBMEIsQ0FDNUQsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyx3QkFBd0IsQ0FDN0IsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLDBEQUEwRDtRQUUxRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBRVgsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXhCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixXQUFXO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFN0UsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7OztZQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7O3NCQUVuQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBRTdELElBQUksaUJBQWlCLEVBQUU7b0JBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDaEI7cUJBQU07b0JBQ04sT0FBTyxTQUFTLENBQUM7aUJBQ2pCO1lBQ0YsQ0FBQyxDQUFBLENBQUM7U0FDRjtJQUNGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVPLFlBQVk7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRU8sT0FBTztRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxrQkFBa0IsQ0FDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQ3ZDLElBQUksQ0FBQywwQkFBMEIsRUFDL0IsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsdUJBQXVCLEVBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixJQUFJLENBQUMsMEJBQTBCLEVBQy9CLElBQUksQ0FBQyx1QkFBdUIsRUFDNUIsSUFBSSxDQUFDLHFCQUFxQixFQUMxQixJQUFJLENBQUMsb0JBQW9CLENBQ3pCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDYixDQUFDOztBQXJIdUIsNEJBQVcsR0FBRyxhQUFhLENBQUM7O1lBakJwRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDR0REFBd0M7Z0JBSXhDLFNBQVMsRUFBRTtvQkFDVixHQUFHLGdCQUFnQjtvQkFDbkI7d0JBQ0MsT0FBTyxFQUFFLHdCQUF3Qjt3QkFDakMsV0FBVyxFQUFFLGdCQUFnQjtxQkFDN0I7aUJBQ0Q7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7OzRDQXVCYSxNQUFNLFNBQUMsV0FBVztZQTlETyxVQUFVO1lBQXhDLGlCQUFpQjtZQVNqQixlQUFlO1lBRGYsa0JBQWtCO1lBR2xCLHVCQUF1QjtZQUV2QixrQkFBa0I7WUFEbEIsb0JBQW9CO1lBRXBCLG9CQUFvQjtZQUVwQixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBS3ZCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFGckIsb0JBQW9COzs7MkJBdUIzQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFHdkMsS0FBSzs7Ozs7OztJQUxOLDZCQUFvRDs7SUFFcEQsd0NBQ2tCOztJQUVsQixrQ0FDZTs7SUFFZiwrQkFBdUI7Ozs7O0lBRXZCLHVDQUE0Qjs7Ozs7SUFFNUIsbURBQXFFOzs7OztJQUVyRSx5Q0FBOEM7Ozs7O0lBRTlDLHlDQUE4Qzs7Ozs7SUFFOUMsNkNBQXNEOzs7OztJQUUxQyxzQ0FBcUQ7Ozs7O0lBQzlELHNDQUF1Qzs7Ozs7SUFDdkMsNkNBQXFEOzs7OztJQUNyRCx3Q0FBOEM7Ozs7O0lBQzlDLDJDQUFvRDs7Ozs7SUFFcEQsc0RBQW9FOzs7OztJQUNwRSw4Q0FBdUQ7Ozs7O0lBQ3ZELG1EQUE4RDs7Ozs7SUFDOUQsZ0RBQTJEOzs7OztJQUMzRCxnREFBMkQ7Ozs7O0lBQzNELHNEQUFvRTs7Ozs7SUFDcEUsbURBQWlFOzs7OztJQUNqRSxpREFBNkQ7Ozs7O0lBQzdELGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBQTEFURk9STV9JRCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHdWlHcmlkR2F0ZXdheSB9IGZyb20gJy4vZ3VpLmdyaWQtZ2F0ZXdheSc7XG5pbXBvcnQgeyBndWlHcmlkUHJvdmlkZXJzIH0gZnJvbSAnLi9ndWkuZ3JpZC5wcm92aWRlcnMnO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi9yZWdpc3Rlci9ndWkuZ3JpZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgR3VpR3JpZFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlcic7XG5pbXBvcnQgeyBHdWlHcmlkQXBpLCBHdWlHcmlkQXBpUHJvdmlkZXIgfSBmcm9tICcuL2FwaS9ndWkuZ3JpZC5hcGktcHJvdmlkZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyJztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9zdHlsZS9zdHlsZS1tb2RpZmllcic7XG5pbXBvcnQgeyBBdHRyaWJ1dGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL2F0dHJpYnV0ZS9hdHRyaWJ1dGUtbW9kaWZpZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvYXBpL3N1bW1hcmllcy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU29ydGluZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZ3JpZCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9ndWkuZ3JpZC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuLi9ndWkuZ3JpZC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uZ3VpR3JpZFByb3ZpZGVycyxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQsXG5cdFx0XHR1c2VFeGlzdGluZzogR3VpR3JpZENvbXBvbmVudFxuXHRcdH1cblx0XSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29tcG9uZW50IGV4dGVuZHMgR3VpR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgR1VJX0dSSURfSUQgPSAnZ3VpLWdyaWQtaWQnO1xuXG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdHN0cnVjdHVyZVJlZjogYW55O1xuXG5cdEBJbnB1dCgpXG5cdGdyaWRJZDogc3RyaW5nOyAvLyBjYW4gYmUgc2V0IG9uY2VcblxuXHRwdWJsaWMgYXBpOiBHdWlHcmlkQXBpO1xuXG5cdHByaXZhdGUgbG9jYWxHcmlkSWQ6IHN0cmluZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHlsZU1vZGlmaWVyOiBTdHlsZU1vZGlmaWVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXR0cmlidXRlTW9kaWZpZXI6IEF0dHJpYnV0ZU1vZGlmaWVyO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRSZWdpc3RlcjogR3VpR3JpZFJlZ2lzdGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRJZEdlbmVyYXRvcjogR3VpR3JpZElkR2VuZXJhdG9yLFxuXHRcdFx0XHQvLyBkZWxlZ2F0ZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kRGlzcGF0Y2hlcjogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzQ29tbWFuZEludm9rZXI6IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRpbmdDb21tYW5kSW52b2tlcjogU29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdDb21tYW5kSW52b2tlclxuXHQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IG5ldyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcihcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbnZlcnRlcixcblx0XHRcdHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyXG5cdFx0KTtcblxuXHRcdHRoaXMuY2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIgPSBuZXcgU3R5bGVNb2RpZmllcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0dGhpcy5hdHRyaWJ1dGVNb2RpZmllciA9IG5ldyBBdHRyaWJ1dGVNb2RpZmllcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKCdndWktZ3JpZCcpO1xuXHRcdC8vIHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0SGVpZ2h0KHRoaXMubWF4SGVpZ2h0KTtcblxuXHRcdHRoaXMuaW5pdEFwaSgpO1xuXG5cdFx0bGV0IGdyaWRJZCA9IHRoaXMuZ3JpZElkO1xuXG5cdFx0aWYgKGdyaWRJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRncmlkSWQgPSB0aGlzLmdyaWRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2NhbEdyaWRJZCA9IGdyaWRJZDtcblxuXHRcdHRoaXMuZXhwb3NlR3JpZElkKCk7XG5cblx0XHQvLyByZWdpc3RlclxuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnJlZ2lzdGVyKGdyaWRJZCwgdGhpcywgdGhpcy5zdHJ1Y3R1cmVSZWYuZ2V0U3RydWN0dXJlSWQoKSk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydnZXRHdWlHcmlkJ10gPSAoZ3JpZElkOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRjb25zdCBncmlkQ29uc29sZUNvbmZpZyA9IHRoaXMuZ3JpZFJlZ2lzdGVyLmdldFZhbHVlcyhncmlkSWQpO1xuXG5cdFx0XHRcdGlmIChncmlkQ29uc29sZUNvbmZpZykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFwaTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnVucmVnaXN0ZXIodGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxuXHRnZXRHcmlkSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBleHBvc2VHcmlkSWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVNb2RpZmllci5nZXRIb3N0KCkuc2V0QXR0cmlidXRlKEd1aUdyaWRDb21wb25lbnQuR1VJX0dSSURfSUQsIHRoaXMubG9jYWxHcmlkSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0QXBpKCk6IHZvaWQge1xuXHRcdHRoaXMuYXBpID0gbmV3IEd1aUdyaWRBcGlQcm92aWRlcihcblx0XHRcdHRoaXMuc3RydWN0dXJlUmVmLnN0cnVjdHVyZUlkLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLnNvcnRpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXJcblx0XHQpLnByb3ZpZGUoKTtcblx0fVxuXG59XG4iXX0=