/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var GuiGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GuiGridComponent, _super);
    function GuiGridComponent(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator, formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher, searchCommandInvoker, schemaCommandInvoker, structureCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.gridRegister = gridRegister;
        _this.gridIdGenerator = gridIdGenerator;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.formationWarehouse = formationWarehouse;
        _this.sourceCommandDispatcher = sourceCommandDispatcher;
        _this.searchCommandInvoker = searchCommandInvoker;
        _this.schemaCommandInvoker = schemaCommandInvoker;
        _this.structureCommandDispatcher = structureCommandDispatcher;
        _this.gridThemeCommandInvoker = new GuiGridThemeCommandInvoker(_this.schemaCommandInvoker, _this.gridThemeConverter, _this.gridRowColoringConverter);
        _this.classModifier = new ClassModifier(_this.elementRef.nativeElement);
        _this.styleModifier = new StyleModifier(_this.elementRef.nativeElement);
        _this.attributeModifier = new AttributeModifier(_this.elementRef.nativeElement);
        return _this;
    }
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.classModifier.getHost().add('gui-grid');
        // this.styleModifier.getHost().setHeight(this.maxHeight);
        this.initApi();
        /** @type {?} */
        var gridId = this.gridId;
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
            function (gridId) {
                /** @type {?} */
                var gridConsoleConfig = _this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return _this.api;
                }
                else {
                    return undefined;
                }
            });
        }
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.gridRegister.unregister(this.localGridId);
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.getGridId = /**
     * @return {?}
     */
    function () {
        return '';
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    GuiGridComponent.prototype.exposeGridId = /**
     * @private
     * @return {?}
     */
    function () {
        this.attributeModifier.getHost().setAttribute(GuiGridComponent.GUI_GRID_ID, this.localGridId);
    };
    /**
     * @private
     * @return {?}
     */
    GuiGridComponent.prototype.initApi = /**
     * @private
     * @return {?}
     */
    function () {
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker, this.structureCommandDispatcher).provide();
    };
    GuiGridComponent.GUI_GRID_ID = 'gui-grid-id';
    GuiGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-grid',
                    template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(selectedRows)=\"onRowsSelect($event)\"\n\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[localization]=\"localization\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowClass]=\"rowClass\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelection]=\"rowSelectionConfig\"\n\t[rowStyle]=\"rowStyle\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
                    providers: tslib_1.__spread(guiGridProviders, [
                        {
                            provide: structureParentComponent,
                            useExisting: GuiGridComponent
                        }
                    ]),
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-grid{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GuiGridComponent.ctorParameters = function () { return [
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
    ]; };
    GuiGridComponent.propDecorators = {
        structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
        gridId: [{ type: Input }]
    };
    return GuiGridComponent;
}(GuiGridGateway));
export { GuiGridComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNOLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQWMsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFB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QkFuRS9CLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQW1CVCxlQUFlO2dCQURmLGtCQUFrQjtnQkFHbEIsdUJBQXVCO2dCQUV2QixrQkFBa0I7Z0JBRGxCLG9CQUFvQjtnQkFFcEIsb0JBQW9CO2dCQUVwQixvQkFBb0I7Z0JBQ3BCLDBCQUEwQjs7OytCQXNCakMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBR3ZDLEtBQUs7O0lBNkdQLHVCQUFDO0NBQUEsQUFqSUQsQ0Flc0MsY0FBYyxHQWtIbkQ7U0FsSFksZ0JBQWdCOzs7Ozs7SUFZNUIsNkJBQW9EOztJQVZwRCx3Q0FDa0I7O0lBRWxCLGtDQUNlOzs7OztJQUVmLHVDQUE0Qjs7SUFFNUIsK0JBQXVCOzs7OztJQUl2QixtREFBcUU7Ozs7O0lBRXJFLHlDQUE4Qzs7Ozs7SUFFOUMseUNBQThDOzs7OztJQUU5Qyw2Q0FBc0Q7Ozs7O0lBRTFDLHNDQUFxRDs7Ozs7SUFDOUQsc0NBQXVDOzs7OztJQUN2Qyw2Q0FBcUQ7Ozs7O0lBQ3JELHdDQUE4Qzs7Ozs7SUFDOUMsMkNBQW9EOzs7OztJQUVwRCxzREFBb0U7Ozs7O0lBQ3BFLDhDQUF1RDs7Ozs7SUFDdkQsbURBQThEOzs7OztJQUM5RCxnREFBMkQ7Ozs7O0lBQzNELGdEQUEyRDs7Ozs7SUFDM0Qsc0RBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdFBMQVRGT1JNX0lELFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHdWlHcmlkR2F0ZXdheSB9IGZyb20gJy4vZ3VpLmdyaWQtZ2F0ZXdheSc7XG5pbXBvcnQgeyBndWlHcmlkUHJvdmlkZXJzIH0gZnJvbSAnLi9ndWkuZ3JpZC5wcm92aWRlcnMnO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi9yZWdpc3Rlci9ndWkuZ3JpZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgR3VpR3JpZFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlcic7XG5pbXBvcnQgeyBHdWlHcmlkQXBpLCBHdWlHcmlkQXBpUHJvdmlkZXIgfSBmcm9tICcuL2FwaS9ndWkuZ3JpZC5hcGktcHJvdmlkZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyJztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9zdHlsZS9zdHlsZS1tb2RpZmllcic7XG5pbXBvcnQgeyBBdHRyaWJ1dGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL2F0dHJpYnV0ZS9hdHRyaWJ1dGUtbW9kaWZpZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZ3JpZCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9ndWkuZ3JpZC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuLi9ndWkuZ3JpZC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uZ3VpR3JpZFByb3ZpZGVycyxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQsXG5cdFx0XHR1c2VFeGlzdGluZzogR3VpR3JpZENvbXBvbmVudFxuXHRcdH1cblx0XSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29tcG9uZW50IGV4dGVuZHMgR3VpR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywgeyBzdGF0aWM6IHRydWUgfSlcblx0c3RydWN0dXJlUmVmOiBhbnk7XG5cblx0QElucHV0KClcblx0Z3JpZElkOiBzdHJpbmc7IC8vIGNhbiBiZSBzZXQgb25jZVxuXG5cdHByaXZhdGUgbG9jYWxHcmlkSWQ6IHN0cmluZztcblxuXHRwdWJsaWMgYXBpOiBHdWlHcmlkQXBpO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEdVSV9HUklEX0lEID0gJ2d1aS1ncmlkLWlkJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHlsZU1vZGlmaWVyOiBTdHlsZU1vZGlmaWVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXR0cmlidXRlTW9kaWZpZXI6IEF0dHJpYnV0ZU1vZGlmaWVyO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRSZWdpc3RlcjogR3VpR3JpZFJlZ2lzdGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRJZEdlbmVyYXRvcjogR3VpR3JpZElkR2VuZXJhdG9yLFxuXHRcdFx0XHQvLyBkZWxlZ2F0ZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kRGlzcGF0Y2hlcjogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXJcblx0KSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSBuZXcgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIoXG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5ncmlkVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHR0aGlzLmdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlclxuXHRcdCk7XG5cblx0XHR0aGlzLmNsYXNzTW9kaWZpZXIgPSBuZXcgQ2xhc3NNb2RpZmllcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyID0gbmV3IFN0eWxlTW9kaWZpZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdHRoaXMuYXR0cmlidXRlTW9kaWZpZXIgPSBuZXcgQXR0cmlidXRlTW9kaWZpZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQoJ2d1aS1ncmlkJyk7XG5cdFx0Ly8gdGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5zZXRIZWlnaHQodGhpcy5tYXhIZWlnaHQpO1xuXG5cdFx0dGhpcy5pbml0QXBpKCk7XG5cblx0XHRsZXQgZ3JpZElkID0gdGhpcy5ncmlkSWQ7XG5cblx0XHRpZiAoZ3JpZElkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGdyaWRJZCA9IHRoaXMuZ3JpZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKTtcblx0XHR9XG5cblx0XHR0aGlzLmxvY2FsR3JpZElkID0gZ3JpZElkO1xuXG5cdFx0dGhpcy5leHBvc2VHcmlkSWQoKTtcblxuXHRcdC8vIHJlZ2lzdGVyXG5cdFx0dGhpcy5ncmlkUmVnaXN0ZXIucmVnaXN0ZXIoZ3JpZElkLCB0aGlzLCB0aGlzLnN0cnVjdHVyZVJlZi5nZXRTdHJ1Y3R1cmVJZCgpKTtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbJ2dldEd1aUdyaWQnXSA9IChncmlkSWQ6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGdyaWRDb25zb2xlQ29uZmlnID0gdGhpcy5ncmlkUmVnaXN0ZXIuZ2V0VmFsdWVzKGdyaWRJZCk7XG5cblx0XHRcdFx0aWYgKGdyaWRDb25zb2xlQ29uZmlnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXBpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5ncmlkUmVnaXN0ZXIudW5yZWdpc3Rlcih0aGlzLmxvY2FsR3JpZElkKTtcblx0fVxuXG5cdGdldEVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcblx0fVxuXG5cdGdldEdyaWRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRwcml2YXRlIGV4cG9zZUdyaWRJZCgpOiB2b2lkIHtcblx0XHR0aGlzLmF0dHJpYnV0ZU1vZGlmaWVyLmdldEhvc3QoKS5zZXRBdHRyaWJ1dGUoR3VpR3JpZENvbXBvbmVudC5HVUlfR1JJRF9JRCwgdGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRBcGkoKTogdm9pZCB7XG5cdFx0dGhpcy5hcGkgPSBuZXcgR3VpR3JpZEFwaVByb3ZpZGVyKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc3RydWN0dXJlSWQsXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVJlZi5zY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyXG5cdFx0KS5wcm92aWRlKCk7XG5cdH1cblxufVxuIl19