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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        this.elementRef.nativeElement.setAttribute('gui-grid-id', this.localGridId);
    }
    /**
     * @private
     * @return {?}
     */
    initApi() {
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker, this.structureCommandDispatcher).provide();
    }
}
GuiGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-grid',
                template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(selectedRows)=\"onRowsSelect($event)\"\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[localization]=\"localization\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowClass]=\"rowClass\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelection]=\"rowSelectionConfig\"\n\t[rowStyle]=\"rowStyle\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
                providers: [
                    ...guiGridProviders,
                    {
                        provide: structureParentComponent,
                        useExisting: GuiGridComponent
                    }
                ],
                host: {
                    '[class.gui-grid]': `"true"`,
                    '[style.height]': 'maxHeight'
                },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0ksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQWMsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgUExBVEZPUk1fSUQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR3VpR3JpZEdhdGV3YXkgfSBmcm9tICcuL2d1aS5ncmlkLWdhdGV3YXknO1xuaW1wb3J0IHsgZ3VpR3JpZFByb3ZpZGVycyB9IGZyb20gJy4vZ3VpLmdyaWQucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aUdyaWRJZEdlbmVyYXRvciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEd1aUdyaWRSZWdpc3RlciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQucmVnaXN0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZEFwaSwgR3VpR3JpZEFwaVByb3ZpZGVyIH0gZnJvbSAnLi9hcGkvZ3VpLmdyaWQuYXBpLXByb3ZpZGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWdyaWQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZ3VpLmdyaWQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vZ3VpLmdyaWQubmd4LnNjc3MnXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmd1aUdyaWRQcm92aWRlcnMsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogc3RydWN0dXJlUGFyZW50Q29tcG9uZW50LFxuXHRcdFx0dXNlRXhpc3Rpbmc6IEd1aUdyaWRDb21wb25lbnRcblx0XHR9XG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1ncmlkXSc6IGBcInRydWVcImAsXG5cdFx0J1tzdHlsZS5oZWlnaHRdJzogJ21heEhlaWdodCdcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29tcG9uZW50IGV4dGVuZHMgR3VpR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdHN0cnVjdHVyZVJlZjogYW55O1xuXG5cdEBJbnB1dCgpXG5cdGdyaWRJZDogc3RyaW5nOyAvLyBjYW4gYmUgc2V0IG9uY2VcblxuXHRwcml2YXRlIGxvY2FsR3JpZElkOiBzdHJpbmc7XG5cblx0cHVibGljIGFwaTogR3VpR3JpZEFwaTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkUmVnaXN0ZXI6IEd1aUdyaWRSZWdpc3Rlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkSWRHZW5lcmF0b3I6IEd1aUdyaWRJZEdlbmVyYXRvcixcblx0XHRcdFx0Ly8gZGVsZWdhdGVcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZERpc3BhdGNoZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gbmV3IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyKFxuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLFxuXHRcdFx0dGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXJcblx0XHQpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbml0QXBpKCk7XG5cblx0XHRsZXQgZ3JpZElkID0gdGhpcy5ncmlkSWQ7XG5cblx0XHRpZiAoZ3JpZElkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGdyaWRJZCA9IHRoaXMuZ3JpZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKTtcblx0XHR9XG5cblx0XHR0aGlzLmxvY2FsR3JpZElkID0gZ3JpZElkO1xuXG5cdFx0dGhpcy5leHBvc2VHcmlkSWQoKTtcblxuXHRcdC8vIHJlZ2lzdGVyXG5cdFx0dGhpcy5ncmlkUmVnaXN0ZXIucmVnaXN0ZXIoZ3JpZElkLCB0aGlzLCB0aGlzLnN0cnVjdHVyZVJlZi5nZXRTdHJ1Y3R1cmVJZCgpKTtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbJ2dldEd1aUdyaWQnXSA9IChncmlkSWQ6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGdyaWRDb25zb2xlQ29uZmlnID0gdGhpcy5ncmlkUmVnaXN0ZXIuZ2V0VmFsdWVzKGdyaWRJZCk7XG5cblx0XHRcdFx0aWYgKGdyaWRDb25zb2xlQ29uZmlnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXBpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5ncmlkUmVnaXN0ZXIudW5yZWdpc3Rlcih0aGlzLmxvY2FsR3JpZElkKTtcblx0fVxuXG5cdGdldEVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcblx0fVxuXG5cdGdldEdyaWRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRwcml2YXRlIGV4cG9zZUdyaWRJZCgpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2d1aS1ncmlkLWlkJywgdGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRBcGkoKTogdm9pZCB7XG5cdFx0dGhpcy5hcGkgPSBuZXcgR3VpR3JpZEFwaVByb3ZpZGVyKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc3RydWN0dXJlSWQsXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVJlZi5zY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyXG5cdFx0KS5wcm92aWRlKCk7XG5cdH1cblxufVxuIl19