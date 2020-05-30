import { Injectable, EventEmitter, Input, Output, InjectionToken, Component, ViewEncapsulation, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, Renderer2, NgModule, Pipe, Injector, TemplateRef, ContentChild, ComponentFactoryResolver, Attribute, RendererFactory2, NgZone, Optional as Optional$1, Directive } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FabricBadgeModule, FabricButtonModule, FabricButtonGroupModule, FabricCheckboxModule, FabricChipModule, FabricDrawerModule, FabricDropdownModule, FabricRadioButtonModule, FabricRadioGroupModule, FabricProgressBarModule, FabricProgressSpinnerModule, FabricSelectModule, FabricSpinnerModule, FabricTabModule, FabricToggleButtonModule, FabricInputModule, FabricDialogModule, FabricInlineDialogModule, FabricModule, Theme, FabricDialogService, FabricDatePickerModule, FabricChipComponent, FabricCheckboxComponent, FabricButtonComponent, FabricInputComponent, FabricDrawerService, InlineDialogPlacement, FabricInlineDialogService, ResizeDetector, Placement } from '@generic-ui/fabric';
import { ReadModelRootId, AggregateId, Command, CommandDispatcher, Archive, ReadModelObject, DomainEvent, DomainEventBus, AggregateEvent, AggregateRepository, DomainEventPublisher, DomainModule, HermesModule, ApiModule, FeatureModule, AggregateArchive, ReadModelRootRepository, EntityId, InMemoryStore, InMemoryAggregateStore, AggregateStoreRegister, Entity, ReadModelEntity, ReadModelEntityId, ReadModelRoot, InMemoryReadModelStore, RandomStringGenerator, AggregateRoot, AggregateFactory, CreateAggregateCommand, EventRepository, Optional, DomainObject, COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED } from '@generic-ui/hermes';
import { Subject, ReplaySubject, fromEvent, Observable, zip, timer, combineLatest } from 'rxjs';
import { takeUntil, filter, map, take, distinctUntilChanged, switchMap, debounceTime } from 'rxjs/operators';
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
    GuiColumn.prototype.width;
    /** @type {?|undefined} */
    GuiColumn.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumn.prototype.align;
    /** @type {?|undefined} */
    GuiColumn.prototype.summaries;
    /** @type {?|undefined} */
    GuiColumn.prototype.sorting;
    /** @type {?|undefined} */
    GuiColumn.prototype.cellEditing;
    /** @type {?|undefined} */
    GuiColumn.prototype.matcher;
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
    BAR: 8,
    PERCENTAGE_BAR: 9,
    PERCENTAGE: 10,
};
GuiCellView[GuiCellView.TEXT] = 'TEXT';
GuiCellView[GuiCellView.CHIP] = 'CHIP';
GuiCellView[GuiCellView.LINK] = 'LINK';
GuiCellView[GuiCellView.IMAGE] = 'IMAGE';
GuiCellView[GuiCellView.BOLD] = 'BOLD';
GuiCellView[GuiCellView.ITALIC] = 'ITALIC';
GuiCellView[GuiCellView.CHECKBOX] = 'CHECKBOX';
GuiCellView[GuiCellView.CUSTOM] = 'CUSTOM';
GuiCellView[GuiCellView.BAR] = 'BAR';
GuiCellView[GuiCellView.PERCENTAGE_BAR] = 'PERCENTAGE_BAR';
GuiCellView[GuiCellView.PERCENTAGE] = 'PERCENTAGE';
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
function GuiPaging() { }
if (false) {
    /** @type {?|undefined} */
    GuiPaging.prototype.enabled;
    /** @type {?|undefined} */
    GuiPaging.prototype.page;
    /** @type {?|undefined} */
    GuiPaging.prototype.pageSize;
    /** @type {?|undefined} */
    GuiPaging.prototype.pageSizes;
    /** @type {?|undefined} */
    GuiPaging.prototype.pagerTop;
    /** @type {?|undefined} */
    GuiPaging.prototype.pagerBottom;
    /** @type {?|undefined} */
    GuiPaging.prototype.display;
}
/** @enum {number} */
const GuiTheme = {
    FABRIC: 0,
    MATERIAL: 1,
    LIGHT: 2,
    DARK: 3,
    GENERIC: 4,
};
GuiTheme[GuiTheme.FABRIC] = 'FABRIC';
GuiTheme[GuiTheme.MATERIAL] = 'MATERIAL';
GuiTheme[GuiTheme.LIGHT] = 'LIGHT';
GuiTheme[GuiTheme.DARK] = 'DARK';
GuiTheme[GuiTheme.GENERIC] = 'GENERIC';
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
function GuiSummaries() { }
if (false) {
    /** @type {?|undefined} */
    GuiSummaries.prototype.enabled;
    /** @type {?|undefined} */
    GuiSummaries.prototype.top;
    /** @type {?|undefined} */
    GuiSummaries.prototype.bottom;
}
/**
 * @record
 */
function GuiColumnSummaries() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnSummaries.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnSummaries.prototype.summariesTypes;
}
/**
 * @record
 */
function GuiColumnSorting() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.matcher;
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.order;
}
/**
 * @record
 */
function GuiColumnCellEditing() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnCellEditing.prototype.enabled;
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
/** @enum {number} */
const GuiColumnAlign = {
    RIGHT: 0,
    CENTER: 1,
    LEFT: 2,
};
GuiColumnAlign[GuiColumnAlign.RIGHT] = 'RIGHT';
GuiColumnAlign[GuiColumnAlign.CENTER] = 'CENTER';
GuiColumnAlign[GuiColumnAlign.LEFT] = 'LEFT';
/**
 * @record
 */
function GuiRowDetail() { }
if (false) {
    /** @type {?|undefined} */
    GuiRowDetail.prototype.enabled;
    /** @type {?|undefined} */
    GuiRowDetail.prototype.template;
}
/**
 * @record
 */
function GuiTitlePanel() { }
if (false) {
    /** @type {?|undefined} */
    GuiTitlePanel.prototype.enabled;
    /** @type {?|undefined} */
    GuiTitlePanel.prototype.template;
}
/**
 * @record
 */
function GuiFooterPanel() { }
if (false) {
    /** @type {?|undefined} */
    GuiFooterPanel.prototype.enabled;
    /** @type {?|undefined} */
    GuiFooterPanel.prototype.template;
}
/**
 * @record
 */
