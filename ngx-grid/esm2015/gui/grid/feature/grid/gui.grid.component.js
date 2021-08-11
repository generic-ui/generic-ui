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
import { StructureCommandDispatcher } from '../../../../structure/core/api/structure.command-dispatcher';
import { ClassModifier } from '../../../../common/cdk/dom/class/class-modifier';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
import { AttributeModifier } from '../../../../common/cdk/dom/attribute/attribute-modifier';
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
     */
    constructor(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator, formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher, searchCommandInvoker, schemaCommandInvoker, structureCommandDispatcher) {
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
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker, this.structureCommandDispatcher).provide();
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
    { type: StructureCommandDispatcher }
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
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.localGridId;
    /** @type {?} */
    GuiGridComponent.prototype.api;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04saUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFFekcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBYyxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFpQjVGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjOzs7Ozs7Ozs7Ozs7OztJQXNCbkQsWUFBa0QsVUFBZSxFQUM3QyxVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsWUFBNkIsRUFDN0IsZUFBbUMsRUFFbkMsMEJBQW1ELEVBQ25ELGtCQUFzQyxFQUN0Qyx1QkFBNkMsRUFDN0Msb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQywwQkFBc0Q7UUFFekUsS0FBSyxFQUFFLENBQUM7UUFieUMsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzdCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUVuQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXlCO1FBQ25ELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUM3Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUl6RSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSwwQkFBMEIsQ0FDNUQsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyx3QkFBd0IsQ0FDN0IsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLDBEQUEwRDtRQUUxRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBRVgsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXhCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixXQUFXO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFN0UsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7OztZQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7O3NCQUVuQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBRTdELElBQUksaUJBQWlCLEVBQUU7b0JBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDaEI7cUJBQU07b0JBQ04sT0FBTyxTQUFTLENBQUM7aUJBQ2pCO1lBQ0YsQ0FBQyxDQUFBLENBQUM7U0FDRjtJQUNGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVPLFlBQVk7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRU8sT0FBTztRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxrQkFBa0IsQ0FDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQ3ZDLElBQUksQ0FBQywwQkFBMEIsRUFDL0IsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsdUJBQXVCLEVBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixJQUFJLENBQUMsMEJBQTBCLENBQy9CLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDYixDQUFDOztBQXBHdUIsNEJBQVcsR0FBRyxhQUFhLENBQUM7O1lBM0JwRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDR0REFBd0M7Z0JBSXhDLFNBQVMsRUFBRTtvQkFDVixHQUFHLGdCQUFnQjtvQkFDbkI7d0JBQ0MsT0FBTyxFQUFFLHdCQUF3Qjt3QkFDakMsV0FBVyxFQUFFLGdCQUFnQjtxQkFDN0I7aUJBQ0Q7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7OzRDQXVCYSxNQUFNLFNBQUMsV0FBVztZQW5FL0IsVUFBVTtZQUZWLGlCQUFpQjtZQW1CVCxlQUFlO1lBRGYsa0JBQWtCO1lBR2xCLHVCQUF1QjtZQUV2QixrQkFBa0I7WUFEbEIsb0JBQW9CO1lBRXBCLG9CQUFvQjtZQUVwQixvQkFBb0I7WUFDcEIsMEJBQTBCOzs7MkJBc0JqQyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFHdkMsS0FBSzs7Ozs7OztJQU9OLDZCQUFvRDs7SUFWcEQsd0NBQ2tCOztJQUVsQixrQ0FDZTs7Ozs7SUFFZix1Q0FBNEI7O0lBRTVCLCtCQUF1Qjs7Ozs7SUFJdkIsbURBQXFFOzs7OztJQUVyRSx5Q0FBOEM7Ozs7O0lBRTlDLHlDQUE4Qzs7Ozs7SUFFOUMsNkNBQXNEOzs7OztJQUUxQyxzQ0FBcUQ7Ozs7O0lBQzlELHNDQUF1Qzs7Ozs7SUFDdkMsNkNBQXFEOzs7OztJQUNyRCx3Q0FBOEM7Ozs7O0lBQzlDLDJDQUFvRDs7Ozs7SUFFcEQsc0RBQW9FOzs7OztJQUNwRSw4Q0FBdUQ7Ozs7O0lBQ3ZELG1EQUE4RDs7Ozs7SUFDOUQsZ0RBQTJEOzs7OztJQUMzRCxnREFBMkQ7Ozs7O0lBQzNELHNEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRQTEFURk9STV9JRCxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR3VpR3JpZEdhdGV3YXkgfSBmcm9tICcuL2d1aS5ncmlkLWdhdGV3YXknO1xuaW1wb3J0IHsgZ3VpR3JpZFByb3ZpZGVycyB9IGZyb20gJy4vZ3VpLmdyaWQucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aUdyaWRJZEdlbmVyYXRvciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEd1aUdyaWRSZWdpc3RlciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQucmVnaXN0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZEFwaSwgR3VpR3JpZEFwaVByb3ZpZGVyIH0gZnJvbSAnLi9hcGkvZ3VpLmdyaWQuYXBpLXByb3ZpZGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vc3R5bGUvc3R5bGUtbW9kaWZpZXInO1xuaW1wb3J0IHsgQXR0cmlidXRlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9hdHRyaWJ1dGUvYXR0cmlidXRlLW1vZGlmaWVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWdyaWQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZ3VpLmdyaWQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vZ3VpLmdyaWQubmd4LnNjc3MnXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmd1aUdyaWRQcm92aWRlcnMsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogc3RydWN0dXJlUGFyZW50Q29tcG9uZW50LFxuXHRcdFx0dXNlRXhpc3Rpbmc6IEd1aUdyaWRDb21wb25lbnRcblx0XHR9XG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbXBvbmVudCBleHRlbmRzIEd1aUdyaWRHYXRld2F5IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdHN0cnVjdHVyZVJlZjogYW55O1xuXG5cdEBJbnB1dCgpXG5cdGdyaWRJZDogc3RyaW5nOyAvLyBjYW4gYmUgc2V0IG9uY2VcblxuXHRwcml2YXRlIGxvY2FsR3JpZElkOiBzdHJpbmc7XG5cblx0cHVibGljIGFwaTogR3VpR3JpZEFwaTtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBHVUlfR1JJRF9JRCA9ICdndWktZ3JpZC1pZCc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbGFzc01vZGlmaWVyOiBDbGFzc01vZGlmaWVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGF0dHJpYnV0ZU1vZGlmaWVyOiBBdHRyaWJ1dGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkUmVnaXN0ZXI6IEd1aUdyaWRSZWdpc3Rlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkSWRHZW5lcmF0b3I6IEd1aUdyaWRJZEdlbmVyYXRvcixcblx0XHRcdFx0Ly8gZGVsZWdhdGVcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZERpc3BhdGNoZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gbmV3IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyKFxuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLFxuXHRcdFx0dGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXJcblx0XHQpO1xuXG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHR0aGlzLmF0dHJpYnV0ZU1vZGlmaWVyID0gbmV3IEF0dHJpYnV0ZU1vZGlmaWVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKCdndWktZ3JpZCcpO1xuXHRcdC8vIHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0SGVpZ2h0KHRoaXMubWF4SGVpZ2h0KTtcblxuXHRcdHRoaXMuaW5pdEFwaSgpO1xuXG5cdFx0bGV0IGdyaWRJZCA9IHRoaXMuZ3JpZElkO1xuXG5cdFx0aWYgKGdyaWRJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRncmlkSWQgPSB0aGlzLmdyaWRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2NhbEdyaWRJZCA9IGdyaWRJZDtcblxuXHRcdHRoaXMuZXhwb3NlR3JpZElkKCk7XG5cblx0XHQvLyByZWdpc3RlclxuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnJlZ2lzdGVyKGdyaWRJZCwgdGhpcywgdGhpcy5zdHJ1Y3R1cmVSZWYuZ2V0U3RydWN0dXJlSWQoKSk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydnZXRHdWlHcmlkJ10gPSAoZ3JpZElkOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRjb25zdCBncmlkQ29uc29sZUNvbmZpZyA9IHRoaXMuZ3JpZFJlZ2lzdGVyLmdldFZhbHVlcyhncmlkSWQpO1xuXG5cdFx0XHRcdGlmIChncmlkQ29uc29sZUNvbmZpZykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFwaTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnVucmVnaXN0ZXIodGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxuXHRnZXRHcmlkSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBleHBvc2VHcmlkSWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVNb2RpZmllci5nZXRIb3N0KCkuc2V0QXR0cmlidXRlKEd1aUdyaWRDb21wb25lbnQuR1VJX0dSSURfSUQsIHRoaXMubG9jYWxHcmlkSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0QXBpKCk6IHZvaWQge1xuXHRcdHRoaXMuYXBpID0gbmV3IEd1aUdyaWRBcGlQcm92aWRlcihcblx0XHRcdHRoaXMuc3RydWN0dXJlUmVmLnN0cnVjdHVyZUlkLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlclxuXHRcdCkucHJvdmlkZSgpO1xuXHR9XG5cbn1cbiJdfQ==