import { Injectable, EventEmitter, Input, Output, InjectionToken, Component, ViewEncapsulation, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, NgModule, Pipe, Injector, Renderer2, TemplateRef, ContentChild, ComponentFactoryResolver, RendererFactory2, NgZone, Optional } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FabricBadgeModule, FabricButtonModule, FabricButtonGroupModule, FabricCheckboxModule, FabricChipModule, FabricDropdownModule, FabricRadioButtonModule, FabricRadioGroupModule, FabricProgressBarModule, FabricProgressSpinnerModule, FabricSelectModule, FabricSpinnerModule, FabricTabModule, FabricToggleButtonModule, FabricInputModule, FabricDialogModule, FabricInlineDialogModule, FabricModule, FabricDialogService, FabricChipComponent, FabricCheckboxComponent, FabricButtonComponent, FabricInputComponent, InlineDialogPlacement, FabricInlineDialogService, ResizeDetector, Placement } from '@generic-ui/fabric';
import { AggregateId, Command, CommandDispatcher, DomainEvent, InMemoryStore, ReadModel, RandomStringGenerator, Entity, InMemoryReadModelStore, DomainEventBus, InMemoryAggregateStore, AggregateStoreRegister, AggregateRepository, ReadModelRepository, DomainEventHandler, DOMAIN_EVENT_HANDLERS, AggregateEvent, Aggregate, RootAggregate, DomainEventPublisher, HermesModule, AggregateArchive, AggregateFactory, COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED } from '@generic-ui/hermes';
import { Subject, ReplaySubject, BehaviorSubject, fromEvent, Observable, zip, timer, combineLatest } from 'rxjs';
import { takeUntil, filter, map, take, distinctUntilChanged, debounceTime, skip, switchMap } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function GuiColumn() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumn.prototype.field;
    /** @type {?|undefined} */
    GuiColumn.prototype.type;
    /** @type {?|undefined} */
    GuiColumn.prototype.view;
    /** @type {?|undefined} */
    GuiColumn.prototype.header;
    /** @type {?|undefined} */
    GuiColumn.prototype.customTemplate;
    /** @type {?|undefined} */
    GuiColumn.prototype.width;
    /** @type {?|undefined} */
    GuiColumn.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumn.prototype.aggregation;
    /** @type {?|undefined} */
    GuiColumn.prototype.sorting;
}
/** @enum {number} */
const GuiDataType = {
    UNKNOWN: 0,
    NUMBER: 1,
    STRING: 2,
    BOOLEAN: 3,
    DATE: 4,
    CUSTOM: 5,
};
GuiDataType[GuiDataType.UNKNOWN] = 'UNKNOWN';
GuiDataType[GuiDataType.NUMBER] = 'NUMBER';
GuiDataType[GuiDataType.STRING] = 'STRING';
GuiDataType[GuiDataType.BOOLEAN] = 'BOOLEAN';
GuiDataType[GuiDataType.DATE] = 'DATE';
GuiDataType[GuiDataType.CUSTOM] = 'CUSTOM';
/** @enum {number} */
const GuiCellView = {
    TEXT: 0,
    CHIP: 1,
    LINK: 2,
    IMAGE: 3,
    BOLD: 4,
    ITALIC: 5,
    CHECKBOX: 6,
    CUSTOM: 7,
};
GuiCellView[GuiCellView.TEXT] = 'TEXT';
GuiCellView[GuiCellView.CHIP] = 'CHIP';
GuiCellView[GuiCellView.LINK] = 'LINK';
GuiCellView[GuiCellView.IMAGE] = 'IMAGE';
GuiCellView[GuiCellView.BOLD] = 'BOLD';
GuiCellView[GuiCellView.ITALIC] = 'ITALIC';
GuiCellView[GuiCellView.CHECKBOX] = 'CHECKBOX';
GuiCellView[GuiCellView.CUSTOM] = 'CUSTOM';
/** @enum {number} */
const GuiNumberCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
};
GuiNumberCellView[GuiNumberCellView.TEXT] = 'TEXT';
GuiNumberCellView[GuiNumberCellView.BOLD] = 'BOLD';
GuiNumberCellView[GuiNumberCellView.ITALIC] = 'ITALIC';
GuiNumberCellView[GuiNumberCellView.CHIP] = 'CHIP';
/** @enum {number} */
const GuiStringCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
};
GuiStringCellView[GuiStringCellView.TEXT] = 'TEXT';
GuiStringCellView[GuiStringCellView.BOLD] = 'BOLD';
GuiStringCellView[GuiStringCellView.ITALIC] = 'ITALIC';
GuiStringCellView[GuiStringCellView.CHIP] = 'CHIP';
/** @enum {number} */
const GuiBooleanCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
    CHECKBOX: 4,
};
GuiBooleanCellView[GuiBooleanCellView.TEXT] = 'TEXT';
GuiBooleanCellView[GuiBooleanCellView.BOLD] = 'BOLD';
GuiBooleanCellView[GuiBooleanCellView.ITALIC] = 'ITALIC';
GuiBooleanCellView[GuiBooleanCellView.CHIP] = 'CHIP';
GuiBooleanCellView[GuiBooleanCellView.CHECKBOX] = 'CHECKBOX';
/** @enum {number} */
const GuiDateCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
};
GuiDateCellView[GuiDateCellView.TEXT] = 'TEXT';
GuiDateCellView[GuiDateCellView.BOLD] = 'BOLD';
GuiDateCellView[GuiDateCellView.ITALIC] = 'ITALIC';
GuiDateCellView[GuiDateCellView.CHIP] = 'CHIP';
/**
 * @record
 */
function GuiPagingConfig() { }
if (false) {
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.enabled;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.page;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pageSize;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pageSizes;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pagerTop;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pagerBottom;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.display;
}
/** @enum {number} */
const GuiTheme = {
    FABRIC: 0,
    MATERIAL: 1,
    LIGHT: 2,
    DARK: 3,
};
GuiTheme[GuiTheme.FABRIC] = 'FABRIC';
GuiTheme[GuiTheme.MATERIAL] = 'MATERIAL';
GuiTheme[GuiTheme.LIGHT] = 'LIGHT';
GuiTheme[GuiTheme.DARK] = 'DARK';
/** @enum {number} */
const GuiRowColoring = {
    NONE: 0,
    EVEN: 1,
    ODD: 2,
};
GuiRowColoring[GuiRowColoring.NONE] = 'NONE';
GuiRowColoring[GuiRowColoring.EVEN] = 'EVEN';
GuiRowColoring[GuiRowColoring.ODD] = 'ODD';
/** @enum {number} */
const GuiSortingOrder = {
    NONE: 0,
    ASC: 1,
    DESC: 2,
};
GuiSortingOrder[GuiSortingOrder.NONE] = 'NONE';
GuiSortingOrder[GuiSortingOrder.ASC] = 'ASC';
GuiSortingOrder[GuiSortingOrder.DESC] = 'DESC';
/**
 * @record
 */
function GuiSorting() { }
if (false) {
    /** @type {?|undefined} */
    GuiSorting.prototype.enabled;
    /**
     * \@experimental
     * @type {?|undefined}
     */
    GuiSorting.prototype.multiSorting;
}
/**
 * @record
 */
function GuiFiltering() { }
if (false) {
    /** @type {?|undefined} */
    GuiFiltering.prototype.enabled;
}
/**
 * @record
 */
function GuiQuickFilters() { }
if (false) {
    /** @type {?|undefined} */
    GuiQuickFilters.prototype.enabled;
}
/**
 * @record
 */
function GuiSearching() { }
if (false) {
    /** @type {?|undefined} */
    GuiSearching.prototype.enabled;
    /** @type {?|undefined} */
    GuiSearching.prototype.highlighting;
    /** @type {?|undefined} */
    GuiSearching.prototype.placeholder;
    /** @type {?|undefined} */
    GuiSearching.prototype.phrase;
}
/**
 * @record
 */
function GuiAggregation() { }
if (false) {
    /** @type {?|undefined} */
    GuiAggregation.prototype.enabled;
    /** @type {?|undefined} */
    GuiAggregation.prototype.top;
    /** @type {?|undefined} */
    GuiAggregation.prototype.bottom;
}
/**
 * @record
 */
function GuiColumnAggregation() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnAggregation.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnAggregation.prototype.aggregationTypes;
}
/**
 * @record
 */
function GuiColumnSorting() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.order;
}
/**
 * @record
 */
function GuiColumnMenu() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnMenu.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnMenu.prototype.sort;
    /** @type {?|undefined} */
    GuiColumnMenu.prototype.filter;
    /** @type {?|undefined} */
    GuiColumnMenu.prototype.columnsManager;
}
/** @enum {number} */
const GuiPagingDisplay = {
    BASIC: 0,
    ADVANCED: 1,
};
GuiPagingDisplay[GuiPagingDisplay.BASIC] = 'BASIC';
GuiPagingDisplay[GuiPagingDisplay.ADVANCED] = 'ADVANCED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DataType = {
    UNKNOWN: 0,
    NUMBER: 1,
    STRING: 2,
    BOOLEAN: 3,
    DATE: 4,
    CUSTOM: 5,
};
DataType[DataType.UNKNOWN] = 'UNKNOWN';
DataType[DataType.NUMBER] = 'NUMBER';
DataType[DataType.STRING] = 'STRING';
DataType[DataType.BOOLEAN] = 'BOOLEAN';
DataType[DataType.DATE] = 'DATE';
DataType[DataType.CUSTOM] = 'CUSTOM';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridColumnTypeConverter {
    /**
     * @param {?} type
     * @return {?}
     */
    convertType(type) {
        if (typeof type === 'string') {
            return this.convertTypeString(type);
        }
        else {
            return this.convertTypeEnum(type);
        }
    }
    /**
     * @private
     * @param {?} enumType
     * @return {?}
     */
    convertTypeEnum(enumType) {
        switch (enumType) {
            case GuiDataType.STRING:
                return DataType.STRING;
            case GuiDataType.NUMBER:
                return DataType.NUMBER;
            case GuiDataType.BOOLEAN:
                return DataType.BOOLEAN;
            case GuiDataType.DATE:
                return DataType.DATE;
            case GuiDataType.UNKNOWN:
                return DataType.UNKNOWN;
            case GuiDataType.CUSTOM:
                return DataType.CUSTOM;
            default:
                return DataType.STRING;
        }
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    convertTypeString(type) {
        /** @type {?} */
        const loweredType = type.toLocaleLowerCase();
        switch (loweredType) {
            case 'string':
                return DataType.STRING;
            case 'number':
                return DataType.NUMBER;
            case 'boolean':
                return DataType.BOOLEAN;
            case 'date':
                return DataType.DATE;
            case 'unknown':
                return DataType.UNKNOWN;
            case 'custom':
                return DataType.CUSTOM;
            default:
                return DataType.STRING;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AggregationType = {
    COUNT: 1024,
    DISTINCT: 1,
    SUM: 2,
    AVERAGE: 4,
    MIN: 8,
    MAX: 16,
    MEDIAN: 32,
    TRUTHY: 64,
    FALSY: 128,
    EARLIEST: 256,
    LATEST: 512,
};
AggregationType[AggregationType.COUNT] = 'COUNT';
AggregationType[AggregationType.DISTINCT] = 'DISTINCT';
AggregationType[AggregationType.SUM] = 'SUM';
AggregationType[AggregationType.AVERAGE] = 'AVERAGE';
AggregationType[AggregationType.MIN] = 'MIN';
AggregationType[AggregationType.MAX] = 'MAX';
AggregationType[AggregationType.MEDIAN] = 'MEDIAN';
AggregationType[AggregationType.TRUTHY] = 'TRUTHY';
AggregationType[AggregationType.FALSY] = 'FALSY';
AggregationType[AggregationType.EARLIEST] = 'EARLIEST';
AggregationType[AggregationType.LATEST] = 'LATEST';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridColumnAggregationConverter {
    /**
     * @param {?} aggregationConfig
     * @return {?}
     */
    convert(aggregationConfig) {
        /** @type {?} */
        let columnAggregationConfig = {};
        if (aggregationConfig.enabled !== undefined && aggregationConfig.enabled !== null) {
            columnAggregationConfig.enabled = aggregationConfig.enabled;
        }
        if (aggregationConfig.aggregationTypes !== undefined && aggregationConfig.aggregationTypes !== null) {
            columnAggregationConfig.aggregationTypes = this.convertAggregationTypes(aggregationConfig.aggregationTypes);
        }
        return columnAggregationConfig;
    }
    /**
     * @private
     * @param {?} configAggregationTypes
     * @return {?}
     */
    convertAggregationTypes(configAggregationTypes) {
        /** @type {?} */
        const aggregationTypes = [];
        configAggregationTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            /** @type {?} */
            const aggregationType = this.convertAggregationType(type);
            if (aggregationType !== undefined && aggregationType !== null) {
                aggregationTypes.push(aggregationType);
            }
        }));
        return aggregationTypes;
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    convertAggregationType(type) {
        /** @type {?} */
        const loweredAggregationType = type.toLocaleLowerCase();
        switch (loweredAggregationType) {
            case 'count':
                return AggregationType.COUNT;
            case 'distinct':
                return AggregationType.DISTINCT;
            case 'sum':
                return AggregationType.SUM;
            case 'average':
                return AggregationType.AVERAGE;
            case 'min':
                return AggregationType.MIN;
            case 'max':
                return AggregationType.MAX;
            case 'median':
                return AggregationType.MEDIAN;
            case 'truthy':
                return AggregationType.TRUTHY;
            case 'falsy':
                return AggregationType.FALSY;
            case 'earliest':
                return AggregationType.EARLIEST;
            case 'latest':
                return AggregationType.LATEST;
            default:
                return null;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const CellView = {
    TEXT: 0,
    CHIP: 1,
    LINK: 2,
    IMAGE: 3,
    BOLD: 4,
    ITALIC: 5,
    CHECKBOX: 6,
    CUSTOM: 7,
    FUNCTION: 8,
};
CellView[CellView.TEXT] = 'TEXT';
CellView[CellView.CHIP] = 'CHIP';
CellView[CellView.LINK] = 'LINK';
CellView[CellView.IMAGE] = 'IMAGE';
CellView[CellView.BOLD] = 'BOLD';
CellView[CellView.ITALIC] = 'ITALIC';
CellView[CellView.CHECKBOX] = 'CHECKBOX';
CellView[CellView.CUSTOM] = 'CUSTOM';
CellView[CellView.FUNCTION] = 'FUNCTION';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridColumnViewConverter {
    /**
     * @param {?} view
     * @return {?}
     */
    convert(view) {
        if (typeof view === 'string') {
            return this.convertString(view);
        }
        else if (typeof view === 'function') {
            return view;
        }
        else {
            return this.convertEnum(view);
        }
    }
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    convertString(view) {
        /** @type {?} */
        const loweredView = view.toLocaleLowerCase();
        switch (loweredView) {
            case 'text':
                return CellView.TEXT;
            case 'chip':
                return CellView.CHIP;
            case 'link':
                return CellView.LINK;
            case 'image':
                return CellView.IMAGE;
            case 'bold':
                return CellView.BOLD;
            case 'italic':
                return CellView.ITALIC;
            case 'checkbox':
                return CellView.CHECKBOX;
            case 'custom':
                return CellView.CUSTOM;
            default:
                return CellView.TEXT;
        }
    }
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    convertEnum(view) {
        switch (view) {
            case GuiCellView.TEXT:
                return CellView.TEXT;
            case GuiCellView.CHIP:
                return CellView.CHIP;
            case GuiCellView.LINK:
                return CellView.LINK;
            case GuiCellView.IMAGE:
                return CellView.IMAGE;
            case GuiCellView.BOLD:
                return CellView.BOLD;
            case GuiCellView.ITALIC:
                return CellView.ITALIC;
            case GuiCellView.CHECKBOX:
                return CellView.CHECKBOX;
            case GuiCellView.CUSTOM:
                return CellView.CUSTOM;
            default:
                return CellView.TEXT;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridColumnSortingConverter {
    /**
     * @param {?} sortingConfig
     * @return {?}
     */
    convert(sortingConfig) {
        return (/** @type {?} */ (sortingConfig));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridColumnConverter {
    constructor() {
        this.columnTypeConverter = new GridColumnTypeConverter();
        this.columnAggregationConverter = new GridColumnAggregationConverter();
        this.columnViewConverter = new GridColumnViewConverter();
        this.columnSortingConverter = new GridColumnSortingConverter();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        return config.map((/**
         * @param {?} c
         * @return {?}
         */
        (c) => this.convertColumn(c)));
    }
    /**
     * @private
     * @param {?} guiColumn
     * @return {?}
     */
    convertColumn(guiColumn) {
        /** @type {?} */
        let columnConfig = {};
        if (guiColumn.type !== undefined && guiColumn.type !== null) {
            columnConfig.type = this.columnTypeConverter.convertType(guiColumn.type);
        }
        if (guiColumn.header !== undefined && guiColumn.header !== null) {
            columnConfig.header = guiColumn.header;
        }
        if (guiColumn.enabled !== undefined && guiColumn.enabled !== null) {
            columnConfig.enabled = guiColumn.enabled;
        }
        if (guiColumn.field !== undefined && guiColumn.field !== null) {
            columnConfig.field = guiColumn.field;
        }
        if (guiColumn.width !== undefined && guiColumn.width !== null) {
            columnConfig.width = guiColumn.width;
        }
        if (guiColumn.view !== undefined && guiColumn.view !== null) {
            columnConfig.view = this.columnViewConverter.convert(guiColumn.view);
        }
        if (guiColumn.aggregation !== undefined && guiColumn.aggregation !== null) {
            columnConfig.aggregation = this.columnAggregationConverter.convert(guiColumn.aggregation);
        }
        if (guiColumn.sorting !== undefined && guiColumn.sorting !== null) {
            columnConfig.sorting = this.columnSortingConverter.convert(guiColumn.sorting);
        }
        return columnConfig;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnTypeConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnAggregationConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnViewConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnSortingConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SchemaTheme = {
    FABRIC: 0,
    MATERIAL: 1,
    LIGHT: 2,
    DARK: 3,
};
SchemaTheme[SchemaTheme.FABRIC] = 'FABRIC';
SchemaTheme[SchemaTheme.MATERIAL] = 'MATERIAL';
SchemaTheme[SchemaTheme.LIGHT] = 'LIGHT';
SchemaTheme[SchemaTheme.DARK] = 'DARK';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridThemeConverter {
    /**
     * @param {?} theme
     * @return {?}
     */
    convert(theme) {
        if (typeof theme === 'string') {
            return this.convertString(theme);
        }
        else {
            return this.convertEnum(theme);
        }
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    convertString(theme) {
        /** @type {?} */
        const loweredTheme = theme.toLocaleLowerCase();
        switch (loweredTheme) {
            case 'material':
                return SchemaTheme.MATERIAL;
            case 'fabric':
                return SchemaTheme.FABRIC;
            case 'light':
                return SchemaTheme.LIGHT;
            case 'dark':
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    convertEnum(theme) {
        switch (theme) {
            case GuiTheme.MATERIAL:
                return SchemaTheme.MATERIAL;
            case GuiTheme.FABRIC:
                return SchemaTheme.FABRIC;
            case GuiTheme.LIGHT:
                return SchemaTheme.LIGHT;
            case GuiTheme.DARK:
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const RowColoring = {
    NONE: 0,
    EVEN: 1,
    ODD: 2,
};
RowColoring[RowColoring.NONE] = 'NONE';
RowColoring[RowColoring.EVEN] = 'EVEN';
RowColoring[RowColoring.ODD] = 'ODD';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridRowColoringConverter {
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    convert(rowColoring) {
        if (typeof rowColoring === 'string') {
            return this.convertString(rowColoring);
        }
        else {
            return this.convertEnum(rowColoring);
        }
    }
    /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    convertString(rowColoring) {
        /** @type {?} */
        const loweredRowColoring = rowColoring.toLocaleLowerCase();
        switch (loweredRowColoring) {
            case 'none':
                return RowColoring.NONE;
            case 'even':
                return RowColoring.EVEN;
            case 'odd':
                return RowColoring.ODD;
            default:
                return RowColoring.EVEN;
        }
    }
    /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    convertEnum(rowColoring) {
        switch (rowColoring) {
            case GuiRowColoring.NONE:
                return RowColoring.NONE;
            case GuiRowColoring.EVEN:
                return RowColoring.EVEN;
            case GuiRowColoring.ODD:
                return RowColoring.ODD;
            default:
                return RowColoring.EVEN;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridColumnMenuConverter {
    /**
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        return (/** @type {?} */ (config));
    }
}
GridColumnMenuConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const PagingDisplayMode = {
    BASIC: 0,
    ADVANCED: 1,
};
PagingDisplayMode[PagingDisplayMode.BASIC] = 'BASIC';
PagingDisplayMode[PagingDisplayMode.ADVANCED] = 'ADVANCED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridPagingConverter {
    /**
     * @param {?} guiPaging
     * @return {?}
     */
    convert(guiPaging) {
        /** @type {?} */
        let pagingConfig = {};
        if (guiPaging.enabled !== undefined && guiPaging.enabled !== null) {
            pagingConfig.enabled = guiPaging.enabled;
        }
        if (guiPaging.page !== undefined && guiPaging.page !== null) {
            pagingConfig.page = guiPaging.page;
        }
        if (guiPaging.pageSize !== undefined && guiPaging.pageSize !== null) {
            pagingConfig.pageSize = guiPaging.pageSize;
        }
        if (guiPaging.pageSizes !== undefined && guiPaging.pageSizes !== null) {
            pagingConfig.pageSizes = guiPaging.pageSizes;
        }
        if (guiPaging.pagerTop !== undefined && guiPaging.pagerTop !== null) {
            pagingConfig.pagerTop = guiPaging.pagerTop;
        }
        if (guiPaging.pagerBottom !== undefined && guiPaging.pagerBottom !== null) {
            pagingConfig.pagerBottom = guiPaging.pagerBottom;
        }
        if (guiPaging.display !== undefined && guiPaging.display !== null) {
            pagingConfig.displayMode = this.convertDisplay(guiPaging.display);
        }
        return pagingConfig;
    }
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    convertDisplay(pagingDisplay) {
        if (typeof pagingDisplay === 'string') {
            return this.convertString(pagingDisplay);
        }
        else {
            return this.convertEnum(pagingDisplay);
        }
    }
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    convertString(pagingDisplay) {
        /** @type {?} */
        const loweredPaging = pagingDisplay.toLocaleLowerCase();
        switch (loweredPaging) {
            case 'basic':
                return PagingDisplayMode.BASIC;
            case 'advanced':
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    }
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    convertEnum(pagingDisplay) {
        switch (pagingDisplay) {
            case GuiPagingDisplay.BASIC:
                return PagingDisplayMode.BASIC;
            case GuiPagingDisplay.ADVANCED:
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class GridGateway {
    /**
     * @protected
     */
    constructor() {
        this.source = [];
        this.columns = [];
        /**
         * OUTPUTS
         */
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.itemsSelected = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.searchPhraseChanged = new EventEmitter();
        this.gridColumnConverter = new GridColumnConverter();
        this.gridThemeConverter = new GridThemeConverter();
        this.gridRowColoringConverter = new GridRowColoringConverter();
        this.gridColumnMenuConverter = new GridColumnMenuConverter();
        this.gridPagingConverter = new GridPagingConverter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            this.columnsConfig = this.gridColumnConverter.convert(this.columns);
        }
        if (changes.theme !== undefined && changes.theme.currentValue !== undefined) {
            this.themeConfig = this.gridThemeConverter.convert(this.theme);
        }
        if (changes.rowColoring !== undefined && changes.rowColoring.currentValue !== undefined) {
            this.rowColoringConfig = this.gridRowColoringConverter.convert(this.rowColoring);
        }
        if (changes.columnMenu !== undefined && changes.columnMenu.currentValue !== undefined) {
            this.columnMenuConfig = this.gridColumnMenuConverter.convert(this.columnMenu);
        }
        // TODO
        if (changes.paging !== undefined && changes.paging.currentValue !== undefined) {
            if (typeof this.paging !== 'boolean') {
                this.paging = this.gridPagingConverter.convert(this.paging);
            }
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    onPageSizeChange(pageSize) {
        this.pageSizeChanged.emit(pageSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemSelect(item) {
        this.itemsSelected.emit(item);
    }
    /**
     * @return {?}
     */
    onColumnsChange() {
        this.columnsChanged.emit();
    }
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    onContainerWidthChange(containerWidth) {
        this.containerWidthChanged.emit(containerWidth);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSourceEdit(value) {
        this.sourceEdited.emit(value);
    }
    /**
     * @return {?}
     */
    onCellEditEnter() {
        this.cellEditEntered.emit();
    }
    /**
     * @return {?}
     */
    onCellEditSubmit() {
        this.cellEditSubmitted.emit();
    }
    /**
     * @return {?}
     */
    onCellEditCancel() {
        this.cellEditCanceled.emit();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSearchPhrase(value) {
        this.searchPhraseChanged.emit(value);
    }
}
GridGateway.propDecorators = {
    columnHeaderTop: [{ type: Input }],
    columnHeaderBottom: [{ type: Input }],
    maxHeight: [{ type: Input }],
    width: [{ type: Input }],
    rowHeight: [{ type: Input }],
    autoResizeWidth: [{ type: Input }],
    source: [{ type: Input }],
    columns: [{ type: Input }],
    paging: [{ type: Input }],
    verticalGrid: [{ type: Input }],
    horizontalGrid: [{ type: Input }],
    theme: [{ type: Input }],
    rowColoring: [{ type: Input }],
    rowSelecting: [{ type: Input }],
    loading: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    sorting: [{ type: Input }],
    searching: [{ type: Input }],
    filtering: [{ type: Input }],
    quickFilters: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    infoPanel: [{ type: Input }],
    aggregation: [{ type: Input }],
    columnMenu: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    itemsSelected: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }],
    searchPhraseChanged: [{ type: Output }]
};
if (false) {
    /**
     * INPUTS
     * @type {?}
     */
    GridGateway.prototype.columnHeaderTop;
    /** @type {?} */
    GridGateway.prototype.columnHeaderBottom;
    /** @type {?} */
    GridGateway.prototype.maxHeight;
    /** @type {?} */
    GridGateway.prototype.width;
    /** @type {?} */
    GridGateway.prototype.rowHeight;
    /** @type {?} */
    GridGateway.prototype.autoResizeWidth;
    /** @type {?} */
    GridGateway.prototype.source;
    /** @type {?} */
    GridGateway.prototype.columns;
    /** @type {?} */
    GridGateway.prototype.paging;
    /** @type {?} */
    GridGateway.prototype.verticalGrid;
    /** @type {?} */
    GridGateway.prototype.horizontalGrid;
    /** @type {?} */
    GridGateway.prototype.theme;
    /** @type {?} */
    GridGateway.prototype.rowColoring;
    /** @type {?} */
    GridGateway.prototype.rowSelecting;
    /** @type {?} */
    GridGateway.prototype.loading;
    /** @type {?} */
    GridGateway.prototype.virtualScroll;
    /** @type {?} */
    GridGateway.prototype.sorting;
    /** @type {?} */
    GridGateway.prototype.searching;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.filtering;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.quickFilters;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.editMode;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.cellEditing;
    /** @type {?} */
    GridGateway.prototype.infoPanel;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.aggregation;
    /** @type {?} */
    GridGateway.prototype.columnMenu;
    /**
     * OUTPUTS
     * @type {?}
     */
    GridGateway.prototype.pageChanged;
    /** @type {?} */
    GridGateway.prototype.pageSizeChanged;
    /** @type {?} */
    GridGateway.prototype.itemsSelected;
    /** @type {?} */
    GridGateway.prototype.columnsChanged;
    /** @type {?} */
    GridGateway.prototype.containerWidthChanged;
    /** @type {?} */
    GridGateway.prototype.sourceEdited;
    /** @type {?} */
    GridGateway.prototype.cellEditEntered;
    /** @type {?} */
    GridGateway.prototype.cellEditCanceled;
    /** @type {?} */
    GridGateway.prototype.cellEditSubmitted;
    /** @type {?} */
    GridGateway.prototype.searchPhraseChanged;
    /**
     * \@internal
     * @type {?}
     */
    GridGateway.prototype.columnsConfig;
    /** @type {?} */
    GridGateway.prototype.themeConfig;
    /** @type {?} */
    GridGateway.prototype.rowColoringConfig;
    /** @type {?} */
    GridGateway.prototype.columnMenuConfig;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridColumnConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridThemeConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridRowColoringConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridColumnMenuConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridPagingConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class GenericBuilder {
    /**
     * @return {?}
     */
    build() {
        return this.buildObject();
    }
}
if (false) {
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    GenericBuilder.prototype.buildObject = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePagingDefinitionBuilder extends GenericBuilder {
    /**
     * @param {?} enabled
     */
    constructor(enabled) {
        super();
        this.enabled = enabled;
    }
    /**
     * @protected
     * @return {?}
     */
    buildObject() {
        return new StructurePagingDefinition(this.enabled);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinitionBuilder.prototype.enabled;
}
class StructurePagingDefinitionDefaultBuilder extends StructurePagingDefinitionBuilder {
    constructor() {
        super(StructurePagingDefinitionDefaultBuilder.defaultEnabled);
    }
}
StructurePagingDefinitionDefaultBuilder.defaultEnabled = true;
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinitionDefaultBuilder.defaultEnabled;
}
class StructurePagingDefinition {
    /**
     * @param {?} enabled
     */
    constructor(enabled) {
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
StructurePagingDefinition.Builder = StructurePagingDefinitionBuilder;
StructurePagingDefinition.DefaultBuilder = StructurePagingDefinitionDefaultBuilder;
if (false) {
    /** @type {?} */
    StructurePagingDefinition.Builder;
    /** @type {?} */
    StructurePagingDefinition.DefaultBuilder;
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinition.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureDefinitionBuilder extends GenericBuilder {
    /**
     * @param {?} headerEnabled
     * @param {?} bottomPaging
     * @param {?} topPaging
     */
    constructor(headerEnabled, bottomPaging, topPaging) {
        super();
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = true;
    }
    /**
     * @protected
     * @return {?}
     */
    buildObject() {
        return new StructureDefinition(this.headerEnabled, this.bottomPaging, this.topPaging, this.border);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    withHeader(enabled) {
        this.headerEnabled = enabled;
        return this;
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    withBottomPaging(paging) {
        this.bottomPaging = paging;
        return this;
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    withTopPaging(paging) {
        this.topPaging = paging;
        return this;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    withBorder(enabled) {
        this.border = enabled;
        return this;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.border;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.headerEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.bottomPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.topPaging;
}
class StructureDefinitionDefaultBuilder extends StructureDefinitionBuilder {
    constructor() {
        super(StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging);
    }
}
StructureDefinitionDefaultBuilder.defaultHeaderEnabled = true;
StructureDefinitionDefaultBuilder.defaultBottomPaging = new StructurePagingDefinition.DefaultBuilder().build();
StructureDefinitionDefaultBuilder.defaultTopPaging = new StructurePagingDefinition.DefaultBuilder().build();
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionDefaultBuilder.defaultHeaderEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionDefaultBuilder.defaultBottomPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionDefaultBuilder.defaultTopPaging;
}
class StructureDefinition {
    /**
     * @param {?} headerEnabled
     * @param {?} bottomPaging
     * @param {?} topPaging
     * @param {?} border
     */
    constructor(headerEnabled, bottomPaging, topPaging, border) {
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = border;
    }
    /**
     * @return {?}
     */
    isHeaderEnabled() {
        return this.headerEnabled;
    }
    /**
     * @return {?}
     */
    isBorderEnabled() {
        return this.border;
    }
    /**
     * @return {?}
     */
    getBottomPaging() {
        return this.bottomPaging;
    }
    /**
     * @return {?}
     */
    getTopPaging() {
        return this.topPaging;
    }
}
StructureDefinition.Builder = StructureDefinitionBuilder;
StructureDefinition.DefaultBuilder = StructureDefinitionDefaultBuilder;
if (false) {
    /** @type {?} */
    StructureDefinition.Builder;
    /** @type {?} */
    StructureDefinition.DefaultBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.headerEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.bottomPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.topPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.border;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
const gridStructureDefinition = new StructureDefinition.DefaultBuilder().build();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const gridProviders = (/** @type {?} */ ([{
        provide: StructureDefinition,
        useValue: gridStructureDefinition
    }]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const structureParentComponent = new InjectionToken('StructureParentComponent');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridIdGenerator {
    /**
     * @return {?}
     */
    generateId() {
        GridIdGenerator.index++;
        return GridIdGenerator.PREFIX + GridIdGenerator.index;
    }
}
GridIdGenerator.PREFIX = 'gui-grid-';
GridIdGenerator.index = 0;
GridIdGenerator.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.PREFIX;
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.index;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridRegister {
    constructor() {
        this.gridMap = new Map();
    }
    // structureId: StructureId
    /**
     * @param {?} gridId
     * @param {?} component
     * @param {?} structureId
     * @return {?}
     */
    register(gridId, component, structureId) {
        this.gridMap.set(gridId, { component, structureId });
    }
    /**
     * @param {?} gridId
     * @return {?}
     */
    unregister(gridId) {
        this.gridMap.delete(gridId);
    }
    /**
     * @param {?} gridId
     * @return {?}
     */
    getValues(gridId) {
        return this.gridMap.get(gridId);
    }
}
GridRegister.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridRegister.prototype.gridMap;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function GridConsoleApi() { }
if (false) {
    /**
     * @param {?} enabled
     * @return {?}
     */
    GridConsoleApi.prototype.changeColumnHeaderTop = function (enabled) { };
}
class GridConsoleApiProvider {
    /**
     * @param {?} gridComponent
     * @param {?} structureId
     */
    constructor(gridComponent, structureId) {
        this.gridComponent = gridComponent;
        this.structureId = structureId;
    } // StructureId
    // StructureId
    /**
     * @return {?}
     */
    provide() {
        /** @type {?} */
        const component = this.gridComponent;
        return {
            /**
             * @param {?} enabled
             * @return {?}
             */
            changeColumnHeaderTop(enabled) {
                component.columnHeaderTop = enabled;
                component.detectChanges();
            }
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridConsoleApiProvider.prototype.gridComponent;
    /**
     * @type {?}
     * @private
     */
    GridConsoleApiProvider.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const gridSelector = 'gui-grid';
class GridComponent extends GridGateway {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} gridRegister
     * @param {?} gridIdGenerator
     */
    constructor(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator) {
        super();
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.gridRegister = gridRegister;
        this.gridIdGenerator = gridIdGenerator;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
                    return new GridConsoleApiProvider(gridConsoleConfig.component, gridConsoleConfig.structureId).provide();
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
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: gridSelector,
                template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t[aggregation]=\"aggregation\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelecting]=\"rowSelecting\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[theme]=\"themeConfig\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\">\n</gui-structure>\n",
                providers: [
                    ...gridProviders,
                    {
                        provide: structureParentComponent,
                        useExisting: GridComponent
                    }
                ],
                host: {
                    '[class]': `"${gridSelector}"`,
                    '[style.height]': 'maxHeight'
                },
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-grid{display:block;width:100%}"]
            }] }
];
/** @nocollapse */
GridComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: GridRegister },
    { type: GridIdGenerator }
];
GridComponent.propDecorators = {
    structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
    gridId: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GridComponent.prototype.structureRef;
    /** @type {?} */
    GridComponent.prototype.gridId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.localGridId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.gridRegister;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.gridIdGenerator;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fabricImports = [
    FabricBadgeModule,
    FabricButtonModule,
    FabricButtonGroupModule,
    FabricCheckboxModule,
    FabricChipModule,
    FabricDropdownModule,
    FabricRadioButtonModule,
    FabricRadioGroupModule,
    FabricProgressBarModule,
    FabricProgressSpinnerModule,
    FabricSelectModule,
    FabricSpinnerModule,
    FabricTabModule,
    FabricToggleButtonModule,
    FabricInputModule,
    FabricDialogModule,
    FabricInlineDialogModule,
    FabricTabModule
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Reactive {
    /**
     * @protected
     */
    constructor() {
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe();
    }
    /**
     * @protected
     * @return {?}
     */
    unsubscribe() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @protected
     * @return {?}
     */
    takeUntil() {
        return takeUntil(this.unsubscribe$);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Reactive.prototype.unsubscribe$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class SmartComponent extends Reactive {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class StructureRepository {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        this.unsubscribe$ = new Subject();
        domainEventBus
            .ofEvent(...this.forEvents())
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            try {
                this.subs(event);
            }
            catch (e) {
                console.error(e);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureRepository.prototype.unsubscribe$;
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureRepository.prototype.onStructure = function (aggregateId) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    StructureRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    StructureRepository.prototype.subs = function (event) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingRepository {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    on(structureId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getId().toString() === structureId.toString())), map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getPaging())));
    }
}
PagingRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingRepository.ctorParameters = () => [
    { type: StructureRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingRepository.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureId extends AggregateId {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const globalStructureId = new StructureId('-1');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingReadModelService {
    /**
     * @param {?} pagingRepository
     */
    constructor(pagingRepository) {
        this.pagingRepository = pagingRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onPaging(structureId = globalStructureId) {
        return this.pagingRepository.on(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSinglePaging(structureId = globalStructureId) {
        return this.onPaging(structureId)
            .pipe(take(1));
    }
}
PagingReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingReadModelService.ctorParameters = () => [
    { type: PagingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingReadModelService.prototype.pagingRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetPagingCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} config
     */
    constructor(structureId, config) {
        super(structureId, 'SetPagingCommand');
        this.config = config;
    }
    /**
     * @return {?}
     */
    getPagingConfig() {
        return this.config;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetPagingCommand.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangePagesizeCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} pageSize
     */
    constructor(structureId, pageSize) {
        super(structureId, 'ChangePagesizeCommand');
        this.pageSize = pageSize;
    }
    /**
     * @return {?}
     */
    getPageSize() {
        return this.pageSize;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangePagesizeCommand.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NextPageCommand extends Command {
    /**
     * @param {?} structureId
     */
    constructor(structureId) {
        super(structureId, 'NextPageCommand');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PrevPageCommand extends Command {
    /**
     * @param {?} structureId
     */
    constructor(structureId) {
        super(structureId, 'PrevPageCommand');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} paging
     * @return {?}
     */
    setPaging(structureId, paging) {
        this.commandDispatcher.dispatch(new SetPagingCommand(structureId, paging));
    }
    /**
     * @param {?} structureId
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(structureId, pageSize) {
        this.commandDispatcher.dispatch(new ChangePagesizeCommand(structureId, pageSize));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    nextPage(structureId) {
        this.commandDispatcher.dispatch(new NextPageCommand(structureId));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    prevPage(structureId) {
        this.commandDispatcher.dispatch(new PrevPageCommand(structureId));
    }
}
PagingDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingCommandService {
    /**
     * @param {?} pagingDispatcher
     */
    constructor(pagingDispatcher) {
        this.pagingDispatcher = pagingDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    enable(structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    disable(structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    }
    /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    setPaging(paging, structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, paging);
    }
    /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    changePageSize(pageSize, structureId = globalStructureId) {
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    nextPage(structureId = globalStructureId) {
        this.pagingDispatcher.nextPage(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    prevPage(structureId = globalStructureId) {
        this.pagingDispatcher.prevPage(structureId);
    }
    /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @return {?}
     */
    goToPage(pageNumber, currentPage) {
        if (currentPage < pageNumber) {
            while (currentPage !== pageNumber) {
                this.nextPage();
                currentPage += 1;
            }
        }
        else {
            while (currentPage !== pageNumber) {
                this.prevPage();
                currentPage -= 1;
            }
        }
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changePagerTop(enabled, structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changePagerBottom(enabled, structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    }
}
PagingCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingCommandService.ctorParameters = () => [
    { type: PagingDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingCommandService.prototype.pagingDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSourceOriginRepository {
    constructor() {
        this.origin = new Map();
        this.origin$ = new ReplaySubject();
    }
    /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    setOrigin(origin, structureId) {
        this.origin.set(structureId.toString(), origin);
        this.origin$.next(this.origin);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onOrigin(structureId) {
        return this.origin$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
}
StructureSourceOriginRepository.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceOriginRepository.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    StructureSourceOriginRepository.prototype.origin$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePreparedItemsRepository {
    constructor() {
        this.origin = new Map();
        this.origin$ = new ReplaySubject();
    }
    /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    setItems(origin, structureId) {
        this.origin.set(structureId.toString(), origin);
        this.origin$.next(this.origin);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPreparedItems(structureId) {
        return this.origin$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
}
StructurePreparedItemsRepository.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsRepository.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsRepository.prototype.origin$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceReadModelService {
    /**
     * @param {?} structureRepository
     * @param {?} structurePreparedItemsRepository
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onEntities(structureId = globalStructureId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getEntities())), distinctUntilChanged((/**
         * @param {?} ents1
         * @param {?} ents2
         * @return {?}
         */
        (ents1, ents2) => {
            if (ents1.length !== ents2.length) {
                return false;
            }
            /** @type {?} */
            let flag = true;
            ents1.forEach((/**
             * @param {?} ent
             * @param {?} index
             * @return {?}
             */
            (ent, index) => {
                if (!ent.equals(ents2[index])) {
                    flag = false;
                    return;
                }
            }));
            return flag;
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onEntitiesSize(structureId = globalStructureId) {
        return this.onEntities(structureId)
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        (entities) => {
            return entities.length;
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSingleEntities(structureId = globalStructureId) {
        return this.onEntities(structureId)
            .pipe(take(1));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onOriginSize(structureId = globalStructureId) {
        return this.structureSourceOriginRepository
            .onOrigin(structureId)
            .pipe(map((/**
         * @param {?} origin
         * @return {?}
         */
        origin => origin.length)));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onLoading(structureId = globalStructureId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getSource().isLoading())));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onPreparedEntities(structureId = globalStructureId) {
        return this.structurePreparedItemsRepository.onPreparedItems(structureId);
    }
}
SourceReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceReadModelService.ctorParameters = () => [
    { type: StructureRepository },
    { type: StructurePreparedItemsRepository },
    { type: StructureSourceOriginRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceReadModelService.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    SourceReadModelService.prototype.structurePreparedItemsRepository;
    /**
     * @type {?}
     * @private
     */
    SourceReadModelService.prototype.structureSourceOriginRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class Archive {
    /**
     * @protected
     * @param {?=} value
     */
    constructor(value) {
        if (value) {
            this.archive$ = new BehaviorSubject(value);
        }
        else {
            this.archive$ = new ReplaySubject(1);
        }
    }
    /**
     * @return {?}
     */
    onValue() {
        return this.archive$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.archive$.next(value);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Archive.prototype.archive$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePagingDisplayModeArchive extends Archive {
    constructor() {
        super(PagingDisplayMode.BASIC);
    }
    /**
     * @return {?}
     */
    onValue() {
        return super.onValue();
        // .pipe(
        // 	distinctUntilChanged()
        // );
    }
}
StructurePagingDisplayModeArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructurePagingDisplayModeArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePagingComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} pagingQueryService
     * @param {?} pagingCommandService
     * @param {?} sourceQueryService
     * @param {?} structurePagingDisplayModeArchive
     */
    constructor(changeDetectorRef, pagingQueryService, pagingCommandService, sourceQueryService, structurePagingDisplayModeArchive) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.pagingQueryService = pagingQueryService;
        this.pagingCommandService = pagingCommandService;
        this.sourceQueryService = sourceQueryService;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        this.alternativeDisplay = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structurePagingDisplayModeArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        (mode) => {
            this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
            this.changeDetectorRef.detectChanges();
        }));
        this.pagingQueryService
            .onPaging()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        (paging) => {
            this.paging = paging;
            this.changeDetectorRef.detectChanges();
        }));
        this.sourceQueryService
            .onOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.sourceSize = size;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        this.pagingCommandService.changePageSize(pageSize);
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (!this.sourceSize) {
            return;
        }
        this.pagingCommandService.nextPage();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.pagingCommandService.prevPage();
    }
}
StructurePagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-paging',
                template: "<ng-container *ngIf=\"paging && !alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t[paging]=\"paging\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-paging-stats\n\t\t[paging]=\"paging\">\n\t</gui-structure-paging-stats>\n\n\t<gui-structure-paging-navigator\n\t\t(nextPageChanged)=\"nextPage()\"\n\t\t(prevPageChanged)=\"prevPage()\"\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\">\n\t</gui-structure-paging-navigator>\n\n</ng-container>\n\n<ng-container *ngIf=\"paging && alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t[paging]=\"paging\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-alternative-paging-navigator\n\t\t(nextPageChanged)=\"nextPage()\"\n\t\t(prevPageChanged)=\"prevPage()\"\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\">\n\n\t\t<gui-structure-alternative-paging-pages\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-structure-alternative-paging-pages>\n\n\t</gui-structure-alternative-paging-navigator>\n\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StructurePagingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: PagingReadModelService },
    { type: PagingCommandService },
    { type: SourceReadModelService },
    { type: StructurePagingDisplayModeArchive }
];
if (false) {
    /** @type {?} */
    StructurePagingComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingComponent.prototype.paging;
    /** @type {?} */
    StructurePagingComponent.prototype.alternativeDisplay;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingQueryService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingCommandService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.sourceQueryService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.structurePagingDisplayModeArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Paging {
    /**
     * @param {?} enabled
     * @param {?} page
     * @param {?} pageSize
     * @param {?} pageSizes
     * @param {?} pagerTop
     * @param {?} pagerBottom
     * @param {?} isNextDisabled
     * @param {?} isPrevDisabled
     * @param {?} start
     * @param {?} end
     * @param {?} sourceSize
     */
    constructor(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, isNextDisabled, isPrevDisabled, start, end, sourceSize) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
        this.isNextDisabled = isNextDisabled;
        this.isPrevDisabled = isPrevDisabled;
        this.start = start;
        this.end = end;
        this.sourceSize = sourceSize;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @return {?}
     */
    getPage() {
        return this.page;
    }
    /**
     * @return {?}
     */
    getPageSize() {
        return this.pageSize;
    }
    /**
     * @return {?}
     */
    getPageSizes() {
        return this.pageSizes;
    }
    /**
     * @return {?}
     */
    isPagerTop() {
        return this.pagerTop;
    }
    /**
     * @return {?}
     */
    isPagerBottom() {
        return this.pagerBottom;
    }
    /**
     * @return {?}
     */
    isNextPageDisabled() {
        return this.isNextDisabled;
    }
    /**
     * @return {?}
     */
    isPrevPageDisabled() {
        return this.isPrevDisabled;
    }
    /**
     * @return {?}
     */
    getStart() {
        return this.start;
    }
    /**
     * @return {?}
     */
    getEnd() {
        return this.end;
    }
    /**
     * @return {?}
     */
    getSourceSize() {
        return this.sourceSize;
    }
    /**
     * @param {?} currentPage
     * @param {?} numberOfVisiblePages
     * @param {?} page
     * @return {?}
     */
    calculateVisiblePages(currentPage, numberOfVisiblePages, page) {
        return currentPage - numberOfVisiblePages < page && page < currentPage + numberOfVisiblePages;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    sample(source) {
        /** @type {?} */
        let start = this.getStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.getEnd());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.page;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pageSizes;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pagerTop;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pagerBottom;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.isNextDisabled;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.isPrevDisabled;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.start;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.end;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.sourceSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePagingNavigatorComponent {
    constructor() {
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.calculatePrev();
        this.calculateNext();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.prevPageChanged.emit();
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.nextPageChanged.emit();
    }
    /**
     * @private
     * @return {?}
     */
    calculatePrev() {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    }
    /**
     * @private
     * @return {?}
     */
    calculateNext() {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    }
}
StructurePagingNavigatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-paging-navigator',
                template: "<gui-button-group>\n\t<button (click)=\"prevPage()\"\n\t\t\t[disabled]=\"prevDisabled\"\n\t\t\tclass=\"gui-structure-paging-navigator-prev\"\n\t\t\tgui-button>\n\t\tPrev\n\t</button>\n\n\t<button (click)=\"nextPage()\"\n\t\t\t[disabled]=\"nextDisabled\"\n\t\t\tclass=\"gui-structure-paging-navigator-next\"\n\t\t\tgui-button>\n\t\tNext\n\t</button>\n</gui-button-group>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
StructurePagingNavigatorComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }],
    nextPageChanged: [{ type: Output }],
    prevPageChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.paging;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.nextPageChanged;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.prevPageChanged;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.prevDisabled;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.nextDisabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePagingSelectComponent {
    constructor() {
        this.pageSizeChanged = new EventEmitter();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        this.pageSizeChanged.emit(pageSize);
    }
}
StructurePagingSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-paging-select',
                template: "<span>Items per page:</span>\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"paging.getPageSizes()\"\n\t\t\t[selected]=\"paging.getPageSize()\"\n\t\t\t[width]=\"25\">\n</gui-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
StructurePagingSelectComponent.propDecorators = {
    paging: [{ type: Input }],
    pageSizeChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructurePagingSelectComponent.prototype.paging;
    /** @type {?} */
    StructurePagingSelectComponent.prototype.pageSizeChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePagingStatsComponent {
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.calculate();
    }
    /**
     * @return {?}
     */
    calculate() {
        if (this.paging) {
            this.firstItemIndex = this.paging.getStart();
            this.lastItemIndex = this.paging.getEnd();
            this.sourceSize = this.paging.getSourceSize();
        }
    }
    /**
     * @return {?}
     */
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
}
StructurePagingStatsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-paging-stats',
                template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-structure-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\tof\n\t</span>\n\t<span class=\"gui-structure-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-structure-paging-source-stats gui-structure-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
StructurePagingStatsComponent.propDecorators = {
    paging: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructurePagingStatsComponent.prototype.paging;
    /** @type {?} */
    StructurePagingStatsComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingStatsComponent.prototype.firstItemIndex;
    /** @type {?} */
    StructurePagingStatsComponent.prototype.lastItemIndex;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAlternativePagingNavigatorComponent {
    /**
     * @param {?} pagingCommandService
     */
    constructor(pagingCommandService) {
        this.pagingCommandService = pagingCommandService;
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.calculatePrev();
        this.calculateNext();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.prevPageChanged.emit();
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.nextPageChanged.emit();
    }
    /**
     * @return {?}
     */
    firstPage() {
        this.pagingCommandService.goToPage(1, this.paging.getPage());
    }
    /**
     * @return {?}
     */
    lastPage() {
        /** @type {?} */
        let numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
        this.pagingCommandService.goToPage(numberOfPages, this.paging.getPage());
    }
    /**
     * @private
     * @return {?}
     */
    calculatePrev() {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    }
    /**
     * @private
     * @return {?}
     */
    calculateNext() {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    }
}
StructureAlternativePagingNavigatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-alternative-paging-navigator',
                template: "<button (click)=\"firstPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tgui-button>\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.167\" height=\"13\" viewBox=\"0 0 15.167 13\">\n\t\t<g id=\"Group_43\" data-name=\"Group 43\" transform=\"translate(1830.267 629.79) rotate(180)\">\n\t\t\t<g id=\"Group_38\" data-name=\"Group 38\" transform=\"translate(1815.1 616.79)\">\n\t\t\t\t<path id=\"Path_57\" data-name=\"Path 57\" d=\"M8.59,17.473,13.947,12.5,8.59,7.528,10.239,6l7.018,6.5L10.239,19Z\" transform=\"translate(-8.59 -6)\" fill=\"#333\"/>\n\t\t\t</g>\n\t\t\t<g id=\"Group_39\" data-name=\"Group 39\" transform=\"translate(1821.6 616.79)\">\n\t\t\t\t<path id=\"Path_57-2\" data-name=\"Path 57\" d=\"M8.59,17.473,13.947,12.5,8.59,7.528,10.239,6l7.018,6.5L10.239,19Z\" transform=\"translate(-8.59 -6)\" fill=\"#333\"/>\n\t\t\t</g>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"prevPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tclass=\"gui-structure-paging-navigator-prev\"\n\t\tgui-button>\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.667\" height=\"13\" viewBox=\"0 0 8.667 13\">\n\t\t<g id=\"Group_42\" data-name=\"Group 42\" transform=\"translate(1842.767 640) rotate(180)\">\n\t\t\t<path id=\"Path_57\" data-name=\"Path 57\" d=\"M8.59,17.473,13.947,12.5,8.59,7.528,10.239,6l7.018,6.5L10.239,19Z\" transform=\"translate(1825.51 621)\" fill=\"#333\"/>\n\t\t</g>\n\t</svg>\n\tPrev\n</button>\n\n<ng-content></ng-content>\n\n<button (click)=\"nextPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tclass=\"gui-structure-paging-navigator-next\"\n\t\tgui-button>\n\tNext\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.667\" height=\"13\" viewBox=\"0 0 8.667 13\">\n\t\t<g id=\"Group_37\" data-name=\"Group 37\" transform=\"translate(-1834.1 -627)\">\n\t\t\t<path id=\"Path_57\" data-name=\"Path 57\" d=\"M8.59,17.473,13.947,12.5,8.59,7.528,10.239,6l7.018,6.5L10.239,19Z\" transform=\"translate(1825.51 621)\" fill=\"#333\"/>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"lastPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tgui-button>\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.167\" height=\"13\" viewBox=\"0 0 15.167 13\">\n\t\t<g id=\"Group_41\" data-name=\"Group 41\" transform=\"translate(-1815.1 -616.79)\">\n\t\t\t<g id=\"Group_38\" data-name=\"Group 38\" transform=\"translate(1815.1 616.79)\">\n\t\t\t\t<path id=\"Path_57\" data-name=\"Path 57\" d=\"M8.59,17.473,13.947,12.5,8.59,7.528,10.239,6l7.018,6.5L10.239,19Z\" transform=\"translate(-8.59 -6)\" fill=\"#333\"/>\n\t\t\t</g>\n\t\t\t<g id=\"Group_39\" data-name=\"Group 39\" transform=\"translate(1821.6 616.79)\">\n\t\t\t\t<path id=\"Path_57-2\" data-name=\"Path 57\" d=\"M8.59,17.473,13.947,12.5,8.59,7.528,10.239,6l7.018,6.5L10.239,19Z\" transform=\"translate(-8.59 -6)\" fill=\"#333\"/>\n\t\t\t</g>\n\t\t</g>\n\t</svg>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StructureAlternativePagingNavigatorComponent.ctorParameters = () => [
    { type: PagingCommandService }
];
StructureAlternativePagingNavigatorComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }],
    nextPageChanged: [{ type: Output }],
    prevPageChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.paging;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.sourceSize;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.nextPageChanged;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.prevPageChanged;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.prevDisabled;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.nextDisabled;
    /**
     * @type {?}
     * @private
     */
    StructureAlternativePagingNavigatorComponent.prototype.pagingCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAlternativePagingPagesComponent {
    /**
     * @param {?} pagingCommandService
     */
    constructor(pagingCommandService) {
        this.pagingCommandService = pagingCommandService;
        this.sourceSize = 0;
        this.numberOfVisiblePages = 3;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.calculate();
    }
    /**
     * @return {?}
     */
    calculate() {
        if (this.paging && this.sourceSize) {
            /** @type {?} */
            let numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
            this.currentPage = this.paging.getPage();
            this.pages = [];
            if (this.pages.length <= numberOfPages) {
                for (let i = 1; i <= numberOfPages; i++) {
                    this.pages.push(i);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    goToPage(pageNumber) {
        /** @type {?} */
        const currentPage = this.paging.getPage();
        this.pagingCommandService.goToPage(pageNumber, currentPage);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    calculateVisiblePages(page) {
        return this.paging.calculateVisiblePages(this.currentPage, this.numberOfVisiblePages, page);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    activePage(page) {
        return this.currentPage === page;
    }
}
StructureAlternativePagingPagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-alternative-paging-pages',
                template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\">\n\t\t\t<div\n\t\t\t\t(click)=\"goToPage(page)\"\n\t\t\t\t[class.gui-paging-active-page]=\"activePage(page)\" class=\"gui-paging-page\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-structure-paging-source-stats gui-structure-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StructureAlternativePagingPagesComponent.ctorParameters = () => [
    { type: PagingCommandService }
];
StructureAlternativePagingPagesComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.paging;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.sourceSize;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.currentPage;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.pages;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.numberOfVisiblePages;
    /**
     * @type {?}
     * @private
     */
    StructureAlternativePagingPagesComponent.prototype.pagingCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePagingModule {
}
StructurePagingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule
                ],
                declarations: [
                    StructurePagingComponent,
                    StructurePagingNavigatorComponent,
                    StructurePagingSelectComponent,
                    StructurePagingStatsComponent,
                    StructureAlternativePagingNavigatorComponent,
                    StructureAlternativePagingPagesComponent
                ],
                exports: [
                    StructurePagingComponent,
                    StructurePagingNavigatorComponent,
                    StructurePagingSelectComponent,
                    StructurePagingStatsComponent,
                    StructureAlternativePagingNavigatorComponent,
                    StructureAlternativePagingPagesComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberFormatterPipe {
    /**
     * @param {?} number
     * @return {?}
     */
    transform(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
}
NumberFormatterPipe.decorators = [
    { type: Pipe, args: [{ name: 'numberFormatter' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberFormatterModule {
}
NumberFormatterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NumberFormatterPipe
                ],
                exports: [
                    NumberFormatterPipe
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureInfoModalComponent {
}
StructureInfoModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-info-dialog',
                template: `
		<div class="gui-structure-info-modal">

			<p class="gui-dialog-title gui-info-title">Generic UI Grid</p>


			<p class="gui-info-version">
				ver. 0.8.1
			</p>

			<p class="gui-quote">
				"The best way to success is to help others succeed."
			</p>

			<br/>

			<section>
				<p>Links:</p>
				<ul>

					<li>
						<a href="https://generic-ui.com/">Website</a>
					</li>
					<li>
						<a href="https://generic-ui.com/guide/">Documentation</a>
					</li>
					<li>
						<a href="https://github.com/generic-ui/generic-ui/tree/master/ngx-grid">Github</a>
					</li>
				</ul>

				<br/>

				<p>Feedback:</p>
				<ul>

					<li>
						<a href="https://github.com/generic-ui/generic-ui/issues">Report a bug</a>
					</li>
					<li>
						<a href="https://github.com/generic-ui/generic-ui/issues">Suggest an idea</a>
					</li>

				</ul>
			</section>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCreatedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'StructureCreatedEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VerticalScrollEnabledSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'VerticalScrollEnabledSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryStructureStore extends InMemoryStore {
}
InMemoryStructureStore.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectedRowsList {
    /**
     * @param {?} rowIds
     */
    constructor(rowIds) {
        this.rowIds = rowIds;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    isRowSelected(entity) {
        return !!(this.rowIds.find((/**
         * @param {?} id
         * @return {?}
         */
        (id) => entity.equalsById(id))));
    }
    /**
     * @return {?}
     */
    getIds() {
        return this.rowIds;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowsList.prototype.rowIds;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Formation {
    /**
     * @param {?} selectedRows
     */
    constructor(selectedRows) {
        this.selectedRowsList = new SelectedRowsList(selectedRows);
    }
    /**
     * @return {?}
     */
    getSelectedRows() {
        return this.selectedRowsList;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Formation.prototype.selectedRowsList;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationConverter {
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        /** @type {?} */
        const rows = aggregate.getSelectedRows();
        return new Formation(rows);
    }
}
FormationConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaCssClass {
    /**
     * @param {?} verticalGrid
     * @param {?} horizontalGrid
     * @param {?} theme
     * @param {?} rowColoring
     */
    constructor(verticalGrid, horizontalGrid, theme, rowColoring) {
        this.verticalGrid = verticalGrid;
        this.horizontalGrid = horizontalGrid;
        this.theme = theme;
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    getRowColoring() {
        return this.rowColoring;
    }
}
if (false) {
    /** @type {?} */
    SchemaCssClass.prototype.verticalGrid;
    /** @type {?} */
    SchemaCssClass.prototype.horizontalGrid;
    /** @type {?} */
    SchemaCssClass.prototype.theme;
    /** @type {?} */
    SchemaCssClass.prototype.rowColoring;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Schema {
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} containerHeight
     * @param {?} verticalGridEnabled
     * @param {?} horizontalGridEnabled
     * @param {?} theme
     * @param {?} columnHeader
     * @param {?} rowColoring
     */
    constructor(width, height, containerHeight, verticalGridEnabled, horizontalGridEnabled, theme, columnHeader, rowColoring) {
        this.width = width;
        this.height = height;
        this.containerHeight = containerHeight;
        this.verticalGridEnabled = verticalGridEnabled;
        this.horizontalGridEnabled = horizontalGridEnabled;
        this.theme = theme;
        this.columnHeader = columnHeader;
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    getRowColoring() {
        return this.rowColoring;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return this.theme;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.height;
    }
    /**
     * @return {?}
     */
    getContainerHeight() {
        return this.containerHeight;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    isVerticalGridEnabled() {
        return this.verticalGridEnabled;
    }
    /**
     * @return {?}
     */
    isHorizontalGridEnabled() {
        return this.horizontalGridEnabled;
    }
    /**
     * @return {?}
     */
    getColumnHeader() {
        return this.columnHeader;
    }
    /**
     * @return {?}
     */
    getCssClasses() {
        return new SchemaCssClass(this.isVerticalGridEnabled(), this.isHorizontalGridEnabled(), this.getTheme(), this.getRowColoring());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.width;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.height;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.verticalGridEnabled;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.horizontalGridEnabled;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.columnHeader;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.rowColoring;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaColumnHeader {
    /**
     * @param {?} top
     * @param {?} bottom
     */
    constructor(top, bottom) {
        this.top = top;
        this.bottom = bottom;
    }
    /**
     * @return {?}
     */
    isTopHeaderEnabled() {
        return this.top;
    }
    /**
     * @return {?}
     */
    isBottomHeaderEnabled() {
        return this.bottom;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaColumnHeader.prototype.top;
    /**
     * @type {?}
     * @private
     */
    SchemaColumnHeader.prototype.bottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaConverter {
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        /** @type {?} */
        const columnHeader = aggregate.getColumnHeader();
        return new Schema(aggregate.getWidth(), aggregate.getHeight(), aggregate.getContainerHeight(), aggregate.isVerticalGridEnabled(), aggregate.isHorizontalGridEnabled(), aggregate.getTheme(), this.convertColumnHeader(columnHeader), aggregate.getRowColoring());
    }
    /**
     * @private
     * @param {?} columnHeader
     * @return {?}
     */
    convertColumnHeader(columnHeader) {
        return new SchemaColumnHeader(columnHeader.isHeaderOnTop(), columnHeader.isHeaderOnBottom());
    }
}
SchemaConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingConverter {
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        return new Paging(aggregate.isEnabled(), aggregate.getPage(), aggregate.getPageSize(), aggregate.getPageSizes(), aggregate.isPagerTop(), aggregate.isPagerBottom(), aggregate.isNextPageDisabled(), aggregate.isPrevPageDisabled(), aggregate.calculateStart(), aggregate.calculateEnd(), aggregate.getSourceSize());
    }
}
PagingConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Source {
    /**
     * @param {?} loading
     */
    constructor(loading) {
        this.loading = loading;
    }
    /**
     * @return {?}
     */
    isLoading() {
        return this.loading;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Source.prototype.loading;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceConverter {
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        return new Source(aggregate.isLoading());
    }
}
SourceConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VerticalFormationReadModel {
    /**
     * @param {?} enabled
     * @param {?} topMargin
     * @param {?} containerHeight
     * @param {?} viewportHeight
     * @param {?} rowHeight
     */
    constructor(enabled, topMargin, containerHeight, viewportHeight, rowHeight) {
        this.enabled = enabled;
        this.topMargin = topMargin;
        this.containerHeight = containerHeight;
        this.viewportHeight = viewportHeight;
        this.rowHeight = rowHeight;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @return {?}
     */
    getTopMargin() {
        return this.topMargin;
    }
    /**
     * @return {?}
     */
    getContainerHeight() {
        return this.containerHeight;
    }
    /**
     * @return {?}
     */
    getViewPortHeight() {
        return this.viewportHeight;
    }
    /**
     * @return {?}
     */
    getRowHeight() {
        return this.rowHeight;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.topMargin;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.viewportHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.rowHeight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VerticalFormationConverter {
    /**
     * @param {?} verticalFormation
     * @return {?}
     */
    convert(verticalFormation) {
        /** @type {?} */
        const enabled = verticalFormation.isEnabled();
        /** @type {?} */
        const topMargin = verticalFormation.getTopMargin();
        /** @type {?} */
        const containerHeight = verticalFormation.calcFullHeight();
        /** @type {?} */
        const viewportHeight = verticalFormation.getViewPortHeight();
        /** @type {?} */
        const rowHeight = verticalFormation.getRowHeight();
        return new VerticalFormationReadModel(enabled, topMargin, containerHeight, viewportHeight, rowHeight);
    }
}
VerticalFormationConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Structure extends ReadModel {
    /**
     * @param {?} uid
     * @param {?} formation
     * @param {?} schema
     * @param {?} paging
     * @param {?} entities
     * @param {?} source
     * @param {?} verticalFormation
     */
    constructor(uid, formation, schema, paging, entities, source, verticalFormation) {
        super(uid);
        this.formation = formation;
        this.schema = schema;
        this.paging = paging;
        this.entities = entities;
        this.source = source;
        this.verticalFormation = verticalFormation;
    }
    /**
     * @return {?}
     */
    getFormation() {
        return this.formation;
    }
    /**
     * @return {?}
     */
    getSchema() {
        return this.schema;
    }
    /**
     * @return {?}
     */
    getPaging() {
        return this.paging;
    }
    /**
     * @return {?}
     */
    getEntities() {
        return this.entities;
    }
    /**
     * @return {?}
     */
    getSource() {
        return this.source;
    }
    /**
     * @return {?}
     */
    getVerticalFormation() {
        return this.verticalFormation;
    }
    /**
     * @return {?}
     */
    getSelectedEntities() {
        /** @type {?} */
        const selectedIds = this.formation.getSelectedRows().getIds();
        return this.entities.filter((/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            return selectedIds.some((/**
             * @param {?} id
             * @return {?}
             */
            (id) => entity.equalsById(id)));
        }));
    }
    /**
     * @return {?}
     */
    getTopMargin() {
        return this.verticalFormation.getTopMargin();
    }
    /**
     * @return {?}
     */
    getContainerHeight() {
        return this.verticalFormation.getContainerHeight();
    }
    /**
     * @return {?}
     */
    isLoaderVisible() {
        if (this.getSchema().getHeight() > 150) {
            return this.getSource().isLoading();
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    isTopHeaderEnabled() {
        return this.schema.getColumnHeader().isTopHeaderEnabled();
        // && this.presentation.getColumns().length > 0; // TODO Move schema.topHeader to presentation
    }
    /**
     * @return {?}
     */
    isBottomHeaderEnabled() {
        return this.schema.getColumnHeader().isBottomHeaderEnabled();
        // && this.presentation.getColumns().length > 0; // TODO Move schema.bottomHeader to presentation
    }
    /**
     * @return {?}
     */
    isReadyToDisplay() {
        return this.entities.length > 0;
        // this.presentation.getColumns().length > 0; // TODO presentation getColumns
    }
    /**
     * @return {?}
     */
    isVerticalScrollEnabled() {
        return this.verticalFormation.isEnabled();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.formation;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.schema;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.paging;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.entities;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.source;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.verticalFormation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ItemEntity = class ItemEntity {
    /**
     * @param {?} data
     * @param {?} position
     * @param {?=} id
     * @param {?=} version
     */
    constructor(data, position, id, version = 0) {
        this.version = 0;
        this.data = data;
        this.position = position;
        this.version = version;
        if (!id) {
            this.id = RandomStringGenerator.generate();
        }
        else {
            this.id = id;
        }
    }
    /**
     * @return {?}
     */
    getData() {
        return this.data;
    }
    /**
     * @return {?}
     */
    getUiId() {
        return 'gui' + this.id.replace(/-/g, '');
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    getVersion() {
        return this.version;
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this.position;
    }
    /**
     * @return {?}
     */
    isEven() {
        return this.position % 2 === 0;
    }
    /**
     * @return {?}
     */
    isOdd() {
        return this.position % 2 === 1;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    equals(entity) {
        return this.id === entity.id && this.getVersion() === entity.getVersion();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    equalsById(id) {
        return this.id === id;
    }
};
ItemEntity.ctorParameters = () => [
    { type: undefined },
    { type: Number },
    { type: String },
    { type: Number }
];
ItemEntity = __decorate([
    Entity,
    __metadata("design:paramtypes", [Object, Number, String, Number])
], ItemEntity);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.id;
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.position;
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.version;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureConverter {
    /**
     * @param {?} formationConverter
     * @param {?} schemaConverter
     * @param {?} pagingConverter
     * @param {?} sourceConverter
     * @param {?} verticalFormationConverter
     */
    constructor(formationConverter, schemaConverter, pagingConverter, sourceConverter, verticalFormationConverter) {
        this.formationConverter = formationConverter;
        this.schemaConverter = schemaConverter;
        this.pagingConverter = pagingConverter;
        this.sourceConverter = sourceConverter;
        this.verticalFormationConverter = verticalFormationConverter;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        /** @type {?} */
        const formationAggregate = aggregate.getFormation();
        /** @type {?} */
        const schemaAggregate = aggregate.getSchema();
        /** @type {?} */
        const pagingAggregate = aggregate.getPaging();
        /** @type {?} */
        const sourceQuery = aggregate.getEntities();
        /** @type {?} */
        const sourceCoordinator = aggregate.getSource();
        /** @type {?} */
        const verticalFormation = aggregate.getVerticalFormation();
        return new Structure(aggregate.getId(), this.formationConverter.convert(formationAggregate), this.schemaConverter.convert(schemaAggregate), this.pagingConverter.convert(pagingAggregate), this.convertSource(sourceQuery), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
    }
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    convertSource(source) {
        return source.map((/**
         * @param {?} originItem
         * @return {?}
         */
        (originItem) => {
            return new ItemEntity(originItem.rawData, originItem.getPosition(), originItem.id, originItem.getVersion());
        }));
    }
}
StructureConverter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConverter.ctorParameters = () => [
    { type: FormationConverter },
    { type: SchemaConverter },
    { type: PagingConverter },
    { type: SourceConverter },
    { type: VerticalFormationConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.formationConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.schemaConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.pagingConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.sourceConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.verticalFormationConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryStructureReadStore extends InMemoryReadModelStore {
    /**
     * @param {?} inMemoryProjectStore
     * @param {?} structureConverter
     */
    constructor(inMemoryProjectStore, structureConverter) {
        super(inMemoryProjectStore);
        this.inMemoryProjectStore = inMemoryProjectStore;
        this.structureConverter = structureConverter;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    toReadModel(aggregate) {
        return this.structureConverter.convert(aggregate);
    }
}
InMemoryStructureReadStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureReadStore.ctorParameters = () => [
    { type: InMemoryStructureStore },
    { type: StructureConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureReadStore.prototype.inMemoryProjectStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureReadStore.prototype.structureConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RowHeightSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'RowHeightSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VerticalFormationRepository extends Reactive {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureQueryStore
     */
    constructor(domainEventBus, inMemoryStructureQueryStore) {
        super();
        this.domainEventBus = domainEventBus;
        this.inMemoryStructureQueryStore = inMemoryStructureQueryStore;
        this.verticalFormation = new Map();
        this.verticalFormation$ = new ReplaySubject();
        this.domainEventBus
            .ofEvent(StructureCreatedEvent, VerticalScrollEnabledSetEvent, RowHeightSetEvent)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const aggregateId = event.getAggregateId();
            /** @type {?} */
            const optStructure = this.inMemoryStructureQueryStore.getById(aggregateId);
            optStructure.ifPresent((/**
             * @param {?} structure
             * @return {?}
             */
            (structure) => {
                /** @type {?} */
                const verticalFormation = structure.getVerticalFormation();
                /** @type {?} */
                const structureId = structure.getId();
                this.next(structureId, verticalFormation);
            }));
        }));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onVerticalScrollEnabled(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.isEnabled())));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onRowHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.getRowHeight())));
    }
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    onVerticalFormation(structureId) {
        return this.verticalFormation$
            .asObservable()
            .pipe(filter((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        (idToVerticalFormation) => {
            /** @type {?} */
            const key = structureId.getId();
            return idToVerticalFormation.has(key);
        })), map((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        (idToVerticalFormation) => idToVerticalFormation.get(structureId.getId()))));
    }
    /**
     * @private
     * @param {?} structureId
     * @param {?} verticalFormation
     * @return {?}
     */
    next(structureId, verticalFormation) {
        this.verticalFormation.set(structureId.toString(), verticalFormation);
        this.verticalFormation$.next(this.verticalFormation);
    }
}
VerticalFormationRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VerticalFormationRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemoryStructureReadStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.verticalFormation;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.verticalFormation$;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.inMemoryStructureQueryStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureReadModelService {
    /**
     * @param {?} structureRepository
     * @param {?} verticalFormationRepository
     */
    constructor(structureRepository, verticalFormationRepository) {
        this.structureRepository = structureRepository;
        this.verticalFormationRepository = verticalFormationRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onStructure(aggregateId = globalStructureId) {
        return this.structureRepository.onStructure(aggregateId);
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onVerticalScrollEnabled(aggregateId = globalStructureId) {
        return this.structureRepository
            .onStructure(aggregateId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.isVerticalScrollEnabled())), distinctUntilChanged());
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onRowHeight(aggregateId = globalStructureId) {
        return this.verticalFormationRepository.onRowHeight(aggregateId);
    }
}
StructureReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureReadModelService.ctorParameters = () => [
    { type: StructureRepository },
    { type: VerticalFormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureReadModelService.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelService.prototype.verticalFormationRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionId extends AggregateId {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureDialogColumnManagerComponent {
}
StructureDialogColumnManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-dialog-column-manager',
                template: "<div class=\"gui-dialog-title\" >Manage Columns</div>\n\n<gui-structure-column-manager>\n\n</gui-structure-column-manager>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-dialog-column-manager]': 'true'
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureDialogColumnManagerService {
    /**
     * @param {?} injector
     * @param {?} fabricDialogService
     */
    constructor(injector, fabricDialogService) {
        this.injector = injector;
        this.fabricDialogService = fabricDialogService;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    open(compositionId) {
        /** @type {?} */
        const injector = Injector.create({ parent: this.injector, providers: [{ provide: CompositionId, useValue: compositionId }] });
        this.fabricDialogService.open(StructureDialogColumnManagerComponent, injector);
    }
}
StructureDialogColumnManagerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureDialogColumnManagerService.ctorParameters = () => [
    { type: Injector },
    { type: FabricDialogService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.fabricDialogService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureInfoPanelComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} sourceQueryService
     * @param {?} dialog
     * @param {?} compositionId
     * @param {?} menuColumnManagerService
     * @param {?} structureReadModelService
     */
    constructor(changeDetectorRef, renderer, elementRef, sourceQueryService, dialog, compositionId, menuColumnManagerService, structureReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.sourceQueryService = sourceQueryService;
        this.dialog = dialog;
        this.compositionId = compositionId;
        this.menuColumnManagerService = menuColumnManagerService;
        this.structureReadModelService = structureReadModelService;
        this.infoPanel = StructureInfoModalComponent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sourceQueryService
            .onOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.totalItemsSize = size;
            this.changeDetectorRef.detectChanges();
        }));
        this.sourceQueryService
            .onPreparedEntities()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} preparedItems
         * @return {?}
         */
        (preparedItems) => {
            this.preparedItemsSize = preparedItems.length;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            this.rowHeight = rowHeight;
            this.renderer.setStyle(this.elementRef.nativeElement, 'line-height', '30px');
        }));
    }
    /**
     * @return {?}
     */
    openInfo() {
        this.dialog.open(this.infoPanel);
    }
    /**
     * @return {?}
     */
    openColumnManager() {
        this.menuColumnManagerService.open(this.compositionId);
    }
}
StructureInfoPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-info-panel',
                template: `

		<div>

			<ng-container *ngIf="preparedItemsSize !== undefined && totalItemsSize !== undefined">
				
				<ng-container *ngIf="preparedItemsSize === totalItemsSize">
					Showing <b>{{totalItemsSize | numberFormatter}}</b> items
				</ng-container>

				<ng-container *ngIf="preparedItemsSize !== totalItemsSize">
					Showing <b>{{preparedItemsSize | numberFormatter}}</b> out of <b>{{totalItemsSize | numberFormatter}}</b> items
				</ng-container>
				
			</ng-container>

		</div>
		
		<div>
			<div class="gui-right-section">
				<div [gui-tooltip]="'Manage Columns'"
					 (click)="openColumnManager()">
					<button>C</button>
				</div>

				<span [gui-tooltip]="'Info'"
					  (click)="openInfo()">
				<button>i</button>
					Info
				</span>
			</div>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureInfoPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: SourceReadModelService },
    { type: FabricDialogService },
    { type: CompositionId },
    { type: StructureDialogColumnManagerService },
    { type: StructureReadModelService }
];
if (false) {
    /** @type {?} */
    StructureInfoPanelComponent.prototype.totalItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.preparedItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.rowHeight;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.infoPanel;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.sourceQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.menuColumnManagerService;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.structureReadModelService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureInfoPanelModule {
}
StructureInfoPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NumberFormatterModule,
                    FabricModule
                ],
                declarations: [
                    StructureInfoPanelComponent,
                    StructureInfoModalComponent
                ],
                exports: [
                    StructureInfoModalComponent,
                    StructureInfoPanelComponent
                ],
                entryComponents: [
                    StructureInfoModalComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewTemplatesComponent {
    /**
     * @param {?} view
     * @return {?}
     */
    getTemplate(view) {
        switch (view) {
            case CellView.TEXT:
                return this.textTemplate;
            case CellView.CHIP:
                return this.chipTemplate;
            case CellView.LINK:
                return this.linkTemplate;
            case CellView.IMAGE:
                return this.imageTemplate;
            case CellView.CHECKBOX:
                return this.checkboxTemplate;
            case CellView.BOLD:
                return this.boldTemplate;
            case CellView.ITALIC:
                return this.italicTemplate;
            case CellView.CUSTOM:
                return this.customTemplate;
            case CellView.FUNCTION:
                return this.functionTemplate;
            default:
                return this.textTemplate;
        }
    }
}
ViewTemplatesComponent.decorators = [
    { type: Component, args: [{
                template: `

		<ng-template #text let-element="element">
			<span [innerHTML]="element | guiSafe: 'html'"></span>
		</ng-template>

		<ng-template #number let-element="element">
			<span class="gui-cell-number">
				{{ element }}
			</span>
		</ng-template>

		<ng-template #chip let-element="element">
			<gui-chip>
				<span [innerHTML]="element | guiSafe: 'html'"></span>
			</gui-chip>
		</ng-template>

		<ng-template #link let-element="element">
			<a gui-button link="true" href="{{ element }}">
				<span [innerHTML]="element | guiSafe: 'html'"></span>
			</a>
		</ng-template>

		<ng-template #image let-element="element">
			<img src="{{ element }}"/>
		</ng-template>

		<ng-template #checkbox let-element="element">
			<span class="gui-cell-boolean">
				<gui-checkbox [checked]="!!element" [disabled]="true"></gui-checkbox>
			</span>
		</ng-template>

		<ng-template #bold let-element="element">
			<span class="gui-bold" [innerHTML]="element | guiSafe: 'html'"></span>
		</ng-template>

		<ng-template #italic let-element="element">
			<span class="gui-italic" [innerHTML]="element | guiSafe: 'html'"></span>
		</ng-template>

		<ng-template #custom let-element="element">
			{{ element }}
		</ng-template>

		<ng-template #function let-element="element">
			<gui-function-view [element]="element"></gui-function-view>
		</ng-template>

	`
            }] }
];
ViewTemplatesComponent.propDecorators = {
    textTemplate: [{ type: ViewChild, args: ['text', { read: TemplateRef, static: true },] }],
    numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
    chipTemplate: [{ type: ViewChild, args: ['chip', { read: TemplateRef, static: true },] }],
    linkTemplate: [{ type: ViewChild, args: ['link', { read: TemplateRef, static: true },] }],
    imageTemplate: [{ type: ViewChild, args: ['image', { read: TemplateRef, static: true },] }],
    checkboxTemplate: [{ type: ViewChild, args: ['checkbox', { read: TemplateRef, static: true },] }],
    boldTemplate: [{ type: ViewChild, args: ['bold', { read: TemplateRef, static: true },] }],
    italicTemplate: [{ type: ViewChild, args: ['italic', { read: TemplateRef, static: true },] }],
    customTemplate: [{ type: ViewChild, args: ['custom', { read: TemplateRef, static: true },] }],
    functionTemplate: [{ type: ViewChild, args: ['function', { read: TemplateRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    ViewTemplatesComponent.prototype.textTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.numberTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.chipTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.linkTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.imageTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.checkboxTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.boldTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.italicTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.customTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.functionTemplate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ChangedValueEmitter {
    constructor() {
        this.subject$ = new ReplaySubject(1);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    emit(value) {
        this.subject$.next(value);
    }
    /**
     * @return {?}
     */
    on() {
        return this.subject$.asObservable();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangedValueEmitter.prototype.subject$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const EditEventType = {
    SUBMIT: 0,
    BLUR: 1,
    CANCEL: 2,
};
EditEventType[EditEventType.SUBMIT] = 'SUBMIT';
EditEventType[EditEventType.BLUR] = 'BLUR';
EditEventType[EditEventType.CANCEL] = 'CANCEL';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class EditCommunicationComponent extends SmartComponent {
    constructor() {
        super(...arguments);
        this.ENTER_KEY_CODE = 13;
        this.ESC_KEY_CODE = 27;
    }
    /**
     * @return {?}
     */
    submit() {
        this.emitStatus(EditEventType.SUBMIT);
    }
    /**
     * @return {?}
     */
    cancel() {
        this.emitStatus(EditEventType.CANCEL);
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    emitStatus(status) {
        if (this.status) {
            this.status.emit(status);
        }
    }
}
EditCommunicationComponent.propDecorators = {
    value: [{ type: Input }],
    valueChanges: [{ type: Input }],
    status: [{ type: Input }],
    focus: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EditCommunicationComponent.prototype.value;
    /** @type {?} */
    EditCommunicationComponent.prototype.valueChanges;
    /** @type {?} */
    EditCommunicationComponent.prototype.status;
    /** @type {?} */
    EditCommunicationComponent.prototype.focus;
    /**
     * @type {?}
     * @protected
     */
    EditCommunicationComponent.prototype.ENTER_KEY_CODE;
    /**
     * @type {?}
     * @protected
     */
    EditCommunicationComponent.prototype.ESC_KEY_CODE;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class InputEditTemplateComponent extends EditCommunicationComponent {
    /**
     * @protected
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        super();
        this.formBuilder = formBuilder;
        this.filterFieldName = 'phrase';
        this.filterForm = this.formBuilder.group({
            [this.filterFieldName]: ['']
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value !== undefined) {
            this.filterForm.get(this.filterFieldName).setValue(this.value);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.observeChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const inputElement = this.inputRef.nativeElement;
        this.focusField(inputElement);
        this.emitValueChange(inputElement.value);
        fromEvent(inputElement, 'blur')
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.submit();
        }));
        /** @type {?} */
        const keyup$ = fromEvent(inputElement, 'keyup');
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.keyCode === this.ENTER_KEY_CODE)), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.submit();
        }));
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.keyCode === this.ESC_KEY_CODE)), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.cancel();
        }));
    }
    /**
     * @param {?} inputElement
     * @return {?}
     */
    focusField(inputElement) {
        if (this.focus) {
            inputElement.focus();
        }
    }
    /**
     * @private
     * @return {?}
     */
    observeChanges() {
        this.filterForm
            .controls[this.filterFieldName]
            .valueChanges
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.emitValueChange(value);
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    emitValueChange(value) {
        if (this.valueChanges) {
            this.valueChanges.emit(value);
        }
    }
}
InputEditTemplateComponent.propDecorators = {
    inputRef: [{ type: ViewChild, args: ['input', { static: true },] }]
};
if (false) {
    /** @type {?} */
    InputEditTemplateComponent.prototype.inputRef;
    /** @type {?} */
    InputEditTemplateComponent.prototype.filterForm;
    /** @type {?} */
    InputEditTemplateComponent.prototype.filterFieldName;
    /**
     * @type {?}
     * @private
     */
    InputEditTemplateComponent.prototype.formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberEditTemplateComponent extends InputEditTemplateComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super(fb);
    }
}
NumberEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-number-edit',
                template: `

		<form [formGroup]="filterForm" >
			<input #input [formControlName]="filterFieldName" type="number" class="gui-input" />
		</form>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NumberEditTemplateComponent.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Override decorator
 *
 * class Car {
 *     drive() {}
 * }
 *
 * class FastCar {
 * \@Override
 *     drive() {}}
 * }
 * @param {?} container
 * @param {?} key
 * @return {?}
 */
function Override(container, key) {
    /** @type {?} */
    const basePrototype = Object.getPrototypeOf(container);
    if (typeof basePrototype[key] !== 'function') {
        throw new Error('Method "' + key + '" of class "' + container.constructor.name + '" doesn\'t override any method of base class.');
    }
}
;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringEditTemplateComponent extends InputEditTemplateComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super(fb);
    }
    /**
     * @param {?} inputElement
     * @return {?}
     */
    focusField(inputElement) {
        if (this.focus) {
            inputElement.focus();
            inputElement.setSelectionRange(0, inputElement.value.length);
        }
    }
}
StringEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-string-edit',
                template: `

		<form [formGroup]="filterForm" >
			<input #input [formControlName]="filterFieldName" type="type" class="gui-input" />
		</form>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StringEditTemplateComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StringEditTemplateComponent.prototype, "focusField", null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditTemplatesComponent {
    /**
     * @param {?} dataType
     * @return {?}
     */
    getTemplate(dataType) {
        switch (dataType) {
            case DataType.STRING:
                return this.stringTemplate;
            case DataType.NUMBER:
                return this.numberTemplate;
            case DataType.BOOLEAN:
                return this.booleanTemplate;
            default:
                return this.emptyTemplate;
        }
    }
}
EditTemplatesComponent.decorators = [
    { type: Component, args: [{
                template: `

		<ng-template #string let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" >
			<gui-string-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-string-edit>
		</ng-template>

		<ng-template #number let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" >
			<gui-number-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-number-edit>
		</ng-template>

		<ng-template #boolean let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" >
			<gui-boolean-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-boolean-edit>
		</ng-template>

		<ng-template #empty>

		</ng-template>

	`
            }] }
];
EditTemplatesComponent.propDecorators = {
    stringTemplate: [{ type: ViewChild, args: ['string', { read: TemplateRef, static: true },] }],
    numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
    booleanTemplate: [{ type: ViewChild, args: ['boolean', { read: TemplateRef, static: true },] }],
    emptyTemplate: [{ type: ViewChild, args: ['empty', { read: TemplateRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    EditTemplatesComponent.prototype.stringTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.numberTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.booleanTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.emptyTemplate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanEditTemplateComponent extends EditCommunicationComponent {
    constructor() {
        super();
        this.filterFieldName = 'booleanEdit';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const inputElement = this.checkboxRef.nativeElement.querySelector('input[type="checkbox"]');
        inputElement.focus();
        fromEvent(inputElement, 'blur')
            .pipe(debounceTime(400), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.submit();
        }));
    }
    /**
     * @param {?} changed
     * @return {?}
     */
    toggle(changed) {
        this.valueChanges.emit(changed);
    }
}
BooleanEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-boolean-edit',
                template: `

		<gui-checkbox #checkbox
					  [checked]="value"
					  [name]="filterFieldName"
					  (changed)="toggle($event)">
		</gui-checkbox>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
BooleanEditTemplateComponent.ctorParameters = () => [];
BooleanEditTemplateComponent.propDecorators = {
    checkboxRef: [{ type: ViewChild, args: ['checkbox', { read: ElementRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.checkboxRef;
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.filterFieldName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnQueryComponent {
}
ColumnQueryComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-column',
                template: ''
            }] }
];
ColumnQueryComponent.propDecorators = {
    cellTemplate: [{ type: ContentChild, args: [TemplateRef, { static: false },] }],
    header: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ColumnQueryComponent.prototype.cellTemplate;
    /** @type {?} */
    ColumnQueryComponent.prototype.headerTemplate;
    /** @type {?} */
    ColumnQueryComponent.prototype.header;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FunctionViewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element);
    }
}
FunctionViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-function-view',
                template: `

		<div [innerHTML]="safeHTML"></div>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FunctionViewComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
FunctionViewComponent.propDecorators = {
    element: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FunctionViewComponent.prototype.element;
    /** @type {?} */
    FunctionViewComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    FunctionViewComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryCompositionStore extends InMemoryStore {
}
InMemoryCompositionStore.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryCompositionAggregateStore extends InMemoryAggregateStore {
    /**
     * @param {?} inMemoryCompositionStore
     * @param {?} aggregateStoreRegister
     */
    constructor(inMemoryCompositionStore, aggregateStoreRegister) {
        super(inMemoryCompositionStore, aggregateStoreRegister);
    }
}
InMemoryCompositionAggregateStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionAggregateStore.ctorParameters = () => [
    { type: InMemoryCompositionStore },
    { type: AggregateStoreRegister }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CompositionAggregateRepository extends AggregateRepository {
}
if (false) {
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionAggregateRepository.prototype.getById = function (compositionId) { };
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    CompositionAggregateRepository.prototype.save = function (aggregate) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryCompositionAggregateRepository extends CompositionAggregateRepository {
    /**
     * @param {?} inMemoryCompositionAggregateStore
     */
    constructor(inMemoryCompositionAggregateStore) {
        super();
        this.inMemoryCompositionAggregateStore = inMemoryCompositionAggregateStore;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        return this.inMemoryCompositionAggregateStore.getById(aggregateId);
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    save(aggregate) {
        this.inMemoryCompositionAggregateStore.save(aggregate);
    }
}
InMemoryCompositionAggregateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionAggregateRepository.ctorParameters = () => [
    { type: InMemoryCompositionAggregateStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionAggregateRepository.prototype.inMemoryCompositionAggregateStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class TemplateFactory {
    /**
     * @protected
     * @param {?} templatesComponentDefinition
     * @param {?} componentFactoryResolver
     */
    constructor(templatesComponentDefinition, componentFactoryResolver) {
        this.templatesComponentDefinition = templatesComponentDefinition;
        this.componentFactoryResolver = componentFactoryResolver;
        this.templates = new Map();
        this.templatesComponent = null;
        this.createTemplatesComponent();
    }
    /**
     * @return {?}
     */
    getTemplates() {
        return this.templates;
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.templatesComponent) {
            this.templatesComponent.destroy();
            this.templatesComponent = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    createTemplatesComponent() {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.templatesComponentDefinition);
        /** @type {?} */
        const injector = Injector.create({ providers: [] });
        this.templatesComponent = componentFactory.create(injector);
        this.generateMap();
    }
    /**
     * @private
     * @return {?}
     */
    generateMap() {
        this.generateMapKeys()
            .forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            this.findAndSetTemplate(type);
        }));
    }
    ;
    /**
     * @private
     * @param {?} dt
     * @return {?}
     */
    findAndSetTemplate(dt) {
        /** @type {?} */
        const template = this.templatesComponent.instance.getTemplate(dt);
        this.templates.set(dt, template);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templates;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templatesComponent;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templatesComponentDefinition;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.componentFactoryResolver;
    /* Skipping unhandled member: ;*/
    /**
     * @abstract
     * @return {?}
     */
    TemplateFactory.prototype.generateMapKeys = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewTemplateFactory extends TemplateFactory {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        super(ViewTemplatesComponent, componentFactoryResolver);
    }
    /**
     * @return {?}
     */
    generateMapKeys() {
        return Object.keys(CellView)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => CellView[key]));
    }
}
ViewTemplateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ViewTemplateFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewTemplateRepository {
    /**
     * @param {?} columnTemplateFactory
     */
    constructor(columnTemplateFactory) {
        this.columnTemplateFactory = columnTemplateFactory;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    findTemplate(view) {
        /** @type {?} */
        const typeToTemplate = this.columnTemplateFactory.getTemplates();
        return typeToTemplate.get(view);
    }
}
ViewTemplateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ViewTemplateRepository.ctorParameters = () => [
    { type: ViewTemplateFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewTemplateRepository.prototype.columnTemplateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditTemplateFactory extends TemplateFactory {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        super(EditTemplatesComponent, componentFactoryResolver);
    }
    /**
     * @return {?}
     */
    generateMapKeys() {
        return Object.keys(DataType)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => DataType[key]));
    }
}
EditTemplateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EditTemplateFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditTemplateRepository {
    /**
     * @param {?} editTemplateFactory
     */
    constructor(editTemplateFactory) {
        this.editTemplateFactory = editTemplateFactory;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    findTemplate(dataType) {
        /** @type {?} */
        const typeToTemplate = this.editTemplateFactory.getTemplates();
        return typeToTemplate.get(dataType);
    }
}
EditTemplateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EditTemplateRepository.ctorParameters = () => [
    { type: EditTemplateFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditTemplateRepository.prototype.editTemplateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SortOrder = {
    ASC: 0,
    DESC: 1,
    NONE: 2,
};
SortOrder[SortOrder.ASC] = 'ASC';
SortOrder[SortOrder.DESC] = 'DESC';
SortOrder[SortOrder.NONE] = 'NONE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewEntity {
    /**
     * @param {?} columnView
     */
    constructor(columnView) {
        this.templateFunction = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => value);
        if (typeof columnView === 'function') {
            this.view = CellView.FUNCTION;
            this.templateFunction = columnView;
        }
        else {
            this.view = columnView;
        }
    }
    /**
     * @return {?}
     */
    getCellView() {
        return this.view;
    }
    /**
     * @return {?}
     */
    getTemplateFunction() {
        return this.templateFunction;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewEntity.prototype.view;
    /**
     * @type {?}
     * @private
     */
    ViewEntity.prototype.templateFunction;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnEntity {
    /**
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} columnConfig
     * @param {?=} header
     * @param {?=} view
     * @param {?=} width
     */
    constructor(columnId, columnField, columnConfig, header, view, width) {
        this.sortOrder = SortOrder.NONE;
        this.enabled = true;
        this.view = new ViewEntity(CellView.TEXT);
        this.columnId = columnId;
        this.columnField = columnField;
        this.columnConfig = columnConfig;
        if (header) {
            this.header = header;
        }
        if (view) {
            this.view = view;
        }
        if (width) {
            this.width = width;
        }
    }
    /**
     * @return {?}
     */
    getColumnConfig() {
        return this.columnConfig;
    }
    /**
     * @return {?}
     */
    getColumnId() {
        return this.columnId;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    getField() {
        return this.columnField;
    }
    /**
     * @return {?}
     */
    getHeader() {
        return this.header;
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.columnField.getDataType();
    }
    /**
     * @return {?}
     */
    getCellView() {
        return this.view.getCellView();
    }
    /**
     * @return {?}
     */
    getTemplateFunction() {
        return this.view.getTemplateFunction();
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setSortStatus(status) {
        this.sortOrder = status;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    setView(view) {
        this.view = view;
    }
    /**
     * @return {?}
     */
    getView() {
        return this.view;
    }
    /**
     * @return {?}
     */
    getSortingEnabled() {
        /** @type {?} */
        const config = this.columnConfig;
        if (config.sorting !== undefined && config.sorting !== null) {
            if (config.sorting.enabled === undefined || config.sorting.enabled === null) {
                return true;
            }
            return config.sorting.enabled;
        }
    }
}
if (false) {
    /** @type {?} */
    ColumnEntity.prototype.columnId;
    /** @type {?} */
    ColumnEntity.prototype.columnField;
    /** @type {?} */
    ColumnEntity.prototype.header;
    /** @type {?} */
    ColumnEntity.prototype.sortOrder;
    /** @type {?} */
    ColumnEntity.prototype.width;
    /** @type {?} */
    ColumnEntity.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.columnConfig;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.view;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Basically header template
class CellTemplateWithContext {
    /**
     * @param {?} viewTemplate
     * @param {?} editTemplate
     * @param {?} context
     * @param {?} width
     * @param {?} fieldId
     * @param {?} columnId
     * @param {?} sortStatus
     * @param {?} enabled
     * @param {?} sortable
     */
    constructor(viewTemplate, editTemplate, context, width, fieldId, columnId, sortStatus, enabled, sortable) {
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
        this.context = context;
        this.width = width;
        this.fieldId = fieldId;
        this.columnId = columnId;
        this.sortStatus = sortStatus;
        this.enabled = enabled;
        this.sortable = sortable;
    }
    /**
     * @return {?}
     */
    getColumnId() {
        return this.columnId;
    }
    /**
     * @return {?}
     */
    getFieldId() {
        return this.fieldId;
    }
    /**
     * @return {?}
     */
    getSortStatus() {
        return this.sortStatus;
    }
    /**
     * @return {?}
     */
    isSortEnabled() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    isAscSort() {
        return this.sortStatus === SortOrder.ASC;
    }
    /**
     * @return {?}
     */
    isDescSort() {
        return this.sortStatus === SortOrder.DESC;
    }
    /**
     * @return {?}
     */
    isNoSort() {
        return this.sortStatus === SortOrder.NONE;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /** @type {?} */
    CellTemplateWithContext.prototype.viewTemplate;
    /** @type {?} */
    CellTemplateWithContext.prototype.editTemplate;
    /** @type {?} */
    CellTemplateWithContext.prototype.context;
    /** @type {?} */
    CellTemplateWithContext.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.sortable;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CellContext {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
    }
}
if (false) {
    /** @type {?} */
    CellContext.prototype.element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldId {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.id = id;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.id;
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    equals(fieldId) {
        return fieldId.getId() === this.id;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldId.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CellTemplateWithAccessor {
    /**
     * @param {?} template
     * @param {?} editTemplate
     * @param {?} editable
     * @param {?} accessor
     * @param {?} width
     * @param {?} columnFieldId
     * @param {?} type
     * @param {?} view
     */
    constructor(template, editTemplate, editable, accessor, width, columnFieldId, type, // REFACTOR
    view) {
        this.template = template;
        this.editTemplate = editTemplate;
        this.editable = editable;
        this.accessor = accessor;
        this.width = width;
        this.columnFieldId = columnFieldId;
        this.type = type;
        this.view = view;
    }
    // REFACTOR #1581
    /**
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    getValue(entity, searchPhrase) {
        /** @type {?} */
        const value = this.accessor(entity);
        if (this.type !== DataType.STRING) {
            return value;
        }
        if (this.view && this.view.getCellView() === CellView.FUNCTION) {
            return value;
        }
        if (searchPhrase) {
            /** @type {?} */
            let txt = '' + this.accessor(entity);
            /** @type {?} */
            let lowerCasedText = txt.toLocaleLowerCase();
            /** @type {?} */
            let loweredSearchPhrase = searchPhrase.toLocaleLowerCase();
            /** @type {?} */
            let positions = [];
            /** @type {?} */
            let index = 0;
            while (index < loweredSearchPhrase.length) {
                /** @type {?} */
                const found = lowerCasedText.indexOf(loweredSearchPhrase, index);
                if (found >= 0) {
                    positions.push(found);
                    index = found + searchPhrase.length;
                    continue;
                }
                else {
                    index = loweredSearchPhrase.length;
                }
            }
            /** @type {?} */
            const arr = txt.split('');
            positions.forEach((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                for (let i = 0; i < searchPhrase.length; i += 1) {
                    /** @type {?} */
                    let ph;
                    if (i === 0) {
                        ph = `<span class="gui-text-highlight">${arr[pos + i]}`;
                    }
                    else {
                        ph = arr[pos + i];
                    }
                    if (i === searchPhrase.length - 1) {
                        ph += `</span>`;
                    }
                    arr[pos + i] = ph;
                }
            }));
            txt = arr.join('');
            return txt;
        }
        else {
            return this.accessor(entity);
        }
    }
}
if (false) {
    /** @type {?} */
    CellTemplateWithAccessor.prototype.template;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.editTemplate;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.editable;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.accessor;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.width;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.columnFieldId;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithAccessor.prototype.type;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithAccessor.prototype.view;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnDefinition {
    /**
     * @param {?} field
     * @param {?} columnId
     * @param {?} enabled
     * @param {?} type
     * @param {?} view
     * @param {?} header
     * @param {?=} sort
     * @param {?=} sortable
     */
    constructor(field, columnId, enabled, type, // REFACTOR
    view, // REFACTOR
    header, sort = SortOrder.NONE, sortable = true) {
        this.type = type;
        this.view = view;
        this.sortable = true;
        this.field = field;
        this.columnId = columnId;
        this.enabled = enabled;
        this.header = header;
        this.sortStatus = sort;
        this.sortable = sortable;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @param {?} header
     * @return {?}
     */
    setHeader(header) {
        this.header = header;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    setField(field) {
        this.field = field;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getHeaderCellTemplateWithContext(index) {
        /** @type {?} */
        const header = this.header;
        /** @type {?} */
        let headerCellContext;
        if (typeof header === 'string') {
            headerCellContext = new CellContext(header);
        }
        else if (typeof header === 'function') {
            headerCellContext = new CellContext(header(index));
        }
        /** @type {?} */
        const fieldId = new FieldId(this.field.getId().getId());
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnId, this.sortStatus, this.enabled, this.sortable);
    }
    /**
     * @return {?}
     */
    getContentCellTemplateWithAccessor() {
        /** @type {?} */
        let accessor = (/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            return this.templateFunction(this.field.getAccessor()(entity));
        });
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, accessor, this.width, this.field.getId(), this.type, this.view);
    }
    /**
     * @return {?}
     */
    getColumn() {
    }
}
if (false) {
    /** @type {?} */
    ColumnDefinition.prototype.cellTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.headerTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.editTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.width;
    /** @type {?} */
    ColumnDefinition.prototype.templateFunction;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.field;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.header;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.type;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.view;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnDefinitionFactory {
    /**
     * @param {?} viewTemplateRepository
     * @param {?} editTemplateRepository
     */
    constructor(viewTemplateRepository, editTemplateRepository) {
        this.viewTemplateRepository = viewTemplateRepository;
        this.editTemplateRepository = editTemplateRepository;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    create(column) {
        if (column instanceof ColumnEntity) {
            return this.createFromColumnEntity(column);
        }
        else {
            return this.createFromActiveColumnEntity(column);
        }
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    createFromColumnEntity(column) {
        /** @type {?} */
        let columnDef = new ColumnDefinition(column.getField(), column.getColumnId(), column.isEnabled(), column.getDataType(), column.getView(), column.getHeader(), column.sortOrder, column.getSortingEnabled());
        columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.templateFunction = column.getTemplateFunction();
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.width;
        return columnDef;
    }
    /**
     * @private
     * @param {?} activeColumn
     * @return {?}
     */
    createFromActiveColumnEntity(activeColumn) {
        /** @type {?} */
        let columnDef = new ColumnDefinition(activeColumn.getField(), activeColumn.getColumnId(), true, // remove,
        activeColumn.getDataType(), activeColumn.getView(), activeColumn.getHeader(), activeColumn.getSortStatus(), activeColumn.getSortingEnabled());
        columnDef.cellTemplate = this.findViewTemplate(activeColumn.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.templateFunction = activeColumn.getTemplateFunction();
        columnDef.editTemplate = this.findEditTemplate(activeColumn.getDataType());
        columnDef.width = +activeColumn.getWidth();
        return columnDef;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    createColumns(columns) {
        return columns.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => this.create(column)));
    }
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    findViewTemplate(view) {
        if (view === CellView.FUNCTION) {
            return this.viewTemplateRepository.findTemplate(CellView.FUNCTION);
        }
        else {
            return this.viewTemplateRepository.findTemplate(view);
        }
    }
    /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    findEditTemplate(dataType) {
        return this.editTemplateRepository.findTemplate(dataType);
    }
}
ColumnDefinitionFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ColumnDefinitionFactory.ctorParameters = () => [
    { type: ViewTemplateRepository },
    { type: EditTemplateRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnDefinitionFactory.prototype.viewTemplateRepository;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinitionFactory.prototype.editTemplateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Composition extends ReadModel {
    /**
     * @param {?} uid
     * @param {?} ready
     * @param {?} allColumns
     * @param {?} activeColumns
     * @param {?} width
     * @param {?} resizeWidth
     */
    constructor(uid, ready, allColumns, activeColumns, width, resizeWidth) {
        super(uid);
        this.ready = ready;
        this.allColumns = allColumns;
        this.activeColumns = activeColumns;
        this.width = width;
        this.resizeWidth = resizeWidth;
    }
    /**
     * @return {?}
     */
    getActiveColumns() {
        return this.activeColumns;
    }
    /**
     * @return {?}
     */
    getAllColumns() {
        return this.allColumns;
    }
    /**
     * @return {?}
     */
    getActiveHeaderColumns() {
        return this.getActiveColumns()
            .map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => column.getHeaderCellTemplateWithContext(index)));
    }
    /**
     * @return {?}
     */
    getHeaderColumns() {
        return this.getAllColumns()
            .map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => column.getHeaderCellTemplateWithContext(index)));
    }
    /**
     * @return {?}
     */
    getTemplateColumns() {
        return this.getActiveColumns()
            .map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => column.getContentCellTemplateWithAccessor()));
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getContainerWidth() {
        return +this.width - 2;
    }
    /**
     * @return {?}
     */
    isReady() {
        return this.ready;
    }
    /**
     * @return {?}
     */
    isResizeWidthEnabled() {
        return this.resizeWidth;
    }
    /**
     * @param {?} composition
     * @return {?}
     */
    equals(composition) {
        return this.width === composition.width &&
            this.resizeWidth === composition.resizeWidth &&
            this.equalsByColumns(composition.allColumns);
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    equalsByColumns(columns) {
        return this.allColumns.length === columns.length;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.allColumns;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.activeColumns;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.width;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.resizeWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionConverter {
    /**
     * @param {?} columnDefinitionFactory
     */
    constructor(columnDefinitionFactory) {
        this.columnDefinitionFactory = columnDefinitionFactory;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        /** @type {?} */
        const ready = aggregate.isReady();
        /** @type {?} */
        const allColumns = aggregate.getColumns();
        /** @type {?} */
        const activeColumns = aggregate.getActiveColumns();
        /** @type {?} */
        const allColumnDefs = this.convertToColumnDef(allColumns);
        /** @type {?} */
        const activeColumnDefs = this.convertActiveColumnsToColumnDef(activeColumns);
        /** @type {?} */
        const width = aggregate.getWidth();
        /** @type {?} */
        const resizeWidth = aggregate.isResizeEnabled();
        /** @type {?} */
        const id = aggregate.getId();
        return new Composition(id, ready, allColumnDefs, activeColumnDefs, width, resizeWidth);
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    convertToColumnDef(columns) {
        /** @type {?} */
        const columnDefs = [];
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        }));
        return columnDefs;
    }
    /**
     * @private
     * @param {?} activeColumns
     * @return {?}
     */
    convertActiveColumnsToColumnDef(activeColumns) {
        /** @type {?} */
        const columnDefs = [];
        activeColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        }));
        return columnDefs;
    }
}
CompositionConverter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionConverter.ctorParameters = () => [
    { type: ColumnDefinitionFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionConverter.prototype.columnDefinitionFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryCompositionReadStore extends InMemoryReadModelStore {
    /**
     * @param {?} inMemoryCompositionStore
     * @param {?} compositionConverter
     */
    constructor(inMemoryCompositionStore, compositionConverter) {
        super(inMemoryCompositionStore);
        this.inMemoryCompositionStore = inMemoryCompositionStore;
        this.compositionConverter = compositionConverter;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    toReadModel(aggregate) {
        return this.compositionConverter.convert(aggregate);
    }
}
InMemoryCompositionReadStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionReadStore.ctorParameters = () => [
    { type: InMemoryCompositionStore },
    { type: CompositionConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionReadStore.prototype.inMemoryCompositionStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionReadStore.prototype.compositionConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CompositionRepository extends ReadModelRepository {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionRepository.prototype.on = function (compositionId) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionCreatedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'CompositionCreatedEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionResizeWidthSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'CompositionResizeWidthSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionColumnsSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'CompositionColumnsSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionContainerWidthSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} payload
     */
    constructor(aggregateId, payload) {
        super(aggregateId, 'CompositionContainerWidthSetEvent', payload);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionWidthSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'CompositionWidthSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionChangeSortStatusEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionChangeSortStatusEvent');
        this.activeColumns = activeColumns;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.getAggregateId();
    }
    /**
     * @return {?}
     */
    getActiveColumns() {
        return this.activeColumns;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEvent.prototype.activeColumns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionColumnSetEnabledEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'CompositionColumnSetEnabledEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionColumnMovedLeftEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'CompositionColumnMovedLeftEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionColumnMovedRightEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'CompositionColumnMovedRightEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryCompositionRepository extends CompositionRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryCompositionQueryStore
     */
    constructor(domainEventBus, inMemoryCompositionQueryStore) {
        super(domainEventBus);
        this.inMemoryCompositionQueryStore = inMemoryCompositionQueryStore;
        this.compositionIdToComposition = new Map();
        this.composition$ = new ReplaySubject(1);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    on(aggregateId) {
        return this.composition$
            .asObservable()
            .pipe(filter((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        (compositionIdToComposition) => {
            /** @type {?} */
            const key = aggregateId.getId();
            return compositionIdToComposition.has(key);
        })), map((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        (compositionIdToComposition) => compositionIdToComposition.get(aggregateId.getId()))));
    }
    /**
     * @protected
     * @return {?}
     */
    forEvents() {
        return [
            CompositionCreatedEvent,
            CompositionResizeWidthSetEvent,
            CompositionColumnsSetEvent,
            CompositionContainerWidthSetEvent,
            CompositionWidthSetEvent,
            CompositionColumnSetEnabledEvent,
            CompositionColumnMovedLeftEvent,
            CompositionColumnMovedRightEvent,
            (/** @type {?} */ (CompositionChangeSortStatusEvent))
        ];
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    subscribe(event) {
        /** @type {?} */
        const aggregateId = event.getAggregateId();
        /** @type {?} */
        const optComposition = this.inMemoryCompositionQueryStore.getById(aggregateId);
        optComposition.ifPresent((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => {
            /** @type {?} */
            const key = composition.getId().toString();
            this.compositionIdToComposition.set(key, composition);
            this.composition$.next(this.compositionIdToComposition);
        }));
    }
}
InMemoryCompositionRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemoryCompositionReadStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.compositionIdToComposition;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.composition$;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.inMemoryCompositionQueryStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const inMemoryCompositionCommandProviders = [
    InMemoryCompositionAggregateStore,
    {
        provide: CompositionAggregateRepository,
        useClass: InMemoryCompositionAggregateRepository
    }
];
/** @type {?} */
const inMemoryCompositionQueryProviders = [
    InMemoryCompositionReadStore,
    {
        provide: CompositionRepository,
        useClass: InMemoryCompositionRepository
    }
];
/** @type {?} */
const inMemoryCompositionProviders = [
    InMemoryCompositionStore
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CreateCompositionCommand extends Command {
    /**
     * @param {?} compositionId
     */
    constructor(compositionId) {
        super(compositionId, 'CreateCompositionCommand');
        this.compositionId = compositionId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CreateCompositionCommand.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetColumnsCommand extends Command {
    /**
     * @param {?} compositionId
     * @param {?} columns
     */
    constructor(compositionId, columns) {
        super(compositionId, 'SetColumnsCommand');
        this.compositionId = compositionId;
        this.columns = columns;
    }
    /**
     * @return {?}
     */
    getParams() {
        return this.columns;
    }
}
if (false) {
    /** @type {?} */
    SetColumnsCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommand.prototype.columns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetCompositionWidthCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} width
     */
    constructor(structureId, width) {
        super(structureId, 'SetCompositionWidthCommand');
        this.structureId = structureId;
        this.width = width;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommand.prototype.width;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetCompositionContainerWidthCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} width
     */
    constructor(structureId, width) {
        super(structureId, 'SetCompositionContainerWidthCommand');
        this.structureId = structureId;
        this.width = width;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommand.prototype.width;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetCompositionResizeWidthCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'SetCompositionResizeWidthCommand');
        this.structureId = structureId;
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    getEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionResizeWidthCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SetCompositionResizeWidthCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionChangeSortStatusCommand extends Command {
    /**
     * @param {?} compositionId
     * @param {?} sortParams
     */
    constructor(compositionId, sortParams) {
        super(compositionId, 'CompositionChangeSortStatusCommand');
        this.compositionId = compositionId;
        this.sortParams = sortParams;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getSortParams() {
        return this.sortParams;
    }
}
if (false) {
    /** @type {?} */
    CompositionChangeSortStatusCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommand.prototype.sortParams;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionSetColumnEnabledCommand extends Command {
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @param {?} enabled
     */
    constructor(compositionId, columnId, enabled) {
        super(compositionId, 'CompositionSetColumnEnabledCommand');
        this.compositionId = compositionId;
        this.columnId = columnId;
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    getColumnId() {
        return this.columnId;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /** @type {?} */
    CompositionSetColumnEnabledCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommand.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionMoveLeftColumnCommand extends Command {
    /**
     * @param {?} compositionId
     * @param {?} columnId
     */
    constructor(compositionId, columnId) {
        super(compositionId, 'CompositionMoveLeftColumnCommand');
        this.compositionId = compositionId;
        this.columnId = columnId;
    }
    /**
     * @return {?}
     */
    getColumnId() {
        return this.columnId;
    }
}
if (false) {
    /** @type {?} */
    CompositionMoveLeftColumnCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    CompositionMoveLeftColumnCommand.prototype.columnId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionMoveRightColumnCommand extends Command {
    /**
     * @param {?} compositionId
     * @param {?} columnId
     */
    constructor(compositionId, columnId) {
        super(compositionId, 'CompositionMoveRightColumnCommand');
        this.compositionId = compositionId;
        this.columnId = columnId;
    }
    /**
     * @return {?}
     */
    getColumnId() {
        return this.columnId;
    }
}
if (false) {
    /** @type {?} */
    CompositionMoveRightColumnCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    CompositionMoveRightColumnCommand.prototype.columnId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    createComposition(compositionId) {
        this.commandDispatcher.dispatch(new CreateCompositionCommand(compositionId));
    }
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    setColumns(compositionId, params) {
        this.commandDispatcher.dispatch(new SetColumnsCommand(compositionId, params));
    }
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    setWidth(compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionWidthCommand(compositionId, width));
    }
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    setContainerWidth(compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionContainerWidthCommand(compositionId, width));
    }
    /**
     * @param {?} compositionId
     * @param {?} enabled
     * @return {?}
     */
    setResizeWidth(compositionId, enabled) {
        this.commandDispatcher.dispatch(new SetCompositionResizeWidthCommand(compositionId, enabled));
    }
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    changeSort(compositionId, params) {
        this.commandDispatcher.dispatch(new CompositionChangeSortStatusCommand(compositionId, params));
    }
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    setColumnEnabled(compositionId, columnId, enabled) {
        this.commandDispatcher.dispatch(new CompositionSetColumnEnabledCommand(compositionId, columnId, enabled));
    }
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    moveLeft(compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveLeftColumnCommand(compositionId, columnId));
    }
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    moveRight(compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveRightColumnCommand(compositionId, columnId));
    }
}
CompositionDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnId {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.id = id;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    equals(columnId) {
        return this.id === columnId.getId();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnId.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnEntityFactory {
    /**
     * @param {?} data
     * @return {?}
     */
    create(data) {
        if (Array.isArray(data)) {
            return this.createColumns(data);
        }
        else {
            return this.createColumn(data);
        }
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    createColumn(params) {
        /** @type {?} */
        const columnConfig = params.getColumn();
        /** @type {?} */
        const field = params.getField();
        /** @type {?} */
        let columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig);
        if (columnConfig.enabled !== undefined) {
            columnEntity.setEnabled(columnConfig.enabled);
        }
        if (columnConfig.header !== undefined) {
            columnEntity.header = columnConfig.header;
        }
        if (columnConfig.view !== undefined) {
            columnEntity.setView(new ViewEntity(columnConfig.view));
        }
        if (columnConfig.width !== undefined) {
            columnEntity.width = this.convertWidth(columnConfig.width);
        }
        return columnEntity;
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    createColumns(columns) {
        /** @type {?} */
        let columnEntities = (/** @type {?} */ ([]));
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            columnEntities.push(this.createColumn(column));
        }));
        return columnEntities;
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    convertWidth(width) {
        return +width;
    }
}
ColumnEntityFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CompositionAggregateEvents = {
    CompositionResizeWidthSetAggregateEvent: 'CompositionResizeWidthSetAggregateEvent',
    ColumnsSetAggregateEvent: 'ColumnsSetAggregateEvent',
    CompositionContainerWidthSetAggregateEvent: 'CompositionContainerWidthSetAggregateEvent',
    CompositionWidthSetAggregateEvent: 'CompositionWidthSetAggregateEvent',
    CompositionColumnSetEnabledAggregateEvent: 'CompositionColumnSetEnabledAggregateEvent',
    CompositionColumnMovedLeftAggregateEvent: 'CompositionColumnMovedLeftAggregateEvent',
    CompositionColumnMovedRightAggregateEvent: 'CompositionColumnMovedRightAggregateEvent'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionEventConverter {
    /**
     * @param {?} arg
     * @return {?}
     */
    convert(arg) {
        if (Array.isArray(arg)) {
            return this.convertEvents(arg);
        }
        else {
            return this.convertEvent(arg);
        }
    }
    /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    convertEvents(aggregateEvents) {
        return aggregateEvents.map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.convertEvent(event);
        }));
    }
    /**
     * @private
     * @param {?} aggregateEvent
     * @return {?}
     */
    convertEvent(aggregateEvent) {
        switch (aggregateEvent.getType()) {
            case CompositionAggregateEvents.CompositionResizeWidthSetAggregateEvent:
                return new CompositionResizeWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.ColumnsSetAggregateEvent:
                return new CompositionColumnsSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionContainerWidthSetAggregateEvent:
                /** @type {?} */
                const payload = ((/** @type {?} */ (aggregateEvent))).containerWidth;
                return new CompositionContainerWidthSetEvent(aggregateEvent.getAggregateId(), payload);
            case CompositionAggregateEvents.CompositionWidthSetAggregateEvent:
                return new CompositionWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnSetEnabledAggregateEvent:
                return new CompositionColumnSetEnabledEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnMovedLeftAggregateEvent:
                return new CompositionColumnMovedLeftEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnMovedRightAggregateEvent:
                return new CompositionColumnMovedRightEvent(aggregateEvent.getAggregateId());
            default:
                break;
        }
    }
}
CompositionEventConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnField {
    /**
     * @param {?} fieldId
     * @param {?} accessor
     * @param {?} dataType
     */
    constructor(fieldId, accessor, dataType) {
        this.fieldId = fieldId;
        this.accessor = accessor;
        this.dataType = dataType;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.fieldId;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getValue(entity) {
        return this.accessor(entity);
    }
    /**
     * @return {?}
     */
    getAccessor() {
        return this.accessor;
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.dataType;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.dataType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnFieldFactory {
    /**
     * @param {?} columnFieldId
     * @param {?} accessor
     * @param {?} dataType
     * @return {?}
     */
    create(columnFieldId, accessor, dataType) {
        return new ColumnField(columnFieldId, accessor, dataType);
    }
}
ColumnFieldFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionEventService {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onColumnsChanged(compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionColumnsSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === compositionId.toString())));
    }
    // onWidthChanged(compositionId: CompositionId): Observable<number> {
    // 	return this.domainEventBus
    // 			   .ofEvent(
    // 				   CompositionColumnsSetEvent
    // 			   )
    // 			   .pipe(
    // 				   filter((event: DomainEvent) => event.getAggregateId().toString() === compositionId.toString())
    // 			   );
    // }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onContainerWidthChanged(compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionContainerWidthSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().equals(compositionId))), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.getPayload();
        })), filter((/**
         * @param {?} width
         * @return {?}
         */
        (width) => !!width)));
    }
}
CompositionEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionEventService.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionEventService.prototype.domainEventBus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const globalCompositionId = new CompositionId('-1');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionReadModelService {
    /**
     * @param {?} compositionRepository
     */
    constructor(compositionRepository) {
        this.compositionRepository = compositionRepository;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onWidth(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getWidth())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onContainerWidth(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getContainerWidth())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onWidthForEachColumn(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getAllColumns().map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.width)))));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onHeaderColumns(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getActiveHeaderColumns())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onAllColumns(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getHeaderColumns())));
    }
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @return {?}
     */
    onSortOrder(fieldId, compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getActiveHeaderColumns())), map((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            return columns.filter((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c.getFieldId().equals(fieldId)));
        })), filter((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            return columns.length > 0;
        })), map((/**
         * @param {?} columns
         * @return {?}
         */
        columns => columns[0].getSortStatus())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onTemplateColumns(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getTemplateColumns())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onResizeWidth(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.isResizeWidthEnabled())));
    }
}
CompositionReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionReadModelService.ctorParameters = () => [
    { type: CompositionRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionReadModelService.prototype.compositionRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionCommandService {
    /**
     * @param {?} compositionDispatcher
     */
    constructor(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    createComposition(compositionId = globalCompositionId) {
        this.compositionDispatcher.createComposition(compositionId);
    }
    /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    setColumns(params, compositionId = globalCompositionId) {
        this.compositionDispatcher.setColumns(compositionId, params);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setWidth(width, compositionId = globalCompositionId) {
        this.compositionDispatcher.setWidth(compositionId, width);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = globalCompositionId) {
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = globalCompositionId) {
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnId, compositionId = globalCompositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, columnId, true);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnId, compositionId = globalCompositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, columnId, false);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnId, compositionId = globalCompositionId) {
        this.compositionDispatcher.moveLeft(compositionId, columnId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnId, compositionId = globalCompositionId) {
        this.compositionDispatcher.moveRight(compositionId, columnId);
    }
}
CompositionCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionCommandService.ctorParameters = () => [
    { type: CompositionDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionCommandService.prototype.compositionDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortToggledEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} directions
     */
    constructor(aggregateId, compositionId, directions) {
        super(aggregateId, 'ToggleSortEvent');
        this.compositionId = compositionId;
        this.directions = directions;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getDirections() {
        return this.directions;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.directions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnFieldId {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.id = id;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnFieldId.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangeSortParams {
    /**
     * @param {?} fieldId
     * @param {?} direction
     */
    constructor(fieldId, direction) {
        this.fieldId = fieldId;
        this.direction = direction;
    }
}
if (false) {
    /** @type {?} */
    ChangeSortParams.prototype.fieldId;
    /** @type {?} */
    ChangeSortParams.prototype.direction;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortOrderSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} directions
     */
    constructor(aggregateId, compositionId, directions) {
        super(aggregateId, 'SortOrderSetEvent');
        this.compositionId = compositionId;
        this.directions = directions;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getDirections() {
        return this.directions;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.directions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionChangeSortStatusEventHandler extends DomainEventHandler {
    /**
     * @param {?} compositionDispatcher
     */
    constructor(compositionDispatcher) {
        super();
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof SortToggledEvent) {
            /** @type {?} */
            const compositionId = event.getCompositionId();
            /** @type {?} */
            const dirs = event.getDirections();
            /** @type {?} */
            let params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            (dir) => {
                /** @type {?} */
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
        if (event instanceof SortOrderSetEvent) {
            /** @type {?} */
            const compositionId = event.getCompositionId();
            /** @type {?} */
            const dirs = event.getDirections();
            /** @type {?} */
            let params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            (dir) => {
                /** @type {?} */
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
    }
}
CompositionChangeSortStatusEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionChangeSortStatusEventHandler.ctorParameters = () => [
    { type: CompositionDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEventHandler.prototype.compositionDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldsInitedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} columns
     * @param {?} fields
     */
    constructor(aggregateId, compositionId, columns, // TODO merge
    fields) {
        super(aggregateId, 'FieldsInitedEvent');
        this.compositionId = compositionId;
        this.columns = columns;
        this.fields = fields;
    }
    /**
     * @return {?}
     */
    getFields() {
        return this.fields;
    }
}
if (false) {
    /** @type {?} */
    FieldsInitedEvent.prototype.compositionId;
    /** @type {?} */
    FieldsInitedEvent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEvent.prototype.fields;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnParams {
    /**
     * @param {?} column
     * @param {?} field
     */
    constructor(column, field) {
        this.column = column;
        this.field = field;
    }
    /**
     * @return {?}
     */
    getColumn() {
        return this.column;
    }
    /**
     * @return {?}
     */
    getField() {
        return this.field;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnParams.prototype.column;
    /**
     * @type {?}
     * @private
     */
    ColumnParams.prototype.field;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionFieldsInitedEventHandler extends DomainEventHandler {
    /**
     * @param {?} compositionDispatcher
     * @param {?} columnFieldFactory
     */
    constructor(compositionDispatcher, columnFieldFactory) {
        super();
        this.compositionDispatcher = compositionDispatcher;
        this.columnFieldFactory = columnFieldFactory;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof FieldsInitedEvent) {
            // TODO Move to different layer
            /** @type {?} */
            const fields = event.getFields();
            /** @type {?} */
            const columnFieldIds = this.convertColumnFieldIds(fields);
            /** @type {?} */
            const columns = event.columns;
            /** @type {?} */
            const params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionDispatcher.setColumns(event.compositionId, params);
        }
    }
    /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    convertColumnFieldIds(fields) {
        if (!fields) {
            return [];
        }
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        (field) => new ColumnFieldId(field.getId().getId())));
    }
    /**
     * @private
     * @param {?} columns
     * @param {?} fields
     * @param {?} columnFieldIds
     * @return {?}
     */
    convertColumns(columns, fields, columnFieldIds) {
        if (!columns) {
            return [];
        }
        return columns.map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            /** @type {?} */
            const columnFieldId = columnFieldIds[index];
            /** @type {?} */
            const field = fields[index];
            /** @type {?} */
            const columnField = this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType());
            return new ColumnParams(column, columnField);
        }));
    }
}
CompositionFieldsInitedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionFieldsInitedEventHandler.ctorParameters = () => [
    { type: CompositionDispatcher },
    { type: ColumnFieldFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionFieldsInitedEventHandler.prototype.compositionDispatcher;
    /**
     * @type {?}
     * @private
     */
    CompositionFieldsInitedEventHandler.prototype.columnFieldFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const commandProviders = [
    ...inMemoryCompositionCommandProviders,
    CompositionDispatcher,
    ColumnEntityFactory,
    CompositionEventConverter,
    ColumnFieldFactory
];
/** @type {?} */
const readProviders = [
    ...inMemoryCompositionQueryProviders,
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionFieldsInitedEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionChangeSortStatusEventHandler,
        multi: true
    },
    ColumnDefinitionFactory,
    ViewTemplateRepository,
    ViewTemplateFactory,
    EditTemplateFactory,
    EditTemplateRepository
];
/** @type {?} */
const compositionProviders = [
    ...inMemoryCompositionProviders,
    ...commandProviders,
    ...readProviders,
    CompositionConverter,
    CompositionCommandService,
    CompositionReadModelService,
    CompositionEventService
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SafePipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.decorators = [
    { type: Pipe, args: [{
                name: 'guiSafe'
            },] }
];
/** @nocollapse */
SafePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SafePipe.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SanitizeModule {
}
SanitizeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SafePipe
                ],
                exports: [
                    SafePipe
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionContainerWidthCalculator {
    /**
     * @param {?} MIN_COLUMN_WIDTH
     */
    constructor(MIN_COLUMN_WIDTH) {
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
    }
    /**
     * @param {?} columnWidths
     * @return {?}
     */
    calculateMinWidth(columnWidths) {
        const { staticColumns, fluidColumns } = this.segregateColumns(columnWidths);
        // TODO reduce
        /** @type {?} */
        let sum = 0;
        staticColumns.forEach((/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            sum += c.getWidth();
        }));
        sum += fluidColumns.length * this.MIN_COLUMN_WIDTH;
        return sum;
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    segregateColumns(columns) {
        /** @type {?} */
        let staticColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        (columnWidth) => columnWidth.isTypeNumber() && columnWidth.getWidth() > this.MIN_COLUMN_WIDTH));
        /** @type {?} */
        let fluidColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        (columnWidth) => columnWidth.isTypeAuto() || columnWidth.isTypePercentage() || (columnWidth.isTypeNumber() && columnWidth.getWidth() <= this.MIN_COLUMN_WIDTH)));
        return {
            staticColumns: staticColumns,
            fluidColumns: fluidColumns
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionContainerWidthCalculator.prototype.MIN_COLUMN_WIDTH;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionWidthSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'CompositionWidthSetAggregateEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionContainerWidthSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} compositionId
     * @param {?} containerWidth
     */
    constructor(compositionId, containerWidth) {
        super(compositionId, 'CompositionContainerWidthSetAggregateEvent');
        this.containerWidth = containerWidth;
    }
}
if (false) {
    /** @type {?} */
    CompositionContainerWidthSetAggregateEvent.prototype.containerWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionResizeWidthSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} compositionId
     */
    constructor(compositionId) {
        super(compositionId, 'CompositionResizeWidthSetAggregateEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionColumnSetEnabledAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionColumnSetEnabledAggregateEvent');
        this.activeColumns = activeColumns;
    }
    /**
     * @return {?}
     */
    getActiveColumns() {
        return this.activeColumns;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnSetEnabledAggregateEvent.prototype.activeColumns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ColumnWidthType = {
    PERCENTAGE: 0,
    NUMBER: 1,
    AUTO: 2,
};
ColumnWidthType[ColumnWidthType.PERCENTAGE] = 'PERCENTAGE';
ColumnWidthType[ColumnWidthType.NUMBER] = 'NUMBER';
ColumnWidthType[ColumnWidthType.AUTO] = 'AUTO';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnWidth {
    /**
     * @param {?=} width
     */
    constructor(width) {
        this.baseWidth = width;
        this.setWidthAndType(width);
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getColumnType() {
        return this.template;
    }
    /**
     * @return {?}
     */
    isTypePercentage() {
        return this.template === ColumnWidthType.PERCENTAGE;
    }
    /**
     * @return {?}
     */
    isTypeAuto() {
        return this.template === ColumnWidthType.AUTO;
    }
    /**
     * @return {?}
     */
    isTypeNumber() {
        return this.template === ColumnWidthType.NUMBER;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.width = width;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidthAndType(width) {
        if (width === undefined || width === null || width === 'auto') {
            this.template = ColumnWidthType.AUTO;
            this.setWidth(null);
        }
        else if (this.isPercentage(width)) {
            this.template = ColumnWidthType.PERCENTAGE;
            this.setWidth(this.percentageToNumber('' + width));
        }
        else if (this.isStringNumber(width)) {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
        else {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
    }
    /**
     * @return {?}
     */
    clone() {
        return new ColumnWidth(this.baseWidth);
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    isPercentage(width) {
        return typeof width === 'string' && width[width.length - 1] === '%';
    }
    /**
     * Width needs to be in format '89%'
     * @private
     * @param {?} width
     * @return {?}
     */
    percentageToNumber(width) {
        return +(width.slice(0, -1));
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    isStringNumber(width) {
        /** @type {?} */
        const widthAsNumber = +width;
        return Number.isNaN(widthAsNumber);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnWidth.prototype.template;
    /**
     * @type {?}
     * @private
     */
    ColumnWidth.prototype.baseWidth;
    /**
     * @type {?}
     * @private
     */
    ColumnWidth.prototype.width;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionWidthCalculator {
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} MIN_COLUMN_WIDTH
     */
    constructor(source, width, MIN_COLUMN_WIDTH) {
        this.source = source;
        this.width = width;
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.columns = this.source.map((/**
         * @param {?} c
         * @return {?}
         */
        (c) => c.clone()));
    }
    /**
     * @return {?}
     */
    calculate() {
        /** @type {?} */
        let width = this.width;
        /** @type {?} */
        let columns = [...this.columns];
        // adjust min value
        this.adjustMinimalWidth(columns);
        // remove number columns
        /** @type {?} */
        let newColumns = [];
        columns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            if (column.isTypeNumber()) {
                width -= column.getWidth();
            }
            else {
                newColumns.push(column);
            }
        }));
        columns = newColumns;
        // split even auto columns
        if (columns.length !== 0) {
            /** @type {?} */
            const evenWidth = width / columns.length;
            columns.forEach((/**
             * @param {?} column
             * @param {?} index
             * @return {?}
             */
            (column, index) => {
                column.setWidth(evenWidth);
            }));
        }
        // adjust number columns
        // let numberColumns = this.columns.filter((columnWidth: ColumnWidth) => columnWidth.isTypeNumber());
        //
        // // sort by min values
        // numberColumns.sort((columnOne: ColumnWidth, columnTwo: ColumnWidth) => {
        // 	return columnOne.getWidth() - columnTwo.getWidth();
        // });
        //
        // numberColumns.forEach(() => {
        // });
        // this.adjustMinimalWidth(ColumnWidthType.NUMBER);
        //
        // this.adjustPercentageWidth();
        //
        // this.adjustAutoWidth();
        return this.columns;
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    adjustMinimalWidth(columns) {
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            if (column.isTypeNumber()) {
                if (column.getWidth() < this.MIN_COLUMN_WIDTH) {
                    column.setWidthAndType(this.MIN_COLUMN_WIDTH);
                }
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    adjustPercentageWidth() {
        /** @type {?} */
        const percentageColumns = this.columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        (columnWidth) => columnWidth.isTypePercentage()));
        for (let column of this.columns) {
            if (column.getColumnType() === ColumnWidthType.PERCENTAGE) {
                column.setWidth(this.width * column.getWidth() * 0.01);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    adjustAutoWidth() {
        /** @type {?} */
        let leftWidth = this.width;
        /** @type {?} */
        let autoColumns = [];
        for (let i = 0; i < this.columns.length; i += 1) {
            /** @type {?} */
            let column = this.columns[i];
            if (column.getColumnType() !== ColumnWidthType.AUTO) {
                leftWidth -= column.getWidth();
            }
            else {
                autoColumns.push(column);
            }
        }
        if (autoColumns.length > 0) {
            /** @type {?} */
            const splitWidth = leftWidth / autoColumns.length;
            for (let column of autoColumns) {
                column.setWidth(splitWidth);
            }
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.source;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.MIN_COLUMN_WIDTH;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnWidthCollection {
    /**
     * @param {?} MIN_COLUMN_WIDTH
     * @param {?=} columns
     * @param {?=} width
     */
    constructor(MIN_COLUMN_WIDTH, columns = [], width = 100) {
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.baseColumnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.columnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.setContainerWidth(width);
        this.calculate();
    }
    /**
     * @return {?}
     */
    getColumnWidths() {
        return this.baseColumnWidths;
    }
    /**
     * @return {?}
     */
    getColumnsWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getWidths() {
        return this.columnWidths.map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.getWidth()));
    }
    /**
     * @return {?}
     */
    getMinWidth() {
        /** @type {?} */
        const calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        return calculator.calculateMinWidth(this.columnWidths);
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.setContainerWidth(width);
        this.calculate();
    }
    /**
     * @param {?} columnConfigs
     * @return {?}
     */
    setColumns(columnConfigs) {
        this.baseColumnWidths = columnConfigs.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.columnWidths = columnConfigs.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.calculate();
    }
    /**
     * @return {?}
     */
    getMinColumnWidth() {
        return this.MIN_COLUMN_WIDTH;
    }
    /**
     * @private
     * @return {?}
     */
    calculate() {
        if (this.baseColumnWidths && this.width) {
            /** @type {?} */
            const calculator = new CompositionWidthCalculator(this.baseColumnWidths, this.width, this.MIN_COLUMN_WIDTH);
            this.columnWidths = calculator.calculate();
        }
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    setContainerWidth(width) {
        if (this.getMinWidth() > width) {
            this.width = this.getMinWidth();
        }
        else {
            this.width = width;
        }
        this.calculate();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.baseColumnWidths;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.columnWidths;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.width;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.MIN_COLUMN_WIDTH;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionChangeSortStatusAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'CompositionChangeSortStatusAggregateEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActiveColumnContainer {
    /**
     * @param {?} compositionId
     * @param {?=} columns
     * @param {?=} gridWidth
     * @param {?=} columnConfigs
     */
    constructor(compositionId, columns = [], gridWidth, columnConfigs) {
        this.compositionId = compositionId;
        this.MIN_COLUMN_WIDTH = 50;
        /**
         * Columns taken from user config.
         * This should not be modified and it should be used as a reference point.
         */
        this.columnWidthCollection = new ColumnWidthCollection(this.MIN_COLUMN_WIDTH);
        this.columns = columns;
        if (gridWidth && columnConfigs) {
            this.columnWidthCollection = new ColumnWidthCollection(this.MIN_COLUMN_WIDTH, columnConfigs, gridWidth);
        }
    }
    /**
     * @return {?}
     */
    getColumnWidths() {
        return this.columnWidthCollection.getColumnWidths();
    }
    // REMOVE
    /**
     * @return {?}
     */
    getColumns() {
        return this.columns;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.columnWidthCollection.setWidth(width);
    }
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    addColumn(column, index) {
        this.columns.splice(index, 0, column);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeColumn(index) {
        this.columns.splice(index, 1);
    }
    /**
     * @param {?} columns
     * @param {?} columnConfigs
     * @return {?}
     */
    setColumns(columns, columnConfigs) {
        this.columns = columns;
        this.columnWidthCollection.setColumns(columnConfigs);
        /** @type {?} */
        const updatedWidths = this.columnWidthCollection.getWidths();
        this.columns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            column.setWidth(updatedWidths[index]);
        }));
        // TODO
        //this.addEvent(new ColumnsSetAggregateEvent(this.getId(), columns));
    }
    /**
     * @param {?} sortParams
     * @return {?}
     */
    changeSort(sortParams) {
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            column.setSortStatus(SortOrder.NONE);
        }));
        for (let param of sortParams) {
            /** @type {?} */
            const fieldId = param.fieldId;
            /** @type {?} */
            const direction = param.direction;
            /** @type {?} */
            const sortStatus = direction ? SortOrder.ASC : SortOrder.DESC;
            /** @type {?} */
            const columns = this.columns.filter((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                return column.getField().getId().getId() === fieldId.getId();
            }));
            if (columns.length > 0) {
                columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    column.setSortStatus(sortStatus);
                }));
            }
        }
        return new CompositionChangeSortStatusAggregateEvent(this.getCompositionId());
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    moveLeft(columnId) {
        /** @type {?} */
        const index = this.findColumnIndex(columnId);
        this.move(index, index - 1);
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    moveRight(columnId) {
        /** @type {?} */
        const index = this.findColumnIndex(columnId);
        this.move(index, index + 1);
    }
    /**
     * @return {?}
     */
    getMinColumnWidth() {
        return this.MIN_COLUMN_WIDTH;
    }
    /**
     * @private
     * @param {?} fromIndex
     * @param {?} toIndex
     * @return {?}
     */
    move(fromIndex, toIndex) {
        if (!this.validateMoveIndex(fromIndex) || !this.validateMoveIndex(toIndex)) {
            return;
        }
        /** @type {?} */
        const column = this.columns[fromIndex];
        this.columns[fromIndex] = this.columns[toIndex];
        this.columns[toIndex] = column;
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    validateMoveIndex(index) {
        return index >= 0;
    }
    /**
     * @private
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    findColumnIndex(columnId) {
        return this.columns.findIndex((/**
         * @param {?} c
         * @return {?}
         */
        c => c.getColumnId().equals(columnId)));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveColumnContainer.prototype.MIN_COLUMN_WIDTH;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnContainer.prototype.columns;
    /**
     * Columns taken from user config.
     * This should not be modified and it should be used as a reference point.
     * @type {?}
     * @private
     */
    ActiveColumnContainer.prototype.columnWidthCollection;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnContainer.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActiveColumnEntity {
    /**
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} header
     * @param {?} view
     * @param {?} config
     */
    constructor(columnId, columnField, header, view, config) {
        this.sortStatus = SortOrder.NONE;
        this.view = new ViewEntity(CellView.TEXT);
        this.columnId = columnId;
        this.columnField = columnField;
        this.header = header;
        this.view = view;
        this.config = config;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.config || {};
    }
    /**
     * @return {?}
     */
    getSortStatus() {
        return this.sortStatus;
    }
    /**
     * @return {?}
     */
    getField() {
        return this.columnField;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getColumnId() {
        return this.columnId;
    }
    /**
     * @return {?}
     */
    getHeader() {
        return this.header;
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.columnField.getDataType();
    }
    /**
     * @return {?}
     */
    getView() {
        return this.view;
    }
    /**
     * @return {?}
     */
    getCellView() {
        return this.view.getCellView();
    }
    /**
     * @return {?}
     */
    getTemplateFunction() {
        return this.view.getTemplateFunction();
    }
    /**
     * @return {?}
     */
    getSortingEnabled() {
        /** @type {?} */
        const config = this.getConfig();
        if (config.sorting !== undefined && config.sorting !== null) {
            if (config.sorting.enabled === undefined || config.sorting.enabled === null) {
                return true;
            }
            return config.sorting.enabled;
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setSortStatus(status) {
        this.sortStatus = status;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.width = width;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.columnField;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.width;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.header;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.view;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActiveColumnEntityConverter {
    /**
     * @param {?} entities
     * @return {?}
     */
    convertMany(entities) {
        return entities.map((/**
         * @param {?} e
         * @return {?}
         */
        e => this.convert(e)));
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    convert(entity) {
        return new ActiveColumnEntity(entity.getColumnId(), entity.getField(), entity.getHeader(), entity.getView(), entity.getColumnConfig());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionColumnMovedLeftAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionColumnMovedLeftAggregateEvent');
        this.activeColumns = activeColumns;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnMovedLeftAggregateEvent.prototype.activeColumns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionColumnMovedRightAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionColumnMovedRightAggregateEvent');
        this.activeColumns = activeColumns;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnMovedRightAggregateEvent.prototype.activeColumns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnsSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'ColumnsSetAggregateEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CompositionAggregate = class CompositionAggregate extends Aggregate {
    /**
     * @param {?} id
     * @param {?=} columnsParams
     * @param {?=} width
     * @param {?=} resizeWidth
     */
    constructor(id, columnsParams = [], width, resizeWidth) {
        super(id, 'CompositionAggregate');
        this.allColumns = [];
        this.resizeWidthEnabled = true;
        /**
         * Autowired
         */
        this.columnFactory = new ColumnEntityFactory();
        this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        /** @type {?} */
        const columnConfigs = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        (param) => param.getColumn()));
        this.baseParams = columnsParams;
        this.baseColumns = columnConfigs;
        this.width = width;
        this.allColumns = this.columnFactory.create(columnsParams);
        /** @type {?} */
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer = new ActiveColumnContainer(this.getId(), activeColumns, width, columnConfigs);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            this.resizeWidthEnabled = resizeWidth;
        }
    }
    // REMOVE
    /**
     * @return {?}
     */
    getColumns() {
        return this.allColumns;
    }
    // REMOVE
    /**
     * @return {?}
     */
    getActiveColumns() {
        return this.activeColumnContainer.getColumns();
    }
    // make private
    /**
     * @return {?}
     */
    getWidth() {
        if (this.resizeWidthEnabled) {
            return this.containerInDOMWidth;
        }
        else {
            return this.width;
        }
    }
    // REMOVE
    /**
     * @return {?}
     */
    isResizeEnabled() {
        return this.resizeWidthEnabled;
    }
    // REMOVE
    /**
     * @return {?}
     */
    isReady() {
        return !!this.getWidth() && this.getActiveColumns().length > 0;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    setColumns(params) {
        this.allColumns = this.columnFactory.create(params);
        /** @type {?} */
        const columnConfigs = params.map((/**
         * @param {?} param
         * @return {?}
         */
        (param) => param.getColumn()));
        /** @type {?} */
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, columnConfigs);
        this.addEvent(new ColumnsSetAggregateEvent(this.getId()));
    }
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    setContainerWidth(containerWidth) {
        this.setContainerWidthWithEvent(containerWidth);
        this.recalculateColumns();
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.setWidthWithEvent(width);
        this.setResizeWidthWithEvent(false);
        this.recalculateColumns();
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setResizeWidth(enabled) {
        this.setResizeWidthWithEvent(enabled);
    }
    /**
     * @param {?} sortParams
     * @return {?}
     */
    changeSort(sortParams) {
        this.addEvent(this.activeColumnContainer.changeSort(sortParams));
    }
    // DELEGATE
    /**
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    enableColumn(columnId, enabled) {
        /** @type {?} */
        let enabledIndex = -1;
        this.allColumns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            if (column.getColumnId().getId() === columnId.getId()) {
                /** @type {?} */
                const prevState = column.isEnabled();
                column.setEnabled(enabled);
                if (prevState !== enabled) {
                    enabledIndex = index;
                }
            }
        }));
        if (enabledIndex > 0) {
            if (enabled) {
                // convert
                /** @type {?} */
                const columnToAdd = this.activeColumnEntityConverter.convert(this.allColumns[enabledIndex]);
                this.activeColumnContainer.addColumn(columnToAdd, enabledIndex);
            }
            else {
                this.activeColumnContainer.removeColumn(enabledIndex);
            }
        }
        this.recalculateColumns();
        this.addEvent(new CompositionColumnSetEnabledAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    moveLeft(columnId) {
        /** @type {?} */
        const columnIndex = this.findColumnIndex(columnId);
        /** @type {?} */
        let nextLeft;
        /** @type {?} */
        let nextLeftIndex = -1;
        for (let i = columnIndex - 1; i >= 0; i -= 1) {
            /** @type {?} */
            const leftColumn = this.allColumns[i];
            if (leftColumn.isEnabled()) {
                nextLeft = leftColumn;
                nextLeftIndex = i;
                break;
            }
        }
        if (nextLeft && nextLeftIndex >= 0 && columnIndex >= 0) {
            /** @type {?} */
            let column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextLeft;
            this.allColumns[nextLeftIndex] = column;
        }
        this.activeColumnContainer.moveLeft(columnId);
        this.addEvent(new CompositionColumnMovedLeftAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    moveRight(columnId) {
        /** @type {?} */
        const columnIndex = this.findColumnIndex(columnId);
        /** @type {?} */
        let nextRight;
        /** @type {?} */
        let nextRightIndex = -1;
        for (let i = columnIndex + 1; i < this.allColumns.length; i += 1) {
            /** @type {?} */
            const rightColumn = this.allColumns[i];
            if (rightColumn.isEnabled()) {
                nextRight = rightColumn;
                nextRightIndex = i;
                break;
            }
        }
        if (nextRight && nextRightIndex >= 0 && columnIndex >= 0) {
            /** @type {?} */
            let column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextRight;
            this.allColumns[nextRightIndex] = column;
        }
        this.activeColumnContainer.moveRight(columnId);
        this.addEvent(new CompositionColumnMovedRightAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    /**
     * @private
     * @return {?}
     */
    recalculateColumns() {
        /** @type {?} */
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, activeColumns.map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.getConfig())));
    }
    // TODO Refactor
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    setWidthWithEvent(width) {
        /** @type {?} */
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        /** @type {?} */
        const minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > width) {
            this.width = minWidth;
        }
        else {
            this.width = width;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionWidthSetAggregateEvent(this.getId()));
    }
    // TODO Refactor
    /**
     * @private
     * @param {?} containerWidth
     * @return {?}
     */
    setContainerWidthWithEvent(containerWidth) {
        /** @type {?} */
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        /** @type {?} */
        const minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > containerWidth) {
            this.containerInDOMWidth = minWidth;
        }
        else {
            this.containerInDOMWidth = containerWidth;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionContainerWidthSetAggregateEvent(this.getId(), containerWidth));
    }
    /**
     * @private
     * @param {?} enabled
     * @return {?}
     */
    setResizeWidthWithEvent(enabled) {
        this.resizeWidthEnabled = enabled;
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    }
    // REMOVE -> move to allColumnsContainer
    /**
     * @private
     * @return {?}
     */
    getEnabledColumns() {
        return this.allColumns.filter((/**
         * @param {?} c
         * @return {?}
         */
        c => c.isEnabled()));
    }
    /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    findColumnIndex(columnId) {
        return this.allColumns.findIndex((/**
         * @param {?} column
         * @return {?}
         */
        (column) => column.getColumnId().equals(columnId)));
    }
    /**
     * @private
     * @return {?}
     */
    getMinColumnWidth() {
        return this.activeColumnContainer.getMinColumnWidth();
    }
};
CompositionAggregate.ctorParameters = () => [
    { type: AggregateId },
    { type: Array },
    { type: Number },
    { type: Boolean }
];
CompositionAggregate = __decorate([
    RootAggregate,
    __metadata("design:paramtypes", [AggregateId,
        Array, Number, Boolean])
], CompositionAggregate);
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.allColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.baseColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.baseParams;
    /**
     * Value taken from user config [width]/tree-content.assert.ts
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.containerInDOMWidth;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.resizeWidthEnabled;
    /**
     * Autowired
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.columnFactory;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.activeColumnContainer;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.activeColumnEntityConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionAggregateFactory {
    /**
     * @param {?} id
     * @return {?}
     */
    create(id) {
        return new CompositionAggregate(id);
    }
}
CompositionAggregateFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CreateCompositionCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, domainEventPublisher) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionCreatedEvent(command.getAggregateId()));
    }
    /**
     * @return {?}
     */
    getAggregateRepository() {
        return this.compositionAggregateRepository;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CreateCompositionCommand;
    }
}
CreateCompositionCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CreateCompositionCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CreateCompositionCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    CreateCompositionCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionSetColumnEnabledCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CompositionSetColumnEnabledCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const columnId = command.getColumnId();
        /** @type {?} */
        const enabled = command.isEnabled();
        aggregate.enableColumn(columnId, enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishEvents(composition, command) {
        /** @type {?} */
        const events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
CompositionSetColumnEnabledCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionSetColumnEnabledCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommandHandler.prototype.compositionEventConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetColumnsCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetColumnsCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const setColumnsParams = command.getParams();
        aggregate.setColumns(setColumnsParams);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishEvents(composition, command) {
        /** @type {?} */
        const events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        const domainEvents = this.compositionEventConverter.convert(events);
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetColumnsCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetColumnsCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionEventConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetCompositionWidthCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetCompositionWidthCommand;
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    handleAggregate(composition, command) {
        /** @type {?} */
        const width = command.getWidth();
        composition.setWidth(width);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionWidthSetEvent(command.getAggregateId()));
    }
}
SetCompositionWidthCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetCompositionWidthCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionMoveLeftColumnCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CompositionMoveLeftColumnCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const columnId = command.getColumnId();
        aggregate.moveLeft(columnId);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishEvents(composition, command) {
        /** @type {?} */
        const events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
CompositionMoveLeftColumnCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionMoveLeftColumnCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionMoveLeftColumnCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionMoveLeftColumnCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionMoveLeftColumnCommandHandler.prototype.compositionEventConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionMoveRightColumnCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CompositionMoveRightColumnCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const columnId = command.getColumnId();
        aggregate.moveRight(columnId);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishEvents(composition, command) {
        /** @type {?} */
        const events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
CompositionMoveRightColumnCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionMoveRightColumnCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionMoveRightColumnCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionMoveRightColumnCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionMoveRightColumnCommandHandler.prototype.compositionEventConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionChangeSortStatusCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CompositionChangeSortStatusCommand;
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    handleAggregate(composition, command) {
        /** @type {?} */
        const sortParams = command.getSortParams();
        composition.changeSort(sortParams);
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(composition, command) {
        /** @type {?} */
        const compositionId = command.getAggregateId();
        /** @type {?} */
        const columns = composition.getActiveColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
    }
}
CompositionChangeSortStatusCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionChangeSortStatusCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetCompositionContainerWidthCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetCompositionContainerWidthCommand;
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    handleAggregate(composition, command) {
        /** @type {?} */
        const width = command.getWidth();
        composition.setContainerWidth(width);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.publishAggregateEvents((/** @type {?} */ (aggregate.getEvents())));
    }
    /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    publishAggregateEvents(aggregateEvents) {
        /** @type {?} */
        const domainEvents = this.compositionEventConverter.convert(aggregateEvents);
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetCompositionContainerWidthCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetCompositionContainerWidthCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetCompositionContainerWidthCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionEventConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetCompositionResizeWidthCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetCompositionResizeWidthCommand;
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    handleAggregate(composition, command) {
        /** @type {?} */
        const enabled = command.getEnabled();
        composition.setResizeWidth(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionResizeWidthSetEvent(command.getAggregateId()));
    }
}
SetCompositionResizeWidthCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetCompositionResizeWidthCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionResizeWidthCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    StringEditTemplateComponent,
    NumberEditTemplateComponent,
    BooleanEditTemplateComponent,
    ColumnQueryComponent,
    FunctionViewComponent
];
/** @type {?} */
const exportDeclarations = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    ColumnQueryComponent,
    FabricChipModule,
    FabricCheckboxModule,
    FabricButtonModule,
    FabricInputModule,
    FunctionViewComponent
];
/** @type {?} */
const compositionKey = 'CompositionAggregate';
class CompositionModule {
}
CompositionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    SanitizeModule,
                    FabricChipModule,
                    FabricCheckboxModule,
                    FabricButtonModule,
                    FabricInputModule,
                    HermesModule.defineAggregate(compositionKey, CompositionAggregateFactory, InMemoryCompositionAggregateRepository, CreateCompositionCommandHandler, [
                        ...HermesModule.registerCommandHandler(SetColumnsCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionResizeWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionContainerWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionSetColumnEnabledCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionChangeSortStatusCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveLeftColumnCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveRightColumnCommandHandler, compositionKey),
                    ]),
                ],
                providers: [
                    ...compositionProviders
                ],
                declarations: [
                    components
                ],
                exports: exportDeclarations,
                entryComponents: [
                    ViewTemplatesComponent,
                    EditTemplatesComponent,
                    FabricChipComponent,
                    FabricCheckboxComponent,
                    FabricButtonComponent,
                    FabricInputComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureIdGenerator {
    constructor() {
        this.increment = 0;
    }
    /**
     * @return {?}
     */
    generateId() {
        this.increment++;
        return this.increment;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureIdGenerator.prototype.increment;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Logger {
}
if (false) {
    /**
     * @abstract
     * @param {?} text
     * @return {?}
     */
    Logger.prototype.warn = function (text) { };
    /**
     * @abstract
     * @param {?} text
     * @return {?}
     */
    Logger.prototype.error = function (text) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} structureId
     */
    constructor(structureId) {
        super(structureId, 'PageChangedAggregateEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagesizeChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} structureId
     */
    constructor(structureId) {
        super(structureId, 'PagesizeChangedAggregateEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Aggregate
class PagingAggregate {
    /**
     * @private
     * @param {?} enabled
     * @param {?} page
     * @param {?} pageSize
     * @param {?} pageSizes
     * @param {?} pagerTop
     * @param {?} pagerBottom
     * @param {?} sourceSize
     * @param {?} logger
     */
    constructor(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, sourceSize, logger) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
        this.sourceSize = sourceSize;
        this.events = [];
        this.logger = logger;
    }
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    static default(logger) {
        return new PagingAggregate(false, 1, 25, [10, 25, 50, 100], false, true, 0, logger);
    }
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    static fromConfig(paging, logger) {
        /** @type {?} */
        const defaultPagingDefinition = PagingAggregate.default(logger);
        /** @type {?} */
        const enabled = paging.enabled || defaultPagingDefinition.isEnabled();
        /** @type {?} */
        const page = paging.page || defaultPagingDefinition.getPage();
        /** @type {?} */
        const pageSize = paging.pageSize || defaultPagingDefinition.getPageSize();
        /** @type {?} */
        const pageSizes = paging.pageSizes || defaultPagingDefinition.getPageSizes();
        /** @type {?} */
        const pagerTop = paging.pagerTop || defaultPagingDefinition.isPagerTop();
        /** @type {?} */
        const pagerBottom = paging.pagerBottom || defaultPagingDefinition.isPagerBottom();
        return new PagingAggregate(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, 0, logger);
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return !this.enabled;
    }
    /**
     * @return {?}
     */
    getPage() {
        return this.page;
    }
    /**
     * @return {?}
     */
    getPageSize() {
        return this.pageSize;
    }
    /**
     * @return {?}
     */
    getPageSizes() {
        return this.pageSizes;
    }
    /**
     * @return {?}
     */
    isPagerTop() {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerTop;
    }
    /**
     * @return {?}
     */
    isPagerBottom() {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerBottom;
    }
    /**
     * @return {?}
     */
    getSourceSize() {
        return this.sourceSize;
    }
    /**
     * @param {?} pagingConfig
     * @return {?}
     */
    change(pagingConfig) {
        if (pagingConfig.enabled !== undefined) {
            this.enabled = pagingConfig.enabled;
        }
        if (pagingConfig.page !== undefined) {
            this.page = pagingConfig.page;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pageSize !== undefined) {
            this.pageSize = pagingConfig.pageSize;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pageSizes !== undefined) {
            this.pageSizes = pagingConfig.pageSizes;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pagerTop !== undefined) {
            this.pagerTop = pagingConfig.pagerTop;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pagerBottom !== undefined) {
            this.pagerBottom = pagingConfig.pagerBottom;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (this.enabled === true &&
            pagingConfig.pagerTop === false &&
            pagingConfig.pagerBottom === false) {
            this.pagerBottom = true;
            this.logger.warn('Pagers cannot be turn off when paging is enabled.');
        }
    }
    /**
     * @param {?} size
     * @return {?}
     */
    setSourceSize(size) {
        this.sourceSize = size;
    }
    /**
     * @return {?}
     */
    nextPage() {
        /** @type {?} */
        let nextPage = this.page;
        if (!this.isNextPageDisabled()) {
            nextPage += 1;
        }
        this.page = nextPage;
    }
    /**
     * @return {?}
     */
    prevPage() {
        /** @type {?} */
        let prevPage = this.page;
        if (!this.isPrevPageDisabled()) {
            prevPage -= 1;
        }
        this.page = prevPage;
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        if (this.pageSizes.find((/**
         * @param {?} ps
         * @return {?}
         */
        (ps) => ps === pageSize))) {
            this.setPage(1);
            this.setPageSize(pageSize);
        }
        return this.events;
    }
    /**
     * @return {?}
     */
    isNextPageDisabled() {
        if (this.sourceSize === 0) {
            return true;
        }
        return this.page === Math.ceil(this.sourceSize / this.pageSize);
    }
    /**
     * @return {?}
     */
    isPrevPageDisabled() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    calculateStart() {
        /** @type {?} */
        const firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (this.sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    }
    /**
     * @return {?}
     */
    calculateEnd() {
        /** @type {?} */
        const lastItem = this.page * this.pageSize;
        if (this.sourceSize < lastItem) {
            return this.sourceSize;
        }
        return lastItem;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    sample(source) {
        if (this.isDisabled()) {
            return source;
        }
        /** @type {?} */
        let start = this.calculateStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd());
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    setPage(page) {
        this.page = page;
        this.events.push(new PageChangedAggregateEvent(new StructureId('TODO need to be changed')));
    }
    /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    setPageSize(pageSize) {
        this.pageSize = pageSize;
        this.events.push(new PagesizeChangedAggregateEvent(new StructureId('TODO need to be changed')));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.events;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.page;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pageSizes;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pagerTop;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pagerBottom;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.sourceSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingAggregateFactory {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    createDefault() {
        return PagingAggregate.default(this.logger);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    createFromConfig(config) {
        return PagingAggregate.fromConfig(config, this.logger);
    }
}
PagingAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingAggregateFactory.ctorParameters = () => [
    { type: Logger }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingAggregateFactory.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalPagingCommandService extends PagingCommandService {
    /**
     * @param {?} structureId
     * @param {?} aggregateFactory
     * @param {?} pagingDispatcher
     */
    constructor(structureId, aggregateFactory, pagingDispatcher) {
        super(pagingDispatcher);
        this.structureId = structureId;
        this.aggregateFactory = aggregateFactory;
    }
    /**
     * @return {?}
     */
    setDefaultPaging() {
        /** @type {?} */
        const defaultPaggingAggregate = this.aggregateFactory.createDefault();
        super.setPaging({
            page: defaultPaggingAggregate.getPage(),
            pageSize: defaultPaggingAggregate.getPageSize(),
            pageSizes: defaultPaggingAggregate.getPageSizes()
        }, this.structureId);
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    setPaging(paging) {
        super.setPaging(paging, this.structureId);
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        super.changePageSize(pageSize, this.structureId);
    }
    /**
     * @return {?}
     */
    nextPage() {
        super.nextPage(this.structureId);
    }
    /**
     * @return {?}
     */
    prevPage() {
        super.prevPage(this.structureId);
    }
}
LocalPagingCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingCommandService.ctorParameters = () => [
    { type: StructureId },
    { type: PagingAggregateFactory },
    { type: PagingDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocalPagingCommandService.prototype, "setPaging", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalPagingCommandService.prototype, "changePageSize", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalPagingCommandService.prototype, "nextPage", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalPagingCommandService.prototype, "prevPage", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandService.prototype.aggregateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalPagingReadModelService extends PagingReadModelService {
    /**
     * @param {?} structureId
     * @param {?} pagingRepository
     */
    constructor(structureId, pagingRepository) {
        super(pagingRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onPaging() {
        return super.onPaging(this.structureId);
    }
    /**
     * @return {?}
     */
    onSinglePaging() {
        return super.onPaging(this.structureId)
            .pipe(take(1));
    }
}
LocalPagingReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: PagingRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalPagingReadModelService.prototype, "onPaging", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalPagingReadModelService.prototype, "onSinglePaging", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingReadModelService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} height
     */
    constructor(structureId, height) {
        super(structureId, 'SetSchemaCommand');
        this.height = height;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.height;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaCommand.prototype.height;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaVerticalGridCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'SetSchemaVerticalGridCommand');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaVerticalGridCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaHorizontalGridCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'SetSchemaHorizontalGridCommand');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaHorizontalGridCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaThemeCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} theme
     */
    constructor(structureId, theme) {
        super(structureId, 'SetSchemaThemeCommand');
        this.theme = theme;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return this.theme;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaThemeCommand.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetRowColoringCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} coloring
     */
    constructor(structureId, coloring) {
        super(structureId, 'SetRowColoringCommand');
        this.coloring = coloring;
    }
    /**
     * @return {?}
     */
    getColoring() {
        return this.coloring;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowColoringCommand.prototype.coloring;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangeSchemaTopHeaderCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'ChangeSchemaTopHeaderCommand');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaTopHeaderCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangeSchemaBottomHeaderCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'ChangeSchemaBottomHeaderCommand');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaBottomHeaderCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} height
     * @return {?}
     */
    setSchema(structureId, height) {
        this.commandDispatcher.dispatch(new SetSchemaCommand(structureId, height));
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    changeVerticalGrid(structureId, enabled) {
        this.commandDispatcher.dispatch(new SetSchemaVerticalGridCommand(structureId, enabled));
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    changeHorizontalGrid(structureId, enabled) {
        this.commandDispatcher.dispatch(new SetSchemaHorizontalGridCommand(structureId, enabled));
    }
    /**
     * @param {?} structureId
     * @param {?} theme
     * @return {?}
     */
    setTheme(structureId, theme) {
        this.commandDispatcher.dispatch(new SetSchemaThemeCommand(structureId, theme));
    }
    /**
     * @param {?=} structureId
     * @param {?=} coloring
     * @return {?}
     */
    setRowColoring(structureId = globalStructureId, coloring) {
        this.commandDispatcher.dispatch(new SetRowColoringCommand(structureId, coloring));
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    changeTopHeader(structureId, enabled) {
        this.commandDispatcher.dispatch(new ChangeSchemaTopHeaderCommand(structureId, enabled));
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    changeBottomHeader(structureId, enabled) {
        this.commandDispatcher.dispatch(new ChangeSchemaBottomHeaderCommand(structureId, enabled));
    }
}
SchemaDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaRepository {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    on(structureId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getId().toString() === structureId.toString())), map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getSchema())));
    }
}
SchemaRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaRepository.ctorParameters = () => [
    { type: StructureRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaRepository.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaReadModelService {
    /**
     * @param {?} schemaRepository
     */
    constructor(schemaRepository) {
        this.schemaRepository = schemaRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSchema(structureId = globalStructureId) {
        return this.schemaRepository.on(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSingleSchema(structureId = globalStructureId) {
        return this.onSchema(structureId)
            .pipe(take(1));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onHeight(structureId = globalStructureId) {
        return this.schemaRepository
            .on(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            return schema.getHeight();
        })), filter((/**
         * @param {?} height
         * @return {?}
         */
        (height) => height !== undefined)));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onContainerHeight(structureId = globalStructureId) {
        return this.schemaRepository
            .on(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            return schema.getContainerHeight();
        })), filter((/**
         * @param {?} height
         * @return {?}
         */
        (height) => height !== undefined)));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onCssClasses(structureId = globalStructureId) {
        return this.schemaRepository
            .on(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            return schema.getCssClasses();
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onColumnHeader(structureId = globalStructureId) {
        return this.schemaRepository
            .on(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            return schema.getColumnHeader();
        })));
    }
}
SchemaReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaReadModelService.ctorParameters = () => [
    { type: SchemaRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaReadModelService.prototype.schemaRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaCommandService {
    /**
     * @param {?} schemaDispatcher
     * @param {?} schemaQueryService
     */
    constructor(schemaDispatcher, schemaQueryService) {
        this.schemaDispatcher = schemaDispatcher;
        this.schemaQueryService = schemaQueryService;
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    setSchema(height, structureId = globalStructureId) {
        this.schemaDispatcher.setSchema(structureId, height);
    }
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    setHeight(height, structureId = globalStructureId) {
        this.schemaDispatcher.setSchema(structureId, height);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeVerticalGrid(enabled, structureId = globalStructureId) {
        this.schemaDispatcher.changeVerticalGrid(structureId, enabled);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeHorizontalGrid(enabled, structureId = globalStructureId) {
        this.schemaDispatcher.changeHorizontalGrid(structureId, enabled);
    }
    /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    setTheme(theme, structureId = globalStructureId) {
        this.schemaDispatcher.setTheme(structureId, theme);
    }
    /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    setRowColoring(coloring, structureId = globalStructureId) {
        this.schemaDispatcher.setRowColoring(structureId, coloring);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeTopHeader(enabled, structureId = globalStructureId) {
        this.schemaDispatcher.changeTopHeader(structureId, enabled);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeBottomHeader(enabled, structureId = globalStructureId) {
        this.schemaDispatcher.changeBottomHeader(structureId, enabled);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    toggleVerticalGrid(structureId = globalStructureId) {
        this.schemaQueryService
            .onCssClasses(structureId)
            .pipe(map((/**
         * @param {?} css
         * @return {?}
         */
        (css) => css.verticalGrid)), filter((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => grid !== undefined)), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => {
            this.changeVerticalGrid(!grid, structureId);
        }));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    toggleHorizontalGrid(structureId = globalStructureId) {
        this.schemaQueryService
            .onCssClasses(structureId)
            .pipe(map((/**
         * @param {?} css
         * @return {?}
         */
        (css) => css.horizontalGrid)), filter((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => grid !== undefined)), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => {
            this.changeHorizontalGrid(!grid, structureId);
        }));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    toggleTopHeader(structureId = globalStructureId) {
        this.schemaQueryService
            .onColumnHeader(structureId)
            .pipe(map((/**
         * @param {?} columnHeader
         * @return {?}
         */
        (columnHeader) => columnHeader.isTopHeaderEnabled())), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.changeTopHeader(!enabled, structureId);
        }));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    toggleBottomHeader(structureId = globalStructureId) {
        this.schemaQueryService
            .onColumnHeader(structureId)
            .pipe(map((/**
         * @param {?} columnHeader
         * @return {?}
         */
        (columnHeader) => columnHeader.isBottomHeaderEnabled())), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.changeBottomHeader(!enabled, structureId);
        }));
    }
}
SchemaCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCommandService.ctorParameters = () => [
    { type: SchemaDispatcher },
    { type: SchemaReadModelService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCommandService.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandService.prototype.schemaDispatcher;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandService.prototype.schemaQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SchemaRowColoring = {
    NONE: 0,
    EVEN: 1,
    ODD: 2,
};
SchemaRowColoring[SchemaRowColoring.NONE] = 'NONE';
SchemaRowColoring[SchemaRowColoring.EVEN] = 'EVEN';
SchemaRowColoring[SchemaRowColoring.ODD] = 'ODD';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalSchemaCommandService extends SchemaCommandService {
    /**
     * @param {?} structureId
     * @param {?} schemaQueryService
     * @param {?} schemaDispatcher
     */
    constructor(structureId, schemaQueryService, schemaDispatcher) {
        super(schemaDispatcher, schemaQueryService);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    setDefaultSchema() {
        super.setSchema(Number.MAX_SAFE_INTEGER, this.structureId);
    }
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    setSchema(height, structureId = globalStructureId) {
        super.setSchema(height, this.structureId);
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        super.setHeight(height, this.structureId);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    changeVerticalGrid(enabled) {
        super.changeVerticalGrid(enabled, this.structureId);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    changeHorizontalGrid(enabled) {
        super.changeHorizontalGrid(enabled, this.structureId);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        super.setTheme(theme, this.structureId);
    }
    /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    setRowColoring(coloring, structureId = globalStructureId) {
        super.setRowColoring(coloring, this.structureId);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeTopHeader(enabled, structureId = globalStructureId) {
        super.changeTopHeader(enabled, this.structureId);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeBottomHeader(enabled, structureId = globalStructureId) {
        super.changeBottomHeader(enabled, this.structureId);
    }
    /**
     * @return {?}
     */
    toggleVerticalGrid() {
        super.toggleVerticalGrid(this.structureId);
    }
    /**
     * @return {?}
     */
    toggleHorizontalGrid() {
        super.toggleHorizontalGrid(this.structureId);
    }
    /**
     * @return {?}
     */
    toggleTopHeader() {
        super.toggleTopHeader(this.structureId);
    }
    /**
     * @return {?}
     */
    toggleBottomHeader() {
        super.toggleBottomHeader(this.structureId);
    }
}
LocalSchemaCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaCommandService.ctorParameters = () => [
    { type: StructureId },
    { type: SchemaReadModelService },
    { type: SchemaDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, StructureId]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "setSchema", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "setHeight", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "changeVerticalGrid", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "changeHorizontalGrid", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "setTheme", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, StructureId]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "setRowColoring", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, StructureId]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "changeTopHeader", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, StructureId]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "changeBottomHeader", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "toggleVerticalGrid", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "toggleHorizontalGrid", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "toggleTopHeader", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "toggleBottomHeader", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalSchemaReadModelService extends SchemaReadModelService {
    /**
     * @param {?} structureId
     * @param {?} schemaRepository
     */
    constructor(structureId, schemaRepository) {
        super(schemaRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onSchema() {
        return super.onSchema(this.structureId);
    }
    /**
     * @return {?}
     */
    onSingleSchema() {
        return super.onSingleSchema(this.structureId);
    }
    /**
     * @return {?}
     */
    onHeight() {
        return super.onHeight(this.structureId);
    }
    /**
     * @return {?}
     */
    onContainerHeight() {
        return super.onContainerHeight(this.structureId);
    }
    /**
     * @return {?}
     */
    onCssClasses() {
        return super.onCssClasses(this.structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onColumnHeader(structureId = globalStructureId) {
        return super.onColumnHeader(this.structureId);
    }
}
LocalSchemaReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: SchemaRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onSchema", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onSingleSchema", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onHeight", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onContainerHeight", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onCssClasses", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StructureId]),
    __metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onColumnHeader", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaReadModelService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetFormationCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?=} payload
     */
    constructor(structureId, payload) {
        super(structureId, 'SetFormationCommand');
        this.payload = payload;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetFormationCommand.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleSelectedRowCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} selectedRow
     */
    constructor(structureId, selectedRow) {
        super(structureId, 'ToggleSelectedRowCommand');
        this.selectedRow = selectedRow;
    }
    /**
     * @return {?}
     */
    getSelectedRow() {
        return this.selectedRow;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommand.prototype.selectedRow;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    setDefault(structureId) {
        this.commandDispatcher.dispatch(new SetFormationCommand(structureId));
    }
    /**
     * @param {?} structureId
     * @param {?} selectedRow
     * @return {?}
     */
    toggleSelectedRow(structureId, selectedRow) {
        this.commandDispatcher.dispatch(new ToggleSelectedRowCommand(structureId, selectedRow));
    }
}
FormationDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationCommandService {
    /**
     * @param {?} formationDispatcher
     */
    constructor(formationDispatcher) {
        this.formationDispatcher = formationDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    setDefaultFormation(structureId = globalStructureId) {
        this.formationDispatcher.setDefault(structureId);
    }
    /**
     * @param {?} selectedRow
     * @param {?=} structureId
     * @return {?}
     */
    toggleSelectedRow(selectedRow, structureId = globalStructureId) {
        this.formationDispatcher.toggleSelectedRow(structureId, selectedRow);
    }
}
FormationCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationCommandService.ctorParameters = () => [
    { type: FormationDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationCommandService.prototype.formationDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalFormationCommandService extends FormationCommandService {
    /**
     * @param {?} structureId
     * @param {?} formationDispatcher
     */
    constructor(structureId, formationDispatcher) {
        super(formationDispatcher);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    setDefault() {
        super.setDefaultFormation(this.structureId);
    }
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    toggleSelectedRow(selectedRow) {
        super.toggleSelectedRow(selectedRow, this.structureId);
    }
}
LocalFormationCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationCommandService.ctorParameters = () => [
    { type: StructureId },
    { type: FormationDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocalFormationCommandService.prototype, "toggleSelectedRow", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationRepository {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFormation(structureId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getId().toString() === structureId.toString())), map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getFormation())));
    }
}
FormationRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationRepository.ctorParameters = () => [
    { type: StructureRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationRepository.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationReadModelService {
    /**
     * @param {?} formationRepository
     */
    constructor(formationRepository) {
        this.formationRepository = formationRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSelectedRows(structureId = globalStructureId) {
        return this.formationRepository
            .onFormation(structureId)
            .pipe(map((/**
         * @param {?} formation
         * @return {?}
         */
        (formation) => formation.getSelectedRows())));
    }
}
FormationReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationReadModelService.ctorParameters = () => [
    { type: FormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationReadModelService.prototype.formationRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalFormationReadModelService extends FormationReadModelService {
    /**
     * @param {?} structureId
     * @param {?} formationRepository
     */
    constructor(structureId, formationRepository) {
        super(formationRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onSelectedRows() {
        return super.onSelectedRows(this.structureId);
    }
}
LocalFormationReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: FormationRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalFormationReadModelService.prototype, "onSelectedRows", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationReadModelService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetConfigFilterCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} filterConfig
     */
    constructor(structureId, filterConfig) {
        super(structureId, 'StructureSetConfigFilterCommand');
        this.filterConfig = filterConfig;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.filterConfig;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommand.prototype.filterConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureToggleFilterCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} fieldId
     * @param {?} externalFilterId
     * @param {?} filterValue
     */
    constructor(structureId, fieldId, externalFilterId, filterValue) {
        super(structureId, 'StructureToggleFilterCommand');
        this.fieldId = fieldId;
        this.externalFilterId = externalFilterId;
        this.filterValue = filterValue;
    }
    /**
     * @return {?}
     */
    getFieldId() {
        return this.fieldId;
    }
    /**
     * @return {?}
     */
    getExternalFilterId() {
        return this.externalFilterId;
    }
    /**
     * @return {?}
     */
    getFilterValue() {
        return this.filterValue;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommand.prototype.externalFilterId;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommand.prototype.filterValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFilterCommandService {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    setFilteringEnabled(config, structureId) {
        this.commandDispatcher.dispatch(new StructureSetConfigFilterCommand(structureId, config));
    }
    /**
     * @param {?} fieldId
     * @param {?} externalFieldId
     * @param {?} filterValue
     * @param {?} structureId
     * @return {?}
     */
    addFilter(fieldId, externalFieldId, filterValue, structureId) {
        this.commandDispatcher.dispatch(new StructureToggleFilterCommand(structureId, fieldId, externalFieldId, filterValue));
    }
}
StructureFilterCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterCommandService.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterCommandService.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceSetLoadingCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'SourceSetLoadingCommand');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceSetLoadingCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetOriginCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?=} items
     */
    constructor(structureId, items = []) {
        super(structureId, 'SetOriginCommand');
        this.items = items;
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.items;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetOriginCommand.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureEditSourceItemCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} params
     */
    constructor(structureId, params) {
        super(structureId, 'StructureEditSourceItemCommand');
        this.params = params;
    }
    /**
     * @return {?}
     */
    getParams() {
        return this.params;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommand.prototype.params;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    setLoading(structureId, enabled) {
        this.commandDispatcher.dispatch(new SourceSetLoadingCommand(structureId, enabled));
    }
    /**
     * @param {?} structureId
     * @param {?} items
     * @return {?}
     */
    setOrigin(structureId, items) {
        this.commandDispatcher.dispatch(new SetOriginCommand(structureId, items));
    }
    /**
     * @param {?} structureId
     * @param {?} params
     * @return {?}
     */
    editItem(structureId, params) {
        this.commandDispatcher.dispatch(new StructureEditSourceItemCommand(structureId, params));
    }
}
SourceDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CreateStructureCommand extends Command {
    /**
     * @param {?} structureId
     */
    constructor(structureId) {
        super(structureId, 'CreateStructureCommand');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetVerticalScrollEnabledCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'SetVerticalScrollEnabledCommand');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetVerticalScrollEnabledCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetScrollPositionCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} position
     */
    constructor(structureId, position) {
        super(structureId, 'SetScrollPositionCommand');
        this.position = position;
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this.position;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetScrollPositionCommand.prototype.position;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSortingCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} sortingConfig
     */
    constructor(structureId, sortingConfig) {
        super(structureId, 'SetSortingCommand');
        this.sortingConfig = sortingConfig;
    }
    /**
     * @return {?}
     */
    getSortingConfig() {
        return this.sortingConfig;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortingCommand.prototype.sortingConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleSortCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} fieldId
     */
    constructor(structureId, compositionId, fieldId) {
        super(structureId, 'ToggleSortCommand');
        this.compositionId = compositionId;
        this.fieldId = fieldId;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getFieldId() {
        return this.fieldId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommand.prototype.fieldId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetConfigQuickFilterCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} quickFiltersConfig
     */
    constructor(structureId, quickFiltersConfig) {
        super(structureId, 'StructureSetConfigQuickFilterCommand');
        this.quickFiltersConfig = quickFiltersConfig;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.quickFiltersConfig;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommand.prototype.quickFiltersConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitFieldsCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} columns
     */
    constructor(structureId, compositionId, columns) {
        super(structureId, 'InitFieldsCommand');
        this.compositionId = compositionId;
        this.columns = columns;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getColumns() {
        return this.columns;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommand.prototype.columns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSortOrderCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sortOrder
     */
    constructor(structureId, compositionId, fieldId, sortOrder) {
        super(structureId, 'SetSortOrderCommand');
        this.compositionId = compositionId;
        this.fieldId = fieldId;
        this.sortOrder = sortOrder;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getFieldId() {
        return this.fieldId;
    }
    /**
     * @return {?}
     */
    getSortOrder() {
        return this.sortOrder;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.sortOrder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetRowHeightCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} rowHeight
     */
    constructor(structureId, rowHeight) {
        super(structureId, 'SetRowHeightCommand');
        this.rowHeight = rowHeight;
    }
    /**
     * @return {?}
     */
    getRowHeight() {
        return this.rowHeight;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowHeightCommand.prototype.rowHeight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetConfigSearchingCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} searchConfig
     */
    constructor(structureId, searchConfig) {
        super(structureId, 'StructureSetConfigSearchingCommand');
        this.searchConfig = searchConfig;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.searchConfig;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigSearchingCommand.prototype.searchConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetSearchPhraseCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} phrase
     */
    constructor(structureId, phrase) {
        super(structureId, 'StructureSetSearchPhraseCommand');
        this.phrase = phrase;
    }
    /**
     * @return {?}
     */
    getPhrase() {
        return this.phrase;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetSearchPhraseCommand.prototype.phrase;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchHighlightArchive {
    constructor() {
        this.idToHighlight = new Map();
        this.idToHighlight$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    next(value, structureId = globalStructureId) {
        this.idToHighlight.set(structureId.getId(), value);
        this.idToHighlight$.next(this.idToHighlight);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onValue(structureId = globalStructureId) {
        return this.idToHighlight$
            .asObservable()
            .pipe(map((/**
         * @param {?} idToHighlight
         * @return {?}
         */
        (idToHighlight) => {
            return idToHighlight.get(structureId.getId()) || StructureSearchHighlightArchive.HIGHLIGHTING;
        })));
    }
}
StructureSearchHighlightArchive.HIGHLIGHTING = true;
StructureSearchHighlightArchive.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchHighlightArchive.HIGHLIGHTING;
    /**
     * @type {?}
     * @private
     */
    StructureSearchHighlightArchive.prototype.idToHighlight;
    /**
     * @type {?}
     * @private
     */
    StructureSearchHighlightArchive.prototype.idToHighlight$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchPlaceholderArchive {
    constructor() {
        this.idToPlaceholder = new Map();
        this.idToPlaceholder$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    next(value, structureId = globalStructureId) {
        this.idToPlaceholder.set(structureId.getId(), value);
        this.idToPlaceholder$.next(this.idToPlaceholder);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onValue(structureId = globalStructureId) {
        return this.idToPlaceholder$
            .asObservable()
            .pipe(map((/**
         * @param {?} idToHighlight
         * @return {?}
         */
        (idToHighlight) => {
            return idToHighlight.get(structureId.getId()) || StructureSearchPlaceholderArchive.PLACEHOLDER;
        })));
    }
}
StructureSearchPlaceholderArchive.PLACEHOLDER = 'Search ...';
StructureSearchPlaceholderArchive.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPlaceholderArchive.PLACEHOLDER;
    /**
     * @type {?}
     * @private
     */
    StructureSearchPlaceholderArchive.prototype.idToPlaceholder;
    /**
     * @type {?}
     * @private
     */
    StructureSearchPlaceholderArchive.prototype.idToPlaceholder$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchDispatcher {
    /**
     * @param {?} commandDispatcher
     * @param {?} structureSearchHighlightArchive
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = globalStructureId) {
        if (config.highlighting !== undefined && config.highlighting !== null) {
            this.structureSearchHighlightArchive.next(config.highlighting);
        }
        if (config.placeholder !== undefined && config.placeholder !== null) {
            this.structureSearchPlaceholderArchive.next(config.placeholder);
        }
        if (config.phrase !== undefined && config.phrase !== null) {
            this.search(config.phrase, structureId);
        }
        this.commandDispatcher.dispatch(new StructureSetConfigSearchingCommand(structureId, config));
    }
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    search(phrase, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new StructureSetSearchPhraseCommand(structureId, phrase));
    }
}
StructureSearchDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchDispatcher.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: StructureSearchHighlightArchive },
    { type: StructureSearchPlaceholderArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchDispatcher.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureSearchDispatcher.prototype.structureSearchHighlightArchive;
    /**
     * @type {?}
     * @private
     */
    StructureSearchDispatcher.prototype.structureSearchPlaceholderArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCommandService {
    /**
     * @param {?} commandDispatcher
     * @param {?} structureFilterCommandService
     * @param {?} sourceDispatcher
     * @param {?} structureSearchDispatcher
     */
    constructor(commandDispatcher, structureFilterCommandService, sourceDispatcher, structureSearchDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
        this.structureSearchDispatcher = structureSearchDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    createStructure(structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new CreateStructureCommand(structureId));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    enableVerticalScroll(structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    disableVerticalScroll(structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    }
    /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    setScrollPosition(position, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items, structureId = globalStructureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSortingConfig(config, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    }
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    toggleSort(fieldId, compositionId, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    }
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    setSortOrder(fieldId, sortOrder, compositionId, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder));
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setFilterConfig(config, structureId = globalStructureId) {
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setQuickFiltersConfig(config, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new StructureSetConfigQuickFilterCommand(structureId, config));
    }
    /**
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    initFields(columns, compositionId, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, compositionId, columns));
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = globalStructureId) {
        this.structureSearchDispatcher.setSearchingConfig(config, structureId);
    }
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    search(phrase, structureId = globalStructureId) {
        this.structureSearchDispatcher.search(phrase, structureId);
    }
    /**
     * @param {?} rowHeight
     * @param {?=} structureId
     * @return {?}
     */
    setRowHeight(rowHeight, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, +rowHeight));
    }
}
StructureCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCommandService.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: StructureFilterCommandService },
    { type: SourceDispatcher },
    { type: StructureSearchDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.structureSearchDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStructureCommandService extends StructureCommandService {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} commandDispatcher
     * @param {?} structureFilterCommandService
     * @param {?} sourceDispatcher
     * @param {?} structureSearchDispatcher
     */
    constructor(structureId, compositionId, commandDispatcher, structureFilterCommandService, sourceDispatcher, structureSearchDispatcher) {
        super(commandDispatcher, structureFilterCommandService, sourceDispatcher, structureSearchDispatcher);
        this.structureId = structureId;
        this.compositionId = compositionId;
    }
    /**
     * @return {?}
     */
    createStructure() {
        super.createStructure(this.structureId);
    }
    /**
     * @return {?}
     */
    enableVerticalScroll() {
        super.enableVerticalScroll(this.structureId);
    }
    /**
     * @return {?}
     */
    disableVerticalScroll() {
        super.disableVerticalScroll(this.structureId);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setScrollPosition(position) {
        super.setScrollPosition(position, this.structureId);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setOrigin(items) {
        super.setOrigin(items, this.structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSortingConfig(config, structureId = globalStructureId) {
        super.setSortingConfig(config, this.structureId);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    toggleSort(fieldId) {
        super.toggleSort(fieldId, this.compositionId, this.structureId);
    }
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @return {?}
     */
    setSortOrder(fieldId, sortOrder) {
        super.setSortOrder(fieldId, sortOrder, this.compositionId, this.structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setFilterConfig(config, structureId = globalStructureId) {
        super.setFilterConfig(config, this.structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setQuickFiltersConfig(config, structureId = globalStructureId) {
        super.setQuickFiltersConfig(config, this.structureId);
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    initFields(columns) {
        super.initFields(columns, this.compositionId, this.structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = globalStructureId) {
        super.setSearchingConfig(config, this.structureId);
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    search(phrase) {
        super.search(phrase, this.structureId);
    }
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    setRowHeight(rowHeight) {
        super.setRowHeight(rowHeight, this.structureId);
    }
}
LocalStructureCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureCommandService.ctorParameters = () => [
    { type: StructureId },
    { type: CompositionId },
    { type: CommandDispatcher },
    { type: StructureFilterCommandService },
    { type: SourceDispatcher },
    { type: StructureSearchDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "createStructure", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "enableVerticalScroll", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "disableVerticalScroll", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "setScrollPosition", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "setOrigin", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, StructureId]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "setSortingConfig", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FieldId]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "toggleSort", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FieldId, Number]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "setSortOrder", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, StructureId]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "setFilterConfig", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, StructureId]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "setQuickFiltersConfig", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "initFields", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, StructureId]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "setSearchingConfig", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "search", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandService.prototype, "setRowHeight", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandService.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStructureReadModelService extends StructureReadModelService {
    /**
     * @param {?} structureId
     * @param {?} structureRepository
     * @param {?} verticalFormationRepository
     */
    constructor(structureId, structureRepository, verticalFormationRepository) {
        super(structureRepository, verticalFormationRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onStructure() {
        return super.onStructure(this.structureId);
    }
    /**
     * @return {?}
     */
    onVerticalScrollEnabled() {
        return super.onVerticalScrollEnabled(this.structureId);
    }
    /**
     * @return {?}
     */
    onRowHeight() {
        return super.onRowHeight(this.structureId);
    }
}
LocalStructureReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: StructureRepository },
    { type: VerticalFormationRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalStructureReadModelService.prototype, "onStructure", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalStructureReadModelService.prototype, "onVerticalScrollEnabled", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalStructureReadModelService.prototype, "onRowHeight", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureReadModelService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFieldUiArchive extends AggregateArchive {
    constructor() {
        super();
    }
}
StructureFieldUiArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFieldUiArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFieldUiRepository {
    /**
     * @param {?} structureFieldUiArchive
     */
    constructor(structureFieldUiArchive) {
        this.structureFieldUiArchive = structureFieldUiArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFields(structureId) {
        return this.structureFieldUiArchive.when(structureId);
    }
}
StructureFieldUiRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFieldUiRepository.ctorParameters = () => [
    { type: StructureFieldUiArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiRepository.prototype.structureFieldUiArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureEditSourceItemParams {
    /**
     * @param {?} itemId
     * @param {?} columnFieldId
     * @param {?} value
     */
    constructor(itemId, columnFieldId, // TODO Rethink
    value) {
        this.itemId = itemId;
        this.columnFieldId = columnFieldId;
        this.value = value;
    }
    /**
     * @return {?}
     */
    getItemId() {
        return this.itemId;
    }
    /**
     * @return {?}
     */
    getColumnFieldId() {
        return this.columnFieldId;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemParams.prototype.itemId;
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemParams.prototype.columnFieldId;
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemParams.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceCommandService extends Reactive {
    /**
     * @param {?} sourceDispatcher
     * @param {?} structureFieldUiRepository
     * @param {?} sourceQueryService
     */
    constructor(sourceDispatcher, structureFieldUiRepository, sourceQueryService) {
        super();
        this.sourceDispatcher = sourceDispatcher;
        this.structureFieldUiRepository = structureFieldUiRepository;
        this.sourceQueryService = sourceQueryService;
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items, structureId = globalStructureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    setLoading(enabled, structureId = globalStructureId) {
        this.sourceDispatcher.setLoading(structureId, enabled);
    }
    /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    editItem(params, structureId = globalStructureId) {
        this.sourceDispatcher.editItem(structureId, params);
    }
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    editItemByIndex(itemIndex, fieldIndex, value, structureId = globalStructureId) {
        /** @type {?} */
        const itemId$ = this.sourceQueryService
            .onSingleEntities()
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        (entities) => {
            return entities[itemIndex].getId();
        })));
        /** @type {?} */
        const fieldId$ = this.structureFieldUiRepository
            .onFields(structureId);
        zip(itemId$, fieldId$)
            .pipe(take(1), this.takeUntil())
            .subscribe((/**
         * @param {?} array
         * @return {?}
         */
        (array) => {
            /** @type {?} */
            const itemId = array[0];
            /** @type {?} */
            const fields = array[1];
            this.editItem(new StructureEditSourceItemParams(itemId, fields[fieldIndex], value), structureId);
        }));
    }
}
SourceCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceCommandService.ctorParameters = () => [
    { type: SourceDispatcher },
    { type: StructureFieldUiRepository },
    { type: SourceReadModelService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.structureFieldUiRepository;
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.sourceQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalSourceCommandService extends SourceCommandService {
    /**
     * @param {?} structureId
     * @param {?} sourceDispatcher
     * @param {?} structureFieldUiRepository
     * @param {?} sourceQueryService
     */
    constructor(structureId, sourceDispatcher, structureFieldUiRepository, sourceQueryService) {
        super(sourceDispatcher, structureFieldUiRepository, sourceQueryService);
        this.structureId = structureId;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setOrigin(items) {
        super.setOrigin(items, this.structureId);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setLoading(enabled) {
        super.setLoading(enabled, this.structureId);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    editItem(params) {
        super.editItem(params, this.structureId);
    }
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @return {?}
     */
    editItemByIndex(itemIndex, fieldIndex, value) {
        super.editItemByIndex(itemIndex, fieldIndex, value, this.structureId);
    }
}
LocalSourceCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceCommandService.ctorParameters = () => [
    { type: StructureId },
    { type: SourceDispatcher },
    { type: StructureFieldUiRepository },
    { type: SourceReadModelService }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], LocalSourceCommandService.prototype, "setOrigin", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], LocalSourceCommandService.prototype, "setLoading", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StructureEditSourceItemParams]),
    __metadata("design:returntype", void 0)
], LocalSourceCommandService.prototype, "editItem", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], LocalSourceCommandService.prototype, "editItemByIndex", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalSourceReadModelService extends SourceReadModelService {
    /**
     * @param {?} structureId
     * @param {?} structureRepository
     * @param {?} structurePreparedItemsRepository
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureId, structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        super(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onEntities() {
        return super.onEntities(this.structureId);
    }
    /**
     * @return {?}
     */
    onEntitiesSize() {
        return super.onEntitiesSize(this.structureId);
    }
    /**
     * @return {?}
     */
    onSingleEntities() {
        return super.onSingleEntities(this.structureId);
    }
    /**
     * @return {?}
     */
    onOriginSize() {
        return super.onOriginSize(this.structureId);
    }
    /**
     * @return {?}
     */
    onLoading() {
        return super.onLoading(this.structureId);
    }
    /**
     * @return {?}
     */
    onPreparedEntities() {
        return super.onPreparedEntities(this.structureId);
    }
}
LocalSourceReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: StructureRepository },
    { type: StructurePreparedItemsRepository },
    { type: StructureSourceOriginRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onEntities", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onEntitiesSize", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onSingleEntities", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onOriginSize", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onLoading", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceReadModelService.prototype, "onPreparedEntities", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceReadModelService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalCompositionCommandService extends CompositionCommandService {
    /**
     * @param {?} compositionId
     * @param {?} compositionDispatcher
     */
    constructor(compositionId, compositionDispatcher) {
        super(compositionDispatcher);
        this.compositionId = compositionId;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    createComposition(compositionId = globalCompositionId) {
        super.createComposition(this.compositionId);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    setColumns(params) {
        super.setColumns(params, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setWidth(width, compositionId = globalCompositionId) {
        super.setWidth(width, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = globalCompositionId) {
        super.setContainerWidth(width, this.compositionId);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = globalCompositionId) {
        super.setResizeWidth(enabled, this.compositionId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnId, compositionId = globalCompositionId) {
        super.enableColumn(columnId, this.compositionId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnId, compositionId = globalCompositionId) {
        super.disableColumn(columnId, this.compositionId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnId, compositionId = globalCompositionId) {
        super.moveLeft(columnId, this.compositionId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnId, compositionId = globalCompositionId) {
        super.moveRight(columnId, this.compositionId);
    }
}
LocalCompositionCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionCommandService.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "createComposition", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "setColumns", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "setWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "setContainerWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "setResizeWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ColumnId, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "enableColumn", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ColumnId, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "disableColumn", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ColumnId, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "moveLeft", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ColumnId, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "moveRight", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandService.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalCompositionReadModelService extends CompositionReadModelService {
    /**
     * @param {?} compositionId
     * @param {?} compositionRepository
     */
    constructor(compositionId, compositionRepository) {
        super(compositionRepository);
        this.compositionId = compositionId;
    }
    /**
     * @return {?}
     */
    onWidth() {
        return super.onWidth(this.compositionId);
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onContainerWidth(compositionId = globalCompositionId) {
        return super.onContainerWidth(this.compositionId);
    }
    /**
     * @return {?}
     */
    onWidthForEachColumn() {
        return super.onWidthForEachColumn(this.compositionId);
    }
    /**
     * @return {?}
     */
    onHeaderColumns() {
        return super.onHeaderColumns(this.compositionId);
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onAllColumns(compositionId = globalCompositionId) {
        return super.onAllColumns(this.compositionId);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    onSortOrder(fieldId) {
        return super.onSortOrder(fieldId, this.compositionId);
    }
    /**
     * @return {?}
     */
    onTemplateColumns() {
        return super.onTemplateColumns(this.compositionId);
    }
    /**
     * @return {?}
     */
    onResizeWidth() {
        return super.onResizeWidth(this.compositionId);
    }
}
LocalCompositionReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionReadModelService.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionReadModelService.prototype, "onWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CompositionId]),
    __metadata("design:returntype", Observable)
], LocalCompositionReadModelService.prototype, "onContainerWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionReadModelService.prototype, "onWidthForEachColumn", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionReadModelService.prototype, "onHeaderColumns", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CompositionId]),
    __metadata("design:returntype", Observable)
], LocalCompositionReadModelService.prototype, "onAllColumns", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FieldId]),
    __metadata("design:returntype", Observable)
], LocalCompositionReadModelService.prototype, "onSortOrder", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionReadModelService.prototype, "onTemplateColumns", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionReadModelService.prototype, "onResizeWidth", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionReadModelService.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStructureSearchDispatcher extends StructureSearchDispatcher {
    /**
     * @param {?} structureId
     * @param {?} commandDispatcher
     * @param {?} structureSearchHighlightArchive
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(structureId, commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) {
        super(commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive);
        this.structureId = structureId;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSearchingConfig(config) {
        super.setSearchingConfig(config, this.structureId);
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    search(phrase) {
        super.search(phrase, this.structureId);
    }
}
LocalStructureSearchDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureSearchDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: CommandDispatcher },
    { type: StructureSearchHighlightArchive },
    { type: StructureSearchPlaceholderArchive }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocalStructureSearchDispatcher.prototype, "setSearchingConfig", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocalStructureSearchDispatcher.prototype, "search", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureSearchDispatcher.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const localProviders = [
    { provide: PagingCommandService, useClass: LocalPagingCommandService },
    { provide: PagingReadModelService, useClass: LocalPagingReadModelService },
    { provide: SchemaCommandService, useClass: LocalSchemaCommandService },
    { provide: SchemaReadModelService, useClass: LocalSchemaReadModelService },
    { provide: FormationCommandService, useClass: LocalFormationCommandService },
    { provide: FormationReadModelService, useClass: LocalFormationReadModelService },
    { provide: StructureCommandService, useClass: LocalStructureCommandService },
    { provide: StructureReadModelService, useClass: LocalStructureReadModelService },
    { provide: SourceCommandService, useClass: LocalSourceCommandService },
    { provide: SourceReadModelService, useClass: LocalSourceReadModelService },
    { provide: CompositionCommandService, useClass: LocalCompositionCommandService },
    { provide: CompositionReadModelService, useClass: LocalCompositionReadModelService },
    { provide: StructureSearchDispatcher, useClass: LocalStructureSearchDispatcher }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaCssClassManager {
    /**
     * @param {?} rendererFactory2
     * @param {?} schemaQueryService
     */
    constructor(rendererFactory2, schemaQueryService) {
        this.rendererFactory2 = rendererFactory2;
        this.schemaQueryService = schemaQueryService;
        this.VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
        this.HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
        this.THEME_FABRIC_CLASS_NAME = 'gui-fabric';
        this.THEME_MATERIAL_CLASS_NAME = 'gui-material';
        this.THEME_LIGHT_CLASS_NAME = 'gui-light';
        this.THEME_DARK_CLASS_NAME = 'gui-dark';
        this.ROW_COLORING_ODD = 'gui-rows-odd';
        this.ROW_COLORING_EVEN = 'gui-rows-even';
        this.cssClass = null;
        this.unsubscribe$ = new Subject();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} elementRef
     * @param {?} structureId
     * @return {?}
     */
    init(elementRef, structureId) {
        this.cssHostRef = elementRef;
        this.schemaQueryService
            .onCssClasses(structureId)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} classes
         * @return {?}
         */
        (classes) => {
            /** @type {?} */
            const diff = this.updateState(classes);
            this.renderCssClasses(diff);
        }));
    }
    /**
     * @private
     * @param {?} css
     * @return {?}
     */
    updateState(css) {
        if (!this.cssClass) {
            this.cssClass = css;
            return this.cssClass;
        }
        else {
            /** @type {?} */
            let diff = {};
            Object.keys(this.cssClass)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                if (css[key] !== this.cssClass[key]) {
                    diff[key] = css[key];
                }
            }));
            this.cssClass = css;
            return diff;
        }
    }
    /**
     * @private
     * @param {?} diff
     * @return {?}
     */
    renderCssClasses(diff) {
        if (diff.hasOwnProperty('verticalGrid')) {
            this.toggleCssClass(diff.verticalGrid, this.VERTICAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('horizontalGrid')) {
            this.toggleCssClass(diff.horizontalGrid, this.HORIZONTAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('theme')) {
            this.removeThemeCssClasses();
            this.addClass(this.resolveThemeClassName(diff.theme));
        }
        if (diff.hasOwnProperty('rowColoring')) {
            this.removeRowColoringClasses();
            this.addClass(this.resolveRowColoringClassName(diff.rowColoring));
        }
    }
    /**
     * @private
     * @param {?} toggle
     * @param {?} cssClassName
     * @return {?}
     */
    toggleCssClass(toggle, cssClassName) {
        if (toggle) {
            this.addClass(cssClassName);
        }
        else {
            this.removeClass(cssClassName);
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeThemeCssClasses() {
        Object.keys(SchemaTheme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => SchemaTheme[key]))
            .map((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => this.resolveThemeClassName(theme)))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        (className) => !!className))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => {
            this.removeClass(className);
        }));
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    resolveThemeClassName(theme) {
        switch (theme) {
            case SchemaTheme.FABRIC:
            case SchemaTheme[SchemaTheme.FABRIC]:
                return this.THEME_FABRIC_CLASS_NAME;
            case SchemaTheme.MATERIAL:
            case SchemaTheme[SchemaTheme.MATERIAL]:
                return this.THEME_MATERIAL_CLASS_NAME;
            case SchemaTheme.LIGHT:
            case SchemaTheme[SchemaTheme.LIGHT]:
                return this.THEME_LIGHT_CLASS_NAME;
            case SchemaTheme.DARK:
            case SchemaTheme[SchemaTheme.DARK]:
                return this.THEME_DARK_CLASS_NAME;
            default:
                return this.THEME_FABRIC_CLASS_NAME;
        }
    }
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    resolveRowColoringClassName(coloring) {
        switch (coloring) {
            case SchemaRowColoring.ODD:
            case SchemaRowColoring[SchemaRowColoring.ODD]:
                return this.ROW_COLORING_ODD;
            case SchemaRowColoring.EVEN:
            case SchemaRowColoring[SchemaRowColoring.EVEN]:
                return this.ROW_COLORING_EVEN;
            default:
                return null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeRowColoringClasses() {
        Object.keys(SchemaRowColoring)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => SchemaRowColoring[key]))
            .map((/**
         * @param {?} coloring
         * @return {?}
         */
        (coloring) => this.resolveRowColoringClassName(coloring)))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        (className) => !!className))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => {
            this.removeClass(className);
        }));
    }
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    addClass(cssClassName) {
        if (cssClassName) {
            this.renderer.addClass(this.cssHostRef.nativeElement, cssClassName);
        }
    }
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    removeClass(cssClassName) {
        if (cssClassName) {
            this.renderer.removeClass(this.cssHostRef.nativeElement, cssClassName);
        }
    }
}
SchemaCssClassManager.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCssClassManager.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: SchemaReadModelService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.VERTICAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.HORIZONTAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_FABRIC_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_MATERIAL_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_LIGHT_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_DARK_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.ROW_COLORING_ODD;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.ROW_COLORING_EVEN;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.cssClass;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.cssHostRef;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.rendererFactory2;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.schemaQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCellEditArchive extends Archive {
    constructor() {
        super();
    }
}
StructureCellEditArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCellEditArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCellEditStore extends Archive {
    constructor() {
        super();
    }
}
StructureCellEditStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCellEditStore.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureEditModeArchive extends Archive {
    constructor() {
        super();
    }
}
StructureEditModeArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureEditModeArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureInfoPanelEnabledArchive extends Archive {
    constructor() {
        super(false);
    }
}
StructureInfoPanelEnabledArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureInfoPanelEnabledArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationPanelConfig {
    /**
     * @param {?=} top
     * @param {?=} bottom
     */
    constructor(top, bottom) {
        this.top = false;
        this.bottom = true;
        if (top !== undefined && top !== null) {
            this.top = top;
        }
        if (bottom !== undefined && bottom !== null) {
            this.bottom = bottom;
        }
    }
    /**
     * @return {?}
     */
    itTopEnabled() {
        return this.top;
    }
    /**
     * @return {?}
     */
    itBottomEnabled() {
        return this.bottom;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelConfig.prototype.top;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelConfig.prototype.bottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationArchive extends Archive {
    constructor() {
        super(new StructureAggregationPanelConfig());
    }
}
StructureAggregationArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregationArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationPanelConfigConverter {
    /**
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        if (config.enabled) {
            return new StructureAggregationPanelConfig(config.top, config.bottom);
        }
        else {
            return new StructureAggregationPanelConfig(false, false);
        }
    }
}
StructureAggregationPanelConfigConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetAggregationEnabledCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'StructureSetAggregationEnabledCommand');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationCommandService {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setAggregationEnabled(enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetAggregationEnabledCommand(structureId, enabled));
    }
}
StructureAggregationCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregationCommandService.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationCommandService.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationConfigService {
    /**
     * @param {?} structureAggregationPanelConfigConverter
     * @param {?} structureAggregationArchive
     * @param {?} structureAggregationCommandService
     * @param {?} structureId
     */
    constructor(structureAggregationPanelConfigConverter, structureAggregationArchive, structureAggregationCommandService, structureId) {
        this.structureAggregationPanelConfigConverter = structureAggregationPanelConfigConverter;
        this.structureAggregationArchive = structureAggregationArchive;
        this.structureAggregationCommandService = structureAggregationCommandService;
        this.structureId = structureId;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set(config) {
        /** @type {?} */
        const aggregationPanelConfig = this.structureAggregationPanelConfigConverter.convert(config);
        this.structureAggregationArchive.next(aggregationPanelConfig);
        this.structureAggregationCommandService.setAggregationEnabled(config.enabled, this.structureId);
    }
}
StructureAggregationConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregationConfigService.ctorParameters = () => [
    { type: StructureAggregationPanelConfigConverter },
    { type: StructureAggregationArchive },
    { type: StructureAggregationCommandService },
    { type: StructureId }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureAggregationPanelConfigConverter;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureAggregationArchive;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureAggregationCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const structureComponentToken = new InjectionToken('StructureComponentToken');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const StructureCellEditState = {
    ENTER: 0,
    SUBMIT: 1,
    CANCEL: 2,
};
StructureCellEditState[StructureCellEditState.ENTER] = 'ENTER';
StructureCellEditState[StructureCellEditState.SUBMIT] = 'SUBMIT';
StructureCellEditState[StructureCellEditState.CANCEL] = 'CANCEL';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnMenuConfig {
}
if (false) {
    /** @type {?} */
    ColumnMenuConfig.prototype.enabled;
    /** @type {?} */
    ColumnMenuConfig.prototype.sort;
    /** @type {?} */
    ColumnMenuConfig.prototype.filter;
    /** @type {?} */
    ColumnMenuConfig.prototype.columnsManager;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @abstract
 */
class StructureGateway extends SmartComponent {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} structureCommandService
     * @param {?} pagingCommandService
     * @param {?} pagingEventService
     * @param {?} sourceCommandService
     * @param {?} sourceEventService
     * @param {?} schemaCommandService
     * @param {?} compositionCommandService
     * @param {?} compositionEventService
     * @param {?} formationEventService
     * @param {?} structureEditModeArchive
     * @param {?} structureCellEditArchive
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} structureAggregationConfigService
     * @param {?} structureCellEditStore
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} structurePagingDisplayModeArchive
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} structureSearchEventService
     */
    constructor(structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureAggregationConfigService, structureCellEditStore, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, structureSearchEventService) {
        super();
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureCommandService = structureCommandService;
        this.pagingCommandService = pagingCommandService;
        this.pagingEventService = pagingEventService;
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
        this.schemaCommandService = schemaCommandService;
        this.compositionCommandService = compositionCommandService;
        this.compositionEventService = compositionEventService;
        this.formationEventService = formationEventService;
        this.structureEditModeArchive = structureEditModeArchive;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.structureAggregationConfigService = structureAggregationConfigService;
        this.structureCellEditStore = structureCellEditStore;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        this.structureSearchEventService = structureSearchEventService;
        this.source = [];
        this.columns = [];
        /**
         * ********************
         * OUTPUTS
         * *********************
         */
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.itemsSelected = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.searchPhraseChanged = new EventEmitter();
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (simpleChanges.columnMenu !== undefined && simpleChanges.columnMenu.currentValue !== undefined) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
        if (simpleChanges.rowSelecting !== undefined && simpleChanges.rowSelecting.currentValue !== undefined) {
            this.structureRowSelectEnabledArchive.next(this.rowSelecting);
        }
        if (simpleChanges.infoPanel !== undefined && simpleChanges.infoPanel.currentValue !== undefined) {
            this.structureInfoPanelEnabledArchive.next(this.infoPanel);
        }
        if (simpleChanges.aggregation !== undefined && simpleChanges.aggregation.currentValue !== undefined) {
            this.structureAggregationConfigService.set(this.aggregation);
        }
        if (simpleChanges.editMode !== undefined && simpleChanges.editMode.currentValue !== undefined) {
            this.structureEditModeArchive.next(this.editMode);
        }
        if (simpleChanges.cellEditing !== undefined && simpleChanges.cellEditing.currentValue !== undefined) {
            this.structureCellEditArchive.next(this.cellEditing);
        }
        if (simpleChanges.width !== undefined && simpleChanges.width.currentValue !== undefined) {
            this.compositionCommandService.setWidth(this.width);
        }
        if (simpleChanges.rowHeight !== undefined && simpleChanges.rowHeight.currentValue !== undefined) {
            this.structureCommandService.setRowHeight(this.rowHeight);
        }
        if (simpleChanges.autoResizeWidth !== undefined && simpleChanges.autoResizeWidth.currentValue !== undefined) {
            this.compositionCommandService.setResizeWidth(this.autoResizeWidth);
        }
        if (simpleChanges.columnHeaderTop !== undefined && simpleChanges.columnHeaderTop.currentValue !== undefined) {
            this.schemaCommandService.changeTopHeader(this.columnHeaderTop);
        }
        if (simpleChanges.columnHeaderBottom !== undefined && simpleChanges.columnHeaderBottom.currentValue !== undefined) {
            this.schemaCommandService.changeBottomHeader(this.columnHeaderBottom);
        }
        if (simpleChanges.loading !== undefined && simpleChanges.loading.currentValue !== undefined) {
            this.sourceCommandService.setLoading(this.loading);
        }
        if (simpleChanges.paging !== undefined && simpleChanges.paging.currentValue !== undefined) {
            /** @type {?} */
            let pagingConfig;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
                if (this.paging.displayMode !== undefined) {
                    this.structurePagingDisplayModeArchive.next(this.paging.displayMode);
                }
            }
            this.pagingCommandService.setPaging(pagingConfig);
        }
        if (simpleChanges.columns) {
            this.structureCommandService.initFields(this.columns, this.compositionId, this.structureId);
            // this.compositionCommandService.setColumns(this.columns);
        }
        if (simpleChanges.verticalGrid !== undefined && simpleChanges.verticalGrid.currentValue !== undefined) {
            this.schemaCommandService.changeVerticalGrid(this.verticalGrid);
        }
        if (simpleChanges.horizontalGrid !== undefined && simpleChanges.horizontalGrid.currentValue !== undefined) {
            this.schemaCommandService.changeHorizontalGrid(this.horizontalGrid);
        }
        if (simpleChanges.theme !== undefined && simpleChanges.theme.currentValue !== undefined) {
            this.schemaCommandService.setTheme(this.theme);
        }
        if (simpleChanges.rowColoring !== undefined && simpleChanges.rowColoring.currentValue !== undefined) {
            this.schemaCommandService.setRowColoring(this.rowColoring);
        }
        if (simpleChanges.maxHeight && this.maxHeight) {
            this.schemaCommandService.setHeight(this.maxHeight);
        }
        if (simpleChanges.virtualScroll !== undefined && simpleChanges.virtualScroll.currentValue !== undefined) {
            if (this.virtualScroll) {
                this.structureCommandService.enableVerticalScroll();
            }
            else {
                this.structureCommandService.disableVerticalScroll();
            }
        }
        if (simpleChanges.sorting !== undefined && simpleChanges.sorting.currentValue !== undefined) {
            /** @type {?} */
            let sorting;
            if (typeof this.sorting === 'boolean') {
                sorting = {
                    enabled: this.sorting
                };
            }
            else {
                sorting = this.sorting;
            }
            this.structureCommandService.setSortingConfig(sorting);
        }
        if (simpleChanges.filtering !== undefined && simpleChanges.filtering.currentValue !== undefined) {
            /** @type {?} */
            let filtering;
            if (typeof this.filtering === 'boolean') {
                filtering = {
                    enabled: this.filtering
                };
            }
            else {
                filtering = this.filtering;
            }
            this.structureCommandService.setFilterConfig(filtering);
        }
        if (simpleChanges.quickFilters !== undefined && simpleChanges.quickFilters.currentValue !== undefined) {
            /** @type {?} */
            let quickFilters;
            if (typeof this.quickFilters === 'boolean') {
                quickFilters = {
                    enabled: this.quickFilters
                };
            }
            else {
                quickFilters = this.quickFilters;
            }
            this.structureCommandService.setQuickFiltersConfig(quickFilters);
        }
        if (simpleChanges.searching !== undefined && simpleChanges.searching.currentValue !== undefined) {
            /** @type {?} */
            let searching;
            if (typeof this.searching === 'boolean') {
                searching = {
                    enabled: this.searching
                };
            }
            else {
                searching = this.searching;
            }
            this.structureCommandService.setSearchingConfig(searching);
        }
        /**
         * Setting source should be last step
         */
        if (simpleChanges.source) {
            this.sourceCommandService.setOrigin(this.source);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.pagingEventService
            .onPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        (pageNumber) => {
            this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventService
            .onPageSizeChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        (pageSize) => {
            this.pageSizeChanged.emit(pageSize);
        }));
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.itemsSelected.emit(items);
        }));
        this.compositionEventService
            .onColumnsChanged(this.compositionId)
            .pipe(skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.columnsChanged.emit();
        }));
        this.compositionEventService
            .onContainerWidthChanged(this.compositionId)
            .pipe(
        // skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @param {?} containerWidth
         * @return {?}
         */
        (containerWidth) => {
            this.containerWidthChanged.emit(containerWidth);
        }));
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .pipe(
        // this.takeUntil()
        )
            .subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            this.sourceEdited.emit(values);
        }));
        this.structureCellEditStore
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            switch (state) {
                case StructureCellEditState.ENTER:
                    this.cellEditEntered.emit();
                    break;
                case StructureCellEditState.SUBMIT:
                    this.cellEditSubmitted.emit();
                    break;
                case StructureCellEditState.CANCEL:
                    this.cellEditCanceled.emit();
                    break;
            }
        }));
        this.structureSearchEventService
            .onSearchPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            this.searchPhraseChanged.emit(phrase);
        }));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
}
StructureGateway.propDecorators = {
    columnHeaderTop: [{ type: Input }],
    columnHeaderBottom: [{ type: Input }],
    maxHeight: [{ type: Input }],
    width: [{ type: Input }],
    rowHeight: [{ type: Input }],
    autoResizeWidth: [{ type: Input }],
    source: [{ type: Input }],
    columns: [{ type: Input }],
    paging: [{ type: Input }],
    verticalGrid: [{ type: Input }],
    horizontalGrid: [{ type: Input }],
    theme: [{ type: Input }],
    rowColoring: [{ type: Input }],
    rowSelecting: [{ type: Input }],
    loading: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    sorting: [{ type: Input }],
    filtering: [{ type: Input }],
    quickFilters: [{ type: Input }],
    searching: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    infoPanel: [{ type: Input }],
    aggregation: [{ type: Input }],
    columnMenu: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    itemsSelected: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }],
    searchPhraseChanged: [{ type: Output }]
};
if (false) {
    /**
     * ********************
     * INPUTS
     * *********************
     * @type {?}
     */
    StructureGateway.prototype.columnHeaderTop;
    /** @type {?} */
    StructureGateway.prototype.columnHeaderBottom;
    /** @type {?} */
    StructureGateway.prototype.maxHeight;
    /** @type {?} */
    StructureGateway.prototype.width;
    /** @type {?} */
    StructureGateway.prototype.rowHeight;
    /** @type {?} */
    StructureGateway.prototype.autoResizeWidth;
    /** @type {?} */
    StructureGateway.prototype.source;
    /** @type {?} */
    StructureGateway.prototype.columns;
    /** @type {?} */
    StructureGateway.prototype.paging;
    /** @type {?} */
    StructureGateway.prototype.verticalGrid;
    /** @type {?} */
    StructureGateway.prototype.horizontalGrid;
    /** @type {?} */
    StructureGateway.prototype.theme;
    /** @type {?} */
    StructureGateway.prototype.rowColoring;
    /** @type {?} */
    StructureGateway.prototype.rowSelecting;
    /** @type {?} */
    StructureGateway.prototype.loading;
    /** @type {?} */
    StructureGateway.prototype.virtualScroll;
    /** @type {?} */
    StructureGateway.prototype.sorting;
    /** @type {?} */
    StructureGateway.prototype.filtering;
    /** @type {?} */
    StructureGateway.prototype.quickFilters;
    /** @type {?} */
    StructureGateway.prototype.searching;
    /** @type {?} */
    StructureGateway.prototype.editMode;
    /** @type {?} */
    StructureGateway.prototype.cellEditing;
    /** @type {?} */
    StructureGateway.prototype.infoPanel;
    /** @type {?} */
    StructureGateway.prototype.aggregation;
    /** @type {?} */
    StructureGateway.prototype.columnMenu;
    /**
     * ********************
     * OUTPUTS
     * *********************
     * @type {?}
     */
    StructureGateway.prototype.pageChanged;
    /** @type {?} */
    StructureGateway.prototype.pageSizeChanged;
    /** @type {?} */
    StructureGateway.prototype.itemsSelected;
    /** @type {?} */
    StructureGateway.prototype.columnsChanged;
    /** @type {?} */
    StructureGateway.prototype.containerWidthChanged;
    /** @type {?} */
    StructureGateway.prototype.sourceEdited;
    /** @type {?} */
    StructureGateway.prototype.cellEditEntered;
    /** @type {?} */
    StructureGateway.prototype.cellEditCanceled;
    /** @type {?} */
    StructureGateway.prototype.cellEditSubmitted;
    /** @type {?} */
    StructureGateway.prototype.searchPhraseChanged;
    /** @type {?} */
    StructureGateway.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionId;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sourceCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sourceEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.schemaCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.formationEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureEditModeArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureInfoPanelEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureAggregationConfigService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCellEditStore;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureColumnMenuConfigArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structurePagingDisplayModeArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureRowSelectEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureSearchEventService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NextPageEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'NextPageEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PrevPageEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'PrevPageEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageChangedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'PageChangedEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagesizeChangedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'PagesizeChangedEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingEventService {
    /**
     * @param {?} domainEventBus
     * @param {?} pagingQueryService
     */
    constructor(domainEventBus, pagingQueryService) {
        this.domainEventBus = domainEventBus;
        this.pagingQueryService = pagingQueryService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPageChange(structureId) {
        return this.domainEventBus
            .ofEvent(NextPageEvent, PrevPageEvent, PageChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingQueryService
                .onPaging(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            (paging) => paging.getPage())), take(1));
        })));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPageSizeChange(structureId) {
        return this.domainEventBus
            .ofEvent(PagesizeChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingQueryService
                .onPaging(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            (paging) => paging.getPageSize())), take(1));
        })));
    }
}
PagingEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingEventService.ctorParameters = () => [
    { type: DomainEventBus },
    { type: PagingReadModelService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingEventService.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    PagingEventService.prototype.pagingQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditemItemValues {
    /**
     * @param {?} after
     * @param {?} before
     */
    constructor(after, before) {
        this.after = after;
        this.before = before;
    }
}
if (false) {
    /** @type {?} */
    EditemItemValues.prototype.after;
    /** @type {?} */
    EditemItemValues.prototype.before;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSourceItemEditedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} beforeItem
     * @param {?} afterItem
     */
    constructor(aggregateId, beforeItem, afterItem) {
        super(aggregateId, 'StructureSourceItemEditedEvent');
        this.beforeItem = beforeItem;
        this.afterItem = afterItem;
    }
    /**
     * @return {?}
     */
    getBeforeItem() {
        return this.beforeItem;
    }
    /**
     * @return {?}
     */
    getAfterItem() {
        return this.afterItem;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedEvent.prototype.beforeItem;
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedEvent.prototype.afterItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceEventService {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSourceEdited(structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureSourceItemEditedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const afterItem = event.getAfterItem().getData();
            /** @type {?} */
            const beforeItem = event.getBeforeItem().getData();
            return new EditemItemValues(afterItem, beforeItem);
        })));
    }
}
SourceEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceEventService.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceEventService.prototype.domainEventBus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectedRowToggledEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SelectedRowToggledEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationEventService {
    /**
     * @param {?} domainEventBus
     * @param {?} structureQueryService
     */
    constructor(domainEventBus, structureQueryService) {
        this.domainEventBus = domainEventBus;
        this.structureQueryService = structureQueryService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onItemSelected(structureId) {
        return this.domainEventBus
            .ofEvent(SelectedRowToggledEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.structureQueryService
                .onStructure(structureId)
                .pipe(take(1), map((/**
             * @param {?} str
             * @return {?}
             */
            (str) => str.getSelectedEntities())), map((/**
             * @param {?} entities
             * @return {?}
             */
            (entities) => entities.map((/**
             * @param {?} ent
             * @return {?}
             */
            ent => ent.getData())))));
        })));
    }
}
FormationEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationEventService.ctorParameters = () => [
    { type: DomainEventBus },
    { type: StructureReadModelService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationEventService.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    FormationEventService.prototype.structureQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnMenuConfig {
    /**
     * @param {?=} enabled
     * @param {?=} sort
     * @param {?=} filter
     * @param {?=} columnsManager
     */
    constructor(enabled = false, sort = true, filter = false, columnsManager = false) {
        this.enabled = enabled;
        this.sort = sort;
        this.filter = filter;
        this.columnsManager = columnsManager;
    }
    /**
     * @return {?}
     */
    static default() {
        return new StructureColumnMenuConfig();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static fromConfig(config) {
        return new StructureColumnMenuConfig(config.enabled, config.sort, config.filter, config.columnsManager);
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled &&
            (this.sort || this.filter || this.columnsManager);
    }
    /**
     * @return {?}
     */
    isMainEnabled() {
        return this.sort;
    }
    /**
     * @return {?}
     */
    isSortingEnabled() {
        return this.sort;
    }
    /**
     * @return {?}
     */
    isFilteringEnabled() {
        return this.filter;
    }
    /**
     * @return {?}
     */
    isColumnManagerEnabled() {
        return this.columnsManager;
    }
    /**
     * @return {?}
     */
    getMenus() {
        /** @type {?} */
        const menus = [];
        if (this.isMainEnabled()) {
            menus.push(this.getMainMenu());
        }
        if (this.isFilteringEnabled()) {
            menus.push(this.getFilterMenu());
        }
        if (this.isColumnManagerEnabled()) {
            menus.push(this.getColumnMenu());
        }
        return menus;
    }
    /**
     * @return {?}
     */
    getActiveMenu() {
        return this.getMenus()[0];
    }
    /**
     * @return {?}
     */
    getMainMenu() {
        return StructureColumnMenuConfig.MAIN;
    }
    /**
     * @return {?}
     */
    getFilterMenu() {
        return StructureColumnMenuConfig.FILTER;
    }
    /**
     * @return {?}
     */
    getColumnMenu() {
        return StructureColumnMenuConfig.COLUMNS;
    }
}
StructureColumnMenuConfig.MAIN = 'Menu';
StructureColumnMenuConfig.FILTER = 'Filter';
StructureColumnMenuConfig.COLUMNS = 'Columns';
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.MAIN;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.FILTER;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.COLUMNS;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.sort;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.filter;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.columnsManager;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnMenuConfigArchive extends Archive {
    constructor() {
        super(StructureColumnMenuConfig.default());
    }
    /**
     * @param {?} config
     * @return {?}
     */
    nextConfig(config) {
        /** @type {?} */
        const menuConfig = StructureColumnMenuConfig.fromConfig(config);
        this.next(menuConfig);
    }
}
StructureColumnMenuConfigArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureColumnMenuConfigArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureRowSelectEnabledArchive extends Archive {
    constructor() {
        super(StructureRowSelectEnabledArchive.DEFAULT_ROW_SELECT);
    }
}
StructureRowSelectEnabledArchive.DEFAULT_ROW_SELECT = true;
StructureRowSelectEnabledArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureRowSelectEnabledArchive.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    StructureRowSelectEnabledArchive.DEFAULT_ROW_SELECT;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchPhraseSetDomainEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} phrase
     */
    constructor(aggregateId, phrase) {
        super(aggregateId, 'StructureSearchPhraseSetDomainEvent');
        this.phrase = phrase;
    }
    /**
     * @return {?}
     */
    getPhrase() {
        return this.phrase;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseSetDomainEvent.prototype.phrase;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchPhraseRepository extends Reactive {
    constructor() {
        super();
        this.phrase = new Map();
        this.phrase$ = new ReplaySubject();
    }
    /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    setPhrase(phrase, structureId) {
        this.phrase.set(structureId.toString(), phrase);
        this.phrase$.next(this.phrase);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPhrase(structureId) {
        return this.observePhrases(structureId)
            .pipe(distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    observePhrases(structureId) {
        return this.phrase$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })));
    }
}
StructureSearchPhraseRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchPhraseRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseRepository.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseRepository.prototype.phrase$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchEventService {
    /**
     * @param {?} domainEventBus
     * @param {?} structureSearchPhraseRepository
     */
    constructor(domainEventBus, structureSearchPhraseRepository) {
        this.domainEventBus = domainEventBus;
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSearchPhrase(structureId) {
        return this.domainEventBus
            .ofEvent(StructureSearchPhraseSetDomainEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.structureSearchPhraseRepository
                .onPhrase(structureId)
                .pipe(take(1));
        })));
    }
}
StructureSearchEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchEventService.ctorParameters = () => [
    { type: DomainEventBus },
    { type: StructureSearchPhraseRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchEventService.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    StructureSearchEventService.prototype.structureSearchPhraseRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
function structureIdFactory(generator) {
    return new StructureId('gui-' + generator.generateId());
}
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
function compositionIdFactory(generator) {
    return new CompositionId('gui-' + generator.generateId());
}
/**
 * \@internal
 * @type {?}
 */
const structureComponentSelfProviders = [
    {
        provide: StructureId,
        useFactory: structureIdFactory,
        deps: [
            StructureIdGenerator
        ]
    },
    {
        provide: CompositionId,
        useFactory: compositionIdFactory,
        deps: [
            StructureIdGenerator
        ]
    },
    ...localProviders,
    SchemaCssClassManager,
    StructureCellEditArchive,
    StructureCellEditStore,
    StructureEditModeArchive,
    StructureInfoPanelEnabledArchive,
    StructureAggregationArchive,
    StructureAggregationConfigService,
    StructureColumnMenuConfigArchive,
    StructurePagingDisplayModeArchive,
    StructureRowSelectEnabledArchive
];
/**
 * \@internal
 */
class StructureComponent extends StructureGateway {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} pagingCommandService
     * @param {?} pagingEventService
     * @param {?} sourceCommandService
     * @param {?} sourceEventService
     * @param {?} schemaCommandService
     * @param {?} compositionCommandService
     * @param {?} compositionEventService
     * @param {?} formationEventService
     * @param {?} structureCommandService
     * @param {?} structureEditModeArchive
     * @param {?} structureCellEditArchive
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} structureAggregationConfigService
     * @param {?} structureCellEditStore
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} structurePagingDisplayModeArchive
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} structureSearchEventService
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} structureDefinition
     * @param {?} structureQueryService
     * @param {?} compositionQueryService
     * @param {?} schemaReadModelService
     * @param {?} schemaStylesManager
     */
    constructor(structureId, compositionId, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureCommandService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureAggregationConfigService, structureCellEditStore, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, structureSearchEventService, elementRef, changeDetectorRef, renderer, structureDefinition, structureQueryService, compositionQueryService, schemaReadModelService, schemaStylesManager) {
        super(structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureAggregationConfigService, structureCellEditStore, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, structureSearchEventService);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.structureDefinition = structureDefinition;
        this.structureQueryService = structureQueryService;
        this.compositionQueryService = compositionQueryService;
        this.schemaReadModelService = schemaReadModelService;
        this.schemaStylesManager = schemaStylesManager;
        this.loaderEnabled = false;
        this.circleLoaderEnabled = true;
        this.initialLoaderAnimation = false;
        this.structureCommandService.createStructure();
        compositionCommandService.createComposition();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.schemaReadModelService
            .onHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} height
         * @return {?}
         */
        (height) => {
            this.structureHeight = height;
        }));
        this.schemaReadModelService
            .onColumnHeader()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columnHeader
         * @return {?}
         */
        (columnHeader) => {
            this.columnHeader = columnHeader;
        }));
        this.structureQueryService
            .onStructure()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            this.structure = structure;
            this.loaderEnabled = structure.getSource().isLoading();
            this.circleLoaderEnabled = structure.isLoaderVisible();
            if (this.loaderEnabled && !this.initialLoaderAnimation) {
                this.initialLoaderAnimation = true;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let width = this.elementRef.nativeElement.offsetWidth;
        if (width > 0) {
            this.compositionCommandService.setContainerWidth(width);
        }
        else {
            /**
             * When gui-grid is in dynamic container which is created later then grid.
             */
            timer(0)
                .pipe(this.takeUntil())
                .subscribe((/**
             * @return {?}
             */
            () => {
                width = this.elementRef.nativeElement.offsetWidth;
                if (width > 0) {
                    this.compositionCommandService.setContainerWidth(width);
                }
            }));
        }
        this.schemaStylesManager
            .init(this.elementRef, this.structureId);
        this.compositionQueryService
            .onWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', width + 'px');
        }));
    }
    /**
     * @return {?}
     */
    isBorderEnabled() {
        return this.structureDefinition.isBorderEnabled();
    }
    /**
     * @return {?}
     */
    getStructureId() {
        return this.structureId;
    }
}
StructureComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure',
                template: "<gui-structure-blueprint></gui-structure-blueprint>\n\n<!---------- LOADING ---------->\n<div [ngClass]=\"{'gui-loader-visible': loaderEnabled, 'gui-loader-hidden': !loaderEnabled && initialLoaderAnimation}\"\n\t class=\"gui-loading\">\n\t<gui-spinner *ngIf=\"circleLoaderEnabled\"\n\t\t\t\t [diameter]=\"120\"\n\t\t\t\t [primary]=\"true\">\n\t</gui-spinner>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class]': `"gui-structure"`,
                    // '[style.min-height.px]': 'structureHeight',
                    '[class.gui-structure-border]': 'isBorderEnabled()',
                    '[id]': 'structureId.toString()'
                },
                providers: [
                    ...structureComponentSelfProviders,
                    {
                        provide: structureComponentToken,
                        useExisting: StructureComponent
                    }
                ],
                styles: [".gui-bold{font-weight:700}.gui-italic{font-style:italic}", "gui-structure input{color:#333;font-family:Arial;font-size:13px}.gui-header{background:#f2f3f4;border-bottom:1px solid #d6d6d6;height:30px}.gui-header .gui-header-cell{border-right:1px solid transparent;box-sizing:border-box;line-height:1em;overflow:hidden;padding:0 8px;position:relative;white-space:nowrap;text-overflow:ellipsis;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.gui-header .gui-header-cell.gui-header-sortable{cursor:pointer}.gui-header .gui-header-cell.gui-header-sortable:hover{background:#e6e7e8}.gui-header .gui-header-cell:hover .gui-header-menu{cursor:pointer}.gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper .gui-header-menu-icon{display:block}.gui-header .gui-header-cell:last-of-type{border-right:0}.gui-header .gui-header-cell .gui-header-title{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-header .gui-header-cell .gui-header-title .gui-sort{display:none;height:14px;width:14px;margin-left:4px}.gui-header .gui-header-cell .gui-header-title .gui-sort-asc{background:url(data:image/png;base64,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) center/contain no-repeat;display:block}.gui-header .gui-header-cell .gui-header-title .gui-sort-desc{background:url(data:image/png;base64,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) center/contain no-repeat;display:block}.gui-header .gui-header-cell .gui-header-menu{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper{position:relative;right:0;padding:16px;height:16px;width:16px}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper .gui-header-menu-icon{display:none;position:absolute;top:8px;right:8px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABj0lEQVQ4ja2T261UMQxFV2znxdwvyqASOpgzf0jUQC1UQSkUgUQFCHHPnCQOPzeH+R8sRZHysLaXt8O2bT9ijC8hBFFVQgiUUmitcblcXFUZYwCQc8bMfIxBjJHW2m8D3o8xXswMgDknvXfM7PwoIsw5AWitEWNcd8mAz6pqIQTcnRgjMUYA3J0QwrkASimIyErQeTbC7Xb7JCICYGaICCklzIw5JyKCqhJjRFXJOTPnJKVECMHN3b+KSBERROSU6u6oKiklFshHLsdxMOfczcx+ikgBGGOQUmLOSQgBVT3BvolkjIGI0HtHRPanGTwdYdu272ZWgBNUjBEzo9bKvu/knFHVs81rb63tBnwAirufta94fX0lpQT849B7J+dM7x13383dv4wxLMZ4gltGWQ5cHZlzYmYcx0FKCXf/D0a6Xq8fxxip1irLsrXW1UJXVWqt9N65XC7s++5Lbe+925zzWynlHcCaxiXdzFBVWmuICPf7nfXurcRfpqp/eu/ySPdxCtf5mtaU0gKIiBx/ARsJ0yTj9LIKAAAAAElFTkSuQmCC) center no-repeat;height:16px;width:16px;opacity:.8}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper:hover .gui-header-menu-icon{opacity:1}.gui-header-bottom .gui-header{border-bottom:0;border-top:1px solid #d6d6d6}gui-structure{background:#fff;box-sizing:border-box;color:#333;display:block;font-family:Arial;font-size:14px;position:relative}gui-structure *{box-sizing:border-box}gui-structure gui-structure-header{display:block;height:100%;width:100%}gui-structure gui-structure-header gui-structure-header-filters.gui-header{height:32px}gui-structure gui-structure-header gui-structure-header-filters.gui-header .gui-header-cell{padding:4px}gui-structure gui-structure-header gui-structure-header-filters.gui-header .gui-header-cell input{position:relative;box-sizing:border-box;font-size:13px;padding:2px;height:100%;width:100%;border:1px solid #d6d6d6}gui-structure-top-panel{display:block;padding:8px;border-bottom:1px solid #d6d6d6}gui-structure-search-bar{display:block;width:60%;margin-right:auto}gui-structure-search-bar form{display:-webkit-box;display:-ms-flexbox;display:flex;background:#fff;position:relative}gui-structure-search-bar form .gui-search-icon{position:absolute;top:6px;left:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEgSURBVDhPrdM9SwNBFIXhVTF2kkbSSiCF2GkRlBR+kMJGrO1t7WxsLEQQC8HCThQRLETIT4gEtNQ6aCUKYgpBLAIW+p47E5LsJuugHniYuTB7d2aZjWKZwyWe8OV94BQFpGYE23hBFTOYQB4rOIEabqFvdqEGC1b1zjSa6NloFmqwaFV6itCOEker4MhNg3IMHa8rr1h206Bo7ZubtqPtjbtpULRWz4xZRQb9OOrHkLTWZvxoTR5RsiosU7jHs1U++7hz0x8zjBvsWNWRLD6xblV6NtBAzqpYdN31sfasSkYvOoBeltj1gB8V3Uj9N3rgHA94hy5YGfqfatjEFebRN6s4xDV0/gssQc2VNWjX+sf+lH9vdDZk5e9yi3oURZPfGPU3vvdwgY8AAAAASUVORK5CYII=);width:17px;height:17px}gui-structure-search-bar form input{border:1px solid #d6d6d6;border-radius:4px;padding:6px 6px 6px 38px;height:100%;width:100%}gui-structure-container{display:block;height:100%;overflow:auto;overflow-x:hidden;position:relative;width:100%}gui-structure-container .gui-structure-container{box-sizing:border-box;height:100%;position:absolute;width:100%}gui-structure-container .gui-structure-container .gui-content{height:100%;position:relative}gui-structure-container .gui-structure-container .gui-content .gui-row{position:absolute;width:100%}gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#ecedee}gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#d0e8fb}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell{border-right:1px solid transparent;box-sizing:border-box;line-height:1em;overflow:hidden;padding:0;white-space:nowrap}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-button{padding:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-cell-boolean{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-checkbox{position:absolute;top:4px;padding-left:22px;line-height:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-chip{margin:0;padding:2px 8px}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-badge{padding:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-input{background:0 0;font-size:14px;border-style:none;border-radius:0;padding:0}gui-structure-container gui-structure-cell{display:inline-block}gui-structure-container gui-structure-cell>span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 8px;height:100%;width:100%}gui-structure-container gui-structure-cell .gui-cell-edit-mode{border:2px solid #2185d0;height:100%;padding:6px}gui-structure-container gui-structure-cell .gui-cell-edit-mode gui-boolean-edit{margin-left:calc(50% - 11px)}gui-structure-container gui-structure-cell .gui-cell-edit-mode input:focus{outline:0;box-shadow:none}.gui-structure-empty-source{display:block;padding:42px 8px}.gui-vertical-grid .gui-structure-aggregation-cell,.gui-vertical-grid gui-structure-container .gui-content .gui-row .gui-cell,.gui-vertical-grid gui-structure-header .gui-header .gui-header-cell{border-right:1px solid #d6d6d6}.gui-vertical-grid .gui-structure-aggregation-cell:last-of-type,.gui-vertical-grid gui-structure-container .gui-content .gui-row .gui-cell:last-of-type,.gui-vertical-grid gui-structure-header .gui-header .gui-header-cell:last-of-type{border-right:0}.gui-horizontal-grid gui-structure-container .gui-row .gui-cell{border-bottom:1px solid #d6d6d6}.gui-horizontal-grid gui-structure-container .gui-row:last-of-type .gui-cell{border-bottom:0}.gui-rows-even .gui-row.even,.gui-rows-odd .gui-row.odd{background:#f7f8f9}gui-structure-info-panel{box-sizing:border-box;background:#f2f3f4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 6px;width:100%;border-top:1px solid #d6d6d6}gui-structure-info-panel p{margin:0}gui-structure-info-panel p b{font-weight:700}gui-structure-info-panel div{color:#333;cursor:pointer}gui-structure-info-panel div button{background:#999;border-radius:50%;color:#fff;cursor:pointer;font-weight:700;font-family:\"Comic Sans MS\",cursive,sans-serif;width:16px;height:16px;line-height:14px;padding:0;border:1px solid transparent}gui-structure-info-panel div button:focus{outline:0;box-shadow:0 0 4px #999}.gui-structure-border{border:1px solid #d6d6d6}gui-structure-aggregation-panel{background:#f2f3f4;display:-webkit-box;display:-ms-flexbox;display:flex}gui-structure-aggregation-panel.gui-structure-aggregation-panel-bottom .gui-structure-aggregation-cell{border-top:1px solid #d6d6d6}gui-structure-aggregation-panel.gui-structure-aggregation-panel-top .gui-structure-aggregation-cell{border-bottom:1px solid #d6d6d6}gui-structure-aggregation-panel .gui-structure-aggregation-cell{font-size:14px}gui-structure-aggregation-panel .gui-structure-aggregation-value{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:1em;padding:8px 6px;overflow:hidden}gui-structure-aggregation-panel .gui-structure-aggregation-value div .gui-math-symbol{position:relative;top:-1px}gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-mean,gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-median{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-mean span:nth-child(1){position:absolute;top:-15px;left:1px}gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-median span:nth-child(1){position:absolute;top:-8px;left:1px}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.gui-loading{-webkit-animation-duration:.2s;animation-duration:.2s;-ms-flex-line-pack:center;align-content:center;background:rgba(255,255,255,.8);border:1px solid transparent;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;opacity:0;position:absolute;top:0;width:100%;visibility:hidden}.gui-loading gui-spinner{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.gui-loading.gui-loader-hidden{-webkit-animation-name:fadeOut;animation-name:fadeOut;opacity:0;visibility:visible;z-index:-1}.gui-loading.gui-loader-visible{-webkit-animation-name:fadeIn;animation-name:fadeIn;opacity:1;visibility:visible;z-index:1}.gui-header-menu-tab .gui-header-item-active{font-weight:700}.gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item{color:#333}.gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item:hover{background:#ecedee}.gui-header-menu-tab .gui-tab .gui-tab-content{padding:0;width:225px;box-sizing:content-box;border-width:1px 0 0}.gui-header-menu-tab .gui-header-menu-column-move{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0;color:#333}.gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-left{position:relative;cursor:pointer;padding:12px 12px 12px 32px}.gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-left:hover{background:#ecedee}.gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-left:hover::before{opacity:1}.gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-left::before{content:'';display:inline-block;position:absolute;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAASElEQVR4AWMY2cAdiA0oNSQfiP8DcTo1DOkfHoaEQw35DcT7CeBsfAalQw36TIRBzYRc1Q81LJ8YLwx9w8LJ044ZAQ4MIxcAAAffIk95XG/oAAAAAElFTkSuQmCC) center/contain no-repeat;height:14px;width:14px;left:8px;top:13px;opacity:.6}.gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-right{position:relative;cursor:pointer;padding:12px 32px 12px 12px}.gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-right:hover{background:#ecedee}.gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-right:hover::after{opacity:1}.gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-right::after{content:'';display:inline-block;position:absolute;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAUUlEQVR4AWMY2cAGiN2pYVA7EP8H4nxKDWIB4tW0MCyYWob9JsawbCDejwcfhrrqNzgS8IBmkAYC+Dc1vNgPNaR/eBhSDjeEQuAPxOkMIxcAAK59IwsNdxXLAAAAAElFTkSuQmCC) center/contain no-repeat;height:14px;width:14px;right:8px;top:13px;opacity:.6}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container{border:none;border-radius:0}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover{background:#ecedee}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow{opacity:1}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu{width:125px}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item{display:-webkit-box;display:-ms-flexbox;display:flex;color:#333;background:#fff;padding:8px 8px 8px 12px}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item:hover{background:#ecedee}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item:hover .gui-sort-title .gui-sort{opacity:1}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title .gui-sort{display:inline-block;height:16px;width:16px;opacity:.6}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title .gui-sort-asc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFnElEQVR4Xu2dO6slRRSFvxF8gIiZiI9ERgMFB00MTNRf4DMTTUxEMBcRFRFzUTMDxUwZnD8wGoggqIyCBiomPjFTUHyAypY+eBjuub27q6qratfq7HJ3n+5a6+u9uoruc06gbWgFTgw9eg0eATA4BAJAAAyuwODDVwcQAIMrMPjw1QEEwOAKDD58dQABMKwCVwG3wn9rIR8CP4yoxIgd4ErgFeDuyXzz/R/gDPAo8ONIIIwGwEngLHDtAZO/Ae4CvhoFgpEAMPPfBa6eMfdb4M5RIBgFAK/5OzaGgWAEAJaaPxQE0QFYa/4wEEQGINX8ISCICkAu88NDEBGA3OaHhiAaAKXMDwtBJACuB95xzPNT13i+A+6Isk4QBYCtzN/BEwaCCABsbX4oCHoHoJb5YSDoGYDa5oeAoFcAWjG/ewh6BKA187uGoDcAUsy3hz68411Suz+t7G524BUkde6cY/8U878HXgaed57Ik8BjgD02tnTrCoJeAEg13x7wuBl40+nmA8Cn08JSaAh6AMDMtyd51hhhV76Z/wVw/0IA3gJuSITAjv2lE7oqZa0DkMt8E3cNALZfaAhaBiCn+SkAhIagVQBym58KQFgIWgSghPk5AAgJQWsAlDI/FwDhIGgJgJLm5wQgFAStAFDa/NwAhIGgBQC2ML8EACEgqA1Ayhx7f5HHs4iydh1g7rNTx2CPl1VbLKoJQKpwuxW+OYN2/y8FQGonMJCrQVALgK3NLxUB+/CljqkKBDUASBVq6ZW/RQfYHSN1bJtDsDUAqQKtNX+LDtAlBFsCUNP8LQHo6p5gKwBqm781AN1AsAUALZhfA4AuICgNQCvm1wKgeQhKAtCS+TUByAFBys3vseskpQC4GPgIuMm7SrNXt3SFz3uIkgtBnnNIuSA+m77T8E/PgZbUlALgGeDpJScy1ZYyv3YHyDFFNE2fXaFplQ5wDji18GRLmt8KAClxYJreslDT2fISHeAC4Hfgwtmj/19Q2vyWAFgLwV/AJcDfC3SdLS0BgB3UXo7wPsa9hfmtAbAGAtP0mllHFxaUAuA0cI/jXLYyv0UAlkJgmt7n0HRRSSkA7O7fZgE2Gzi0bWl+qwB4IfhjmgV8vshdR3EpAOzQjwAvHYDApjX3Tm/sOE4zS0ntaeBxg7Apol3hR02bzXx7T/HVLCqc9yElAbBD3Qg8B9wGXAGY8W8DLwDZ57QzArUMgJ36RcAT09fYGwg/AR8ATwHZr/ydVqUB2PfEZgdZ72AXXhGtA1BFqy0BWOhX9vKeAMg++EMfKACOVsZeD7e3g8NvAkAAhId8N0BFwBFWqwOoA6gDHKGA7gECYqEIUAQs+pIozQKCdQF1AHUAdYDzGdAsQLOAYI3+8HAUAYoARYAiwNfwtA7g06mrKkWAIkARoAjwNS1FgE+nrqoUAYoARYAiwNe0FAE+nbqqUgQoAhQBigBf01IE+HTqqkoRoAhQBCgCfE1LEeDTqasqRYAiQBGgCPA1LUWAT6euqhQBigBFgCLA17QUAT6duqpSBCgCFAGKAF/TUgT4dOqqShGgCFAEKAJ8TUsR4NOpqypFgCJAEaAI8DUtRYBPp66qFAGKAEWAIsDXtBQBPp26qlIEKAIUAYoAX9NSBPh06qpKEaAIUAQoAnxNSxHg06mrKkWAIkARMHIE3A685+xZVvu+s7brspG+KvZS4BfAfr3suM1+2ewy4LeunXWe/EgAmCSvAQ/NaPM68LBTv+7LRgPgcuBj4LoDzn09/UTrz9076xzAaACYLAbBi8CDe3Fgbf8N4HFgGPNNjBEB2F0bdk9wavrjE+BX50UTqmxkAEIZuXYwAmCtckH2EwBBjFw7DAGwVrkg+wmAIEauHYYAWKtckP0EQBAj1w5DAKxVLsh+AiCIkWuHIQDWKhdkv38BCBOikK5+TTcAAAAASUVORK5CYII=) center/contain no-repeat}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title .gui-sort-desc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFcElEQVR4Xu2dPatcVRSGnwhRQUIqwc8mqIVC/ECwsFH/gEk0nWhjpZJeFFREf4AoNjaKnSL+Ak0hgo2EgBZGbJKIYJWA4gcksmAGhuvcO+t87H322us97aw7s9f7PrPec/acO3MIHakVOJS6ezWPAEgOgQAQAMkVSN6+JoAASK5A8vY1AQRAcgWSt68JIADSKnAL8NCq+3PAHxmVyDgBjgLvAc8BN6xMvwZ8CpwBrmQCIRsAZv73wLF9TP4FeCQTBNkA+Bh4fsc7/BPghSxTIBMAlvlXN8b+fh5bHBwB/swAQSYAHge+cZpqtd86a0OXZQLgWeAzp1ungc+dtaHLBMB2+wRAaKy3L14TYIsumgCaAB2+1zUB3KZqAmgCuGGJXqhzAJ0D6DJwLwOKAEVA9MnuXr8iQBGgCFAE+AaGdgJ9OoWqUgQoAhQBigDf0FIE+HQKVaUIUAQoAhQBvqGlCPDpFKpKEaAIUAQoAnxDSxHg0ylUlSJAEaAIUAT4hpYiwKdTqCpFgCJAEaAI8A0tRYBPp1BVigBFgCJAEeAbWooAn06hqhQBigBFgCLAN7QUAT6dQlUpAhQBigBFgG9oKQJ8OoWqUgQoAhQBigDf0FIE+HQKVaUIUAQoAhQBvqGlCPDpFKpKEaAIUAQoAnxDSxHg0ylUlSJAEaAIUAT4hpYiwKdTqCpFgCJAEaAI8A0tRYBPp1BVioCFI8B+pNF+kWupIxIA1bQq/WXRDwBvA48BtwI/Al8C7wL/VCahdQBuAl4FTgD3A78D3wGvr3QrIldJAF4E3gessb3HD8Ap4KciXW1/0pYBuA/4ArA3zN7jb+AV4KMSWpUCwBqxn2i98YBF/wo8WRGCVgEw878G7jhAK4PAftLWJuisRykAjOaTjpXWhKBFADzmr2U0TZ9xaDqopBQAl3cQvbnIWhC0BsAQ800v0/SuQe46iksAYGewfwGHHa+/LqkBQUsADDXfdPoXuHnuK6kSANhizwEPDgDASktD0AoAY8xfa/rwQE13lpcC4E3gjZ2v/v+CkhC0AMBY800p0/StEZoe+CelALCzf7sK2HZZs6uHUhAsDcAU8+2y2a4CZt87KQWAmTyl4RIQLAnAVC2eAC7seueMebwkAK1BsBQAzZpvBpUGoCUIlgCgafNrAdAKBLUBaN78mgC0AEFNAEKYXxuApSGoBUAY85cAYEkIagAQyvylAFgKgtIAhDN/SQCWgKAkACHNXxqA2hCUAmCK+fYJn90TUWSTx7MxVGMfYNc67gXODvj4ePP5huwYlgAgtPktTIC1mTUgmBuA8Oa3BICtpTQEcwLQhfmtAVAagrkA6Mb8FgEoCcEcAHRlfqsAlIJgKgDdmd8yACUgmAJAl+a3DsDcEIwFoFvzIwCwhsD+ceLOXRsKWx7f3CcYA8BU8+1Onp9HrLvan7SwEeRp1i4Rp0JwHAZ9P8B5x3/s7Ld22+Fr3vwoE2Bzs2gKBB8A73hoA14DXh65OxnG/GgATI2D6wNugRtSu8lUKPMjAjAVAucAGFUWzvyoALQIQUjzIwPQEgRhzY8OQAsQhDa/BwCWhCC8+b0AsAQEXZjfEwDWyz2rO4vG7BgOOe2/tLqNq+kdPm9DUXYCvf2UhqAr83ubAGtISkHQnfm9AlAiDro0v2cA5oSgW/N7B2AOCLo2PwMAUyDo3vwsAIyBIIX5mQAYAkEa87MBsIbgK+DufTYWLgJPtX4bl3dTxFPX20aQp+fbgA+BpzduELEbQOxr7F8CfvM8SS81GQFYe3c78Chg5tt3GtoNpOmOzACkM3tbwwIgOQYCQAAkVyB5+5oAAiC5Asnb1wQQAMkVSN6+JoAASK5A8vb/A4djo5Dd1KQLAAAAAElFTkSuQmCC) center/contain no-repeat}.gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-header-item-active .gui-item .gui-sort{opacity:1}.gui-header-menu-tab .gui-header-menu-item{display:block;cursor:pointer;color:#333;padding:8px 12px}.gui-header-menu-tab .gui-header-menu-item:hover{background:#ecedee}.gui-header-menu-tab .gui-checkbox{width:169px;margin-left:12px;padding:8px 12px 8px 32px;color:#333}.gui-header-menu-tab .gui-checkbox label{display:inline-block;width:inherit}gui-structure-column-manager{color:#333;display:block}gui-structure-column-manager>div:hover{background:#ecedee}gui-structure-column-manager label{margin-bottom:0}.gui-align-right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:right;width:100%}.gui-align-left{text-align:left;width:100%}.gui-text-highlight{background:#fff799}gui-function-view{height:100%;width:100%}gui-function-view div{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}", "gui-structure-column-manager ol{list-style:none;padding:0;margin:4px 0}gui-structure-column-manager ol li{cursor:pointer;padding:0}gui-structure-column-manager ol li:hover{background:#ecedee}.gui-structure-dialog-column-manager .gui-dialog-title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-structure-dialog-column-manager ol{min-width:250px;max-height:400px;overflow:auto}.gui-structure-dialog-column-manager ol li{padding:8px}", ".gui-aggregation-value{font-weight:700}", "gui-structure-info-panel div,gui-structure-info-panel div button{display:inline-block}gui-structure-info-panel .gui-right-section div{margin-right:4px}.gui-structure-info-modal{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0;font-size:16px;font-family:Arial;width:360px}.gui-structure-info-modal .gui-dialog-title{margin:0 0 8px}.gui-structure-info-modal .gui-quote{color:#575757;font-size:20px;font-style:italic;font-weight:lighter}.gui-structure-info-modal .gui-info-title{font-size:22px;margin-bottom:12px}.gui-structure-info-modal .gui-info-version{font-size:18px;margin-bottom:32px}.gui-structure-info-modal ul{list-style:none;margin:0;padding-left:10px}.gui-structure-info-modal ul li{line-height:24px}.gui-structure-info-modal p{font-weight:700;margin:0 0 8px;color:#333}.gui-structure-info-modal section{border-top:1px solid #d6d6d6;padding:16px 0 8px;margin:0}.gui-structure-info-modal a{text-decoration:none;color:#2185d0;margin:0 0 8px}.gui-structure-info-modal a:hover{color:#59a9e5;text-decoration:underline}", "gui-structure-paging{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:4px}gui-structure-paging>*{padding-left:16px}gui-structure-paging gui-structure-paging-select span{display:inline-block;margin:0 6px 0 0}gui-structure-paging gui-structure-paging-navigator button{margin-right:6px}gui-structure-paging gui-structure-paging-navigator button:last-of-type{margin-right:0}gui-structure-paging gui-structure-paging-stats span{display:inline-block;margin:0 2px 0 0}gui-structure-paging gui-structure-alternative-paging-navigator{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 8px;line-height:34px}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-page{display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-visible-page .gui-paging-page{display:block;cursor:pointer;padding:0 8px}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-active-page{font-weight:700;color:#333;box-shadow:0 1px 0 0 #333}gui-structure-paging gui-structure-alternative-paging-navigator .gui-button{margin:0 2px;background:0 0;padding:0;font-family:Roboto,\"Helvetica Neue\",sans-serif}gui-structure-paging gui-structure-alternative-paging-navigator .gui-button svg{opacity:.7;margin:0 2px -2px}gui-structure-paging gui-structure-alternative-paging-navigator .gui-button:hover{background:0 0}gui-structure-paging gui-structure-alternative-paging-navigator .gui-button:hover svg{opacity:1}gui-structure-paging gui-structure-alternative-paging-navigator .gui-button:disabled svg{opacity:.3}gui-structure-paging gui-structure-alternative-paging-navigator .gui-material .gui-button{padding:2px 16px}gui-structure-paging.gui-structure-paging-bottom{border-top:1px solid #d6d6d6}gui-structure-paging.gui-structure-paging-top{border-bottom:1px solid #d6d6d6}", "@media (max-width:500px){gui-structure-paging gui-structure-paging-stats,gui-structure-paging>*{padding-left:4px}}", ".gui-header{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-header .gui-header-cell{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.gui-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.gui-content .gui-row,.gui-content .gui-structure-cell-container{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-content .gui-row .gui-cell,.gui-content .gui-structure-cell-container .gui-cell{display:inline-block}.gui-content .gui-structure-row-details{background:#80cbc4;display:block;position:absolute;top:0;height:200px;width:100%}", ".gui-cell .gui-checkbox{display:block}.gui-cell .gui-chip{margin:0;padding:2px 8px}.gui-cell .gui-input{font-size:11px;display:block;padding:2px 4px;width:86%}.gui-cell .gui-button{padding:2px 8px}.gui-cell .gui-cell-number{display:block;text-align:right;width:100%}.gui-cell .gui-cell-boolean{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;text-align:center;width:100%}", ".gui-material .gui-header,.gui-material.gui-structure{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-structure-header .gui-header{font-weight:700;color:grey}.gui-material .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid transparent}.gui-material .gui-cell .gui-badge,.gui-material .gui-cell .gui-button{padding:0}.gui-material.gui-vertical-grid gui-structure-container .gui-row .gui-cell{border-right:none}.gui-material gui-structure-alternative-paging-navigator .gui-button{margin:0 4px;background:0 0;padding:0;color:#333}.gui-material gui-structure-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-material gui-structure-alternative-paging-navigator .gui-button:disabled{background:0 0;color:grey;opacity:.4}", ".gui-dark .gui-header,.gui-dark.gui-structure{background:#383838;color:#ccc}.gui-dark .gui-structure-border{border:none;box-shadow:5px 5px 10px 2px #1f1f1f}.gui-dark .gui-structure-header .gui-header{color:#bdbdbd;border-bottom-color:#666}.gui-dark .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid transparent}.gui-dark .gui-structure-header .gui-header .gui-header-cell .gui-header-title .gui-sort-asc{background:url(data:image/png;base64,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) center/contain no-repeat}.gui-dark .gui-structure-header .gui-header .gui-header-cell .gui-header-title .gui-sort-desc{background:url(data:image/png;base64,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) center/contain no-repeat}.gui-dark .gui-structure-header .gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper .gui-header-menu-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA6SURBVDhPY9y7d+9/BgoAE5QmG4BcYAFlI4N/UJr2AOQCMyibLDA4ApEiL1DFBUM8DCgGQz4hMTAAAD+tGg2EbfdcAAAAAElFTkSuQmCC) center no-repeat}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover{background:#525252}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper{background-color:#525252}.gui-dark .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item{color:#ccc}.gui-dark .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item:hover{background:#525252}.gui-dark .gui-header-menu-tab .gui-header-menu-column-move{color:#ccc}.gui-dark .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-left:hover{background:#525252}.gui-dark .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-left::before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEnSURBVDhP3ZI9ToRAGIZhZNigRnFtlsKIiVrYmthaUHMAqz2FXsFzUEHDCQyFxTa7J7CSZoOJiYQC3TAs60vymUiGWX86fZoBXnh4Pwbt/6LT2kuSJIM0TSeu6557nrf2XkarBCS7eZ5nrSTLske6rKRXBIlbluV8DyyA4zhjipRIdSGxIHneAm/AsqwTjDWnWEmnESSHRVE8tZIVgOTqO5KWTqM4jh9s2z6l0y/5vAGdRmiwSYc/ptMIo91goltd15kQYhmG4XYQBAuK19L3sS8gueOc79R1vayq6tL3/QnFSqTtx9xTSK4hKA3D2DBN8z6KoiOKlUiNPkAz3jTNK2PMQDMB6QgveaFYQvln4yEByQFkFRry4XD/mKLfM53Nzujwz6Bp74BLdGY/IYqHAAAAAElFTkSuQmCC) center/contain no-repeat}.gui-dark .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-right:hover{background:#525252}.gui-dark .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-right::after{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEuSURBVDhP5ZK/S4RgGMc9U7kwEocGOSKagojGlmiSFkH6L/oT+n9ucW1wdmiI6I649m4wCmzJFw/KH/lq35PnIDtR1+izvI9+4eP3eVH4e0ym00MaWxnQ2chs9njCWHjPOc9EUdwzTfONojVEOhsJw/f5F4BEKYrixfM8maI1WkVoEDLGDvI855BJWZYxyC4prtG62grXdU8VRbmRJGkDBReyLJ/jIxOKK1obrbBt+9ZxnC1IOCTbZVneodkVxRW1RghLGjtJ0/TVsqxdeuzXqIk4jj9prOh1R0vQ9gIrXQ9AFEULTdOOcU/PFPcTQTJCg6dN8AFUVd2BJKa4onM1SM6SJJn/kBz9lizpFAVBMB4C/E8MkhEkPkU1OkWGYez7vv+g67oBSUSv/w+C8A21tYGodvSadQAAAABJRU5ErkJggg==) center/contain no-repeat}.gui-dark .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#666}.gui-dark .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover{background:#525252}.gui-dark .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item{display:-webkit-box;display:-ms-flexbox;display:flex;color:#ccc;background:#383838}.gui-dark .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item:hover{background:#525252}.gui-dark .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item .gui-sort-title .gui-sort-asc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABFoSURBVHhe7V35b1TXFbbxAsbGHmbFK6AECJRGVEUhBa/gNFKkSKkIi8mi9C+J8nPbHypUpND8kqYBYhPMGioIae0E0kAoi7ENNmZsMNjGeLwvzIzH/b7rd6eDg2fceDzbvZ/09O7ce9/zved859xz3uKXpKGhoaGhoaGhoaGhoaGhoaGhBpKNvVKYmppKPnjwYOrIyEiqz+dblJ2dPZWenu7LzMz07N69e9LopgSUIgAVX1NTk7ZixYqcDRs2FLe1tb3q9XrtbEtNTe1as2bNpdbW1u87OjoGVCGCMgSg8hsbG5dbLJatUHB5Wlrar1C9EVsGNsphDN6gEfsfi4qKvna5XN+vX79+GL8TGkoQQCrfarWW9fT07JmcnCzBlr1o0aKlXALYB2UUfRMpKSmDKH9TWFh4qKurq37jxo0j4iQJioQnAJXf3NxsttlsJZ2dnfs8Hk8Fqs3JycnUOBUv+sky+vvQ1o8l4Tw8wWePHz/+NpE9QUITQCrfZDLR8nfB6rdD0VZYuVA+loEk1Im+qEtyu91ij7opkOEJtnMFBQVHQIZvzWbzoOiYYEhoAjx69MgGJRZ3d3dXwfLLQQgLLZ+Wjn0S6pIQ/ZMo/jIJwd/YptCnD4S4kJeXdxht/0pEEkz7vwTE7du3rdiVwIXvRqRfirJQPtsMBbPoVzhBryCBvjQOC+oq4T2qcI6S/v5+03Rr4iAhPQAtH7uSJ0+e7H369GkZylap/P8XhidwYbn42uFwJJwnSDgPgEDPArdd0tfX9/bExEQp9Gf7ucon6AngBcw41w54k704XzGIlW00xz0SigDGml8GRVWNj4/vgLLs+D1vL8dz4FwWeJPXHj58+B7KFS0tLQlBgoQhwODgoAU7afklMFw7rXe6dX6Awpkd+D0BiFZlsVhKEoEECUEAKn94eHgrgrSddPuocrCe+qfywgXDm1iQLpZ3dXXtQXoZ9ySIewIMDQ3ZRkdHy0CCvSABL/LkM82TYF4/XwSew/AEdvzN15FevhvvJIhrAtDyR0ZGmJ69PTY2Vgbl5NLipdWHywPwHJJUTBVJAsAOb7Md8cYeLAfFt27dyhId4gxxmwbS8ql8RORVCM5KoCQR8FHpzO2pMFnmPlCJBH+zPhAz66hsHmMoXbTLOoK/gZ7Fixf/Mz8//7OBgYGLL7zwQlyliHHpAZjqUfkul2sXlM813x/tBypaliUBApU787fsIxHYxnPINnlugn2wOTCGSgaGy5YtK25ubl5mNMcF/jfLOACUkAxB84peKVM9j8fjt3yjy08gFU3FSW/ATXqJQLAv62jlgccQ/D0beBy23iVLllyIN08QVx4AObg5NTW1lJaPSLwUippTqkcFSchyqMMCj5kjbEwRkR0IT9DW1pZj1Mc04sIDQBnJVD4ssty4vFtM5eM3F32j1+yQyuQ6Lq2b++eBVs/+3Hu93p94idnAY3BOXjYWnsButx8ZHx+vX7169YDRJSYRFx7g/v37Jlp+b28v1/wyCFson0KXyp0NVDY3KlOSRR4nf0sEno9tc3H/hDwOQ2JHeoLXenp69mVnZ2+L9ZggtPlEERCqeJJnxYoV5Qj8quj2oQxxY4cWPBfrNBTqhTJ96J+Gsn/OM4+f4RVw6JQb+zT0C+pp2CaP5TlZxrEuZAfnCwsLP4fXqlu7du2Q6BBjiFkPEKD8Ml5149U3CPaZu3oUfDDFEDjPU7j+bqzLTpaxCUZQUYHHsiwJwT74W2M5OTl34Xkeo8orGoKAx/LU3Hgu7M0YcyWI+47Vai2NVU8QkwSA8JKvX7+e43A4irH274FL5cMc5rS0NOH2aWFQjNhLN02wTYJlbG4ooy0jI6PGZDKdQvkhyMCnfaSSntkkCXBuH/p1gAC1IM4p1HWgfZJ9As7tL3MM3MsYgzDGZ2aKSO+Vl5dXEosXi+Z/nTTM+PDDDxdZLBYT0qkyKH8vUr0dUAxTPzFWKklCKpF7bhS+LEMpbiiuDUr5/OrVq38EefpRrsRhDrT7TyL7zwCDuQ70/xMUd2N0dDQFMQSvMvJBUmE0gX+X5ecBXXniDIwlb2hoKAtzGnz//fe7Dhw4wKUlJhBTHgCCTN65c2dObm5uGa2Gykc17/Lx2qvoQwSW+VwfQSukBVIZOM6Ncjutd926dec++OCDwb6+vnEc93xNzQJY7Pjly5evrly58nBmZuZxHN8Ot+7j3+DfkoSjtcsxcS/LBMriVjLG9NsHDx68g7mVxpIniBkCUPl0+7C4clj+Pgh6OwWHpqBjlEsAhU7FYBOWv3Tp0hMFBQVH6+rqGqgD0elnoKKiwov1+2ZRUdERkKAW525HtVgO5N+Ubn82kATGcsDnCd6NJRLEBAEgxOSGhgYTFCaifbjb7ahm3v+M5T8PVADBfhCyhwqC5Z8EkY6eOXPmxhtvvPFUdJgHNm/e7IEnuAZPcASp3XFUtePvTsqxyTHMBvaDx6AnsILYr0sSgPCZRpeoIeoE4JpP5UvLh6usgFUvp/JpWaGEi37SCqn8u7R8RN1fXrt27ebu3bvDttbSEzidzgYo7ggIVgulduBvCvfDMQSDMT5BAs6N1wlIAqSIZdH2BFElAATzzJoP6+Cab4agRLRPwYbyAAZJvOh7D1H7CVr+lStXbkJhE0aXsGHjxo3uu3fvXofiSAIRE0ChGELIJcBPVJIAsIAEjAmEJ4hmihg1AlD5huVXIM/nms9ULweC8o+JgVYoAuAYD/q0wPJP2mw2YfnhcPuzgcsBYwK+MCJjAowhKAM4B85FAscwJlguYwKku2XReqgkKgSg8nmRh24fls9r+2LNR0SfwqAO7SKy5uVbaV2s4ybLBmj5dwzLr7l06VLDQlj+TBgkuI7A8HBWVhY9QRvGJLIDicAy58C5cE6s5+/09HTKnoHh6/AE7/G9xWh4gogTAALwX+ED+5nn0/KXQ4hizZcWH6h4WSfL3FDm1Tkq/7jdbj8Gy29YSMufCZLgq6++usXsgGNA1T2MWQzaGB+Lz5TlnAiW6e3QZmK6yxQxGp4gogTAZP1v6RprPi3fQkFIJUsFyzLzfCk4ulF6CGy0/Nsmk+kEhH+sqampMRKWPxMMMplpYByCBBjTPVg6LyP713yWOYfZ5se5o58ZJKikJ1i+fHl5JD1BxAhA5RuXd8XrWnB9vLZvRlPQMUjlU1g4B02J6VcrBH4S634tgrLbW7duHRedogCSAKRuQlB4lCTA2JwYM68k+hUt5xAEIjuATMTzBFjOSiJFgogQgMrHhMwInEqMGzsVqOMbPCHv51N47EOhAnx1uwWCPgXlH3v06FFTNJUvQe+DFPEmlqKa7OzskzBqJxQq/L4xdtFvNrAPZYF+jAl23L9/f5/FYolIdhARAkDpVrPZXMpon0/NQDg2TnjaoIODrpTKh5AoxRa4SN6gqb5z504j1uGx6V7RB4mIIPQG0rrDxnWCNoO0Yg7BwD7cIBNmB9bx8XHxyDkIVbrQr6EtOAEC39IFuysgGCvXvenW6ckHg2FJvOByByQSbh+W3xyNNT8UGIQyDUWA+wXiApKAgaEgQTDQA0hANPgprhOIu4g4vqS3t3fBPMGCEgCKssFiS/v6+vZiQttp+VL5FErgTZTngZJDu3D7OM9x3tZtb2+PKcufCRLz3Llz9AQMDI9hunehxJBBgEwRCZIAh5AEwhPgN5+DXJBnDBeMAGCveFcPli/e0kXZhkmKJ3kI8gCEEOXnwVA+O7TCmk7T8nGuqAZ8cwUDQ6aIjAmwHJzAPJyYzqwkoOIpC2Y5BGUEWdEySAK+iyjeSl4IT7AgBKDlI/Up6+/vr+IEMHjx9C4g2rnnxolyY5lCCCwD9J20/GOZmZnC8jdt2jQqThAHIAnoCRD4MiY4hirGBOJikZw7yzQEOXeCbRKMCbCz0hMgfhKeINzXCRaEAHBX68DW3yGYEW/p0qVJxcoJysmT9SwT/G0Ihnk+LZ/R/nFYfnM8WP5MSE9QWFh4FCQ4ibkzRSTEXAmWKQP+lnKQMiJQL0jA191hWG+j/6rplvAg7ARAXk6FbwZrX8GExD9hDAZOlkLgnhtcIa/t8wpfLSz/KCz/VjxZ/kyQBHV1dTdAgsOMCTA3egJxK5mbnHswoJ0gCV7Fz2IEmmH7VzVhJ8Do6OhLXq+3mMo32DsryHiufQHW4IE1tCKXPmW1Wmvp9uPR8meC2cGZM2ca8vPz6QnEM4YkAds492CxUCAgm1xkUmWLFy9+yaiaN8JKAKxTdgzylxjky9iHZClYLTYSAQJ5inIrBHQcgqpGTn0zEZQvQU/Q3Nx8raio6JAREzgxb/+TRaGAPnygJNvj8WyCbF9xOp1h8QJhJQAs/xcI/sT/5ZmLa5Og5cMS7tE6kEPX1tfXN0Xyxk6kwBtI9ASYY01WVhavGIoni4zmkKBMgRXwGCUorxWV80RYCYCcNXd4ePglMDSHgw3l2sh+9OEzfK0QSK1h+RG9qxdpGNkBbyUf4vMEqGqHrPyPnM8GypNeAMgeGxtbiyA712iaF8JKgIyMDBd2vdjcvAM2B7iR795DpH8KQVItI+ZEVr6EsRzcxJyrQQJ6gg4oNujLJ2gXdxVBlFH074asw/I/jMNKgA0bNjQigKuHVZME/hSPGycQCDCaL210YCKnVq1a9SVcY1if4Yt1cDnAOn4Dc/8CMuDFovuQ0zMukzKTnoGyhFx5q7kbpKkvKChoEQ3zRFgJAGY+wCDrYdVNbrd7BIMXt0UDCYCyB7t+un2s+bUrV66s5j11lZQvwWcM4Qn+s2bNGi4HxyCbNsiJ/1eAl7+fMRpD+f3wAo0Isn8wm82dRtO8EFYCEHBrt20221GkKv9GUDiAST2FsjkBKn4Qk2rHJM5j+xQsrlHN8meCnuDixYvXecUQMvsExnMBMqM3GIbM6BHoAsZR7EtPT/8esq3Ny8trhhyDBw1zRNgJgGCue8mSJWeQxx/EvhrKv4HqHrgwvqZ1For/K9zenzs6Ov4C5V9TWfkSFRUVXniAay6Xaz8C4T9A0QdAhH9Adu1QdA/2VyHLQxaL5VN4gfP79+/vMg6dN+aWp/0MVFdXp1RWVuZPTEyUIWLdgAm4wPJvUX8dk434t3lOnz79a6Rfn8CyXoZQQxGfY7va2dn5+7feeqtpuioywPiSz549m75t27ZNXV1d5XD3JofDcQuK/+7jjz9+iC6+jz76KOTdxbliwQgggUGn8eNMWLOmYPlest1oiijihQASfGEGMkvDMroIy+pkY2OjN5yKl1hwAsQK4o0AkULYYwCN+IImgOLQBFAcmgCKQxNAcWgCKA5NAMWhCaA4NAEUhyaA4tAEUByaAIpDE0BxaAIoDk0AxaEJoDg0ARSHJoDi0ARQHJoAikMTQHFoAigOTQDFoQmgODQBFIcmgOLQBFAcmgCKQxNAcWgCKA5NAMWhCaA4NAEUhyaA4tAEUByaAIpDE0BxaAIoDk0AxaEJoDg0ARSHJoDi0ARQHJoAikMTQHFoAigOTQDFoQmgODQBFIcmgOLQBFAcyhFgKuBLpnIv62UdN1WgDAGgVK/P5+NHLIV2pbIDy5IM2E9NTk6Oe73esH+lK9agDAHS09OHsN0GAfjRZSqYn7r1WzzL0x/qTPKlpKQMLF269A76j7EikaEMAYqKip7k5uZegBdwQtE+Kj3w49aSDLD6SWxtDofja7vdPmAcnrBQhgDr168fbm1tvQT3/iMUz0+v+j9uDZ/PLvxg81BqaurDtLS0Hy9evHhly5Ytw2xIZCgVBPK7xvAEh6Hkv/FDzG63uxvWPgiTH/B4PI9Q9x3I8ff8/Pxam83Wx1jAODRhocyXQyX4SdY333xz2erVq3/jdDq3wAnYWQ9lP37xxRd/aGpqutzZ2Tm4a9cuegRNgEQFiZCXl5cyMTEhvKDL5aKy+WHmqHzbWENDQ0NDQ0NDQyNCSEr6L2/pkdEk0sbTAAAAAElFTkSuQmCC) center/contain no-repeat}.gui-dark .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item .gui-sort-title .gui-sort-desc{background:url(data:image/png;base64,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) center/contain no-repeat}.gui-dark .gui-header-menu-tab .gui-header-menu-item{color:#ccc}.gui-dark .gui-header-menu-tab .gui-header-menu-item:hover{background:#525252}.gui-dark .gui-header-menu-tab .gui-checkbox{color:#ccc}.gui-dark gui-structure-column-manager>div:hover,.gui-dark gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#525252}.gui-dark gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#7cb9f652}.gui-dark.gui-rows-even .gui-row.even,.gui-dark.gui-rows-odd .gui-row.odd{background:#2c2c2c}.gui-dark .gui-horizontal-grid gui-structure-container .gui-row .gui-cell{border-bottom-color:#666}.gui-dark.gui-vertical-grid gui-structure-container .gui-row .gui-cell{border-right:none}.gui-dark gui-structure-paging.gui-structure-paging-bottom{border-top-color:#666}.gui-dark gui-structure-paging.gui-structure-paging-top{border-bottom-color:#666}.gui-dark ::-webkit-scrollbar{width:15px}.gui-dark ::-webkit-scrollbar-track{background:#616161}.gui-dark ::-webkit-scrollbar-thumb{background:#424242}.gui-dark ::-webkit-scrollbar-thumb:hover{background:#212121}.gui-dark .gui-structure-aggregation-cell{background:#383838;color:#ccc}.gui-dark .gui-structure-aggregation-panel-bottom .gui-structure-aggregation-cell{border-top-color:#666}.gui-dark .gui-structure-aggregation-panel-top .gui-structure-aggregation-cell{border-bottom-color:#666}.gui-dark gui-structure-info-panel{background:#383838;border-top-color:#666}.gui-dark gui-structure-info-panel div{color:#ccc}.gui-dark gui-structure-info-panel div button{background:#616161}.gui-dark .gui-header .gui-header-cell .gui-header-menu .gui-sort-asc{background:url(data:image/png;base64,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) center/contain no-repeat}.gui-dark .gui-header .gui-header-cell .gui-header-menu .gui-sort-desc{background:url(data:image/png;base64,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) center/contain no-repeat}.gui-dark .gui-structure-info-modal p,.gui-dark .gui-structure-info-panel p{color:#ccc}.gui-dark gui-structure-alternative-paging-navigator .gui-button{margin:0 4px;background:0 0;padding:0;color:#ccc}.gui-dark gui-structure-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-dark gui-structure-alternative-paging-navigator .gui-button:disabled{background:0 0;color:#ccc;opacity:.4}.gui-dark gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-active-page{color:#ccc;box-shadow:0 1px 0 0 #ccc}.gui-dark gui-structure-search-bar form{background:#525252}.gui-dark gui-structure-search-bar input{background:#525252;color:#ccc;border-color:#666}", ".gui-light .gui-header,.gui-light.gui-structure{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light.gui-structure-border{border-color:#ccc transparent}.gui-light .gui-structure-header .gui-header{color:#333;font-weight:700}.gui-light .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid transparent}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover{background:#f0f0f0}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper{background-color:#f0f0f0}.gui-light gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#f0f0f0}.gui-light gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#7cb9f652}.gui-light.gui-rows-even .gui-row.even,.gui-light.gui-rows-odd .gui-row.odd{background:#f7f7f7}.gui-light.gui-vertical-grid gui-structure-container .gui-row .gui-cell{border-right:none}.gui-light gui-structure-alternative-paging-navigator .gui-button{margin:0 4px;background:0 0;padding:0;color:#333}.gui-light gui-structure-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-light gui-structure-alternative-paging-navigator .gui-button:disabled{background:0 0;color:#333;opacity:.4}"]
            }] }
];
/** @nocollapse */
StructureComponent.ctorParameters = () => [
    { type: StructureId },
    { type: CompositionId },
    { type: PagingCommandService },
    { type: PagingEventService },
    { type: SourceCommandService },
    { type: SourceEventService },
    { type: SchemaCommandService },
    { type: CompositionCommandService },
    { type: CompositionEventService },
    { type: FormationEventService },
    { type: StructureCommandService },
    { type: StructureEditModeArchive },
    { type: StructureCellEditArchive },
    { type: StructureInfoPanelEnabledArchive },
    { type: StructureAggregationConfigService },
    { type: StructureCellEditStore },
    { type: StructureColumnMenuConfigArchive },
    { type: StructurePagingDisplayModeArchive },
    { type: StructureRowSelectEnabledArchive },
    { type: StructureSearchEventService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: StructureDefinition },
    { type: StructureReadModelService },
    { type: CompositionReadModelService },
    { type: SchemaReadModelService },
    { type: SchemaCssClassManager }
];
if (false) {
    /** @type {?} */
    StructureComponent.prototype.loaderEnabled;
    /** @type {?} */
    StructureComponent.prototype.circleLoaderEnabled;
    /** @type {?} */
    StructureComponent.prototype.initialLoaderAnimation;
    /** @type {?} */
    StructureComponent.prototype.structureHeight;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.columnHeader;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structure;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structureDefinition;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structureQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.compositionQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.schemaReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.schemaStylesManager;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnConfigComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureCommandService
     * @param {?} compositionReadModelService
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} column
     */
    constructor(changeDetectorRef, structureCommandService, compositionReadModelService, structureColumnMenuConfigArchive, column) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
        this.compositionReadModelService = compositionReadModelService;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.column = column;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureColumnMenuConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.config = config;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
}
StructureColumnConfigComponent.decorators = [
    { type: Component, args: [{
                template: `
		<div *ngIf="isEnabled()"
			 class="gui-header-menu-tab">

			<gui-tab [menu]="config.getMenus()" [active]="config.getActiveMenu()">

				<ng-container *ngIf="config.isMainEnabled()">

					<gui-tab-item class="gui-tab-item-dropdown" [tab]="config.getMainMenu()">

						<gui-structure-column-config-sort *ngIf="column.isSortEnabled()"
								[column]="column">
						</gui-structure-column-config-sort>

						<gui-structure-column-config-column-hide
								[column]="column">
						</gui-structure-column-config-column-hide>

						<gui-structure-column-config-column-move
								[column]="column">
						</gui-structure-column-config-column-move>

					</gui-tab-item>

				</ng-container>

				<ng-container *ngIf="config.isFilteringEnabled()">

					<gui-tab-item [tab]="config.getFilterMenu()">
						<div class="gui-header-menu-item">{{config.getFilterMenu()}}</div>
					</gui-tab-item>

				</ng-container>

				<ng-container *ngIf="config.isColumnManagerEnabled()">

					<gui-tab-item [tab]="config.getColumnMenu()">

						<gui-structure-menu-column-manager>
						</gui-structure-menu-column-manager>

					</gui-tab-item>

				</ng-container>

			</gui-tab>
		</div>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureCommandService },
    { type: CompositionReadModelService },
    { type: StructureColumnMenuConfigArchive },
    { type: CellTemplateWithContext, decorators: [{ type: Inject, args: ['column',] }] }
];
StructureColumnConfigComponent.propDecorators = {
    headerSortMenu: [{ type: ViewChild, args: ['headerSortMenu', { static: false },] }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigComponent.prototype.headerSortMenu;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.compositionReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureColumnMenuConfigArchive;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.column;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnConfigService {
    /**
     * @param {?} injector
     * @param {?} inlineDialogService
     */
    constructor(injector, inlineDialogService) {
        this.injector = injector;
        this.inlineDialogService = inlineDialogService;
    }
    /**
     * @param {?} elementRef
     * @param {?} column
     * @return {?}
     */
    open(elementRef, column) {
        /** @type {?} */
        const injector = Injector.create({
            providers: [{
                    provide: 'column',
                    useValue: column
                }],
            parent: this.injector
        });
        this.inlineDialogService.open(elementRef, StructureColumnConfigComponent, injector, InlineDialogPlacement.Top, -2);
    }
    /**
     * @return {?}
     */
    close() {
        this.inlineDialogService.close();
    }
}
StructureColumnConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureColumnConfigService.ctorParameters = () => [
    { type: Injector },
    { type: FabricInlineDialogService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.inlineDialogService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureHeaderColumnsComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     * @param {?} changeDetectorRef
     * @param {?} structureCommandService
     */
    constructor(elementRef, injector, changeDetectorRef, structureCommandService) {
        super();
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
        this.globalSearching = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // 	this.structureSearchReadModelRepository
        // 		.onSearchEnabled()
        // 		.pipe(
        // 			this.takeUntil()
        // 		)
        // 		.subscribe((searching: boolean) => {
        // 			this.globalSearching = searching;
        // 			this.changeDetectorRef.detectChanges();
        // 		});
    }
    /**
     * @param {?} column
     * @return {?}
     */
    toggleSort(column) {
        if (column.isSortEnabled()) {
            this.structureCommandService.toggleSort(column.getFieldId());
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isSortAsc(column) {
        return column.getSortStatus() === SortOrder.ASC;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isSortDesc(column) {
        return column.getSortStatus() === SortOrder.DESC;
    }
    /**
     * @return {?}
     */
    isGlobalSortEnabled() {
        return this.globalSearching;
    }
}
StructureHeaderColumnsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header-columns',
                template: "<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [style.width.px]=\"column.width\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t class=\"gui-header-cell\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(column), 'gui-sort-desc':  isSortDesc(column)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<gui-structure-column-config-trigger\n\t\t\t[column]=\"column\">\n\t\t</gui-structure-column-config-trigger>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    StructureColumnConfigService
                ]
            }] }
];
/** @nocollapse */
StructureHeaderColumnsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: ChangeDetectorRef },
    { type: StructureCommandService }
];
StructureHeaderColumnsComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.columns;
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.globalSearching;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFilterRepository {
    constructor() {
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setEnabled(enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    selectFilterEnabled(structureId) {
        return this.enabled$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
}
StructureFilterRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureFilterRepository.prototype.enabled$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureQuickFilterRepository {
    constructor() {
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setEnabled(enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    selectQuickFilterEnabled(structureId) {
        return this.enabled$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
}
StructureQuickFilterRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureQuickFilterRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureQuickFilterRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureQuickFilterRepository.prototype.enabled$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFilterReadModelRepository {
    /**
     * @param {?} structureFilterRepository
     * @param {?} structureQuickFilterRepository
     */
    constructor(structureFilterRepository, structureQuickFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFilteringEnabled(structureId) {
        return this.structureFilterRepository.selectFilterEnabled(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onQuickFiltersEnabled(structureId) {
        return this.structureQuickFilterRepository.selectQuickFilterEnabled(structureId);
    }
}
StructureFilterReadModelRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterReadModelRepository.ctorParameters = () => [
    { type: StructureFilterRepository },
    { type: StructureQuickFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelRepository.prototype.structureFilterRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelRepository.prototype.structureQuickFilterRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureHeaderFiltersComponent {
    /**
     * @param {?} structureFilterCommandService
     * @param {?} formBuilder
     * @param {?} cd
     * @param {?} structureId
     */
    constructor(structureFilterCommandService, formBuilder, cd, structureId) {
        this.structureFilterCommandService = structureFilterCommandService;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.structureId = structureId;
        this.closed = new EventEmitter();
        this.filterFieldName = 'phrase';
        this.filterMode = false;
        this.filterForm = this.formBuilder.group({
            [this.filterFieldName]: ['']
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filterForm
            .valueChanges
            // .pipe(
            // debounceTime(500)
            // )
            .subscribe((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            this.filter(f[this.filterFieldName]);
        }));
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    filter(phrase) {
        if (phrase === undefined || phrase === null) {
            phrase = '';
        }
        this.structureFilterCommandService.addFilter(this.columns[0].getFieldId(), '1', phrase, this.structureId);
    }
    /**
     * @return {?}
     */
    clearFilters() {
        this.filterForm.reset();
    }
    /**
     * @return {?}
     */
    turnOnFilterMode() {
        this.filterMode = true;
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    turnOffFilterMode() {
        this.filterMode = false;
        this.cd.detectChanges();
    }
}
StructureHeaderFiltersComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header-filters',
                template: `
		
		<ng-container *ngIf="!filterMode">

			<div *ngFor="let cell of columns"
				 [style.width.px]="cell.width"
				 class="gui-header-cell">

				<!--				<gui-structure-header-filter [column]="cell">-->
				<!--				</gui-structure-header-filter>-->

				<button (click)="turnOnFilterMode()">Add Filter</button>

			</div>

		</ng-container>

		<ng-container *ngIf="filterMode">

			<gui-select [options]="['has value', 'is the same as', 'starts with', 'ends with']" [selected]="'has value'" >

			</gui-select>

			<form [formGroup]="filterForm">
				<input type="text" [formControlName]="filterFieldName" gui-input/>
			</form>

			<button gui-button (click)="clearFilters()">Clear All</button>
			<button gui-button (click)="turnOffFilterMode()">Close</button>

		</ng-container>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureHeaderFiltersComponent.ctorParameters = () => [
    { type: StructureFilterCommandService },
    { type: FormBuilder },
    { type: ChangeDetectorRef },
    { type: StructureId }
];
StructureHeaderFiltersComponent.propDecorators = {
    columns: [{ type: Input }],
    closed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.columns;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.closed;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterFieldName;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterForm;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterMode;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureHeaderComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} eventBus
     * @param {?} structureId
     * @param {?} structureFilterReadModelRepository
     * @param {?} structureReadModelService
     * @param {?} compositionQueryService
     */
    constructor(changeDetectorRef, renderer, eventBus, structureId, structureFilterReadModelRepository, structureReadModelService, compositionQueryService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.eventBus = eventBus;
        this.structureId = structureId;
        this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        this.structureReadModelService = structureReadModelService;
        this.compositionQueryService = compositionQueryService;
        this.headerColumns = [];
        this.filterRowEnabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionQueryService
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.headerColumns = columns;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.renderer.setStyle(this.containerRef.nativeElement, 'width', width + 'px');
        }));
        this.structureFilterReadModelRepository
            .onFilteringEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.filterRowEnabled = enabled;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            /** @type {?} */
            const headerHeight = +(rowHeight) + 2;
            if (this.containerRef) {
                this.renderer.setStyle(this.containerRef.nativeElement, 'height', headerHeight + 'px');
            }
            if (this.filtersRef) {
                this.renderer.setStyle(this.filtersRef.nativeElement, 'height', headerHeight + 'px');
            }
        }));
    }
}
StructureHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header',
                template: "<gui-structure-header-columns\n\t[columns]=\"headerColumns\"\n\tclass=\"gui-header\">\n</gui-structure-header-columns>\n\n<gui-structure-header-filters\n\t*ngIf=\"filterRowEnabled\"\n\t[columns]=\"headerColumns\"\n\tclass=\"gui-header\">\n</gui-structure-header-filters>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureHeaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: DomainEventBus },
    { type: StructureId },
    { type: StructureFilterReadModelRepository },
    { type: StructureReadModelService },
    { type: CompositionReadModelService }
];
StructureHeaderComponent.propDecorators = {
    containerRef: [{ type: ViewChild, args: [StructureHeaderColumnsComponent, { read: ElementRef, static: true },] }],
    filtersRef: [{ type: ViewChild, args: [StructureHeaderFiltersComponent, { read: ElementRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    StructureHeaderComponent.prototype.containerRef;
    /** @type {?} */
    StructureHeaderComponent.prototype.filtersRef;
    /** @type {?} */
    StructureHeaderComponent.prototype.headerColumns;
    /** @type {?} */
    StructureHeaderComponent.prototype.filterRowEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.eventBus;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureFilterReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.compositionQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureHeaderFilterComponent extends SmartComponent {
    /**
     * @param {?} structureFilterCommandService
     * @param {?} structureId
     */
    constructor(structureFilterCommandService, structureId) {
        super();
        this.structureFilterCommandService = structureFilterCommandService;
        this.structureId = structureId;
        this.sub = new ChangedValueEmitter();
        this.editContext = {
            changes: this.sub
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub
            .on()
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => this.filter(phrase)));
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    filter(phrase) {
        this.structureFilterCommandService.addFilter(this.column.getFieldId(), '1', phrase, this.structureId);
    }
}
StructureHeaderFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header-filter',
                template: `
		
<!--		<ng-container-->
<!--				*ngTemplateOutlet="column.editTemplate; context: editContext">-->
<!--		</ng-container>-->
		
		<button gui-button [primary]="true" >Add Filter</button>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureHeaderFilterComponent.ctorParameters = () => [
    { type: StructureFilterCommandService },
    { type: StructureId }
];
StructureHeaderFilterComponent.propDecorators = {
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.column;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.sub;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.editContext;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureContentComponent extends SmartComponent {
    /**
     * @param {?} platformId
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} formationCommandService
     * @param {?} structureCellEditArchive
     * @param {?} structureEditModeArchive
     * @param {?} formationQueryService
     * @param {?} structureReadModelService
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} verticalFormationRepository
     * @param {?} structureId
     * @param {?} structureSearchPhraseRepository
     * @param {?} structureSearchHighlightArchive
     */
    constructor(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationQueryService, structureReadModelService, structureRowSelectEnabledArchive, verticalFormationRepository, structureId, // REfactor
    structureSearchPhraseRepository, structureSearchHighlightArchive) {
        super();
        this.platformId = platformId;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandService = formationCommandService;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationQueryService = formationQueryService;
        this.structureReadModelService = structureReadModelService;
        this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        this.verticalFormationRepository = verticalFormationRepository;
        this.structureId = structureId;
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        this.editMode = false;
        this.cellEditing = false;
        this.searchPhrase = '';
        this.highlighting = true;
        this.phrase = true;
        this.rowSelecting = StructureRowSelectEnabledArchive.DEFAULT_ROW_SELECT;
        this.rowDetailOpened = 4;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formationQueryService
            .onSelectedRows()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowsList
         * @return {?}
         */
        (rowsList) => {
            this.clearSelectedRows();
            rowsList.getIds().forEach((/**
             * @param {?} id
             * @return {?}
             */
            (id) => {
                /** @type {?} */
                const strippedId = 'gui' + id.replace(/-/g, '');
                /** @type {?} */
                const selectedRowEl = this.elementRef.nativeElement.querySelector(`#${strippedId}`);
                if (selectedRowEl) {
                    this.renderer.addClass(selectedRowEl, 'selected');
                }
            }));
        }));
        this.structureEditModeArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.editMode = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureCellEditArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.cellEditing = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            this.rowHeight = rowHeight;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureRowSelectEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowSelecting
         * @return {?}
         */
        (rowSelecting) => {
            this.rowSelecting = rowSelecting;
        }));
        combineLatest(this.structureSearchPhraseRepository
            .onPhrase(this.structureId), this.structureSearchHighlightArchive
            .onValue()).pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} args
         * @return {?}
         */
        (args) => {
            /** @type {?} */
            const searchPhrase = args[0];
            /** @type {?} */
            const highlighting = args[1];
            this.highlighting = highlighting;
            this.searchPhrase = searchPhrase;
            if (!this.highlighting) {
                this.searchPhrase = '';
            }
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    trackByFn() {
        return 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    translateY(index) {
        /** @type {?} */
        let height = index * this.rowHeight;
        // if (index > this.rowDetailOpened) {
        // 	height += 200;
        // }
        return `translateY(${height}px)`;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    toggleSelectedRow(entity) {
        if (this.rowSelecting) {
            this.formationCommandService.toggleSelectedRow(((/** @type {?} */ (entity))).id);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearSelectedRows() {
        /** @type {?} */
        const selectedElements = this.elementRef.nativeElement.querySelectorAll('.selected');
        if (isPlatformBrowser(this.platformId)) {
            selectedElements.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                this.renderer.removeClass(el, 'selected');
            }));
        }
    }
}
StructureContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-content',
                template: "<div class=\"gui-content\">\n\n\t<gui-structure-row (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t   [index]=\"index\"\n\t\t\t\t\t   [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [style.height.px]=\"rowHeight\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureContentComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FormationCommandService },
    { type: StructureCellEditArchive },
    { type: StructureEditModeArchive },
    { type: FormationReadModelService },
    { type: StructureReadModelService },
    { type: StructureRowSelectEnabledArchive },
    { type: VerticalFormationRepository },
    { type: StructureId },
    { type: StructureSearchPhraseRepository },
    { type: StructureSearchHighlightArchive }
];
StructureContentComponent.propDecorators = {
    source: [{ type: Input }],
    columns: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureContentComponent.prototype.source;
    /** @type {?} */
    StructureContentComponent.prototype.columns;
    /** @type {?} */
    StructureContentComponent.prototype.editMode;
    /** @type {?} */
    StructureContentComponent.prototype.cellEditing;
    /** @type {?} */
    StructureContentComponent.prototype.rowHeight;
    /** @type {?} */
    StructureContentComponent.prototype.searchPhrase;
    /** @type {?} */
    StructureContentComponent.prototype.highlighting;
    /** @type {?} */
    StructureContentComponent.prototype.phrase;
    /** @type {?} */
    StructureContentComponent.prototype.rowSelecting;
    /** @type {?} */
    StructureContentComponent.prototype.rowDetailOpened;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.formationCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureEditModeArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.formationQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureRowSelectEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.verticalFormationRepository;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureSearchPhraseRepository;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureSearchHighlightArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureRowComponent {
    constructor() {
        this.detailsEnabled = false;
    }
    /**
     * @return {?}
     */
    trackByFn() {
        return 0;
    }
}
StructureRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-row',
                template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n\t<gui-structure-cell *ngFor=\"let column of columns; trackBy: trackByFn\"\n\t\t\t\t\t\t[cellEditingEnabled]=\"cellEditing\"\n\t\t\t\t\t\t[cell]=\"column\"\n\t\t\t\t\t\t[editMode]=\"editMode\"\n\t\t\t\t\t\t[entity]=\"entity\"\n\t\t\t\t\t\t[searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t\t[style.width.px]=\"column.width\"\n\t\t\t\t\t\tclass=\"gui-cell\">\n\t</gui-structure-cell>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
StructureRowComponent.propDecorators = {
    entity: [{ type: Input }],
    columns: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    searchPhrase: [{ type: Input }],
    index: [{ type: Input }],
    detailsEnabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureRowComponent.prototype.entity;
    /** @type {?} */
    StructureRowComponent.prototype.columns;
    /** @type {?} */
    StructureRowComponent.prototype.editMode;
    /** @type {?} */
    StructureRowComponent.prototype.cellEditing;
    /** @type {?} */
    StructureRowComponent.prototype.searchPhrase;
    /** @type {?} */
    StructureRowComponent.prototype.index;
    /** @type {?} */
    StructureRowComponent.prototype.detailsEnabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCellComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureCellEditArchive
     * @param {?} structureCellEditStore
     * @param {?} sourceCommandService
     */
    constructor(changeDetectorRef, structureCellEditArchive, structureCellEditStore, sourceCommandService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureCellEditStore = structureCellEditStore;
        this.sourceCommandService = sourceCommandService;
        this.inEditMode = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.editMode !== undefined) {
            if (this.editMode) {
                this.cellEditingEnabled = true;
                this.enterEditMode(false);
            }
            else if (!this.editMode) {
                this.exitEditMode();
            }
        }
        if (!this.editMode) {
            this.exitEditMode();
        }
    }
    /**
     * @param {?=} forceCheck
     * @return {?}
     */
    enterEditMode(forceCheck = true) {
        if (!this.cellEditingEnabled) {
            return;
        }
        this.inEditMode = true;
        this.valueChanges$ = new ChangedValueEmitter();
        this.status$ = new ChangedValueEmitter();
        this.editContext = {
            status: this.status$,
            valueChanges: this.valueChanges$,
            value: this.cell.getValue(this.entity),
            focus: forceCheck
        };
        this.observeFieldStatus();
        this.observeValueChanges();
        this.publishEditEnter();
        if (!forceCheck) {
            this.changeDetectorRef.markForCheck();
        }
        else {
            this.changeDetectorRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    exitEditMode() {
        this.inEditMode = false;
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    submitChangesAndExit() {
        /** @type {?} */
        const itemId = this.entity.getId();
        /** @type {?} */
        const updatedValue = this.actualValue;
        /** @type {?} */
        const fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue));
        this.exitEditMode();
    }
    /**
     * @private
     * @return {?}
     */
    observeFieldStatus() {
        this.status$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            switch (status) {
                case EditEventType.SUBMIT:
                    this.submitChangesAndExit();
                    this.publishEditSubmit();
                    break;
                case EditEventType.CANCEL:
                    this.exitEditMode();
                    this.publishEditCancel();
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    observeValueChanges() {
        this.valueChanges$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.actualValue = value;
        }));
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    publishEditState(state) {
        this.structureCellEditStore.next(state);
    }
    /**
     * @private
     * @return {?}
     */
    publishEditEnter() {
        this.publishEditState(StructureCellEditState.ENTER);
    }
    /**
     * @private
     * @return {?}
     */
    publishEditCancel() {
        this.publishEditState(StructureCellEditState.CANCEL);
    }
    /**
     * @private
     * @return {?}
     */
    publishEditSubmit() {
        this.publishEditState(StructureCellEditState.SUBMIT);
    }
}
StructureCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-cell',
                template: "<span *ngIf=\"!inEditMode\"\n\t  (click)=\"enterEditMode()\">\n\t<ng-container\n\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\tcontext: { element: cell.getValue(entity, searchPhrase) }\">\n\t</ng-container>\n</span>\n\n<span *ngIf=\"inEditMode\" class=\"gui-cell-edit-mode\">\n\t<ng-container\n\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\tcontext: editContext\">\n\t</ng-container>\n</span>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureCellComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureCellEditArchive },
    { type: StructureCellEditStore },
    { type: SourceCommandService }
];
StructureCellComponent.propDecorators = {
    entity: [{ type: Input }],
    cell: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditingEnabled: [{ type: Input }],
    searchPhrase: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureCellComponent.prototype.entity;
    /** @type {?} */
    StructureCellComponent.prototype.cell;
    /** @type {?} */
    StructureCellComponent.prototype.editMode;
    /** @type {?} */
    StructureCellComponent.prototype.cellEditingEnabled;
    /** @type {?} */
    StructureCellComponent.prototype.searchPhrase;
    /** @type {?} */
    StructureCellComponent.prototype.inEditMode;
    /** @type {?} */
    StructureCellComponent.prototype.editContext;
    /** @type {?} */
    StructureCellComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellComponent.prototype.status$;
    /** @type {?} */
    StructureCellComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.structureCellEditStore;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.sourceCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureContainerComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} structureQueryService
     * @param {?} sourceQueryService
     * @param {?} schemaQueryService
     * @param {?} compositionCommandService
     * @param {?} compositionQueryService
     * @param {?} formationQueryService
     * @param {?} resizeDetector
     * @param {?} structureParent
     */
    constructor(elementRef, renderer, changeDetectorRef, ngZone, structureId, structureCommandService, structureQueryService, sourceQueryService, schemaQueryService, compositionCommandService, compositionQueryService, formationQueryService, resizeDetector, structureParent) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureQueryService = structureQueryService;
        this.sourceQueryService = sourceQueryService;
        this.schemaQueryService = schemaQueryService;
        this.compositionCommandService = compositionCommandService;
        this.compositionQueryService = compositionQueryService;
        this.formationQueryService = formationQueryService;
        this.resizeDetector = resizeDetector;
        this.structureParent = structureParent;
        this.columns = [];
        this.source = [];
        this.autoResizeWidthEnabled = false;
        this.scrollObservation$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**
         * TODO One source of truth
         *
         * There should only one sub here.
         */
        combineLatest(this.sourceQueryService.onEntities(), this.structureQueryService.onRowHeight())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} combine
         * @return {?}
         */
        (combine) => {
            /** @type {?} */
            const source = combine[0];
            /** @type {?} */
            const rowHeight = combine[1];
            this.source = source;
            this.setHeight(source.length * rowHeight);
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
            .onTemplateColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
            .onResizeWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.autoResizeWidthEnabled = enabled;
        }));
        combineLatest(this.sourceQueryService.onEntities(), this.schemaQueryService.onContainerHeight(), this.structureQueryService.onRowHeight())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} combine
         * @return {?}
         */
        (combine) => {
            /** @type {?} */
            const source = combine[0];
            /** @type {?} */
            const height = combine[1];
            /** @type {?} */
            const rowHeight = combine[2];
            /** @type {?} */
            const sourceSizeHeight = source.length * rowHeight;
            if (sourceSizeHeight > height) {
                this.setHeight(height);
            }
            else {
                this.setHeight(sourceSizeHeight);
            }
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // turn on when structure is ready
        if (this.structureParent) {
            this.resizeDetector
                .observe(this.structureParent.getElementRef().nativeElement)
                .pipe(filter((/**
             * @return {?}
             */
            () => this.autoResizeWidthEnabled)), map((/**
             * @param {?} element
             * @return {?}
             */
            (element) => element.offsetWidth)), distinctUntilChanged(), this.takeUntil())
                .subscribe((/**
             * @param {?} width
             * @return {?}
             */
            (width) => {
                this.recalculateContainer(width);
            }));
        }
        this.compositionQueryService
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.renderer.setStyle(this.containerRef.nativeElement, 'width', width + 'px');
        }));
        this.structureQueryService
            .onVerticalScrollEnabled()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            if (enabled) {
                this.enableScrollObservation();
            }
            else {
                this.disableScrollObservation();
            }
        }));
        // never runs ??
        this.structureQueryService
            .onStructure()
            .pipe(filter((/**
         * @param {?} str
         * @return {?}
         */
        (str) => {
            return str.isVerticalScrollEnabled();
        })), this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            /** @type {?} */
            const containerHeight = structure.getContainerHeight();
            /** @type {?} */
            const topMargin = structure.getTopMargin();
            this.renderer.setStyle(this.containerRef.nativeElement, 'padding-top', topMargin + 'px');
            this.renderer.setStyle(this.containerRef.nativeElement, 'height', containerHeight + 'px');
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.resizeDetector.destroy(this.elementRef.nativeElement);
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        this.height = height;
        this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.height + 'px');
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    recalculateContainer(width) {
        if (this.autoResizeWidthEnabled) {
            this.compositionCommandService.setContainerWidth(width);
        }
    }
    /**
     * @private
     * @return {?}
     */
    enableScrollObservation() {
        this.ngZone
            .runOutsideAngular((/**
         * @return {?}
         */
        () => {
            fromEvent(this.elementRef.nativeElement, 'scroll')
                .pipe(
            // auditTime(10),
            takeUntil(this.scrollObservation$), this.takeUntil())
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                /** @type {?} */
                const scrollTop = event.target.scrollTop;
                this.structureCommandService.setScrollPosition(scrollTop);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    disableScrollObservation() {
        this.scrollObservation$.next();
        this.scrollObservation$.complete();
    }
}
StructureContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-container',
                template: "<div #container\n\t class=\"gui-structure-container\">\n\n\t<gui-structure-content [columns]=\"columns\"\n\t\t\t\t\t\t   [source]=\"source\">\n\t</gui-structure-content>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: StructureId },
    { type: StructureCommandService },
    { type: StructureReadModelService },
    { type: SourceReadModelService },
    { type: SchemaReadModelService },
    { type: CompositionCommandService },
    { type: CompositionReadModelService },
    { type: FormationReadModelService },
    { type: ResizeDetector },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [structureParentComponent,] }] }
];
StructureContainerComponent.propDecorators = {
    containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
};
if (false) {
    /** @type {?} */
    StructureContainerComponent.prototype.containerRef;
    /** @type {?} */
    StructureContainerComponent.prototype.columns;
    /** @type {?} */
    StructureContainerComponent.prototype.source;
    /** @type {?} */
    StructureContainerComponent.prototype.height;
    /** @type {?} */
    StructureContainerComponent.prototype.rowColoring;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.autoResizeWidthEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.scrollObservation$;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.sourceQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.schemaQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.formationQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.resizeDetector;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureParent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureQuickFiltersComponent {
}
StructureQuickFiltersComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-quick-fitlers',
                template: `
	
		QuickFilters
		
	`
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchingRepository extends Reactive {
    constructor() {
        super();
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setEnabled(enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSearchingEnabled(structureId) {
        return this.enabled$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
}
StructureSearchingRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchingRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchingRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureSearchingRepository.prototype.enabled$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchReadModelRepository {
    /**
     * @param {?} structureSearchingRepository
     */
    constructor(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSearchEnabled(structureId = globalStructureId) {
        return this.structureSearchingRepository.onSearchingEnabled(structureId);
    }
}
StructureSearchReadModelRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchReadModelRepository.ctorParameters = () => [
    { type: StructureSearchingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchReadModelRepository.prototype.structureSearchingRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const prefix = 'Structure -';
/** @type {?} */
const STRUCTURE_CSS_CLASS_NAME = new InjectionToken(`${prefix} - css className`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureBlueprintComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureDefinition
     * @param {?} structureId
     * @param {?} structureQueryService
     * @param {?} pagingQueryService
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} structureAggregationArchive
     * @param {?} structureFilterReadModelRepository
     * @param {?} structureSearchReadModelRepository
     * @param {?} className
     */
    constructor(changeDetectorRef, structureDefinition, structureId, structureQueryService, pagingQueryService, structureInfoPanelEnabledArchive, structureAggregationArchive, structureFilterReadModelRepository, structureSearchReadModelRepository, className) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureDefinition = structureDefinition;
        this.structureId = structureId;
        this.structureQueryService = structureQueryService;
        this.pagingQueryService = pagingQueryService;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.structureAggregationArchive = structureAggregationArchive;
        this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        this.structureSearchReadModelRepository = structureSearchReadModelRepository;
        this.className = className;
        this.searchEnabled = false;
        this.topAggregationPanelEnabled = false;
        this.bottomAggregationPanelEnabled = false;
        this.quickFiltersEnabled = false;
        this.infoPanelEnabled = false;
        this.headerCssClass = `gui-${this.className}-header`;
        this.contentCssClass = `gui-${this.className}-content`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureQueryService
            .onStructure()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            this.structure = structure;
            this.changeDetectorRef.detectChanges();
        }));
        this.pagingQueryService
            .onPaging()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        (paging) => {
            this.pagingReadModel = paging;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureSearchReadModelRepository
            .onSearchEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.searchEnabled = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureFilterReadModelRepository
            .onQuickFiltersEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.quickFiltersEnabled = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureAggregationArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.topAggregationPanelEnabled = config.itTopEnabled();
            this.bottomAggregationPanelEnabled = config.itBottomEnabled();
            this.changeDetectorRef.detectChanges();
        }));
        this.structureInfoPanelEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.infoPanelEnabled = enabled;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    getHeaderTopClasses() {
        return this.headerCssClass + ' gui-header-top';
    }
    /**
     * @return {?}
     */
    getHeaderBottomClasses() {
        return this.headerCssClass + ' gui-header-bottom';
    }
    /**
     * @return {?}
     */
    isColumnHeaderTopEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.structure && this.structure.isTopHeaderEnabled();
    }
    /**
     * @return {?}
     */
    isColumnHeaderBottomEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.structure && this.structure.isBottomHeaderEnabled();
    }
    /**
     * @return {?}
     */
    isPagingTopEnabled() {
        return this.structureDefinition.getTopPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerTop();
    }
    /**
     * @return {?}
     */
    isPagingBottomEnabled() {
        return this.structureDefinition.getBottomPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerBottom();
    }
    /**
     * @return {?}
     */
    isSourceEmpty() {
        return this.structure && this.structure.getEntities().length === 0;
    }
}
StructureBlueprintComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-blueprint',
                template: "<!---------- TOP ---------->\n<gui-structure-top-panel *ngIf=\"searchEnabled\"></gui-structure-top-panel>\n\n<gui-structure-quick-fitlers *ngIf=\"quickFiltersEnabled\">\n</gui-structure-quick-fitlers>\n\n<gui-structure-paging *ngIf=\"isPagingTopEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-top\">\n</gui-structure-paging>\n\n<gui-structure-aggregation-panel [enabled]=\"topAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-top\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-header *ngIf=\"isColumnHeaderTopEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderTopClasses()\">\n</gui-structure-header>\n\n\n<!---------- MAIN ---------->\n<gui-structure-container [ngClass]=\"contentCssClass\">\n</gui-structure-container>\n\n<gui-structure-empty-source *ngIf=\"isSourceEmpty()\">\n</gui-structure-empty-source>\n\n\n<!---------- BOTTOM ---------->\n<gui-structure-header *ngIf=\"isColumnHeaderBottomEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderBottomClasses()\">\n</gui-structure-header>\n\n<gui-structure-aggregation-panel [enabled]=\"bottomAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-bottom\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-paging *ngIf=\"isPagingBottomEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-bottom\">\n</gui-structure-paging>\n\n<gui-structure-info-panel *ngIf=\"infoPanelEnabled\"></gui-structure-info-panel>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureBlueprintComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureDefinition },
    { type: StructureId },
    { type: StructureReadModelService },
    { type: PagingReadModelService },
    { type: StructureInfoPanelEnabledArchive },
    { type: StructureAggregationArchive },
    { type: StructureFilterReadModelRepository },
    { type: StructureSearchReadModelRepository },
    { type: String, decorators: [{ type: Inject, args: [STRUCTURE_CSS_CLASS_NAME,] }] }
];
if (false) {
    /** @type {?} */
    StructureBlueprintComponent.prototype.structure;
    /** @type {?} */
    StructureBlueprintComponent.prototype.searchEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.topAggregationPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.bottomAggregationPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.quickFiltersEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.infoPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.contentCssClass;
    /** @type {?} */
    StructureBlueprintComponent.prototype.headerCssClass;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingReadModel;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureDefinition;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureInfoPanelEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureAggregationArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureFilterReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureSearchReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.className;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryStructureAggregateStore extends InMemoryAggregateStore {
    /**
     * @param {?} inMemoryStructureStore
     * @param {?} aggregateStoreRegister
     */
    constructor(inMemoryStructureStore, aggregateStoreRegister) {
        super(inMemoryStructureStore, aggregateStoreRegister);
    }
}
InMemoryStructureAggregateStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureAggregateStore.ctorParameters = () => [
    { type: InMemoryStructureStore },
    { type: AggregateStoreRegister }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class StructureAggregateRepository extends AggregateRepository {
}
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureAggregateRepository.prototype.getById = function (aggregateId) { };
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    StructureAggregateRepository.prototype.save = function (aggregate) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryStructureAggregateRepository extends StructureAggregateRepository {
    /**
     * @param {?} inMemoryStructureAggregateStore
     */
    constructor(inMemoryStructureAggregateStore) {
        super();
        this.inMemoryStructureAggregateStore = inMemoryStructureAggregateStore;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        return this.inMemoryStructureAggregateStore.getById(aggregateId);
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    save(aggregate) {
        this.inMemoryStructureAggregateStore.save(aggregate);
    }
}
InMemoryStructureAggregateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureAggregateRepository.ctorParameters = () => [
    { type: InMemoryStructureAggregateStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureAggregateRepository.prototype.inMemoryStructureAggregateStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSourceLoadingEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SetSourceLoadingEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SchemaSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaThemeSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SchemaThemeSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaHorizontalGridSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SchemaHorizontalGridSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaVerticalGridSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SchemaVerticalGridSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaTopHeaderChangedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SchemaTopHeaderChangedEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaBottomHeaderChangedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SchemaBottomHeaderChangedEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RowColoringSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'RowColoringSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'PagingSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'FormationSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollPositionSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'ScrollPositionSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OriginSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} origin
     */
    constructor(aggregateId, origin) {
        super(aggregateId, 'OriginSetEvent');
        this.origin = origin;
    }
    /**
     * @return {?}
     */
    getOrigin() {
        return this.origin;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    OriginSetEvent.prototype.origin;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFilterToggledEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'StructureFilterToggledEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemoryStructureRepository extends StructureRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureQueryStore
     */
    constructor(domainEventBus, inMemoryStructureQueryStore) {
        super(domainEventBus);
        this.inMemoryStructureQueryStore = inMemoryStructureQueryStore;
        this.structureIdToStructure = new Map();
        this.structure$ = new ReplaySubject(1);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    onStructure(aggregateId) {
        return this.structure$
            .asObservable()
            .pipe(filter((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => {
            /** @type {?} */
            const key = aggregateId.getId();
            return structureIdToStructure.has(key);
        })), map((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => structureIdToStructure.get(aggregateId.getId()))));
    }
    /**
     * @protected
     * @return {?}
     */
    forEvents() {
        return [
            StructureCreatedEvent,
            SetSourceLoadingEvent,
            SchemaSetEvent,
            SchemaThemeSetEvent,
            SchemaHorizontalGridSetEvent,
            SchemaVerticalGridSetEvent,
            SchemaTopHeaderChangedEvent,
            SchemaBottomHeaderChangedEvent,
            RowColoringSetEvent,
            PagingSetEvent,
            PrevPageEvent,
            NextPageEvent,
            PagesizeChangedEvent,
            FormationSetEvent,
            SelectedRowToggledEvent,
            VerticalScrollEnabledSetEvent,
            ScrollPositionSetEvent,
            (/** @type {?} */ (SortToggledEvent)),
            StructureFilterToggledEvent,
            StructureSearchPhraseSetDomainEvent,
            (/** @type {?} */ (SortOrderSetEvent)),
            (/** @type {?} */ (OriginSetEvent)),
            RowHeightSetEvent
        ];
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    subs(event) {
        /** @type {?} */
        const aggregateId = event.getAggregateId();
        /** @type {?} */
        const optStructure = this.inMemoryStructureQueryStore.getById(aggregateId);
        optStructure.ifPresent((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            /** @type {?} */
            const key = structure.getId().toString();
            this.structureIdToStructure.set(key, structure);
            this.structure$.next(this.structureIdToStructure);
        }));
    }
}
InMemoryStructureRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemoryStructureReadStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structureIdToStructure;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structure$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.inMemoryStructureQueryStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const inMemoryStructureCommandProviders = [
    InMemoryStructureAggregateStore,
    {
        provide: StructureAggregateRepository,
        useClass: InMemoryStructureAggregateRepository
    }
];
/** @type {?} */
const inMemoryStructureReadProviders = [
    InMemoryStructureReadStore,
    {
        provide: StructureRepository,
        useClass: InMemoryStructureRepository
    }
];
/** @type {?} */
const inMemoryStructureProviders = [
    InMemoryStructureStore
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetVerticalScrollEnabledCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetVerticalScrollEnabledCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        /** @type {?} */
        const formation = structure.getVerticalFormation();
        formation.setEnabled(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new VerticalScrollEnabledSetEvent(command.getAggregateId()));
    }
}
SetVerticalScrollEnabledCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetVerticalScrollEnabledCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetVerticalScrollEnabledCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetScrollPositionCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetScrollPositionCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const position = command.getPosition();
        structure.setScrollPosition(position);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new ScrollPositionSetEvent(command.getAggregateId()));
    }
}
SetScrollPositionCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetScrollPositionCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetScrollPositionCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitFieldsCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return InitFieldsCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const columns = command.getColumns();
        structure.createFields(columns);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const compositionId = command.getCompositionId();
        /** @type {?} */
        const columns = command.getColumns();
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        /** @type {?} */
        const fields = ((/** @type {?} */ (aggregateEvents[0]))).getFields();
        this.domainEventPublisher.publish(new FieldsInitedEvent(command.getAggregateId(), compositionId, columns, fields));
    }
}
InitFieldsCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InitFieldsCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleSortCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return ToggleSortCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const aggregateId = command.getAggregateId();
        /** @type {?} */
        const compositionId = command.getCompositionId();
        /** @type {?} */
        const fieldId = command.getFieldId();
        /** @type {?} */
        const sorters = structure.toggleSort(fieldId);
        this.publishSortEvent(aggregateId, compositionId, fieldId, sorters);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
    }
    /**
     * @private
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    publishSortEvent(aggregateId, compositionId, fieldId, sorters) {
        /** @type {?} */
        const directions = sorters.map((/**
         * @param {?} sorter
         * @return {?}
         */
        (sorter) => {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        }));
        this.domainEventPublisher.publish(new SortToggledEvent(aggregateId, compositionId, directions));
    }
}
ToggleSortCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToggleSortCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortingSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SortingSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSortingCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetSortingCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const sortingConfig = command.getSortingConfig();
        aggregate.setSortingConfig(sortingConfig);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SortingSetEvent(command.getAggregateId()));
    }
}
SetSortingCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSortingCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortingCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureConfigFilterSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} enabled
     */
    constructor(aggregateId, enabled) {
        super(aggregateId, 'StructureConfigFilterSetEvent');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    getEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigFilterSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetConfigFilterCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return StructureSetConfigFilterCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const filterConfig = command.getConfig();
        aggregate.setFilterConfig(filterConfig);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const filterConfig = command.getConfig();
        this.domainEventPublisher.publish(new StructureConfigFilterSetEvent(command.getAggregateId(), filterConfig.enabled));
    }
}
StructureSetConfigFilterCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetConfigFilterCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureConfigSearchingSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} enabled
     */
    constructor(aggregateId, enabled) {
        super(aggregateId, 'StructureConfigSearchingSetEvent');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    getEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigSearchingSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetConfigSearchingCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return StructureSetConfigSearchingCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const searchingConfig = command.getConfig();
        aggregate.setSearchingConfig(searchingConfig);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const searchingConfig = command.getConfig();
        this.domainEventPublisher.publish(new StructureConfigSearchingSetEvent(command.getAggregateId(), searchingConfig.enabled));
    }
}
StructureSetConfigSearchingCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetConfigSearchingCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigSearchingCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureConfigQuickFilterSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} enabled
     */
    constructor(aggregateId, enabled) {
        super(aggregateId, 'StructureConfigQuickFilterSetEvent');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    getEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigQuickFilterSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetConfigQuickFilterCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return StructureSetConfigQuickFilterCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const quickFiltersConfig = command.getConfig();
        aggregate.setQuickFiltersConfig(quickFiltersConfig);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const structureId = command.getAggregateId();
        /** @type {?} */
        const quickFiltersConfig = command.getConfig();
        this.domainEventPublisher.publish(new StructureConfigQuickFilterSetEvent(structureId, quickFiltersConfig.enabled));
    }
}
StructureSetConfigQuickFilterCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetConfigQuickFilterCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureToggleFilterCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return StructureToggleFilterCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const fieldId = command.getFieldId();
        /** @type {?} */
        const externalFieldId = command.getExternalFilterId();
        /** @type {?} */
        const filterValue = command.getFilterValue();
        aggregate.toggleFilter(fieldId, externalFieldId, filterValue);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new StructureFilterToggledEvent(command.getAggregateId()));
    }
}
StructureToggleFilterCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureToggleFilterCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationsChangedEvent extends DomainEvent {
    /**
     * @param {?} structureId
     * @param {?} values
     */
    constructor(structureId, values) {
        super(structureId, 'StructureAggregationsChangedEvent');
        this.values = values;
    }
    /**
     * @return {?}
     */
    getAggregations() {
        return this.values;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationsChangedEvent.prototype.values;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePreparedEntitiesSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} preparedItems
     */
    constructor(aggregateId, preparedItems) {
        super(aggregateId, 'StructurePreparedEntitiesSetEvent');
        this.preparedItems = preparedItems;
    }
    /**
     * @return {?}
     */
    getPreparedItems() {
        return this.preparedItems;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedEntitiesSetEvent.prototype.preparedItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSourceDomainEventPublisher {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    publish(events) {
        events.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.publishEvent(event);
        }));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    publishEvent(event) {
        if (event.getType() === 'StructureOriginChangedAggregateEvent') {
            /** @type {?} */
            const structureOriginChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new OriginSetEvent(structureOriginChangedAggregateEvent.getAggregateId(), structureOriginChangedAggregateEvent.getOrigin());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureSourceItemEditedAggregateEvent') {
            /** @type {?} */
            const structureSourceItemEditedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new StructureSourceItemEditedEvent(structureSourceItemEditedAggregateEvent.getAggregateId(), structureSourceItemEditedAggregateEvent.getBeforeItem(), structureSourceItemEditedAggregateEvent.getAfterItem());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureAggregationsChangedAggregateEvent') {
            /** @type {?} */
            const structureAggregationsChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new StructureAggregationsChangedEvent(structureAggregationsChangedAggregateEvent.getAggregateId(), structureAggregationsChangedAggregateEvent.getAggregations());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructurePreparedEntitiesSetAggregateEvent') {
            /** @type {?} */
            const structurePreparedEntitiesSetAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new StructurePreparedEntitiesSetEvent(structurePreparedEntitiesSetAggregateEvent.getAggregateId(), structurePreparedEntitiesSetAggregateEvent.getPreparedItems());
            this.domainEventPublisher.publish(domainEvent);
        }
    }
}
StructureSourceDomainEventPublisher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSourceDomainEventPublisher.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceDomainEventPublisher.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationEnabledSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} enabled
     */
    constructor(aggregateId, enabled) {
        super(aggregateId, 'StructureAggregationEnabledSetEvent');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationEnabledSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetAggregationEnabledCommandHandler {
    /**
     * @param {?} structureSourceDomainEventPublisher
     * @param {?} domainEventPublisher
     */
    constructor(structureSourceDomainEventPublisher, domainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return StructureSetAggregationEnabledCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        structure.setAggregationEnabled(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        this.domainEventPublisher.publish(new StructureAggregationEnabledSetEvent(command.getAggregateId(), enabled));
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
}
StructureSetAggregationEnabledCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetAggregationEnabledCommandHandler.ctorParameters = () => [
    { type: StructureSourceDomainEventPublisher },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VerticalRange {
    /**
     * @param {?} start
     * @param {?} end
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    /**
     * @return {?}
     */
    getStart() {
        return this.start;
    }
    /**
     * @return {?}
     */
    getEnd() {
        return this.end;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalRange.prototype.start;
    /**
     * @type {?}
     * @private
     */
    VerticalRange.prototype.end;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VerticalFormation {
    /**
     * @param {?=} enabled
     * @param {?=} viewportHeight
     * @param {?=} sourceSize
     * @param {?=} scrollPosition
     * @param {?=} rowHeight
     * @param {?=} hiddenItemsTop
     * @param {?=} hiddenItemsBottom
     */
    constructor(enabled = false, viewportHeight = 0, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        this.enabled = enabled;
        this.rowHeight = 30;
        this.hiddenItemsTop = 0;
        this.hiddenItemsBottom = 1;
        this.viewportHeight = viewportHeight;
        this.sourceSize = sourceSize;
        this.scrollPosition = scrollPosition;
        if (Number.isInteger(rowHeight)) {
            this.rowHeight = rowHeight;
        }
        if (Number.isInteger(hiddenItemsTop)) {
            this.hiddenItemsTop = hiddenItemsTop;
        }
        if (Number.isInteger(hiddenItemsBottom)) {
            this.hiddenItemsBottom = hiddenItemsBottom;
        }
        this.calculateRange();
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled &&
            this.viewportHeight > 0 &&
            this.sourceSize > 0;
    }
    /**
     * @return {?}
     */
    getRowHeight() {
        return this.rowHeight;
    }
    /**
     * @return {?}
     */
    getRange() {
        return this.range;
    }
    /**
     * @return {?}
     */
    getTopMargin() {
        return this.range.getStart() * this.rowHeight;
    }
    /**
     * @return {?}
     */
    calculateRange() {
        if (this.calcFullHeight() <= this.viewportHeight) {
            this.range = new VerticalRange(0, this.sourceSize);
            return;
        }
        /** @type {?} */
        const itemsInViewport = Math.floor(this.viewportHeight / this.rowHeight);
        /** @type {?} */
        const hiddenElements = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        const topMargin = Math.abs(hiddenElements - this.hiddenItemsTop) * this.rowHeight;
        /** @type {?} */
        let start = (hiddenElements - this.hiddenItemsTop);
        /** @type {?} */
        const viewportElements = Math.ceil(this.viewportHeight / this.rowHeight);
        /** @type {?} */
        let end = start + viewportElements + this.hiddenItemsBottom;
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        this.range = new VerticalRange(start, end);
        return {
            start,
            end,
            topMargin
        };
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        // TODO dispatch aggregate event
        if (this.enabled && this.viewportHeight === 0) {
            this.logger.warn('Height needs to be specified in order for virtual scroll to work.');
        }
        this.calculateRange();
    }
    /**
     * @param {?=} sourceSize
     * @return {?}
     */
    setSourceSize(sourceSize = 0) {
        this.sourceSize = sourceSize;
        this.calculateRange();
    }
    /**
     * @param {?} count
     * @return {?}
     */
    setTopHiddenItemsCount(count) {
        this.hiddenItemsTop = count;
        this.calculateRange();
    }
    /**
     * @param {?} count
     * @return {?}
     */
    setBottomHiddenItemsCount(count) {
        this.hiddenItemsBottom = count;
        this.calculateRange();
    }
    /**
     * @param {?} scrollPosition
     * @return {?}
     */
    setScrollPosition(scrollPosition) {
        this.scrollPosition = scrollPosition;
        this.calculateRange();
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setViewportHeight(height) {
        this.viewportHeight = height;
        this.calculateRange();
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setRowHeight(height) {
        this.rowHeight = height;
        this.calculateRange();
    }
    /**
     * @param {?} logger
     * @return {?}
     */
    setLogger(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    calcFullHeight() {
        return this.sourceSize * this.rowHeight;
    }
    /**
     * @return {?}
     */
    getViewPortHeight() {
        return this.viewportHeight;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.rowHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.hiddenItemsTop;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.hiddenItemsBottom;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.viewportHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.scrollPosition;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.range;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.sourceSize;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VerticalFormationFactory {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * @param {?=} enabled
     * @param {?=} viewportHeight
     * @param {?=} sourceSize
     * @param {?=} scrollPosition
     * @param {?=} rowHeight
     * @param {?=} hiddenItemsTop
     * @param {?=} hiddenItemsBottom
     * @return {?}
     */
    create(enabled = false, viewportHeight = 0, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        /** @type {?} */
        const vf = new VerticalFormation(enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom);
        vf.setLogger(this.logger);
        return vf;
    }
}
VerticalFormationFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VerticalFormationFactory.ctorParameters = () => [
    { type: Logger }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationFactory.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldIdGenerator {
    /**
     * @return {?}
     */
    generateId() {
        /** @type {?} */
        const id = RandomStringGenerator.generate();
        return new FieldId(id);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Field {
    /**
     * @protected
     * @param {?} id
     * @param {?} accessor
     * @param {?} dataType
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, dataType, aggregationConfig) {
        this.aggregationEnabled = true;
        this.id = id;
        this.accessor = accessor;
        this.dataType = dataType;
        if (typeof accessor === 'string') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => entity.getData()[accessor]);
        }
        else if (typeof accessor === 'function') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => accessor(entity.getData()));
        }
        this.possibleAggregations = this.assignPossibleAggregations();
        this.assignAggregations(aggregationConfig);
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    getKey() {
        return this.getId().getId();
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.dataType;
    }
    /**
     * @return {?}
     */
    getAccessor() {
        return this.accessor;
    }
    /**
     * @return {?}
     */
    getAccessorMethod() {
        return this.accessorMethod;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getValue(entity) {
        return this.accessorMethod(entity);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isAggregation(type) {
        if (!this.isAggregationEnabled()) {
            return false;
        }
        return !!(this.aggregations & type);
    }
    /**
     * @return {?}
     */
    isAggregationEnabled() {
        return this.aggregationEnabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setAggregationEnabled(enabled) {
        this.aggregationEnabled = enabled;
    }
    /**
     * @private
     * @param {?} aggregationConfig
     * @return {?}
     */
    assignAggregations(aggregationConfig) {
        if (!!aggregationConfig && Object.keys(aggregationConfig).length !== 0) {
            if (aggregationConfig.enabled) {
                this.aggregationEnabled = !!aggregationConfig.enabled;
            }
            if (aggregationConfig.aggregationTypes) {
                this.aggregations = 0;
                aggregationConfig.aggregationTypes.forEach((/**
                 * @param {?} t
                 * @return {?}
                 */
                (t) => {
                    this.aggregations |= t;
                }));
            }
            else {
                this.aggregations = this.assignDefaultAggregations();
            }
        }
        else {
            this.aggregations = this.assignDefaultAggregations();
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Field.prototype.id;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.dataType;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.accessorMethod;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.aggregationEnabled;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.aggregations;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.possibleAggregations;
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignDefaultAggregations = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignPossibleAggregations = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnknownField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, aggregationConfig) {
        super(id, accessor, DataType.UNKNOWN, aggregationConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultAggregations() {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleAggregations() {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, aggregationConfig) {
        super(id, accessor, DataType.NUMBER, aggregationConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultAggregations() {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT |
        // 	AggregationType.SUM |
        // 	AggregationType.MIN |
        // 	AggregationType.MAX |
        // 	AggregationType.AVERAGE |
        // 	AggregationType.MEDIAN;
    }
    /**
     * @return {?}
     */
    assignPossibleAggregations() {
        return AggregationType.COUNT |
            AggregationType.DISTINCT |
            AggregationType.SUM |
            AggregationType.MIN |
            AggregationType.MAX |
            AggregationType.AVERAGE |
            AggregationType.MEDIAN;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, aggregationConfig) {
        super(id, accessor, DataType.STRING, aggregationConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultAggregations() {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleAggregations() {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, aggregationConfig) {
        super(id, accessor, DataType.BOOLEAN, aggregationConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultAggregations() {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT |
        // 	AggregationType.TRUTHY |
        // 	AggregationType.FALSY;
    }
    /**
     * @return {?}
     */
    assignPossibleAggregations() {
        return AggregationType.COUNT |
            AggregationType.DISTINCT |
            AggregationType.TRUTHY |
            AggregationType.FALSY;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, aggregationConfig) {
        super(id, accessor, DataType.DATE, aggregationConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultAggregations() {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleAggregations() {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldFactory {
    /**
     * @param {?} fieldIdGenerator
     */
    constructor(fieldIdGenerator) {
        this.fieldIdGenerator = fieldIdGenerator;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    create(column) {
        /** @type {?} */
        let columnType = column.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), column.aggregation);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), column.aggregation);
        }
        if (columnType === DataType.STRING) {
            return new StringField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)));
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)));
        }
        if (columnType === DataType.DATE) {
            return new DateField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)));
        }
    }
}
FieldFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldFactory.ctorParameters = () => [
    { type: FieldIdGenerator }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldFactory.prototype.fieldIdGenerator;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldCollection {
    /**
     * @param {?} fieldFactory
     */
    constructor(fieldFactory) {
        this.fieldFactory = fieldFactory;
        this.fields = new Map();
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    getField(fieldId) {
        if (fieldId === null) {
            return this.getAllFields()[0];
        }
        return this.fields.get(fieldId.getId());
    }
    /**
     * @return {?}
     */
    getAllFieldIds() {
        return Array.from(this.fields.keys());
    }
    /**
     * @return {?}
     */
    getAllFields() {
        return Array.from(this.fields.values());
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    initFields(columns) {
        if (!columns) {
            return;
        }
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const field = this.fieldFactory.create(column);
            this.addField(field);
        }));
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    addFields(fields) {
        for (let field of fields) {
            this.addField(field);
        }
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    addField(field) {
        this.fields.set(field.getId().toString(), field);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldCollection.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    FieldCollection.prototype.fieldFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldCollectionFactory {
    /**
     * @param {?} fieldFactory
     */
    constructor(fieldFactory) {
        this.fieldFactory = fieldFactory;
    }
    /**
     * @return {?}
     */
    create() {
        return new FieldCollection(this.fieldFactory);
    }
}
FieldCollectionFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldCollectionFactory.ctorParameters = () => [
    { type: FieldFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldCollectionFactory.prototype.fieldFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFilter {
    /**
     * @param {?} id
     * @param {?} field
     * @param {?} filterValue
     */
    constructor(id, field, filterValue) {
        this.filterId = id;
        this.field = field;
        this.filterValue = filterValue;
    }
    /**
     * @return {?}
     */
    getFieldId() {
        return this.field.getId();
    }
    /**
     * @return {?}
     */
    getFilterValue() {
        return this.filterValue;
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    setFilterValue(filterValue) {
        this.filterValue = filterValue;
    }
    // Move to container
    /**
     * @param {?} entities
     * @return {?}
     */
    filter(entities) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (this.field.getDataType() === DataType.STRING) {
                return this.filterString(item);
            }
            else if (this.field.getDataType() === DataType.NUMBER) {
                return this.filterNumber(item);
            }
            else if (this.field.getDataType() === DataType.BOOLEAN) {
                return this.filterBoolean(item);
            }
            else {
                return true;
            }
        }));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    filterString(item) {
        /** @type {?} */
        const value = this.field.getValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1;
        }
        else {
            return true;
        }
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    filterNumber(item) {
        /** @type {?} */
        const numberValue = this.field.getValue(item);
        return numberValue > this.filterValue;
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    filterBoolean(item) {
        /** @type {?} */
        const booleanValue = this.field.getValue(item);
        return booleanValue === this.filterValue;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilter.prototype.filterId;
    /**
     * @type {?}
     * @private
     */
    StructureFilter.prototype.field;
    /**
     * @type {?}
     * @private
     */
    StructureFilter.prototype.filterValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterId {
    /**
     * @param {?} field
     * @param {?} filterId
     */
    constructor(field, filterId) {
        /** @type {?} */
        const fieldId = field.getId().toString();
        this.id = fieldId + '@' + filterId;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterId.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterSettings {
    /**
     * @param {?=} filteringEnabled
     * @param {?=} searchEnabled
     * @param {?=} quickFiltersEnabled
     */
    constructor(filteringEnabled = false, searchEnabled = false, quickFiltersEnabled = false) {
        this.filteringEnabled = false;
        this.searchEnabled = false;
        this.quickFiltersEnabled = false;
        this.filteringEnabled = filteringEnabled;
        this.searchEnabled = searchEnabled;
        this.quickFiltersEnabled = quickFiltersEnabled;
    }
    /**
     * @return {?}
     */
    isFilteringEnabled() {
        return this.filteringEnabled;
    }
    /**
     * @return {?}
     */
    isQuickFilteringEnabled() {
        return this.quickFiltersEnabled;
    }
    /**
     * @return {?}
     */
    isSearchingEnabled() {
        return this.searchEnabled;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setFilterConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.filteringEnabled = config.enabled;
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSearchingConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.searchEnabled = config.enabled;
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setQuickFiltersConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.quickFiltersEnabled = config.enabled;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterSettings.prototype.filteringEnabled;
    /**
     * @type {?}
     * @private
     */
    FilterSettings.prototype.searchEnabled;
    /**
     * @type {?}
     * @private
     */
    FilterSettings.prototype.quickFiltersEnabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterManager {
    constructor() {
        this.filterSettings = new FilterSettings();
        this.filters = new Map();
    }
    /**
     * @return {?}
     */
    getAll() {
        return Array.from(this.filters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        (arr) => arr[1]));
    }
    /**
     * @return {?}
     */
    getSettings() {
        return this.filterSettings;
    }
    /**
     * @param {?} field
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    addFilter(field, externalFilterId, filterValue) {
        /** @type {?} */
        const filterId = new FilterId(field, externalFilterId);
        /** @type {?} */
        const filter = new StructureFilter(filterId, field, filterValue);
        if (filterValue === '') {
            this.filters.delete(filterId.getId());
        }
        else {
            this.filters.set(filterId.getId(), filter);
        }
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    filter(entities) {
        /** @type {?} */
        const filters = this.getAll();
        /** @type {?} */
        let filteredEntities = [...entities];
        for (let filter of filters) {
            filteredEntities = filter.filter(filteredEntities);
        }
        return filteredEntities;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterManager.prototype.filterSettings;
    /**
     * @type {?}
     * @private
     */
    FilterManager.prototype.filters;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterManagerFactory {
    /**
     * @param {?=} enabled
     * @return {?}
     */
    create(enabled = false) {
        return new FilterManager();
    }
}
FilterManagerFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AGGREGATION_CALCULATORS = 'GUI - Aggregation Calculators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T, A
 */
class AggregationCalculator {
    /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    calculate(fields, items) {
        /** @type {?} */
        const filteredFields = fields.filter((/**
         * @param {?} field
         * @return {?}
         */
        (field) => this.forDataType(field.getDataType())));
        if (!filteredFields || filteredFields.length === 0 || items.length === 0) {
            return null;
        }
        /** @type {?} */
        let count = new Map();
        /** @type {?} */
        let distinct = new Map();
        // init
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            /** @type {?} */
            const key = field.getKey();
            count.set(key, 0);
            distinct.set(key, new Set());
            this.prepare(field);
        }));
        // calculate
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            filteredFields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                /** @type {?} */
                const key = field.getKey();
                /** @type {?} */
                const value = field.getValue(item);
                if (value !== null || value !== undefined || value !== '') {
                    if (field.isAggregation(AggregationType.COUNT)) {
                        /** @type {?} */
                        const countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isAggregation(AggregationType.DISTINCT)) {
                        /** @type {?} */
                        const distinctSet = distinct.get(key);
                        distinctSet.add(value);
                    }
                }
                this.aggregate(field, value);
            }));
        }));
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            this.postCalculate(field, items);
        }));
        /** @type {?} */
        let aggregations = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            /** @type {?} */
            const key = field.getId().getId();
            /** @type {?} */
            let aggregatedValues = this.generateAggregatedValues(field);
            if (field.isAggregation(AggregationType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isAggregation(AggregationType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            aggregations.set(key, aggregatedValues);
        }));
        return aggregations;
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} dataType
     * @return {?}
     */
    AggregationCalculator.prototype.forDataType = function (dataType) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    AggregationCalculator.prototype.prepare = function (field) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    AggregationCalculator.prototype.postCalculate = function (field, items) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    AggregationCalculator.prototype.aggregate = function (field, value) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    AggregationCalculator.prototype.generateAggregatedValues = function (field) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AggregatedValues {
    /**
     * @param {?} value
     * @return {?}
     */
    setCount(value) {
        this.count = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDistinct(value) {
        this.distinct = value;
    }
}
if (false) {
    /** @type {?} */
    AggregatedValues.prototype.count;
    /** @type {?} */
    AggregatedValues.prototype.distinct;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanAggregatedValues extends AggregatedValues {
    /**
     * @param {?} truthy
     * @param {?} falsy
     */
    constructor(truthy, falsy) {
        super();
        this.truthy = truthy;
        this.falsy = falsy;
    }
}
if (false) {
    /** @type {?} */
    BooleanAggregatedValues.prototype.truthy;
    /** @type {?} */
    BooleanAggregatedValues.prototype.falsy;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
        this.truthy = new Map();
        this.falsy = new Map();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.BOOLEAN;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
        /** @type {?} */
        const key = field.getKey();
        if (field.isAggregation(AggregationType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isAggregation(AggregationType.FALSY)) {
            this.falsy.set(key, 0);
        }
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) {
    }
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    aggregate(field, value) {
        /** @type {?} */
        const booleanValue = value;
        /** @type {?} */
        const // (value as any === 'true'),
        key = field.getKey();
        /** @type {?} */
        const truthyForField = this.truthy.get(key);
        /** @type {?} */
        const falsyForField = this.falsy.get(key);
        if (booleanValue) {
            if (field.isAggregation(AggregationType.TRUTHY)) {
                this.truthy.set(key, truthyForField + 1);
            }
        }
        else {
            if (field.isAggregation(AggregationType.FALSY)) {
                this.falsy.set(key, falsyForField + 1);
            }
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    generateAggregatedValues(field) {
        /** @type {?} */
        const key = field.getKey();
        return new BooleanAggregatedValues(this.truthy.get(key), this.falsy.get(key));
    }
}
BooleanAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BooleanAggregationCalculator.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanAggregationCalculator.prototype.truthy;
    /**
     * @type {?}
     * @private
     */
    BooleanAggregationCalculator.prototype.falsy;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateAggregatedValues extends AggregatedValues {
    constructor() {
        super();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.DATE;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) {
    }
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    aggregate(field, value) {
    }
    /**
     * @param {?} field
     * @return {?}
     */
    generateAggregatedValues(field) {
        return new DateAggregatedValues();
    }
}
DateAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DateAggregationCalculator.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberAggregatedValues extends AggregatedValues {
    /**
     * @param {?} sum
     * @param {?} min
     * @param {?} max
     * @param {?} average
     * @param {?} median
     */
    constructor(sum, min, max, average, median) {
        super();
        this.sum = this.setValueWithPrecision(sum);
        this.min = this.setValueWithPrecision(min);
        this.max = this.setValueWithPrecision(max);
        this.average = this.setValueWithPrecision(average);
        this.median = this.setValueWithPrecision(median);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setValueWithPrecision(value) {
        if (!value && value !== 0) {
            return null;
        }
        if (value === 0) {
            return 0;
        }
        return +((value).toFixed(2));
    }
}
if (false) {
    /** @type {?} */
    NumberAggregatedValues.prototype.sum;
    /** @type {?} */
    NumberAggregatedValues.prototype.min;
    /** @type {?} */
    NumberAggregatedValues.prototype.max;
    /** @type {?} */
    NumberAggregatedValues.prototype.average;
    /** @type {?} */
    NumberAggregatedValues.prototype.median;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
        this.sum = new Map();
        this.min = new Map();
        this.max = new Map();
        this.average = new Map();
        this.median = new Map();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.NUMBER;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
        /** @type {?} */
        const key = field.getKey();
        this.sum.set(key, 0);
        this.min.set(key, Number.MAX_SAFE_INTEGER);
        this.max.set(key, 0);
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) {
        /** @type {?} */
        const key = field.getKey();
        if (field.isAggregation(AggregationType.AVERAGE)) {
            this.average.set(key, this.sum.get(key) / items.length);
        }
        if (field.isAggregation(AggregationType.MEDIAN)) {
            this.median.set(key, field.getValue(items[Math.floor(items.length / 2)]));
        }
    }
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    aggregate(field, value) {
        /** @type {?} */
        const numberValue = +value;
        /** @type {?} */
        const key = field.getKey();
        /** @type {?} */
        const sumForField = this.sum.get(key);
        /** @type {?} */
        const minForField = this.min.get(key);
        /** @type {?} */
        const maxForField = this.max.get(key);
        if (field.isAggregation(AggregationType.SUM) || field.isAggregation(AggregationType.AVERAGE)) {
            this.sum.set(key, sumForField + numberValue);
        }
        if (field.isAggregation(AggregationType.MIN)) {
            if (minForField > numberValue) {
                this.min.set(key, numberValue);
            }
        }
        if (field.isAggregation(AggregationType.MAX)) {
            if (maxForField < numberValue) {
                this.max.set(key, numberValue);
            }
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    generateAggregatedValues(field) {
        /** @type {?} */
        const key = field.getKey();
        /** @type {?} */
        const sum = field.isAggregation(AggregationType.SUM) ? this.sum.get(key) : undefined;
        /** @type {?} */
        const min = field.isAggregation(AggregationType.MIN) ? this.min.get(key) : undefined;
        /** @type {?} */
        const max = field.isAggregation(AggregationType.MAX) ? this.max.get(key) : undefined;
        /** @type {?} */
        const average = field.isAggregation(AggregationType.AVERAGE) ? this.average.get(key) : undefined;
        /** @type {?} */
        const median = field.isAggregation(AggregationType.MEDIAN) ? this.median.get(key) : undefined;
        return new NumberAggregatedValues(sum, min, max, average, median);
    }
}
NumberAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NumberAggregationCalculator.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.sum;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.min;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.max;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.average;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.median;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringAggregatedValues extends AggregatedValues {
    constructor() {
        super();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.STRING;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) {
    }
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    aggregate(field, value) {
    }
    /**
     * @param {?} field
     * @return {?}
     */
    generateAggregatedValues(field) {
        return new StringAggregatedValues();
    }
}
StringAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StringAggregationCalculator.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnknownAggregatedValues extends AggregatedValues {
    constructor() {
        super();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnknownAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.UNKNOWN;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) {
    }
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    aggregate(field, value) {
    }
    /**
     * @param {?} field
     * @return {?}
     */
    generateAggregatedValues(field) {
        return new UnknownAggregatedValues();
    }
}
UnknownAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UnknownAggregationCalculator.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationsChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} aggregatedValues
     */
    constructor(aggregateId, aggregatedValues) {
        super(aggregateId, 'StructureAggregationsChangedAggregateEvent');
        this.aggregatedValues = aggregatedValues;
    }
    /**
     * @return {?}
     */
    getAggregations() {
        return this.aggregatedValues;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationsChangedAggregateEvent.prototype.aggregatedValues;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AggregationManager {
    /**
     * @param {?} structureId
     * @param {?} calculators
     */
    constructor(structureId, calculators) {
        this.calculators = calculators;
        this.enabled = false;
        this.values = new Map();
        this.structureId = structureId;
    }
    /**
     * @param {?} fields
     * @param {?} entities
     * @return {?}
     */
    calculate(fields, entities) {
        if (!this.enabled) {
            return [];
        }
        /** @type {?} */
        const calculations = new Map();
        this.calculators.forEach((/**
         * @param {?} calc
         * @return {?}
         */
        (calc) => {
            /** @type {?} */
            const aggregatedValues = calc.calculate(fields, entities);
            if (aggregatedValues) {
                Array.from(aggregatedValues.keys())
                    .forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    calculations.set(key, aggregatedValues.get(key));
                }));
            }
        }));
        if (calculations.size > 0) {
            return [
                new StructureAggregationsChangedAggregateEvent(this.structureId, calculations)
            ];
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    add() {
    }
    /**
     * @return {?}
     */
    remove() {
    }
    /**
     * @return {?}
     */
    update() {
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.values;
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.calculators;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AggregationManagerFactory {
    /**
     * @param {?} calculators
     */
    constructor(calculators) {
        this.calculators = calculators;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    create(structureId) {
        return new AggregationManager(structureId, this.calculators);
    }
}
AggregationManagerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AggregationManagerFactory.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [AGGREGATION_CALCULATORS,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregationManagerFactory.prototype.calculators;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} clazz
 * @return {?}
 */
function provideAggregationCalculator(clazz) {
    return {
        provide: AGGREGATION_CALCULATORS,
        useClass: clazz,
        multi: true
    };
}
/** @type {?} */
const aggregationProviders = [
    provideAggregationCalculator(BooleanAggregationCalculator),
    provideAggregationCalculator(DateAggregationCalculator),
    provideAggregationCalculator(NumberAggregationCalculator),
    provideAggregationCalculator(StringAggregationCalculator),
    provideAggregationCalculator(UnknownAggregationCalculator),
    AggregationManagerFactory
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureConfigFilterSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureFilterRepository
     */
    constructor(structureFilterRepository) {
        super();
        this.structureFilterRepository = structureFilterRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructureConfigFilterSetEvent) {
            this.structureFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    }
}
StructureConfigFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConfigFilterSetEventHandler.ctorParameters = () => [
    { type: StructureFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigFilterSetEventHandler.prototype.structureFilterRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureConfigSearchingSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSearchingRepository
     */
    constructor(structureSearchingRepository) {
        super();
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructureConfigSearchingSetEvent) {
            this.structureSearchingRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    }
}
StructureConfigSearchingSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConfigSearchingSetEventHandler.ctorParameters = () => [
    { type: StructureSearchingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureConfigQuickFilterSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureQuickFilterRepository
     */
    constructor(structureQuickFilterRepository) {
        super();
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructureConfigQuickFilterSetEvent) {
            this.structureQuickFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    }
}
StructureConfigQuickFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConfigQuickFilterSetEventHandler.ctorParameters = () => [
    { type: StructureQuickFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigQuickFilterSetEventHandler.prototype.structureQuickFilterRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFieldUiModel {
    /**
     * @param {?} id
     * @param {?} dataType
     */
    constructor(id, dataType) {
        this.id = id;
        this.dataType = dataType;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id.getId();
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.dataType;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiModel.prototype.id;
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiModel.prototype.dataType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFieldUiConverter {
    /**
     * @param {?} fields
     * @return {?}
     */
    convert(fields) {
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            return this.convertOne(field);
        }));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    convertOne(field) {
        return new StructureFieldUiModel(field.getId(), field.getDataType());
    }
}
StructureFieldUiConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFieldsInitedEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureFieldsRepository
     * @param {?} structureFieldUiConverter
     */
    constructor(structureFieldsRepository, structureFieldUiConverter) {
        super();
        this.structureFieldsRepository = structureFieldsRepository;
        this.structureFieldUiConverter = structureFieldUiConverter;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof FieldsInitedEvent) {
            /** @type {?} */
            const fields = this.structureFieldUiConverter.convert(event.getFields());
            this.structureFieldsRepository.next(event.getAggregateId(), fields);
        }
    }
}
StructureFieldsInitedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFieldsInitedEventHandler.ctorParameters = () => [
    { type: StructureFieldUiArchive },
    { type: StructureFieldUiConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldsInitedEventHandler.prototype.structureFieldsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFieldsInitedEventHandler.prototype.structureFieldUiConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationUiEventsRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onAggregationsChanged(structureId) {
        return this.domainEventBus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event instanceof StructureAggregationsChangedEvent)), filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())));
    }
}
StructureAggregationUiEventsRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregationUiEventsRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationUiEventsRepository.prototype.domainEventBus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OriginItemEntity {
    /**
     * @param {?} id
     * @param {?} rawData
     * @param {?} position
     * @param {?=} version
     */
    constructor(id, rawData, position, version = 0) {
        this.id = id;
        this.rawData = rawData;
        this.position = position;
        this.version = version;
    }
    /**
     * @return {?}
     */
    getData() {
        return this.rawData;
    }
    /**
     * @return {?}
     */
    getVersion() {
        return this.version;
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this.position;
    }
    /**
     * @return {?}
     */
    bumpVersion() {
        this.version += 1;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        this.position = position;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        const rawData = Object.assign({}, this.rawData);
        return new OriginItemEntity(this.id, rawData, this.version);
    }
}
if (false) {
    /** @type {?} */
    OriginItemEntity.prototype.id;
    /** @type {?} */
    OriginItemEntity.prototype.rawData;
    /**
     * @type {?}
     * @private
     */
    OriginItemEntity.prototype.version;
    /**
     * @type {?}
     * @private
     */
    OriginItemEntity.prototype.position;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSourceItemEditedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} beforeItem
     * @param {?} afterItem
     */
    constructor(aggregateId, beforeItem, afterItem) {
        super(aggregateId, 'StructureSourceItemEditedAggregateEvent');
        this.beforeItem = beforeItem;
        this.afterItem = afterItem;
    }
    /**
     * @return {?}
     */
    getBeforeItem() {
        return this.beforeItem;
    }
    /**
     * @return {?}
     */
    getAfterItem() {
        return this.afterItem;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedAggregateEvent.prototype.beforeItem;
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedAggregateEvent.prototype.afterItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureOriginChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} origin
     */
    constructor(aggregateId, origin) {
        super(aggregateId, 'StructureOriginChangedAggregateEvent');
        this.origin = origin;
    }
    /**
     * @return {?}
     */
    getOrigin() {
        return this.origin;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedAggregateEvent.prototype.origin;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceManager {
    constructor() {
        this.loading = false;
        this.fetched = false;
        this.entities = [];
        // Entities after filtering, searching
        this.preparedEntities = [];
        this.slicedEntities = [];
    }
    /**
     * @return {?}
     */
    isLoading() {
        return this.loading;
    }
    /**
     * @return {?}
     */
    isFetched() {
        return this.fetched;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setLoading(enabled) {
        this.loading = enabled;
    }
    /**
     * @param {?} ent
     * @return {?}
     */
    setEntities(ent) {
        this.entities = ent;
        this.recalculatePositions();
    }
    /**
     * @return {?}
     */
    getEntities() {
        return this.entities;
    }
    /**
     * @return {?}
     */
    setPreparedEntities() {
        this.preparedEntities = [...this.entities];
    }
    /**
     * @return {?}
     */
    getPreparedEntities() {
        return this.preparedEntities;
    }
    /**
     * @param {?} ent
     * @return {?}
     */
    setSlicedEntities(ent) {
        this.slicedEntities = ent;
    }
    /**
     * @return {?}
     */
    getSlicedEntities() {
        return this.slicedEntities;
    }
    /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items = [], structureId) {
        this.origin = this.convertItems(items);
        return this.createOriginChangedEvent(structureId);
    }
    /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    setConvertedOrigin(items = [], structureId) {
        this.origin = items;
        return this.createOriginChangedEvent(structureId);
    }
    /**
     * @return {?}
     */
    getOrigin() {
        return this.origin;
    }
    /**
     * @return {?}
     */
    getOriginSize() {
        return this.origin.length;
    }
    // editOriginItemByProperty(byField, value: any, field: Field, structureId: StructureId): AggregateEvent {
    //
    // }
    /**
     * @param {?} itemId
     * @param {?} value
     * @param {?} field
     * @param {?} structureId
     * @return {?}
     */
    editOriginItem(itemId, value, field, structureId) {
        /** @type {?} */
        const item = this.findOriginItem(itemId);
        /** @type {?} */
        const itemBeforeChange = item.clone();
        if (item) {
            item.rawData[field.getAccessor()] = value;
            item.bumpVersion();
        }
        return [
            new StructureSourceItemEditedAggregateEvent(structureId, itemBeforeChange, item.clone()),
            this.createOriginChangedEvent(structureId)
        ];
    }
    /**
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    removeOriginItem(itemId, structureId) {
        /** @type {?} */
        const index = this.findOriginItemIndex(itemId);
        if (index > -1) {
            this.origin.splice(index, 1);
            return [this.createOriginChangedEvent(structureId)];
        }
        return [];
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    convertItems(items) {
        return items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            return new OriginItemEntity(RandomStringGenerator.generate(), item, index);
        }));
    }
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    createOriginChangedEvent(structureId) {
        return new StructureOriginChangedAggregateEvent(structureId, this.origin);
    }
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    findOriginItem(itemId) {
        return this.origin.find((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.id === itemId));
    }
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    findOriginItemIndex(itemId) {
        return this.origin.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.id === itemId));
    }
    /**
     * @private
     * @return {?}
     */
    recalculatePositions() {
        this.entities.forEach((/**
         * @param {?} ent
         * @param {?} index
         * @return {?}
         */
        (ent, index) => {
            ent.setPosition(index);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.fetched;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.entities;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.preparedEntities;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.slicedEntities;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceManagerFactory {
    /**
     * @return {?}
     */
    createDefault() {
        return new SourceManager();
    }
    /**
     * @return {?}
     */
    create() {
        return new SourceManager();
    }
}
SourceManagerFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSorter {
    /**
     * @param {?} id
     * @param {?} field
     * @param {?=} direction
     */
    constructor(id, field, direction = true) {
        this.rank = 1;
        this.sorterId = id;
        this.field = field;
        this.direction = direction;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.sorterId;
    }
    /**
     * @return {?}
     */
    getRank() {
        return this.rank;
    }
    /**
     * @return {?}
     */
    getField() {
        return this.field;
    }
    /**
     * @return {?}
     */
    hasDirection() {
        return this.direction;
    }
    /**
     * @return {?}
     */
    changeDirection() {
        this.direction = !this.direction;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    setDirection(direction) {
        this.direction = direction;
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    sort(entities) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.sort((/**
         * @param {?} entityOne
         * @param {?} entityTwo
         * @return {?}
         */
        (entityOne, entityTwo) => {
            /** @type {?} */
            let valueOne = this.direction ? this.field.getValue(entityOne) : this.field.getValue(entityTwo);
            /** @type {?} */
            let valueTwo = this.direction ? this.field.getValue(entityTwo) : this.field.getValue(entityOne);
            if (this.field.getDataType() === DataType.NUMBER) {
                return this.sortNumber(valueOne, valueTwo);
            }
            else if (this.field.getDataType() === DataType.BOOLEAN) {
                return this.sortBoolean(valueOne, valueTwo);
            }
            else if (this.field.getDataType() === DataType.STRING) {
                return this.sortString(valueOne, valueTwo);
            }
            else {
                return this.sortUnknown(valueOne, valueTwo);
            }
        }));
    }
    /**
     * @private
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    sortString(strOne, strTwo) {
        /** @type {?} */
        const sureStrOne = '' + strOne;
        /** @type {?} */
        const sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    }
    /**
     * @private
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    sortNumber(numOne, numTwo) {
        /** @type {?} */
        const sureNumOne = +numOne;
        /** @type {?} */
        const sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    }
    /**
     * @private
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    sortBoolean(booleanOne, booleanTwo) {
        /** @type {?} */
        const sureBoolOne = !!booleanOne;
        /** @type {?} */
        const sureBoolTwo = !!booleanTwo;
        return (sureBoolOne === sureBoolTwo) ? 0 : sureBoolTwo ? -1 : 1;
    }
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    sortUnknown(a, b) {
        return 0;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.sorterId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.field;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.rank;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.direction;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SorterId {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.sorterId = id;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.sorterId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SorterId.prototype.sorterId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SorterCollection {
    /**
     * @param {?=} enabled
     * @param {?=} multi
     */
    constructor(enabled = false, multi = false) {
        this.sorters = new Map();
        this.enabled = enabled;
        this.multi = multi;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
        if (config && config.multiSorting !== undefined && config.multiSorting !== null) {
            this.multi = config.multiSorting;
            this.sorters.clear();
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    toggle(field) {
        /** @type {?} */
        const fieldId = field.getId();
        /** @type {?} */
        const sorter = this.sorters.get(fieldId.getId());
        if (sorter) {
            if (sorter.hasDirection()) {
                sorter.changeDirection();
            }
            else {
                this.delete(fieldId);
            }
        }
        else {
            this.add(field);
        }
    }
    /**
     * @param {?} field
     * @param {?} sortOrder
     * @return {?}
     */
    setSortOrder(field, sortOrder) {
        /** @type {?} */
        const fieldId = field.getId();
        /** @type {?} */
        const sorter = this.sorters.get(fieldId.getId());
        if (sortOrder === SortOrder.NONE) {
            this.delete(fieldId);
        }
        else if (sortOrder === SortOrder.ASC || sortOrder === SortOrder.DESC) {
            this.delete(fieldId);
            /** @type {?} */
            const direction = sortOrder === SortOrder.ASC;
            this.add(field, direction);
        }
    }
    /**
     * @param {?} field
     * @param {?=} direction
     * @return {?}
     */
    add(field, direction = true) {
        this.addSorter(field.getId(), new StructureSorter(new SorterId(RandomStringGenerator.generate()), field, direction));
    }
    /**
     * @param {?} fieldId
     * @param {?} sorter
     * @return {?}
     */
    addSorter(fieldId, sorter) {
        if (!this.multi) {
            this.sorters.clear();
        }
        this.sorters.set(fieldId.getId(), sorter);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    delete(fieldId) {
        this.sorters.delete(fieldId.getId());
    }
    /**
     * @return {?}
     */
    update() {
    }
    // TODO Remove the loop from sorter.sort
    /**
     * @param {?} entities
     * @return {?}
     */
    sort(entities) {
        /** @type {?} */
        const sorters = this.getAll();
        /** @type {?} */
        let sortedEntities = [...entities];
        for (let sorter of sorters) {
            sortedEntities = sorter.sort(sortedEntities);
        }
        return sortedEntities;
    }
    /**
     * @return {?}
     */
    getAll() {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.sorters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        (arr) => arr[1]))
            .sort((/**
         * @param {?} sorterOne
         * @param {?} sorterTwo
         * @return {?}
         */
        (sorterOne, sorterTwo) => {
            return sorterOne.getRank() - sorterTwo.getRank();
        }))
            .reverse();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SorterCollection.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    SorterCollection.prototype.multi;
    /**
     * @type {?}
     * @private
     */
    SorterCollection.prototype.sorters;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationAggregate {
    /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     * @param {?} selectedRows
     */
    constructor(selectedRows) {
        this.selectedRows = selectedRows;
    }
    /**
     * @return {?}
     */
    getSelectedRows() {
        return this.selectedRows;
    }
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    toggleRow(selectedRow) {
        if (this.selectedRows.length > 0) {
            if (this.selectedRows[0] === selectedRow) {
                this.selectedRows = [];
                return;
            }
        }
        this.selectedRows = [selectedRow];
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationAggregate.prototype.selectedRows;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnHeaderEntity {
    /**
     * @param {?} top
     * @param {?} bottom
     */
    constructor(top, bottom) {
        this.top = top;
        this.bottom = bottom;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHeaderTop(enabled) {
        this.top = enabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHeaderBottom(enabled) {
        this.bottom = enabled;
    }
    /**
     * @return {?}
     */
    isHeaderOnTop() {
        return this.top;
    }
    /**
     * @return {?}
     */
    isHeaderOnBottom() {
        return this.bottom;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnHeaderEntity.prototype.top;
    /**
     * @type {?}
     * @private
     */
    ColumnHeaderEntity.prototype.bottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaAggregate {
    /**
     * @param {?=} width
     * @param {?=} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.headerHeight = 28;
        this.pagerHeight = 35;
        this.active = false;
        this.horizontalGrid = true;
        this.verticalGrid = true;
        this.columnHeader = new ColumnHeaderEntity(true, false);
        this.theme = SchemaTheme.FABRIC;
        this.rowColoring = SchemaRowColoring.ODD;
        this.calculateContainerHeight();
    }
    /**
     * @return {?}
     */
    getRowColoring() {
        return this.rowColoring;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        this.height = height;
        this.calculateContainerHeight();
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this.theme = theme;
    }
    /**
     * @param {?} coloring
     * @return {?}
     */
    setRowColoring(coloring) {
        this.rowColoring = coloring;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return this.theme;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.height;
    }
    /**
     * @return {?}
     */
    getContainerHeight() {
        return this.height;
        // return this.containerHeight;
    }
    /**
     * @return {?}
     */
    getColumnHeader() {
        return this.columnHeader;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHeaderTop(enabled) {
        this.getColumnHeader().setHeaderTop(enabled);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHeaderBottom(enabled) {
        this.getColumnHeader().setHeaderBottom(enabled);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setVerticalGrid(enabled) {
        this.verticalGrid = enabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHorizontalGrid(enabled) {
        this.horizontalGrid = enabled;
    }
    /**
     * @return {?}
     */
    isVerticalGridEnabled() {
        return this.verticalGrid;
    }
    /**
     * @return {?}
     */
    isHorizontalGridEnabled() {
        return this.horizontalGrid;
    }
    /**
     * @private
     * @return {?}
     */
    getHeaderHeight() {
        return this.headerHeight;
    }
    /**
     * @private
     * @return {?}
     */
    getPagerHeight() {
        return this.pagerHeight;
    }
    /**
     * @private
     * @return {?}
     */
    calculateContainerHeight() {
        if (!this.height) {
            this.active = false;
            return;
        }
        else {
            this.active = true;
        }
        this.containerHeight = this.height - this.getHeaderHeight() - this.getPagerHeight();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.headerHeight;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.pagerHeight;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.active;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.horizontalGrid;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.verticalGrid;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.columnHeader;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.rowColoring;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.width;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.height;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchManager {
    constructor() {
        this.searchFields = [];
    }
    /**
     * @param {?} fields
     * @param {?} searchPhrase
     * @return {?}
     */
    addSearchPhrase(fields, searchPhrase) {
        if (!searchPhrase) {
            this.searchFields = [];
            return;
        }
        /** @type {?} */
        let searchableFields = fields.filter((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            return field.getDataType() === DataType.STRING;
        }));
        if (searchableFields.length === 0) {
            return;
        }
        this.searchFields = searchableFields;
        this.searchPhrase = searchPhrase;
    }
    /**
     * @return {?}
     */
    removeSearchFilters() {
        this.searchFields = [];
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    search(entities) {
        if (entities.length === 0 || this.searchFields.length === 0) {
            return entities;
        }
        /** @type {?} */
        let searchedItems = new Set();
        for (let i = 0; i < entities.length; i += 1) {
            for (let field of this.searchFields) {
                if (this.filterString(entities[i], field)) {
                    searchedItems.add(entities[i]);
                }
            }
        }
        return Array.from(searchedItems);
    }
    /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    filterString(item, field) {
        /** @type {?} */
        const value = field.getValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(this.searchPhrase.toLowerCase()) > -1;
        }
        else {
            return true;
        }
    }
    /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    filterNumber(item, field) {
        /** @type {?} */
        const numberValue = field.getValue(item);
        return numberValue > this.searchPhrase;
    }
    /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    filterBoolean(item, field) {
        /** @type {?} */
        const booleanValue = field.getValue(item);
        return booleanValue === this.searchPhrase;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchManager.prototype.searchFields;
    /**
     * @type {?}
     * @private
     */
    SearchManager.prototype.searchPhrase;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePreparedEntitiesSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} preparedItems
     */
    constructor(aggregateId, preparedItems) {
        super(aggregateId, 'StructurePreparedEntitiesSetAggregateEvent');
        this.preparedItems = preparedItems;
    }
    /**
     * @return {?}
     */
    getPreparedItems() {
        return this.preparedItems;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedEntitiesSetAggregateEvent.prototype.preparedItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldsInitedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} structureId
     * @param {?} columns
     * @param {?} fields
     */
    constructor(structureId, columns, // TODO merge
    fields) {
        super(structureId, 'FieldsInitedAggregateEvent');
        this.columns = columns;
        this.fields = fields;
    }
    /**
     * @return {?}
     */
    getColumns() {
        return this.columns;
    }
    /**
     * @return {?}
     */
    getFields() {
        return this.fields;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.fields;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let StructureAggregate = class StructureAggregate extends Aggregate {
    /**
     * @param {?} structureId
     * @param {?} pagingAggregate
     * @param {?} formationAggregate
     * @param {?} sourceManager
     * @param {?} verticalFormation
     * @param {?} aggregationManager
     * @param {?} sorterCollection
     * @param {?} filterCollection
     * @param {?} searchManager
     * @param {?} fieldCollection
     * @param {?} schema
     */
    constructor(structureId, pagingAggregate, formationAggregate, sourceManager, verticalFormation, aggregationManager, sorterCollection, filterCollection, searchManager, fieldCollection, schema) {
        super(structureId, 'StructureAggregate');
        this.pagingAggregate = pagingAggregate;
        this.formationAggregate = formationAggregate;
        this.sourceManager = sourceManager;
        this.verticalFormation = verticalFormation;
        this.aggregationManager = aggregationManager;
        this.sorterCollection = sorterCollection;
        this.filterManager = filterCollection;
        this.searchManager = searchManager;
        this.fieldCollection = fieldCollection;
        this.schema = schema;
    }
    /**
     * @return {?}
     */
    getVerticalFormation() {
        return this.verticalFormation;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setAggregationEnabled(enabled) {
        this.aggregationManager.setEnabled(enabled);
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setOrigin(items) {
        this.addEvent(this.sourceManager.setOrigin(items, this.getId()));
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @param {?} editParams
     * @return {?}
     */
    editItem(editParams) {
        /** @type {?} */
        const itemId = editParams.getItemId();
        /** @type {?} */
        const fieldId = editParams.getColumnFieldId();
        /** @type {?} */
        const field = this.fieldCollection.getField((/** @type {?} */ (fieldId)));
        /** @type {?} */
        const // as FieldId
        value = editParams.getValue();
        /** @type {?} */
        const editItemEvents = this.sourceManager.editOriginItem(itemId, value, field, this.getId());
        editItemEvents.forEach((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this.addEvent(e)));
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        this.getSchema().setHeight(height);
        /** @type {?} */
        const viewportHeight = this.getSchema().getContainerHeight();
        this.verticalFormation.setViewportHeight(viewportHeight);
        this.calculateSourceBasedOnVirtualScroll();
    }
    /**
     * @param {?} formation
     * @return {?}
     */
    setFormation(formation) {
        this.formationAggregate = formation;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setScrollPosition(position) {
        this.verticalFormation.setScrollPosition(position);
        this.calculateSourceBasedOnVirtualScroll();
    }
    /**
     * @return {?}
     */
    getFormation() {
        return this.formationAggregate;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    setSchema(schema) {
        this.schema = schema;
    }
    /**
     * @return {?}
     */
    getSchema() {
        return this.schema;
    }
    /**
     * @return {?}
     */
    getPaging() {
        return this.pagingAggregate;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    changePaging(config) {
        this.pagingAggregate.change(config);
        this.calculateSource();
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    setPaging(paging) {
        this.pagingAggregate = paging;
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.pagingAggregate.nextPage();
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.pagingAggregate.prevPage();
        this.calculateSource();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        /** @type {?} */
        const pagingEvents = this.pagingAggregate.changePageSize(pageSize);
        // TODO
        pagingEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.addEvent(event);
        }));
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @return {?}
     */
    getEntities() {
        return this.sourceManager.getSlicedEntities();
    }
    /**
     * @return {?}
     */
    getSource() {
        return this.sourceManager;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    createFields(columns) {
        this.fieldCollection.initFields(columns);
        /** @type {?} */
        const fields = this.fieldCollection.getAllFields();
        this.addEvent(new FieldsInitedAggregateEvent(this.getId(), columns, fields));
        return this.getEvents();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSortingConfig(config) {
        this.sorterCollection.setConfig(config);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    toggleSort(fieldId) {
        /** @type {?} */
        const field = this.fieldCollection.getField(fieldId);
        this.sorterCollection.toggle(field);
        this.calculateSource();
        return this.sorterCollection.getAll();
    }
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @return {?}
     */
    setSortOrder(fieldId, sortOrder) {
        /** @type {?} */
        const field = this.fieldCollection.getField(fieldId);
        this.sorterCollection.setSortOrder(field, sortOrder);
        this.calculateSource();
        return this.sorterCollection.getAll();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setFilterConfig(config) {
        this.filterManager.getSettings().setFilterConfig(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSearchingConfig(config) {
        this.filterManager.getSettings().setSearchingConfig(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setQuickFiltersConfig(config) {
        this.filterManager.getSettings().setQuickFiltersConfig(config);
    }
    /**
     * @param {?} fieldId
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    toggleFilter(fieldId, externalFilterId, filterValue) {
        /** @type {?} */
        const field = this.fieldCollection.getField(fieldId);
        // Field not found
        // TODO throw aggregate event
        if (field === undefined) {
            return [];
        }
        this.filterManager.addFilter(field, externalFilterId, filterValue);
        this.calculateSource();
        return [];
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    addSearchPhrase(phrase) {
        /** @type {?} */
        const fields = this.fieldCollection.getAllFields();
        this.searchManager.addSearchPhrase(fields, phrase);
        this.calculateSource();
        return [];
    }
    /**
     * @return {?}
     */
    removeSearchPhrase() {
        this.searchManager.removeSearchFilters();
        this.calculateSource();
        return [];
    }
    /**
     * @private
     * @return {?}
     */
    calculateSource() {
        if (!this.sourceManager.getOrigin() || !this.pagingAggregate) {
            return;
        }
        // TODO Refactor
        this.sourceManager.setEntities(this.sourceManager.getOrigin());
        // filtering
        this.sourceManager.setEntities(this.filterManager.filter(this.sourceManager.getEntities()));
        // search
        /** @type {?} */
        const searchedEntities = this.searchManager.search(this.sourceManager.getEntities());
        this.sourceManager.setEntities(searchedEntities);
        // sorting
        /** @type {?} */
        const ents = this.sorterCollection.sort(this.sourceManager.getEntities());
        this.sourceManager.setEntities(ents);
        // calculate filteredEntities
        this.sourceManager.setPreparedEntities();
        this.pagingAggregate.setSourceSize(this.sourceManager.getPreparedEntities().length);
        this.addEvent(new StructurePreparedEntitiesSetAggregateEvent(this.getId(), ents));
        // aggregations
        /** @type {?} */
        const aggregationEvents = this.aggregationManager.calculate(this.fieldCollection.getAllFields(), this.sourceManager.getEntities());
        aggregationEvents.forEach((/**
         * @param {?} ae
         * @return {?}
         */
        (ae) => {
            this.addEvent(ae);
        }));
        // paging
        this.sourceManager.setEntities(this.pagingAggregate.sample(this.sourceManager.getEntities()));
        this.verticalFormation.setSourceSize(this.sourceManager.getEntities().length);
        this.calculateSourceBasedOnVirtualScroll();
    }
    /**
     * @private
     * @return {?}
     */
    calculateSourceBasedOnVirtualScroll() {
        if (this.verticalFormation.isEnabled()) {
            /** @type {?} */
            const range = this.verticalFormation.getRange();
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities().slice(range.getStart(), range.getEnd()));
        }
        else {
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities());
        }
    }
};
StructureAggregate.ctorParameters = () => [
    { type: StructureId },
    { type: PagingAggregate },
    { type: FormationAggregate },
    { type: SourceManager },
    { type: VerticalFormation },
    { type: AggregationManager },
    { type: SorterCollection },
    { type: FilterManager },
    { type: SearchManager },
    { type: FieldCollection },
    { type: SchemaAggregate }
];
StructureAggregate = __decorate([
    RootAggregate,
    __metadata("design:paramtypes", [StructureId,
        PagingAggregate,
        FormationAggregate,
        SourceManager,
        VerticalFormation,
        AggregationManager,
        SorterCollection,
        FilterManager,
        SearchManager,
        FieldCollection,
        SchemaAggregate])
], StructureAggregate);
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.formationAggregate;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.schema;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.pagingAggregate;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.sourceManager;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.sorterCollection;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.filterManager;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.searchManager;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.verticalFormation;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.fieldCollection;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.aggregationManager;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaAggregateFactory {
    /**
     * @return {?}
     */
    create() {
        return new SchemaAggregate();
    }
}
SchemaAggregateFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationAggregateFactory {
    /**
     * @return {?}
     */
    create() {
        return new FormationAggregate([]);
    }
}
FormationAggregateFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchManagerFactory {
    /**
     * @return {?}
     */
    create() {
        return new SearchManager();
    }
}
SearchManagerFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregateFactory extends AggregateFactory {
    /**
     * @param {?} pagingAggregateFactory
     * @param {?} sourceManagerFactory
     * @param {?} formationAggregateFactory
     * @param {?} verticalFormationFactory
     * @param {?} aggregationManagerFactory
     * @param {?} filterManagerFactory
     * @param {?} searchManagerFactory
     * @param {?} fieldCollectionFactory
     * @param {?} schemaAggregateFactory
     */
    constructor(pagingAggregateFactory, sourceManagerFactory, formationAggregateFactory, verticalFormationFactory, aggregationManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory, schemaAggregateFactory) {
        super();
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceManagerFactory = sourceManagerFactory;
        this.formationAggregateFactory = formationAggregateFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.aggregationManagerFactory = aggregationManagerFactory;
        this.filterManagerFactory = filterManagerFactory;
        this.searchManagerFactory = searchManagerFactory;
        this.fieldCollectionFactory = fieldCollectionFactory;
        this.schemaAggregateFactory = schemaAggregateFactory;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    create(structureId) {
        /** @type {?} */
        const paging = this.pagingAggregateFactory.createDefault();
        /** @type {?} */
        const source = this.sourceManagerFactory.createDefault();
        /** @type {?} */
        const verticalFormation = this.verticalFormationFactory.create();
        /** @type {?} */
        const formationAggregate = this.formationAggregateFactory.create();
        /** @type {?} */
        const sorterContainer = new SorterCollection();
        /** @type {?} */
        const filterContainer = this.filterManagerFactory.create(false);
        /** @type {?} */
        const fieldContainer = this.fieldCollectionFactory.create();
        /** @type {?} */
        const aggregationManager = this.aggregationManagerFactory.create(structureId);
        /** @type {?} */
        const schema = this.schemaAggregateFactory.create();
        /** @type {?} */
        const searchManager = this.searchManagerFactory.create();
        return new StructureAggregate(structureId, paging, formationAggregate, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, searchManager, fieldContainer, schema);
    }
}
StructureAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregateFactory.ctorParameters = () => [
    { type: PagingAggregateFactory },
    { type: SourceManagerFactory },
    { type: FormationAggregateFactory },
    { type: VerticalFormationFactory },
    { type: AggregationManagerFactory },
    { type: FilterManagerFactory },
    { type: SearchManagerFactory },
    { type: FieldCollectionFactory },
    { type: SchemaAggregateFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.pagingAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.sourceManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.formationAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.verticalFormationFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.aggregationManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.filterManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.searchManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.fieldCollectionFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.schemaAggregateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetPagingCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetPagingCommand;
    }
    /**
     * @param {?} structureAggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structureAggregate, command) {
        /** @type {?} */
        const pagingConfig = command.getPagingConfig();
        structureAggregate.changePaging(pagingConfig);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new PagingSetEvent(command.getAggregateId()));
    }
}
SetPagingCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetPagingCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetPagingCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetPagingCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NextPageCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return NextPageCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        // missing implementation
        aggregate.nextPage();
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new NextPageEvent(command.getAggregateId()));
    }
}
NextPageCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NextPageCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NextPageCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PrevPageCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return PrevPageCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        structure.prevPage();
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new PrevPageEvent(command.getAggregateId()));
    }
}
PrevPageCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PrevPageCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PrevPageCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangePagesizeCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return ChangePagesizeCommand;
    }
    /**
     * @param {?} structureAggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structureAggregate, command) {
        /** @type {?} */
        const pageSize = command.getPageSize();
        structureAggregate.changePageSize(pageSize);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        ((/** @type {?} */ (aggregateEvents))).forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            ((/** @type {?} */ (event))).aggregateId = aggregate.getId();
        }));
        this.publishAggregateEvents(aggregateEvents, command);
    }
    /**
     * @private
     * @param {?} events
     * @param {?} command
     * @return {?}
     */
    publishAggregateEvents(events, command) {
        for (let event of events) {
            this.publishAggregateEvent(event, command);
        }
    }
    /**
     * @private
     * @param {?} event
     * @param {?} command
     * @return {?}
     */
    publishAggregateEvent(event, command) {
        switch (event.getType()) {
            case 'PageChangedAggregateEvent':
                /** @type {?} */
                const pageChangedEvent = new PageChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pageChangedEvent);
                break;
            case 'PagesizeChangedAggregateEvent':
                /** @type {?} */
                const pagesizeChangedEvent = new PagesizeChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pagesizeChangedEvent);
                break;
            default:
                break;
        }
    }
}
ChangePagesizeCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ChangePagesizeCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangePagesizeCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    ChangePagesizeCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const commandProviders$1 = [
    PagingDispatcher
];
/** @type {?} */
const readProviders$1 = [
    PagingRepository
];
/** @type {?} */
const pagingCommandHandlers = [
    ...HermesModule.registerCommandHandler(SetPagingCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(NextPageCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(PrevPageCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(ChangePagesizeCommandHandler, 'StructureAggregate')
];
/** @type {?} */
const pagingProviders = [
    ...commandProviders$1,
    ...readProviders$1,
    PagingAggregateFactory,
    PagingConverter,
    PagingCommandService,
    PagingReadModelService,
    PagingEventService
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaVerticalGridCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetSchemaVerticalGridCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        /** @type {?} */
        const schema = aggregate.getSchema();
        schema.setVerticalGrid(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SchemaVerticalGridSetEvent(command.getAggregateId()));
    }
}
SetSchemaVerticalGridCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSchemaVerticalGridCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaVerticalGridCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaHorizontalGridCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetSchemaHorizontalGridCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const schema = aggregate.getSchema();
        /** @type {?} */
        const enabled = command.isEnabled();
        schema.setHorizontalGrid(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SchemaHorizontalGridSetEvent(command.getAggregateId()));
    }
}
SetSchemaHorizontalGridCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSchemaHorizontalGridCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaHorizontalGridCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaThemeCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetSchemaThemeCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const schema = structure.getSchema();
        /** @type {?} */
        const theme = command.getTheme();
        schema.setTheme(theme);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SchemaThemeSetEvent(command.getAggregateId()));
    }
}
SetSchemaThemeCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSchemaThemeCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaThemeCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetSchemaThemeCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangeSchemaBottomHeaderCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return ChangeSchemaBottomHeaderCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const schema = structure.getSchema();
        /** @type {?} */
        const enabled = command.isEnabled();
        schema.setHeaderBottom(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SchemaBottomHeaderChangedEvent(command.getAggregateId()));
    }
}
ChangeSchemaBottomHeaderCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ChangeSchemaBottomHeaderCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaBottomHeaderCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangeSchemaTopHeaderCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return ChangeSchemaTopHeaderCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const schema = aggregate.getSchema();
        /** @type {?} */
        const enabled = command.isEnabled();
        schema.setHeaderTop(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SchemaTopHeaderChangedEvent(command.getAggregateId()));
    }
}
ChangeSchemaTopHeaderCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ChangeSchemaTopHeaderCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaTopHeaderCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaTopHeaderCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetRowColoringCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetRowColoringCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        // missing implementation
        /** @type {?} */
        const schema = structure.getSchema();
        /** @type {?} */
        const coloring = command.getColoring();
        schema.setRowColoring(coloring);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new RowColoringSetEvent(command.getAggregateId()));
    }
}
SetRowColoringCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetRowColoringCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowColoringCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetSchemaCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const height = command.getHeight();
        aggregate.setHeight(height);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SchemaSetEvent(command.getAggregateId()));
    }
}
SetSchemaCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSchemaCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const commandProviders$2 = [
    SchemaDispatcher,
    SchemaAggregateFactory
];
/** @type {?} */
const readProviders$2 = [
    SchemaRepository
];
/** @type {?} */
const schemaCommandHandlers = [
    ...HermesModule.registerCommandHandler(SetSchemaCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetSchemaVerticalGridCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetSchemaHorizontalGridCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetSchemaThemeCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(ChangeSchemaBottomHeaderCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(ChangeSchemaTopHeaderCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetRowColoringCommandHandler, 'StructureAggregate')
];
/** @type {?} */
const schemaProviders = [
    ...commandProviders$2,
    ...readProviders$2,
    SchemaConverter,
    SchemaCommandService,
    SchemaReadModelService
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetFormationCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetFormationCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        // missing implementation
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new FormationSetEvent(command.getAggregateId()));
    }
}
SetFormationCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetFormationCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetFormationCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleSelectedRowCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return ToggleSelectedRowCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const formation = aggregate.getFormation();
        /** @type {?} */
        const selectedRow = command.getSelectedRow();
        formation.toggleRow(selectedRow);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SelectedRowToggledEvent(command.getAggregateId()));
    }
}
ToggleSelectedRowCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToggleSelectedRowCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const commandProviders$3 = [
    FormationDispatcher,
    FormationAggregateFactory
];
/** @type {?} */
const readProviders$3 = [
    FormationRepository
];
/** @type {?} */
const formationCommandHandlers = [
    ...HermesModule.registerCommandHandler(SetFormationCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(ToggleSelectedRowCommandHandler, 'StructureAggregate')
];
/** @type {?} */
const formationProviders = [
    ...commandProviders$3,
    ...readProviders$3,
    FormationEventService,
    FormationConverter,
    FormationCommandService,
    FormationReadModelService
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetOriginCommandHandler {
    /**
     * @param {?} structureSourceDomainEventPublisher
     */
    constructor(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetOriginCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const items = command.getItems();
        structure.setOrigin(items);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
}
SetOriginCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetOriginCommandHandler.ctorParameters = () => [
    { type: StructureSourceDomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetOriginCommandHandler.prototype.structureSourceDomainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureEditSourceItemCommandHandler {
    /**
     * @param {?} structureSourceDomainEventPublisher
     */
    constructor(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return StructureEditSourceItemCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const params = command.getParams();
        structure.editItem(params);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
}
StructureEditSourceItemCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureEditSourceItemCommandHandler.ctorParameters = () => [
    { type: StructureSourceDomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.structureSourceDomainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureOriginChangedEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureSourceOriginRepository) {
        super();
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof OriginSetEvent) {
            /** @type {?} */
            const origin = event.getOrigin();
            this.structureSourceOriginRepository.setOrigin(origin, event.getAggregateId());
        }
    }
}
StructureOriginChangedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureOriginChangedEventHandler.ctorParameters = () => [
    { type: StructureSourceOriginRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedEventHandler.prototype.structureSourceOriginRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceRepository {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    select(structureId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getId().toString() === structureId.toString())), map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getSchema())));
    }
}
SourceRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceRepository.ctorParameters = () => [
    { type: StructureRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceRepository.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceSetLoadingCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SourceSetLoadingCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        /** @type {?} */
        const source = aggregate.getSource();
        source.setLoading(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SetSourceLoadingEvent(command.getAggregateId()));
    }
}
SourceSetLoadingCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceSetLoadingCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceSetLoadingCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructurePreparedItemsEventHandler extends DomainEventHandler {
    /**
     * @param {?} structurePreparedItemsRepository
     */
    constructor(structurePreparedItemsRepository) {
        super();
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructurePreparedEntitiesSetEvent) {
            /** @type {?} */
            const preparedItems = event.getPreparedItems();
            this.structurePreparedItemsRepository.setItems(preparedItems, event.getAggregateId());
        }
    }
}
StructurePreparedItemsEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructurePreparedItemsEventHandler.ctorParameters = () => [
    { type: StructurePreparedItemsRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsEventHandler.prototype.structurePreparedItemsRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const commandProviders$4 = [
    SourceDispatcher,
    SourceManagerFactory,
    StructureSourceDomainEventPublisher
];
/** @type {?} */
const readProviders$4 = [
    SourceRepository,
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureOriginChangedEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructurePreparedItemsEventHandler,
        multi: true
    },
    StructureSourceOriginRepository,
    StructurePreparedItemsRepository
];
/** @type {?} */
const sourceCommandHandlers = [
    ...HermesModule.registerCommandHandler(SourceSetLoadingCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetOriginCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureEditSourceItemCommandHandler, 'StructureAggregate')
];
/** @type {?} */
const sourceProviders = [
    ...commandProviders$4,
    ...readProviders$4,
    SourceConverter,
    SourceCommandService,
    SourceReadModelService,
    SourceEventService
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetSearchPhraseCommandHandler {
    /**
     * @param {?} structureSourceDomainEventPublisher
     * @param {?} domainEventPublisher
     */
    constructor(structureSourceDomainEventPublisher, domainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return StructureSetSearchPhraseCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const phrase = command.getPhrase();
        aggregate.addSearchPhrase(phrase);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const phrase = command.getPhrase();
        this.domainEventPublisher.publish(new StructureSearchPhraseSetDomainEvent(command.getAggregateId(), phrase));
        this.structureSourceDomainEventPublisher.publish(aggregate.getEvents());
    }
}
StructureSetSearchPhraseCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetSearchPhraseCommandHandler.ctorParameters = () => [
    { type: StructureSourceDomainEventPublisher },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetSearchPhraseCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetSearchPhraseCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSortOrderCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetSortOrderCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const structureId = command.getAggregateId();
        /** @type {?} */
        const compositionId = command.getCompositionId();
        /** @type {?} */
        const fieldId = command.getFieldId();
        /** @type {?} */
        const sortOrder = command.getSortOrder();
        /** @type {?} */
        const sorters = structure.setSortOrder(fieldId, sortOrder);
        this.publishSortEvent(structureId, compositionId, fieldId, sorters);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
    }
    /**
     * @private
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    publishSortEvent(aggregateId, compositionId, fieldId, sorters) {
        /** @type {?} */
        const directions = sorters.map((/**
         * @param {?} sorter
         * @return {?}
         */
        (sorter) => {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        }));
        this.domainEventPublisher.publish(new SortOrderSetEvent(aggregateId, compositionId, directions));
    }
}
SetSortOrderCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSortOrderCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetRowHeightCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetRowHeightCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const rowHeight = command.getRowHeight();
        /** @type {?} */
        const formation = structure.getVerticalFormation();
        formation.setRowHeight(rowHeight);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new RowHeightSetEvent(command.getAggregateId()));
    }
}
SetRowHeightCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetRowHeightCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowHeightCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchPhraseSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSearchPhraseRepository
     */
    constructor(structureSearchPhraseRepository) {
        super();
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructureSearchPhraseSetDomainEvent) {
            this.structureSearchPhraseRepository.setPhrase(event.getPhrase(), event.getAggregateId());
        }
    }
}
StructureSearchPhraseSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchPhraseSetEventHandler.ctorParameters = () => [
    { type: StructureSearchPhraseRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseSetEventHandler.prototype.structureSearchPhraseRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const commandProviders$5 = [
    ...inMemoryStructureCommandProviders,
    VerticalFormationFactory,
    FieldCollectionFactory,
    FilterManagerFactory,
    SearchManagerFactory,
    FieldIdGenerator,
    StructureFilterCommandService,
    FieldFactory,
    StructureSearchDispatcher,
    ...aggregationProviders
];
/** @type {?} */
const readProviders$5 = [
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigSearchingSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigQuickFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureFieldsInitedEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureSearchPhraseSetEventHandler,
        multi: true
    },
    ...inMemoryStructureReadProviders,
    VerticalFormationConverter,
    VerticalFormationRepository,
    StructureFilterReadModelRepository,
    StructureFilterRepository,
    StructureQuickFilterRepository,
    StructureSearchingRepository,
    StructureSearchReadModelRepository,
    StructureFieldUiArchive,
    StructureFieldUiConverter,
    StructureFieldUiRepository,
    StructureSearchPhraseRepository,
    StructureSearchHighlightArchive,
    StructureSearchPlaceholderArchive
];
/** @type {?} */
const structureCommandHandlers = [
    ...HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(InitFieldsCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(ToggleSortCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetSortingCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetConfigFilterCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetConfigSearchingCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetConfigQuickFilterCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureToggleFilterCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetAggregationEnabledCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetSearchPhraseCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetSortOrderCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetRowHeightCommandHandler, 'StructureAggregate')
];
/** @type {?} */
const structureProviders = [
    ...inMemoryStructureProviders,
    ...commandProviders$5,
    ...readProviders$5,
    StructureSearchEventService,
    StructureAggregationCommandService,
    StructureAggregationUiEventsRepository,
    StructureAggregateFactory,
    StructureConverter,
    StructureReadModelService,
    StructureCommandService,
    ...pagingProviders,
    ...schemaProviders,
    ...formationProviders,
    ...sourceProviders
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsoleLogger extends Logger {
    /**
     * @param {?} text
     * @return {?}
     */
    warn(text) {
        console.warn(text);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    error(text) {
        console.error(text);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoggerModule {
}
LoggerModule.decorators = [
    { type: NgModule, args: [{
                providers: [{
                        provide: Logger,
                        useClass: ConsoleLogger
                    }]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ItemEntityFactory {
    /**
     * @param {?} data
     * @return {?}
     */
    create(data) {
        if (Array.isArray(data)) {
            return this.createEntities(data);
        }
        else {
            return this.createEntity(data);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    createEntities(data) {
        return data.map((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.createEntity(data)));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    createEntity(item) {
        if (item instanceof OriginItemEntity) {
            return new ItemEntity(item.rawData, item.getPosition(), item.id, item.getVersion());
        }
        else {
            return new ItemEntity(item, 0);
        }
    }
}
ItemEntityFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureTopPanelComponent extends SmartComponent {
    constructor() {
        super();
    }
}
StructureTopPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-top-panel',
                template: `
		
		<gui-structure-search-bar></gui-structure-search-bar>
		
		
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureTopPanelComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSearchComponent extends SmartComponent {
    /**
     * @param {?} formBuilder
     * @param {?} renderer2
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} structureReadModelService
     * @param {?} structureSearchPhraseRepository
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(formBuilder, renderer2, changeDetectorRef, structureId, structureCommandService, structureReadModelService, structureSearchPhraseRepository, structureSearchPlaceholderArchive) {
        super();
        this.formBuilder = formBuilder;
        this.renderer2 = renderer2;
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureReadModelService = structureReadModelService;
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
        this.placeholder = 'Search';
        /** @type {?} */
        let controlsConfig = {};
        controlsConfig[StructureSearchComponent.FORM_SEARCH_NAME] = '';
        this.searchForm = this.formBuilder.group(controlsConfig);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.observeChanges();
        this.structureSearchPlaceholderArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} placeholder
         * @return {?}
         */
        (placeholder) => {
            this.placeholder = placeholder;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureSearchPhraseRepository
            .onPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            if (phrase === undefined) {
                phrase = null;
            }
            /** @type {?} */
            let controlsConfig = {};
            controlsConfig[StructureSearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== this.searchForm.get([StructureSearchComponent.FORM_SEARCH_NAME]).value) {
                this.searchForm.setValue(controlsConfig);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            this.renderer2.setStyle(this.formRef.nativeElement, 'height', '30px');
        }));
    }
    /**
     * @private
     * @return {?}
     */
    observeChanges() {
        this.searchForm
            .controls['searchPhrase']
            .valueChanges
            .pipe(debounceTime(200), this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            this.structureCommandService.search(phrase);
        }));
    }
}
StructureSearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
StructureSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-search-bar',
                template: `
		<form #formRef
			  [formGroup]="searchForm">
			<div class="gui-search-icon"></div>
			<input formControlName="searchPhrase" [placeholder]="placeholder">
		</form>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureSearchComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: StructureCommandService },
    { type: StructureReadModelService },
    { type: StructureSearchPhraseRepository },
    { type: StructureSearchPlaceholderArchive }
];
StructureSearchComponent.propDecorators = {
    formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.FORM_SEARCH_NAME;
    /** @type {?} */
    StructureSearchComponent.prototype.formRef;
    /** @type {?} */
    StructureSearchComponent.prototype.searchForm;
    /** @type {?} */
    StructureSearchComponent.prototype.placeholder;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureSearchPhraseRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureSearchPlaceholderArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureTopPanelModule {
}
StructureTopPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    StructureTopPanelComponent,
                    StructureSearchComponent
                ],
                exports: [
                    StructureTopPanelComponent,
                    StructureSearchComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureEmptySourceComponent {
}
StructureEmptySourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-empty-source',
                template: "There are no items to show.\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-empty-source]': 'true'
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnConfigTriggerComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} structureCommandService
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} structureColumnConfigService
     */
    constructor(elementRef, changeDetectorRef, structureCommandService, structureColumnMenuConfigArchive, structureColumnConfigService) {
        super();
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureColumnMenuConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.config = config;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    openConfigDialog() {
        this.structureColumnConfigService.open(this.headerDialogContainer, this.column);
    }
    /**
     * @return {?}
     */
    closeConfigDialog() {
        this.structureColumnConfigService.close();
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
}
StructureColumnConfigTriggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-trigger',
                template: `
		<div #headerDialogContainer
			 *ngIf="isEnabled()"
			 class="gui-header-menu-icon-wrapper"
			 (click)="openConfigDialog()">
			<span class="gui-header-menu-icon"></span>
		</div>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigTriggerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: StructureCommandService },
    { type: StructureColumnMenuConfigArchive },
    { type: StructureColumnConfigService }
];
StructureColumnConfigTriggerComponent.propDecorators = {
    headerDialogContainer: [{ type: ViewChild, args: ['headerDialogContainer', { static: false },] }],
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigTriggerComponent.prototype.headerDialogContainer;
    /** @type {?} */
    StructureColumnConfigTriggerComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigTriggerComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.structureColumnMenuConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.structureColumnConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnConfigSortComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureCommandService
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, structureCommandService, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
        this.compositionReadModelService = compositionReadModelService;
        this.placement = Placement.Right;
        this.status = SortOrder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sortStatus = this.column.getSortStatus();
        this.compositionReadModelService
            .onSortOrder(this.column.getFieldId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} sortStatus
         * @return {?}
         */
        (sortStatus) => {
            this.sortStatus = sortStatus;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    isAscSort() {
        return this.sortStatus === SortOrder.ASC;
    }
    /**
     * @return {?}
     */
    isDescSort() {
        return this.sortStatus === SortOrder.DESC;
    }
    /**
     * @return {?}
     */
    isNoneSort() {
        return this.sortStatus === SortOrder.NONE;
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    setSortOrder(sort) {
        event.stopPropagation();
        this.structureCommandService.setSortOrder(this.column.getFieldId(), sort);
    }
}
StructureColumnConfigSortComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-sort',
                template: `

		<gui-dropdown [placement]="placement"
					  [dropdownText]="'Column Sort'"
					  [width]="225"
					  [showOnHover]="true"
					  class="gui-header-menu-dropdown">

			<gui-dropdown-item (click)="setSortOrder(status.ASC)"
							   [class.gui-header-item-active]="isAscSort()">
				<div class="gui-sort-title">Ascending<span class="gui-sort gui-sort-asc"></span></div>
			</gui-dropdown-item>

			<gui-dropdown-item (click)="setSortOrder(status.DESC)"
							   [class.gui-header-item-active]="isDescSort()">
				<div class="gui-sort-title">Descending<span class="gui-sort gui-sort-desc"></span></div>
			</gui-dropdown-item>

			<gui-dropdown-item (click)="setSortOrder(status.NONE)"
							   [class.gui-header-item-active]="isNoneSort()">
				None
			</gui-dropdown-item>

		</gui-dropdown>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigSortComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureCommandService },
    { type: CompositionReadModelService }
];
StructureColumnConfigSortComponent.propDecorators = {
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.placement;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.status;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.compositionReadModelService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnConfigColumnHideComponent {
    /**
     * @param {?} compositionCommandService
     * @param {?} structureColumnConfigService
     */
    constructor(compositionCommandService, structureColumnConfigService) {
        this.compositionCommandService = compositionCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    hideColumn(column) {
        this.compositionCommandService.disableColumn(column.getColumnId());
        this.structureColumnConfigService.close();
    }
}
StructureColumnConfigColumnHideComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-column-hide',
                template: `

		<div class="gui-header-menu-item"
			 (click)="hideColumn(column)">
			Hide Column
		</div>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigColumnHideComponent.ctorParameters = () => [
    { type: CompositionCommandService },
    { type: StructureColumnConfigService }
];
StructureColumnConfigColumnHideComponent.propDecorators = {
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnHideComponent.prototype.column;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnHideComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnHideComponent.prototype.structureColumnConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnConfigColumnMoveComponent {
    /**
     * @param {?} compositionCommandService
     * @param {?} structureColumnConfigService
     */
    constructor(compositionCommandService, structureColumnConfigService) {
        this.compositionCommandService = compositionCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    moveLeft(column) {
        this.compositionCommandService.moveLeft(column.getColumnId());
        this.structureColumnConfigService.close();
    }
    /**
     * @param {?} column
     * @return {?}
     */
    moveRight(column) {
        this.compositionCommandService.moveRight(column.getColumnId());
        this.structureColumnConfigService.close();
    }
}
StructureColumnConfigColumnMoveComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-column-move',
                template: `
		<div class="gui-header-menu-column-move">
			<div class="gui-header-menu-column-move-left"
				 (click)="moveLeft(column)">
				Move Left
			</div>

			<div class="gui-header-menu-column-move-right"
				 (click)="moveRight(column)">
				Move Right
			</div>
		</div>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigColumnMoveComponent.ctorParameters = () => [
    { type: CompositionCommandService },
    { type: StructureColumnConfigService }
];
StructureColumnConfigColumnMoveComponent.propDecorators = {
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnMoveComponent.prototype.column;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnMoveComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnMoveComponent.prototype.structureColumnConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnManagerComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} compositionId
     * @param {?} compositionCommandService
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, compositionId, compositionCommandService, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.compositionCommandService = compositionCommandService;
        this.compositionReadModelService = compositionReadModelService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionReadModelService
            .onAllColumns(this.compositionId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
            this.enabledColumnsCount = this.columns
                .map((/**
             * @param {?} c
             * @return {?}
             */
            (c) => +c.isEnabled()))
                .reduce((/**
             * @param {?} accumulator
             * @param {?} currentValue
             * @return {?}
             */
            (accumulator, currentValue) => accumulator + currentValue));
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} column
     * @return {?}
     */
    toggleColumn(column) {
        event.stopPropagation();
        if (column.isEnabled()) {
            this.compositionCommandService.disableColumn(column.getColumnId(), this.compositionId);
        }
        else {
            this.compositionCommandService.enableColumn(column.getColumnId(), this.compositionId);
        }
    }
}
StructureColumnManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-manager',
                template: `

		<ol>
			<li *ngFor="let column of columns"
				(click)="toggleColumn(column)">

				<gui-checkbox [checked]="column.isEnabled()"
							  [disabled]="enabledColumnsCount === 1 && column.isEnabled()">

					<ng-container
							*ngTemplateOutlet="column.viewTemplate;
											context: column.context">
					</ng-container>
				</gui-checkbox>

			</li>
		</ol>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-column-manager]': 'true'
                }
            }] }
];
/** @nocollapse */
StructureColumnManagerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CompositionId },
    { type: CompositionCommandService },
    { type: CompositionReadModelService }
];
if (false) {
    /** @type {?} */
    StructureColumnManagerComponent.prototype.columns;
    /** @type {?} */
    StructureColumnManagerComponent.prototype.enabledColumnsCount;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionReadModelService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureMenuColumnManagerComponent {
}
StructureMenuColumnManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-menu-column-manager',
                template: "<gui-structure-column-manager>\n\n</gui-structure-column-manager>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-menu-column-manager]': 'true'
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations = [
    StructureColumnManagerComponent,
    StructureDialogColumnManagerComponent,
    StructureMenuColumnManagerComponent
];
class StructureColumnManagerModule {
}
StructureColumnManagerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    fabricImports
                ],
                declarations: declarations,
                exports: declarations,
                entryComponents: [
                    StructureColumnManagerComponent,
                    StructureDialogColumnManagerComponent,
                    StructureMenuColumnManagerComponent
                ],
                providers: [
                    StructureDialogColumnManagerService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$1 = [
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureColumnConfigSortComponent,
    StructureColumnConfigColumnHideComponent,
    StructureColumnConfigColumnMoveComponent
];
class StructureColumnMenuModule {
}
StructureColumnMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    fabricImports,
                    StructureColumnManagerModule
                ],
                declarations: declarations$1,
                exports: declarations$1
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationPanelComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureAggregationUiEventsRepository
     * @param {?} sourceReadModelService
     * @param {?} compositionQueryService
     */
    constructor(changeDetectorRef, structureId, structureAggregationUiEventsRepository, sourceReadModelService, compositionQueryService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureAggregationUiEventsRepository = structureAggregationUiEventsRepository;
        this.sourceReadModelService = sourceReadModelService;
        this.compositionQueryService = compositionQueryService;
        this.sourceEmpty = false;
        this.structureAggregationUiEventsRepository
            .onAggregationsChanged(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.aggregations = event.getAggregations();
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sourceReadModelService
            .onEntitiesSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.sourceEmpty = size === 0;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.headerColumns = columns;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} aggregation
     * @return {?}
     */
    isAggregateTypePresent(aggregation) {
        return aggregation !== undefined && aggregation !== null;
    }
}
StructureAggregationPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-aggregation-panel',
                template: `

		<ng-container *ngIf="enabled && aggregations && !sourceEmpty">

			<div *ngFor="let column of headerColumns"
				 [style.width.px]="column.width"
				 class="gui-header-cell gui-structure-aggregation-cell">

				<ng-container *ngIf="aggregations && !!aggregations.get(column.getFieldId().getId())">

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).count)"
						 class="gui-structure-aggregation-value">
						<span>Count</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).count }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).distinct)"
						 class="gui-structure-aggregation-value">
						<span [gui-tooltip]="'Distinct'">Dist</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).distinct }}</span>
					</div>

					<div *ngIf=" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).sum)"
						 class="gui-structure-aggregation-value">

						<span>
							<!--							<span [gui-tooltip]="'Sum'" -->
							<!--								  class="gui-math-symbol">&sum;</span>-->
							Sum
						</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).sum }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).average)"
						 class="gui-structure-aggregation-value">

						<!--						<div [gui-tooltip]="'Average'"-->
						<!--							 class="gui-mean">-->
						<!--							<span>_</span><span>X</span>-->
						<!--						</div>-->
						<span [gui-tooltip]="'Average'">Avg</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).average }}</span>
					</div>

					<div *ngIf=" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).min)"
						 class="gui-structure-aggregation-value">

						<!--						<div [gui-tooltip]="'Min'">-->
						<!--							<span class="gui-math-symbol">&and;</span>-->
						<!--						</div>-->
						<span [gui-tooltip]="'Min'">
							Min
						</span>

						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).min }}</span>
					</div>

					<div *ngIf=" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).max)"
						 class="gui-structure-aggregation-value">

						<!--						<div [gui-tooltip]="'Max'">-->
						<!--							<span class="gui-math-symbol">&or;</span>-->
						<!--						</div>-->

						<span [gui-tooltip]="'Max'">
							Max
						</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).max }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).median)"
						 class="gui-structure-aggregation-value">

						<!--						<div [gui-tooltip]="'Median'"-->
						<!--							 class="gui-median">-->
						<!--							<span>~</span>-->
						<!--							<span>X</span>-->
						<!--						</div>-->

						<span [gui-tooltip]="'Median'">Med</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).median }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).truthy)"
						 class="gui-structure-aggregation-value">
						<span>Truthy</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).truthy }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).falsy)"
						 class="gui-structure-aggregation-value">
						<span>Falsy</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).falsy }}</span>
					</div>

				</ng-container>
			</div>

		</ng-container>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureAggregationPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: StructureAggregationUiEventsRepository },
    { type: SourceReadModelService },
    { type: CompositionReadModelService }
];
StructureAggregationPanelComponent.propDecorators = {
    enabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.enabled;
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.sourceEmpty;
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.headerColumns;
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.aggregations;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.structureAggregationUiEventsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.compositionQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregationPanelModule {
}
StructureAggregationPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule
                ],
                declarations: [
                    StructureAggregationPanelComponent
                ],
                exports: [
                    StructureAggregationPanelComponent
                ],
                providers: [
                    StructureAggregationArchive,
                    StructureAggregationConfigService,
                    StructureAggregationPanelConfigConverter
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CreateStructureCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new StructureCreatedEvent(command.getAggregateId()));
    }
    /**
     * @return {?}
     */
    getAggregateRepository() {
        return this.structureAggregateRepository;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CreateStructureCommand;
    }
}
CreateStructureCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CreateStructureCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CreateStructureCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    CreateStructureCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
/** @type {?} */
const structureKey = 'StructureAggregate';
/** @type {?} */
const imports = [
    CommonModule,
    ReactiveFormsModule,
    HermesModule,
    HermesModule.defineAggregate(structureKey, StructureAggregateFactory, InMemoryStructureAggregateRepository, CreateStructureCommandHandler, [
        ...formationCommandHandlers,
        ...pagingCommandHandlers,
        ...schemaCommandHandlers,
        ...sourceCommandHandlers,
        ...structureCommandHandlers
    ]),
    // .withConfig({
    // 	loggers: false
    // }),
    ...fabricImports,
    StructurePagingModule,
    StructureInfoPanelModule,
    StructureAggregationPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
    CompositionModule,
    LoggerModule
];
/** @type {?} */
const declarations$2 = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureContainerComponent,
    StructureEmptySourceComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent
];
/** @type {?} */
const entryComponents = [
    StructureColumnConfigComponent
];
/** @type {?} */
const providers = [
    {
        provide: STRUCTURE_CSS_CLASS_NAME,
        useValue: 'structure'
    },
    {
        provide: StructureDefinition,
        useFactory: createStructureDefinition
    },
    ItemEntityFactory,
    SourceReadModelService,
    StructureIdGenerator,
    ...structureProviders
];
/** @type {?} */
const exportDeclarations$1 = [
    FabricModule,
    StructureComponent,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    ...fabricImports,
    StructurePagingModule
];
class StructureModule {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window['hermesApi'].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    static withConfig(structureConfig = { cssClassName: '', hermesModuleConfig: { loggers: false } }) {
        return {
            ngModule: StructureModule,
            providers: [
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                ...providers
            ]
        };
    }
}
StructureModule.exportDeclarations = [...exportDeclarations$1];
StructureModule.decorators = [
    { type: NgModule, args: [{
                imports,
                declarations: declarations$2,
                exports: exportDeclarations$1,
                entryComponents
            },] }
];
/** @nocollapse */
StructureModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const imports$1 = [
    StructureModule.withConfig({
        cssClassName: 'grid',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
/** @type {?} */
const declarations$3 = [
    GridComponent
];
/** @type {?} */
const providers$1 = (/** @type {?} */ ([
    GridIdGenerator,
    GridRegister
]));
/** @type {?} */
const exportDeclarations$2 = [
    GridComponent
];
/** @type {?} */
const entryComponents$1 = (/** @type {?} */ ([]));
/** @type {?} */
const elementComponents = [
    GridComponent
];
class GridModule {
}
GridModule.entryComponents = [...entryComponents$1];
GridModule.exportDeclarations = [...exportDeclarations$2];
GridModule.elementComponents = [...elementComponents];
GridModule.decorators = [
    { type: NgModule, args: [{
                imports: imports$1,
                declarations: declarations$3,
                providers: providers$1,
                exports: exportDeclarations$2,
                entryComponents: entryComponents$1
            },] }
];
if (false) {
    /** @type {?} */
    GridModule.entryComponents;
    /** @type {?} */
    GridModule.exportDeclarations;
    /** @type {?} */
    GridModule.elementComponents;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GridComponent, GridModule, GuiBooleanCellView, GuiCellView, GuiDataType, GuiDateCellView, GuiNumberCellView, GuiPagingDisplay, GuiRowColoring, GuiSortingOrder, GuiStringCellView, GuiTheme, gridSelector as ɵa, createStructureDefinition as ɵb, ToggleSelectedRowCommandHandler as ɵba, pagingCommandHandlers as ɵbb, pagingProviders as ɵbc, SetPagingCommandHandler as ɵbd, NextPageCommandHandler as ɵbe, PrevPageCommandHandler as ɵbf, ChangePagesizeCommandHandler as ɵbg, schemaCommandHandlers as ɵbh, schemaProviders as ɵbi, SetSchemaCommandHandler as ɵbj, SetSchemaVerticalGridCommandHandler as ɵbk, SetSchemaHorizontalGridCommandHandler as ɵbl, SetSchemaThemeCommandHandler as ɵbm, ChangeSchemaBottomHeaderCommandHandler as ɵbn, ChangeSchemaTopHeaderCommandHandler as ɵbo, SetRowColoringCommandHandler as ɵbp, sourceCommandHandlers as ɵbq, sourceProviders as ɵbr, SourceSetLoadingCommandHandler as ɵbs, SetOriginCommandHandler as ɵbt, StructureSourceDomainEventPublisher as ɵbu, StructureEditSourceItemCommandHandler as ɵbv, structureCommandHandlers as ɵbw, structureProviders as ɵbx, SetVerticalScrollEnabledCommandHandler as ɵby, SetScrollPositionCommandHandler as ɵbz, StructureModule as ɵc, InitFieldsCommandHandler as ɵca, ToggleSortCommandHandler as ɵcb, SetSortingCommandHandler as ɵcc, StructureSetConfigFilterCommandHandler as ɵcd, StructureSetConfigSearchingCommandHandler as ɵce, StructureSetConfigQuickFilterCommandHandler as ɵcf, StructureToggleFilterCommandHandler as ɵcg, StructureSetAggregationEnabledCommandHandler as ɵch, StructureSetSearchPhraseCommandHandler as ɵci, SetSortOrderCommandHandler as ɵcj, SetRowHeightCommandHandler as ɵck, fabricImports as ɵcl, StructurePagingModule as ɵcm, StructurePagingComponent as ɵcn, SmartComponent as ɵco, Reactive as ɵcp, PagingReadModelService as ɵcq, PagingRepository as ɵcr, StructureRepository as ɵcs, PagingCommandService as ɵct, PagingDispatcher as ɵcu, SourceReadModelService as ɵcv, StructurePreparedItemsRepository as ɵcw, StructureSourceOriginRepository as ɵcx, StructurePagingDisplayModeArchive as ɵcy, Archive as ɵcz, StructureAggregateFactory as ɵd, StructurePagingNavigatorComponent as ɵda, StructurePagingSelectComponent as ɵdb, StructurePagingStatsComponent as ɵdc, StructureAlternativePagingNavigatorComponent as ɵdd, StructureAlternativePagingPagesComponent as ɵde, StructureInfoPanelModule as ɵdf, NumberFormatterModule as ɵdg, NumberFormatterPipe as ɵdh, StructureInfoPanelComponent as ɵdi, CompositionId as ɵdj, StructureDialogColumnManagerService as ɵdk, StructureReadModelService as ɵdl, VerticalFormationRepository as ɵdm, InMemoryStructureReadStore as ɵdn, StructureConverter as ɵdo, FormationConverter as ɵdp, SchemaConverter as ɵdq, PagingConverter as ɵdr, SourceConverter as ɵds, VerticalFormationConverter as ɵdt, StructureInfoModalComponent as ɵdu, StructureAggregationPanelModule as ɵdv, StructureAggregationPanelComponent as ɵdw, StructureId as ɵdx, StructureAggregationUiEventsRepository as ɵdy, CompositionReadModelService as ɵdz, PagingAggregateFactory as ɵe, CompositionRepository as ɵea, StructureAggregationArchive as ɵeb, StructureAggregationConfigService as ɵec, StructureAggregationPanelConfigConverter as ɵed, StructureAggregationCommandService as ɵee, StructureTopPanelModule as ɵef, StructureTopPanelComponent as ɵeg, StructureSearchComponent as ɵeh, StructureCommandService as ɵei, StructureFilterCommandService as ɵej, SourceDispatcher as ɵek, StructureSearchDispatcher as ɵel, StructureSearchHighlightArchive as ɵem, StructureSearchPlaceholderArchive as ɵen, StructureSearchPhraseRepository as ɵeo, StructureColumnMenuModule as ɵep, StructureColumnManagerModule as ɵeq, StructureColumnManagerComponent as ɵer, CompositionCommandService as ɵes, CompositionDispatcher as ɵet, StructureDialogColumnManagerComponent as ɵeu, StructureMenuColumnManagerComponent as ɵev, StructureColumnConfigComponent as ɵew, StructureColumnMenuConfigArchive as ɵex, CellTemplateWithContext as ɵey, CellContext as ɵez, Logger as ɵf, FieldId as ɵfa, ColumnId as ɵfb, SortOrder as ɵfc, StructureColumnConfigTriggerComponent as ɵfd, StructureColumnConfigService as ɵfe, StructureColumnConfigSortComponent as ɵff, StructureColumnConfigColumnHideComponent as ɵfg, StructureColumnConfigColumnMoveComponent as ɵfh, CompositionModule as ɵfi, SanitizeModule as ɵfj, SafePipe as ɵfk, CompositionAggregateFactory as ɵfl, InMemoryCompositionAggregateRepository as ɵfm, CompositionAggregateRepository as ɵfn, InMemoryCompositionAggregateStore as ɵfo, InMemoryCompositionStore as ɵfp, CreateCompositionCommandHandler as ɵfq, SetColumnsCommandHandler as ɵfr, CompositionEventConverter as ɵfs, SetCompositionWidthCommandHandler as ɵft, SetCompositionResizeWidthCommandHandler as ɵfu, SetCompositionContainerWidthCommandHandler as ɵfv, CompositionSetColumnEnabledCommandHandler as ɵfw, CompositionChangeSortStatusCommandHandler as ɵfx, CompositionMoveLeftColumnCommandHandler as ɵfy, CompositionMoveRightColumnCommandHandler as ɵfz, SourceManagerFactory as ɵg, compositionProviders as ɵga, inMemoryCompositionCommandProviders as ɵgb, inMemoryCompositionQueryProviders as ɵgc, inMemoryCompositionProviders as ɵgd, ColumnEntityFactory as ɵge, ColumnFieldFactory as ɵgf, InMemoryCompositionReadStore as ɵgg, CompositionConverter as ɵgh, ColumnDefinitionFactory as ɵgi, ViewTemplateRepository as ɵgj, ViewTemplateFactory as ɵgk, TemplateFactory as ɵgl, EditTemplateRepository as ɵgm, EditTemplateFactory as ɵgn, InMemoryCompositionRepository as ɵgo, CompositionFieldsInitedEventHandler as ɵgp, CompositionChangeSortStatusEventHandler as ɵgq, CompositionEventService as ɵgr, ViewTemplatesComponent as ɵgs, EditTemplatesComponent as ɵgt, StringEditTemplateComponent as ɵgu, InputEditTemplateComponent as ɵgv, EditCommunicationComponent as ɵgw, Override as ɵgx, NumberEditTemplateComponent as ɵgy, BooleanEditTemplateComponent as ɵgz, FormationAggregateFactory as ɵh, ColumnQueryComponent as ɵha, FunctionViewComponent as ɵhb, LoggerModule as ɵhc, ConsoleLogger as ɵhd, structureIdFactory as ɵhe, compositionIdFactory as ɵhf, structureComponentSelfProviders as ɵhg, StructureComponent as ɵhh, StructureGateway as ɵhi, PagingEventService as ɵhj, SourceCommandService as ɵhk, StructureFieldUiRepository as ɵhl, StructureFieldUiArchive as ɵhm, SourceEventService as ɵhn, SchemaCommandService as ɵho, SchemaDispatcher as ɵhp, SchemaReadModelService as ɵhq, SchemaRepository as ɵhr, FormationEventService as ɵhs, StructureEditModeArchive as ɵht, StructureCellEditArchive as ɵhu, StructureInfoPanelEnabledArchive as ɵhv, StructureCellEditStore as ɵhw, StructureRowSelectEnabledArchive as ɵhx, StructureSearchEventService as ɵhy, StructureIdGenerator as ɵhz, VerticalFormationFactory as ɵi, localProviders as ɵia, LocalPagingCommandService as ɵib, LocalPagingReadModelService as ɵic, LocalSchemaCommandService as ɵid, LocalSchemaReadModelService as ɵie, FormationCommandService as ɵif, FormationDispatcher as ɵig, LocalFormationCommandService as ɵih, FormationReadModelService as ɵii, FormationRepository as ɵij, LocalFormationReadModelService as ɵik, LocalStructureCommandService as ɵil, LocalStructureReadModelService as ɵim, LocalSourceCommandService as ɵin, LocalSourceReadModelService as ɵio, LocalCompositionCommandService as ɵip, LocalCompositionReadModelService as ɵiq, LocalStructureSearchDispatcher as ɵir, SchemaCssClassManager as ɵis, structureComponentToken as ɵit, StructureDefinition as ɵiu, StructurePagingDefinition as ɵiv, StructureHeaderComponent as ɵiw, StructureHeaderColumnsComponent as ɵix, StructureHeaderFiltersComponent as ɵiy, StructureFilterReadModelRepository as ɵiz, AggregationManagerFactory as ɵj, StructureFilterRepository as ɵja, StructureQuickFilterRepository as ɵjb, StructureHeaderFilterComponent as ɵjc, StructureContentComponent as ɵjd, StructureRowComponent as ɵje, StructureCellComponent as ɵjf, StructureContainerComponent as ɵjg, structureParentComponent as ɵjh, StructureEmptySourceComponent as ɵji, StructureQuickFiltersComponent as ɵjj, StructureBlueprintComponent as ɵjk, STRUCTURE_CSS_CLASS_NAME as ɵjl, StructureSearchReadModelRepository as ɵjm, StructureSearchingRepository as ɵjn, ItemEntityFactory as ɵjo, inMemoryStructureCommandProviders as ɵjp, inMemoryStructureReadProviders as ɵjq, inMemoryStructureProviders as ɵjr, provideAggregationCalculator as ɵjs, aggregationProviders as ɵjt, BooleanAggregationCalculator as ɵju, DateAggregationCalculator as ɵjv, NumberAggregationCalculator as ɵjw, StringAggregationCalculator as ɵjx, UnknownAggregationCalculator as ɵjy, StructureConfigFilterSetEventHandler as ɵjz, AGGREGATION_CALCULATORS as ɵk, StructureConfigSearchingSetEventHandler as ɵka, StructureConfigQuickFilterSetEventHandler as ɵkb, StructureFieldsInitedEventHandler as ɵkc, StructureFieldUiConverter as ɵkd, StructureSearchPhraseSetEventHandler as ɵke, InMemoryStructureRepository as ɵkf, SourceRepository as ɵkg, StructureOriginChangedEventHandler as ɵkh, StructurePreparedItemsEventHandler as ɵki, GridGateway as ɵkj, gridProviders as ɵkk, gridStructureDefinition as ɵkl, GridRegister as ɵkm, GridIdGenerator as ɵkn, AggregationCalculator as ɵl, FilterManagerFactory as ɵm, SearchManagerFactory as ɵn, FieldCollectionFactory as ɵo, FieldFactory as ɵp, FieldIdGenerator as ɵq, SchemaAggregateFactory as ɵr, InMemoryStructureAggregateRepository as ɵs, StructureAggregateRepository as ɵt, InMemoryStructureAggregateStore as ɵu, InMemoryStructureStore as ɵv, CreateStructureCommandHandler as ɵw, formationCommandHandlers as ɵx, formationProviders as ɵy, SetFormationCommandHandler as ɵz };
//# sourceMappingURL=generic-ui-ngx-grid.js.map