function GuiInfoPanel() { }
if (false) {
    /** @type {?|undefined} */
    GuiInfoPanel.prototype.enabled;
    /** @type {?|undefined} */
    GuiInfoPanel.prototype.infoDialog;
    /** @type {?|undefined} */
    GuiInfoPanel.prototype.columnsManager;
    /** @type {?|undefined} */
    GuiInfoPanel.prototype.sourceSize;
}

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
const SummariesType = {
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
SummariesType[SummariesType.COUNT] = 'COUNT';
SummariesType[SummariesType.DISTINCT] = 'DISTINCT';
SummariesType[SummariesType.SUM] = 'SUM';
SummariesType[SummariesType.AVERAGE] = 'AVERAGE';
SummariesType[SummariesType.MIN] = 'MIN';
SummariesType[SummariesType.MAX] = 'MAX';
SummariesType[SummariesType.MEDIAN] = 'MEDIAN';
SummariesType[SummariesType.TRUTHY] = 'TRUTHY';
SummariesType[SummariesType.FALSY] = 'FALSY';
SummariesType[SummariesType.EARLIEST] = 'EARLIEST';
SummariesType[SummariesType.LATEST] = 'LATEST';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridColumnSummariesConverter {
    /**
     * @param {?} summariesConfig
     * @return {?}
     */
    convert(summariesConfig) {
        /** @type {?} */
        let columnSummariesConfig = {};
        if (summariesConfig.enabled !== undefined && summariesConfig.enabled !== null) {
            columnSummariesConfig.enabled = summariesConfig.enabled;
        }
        if (summariesConfig.summariesTypes !== undefined && summariesConfig.summariesTypes !== null) {
            columnSummariesConfig.summariesTypes = this.convertSummariesTypes(summariesConfig.summariesTypes);
        }
        return columnSummariesConfig;
    }
    /**
     * @private
     * @param {?} configSummariesTypes
     * @return {?}
     */
    convertSummariesTypes(configSummariesTypes) {
        /** @type {?} */
        const summariesTypes = [];
        configSummariesTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            /** @type {?} */
            const summariesType = this.convertSummariesType(type);
            if (summariesType !== undefined && summariesType !== null) {
                summariesTypes.push(summariesType);
            }
        }));
        return summariesTypes;
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    convertSummariesType(type) {
        /** @type {?} */
        const loweredSummariesType = type.toLocaleLowerCase();
        switch (loweredSummariesType) {
            case 'count':
                return SummariesType.COUNT;
            case 'distinct':
                return SummariesType.DISTINCT;
            case 'sum':
                return SummariesType.SUM;
            case 'average':
                return SummariesType.AVERAGE;
            case 'min':
                return SummariesType.MIN;
            case 'max':
                return SummariesType.MAX;
            case 'median':
                return SummariesType.MEDIAN;
            case 'truthy':
                return SummariesType.TRUTHY;
            case 'falsy':
                return SummariesType.FALSY;
            case 'earliest':
                return SummariesType.EARLIEST;
            case 'latest':
                return SummariesType.LATEST;
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
    NUMBER: 1,
    CHIP: 2,
    LINK: 3,
    IMAGE: 4,
    BOLD: 5,
    ITALIC: 6,
    CHECKBOX: 7,
    CUSTOM: 8,
    FUNCTION: 9,
    DATE: 10,
    BAR: 11,
    PERCENTAGE_BAR: 12,
    PERCENTAGE: 13,
};
CellView[CellView.TEXT] = 'TEXT';
CellView[CellView.NUMBER] = 'NUMBER';
CellView[CellView.CHIP] = 'CHIP';
CellView[CellView.LINK] = 'LINK';
CellView[CellView.IMAGE] = 'IMAGE';
CellView[CellView.BOLD] = 'BOLD';
CellView[CellView.ITALIC] = 'ITALIC';
CellView[CellView.CHECKBOX] = 'CHECKBOX';
CellView[CellView.CUSTOM] = 'CUSTOM';
CellView[CellView.FUNCTION] = 'FUNCTION';
CellView[CellView.DATE] = 'DATE';
CellView[CellView.BAR] = 'BAR';
CellView[CellView.PERCENTAGE_BAR] = 'PERCENTAGE_BAR';
CellView[CellView.PERCENTAGE] = 'PERCENTAGE';

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
            case 'bar':
                return CellView.BAR;
            case 'percentage_bar':
                return CellView.PERCENTAGE_BAR;
            case 'percentage':
                return CellView.PERCENTAGE;
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
            case GuiCellView.BAR:
                return CellView.BAR;
            case GuiCellView.PERCENTAGE_BAR:
                return CellView.PERCENTAGE_BAR;
            case GuiCellView.PERCENTAGE:
                return CellView.PERCENTAGE;
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
class GridColumnCellEditingConverter {
    /**
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        return (/** @type {?} */ (config));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ColumnAlign = {
    RIGHT: 0,
    CENTER: 1,
    LEFT: 2,
};
ColumnAlign[ColumnAlign.RIGHT] = 'RIGHT';
ColumnAlign[ColumnAlign.CENTER] = 'CENTER';
ColumnAlign[ColumnAlign.LEFT] = 'LEFT';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridColumnAlignConverter {
    /**
     * @param {?} align
     * @return {?}
     */
    convert(align) {
        if (typeof align === 'string') {
            return this.convertTypeString(align);
        }
        else {
            return this.convertTypeEnum(align);
        }
    }
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    convertTypeEnum(align) {
        switch (align) {
            case GuiColumnAlign.RIGHT:
                return ColumnAlign.RIGHT;
            case GuiColumnAlign.CENTER:
                return ColumnAlign.CENTER;
            case GuiColumnAlign.LEFT:
                return ColumnAlign.LEFT;
            default:
                return ColumnAlign.LEFT;
        }
    }
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    convertTypeString(align) {
        /** @type {?} */
        const loweredType = align.toLocaleLowerCase();
        switch (loweredType) {
            case 'right':
                return ColumnAlign.RIGHT;
            case 'center':
                return ColumnAlign.CENTER;
            case 'left':
                return ColumnAlign.LEFT;
            default:
                return ColumnAlign.LEFT;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridColumnConverter {
    constructor() {
        this.columnTypeConverter = new GridColumnTypeConverter();
        this.columnSummariesConverter = new GridColumnSummariesConverter();
        this.columnViewConverter = new GridColumnViewConverter();
        this.columnSortingConverter = new GridColumnSortingConverter();
        this.columnCellEditingConverter = new GridColumnCellEditingConverter();
        this.columnAlignConverter = new GridColumnAlignConverter();
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
        if (guiColumn.align !== undefined && guiColumn.align !== null) {
            columnConfig.align = this.columnAlignConverter.convert(guiColumn.align);
        }
        if (guiColumn.view !== undefined && guiColumn.view !== null) {
            columnConfig.view = this.columnViewConverter.convert(guiColumn.view);
        }
        if (guiColumn.summaries !== undefined && guiColumn.summaries !== null) {
            columnConfig.summaries = this.columnSummariesConverter.convert(guiColumn.summaries);
        }
        if (guiColumn.sorting !== undefined && guiColumn.sorting !== null) {
            columnConfig.sorting = this.columnSortingConverter.convert(guiColumn.sorting);
        }
        if (guiColumn.cellEditing !== undefined && guiColumn.cellEditing !== null) {
            columnConfig.cellEditing = this.columnCellEditingConverter.convert(guiColumn.cellEditing);
        }
        if (guiColumn.matcher !== undefined && guiColumn.matcher !== null) {
            columnConfig.matcher = guiColumn.matcher;
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
    GridColumnConverter.prototype.columnSummariesConverter;
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
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnCellEditingConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnAlignConverter;
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
    GENERIC: 4,
};
SchemaTheme[SchemaTheme.FABRIC] = 'FABRIC';
SchemaTheme[SchemaTheme.MATERIAL] = 'MATERIAL';
SchemaTheme[SchemaTheme.LIGHT] = 'LIGHT';
SchemaTheme[SchemaTheme.DARK] = 'DARK';
SchemaTheme[SchemaTheme.GENERIC] = 'GENERIC';

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
     * @param {?} theme
     * @return {?}
     */
    convertToGuiTheme(theme) {
        switch (theme) {
            case SchemaTheme.MATERIAL:
                return GuiTheme.MATERIAL;
            case SchemaTheme.FABRIC:
                return GuiTheme.FABRIC;
            case SchemaTheme.LIGHT:
                return GuiTheme.LIGHT;
            case SchemaTheme.DARK:
                return GuiTheme.DARK;
            case SchemaTheme.GENERIC:
                return GuiTheme.GENERIC;
            default:
                return GuiTheme.GENERIC;
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
            case 'generic':
                return SchemaTheme.GENERIC;
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
            case GuiTheme.GENERIC:
                return SchemaTheme.GENERIC;
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
     * @param {?} value
     * @return {?}
     */
    convertToGuiRowColoring(value) {
        switch (value) {
            case RowColoring.NONE:
                return GuiRowColoring.NONE;
            case RowColoring.EVEN:
                return GuiRowColoring.EVEN;
            case RowColoring.ODD:
                return GuiRowColoring.ODD;
            default:
                return GuiRowColoring.EVEN;
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
        this.themeChanged = new EventEmitter();
        this.horizontalGridChanged = new EventEmitter();
        this.verticalGridChanged = new EventEmitter();
        this.rowColoringChanged = new EventEmitter();
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
    /**
     * @param {?} value
     * @return {?}
     */
    onTheme(value) {
        this.themeChanged.emit(this.gridThemeConverter.convertToGuiTheme(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHorizontalGrid(value) {
        this.horizontalGridChanged.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onVerticalGrid(value) {
        this.verticalGridChanged.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onRowColoring(value) {
        this.rowColoringChanged.emit(this.gridRowColoringConverter.convertToGuiRowColoring(value));
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
    titlePanel: [{ type: Input }],
    footerPanel: [{ type: Input }],
    filtering: [{ type: Input }],
    quickFilters: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    infoPanel: [{ type: Input }],
    summaries: [{ type: Input }],
    columnMenu: [{ type: Input }],
    rowDetail: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    itemsSelected: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }],
    searchPhraseChanged: [{ type: Output }],
    themeChanged: [{ type: Output }],
    horizontalGridChanged: [{ type: Output }],
    verticalGridChanged: [{ type: Output }],
    rowColoringChanged: [{ type: Output }]
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
    /** @type {?} */
    GridGateway.prototype.titlePanel;
    /** @type {?} */
    GridGateway.prototype.footerPanel;
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
    GridGateway.prototype.summaries;
    /** @type {?} */
    GridGateway.prototype.columnMenu;
    /** @type {?} */
    GridGateway.prototype.rowDetail;
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
    /** @type {?} */
    GridGateway.prototype.themeChanged;
    /** @type {?} */
    GridGateway.prototype.horizontalGridChanged;
    /** @type {?} */
    GridGateway.prototype.verticalGridChanged;
    /** @type {?} */
    GridGateway.prototype.rowColoringChanged;
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
        return new PagingDefinition(this.enabled);
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
class PagingDefinition {
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
PagingDefinition.Builder = StructurePagingDefinitionBuilder;
PagingDefinition.DefaultBuilder = StructurePagingDefinitionDefaultBuilder;
if (false) {
    /** @type {?} */
    PagingDefinition.Builder;
    /** @type {?} */
    PagingDefinition.DefaultBuilder;
    /**
     * @type {?}
     * @private
     */
    PagingDefinition.prototype.enabled;
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
StructureDefinitionDefaultBuilder.defaultBottomPaging = new PagingDefinition.DefaultBuilder().build();
StructureDefinitionDefaultBuilder.defaultTopPaging = new PagingDefinition.DefaultBuilder().build();
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
                selector: 'gui-grid',
                template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelecting]=\"rowSelecting\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
                providers: [
                    ...gridProviders,
                    {
                        provide: structureParentComponent,
                        useExisting: GridComponent
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
    FabricDrawerModule,
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
        if (this.unsubscribe$.isStopped) {
            return;
        }
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
class StructureReadModelRepository extends Reactive {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super();
        domainEventBus
            .ofEvent(...this.forEvents())
            .pipe(this.takeUntil())
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
}
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureReadModelRepository.prototype.onStructure = function (aggregateId) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    StructureReadModelRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    StructureReadModelRepository.prototype.subs = function (event) { };
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
    { type: StructureReadModelRepository }
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
class StructureReadModelRootId extends ReadModelRootId {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id);
    }
    /**
     * @return {?}
     */
    toAggregateId() {
        return new StructureId(this.toString());
    }
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
    /**
     * @return {?}
     */
    toReadModelRootId() {
        return new StructureReadModelRootId(this.getId());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const structureGlobalId = new StructureId('-1');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingWarehouse {
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
    onPaging(structureId = structureGlobalId) {
        return this.pagingRepository.on(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSinglePaging(structureId = structureGlobalId) {
        return this.onPaging(structureId)
            .pipe(take(1));
    }
}
PagingWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingWarehouse.ctorParameters = () => [
    { type: PagingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingWarehouse.prototype.pagingRepository;
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
class PagingCommandDispatcher {
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
    enable(structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    disable(structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    }
    /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    setPaging(paging, structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, paging);
    }
    /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    changePageSize(pageSize, structureId = structureGlobalId) {
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    nextPage(structureId = structureGlobalId) {
        this.pagingDispatcher.nextPage(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    prevPage(structureId = structureGlobalId) {
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
    changePagerTop(enabled, structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changePagerBottom(enabled, structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    }
}
PagingCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingCommandDispatcher.ctorParameters = () => [
    { type: PagingDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingCommandDispatcher.prototype.pagingDispatcher;
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
class StructureSourceWarehouse {
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
    onEntities(structureId = structureGlobalId) {
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
    onEntitiesSize(structureId = structureGlobalId) {
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
    onSingleEntities(structureId = structureGlobalId) {
        return this.onEntities(structureId)
            .pipe(take(1));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onOriginSize(structureId = structureGlobalId) {
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
    onLoading(structureId = structureGlobalId) {
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
    onPreparedEntities(structureId = structureGlobalId) {
        return this.structurePreparedItemsRepository.onPreparedItems(structureId);
    }
}
StructureSourceWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSourceWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository },
    { type: StructurePreparedItemsRepository },
    { type: StructureSourceOriginRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceWarehouse.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSourceWarehouse.prototype.structurePreparedItemsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSourceWarehouse.prototype.structureSourceOriginRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingDisplayModeArchive extends Archive {
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
PagingDisplayModeArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingDisplayModeArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const PagingPosition = {
    TOP: 0,
    BOTTOM: 1,
};
PagingPosition[PagingPosition.TOP] = 'TOP';
PagingPosition[PagingPosition.BOTTOM] = 'BOTTOM';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingComponent extends SmartComponent {
    /**
     * @param {?} renderer2
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} structurePagingWarehouse
     * @param {?} pagingCommandService
     * @param {?} structureSourceWarehouse
     * @param {?} structurePagingDisplayModeArchive
     */
    constructor(renderer2, elementRef, changeDetectorRef, structurePagingWarehouse, pagingCommandService, structureSourceWarehouse, structurePagingDisplayModeArchive) {
        super();
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.structurePagingWarehouse = structurePagingWarehouse;
        this.pagingCommandService = pagingCommandService;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        this.alternativeDisplay = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.position) {
            if (this.position === PagingPosition.BOTTOM) {
                this.renderer2.removeClass(this.elementRef.nativeElement, 'gui-paging-top');
                this.renderer2.addClass(this.elementRef.nativeElement, 'gui-paging-bottom');
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, 'gui-paging-bottom');
                this.renderer2.addClass(this.elementRef.nativeElement, 'gui-paging-top');
            }
        }
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
        this.structurePagingWarehouse
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
        this.structureSourceWarehouse
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
     * @return {?}
     */
    isPagingVisible() {
        return this.paging && this.paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && this.paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && this.paging.isPagerBottom()));
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
PagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-paging[position]',
                template: "<ng-container *ngIf=\"isPagingVisible() && !alternativeDisplay\">\n\n\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t<gui-paging-select\n\t\t\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t\t[paging]=\"paging\">\n\t\t</gui-paging-select>\n\n\t\t<gui-paging-stats\n\t\t\t\t[paging]=\"paging\">\n\t\t</gui-paging-stats>\n\n\t\t<gui-paging-navigator\n\t\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-paging-navigator>\n\n\t</ng-container>\n\n\t<ng-template #minimalTemplate>\n\n\t\t<gui-paging-stats\n\t\t\t\t[paging]=\"paging\">\n\t\t</gui-paging-stats>\n\n\t\t<gui-paging-navigator\n\t\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-paging-navigator>\n\n\t</ng-template>\n\n</ng-container>\n\n<ng-container *ngIf=\"isPagingVisible() && alternativeDisplay\">\n\n\t<gui-paging-select\n\t\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t[paging]=\"paging\">\n\t</gui-paging-select>\n\n\t<gui-alternative-paging-navigator\n\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\">\n\n\t\t<gui-alternative-paging-pages\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-alternative-paging-pages>\n\n\t</gui-alternative-paging-navigator>\n\n</ng-container>\n",
                host: {
                    '[class.gui-paging]': `"true"`
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-paging{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;padding:4px}.gui-paging>*{padding-left:16px}.gui-paging .gui-paging-select span{display:inline-block;margin:0 6px 0 0}.gui-paging .gui-paging-navigator button{margin-right:6px}.gui-paging .gui-paging-navigator button:last-of-type{margin-right:0}.gui-paging .gui-paging-stats span{display:inline-block;margin:0 2px 0 0}.gui-paging .gui-alternative-paging-navigator{display:-ms-flexbox;display:flex;padding:0}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;line-height:21px}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-page{display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page{position:relative}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page .gui-paging-page{display:block;cursor:pointer;padding:0 8px;font-weight:400;font-family:Arial,serif}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page::after{content:'';position:absolute;bottom:-8px;display:block;height:1px;width:100%;background:#333}.gui-paging .gui-alternative-paging-navigator .gui-button{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0 2px;background:0 0;padding:0;font-size:14px;line-height:21px}.gui-paging .gui-alternative-paging-navigator .gui-button svg{height:12px;width:auto;margin:0 2px}.gui-paging .gui-alternative-paging-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging .gui-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-paging .gui-alternative-paging-navigator .gui-button:hover svg path{stroke:#333}.gui-paging .gui-alternative-paging-navigator .gui-button:disabled svg{opacity:.4}.gui-paging .gui-alternative-paging-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging.gui-paging-bottom{border-top:1px solid;border-color:inherit}.gui-paging.gui-paging-top{border-bottom:1px solid;border-color:inherit}", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:rgba(34,36,38,.1);font-size:14px}"]
            }] }
];
/** @nocollapse */
PagingComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: PagingWarehouse },
    { type: PagingCommandDispatcher },
    { type: StructureSourceWarehouse },
    { type: PagingDisplayModeArchive }
];
PagingComponent.propDecorators = {
    position: [{ type: Input }],
    minimal: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PagingComponent.prototype.position;
    /** @type {?} */
    PagingComponent.prototype.minimal;
    /** @type {?} */
    PagingComponent.prototype.sourceSize;
    /** @type {?} */
    PagingComponent.prototype.paging;
    /** @type {?} */
    PagingComponent.prototype.alternativeDisplay;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.structurePagingWarehouse;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.pagingCommandService;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.structurePagingDisplayModeArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let Paging = class Paging {
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
};
Paging.ctorParameters = () => [
    { type: Boolean },
    { type: Number },
    { type: Number },
    { type: Array },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Number },
    { type: Number },
    { type: Number }
];
Paging = __decorate([
    ReadModelObject,
    __metadata("design:paramtypes", [Boolean, Number, Number, Array, Boolean, Boolean, Boolean, Boolean, Number, Number, Number])
], Paging);
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
class PagingSelectComponent {
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
PagingSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-paging-select',
                template: "<span>Items per page:</span>\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"paging.getPageSizes()\"\n\t\t\t[selected]=\"paging.getPageSize()\"\n\t\t\t[width]=\"25\">\n</gui-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-paging-select]': `"true"`
                }
            }] }
];
PagingSelectComponent.propDecorators = {
    paging: [{ type: Input }],
    pageSizeChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PagingSelectComponent.prototype.paging;
    /** @type {?} */
    PagingSelectComponent.prototype.pageSizeChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlternativePagingNavigatorComponent {
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
AlternativePagingNavigatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-alternative-paging-navigator',
                template: "<button (click)=\"firstPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(-522.98 669.601) rotate(180)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"prevPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tclass=\"gui-paging-navigator-prev\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(5.77 10.351) rotate(180)\"/>\n\t</svg>\n</button>\n\n<ng-content></ng-content>\n\n<button (click)=\"nextPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tclass=\"gui-paging-navigator-next\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(0.311 0.311)\"/>\n\t</svg>\n</button>\n\n<button (click)=\"lastPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(534.061 -658.939)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-alternative-paging-navigator]': `"true"`
                }
            }] }
];
/** @nocollapse */
AlternativePagingNavigatorComponent.ctorParameters = () => [
    { type: PagingCommandDispatcher }
];
AlternativePagingNavigatorComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }],
    nextPageChanged: [{ type: Output }],
    prevPageChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AlternativePagingNavigatorComponent.prototype.paging;
    /** @type {?} */
    AlternativePagingNavigatorComponent.prototype.sourceSize;
    /** @type {?} */
    AlternativePagingNavigatorComponent.prototype.nextPageChanged;
    /** @type {?} */
    AlternativePagingNavigatorComponent.prototype.prevPageChanged;
    /** @type {?} */
    AlternativePagingNavigatorComponent.prototype.prevDisabled;
    /** @type {?} */
    AlternativePagingNavigatorComponent.prototype.nextDisabled;
    /**
     * @type {?}
     * @private
     */
    AlternativePagingNavigatorComponent.prototype.pagingCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlternativePagingPagesComponent {
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
AlternativePagingPagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-alternative-paging-pages',
                template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\">\n\t\t\t<div\n\t\t\t\t\t(click)=\"goToPage(page)\"\n\t\t\t\t\tclass=\"gui-paging-page\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-alternative-paging-pages]': `"true"`
                }
            }] }
];
/** @nocollapse */
AlternativePagingPagesComponent.ctorParameters = () => [
    { type: PagingCommandDispatcher }
];
AlternativePagingPagesComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.paging;
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.sourceSize;
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.currentPage;
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.pages;
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.numberOfVisiblePages;
    /**
     * @type {?}
     * @private
     */
    AlternativePagingPagesComponent.prototype.pagingCommandService;
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
class PagingEventRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} pagingReadModelService
     */
    constructor(domainEventBus, pagingReadModelService) {
        this.domainEventBus = domainEventBus;
        this.pagingReadModelService = pagingReadModelService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPageChange(structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (PrevPageEvent)), (/** @type {?} */ (NextPageEvent)), (/** @type {?} */ (PageChangedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingReadModelService
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
            .ofEvent((/** @type {?} */ (PagesizeChangedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingReadModelService
                .onPaging(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            (paging) => paging.getPageSize())), take(1));
        })));
    }
}
PagingEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingEventRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: PagingWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingEventRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    PagingEventRepository.prototype.pagingReadModelService;
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
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new PageChangedEvent(this.getAggregateId());
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
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new PagesizeChangedEvent(this.getAggregateId());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingManager {
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
        // TODO
        this.events = [];
        this.logger = logger;
    }
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    static default(logger) {
        return new PagingManager(false, 1, 25, [10, 25, 50, 100], false, true, 0, logger);
    }
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    static fromConfig(paging, logger) {
        /** @type {?} */
        const defaultPagingDefinition = PagingManager.default(logger);
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
        return new PagingManager(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, 0, logger);
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
     * @return {?}
     */
    clearEvents() {
        this.events.length = 0;
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
    PagingManager.prototype.events;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.page;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.pageSizes;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.pagerTop;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.pagerBottom;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.sourceSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingManagerFactory {
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
        return PagingManager.default(this.logger);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    createFromConfig(config) {
        return PagingManager.fromConfig(config, this.logger);
    }
}
PagingManagerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingManagerFactory.ctorParameters = () => [
    { type: Logger }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingManagerFactory.prototype.logger;
}

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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new PagingSetEvent(command.getAggregateId()));
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
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new NextPageEvent(command.getAggregateId()));
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new PrevPageEvent(command.getAggregateId()));
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        structure.prevPage();
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
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return ChangePagesizeCommand;
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
        aggregate.clearEvents();
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
    { type: DomainEventPublisher }
];
if (false) {
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
class PagingDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(SetPagingCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(NextPageCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(PrevPageCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(ChangePagesizeCommandHandler, 'StructureAggregate')
        ];
    }
}
PagingDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    PagingDispatcher,
                    PagingManagerFactory
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
PagingDomainModule.ctorParameters = () => [];

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
class PagingApiModule extends ApiModule {
}
PagingApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    PagingDomainModule
                ],
                providers: [
                    PagingCommandDispatcher,
                    PagingWarehouse,
                    PagingEventRepository,
                    PagingRepository,
                    PagingConverter
                ],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingNavigatorComponent {
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
PagingNavigatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-paging-navigator',
                template: "<gui-button-group>\n\t<button (click)=\"prevPage()\"\n\t\t\t[disabled]=\"prevDisabled\"\n\t\t\tclass=\"gui-paging-navigator-prev\"\n\t\t\tgui-button>\n\t\tPrev\n\t</button>\n\n\t<button (click)=\"nextPage()\"\n\t\t\t[disabled]=\"nextDisabled\"\n\t\t\tclass=\"gui-paging-navigator-next\"\n\t\t\tgui-button>\n\t\tNext\n\t</button>\n</gui-button-group>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-paging-navigator]': `"true"`
                }
            }] }
];
PagingNavigatorComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }],
    nextPageChanged: [{ type: Output }],
    prevPageChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PagingNavigatorComponent.prototype.paging;
    /** @type {?} */
    PagingNavigatorComponent.prototype.sourceSize;
    /** @type {?} */
    PagingNavigatorComponent.prototype.nextPageChanged;
    /** @type {?} */
    PagingNavigatorComponent.prototype.prevPageChanged;
    /** @type {?} */
    PagingNavigatorComponent.prototype.prevDisabled;
    /** @type {?} */
    PagingNavigatorComponent.prototype.nextDisabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class PureComponent {
    /**
     * @protected
     */
    constructor() {
        this.subClassConstructor = this.constructor;
        this.subClassNgOnInit = ((/** @type {?} */ (this))).ngOnInit;
        if (this.isEmptyConstructor() || arguments.length !== 0) {
            this.throwError('it should not inject services');
        }
        if (this.subClassNgOnInit) {
            this.throwError('it should not use ngOnInit');
        }
    }
    /**
     * @private
     * @return {?}
     */
    isEmptyConstructor() {
        return this.subClassConstructor.toString().split('(')[1][0] !== ')';
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    throwError(reason) {
        throw new Error(`Component "${this.subClassConstructor.name}" is a PureComponent, ${reason}.`);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PureComponent.prototype.subClassConstructor;
    /**
     * @type {?}
     * @private
     */
    PureComponent.prototype.subClassNgOnInit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingStatsComponent extends PureComponent {
    constructor() {
        super();
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
PagingStatsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-paging-stats',
                template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\tof\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-paging-stats]': `"true"`
                }
            }] }
];
/** @nocollapse */
PagingStatsComponent.ctorParameters = () => [];
PagingStatsComponent.propDecorators = {
    paging: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PagingStatsComponent.prototype.paging;
    /** @type {?} */
    PagingStatsComponent.prototype.sourceSize;
    /** @type {?} */
    PagingStatsComponent.prototype.firstItemIndex;
    /** @type {?} */
    PagingStatsComponent.prototype.lastItemIndex;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagingFeatureModule extends FeatureModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static forComponent() {
        return [
            PagingDisplayModeArchive
        ];
    }
}
PagingFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule,
                    PagingApiModule
                ],
                declarations: [
                    PagingComponent,
                    PagingNavigatorComponent,
                    PagingSelectComponent,
                    PagingStatsComponent,
                    AlternativePagingNavigatorComponent,
                    AlternativePagingPagesComponent
                ],
                exports: [
                    PagingComponent,
                    PagingNavigatorComponent,
                    PagingSelectComponent,
                    PagingStatsComponent,
                    AlternativePagingNavigatorComponent,
                    AlternativePagingPagesComponent
                ]
            },] }
];
/** @nocollapse */
PagingFeatureModule.ctorParameters = () => [];

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
				ver. 0.12.1
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
class CompositionReadModelRootId extends ReadModelRootId {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id);
    }
    /**
     * @return {?}
     */
    toAggregateId() {
        return new CompositionId(this.toString());
    }
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
    /**
     * @return {?}
     */
    toReadModelRootId() {
        return new CompositionReadModelRootId(this.getId());
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
                template: "<div class=\"gui-dialog-title\">Manage Columns</div>\n\n<gui-structure-column-manager>\n\n</gui-structure-column-manager>\n",
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
class StructureThemeConverter {
    /**
     * @param {?} schemaTheme
     * @return {?}
     */
    convertTheme(schemaTheme) {
        switch (schemaTheme) {
            case SchemaTheme.FABRIC:
                return Theme.FABRIC;
            case SchemaTheme.MATERIAL:
                return Theme.MATERIAL;
            case SchemaTheme.GENERIC:
                return Theme.GENERIC;
            case SchemaTheme.LIGHT:
                return Theme.LIGHT;
            case SchemaTheme.DARK:
                return Theme.DARK;
            default:
                return Theme.FABRIC;
        }
    }
}
StructureThemeConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaId extends AggregateId {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id);
    }
    /**
     * @return {?}
     */
    toReadModelRootId() {
        return new SchemaReadModelRootId(this.getId());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaReadModelRootId extends ReadModelRootId {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id);
    }
    /**
     * @return {?}
     */
    toAggregateId() {
        return new SchemaId(this.getId());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const schemaGlobalId = new SchemaReadModelRootId('-1');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaThemeRepository extends AggregateArchive {
    constructor() {
        super();
    }
}
SchemaThemeRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaThemeRepository.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaCssClassesRepository extends Reactive {
    constructor() {
        super();
        this.theme = new Map();
        this.theme$ = new ReplaySubject();
    }
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    setCssClass(theme, schemaId) {
        this.next(theme, schemaId);
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    on(schemaId) {
        return this.theme$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(schemaId.toString());
        }))
        // distinctUntilChanged()
        );
    }
    /**
     * @private
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    next(theme, schemaId) {
        this.theme.set(schemaId.toString(), theme);
        this.theme$.next(this.theme);
    }
}
SchemaCssClassesRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCssClassesRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesRepository.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesRepository.prototype.theme$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaHorizontalGridRepository extends AggregateArchive {
    constructor() {
        super();
    }
}
SchemaHorizontalGridRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaHorizontalGridRepository.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaRowColoringRepository extends AggregateArchive {
    constructor() {
        super();
    }
}
SchemaRowColoringRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaRowColoringRepository.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaVerticalGridRepository extends AggregateArchive {
    constructor() {
        super();
    }
}
SchemaVerticalGridRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaVerticalGridRepository.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaWarehouse {
    /**
     * @param {?} schemaCssClassesRepository
     * @param {?} schemaThemeRepository
     * @param {?} schemaHorizontalGridRepository
     * @param {?} schemaRowColoringRepository
     * @param {?} schemaVerticalGridRepository
     */
    constructor(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
        this.schemaCssClassesRepository = schemaCssClassesRepository;
        this.schemaThemeRepository = schemaThemeRepository;
        this.schemaHorizontalGridRepository = schemaHorizontalGridRepository;
        this.schemaRowColoringRepository = schemaRowColoringRepository;
        this.schemaVerticalGridRepository = schemaVerticalGridRepository;
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onTheme(schemaId = schemaGlobalId) {
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId());
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onHorizontalGrid(schemaId = schemaGlobalId) {
        return this.schemaHorizontalGridRepository.on(schemaId.toAggregateId());
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onVerticalGrid(schemaId = schemaGlobalId) {
        return this.schemaVerticalGridRepository.on(schemaId.toAggregateId());
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onRowColoring(schemaId = schemaGlobalId) {
        return this.schemaRowColoringRepository.on(schemaId.toAggregateId());
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onSingleTheme(schemaId = schemaGlobalId) {
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId())
            .pipe(take(1));
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onCssClasses(schemaId = schemaGlobalId) {
        return this.schemaCssClassesRepository
            .on(schemaId.toAggregateId());
    }
}
SchemaWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaWarehouse.ctorParameters = () => [
    { type: SchemaCssClassesRepository },
    { type: SchemaThemeRepository },
    { type: SchemaHorizontalGridRepository },
    { type: SchemaRowColoringRepository },
    { type: SchemaVerticalGridRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaCssClassesRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaThemeRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaHorizontalGridRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaRowColoringRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaVerticalGridRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureDialogColumnManagerService extends Reactive {
    /**
     * @param {?} injector
     * @param {?} schemaReadModelRepository
     * @param {?} structureThemeConverter
     * @param {?} fabricDialogService
     */
    constructor(injector, schemaReadModelRepository, structureThemeConverter, fabricDialogService) {
        super();
        this.injector = injector;
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.structureThemeConverter = structureThemeConverter;
        this.fabricDialogService = fabricDialogService;
    }
    /**
     * @param {?} compositionId
     * @param {?} readModelId
     * @return {?}
     */
    open(compositionId, readModelId) {
        /** @type {?} */
        const injector = Injector.create({ parent: this.injector, providers: [{ provide: CompositionId, useValue: compositionId }] });
        this.schemaReadModelRepository
            .onSingleTheme(readModelId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.fabricDialogService.open(StructureDialogColumnManagerComponent, {
                injector: injector,
                theme: this.structureThemeConverter.convertTheme(theme)
            });
        }));
    }
}
StructureDialogColumnManagerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureDialogColumnManagerService.ctorParameters = () => [
    { type: Injector },
    { type: SchemaWarehouse },
    { type: StructureThemeConverter },
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
    StructureDialogColumnManagerService.prototype.schemaReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.structureThemeConverter;
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
class StructureInfoPanelConfig {
    /**
     * @param {?=} enabled
     * @param {?=} infoDialog
     * @param {?=} columnsManager
     * @param {?=} sourceSize
     */
    constructor(enabled, infoDialog, columnsManager, sourceSize) {
        this.enabled = false;
        this.infoDialog = true;
        this.columnsManager = true;
        this.sourceSize = true;
        if (this.isNotUndefinedOrNull(enabled)) {
            this.enabled = enabled;
        }
        if (this.isNotUndefinedOrNull(infoDialog)) {
            this.infoDialog = infoDialog;
        }
        if (this.isNotUndefinedOrNull(columnsManager)) {
            this.columnsManager = columnsManager;
        }
        if (this.isNotUndefinedOrNull(sourceSize)) {
            this.sourceSize = sourceSize;
        }
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
    isInfoDialogEnabled() {
        return this.infoDialog;
    }
    /**
     * @return {?}
     */
    isColumnsManagerEnabled() {
        return this.columnsManager;
    }
    /**
     * @return {?}
     */
    isSourceSizeEnabled() {
        return this.sourceSize;
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    isNotUndefinedOrNull(config) {
        return config !== undefined && config !== null;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.infoDialog;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.columnsManager;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.sourceSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureInfoPanelArchive extends Archive {
    constructor() {
        super(new StructureInfoPanelConfig());
    }
}
StructureInfoPanelArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureInfoPanelArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureInfoPanelComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} sourceReadModelService
     * @param {?} dialog
     * @param {?} compositionId
     * @param {?} structureId
     * @param {?} schemaReadModelRootId
     * @param {?} menuColumnManagerService
     * @param {?} structureInfoPanelEnabledArchive
     */
    constructor(changeDetectorRef, renderer, elementRef, sourceReadModelService, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService, structureInfoPanelEnabledArchive) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.sourceReadModelService = sourceReadModelService;
        this.dialog = dialog;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.menuColumnManagerService = menuColumnManagerService;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.infoModal = StructureInfoModalComponent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureInfoPanelEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} infoPanel
         * @return {?}
         */
        (infoPanel) => {
            this.infoPanelConfig = infoPanel;
            this.changeDetectorRef.detectChanges();
        }));
        this.sourceReadModelService
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
        this.sourceReadModelService
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
    }
    /**
     * @return {?}
     */
    openInfo() {
        this.dialog.open(this.infoModal);
    }
    /**
     * @return {?}
     */
    openColumnManager() {
        this.menuColumnManagerService.open(this.compositionId, this.schemaReadModelRootId);
    }
}
StructureInfoPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-info-panel',
                template: `

		<div>
			<div *ngIf="infoPanelConfig.isSourceSizeEnabled()">

				<ng-container *ngIf="preparedItemsSize !== undefined && totalItemsSize !== undefined">

					<ng-container *ngIf="preparedItemsSize === totalItemsSize">
						Showing <b>{{totalItemsSize | numberFormatter}}</b> items
					</ng-container>

					<ng-container *ngIf="preparedItemsSize !== totalItemsSize">
						Showing <b>{{preparedItemsSize | numberFormatter}}</b> out of <b>{{totalItemsSize | numberFormatter}}</b> items
					</ng-container>

				</ng-container>

			</div>
		</div>

		<div>
			<div class="gui-right-section">

				<span *ngIf="infoPanelConfig.isColumnsManagerEnabled()"
					  (click)="openColumnManager()">
					<gui-structure-column-manager-icon>
					</gui-structure-column-manager-icon>
				</span>

				<span *ngIf="infoPanelConfig.isInfoDialogEnabled()"
					  [gui-tooltip]="'Info'"
					  (click)="openInfo()">
					<gui-structure-info-icon></gui-structure-info-icon>
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
    { type: StructureSourceWarehouse },
    { type: FabricDialogService },
    { type: CompositionId },
    { type: StructureId },
    { type: SchemaReadModelRootId },
    { type: StructureDialogColumnManagerService },
    { type: StructureInfoPanelArchive }
];
if (false) {
    /** @type {?} */
    StructureInfoPanelComponent.prototype.totalItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.preparedItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.rowHeight;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.infoModal;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.infoPanelConfig;
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
    StructureInfoPanelComponent.prototype.sourceReadModelService;
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
    StructureInfoPanelComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.menuColumnManagerService;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.structureInfoPanelEnabledArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CompositionReadModelRootRepository extends ReadModelRootRepository {
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
    CompositionReadModelRootRepository.prototype.on = function (compositionId) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const compositionGlobalId = new CompositionId('-1');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionWarehouse {
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
    onWidth(compositionId = compositionGlobalId) {
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
    onContainerWidth(compositionId = compositionGlobalId) {
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
    onWidthForEachColumn(compositionId = compositionGlobalId) {
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
    onHeaderColumns(compositionId = compositionGlobalId) {
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
    onAllColumns(compositionId = compositionGlobalId) {
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
    onSortOrder(fieldId, compositionId = compositionGlobalId) {
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
    onTemplateColumns(compositionId = compositionGlobalId) {
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
    onResizeWidth(compositionId = compositionGlobalId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.isResizeWidthEnabled())));
    }
}
CompositionWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionWarehouse.ctorParameters = () => [
    { type: CompositionReadModelRootRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionWarehouse.prototype.compositionRepository;
}

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
class ColumnId extends EntityId {
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
class CompositionCommandDispatcher {
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
    createComposition(compositionId = compositionGlobalId) {
        this.compositionDispatcher.createComposition(compositionId);
    }
    /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    setColumns(params, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setColumns(compositionId, params);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setWidth(width, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setWidth(compositionId, width);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnDefinitionId, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), true);
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnDefinitionId, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), false);
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnDefinitionId, compositionId = compositionGlobalId) {
        this.compositionDispatcher.moveLeft(compositionId, this.toColumnId(columnDefinitionId));
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnDefinitionId, compositionId = compositionGlobalId) {
        this.compositionDispatcher.moveRight(compositionId, this.toColumnId(columnDefinitionId));
    }
    /**
     * @private
     * @param {?} defId
     * @return {?}
     */
    toColumnId(defId) {
        return new ColumnId(defId.getId());
    }
}
CompositionCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionCommandDispatcher.ctorParameters = () => [
    { type: CompositionDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionCommandDispatcher.prototype.compositionDispatcher;
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
            this.compositionCommandService.disableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
        else {
            this.compositionCommandService.enableColumn(column.getColumnDefinitionId(), this.compositionId);
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
    { type: CompositionCommandDispatcher },
    { type: CompositionWarehouse }
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
const selector = 'gui-structure-column-manager-icon';
class StructureColumnManagerIconComponent {
}
StructureColumnManagerIconComponent.decorators = [
    { type: Component, args: [{
                selector: selector,
                template: `
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 10.31">
			<line class="cls-1" x1="9.57" y1="3.65" x2="0.75" y2="3.65"/>
			<line class="cls-2" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-2" x1="0.75" y1="9.56" x2="0.75" y2="0.88"/>
			<line class="cls-1" x1="3.69" y1="9.65" x2="3.69" y2="3.89"/>
			<line class="cls-1" x1="6.63" y1="9.56" x2="6.63" y2="3.89"/>
			<line class="cls-2" x1="9.57" y1="9.56" x2="9.57" y2="0.88"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class]': `"${selector}"`,
                    '[class.gui-icon]': 'true'
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
    StructureMenuColumnManagerComponent,
    StructureColumnManagerIconComponent
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
const selector$1 = 'gui-structure-info-icon';
class StructureInfoIconComponent {
}
StructureInfoIconComponent.decorators = [
    { type: Component, args: [{
                selector: selector$1,
                template: `
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.08 10.08">
			<path class="cls-1"
				  d="M401.64,307.76c0-.28.23-.45.54-.45s.55.17.55.45v0a.49.49,0,0,1-.55.46.48.48,0,0,1-.54-.46Zm.05,1.27a.49.49,0,0,1,1,0v2.54a.49.49,0,0,1-1,0Z"
				  transform="translate(-397.14 -304.64)"/>
			<circle class="cls-2" cx="5.04" cy="5.04" r="4.54"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class]': `"${selector$1}"`,
                    '[class.gui-icon]': 'true'
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureInfoPanelConfigConverter {
    /**
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        /** @type {?} */
        let infoDialog;
        /** @type {?} */
        let columnsManager;
        /** @type {?} */
        let sourceSize;
        if (config.infoDialog !== undefined) {
            infoDialog = config.infoDialog;
        }
        if (config.columnsManager !== undefined) {
            columnsManager = config.columnsManager;
        }
        if (config.sourceSize !== undefined) {
            sourceSize = config.sourceSize;
        }
        return new StructureInfoPanelConfig(config.enabled, infoDialog, columnsManager, sourceSize);
    }
}
StructureInfoPanelConfigConverter.decorators = [
    { type: Injectable }
];

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
                    FabricModule,
                    StructureColumnManagerModule
                ],
                declarations: [
                    StructureInfoPanelComponent,
                    StructureInfoModalComponent,
                    StructureInfoIconComponent
                ],
                exports: [
                    StructureInfoModalComponent,
                    StructureInfoPanelComponent
                ],
                entryComponents: [
                    StructureInfoModalComponent
                ],
                providers: [
                    StructureInfoPanelConfigConverter
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
            case CellView.NUMBER:
                return this.numberTemplate;
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
            case CellView.DATE:
                return this.dateTemplate;
            case CellView.BAR:
                return this.barTemplate;
            case CellView.PERCENTAGE_BAR:
                return this.percentageBarTemplate;
            case CellView.PERCENTAGE:
                return this.percentageTemplate;
            default:
                return this.textTemplate;
        }
    }
}
ViewTemplatesComponent.decorators = [
    { type: Component, args: [{
                template: `

		<ng-template #text let-element="element">
			<gui-view-text [value]="element"></gui-view-text>
		</ng-template>

		<ng-template #number let-element="element">
			<span class="gui-cell-number">
				{{ element.value }}
			</span>
		</ng-template>

		<ng-template #chip let-element="element">
			<gui-chip>
				<gui-view-text [value]="element"></gui-view-text>
			</gui-chip>
		</ng-template>

		<ng-template #link let-element="element">
			<a gui-button link="true" href="{{ element.value }}">
				<gui-view-text [value]="element"></gui-view-text>
			</a>
		</ng-template>

		<ng-template #image let-element="element">
			<img src="{{ element.value }}"/>
		</ng-template>

		<ng-template #checkbox let-element="element">
			<span class="gui-cell-boolean">
				<gui-checkbox [checked]="!!element.value" [disabled]="true"></gui-checkbox>
			</span>
		</ng-template>

		<ng-template #bold let-element="element">
			<gui-view-text bold [value]="element"></gui-view-text>
		</ng-template>

		<ng-template #italic let-element="element">
			<gui-view-text italic [value]="element"></gui-view-text>
		</ng-template>

		<ng-template #custom let-element="element">
			{{ element.value }}
		</ng-template>

		<ng-template #function let-element="element">
			<gui-function-view [element]="element"></gui-function-view>
		</ng-template>

		<ng-template #date let-element="element">
			<span class="gui-view-text">{{ element.value | date: 'dd/MM/yyyy' }}</span>
		</ng-template>

		<ng-template #bar let-element="element">
			<gui-bar-view [value]="element.value" [showPercentage]="false"></gui-bar-view>
		</ng-template>

		<ng-template #percentageBar let-element="element">
			<gui-bar-view [value]="element.value" [showPercentage]="true"></gui-bar-view>
		</ng-template>

		<ng-template #percentage let-element="element">
			<gui-percentage-view [value]="element.value"></gui-percentage-view>
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
    functionTemplate: [{ type: ViewChild, args: ['function', { read: TemplateRef, static: true },] }],
    dateTemplate: [{ type: ViewChild, args: ['date', { read: TemplateRef, static: true },] }],
    barTemplate: [{ type: ViewChild, args: ['bar', { read: TemplateRef, static: true },] }],
    percentageBarTemplate: [{ type: ViewChild, args: ['percentageBar', { read: TemplateRef, static: true },] }],
    percentageTemplate: [{ type: ViewChild, args: ['percentage', { read: TemplateRef, static: true },] }]
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
    /** @type {?} */
    ViewTemplatesComponent.prototype.dateTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.barTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.percentageBarTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.percentageTemplate;
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
    focus: [{ type: Input }],
    parent: [{ type: Input }]
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
    /** @type {?} */
    EditCommunicationComponent.prototype.parent;
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
            case DataType.DATE:
                return this.dateTemplate;
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

		<ng-template #date let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" let-parent="parent" >
			<gui-date-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus" [parent]="parent" >
			</gui-date-edit>
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
    dateTemplate: [{ type: ViewChild, args: ['date', { read: TemplateRef, static: true },] }],
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
    EditTemplatesComponent.prototype.dateTemplate;
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
     * @param {?} changed
     * @return {?}
     */
    toggle(changed) {
        this.valueChanges.emit(changed);
        this.submit();
    }
}
BooleanEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-boolean-edit',
                template: `

		<span class="gui-cell-boolean">
			<gui-checkbox #checkbox
						  [checked]="value"
						  [name]="filterFieldName"
						  (changed)="toggle($event)">
			</gui-checkbox>
		</span>

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
/** @enum {number} */
const CellValueType = {
    TEXT: 0,
    HTML: 1,
};
CellValueType[CellValueType.TEXT] = 'TEXT';
CellValueType[CellValueType.HTML] = 'HTML';
class CellValue {
    /**
     * @param {?} value
     * @param {?} type
     */
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static text(value) {
        return new CellValue(value, CellValueType.TEXT);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static HTML(value) {
        return new CellValue(value, CellValueType.HTML);
    }
}
if (false) {
    /** @type {?} */
    CellValue.prototype.value;
    /** @type {?} */
    CellValue.prototype.type;
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
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element.value);
    }
}
FunctionViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-function-view',
                template: `

		<div [innerHTML]="safeHTML"></div>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
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
     * @param {?} cellView
     */
    constructor(cellView) {
        this.templateFunction = (/**
         * @param {?} cellValue
         * @return {?}
         */
        (cellValue) => cellValue);
        if (typeof cellView === 'function') {
            this.view = CellView.FUNCTION;
            this.templateFunction = cellView;
        }
        else {
            this.view = cellView;
        }
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    static fromDataType(dataType) {
        if (dataType === DataType.DATE) {
            return new ViewEntity(CellView.DATE);
        }
        else {
            return new ViewEntity(CellView.TEXT);
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
/**
 * @abstract
 */
class AbstractColumnEntity extends Entity {
    /**
     * @protected
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} columnConfig
     * @param {?} presentation
     * @param {?=} header
     * @param {?=} align
     * @param {?=} view
     * @param {?=} width
     */
    constructor(columnId, columnField, columnConfig, presentation, header, align, view, width) {
        super(columnId);
        this.columnField = columnField;
        this.columnConfig = columnConfig;
        this.presentation = presentation;
        this.view = ViewEntity.fromDataType(columnField.getDataType());
        if (header) {
            this.header = header;
        }
        if (view) {
            this.view = view;
        }
        if (width) {
            this.width = width;
        }
        this.setInitialAlign(columnField, align);
    }
    /**
     * @return {?}
     */
    getPresentation() {
        return this.presentation;
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
     * @param {?} view
     * @return {?}
     */
    setView(view) {
        this.view = view;
    }
    /**
     * @param {?} header
     * @return {?}
     */
    setHeader(header) {
        this.header = header;
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
    getAlign() {
        return this.align;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.width = width;
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
    /**
     * @return {?}
     */
    isCellEditingEnabled() {
        /** @type {?} */
        const config = this.columnConfig;
        if (config.cellEditing !== undefined && config.cellEditing !== null) {
            if (config.cellEditing.enabled === undefined || config.cellEditing.enabled === null) {
                return true;
            }
            return config.cellEditing.enabled;
        }
        return true;
    }
    /**
     * @private
     * @param {?} columnField
     * @param {?=} align
     * @return {?}
     */
    setInitialAlign(columnField, align) {
        if (align !== undefined && align !== null) {
            this.align = align;
        }
        else if (columnField.getDataType() === DataType.NUMBER) {
            this.align = ColumnAlign.RIGHT;
        }
        else {
            this.align = ColumnAlign.LEFT;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.columnField;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.header;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.width;
    /**
     * @type {?}
     * @protected
     */
    AbstractColumnEntity.prototype.align;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.columnConfig;
    /**
     * @type {?}
     * @protected
     */
    AbstractColumnEntity.prototype.view;
    /**
     * @type {?}
     * @protected
     */
    AbstractColumnEntity.prototype.presentation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnEntity extends AbstractColumnEntity {
    /**
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} columnConfig
     * @param {?} enabled
     * @param {?} presentation
     * @param {?} header
     * @param {?} align
     * @param {?} view
     * @param {?} width
     */
    constructor(columnId, columnField, columnConfig, enabled, presentation, header, align, view, width) {
        super(columnId, columnField, columnConfig, presentation, header, align, view, width);
        this.sortStatus = SortOrder.NONE;
        this.enabled = true;
        this.enabled = enabled;
        if (view === undefined) {
            this.view = new ViewEntity(this.presentation.getDefaultView());
        }
        if (align === undefined) {
            this.align = this.presentation.getDefaultAlign(this.view);
        }
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
    getSortStatus() {
        return this.sortStatus;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setSortStatus(status) {
        this.sortStatus = status;
    }
}
if (false) {
    /** @type {?} */
    ColumnEntity.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.enabled;
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
     * @param {?} columnDefinitionId
     * @param {?} sortStatus
     * @param {?} enabled
     * @param {?} sortable
     * @param {?} align
     */
    constructor(viewTemplate, editTemplate, context, width, fieldId, columnDefinitionId, sortStatus, enabled, sortable, align) {
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
        this.context = context;
        this.width = width;
        this.fieldId = fieldId;
        this.columnDefinitionId = columnDefinitionId;
        this.sortStatus = sortStatus;
        this.enabled = enabled;
        this.sortable = sortable;
        this.align = align;
    }
    /**
     * @return {?}
     */
    getColumnDefinitionId() {
        return this.columnDefinitionId;
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
    /**
     * @return {?}
     */
    isAlignLeft() {
        return this.align === ColumnAlign.LEFT;
    }
    /**
     * @return {?}
     */
    isAlignCenter() {
        return this.align === ColumnAlign.CENTER;
    }
    /**
     * @return {?}
     */
    isAlignRight() {
        return this.align === ColumnAlign.RIGHT;
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
    CellTemplateWithContext.prototype.columnDefinitionId;
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
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.align;
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
     * @param {?} templateFun
     * @param {?} accessor
     * @param {?} searchAccessor
     * @param {?} width
     * @param {?} columnFieldId
     * @param {?} align
     * @param {?} cellEditingEnabled
     * @param {?} type
     * @param {?} view
     */
    constructor(template, editTemplate, editable, templateFun, accessor, searchAccessor, width, columnFieldId, align, cellEditingEnabled, type, // REFACTOR
    view) {
        this.template = template;
        this.editTemplate = editTemplate;
        this.editable = editable;
        this.templateFun = templateFun;
        this.accessor = accessor;
        this.searchAccessor = searchAccessor;
        this.width = width;
        this.columnFieldId = columnFieldId;
        this.align = align;
        this.cellEditingEnabled = cellEditingEnabled;
        this.type = type;
        this.view = view;
    }
    /**
     * @return {?}
     */
    isCellEditingEnabled() {
        return this.cellEditingEnabled;
    }
    /**
     * @return {?}
     */
    isBooleanDataType() {
        return this.type === DataType.BOOLEAN;
    }
    /**
     * @return {?}
     */
    isAlignLeft() {
        return this.align === ColumnAlign.LEFT;
    }
    /**
     * @return {?}
     */
    isAlignCenter() {
        return this.align === ColumnAlign.CENTER;
    }
    /**
     * @return {?}
     */
    isAlignRight() {
        return this.align === ColumnAlign.RIGHT;
    }
    // REFACTOR #1581
    /**
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    getValue(entity, searchPhrase) {
        /** @type {?} */
        const cellValue = this.findValue(entity, searchPhrase);
        cellValue.value = this.templateFun(cellValue.value);
        return cellValue;
    }
    /**
     * @private
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    findValue(entity, searchPhrase) {
        /** @type {?} */
        const value = this.accessor(entity);
        if (this.type !== DataType.STRING) {
            return CellValue.text(value);
        }
        if (this.view && this.view.getCellView() === CellView.FUNCTION) {
            return CellValue.text(value);
        }
        if (searchPhrase) {
            /** @type {?} */
            let txt = '' + this.searchAccessor(entity);
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
            return CellValue.HTML(txt);
        }
        else {
            return CellValue.text(value);
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
    CellTemplateWithAccessor.prototype.templateFun;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.accessor;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.searchAccessor;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.width;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.columnFieldId;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithAccessor.prototype.align;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithAccessor.prototype.cellEditingEnabled;
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
class ColumnDefinition extends ReadModelEntity {
    /**
     * @param {?} field
     * @param {?} columnDefinitionId
     * @param {?} enabled
     * @param {?} type
     * @param {?} view
     * @param {?} align
     * @param {?} header
     * @param {?} cellEditingEnabled
     * @param {?=} sort
     * @param {?=} sortable
     */
    constructor(field, columnDefinitionId, // REFACTOR Id first argument
    enabled, type, // REFACTOR
    view, // REFACTOR
    align, // REFACTOR
    header, cellEditingEnabled, sort = SortOrder.NONE, sortable = true) {
        super(columnDefinitionId);
        this.type = type;
        this.view = view;
        this.align = align;
        this.sortable = true;
        this.field = field;
        this.columnDefinitionId = columnDefinitionId;
        this.enabled = enabled;
        this.header = header;
        this.cellEditingEnabled = cellEditingEnabled;
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
     * @param {?} templateFun
     * @return {?}
     */
    setTemplateFunction(templateFun) {
        this.templateFunction = templateFun;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getHeaderCellTemplateWithContext(index) {
        /** @type {?} */
        let header = this.header || '';
        /** @type {?} */
        let headerCellContext;
        if (typeof header === 'string') {
            headerCellContext = new CellContext(CellValue.text(header));
        }
        else if (typeof header === 'function') {
            headerCellContext = new CellContext(CellValue.text(header(index)));
        }
        /** @type {?} */
        const fieldId = new FieldId(this.field.getId().getId());
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnDefinitionId, this.sortStatus, this.enabled, this.sortable, this.align);
    }
    /**
     * @return {?}
     */
    getContentCellTemplateWithAccessor() {
        /** @type {?} */
        const accessor = (/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            return this.field.getAccessor()(entity);
        });
        /** @type {?} */
        const searchAccessor = (/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            return this.field.getSearchAccessor()(entity);
        });
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, this.templateFunction, accessor, searchAccessor, this.width, this.field.getId(), this.align, this.cellEditingEnabled, this.type, this.view);
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
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.templateFunction;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.columnDefinitionId;
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
    ColumnDefinition.prototype.cellEditingEnabled;
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
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.align;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnDefinitionId extends ReadModelEntityId {
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
        let columnDef = new ColumnDefinition(column.getField(), new ColumnDefinitionId(column.getId().toString()), column.isEnabled(), column.getDataType(), column.getView(), column.getAlign(), column.getHeader(), column.isCellEditingEnabled(), column.getSortStatus(), column.getSortingEnabled());
        columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.setTemplateFunction(column.getTemplateFunction());
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.getWidth();
        return columnDef;
    }
    /**
     * @private
     * @param {?} activeColumn
     * @return {?}
     */
    createFromActiveColumnEntity(activeColumn) {
        /** @type {?} */
        let columnDef = new ColumnDefinition(activeColumn.getField(), new ColumnDefinitionId(activeColumn.getId().toString()), true, // remove,
        activeColumn.getDataType(), activeColumn.getView(), activeColumn.getAlign(), activeColumn.getHeader(), activeColumn.isCellEditingEnabled(), activeColumn.getSortStatus(), activeColumn.getSortingEnabled());
        columnDef.cellTemplate = this.findViewTemplate(activeColumn.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.setTemplateFunction(activeColumn.getTemplateFunction());
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
class CompositionReadModeRoot extends ReadModelRoot {
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
    CompositionReadModeRoot.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.allColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.activeColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.resizeWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionReadModelRootConverter {
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
        const aggregateId = aggregate.getId();
        return new CompositionReadModeRoot(aggregateId.toReadModelRootId(), ready, allColumnDefs, activeColumnDefs, width, resizeWidth);
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
CompositionReadModelRootConverter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionReadModelRootConverter.ctorParameters = () => [
    { type: ColumnDefinitionFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionReadModelRootConverter.prototype.columnDefinitionFactory;
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
    { type: CompositionReadModelRootConverter }
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
class CompositionCreatedEvent extends DomainEvent {
    /**
     * @param {?} compositionId
     */
    constructor(compositionId) {
        super(compositionId, 'CompositionCreatedEvent');
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
     * @param {?} compositionId
     */
    constructor(compositionId) {
        super(compositionId, 'CompositionColumnsSetEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionContainerWidthSetEvent extends DomainEvent {
    /**
     * @param {?} compositionId
     * @param {?} payload
     */
    constructor(compositionId, payload) {
        super(compositionId, 'CompositionContainerWidthSetEvent', payload);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionWidthSetEvent extends DomainEvent {
    /**
     * @param {?} compositionId
     */
    constructor(compositionId) {
        super(compositionId, 'CompositionWidthSetEvent');
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
class InMemoryCompositionRepository extends CompositionReadModelRootRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryCompositionReadStore
     */
    constructor(domainEventBus, inMemoryCompositionReadStore) {
        super(domainEventBus);
        this.inMemoryCompositionReadStore = inMemoryCompositionReadStore;
        this.compositionIdToComposition = new Map();
        this.composition$ = new ReplaySubject(1);
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    on(compositionId) {
        return this.composition$
            .asObservable()
            .pipe(filter((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        (compositionIdToComposition) => {
            /** @type {?} */
            const key = compositionId.getId();
            return compositionIdToComposition.has(key);
        })), map((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        (compositionIdToComposition) => compositionIdToComposition.get(compositionId.getId()))));
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
        const optComposition = this.inMemoryCompositionReadStore.getById(aggregateId);
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
    InMemoryCompositionRepository.prototype.inMemoryCompositionReadStore;
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
const inMemoryCompositionReadModelProviders = [
    InMemoryCompositionReadStore,
    {
        provide: CompositionReadModelRootRepository,
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
/**
 * @abstract
 */
class ColumnPresentation {
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    ColumnPresentation.prototype.getPossibleViews = function () { };
    /**
     * @abstract
     * @return {?}
     */
    ColumnPresentation.prototype.getDefaultView = function () { };
    /**
     * @abstract
     * @param {?} view
     * @return {?}
     */
    ColumnPresentation.prototype.getDefaultAlign = function (view) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberColumnPresentation extends ColumnPresentation {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static getInstance() {
        if (!NumberColumnPresentation.instance) {
            NumberColumnPresentation.instance = new NumberColumnPresentation();
        }
        return NumberColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.BAR,
            CellView.PERCENTAGE_BAR,
            CellView.PERCENTAGE
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.NUMBER;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    getDefaultAlign(view) {
        return ColumnAlign.RIGHT;
    }
}
NumberColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberColumnPresentation.instance;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanColumnPresentation extends ColumnPresentation {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static getInstance() {
        if (!BooleanColumnPresentation.instance) {
            BooleanColumnPresentation.instance = new BooleanColumnPresentation();
        }
        return BooleanColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.CHIP,
            CellView.BOLD,
            CellView.CHECKBOX
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.TEXT;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    getDefaultAlign(view) {
        if (view.getCellView() === CellView.CHECKBOX) {
            return ColumnAlign.CENTER;
        }
        else {
            return ColumnAlign.LEFT;
        }
    }
}
BooleanColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanColumnPresentation.instance;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateColumnPresentation extends ColumnPresentation {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static getInstance() {
        if (!DateColumnPresentation.instance) {
            DateColumnPresentation.instance = new DateColumnPresentation();
        }
        return DateColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.DATE,
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.CHIP
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.DATE;
    }
    /**
     * @return {?}
     */
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
}
DateColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateColumnPresentation.instance;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringColumnPresentation extends ColumnPresentation {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static getInstance() {
        if (!StringColumnPresentation.instance) {
            StringColumnPresentation.instance = new StringColumnPresentation();
        }
        return StringColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.IMAGE,
            CellView.LINK,
            CellView.CHIP
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.TEXT;
    }
    /**
     * @return {?}
     */
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
}
StringColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringColumnPresentation.instance;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnknownColumnPresentation extends ColumnPresentation {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static getInstance() {
        if (!UnknownColumnPresentation.instance) {
            UnknownColumnPresentation.instance = new UnknownColumnPresentation();
        }
        return UnknownColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.TEXT;
    }
    /**
     * @return {?}
     */
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
}
UnknownColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnknownColumnPresentation.instance;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnPresentationConverter {
    /**
     * @param {?} dataType
     * @return {?}
     */
    convert(dataType) {
        if (dataType === DataType.NUMBER) {
            return NumberColumnPresentation.getInstance();
        }
        else if (dataType === DataType.BOOLEAN) {
            return BooleanColumnPresentation.getInstance();
        }
        else if (dataType === DataType.DATE) {
            return DateColumnPresentation.getInstance();
        }
        else if (dataType === DataType.STRING) {
            return StringColumnPresentation.getInstance();
        }
        else {
            return UnknownColumnPresentation.getInstance();
        }
    }
}
ColumnPresentationConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnEntityFactory {
    /**
     * @param {?} columnPresentationConverter
     */
    constructor(columnPresentationConverter) {
        this.columnPresentationConverter = columnPresentationConverter;
    }
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
        let columnConfig = params.getColumn();
        /** @type {?} */
        let field = params.getField();
        /** @type {?} */
        let width = this.convertWidth(columnConfig.width) || undefined;
        /** @type {?} */
        let view;
        /** @type {?} */
        let enabled;
        /** @type {?} */
        let dataType = field.getDataType();
        if (columnConfig.view !== undefined) {
            view = new ViewEntity(columnConfig.view);
        }
        if (columnConfig.enabled !== undefined) {
            enabled = columnConfig.enabled;
        }
        else {
            enabled = true;
        }
        /** @type {?} */
        const presentation = this.getPresentation(dataType);
        /** @type {?} */
        let columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig, enabled, presentation, undefined, columnConfig.align, view, width);
        if (columnConfig.header !== undefined) {
            columnEntity.setHeader(columnConfig.header);
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
    /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    getPresentation(dataType) {
        return this.columnPresentationConverter.convert(dataType);
    }
}
ColumnEntityFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ColumnEntityFactory.ctorParameters = () => [
    { type: ColumnPresentationConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnEntityFactory.prototype.columnPresentationConverter;
}

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
     * @param {?} searchAccessor
     */
    constructor(fieldId, accessor, dataType, searchAccessor) {
        this.fieldId = fieldId;
        this.accessor = accessor;
        this.dataType = dataType;
        this.searchAccessor = searchAccessor;
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
    getSearchAccessor() {
        return this.searchAccessor;
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
    ColumnField.prototype.searchAccessor;
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
     * @param {?} searchAccessor
     * @return {?}
     */
    create(columnFieldId, accessor, dataType, searchAccessor) {
        return new ColumnField(columnFieldId, accessor, dataType, searchAccessor);
    }
}
ColumnFieldFactory.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionEventRepository {
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
            .ofEvent((/** @type {?} */ (CompositionColumnsSetEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === compositionId.toString())));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onContainerWidthChanged(compositionId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (CompositionContainerWidthSetEvent)))
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
CompositionEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionEventRepository.prototype.domainEventBus;
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
    ColumnPresentationConverter,
    CompositionEventConverter,
    ColumnFieldFactory
];
/** @type {?} */
const readProviders = [
    ...inMemoryCompositionReadModelProviders,
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
    CompositionReadModelRootConverter,
    CompositionCommandDispatcher,
    CompositionWarehouse,
    CompositionEventRepository
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
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
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
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionWidthSetEvent(this.getAggregateId());
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
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionContainerWidthSetEvent(this.getAggregateId(), this.containerWidth);
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
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionResizeWidthSetEvent(this.getAggregateId());
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
    toDomainEvent() {
        return new CompositionColumnSetEnabledEvent(this.getAggregateId());
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
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionChangeSortStatusAggregateEvent');
        this.activeColumns = activeColumns;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionChangeSortStatusEvent(this.getAggregateId(), this.activeColumns);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusAggregateEvent.prototype.activeColumns;
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
        return new CompositionChangeSortStatusAggregateEvent(this.getCompositionId(), this.columns);
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
        c => c.getId().equals(columnId)));
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
class ActiveColumnEntity extends ColumnEntity {
    /**
     * @param {?} entity
     * @return {?}
     */
    static fromEntity(entity) {
        return new ActiveColumnEntity(entity.getId(), entity.getField(), entity.getHeader(), entity.getAlign(), entity.getView(), entity.getColumnConfig(), entity.getPresentation());
    }
    /**
     * @private
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} header
     * @param {?} align
     * @param {?} view
     * @param {?} config
     * @param {?} presentation
     */
    constructor(columnId, columnField, header, align, view, config, presentation) {
        super(columnId, columnField, config, true, presentation, header, align, view, undefined);
    }
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
        return ActiveColumnEntity.fromEntity(entity);
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
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionColumnMovedLeftEvent(this.getAggregateId());
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
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionColumnMovedRightEvent(this.getAggregateId());
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
     * @param {?} compositionId
     */
    constructor(compositionId) {
        super(compositionId, 'ColumnsSetAggregateEvent');
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionColumnsSetEvent(this.getAggregateId());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionCreatedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} compositionId
     */
    constructor(compositionId) {
        super(compositionId, 'SchemaCreatedEvent');
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionCreatedEvent(this.getAggregateId());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompositionAggregate extends AggregateRoot {
    /**
     * @param {?} id
     * @param {?} columnFactory
     * @param {?=} columnsParams
     * @param {?=} width
     * @param {?=} resizeWidth
     */
    constructor(id, columnFactory, columnsParams = [], width, resizeWidth) {
        super(id, 'CompositionAggregate');
        this.allColumns = [];
        this.resizeWidthEnabled = true;
        this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        /** @type {?} */
        const columnConfigs = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        (param) => param.getColumn()));
        this.baseParams = columnsParams;
        this.baseColumns = columnConfigs;
        this.columnFactory = columnFactory;
        this.width = width;
        this.allColumns = this.columnFactory.create(columnsParams);
        /** @type {?} */
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer = new ActiveColumnContainer(this.getId(), activeColumns, width, columnConfigs);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            this.resizeWidthEnabled = resizeWidth;
        }
    }
    /**
     * @return {?}
     */
    createEvent() {
        return CompositionCreatedAggregateEvent;
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
            if (column.getId().getId() === columnId.getId()) {
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
        c => c.getColumnConfig())));
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
        (column) => column.getId().equals(columnId)));
    }
    /**
     * @private
     * @return {?}
     */
    getMinColumnWidth() {
        return this.activeColumnContainer.getMinColumnWidth();
    }
}
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
     * Value taken from user config [width]
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
class CompositionAggregateFactory extends AggregateFactory {
    /**
     * @param {?} columnFactory
     */
    constructor(columnFactory) {
        super();
        this.columnFactory = columnFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    create(id) {
        return new CompositionAggregate(id, this.columnFactory);
    }
}
CompositionAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionAggregateFactory.ctorParameters = () => [
    { type: ColumnEntityFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionAggregateFactory.prototype.columnFactory;
}

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
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionCreatedEvent(command.getAggregateId()));
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
    publishDomainEvents(aggregate, command) {
        this.publishEvents(aggregate, command);
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
    publishDomainEvents(aggregate, command) {
        this.publishEvents(aggregate, command);
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionWidthSetEvent(command.getAggregateId()));
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
    publishDomainEvents(aggregate, command) {
        this.publishEvents(aggregate, command);
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
    publishDomainEvents(aggregate, command) {
        this.publishEvents(aggregate, command);
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
    publishDomainEvents(composition, command) {
        /** @type {?} */
        const compositionId = command.getAggregateId();
        /** @type {?} */
        const columns = composition.getActiveColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.publishAggregateEvents((/** @type {?} */ (aggregate.getEvents())));
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionResizeWidthSetEvent(command.getAggregateId()));
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
class DateEditTemplateComponent extends EditCommunicationComponent {
    constructor() {
        super();
        this.filterFieldName = 'dateEdit';
        this.opened = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const inputElement = this.datePickerRef.nativeElement.querySelector('.gui-date-picker-input');
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
     * @param {?} changed
     * @return {?}
     */
    toggle(changed) {
        this.valueChanges.emit(changed);
    }
    /**
     * @param {?} opened
     * @return {?}
     */
    dialogOpened(opened) {
        this.opened = opened;
        if (!opened) {
            this.unsubscribe();
            this.submit();
        }
    }
}
DateEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-edit',
                template: `

		<gui-date-picker #datepicker
						 [selectDate]="value"
						 [name]="filterFieldName"
						 [openDialog]="true"
						 [onlyDialog]="false"
						 [parentElement]="parent"
						 (dialogOpened)="dialogOpened($event)"
						 (dateSelected)="toggle($event)">
		</gui-date-picker>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
DateEditTemplateComponent.ctorParameters = () => [];
DateEditTemplateComponent.propDecorators = {
    datePickerRef: [{ type: ViewChild, args: ['datepicker', { read: ElementRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    DateEditTemplateComponent.prototype.datePickerRef;
    /** @type {?} */
    DateEditTemplateComponent.prototype.filterFieldName;
    /**
     * @type {?}
     * @private
     */
    DateEditTemplateComponent.prototype.opened;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BarViewComponent {
    constructor() {
        this.showPercentage = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value !== undefined && changes.value !== null) {
            this.width = this.value > 100 ? 100 : this.value;
        }
    }
}
BarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-bar-view[value]',
                template: `
		<div class="gui-percentage-bar">
			<div class="gui-percentage" [style.width.%]="width">
			</div>
			<gui-percentage-view *ngIf="showPercentage"
								 [value]="value">
			</gui-percentage-view>
		</div>
	`,
                host: {
                    '[class.gui-bar-view]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
BarViewComponent.propDecorators = {
    value: [{ type: Input }],
    showPercentage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BarViewComponent.prototype.value;
    /** @type {?} */
    BarViewComponent.prototype.showPercentage;
    /** @type {?} */
    BarViewComponent.prototype.width;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PercentageViewComponent {
}
PercentageViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-percentage-view[value]',
                template: `
		{{ value }} %
	`,
                host: {
                    '[class.gui-percentage-view]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
PercentageViewComponent.propDecorators = {
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PercentageViewComponent.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextViewComponent {
    /**
     * @param {?} isBold
     * @param {?} isItalic
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(isBold, isItalic, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isHtml = false;
        if (isBold !== null) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-bold');
        }
        if (isItalic !== null) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-italic');
        }
        this.elementRef.nativeElement.className;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.isHtml = this.value.type === CellValueType.HTML;
    }
}
TextViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-view-text[value]',
                template: `

		<ng-container *ngIf="isHtml; else text">
			<span [innerHTML]="value.value | guiSafe: 'html'"></span>
		</ng-container>
		
		<ng-template #text>
			<span >
				{{value.value}}
			</span>
		</ng-template>
	`,
                host: {
                    '[class.gui-text-view]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
TextViewComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Attribute, args: ['bold',] }] },
    { type: undefined, decorators: [{ type: Attribute, args: ['italic',] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
TextViewComponent.propDecorators = {
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextViewComponent.prototype.value;
    /** @type {?} */
    TextViewComponent.prototype.isHtml;
    /**
     * @type {?}
     * @private
     */
    TextViewComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TextViewComponent.prototype.renderer;
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
        super(aggregateId, 'SortToggledEvent');
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
class CompositionChangeSortStatusEventHandler {
    /**
     * @param {?} compositionDispatcher
     */
    constructor(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @return {?}
     */
    forEvents() {
        return [
            SortToggledEvent,
            SortOrderSetEvent
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SortToggledEvent')) {
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
        if (event.ofMessageType('SortOrderSetEvent')) {
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
/** @type {?} */
const components = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    StringEditTemplateComponent,
    NumberEditTemplateComponent,
    BooleanEditTemplateComponent,
    DateEditTemplateComponent,
    ColumnQueryComponent,
    FunctionViewComponent,
    BarViewComponent,
    PercentageViewComponent,
    TextViewComponent
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
    FunctionViewComponent,
    BarViewComponent,
    PercentageViewComponent
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
                    FabricDatePickerModule,
                    HermesModule.defineAggregate(compositionKey, CompositionAggregateFactory, InMemoryCompositionAggregateRepository, CreateCompositionCommandHandler, [
                        ...HermesModule.registerCommandHandler(SetColumnsCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionResizeWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionContainerWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionSetColumnEnabledCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionChangeSortStatusCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveLeftColumnCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveRightColumnCommandHandler, compositionKey)
                    ], [
                        ...HermesModule.registerMultiDomainEventHandler(CompositionChangeSortStatusEventHandler)
                    ])
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
class LocalPagingCommandDispatcher extends PagingCommandDispatcher {
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
LocalPagingCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: PagingManagerFactory },
    { type: PagingDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "setPaging", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "changePageSize", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "nextPage", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "prevPage", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandDispatcher.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandDispatcher.prototype.aggregateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalPagingWarehouse extends PagingWarehouse {
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
LocalPagingWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: PagingRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalPagingWarehouse.prototype, "onPaging", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalPagingWarehouse.prototype, "onSinglePaging", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingWarehouse.prototype.structureId;
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
class StructureFormationDispatcher {
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
    setDefaultFormation(structureId = structureGlobalId) {
        this.formationDispatcher.setDefault(structureId);
    }
    /**
     * @param {?} selectedRow
     * @param {?=} structureId
     * @return {?}
     */
    toggleSelectedRow(selectedRow, structureId = structureGlobalId) {
        this.formationDispatcher.toggleSelectedRow(structureId, selectedRow);
    }
}
StructureFormationDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFormationDispatcher.ctorParameters = () => [
    { type: FormationDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFormationDispatcher.prototype.formationDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalFormationCommandDispatcher extends StructureFormationDispatcher {
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
LocalFormationCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: FormationDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocalFormationCommandDispatcher.prototype, "toggleSelectedRow", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandDispatcher.prototype.structureId;
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
    { type: StructureReadModelRepository }
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
class StructureFormationWarehouse {
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
    onSelectedRows(structureId = structureGlobalId) {
        return this.formationRepository
            .onFormation(structureId)
            .pipe(map((/**
         * @param {?} formation
         * @return {?}
         */
        (formation) => formation.getSelectedRows())));
    }
}
StructureFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFormationWarehouse.ctorParameters = () => [
    { type: FormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFormationWarehouse.prototype.formationRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalFormationWarehouse extends StructureFormationWarehouse {
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
LocalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: FormationRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalFormationWarehouse.prototype, "onSelectedRows", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationWarehouse.prototype.structureId;
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
class StructureFilterCommandDispatcher {
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
StructureFilterCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterCommandDispatcher.prototype.commandDispatcher;
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
class StructureSetHeightCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} height
     */
    constructor(structureId, height) {
        super(structureId, 'StructureSetHeightCommand');
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
    StructureSetHeightCommand.prototype.height;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetRowHeightBasedOnThemeCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} theme
     */
    constructor(structureId, theme) {
        super(structureId, 'SetRowHeightBasedOnThemeCommand');
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
    SetRowHeightBasedOnThemeCommand.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCommandDispatcher {
    /**
     * @param {?} commandDispatcher
     * @param {?} structureFilterCommandService
     * @param {?} sourceDispatcher
     */
    constructor(commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    createStructure(structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new CreateStructureCommand(structureId));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    enableVerticalScroll(structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    disableVerticalScroll(structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    }
    /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    setScrollPosition(position, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items, structureId = structureGlobalId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setFilterConfig(config, structureId = structureGlobalId) {
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setQuickFiltersConfig(config, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new StructureSetConfigQuickFilterCommand(structureId, config));
    }
    /**
     * @param {?} rowHeight
     * @param {?=} structureId
     * @return {?}
     */
    setRowHeight(rowHeight, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, +rowHeight));
    }
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    setContainerHeight(height, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new StructureSetHeightCommand(structureId, +height));
    }
    /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    setRowHeightBasedOnTheme(theme, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetRowHeightBasedOnThemeCommand(structureId, theme));
    }
}
StructureCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: StructureFilterCommandDispatcher },
    { type: SourceDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCommandDispatcher.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureCommandDispatcher.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureCommandDispatcher.prototype.sourceDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStructureCommandDispatcher extends StructureCommandDispatcher {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} commandDispatcher
     * @param {?} structureFilterCommandService
     * @param {?} sourceDispatcher
     */
    constructor(structureId, compositionId, commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        super(commandDispatcher, structureFilterCommandService, sourceDispatcher);
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
    setFilterConfig(config, structureId = structureGlobalId) {
        super.setFilterConfig(config, this.structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setQuickFiltersConfig(config, structureId = structureGlobalId) {
        super.setQuickFiltersConfig(config, this.structureId);
    }
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    setRowHeight(rowHeight) {
        super.setRowHeight(rowHeight, this.structureId);
    }
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    setContainerHeight(rowHeight) {
        super.setContainerHeight(rowHeight, this.structureId);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setRowHeightBasedOnTheme(theme) {
        super.setRowHeightBasedOnTheme(theme, this.structureId);
    }
}
LocalStructureCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: CompositionId },
    { type: CommandDispatcher },
    { type: StructureFilterCommandDispatcher },
    { type: SourceDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "createStructure", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "enableVerticalScroll", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "disableVerticalScroll", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "setScrollPosition", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "setOrigin", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, StructureId]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "setFilterConfig", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, StructureId]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "setQuickFiltersConfig", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "setRowHeight", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "setContainerHeight", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "setRowHeightBasedOnTheme", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandDispatcher.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandDispatcher.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureWarehouse {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onStructure(aggregateId = structureGlobalId) {
        return this.structureRepository.onStructure(aggregateId);
    }
}
StructureWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureWarehouse.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStructureWarehouse extends StructureWarehouse {
    /**
     * @param {?} structureId
     * @param {?} structureRepository
     */
    constructor(structureId, structureRepository) {
        super(structureRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onStructure() {
        return super.onStructure(this.structureId);
    }
}
LocalStructureWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: StructureReadModelRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalStructureWarehouse.prototype, "onStructure", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureWarehouse.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldUiArchive extends AggregateArchive {
    constructor() {
        super();
    }
}
FieldUiArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldUiArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldUiRepository {
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
        return this.structureFieldUiArchive.on(structureId);
    }
}
FieldUiRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldUiRepository.ctorParameters = () => [
    { type: FieldUiArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldUiRepository.prototype.structureFieldUiArchive;
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
class SourceCommandDispatcher extends Reactive {
    /**
     * @param {?} sourceDispatcher
     * @param {?} structureFieldUiRepository
     * @param {?} sourceReadModelService
     */
    constructor(sourceDispatcher, structureFieldUiRepository, sourceReadModelService) {
        super();
        this.sourceDispatcher = sourceDispatcher;
        this.structureFieldUiRepository = structureFieldUiRepository;
        this.sourceReadModelService = sourceReadModelService;
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items, structureId = structureGlobalId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    setLoading(enabled, structureId = structureGlobalId) {
        this.sourceDispatcher.setLoading(structureId, enabled);
    }
    /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    editItem(params, structureId = structureGlobalId) {
        this.sourceDispatcher.editItem(structureId, params);
    }
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    editItemByIndex(itemIndex, fieldIndex, value, structureId = structureGlobalId) {
        /** @type {?} */
        const itemId$ = this.sourceReadModelService
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
SourceCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceCommandDispatcher.ctorParameters = () => [
    { type: SourceDispatcher },
    { type: FieldUiRepository },
    { type: StructureSourceWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.structureFieldUiRepository;
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.sourceReadModelService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalSourceCommandDispatcher extends SourceCommandDispatcher {
    /**
     * @param {?} structureId
     * @param {?} sourceDispatcher
     * @param {?} structureFieldUiRepository
     * @param {?} sourceReadModelService
     */
    constructor(structureId, sourceDispatcher, structureFieldUiRepository, sourceReadModelService) {
        super(sourceDispatcher, structureFieldUiRepository, sourceReadModelService);
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
LocalSourceCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: SourceDispatcher },
    { type: FieldUiRepository },
    { type: StructureSourceWarehouse }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], LocalSourceCommandDispatcher.prototype, "setOrigin", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], LocalSourceCommandDispatcher.prototype, "setLoading", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StructureEditSourceItemParams]),
    __metadata("design:returntype", void 0)
], LocalSourceCommandDispatcher.prototype, "editItem", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], LocalSourceCommandDispatcher.prototype, "editItemByIndex", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandDispatcher.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalSourceWarehouse extends StructureSourceWarehouse {
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
LocalSourceWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: StructureReadModelRepository },
    { type: StructurePreparedItemsRepository },
    { type: StructureSourceOriginRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onEntities", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onEntitiesSize", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onSingleEntities", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onOriginSize", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onLoading", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSourceWarehouse.prototype, "onPreparedEntities", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceWarehouse.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalCompositionCommandDispatcher extends CompositionCommandDispatcher {
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
    createComposition(compositionId = compositionGlobalId) {
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
    setWidth(width, compositionId = compositionGlobalId) {
        super.setWidth(width, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = compositionGlobalId) {
        super.setContainerWidth(width, this.compositionId);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = compositionGlobalId) {
        super.setResizeWidth(enabled, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnDefId, compositionId = compositionGlobalId) {
        super.enableColumn(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnDefId, compositionId = compositionGlobalId) {
        super.disableColumn(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnDefId, compositionId = compositionGlobalId) {
        super.moveLeft(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnDefId, compositionId = compositionGlobalId) {
        super.moveRight(columnDefId, this.compositionId);
    }
}
LocalCompositionCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionCommandDispatcher.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "createComposition", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setColumns", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setContainerWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setResizeWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "enableColumn", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "disableColumn", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "moveLeft", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    __metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "moveRight", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandDispatcher.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalCompositionWarehouse extends CompositionWarehouse {
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
    onContainerWidth(compositionId = compositionGlobalId) {
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
    onAllColumns(compositionId = compositionGlobalId) {
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
LocalCompositionWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionWarehouse.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionReadModelRootRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionWarehouse.prototype, "onWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CompositionId]),
    __metadata("design:returntype", Observable)
], LocalCompositionWarehouse.prototype, "onContainerWidth", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionWarehouse.prototype, "onWidthForEachColumn", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionWarehouse.prototype, "onHeaderColumns", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CompositionId]),
    __metadata("design:returntype", Observable)
], LocalCompositionWarehouse.prototype, "onAllColumns", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FieldId]),
    __metadata("design:returntype", Observable)
], LocalCompositionWarehouse.prototype, "onSortOrder", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionWarehouse.prototype, "onTemplateColumns", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalCompositionWarehouse.prototype, "onResizeWidth", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionWarehouse.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetConfigSearchingCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} searchConfig
     */
    constructor(structureId, searchConfig) {
        super(structureId, 'SetConfigSearchingCommand');
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
    SetConfigSearchingCommand.prototype.searchConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSearchPhraseCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} phrase
     * @param {?} initial
     */
    constructor(structureId, phrase, initial) {
        super(structureId, 'SetSearchPhraseCommand');
        this.phrase = phrase;
        this.initial = initial;
    }
    /**
     * @return {?}
     */
    getPhrase() {
        return this.phrase;
    }
    /**
     * @return {?}
     */
    isInitial() {
        return this.initial;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSearchPhraseCommand.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    SetSearchPhraseCommand.prototype.initial;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchHighlightArchive {
    constructor() {
        this.idToHighlight = new Map();
        this.idToHighlight$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    next(value, structureId = structureGlobalId) {
        this.idToHighlight.set(structureId.getId(), value);
        this.idToHighlight$.next(this.idToHighlight);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onValue(structureId = structureGlobalId) {
        return this.idToHighlight$
            .asObservable()
            .pipe(map((/**
         * @param {?} idToHighlight
         * @return {?}
         */
        (idToHighlight) => {
            return idToHighlight.get(structureId.getId()) || SearchHighlightArchive.HIGHLIGHTING;
        })));
    }
}
SearchHighlightArchive.HIGHLIGHTING = true;
SearchHighlightArchive.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchHighlightArchive.HIGHLIGHTING;
    /**
     * @type {?}
     * @private
     */
    SearchHighlightArchive.prototype.idToHighlight;
    /**
     * @type {?}
     * @private
     */
    SearchHighlightArchive.prototype.idToHighlight$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchPlaceholderArchive {
    constructor() {
        this.idToPlaceholder = new Map();
        this.idToPlaceholder$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    next(value, structureId = structureGlobalId) {
        this.idToPlaceholder.set(structureId.getId(), value);
        this.idToPlaceholder$.next(this.idToPlaceholder);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onValue(structureId = structureGlobalId) {
        return this.idToPlaceholder$
            .asObservable()
            .pipe(map((/**
         * @param {?} idToHighlight
         * @return {?}
         */
        (idToHighlight) => {
            return idToHighlight.get(structureId.getId()) || SearchPlaceholderArchive.PLACEHOLDER;
        })));
    }
}
SearchPlaceholderArchive.PLACEHOLDER = 'Search ...';
SearchPlaceholderArchive.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPlaceholderArchive.PLACEHOLDER;
    /**
     * @type {?}
     * @private
     */
    SearchPlaceholderArchive.prototype.idToPlaceholder;
    /**
     * @type {?}
     * @private
     */
    SearchPlaceholderArchive.prototype.idToPlaceholder$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchDispatcher {
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
    setSearchingConfig(config, structureId = structureGlobalId) {
        if (config.highlighting !== undefined && config.highlighting !== null) {
            this.structureSearchHighlightArchive.next(config.highlighting);
        }
        if (config.placeholder !== undefined && config.placeholder !== null) {
            this.structureSearchPlaceholderArchive.next(config.placeholder);
        }
        if (config.phrase !== undefined && config.phrase !== null) {
            this.searchOnInit(config.phrase, structureId);
        }
        this.commandDispatcher.dispatch(new SetConfigSearchingCommand(structureId, config));
    }
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    search(phrase, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, false));
    }
    /**
     * @private
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    searchOnInit(phrase, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, true));
    }
}
SearchDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchDispatcher.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: SearchHighlightArchive },
    { type: SearchPlaceholderArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchDispatcher.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SearchDispatcher.prototype.structureSearchHighlightArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDispatcher.prototype.structureSearchPlaceholderArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStructureSearchCommandDispatcher extends SearchDispatcher {
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
LocalStructureSearchCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureSearchCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: CommandDispatcher },
    { type: SearchHighlightArchive },
    { type: SearchPlaceholderArchive }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocalStructureSearchCommandDispatcher.prototype, "setSearchingConfig", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocalStructureSearchCommandDispatcher.prototype, "search", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureSearchCommandDispatcher.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalSchemaWarehouse extends SchemaWarehouse {
    /**
     * @param {?} schemaReadModelRootId
     * @param {?} schemaCssClassesRepository
     * @param {?} schemaThemeRepository
     * @param {?} schemaHorizontalGridRepository
     * @param {?} schemaRowColoringRepository
     * @param {?} schemaVerticalGridRepository
     */
    constructor(schemaReadModelRootId, schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
        super(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository);
        this.schemaReadModelRootId = schemaReadModelRootId;
    }
    /**
     * @return {?}
     */
    onSingleTheme() {
        return super.onSingleTheme(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onTheme() {
        return super.onTheme(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onHorizontalGrid() {
        return super.onHorizontalGrid(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onVerticalGrid() {
        return super.onVerticalGrid(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onRowColoring() {
        return super.onRowColoring(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onCssClasses() {
        return super.onCssClasses(this.schemaReadModelRootId);
    }
}
LocalSchemaWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaWarehouse.ctorParameters = () => [
    { type: SchemaReadModelRootId },
    { type: SchemaCssClassesRepository },
    { type: SchemaThemeRepository },
    { type: SchemaHorizontalGridRepository },
    { type: SchemaRowColoringRepository },
    { type: SchemaVerticalGridRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onSingleTheme", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onTheme", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onHorizontalGrid", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onVerticalGrid", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onRowColoring", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onCssClasses", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaWarehouse.prototype.schemaReadModelRootId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaThemeCommand extends Command {
    /**
     * @param {?} schemaId
     * @param {?} theme
     */
    constructor(schemaId, theme) {
        super(schemaId, 'SetSchemaThemeCommand');
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
class CreateSchemaCommand extends CreateAggregateCommand {
    /**
     * @param {?} schemaId
     */
    constructor(schemaId) {
        super(schemaId, 'CreateSchemaCommand');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetRowColoringCommand extends Command {
    /**
     * @param {?} schemaId
     * @param {?} coloring
     */
    constructor(schemaId, coloring) {
        super(schemaId, 'SetRowColoringCommand');
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
class SetSchemaVerticalGridCommand extends Command {
    /**
     * @param {?} schemaId
     * @param {?} enabled
     */
    constructor(schemaId, enabled) {
        super(schemaId, 'SetSchemaVerticalGridCommand');
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
     * @param {?} schemaId
     * @param {?} enabled
     */
    constructor(schemaId, enabled) {
        super(schemaId, 'SetSchemaHorizontalGridCommand');
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
class SchemaDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    create(schemaId) {
        this.commandDispatcher.dispatch(new CreateSchemaCommand(schemaId));
    }
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    setTheme(theme, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaThemeCommand(schemaId, theme));
    }
    /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    setRowColoring(rowColoring, schemaId) {
        this.commandDispatcher.dispatch(new SetRowColoringCommand(schemaId, rowColoring));
    }
    /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    setVerticalGrid(verticalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaVerticalGridCommand(schemaId, verticalGrid));
    }
    /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    setHorizontalGrid(horizontalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaHorizontalGridCommand(schemaId, horizontalGrid));
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
class SchemaCommandDispatcher {
    /**
     * @param {?} schemaDispatcher
     * @param {?} structureCommandService
     */
    constructor(schemaDispatcher, structureCommandService) {
        this.schemaDispatcher = schemaDispatcher;
        this.structureCommandService = structureCommandService;
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    create(schemaId = schemaGlobalId) {
        this.schemaDispatcher.create(schemaId.toAggregateId());
    }
    /**
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    setTheme(theme, schemaId = schemaGlobalId, structureId = structureGlobalId) {
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.structureCommandService.setRowHeightBasedOnTheme(theme, structureId);
    }
    /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    setRowColoring(rowColoring, schemaId = schemaGlobalId) {
        /** @type {?} */
        const schemaRowColoring = this.toSchemaRowColoring(rowColoring);
        this.schemaDispatcher.setRowColoring(schemaRowColoring, schemaId.toAggregateId());
    }
    /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    setVerticalGrid(verticalGrid, schemaId = schemaGlobalId) {
        this.schemaDispatcher.setVerticalGrid(verticalGrid, schemaId.toAggregateId());
    }
    /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    setHorizontalGrid(horizontalGrid, schemaId = schemaGlobalId) {
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    }
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    toSchemaRowColoring(coloring) {
        switch (coloring) {
            case RowColoring.NONE:
                return SchemaRowColoring.NONE;
            case RowColoring.ODD:
                return SchemaRowColoring.ODD;
            case RowColoring.EVEN:
                return SchemaRowColoring.EVEN;
        }
    }
}
SchemaCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCommandDispatcher.ctorParameters = () => [
    { type: SchemaDispatcher },
    { type: StructureCommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCommandDispatcher.prototype.schemaDispatcher;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandDispatcher.prototype.structureCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalSchemaCommandDispatcher extends SchemaCommandDispatcher {
    /**
     * @param {?} schemaReadModelRootId
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} schemaDispatcher
     */
    constructor(schemaReadModelRootId, structureId, structureCommandService, schemaDispatcher) {
        super(schemaDispatcher, structureCommandService);
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    create() {
        super.create(this.schemaReadModelRootId);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        super.setTheme(theme, this.schemaReadModelRootId, this.structureId);
    }
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    setRowColoring(rowColoring) {
        super.setRowColoring(rowColoring, this.schemaReadModelRootId);
    }
    /**
     * @param {?} verticalGrid
     * @return {?}
     */
    setVerticalGrid(verticalGrid) {
        super.setVerticalGrid(verticalGrid, this.schemaReadModelRootId);
    }
    /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    setHorizontalGrid(horizontalGrid) {
        super.setHorizontalGrid(horizontalGrid, this.schemaReadModelRootId);
    }
}
LocalSchemaCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaCommandDispatcher.ctorParameters = () => [
    { type: SchemaReadModelRootId },
    { type: StructureId },
    { type: StructureCommandDispatcher },
    { type: SchemaDispatcher }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "create", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "setTheme", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "setRowColoring", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "setVerticalGrid", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "setHorizontalGrid", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandDispatcher.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandDispatcher.prototype.structureId;
}

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
let Formation = class Formation {
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
};
Formation.ctorParameters = () => [
    { type: Array }
];
Formation = __decorate([
    ReadModelObject,
    __metadata("design:paramtypes", [Array])
], Formation);
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
let Source = class Source {
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
};
Source.ctorParameters = () => [
    { type: Boolean }
];
Source = __decorate([
    ReadModelObject,
    __metadata("design:paramtypes", [Boolean])
], Source);
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
let VerticalFormationReadModel = class VerticalFormationReadModel {
    /**
     * @param {?} enabled
     * @param {?} topMargin
     * @param {?} sourceHeight
     * @param {?} viewportHeight
     * @param {?} rowHeight
     */
    constructor(enabled, topMargin, sourceHeight, viewportHeight, rowHeight) {
        this.enabled = enabled;
        this.topMargin = topMargin;
        this.sourceHeight = sourceHeight;
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
        return this.topMargin; //  * this.rowHeight;
    }
    /**
     * @return {?}
     */
    getSourceHeight() {
        return this.sourceHeight;
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
};
VerticalFormationReadModel.ctorParameters = () => [
    { type: Boolean },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number }
];
VerticalFormationReadModel = __decorate([
    ReadModelObject,
    __metadata("design:paramtypes", [Boolean, Number, Number, Number, Number])
], VerticalFormationReadModel);
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
    VerticalFormationReadModel.prototype.sourceHeight;
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
        const sourceHeight = verticalFormation.getSourceHeight();
        /** @type {?} */
        const viewportHeight = verticalFormation.getViewPortHeight();
        /** @type {?} */
        const rowHeight = verticalFormation.getRowHeight();
        return new VerticalFormationReadModel(enabled, topMargin, sourceHeight, viewportHeight, rowHeight);
    }
}
VerticalFormationConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureReadModelRoot extends ReadModelRoot {
    /**
     * @param {?} uid
     * @param {?} formation
     * @param {?} paging
     * @param {?} entities
     * @param {?} source
     * @param {?} verticalFormation
     */
    constructor(uid, formation, paging, entities, source, verticalFormation) {
        super(uid);
        this.formation = formation;
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
    // TODO Remove
    /**
     * @return {?}
     */
    getTopMargin() {
        return this.verticalFormation.getTopMargin();
    }
    /**
     * @return {?}
     */
    isLoaderVisible() {
        return this.getSource().isLoading();
    }
    /**
     * @return {?}
     */
    getSourceHeight() {
        return this.verticalFormation.getSourceHeight();
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
    StructureReadModelRoot.prototype.formation;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRoot.prototype.paging;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRoot.prototype.entities;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRoot.prototype.source;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRoot.prototype.verticalFormation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ItemEntity {
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
}
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
class StructureReadModelRootConverter {
    /**
     * @param {?} formationConverter
     * @param {?} pagingConverter
     * @param {?} sourceConverter
     * @param {?} verticalFormationConverter
     */
    constructor(formationConverter, pagingConverter, sourceConverter, verticalFormationConverter) {
        this.formationConverter = formationConverter;
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
        const pagingAggregate = aggregate.getPaging();
        /** @type {?} */
        const originItemEntities = aggregate.getEntities();
        /** @type {?} */
        const sourceCoordinator = aggregate.getSource();
        /** @type {?} */
        const verticalFormation = aggregate.getVerticalFormation();
        return new StructureReadModelRoot(aggregate.getId().toReadModelRootId(), this.formationConverter.convert(formationAggregate), this.pagingConverter.convert(pagingAggregate), this.convertSource(originItemEntities), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
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
            return new ItemEntity(originItem.rawData, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
        }));
    }
}
StructureReadModelRootConverter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureReadModelRootConverter.ctorParameters = () => [
    { type: FormationConverter },
    { type: PagingConverter },
    { type: SourceConverter },
    { type: VerticalFormationConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRootConverter.prototype.formationConverter;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRootConverter.prototype.pagingConverter;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRootConverter.prototype.sourceConverter;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRootConverter.prototype.verticalFormationConverter;
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
    { type: StructureReadModelRootConverter }
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
class SchemaThemeSetEvent extends DomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} theme
     */
    constructor(schemaId, theme) {
        super(schemaId, 'SchemaThemeSetEvent');
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
    SchemaThemeSetEvent.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureHeightSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'StructureHeightSetEvent');
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
class RowHeightSetBasedOnThemeEvent extends DomainEvent {
    /**
     * @param {?} structureId
     */
    constructor(structureId) {
        super(structureId, 'RowHeightSetBasedOnThemeEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchPhraseSetDomainEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} phrase
     * @param {?} initial
     */
    constructor(aggregateId, phrase, initial) {
        super(aggregateId, 'SearchPhraseSetDomainEvent');
        this.phrase = phrase;
        this.initial = initial;
    }
    /**
     * @return {?}
     */
    getPhrase() {
        return this.phrase;
    }
    /**
     * @return {?}
     */
    isInitial() {
        return this.initial;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPhraseSetDomainEvent.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    SearchPhraseSetDomainEvent.prototype.initial;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VerticalFormationRepository extends Reactive {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureReadStore
     */
    constructor(domainEventBus, inMemoryStructureReadStore) {
        super();
        this.domainEventBus = domainEventBus;
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.verticalFormation = new Map();
        this.verticalFormation$ = new ReplaySubject();
        this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureCreatedEvent)), (/** @type {?} */ (VerticalScrollEnabledSetEvent)), (/** @type {?} */ (OriginSetEvent)), (/** @type {?} */ (StructureHeightSetEvent)), (/** @type {?} */ (RowHeightSetEvent)), (/** @type {?} */ (SchemaThemeSetEvent)), (/** @type {?} */ (RowHeightSetBasedOnThemeEvent)), (/** @type {?} */ (ScrollPositionSetEvent)), (/** @type {?} */ (SearchPhraseSetDomainEvent)))
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const aggregateId = event.getAggregateId();
            /** @type {?} */
            const optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
            optStructure.ifPresent((/**
             * @param {?} structureReadModelRoot
             * @return {?}
             */
            (structureReadModelRoot) => {
                /** @type {?} */
                const verticalFormation = structureReadModelRoot.getVerticalFormation();
                /** @type {?} */
                const structureReadModelRootId = structureReadModelRoot.getId();
                this.next(aggregateId, verticalFormation);
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
        (v) => v.isEnabled())), distinctUntilChanged());
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
     * @param {?} structureId
     * @return {?}
     */
    onContainerHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.getViewPortHeight())));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onTopMargin(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.getTopMargin())));
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
    VerticalFormationRepository.prototype.inMemoryStructureReadStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureVerticalFormationWarehouse {
    /**
     * @param {?} verticalFormationRepository
     */
    constructor(verticalFormationRepository) {
        this.verticalFormationRepository = verticalFormationRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onVerticalScrollEnabled(structureId) {
        return this.verticalFormationRepository.onVerticalScrollEnabled(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onRowHeight(structureId) {
        return this.verticalFormationRepository.onRowHeight(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onContainerHeight(structureId) {
        return this.verticalFormationRepository.onContainerHeight(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onTopMargin(structureId) {
        return this.verticalFormationRepository.onTopMargin(structureId);
    }
}
StructureVerticalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureVerticalFormationWarehouse.ctorParameters = () => [
    { type: VerticalFormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureVerticalFormationWarehouse.prototype.verticalFormationRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStructureVerticalFormationWarehouse extends StructureVerticalFormationWarehouse {
    /**
     * @param {?} structureId
     * @param {?} verticalFormationRepository
     */
    constructor(structureId, verticalFormationRepository) {
        super(verticalFormationRepository);
        this.structureId = structureId;
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
    /**
     * @return {?}
     */
    onContainerHeight() {
        return super.onContainerHeight(this.structureId);
    }
    /**
     * @return {?}
     */
    onTopMargin() {
        return super.onTopMargin(this.structureId);
    }
}
LocalStructureVerticalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureVerticalFormationWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: VerticalFormationRepository }
];
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalStructureVerticalFormationWarehouse.prototype, "onVerticalScrollEnabled", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalStructureVerticalFormationWarehouse.prototype, "onRowHeight", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalStructureVerticalFormationWarehouse.prototype, "onContainerHeight", null);
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], LocalStructureVerticalFormationWarehouse.prototype, "onTopMargin", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureVerticalFormationWarehouse.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const localProviders = [
    { provide: PagingCommandDispatcher, useClass: LocalPagingCommandDispatcher },
    { provide: PagingWarehouse, useClass: LocalPagingWarehouse },
    { provide: StructureFormationDispatcher, useClass: LocalFormationCommandDispatcher },
    { provide: StructureFormationWarehouse, useClass: LocalFormationWarehouse },
    { provide: StructureCommandDispatcher, useClass: LocalStructureCommandDispatcher },
    { provide: StructureWarehouse, useClass: LocalStructureWarehouse },
    { provide: SourceCommandDispatcher, useClass: LocalSourceCommandDispatcher },
    { provide: StructureSourceWarehouse, useClass: LocalSourceWarehouse },
    { provide: CompositionCommandDispatcher, useClass: LocalCompositionCommandDispatcher },
    { provide: CompositionWarehouse, useClass: LocalCompositionWarehouse },
    { provide: SearchDispatcher, useClass: LocalStructureSearchCommandDispatcher },
    { provide: StructureVerticalFormationWarehouse, useClass: LocalStructureVerticalFormationWarehouse },
    { provide: SchemaWarehouse, useClass: LocalSchemaWarehouse },
    { provide: SchemaCommandDispatcher, useClass: LocalSchemaCommandDispatcher }
];
/**
 * @return {?}
 */
function provideComponentServices() {
    return [
        { provide: PagingCommandDispatcher, useClass: LocalPagingCommandDispatcher },
        { provide: PagingWarehouse, useClass: LocalPagingWarehouse },
        { provide: StructureFormationDispatcher, useClass: LocalFormationCommandDispatcher },
        { provide: StructureFormationWarehouse, useClass: LocalFormationWarehouse },
        // { provide: StructureCommandDispatcher, useClass: LocalStructureCommandDispatcher },
        { provide: StructureWarehouse, useClass: LocalStructureWarehouse },
        { provide: SourceCommandDispatcher, useClass: LocalSourceCommandDispatcher },
        { provide: StructureSourceWarehouse, useClass: LocalSourceWarehouse },
        { provide: SearchDispatcher, useClass: LocalStructureSearchCommandDispatcher },
        { provide: StructureVerticalFormationWarehouse, useClass: LocalStructureVerticalFormationWarehouse }
    ];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaCssClassManager extends Reactive {
    /**
     * @param {?} rendererFactory2
     * @param {?} schemaReadModelRepository
     */
    constructor(rendererFactory2, schemaReadModelRepository) {
        super();
        this.rendererFactory2 = rendererFactory2;
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
        this.HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
        this.THEME_FABRIC_CLASS_NAME = 'gui-fabric';
        this.THEME_MATERIAL_CLASS_NAME = 'gui-material';
        this.THEME_LIGHT_CLASS_NAME = 'gui-light';
        this.THEME_DARK_CLASS_NAME = 'gui-dark';
        this.THEME_GENERIC_CLASS_NAME = 'gui-generic';
        this.ROW_COLORING_ODD = 'gui-rows-odd';
        this.ROW_COLORING_EVEN = 'gui-rows-even';
        this.cssClass = null;
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} elementRef
     * @param {?} schemaReadModelRootId
     * @return {?}
     */
    init(elementRef, schemaReadModelRootId) {
        this.cssHostRef = elementRef;
        this.schemaReadModelRepository
            .onCssClasses(schemaReadModelRootId)
            .pipe(this.takeUntil())
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
            case SchemaTheme.GENERIC:
            case SchemaTheme[SchemaTheme.GENERIC]:
                return this.THEME_GENERIC_CLASS_NAME;
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
    { type: SchemaWarehouse }
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
    SchemaCssClassManager.prototype.THEME_GENERIC_CLASS_NAME;
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
    SchemaCssClassManager.prototype.rendererFactory2;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.schemaReadModelRepository;
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
class StructureSummariesPanelConfig {
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
    StructureSummariesPanelConfig.prototype.top;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelConfig.prototype.bottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesArchive extends Archive {
    constructor() {
        super(new StructureSummariesPanelConfig());
    }
}
StructureSummariesArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesPanelConfigConverter {
    /**
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        if (config.enabled) {
            return new StructureSummariesPanelConfig(config.top, config.bottom);
        }
        else {
            return new StructureSummariesPanelConfig(false, false);
        }
    }
}
StructureSummariesPanelConfigConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetSummariesEnabledCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'StructureSetSummariesEnabledCommand');
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
    StructureSetSummariesEnabledCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesCommandDispatcher {
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
    setSummariesEnabled(enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetSummariesEnabledCommand(structureId, enabled));
    }
}
StructureSummariesCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesCommandDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesConfigService {
    /**
     * @param {?} structureSummariesPanelConfigConverter
     * @param {?} structureSummariesArchive
     * @param {?} structureSummariesCommandDispatcher
     * @param {?} structureId
     */
    constructor(structureSummariesPanelConfigConverter, structureSummariesArchive, structureSummariesCommandDispatcher, structureId) {
        this.structureSummariesPanelConfigConverter = structureSummariesPanelConfigConverter;
        this.structureSummariesArchive = structureSummariesArchive;
        this.structureSummariesCommandDispatcher = structureSummariesCommandDispatcher;
        this.structureId = structureId;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set(config) {
        /** @type {?} */
        const summariesPanelConfig = this.structureSummariesPanelConfigConverter.convert(config);
        this.structureSummariesArchive.next(summariesPanelConfig);
        this.structureSummariesCommandDispatcher.setSummariesEnabled(config.enabled, this.structureId);
    }
}
StructureSummariesConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesConfigService.ctorParameters = () => [
    { type: StructureSummariesPanelConfigConverter },
    { type: StructureSummariesArchive },
    { type: StructureSummariesCommandDispatcher },
    { type: StructureId }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesConfigService.prototype.structureSummariesPanelConfigConverter;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesConfigService.prototype.structureSummariesArchive;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesConfigService.prototype.structureSummariesCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesConfigService.prototype.structureId;
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
class InitFieldsCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} fieldConfigs
     */
    constructor(structureId, fieldConfigs) {
        super(structureId, 'InitFieldsCommand');
        this.fieldConfigs = fieldConfigs;
    }
    /**
     * @return {?}
     */
    getFieldConfigs() {
        return this.fieldConfigs;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommand.prototype.fieldConfigs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldsInitedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} fieldConfigs
     * @param {?} fields
     */
    constructor(aggregateId, fieldConfigs, // TODO merge
    fields) {
        super(aggregateId, 'FieldsInitedEvent');
        this.fieldConfigs = fieldConfigs;
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
    FieldsInitedEvent.prototype.fieldConfigs;
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
class StructureColumnInputHandler {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} commandDispatcher
     * @param {?} domainEventBus
     * @param {?} columnFieldFactory
     * @param {?} compositionCommandDispatcher
     */
    constructor(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, compositionCommandDispatcher) {
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.commandDispatcher = commandDispatcher;
        this.domainEventBus = domainEventBus;
        this.columnFieldFactory = columnFieldFactory;
        this.compositionCommandDispatcher = compositionCommandDispatcher;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    handle(simpleChanges) {
        /** @type {?} */
        const columns = simpleChanges.columns.currentValue;
        /** @type {?} */
        const fieldConfigs = simpleChanges.columns.currentValue;
        /** @type {?} */
        const initCommand = new InitFieldsCommand(this.structureId, (/** @type {?} */ (fieldConfigs)));
        this.domainEventBus
            .ofEvent((/** @type {?} */ (FieldsInitedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === this.structureId.toString())), take(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const fields = event.getFields();
            /** @type {?} */
            const columnFieldIds = this.convertColumnFieldIds(fields);
            /** @type {?} */
            const columns = event.fieldConfigs;
            /** @type {?} */
            const params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionCommandDispatcher.setColumns(params, this.compositionId);
        }));
        this.commandDispatcher.dispatch(initCommand);
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
            const columnField = this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType(), field.getSearchAccessorMethod());
            return new ColumnParams(column, columnField);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.columnFieldFactory;
    /**
     * @type {?}
     * @private
     */
    StructureColumnInputHandler.prototype.compositionCommandDispatcher;
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
     * @param {?} domainEventBus
     * @param {?} commandDispatcher
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} schemaId
     * @param {?} structureCommandService
     * @param {?} structurePagingCommandDispatcher
     * @param {?} pagingEventRepository
     * @param {?} sortingCommandDispatcher
     * @param {?} searchCommandDispatcher
     * @param {?} fieldCommandDispatcher
     * @param {?} sourceCommandService
     * @param {?} sourceEventService
     * @param {?} schemaCommandDispatcher
     * @param {?} compositionCommandDispatcher
     * @param {?} compositionEventService
     * @param {?} formationEventService
     * @param {?} structureEditModeArchive
     * @param {?} structureCellEditArchive
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} structureInfoPanelConfigService
     * @param {?} structureSummariesConfigService
     * @param {?} structureCellEditStore
     * @param {?} columnFieldFactory
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} structurePagingDisplayModeArchive
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} searchEventRepository
     * @param {?} structureHeaderTopEnabledArchive
     * @param {?} structureHeaderBottomEnabledArchive
     * @param {?} structureDetailViewConfigArchive
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} schemaEventRepository
     */
    constructor(domainEventBus, commandDispatcher, structureId, compositionId, schemaId, structureCommandService, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandDispatcher, compositionCommandDispatcher, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureInfoPanelConfigService, structureSummariesConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, searchEventRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository) {
        super();
        this.domainEventBus = domainEventBus;
        this.commandDispatcher = commandDispatcher;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.schemaId = schemaId;
        this.structureCommandService = structureCommandService;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        this.pagingEventRepository = pagingEventRepository;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.fieldCommandDispatcher = fieldCommandDispatcher;
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
        this.schemaCommandDispatcher = schemaCommandDispatcher;
        this.compositionCommandDispatcher = compositionCommandDispatcher;
        this.compositionEventService = compositionEventService;
        this.formationEventService = formationEventService;
        this.structureEditModeArchive = structureEditModeArchive;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
        this.structureSummariesConfigService = structureSummariesConfigService;
        this.structureCellEditStore = structureCellEditStore;
        this.columnFieldFactory = columnFieldFactory;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        this.searchEventRepository = searchEventRepository;
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        this.schemaEventRepository = schemaEventRepository;
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
        this.themeChanged = new EventEmitter();
        this.horizontalGridChanged = new EventEmitter();
        this.verticalGridChanged = new EventEmitter();
        this.rowColoringChanged = new EventEmitter();
        this.structureColumnInputHandler = new StructureColumnInputHandler(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, compositionCommandDispatcher);
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (simpleChanges.theme !== undefined && simpleChanges.theme.currentValue !== undefined) {
            this.schemaCommandDispatcher.setTheme(this.theme);
        }
        if (simpleChanges.rowDetail !== undefined && simpleChanges.rowDetail.currentValue !== undefined) {
            this.structureDetailViewConfigArchive.next(this.rowDetail);
        }
        if (simpleChanges.titlePanel !== undefined && simpleChanges.titlePanel.currentValue !== undefined) {
            this.structureTitlePanelConfigArchive.next(this.titlePanel);
        }
        if (simpleChanges.footerPanel !== undefined && simpleChanges.footerPanel.currentValue !== undefined) {
            this.structureFooterPanelConfigArchive.next(this.footerPanel);
        }
        if (simpleChanges.columnMenu !== undefined && simpleChanges.columnMenu.currentValue !== undefined) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
        if (simpleChanges.rowSelecting !== undefined && simpleChanges.rowSelecting.currentValue !== undefined) {
            this.structureRowSelectEnabledArchive.next(this.rowSelecting);
        }
        if (simpleChanges.infoPanel !== undefined && simpleChanges.infoPanel.currentValue !== undefined) {
            if (typeof this.infoPanel === 'boolean') {
                this.infoPanel = {
                    enabled: this.infoPanel
                };
            }
            this.structureInfoPanelConfigService.set(this.infoPanel);
        }
        if (simpleChanges.summaries !== undefined && simpleChanges.summaries.currentValue !== undefined) {
            this.structureSummariesConfigService.set(this.summaries);
        }
        if (simpleChanges.editMode !== undefined && simpleChanges.editMode.currentValue !== undefined) {
            this.structureEditModeArchive.next(this.editMode);
        }
        if (simpleChanges.cellEditing !== undefined && simpleChanges.cellEditing.currentValue !== undefined) {
            this.structureCellEditArchive.next(this.cellEditing);
        }
        if (simpleChanges.width !== undefined && simpleChanges.width.currentValue !== undefined) {
            this.compositionCommandDispatcher.setWidth(this.width);
        }
        if (simpleChanges.rowHeight !== undefined && simpleChanges.rowHeight.currentValue !== undefined) {
            this.structureCommandService.setRowHeight(this.rowHeight);
        }
        if (simpleChanges.autoResizeWidth !== undefined && simpleChanges.autoResizeWidth.currentValue !== undefined) {
            this.compositionCommandDispatcher.setResizeWidth(this.autoResizeWidth);
        }
        if (simpleChanges.columnHeaderTop !== undefined && simpleChanges.columnHeaderTop.currentValue !== undefined) {
            this.structureHeaderTopEnabledArchive.next(this.columnHeaderTop);
        }
        if (simpleChanges.columnHeaderBottom !== undefined && simpleChanges.columnHeaderBottom.currentValue !== undefined) {
            this.structureHeaderBottomEnabledArchive.next(this.columnHeaderBottom);
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
            this.structurePagingCommandDispatcher.setPaging(pagingConfig);
        }
        if (simpleChanges.columns !== undefined && simpleChanges.columns.currentValue !== undefined) {
            this.structureColumnInputHandler.handle(simpleChanges);
        }
        if (simpleChanges.verticalGrid !== undefined && simpleChanges.verticalGrid.currentValue !== undefined) {
            this.schemaCommandDispatcher.setVerticalGrid(this.verticalGrid);
        }
        if (simpleChanges.horizontalGrid !== undefined && simpleChanges.horizontalGrid.currentValue !== undefined) {
            this.schemaCommandDispatcher.setHorizontalGrid(this.horizontalGrid);
        }
        if (simpleChanges.rowColoring !== undefined && simpleChanges.rowColoring.currentValue !== undefined) {
            this.schemaCommandDispatcher.setRowColoring(this.rowColoring);
        }
        if (simpleChanges.maxHeight && this.maxHeight) {
            this.structureCommandService.setContainerHeight(this.maxHeight);
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
            this.sortingCommandDispatcher.setSortingConfig(sorting, this.structureId);
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
            this.searchCommandDispatcher.setSearchingConfig(searching, this.structureId);
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
        this.pagingEventRepository
            .onPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        (pageNumber) => {
            this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventRepository
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
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.columnsChanged.emit();
        }));
        this.compositionEventService
            .onContainerWidthChanged(this.compositionId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} containerWidth
         * @return {?}
         */
        (containerWidth) => {
            this.containerWidthChanged.emit(containerWidth);
        }));
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .pipe(this.takeUntil())
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
        this.searchEventRepository
            .onSearchPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            this.searchPhraseChanged.emit(phrase);
        }));
        this.connectSchemaEvents();
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    /**
     * @private
     * @return {?}
     */
    connectSchemaEvents() {
        this.schemaEventRepository
            .onThemeChanged(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.themeChanged.emit(theme);
        }));
        this.schemaEventRepository
            .onHorizontalGridChanged(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.horizontalGridChanged.emit(enabled);
        }));
        this.schemaEventRepository
            .onVerticalGridChanged(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.verticalGridChanged.emit(enabled);
        }));
        this.schemaEventRepository
            .onRowColoring(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} coloring
         * @return {?}
         */
        (coloring) => {
            this.rowColoringChanged.emit(coloring);
        }));
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
    summaries: [{ type: Input }],
    columnMenu: [{ type: Input }],
    rowDetail: [{ type: Input }],
    titlePanel: [{ type: Input }],
    footerPanel: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    itemsSelected: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }],
    searchPhraseChanged: [{ type: Output }],
    themeChanged: [{ type: Output }],
    horizontalGridChanged: [{ type: Output }],
    verticalGridChanged: [{ type: Output }],
    rowColoringChanged: [{ type: Output }]
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
    StructureGateway.prototype.summaries;
    /** @type {?} */
    StructureGateway.prototype.columnMenu;
    /** @type {?} */
    StructureGateway.prototype.rowDetail;
    /** @type {?} */
    StructureGateway.prototype.titlePanel;
    /** @type {?} */
    StructureGateway.prototype.footerPanel;
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
    StructureGateway.prototype.themeChanged;
    /** @type {?} */
    StructureGateway.prototype.horizontalGridChanged;
    /** @type {?} */
    StructureGateway.prototype.verticalGridChanged;
    /** @type {?} */
    StructureGateway.prototype.rowColoringChanged;
    /** @type {?} */
    StructureGateway.prototype.structureColumnInputHandler;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.domainEventBus;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.commandDispatcher;
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
    StructureGateway.prototype.schemaId;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structurePagingCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingEventRepository;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sortingCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.fieldCommandDispatcher;
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
    StructureGateway.prototype.schemaCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionCommandDispatcher;
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
    StructureGateway.prototype.structureInfoPanelConfigService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureSummariesConfigService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCellEditStore;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.columnFieldFactory;
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
    StructureGateway.prototype.searchEventRepository;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureHeaderTopEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureHeaderBottomEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureDetailViewConfigArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureTitlePanelConfigArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureFooterPanelConfigArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.schemaEventRepository;
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
     * @param {?} structureId
     */
    constructor(structureId) {
        super(structureId, 'SelectedRowToggledEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormationEventService {
    /**
     * @param {?} domainEventBus
     * @param {?} structureWarehouse
     */
    constructor(domainEventBus, structureWarehouse) {
        this.domainEventBus = domainEventBus;
        this.structureWarehouse = structureWarehouse;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onItemSelected(structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (SelectedRowToggledEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.structureWarehouse
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
    { type: StructureWarehouse }
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
    FormationEventService.prototype.structureWarehouse;
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
class SearchEventRepository {
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
    onSearchPhrase(structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (SearchPhraseSetDomainEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.isInitial() === false)), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getPhrase())), filter((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => phrase !== null)));
    }
}
SearchEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchEventRepository.prototype.domainEventBus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCellEditCloseAllService {
    constructor() {
        this.closeAll$ = new Subject();
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.closeAll$.next();
    }
    /**
     * @return {?}
     */
    onCloseAll() {
        return this.closeAll$.asObservable();
    }
}
StructureCellEditCloseAllService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCellEditCloseAllService.prototype.closeAll$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureHeaderBottomEnabledArchive extends Archive {
    constructor() {
        super(false);
    }
}
StructureHeaderBottomEnabledArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureHeaderBottomEnabledArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureHeaderTopEnabledArchive extends Archive {
    constructor() {
        super(true);
    }
}
StructureHeaderTopEnabledArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureHeaderTopEnabledArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaHorizontalGridSetEvent extends DomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} horizontalGrid
     */
    constructor(schemaId, horizontalGrid) {
        super(schemaId, 'SchemaHorizontalGridSetEvent');
        this.horizontalGrid = horizontalGrid;
    }
    /**
     * @return {?}
     */
    getHorizontalGrid() {
        return this.horizontalGrid;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaHorizontalGridSetEvent.prototype.horizontalGrid;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaVerticalGridSetEvent extends DomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} verticalGrid
     */
    constructor(schemaId, verticalGrid) {
        super(schemaId, 'SchemaVerticalGridSetEvent');
        this.verticalGrid = verticalGrid;
    }
    /**
     * @return {?}
     */
    getVerticalGrid() {
        return this.verticalGrid;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaVerticalGridSetEvent.prototype.verticalGrid;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RowColoringSetEvent extends DomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} rowColoring
     */
    constructor(schemaId, rowColoring) {
        super(schemaId, 'RowColoringSetEvent');
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
    /**
     * @type {?}
     * @private
     */
    RowColoringSetEvent.prototype.rowColoring;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaEventRepository extends EventRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onThemeChanged(schemaId = schemaGlobalId) {
        return this.onEvent(schemaId, SchemaThemeSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getTheme())));
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onHorizontalGridChanged(schemaId = schemaGlobalId) {
        return this.onEvent(schemaId, SchemaHorizontalGridSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getHorizontalGrid())));
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onVerticalGridChanged(schemaId = schemaGlobalId) {
        return this.onEvent(schemaId, SchemaVerticalGridSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getVerticalGrid())));
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onRowColoring(schemaId = schemaGlobalId) {
        return this.onEvent(schemaId, RowColoringSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getRowColoring())));
    }
}
SchemaEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureRowDetailConfigArchive extends Archive {
    constructor() {
        super({
            enabled: false,
            template: ((/**
             * @param {?} item
             * @return {?}
             */
            item => 'Detail View'))
        });
    }
}
StructureRowDetailConfigArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureRowDetailConfigArchive.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const structureRowDetailViewItem = new InjectionToken('structureRowDetailViewItem');
/** @type {?} */
const structureRowDetailViewTemplate = new InjectionToken('structureRowDetailViewTemplate');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureRowDetailViewComponent {
    /**
     * @param {?} item
     * @param {?} template
     * @param {?} sanitizer
     */
    constructor(item, template, sanitizer) {
        this.item = item;
        this.template = template;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectedRowValues = this.item;
    }
}
StructureRowDetailViewComponent.decorators = [
    { type: Component, args: [{
                template: `
		
		<div [innerHTML]="safeHTML"></div>
		
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureRowDetailViewComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [structureRowDetailViewItem,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [structureRowDetailViewTemplate,] }] },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    StructureRowDetailViewComponent.prototype.selectedRowValues;
    /** @type {?} */
    StructureRowDetailViewComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailViewComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailViewComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailViewComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureRowDetailService extends Reactive {
    /**
     * @param {?} injector
     * @param {?} structureId
     * @param {?} structureDetailViewConfigArchive
     * @param {?} formationEventService
     * @param {?} drawerService
     */
    constructor(injector, structureId, structureDetailViewConfigArchive, formationEventService, drawerService) {
        super();
        this.injector = injector;
        this.structureId = structureId;
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        this.formationEventService = formationEventService;
        this.drawerService = drawerService;
        this.enabled = false;
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    init(ref) {
        this.elementRef = ref;
        this.structureDetailViewConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.config = config;
            if (config.enabled === true) {
                this.turnOn();
            }
            else if (config.enabled === false) {
                this.turnOff();
            }
        }));
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            if (!this.enabled) {
                return;
            }
            this.drawerService.close();
            if (items.length === 0) {
                return;
            }
            /** @type {?} */
            const item = items[0];
            /** @type {?} */
            const injector = Injector.create({
                parent: this.injector,
                providers: [
                    { provide: structureRowDetailViewItem, useValue: item },
                    { provide: structureRowDetailViewTemplate, useValue: this.config.template }
                ]
            });
            this.drawerService.open(this.elementRef, StructureRowDetailViewComponent, { injector: injector });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    turnOn() {
        this.enabled = true;
    }
    /**
     * @private
     * @return {?}
     */
    turnOff() {
        this.enabled = false;
    }
}
StructureRowDetailService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureRowDetailService.ctorParameters = () => [
    { type: Injector },
    { type: StructureId },
    { type: StructureRowDetailConfigArchive },
    { type: FormationEventService },
    { type: FabricDrawerService }
];
if (false) {
    /** @type {?} */
    StructureRowDetailService.prototype.enabled;
    /** @type {?} */
    StructureRowDetailService.prototype.config;
    /** @type {?} */
    StructureRowDetailService.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.structureDetailViewConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.formationEventService;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.drawerService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureTitlePanelConfigArchive extends Archive {
    constructor() {
        super({
            enabled: false,
            template: ((/**
             * @param {?} title
             * @return {?}
             */
            title => 'Title Panel'))
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFooterPanelConfigArchive extends Archive {
    constructor() {
        super({
            enabled: false,
            template: ((/**
             * @param {?} title
             * @return {?}
             */
            title => 'Footer Panel'))
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureInfoPanelConfigService {
    /**
     * @param {?} structureInfoPanelConfigConverter
     * @param {?} structureInfoPanelArchive
     */
    constructor(structureInfoPanelConfigConverter, structureInfoPanelArchive) {
        this.structureInfoPanelConfigConverter = structureInfoPanelConfigConverter;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set(config) {
        /** @type {?} */
        const infoPanelConfig = this.structureInfoPanelConfigConverter.convert(config);
        this.structureInfoPanelArchive.next(infoPanelConfig);
    }
}
StructureInfoPanelConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureInfoPanelConfigService.ctorParameters = () => [
    { type: StructureInfoPanelConfigConverter },
    { type: StructureInfoPanelArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfigService.prototype.structureInfoPanelConfigConverter;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfigService.prototype.structureInfoPanelArchive;
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
class SortingCommandDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSortingConfig(config, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    }
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    toggleSort(fieldId, compositionId, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    }
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    setSortOrder(fieldId, sortOrder, compositionId, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder));
    }
}
SortingCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SortingCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortingCommandDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortingWarehouse {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onStructure(aggregateId = structureGlobalId) {
        return this.structureRepository.onStructure(aggregateId);
    }
}
SortingWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SortingWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortingWarehouse.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortingEventRepository {
}
SortingEventRepository.decorators = [
    { type: Injectable }
];

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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
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
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SortingSetEvent(command.getAggregateId()));
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
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
class SortingDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(ToggleSortCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(SetSortingCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(SetSortOrderCommandHandler, 'StructureAggregate')
        ];
    }
}
SortingDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SortingDomainModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortingApiModule extends ApiModule {
}
SortingApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SortingDomainModule
                ],
                providers: [
                    SortingCommandDispatcher,
                    SortingWarehouse,
                    SortingEventRepository
                ],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortingFeatureModule extends FeatureModule {
    /**
     * @return {?}
     */
    static forComponent() {
        return [];
    }
}
SortingFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SortingApiModule
                ],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigSearchingSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} enabled
     */
    constructor(aggregateId, enabled) {
        super(aggregateId, 'ConfigSearchingSetEvent');
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
    ConfigSearchingSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetConfigSearchingCommandHandler {
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
        return SetConfigSearchingCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const searchingConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigSearchingSetEvent(command.getAggregateId(), searchingConfig.enabled));
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
}
SetConfigSearchingCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetConfigSearchingCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetConfigSearchingCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesChangedEvent extends DomainEvent {
    /**
     * @param {?} structureId
     * @param {?} values
     */
    constructor(structureId, values) {
        super(structureId, 'StructureSummariesChangedEvent');
        this.values = values;
    }
    /**
     * @return {?}
     */
    getSummaries() {
        return this.values;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesChangedEvent.prototype.values;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const StructureSummariesChangedAggregateEventName = 'StructureSummariesChangedAggregateEvent';
class StructureSummariesChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} summarizedValues
     */
    constructor(aggregateId, summarizedValues) {
        super(aggregateId, StructureSummariesChangedAggregateEventName);
        this.summarizedValues = summarizedValues;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new StructureSummariesChangedEvent(this.getAggregateId(), this.summarizedValues);
    }
    /**
     * @return {?}
     */
    getSummaries() {
        return this.summarizedValues;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesChangedAggregateEvent.prototype.summarizedValues;
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
        if (event.getType() === StructureSummariesChangedAggregateEventName) {
            /** @type {?} */
            const structureSummariesChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new StructureSummariesChangedEvent(structureSummariesChangedAggregateEvent.getAggregateId(), structureSummariesChangedAggregateEvent.getSummaries());
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
        return SetSearchPhraseCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const phrase = command.getPhrase();
        /** @type {?} */
        const initial = command.isInitial();
        this.domainEventPublisher.publish(new SearchPhraseSetDomainEvent(command.getAggregateId(), phrase, initial));
        this.structureSourceDomainEventPublisher.publish(aggregate.getEvents());
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
class SearchManager {
    constructor() {
        this.searchFields = [];
        this.enabledDataTypes = [
            DataType.STRING
        ];
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
            return this.enabledDataTypes.some((/**
             * @param {?} dt
             * @return {?}
             */
            (dt) => dt === field.getDataType()));
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
            this.searchFields
                .filter((/**
             * @param {?} field
             * @return {?}
             */
            (field) => field.search(entities[i], this.searchPhrase)))
                .forEach((/**
             * @return {?}
             */
            () => {
                searchedItems.add(entities[i]);
            }));
        }
        return Array.from(searchedItems);
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
    /**
     * @type {?}
     * @private
     */
    SearchManager.prototype.enabledDataTypes;
}

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
class SearchPhraseRepository extends Reactive {
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
SearchPhraseRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchPhraseRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPhraseRepository.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    SearchPhraseRepository.prototype.phrase$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchPhraseSetEventHandler {
    /**
     * @param {?} structureSearchPhraseRepository
     */
    constructor(structureSearchPhraseRepository) {
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return SearchPhraseSetDomainEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SearchPhraseSetDomainEvent')) {
            this.structureSearchPhraseRepository.setPhrase(event.getPhrase(), event.getAggregateId());
        }
    }
}
SearchPhraseSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchPhraseSetEventHandler.ctorParameters = () => [
    { type: SearchPhraseRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPhraseSetEventHandler.prototype.structureSearchPhraseRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchingRepository extends Reactive {
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
SearchingRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchingRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchingRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    SearchingRepository.prototype.enabled$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigSearchingSetEventHandler {
    /**
     * @param {?} structureSearchingRepository
     */
    constructor(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ConfigSearchingSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ConfigSearchingSetEvent')) {
            this.structureSearchingRepository.setEnabled(event.isEnabled(), event.getAggregateId());
        }
    }
}
ConfigSearchingSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigSearchingSetEventHandler.ctorParameters = () => [
    { type: SearchingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(SetConfigSearchingCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(StructureSetSearchPhraseCommandHandler, 'StructureAggregate'),
        ];
    }
    /**
     * @return {?}
     */
    static domainEventHandlers() {
        return [
            ...HermesModule.registerDomainEventHandler(SearchPhraseSetEventHandler),
            ...HermesModule.registerDomainEventHandler(ConfigSearchingSetEventHandler),
        ];
    }
}
SearchDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    SearchManagerFactory,
                    SearchDispatcher,
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SearchDomainModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchCommandDispatcher {
    /**
     * @param {?} searchDispatcher
     */
    constructor(searchDispatcher) {
        this.searchDispatcher = searchDispatcher;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = structureGlobalId) {
        this.searchDispatcher.setSearchingConfig(config, structureId);
    }
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    search(phrase, structureId = structureGlobalId) {
        this.searchDispatcher.search(phrase, structureId);
    }
}
SearchCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchCommandDispatcher.ctorParameters = () => [
    { type: SearchDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchCommandDispatcher.prototype.searchDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchWarehouse {
    /**
     * @param {?} structureSearchingRepository
     * @param {?} searchPhraseRepository
     */
    constructor(structureSearchingRepository, searchPhraseRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
        this.searchPhraseRepository = searchPhraseRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSearchEnabled(structureId = structureGlobalId) {
        return this.structureSearchingRepository.onSearchingEnabled(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onPhrase(structureId = structureGlobalId) {
        return this.searchPhraseRepository.onPhrase(structureId);
    }
}
SearchWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchWarehouse.ctorParameters = () => [
    { type: SearchingRepository },
    { type: SearchPhraseRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchWarehouse.prototype.structureSearchingRepository;
    /**
     * @type {?}
     * @private
     */
    SearchWarehouse.prototype.searchPhraseRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchApiModule extends ApiModule {
}
SearchApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SearchDomainModule
                ],
                providers: [
                    SearchCommandDispatcher,
                    SearchWarehouse,
                    SearchEventRepository,
                    SearchPhraseRepository,
                    SearchHighlightArchive,
                    SearchPlaceholderArchive,
                    SearchingRepository
                ],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchIconComponent {
}
SearchIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-search-icon',
                template: `
		<svg class="gui-search-icon" xmlns="http://www.w3.org/2000/svg" width="10.231" height="10.601" viewBox="0 0 10.231 10.601">
			<line x2="1.77" y2="1.77" transform="translate(7.4 7.77)" fill="none" stroke-linecap="round"
				  stroke-linejoin="round" stroke-width="1.5"/>
			<circle cx="4.02" cy="4.02" r="4.02" transform="translate(0.5 0.5)" stroke-width="1"
					stroke-linecap="round" stroke-linejoin="round" fill="none"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-icon]': 'true'
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchComponent extends SmartComponent {
    /**
     * @param {?} formBuilder
     * @param {?} renderer2
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} searchCommandDispatcher
     * @param {?} structureWarehouse
     * @param {?} searchWarehouse
     * @param {?} verticalFormationWarehouse
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(formBuilder, renderer2, changeDetectorRef, structureId, searchCommandDispatcher, structureWarehouse, searchWarehouse, verticalFormationWarehouse, structureSearchPlaceholderArchive) {
        super();
        this.formBuilder = formBuilder;
        this.renderer2 = renderer2;
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.structureWarehouse = structureWarehouse;
        this.searchWarehouse = searchWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
        this.placeholder = 'Search';
        this.searchingEnabled = false;
        /** @type {?} */
        let controlsConfig = {};
        controlsConfig[SearchComponent.FORM_SEARCH_NAME] = '';
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
        this.searchWarehouse
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
            controlsConfig[SearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== this.searchForm.get([SearchComponent.FORM_SEARCH_NAME]).value) {
                this.stopObserveChanges();
                this.searchForm.setValue(controlsConfig);
                this.observeChanges();
            }
        }));
        this.searchWarehouse
            .onSearchEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} searchingEnabled
         * @return {?}
         */
        (searchingEnabled) => {
            this.searchingEnabled = searchingEnabled;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // REMOVE
        this.verticalFormationWarehouse
            .onRowHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            // this.renderer2.setStyle(this.formRef.nativeElement, 'height', '30px');
        }));
    }
    /**
     * @return {?}
     */
    clear() {
        this.searchForm.reset();
    }
    /**
     * @private
     * @return {?}
     */
    observeChanges() {
        this.searchInputSubscription =
            this.searchForm
                .controls['searchPhrase']
                .valueChanges
                .pipe(debounceTime(200), this.takeUntil())
                .subscribe((/**
             * @param {?} phrase
             * @return {?}
             */
            (phrase) => {
                this.searchCommandDispatcher.search(phrase, this.structureId);
            }));
    }
    /**
     * @private
     * @return {?}
     */
    stopObserveChanges() {
        this.searchInputSubscription.unsubscribe();
    }
}
SearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-search-bar',
                template: `
		<ng-container *ngIf="searchingEnabled">
			<form #formRef
				  [formGroup]="searchForm">
				<gui-search-icon></gui-search-icon>
				<input formControlName="searchPhrase" [placeholder]="placeholder">
				<span *ngIf="searchForm.controls['searchPhrase'].value" class="gui-clear-search-icon" (click)="clear()"></span>
			</form>
		</ng-container>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-search-bar]': `"true"`
                },
                styles: [".gui-search-bar{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;width:60%;margin-right:auto}.gui-search-bar form{display:-ms-flexbox;display:flex;background:#fff;position:relative;width:100%}.gui-search-bar form .gui-search-icon{position:absolute;top:6px;left:10px;width:17px;height:17px}.gui-search-bar form .gui-search-icon circle,.gui-search-bar form .gui-search-icon line{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-search-bar form input{border:1px solid;border-color:inherit;border-radius:4px;padding:6px 6px 6px 38px;height:100%;width:100%}.gui-search-bar form:hover .gui-search-icon circle,.gui-search-bar form:hover .gui-search-icon line{stroke:#333}"]
            }] }
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: SearchCommandDispatcher },
    { type: StructureWarehouse },
    { type: SearchWarehouse },
    { type: StructureVerticalFormationWarehouse },
    { type: SearchPlaceholderArchive }
];
SearchComponent.propDecorators = {
    formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchComponent.FORM_SEARCH_NAME;
    /** @type {?} */
    SearchComponent.prototype.formRef;
    /** @type {?} */
    SearchComponent.prototype.searchForm;
    /** @type {?} */
    SearchComponent.prototype.placeholder;
    /** @type {?} */
    SearchComponent.prototype.searchingEnabled;
    /** @type {?} */
    SearchComponent.prototype.searchInputSubscription;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.searchWarehouse;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.verticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.structureSearchPlaceholderArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchFeatureModule extends FeatureModule {
    /**
     * @param {?} searchApiModule
     */
    constructor(searchApiModule) {
        super();
        if (searchApiModule === null) {
            throw new Error('SearchApiModule is required');
        }
    }
    /**
     * @return {?}
     */
    static forComponent() {
        return [];
    }
}
SearchFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule,
                    // SearchApiModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    SearchIconComponent,
                    SearchComponent
                ],
                exports: [
                    SearchIconComponent,
                    SearchComponent
                ]
            },] }
];
/** @nocollapse */
SearchFeatureModule.ctorParameters = () => [
    { type: SearchApiModule }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldUiModel {
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
    FieldUiModel.prototype.id;
    /**
     * @type {?}
     * @private
     */
    FieldUiModel.prototype.dataType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldUiConverter {
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
        return new FieldUiModel(field.getId(), field.getDataType());
    }
}
FieldUiConverter.decorators = [
    { type: Injectable }
];

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
class BaseField {
    /**
     * @protected
     * @param {?} id
     * @param {?} accessor
     * @param {?} dataType
     * @param {?} matchers
     */
    constructor(id, accessor, dataType, matchers) {
        this.id = id;
        this.accessor = accessor;
        this.dataType = dataType;
        this.matchers = matchers;
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
     * @return {?}
     */
    getMatchers() {
        return this.matchers;
    }
    /**
     * @return {?}
     */
    getSearchAccessorMethod() {
        /** @type {?} */
        let matcher;
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} m
         * @return {?}
         */
        (m) => {
            matcher = m;
        }));
        if (matcher) {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => {
                /** @type {?} */
                const val = this.accessorMethod(entity);
                return matcher(val);
            });
        }
        else {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => {
                return this.accessorMethod(entity);
            });
        }
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getValue(entity) {
        return this.accessorMethod(entity);
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getSortValue(entity) {
        /** @type {?} */
        let value = this.accessorMethod(entity);
        this.matchers
            .getSortMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        (matcher) => {
            value = matcher(value);
        }));
        return value;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getSearchValue(entity) {
        /** @type {?} */
        let value = this.accessorMethod(entity);
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        (matcher) => {
            value = matcher(value);
        }));
        return value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.id;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.dataType;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.accessorMethod;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.matchers;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class Field extends BaseField {
    /**
     * @protected
     * @param {?} id
     * @param {?} accessor
     * @param {?} dataType
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, dataType, matchers, summariesConfig) {
        super(id, accessor, dataType, matchers);
        this.summariesEnabled = true;
        this.possibleSummaries = this.assignPossibleSummaries();
        this.assignSummaries(summariesConfig);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isSummaries(type) {
        if (!this.isSummariesEnabled()) {
            return false;
        }
        return !!(this.summariesTypes & type);
    }
    /**
     * @return {?}
     */
    isSummariesEnabled() {
        return this.summariesEnabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setSummariesEnabled(enabled) {
        this.summariesEnabled = enabled;
    }
    /**
     * @private
     * @param {?} summariesConfig
     * @return {?}
     */
    assignSummaries(summariesConfig) {
        if (!!summariesConfig && Object.keys(summariesConfig).length !== 0) {
            if (summariesConfig.enabled) {
                this.summariesEnabled = !!summariesConfig.enabled;
            }
            if (summariesConfig.summariesTypes) {
                this.summariesTypes = 0;
                summariesConfig.summariesTypes.forEach((/**
                 * @param {?} t
                 * @return {?}
                 */
                (t) => {
                    this.summariesTypes |= t;
                }));
            }
            else {
                this.summariesTypes = this.assignDefaultSummaries();
            }
        }
        else {
            this.summariesTypes = this.assignDefaultSummaries();
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Field.prototype.summariesEnabled;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.summariesTypes;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.possibleSummaries;
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignDefaultSummaries = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignPossibleSummaries = function () { };
    /**
     * @abstract
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    Field.prototype.search = function (item, searchPhrase) { };
    /**
     * @abstract
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    Field.prototype.sort = function (one, two) { };
    /**
     * @abstract
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    Field.prototype.filter = function (value, filterPhrase) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnknownField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, matchers, summariesConfig) {
        super(id, accessor, DataType.UNKNOWN, matchers, summariesConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        return false;
    }
    /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    sort(one, two) {
        return 0;
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return false;
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
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, matchers, summariesConfig) {
        super(id, accessor, DataType.NUMBER, matchers, summariesConfig);
    }
    /**
     * @return {?}
     */
    getField() {
        return this;
    }
    /**
     * @return {?}
     */
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT |
        // 	SummariesType.SUM |
        // 	SummariesType.MIN |
        // 	SummariesType.MAX |
        // 	SummariesType.AVERAGE |
        // 	SummariesType.MEDIAN;
    }
    /**
     * @return {?}
     */
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT |
            SummariesType.SUM |
            SummariesType.MIN |
            SummariesType.MAX |
            SummariesType.AVERAGE |
            SummariesType.MEDIAN;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        return false;
    }
    /**
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    sort(numOne, numTwo) {
        /** @type {?} */
        const sureNumOne = +numOne;
        /** @type {?} */
        const sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return value > filterPhrase;
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
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, matchers, summariesConfig) {
        super(id, accessor, DataType.STRING, matchers, summariesConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        /** @type {?} */
        const value = this.getSearchValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    sort(strOne, strTwo) {
        /** @type {?} */
        const sureStrOne = '' + strOne;
        /** @type {?} */
        const sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return value.toLowerCase().indexOf(filterPhrase.toLowerCase()) > -1;
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
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, matchers, summariesConfig) {
        super(id, accessor, DataType.BOOLEAN, matchers, summariesConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT |
        // 	SummariesType.TRUTHY |
        // 	SummariesType.FALSY;
    }
    /**
     * @return {?}
     */
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT |
            SummariesType.TRUTHY |
            SummariesType.FALSY;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        return false;
    }
    /**
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    sort(booleanOne, booleanTwo) {
        /** @type {?} */
        const sureBoolOne = !!booleanOne;
        /** @type {?} */
        const sureBoolTwo = !!booleanTwo;
        return (sureBoolOne === sureBoolTwo) ? 0 : sureBoolTwo ? -1 : 1;
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return value === filterPhrase;
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
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, matchers, summariesConfig) {
        super(id, accessor, DataType.DATE, matchers, summariesConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        return false;
    }
    /**
     * @param {?} dateOne
     * @param {?} dateTwo
     * @return {?}
     */
    sort(dateOne, dateTwo) {
        return (/** @type {?} */ (dateOne)) - ((/** @type {?} */ (dateTwo)));
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldMatchers {
    /**
     * @param {?=} matcher
     * @param {?=} sortMatcher
     * @param {?=} searchMatcher
     */
    constructor(matcher, sortMatcher, searchMatcher) {
        this.matcher = matcher;
        this.sortMatcher = sortMatcher;
        this.searchMatcher = searchMatcher;
    }
    /**
     * @return {?}
     */
    getMatcher() {
        return Optional.of(this.matcher);
    }
    /**
     * @return {?}
     */
    getSortMatcher() {
        /** @type {?} */
        let matcher;
        if (this.sortMatcher) {
            matcher = this.sortMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    }
    /**
     * @return {?}
     */
    getSearchMatcher() {
        /** @type {?} */
        let matcher;
        if (this.searchMatcher) {
            matcher = this.searchMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldMatchers.prototype.matcher;
    /**
     * @type {?}
     * @private
     */
    FieldMatchers.prototype.sortMatcher;
    /**
     * @type {?}
     * @private
     */
    FieldMatchers.prototype.searchMatcher;
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
     * @param {?} fieldConfig
     * @return {?}
     */
    create(fieldConfig) {
        /** @type {?} */
        const fieldMatchers = this.createMatchers(fieldConfig);
        /** @type {?} */
        let columnType = fieldConfig.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.STRING) {
            return new StringField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers);
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers);
        }
        if (columnType === DataType.DATE) {
            return new DateField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers);
        }
    }
    /**
     * @private
     * @param {?} fieldConfig
     * @return {?}
     */
    createMatchers(fieldConfig) {
        /** @type {?} */
        let matcher = fieldConfig.matcher;
        /** @type {?} */
        let sortMatcher;
        if (fieldConfig.sorting) {
            sortMatcher = fieldConfig.sorting.matcher;
        }
        return new FieldMatchers(matcher, sortMatcher);
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
class TypeField extends BaseField {
    /**
     * @param {?} field
     * @return {?}
     */
    static of(field) {
        return new TypeField(field);
    }
    /**
     * @param {?} field
     */
    constructor(field) {
        super(field.getId(), field.getAccessor(), field.getDataType(), field.getMatchers());
        this.field = field;
    }
    /**
     * @template U
     * @param {?} callback
     * @return {?}
     */
    mapNumber(callback) {
        if (this.field.getDataType() === DataType.NUMBER) {
            return callback((/** @type {?} */ (this.field)));
        }
    }
    /**
     * @return {?}
     */
    ifNumber() {
        if (this.field.getDataType() === DataType.NUMBER) {
            return ((/** @type {?} */ (this.field)));
        }
    }
    /**
     * @deprecated
     * @return {?}
     */
    getField() {
        return this.field;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        return this.field.search(item, searchPhrase);
    }
    /**
     * @param {?} item
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(item, filterPhrase) {
        /** @type {?} */
        const value = this.field.getValue(item);
        if (this.field.getDataType() === DataType.NUMBER) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else {
            return true;
        }
    }
    /**
     * @param {?} entityOne
     * @param {?} entityTwo
     * @param {?} direction
     * @return {?}
     */
    sort(entityOne, entityTwo, direction) {
        /** @type {?} */
        let valueOne = direction ? this.field.getSortValue(entityOne) : this.field.getSortValue(entityTwo);
        /** @type {?} */
        let valueTwo = direction ? this.field.getSortValue(entityTwo) : this.field.getSortValue(entityOne);
        if (this.field.getDataType() === DataType.NUMBER) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else {
            return 0;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TypeField.prototype.field;
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
     * @param {?} fieldConfigs
     * @return {?}
     */
    initFields(fieldConfigs) {
        if (!fieldConfigs) {
            return;
        }
        fieldConfigs.forEach((/**
         * @param {?} fieldConfig
         * @return {?}
         */
        (fieldConfig) => {
            /** @type {?} */
            const field = this.fieldFactory.create(fieldConfig);
            /** @type {?} */
            const typeField = new TypeField(field);
            this.addField(typeField);
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
        const fieldConfigs = command.getFieldConfigs();
        structure.createFields(fieldConfigs);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const fieldConfigs = command.getFieldConfigs();
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        /** @type {?} */
        const fieldTypes = ((/** @type {?} */ (aggregateEvents[0]))).getFields();
        this.domainEventPublisher.publish(new FieldsInitedEvent(command.getAggregateId(), fieldConfigs, fieldTypes));
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
class FieldDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(InitFieldsCommandHandler, 'StructureAggregate'),
        ];
    }
}
FieldDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    FieldCollectionFactory,
                    FieldFactory,
                    FieldIdGenerator
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
FieldDomainModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldCommandDispatcher {
    /**
     * @param {?} domainEventBus
     * @param {?} commandDispatcher
     */
    constructor(domainEventBus, commandDispatcher) {
        this.domainEventBus = domainEventBus;
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} fieldConfigs
     * @param {?=} structureId
     * @return {?}
     */
    initFields(fieldConfigs, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, fieldConfigs));
    }
}
FieldCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldCommandDispatcher.ctorParameters = () => [
    { type: DomainEventBus },
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldCommandDispatcher.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    FieldCommandDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldApiModule extends ApiModule {
}
FieldApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FieldDomainModule
                ],
                providers: [
                    FieldCommandDispatcher,
                    FieldUiArchive,
                    FieldUiConverter,
                    FieldUiRepository
                ],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldFeatureModule extends FeatureModule {
    /**
     * @return {?}
     */
    static forComponent() {
        return [];
    }
}
FieldFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FieldApiModule
                ],
                declarations: [],
                exports: []
            },] }
];

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
 * @param {?} generator
 * @return {?}
 */
function schemaIdFactory(generator) {
    return new SchemaReadModelRootId('gui-' + generator.generateId());
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
    {
        provide: SchemaReadModelRootId,
        useFactory: schemaIdFactory,
        deps: [
            StructureIdGenerator
        ]
    },
    ...localProviders,
    SchemaCssClassManager,
    StructureCellEditArchive,
    StructureCellEditCloseAllService,
    StructureCellEditStore,
    StructureEditModeArchive,
    StructureInfoPanelArchive,
    StructureInfoPanelConfigService,
    StructureSummariesArchive,
    StructureSummariesConfigService,
    StructureColumnMenuConfigArchive,
    PagingFeatureModule.forComponent(),
    SortingFeatureModule.forComponent(),
    FieldFeatureModule.forComponent(),
    SearchFeatureModule.forComponent(),
    StructureRowSelectEnabledArchive,
    StructureHeaderTopEnabledArchive,
    StructureHeaderBottomEnabledArchive,
    StructureRowDetailConfigArchive,
    StructureRowDetailService,
    StructureTitlePanelConfigArchive,
    StructureFooterPanelConfigArchive
];
/**
 * \@internal
 */
class StructureComponent extends StructureGateway {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} pagingCommandService
     * @param {?} pagingEventRepository
     * @param {?} sourceCommandDispatcher
     * @param {?} sourceEventService
     * @param {?} sortingCommandDispatcher
     * @param {?} searchCommandDispatcher
     * @param {?} fieldCommandDispatcher
     * @param {?} schemaCommandDispatcher
     * @param {?} compositionCommandDispatcher
     * @param {?} compositionEventRepository
     * @param {?} formationEventService
     * @param {?} structureCommandService
     * @param {?} structureEditModeArchive
     * @param {?} structureCellEditArchive
     * @param {?} structureInfoPanelArchive
     * @param {?} structureInfoPanelConfigService
     * @param {?} structureSummariesConfigService
     * @param {?} structureCellEditStore
     * @param {?} columnFieldFactory
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} structurePagingDisplayModeArchive
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} structureSearchEventService
     * @param {?} structureHeaderTopEnabledArchive
     * @param {?} structureHeaderBottomEnabledArchive
     * @param {?} structureDetailViewConfigArchive
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} schemaEventRepository
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} structureDefinition
     * @param {?} structureReadModelService
     * @param {?} compositionReadModelService
     * @param {?} schemaStylesManager
     * @param {?} schemaReadModelRootId
     * @param {?} domainEventBus
     * @param {?} commandDispatcher
     * @param {?} structureDetailViewService
     */
    constructor(structureId, compositionId, pagingCommandService, pagingEventRepository, sourceCommandDispatcher, sourceEventService, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, schemaCommandDispatcher, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureCommandService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelArchive, structureInfoPanelConfigService, structureSummariesConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, structureSearchEventService, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository, elementRef, changeDetectorRef, renderer, structureDefinition, structureReadModelService, compositionReadModelService, schemaStylesManager, schemaReadModelRootId, domainEventBus, commandDispatcher, structureDetailViewService) {
        super(domainEventBus, commandDispatcher, structureId, compositionId, schemaReadModelRootId, structureCommandService, pagingCommandService, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandDispatcher, sourceEventService, schemaCommandDispatcher, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelArchive, structureInfoPanelConfigService, structureSummariesConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, structureSearchEventService, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.structureDefinition = structureDefinition;
        this.structureReadModelService = structureReadModelService;
        this.compositionReadModelService = compositionReadModelService;
        this.schemaStylesManager = schemaStylesManager;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.structureDetailViewService = structureDetailViewService;
        this.loaderEnabled = false;
        this.circleLoaderEnabled = true;
        this.initialLoaderAnimation = false;
        structureCommandService.createStructure();
        compositionCommandDispatcher.createComposition();
        schemaCommandDispatcher.create();
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
        this.structureReadModelService
            .onStructure()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structureReadModelRoot
         * @return {?}
         */
        (structureReadModelRoot) => {
            this.structure = structureReadModelRoot;
            this.loaderEnabled = structureReadModelRoot.getSource().isLoading();
            this.circleLoaderEnabled = structureReadModelRoot.isLoaderVisible();
            if (this.loaderEnabled && !this.initialLoaderAnimation) {
                this.initialLoaderAnimation = true;
            }
        }));
        this.structureDetailViewService.init(this.elementRef);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let width = this.elementRef.nativeElement.offsetWidth;
        if (width > 0) {
            this.compositionCommandDispatcher.setContainerWidth(width);
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
                    this.compositionCommandDispatcher.setContainerWidth(width);
                }
            }));
        }
        this.schemaStylesManager
            .init(this.elementRef, this.schemaReadModelRootId);
        this.compositionReadModelService
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
    /**
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
    }
}
StructureComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure',
                template: "<gui-structure-blueprint></gui-structure-blueprint>\n\n<!---------- LOADING ---------->\n<div [ngClass]=\"{'gui-loader-visible': loaderEnabled, 'gui-loader-hidden': !loaderEnabled && initialLoaderAnimation}\"\n\t class=\"gui-loading\">\n\t<gui-spinner *ngIf=\"circleLoaderEnabled\"\n\t\t\t\t [diameter]=\"120\"\n\t\t\t\t [primary]=\"true\">\n\t</gui-spinner>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure]': `"true"`,
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
                styles: [".gui-bold{font-weight:700}.gui-italic{font-style:italic}.gui-bar-view{width:100%}.gui-view-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gui-percentage-bar{position:relative;color:#0747a6;background:#deebff;padding:4px;border-radius:4px;box-shadow:inset 1px 1px 2px 0 #ccc;text-align:center;height:22px;width:100%}.gui-percentage-bar .gui-percentage{position:absolute;border-radius:4px;height:22px;background:#8abcfc;left:0;top:0}.gui-percentage-bar .gui-percentage-view{color:#031d44;position:relative;width:100%}.gui-clear-search-icon{position:absolute;cursor:pointer;right:8px;top:8px;width:16px;height:16px}.gui-clear-search-icon::after,.gui-clear-search-icon::before{position:absolute;left:7px;content:' ';height:16px;width:2px;background-color:#aaa;border-radius:8px}.gui-clear-search-icon::before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-clear-search-icon::after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-clear-search-icon:hover::after,.gui-clear-search-icon:hover::before{background-color:#464646}", ".gui-structure,.gui-structure *{border-color:#d6d6d6;font-size:14px}.gui-structure input{color:#333;font-family:Arial;font-size:13px}.gui-header{background:#f2f3f4;border-bottom:1px solid;border-color:inherit;height:36px}.gui-header .gui-header-cell{box-sizing:border-box;line-height:1em;overflow:hidden;padding:0 8px;position:relative;white-space:nowrap;text-overflow:ellipsis;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.gui-header .gui-header-cell.gui-header-sortable{cursor:pointer}.gui-header .gui-header-cell.gui-header-sortable:hover{background:#e6e7e8}.gui-header .gui-header-cell .gui-header-menu-icon{display:none}.gui-header .gui-header-cell:hover .gui-header-menu{cursor:pointer}.gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper .gui-header-menu-icon{display:block}.gui-header .gui-header-cell:last-of-type{border-right:0}.gui-header .gui-header-cell .gui-header-title{display:-ms-flexbox;display:flex;line-height:1.4em}.gui-header .gui-header-cell .gui-header-title .gui-sort{display:none;height:14px;width:14px;margin-left:4px}.gui-header .gui-header-cell .gui-header-title .gui-sort-asc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAB2CAYAAAAz4kaDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABNRSURBVHhe7V1pU1vHmkYSixEIBAIhME6cXNshjjMkNuBNeMM2U6lUJeOKwfg6W5UrqeRLPuQHJPk2n6Y8+ZaUZ7I5cYwXbEySe+/Unbmp3MQbiM3YGBtvxAVml1iEEJLmeVqniSyD8ILhKDmP3Zw+3X16eZ9+3377nCMpRoMGDSHQKceoQiAQ0H366aexra2tsXogOTk5gGT/M8884y0rK/MFS0UXDMoxKkACcIh1OBxmg8FQ0tzSsmfM43llYHDwhe6engJLZuaC7Vu3dq9Zs2b8xx9/JDlRg6jRCEULUsbHx9ecra3dqDfoV46NjT3r9Y4nMT8uNs6dEJ9wXqfXnytcverv1nTrGWjHsLg4ChAVRJCEzz//PNXj86w/c+pcxcjo8GZdjC4FWUYEPcvodDoUC7gRXEZj0v+tt9sPZKan//Tyyy8PMV/tUL1pIgn79u1L9UxM2FtaLpSPDA9tHRvzZMXGxibAPOl8Ph/LxOCcTMR5vd4kvU5n6+3rNRoTE4d27NjRVV1dPa5Up1qonojc5bnp/nH/+ubmpor+vr5tMPxWLtBAjN/vF2WgDYIMHhGo5caR4eGcgYGB5GxbtrO8vPx2VVWVRxRWKYRaqxVff/112lDX6PrGhuayIdfQFsg4EwLXQxOE4EmEIvwYqRnMQ7oOGmJxulxbz9Wdq3C5XMXHjx83KdWqEqrViC+++MLS09Oz/uKFC7uGXK5tAX/AajBADaASYs4LnwhaoCxz/DsZRBmBRI/Hk9Pf1w8PN9n5xhtvdB8+fFiVmqFKjaAmDA4Ormtvb38Fs3kTkjKFLYKAYf8FCRS4XqefFH4wruRNltHpkG4ZGRkpaWpq2tXf329Xq2aoTiOOHTtm6ejoWHf58uUKCK4EZsYmSHhw6FCHEYt4Tm9vrykpKclZUVGhujVDVUSQhJs3b66FJuyE0Eows20IUALO+QcHrqdHZYSZskHDEq1Wqwt7DFWRoRoiSMKlS5fW3bhx45W+vr4tSMpBoAxF/sNA8ahYkdHtdlvhTRnNZvOQmjRDFUSQBGjBuuvXr5dDE+gd5XKPQK9IEaJS8sHAOhi418BpMsjIdjqdprS0NNWYqXlfrLkwkwSYpB1YoLkwL2S6JODhlocgWAfrIrEAojoriNiCBbx8eHjYXllZmSwKziPmVSOoCbdu3Vrf1tbGhVmYI0qJJFBoFB7DbIH1Ekq9SdAMG8xgCjXj9ddfn1fXdt6IoCaQhCtwUWGzS5CUjQD5/Cb8UDKkECVkmiwr46FHQsZZl9QMQimXPD4+boMmJprMJteOl+fvdsi8mKZDhw6l3+7ttV9sa63AmrANAqF3RCglggKUZkkKNRShZQmey7TQ8jLOHXcoZHmEjEHnYKnDUb/HG/AWw0ylKkXmFHOuEdSEXzs77dfgokITtkB0NopDyb4DUrDhs5lHCphpUtCMh2qQDDJfnk8FFEmamJjIcg66EhOTkly752EBn1MiqAmd3Z321gsXdg04B7YE/AEbRBRxn0ABM/BeEmc1A+NSyJIgkkAwDd6RiLNcXFzctARIkCp/wG8cc49m9w/0J1vS0uf8dsicEfHZZ5+Z4anYWy5c2Ol0urZCcFkQKsWolJgaoTMau+NJLQgVbnic+ZjhghASFF4+HMzjdEA5o2fMk+0aciZa0i3OV199tRNkzMmaMSdEkITR0dFiR0NDhWtwcItOrxckyFkcSUgS8fHxQrgsSwFTuCSFaayHmsI0HqXwExISJu/KRmrDj3zlWnRNbxwZdWf39vWaMi0ZzpdeemlOFvBHSgQGp1u8eLF52D1sb25uLseiuBVpVpLAgROUD+ajiE8FRYA+j8fjg5mhGRPurQTzZZAgQQgBXONlecSnb4AIdkKQwWsDfn8Sb4fATBmt2Tmuf5sDMh4ZESRBecZcXFvrKB8aGirBIMVDnTs1IRINYqH2QgP6oBE9mP18Pm1AGuUr8qkBFJ6sUzmi+cCY0WjsYARYQD5EgWkg6+P1rA/niWPYZ3R3305alLvIVQoz9f0jNFOPhAgMXDxjJgmOekfFqHu0BLPMCpGjPZgJzjqaAz9NBi8IXieFwTwFXgjlitlsrsnLy7vY1dVFN5dvcEySyaOME8pC7cd1159//vkTME03R0ZG0pGWgnqFY8D65VEAzdI8ESQBGUxEasA4MeHL7u7pTl6ckeksfbUUZHz/SMiYdSIwOKEJmL322traiuHhkW26QEwGxiXakvOfw5RxKUhJBI9I80LgHbDzB5KSkv7d5XL1YZ3hxi8LQcxulgsPCihJXruvsLDQgV17LMhYiL6loIwoxAOJkKSE/pvsGQ74bxz3jOfcvn3buDhzsetRLeCzuqELIWFDfX39brfbXYIBWZBlCA4vCDlUIQAEmhceQ2a2F+vB9bS0tJObNm36n3379jlBghv5kwXkteFBAn0J9PT0jGHXXLt69eqD6enpx6klSKZdE23xKNsOvf63fooY/6RjLNvq6ur2wPPb8CjuTc0aEZIEDKb43Llz5ejwVhDCZ8wRtQ75k/sCCgVxLrA3MzMza9asWVMJTajH+aStul+8/fbb3uHh4Xq73X4wKyvrBOsGCT6aMLZJQtiHGcC3RTJAaumpU6f2oL4NX375pXifarYwK0SQhI8//tiEgRWfPXu2AmaA3pEFgjVwsJFAISiLI+NcmK9lZGTU5OfnH4FpqX/vvfceelNFMqAdDUVFRd+CYJJxg2TIvs1EBMuhj/TW0jAxtpEMeFUbZ1MzHpoIdE534MABPoIsPn36dAW8o20QZgY6b5A+fCRIEqA9Ezi9illbg0W2EmmO8vJyd7DUw4OEwtw1rF279mB2dvZxJF1Hk1zUgwt0BHAMiinToQ4LyNguNWO2yHgoIkgCzRGEvwEk7EbHSpCWThKkDZ4JimmYiI2Lu2q1WqtBwhGQWv/mm2+OKUVmDWVlZePUDJi8b0F4FQi4jvYJpcT04FhYTmoGJxzJmK0144GJIAl0UTHruSbQHG1DJ4UmcHJzlrHzM5GBfG7UrmTbbCdXrlx5BIOtn01NCAc1A8ITmpGbm3scbbcjOSITchwMvM2CI4anTwcZpT///POskPFAREhNgCdhh3e0i24lCKGvHnRR0WFplmQIRcj5BMpeweysXr58+VGkNz0KTQgH1wwI8vxzzz1HzaA3dRVt30WG7DsDtUHRCJFHMjBG89jY2NYzZ878GS7yxv379z/wqzr3TQQ69ZsmOGrFmoBOCU1QiggiZIcJDkAOSAJxH8pcXrhw4clly5YdMZlMDXNBggTNFJyBxhUrVnyLPhxHn0kGIfLlkX0nwsdE4Jy3aizUjLPnzv4Z2lL8oGTcFxFoVJCABu3NLc1l7lE3H28G9wnoKBF6lIFuqRyYAvry7Tk5OTVLly49hvOWR2mOpgPJQD8uoA9HuICjj9dwHmCfCfZ5yn1GyBFBj5GljYyObq1vatwd0Osf6PXOeyZCksAbeGdra8sGB50lEz7fPe8T5IAww3yIt8M+f/f4449XYaPVDFMxqhSfc1ALsXFsgrt8GBOjGknX0V9BBjVAakQkgBaaKYtzcHDb6VM/777V1bXhfsm4ZyKwGKVxTWhqPF8xMNC/HQuyzaDXU7pKibtBEhg4IAwsgEFxVFdhCk4sWbLkcHx8fKMaPkxCbcSC21hYWMgF/Bj6yh14gJOHYLc5julA0lCWZioTE7TU4ajd09Xbu+Grr77iZzjuCfdEBB9vdnV1rW9obChzuZxb0GgmGhe3sqenIdhBxa4GFJ+9/bHHHqt54oknjs63JoSD3tT4+HgT9zCcKEi6BhMMSxPcZ3As0wHTTRCFMuItdJfTtfXc2TMVrpF7fwt9RiL4VnZvb6/9QuuFXf0DA9vRoBWNTT5PkMepwDzMJhZANEASjj/55JOVILJJDZoQDpopjLVx1apVB0FGFZKuseMzmyeQhFGyHMZG35ZmSryQcKvrFl3bGV9IiEgENaG7r3vdxUsXXxl0ujaB8Ewk0x6KGSLDdEAeba0fnbuC9eC7RYsWVWVkZJxXkyaEQ2oGyKBmnOQtF3KBoJS4G5SATh+URfAGAe/06y3DQ8Ml9XUNu7p6emZ8C31aIvjyFz+fcOXylV39ff3b/D7f5FvZ7JToWITOKeBUugxNOEFNSE1NVaUmhIOawdshBQUF39hstmMYdsRNn6LyQZkocZDCHXiGa8hV2thIzeiKuGZMSURNTU3a1atX17a1te0cHHBuRp185UV8PkGwr6gi2+UDFR9VVyTxXzANR6rNFWjBSd5OwMLc8tprr42IBqIAdG2pGc8+++xhW7atWm/QX/PTSAXHNjlWn195Jh5MFLKR8sFf2ouMEWhGQ13drkivd05JxC+//PKn9vb2sr6+vu2oSLx3pKcZQp7STIx4/0KYJpEoyGBfqKI4n0A3Ly/MzT2BhfmwxWJp2rt3b1R8ujMU1Ax6U0WFRQezbFnHMNh2jM/HMXKsIEY8bRQCgSDkOym/BfGPhTNQz7/W1tbuvnz58pPIugt3EXH06FGrx+PJHxgYKICg+TSMdU4JkSHI+G3XiTkzEWswXM222b7709InxJoQTZoQDuWubXPhqsIjVmvWSZAgbqEzj2NWzND0QgpCh3WSn1wqwC58TVVVlVlJn8RdRDgcjryxsTF+Uke8ixpMnRrsBD0FHtEQj150qR2qfCL/X/IPWVItjfOxY55t0Ezx4dIGu/0bTDDeCYCZCnBjKvKlDCKB+XBysvkpqJaWljwleRJ3EFFdXZ2BBXo5XLh8nKbOVDlpCpon4S14Yw2x17Js1u+WP5tfhbTm3wMJErxRiENzwcqCwzZbVjW0gTtw3i8T459JJSBLelImEJEPk78yfOG+g4jz588vTUhIKEbFNvrDMxKB1tkJlPNiTbiJteCHgtUFR529vXN6A2+uQM2gN7WmaE1lljWzxu/z/4qxK0/6IjNBWZI0uMNZsDjFmPDLlCyBO4i4ePGiFdrwDC5Ko7oFG4iAoLp54RFdz7BkVhcVFlb6xnyO999//3ejCeEgGbDzDpDxTabVWoUJexOOCl0npcTUoCwhK05uM7RieV1dHT+aNok7iLBarU4wNoDCvCs5ea9lOqBpb2xcbEd6uuV7+7p1h9GQ4/eoCeGgmaJmYMzfWq2Z1XBOOiDpiF9PRFkyQEZuo9HYk52dfcem9g4iNm/e3Ird5D8Q7eQ5LhIqRfAYFrxwaW+YzeYTBUUrD0GT/hAkSEjNKCoo+ibNbD4O23ETyT7KhpByknFFlpzcnfAk/1FUVNQmMhXcQcSLL77YNTo6+k+w3QrT5JamKaxSLlrUnBtpaWk1xRvshwd7Bx1080SBPxCoGfSmijcXf5uenl4Ned1A8hBkJLQjVG6UJeLDCxYsuAQZn9m5c2eHyFBwBxHE9u3bW7CbrISgT+HCfiR5uF5goeGbd06QdD0xMfFvUK//3rhx46Hert4/JAkSJGOof8hht9sPpKSkfELZkBAEF+SF5UPc9OTLcb1YS0/l5eUdQdlW5AcZUnAXEdSKFStW/IDwXxD2MQi+BST0wZu6CXL+npqa+vkLL7zwcU5Ozn8i/dwfmQQJklFRUVFns9k+Li0t/Q9Yiv0Q+v9CXjdBRj/izZDf0aeffvrAsmXL/tba2npLuXQS07pFn3zySRwqyenq6tqIDcgzcE0HwORPHR0dDWB+XPGr5wx79+5dBZv8CWbScziN7EUEbXWDyWR6e//+/XVK2pzggw8+0EM+Cbm5uc/99NNPdnhImZjUF7Oysn5saGi4BRPm/eijj+66gTiDfxokhF9iiMqpShOoRNznnWtECxESJAQkxEEr9HwoNh0BEjMSoRZEGxH3i7vWCA3zA40IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJNCJUAo0IlUAjQiXQiFAJoo6IQMi3gk2FSHlqxu9SI6KRDM00qQQaESqBRoRKoBGhEmhEqATRRwS/hRCBfhF/SEN+K6GIRzGihgifwTAR0Os8IIC/vAQiAjF6/mYF8gIgg3H+pgvjMXodf12DX48d8fu61YSoIcJiMg2nmlLa9Ho9f51F/CRZbGys2DOExcnNkNmc2paSkqLaX/cKR9QQkZeX15331FN/hbDbDQaDPy4uLsbtdovfZMC5iJMMBGrBlaVP5f11yZIlPcGr1Y+oIYI/FuVyuX5JTk6qx6zvxvQfhdD5i4/it99IDkgahjp0m1JMjZ2//nr2nXfeGVQuVz1m+iJbVeHdd98dTzGlODu7bg/FGsTMT4Lw+Ysmnvi4+IG4hPhav8//l8KVq35YvHhxW35+ftR8b7nic0QP+FXPZrM5Bdpg/+X06XVer4e/DBYTHx/fvXad/dS42/1PaI7rww8/JEFcL6ICUUeERGVlpaGlpSWus7NTbzKZdDBXfqwjE2+99RZ/NT5qCNCgQcPdiIn5f8mUtwsfGiECAAAAAElFTkSuQmCC) center/contain no-repeat;display:block}.gui-header .gui-header-cell .gui-header-title .gui-sort-desc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAB2CAYAAAAz4kaDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABPcSURBVHhe7V1pU1TXuqa7aQSaHpjBaxRkEKMCMikeoyeVm9ycqAhGcIia5GYwX/IhvyDmD+RDqu6HpJJKVeJ1wFQqZSVVVxETacQBxOiJlibxRBOFpqFpukGGHu/zrN6b0yg0RgF3m/2QlbV7DXuv9T7rHdbe2+4YFSpUhEEj5VGFYDCo+eSTT2KvXbsWq9PptG63O5idnR1YtmyZt6GhwS81iyropDwqQAKQxV68eNESo9M9d/3na7sc/Y6tI6MjLw243BWpKSnxzz//vH316tWeU6dOBUO9ogNRpRH79+83OZ3O6razZ9fPmxdX5vN4V3h8XgPrdLHaEb0u7ieQ1bGqqupERkZGG7RjRHSMAkSNRlAbvvzyy/m37tzaOzbmqff7fAU+vz85EAgkoC5eE6MxBHz+bJ/fWwSy4kdHRzugFS6pu+IRNURkZmYmxxsM63779V91Go0mHyne5/Np9Hp9jFarjeFxrD5Wj/LEMa9Hk7c47w9oxK2jR496pFMoGlFDxJIlSxbaurpeG/WMrfH7/YnUkPj4+Biv1yvqeezxeITmgBiDe3DIOzQ4eKGtrc0pGigcWilXPAYHBxMHXK5CHBohaCx8DbVAaEP4MaCBuTIMuF2FDrc7iQXRgKghAitdh//FxwSCGg3iIYg/JuD3x/CYEYc4xh8o4meNNhCcp/X7Y0O9lY+oIWIyaDXS8EkMjkUIyKA1qgLXEKKaiCcJKhEKgUqEQqASoRCoRCgEUUcE9wxPIqJSIyKRwbpoJEs1TQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQqEQqBSoRCoBKhEKhEKAQRvz3k/fff1/b39+tjY2O1Pp8vkJKS4v3ggw8CUvWc4s033ywfHBz8WKPRlOLjdF+T6g8Ggz8ajca9n3766QWpbE4B2fGLHWPdbremqKjIt3fv3tD3ok6BSSdEAoqLi+P4XauY+KabN2/Wz5s3b0VlZWWgurrasXr16sBcf/d2WVnZfI/HswnjycLH6TSZY7NhzN92dnZ2h4rmBh9//LF+/fr1Cfn5+RXXrl3b1tvb+4+kpKTMnTt3DmzYsGH422+/nXQh36cREgnzr1+//uzVq1f/homvHBsby8Ok3Ki+hJOeX7du3SlcpHPfvn1jqJ8TQpSuEY2NjborV67MW7ZsWRkW6TqMtRxjLRkZGbHExcXd0uv1nYWFhSch2+9BiE3qNo77JvTOO+8suHHjxgsgYSdW4HOBQGABJmVElcnv9y8YHR0tunXrVi7IWTA0NDT2wgsv9E7F8kxCyRrx0UcfzUtMTCy/fPnydizg2uHh4RchtxUw52nIkyC/FK/Xm2+327O1Wu3Ie++9Zztw4MCQ1F1gwoTQQdPa2lqE1b4VHavRKQ3FCfzmYZCgQ70JaRFYfsHlcu21Wq27TKmmMqpj6Ax/PZCE1KxUasE2EPDflA1klwN5mUGCXvp25nlYQCkoqwZZDceOHVsmOodhAhFHjhx5Csyuwqpfgo5kUpTjePxbwZBTi4wkBI68pqW5ZTvM1cq/IhkkwZxqLrO2WOudTudGaMAiFJshIyGLcLlRliAlASQVQcZrv/vuO2r2OCYQcf78+UI4l7+DuWycQKPT6cIJmHAM6EDTQqdroLa9o32nyWQqg52MEw3+Avj888/jU1NTyy60X9w24HRtDmBhQi78tv5xWUlyEjllKSH7zp07fz958mSR9FlgAhE2my0RqpWOTgkgI4YpIoJBnc/vf8pmt9e0tLVtB9ulfwXNIAkI6cusZ87UO/r7XvJ5fU9B5BHnTVlCK8CJJg6ak4wFb5aqBCYQAYfYhb3CVXQYABnIpgmIyLRWqwv4/Qv7enrqzrWfe+I148MPP0yIjY8tO9fe3uDos9d4xjw5kJWesogEyTRRO5zQpCvYW9ilKoEJRGRkZPwcHx9vhZPpQRpXrakRFBdAO51Wp11g67FvPHPuTAM140kkg5pgTk0tbT/X/rKjr+8fMD7cZ+lDCzbyoqUsoRVc3DbIx7p8+fJfpCqBCUTs2rXLDbY6kS6BiEF0jnx21HIQJA2rQoc8x2brqblw8UI9alc8SWYKCysB2Yqr/7xc19PTu8Hn9+XCPAkSBBGRJSUvald6evqltLS0qzU1NX2iQsIEIghsSK4lJyc34yLdUucpwXopPBM2UBuKqHK7uru3tLS27mQ09SRoBknoc/WV/Pjjj9u6u7o3B4OBPMxdzznLMphOVkAQ7bphcZrLy8uvSWXjuI+Iurq6AexIzyLE6sCFHCiakmtWcDVwENQKAhfTBQPBRT32nk0dnR3cj6xgmCcqoxBffPGFAY51+Y2ff6vr6rFt8AX8izFH8QMhnHNIG6AVovWUQLNgDxZ4BzaZl7Zs2TLBPxD3EUEUFBT8q7Ky8oDFYvm/GE1MX0j5QheTk5+Cl1QyiGP5hzRAApNOEwzm2bptWxAS74ADL6F9RXVU4bPPPjM6HI7i3377rb7r9u3NmGEB5hvLOXKuCFRC8xcpKGRC2ciyQkjLoyAkZYO5P56fn99YXV19g+e+F5MS0dDQMASz0lpaXn7IYDQ046QgA+fE1UMXwSceI1Eb4KnFwOC8RM6flwEx2oA/kIuQuOann36qj4uLK44mM0VNGBsbW9aDaPCPP/7YBEHnY2466adzQjOFGEiGKAsVytKRjwP4s6UkW74vLCw8kpube2bjxo2T/vjUpEQQdNzzMzNbSkrL95tM5mMQeB/1S7aFzEUSn6aEFuqb1w2f0dHRsZPRVDRoBhZMktvtpiY0/P7775tRVIA0pawEZHlI8sG8A1qdzpaaltqUV5B3CE76NEwSTf2kiHjy2traway0tNay8tJDSdAMnFv4DDjykLGiGQo1nRTSwPgsI7erq2tTZ2dnAzVDyT4DkV5iX1/fchBQd/PmzQ3wk/mYq5ZrUGpyH4QspITgkUUBBKq9yWbzD0uLln6VkZrR9sorr0T8GbbILAMwU675mfNb4On3m5Mtx0gG42ERLYmhRaICFwhFFHAZwdzbt2/XXbhwYQfspSJ9BjUBc5M1oRbDzkMxf9eOUwg1mgRyHXMsugBye5ol+fjTS58+hLm2vvrqq1NqgoxpiSCoGSaDyVpVueqgyWw84fX5HBCsMFORjBNXCIgTSa/Xs2HunTt3NiMMVJxmUBP6+/tXgISXoQkbMeY8PplEFX/XTsxlKrCGskCbgM/v7TWaLSdXrlzZmJWVdXo6TZDxQEQQ9BmZaWnQjKr9yRbzMVy5F6sHgcHUA+TghOYAaMvP1IwcOL8t7e3tIppijC4aPEZQE+C/Sm7cuFHPhYJhMkQV5ogkcB5MUwIyQMTkB3G21OS046Ulyw9iv9BaX1//wL8K+cBEENQMOvDVa9YeSDZbmmAPHaBh2odCJENeVejDGeXAgddcvnyZt4+LH6eZkjUBWsDoiD4hD+PljTaxeGjzI5IAoN4fq9X1Wizm5sqKikZDvKH1tddec6E8st0Ow58igiAZCIWsK0tLDxgSEk9Auk4MelwzwnM5SdoQXi7MFBx47S+//LIVn59+HKEttRHjWvbrr79uwcLYiHHQJ4zLhGPm2KUxi0Tck/MWtSPBEH+yeHlxI0zwnyaB+NNEEG+88cYgLmhdtWrV/8K8MLR1YMVP0IxwuyqbJ5kM5kg0U4vhwGuvXLmy3ePx0EzNGRnUwsHBwdLr169vhTnaBIEXYEjjDw2kMY6PnQifE4Fj3sXrMxqNTVXlVQfR1vowJBAPRQRBMrBlP0UysG0/ARUewKAEGRwwJ8AkT4jpXqCM+4zF2PTVwoFvx/HyubhRSBJw7eKrV6++jA1bDa6bj2Jx2+LeccpjZ6KZCiPCj8/9iYmJzWVlZYfoE95++2032v1pEoiHJoLgDtxsNresXbt2P1YFQ9t+ksHfmOaA5TQNtHCUebDPtW1tbTtwvtLZjKZojrBAVl68eHFrV3f3Jlyb+4RxTZgM8jy4wKQ9FHxzoM9gMDRVVT2aJsh4JCIImYw1a9aQjCYUOTFIsc94ABJkzaFm5Njt9rqzZ89uxy50Vp5nUBOGhoYECbhWjc/rXQzhxXIM04FzkebkR59+kNC8evXqA5hzy6NogoxHJoIgGRhYS3V19X6QchyrTOwzOHAMUGo1ObjKpJXGsTCaqj1z5swO3g6ZSc2gJmBIZdzDwBzRMS/GNWORi+tHAucgmSU/NmzCJ2CuB4eHh63YJ0z/3OYBMCNEECQDvuIUNQMOvAmDE5rBiUaCTBTbgTiGjYuwWjefP39eaMZM+AwSOjY2tvLSpUtbe3t7+bZFLq4rHuqQBHkMU4Ht4MypCQ4suBM0RyizvvvuuzNCAjFjRBB79uy5K2uGxWI5hlXEp1ARB0ohSCov/0o7yViIVbvZarXueNRXdXAuDVbwSmhZA0nguTEu8VCH1+RKn44I1NMxY59gOVFZWXkY/awzYY7CEdFJPQyOHDni2b17d3dKSooLZsaAsPQ/MOAEuDtMVxO6HYBEIciQTYNMCNpzR2seHR2d73K5YgsLC51ut1s/MDDwEpqJN/3C+4cDXZnRLNopuOPHj7sRou6Ab9gGohehXJDKdjzHBI0QGUf579WDYz9G50iCJlRUVAjHPNMkEDNOBEEyXtz9YndORo7b7rAbPF5vFiadGJoxxo8s9NAkJJDwREg5Mo3x7t272dj5JmdlZS0CscUoT0E5nTvb3AeSCfDUw0uWLNE5HI7/xH6hBtcX5oiV0vkFxDH+Gx+PlnXiCEQF/BqttteYlNQMEg7B9J5G2D7jJBD/HtEs4H8aG5PiXK51p8+e3jk8OPy8RqdNR/HE+zeYUqRBQIB+CLcfIfEANGQB+sSjP++IinqaFoKmhuC5UYduQU9cXNxtfE6CJqSgbErzJqTKoZAMJOnc4CbQk2AwNq+uqDiMslnRBBmzSgTBx43eQOCZixc6dvY7nf+FojTG4rLgaAimGwSEGUB7H8jgm3TckQuBkUgKnjmTXCYhiMjLx2gMZZH3CeIPY5HOA+J4K7s3xZLctKJ0xeGHuXf0ZzGjznoyiNshWE0V5RUHeAsdM+mVV50s0EiQBK3FDpZvyAltklasEBo/k1QeE/J52RZ9qAXiBl4ksJpteA7kAQTdPUaTma/Qixt4r7/++sBskkDMio+4F0ePHhUOPD013TXgdCbC7s/HhMVb5pi01CoyKHAmmiLmMvhZFj4ht5GjIpkgOZ8MrKNvQB/xUMeSYjmxsrj0MIi0kgSp2axi1jVChrQDP11SXMKHS01YX70QGm/bSi0mB4UsC5a3TngsC13O7xUy+8A/CFJYx8+RwDGgbUCr09pMScaTRUuLjvAZ81yRQMyJRshANDW2Y8eOHnNKqmtwaCjB4xmjZhgirVYKk4kEEOGrnAJmHctkrZDL5HoSSES6BpSSHXvS0zKa8wsLG7PTM1sxzgd+qDMTmFMiiK+//nrs9VdftVuSTa7evl6j1+PJhGEwSNXjCBf4ZEKUBc86pnAywhHed7LzAPAKQZs52fRDYdHSwwvnzz891yQQc04EQc2oq62zZWRluFxOVwI3bihOZF24sLiyZUHLCD8OJ2sqyPX3nksiDFnQlpaR0bQkv7AxMz19zjVBRuRZzDIaGxvN2Kz9rb29fTc2Xc9iRWeynEKShTydoB8Uk5wTH4NdJpOpZenSpQdzcnLaIr13NNt4LBohg5qxZ88ecTvE6XQmjIyMZKNY+AyZgJkigpD9DLUDpHfBITctXrz4SHZ2duu2bdv6ReVjwpxFTVOB0ZR4vbO09LDFYjmJVcoXdMefZ8iO91HAc8jaIOEOIrgfFi5c+HVeXt60L3/NBR6rRsigA2c0lZyc7BoYGIiHZmRAcEkgQ0juUbVC7o9z8l2s29CEZpBwpKCg4LGao3AogghCJiMjI8MNM2UAGcKBQ3CPbJskbSAPNpKQn5//FUzSGaWQQCiGCIJkwFZTMwYdDofR5/Nlwaw8Mhk4RwDa1QNf9D1M0WE4ZkWRQDzyapsNfPPNN8aenp51nZ2d210ul7hRiPRQY4UW0MlQE04UFhZ+xXdRleAT7sVjd9aTgS+xQStaS0pKDvEhfSAYcDD4JBU0MyLHH8rFXVMm+Zh14rYJc3rpmJheo9H4A0zRV3DQinDMk0FRpikcDG3feustG4TocjgdCSPY9Gm02gQIefxZBOUsjiWCeOOOVkyQwruoOq3dZDI3Pb1ihdis7d69+7GGqJGgSI2QId5CN5msVRVVB81Gk3gLHYIPyre95RuATCSEZVKd+PcJRnPSyZKVxY2mrMQHfiv7cUHRRBB8Cz02Nlb8+4z01LRjOo22D04csg89+JeJkI+9Xm8AbeyZmRnHly8vPegd9ba+Uf+GokkgoNTRATrwXqfzmVarddfI8N1nYYRMMEV8V0meA/3BMGhxJyYmfV9dXXUwThd3erafrM0UooYIorGxMcneb1/Vfu7Cc8FAoHLMM7bc6/OKf1+h18fdTYiP/6ffH+isqqg4FRcXd3Y2nzHPNKKKCILfsGaxWEz6+Pi1rS0ta/R6vbhR6PF67eufeebM6OhoK0Je9759+/hCWFSQQEQdETKgHfzqNj6T1t69e5df7BXglxhCC3zRRIAKFSruR0zM/wMYBpbiISU/xQAAAABJRU5ErkJggg==) center/contain no-repeat;display:block}.gui-header .gui-header-cell .gui-header-menu{display:-ms-flexbox;display:flex}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;padding:16px;height:16px;width:16px}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper .gui-header-menu-icon{display:none;height:16px;width:16px}.gui-header-bottom .gui-header{border-bottom:0;border-top:1px solid;border-color:inherit}gui-structure{background:#fff;box-sizing:border-box;border-color:#d6d6d6;color:#333;display:block;font-family:Arial;font-size:14px;position:relative}gui-structure *{box-sizing:border-box}gui-structure gui-structure-header{display:block;height:100%;width:100%}gui-structure gui-structure-header gui-structure-header-filters.gui-header{height:32px}gui-structure gui-structure-header gui-structure-header-filters.gui-header .gui-header-cell{padding:4px}gui-structure gui-structure-header gui-structure-header-filters.gui-header .gui-header-cell input{position:relative;box-sizing:border-box;font-size:13px;padding:2px;height:100%;width:100%;border:1px solid #d6d6d6}gui-structure-top-panel{display:block;padding:8px;border-bottom-width:1px;border-bottom-style:solid}gui-structure-container{display:block;height:100%;overflow:auto;overflow-x:hidden;position:relative;width:100%}gui-structure-container .gui-structure-container{box-sizing:border-box;height:100%;position:absolute;width:100%}gui-structure-container .gui-structure-container .gui-content{height:100%;position:relative}gui-structure-container .gui-structure-container .gui-content .gui-row{border-bottom:1px solid transparent;position:absolute;width:100%}gui-structure-container .gui-structure-container .gui-content .gui-row:last-child{border-bottom:0}gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#ecedee}gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#d0e8fb}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell{border-right:1px solid transparent;box-sizing:border-box;line-height:1em;overflow:hidden;padding:0;white-space:nowrap}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-cell-view span{line-height:1.4em}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-button{padding:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-cell-boolean{-ms-flex-pack:center;justify-content:center}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-checkbox{position:relative;line-height:24px}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-checkbox input{position:relative}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-chip{margin:0;padding:4px 8px;line-height:1em}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-badge{padding:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-input{background:0 0;font-size:14px;border-style:none;border-radius:0;padding:0}gui-structure-container .gui-cell{display:inline-block}gui-structure-container .gui-cell:last-child .gui-cell-view{padding-right:20px}gui-structure-container .gui-cell>span{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding:0 8px;height:100%;width:100%}gui-structure-container .gui-cell .gui-cell-edit-mode{border:2px solid #2185d0;height:100%;padding:6px}gui-structure-container .gui-cell .gui-cell-edit-mode gui-boolean-edit{margin-left:calc(50% - 11px)}gui-structure-container .gui-cell .gui-cell-edit-mode input:focus{outline:0;box-shadow:none}.gui-vertical-grid .gui-structure-summaries-cell,.gui-vertical-grid gui-structure-container .gui-content .gui-row .gui-cell,.gui-vertical-grid gui-structure-header .gui-header .gui-header-cell{border-right:1px solid;border-right-color:inherit}.gui-vertical-grid gui-structure-container .gui-content .gui-row .gui-cell:last-of-type,.gui-vertical-grid gui-structure-header .gui-header .gui-header-cell:last-of-type{border-right:0}.gui-horizontal-grid gui-structure-container .gui-content .gui-row{border-bottom:1px solid;border-bottom-color:inherit}.gui-horizontal-grid gui-structure-container .gui-content .gui-row:last-of-type{border-bottom:0}.gui-rows-even .gui-row.even,.gui-rows-odd .gui-row.odd{background:#f7f8f9}gui-structure-info-panel{-ms-flex-align:center;align-items:center;box-sizing:border-box;background:#f2f3f4;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:36px;padding:0 6px;width:100%;border-top:1px solid;border-top-color:inherit}gui-structure-info-panel p{margin:0}gui-structure-info-panel p b{font-weight:700}gui-structure-info-panel div button{background:#ccc;border-radius:50%;color:#fff;cursor:pointer;font-weight:700;font-family:Arial;width:16px;height:16px;line-height:14px;padding:0;border:1px solid transparent}gui-structure-info-panel div button:focus{outline:0;box-shadow:0 0 4px #ccc}.gui-structure-border{border:1px solid #d6d6d6}gui-structure-summaries-panel{background:#f2f3f4;display:-ms-flexbox;display:flex}gui-structure-summaries-panel.gui-structure-summaries-panel-bottom .gui-structure-summaries-cell{border-top:1px solid;border-color:inherit}gui-structure-summaries-panel.gui-structure-summaries-panel-top .gui-structure-summaries-cell{border-bottom:1px solid;border-color:inherit}gui-structure-summaries-panel .gui-structure-summaries-cell{font-size:14px;padding-right:16px;padding-left:16px}gui-structure-summaries-panel .gui-structure-summaries-cell:last-child{padding-right:20px}gui-structure-summaries-panel .gui-structure-summaries-value{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;line-height:1em;padding:8px 0;overflow:hidden}gui-structure-summaries-panel .gui-structure-summaries-value div .gui-math-symbol{position:relative;top:-1px}gui-structure-summaries-panel .gui-structure-summaries-value .gui-mean,gui-structure-summaries-panel .gui-structure-summaries-value .gui-median{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}gui-structure-summaries-panel .gui-structure-summaries-value .gui-mean span:nth-child(1){position:absolute;top:-15px;left:1px}gui-structure-summaries-panel .gui-structure-summaries-value .gui-median span:nth-child(1){position:absolute;top:-8px;left:1px}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.gui-loading{-webkit-animation-duration:.2s;animation-duration:.2s;-ms-flex-line-pack:center;align-content:center;background:rgba(255,255,255,.8);border:1px solid;border-color:inherit;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;left:0;opacity:0;position:absolute;top:0;width:100%;visibility:hidden}.gui-loading gui-spinner{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.gui-loading.gui-loader-hidden{-webkit-animation-name:fadeOut;animation-name:fadeOut;opacity:0;visibility:visible;z-index:-1}.gui-loading.gui-loader-visible{-webkit-animation-name:fadeIn;animation-name:fadeIn;opacity:1;visibility:visible;z-index:1}gui-structure-column-manager{color:#333;display:block}gui-structure-column-manager>div:hover{background:#ecedee}gui-structure-column-manager label{margin-bottom:0}.gui-align-right{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;text-align:right;width:100%}.gui-align-left{text-align:left;width:100%}.gui-align-center{text-align:center;-ms-flex-pack:center;justify-content:center;width:100%}.gui-icon{cursor:pointer}.gui-icon svg{fill:#aaa;stroke:#aaa;transition:stroke .3s ease-in-out}.gui-icon svg:hover{fill:#464646!important;stroke:#464646!important}.gui-text-highlight{background:#fff799;padding:0!important}gui-function-view{height:100%;width:100%}gui-function-view div{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.gui-title-panel{padding:8px;border-bottom:1px solid #d6d6d6}.gui-footer-panel{padding:8px;border-top:1px solid #d6d6d6}", "gui-structure-column-manager ol{list-style:none;padding:0;margin:4px 0}gui-structure-column-manager ol li{cursor:pointer;padding:0}gui-structure-column-manager ol li:hover{background:#ecedee}.gui-structure-column-menu-icon svg{height:16px;width:16px}.gui-structure-column-menu-icon .cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.gui-structure-column-menu-arrow-icon{display:inline-block}.gui-structure-column-menu-arrow-icon svg{height:10px;width:12px}.gui-structure-column-menu-arrow-icon .gui-structure-column-menu-sort-icon svg{height:16px}.gui-structure-column-menu-arrow-icon .cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.gui-structure-dialog-column-manager .gui-dialog-title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-structure-dialog-column-manager ol{min-width:250px;max-height:400px;overflow:auto}.gui-structure-dialog-column-manager ol li{padding:8px}", ".gui-summaries-value{font-weight:700}", ".gui-structure-column-manager-icon svg{height:16px;width:16px}.gui-structure-column-manager-icon .cls-1,.gui-structure-column-manager-icon .cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round}.gui-structure-column-manager-icon .cls-2{stroke-width:1.5px}.gui-structure-info-icon svg{height:16px;width:16px}.gui-structure-info-icon .cls-1{stroke-width:0}.gui-structure-info-icon .cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round}gui-structure-info-panel div,gui-structure-info-panel div button{display:inline-block}gui-structure-info-panel .gui-right-section .gui-structure-column-manager-icon{margin-right:16px;position:relative}gui-structure-info-panel .gui-right-section .gui-structure-info-icon{margin-right:4px;position:relative}.gui-structure-info-modal{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0;font-size:16px;font-family:Arial;width:360px}.gui-structure-info-modal .gui-dialog-title{margin:0 0 8px}.gui-structure-info-modal .gui-quote{color:#575757;font-size:20px;font-style:italic;font-weight:lighter}.gui-structure-info-modal .gui-info-title{font-size:22px;margin-bottom:12px}.gui-structure-info-modal .gui-info-version{font-size:18px;margin-bottom:32px}.gui-structure-info-modal ul{list-style:none;margin:0;padding-left:10px}.gui-structure-info-modal ul li{line-height:24px}.gui-structure-info-modal p{font-weight:700;margin:0 0 8px;color:#333}.gui-structure-info-modal section{border-top:1px solid;border-color:inherit;padding:16px 0 8px;margin:0}.gui-structure-info-modal a{text-decoration:none;color:#2185d0;margin:0 0 8px}.gui-structure-info-modal a:hover{color:#59a9e5;text-decoration:underline}", "@media (max-width:500px){.gui-paging .gui-paging-stats,.gui-paging>*{padding-left:4px}}", ".gui-header{display:-ms-flexbox;display:flex}.gui-header .gui-header-cell{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.gui-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.gui-content .gui-row,.gui-content .gui-structure-cell-container{display:-ms-flexbox;display:flex}.gui-content .gui-row .gui-cell,.gui-content .gui-structure-cell-container .gui-cell{display:inline-block}.gui-content .gui-structure-row-details{background:#80cbc4;display:block;position:absolute;top:0;height:200px;width:100%}", ".gui-inline-dialog-header-menu.gui-inline-dialog-wrapper .gui-inline-dialog-content{background:0 0;box-shadow:none}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-item-active{font-weight:700}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-list{background:#fff}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item{color:#333}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item.gui-active{color:#2185d0}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-content{padding:0;width:225px;box-sizing:content-box;box-shadow:0 3px 7px #ccc}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0;color:#333}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;cursor:pointer}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item svg line{stroke:#aaa}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item.left{width:48%;padding:12px 16px 12px 12px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item.right{width:52%;padding:12px 10px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover svg line{stroke:#464646}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container{border:none;border-radius:0}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow{opacity:1}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu{width:125px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item{display:-ms-flexbox;display:flex;color:#333;background:#fff;padding:8px 8px 8px 12px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item:hover .gui-sort-title svg line{stroke:#464646}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title svg{margin-top:3px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title svg line{stroke:#aaa}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-header-item-active .gui-item .gui-sort{opacity:1}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item{display:block;cursor:pointer;color:#333;padding:8px 12px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-checkbox{width:169px;margin-left:12px;padding:8px 12px 8px 32px;color:#333}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-checkbox label{display:inline-block;width:inherit}", ".gui-structure-filter-icon-wrapper{margin-right:24px}.gui-structure-filter-icon-wrapper .gui-structure-filter-icon{cursor:pointer}.gui-structure-filter-icon-wrapper .gui-structure-filter-icon svg{height:16px;width:16px}.gui-structure-filter-icon-wrapper .gui-structure-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-structure-filter-icon-wrapper .gui-structure-filter-icon:hover .cls-1{stroke:#464646}.gui-structure-filter-menu{display:block;width:400px}", ".gui-cell .gui-checkbox{display:block}.gui-cell .gui-chip{margin:0;padding:2px 8px}.gui-cell .gui-input{font-size:11px;display:block;padding:2px 4px;width:86%}.gui-cell .gui-button{padding:2px 8px}.gui-cell .gui-cell-number{display:block;width:100%}.gui-cell .gui-cell-boolean{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;text-align:center;width:100%}", ".gui-fabric,.gui-fabric *{border-color:#d6d6d6;font-size:14px}.gui-fabric .gui-header-cell,.gui-fabric gui-paging,.gui-fabric gui-structure-header-columns,.gui-fabric gui-structure-info-panel,.gui-fabric gui-structure-top-panel{height:42px}", ".gui-material,.gui-material *{border-color:rgba(0,0,0,.12);font-size:14px}.gui-material.gui-structure{border-radius:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);border:0}.gui-material .gui-header,.gui-material.gui-structure{font-family:Arial}.gui-material .gui-header-cell,.gui-material gui-structure-header-columns{height:56px}.gui-material .gui-header .gui-header-cell.gui-header-sortable:hover{background:0 0}.gui-material .gui-header-cell,.gui-material gui-structure-container gui-structure-cell>span{padding-right:16px;padding-left:16px}.gui-material gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:rgba(0,0,0,.04)}.gui-material gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#e6f7ff}.gui-material .gui-structure-header .gui-header{background:0 0;color:#464646;font-weight:700}.gui-material .gui-structure-header .gui-header .gui-header-cell{border-color:inherit}.gui-material .gui-cell .gui-badge,.gui-material .gui-cell .gui-button{padding:0}.gui-material gui-structure-alternative-paging-navigator .gui-button{margin:0 4px;background:0 0;padding:0;color:#333}.gui-material gui-structure-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-material gui-structure-alternative-paging-navigator .gui-button:disabled{background:0 0;color:#ccc;opacity:.4}.gui-material .gui-structure-summaries-panel{background:#fff}.gui-material .gui-paging,.gui-material gui-structure-info-panel,.gui-material gui-structure-top-panel{height:52px;padding-right:16px;padding-left:16px}.gui-material gui-structure-info-panel{background:#fff;border-radius:0}.gui-material gui-structure-top-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-right:0}.gui-material gui-search-bar form input,.gui-material gui-structure-top-panel gui-search-bar form input{border:0;outline:0}", ".gui-dark{border-color:#575757;color:#f0f0f0;font-size:14px;border-radius:2px}.gui-dark *{border-color:#575757;color:#f0f0f0;font-size:14px}.gui-dark.gui-structure{border-radius:2px}.gui-dark .gui-header-cell,.gui-dark gui-structure-header-columns{background:#333;height:46px}.gui-dark .gui-structure-border{border:none;box-shadow:5px 5px 10px 2px #1f1f1f}.gui-dark .gui-header-cell{border-bottom:1px solid;border-color:inherit;padding-right:16px;padding-left:16px}.gui-dark gui-structure-container gui-structure-cell>span{padding-right:16px;padding-left:16px}.gui-dark .gui-structure-header .gui-header{color:#bdbdbd;border-bottom-color:#666}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover{background:#525252}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper{background-color:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-list{background:#383838}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item{color:#f0f0f0}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item.gui-active{color:#ce93d8}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-content{box-shadow:0 1px 2px #525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab gui-structure-column-manager ol li:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move{color:#f0f0f0}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover svg line{stroke:#ce93d8}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#666}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover svg line{stroke:#ce93d8}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item{display:-ms-flexbox;display:flex;color:#f0f0f0;background:#383838}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item{color:#f0f0f0}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-checkbox{color:#f0f0f0}.gui-dark gui-structure-column-manager>div:hover,.gui-dark gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#525252}.gui-dark gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#7cb9f652}.gui-dark.gui-rows-even .gui-row.even,.gui-dark.gui-rows-odd .gui-row.odd{background:#4f4f4f}.gui-dark .gui-horizontal-grid gui-structure-container .gui-row .gui-cell{border-bottom-color:#666}.gui-dark .gui-paging.gui-paging-bottom{border-top-color:#666}.gui-dark .gui-paging.gui-paging-top{border-bottom-color:#666}.gui-dark ::-webkit-scrollbar{width:15px}.gui-dark ::-webkit-scrollbar-track{background:#616161}.gui-dark ::-webkit-scrollbar-thumb{background:#424242}.gui-dark ::-webkit-scrollbar-thumb:hover{background:#212121}.gui-dark .gui-paging,.gui-dark .gui-row,.gui-dark .gui-structure-container,.gui-dark gui-structure-info-panel,.gui-dark gui-structure-top-panel{background:#444}.gui-dark .gui-paging,.gui-dark gui-structure-info-panel,.gui-dark gui-structure-top-panel{height:42px;padding-right:16px;padding-left:16px}.gui-dark .gui-structure-summaries-cell{background:#383838;color:#f0f0f0}.gui-dark .gui-structure-summaries-panel-bottom .gui-structure-summaries-cell{border-top-color:#666}.gui-dark .gui-structure-summaries-panel-top .gui-structure-summaries-cell{border-bottom-color:#666}.gui-dark gui-structure-info-panel{background:#383838;border-top-color:#666}.gui-dark gui-structure-info-panel div{color:#f0f0f0}.gui-dark gui-structure-info-panel div button{background:#616161}.gui-dark .gui-structure-info-modal p,.gui-dark .gui-structure-info-panel p{color:#f0f0f0}.gui-dark gui-structure-alternative-paging-navigator .gui-button{margin:0 4px;background:0 0;padding:0;color:#f0f0f0}.gui-dark gui-structure-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-dark gui-structure-alternative-paging-navigator .gui-button:disabled{background:0 0;color:#f0f0f0;opacity:.4}.gui-dark gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-active-page{color:#f0f0f0;box-shadow:0 1px 0 0 #f0f0f0}.gui-dark gui-search-bar form{background:#444}.gui-dark gui-search-bar input{background:#444;color:#f0f0f0;border:0;cursor:pointer}.gui-dark gui-search-bar:hover .gui-search-icon circle,.gui-dark gui-search-bar:hover .gui-search-icon line{stroke:#878787}.gui-dark .gui-icon{cursor:pointer}.gui-dark .gui-icon svg{stroke:#aaa;transition:stroke .3s ease-in-out}.gui-dark .gui-icon svg:hover{stroke:#e6e6e6!important}", ".gui-light,.gui-light *{border-color:#f0f0f0;font-size:14px}.gui-light.gui-structure-border{border:0;border-color:#f0f0f0 transparent}.gui-light .gui-header,.gui-light.gui-structure{background:#fff;color:#333;font-family:Arial}.gui-light .gui-header-cell,.gui-light gui-structure-header-columns{height:56px}.gui-light .gui-header-cell,.gui-light gui-structure-container gui-structure-cell>span{padding-right:16px;padding-left:16px}.gui-light .gui-structure-header .gui-header{color:#333;font-weight:700}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover{background:#f3f9ff}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper{background-color:#f3f9ff}.gui-light gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#f3f9ff}.gui-light gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#7cb9f652}.gui-light.gui-rows-even .gui-row.even,.gui-light.gui-rows-odd .gui-row.odd{background:#f7f7f7}.gui-light gui-structure-alternative-paging-navigator .gui-button{margin:0 4px;background:0 0;padding:0;color:#333}.gui-light gui-structure-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-light gui-structure-alternative-paging-navigator .gui-button:disabled{background:0 0;color:#333;opacity:.4}.gui-light .gui-paging,.gui-light gui-structure-info-panel,.gui-light gui-structure-top-panel{height:56px;padding-right:16px;padding-left:16px}.gui-light .gui-paging,.gui-light gui-structure-info-panel,.gui-light gui-structure-summaries-panel,.gui-light gui-structure-top-panel{background:#fff}.gui-light gui-search-bar form input{border:0;outline:0}", ".gui-structure.gui-generic,.gui-structure.gui-generic *{border-color:rgba(34,36,38,.1);font-size:14px}.gui-structure.gui-generic .gui-header-cell,.gui-structure.gui-generic gui-structure-header-columns{height:46px}.gui-structure.gui-generic .gui-header .gui-header-cell.gui-header-sortable:hover{background:rgba(0,0,0,.04);transition:.15s}.gui-structure.gui-generic .gui-header-cell,.gui-structure.gui-generic gui-structure-container gui-structure-cell>span{padding-right:12px;padding-left:12px}.gui-structure.gui-generic gui-structure-container gui-structure-cell:last-child>span{padding-right:20px}.gui-structure.gui-generic .gui-structure-header.gui-header-bottom .gui-header{border-width:2px 0 0;border-style:solid;border-color:inherit}.gui-structure.gui-generic gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:rgba(0,0,0,.04)}.gui-structure.gui-generic gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#e6f7ff}.gui-structure.gui-generic .gui-structure-header .gui-header{background:#f9fafb;border-width:0 0 2px;color:#464646;font-weight:700}.gui-structure.gui-generic .gui-rows-even .gui-row.even,.gui-structure.gui-generic .gui-rows-odd .gui-row.odd{background:#f9fafb}.gui-structure.gui-generic .gui-cell .gui-badge,.gui-structure.gui-generic .gui-cell .gui-button{padding:0}.gui-structure.gui-generic .gui-alternative-paging-navigator .gui-button{margin:0 4px;background:0 0;padding:0;color:#333}.gui-structure.gui-generic .gui-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-structure.gui-generic .gui-alternative-paging-navigator .gui-button:disabled{background:0 0;color:#ccc;opacity:.4}.gui-structure.gui-generic .gui-structure-summaries-panel{background:#f9fafb}.gui-structure.gui-generic .gui-paging,.gui-structure.gui-generic gui-structure-info-panel,.gui-structure.gui-generic gui-structure-top-panel{height:46px;padding-right:12px;padding-left:12px}.gui-structure.gui-generic gui-structure-info-panel{background:#f9fafb;border-radius:0}.gui-structure.gui-generic gui-structure-top-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-right:0}.gui-structure.gui-generic gui-structure-top-panel gui-search-bar form input{border:0;outline:0}.gui-structure.gui-generic .gui-rows-even .gui-row.even,.gui-structure.gui-generic .gui-rows-odd gui-row.odd{background:#f9fafb}.gui-structure.gui-generic .gui-row:hover{background:#f9fafb;transition:.15s}"]
            }] }
];
/** @nocollapse */
StructureComponent.ctorParameters = () => [
    { type: StructureId },
    { type: CompositionId },
    { type: PagingCommandDispatcher },
    { type: PagingEventRepository },
    { type: SourceCommandDispatcher },
    { type: SourceEventService },
    { type: SortingCommandDispatcher },
    { type: SearchCommandDispatcher },
    { type: FieldCommandDispatcher },
    { type: SchemaCommandDispatcher },
    { type: CompositionCommandDispatcher },
    { type: CompositionEventRepository },
    { type: FormationEventService },
    { type: StructureCommandDispatcher },
    { type: StructureEditModeArchive },
    { type: StructureCellEditArchive },
    { type: StructureInfoPanelArchive },
    { type: StructureInfoPanelConfigService },
    { type: StructureSummariesConfigService },
    { type: StructureCellEditStore },
    { type: ColumnFieldFactory },
    { type: StructureColumnMenuConfigArchive },
    { type: PagingDisplayModeArchive },
    { type: StructureRowSelectEnabledArchive },
    { type: SearchEventRepository },
    { type: StructureHeaderTopEnabledArchive },
    { type: StructureHeaderBottomEnabledArchive },
    { type: StructureRowDetailConfigArchive },
    { type: StructureTitlePanelConfigArchive },
    { type: StructureFooterPanelConfigArchive },
    { type: SchemaEventRepository },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: StructureDefinition },
    { type: StructureWarehouse },
    { type: CompositionWarehouse },
    { type: SchemaCssClassManager },
    { type: SchemaReadModelRootId },
    { type: DomainEventBus },
    { type: CommandDispatcher },
    { type: StructureRowDetailService }
];
if (false) {
    /** @type {?} */
    StructureComponent.prototype.loaderEnabled;
    /** @type {?} */
    StructureComponent.prototype.circleLoaderEnabled;
    /** @type {?} */
    StructureComponent.prototype.initialLoaderAnimation;
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
    StructureComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.compositionReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.schemaStylesManager;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structureDetailViewService;
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
    { type: StructureCommandDispatcher },
    { type: CompositionWarehouse },
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
class StructureColumnConfigService extends Reactive {
    /**
     * @param {?} injector
     * @param {?} schemaReadModelRepository
     * @param {?} structureThemeConverter
     * @param {?} inlineDialogService
     */
    constructor(injector, schemaReadModelRepository, structureThemeConverter, inlineDialogService) {
        super();
        this.injector = injector;
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.structureThemeConverter = structureThemeConverter;
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
                    // TODO
                    useValue: column
                }],
            parent: this.injector
        });
        this.schemaReadModelRepository
            .onSingleTheme()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.inlineDialogService.open(elementRef, StructureColumnConfigComponent, {
                injector: injector,
                placement: InlineDialogPlacement.Top,
                offset: -2,
                theme: this.structureThemeConverter.convertTheme(theme),
                customClass: 'gui-inline-dialog-header-menu'
            });
        }));
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
    { type: SchemaWarehouse },
    { type: StructureThemeConverter },
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
    StructureColumnConfigService.prototype.schemaReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.structureThemeConverter;
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
     * @param {?} compositionId
     * @param {?} structureId
     * @param {?} sortingCommandDispatcher
     */
    constructor(elementRef, injector, changeDetectorRef, compositionId, structureId, sortingCommandDispatcher) {
        super();
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
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
            this.sortingCommandDispatcher.toggleSort(column.getFieldId(), this.compositionId, this.structureId);
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
                template: "<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-header-cell\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(column), 'gui-sort-desc': isSortDesc(column)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<gui-structure-column-config-trigger\n\t\t\t\t[column]=\"column\">\n\t\t</gui-structure-column-config-trigger>\n\t</div>\n</div>\n",
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
    { type: CompositionId },
    { type: StructureId },
    { type: SortingCommandDispatcher }
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
    StructureHeaderColumnsComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.sortingCommandDispatcher;
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
class StructureFilterWarehouse {
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
StructureFilterWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterWarehouse.ctorParameters = () => [
    { type: StructureFilterRepository },
    { type: StructureQuickFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterWarehouse.prototype.structureFilterRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFilterWarehouse.prototype.structureQuickFilterRepository;
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

			<gui-select [options]="['has value', 'is the same as', 'starts with', 'ends with']" [selected]="'has value'">

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
    { type: StructureFilterCommandDispatcher },
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
     * @param {?} structureWarehouse
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, renderer, eventBus, structureId, structureFilterReadModelRepository, structureWarehouse, structureVerticalFormationWarehouse, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.eventBus = eventBus;
        this.structureId = structureId;
        this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        this.structureWarehouse = structureWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.compositionReadModelService = compositionReadModelService;
        this.headerColumns = [];
        this.filterRowEnabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionReadModelService
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
        this.compositionReadModelService
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
        this.structureVerticalFormationWarehouse
            .onRowHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            /** @type {?} */
            const headerHeight = +(rowHeight) + 2;
            // if (this.containerRef) {
            // 	this.renderer.setStyle(this.containerRef.nativeElement, 'height', headerHeight + 'px');
            // }
            if (this.filtersRef) {
                this.renderer.setStyle(this.filtersRef.nativeElement, 'height', headerHeight + 'px');
            }
        }));
    }
}
StructureHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header',
                template: "<gui-structure-header-columns\n\t\t[columns]=\"headerColumns\"\n\t\tclass=\"gui-header\">\n</gui-structure-header-columns>\n\n<gui-structure-header-filters\n\t\t*ngIf=\"filterRowEnabled\"\n\t\t[columns]=\"headerColumns\"\n\t\tclass=\"gui-header\">\n</gui-structure-header-filters>\n",
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
    { type: StructureFilterWarehouse },
    { type: StructureWarehouse },
    { type: StructureVerticalFormationWarehouse },
    { type: CompositionWarehouse }
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
    StructureHeaderComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureVerticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.compositionReadModelService;
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

		<button gui-button [primary]="true">Add Filter</button>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureHeaderFilterComponent.ctorParameters = () => [
    { type: StructureFilterCommandDispatcher },
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
     * @param {?} formationReadModelService
     * @param {?} structureWarehouse
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} verticalFormationRepository
     * @param {?} structureId
     * @param {?} structureSearchPhraseRepository
     * @param {?} structureSearchHighlightArchive
     */
    constructor(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationReadModelService, structureWarehouse, structureVerticalFormationWarehouse, structureRowSelectEnabledArchive, verticalFormationRepository, structureId, // REfactor
    structureSearchPhraseRepository, structureSearchHighlightArchive) {
        super();
        this.platformId = platformId;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandService = formationCommandService;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationReadModelService = formationReadModelService;
        this.structureWarehouse = structureWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
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
        this.formationReadModelService
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
        this.structureVerticalFormationWarehouse
            .onRowHeight(this.structureId)
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
                template: "<div class=\"gui-content\">\n\n\t<gui-structure-row (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   [index]=\"index\"\n\t\t\t\t\t   [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t   [style.height.px]=\"rowHeight\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
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
    { type: StructureFormationDispatcher },
    { type: StructureCellEditArchive },
    { type: StructureEditModeArchive },
    { type: StructureFormationWarehouse },
    { type: StructureWarehouse },
    { type: StructureVerticalFormationWarehouse },
    { type: StructureRowSelectEnabledArchive },
    { type: VerticalFormationRepository },
    { type: StructureId },
    { type: SearchPhraseRepository },
    { type: SearchHighlightArchive }
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
    StructureContentComponent.prototype.formationReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureVerticalFormationWarehouse;
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
                template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<gui-structure-cell *ngFor=\"let column of columns; trackBy: trackByFn\"\n\t\t\t\t\t[cellEditingEnabled]=\"cellEditing\"\n\t\t\t\t\t[cell]=\"column\"\n\t\t\t\t\t[editMode]=\"editMode\"\n\t\t\t\t\t[entity]=\"entity\"\n\t\t\t\t\t[searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t[style.width.px]=\"column.width\"\n\t\t\t\t\tclass=\"gui-cell\">\n</gui-structure-cell>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n",
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
     * @param {?} elementRef
     * @param {?} structureCellEditArchive
     * @param {?} structureCellEditStore
     * @param {?} cellEditCloseAllService
     * @param {?} sourceCommandService
     */
    constructor(changeDetectorRef, elementRef, structureCellEditArchive, structureCellEditStore, cellEditCloseAllService, sourceCommandService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureCellEditStore = structureCellEditStore;
        this.cellEditCloseAllService = cellEditCloseAllService;
        this.sourceCommandService = sourceCommandService;
        this.inEditMode = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // if (changes.editMode !== undefined) {
        // 	if (this.editMode) {
        // 		this.cellEditingEnabled = true;
        // 		this.enterEditMode(false);
        // 	} else if (!this.editMode) {
        // 		this.exitEditMode();
        // 	}
        // }
        //
        // if (!this.editMode) {
        // 	this.exitEditMode();
        // }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.cellEditCloseAllService
            .onCloseAll()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.exitEditMode();
        }));
    }
    /**
     * @return {?}
     */
    isCellEditingEnabled() {
        return this.cellEditingEnabled && this.cell.isCellEditingEnabled();
    }
    /**
     * @param {?=} forceCheck
     * @return {?}
     */
    enterEditMode(forceCheck = true) {
        if (!this.isCellEditingEnabled()) {
            return;
        }
        this.cellEditCloseAllService.closeAll();
        timer(0)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.inEditMode = true;
            this.valueChanges$ = new ChangedValueEmitter();
            this.status$ = new ChangedValueEmitter();
            this.editContext = {
                status: this.status$,
                valueChanges: this.valueChanges$,
                value: this.cell.getValue(this.entity).value,
                focus: forceCheck,
                parent: this.elementRef
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
        }));
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
                selector: 'gui-structure-cell[entity][cell]',
                template: "<ng-container *ngIf=\"!cell.isBooleanDataType() || (cell.isBooleanDataType() && !this.isCellEditingEnabled())\">\n\n\t<span (click)=\"enterEditMode()\"\n\t\t  *ngIf=\"!inEditMode\"\n\t\t  [ngClass]=\"{'gui-cell-view': true,'gui-align-left': cell.isAlignLeft(),'gui-align-center': cell.isAlignCenter(),'gui-align-right': cell.isAlignRight()}\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\tcontext: { element: cell.getValue(entity, searchPhrase) }\">\n\t\t</ng-container>\n\t</span>\n\n\t<span *ngIf=\"inEditMode\"\n\t\t  class=\"gui-cell-edit-mode\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\tcontext: editContext\">\n\t\t</ng-container>\n\t</span>\n\n\n\t<!--\t<span *ngIf=\"inEditMode\"-->\n\t<!--\t\t  class=\"gui-cell-edit-mode\">-->\n\n\t<!--\t\t<gui-structure-cell-edit [cell]=\"cell\"-->\n\t<!--\t\t\t\t\t\t\t\t [entity]=\"entity\">-->\n\t<!--\t\t</gui-structure-cell-edit>-->\n\t<!--\t</span>-->\n\n\n</ng-container>\n\n<ng-container *ngIf=\"cell.isBooleanDataType() && this.isCellEditingEnabled()\">\n\t<gui-structure-cell-edit-boolean [cell]=\"cell\"\n\t\t\t\t\t\t\t\t\t [entity]=\"entity\">\n\t</gui-structure-cell-edit-boolean>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureCellComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureCellEditArchive },
    { type: StructureCellEditStore },
    { type: StructureCellEditCloseAllService },
    { type: SourceCommandDispatcher }
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
    StructureCellComponent.prototype.elementRef;
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
    StructureCellComponent.prototype.cellEditCloseAllService;
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
     * @param {?} structureReadModelWarehouse
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} structureSourceWarehouse
     * @param {?} compositionCommandService
     * @param {?} compositionWarehouse
     * @param {?} structureFormationWarehouse
     * @param {?} resizeDetector
     * @param {?} structureParent
     */
    constructor(elementRef, renderer, changeDetectorRef, ngZone, structureId, structureCommandService, structureReadModelWarehouse, structureVerticalFormationWarehouse, structureSourceWarehouse, compositionCommandService, compositionWarehouse, structureFormationWarehouse, resizeDetector, structureParent) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureReadModelWarehouse = structureReadModelWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.compositionCommandService = compositionCommandService;
        this.compositionWarehouse = compositionWarehouse;
        this.structureFormationWarehouse = structureFormationWarehouse;
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
        this.structureVerticalFormationWarehouse
            .onContainerHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} containerHeight
         * @return {?}
         */
        (containerHeight) => {
            this.setContainerHeight(containerHeight);
        }));
        this.structureSourceWarehouse
            .onEntities()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} source
         * @return {?}
         */
        (source) => {
            this.source = source;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionWarehouse
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
        this.compositionWarehouse
            .onResizeWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.autoResizeWidthEnabled = enabled;
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
        this.compositionWarehouse
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.renderer.setStyle(this.sourceCollectionRef.nativeElement, 'width', width + 'px');
        }));
        this.structureVerticalFormationWarehouse
            .onVerticalScrollEnabled(this.structureId)
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
        this.structureReadModelWarehouse
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
            const topMargin = structure.getTopMargin();
            /** @type {?} */
            const sourceHeight = structure.getSourceHeight();
            this.setSourceHeight(topMargin, sourceHeight);
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
     * @private
     * @param {?} height
     * @return {?}
     */
    setContainerHeight(height) {
        this.height = height;
        this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.height + 'px');
    }
    /**
     * @private
     * @param {?} topMargin
     * @param {?} sourceHeight
     * @return {?}
     */
    setSourceHeight(topMargin, sourceHeight) {
        this.renderer.setStyle(this.sourceCollectionRef.nativeElement, 'padding-top', topMargin + 'px');
        this.renderer.setStyle(this.sourceCollectionRef.nativeElement, 'height', sourceHeight + 'px');
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
                template: "<div #sourceCollection\n\t class=\"gui-structure-container\">\n\n\t<gui-structure-content [columns]=\"columns\"\n\t\t\t\t\t\t   [source]=\"source\">\n\t</gui-structure-content>\n\n</div>\n",
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
    { type: StructureCommandDispatcher },
    { type: StructureWarehouse },
    { type: StructureVerticalFormationWarehouse },
    { type: StructureSourceWarehouse },
    { type: CompositionCommandDispatcher },
    { type: CompositionWarehouse },
    { type: StructureFormationWarehouse },
    { type: ResizeDetector },
    { type: undefined, decorators: [{ type: Optional$1 }, { type: Inject, args: [structureParentComponent,] }] }
];
StructureContainerComponent.propDecorators = {
    sourceCollectionRef: [{ type: ViewChild, args: ['sourceCollection', { static: false },] }]
};
if (false) {
    /** @type {?} */
    StructureContainerComponent.prototype.sourceCollectionRef;
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
    StructureContainerComponent.prototype.structureReadModelWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureVerticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureFormationWarehouse;
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
     * @param {?} structureReadModelService
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} pagingReadModelService
     * @param {?} structureSummariesArchive
     * @param {?} structureFilterReadModelRepository
     * @param {?} structureSearchReadModelRepository
     * @param {?} structureHeaderTopEnabledArchive
     * @param {?} structureHeaderBottomEnabledArchive
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} className
     */
    constructor(changeDetectorRef, structureDefinition, structureId, structureReadModelService, structureInfoPanelEnabledArchive, pagingReadModelService, structureSummariesArchive, structureFilterReadModelRepository, structureSearchReadModelRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, className) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureDefinition = structureDefinition;
        this.structureId = structureId;
        this.structureReadModelService = structureReadModelService;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.pagingReadModelService = pagingReadModelService;
        this.structureSummariesArchive = structureSummariesArchive;
        this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        this.structureSearchReadModelRepository = structureSearchReadModelRepository;
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        this.className = className;
        this.searchEnabled = false;
        this.topSummariesPanelEnabled = false;
        this.bottomSummariesPanelEnabled = false;
        this.quickFiltersEnabled = false;
        this.infoPanelEnabled = false;
        this.items = [];
        this.headerCssClass = `gui-${this.className}-header`;
        this.contentCssClass = `gui-${this.className}-content`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureHeaderTopEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} topHeaderEnabled
         * @return {?}
         */
        (topHeaderEnabled) => {
            this.topHeaderEnabled = topHeaderEnabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureHeaderBottomEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} bottomHeaderEnabled
         * @return {?}
         */
        (bottomHeaderEnabled) => {
            this.bottomHeaderEnabled = bottomHeaderEnabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureReadModelService
            .onStructure()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            this.structure = structure;
            this.items = structure.getEntities();
            this.changeDetectorRef.detectChanges();
        }));
        this.pagingReadModelService
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
        this.structureSummariesArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.topSummariesPanelEnabled = config.itTopEnabled();
            this.bottomSummariesPanelEnabled = config.itBottomEnabled();
            this.changeDetectorRef.detectChanges();
        }));
        this.structureInfoPanelEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} infoPanel
         * @return {?}
         */
        (infoPanel) => {
            this.infoPanelEnabled = infoPanel.isEnabled();
            this.changeDetectorRef.detectChanges();
        }));
        this.structureTitlePanelConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} titlePanel
         * @return {?}
         */
        (titlePanel) => {
            this.titlePanelEnabled = titlePanel.enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureFooterPanelConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} footerPanel
         * @return {?}
         */
        (footerPanel) => {
            this.footerPanelEnabled = footerPanel.enabled;
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
        return this.structureDefinition.isHeaderEnabled() && this.topHeaderEnabled;
    }
    /**
     * @return {?}
     */
    isColumnHeaderBottomEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.bottomHeaderEnabled;
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
                template: "<!---------- TOP ---------->\n<gui-structure-title-panel *ngIf=\"titlePanelEnabled\"></gui-structure-title-panel>\n\n<gui-structure-top-panel *ngIf=\"searchEnabled\"></gui-structure-top-panel>\n\n<gui-structure-quick-fitlers *ngIf=\"quickFiltersEnabled\">\n</gui-structure-quick-fitlers>\n\n<gui-paging *ngIf=\"isPagingTopEnabled()\"\n\t\t\t[position]=\"0\">\n</gui-paging>\n\n<gui-structure-summaries-panel [enabled]=\"topSummariesPanelEnabled\"\n\t\t\t\t\t\t\t   class=\"gui-structure-summaries-panel-top\">\n</gui-structure-summaries-panel>\n\n<gui-structure-header *ngIf=\"isColumnHeaderTopEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderTopClasses()\">\n</gui-structure-header>\n\n\n<!---------- MAIN ---------->\n<gui-structure-container [ngClass]=\"contentCssClass\">\n</gui-structure-container>\n\n<gui-empty-source [items]=\"items\">\n</gui-empty-source>\n\n\n<!---------- BOTTOM ---------->\n<gui-structure-header *ngIf=\"isColumnHeaderBottomEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderBottomClasses()\">\n</gui-structure-header>\n\n<gui-structure-summaries-panel [enabled]=\"bottomSummariesPanelEnabled\"\n\t\t\t\t\t\t\t   class=\"gui-structure-summaries-panel-bottom\">\n</gui-structure-summaries-panel>\n\n<gui-structure-footer-panel *ngIf=\"footerPanelEnabled\"></gui-structure-footer-panel>\n\n<gui-paging *ngIf=\"isPagingBottomEnabled()\"\n\t\t\t[position]=\"1\">\n</gui-paging>\n\n<gui-structure-info-panel *ngIf=\"infoPanelEnabled\"></gui-structure-info-panel>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureBlueprintComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureDefinition },
    { type: StructureId },
    { type: StructureWarehouse },
    { type: StructureInfoPanelArchive },
    { type: PagingWarehouse },
    { type: StructureSummariesArchive },
    { type: StructureFilterWarehouse },
    { type: SearchWarehouse },
    { type: StructureHeaderTopEnabledArchive },
    { type: StructureHeaderBottomEnabledArchive },
    { type: StructureTitlePanelConfigArchive },
    { type: StructureFooterPanelConfigArchive },
    { type: String, decorators: [{ type: Inject, args: [STRUCTURE_CSS_CLASS_NAME,] }] }
];
if (false) {
    /** @type {?} */
    StructureBlueprintComponent.prototype.structure;
    /** @type {?} */
    StructureBlueprintComponent.prototype.searchEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.topSummariesPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.bottomSummariesPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.quickFiltersEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.infoPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.contentCssClass;
    /** @type {?} */
    StructureBlueprintComponent.prototype.headerCssClass;
    /** @type {?} */
    StructureBlueprintComponent.prototype.topHeaderEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.bottomHeaderEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingReadModel;
    /** @type {?} */
    StructureBlueprintComponent.prototype.titlePanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.footerPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.items;
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
    StructureBlueprintComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureInfoPanelEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureSummariesArchive;
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
    StructureBlueprintComponent.prototype.structureHeaderTopEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureHeaderBottomEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureTitlePanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureFooterPanelConfigArchive;
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
class FormationSetEvent extends DomainEvent {
    /**
     * @param {?} structureId
     */
    constructor(structureId) {
        super(structureId, 'FormationSetEvent');
    }
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
class InMemoryStructureRepository extends StructureReadModelRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureReadStore
     */
    constructor(domainEventBus, inMemoryStructureReadStore) {
        super(domainEventBus);
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
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
            SearchPhraseSetDomainEvent,
            (/** @type {?} */ (SortOrderSetEvent)),
            (/** @type {?} */ (OriginSetEvent)),
            RowHeightSetEvent,
            StructureHeightSetEvent,
            RowHeightSetBasedOnThemeEvent
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
        const optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
        optStructure.ifPresent((/**
         * @param {?} structureReadModelRoot
         * @return {?}
         */
        (structureReadModelRoot) => {
            /** @type {?} */
            const key = structureReadModelRoot.getId().toString();
            this.structureIdToStructure.set(key, structureReadModelRoot);
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
    InMemoryStructureRepository.prototype.inMemoryStructureReadStore;
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
        provide: StructureReadModelRepository,
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new VerticalScrollEnabledSetEvent(command.getAggregateId()));
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        structure.setVerticalFormationEnabled(enabled);
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new ScrollPositionSetEvent(command.getAggregateId()));
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
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const filterConfig = command.getConfig();
        this.domainEventPublisher.publish(new StructureConfigFilterSetEvent(command.getAggregateId(), filterConfig.enabled));
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
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const structureId = command.getAggregateId();
        /** @type {?} */
        const quickFiltersConfig = command.getConfig();
        this.domainEventPublisher.publish(new StructureConfigQuickFilterSetEvent(structureId, quickFiltersConfig.enabled));
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
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new StructureFilterToggledEvent(command.getAggregateId()));
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
/** @type {?} */
const StructureSummariesEnabledSetEventName = 'StructureSummariesEnabledSetEvent';
class StructureSummariesEnabledSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} enabled
     */
    constructor(aggregateId, enabled) {
        super(aggregateId, StructureSummariesEnabledSetEventName);
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
    StructureSummariesEnabledSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSetSummariesEnabledCommandHandler {
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
        return StructureSetSummariesEnabledCommand;
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
        this.domainEventPublisher.publish(new StructureSummariesEnabledSetEvent(command.getAggregateId(), enabled));
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        structure.setSummariesEnabled(enabled);
    }
}
StructureSetSummariesEnabledCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetSummariesEnabledCommandHandler.ctorParameters = () => [
    { type: StructureSourceDomainEventPublisher },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetSummariesEnabledCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetSummariesEnabledCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VerticalRange {
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} margin
     */
    constructor(start, end, margin) {
        this.start = start;
        this.end = end;
        this.margin = margin;
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
    getMargin() {
        return this.margin;
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
    /**
     * @type {?}
     * @private
     */
    VerticalRange.prototype.margin;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let VerticalFormationContainerHeight = class VerticalFormationContainerHeight {
    constructor() {
        this.containerHeight = Optional.empty();
    }
    /**
     * @return {?}
     */
    isContainerHeightProperForVirtualScroll() {
        if (this.containerHeight.isPresent()) {
            return this.containerHeight.getValueOrNullOrThrowError() > 0;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    getVisibleContainerHeight() {
        return this.getHeight();
    }
    /**
     * @return {?}
     */
    getHeight() {
        if (this.containerHeight.isPresent()) {
            return this.getContainerHeight();
        }
        return this.sourceHeight;
    }
    /**
     * @return {?}
     */
    getSourceHeight() {
        return this.sourceHeight;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setContainerHeight(height) {
        if (height >= 0) {
            this.containerHeight = Optional.of(height);
        }
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setSourceSize(height) {
        this.sourceHeight = height;
    }
    /**
     * @private
     * @return {?}
     */
    getContainerHeight() {
        if (this.containerHeight.getValueOrNullOrThrowError() > this.sourceHeight) {
            return this.sourceHeight;
        }
        else {
            return this.containerHeight.getValueOrNullOrThrowError();
        }
    }
};
VerticalFormationContainerHeight = __decorate([
    DomainObject
], VerticalFormationContainerHeight);
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationContainerHeight.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationContainerHeight.prototype.sourceHeight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let VerticalFormation = class VerticalFormation {
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
        this.rowHeight = 42;
        this.hiddenItemsTop = 5;
        this.hiddenItemsBottom = 2;
        this.container = new VerticalFormationContainerHeight();
        this.sourceSize = sourceSize;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.container.setContainerHeight(viewportHeight);
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
            this.container.getHeight() > 0 &&
            this.sourceSize > 0;
    }
    /**
     * @return {?}
     */
    getViewPortHeight() {
        return this.container.getVisibleContainerHeight();
    }
    /**
     * @return {?}
     */
    getSourceHeight() {
        return this.container.getSourceHeight();
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
        if (this.calcFullHeight() <= this.container.getHeight()) {
            this.range = new VerticalRange(0, this.sourceSize, 0);
            return;
        }
        /** @type {?} */
        const itemsInViewport = Math.ceil(this.container.getHeight() / this.rowHeight);
        /** @type {?} */
        const viewportPositionIndex = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        let end = (viewportPositionIndex + itemsInViewport + this.hiddenItemsBottom);
        /** @type {?} */
        let topMargin = viewportPositionIndex;
        if (topMargin + itemsInViewport >= this.sourceSize) {
            topMargin = this.sourceSize - itemsInViewport;
        }
        /** @type {?} */
        let start = Math.max(viewportPositionIndex - this.hiddenItemsTop, 0);
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        // end - itemsInViewport;
        this.range = new VerticalRange(start, end, topMargin);
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
        if (this.enabled && !this.container.isContainerHeightProperForVirtualScroll()) {
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
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
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
        this.container.setContainerHeight(height);
        this.calculateRange();
    }
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    setRowHeight(rowHeight) {
        this.rowHeight = rowHeight;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    }
    /**
     * @param {?} logger
     * @return {?}
     */
    setLogger(logger) {
        this.logger = logger;
    }
    // TODO REMOVE
    /**
     * @return {?}
     */
    calcFullHeight() {
        return this.sourceSize * this.rowHeight;
    }
};
VerticalFormation.ctorParameters = () => [
    { type: Boolean },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number }
];
VerticalFormation = __decorate([
    DomainObject,
    __metadata("design:paramtypes", [Boolean, Number, Number, Number, Number, Number, Number])
], VerticalFormation);
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
    VerticalFormation.prototype.container;
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
    create(enabled = false, viewportHeight = -1, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
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
            return this.field.filter(item, this.filterValue);
        }));
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
const SUMMARIES_CALCULATORS = 'GUI - Summaries Calculators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T, A
 */
class SummariesCalculator {
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
                    if (field.isSummaries(SummariesType.COUNT)) {
                        /** @type {?} */
                        const countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isSummaries(SummariesType.DISTINCT)) {
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
        let summaries = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            /** @type {?} */
            const key = field.getId().getId();
            /** @type {?} */
            let aggregatedValues = this.generateAggregatedValues(field);
            if (field.isSummaries(SummariesType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isSummaries(SummariesType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            summaries.set(key, aggregatedValues);
        }));
        return summaries;
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} dataType
     * @return {?}
     */
    SummariesCalculator.prototype.forDataType = function (dataType) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    SummariesCalculator.prototype.prepare = function (field) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    SummariesCalculator.prototype.postCalculate = function (field, items) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    SummariesCalculator.prototype.aggregate = function (field, value) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    SummariesCalculator.prototype.generateAggregatedValues = function (field) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class SummariesValues {
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
    SummariesValues.prototype.count;
    /** @type {?} */
    SummariesValues.prototype.distinct;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanSummarizedValues extends SummariesValues {
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
    BooleanSummarizedValues.prototype.truthy;
    /** @type {?} */
    BooleanSummarizedValues.prototype.falsy;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanSummariesCalculator extends SummariesCalculator {
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
        if (field.isSummaries(SummariesType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isSummaries(SummariesType.FALSY)) {
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
            if (field.isSummaries(SummariesType.TRUTHY)) {
                this.truthy.set(key, truthyForField + 1);
            }
        }
        else {
            if (field.isSummaries(SummariesType.FALSY)) {
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
        return new BooleanSummarizedValues(this.truthy.get(key), this.falsy.get(key));
    }
}
BooleanSummariesCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BooleanSummariesCalculator.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanSummariesCalculator.prototype.truthy;
    /**
     * @type {?}
     * @private
     */
    BooleanSummariesCalculator.prototype.falsy;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateSummarizedValues extends SummariesValues {
    constructor() {
        super();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateSummariesCalculator extends SummariesCalculator {
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
        return new DateSummarizedValues();
    }
}
DateSummariesCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DateSummariesCalculator.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberSummarizedValues extends SummariesValues {
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
    NumberSummarizedValues.prototype.sum;
    /** @type {?} */
    NumberSummarizedValues.prototype.min;
    /** @type {?} */
    NumberSummarizedValues.prototype.max;
    /** @type {?} */
    NumberSummarizedValues.prototype.average;
    /** @type {?} */
    NumberSummarizedValues.prototype.median;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberSummariesCalculator extends SummariesCalculator {
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
        if (field.isSummaries(SummariesType.AVERAGE)) {
            this.average.set(key, this.sum.get(key) / items.length);
        }
        if (field.isSummaries(SummariesType.MEDIAN)) {
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
        if (field.isSummaries(SummariesType.SUM) || field.isSummaries(SummariesType.AVERAGE)) {
            this.sum.set(key, sumForField + numberValue);
        }
        if (field.isSummaries(SummariesType.MIN)) {
            if (minForField > numberValue) {
                this.min.set(key, numberValue);
            }
        }
        if (field.isSummaries(SummariesType.MAX)) {
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
        const sum = field.isSummaries(SummariesType.SUM) ? this.sum.get(key) : undefined;
        /** @type {?} */
        const min = field.isSummaries(SummariesType.MIN) ? this.min.get(key) : undefined;
        /** @type {?} */
        const max = field.isSummaries(SummariesType.MAX) ? this.max.get(key) : undefined;
        /** @type {?} */
        const average = field.isSummaries(SummariesType.AVERAGE) ? this.average.get(key) : undefined;
        /** @type {?} */
        const median = field.isSummaries(SummariesType.MEDIAN) ? this.median.get(key) : undefined;
        return new NumberSummarizedValues(sum, min, max, average, median);
    }
}
NumberSummariesCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NumberSummariesCalculator.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.sum;
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.min;
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.max;
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.average;
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.median;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringSummarizedValues extends SummariesValues {
    constructor() {
        super();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringSummariesCalculator extends SummariesCalculator {
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
        return new StringSummarizedValues();
    }
}
StringSummariesCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StringSummariesCalculator.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnknownSummarizedValues extends SummariesValues {
    constructor() {
        super();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnknownSummariesCalculator extends SummariesCalculator {
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
        return new UnknownSummarizedValues();
    }
}
UnknownSummariesCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UnknownSummariesCalculator.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SummariesManager {
    /**
     * @param {?} structureId
     * @param {?} calculators
     */
    constructor(structureId, calculators) {
        this.calculators = calculators;
        this.values = new Map();
        this.structureId = structureId;
        this.enabled = SummariesManager.DEFAULT_ENABLED;
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
            const allFields = fields.map((/**
             * @param {?} typeField
             * @return {?}
             */
            (typeField) => typeField.getField()));
            /** @type {?} */
            const aggregatedValues = calc.calculate(allFields, entities);
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
                new StructureSummariesChangedAggregateEvent(this.structureId, calculations)
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
SummariesManager.DEFAULT_ENABLED = false;
if (false) {
    /** @type {?} */
    SummariesManager.DEFAULT_ENABLED;
    /**
     * @type {?}
     * @private
     */
    SummariesManager.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SummariesManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    SummariesManager.prototype.values;
    /**
     * @type {?}
     * @private
     */
    SummariesManager.prototype.calculators;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SummariesManagerFactory {
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
        return new SummariesManager(structureId, this.calculators);
    }
}
SummariesManagerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SummariesManagerFactory.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [SUMMARIES_CALCULATORS,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SummariesManagerFactory.prototype.calculators;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} clazz
 * @return {?}
 */
function provideSummariesCalculator(clazz) {
    return {
        provide: SUMMARIES_CALCULATORS,
        useClass: clazz,
        multi: true
    };
}
/** @type {?} */
const summariesProviders = [
    provideSummariesCalculator(BooleanSummariesCalculator),
    provideSummariesCalculator(DateSummariesCalculator),
    provideSummariesCalculator(NumberSummariesCalculator),
    provideSummariesCalculator(StringSummariesCalculator),
    provideSummariesCalculator(UnknownSummariesCalculator),
    SummariesManagerFactory
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureConfigFilterSetEventHandler {
    /**
     * @param {?} structureFilterRepository
     */
    constructor(structureFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return StructureConfigFilterSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureConfigFilterSetEvent')) {
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
class StructureConfigQuickFilterSetEventHandler {
    /**
     * @param {?} structureQuickFilterRepository
     */
    constructor(structureQuickFilterRepository) {
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return StructureConfigQuickFilterSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureConfigQuickFilterSetEvent')) {
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
class FieldsInitedEventHandler {
    /**
     * @param {?} fieldUiArchive
     * @param {?} fieldUiConverter
     */
    constructor(fieldUiArchive, fieldUiConverter) {
        this.fieldUiArchive = fieldUiArchive;
        this.fieldUiConverter = fieldUiConverter;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return FieldsInitedEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('FieldsInitedEvent')) {
            /** @type {?} */
            const fields = this.fieldUiConverter.convert(event.getFields());
            this.fieldUiArchive.next(event.getAggregateId(), fields);
        }
    }
}
FieldsInitedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldsInitedEventHandler.ctorParameters = () => [
    { type: FieldUiArchive },
    { type: FieldUiConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEventHandler.prototype.fieldUiArchive;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEventHandler.prototype.fieldUiConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesUiEventsRepository {
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
    onSummariesChanged(structureId) {
        return this.domainEventBus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.ofMessageType('StructureSummariesChangedEvent'))), filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())));
    }
}
StructureSummariesUiEventsRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesUiEventsRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesUiEventsRepository.prototype.domainEventBus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OriginItemEntity extends Entity {
    /**
     * @param {?} id
     * @param {?} rawData
     * @param {?} position
     * @param {?=} version
     */
    constructor(id, rawData, position, version = 0) {
        super(id);
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
        return new OriginItemEntity(this.getId(), rawData, this.version);
    }
}
if (false) {
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
    toDomainEvent() {
        return new StructureSourceItemEditedEvent(this.getAggregateId(), this.beforeItem, this.afterItem);
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
    toDomainEvent() {
        return new OriginSetEvent(this.getAggregateId(), this.origin);
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
class OriginId extends EntityId {
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
            return new OriginItemEntity(new OriginId(RandomStringGenerator.generate()), item, index);
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
        (item) => item.getId().toString() === itemId));
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
        (item) => item.getId().toString() === itemId));
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
    toDomainEvent() {
        return new StructurePreparedEntitiesSetEvent(this.getAggregateId(), this.preparedItems);
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
     * @param {?} fieldConfigs
     * @param {?} fields
     */
    constructor(structureId, fieldConfigs, // TODO merge
    fields) {
        super(structureId, 'FieldsInitedAggregateEvent');
        this.fieldConfigs = fieldConfigs;
        this.fields = fields;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new FieldsInitedEvent(this.getAggregateId(), this.fieldConfigs, this.fields);
    }
    /**
     * @return {?}
     */
    getFieldConfigs() {
        return this.fieldConfigs;
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
    FieldsInitedAggregateEvent.prototype.fieldConfigs;
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
class SchemaThemeSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} theme
     */
    constructor(schemaId, theme) {
        super(schemaId, 'SchemaThemeSetAggregateEvent');
        this.theme = theme;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SchemaThemeSetEvent(this.getAggregateId(), this.theme);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetAggregateEvent.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RowColoringSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} rowColoring
     */
    constructor(schemaId, rowColoring) {
        super(schemaId, 'RowColoringSetEvent');
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new RowColoringSetEvent(this.getAggregateId(), this.rowColoring);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RowColoringSetAggregateEvent.prototype.rowColoring;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaVerticalGridSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} verticalGrid
     */
    constructor(schemaId, verticalGrid) {
        super(schemaId, 'SchemaHorizontalGridSetEvent');
        this.verticalGrid = verticalGrid;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SchemaVerticalGridSetEvent(this.getAggregateId(), this.verticalGrid);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaVerticalGridSetAggregateEvent.prototype.verticalGrid;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaHorizontalGridSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} horizontalGrid
     */
    constructor(schemaId, horizontalGrid) {
        super(schemaId, 'SchemaHorizontalGridSetEvent');
        this.horizontalGrid = horizontalGrid;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SchemaHorizontalGridSetEvent(this.getAggregateId(), this.horizontalGrid);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaHorizontalGridSetAggregateEvent.prototype.horizontalGrid;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaCreatedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SchemaCreatedEvent');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaCreatedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SchemaCreatedAggregateEvent');
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SchemaCreatedEvent(this.getAggregateId());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaAggregate extends AggregateRoot {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id, 'SchemaAggregate');
        this.setTheme(SchemaAggregate.DEFAULT_THEME);
        this.setHorizontalGrid(SchemaAggregate.DEFAULT_HORIZONTAL_GRID);
        this.setVerticalGrid(SchemaAggregate.DEFAULT_VERTICAL_GRID);
        this.setRowColoring(SchemaAggregate.DEFAULT_ROW_COLORING);
    }
    /**
     * @return {?}
     */
    createEvent() {
        return SchemaCreatedAggregateEvent;
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    changeTheme(theme) {
        this.setTheme(theme);
        if (theme === SchemaTheme.MATERIAL) {
            this.setRowColoring(SchemaRowColoring.NONE);
            this.setVerticalGrid(false);
        }
        if (theme === SchemaTheme.LIGHT) {
            this.setRowColoring(SchemaRowColoring.NONE);
            this.setVerticalGrid(false);
        }
        if (theme === SchemaTheme.DARK) {
            this.setRowColoring(SchemaRowColoring.NONE);
            this.setVerticalGrid(false);
        }
        if (theme === SchemaTheme.GENERIC) {
            this.setRowColoring(SchemaRowColoring.ODD);
        }
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this.theme = theme;
        this.addEvent(new SchemaThemeSetAggregateEvent(this.getId(), this.theme));
    }
    /**
     * @param {?} coloring
     * @return {?}
     */
    setRowColoring(coloring) {
        this.rowColoring = coloring;
        this.addEvent(new RowColoringSetAggregateEvent(this.getId(), this.rowColoring));
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setVerticalGrid(enabled) {
        this.verticalGrid = enabled;
        this.addEvent(new SchemaVerticalGridSetAggregateEvent(this.getId(), this.verticalGrid));
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHorizontalGrid(enabled) {
        this.horizontalGrid = enabled;
        this.addEvent(new SchemaHorizontalGridSetAggregateEvent(this.getId(), this.horizontalGrid));
    }
}
SchemaAggregate.DEFAULT_THEME = SchemaTheme.GENERIC;
SchemaAggregate.DEFAULT_ROW_COLORING = SchemaRowColoring.ODD;
SchemaAggregate.DEFAULT_VERTICAL_GRID = true;
SchemaAggregate.DEFAULT_HORIZONTAL_GRID = true;
if (false) {
    /** @type {?} */
    SchemaAggregate.DEFAULT_THEME;
    /** @type {?} */
    SchemaAggregate.DEFAULT_ROW_COLORING;
    /** @type {?} */
    SchemaAggregate.DEFAULT_VERTICAL_GRID;
    /** @type {?} */
    SchemaAggregate.DEFAULT_HORIZONTAL_GRID;
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
    SchemaAggregate.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.rowColoring;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCreatedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'StructureCreatedAggregateEvent');
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new StructureCreatedEvent(this.getAggregateId());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureAggregate extends AggregateRoot {
    /**
     * @param {?} structureId
     * @param {?} pagingAggregate
     * @param {?} formationAggregate
     * @param {?} sourceManager
     * @param {?} verticalFormation
     * @param {?} summariesManager
     * @param {?} sorterCollection
     * @param {?} filterCollection
     * @param {?} searchManager
     * @param {?} fieldCollection
     */
    constructor(structureId, pagingAggregate, formationAggregate, sourceManager, verticalFormation, summariesManager, sorterCollection, filterCollection, searchManager, fieldCollection) {
        super(structureId, 'StructureAggregate');
        this.pagingManager = pagingAggregate;
        this.formationAggregate = formationAggregate;
        this.sourceManager = sourceManager;
        this.verticalFormation = verticalFormation;
        this.summariesManager = summariesManager;
        this.sorterCollection = sorterCollection;
        this.filterManager = filterCollection;
        this.searchManager = searchManager;
        this.fieldCollection = fieldCollection;
    }
    /**
     * @return {?}
     */
    createEvent() {
        return StructureCreatedAggregateEvent;
    }
    /**
     * @return {?}
     */
    init() {
        this.initTheme();
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setVerticalFormationEnabled(enabled) {
        this.verticalFormation.setEnabled(enabled);
        this.calculateSource();
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
    setSummariesEnabled(enabled) {
        this.summariesManager.setEnabled(enabled);
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
        this.verticalFormation.setViewportHeight(height);
        this.calculateSourceBasedOnVirtualScroll();
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        // #1707 Move to SchemeAggregate
        if (theme === SchemaTheme.MATERIAL) {
            this.getVerticalFormation().setRowHeight(52);
        }
        if (theme === SchemaTheme.GENERIC) {
            this.getVerticalFormation().setRowHeight(42);
        }
        if (theme === SchemaTheme.FABRIC) {
            this.getVerticalFormation().setRowHeight(36);
        }
        if (theme === SchemaTheme.LIGHT) {
            this.getVerticalFormation().setRowHeight(56);
        }
        if (theme === SchemaTheme.DARK) {
            this.getVerticalFormation().setRowHeight(38);
        }
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
     * @return {?}
     */
    getPaging() {
        return this.pagingManager;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    changePaging(config) {
        this.pagingManager.change(config);
        this.calculateSource();
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    setPaging(paging) {
        this.pagingManager = paging;
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.pagingManager.nextPage();
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.pagingManager.prevPage();
        this.calculateSource();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        /** @type {?} */
        const pagingEvents = this.pagingManager.changePageSize(pageSize);
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
     * @param {?} fieldConfigs
     * @return {?}
     */
    createFields(fieldConfigs) {
        this.fieldCollection.initFields(fieldConfigs);
        /** @type {?} */
        const typeFields = this.fieldCollection.getAllFields();
        this.addEvent(new FieldsInitedAggregateEvent(this.getId(), fieldConfigs, typeFields));
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
     * @param {?} config
     * @return {?}
     */
    setSearchingConfig(config) {
        this.filterManager.getSettings().setSearchingConfig(config);
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
     * @return {?}
     */
    clearEvents() {
        super.clearEvents();
        this.pagingManager.clearEvents();
    }
    /**
     * @private
     * @return {?}
     */
    calculateSource() {
        if (!this.sourceManager.getOrigin() || !this.pagingManager) {
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
        this.pagingManager.setSourceSize(this.sourceManager.getPreparedEntities().length);
        this.addEvent(new StructurePreparedEntitiesSetAggregateEvent(this.getId(), ents));
        // summaries
        /** @type {?} */
        const summariesEvents = this.summariesManager.calculate(this.fieldCollection.getAllFields(), this.sourceManager.getEntities());
        summariesEvents.forEach((/**
         * @param {?} ae
         * @return {?}
         */
        (ae) => {
            this.addEvent(ae);
        }));
        // paging
        this.sourceManager.setEntities(this.pagingManager.sample(this.sourceManager.getEntities()));
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
    /**
     * @private
     * @return {?}
     */
    initTheme() {
        // TODO
        /** @type {?} */
        const theme = SchemaAggregate.DEFAULT_THEME;
        this.setTheme(theme);
    }
}
__decorate([
    Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StructureAggregate.prototype, "clearEvents", null);
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
    StructureAggregate.prototype.pagingManager;
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
    StructureAggregate.prototype.summariesManager;
}

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
            return this.field.sort(entityOne, entityTwo, this.direction);
        }));
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
class StructureAggregateFactory extends AggregateFactory {
    /**
     * @param {?} pagingAggregateFactory
     * @param {?} sourceManagerFactory
     * @param {?} formationAggregateFactory
     * @param {?} verticalFormationFactory
     * @param {?} summariesManagerFactory
     * @param {?} filterManagerFactory
     * @param {?} searchManagerFactory
     * @param {?} fieldCollectionFactory
     */
    constructor(pagingAggregateFactory, sourceManagerFactory, formationAggregateFactory, verticalFormationFactory, summariesManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory) {
        super();
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceManagerFactory = sourceManagerFactory;
        this.formationAggregateFactory = formationAggregateFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.summariesManagerFactory = summariesManagerFactory;
        this.filterManagerFactory = filterManagerFactory;
        this.searchManagerFactory = searchManagerFactory;
        this.fieldCollectionFactory = fieldCollectionFactory;
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
        const summariesManager = this.summariesManagerFactory.create(structureId);
        /** @type {?} */
        const searchManager = this.searchManagerFactory.create();
        /** @type {?} */
        const structureAggregate = new StructureAggregate(structureId, paging, formationAggregate, source, verticalFormation, summariesManager, sorterContainer, filterContainer, searchManager, fieldContainer);
        this.init(structureAggregate);
        return structureAggregate;
    }
    /**
     * @param {?} structureAggregate
     * @return {?}
     */
    init(structureAggregate) {
        structureAggregate.init();
    }
}
StructureAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregateFactory.ctorParameters = () => [
    { type: PagingManagerFactory },
    { type: SourceManagerFactory },
    { type: FormationAggregateFactory },
    { type: VerticalFormationFactory },
    { type: SummariesManagerFactory },
    { type: FilterManagerFactory },
    { type: SearchManagerFactory },
    { type: FieldCollectionFactory }
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
    StructureAggregateFactory.prototype.summariesManagerFactory;
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
}

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
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new FormationSetEvent(command.getAggregateId()));
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        // missing implementation
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
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SelectedRowToggledEvent(command.getAggregateId()));
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
const commandProviders$1 = [
    FormationDispatcher,
    FormationAggregateFactory
];
/** @type {?} */
const readProviders$1 = [
    FormationRepository
];
/** @type {?} */
const formationCommandHandlers = [
    ...HermesModule.registerCommandHandler(SetFormationCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(ToggleSelectedRowCommandHandler, 'StructureAggregate')
];
/** @type {?} */
const formationProviders = [
    ...commandProviders$1,
    ...readProviders$1,
    FormationEventService,
    FormationConverter,
    StructureFormationDispatcher,
    StructureFormationWarehouse
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
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
class StructureOriginChangedEventHandler {
    /**
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureSourceOriginRepository) {
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return OriginSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('OriginSetEvent')) {
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
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SetSourceLoadingEvent(command.getAggregateId()));
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
class StructurePreparedItemsEventHandler {
    /**
     * @param {?} structurePreparedItemsRepository
     */
    constructor(structurePreparedItemsRepository) {
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return StructurePreparedEntitiesSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructurePreparedEntitiesSetEvent')) {
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
const commandProviders$2 = [
    SourceDispatcher,
    SourceManagerFactory,
    StructureSourceDomainEventPublisher
];
/** @type {?} */
const readProviders$2 = [
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
const sourceDomainEventHandlers = [
    ...HermesModule.registerDomainEventHandler(StructureOriginChangedEventHandler),
    ...HermesModule.registerDomainEventHandler(StructurePreparedItemsEventHandler)
];
/** @type {?} */
const sourceProviders = [
    ...commandProviders$2,
    ...readProviders$2,
    SourceConverter,
    SourceCommandDispatcher,
    StructureSourceWarehouse,
    SourceEventService
];

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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new RowHeightSetEvent(command.getAggregateId()));
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
class StructureSetHeightCommandHandler {
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
        return StructureSetHeightCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new StructureHeightSetEvent(command.getAggregateId()));
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
}
StructureSetHeightCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetHeightCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetHeightCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetRowHeightBasedOnThemeCommandHandler {
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
        return SetRowHeightBasedOnThemeCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new RowHeightSetBasedOnThemeEvent(command.getAggregateId()));
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const theme = command.getTheme();
        structure.setTheme(theme);
    }
}
SetRowHeightBasedOnThemeCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetRowHeightBasedOnThemeCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowHeightBasedOnThemeCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesRepository extends Reactive {
    constructor() {
        super();
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    init(structureId) {
        this.setEnabled(SummariesManager.DEFAULT_ENABLED, structureId);
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setEnabled(enabled, structureId) {
        this.next(enabled, structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSummariesEnabled(structureId) {
        return this.enabled$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    next(enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    }
}
StructureSummariesRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesRepository.prototype.enabled$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesWarehouse {
    /**
     * @param {?} structureSummariesRepository
     */
    constructor(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSummariesEnabled(structureId = structureGlobalId) {
        return this.structureSummariesRepository.onSummariesEnabled(structureId);
    }
}
StructureSummariesWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesWarehouse.ctorParameters = () => [
    { type: StructureSummariesRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesWarehouse.prototype.structureSummariesRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCreatedEventHandler {
    /**
     * @param {?} structureSummariesRepository
     */
    constructor(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return StructureCreatedEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            /** @type {?} */
            const structureId = event.getAggregateId();
            this.structureSummariesRepository.init(structureId);
        }
    }
}
StructureCreatedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCreatedEventHandler.ctorParameters = () => [
    { type: StructureSummariesRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCreatedEventHandler.prototype.structureSummariesRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesEnabledSetEventHandler {
    /**
     * @param {?} structureSummariesRepository
     */
    constructor(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return StructureSummariesEnabledSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureSummariesEnabledSetEvent')) {
            this.structureSummariesRepository.setEnabled(event.isEnabled(), event.getAggregateId());
        }
    }
}
StructureSummariesEnabledSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesEnabledSetEventHandler.ctorParameters = () => [
    { type: StructureSummariesRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesEnabledSetEventHandler.prototype.structureSummariesRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const commandProviders$3 = [
    ...inMemoryStructureCommandProviders,
    VerticalFormationFactory,
    FilterManagerFactory,
    StructureFilterCommandDispatcher,
    ...summariesProviders
];
/** @type {?} */
const readProviders$3 = [
    ...inMemoryStructureReadProviders,
    VerticalFormationConverter,
    VerticalFormationRepository,
    StructureFilterWarehouse,
    StructureFilterRepository,
    StructureQuickFilterRepository,
    StructureSummariesRepository,
    StructureSummariesWarehouse
];
/** @type {?} */
const structureCommandHandlers = [
    ...HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetRowHeightBasedOnThemeCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetConfigFilterCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetConfigQuickFilterCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureToggleFilterCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetSummariesEnabledCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetRowHeightCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetHeightCommandHandler, 'StructureAggregate')
];
/** @type {?} */
const structureDomainEventHandlers = [
    ...HermesModule.registerDomainEventHandler(StructureSummariesEnabledSetEventHandler),
    ...HermesModule.registerDomainEventHandler(StructureCreatedEventHandler),
    ...HermesModule.registerDomainEventHandler(FieldsInitedEventHandler),
    ...HermesModule.registerDomainEventHandler(StructureConfigQuickFilterSetEventHandler),
    ...HermesModule.registerDomainEventHandler(StructureConfigFilterSetEventHandler),
];
/** @type {?} */
const structureProviders = [
    ...inMemoryStructureProviders,
    ...commandProviders$3,
    ...readProviders$3,
    StructureSummariesCommandDispatcher,
    StructureSummariesUiEventsRepository,
    StructureAggregateFactory,
    StructureReadModelRootConverter,
    StructureVerticalFormationWarehouse,
    StructureWarehouse,
    StructureCommandDispatcher,
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
     * @param {?} originItem
     * @return {?}
     */
    createEntity(originItem) {
        if (originItem instanceof OriginItemEntity) {
            return new ItemEntity(originItem.rawData, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
        }
        else {
            return new ItemEntity(originItem, 0);
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

		<gui-search-bar></gui-search-bar>
<!--		<gui-structure-filter-menu-trigger></gui-structure-filter-menu-trigger>-->

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
/** @type {?} */
const selector$2 = 'gui-structure-filter-icon';
class StructureFilterIconComponent {
}
StructureFilterIconComponent.decorators = [
    { type: Component, args: [{
                selector: selector$2,
                template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.23">
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="8.14" y1="3.62" x2="2.18" y2="3.62"/>
			<line class="cls-1" x1="6.71" y1="6.48" x2="3.62" y2="6.48"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class]': `"${selector$2}"`
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFilterMenuComponent {
    /**
     * @param {?} value
     * @return {?}
     */
    onColumnSelect(value) {
        this.selectedColumnId = value;
    }
}
StructureFilterMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-filter-menu',
                template: `
		
		<gui-structure-column-selector
				(columnSelected)="onColumnSelect($event)">
		</gui-structure-column-selector>
		
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-filter-menu]': 'true'
                }
            }] }
];
if (false) {
    /** @type {?} */
    StructureFilterMenuComponent.prototype.selectedColumnId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFilterMenuTriggerComponent {
    /**
     * @param {?} injector
     * @param {?} drawerService
     * @param {?} structureComponent
     */
    constructor(injector, drawerService, structureComponent) {
        this.injector = injector;
        this.drawerService = drawerService;
        this.structureComponent = structureComponent;
    }
    /**
     * @return {?}
     */
    openDrawer() {
        /** @type {?} */
        const structureElement = this.structureComponent.getElementRef();
        this.drawerService.open(structureElement, StructureFilterMenuComponent, { injector: this.injector });
    }
}
StructureFilterMenuTriggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-filter-menu-trigger',
                template: `
		<div [gui-tooltip]="'Filters'"
			 (click)="openDrawer()"
			 class="gui-structure-filter-icon-wrapper">
			<gui-structure-filter-icon></gui-structure-filter-icon>
		</div>
	`
            }] }
];
/** @nocollapse */
StructureFilterMenuTriggerComponent.ctorParameters = () => [
    { type: Injector },
    { type: FabricDrawerService },
    { type: StructureComponent, decorators: [{ type: Inject, args: [structureComponentToken,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterMenuTriggerComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureFilterMenuTriggerComponent.prototype.drawerService;
    /**
     * @type {?}
     * @private
     */
    StructureFilterMenuTriggerComponent.prototype.structureComponent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureColumnSelectorComponent extends SmartComponent {
    /**
     * @param {?} compositionWarehouse
     */
    constructor(compositionWarehouse) {
        super();
        this.compositionWarehouse = compositionWarehouse;
        this.columnSelected = new EventEmitter();
        this.columns = [];
        this.options = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionWarehouse
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
            this.options = columns.map((/**
             * @param {?} column
             * @return {?}
             */
            (column) => column.getColumnDefinitionId().toString()));
        }));
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    onSelectChange(columnId) {
        this.columnSelected.emit(columnId);
    }
}
StructureColumnSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-selector',
                template: `

		<gui-select
				[options]="options"
				(optionChanged)="onSelectChange($event)">
		</gui-select>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnSelectorComponent.ctorParameters = () => [
    { type: CompositionWarehouse }
];
StructureColumnSelectorComponent.propDecorators = {
    columnSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructureColumnSelectorComponent.prototype.columnSelected;
    /** @type {?} */
    StructureColumnSelectorComponent.prototype.columns;
    /** @type {?} */
    StructureColumnSelectorComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    StructureColumnSelectorComponent.prototype.compositionWarehouse;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFilterMenuModule {
}
StructureFilterMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule
                ],
                declarations: [
                    StructureFilterIconComponent,
                    StructureFilterMenuComponent,
                    StructureFilterMenuTriggerComponent,
                    StructureColumnSelectorComponent
                ],
                exports: [
                    StructureFilterMenuTriggerComponent
                ],
                entryComponents: [
                    StructureFilterMenuComponent
                ]
            },] }
];

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
                    ReactiveFormsModule,
                    StructureFilterMenuModule,
                    SearchFeatureModule
                ],
                declarations: [
                    StructureTopPanelComponent
                ],
                exports: [
                    StructureTopPanelComponent
                ]
            },] }
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

			<gui-structure-column-menu-icon [ngClass]="'gui-header-menu-icon'"></gui-structure-column-menu-icon>

		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnConfigTriggerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: StructureCommandDispatcher },
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
     * @param {?} compositionId
     * @param {?} structureId
     * @param {?} sortingCommandDispatcher
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
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
        this.sortingCommandDispatcher.setSortOrder(this.column.getFieldId(), sort, this.compositionId, this.structureId);
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
				<div class="gui-sort-title">Ascending
					<gui-structure-column-menu-arrow-icon [sort]="true" [rotateDeg]="0">
					</gui-structure-column-menu-arrow-icon>
				</div>
			</gui-dropdown-item>

			<gui-dropdown-item (click)="setSortOrder(status.DESC)"
							   [class.gui-header-item-active]="isDescSort()">
				<div class="gui-sort-title">Descending
					<gui-structure-column-menu-arrow-icon [sort]="true" [rotateDeg]="180">
					</gui-structure-column-menu-arrow-icon>
				</div>
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
    { type: CompositionId },
    { type: StructureId },
    { type: SortingCommandDispatcher },
    { type: CompositionWarehouse }
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
    StructureColumnConfigSortComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.sortingCommandDispatcher;
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
        this.compositionCommandService.disableColumn(column.getColumnDefinitionId());
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
    { type: CompositionCommandDispatcher },
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
        this.compositionCommandService.moveLeft(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    }
    /**
     * @param {?} column
     * @return {?}
     */
    moveRight(column) {
        this.compositionCommandService.moveRight(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    }
}
StructureColumnConfigColumnMoveComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-column-move',
                template: `
		<div class="gui-header-menu-column-move">
			<div class="gui-header-menu-column-move-item left"
				 (click)="moveLeft(column)">
				<gui-structure-column-menu-arrow-icon [rotateDeg]="-90"></gui-structure-column-menu-arrow-icon>
				Move Left
			</div>

			<div class="gui-header-menu-column-move-item right"
				 (click)="moveRight(column)">
				Move Right
				<gui-structure-column-menu-arrow-icon></gui-structure-column-menu-arrow-icon>
			</div>
		</div>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigColumnMoveComponent.ctorParameters = () => [
    { type: CompositionCommandDispatcher },
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
/** @type {?} */
const selector$3 = 'gui-structure-column-menu-icon';
class StructureColumnMenuIconComponent {
}
StructureColumnMenuIconComponent.decorators = [
    { type: Component, args: [{
                selector: selector$3,
                template: `
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.46">
			<line class="cls-1" x1="9.57" y1="3.73" x2="0.75" y2="3.73"/>
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="9.57" y1="6.71" x2="0.75" y2="6.71"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-column-menu-icon]': 'true',
                    '[class.gui-icon]': 'true'
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const selector$4 = 'gui-structure-column-menu-arrow-icon';
class StructureColumnMenuArrowIconComponent {
    constructor() {
        this.rotateDeg = 90;
    }
}
StructureColumnMenuArrowIconComponent.decorators = [
    { type: Component, args: [{
                selector: selector$4,
                template: `
		<div [style.transform]="'rotate(' + rotateDeg + 'deg)'"
			 [class.gui-structure-column-menu-sort-icon]="sort">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
				<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
				<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
				<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
			</svg>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class]': `"${selector$4}"`
                }
            }] }
];
StructureColumnMenuArrowIconComponent.propDecorators = {
    rotateDeg: [{ type: Input }],
    sort: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.rotateDeg;
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.sort;
}

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
    StructureColumnConfigColumnMoveComponent,
    StructureColumnMenuIconComponent,
    StructureColumnMenuArrowIconComponent
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
class StructureSummariesPanelComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureSummariesUiEventsRepository
     * @param {?} sourceReadModelService
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, structureId, structureSummariesUiEventsRepository, sourceReadModelService, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSummariesUiEventsRepository = structureSummariesUiEventsRepository;
        this.sourceReadModelService = sourceReadModelService;
        this.compositionReadModelService = compositionReadModelService;
        this.sourceEmpty = false;
        this.structureSummariesUiEventsRepository
            .onSummariesChanged(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.summaries = event.getSummaries();
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
        this.compositionReadModelService
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
     * @param {?} summaries
     * @return {?}
     */
    isSummariesTypePresent(summaries) {
        return summaries !== undefined && summaries !== null;
    }
}
StructureSummariesPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-summaries-panel',
                template: `

		<ng-container *ngIf="enabled && summaries && !sourceEmpty">

			<div *ngFor="let column of headerColumns"
				 [style.width.px]="column.width"
				 class="gui-structure-summaries-cell">

				<ng-container *ngIf="summaries && !!summaries.get(column.getFieldId().getId())">

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)"
						 class="gui-structure-summaries-value">
						<span [gui-tooltip]="'Number of items in the grid'">Count</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).count }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)"
						 class="gui-structure-summaries-value">
						<span [gui-tooltip]="'Distinct Values'">Dist</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>
					</div>

					<div *ngIf=" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)"
						 class="gui-structure-summaries-value">

						<span>
							<!--							<span [gui-tooltip]="'Sum'" -->
							<!--								  class="gui-math-symbol">&sum;</span>-->
							Sum
						</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).sum }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)"
						 class="gui-structure-summaries-value">

						<!--						<div [gui-tooltip]="'Average'"-->
						<!--							 class="gui-mean">-->
						<!--							<span>_</span><span>X</span>-->
						<!--						</div>-->
						<span [gui-tooltip]="'Average'">Avg</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).average }}</span>
					</div>

					<div *ngIf=" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)"
						 class="gui-structure-summaries-value">

						<!--						<div [gui-tooltip]="'Min'">-->
						<!--							<span class="gui-math-symbol">&and;</span>-->
						<!--						</div>-->
						<span [gui-tooltip]="'Min'">
							Min
						</span>

						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).min }}</span>
					</div>

					<div *ngIf=" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)"
						 class="gui-structure-summaries-value">

						<!--						<div [gui-tooltip]="'Max'">-->
						<!--							<span class="gui-math-symbol">&or;</span>-->
						<!--						</div>-->

						<span [gui-tooltip]="'Max'">
							Max
						</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).max }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)"
						 class="gui-structure-summaries-value">

						<!--						<div [gui-tooltip]="'Median'"-->
						<!--							 class="gui-median">-->
						<!--							<span>~</span>-->
						<!--							<span>X</span>-->
						<!--						</div>-->

						<span [gui-tooltip]="'Median'">Med</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).median }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)"
						 class="gui-structure-summaries-value">
						<span>Truthy</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)"
						 class="gui-structure-summaries-value">
						<span>Falsy</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>
					</div>

				</ng-container>
			</div>

		</ng-container>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-summaries-panel]': 'true'
                }
            }] }
];
/** @nocollapse */
StructureSummariesPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: StructureSummariesUiEventsRepository },
    { type: StructureSourceWarehouse },
    { type: CompositionWarehouse }
];
StructureSummariesPanelComponent.propDecorators = {
    enabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.enabled;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.sourceEmpty;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.headerColumns;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.summaries;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.structureSummariesUiEventsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.compositionReadModelService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureSummariesPanelModule {
}
StructureSummariesPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule
                ],
                declarations: [
                    StructureSummariesPanelComponent
                ],
                exports: [
                    StructureSummariesPanelComponent
                ],
                providers: [
                    StructureSummariesArchive,
                    StructureSummariesConfigService,
                    StructureSummariesPanelConfigConverter
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
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new StructureCreatedEvent(command.getAggregateId()));
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
class StructureCellEditComponent extends SmartComponent {
    /**
     * @param {?} sourceCommandService
     */
    constructor(sourceCommandService) {
        super();
        this.sourceCommandService = sourceCommandService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.entity !== null && changes.entity !== undefined) {
            this.initEditContext();
        }
        if (changes.cell !== null && changes.cell !== undefined) {
            this.initEditContext();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initEditContext();
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
    }
    /**
     * @private
     * @return {?}
     */
    initEditContext() {
        this.valueChanges$ = new ChangedValueEmitter();
        this.status$ = new ChangedValueEmitter();
        this.editContext = {
            status: this.status$,
            valueChanges: this.valueChanges$,
            value: this.cell.getValue(this.entity),
            focus: false,
            parent: this.cellContainerRef
        };
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
                    // this.exitEditMode();
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
        // this.structureCellEditStore.next(state);
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
StructureCellEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-cell-edit[entity][cell]',
                template: `

		<span #cellContainer >
			<ng-container
					*ngTemplateOutlet="cell.editTemplate;
									context: editContext">
			</ng-container>
		</span>

	`
            }] }
];
/** @nocollapse */
StructureCellEditComponent.ctorParameters = () => [
    { type: SourceCommandDispatcher }
];
StructureCellEditComponent.propDecorators = {
    cellContainerRef: [{ type: ViewChild, args: ['cellContainer', { static: true },] }],
    entity: [{ type: Input }],
    cell: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureCellEditComponent.prototype.cellContainerRef;
    /** @type {?} */
    StructureCellEditComponent.prototype.entity;
    /** @type {?} */
    StructureCellEditComponent.prototype.cell;
    /** @type {?} */
    StructureCellEditComponent.prototype.editContext;
    /** @type {?} */
    StructureCellEditComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellEditComponent.prototype.status$;
    /** @type {?} */
    StructureCellEditComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellEditComponent.prototype.sourceCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    create(aggregateId) {
        return new SchemaAggregate(aggregateId);
    }
}
SchemaAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaAggregateFactory.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CreateSchemaCommandHandler {
    /**
     * @return {?}
     */
    forCommand() {
        return CreateSchemaCommand;
    }
}
CreateSchemaCommandHandler.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetSchemaThemeCommandHandler {
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
        return SetSchemaThemeCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(schemaAggregate, command) {
        /** @type {?} */
        const theme = command.getTheme();
        schemaAggregate.changeTheme(theme);
    }
}
SetSchemaThemeCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSchemaThemeCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
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
/**
 * @abstract
 */
class SchemaAggregateRepository extends AggregateRepository {
}
if (false) {
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaAggregateRepository.prototype.getById = function (schemaId) { };
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    SchemaAggregateRepository.prototype.save = function (aggregate) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemorySchemaStore extends InMemoryStore {
}
InMemorySchemaStore.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemorySchemaAggregateStore extends InMemoryAggregateStore {
    /**
     * @param {?} inMemorySchemaStore
     * @param {?} aggregateStoreRegister
     */
    constructor(inMemorySchemaStore, aggregateStoreRegister) {
        super(inMemorySchemaStore, aggregateStoreRegister);
    }
}
InMemorySchemaAggregateStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemorySchemaAggregateStore.ctorParameters = () => [
    { type: InMemorySchemaStore },
    { type: AggregateStoreRegister }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InMemorySchemaAggregateRepository extends SchemaAggregateRepository {
    /**
     * @param {?} inMemorySchemaAggregateStore
     */
    constructor(inMemorySchemaAggregateStore) {
        super();
        this.inMemorySchemaAggregateStore = inMemorySchemaAggregateStore;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    getById(schemaId) {
        return this.inMemorySchemaAggregateStore.getById(schemaId);
    }
    /**
     * @param {?} schemaAggregate
     * @return {?}
     */
    save(schemaAggregate) {
        this.inMemorySchemaAggregateStore.save(schemaAggregate);
    }
}
InMemorySchemaAggregateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemorySchemaAggregateRepository.ctorParameters = () => [
    { type: InMemorySchemaAggregateStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaAggregateRepository.prototype.inMemorySchemaAggregateStore;
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(schemaAggregate, command) {
        /** @type {?} */
        const coloring = command.getColoring();
        schemaAggregate.setRowColoring(coloring);
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
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(schemaAggregate, command) {
        this.domainEventPublisher.publishFromAggregate(schemaAggregate);
    }
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(schemaAggregate, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        schemaAggregate.setHorizontalGrid(enabled);
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
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(schemaAggregate, command) {
        this.domainEventPublisher.publishFromAggregate(schemaAggregate);
    }
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(schemaAggregate, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        schemaAggregate.setVerticalGrid(enabled);
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
class SchemaCssClassesEventHandler {
    /**
     * @param {?} schemaCssClassesRepository
     */
    constructor(schemaCssClassesRepository) {
        this.schemaCssClassesRepository = schemaCssClassesRepository;
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    publish(aggregateId) {
        if (this.rowColoring !== undefined && this.horizontalGrid !== undefined && this.verticalGrid !== undefined && this.schemaTheme !== undefined) {
            this.schemaCssClassesRepository.setCssClass(new SchemaCssClass(this.verticalGrid, this.horizontalGrid, this.schemaTheme, this.rowColoring), aggregateId);
        }
    }
    /**
     * @return {?}
     */
    forEvents() {
        return [
            SchemaThemeSetEvent,
            RowColoringSetEvent,
            SchemaHorizontalGridSetEvent,
            SchemaVerticalGridSetEvent
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('RowColoringSetEvent')) {
            this.rowColoring = ((/** @type {?} */ (event))).getRowColoring();
        }
        if (event.ofMessageType('SchemaHorizontalGridSetEvent')) {
            this.horizontalGrid = ((/** @type {?} */ (event))).getHorizontalGrid();
        }
        if (event.ofMessageType('SchemaVerticalGridSetEvent')) {
            this.verticalGrid = ((/** @type {?} */ (event))).getVerticalGrid();
        }
        if (event.ofMessageType('SchemaThemeSetEvent')) {
            this.schemaTheme = ((/** @type {?} */ (event))).getTheme();
        }
        this.publish(event.getAggregateId());
    }
}
SchemaCssClassesEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCssClassesEventHandler.ctorParameters = () => [
    { type: SchemaCssClassesRepository }
];
if (false) {
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.rowColoring;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.horizontalGrid;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.verticalGrid;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.schemaTheme;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesEventHandler.prototype.schemaCssClassesRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaThemeSetEventHandler {
    /**
     * @param {?} themeRepository
     */
    constructor(themeRepository) {
        this.themeRepository = themeRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return SchemaThemeSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SchemaThemeSetEvent')) {
            this.themeRepository.next(event.getAggregateId(), event.getTheme());
        }
    }
}
SchemaThemeSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaThemeSetEventHandler.ctorParameters = () => [
    { type: SchemaThemeRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetEventHandler.prototype.themeRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaHorizontalGridSetEventHandler {
    /**
     * @param {?} horizontalGridRepository
     */
    constructor(horizontalGridRepository) {
        this.horizontalGridRepository = horizontalGridRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return SchemaHorizontalGridSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SchemaHorizontalGridSetEvent')) {
            this.horizontalGridRepository.next(event.getAggregateId(), event.getHorizontalGrid());
        }
    }
}
SchemaHorizontalGridSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaHorizontalGridSetEventHandler.ctorParameters = () => [
    { type: SchemaHorizontalGridRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaHorizontalGridSetEventHandler.prototype.horizontalGridRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaRowColoringSetEventHandler {
    /**
     * @param {?} schemaRowColoringRepository
     */
    constructor(schemaRowColoringRepository) {
        this.schemaRowColoringRepository = schemaRowColoringRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return RowColoringSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('RowColoringSetEvent')) {
            this.schemaRowColoringRepository.next(event.getAggregateId(), event.getRowColoring());
        }
    }
}
SchemaRowColoringSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaRowColoringSetEventHandler.ctorParameters = () => [
    { type: SchemaRowColoringRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaRowColoringSetEventHandler.prototype.schemaRowColoringRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const schemaKey = 'SchemaAggregate';
class SchemaModule {
}
SchemaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HermesModule.defineAggregate(schemaKey, SchemaAggregateFactory, InMemorySchemaAggregateRepository, CreateSchemaCommandHandler, [
                        ...HermesModule.registerCommandHandler(SetSchemaThemeCommandHandler, schemaKey),
                        ...HermesModule.registerCommandHandler(SetRowColoringCommandHandler, schemaKey),
                        ...HermesModule.registerCommandHandler(SetSchemaHorizontalGridCommandHandler, schemaKey),
                        ...HermesModule.registerCommandHandler(SetSchemaVerticalGridCommandHandler, schemaKey)
                    ], [
                        ...HermesModule.registerDomainEventHandler(SchemaThemeSetEventHandler),
                        ...HermesModule.registerDomainEventHandler(SchemaHorizontalGridSetEventHandler),
                        ...HermesModule.registerDomainEventHandler(SchemaRowColoringSetEventHandler),
                        ...HermesModule.registerDomainEventHandler(SchemaThemeSetEventHandler),
                        ...HermesModule.registerMultiDomainEventHandler(SchemaCssClassesEventHandler)
                    ])
                ],
                declarations: [],
                providers: [
                    SchemaDispatcher,
                    {
                        provide: SchemaAggregateRepository,
                        useClass: InMemorySchemaAggregateRepository
                    },
                    InMemorySchemaAggregateStore,
                    InMemorySchemaStore,
                    SchemaCommandDispatcher,
                    SchemaWarehouse,
                    SchemaEventRepository,
                    SchemaCssClassesRepository,
                    SchemaThemeRepository,
                    SchemaHorizontalGridRepository,
                    SchemaRowColoringRepository,
                    SchemaVerticalGridRepository,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureCellEditBooleanComponent extends SmartComponent {
    /**
     * @param {?} sourceCommandService
     */
    constructor(sourceCommandService) {
        super();
        this.sourceCommandService = sourceCommandService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.entity !== null && changes.entity !== undefined) {
            this.initEditContext();
        }
        if (changes.cell !== null && changes.cell !== undefined) {
            this.initEditContext();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initEditContext();
    }
    /**
     * @private
     * @return {?}
     */
    submitChanges() {
        /** @type {?} */
        const itemId = this.entity.getId();
        /** @type {?} */
        const updatedValue = this.actualValue;
        /** @type {?} */
        const fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue));
    }
    /**
     * @private
     * @return {?}
     */
    initEditContext() {
        this.valueChanges$ = new ChangedValueEmitter();
        this.status$ = new ChangedValueEmitter();
        this.editContext = {
            status: this.status$,
            valueChanges: this.valueChanges$,
            value: this.cell.getValue(this.entity).value,
            focus: false,
            parent: this.cellContainerRef
        };
        this.observeValueChanges();
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
                    this.submitChanges();
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
}
StructureCellEditBooleanComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-cell-edit-boolean[entity][cell]',
                template: `

		<span #cellContainer>
			<ng-container
					*ngTemplateOutlet="cell.editTemplate;
									context: editContext">
			</ng-container>
		</span>

	`
            }] }
];
/** @nocollapse */
StructureCellEditBooleanComponent.ctorParameters = () => [
    { type: SourceCommandDispatcher }
];
StructureCellEditBooleanComponent.propDecorators = {
    cellContainerRef: [{ type: ViewChild, args: ['cellContainer', { static: true },] }],
    entity: [{ type: Input }],
    cell: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.cellContainerRef;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.entity;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.cell;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.editContext;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.status$;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellEditBooleanComponent.prototype.sourceCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureTitlePanelComponent extends Reactive {
    /**
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} sanitizer
     */
    constructor(structureTitlePanelConfigArchive, sanitizer) {
        super();
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.sanitizer = sanitizer;
        this.structureTitlePanelConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        (title) => {
            this.title = title.template;
            if (typeof this.title === 'function') {
                this.title = this.title('Title panel');
            }
            this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.title);
        }));
    }
}
StructureTitlePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-title-panel',
                template: `
		<div [innerHTML]="safeHTML" class="gui-title-panel"></div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureTitlePanelComponent.ctorParameters = () => [
    { type: StructureTitlePanelConfigArchive },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    StructureTitlePanelComponent.prototype.title;
    /** @type {?} */
    StructureTitlePanelComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureTitlePanelComponent.prototype.structureTitlePanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureTitlePanelComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureFooterPanelComponent extends Reactive {
    /**
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} sanitizer
     */
    constructor(structureFooterPanelConfigArchive, sanitizer) {
        super();
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        this.sanitizer = sanitizer;
        this.structureFooterPanelConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        (title) => {
            this.footerTitle = title.template;
            if (typeof this.footerTitle === 'function') {
                this.footerTitle = this.footerTitle('Title panel');
            }
            this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.footerTitle);
        }));
    }
}
StructureFooterPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-footer-panel',
                template: `
		<div [innerHTML]="safeHTML" class="gui-footer-panel"></div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureFooterPanelComponent.ctorParameters = () => [
    { type: StructureFooterPanelConfigArchive },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    StructureFooterPanelComponent.prototype.footerTitle;
    /** @type {?} */
    StructureFooterPanelComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureFooterPanelComponent.prototype.structureFooterPanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureFooterPanelComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmptySourceComponent {
}
EmptySourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-empty-source[items]',
                template: "<div *ngIf=\"items.length === 0\">\n\tThere are no items to show.\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-empty-source]': 'true'
                },
                styles: [`
		.gui-empty-source div {
			display: block;
			padding: 42px 8px;
		}
	`]
            }] }
];
EmptySourceComponent.propDecorators = {
    items: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EmptySourceComponent.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmptySourceFeatureModule {
}
EmptySourceFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    EmptySourceComponent
                ],
                exports: [
                    EmptySourceComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructureThemeGateway {
    /**
     * @param {?} schemaCommandDispatcher
     */
    constructor(schemaCommandDispatcher) {
        this.schemaCommandDispatcher = schemaCommandDispatcher;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (simpleChanges.theme2 !== undefined && simpleChanges.theme2.currentValue !== undefined) {
            this.schemaCommandDispatcher.setTheme(this.theme2);
        }
    }
}
StructureThemeGateway.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[theme2]'
            },] }
];
/** @nocollapse */
StructureThemeGateway.ctorParameters = () => [
    { type: SchemaCommandDispatcher }
];
StructureThemeGateway.propDecorators = {
    theme2: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureThemeGateway.prototype.theme2;
    /**
     * @type {?}
     * @private
     */
    StructureThemeGateway.prototype.schemaCommandDispatcher;
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
        ...PagingDomainModule.commandHandlers(),
        ...SortingDomainModule.commandHandlers(),
        ...FieldDomainModule.commandHandlers(),
        ...SearchDomainModule.commandHandlers(),
        ...sourceCommandHandlers,
        ...structureCommandHandlers
    ], [
        ...structureDomainEventHandlers,
        ...sourceDomainEventHandlers,
        ...SearchDomainModule.domainEventHandlers()
    ]),
    // .withConfig({
    // 	loggers: false
    // }),
    ...fabricImports,
    PagingFeatureModule,
    SortingFeatureModule,
    FieldFeatureModule,
    SearchFeatureModule,
    SearchApiModule,
    StructureInfoPanelModule,
    StructureSummariesPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
    EmptySourceFeatureModule,
    CompositionModule,
    SchemaModule,
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
    StructureCellEditComponent,
    StructureCellEditBooleanComponent,
    StructureContainerComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureRowDetailViewComponent,
    StructureTitlePanelComponent,
    StructureFooterPanelComponent,
    StructureThemeGateway
];
/** @type {?} */
const entryComponents = [
    StructureColumnConfigComponent,
    StructureRowDetailViewComponent
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
    StructureThemeConverter,
    StructureSourceWarehouse,
    StructureIdGenerator,
    ...structureProviders
];
/** @type {?} */
const exportDeclarations$1 = [
    FabricModule,
    StructureComponent,
    StructureThemeGateway,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    ...fabricImports,
    PagingFeatureModule
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
    static withConfig(structureConfig = {
        cssClassName: '',
        hermesModuleConfig: { loggers: false }
    }) {
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
class GuiGridModule {
}
GuiGridModule.entryComponents = [...entryComponents$1];
GuiGridModule.exportDeclarations = [...exportDeclarations$2];
GuiGridModule.elementComponents = [...elementComponents];
GuiGridModule.decorators = [
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
    GuiGridModule.entryComponents;
    /** @type {?} */
    GuiGridModule.exportDeclarations;
    /** @type {?} */
    GuiGridModule.elementComponents;
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

export { GridComponent, GuiBooleanCellView, GuiCellView, GuiColumnAlign, GuiDataType, GuiDateCellView, GuiGridModule, GuiNumberCellView, GuiPagingDisplay, GuiRowColoring, GuiSortingOrder, GuiStringCellView, GuiTheme, createStructureDefinition as ɵa, StructureModule as ɵb, PagingDispatcher as ɵba, SetPagingCommandHandler as ɵbb, NextPageCommandHandler as ɵbc, PrevPageCommandHandler as ɵbd, ChangePagesizeCommandHandler as ɵbe, SortingDomainModule as ɵbf, ToggleSortCommandHandler as ɵbg, SetSortingCommandHandler as ɵbh, SetSortOrderCommandHandler as ɵbi, FieldDomainModule as ɵbj, InitFieldsCommandHandler as ɵbk, SearchDomainModule as ɵbl, SearchDispatcher as ɵbm, SearchHighlightArchive as ɵbn, SearchPlaceholderArchive as ɵbo, SetConfigSearchingCommandHandler as ɵbp, StructureSetSearchPhraseCommandHandler as ɵbq, StructureSourceDomainEventPublisher as ɵbr, SearchPhraseSetEventHandler as ɵbs, SearchPhraseRepository as ɵbt, Reactive as ɵbu, ConfigSearchingSetEventHandler as ɵbv, SearchingRepository as ɵbw, sourceCommandHandlers as ɵbx, sourceDomainEventHandlers as ɵby, sourceProviders as ɵbz, StructureAggregateFactory as ɵc, SourceSetLoadingCommandHandler as ɵca, SetOriginCommandHandler as ɵcb, StructureEditSourceItemCommandHandler as ɵcc, structureCommandHandlers as ɵcd, structureDomainEventHandlers as ɵce, structureProviders as ɵcf, SetVerticalScrollEnabledCommandHandler as ɵcg, SetRowHeightBasedOnThemeCommandHandler as ɵch, SetScrollPositionCommandHandler as ɵci, StructureSetConfigFilterCommandHandler as ɵcj, StructureSetConfigQuickFilterCommandHandler as ɵck, StructureToggleFilterCommandHandler as ɵcl, StructureSetSummariesEnabledCommandHandler as ɵcm, SetRowHeightCommandHandler as ɵcn, StructureSetHeightCommandHandler as ɵco, StructureSummariesEnabledSetEventHandler as ɵcp, StructureSummariesRepository as ɵcq, StructureCreatedEventHandler as ɵcr, FieldsInitedEventHandler as ɵcs, FieldUiArchive as ɵct, FieldUiConverter as ɵcu, StructureConfigQuickFilterSetEventHandler as ɵcv, StructureQuickFilterRepository as ɵcw, StructureConfigFilterSetEventHandler as ɵcx, StructureFilterRepository as ɵcy, StructureOriginChangedEventHandler as ɵcz, PagingManagerFactory as ɵd, StructureSourceOriginRepository as ɵda, StructurePreparedItemsEventHandler as ɵdb, StructurePreparedItemsRepository as ɵdc, fabricImports as ɵdd, PagingFeatureModule as ɵde, PagingApiModule as ɵdf, PagingCommandDispatcher as ɵdg, PagingWarehouse as ɵdh, PagingRepository as ɵdi, StructureReadModelRepository as ɵdj, PagingEventRepository as ɵdk, PagingConverter as ɵdl, PagingComponent as ɵdm, SmartComponent as ɵdn, StructureSourceWarehouse as ɵdo, PagingDisplayModeArchive as ɵdp, PagingNavigatorComponent as ɵdq, PagingSelectComponent as ɵdr, PagingStatsComponent as ɵds, PureComponent as ɵdt, AlternativePagingNavigatorComponent as ɵdu, AlternativePagingPagesComponent as ɵdv, SortingFeatureModule as ɵdw, SortingApiModule as ɵdx, SortingCommandDispatcher as ɵdy, SortingWarehouse as ɵdz, Logger as ɵe, SortingEventRepository as ɵea, FieldFeatureModule as ɵeb, FieldApiModule as ɵec, FieldCommandDispatcher as ɵed, FieldUiRepository as ɵee, SearchFeatureModule as ɵef, SearchIconComponent as ɵeg, SearchComponent as ɵeh, StructureId as ɵei, SearchCommandDispatcher as ɵej, StructureWarehouse as ɵek, SearchWarehouse as ɵel, StructureVerticalFormationWarehouse as ɵem, VerticalFormationRepository as ɵen, InMemoryStructureReadStore as ɵeo, StructureReadModelRootConverter as ɵep, FormationConverter as ɵeq, SourceConverter as ɵer, VerticalFormationConverter as ɵes, SearchApiModule as ɵet, SearchEventRepository as ɵeu, StructureInfoPanelModule as ɵev, NumberFormatterModule as ɵew, NumberFormatterPipe as ɵex, StructureColumnManagerModule as ɵey, StructureColumnManagerComponent as ɵez, SourceManagerFactory as ɵf, CompositionId as ɵfa, CompositionCommandDispatcher as ɵfb, CompositionDispatcher as ɵfc, CompositionWarehouse as ɵfd, CompositionReadModelRootRepository as ɵfe, StructureDialogColumnManagerComponent as ɵff, StructureMenuColumnManagerComponent as ɵfg, selector as ɵfh, StructureColumnManagerIconComponent as ɵfi, StructureDialogColumnManagerService as ɵfj, SchemaWarehouse as ɵfk, SchemaCssClassesRepository as ɵfl, SchemaThemeRepository as ɵfm, SchemaHorizontalGridRepository as ɵfn, SchemaRowColoringRepository as ɵfo, SchemaVerticalGridRepository as ɵfp, StructureThemeConverter as ɵfq, StructureInfoPanelComponent as ɵfr, SchemaReadModelRootId as ɵfs, StructureInfoPanelArchive as ɵft, StructureInfoModalComponent as ɵfu, selector$1 as ɵfv, StructureInfoIconComponent as ɵfw, StructureInfoPanelConfigConverter as ɵfx, StructureSummariesPanelModule as ɵfy, StructureSummariesPanelComponent as ɵfz, FormationAggregateFactory as ɵg, StructureSummariesUiEventsRepository as ɵga, StructureSummariesArchive as ɵgb, StructureSummariesConfigService as ɵgc, StructureSummariesPanelConfigConverter as ɵgd, StructureSummariesCommandDispatcher as ɵge, StructureTopPanelModule as ɵgf, StructureFilterMenuModule as ɵgg, selector$2 as ɵgh, StructureFilterIconComponent as ɵgi, StructureFilterMenuComponent as ɵgj, StructureFilterMenuTriggerComponent as ɵgk, structureComponentToken as ɵgl, structureIdFactory as ɵgm, compositionIdFactory as ɵgn, schemaIdFactory as ɵgo, structureComponentSelfProviders as ɵgp, StructureComponent as ɵgq, StructureGateway as ɵgr, StructureCommandDispatcher as ɵgs, StructureFilterCommandDispatcher as ɵgt, SourceDispatcher as ɵgu, SourceCommandDispatcher as ɵgv, SourceEventService as ɵgw, SchemaCommandDispatcher as ɵgx, SchemaDispatcher as ɵgy, CompositionEventRepository as ɵgz, VerticalFormationFactory as ɵh, FormationEventService as ɵha, StructureEditModeArchive as ɵhb, StructureCellEditArchive as ɵhc, StructureInfoPanelConfigService as ɵhd, StructureCellEditStore as ɵhe, ColumnFieldFactory as ɵhf, StructureColumnMenuConfigArchive as ɵhg, StructureRowSelectEnabledArchive as ɵhh, StructureHeaderTopEnabledArchive as ɵhi, StructureHeaderBottomEnabledArchive as ɵhj, StructureRowDetailConfigArchive as ɵhk, StructureTitlePanelConfigArchive as ɵhl, StructureFooterPanelConfigArchive as ɵhm, SchemaEventRepository as ɵhn, StructureIdGenerator as ɵho, localProviders as ɵhp, LocalPagingCommandDispatcher as ɵhq, Override as ɵhr, LocalPagingWarehouse as ɵhs, StructureFormationDispatcher as ɵht, FormationDispatcher as ɵhu, LocalFormationCommandDispatcher as ɵhv, StructureFormationWarehouse as ɵhw, FormationRepository as ɵhx, LocalFormationWarehouse as ɵhy, LocalStructureCommandDispatcher as ɵhz, SummariesManagerFactory as ɵi, LocalStructureWarehouse as ɵia, LocalSourceCommandDispatcher as ɵib, LocalSourceWarehouse as ɵic, LocalCompositionCommandDispatcher as ɵid, LocalCompositionWarehouse as ɵie, LocalStructureSearchCommandDispatcher as ɵif, LocalStructureVerticalFormationWarehouse as ɵig, LocalSchemaWarehouse as ɵih, LocalSchemaCommandDispatcher as ɵii, SchemaCssClassManager as ɵij, StructureCellEditCloseAllService as ɵik, StructureRowDetailService as ɵil, StructureDefinition as ɵim, PagingDefinition as ɵin, StructureColumnSelectorComponent as ɵio, StructureTopPanelComponent as ɵip, StructureColumnMenuModule as ɵiq, StructureColumnConfigComponent as ɵir, CellTemplateWithContext as ɵis, CellContext as ɵit, CellValueType as ɵiu, CellValue as ɵiv, FieldId as ɵiw, ColumnDefinitionId as ɵix, SortOrder as ɵiy, ColumnAlign as ɵiz, SUMMARIES_CALCULATORS as ɵj, StructureColumnConfigTriggerComponent as ɵja, StructureColumnConfigService as ɵjb, StructureColumnConfigSortComponent as ɵjc, StructureColumnConfigColumnHideComponent as ɵjd, StructureColumnConfigColumnMoveComponent as ɵje, selector$3 as ɵjf, StructureColumnMenuIconComponent as ɵjg, selector$4 as ɵjh, StructureColumnMenuArrowIconComponent as ɵji, EmptySourceFeatureModule as ɵjj, EmptySourceComponent as ɵjk, CompositionModule as ɵjl, SanitizeModule as ɵjm, SafePipe as ɵjn, CompositionAggregateFactory as ɵjo, ColumnEntityFactory as ɵjp, ColumnPresentationConverter as ɵjq, InMemoryCompositionAggregateRepository as ɵjr, CompositionAggregateRepository as ɵjs, InMemoryCompositionAggregateStore as ɵjt, InMemoryCompositionStore as ɵju, CreateCompositionCommandHandler as ɵjv, SetColumnsCommandHandler as ɵjw, CompositionEventConverter as ɵjx, SetCompositionWidthCommandHandler as ɵjy, SetCompositionResizeWidthCommandHandler as ɵjz, SummariesCalculator as ɵk, SetCompositionContainerWidthCommandHandler as ɵka, CompositionSetColumnEnabledCommandHandler as ɵkb, CompositionChangeSortStatusCommandHandler as ɵkc, CompositionMoveLeftColumnCommandHandler as ɵkd, CompositionMoveRightColumnCommandHandler as ɵke, CompositionChangeSortStatusEventHandler as ɵkf, compositionProviders as ɵkg, inMemoryCompositionCommandProviders as ɵkh, inMemoryCompositionReadModelProviders as ɵki, inMemoryCompositionProviders as ɵkj, InMemoryCompositionReadStore as ɵkk, CompositionReadModelRootConverter as ɵkl, ColumnDefinitionFactory as ɵkm, ViewTemplateRepository as ɵkn, ViewTemplateFactory as ɵko, TemplateFactory as ɵkp, EditTemplateRepository as ɵkq, EditTemplateFactory as ɵkr, InMemoryCompositionRepository as ɵks, ViewTemplatesComponent as ɵkt, EditTemplatesComponent as ɵku, StringEditTemplateComponent as ɵkv, InputEditTemplateComponent as ɵkw, EditCommunicationComponent as ɵkx, NumberEditTemplateComponent as ɵky, BooleanEditTemplateComponent as ɵkz, FilterManagerFactory as ɵl, DateEditTemplateComponent as ɵla, ColumnQueryComponent as ɵlb, FunctionViewComponent as ɵlc, BarViewComponent as ɵld, PercentageViewComponent as ɵle, TextViewComponent as ɵlf, SchemaModule as ɵlg, SchemaAggregateFactory as ɵlh, InMemorySchemaAggregateRepository as ɵli, SchemaAggregateRepository as ɵlj, InMemorySchemaAggregateStore as ɵlk, InMemorySchemaStore as ɵll, CreateSchemaCommandHandler as ɵlm, SetSchemaThemeCommandHandler as ɵln, SetRowColoringCommandHandler as ɵlo, SetSchemaHorizontalGridCommandHandler as ɵlp, SetSchemaVerticalGridCommandHandler as ɵlq, SchemaThemeSetEventHandler as ɵlr, SchemaHorizontalGridSetEventHandler as ɵls, SchemaRowColoringSetEventHandler as ɵlt, SchemaCssClassesEventHandler as ɵlu, LoggerModule as ɵlv, ConsoleLogger as ɵlw, StructureHeaderComponent as ɵlx, StructureHeaderColumnsComponent as ɵly, StructureHeaderFiltersComponent as ɵlz, SearchManagerFactory as ɵm, StructureFilterWarehouse as ɵma, StructureHeaderFilterComponent as ɵmb, StructureContentComponent as ɵmc, StructureRowComponent as ɵmd, StructureCellComponent as ɵme, StructureCellEditComponent as ɵmf, StructureCellEditBooleanComponent as ɵmg, StructureContainerComponent as ɵmh, structureParentComponent as ɵmi, StructureQuickFiltersComponent as ɵmj, StructureBlueprintComponent as ɵmk, STRUCTURE_CSS_CLASS_NAME as ɵml, StructureRowDetailViewComponent as ɵmm, structureRowDetailViewItem as ɵmn, structureRowDetailViewTemplate as ɵmo, StructureTitlePanelComponent as ɵmp, StructureFooterPanelComponent as ɵmq, StructureThemeGateway as ɵmr, ItemEntityFactory as ɵms, inMemoryStructureCommandProviders as ɵmt, inMemoryStructureReadProviders as ɵmu, inMemoryStructureProviders as ɵmv, provideSummariesCalculator as ɵmw, summariesProviders as ɵmx, BooleanSummariesCalculator as ɵmy, DateSummariesCalculator as ɵmz, FieldCollectionFactory as ɵn, NumberSummariesCalculator as ɵna, StringSummariesCalculator as ɵnb, UnknownSummariesCalculator as ɵnc, InMemoryStructureRepository as ɵnd, StructureSummariesWarehouse as ɵne, GridGateway as ɵnf, gridProviders as ɵng, gridStructureDefinition as ɵnh, GridRegister as ɵni, GridIdGenerator as ɵnj, FieldFactory as ɵo, FieldIdGenerator as ɵp, InMemoryStructureAggregateRepository as ɵq, StructureAggregateRepository as ɵr, InMemoryStructureAggregateStore as ɵs, InMemoryStructureStore as ɵt, CreateStructureCommandHandler as ɵu, formationCommandHandlers as ɵv, formationProviders as ɵw, SetFormationCommandHandler as ɵx, ToggleSelectedRowCommandHandler as ɵy, PagingDomainModule as ɵz };
//# sourceMappingURL=generic-ui-ngx-grid.js.map
