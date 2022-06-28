import * as i0 from '@angular/core';
import { TemplateRef, Component, ContentChild, EventEmitter, Directive, Input, Output, Injectable, Pipe, ChangeDetectionStrategy, ViewEncapsulation, NgModule, ElementRef, ViewChild, PLATFORM_ID, Inject, Injector, InjectionToken, Optional as Optional$1, Attribute, ComponentFactoryResolver } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReadModelRootId, AggregateId, RandomIdGenerator, Archive, HermesSubject, hermesTakeUntil, EventRepository, DomainEvent, AggregateEvent, Command, CoreContainer, CommandDispatcher, DomainEventPublisher, ReadModelObject, Reactive, DomainEventBus, hermesFilter, hermesMap, singleFromObservable, hermesSwitchMap, DomainInitializer, HermesReplaySubject, FeatureModule, CreateAggregateCommand, AggregateArchive, fromRxJsObservable, EntityId, hermesTake, Entity, createContainer, Optional, RandomStringGenerator, hermesDistinctUntilChanged, toRxJsObservable, AggregateRepository, InMemoryStore, InMemoryAggregateStore, EventDrivenRepository, AggregateRoot, AggregateFactory, hermesEmpty, hermesTimer, hermesFromEvent, DomainObject, ReadModelRoot, InMemoryReadModelStore, HermesId, ReadModelEntity, ReadModelEntityId, ReadModelRootRepository, KeyMap, HermesModule, COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED } from '@generic-ui/hermes';
import * as i1 from '@generic-ui/fabric';
import { FabricModule, FabricSelectModule, FabricBadgeModule, FabricButtonModule, FabricButtonGroupModule, FabricCheckboxModule, FabricChipModule, FabricDrawerModule, FabricDropdownModule, FabricRadioButtonModule, FabricRadioGroupModule, FabricProgressBarModule, FabricProgressSpinnerModule, FabricSpinnerModule, FabricTabModule, FabricTooltipModule, FabricToggleButtonModule, FabricInputModule, FabricDialogModule, FabricInlineDialogModule, Theme, FabricModalThemeService, Placement, FabricPlacement, FabricDatePickerModule, FabricChipComponent, FabricCheckboxComponent, FabricButtonComponent, FabricInputComponent } from '@generic-ui/fabric';
import { __decorate } from 'tslib';
import { debounceTime, throttleTime, flatMap } from 'rxjs/operators';
import * as i1$1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1$2 from '@angular/platform-browser';
import { zip, Observable, combineLatest } from 'rxjs';

class GuiListItemComponent {
}
GuiListItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GuiListItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: GuiListItemComponent, selector: "gui-list-item", queries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-list-item',
                    template: ''
                }]
        }], propDecorators: { templateRef: [{
                type: ContentChild,
                args: [TemplateRef, { static: true }]
            }] } });

var PagingDisplayMode;
(function (PagingDisplayMode) {
    PagingDisplayMode[PagingDisplayMode["BASIC"] = 0] = "BASIC";
    PagingDisplayMode[PagingDisplayMode["ADVANCED"] = 1] = "ADVANCED";
})(PagingDisplayMode || (PagingDisplayMode = {}));

class GuiListPagingConverter {
    convert(guiListPaging) {
        const pagingConfig = {};
        if (guiListPaging.enabled !== undefined && guiListPaging.enabled !== null) {
            pagingConfig.enabled = guiListPaging.enabled;
        }
        if (guiListPaging.page !== undefined && guiListPaging.page !== null) {
            pagingConfig.page = guiListPaging.page;
        }
        if (guiListPaging.pageSize !== undefined && guiListPaging.pageSize !== null) {
            pagingConfig.pageSize = guiListPaging.pageSize;
        }
        if (guiListPaging.pageSizes !== undefined && guiListPaging.pageSizes !== null) {
            pagingConfig.pageSizes = guiListPaging.pageSizes;
        }
        if (guiListPaging.pagerTop !== undefined && guiListPaging.pagerTop !== null) {
            pagingConfig.pagerTop = guiListPaging.pagerTop;
        }
        else {
            pagingConfig.pagerTop = true;
        }
        if (guiListPaging.pagerBottom !== undefined && guiListPaging.pagerBottom !== null) {
            pagingConfig.pagerBottom = guiListPaging.pagerBottom;
        }
        pagingConfig.displayMode = PagingDisplayMode.BASIC;
        return pagingConfig;
    }
}

class GuiListCardComponent {
}
GuiListCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GuiListCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: GuiListCardComponent, selector: "gui-list-card", queries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-list-card',
                    template: ''
                }]
        }], propDecorators: { templateRef: [{
                type: ContentChild,
                args: [TemplateRef, { static: true }]
            }] } });

var ListViewMode;
(function (ListViewMode) {
    ListViewMode["LIST"] = "List";
    ListViewMode["CARD"] = "Card";
})(ListViewMode || (ListViewMode = {}));

const enTranslation = {
    sourceEmpty: 'There are no items to show.',
    pagingItemsPerPage: 'Items per page:',
    pagingOf: 'of',
    pagingNextPage: 'Next',
    pagingPrevPage: 'Prev',
    pagingNoItems: 'There is no items.',
    infoPanelShowing: 'Showing',
    infoPanelItems: 'items',
    infoPanelOutOf: 'out of',
    infoPanelThemeMangerTooltipText: 'Theme manager',
    infoPanelColumnManagerTooltipText: 'Column manager',
    infoPanelInfoTooltipText: 'info',
    themeManagerModalTitle: 'Theme manager',
    themeManagerModalTheme: 'Theme:',
    themeManagerModalRowColoring: 'Row coloring:',
    themeManagerModalVerticalGrid: 'Vertical grid',
    themeManagerModalHorizontalGrid: 'HorizontalGrid',
    columnManagerModalTitle: 'Manage columns',
    headerMenuMainTab: 'Menu',
    headerMenuMainTabColumnSort: 'Column sort',
    headerMenuMainTabHideColumn: 'Hide column',
    headerMenuMainTabHighlightColumn: 'Highlight',
    headerMenuMainTabMoveLeft: 'Move left',
    headerMenuMainTabMoveRight: 'Move right',
    headerMenuMainTabColumnSortAscending: 'Ascending',
    headerMenuMainTabColumnSortDescending: 'Descending',
    headerMenuMainTabColumnSortNone: 'None',
    headerMenuFilterTab: 'Filter',
    headerMenuColumnsTab: 'Columns',
    summariesCount: 'Count',
    summariesDist: 'Dist',
    summariesSum: 'Sum',
    summariesAvg: 'Avg',
    summariesMin: 'Min',
    summariesMax: 'Max',
    summariesMed: 'Med',
    summariesTruthy: 'Truthy',
    summariesFalsy: 'Falsy',
    summariesDistinctValuesTooltip: 'Distinct values',
    summariesAverageTooltip: 'Average',
    summariesMinTooltip: 'Min',
    summariesMaxTooltip: 'Max',
    summariesMedTooltip: 'Median',
    summariesCountTooltip: 'Number of items in the grid'
};

const defaultTranslation = enTranslation;

var GuiListMode;
(function (GuiListMode) {
    GuiListMode[GuiListMode["LIST"] = 0] = "LIST";
    GuiListMode[GuiListMode["CARD"] = 1] = "CARD";
})(GuiListMode || (GuiListMode = {}));
var GuiListFieldType;
(function (GuiListFieldType) {
    GuiListFieldType[GuiListFieldType["UNKNOWN"] = 0] = "UNKNOWN";
    GuiListFieldType[GuiListFieldType["NUMBER"] = 1] = "NUMBER";
    GuiListFieldType[GuiListFieldType["STRING"] = 2] = "STRING";
    GuiListFieldType[GuiListFieldType["BOOLEAN"] = 3] = "BOOLEAN";
    GuiListFieldType[GuiListFieldType["DATE"] = 4] = "DATE";
    GuiListFieldType[GuiListFieldType["CUSTOM"] = 5] = "CUSTOM";
})(GuiListFieldType || (GuiListFieldType = {}));
const GuiListDefaultTranslation = defaultTranslation;

class GuiListModeConverter {
    convert(mode) {
        if (mode === GuiListMode.LIST) {
            return ListViewMode.LIST;
        }
        else {
            return ListViewMode.CARD;
        }
    }
}

class ListViewCardTemplate {
    constructor(template, templRef) {
        this.template = template;
        this.templRef = templRef;
    }
    hasTemplateRef() {
        return !!this.templRef;
    }
    getTemplateRef() {
        return this.templRef;
    }
    getTemplateMethod() {
        return this.template;
    }
}

class ListViewTemplate {
    constructor(template, templRef) {
        this.template = template;
        this.templRef = templRef;
    }
    hasTemplateRef() {
        return !!this.templRef;
    }
    getTemplateRef() {
        return this.templRef;
    }
    getTemplateMethod() {
        return this.template;
    }
}

function checkInput(prop) {
    return {
        isChanged: () => {
            return hasChanged(prop);
        },
        ifChanged: (callback) => {
            if (hasChanged(prop)) {
                callback();
            }
        }
    };
}
function ifChanged(prop, callback) {
    if (hasChanged(prop)) {
        callback(prop.currentValue);
    }
}
function hasChanged(prop) {
    return prop !== undefined && prop.currentValue !== undefined;
}

class GuiListGateway {
    constructor() {
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.searchPhraseChanged = new EventEmitter();
        this.guiListPagingConverter = new GuiListPagingConverter();
        this.guiListModeConverter = new GuiListModeConverter();
    }
    ngOnChanges(changes) {
        const templateRef = this.listItem ? this.listItem.templateRef : null;
        this.containerTemplate = new ListViewTemplate(this.template, templateRef);
        const cardTemplateRef = this.listCard ? this.listCard.templateRef : null;
        this.listCardTemplate = new ListViewCardTemplate(this.cardTemplate, cardTemplateRef);
        ifChanged(changes.paging, () => {
            if (typeof this.paging !== 'boolean') {
                this.paging = this.guiListPagingConverter.convert(this.paging);
            }
        });
        ifChanged(changes.view, () => {
            if (this.view.active !== undefined) {
                this.listViewMode = this.guiListModeConverter.convert(this.view.active);
            }
            if (this.view.selector !== undefined) {
                this.listViewModeSelector = this.view.selector;
            }
        });
        ifChanged(changes.fields, () => {
            this.listFields = this.fields.map((f) => {
                return {
                    field: f.field,
                    type: f.type // DataType
                };
            });
        });
        ifChanged(changes.searching, () => {
            this.searchConfig = this.searching;
        });
    }
}
GuiListGateway.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListGateway, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GuiListGateway.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: GuiListGateway, inputs: { source: "source", template: "template", cardTemplate: "cardTemplate", paging: "paging", view: "view", fields: "fields", searching: "searching", localization: "localization" }, outputs: { pageChanged: "pageChanged", pageSizeChanged: "pageSizeChanged", searchPhraseChanged: "searchPhraseChanged" }, queries: [{ propertyName: "listItem", first: true, predicate: GuiListItemComponent, descendants: true, static: true }, { propertyName: "listCard", first: true, predicate: GuiListCardComponent, descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListGateway, decorators: [{
            type: Directive
        }], propDecorators: { listItem: [{
                type: ContentChild,
                args: [GuiListItemComponent, { static: true }]
            }], listCard: [{
                type: ContentChild,
                args: [GuiListCardComponent, { static: true }]
            }], source: [{
                type: Input
            }], template: [{
                type: Input
            }], cardTemplate: [{
                type: Input
            }], paging: [{
                type: Input
            }], view: [{
                type: Input
            }], fields: [{
                type: Input
            }], searching: [{
                type: Input
            }], localization: [{
                type: Input
            }], pageChanged: [{
                type: Output
            }], pageSizeChanged: [{
                type: Output
            }], searchPhraseChanged: [{
                type: Output
            }] } });

const guiListProviders = [];

class StructureReadModelRootId extends ReadModelRootId {
    constructor(id) {
        super(id);
    }
    toAggregateId() {
        return new StructureId(this.toString());
    }
}

class StructureId extends AggregateId {
    constructor(id) {
        super(id);
    }
    toReadModelRootId() {
        return new StructureReadModelRootId(this.getId());
    }
}

class StructureIdGenerator {
    // private increment = 0;
    generateId() {
        return RandomIdGenerator.generate();
    }
}

class ListViewTemplateArchive extends Archive {
    constructor() {
        super();
    }
}
ListViewTemplateArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewTemplateArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ListViewTemplateArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewTemplateArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewTemplateArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class ListViewCardTemplateArchive extends Archive {
    constructor() {
        super();
    }
}
ListViewCardTemplateArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewCardTemplateArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ListViewCardTemplateArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewCardTemplateArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewCardTemplateArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

const listViewProviders = [
    ListViewTemplateArchive,
    ListViewCardTemplateArchive
];

class Modifier {
    constructor(hostElement) {
        this.hostElement = hostElement;
    }
    getElement(htmlElement) {
        return this.createModifier(htmlElement);
    }
    getHost() {
        if (!this.hostElement) {
            throw new Error('Missing host element in DomRenderer constructor.');
        }
        return this.createModifier(this.hostElement);
    }
}

var _a$1;
class ClassModifier extends Modifier {
    constructor(htmlElement) {
        super(htmlElement);
        this.htmlElement = htmlElement;
    }
    createModifier(htmlElement) {
        return new ClassModifier.ClassModifier(htmlElement);
    }
}
// eslint-disable-next-line
ClassModifier.ClassModifier = (_a$1 = class {
        constructor(htmlElement) {
            this.htmlElement = htmlElement;
        }
        add(...classes) {
            this.addClassToDomElement(this.htmlElement, classes);
        }
        remove(...classes) {
            this.removeClassFromDomElement(this.htmlElement, classes);
        }
        clear() {
            this.htmlElement.removeAttribute(ClassModifier.ClassModifier.CLASS);
        }
        addClassToDomElement(htmlElement, classes) {
            for (let i = 0; i < classes.length; i++) {
                htmlElement.classList.add(classes[i]);
            }
        }
        removeClassFromDomElement(htmlElement, classes) {
            for (let i = 0; i < classes.length; i++) {
                htmlElement.classList.remove(classes[i]);
            }
        }
    },
    _a$1.CLASS = 'class',
    _a$1);

class GuiComponent {
    constructor(innerElementRef) {
        this.innerElementRef = innerElementRef;
        this.innerClassModifier = new ClassModifier(this.innerElementRef.nativeElement);
        this.addHostClass();
    }
    addClassToHost(className) {
        this.innerClassModifier.getHost().add(className);
    }
    removeClassFromHost(className) {
        this.innerClassModifier.getHost().remove(className);
    }
    hasChanged(prop) {
        return prop !== undefined && prop.currentValue !== undefined;
    }
    ifChanged(prop, callback) {
        if (this.hasChanged(prop)) {
            callback();
        }
    }
    addHostClass() {
        this.innerClassModifier.getHost().add(this.getSelectorName());
    }
}
GuiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
GuiComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: GuiComponent, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

class SmartComponent extends GuiComponent {
    constructor(detector, elementRef) {
        super(elementRef);
        this.detector = detector;
        this.viewInDom = false;
        this.unsubscribe$ = new HermesSubject();
    }
    ngAfterViewInit() {
        this.viewInDom = true;
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    reRender() {
        if (this.isViewInDom()) {
            this.detector.detectChanges();
        }
    }
    isViewInDom() {
        return this.viewInDom;
    }
    subscribe(stream$, callback) {
        stream$
            .pipe(this.takeUntil())
            .subscribe((streamValues) => {
            callback(streamValues);
            this.reRender();
        });
    }
    subscribeWithoutRender(stream$, callback) {
        stream$
            .pipe(this.takeUntil())
            .subscribe((streamValues) => {
            callback(streamValues);
        });
    }
    // for gate
    subscribeAndEmit(stream$, emitter, mapper = (value) => value) {
        stream$
            .pipe(this.takeUntil())
            .subscribe((value) => {
            emitter.emit(mapper(value));
        });
    }
    unsubscribe() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    takeUntil() {
        return hermesTakeUntil(this.unsubscribe$);
    }
}
SmartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SmartComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
SmartComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: SmartComponent, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SmartComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });

var PagingPosition;
(function (PagingPosition) {
    PagingPosition[PagingPosition["TOP"] = 0] = "TOP";
    PagingPosition[PagingPosition["BOTTOM"] = 1] = "BOTTOM";
})(PagingPosition || (PagingPosition = {}));

class StreamCloser {
    constructor() {
        this.unsubscribe$ = new HermesSubject();
    }
    takeUntil() {
        return hermesTakeUntil(this.unsubscribe$);
    }
    unsubscribe() {
        if (this.unsubscribe$.isCompleted) {
            return;
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}

var CssClass;
(function (CssClass) {
    CssClass["SELECTED"] = "selected";
    CssClass["PAGING_TOP_CLASS_NAME"] = "gui-paging-top";
    CssClass["PAGING_BOTTOM_CLASS_NAME"] = "gui-paging-bottom";
})(CssClass || (CssClass = {}));

class CssClassModifier {
    constructor() {
        this.classModifier = new ClassModifier();
    }
    select(htmlElement) {
        this.classModifier.getElement(htmlElement).add(CssClass.SELECTED);
    }
    unselect(htmlElement) {
        this.classModifier.getElement(htmlElement).remove(CssClass.SELECTED);
    }
    add(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).add(clazzName);
    }
    remove(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).remove(clazzName);
    }
    toggle(htmlElement) {
    }
}

class PagingWarehouse {
    constructor() {
    }
}

class PagingPublisher {
    constructor() {
    }
}

class SourceWarehouse {
    constructor() {
    }
}

class PagingDisplayModeArchive extends Archive {
    constructor() {
        super(PagingDisplayMode.BASIC);
    }
}
PagingDisplayModeArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingDisplayModeArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PagingDisplayModeArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingDisplayModeArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingDisplayModeArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class PureComponent extends GuiComponent {
    constructor(elementRef) {
        super(elementRef);
        this.subClassConstructor = this.constructor;
        this.subClassNgOnInit = this.ngOnInit;
        if (!this.hasConstructorOnlyElementRefInjected(arguments)) {
            this.throwError('it should not inject services');
        }
        if (this.subClassNgOnInit) {
            this.throwError('it should not use ngOnInit');
        }
    }
    hasConstructorOnlyElementRefInjected(args) {
        if (arguments.length > 1) {
            return false;
        }
        if (arguments.length === 1) {
            return this.isElementRef(arguments[0]);
        }
        return false;
    }
    isElementRef(elRef) {
        return elRef.nativeElement !== null;
    }
    throwError(reason) {
        throw new Error(`Component "${this.subClassConstructor.name}" is a PureComponent, ${reason}.`);
    }
}
PureComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PureComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
PureComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: PureComponent, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PureComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

class TranslationFacade {
}

class TranslationPipe {
    constructor(changeDetectorRef, translationService) {
        this.changeDetectorRef = changeDetectorRef;
        this.translationService = translationService;
        this.actualTranslationValue = '';
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    transform(key) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription =
            this.translationService
                .onTranslation()
                .subscribe((translation) => {
                const value = translation[key];
                if (!value) {
                    this.actualTranslationValue = key;
                }
                this.actualTranslationValue = value;
                this.changeDetectorRef.markForCheck();
            });
        return this.actualTranslationValue;
    }
}
TranslationPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TranslationPipe, deps: [{ token: i0.ChangeDetectorRef }, { token: TranslationFacade }], target: i0.ɵɵFactoryTarget.Pipe });
TranslationPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: TranslationPipe, name: "guiTranslate", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TranslationPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'guiTranslate',
                    pure: false
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: TranslationFacade }]; } });

class PagingNavigatorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
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
    getSelectorName() {
        return 'gui-paging-navigator';
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
}
PagingNavigatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingNavigatorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PagingNavigatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: PagingNavigatorComponent, selector: "div[gui-paging-navigator][paging]", inputs: { paging: "paging", sourceSize: "sourceSize" }, outputs: { nextPageChanged: "nextPageChanged", prevPageChanged: "prevPageChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<gui-button-group>\n\t<button (click)=\"prevPage()\"\n\t\t\t[disabled]=\"prevDisabled\"\n\t\t\tclass=\"gui-paging-navigator-prev gui-mr-5\"\n\t\t\tgui-button>\n\t\t{{ 'pagingPrevPage' | guiTranslate }}\n\t</button>\n\n\t<button (click)=\"nextPage()\"\n\t\t\t[disabled]=\"nextDisabled\"\n\t\t\tclass=\"gui-paging-navigator-next gui-mr-0\"\n\t\t\tgui-button>\n\t\t{{ 'pagingNextPage' | guiTranslate }}\n\t</button>\n</gui-button-group>\n", dependencies: [{ kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i1.FabricButtonGroupComponent, selector: "gui-button-group" }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingNavigatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-navigator][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-button-group>\n\t<button (click)=\"prevPage()\"\n\t\t\t[disabled]=\"prevDisabled\"\n\t\t\tclass=\"gui-paging-navigator-prev gui-mr-5\"\n\t\t\tgui-button>\n\t\t{{ 'pagingPrevPage' | guiTranslate }}\n\t</button>\n\n\t<button (click)=\"nextPage()\"\n\t\t\t[disabled]=\"nextDisabled\"\n\t\t\tclass=\"gui-paging-navigator-next gui-mr-0\"\n\t\t\tgui-button>\n\t\t{{ 'pagingNextPage' | guiTranslate }}\n\t</button>\n</gui-button-group>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { paging: [{
                type: Input
            }], sourceSize: [{
                type: Input
            }], nextPageChanged: [{
                type: Output
            }], prevPageChanged: [{
                type: Output
            }] } });

class PagingSelectComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.pageSizeChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        ifChanged(changes.paging, () => {
            if (this.paging) {
                this.selectPageSizes = this.getSelectPageSizes();
                this.selectPageSize = this.getSelectPageSize(this.paging.getPageSize());
            }
        });
    }
    changePageSize(pageSize) {
        this.pageSizeChanged.emit(+pageSize.value);
    }
    getSelectorName() {
        return 'gui-paging-select';
    }
    getSelectPageSizes() {
        const selectPageSizes = [], pageSizes = this.paging.getPageSizes();
        pageSizes.forEach((pageSize) => {
            const selectOption = this.getSelectPageSize(pageSize);
            selectPageSizes.push(selectOption);
        });
        return selectPageSizes;
    }
    getSelectPageSize(pageSize) {
        return { name: pageSize.toString(), value: pageSize.toString() };
    }
}
PagingSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingSelectComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PagingSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: PagingSelectComponent, selector: "div[gui-paging-select][paging]", inputs: { paging: "paging" }, outputs: { pageSizeChanged: "pageSizeChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<span class=\"gui-inline-block gui-mr-5\">\n\t{{ 'pagingItemsPerPage' | guiTranslate }}\n</span>\n\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"selectPageSizes\"\n\t\t\t[selected]=\"selectPageSize\"\n\t\t\t[width]=\"25\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-select][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<span class=\"gui-inline-block gui-mr-5\">\n\t{{ 'pagingItemsPerPage' | guiTranslate }}\n</span>\n\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"selectPageSizes\"\n\t\t\t[selected]=\"selectPageSize\"\n\t\t\t[width]=\"25\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { paging: [{
                type: Input
            }], pageSizeChanged: [{
                type: Output
            }] } });

class PagingStatsComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.addClassToHost('gui-mx-6');
    }
    ngOnChanges() {
        this.calculate();
    }
    calculate() {
        if (this.paging) {
            this.firstItemIndex = this.paging.getStart();
            this.lastItemIndex = this.paging.getEnd();
            this.sourceSize = this.paging.getSourceSize();
        }
    }
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
    getSelectorName() {
        return 'gui-paging-stats';
    }
}
PagingStatsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingStatsComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PagingStatsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: PagingStatsComponent, selector: "div[gui-paging-stats][paging]", inputs: { paging: "paging" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\t{{ 'pagingOf' | guiTranslate }}\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingStatsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-stats][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\t{{ 'pagingOf' | guiTranslate }}\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { paging: [{
                type: Input
            }] } });

class AlternativePagingNavigatorComponent extends PureComponent {
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
    getSelectorName() {
        return 'gui-paging-alternative-navigator';
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
}
AlternativePagingNavigatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: AlternativePagingNavigatorComponent, deps: [{ token: i0.ElementRef }, { token: StructureId }, { token: PagingPublisher }], target: i0.ɵɵFactoryTarget.Component });
AlternativePagingNavigatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: AlternativePagingNavigatorComponent, selector: "div[gui-paging-alternative-navigator][paging][sourceSize]", inputs: { paging: "paging", sourceSize: "sourceSize" }, outputs: { nextPageChanged: "nextPageChanged", prevPageChanged: "prevPageChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<button (click)=\"firstPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(-522.98 669.601) rotate(180)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"prevPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tclass=\"gui-paging-navigator-prev\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(5.77 10.351) rotate(180)\"/>\n\t</svg>\n</button>\n\n<ng-content></ng-content>\n\n<button (click)=\"nextPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tclass=\"gui-paging-navigator-next\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(0.311 0.311)\"/>\n\t</svg>\n</button>\n\n<button (click)=\"lastPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(534.061 -658.939)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n", dependencies: [{ kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: AlternativePagingNavigatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-alternative-navigator][paging][sourceSize]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<button (click)=\"firstPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(-522.98 669.601) rotate(180)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"prevPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tclass=\"gui-paging-navigator-prev\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(5.77 10.351) rotate(180)\"/>\n\t</svg>\n</button>\n\n<ng-content></ng-content>\n\n<button (click)=\"nextPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tclass=\"gui-paging-navigator-next\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(0.311 0.311)\"/>\n\t</svg>\n</button>\n\n<button (click)=\"lastPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(534.061 -658.939)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: StructureId }, { type: PagingPublisher }]; }, propDecorators: { paging: [{
                type: Input
            }], sourceSize: [{
                type: Input
            }], nextPageChanged: [{
                type: Output
            }], prevPageChanged: [{
                type: Output
            }] } });

class AlternativePagingPagesComponent extends PureComponent {
    constructor(elRef, structureId, pagingCommandService) {
        super(elRef);
        this.structureId = structureId;
        this.pagingCommandService = pagingCommandService;
        this.sourceSize = 0;
        this.numberOfVisiblePages = 3;
    }
    ngOnChanges(changes) {
        this.calculate();
    }
    calculate() {
        if (this.paging && this.sourceSize) {
            const numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
            this.currentPage = this.paging.getPage();
            this.pages = [];
            if (this.pages.length <= numberOfPages) {
                for (let i = 1; i <= numberOfPages; i++) {
                    this.pages.push(i);
                }
            }
        }
    }
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
    goToPage(pageNumber) {
        const currentPage = this.paging.getPage();
        this.pagingCommandService.goToPage(pageNumber, currentPage, this.structureId);
    }
    calculateVisiblePages(page) {
        return this.paging.calculateVisiblePages(this.currentPage, this.numberOfVisiblePages, page);
    }
    activePage(page) {
        return this.currentPage === page;
    }
    getSelectorName() {
        return 'gui-paging-alternative-pages';
    }
}
AlternativePagingPagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: AlternativePagingPagesComponent, deps: [{ token: i0.ElementRef }, { token: StructureId }, { token: PagingPublisher }], target: i0.ɵɵFactoryTarget.Component });
AlternativePagingPagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: AlternativePagingPagesComponent, selector: "div[gui-paging-alternative-pages][paging]", inputs: { paging: "paging", sourceSize: "sourceSize" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\"\n\t\t\t class=\"relative\">\n\t\t\t<div (click)=\"goToPage(page)\"\n\t\t\t\t class=\"gui-paging-page gui-select-none gui-cursor-pointer gui-py-0 gui-px-6 gui-font-base\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: AlternativePagingPagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-alternative-pages][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\"\n\t\t\t class=\"relative\">\n\t\t\t<div (click)=\"goToPage(page)\"\n\t\t\t\t class=\"gui-paging-page gui-select-none gui-cursor-pointer gui-py-0 gui-px-6 gui-font-base\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: StructureId }, { type: PagingPublisher }]; }, propDecorators: { paging: [{
                type: Input
            }], sourceSize: [{
                type: Input
            }] } });

class PagingComponent extends SmartComponent {
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
        this.subscribe(this.pagingDisplayModeArchive.on(), (mode) => {
            this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
        });
        this.subscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.paging = paging;
            this.calculatePagingVisibility();
        });
        this.subscribe(this.sourceWarehouse.onOriginSize(this.structureId), (size) => {
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
    getSelectorName() {
        return 'gui-paging';
    }
    calculatePagingVisibility() {
        this.isPagingVisible = this.paging && this.paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && this.paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && this.paging.isPagerBottom()));
    }
}
PagingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: CssClassModifier }, { token: StructureId }, { token: PagingWarehouse }, { token: PagingPublisher }, { token: SourceWarehouse }, { token: PagingDisplayModeArchive }], target: i0.ɵɵFactoryTarget.Component });
PagingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: PagingComponent, selector: "div[gui-paging][position]", inputs: { position: "position", minimal: "minimal" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"isPagingVisible && !alternativeDisplay\">\n\n\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t [paging]=\"paging\"\n\t\t\t gui-paging-select>\n\t\t</div>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-container>\n\n\t<ng-template #minimalTemplate>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-template>\n\n</ng-container>\n\n<ng-container *ngIf=\"isPagingVisible && alternativeDisplay\">\n\n\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t [paging]=\"paging\"\n\t\t gui-paging-select>\n\t</div>\n\n\t<div (nextPageChanged)=\"nextPage()\"\n\t\t (prevPageChanged)=\"prevPage()\"\n\t\t [paging]=\"paging\"\n\t\t [sourceSize]=\"sourceSize\"\n\t\t class=\"gui-flex gui-p-0\"\n\t\t gui-paging-alternative-navigator>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t class=\"gui-flex gui-justify-center\"\n\t\t\t gui-paging-alternative-pages>\n\t\t</div>\n\n\t</div>\n\n</ng-container>\n", styles: [".gui-paging-alternative-navigator .gui-button{-ms-flex-line-pack:center;align-content:center;background:transparent;display:-ms-flexbox;display:flex;font-size:14px;line-height:21px;margin:0 2px;padding:0}.gui-paging-alternative-navigator .gui-button svg{-ms-flex-item-align:center;align-self:center;height:12px;margin:-1px 2px 0;width:auto}.gui-paging-alternative-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-paging-alternative-navigator .gui-button:hover svg path{stroke:#333}.gui-paging-alternative-navigator .gui-button:disabled svg{opacity:.4}.gui-paging-alternative-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging-alternative-pages{line-height:21px}.gui-paging-alternative-pages .gui-paging-page{display:none}.gui-paging-alternative-pages .gui-paging-visible-page .gui-paging-page{display:block;font-family:Arial,serif}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging-bottom{border-top:1px solid;border-top-color:inherit}.gui-paging-top{border-bottom:1px solid;border-bottom-color:inherit}\n", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:#2224261a;font-size:14px}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: PagingNavigatorComponent, selector: "div[gui-paging-navigator][paging]", inputs: ["paging", "sourceSize"], outputs: ["nextPageChanged", "prevPageChanged"] }, { kind: "component", type: PagingSelectComponent, selector: "div[gui-paging-select][paging]", inputs: ["paging"], outputs: ["pageSizeChanged"] }, { kind: "component", type: PagingStatsComponent, selector: "div[gui-paging-stats][paging]", inputs: ["paging"] }, { kind: "component", type: AlternativePagingNavigatorComponent, selector: "div[gui-paging-alternative-navigator][paging][sourceSize]", inputs: ["paging", "sourceSize"], outputs: ["nextPageChanged", "prevPageChanged"] }, { kind: "component", type: AlternativePagingPagesComponent, selector: "div[gui-paging-alternative-pages][paging]", inputs: ["paging", "sourceSize"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging][position]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"isPagingVisible && !alternativeDisplay\">\n\n\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t [paging]=\"paging\"\n\t\t\t gui-paging-select>\n\t\t</div>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-container>\n\n\t<ng-template #minimalTemplate>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-template>\n\n</ng-container>\n\n<ng-container *ngIf=\"isPagingVisible && alternativeDisplay\">\n\n\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t [paging]=\"paging\"\n\t\t gui-paging-select>\n\t</div>\n\n\t<div (nextPageChanged)=\"nextPage()\"\n\t\t (prevPageChanged)=\"prevPage()\"\n\t\t [paging]=\"paging\"\n\t\t [sourceSize]=\"sourceSize\"\n\t\t class=\"gui-flex gui-p-0\"\n\t\t gui-paging-alternative-navigator>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t class=\"gui-flex gui-justify-center\"\n\t\t\t gui-paging-alternative-pages>\n\t\t</div>\n\n\t</div>\n\n</ng-container>\n", styles: [".gui-paging-alternative-navigator .gui-button{-ms-flex-line-pack:center;align-content:center;background:transparent;display:-ms-flexbox;display:flex;font-size:14px;line-height:21px;margin:0 2px;padding:0}.gui-paging-alternative-navigator .gui-button svg{-ms-flex-item-align:center;align-self:center;height:12px;margin:-1px 2px 0;width:auto}.gui-paging-alternative-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-paging-alternative-navigator .gui-button:hover svg path{stroke:#333}.gui-paging-alternative-navigator .gui-button:disabled svg{opacity:.4}.gui-paging-alternative-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging-alternative-pages{line-height:21px}.gui-paging-alternative-pages .gui-paging-page{display:none}.gui-paging-alternative-pages .gui-paging-visible-page .gui-paging-page{display:block;font-family:Arial,serif}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging-bottom{border-top:1px solid;border-top-color:inherit}.gui-paging-top{border-bottom:1px solid;border-bottom-color:inherit}\n", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:#2224261a;font-size:14px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: CssClassModifier }, { type: StructureId }, { type: PagingWarehouse }, { type: PagingPublisher }, { type: SourceWarehouse }, { type: PagingDisplayModeArchive }]; }, propDecorators: { position: [{
                type: Input
            }], minimal: [{
                type: Input
            }] } });

class PagingEventRepository extends EventRepository {
}

class Logger {
}

class StructureDomainEvent extends DomainEvent {
}

class PageChangedEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'PageChangedEvent');
    }
}

class StructureAggregateEvent extends AggregateEvent {
}

class PageChangedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId) {
        super(structureId, 'PageChangedAggregateEvent');
    }
    toDomainEvent() {
        return new PageChangedEvent(this.getAggregateId());
    }
}

class PagesizeChangedEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'PagesizeChangedEvent');
    }
}

class PagesizeChangedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId) {
        super(structureId, 'PagesizeChangedAggregateEvent');
    }
    toDomainEvent() {
        return new PagesizeChangedEvent(this.getAggregateId());
    }
}

class PagingManager {
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
    static default(logger) {
        return new PagingManager(false, 1, 25, [10, 25, 50, 100], false, true, 0, logger);
    }
    // TODO Remove
    static fromConfig(paging, logger) {
        const defaultPagingDefinition = PagingManager.default(logger), enabled = paging.enabled || defaultPagingDefinition.isEnabled(), page = paging.page || defaultPagingDefinition.getPage(), pageSize = paging.pageSize || defaultPagingDefinition.getPageSize(), pageSizes = paging.pageSizes || defaultPagingDefinition.getPageSizes(), pagerTop = paging.pagerTop || defaultPagingDefinition.isPagerTop(), pagerBottom = paging.pagerBottom || defaultPagingDefinition.isPagerBottom();
        return new PagingManager(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, 0, logger);
    }
    isEnabled() {
        return this.enabled;
    }
    isDisabled() {
        return !this.enabled;
    }
    getPage() {
        return this.page;
    }
    getPageSize() {
        return this.pageSize;
    }
    getPageSizes() {
        return this.pageSizes;
    }
    isPagerTop() {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerTop;
    }
    isPagerBottom() {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerBottom;
    }
    getSourceSize() {
        return this.sourceSize;
    }
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
    setSourceSize(size) {
        this.sourceSize = size;
    }
    nextPage() {
        let nextPage = this.page;
        if (!this.isNextPageDisabled()) {
            nextPage += 1;
        }
        this.page = nextPage;
    }
    prevPage() {
        let prevPage = this.page;
        if (!this.isPrevPageDisabled()) {
            prevPage -= 1;
        }
        this.page = prevPage;
    }
    changePageSize(pageSize) {
        if (this.pageSizes.find((ps) => ps === pageSize)) {
            this.setPage(1);
            this.setPageSize(pageSize);
        }
        return this.events;
    }
    isNextPageDisabled() {
        if (this.sourceSize === 0) {
            return true;
        }
        return this.page === Math.ceil(this.sourceSize / this.pageSize);
    }
    isPrevPageDisabled() {
        return this.page === 1;
    }
    calculateStart() {
        const firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (this.sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    }
    calculateEnd() {
        const lastItem = this.page * this.pageSize;
        if (this.sourceSize < lastItem) {
            return this.sourceSize;
        }
        return lastItem;
    }
    sample(source) {
        if (this.isDisabled()) {
            return source;
        }
        let start = this.calculateStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd());
    }
    clearEvents() {
        this.events.length = 0;
    }
    setPage(page) {
        this.page = page;
        this.events.push(new PageChangedAggregateEvent(new StructureId('TODO need to be changed')));
    }
    setPageSize(pageSize) {
        this.pageSize = pageSize;
        this.events.push(new PagesizeChangedAggregateEvent(new StructureId('TODO need to be changed')));
    }
}

class PagingManagerFactory {
    constructor(logger) {
        this.logger = logger;
    }
    createDefault() {
        return PagingManager.default(this.logger);
    }
    createFromConfig(config) {
        return PagingManager.fromConfig(config, this.logger);
    }
}
PagingManagerFactory.services = [Logger];

class StructureCommand extends Command {
}

class SetPagingCommand extends StructureCommand {
    constructor(structureId, config) {
        super(structureId, 'SetPagingCommand');
        this.config = config;
    }
    getPagingConfig() {
        return this.config;
    }
}

class ChangePagesizeCommand extends StructureCommand {
    constructor(structureId, pageSize) {
        super(structureId, 'ChangePagesizeCommand');
        this.pageSize = pageSize;
    }
    getPageSize() {
        return this.pageSize;
    }
}

class NextPageCommand extends StructureCommand {
    constructor(structureId) {
        super(structureId, 'NextPageCommand');
    }
}

class PrevPageCommand extends StructureCommand {
    constructor(structureId) {
        super(structureId, 'PrevPageCommand');
    }
}

class PagingDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    setPaging(paging, structureId) {
        this.commandDispatcher.dispatch(new SetPagingCommand(structureId, paging));
    }
    changePageSize(pageSize, structureId) {
        this.commandDispatcher.dispatch(new ChangePagesizeCommand(structureId, pageSize));
    }
    nextPage(structureId) {
        this.commandDispatcher.dispatch(new NextPageCommand(structureId));
    }
    prevPage(structureId) {
        this.commandDispatcher.dispatch(new PrevPageCommand(structureId));
    }
}

class PagingSetEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'PagingSetEvent');
    }
}

class SetPagingCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetPagingCommand;
    }
    handle(structureAggregate, command) {
        const pagingConfig = command.getPagingConfig();
        structureAggregate.changePaging(pagingConfig);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new PagingSetEvent(command.getAggregateId()));
    }
}

class NextPageEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'NextPageEvent');
    }
}

class NextPageCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return NextPageCommand;
    }
    handle(aggregate, command) {
        // missing implementation
        aggregate.nextPage();
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new NextPageEvent(command.getAggregateId()));
    }
}

class PrevPageEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'PrevPageEvent');
    }
}

class PrevPageCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return PrevPageCommand;
    }
    handle(structure, command) {
        structure.prevPage();
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new PrevPageEvent(command.getAggregateId()));
    }
}

class ChangePagesizeCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return ChangePagesizeCommand;
    }
    handle(structureAggregate, command) {
        const pageSize = command.getPageSize();
        structureAggregate.changePageSize(pageSize);
    }
    publish(aggregate, command) {
        const aggregateEvents = aggregate.getEvents();
        aggregateEvents.forEach((event) => {
            event.aggregateId = aggregate.getId();
        });
        this.publishAggregateEvents(aggregateEvents, command);
        aggregate.clearEvents();
    }
    publishAggregateEvents(events, command) {
        for (const event of events) {
            this.publishAggregateEvent(event, command);
        }
    }
    publishAggregateEvent(event, command) {
        switch (event.getType()) {
            case 'PageChangedAggregateEvent':
                const pageChangedEvent = new PageChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pageChangedEvent);
                break;
            case 'PagesizeChangedAggregateEvent':
                const pagesizeChangedEvent = new PagesizeChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pagesizeChangedEvent);
                break;
            case 'StructurePreparedEntitiesSetAggregateEvent':
                this.domainEventPublisher.publish(event.toDomainEvent());
                break;
            default:
                break;
        }
    }
}

const structureKey = 'StructureAggregate';

class PagingDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(PagingDispatcher);
        container.provide(PagingManagerFactory);
    }
    registerCommandHandlers() {
        return [
            SetPagingCommandHandler,
            NextPageCommandHandler,
            PrevPageCommandHandler,
            ChangePagesizeCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

let PagingModel = class PagingModel {
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
    isEnabled() {
        return this.enabled;
    }
    getPage() {
        return this.page;
    }
    getPageSize() {
        return this.pageSize;
    }
    getPageSizes() {
        return this.pageSizes;
    }
    isPagerTop() {
        return this.pagerTop;
    }
    isPagerBottom() {
        return this.pagerBottom;
    }
    isNextPageDisabled() {
        return this.isNextDisabled;
    }
    isPrevPageDisabled() {
        return this.isPrevDisabled;
    }
    getStart() {
        return this.start;
    }
    getEnd() {
        return this.end;
    }
    getSourceSize() {
        return this.sourceSize;
    }
    calculateVisiblePages(currentPage, numberOfVisiblePages, page) {
        return currentPage - numberOfVisiblePages < page && page < currentPage + numberOfVisiblePages;
    }
    sample(source) {
        let start = this.getStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.getEnd());
    }
    // TODO
    compare(target) {
        return JSON.stringify(this) === JSON.stringify(target);
    }
};
PagingModel = __decorate([
    ReadModelObject
], PagingModel);

class PagingConverter {
    convert(aggregate) {
        return new PagingModel(aggregate.isEnabled(), aggregate.getPage(), aggregate.getPageSize(), aggregate.getPageSizes(), aggregate.isPagerTop(), aggregate.isPagerBottom(), aggregate.isNextPageDisabled(), aggregate.isPrevPageDisabled(), aggregate.calculateStart(), aggregate.calculateEnd(), aggregate.getSourceSize());
    }
}

class StructureReadModelRepository extends Reactive {
    constructor() {
        super();
        this.domainEventBus = CoreContainer.resolve(DomainEventBus);
        this.domainEventBus
            .ofEvents(this.forEvents())
            .pipe(this.hermesTakeUntil())
            .subscribe((event) => {
            try {
                this.subs(event);
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
            }
        });
    }
}

class PagingRepository {
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    on(structureId) {
        return this.structureRepository
            .on(structureId)
            .pipe(hermesFilter((structure) => structure.getId().toString() === structureId.toString()), hermesMap((structure) => structure.getPaging()));
    }
}
PagingRepository.services = [StructureReadModelRepository];

class PagingDomainWarehouse extends PagingWarehouse {
    constructor(pagingRepository) {
        super();
        this.pagingRepository = pagingRepository;
    }
    onPaging(structureId) {
        return this.pagingRepository.on(structureId);
    }
    oncePaging(structureId) {
        return singleFromObservable(this.pagingRepository.on(structureId));
    }
}
PagingDomainWarehouse.services = [PagingRepository];

class PagingDomainPublisher extends PagingPublisher {
    constructor(pagingDispatcher) {
        super();
        this.pagingDispatcher = pagingDispatcher;
    }
    enable(structureId) {
        this.pagingDispatcher.setPaging({ enabled: true }, structureId);
    }
    disable(structureId) {
        this.pagingDispatcher.setPaging({ enabled: false }, structureId);
    }
    setPaging(paging, structureId) {
        this.pagingDispatcher.setPaging(paging, structureId);
    }
    changePageSize(pageSize, structureId) {
        this.pagingDispatcher.changePageSize(pageSize, structureId);
    }
    nextPage(structureId) {
        this.pagingDispatcher.nextPage(structureId);
    }
    prevPage(structureId) {
        this.pagingDispatcher.prevPage(structureId);
    }
    goToPage(pageNumber, currentPage, structureId) {
        if (currentPage < pageNumber) {
            while (currentPage !== pageNumber) {
                this.nextPage(structureId);
                currentPage += 1;
            }
        }
        else {
            while (currentPage !== pageNumber) {
                this.prevPage(structureId);
                currentPage -= 1;
            }
        }
    }
    changePagerTop(enabled, structureId) {
        this.pagingDispatcher.setPaging({ pagerTop: enabled }, structureId);
    }
    changePagerBottom(enabled, structureId) {
        this.pagingDispatcher.setPaging({ pagerBottom: enabled }, structureId);
    }
}
PagingDomainPublisher.services = [PagingDispatcher];

class PagingDomainEventRepository extends PagingEventRepository {
    constructor(pagingWarehouse) {
        super();
        this.pagingWarehouse = pagingWarehouse;
        this.eventBusToRemove = CoreContainer.resolve(DomainEventBus);
    }
    onPageChange(structureId) {
        return this.eventBusToRemove
            .ofEvents([
            PrevPageEvent,
            NextPageEvent,
            PageChangedEvent
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === structureId.toAggregateId().toString()), hermesSwitchMap((event) => {
            return this.pagingWarehouse
                .oncePaging(structureId.toAggregateId())
                .pipe(hermesMap((paging) => paging.getPage()));
        }));
    }
    onPageSizeChange(structureId) {
        return this.eventBusToRemove
            .ofEvents([
            PagesizeChangedEvent
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === structureId.toAggregateId().toString()), hermesSwitchMap((event) => {
            return this.pagingWarehouse
                .oncePaging(structureId.toAggregateId())
                .pipe(hermesMap((paging) => paging.getPageSize()));
        }));
    }
}
PagingDomainEventRepository.services = [PagingWarehouse];

class PagingApiModule {
    registerProviders(container) {
        container.provide(PagingPublisher, PagingDomainPublisher);
        container.provide(PagingWarehouse, PagingDomainWarehouse);
        container.provide(PagingEventRepository, PagingDomainEventRepository);
        container.provide(PagingRepository);
        container.provide(PagingConverter);
    }
}
const pagingInitializer = new DomainInitializer(new PagingApiModule(), new PagingDomainModule());

class Dictionary {
    constructor() {
        this.translation = new Map();
        this.resolver = (key, value) => value;
    }
    changeTranslation(change) {
        for (const key of Object.keys(change)) {
            this.translation.set(key, change[key]);
        }
    }
    getTranslation() {
        return Array.from(this.translation)
            .reduce((obj, [key, value]) => (Object.assign(obj, { [key]: this.resolver(key, value) })), {});
    }
    setResolver(resolver) {
        this.resolver = resolver;
    }
}

class TranslationDomainFacade extends TranslationFacade {
    constructor() {
        super();
        this.defaultTranslation = enTranslation;
        this.dictionary = new Dictionary();
        this.dictionary$ = new HermesReplaySubject(1);
    }
    getTranslation() {
        return this.dictionary.getTranslation();
    }
    onTranslation() {
        return this.dictionary$.toObservable();
    }
    setDefaultTranslation() {
        this.changeTranslationAndPropagate(this.defaultTranslation);
    }
    changeTranslation(change) {
        this.changeTranslationAndPropagate(change);
    }
    setResolver(resolver) {
        this.setResolverAndPropagate(resolver);
    }
    changeTranslationAndPropagate(change) {
        this.dictionary.changeTranslation(change);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
    setResolverAndPropagate(resolver) {
        this.dictionary.setResolver(resolver);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
}

class TranslationFeatureModule extends FeatureModule {
    static forComponent() {
        return [{ provide: TranslationFacade, useClass: TranslationDomainFacade }];
    }
}
TranslationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TranslationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
TranslationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: TranslationFeatureModule, declarations: [TranslationPipe], imports: [CommonModule], exports: [TranslationPipe] });
TranslationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TranslationFeatureModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TranslationFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        TranslationPipe
                    ],
                    exports: [
                        TranslationPipe
                    ]
                }]
        }] });

pagingInitializer.init();
function providePagingCommandInvoker() {
    return CoreContainer.resolve(PagingPublisher);
}
function providePagingWarehouse() {
    return CoreContainer.resolve(PagingWarehouse);
}
function providePagingEventRepository() {
    return CoreContainer.resolve(PagingEventRepository);
}
class PagingFeatureModule extends FeatureModule {
    static forComponent() {
        return [
            PagingDisplayModeArchive
        ];
    }
}
PagingFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
PagingFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: PagingFeatureModule, declarations: [PagingComponent,
        PagingNavigatorComponent,
        PagingSelectComponent,
        PagingStatsComponent,
        AlternativePagingNavigatorComponent,
        AlternativePagingPagesComponent], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule], exports: [PagingComponent,
        PagingNavigatorComponent,
        PagingSelectComponent,
        PagingStatsComponent,
        AlternativePagingNavigatorComponent,
        AlternativePagingPagesComponent] });
PagingFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingFeatureModule, providers: [
        { provide: PagingPublisher, useFactory: providePagingCommandInvoker },
        { provide: PagingWarehouse, useFactory: providePagingWarehouse },
        { provide: PagingEventRepository, useFactory: providePagingEventRepository }
    ], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        TranslationFeatureModule
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
                    ],
                    providers: [
                        { provide: PagingPublisher, useFactory: providePagingCommandInvoker },
                        { provide: PagingWarehouse, useFactory: providePagingWarehouse },
                        { provide: PagingEventRepository, useFactory: providePagingEventRepository }
                    ]
                }]
        }] });

class ListViewId extends AggregateId {
    constructor(id) {
        super(id);
    }
    toReadModelRootId() {
        return new ListViewReadModelRootId(this.getId());
    }
}

class ListViewReadModelRootId extends ReadModelRootId {
    constructor(id) {
        super(id);
    }
    toAggregateId() {
        return new ListViewId(this.getId());
    }
}

const filterContainerToken = 'Filter container token';

class CompositionReadModelRootId extends ReadModelRootId {
    constructor(id) {
        super(id);
    }
    toAggregateId() {
        return new CompositionId(this.toString());
    }
}

class CompositionId extends AggregateId {
    constructor(id) {
        super(id);
    }
    toReadModelRootId() {
        return new CompositionReadModelRootId(this.getId());
    }
}

class SchemaId extends AggregateId {
    constructor(id) {
        super(id);
    }
    toReadModelRootId() {
        return new SchemaReadModelRootId(this.getId());
    }
}

class SchemaReadModelRootId extends ReadModelRootId {
    constructor(id) {
        super(id);
    }
    toAggregateId() {
        return new SchemaId(this.getId());
    }
}

class LayoutComponent extends GuiComponent {
    constructor(elRef) {
        super(elRef);
    }
}
LayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LayoutComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
LayoutComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: LayoutComponent, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LayoutComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

class StructurePublisher {
    constructor() {
    }
}

class CreateListViewCommand extends CreateAggregateCommand {
    constructor(listViewId) {
        super(listViewId, 'CreateListViewCommand');
    }
}

class ListViewCommand extends Command {
}

class SetListViewModeCommand extends ListViewCommand {
    constructor(listViewId, mode) {
        super(listViewId, 'SetListViewModeCommand');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}

class ToggleListViewSelectorCommand extends ListViewCommand {
    constructor(listViewId, enabled) {
        super(listViewId, 'ToggleListViewSelectorCommand');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class ListViewDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    create(listViewId) {
        this.commandDispatcher.dispatch(new CreateListViewCommand(listViewId));
    }
    setMode(mode, listViewId) {
        this.commandDispatcher.dispatch(new SetListViewModeCommand(listViewId, mode));
    }
    toggleSelector(enabled, listViewId) {
        this.commandDispatcher.dispatch(new ToggleListViewSelectorCommand(listViewId, enabled));
    }
}

const listViewGlobalId = new ListViewReadModelRootId('-1');

class ListViewPublisher {
    constructor(listViewDispatcher) {
        this.listViewDispatcher = listViewDispatcher;
    }
    create(listViewReadModelRootId = listViewGlobalId) {
        this.listViewDispatcher.create(listViewReadModelRootId.toAggregateId());
    }
    setMode(mode, listViewReadModelRootId = listViewGlobalId) {
        this.listViewDispatcher.setMode(mode, listViewReadModelRootId.toAggregateId());
    }
    toggleSelector(enabled, listViewReadModelRootId = listViewGlobalId) {
        this.listViewDispatcher.toggleSelector(enabled, listViewReadModelRootId.toAggregateId());
    }
}
ListViewPublisher.services = [ListViewDispatcher];

class ListViewModeArchive extends AggregateArchive {
    constructor() {
        super(ListViewModeArchive.default);
    }
}
ListViewModeArchive.default = ListViewMode.LIST;

class ListViewSelectorArchive extends AggregateArchive {
    constructor() {
        super(ListViewSelectorArchive.default);
    }
}
ListViewSelectorArchive.default = false;

class ListViewWarehouse {
    constructor(listViewModeArchive, listViewSelectorArchive) {
        this.listViewModeArchive = listViewModeArchive;
        this.listViewSelectorArchive = listViewSelectorArchive;
    }
    onMode(id) {
        return this.listViewModeArchive.on(id);
    }
    onSelector(id) {
        return this.listViewSelectorArchive.on(id);
    }
}
ListViewWarehouse.services = [ListViewModeArchive, ListViewSelectorArchive];

class SearchPublisher {
    constructor() {
    }
}

class CellEditorManager {
    constructor(config) {
        this.enabled = false;
        this.rowEdit = () => true;
        this.cellEdit = () => true;
        if (config.enabled !== undefined) {
            this.enabled = config.enabled;
        }
        if (config.rowEdit !== undefined) {
            this.rowEdit = config.rowEdit;
        }
        if (config.cellEdit !== undefined) {
            this.cellEdit = config.cellEdit;
        }
    }
    isEnabled(value, item, index) {
        return this.enabled && this.rowEdit(value, item, index) && this.cellEdit(value, item, index);
    }
}

class StructureCellEditArchive extends AggregateArchive {
    constructor() {
        super(StructureCellEditArchive.default);
    }
}
StructureCellEditArchive.default = new CellEditorManager({ enabled: false });
StructureCellEditArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureCellEditArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class StructureWarehouse {
    constructor(structureRepository, structureCellEditArchive) {
        this.structureRepository = structureRepository;
        this.structureCellEditArchive = structureCellEditArchive;
    }
    on(structureId) {
        return this.structureRepository.on(structureId);
    }
    onEditManager(structureId) {
        return this.structureCellEditArchive
            .on(structureId);
    }
}
StructureWarehouse.services = [StructureReadModelRepository, StructureCellEditArchive];

class SearchWarehouse {
    constructor() {
    }
}

class StaticComponent extends GuiComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef);
        this.changeDetectorRef = changeDetectorRef;
    }
    ngOnInit() {
        this.changeDetectorRef.detach();
    }
}
StaticComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StaticComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
StaticComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StaticComponent, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StaticComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });

class IconComponent extends StaticComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
        this.addClassToHost('gui-icon');
    }
}
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: IconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
IconComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: IconComponent, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: IconComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });

class SearchIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-search-icon';
    }
}
SearchIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
SearchIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: SearchIconComponent, selector: "div[gui-search-icon]", usesInheritance: true, ngImport: i0, template: `
		<svg class="gui-search-icon-svg" xmlns="http://www.w3.org/2000/svg" width="10.231" height="10.601" viewBox="0 0 10.231 10.601">
			<line x2="1.77" y2="1.77" transform="translate(7.4 7.77)" fill="none" stroke-linecap="round"
				  stroke-linejoin="round" stroke-width="1.5"/>
			<circle cx="4.02" cy="4.02" r="4.02" transform="translate(0.5 0.5)" stroke-width="1"
					stroke-linecap="round" stroke-linejoin="round" fill="none"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-search-icon]',
                    template: `
		<svg class="gui-search-icon-svg" xmlns="http://www.w3.org/2000/svg" width="10.231" height="10.601" viewBox="0 0 10.231 10.601">
			<line x2="1.77" y2="1.77" transform="translate(7.4 7.77)" fill="none" stroke-linecap="round"
				  stroke-linejoin="round" stroke-width="1.5"/>
			<circle cx="4.02" cy="4.02" r="4.02" transform="translate(0.5 0.5)" stroke-width="1"
					stroke-linecap="round" stroke-linejoin="round" fill="none"/>
		</svg>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });

class SearchComponent extends SmartComponent {
    constructor(formBuilder, changeDetectorRef, elementRef, structureId, searchCommandDispatcher, structureWarehouse, searchWarehouse) {
        super(changeDetectorRef, elementRef);
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.structureWarehouse = structureWarehouse;
        this.searchWarehouse = searchWarehouse;
        const controlsConfig = {};
        controlsConfig[SearchComponent.FORM_SEARCH_NAME] = '';
        this.searchForm = this.formBuilder.group(controlsConfig);
    }
    ngOnInit() {
        this.observeChanges();
        this.subscribe(this.searchWarehouse.onPlaceholder(this.structureId), (placeholder) => {
            this.placeholder = placeholder;
        });
        this.subscribe(this.searchWarehouse.onSearchEnabled(this.structureId), (searchingEnabled) => {
            this.searchingEnabled = searchingEnabled;
        });
        this.subscribeWithoutRender(this.searchWarehouse.onPhrase(this.structureId), (phrase) => {
            if (phrase === undefined) {
                phrase = null;
            }
            const controlsConfig = {};
            controlsConfig[SearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== this.searchForm.get([SearchComponent.FORM_SEARCH_NAME]).value) {
                this.stopObserveChanges();
                this.searchForm.setValue(controlsConfig);
                this.observeChanges();
            }
        });
    }
    clear() {
        this.searchForm.reset();
    }
    getSelectorName() {
        return 'gui-search-bar';
    }
    observeChanges() {
        this.searchInputSubscription =
            fromRxJsObservable(this.searchForm
                .controls[SearchComponent.FORM_SEARCH_NAME]
                .valueChanges
                .pipe(debounceTime(200)))
                .pipe(this.takeUntil())
                .subscribe((phrase) => {
                this.searchCommandDispatcher.search(phrase, this.structureId);
            });
    }
    stopObserveChanges() {
        this.searchInputSubscription.unsubscribe();
    }
}
SearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
SearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchComponent, deps: [{ token: i1$1.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: SearchPublisher }, { token: StructureWarehouse }, { token: SearchWarehouse }], target: i0.ɵɵFactoryTarget.Component });
SearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: SearchComponent, selector: "div[gui-search-bar]", viewQueries: [{ propertyName: "formRef", first: true, predicate: ["formRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"searchingEnabled\">\n\t<form #formRef\n\t\t  [formGroup]=\"searchForm\"\n\t\t  class=\"gui-flex gui-relative gui-w-full\">\n\n\t\t<div gui-search-icon></div>\n\n\t\t<input [placeholder]=\"placeholder\"\n\t\t\t   class=\"gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21\"\n\t\t\t   formControlName=\"searchPhrase\">\n\n\t\t<span (click)=\"clear()\"\n\t\t\t  *ngIf=\"searchForm.controls['searchPhrase'].value\"\n\t\t\t  class=\"gui-clear-search-icon\">\n\t\t\t\t</span>\n\t</form>\n</ng-container>\n", styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg line,.gui-search-bar form:hover .gui-search-icon-svg circle{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg line,.gui-search-bar .gui-search-icon-svg circle{stroke:#ccc;transition:stroke .3s ease-in-out}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: SearchIconComponent, selector: "div[gui-search-icon]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-search-bar]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"searchingEnabled\">\n\t<form #formRef\n\t\t  [formGroup]=\"searchForm\"\n\t\t  class=\"gui-flex gui-relative gui-w-full\">\n\n\t\t<div gui-search-icon></div>\n\n\t\t<input [placeholder]=\"placeholder\"\n\t\t\t   class=\"gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21\"\n\t\t\t   formControlName=\"searchPhrase\">\n\n\t\t<span (click)=\"clear()\"\n\t\t\t  *ngIf=\"searchForm.controls['searchPhrase'].value\"\n\t\t\t  class=\"gui-clear-search-icon\">\n\t\t\t\t</span>\n\t</form>\n</ng-container>\n", styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg line,.gui-search-bar form:hover .gui-search-icon-svg circle{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg line,.gui-search-bar .gui-search-icon-svg circle{stroke:#ccc;transition:stroke .3s ease-in-out}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: SearchPublisher }, { type: StructureWarehouse }, { type: SearchWarehouse }]; }, propDecorators: { formRef: [{
                type: ViewChild,
                args: ['formRef', { read: ElementRef, static: false }]
            }] } });

class EmptySourceComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.addClassToHost('gui-py-23');
        this.addClassToHost('gui-px-6');
    }
    ngOnChanges(changes) {
        ifChanged(changes.items, () => {
            if (this.items.length === 0) {
                this.removeClassFromHost('gui-hidden');
                this.addClassToHost('gui-block');
            }
            else {
                this.removeClassFromHost('gui-block');
                this.addClassToHost('gui-hidden');
            }
        });
    }
    getSelectorName() {
        return 'gui-empty-source';
    }
}
EmptySourceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
EmptySourceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: { items: "items" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"items.length === 0\">\n\t{{'sourceEmpty' | guiTranslate}}\n</ng-container>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-empty-source][items]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"items.length === 0\">\n\t{{'sourceEmpty' | guiTranslate}}\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { items: [{
                type: Input
            }] } });

class ListViewItemComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.context = 'Template not provided';
        this.addClassToHost('gui-w-full');
        this.addClassToHost('gui-my-6');
        this.addClassToHost('gui-mx-0');
        this.addClassToHost('gui-block');
    }
    ngOnChanges() {
        if (this.template && this.item) {
            this.hasTemplateRef = this.template.hasTemplateRef();
            if (!this.hasTemplateRef) {
                this.context = this.template.getTemplateMethod()(this.item);
            }
        }
    }
    getSelectorName() {
        return 'gui-list-item';
    }
}
ListViewItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ListViewItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ListViewItemComponent, selector: "div[gui-list-view-item][item][template]", inputs: { item: "item", template: "template" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-item-container gui-py-8\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-item-container gui-py-8\"></div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-view-item][item][template]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-item-container gui-py-8\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-item-container gui-py-8\"></div>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { item: [{
                type: Input
            }], template: [{
                type: Input
            }] } });

class ListViewSourceComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, sourceWarehouse, listViewTemplateArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.sourceWarehouse = sourceWarehouse;
        this.listViewTemplateArchive = listViewTemplateArchive;
        this.source = [];
        this.addClassToHost('gui-block');
    }
    ngOnInit() {
        this.subscribe(this.sourceWarehouse.onEntities(this.structureId), (items) => {
            this.source = items.map(i => i.getSourceItem());
        });
        this.subscribe(this.listViewTemplateArchive.on(), (template) => {
            this.template = template;
        });
    }
    getSelectorName() {
        return 'gui-list-view-source';
    }
}
ListViewSourceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewSourceComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: SourceWarehouse }, { token: ListViewTemplateArchive }], target: i0.ɵɵFactoryTarget.Component });
ListViewSourceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ListViewSourceComponent, selector: "div[gui-list-view-source]", usesInheritance: true, ngImport: i0, template: "<div *ngFor=\"let element of source\"\n\t [item]=\"element\"\n\t [template]=\"template\"\n\t gui-list-view-item>\n</div>\n\n<div [items]=\"source\" gui-empty-source>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: ["items"] }, { kind: "component", type: ListViewItemComponent, selector: "div[gui-list-view-item][item][template]", inputs: ["item", "template"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewSourceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-view-source]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div *ngFor=\"let element of source\"\n\t [item]=\"element\"\n\t [template]=\"template\"\n\t gui-list-view-item>\n</div>\n\n<div [items]=\"source\" gui-empty-source>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: SourceWarehouse }, { type: ListViewTemplateArchive }]; } });

class ListViewCardItemComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.context = 'Template not provided';
        this.addClassToHost('gui-cursor-pointer');
        this.addClassToHost('gui-block');
        this.addClassToHost('gui-m-0');
        this.addClassToHost('gui-p-0');
        this.addClassToHost('gui-relative');
    }
    ngOnChanges() {
        if (this.template && this.item) {
            this.hasTemplateRef = this.template.hasTemplateRef();
            if (!this.hasTemplateRef) {
                this.context = this.template.getTemplateMethod()(this.item);
            }
        }
    }
    getSelectorName() {
        return 'gui-list-card';
    }
}
ListViewCardItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewCardItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ListViewCardItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ListViewCardItemComponent, selector: "div[gui-list-card-item][item][template]", inputs: { item: "item", template: "template" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\"></div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewCardItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-card-item][item][template]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\"></div>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { item: [{
                type: Input
            }], template: [{
                type: Input
            }] } });

class ListViewContainerCardComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.listCardTemplateArchive = listCardTemplateArchive;
        this.items = [];
        this.addClassToHost('gui-flex');
        this.addClassToHost('gui-flex-wrap');
        this.addClassToHost('gui-m-0');
        this.addClassToHost('gui-p-0');
        this.addClassToHost('gui-rounded');
    }
    ngOnInit() {
        this.subscribe(this.structureSourceWarehouse.onEntities(this.structureId), (items) => {
            this.items = items.map(i => i.getSourceItem());
        });
        this.subscribe(this.listCardTemplateArchive.on(), (template) => {
            this.cardTemplate = template;
            this.changeDetectorRef.detectChanges();
        });
    }
    getSelectorName() {
        return 'gui-list-container-card';
    }
}
ListViewContainerCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewContainerCardComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: SourceWarehouse }, { token: ListViewCardTemplateArchive }], target: i0.ɵɵFactoryTarget.Component });
ListViewContainerCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ListViewContainerCardComponent, selector: "div[gui-list-container-card]", usesInheritance: true, ngImport: i0, template: "<div *ngFor=\"let element of items\" [item]=\"element\"\n\t [template]=\"cardTemplate\"\n\t gui-list-card-item>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: ["items"] }, { kind: "component", type: ListViewCardItemComponent, selector: "div[gui-list-card-item][item][template]", inputs: ["item", "template"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewContainerCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-container-card]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div *ngFor=\"let element of items\" [item]=\"element\"\n\t [template]=\"cardTemplate\"\n\t gui-list-card-item>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: SourceWarehouse }, { type: ListViewCardTemplateArchive }]; } });

class ListViewContainerModeSelectComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, listViewReadModelRootId, listViewWarehouse, listViewModeRepository) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewWarehouse = listViewWarehouse;
        this.listViewModeRepository = listViewModeRepository;
        this.options = Object.keys(ListViewMode)
            .map((key) => ListViewMode[key])
            .filter((val) => !Number.isInteger(val))
            .map((val) => {
            return this.toGuiSelectOption(val);
        });
    }
    ngOnInit() {
        this.subscribe(this.listViewWarehouse.onMode(this.listViewReadModelRootId.toAggregateId()), (mode) => {
            this.listContainerMode = this.toGuiSelectOption(mode);
        });
    }
    changeContainerMode(mode) {
        const selectedMode = this.toListViewMode(mode.value);
        this.listViewModeRepository.next(this.listViewReadModelRootId.toAggregateId(), selectedMode);
    }
    getSelectorName() {
        return 'gui-list-mode-select';
    }
    toGuiSelectOption(value) {
        return { value, name: value };
    }
    toListViewMode(mode) {
        switch (mode) {
            case 'List':
                return ListViewMode.LIST;
            case 'Card':
                return ListViewMode.CARD;
            default:
                return ListViewMode.LIST;
        }
    }
}
ListViewContainerModeSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewContainerModeSelectComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: ListViewReadModelRootId }, { token: ListViewWarehouse }, { token: ListViewModeArchive }], target: i0.ɵɵFactoryTarget.Component });
ListViewContainerModeSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ListViewContainerModeSelectComponent, selector: "div[gui-list-mode-select]", usesInheritance: true, ngImport: i0, template: "<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t[options]=\"options\"\n\t\t\t[selected]=\"listContainerMode\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewContainerModeSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-mode-select]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t[options]=\"options\"\n\t\t\t[selected]=\"listContainerMode\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: ListViewReadModelRootId }, { type: ListViewWarehouse }, { type: ListViewModeArchive }]; } });

class ListViewLayoutComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, listViewReadModelRootId, listViewWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewWarehouse = listViewWarehouse;
        this.listModeEnabled = false;
        this.cardModeEnabled = false;
        this.selectorEnabled = false;
        this.searchBarEnabled = true;
    }
    ngOnInit() {
        this.subscribe(this.listViewWarehouse.onMode(this.listViewReadModelRootId.toAggregateId()), (mode) => {
            this.listModeEnabled = mode === ListViewMode.LIST;
            this.cardModeEnabled = mode === ListViewMode.CARD;
        });
        this.subscribe(this.listViewWarehouse.onSelector(this.listViewReadModelRootId.toAggregateId()), (enabled) => {
            this.selectorEnabled = enabled;
        });
    }
    getSelectorName() {
        return 'gui-list-view-layout';
    }
}
ListViewLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewLayoutComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: ListViewReadModelRootId }, { token: ListViewWarehouse }], target: i0.ɵɵFactoryTarget.Component });
ListViewLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ListViewLayoutComponent, selector: "div[gui-list-view-layout]", usesInheritance: true, ngImport: i0, template: "<div class=\"gui-flex\">\n\n\t<div *ngIf=\"searchBarEnabled\" class=\"gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto\" gui-search-bar></div>\n\n\t<!--\t\t\t<div gui-sorting-selector></div>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\n</div>\n<div class=\"gui-list-panel-top gui-items-center gui-flex gui-px-6\">\n\t<div *ngIf=\"selectorEnabled\" gui-list-mode-select></div>\n\n\t<div [minimal]=\"true\" [position]=\"0\" class=\"gui-ml-auto\" gui-paging></div>\n</div>\n\n<div *ngIf=\"listModeEnabled\" gui-list-view-source></div>\n\n<div *ngIf=\"cardModeEnabled\" gui-list-container-card></div>\n\n<div [position]=\"1\" class=\"gui-ml-auto\" gui-paging></div>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: PagingComponent, selector: "div[gui-paging][position]", inputs: ["position", "minimal"] }, { kind: "component", type: SearchComponent, selector: "div[gui-search-bar]" }, { kind: "component", type: ListViewSourceComponent, selector: "div[gui-list-view-source]" }, { kind: "component", type: ListViewContainerCardComponent, selector: "div[gui-list-container-card]" }, { kind: "component", type: ListViewContainerModeSelectComponent, selector: "div[gui-list-mode-select]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-view-layout]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-flex\">\n\n\t<div *ngIf=\"searchBarEnabled\" class=\"gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto\" gui-search-bar></div>\n\n\t<!--\t\t\t<div gui-sorting-selector></div>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\n</div>\n<div class=\"gui-list-panel-top gui-items-center gui-flex gui-px-6\">\n\t<div *ngIf=\"selectorEnabled\" gui-list-mode-select></div>\n\n\t<div [minimal]=\"true\" [position]=\"0\" class=\"gui-ml-auto\" gui-paging></div>\n</div>\n\n<div *ngIf=\"listModeEnabled\" gui-list-view-source></div>\n\n<div *ngIf=\"cardModeEnabled\" gui-list-container-card></div>\n\n<div [position]=\"1\" class=\"gui-ml-auto\" gui-paging></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: ListViewReadModelRootId }, { type: ListViewWarehouse }]; } });

/** @internal */
function listViewIdFactoryForList(generator) {
    return new ListViewReadModelRootId('gui-list-' + generator.generateId());
}
/** @internal */
function structureIdFactoryForList(generator) {
    return new StructureId('gui-list-' + generator.generateId());
}
/** @internal */
function compositionIdFactoryForList(generator) {
    return new CompositionId('gui-list-' + generator.generateId());
}
/** @internal */
function schemaIdFactoryForList(generator) {
    return new SchemaReadModelRootId('gui-list-' + generator.generateId());
}
const componentListProviders = [
    {
        provide: StructureId,
        useFactory: structureIdFactoryForList,
        deps: [
            StructureIdGenerator
        ]
    },
    {
        provide: CompositionId,
        useFactory: compositionIdFactoryForList,
        deps: [
            StructureIdGenerator
        ]
    },
    {
        provide: SchemaReadModelRootId,
        useFactory: schemaIdFactoryForList,
        deps: [
            StructureIdGenerator
        ]
    },
    {
        provide: ListViewReadModelRootId,
        useFactory: listViewIdFactoryForList,
        deps: [
            StructureIdGenerator
        ]
    },
    listViewProviders,
    PagingFeatureModule.forComponent(),
    TranslationFeatureModule.forComponent()
];
class ListViewComponent extends LayoutComponent {
    constructor(structureId, listViewReadModelRootId, elementRef, structurePublisher, listViewPublisher, translationFacade) {
        super(elementRef);
        this.structureId = structureId;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.elementRef = elementRef;
        this.addClassToHost('gui-generic');
        translationFacade.setDefaultTranslation();
        structurePublisher.create(this.structureId);
        listViewPublisher.create(this.listViewReadModelRootId);
    }
    getElementRef() {
        return this.elementRef;
    }
    getSelectorName() {
        return 'gui-list-view';
    }
}
ListViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewComponent, deps: [{ token: StructureId }, { token: ListViewReadModelRootId }, { token: i0.ElementRef }, { token: StructurePublisher }, { token: ListViewPublisher }, { token: TranslationFacade }], target: i0.ɵɵFactoryTarget.Component });
ListViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ListViewComponent, selector: "gui-list-view", host: { properties: { "id": "structureId.toString()" } }, providers: [
        {
            provide: StructureId,
            useFactory: structureIdFactoryForList,
            deps: [
                StructureIdGenerator
            ]
        },
        {
            provide: CompositionId,
            useFactory: compositionIdFactoryForList,
            deps: [
                StructureIdGenerator
            ]
        },
        {
            provide: SchemaReadModelRootId,
            useFactory: schemaIdFactoryForList,
            deps: [
                StructureIdGenerator
            ]
        },
        {
            provide: ListViewReadModelRootId,
            useFactory: listViewIdFactoryForList,
            deps: [
                StructureIdGenerator
            ]
        },
        listViewProviders,
        PagingFeatureModule.forComponent(),
        TranslationFeatureModule.forComponent(),
        {
            provide: filterContainerToken,
            useExisting: ListViewComponent
        }
    ], usesInheritance: true, ngImport: i0, template: "<div gui-list-view-layout></div>\n", styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-10{grid-row-gap:16px}.gui-grid-rows-gap-13{grid-row-gap:22px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-10{grid-column-gap:16px}.gui-grid-cols-gap-13{grid-column-gap:22px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.-gui-m-0{margin:0}.-gui-mx-0{margin-left:0;margin-right:0}.-gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.-gui-m-1{margin:-1px}.-gui-mx-1{margin-left:-1px;margin-right:-1px}.-gui-my-1{margin-bottom:-1px;margin-top:-1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.-gui-m-2{margin:-2px}.-gui-mx-2{margin-left:-2px;margin-right:-2px}.-gui-my-2{margin-bottom:-2px;margin-top:-2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.-gui-m-3{margin:-3px}.-gui-mx-3{margin-left:-3px;margin-right:-3px}.-gui-my-3{margin-bottom:-3px;margin-top:-3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.-gui-m-4{margin:-4px}.-gui-mx-4{margin-left:-4px;margin-right:-4px}.-gui-my-4{margin-bottom:-4px;margin-top:-4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.-gui-m-5{margin:-6px}.-gui-mx-5{margin-left:-6px;margin-right:-6px}.-gui-my-5{margin-bottom:-6px;margin-top:-6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.-gui-m-6{margin:-8px}.-gui-mx-6{margin-left:-8px;margin-right:-8px}.-gui-my-6{margin-bottom:-8px;margin-top:-8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.-gui-m-7{margin:-10px}.-gui-mx-7{margin-left:-10px;margin-right:-10px}.-gui-my-7{margin-bottom:-10px;margin-top:-10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.-gui-m-8{margin:-12px}.-gui-mx-8{margin-left:-12px;margin-right:-12px}.-gui-my-8{margin-bottom:-12px;margin-top:-12px}.gui-m-10{margin:16px}.gui-mx-10{margin-left:16px;margin-right:16px}.gui-my-10{margin-bottom:16px;margin-top:16px}.-gui-m-10{margin:-16px}.-gui-mx-10{margin-left:-16px;margin-right:-16px}.-gui-my-10{margin-bottom:-16px;margin-top:-16px}.gui-m-13{margin:22px}.gui-mx-13{margin-left:22px;margin-right:22px}.gui-my-13{margin-bottom:22px;margin-top:22px}.-gui-m-13{margin:-22px}.-gui-mx-13{margin-left:-22px;margin-right:-22px}.-gui-my-13{margin-bottom:-22px;margin-top:-22px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.-gui-m-23{margin:-42px}.-gui-mx-23{margin-left:-42px;margin-right:-42px}.-gui-my-23{margin-bottom:-42px;margin-top:-42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-ml-6{margin-left:8px}.gui-mt-0{margin-top:0}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-10{padding:16px}.gui-px-10{padding-left:16px;padding-right:16px}.gui-py-10{padding-bottom:16px;padding-top:16px}.gui-p-13{padding:22px}.gui-px-13{padding-left:22px;padding-right:22px}.gui-py-13{padding-bottom:22px;padding-top:22px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-text-center{text-align:center}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-list-view{border-color:#d6d6d6}.gui-list-view *,.gui-list-view *:after,.gui-list-view *:before{box-sizing:border-box}.gui-list-view input{font-size:13px;outline:0}.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon-svg{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;transition:.2s all}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px #00000026}.gui-list-container-card{border-top:1px solid #d6d6d6}\n", ".gui-list-item{border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px #00000026}@media (min-width: 480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width: 768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width: 992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width: 1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}\n", ".gui-list-view.gui-generic .gui-paging{border:0}\n"], dependencies: [{ kind: "component", type: ListViewLayoutComponent, selector: "div[gui-list-view-layout]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-list-view', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: StructureId,
                            useFactory: structureIdFactoryForList,
                            deps: [
                                StructureIdGenerator
                            ]
                        },
                        {
                            provide: CompositionId,
                            useFactory: compositionIdFactoryForList,
                            deps: [
                                StructureIdGenerator
                            ]
                        },
                        {
                            provide: SchemaReadModelRootId,
                            useFactory: schemaIdFactoryForList,
                            deps: [
                                StructureIdGenerator
                            ]
                        },
                        {
                            provide: ListViewReadModelRootId,
                            useFactory: listViewIdFactoryForList,
                            deps: [
                                StructureIdGenerator
                            ]
                        },
                        listViewProviders,
                        PagingFeatureModule.forComponent(),
                        TranslationFeatureModule.forComponent(),
                        {
                            provide: filterContainerToken,
                            useExisting: ListViewComponent
                        }
                    ], host: {
                        '[id]': 'structureId.toString()'
                    }, template: "<div gui-list-view-layout></div>\n", styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-10{grid-row-gap:16px}.gui-grid-rows-gap-13{grid-row-gap:22px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-10{grid-column-gap:16px}.gui-grid-cols-gap-13{grid-column-gap:22px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.-gui-m-0{margin:0}.-gui-mx-0{margin-left:0;margin-right:0}.-gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.-gui-m-1{margin:-1px}.-gui-mx-1{margin-left:-1px;margin-right:-1px}.-gui-my-1{margin-bottom:-1px;margin-top:-1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.-gui-m-2{margin:-2px}.-gui-mx-2{margin-left:-2px;margin-right:-2px}.-gui-my-2{margin-bottom:-2px;margin-top:-2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.-gui-m-3{margin:-3px}.-gui-mx-3{margin-left:-3px;margin-right:-3px}.-gui-my-3{margin-bottom:-3px;margin-top:-3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.-gui-m-4{margin:-4px}.-gui-mx-4{margin-left:-4px;margin-right:-4px}.-gui-my-4{margin-bottom:-4px;margin-top:-4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.-gui-m-5{margin:-6px}.-gui-mx-5{margin-left:-6px;margin-right:-6px}.-gui-my-5{margin-bottom:-6px;margin-top:-6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.-gui-m-6{margin:-8px}.-gui-mx-6{margin-left:-8px;margin-right:-8px}.-gui-my-6{margin-bottom:-8px;margin-top:-8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.-gui-m-7{margin:-10px}.-gui-mx-7{margin-left:-10px;margin-right:-10px}.-gui-my-7{margin-bottom:-10px;margin-top:-10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.-gui-m-8{margin:-12px}.-gui-mx-8{margin-left:-12px;margin-right:-12px}.-gui-my-8{margin-bottom:-12px;margin-top:-12px}.gui-m-10{margin:16px}.gui-mx-10{margin-left:16px;margin-right:16px}.gui-my-10{margin-bottom:16px;margin-top:16px}.-gui-m-10{margin:-16px}.-gui-mx-10{margin-left:-16px;margin-right:-16px}.-gui-my-10{margin-bottom:-16px;margin-top:-16px}.gui-m-13{margin:22px}.gui-mx-13{margin-left:22px;margin-right:22px}.gui-my-13{margin-bottom:22px;margin-top:22px}.-gui-m-13{margin:-22px}.-gui-mx-13{margin-left:-22px;margin-right:-22px}.-gui-my-13{margin-bottom:-22px;margin-top:-22px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.-gui-m-23{margin:-42px}.-gui-mx-23{margin-left:-42px;margin-right:-42px}.-gui-my-23{margin-bottom:-42px;margin-top:-42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-ml-6{margin-left:8px}.gui-mt-0{margin-top:0}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-10{padding:16px}.gui-px-10{padding-left:16px;padding-right:16px}.gui-py-10{padding-bottom:16px;padding-top:16px}.gui-p-13{padding:22px}.gui-px-13{padding-left:22px;padding-right:22px}.gui-py-13{padding-bottom:22px;padding-top:22px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-text-center{text-align:center}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-list-view{border-color:#d6d6d6}.gui-list-view *,.gui-list-view *:after,.gui-list-view *:before{box-sizing:border-box}.gui-list-view input{font-size:13px;outline:0}.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon-svg{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;transition:.2s all}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px #00000026}.gui-list-container-card{border-top:1px solid #d6d6d6}\n", ".gui-list-item{border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px #00000026}@media (min-width: 480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width: 768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width: 992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width: 1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}\n", ".gui-list-view.gui-generic .gui-paging{border:0}\n"] }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: ListViewReadModelRootId }, { type: i0.ElementRef }, { type: StructurePublisher }, { type: ListViewPublisher }, { type: TranslationFacade }]; } });

class Gate {
    constructor() {
        this.streamCloser = new StreamCloser();
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    ngOnDestroy() {
        this.streamCloser.unsubscribe();
        this.hermesUnsubscribe();
    }
    isDefined(propertyName, changes) {
        return changes[propertyName] !== undefined && changes[propertyName].currentValue !== undefined;
    }
    subscribeAndEmit(stream$, emitter) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((value) => {
            emitter.emit(value);
        });
    }
    unsubscribe() {
        this.streamCloser.unsubscribe();
    }
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    takeUntil() {
        return this.streamCloser.takeUntil();
    }
}
Gate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: Gate, deps: [], target: i0.ɵɵFactoryTarget.Directive });
Gate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: Gate, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: Gate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return []; } });

class PagingGate extends Gate {
    constructor(structureId, compositionId, pagingCommandInvoker, pagingEventRepository) {
        super();
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.pagingEventRepository = pagingEventRepository;
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.isDefined('paging', changes)) {
            let pagingConfig;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
            }
            this.pagingCommandInvoker.setPaging(pagingConfig, this.compositionId);
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.pagingEventRepository.onPageChange(this.structureId.toReadModelRootId()), this.pageChanged);
        this.subscribeAndEmit(this.pagingEventRepository.onPageSizeChange(this.structureId.toReadModelRootId()), this.pageSizeChanged);
    }
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
}
PagingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingGate, deps: [{ token: StructureId }, { token: CompositionId }, { token: PagingPublisher }, { token: PagingEventRepository }], target: i0.ɵɵFactoryTarget.Directive });
PagingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: PagingGate, inputs: { paging: "paging" }, outputs: { pageChanged: "pageChanged", pageSizeChanged: "pageSizeChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: StructureId }, { type: CompositionId }, { type: PagingPublisher }, { type: PagingEventRepository }]; }, propDecorators: { paging: [{
                type: Input
            }], pageChanged: [{
                type: Output
            }], pageSizeChanged: [{
                type: Output
            }] } });

class ListViewPagingGate extends PagingGate {
    constructor(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository) {
        super(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository);
    }
}
ListViewPagingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewPagingGate, deps: [{ token: StructureId }, { token: CompositionId }, { token: PagingPublisher }, { token: PagingEventRepository }], target: i0.ɵɵFactoryTarget.Directive });
ListViewPagingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ListViewPagingGate, selector: "gui-list-view[paging]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewPagingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[paging]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: CompositionId }, { type: PagingPublisher }, { type: PagingEventRepository }]; } });

class ListViewModeGate extends Gate {
    constructor(listViewReadModelRootId, listViewCommandDispatcher) {
        super();
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewCommandDispatcher = listViewCommandDispatcher;
    }
    ngOnChanges(changes) {
        if (this.isDefined('mode', changes)) {
            this.listViewCommandDispatcher.setMode(this.mode, this.listViewReadModelRootId);
        }
        if (this.isDefined('modeSelector', changes)) {
            this.listViewCommandDispatcher.toggleSelector(this.modeSelector, this.listViewReadModelRootId);
        }
    }
}
ListViewModeGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewModeGate, deps: [{ token: ListViewReadModelRootId }, { token: ListViewPublisher }], target: i0.ɵɵFactoryTarget.Directive });
ListViewModeGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ListViewModeGate, selector: "gui-list-view[mode]", inputs: { mode: "mode", modeSelector: "modeSelector" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewModeGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[mode]'
                }]
        }], ctorParameters: function () { return [{ type: ListViewReadModelRootId }, { type: ListViewPublisher }]; }, propDecorators: { mode: [{
                type: Input
            }], modeSelector: [{
                type: Input
            }] } });

class ListViewTemplateGate extends Gate {
    constructor(containerTemplateArchive, listCardTemplateArchive) {
        super();
        this.containerTemplateArchive = containerTemplateArchive;
        this.listCardTemplateArchive = listCardTemplateArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('template', changes)) {
            this.containerTemplateArchive.next(this.template);
        }
        if (this.isDefined('cardTemplate', changes)) {
            this.listCardTemplateArchive.next(this.cardTemplate);
        }
    }
}
ListViewTemplateGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewTemplateGate, deps: [{ token: ListViewTemplateArchive }, { token: ListViewCardTemplateArchive }], target: i0.ɵɵFactoryTarget.Directive });
ListViewTemplateGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ListViewTemplateGate, selector: "gui-list-view[mode]", inputs: { template: "template", cardTemplate: "cardTemplate" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewTemplateGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[mode]'
                }]
        }], ctorParameters: function () { return [{ type: ListViewTemplateArchive }, { type: ListViewCardTemplateArchive }]; }, propDecorators: { template: [{
                type: Input
            }], cardTemplate: [{
                type: Input
            }] } });

class FieldPublisher {
    constructor() {
    }
}

class ListViewFieldGate extends Gate {
    constructor(structureId, fieldCommandDispatcher) {
        super();
        this.structureId = structureId;
        this.fieldCommandDispatcher = fieldCommandDispatcher;
    }
    ngOnChanges(changes) {
        if (this.isDefined('fields', changes)) {
            this.fieldCommandDispatcher.initFields(this.fields, this.structureId);
        }
    }
}
ListViewFieldGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewFieldGate, deps: [{ token: StructureId }, { token: FieldPublisher }], target: i0.ɵɵFactoryTarget.Directive });
ListViewFieldGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ListViewFieldGate, selector: "gui-list-view[fields]", inputs: { fields: "fields" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewFieldGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[fields]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: FieldPublisher }]; }, propDecorators: { fields: [{
                type: Input
            }] } });

class SearchEventRepository extends EventRepository {
    constructor() {
        super();
    }
}

class SearchingGate extends Gate {
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super();
        this.structureId = structureId;
        this.searchEventRepository = searchEventRepository;
        this.searchCommandInvoker = searchCommandInvoker;
        this.searchPhraseChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.isDefined('searching', changes)) {
            let searching;
            if (typeof this.searching === 'boolean') {
                searching = {
                    enabled: this.searching
                };
            }
            else {
                searching = this.searching;
            }
            this.searchCommandInvoker.setSearchingConfig(searching, this.structureId);
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.searchEventRepository.onSearchPhrase(this.structureId.toReadModelRootId()), this.searchPhraseChanged);
    }
}
SearchingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchingGate, deps: [{ token: StructureId }, { token: SearchEventRepository }, { token: SearchPublisher }], target: i0.ɵɵFactoryTarget.Directive });
SearchingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: SearchingGate, inputs: { searching: "searching" }, outputs: { searchPhraseChanged: "searchPhraseChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchingGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: StructureId }, { type: SearchEventRepository }, { type: SearchPublisher }]; }, propDecorators: { searching: [{
                type: Input
            }], searchPhraseChanged: [{
                type: Output
            }] } });

class ListViewSearchingGate extends SearchingGate {
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super(structureId, searchEventRepository, searchCommandInvoker);
    }
}
ListViewSearchingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewSearchingGate, deps: [{ token: StructureId }, { token: SearchEventRepository }, { token: SearchPublisher }], target: i0.ɵɵFactoryTarget.Directive });
ListViewSearchingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ListViewSearchingGate, selector: "gui-list-view[searching]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewSearchingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[searching]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: SearchEventRepository }, { type: SearchPublisher }]; } });

class ListViewL10nGate extends Gate {
    constructor(translationService) {
        super();
        this.translationService = translationService;
    }
    ngOnChanges(changes) {
        if (this.isDefined('localization', changes)) {
            if (this.localization.translationResolver) {
                this.translationService.setResolver(this.localization.translationResolver);
            }
            if (this.localization.translation) {
                this.translationService.changeTranslation(this.localization.translation);
            }
        }
    }
}
ListViewL10nGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewL10nGate, deps: [{ token: TranslationFacade }], target: i0.ɵɵFactoryTarget.Directive });
ListViewL10nGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ListViewL10nGate, selector: "gui-list-view[localization]", inputs: { localization: "localization" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewL10nGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[localization]'
                }]
        }], ctorParameters: function () { return [{ type: TranslationFacade }]; }, propDecorators: { localization: [{
                type: Input
            }] } });

class SourcePublisher {
    constructor() {
    }
}

class EditedItemModel {
    constructor(after, before) {
        this.after = after;
        this.before = before;
    }
}

class StructureSourceItemEditedEvent extends StructureDomainEvent {
    constructor(aggregateId, beforeItem, afterItem) {
        super(aggregateId, { beforeItem, afterItem }, 'StructureSourceItemEditedEvent');
        this.beforeItem = beforeItem;
        this.afterItem = afterItem;
    }
    getBeforeItem() {
        return this.beforeItem;
    }
    getAfterItem() {
        return this.afterItem;
    }
}

class SourceEventService {
    constructor() {
        this.domainEventBus = CoreContainer.resolve(DomainEventBus);
    }
    onSourceEdited(structureId) {
        return this.domainEventBus
            .ofEvents([
            StructureSourceItemEditedEvent
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === structureId.toString()), hermesMap((event) => {
            const afterItem = event.getAfterItem().getSourceItem(), beforeItem = event.getBeforeItem().getSourceItem();
            return new EditedItemModel(afterItem, beforeItem);
        }));
    }
}

class SourceGate extends Gate {
    constructor(structureId, sourceCommandInvoker, sourceEventService) {
        super();
        this.structureId = structureId;
        this.sourceCommandInvoker = sourceCommandInvoker;
        this.sourceEventService = sourceEventService;
        this.source = [];
        this.items = [];
        this.sourceEdited = new EventEmitter();
    }
    ngOnChanges(changes) {
        /**
         * Setting source should be last step
         */
        if (this.isDefined('source', changes)) {
            this.sourceCommandInvoker.setOrigin(this.source, this.structureId);
        }
        if (this.isDefined('items', changes)) {
            this.sourceCommandInvoker.setOrigin(this.items, this.structureId);
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.sourceEventService.onSourceEdited(this.structureId), this.sourceEdited);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SourceGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceGate, deps: [{ token: StructureId }, { token: SourcePublisher }, { token: SourceEventService }], target: i0.ɵɵFactoryTarget.Directive });
SourceGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: SourceGate, inputs: { source: "source", items: "items" }, outputs: { sourceEdited: "sourceEdited" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: StructureId }, { type: SourcePublisher }, { type: SourceEventService }]; }, propDecorators: { source: [{
                type: Input
            }], items: [{
                type: Input
            }], sourceEdited: [{
                type: Output
            }] } });

class ListViewSourceGate extends SourceGate {
    constructor(structureId, sourceCommandService, sourceEventService) {
        super(structureId, sourceCommandService, sourceEventService);
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
    }
}
ListViewSourceGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewSourceGate, deps: [{ token: StructureId }, { token: SourcePublisher }, { token: SourceEventService }], target: i0.ɵɵFactoryTarget.Directive });
ListViewSourceGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ListViewSourceGate, selector: "gui-list-view[items]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewSourceGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[items]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: SourcePublisher }, { type: SourceEventService }]; } });

class GuiListComponent extends GuiListGateway {
    constructor(platformId) {
        super();
        this.platformId = platformId;
    }
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    onPageSizeChange(pageSize) {
        this.pageSizeChanged.emit(pageSize);
    }
    onSearchPhraseChange(phrase) {
        this.searchPhraseChanged.emit(phrase);
    }
}
GuiListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListComponent, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
GuiListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: GuiListComponent, selector: "gui-list", host: { properties: { "class.gui-list": "\"true\"" } }, providers: guiListProviders, usesInheritance: true, ngImport: i0, template: "<gui-list-view\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(searchPhraseChanged)=\"onSearchPhraseChange($event)\"\n\t[cardTemplate]=\"listCardTemplate\"\n\t[fields]=\"listFields\"\n\t[items]=\"source\"\n\t[localization]=\"localization\"\n\t[modeSelector]=\"listViewModeSelector\"\n\t[mode]=\"listViewMode\"\n\t[paging]=\"paging\"\n\t[searching]=\"searchConfig\"\n\t[template]=\"containerTemplate\"\n>\n</gui-list-view>\n", styles: [""], dependencies: [{ kind: "component", type: ListViewComponent, selector: "gui-list-view" }, { kind: "directive", type: ListViewPagingGate, selector: "gui-list-view[paging]" }, { kind: "directive", type: ListViewModeGate, selector: "gui-list-view[mode]", inputs: ["mode", "modeSelector"] }, { kind: "directive", type: ListViewTemplateGate, selector: "gui-list-view[mode]", inputs: ["template", "cardTemplate"] }, { kind: "directive", type: ListViewFieldGate, selector: "gui-list-view[fields]", inputs: ["fields"] }, { kind: "directive", type: ListViewSearchingGate, selector: "gui-list-view[searching]" }, { kind: "directive", type: ListViewL10nGate, selector: "gui-list-view[localization]", inputs: ["localization"] }, { kind: "directive", type: ListViewSourceGate, selector: "gui-list-view[items]" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-list', providers: guiListProviders, host: {
                        '[class.gui-list]': '"true"'
                    }, encapsulation: ViewEncapsulation.None, template: "<gui-list-view\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(searchPhraseChanged)=\"onSearchPhraseChange($event)\"\n\t[cardTemplate]=\"listCardTemplate\"\n\t[fields]=\"listFields\"\n\t[items]=\"source\"\n\t[localization]=\"localization\"\n\t[modeSelector]=\"listViewModeSelector\"\n\t[mode]=\"listViewMode\"\n\t[paging]=\"paging\"\n\t[searching]=\"searchConfig\"\n\t[template]=\"containerTemplate\"\n>\n</gui-list-view>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

class EmptySourceFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
EmptySourceFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
EmptySourceFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceFeatureModule, declarations: [EmptySourceComponent], imports: [CommonModule,
        TranslationFeatureModule], exports: [EmptySourceComponent] });
EmptySourceFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceFeatureModule, imports: [CommonModule,
        TranslationFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        TranslationFeatureModule
                    ],
                    declarations: [
                        EmptySourceComponent
                    ],
                    exports: [
                        EmptySourceComponent
                    ]
                }]
        }] });

const listViewGatewayDeclarations = [
    ListViewPagingGate,
    ListViewModeGate,
    ListViewTemplateGate,
    ListViewFieldGate,
    ListViewSearchingGate,
    ListViewL10nGate,
    ListViewSourceGate
];

class SetConfigSearchingCommand extends StructureCommand {
    constructor(structureId, searchConfig) {
        super(structureId, 'SetConfigSearchingCommand');
        this.searchConfig = searchConfig;
    }
    getConfig() {
        return this.searchConfig;
    }
}

class ConfigSearchingSetEvent extends StructureDomainEvent {
    constructor(aggregateId, enabled) {
        super(aggregateId, enabled, 'ConfigSearchingSetEvent');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class SetConfigSearchingCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetConfigSearchingCommand;
    }
    handle(aggregate, command) {
        const searchingConfig = command.getConfig();
        aggregate.setSearchingConfig(searchingConfig);
    }
    publish(aggregate, command) {
        const searchingConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigSearchingSetEvent(command.getAggregateId(), searchingConfig.enabled));
    }
}

class SetSearchPhraseCommand extends StructureCommand {
    constructor(structureId, phrase, initial) {
        super(structureId, 'SetSearchPhraseCommand');
        this.phrase = phrase;
        this.initial = initial;
    }
    getPhrase() {
        return this.phrase;
    }
    isInitial() {
        return this.initial;
    }
}

class SearchPhraseSetDomainEvent extends StructureDomainEvent {
    constructor(aggregateId, phrase, initial) {
        super(aggregateId, { phrase, initial }, 'SearchPhraseSetDomainEvent');
        this.phrase = phrase;
        this.initial = initial;
    }
    getPhrase() {
        return this.phrase;
    }
    isInitial() {
        return this.initial;
    }
}

class OriginSetEvent extends StructureDomainEvent {
    constructor(aggregateId, origin) {
        super(aggregateId, origin, 'OriginSetEvent');
        this.origin = origin;
    }
    getOrigin() {
        return this.origin;
    }
}

class StructureSummariesChangedEvent extends StructureDomainEvent {
    constructor(structureId, values) {
        super(structureId, values, 'StructureSummariesChangedEvent');
        this.values = values;
    }
    getSummaries() {
        return this.values;
    }
}

class StructurePreparedEntitiesSetEvent extends StructureDomainEvent {
    constructor(aggregateId, preparedItems) {
        super(aggregateId, preparedItems, 'StructurePreparedEntitiesSetEvent');
        this.preparedItems = preparedItems;
    }
    getPreparedItems() {
        return this.preparedItems;
    }
}

class SourceDomainEventPublisher {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    publish(events) {
        events.forEach((event) => {
            this.publishEvent(event);
        });
    }
    publishEvent(event) {
        if (event.getType() === 'StructureOriginChangedAggregateEvent') {
            const structureOriginChangedAggregateEvent = event;
            const domainEvent = new OriginSetEvent(structureOriginChangedAggregateEvent.getAggregateId(), structureOriginChangedAggregateEvent.getOrigin());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureSourceItemEditedAggregateEvent') {
            const structureSourceItemEditedAggregateEvent = event;
            const domainEvent = new StructureSourceItemEditedEvent(structureSourceItemEditedAggregateEvent.getAggregateId(), structureSourceItemEditedAggregateEvent.getBeforeItem(), structureSourceItemEditedAggregateEvent.getAfterItem());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureSummariesChangedAggregateEvent') {
            const structureSummariesChangedAggregateEvent = event;
            const domainEvent = new StructureSummariesChangedEvent(structureSummariesChangedAggregateEvent.getAggregateId(), structureSummariesChangedAggregateEvent.getSummaries());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructurePreparedEntitiesSetAggregateEvent') {
            const structurePreparedEntitiesSetAggregateEvent = event;
            const domainEvent = new StructurePreparedEntitiesSetEvent(structurePreparedEntitiesSetAggregateEvent.getAggregateId(), structurePreparedEntitiesSetAggregateEvent.getPreparedItems());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'UniqueFilterCalculatedAggregateEvent') {
            const uniqueFilterCalculatedAggregateEvent = event;
            const domainEvent = uniqueFilterCalculatedAggregateEvent.toDomainEvent();
            this.domainEventPublisher.publish(domainEvent);
        }
    }
}

class StructureSetSearchPhraseCommandHandler {
    constructor(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetSearchPhraseCommand;
    }
    handle(aggregate, command) {
        const phrase = command.getPhrase();
        aggregate.addSearchPhrase(phrase);
    }
    publish(aggregate, command) {
        const phrase = command.getPhrase(), initial = command.isInitial();
        this.domainEventPublisher.publish(new SearchPhraseSetDomainEvent(command.getAggregateId(), phrase, initial));
        this.structureSourceDomainEventPublisher.publish(aggregate.getEvents());
    }
}
StructureSetSearchPhraseCommandHandler.services = [SourceDomainEventPublisher];

var DataType;
(function (DataType) {
    DataType[DataType["UNKNOWN"] = 0] = "UNKNOWN";
    DataType[DataType["NUMBER"] = 1] = "NUMBER";
    DataType[DataType["STRING"] = 2] = "STRING";
    DataType[DataType["BOOLEAN"] = 3] = "BOOLEAN";
    DataType[DataType["DATE"] = 4] = "DATE";
    DataType[DataType["CUSTOM"] = 5] = "CUSTOM";
})(DataType || (DataType = {}));

class SearchManager {
    constructor() {
        this.searchFields = [];
        this.enabledDataTypes = [
            DataType.STRING
        ];
    }
    addSearchPhrase(fields, searchPhrase) {
        if (!searchPhrase) {
            this.searchFields = [];
            return;
        }
        const searchableFields = fields.filter((field) => {
            return this.enabledDataTypes.some((dt) => dt === field.getDataType());
        });
        if (searchableFields.length === 0) {
            return;
        }
        this.searchFields = searchableFields;
        this.searchPhrase = searchPhrase;
    }
    removeSearchFilters() {
        this.searchFields = [];
    }
    search(entities) {
        if (entities.length === 0 || this.searchFields.length === 0) {
            return entities;
        }
        const searchedItems = new Set();
        for (let i = 0; i < entities.length; i += 1) {
            this.searchFields
                .filter((field) => field.search(entities[i], this.searchPhrase))
                .forEach(() => {
                searchedItems.add(entities[i]);
            });
        }
        return Array.from(searchedItems);
    }
}

class SearchManagerFactory {
    create() {
        return new SearchManager();
    }
}

class SearchHighlightArchive extends AggregateArchive {
    constructor() {
        super(SearchHighlightArchive.HIGHLIGHTING);
    }
}
SearchHighlightArchive.HIGHLIGHTING = true;

class SearchPlaceholderArchive extends AggregateArchive {
    constructor() {
        super(SearchPlaceholderArchive.PLACEHOLDER);
    }
}
SearchPlaceholderArchive.PLACEHOLDER = 'Search...';

class SearchDispatcher {
    constructor(commandDispatcher, searchHighlightArchive, searchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.searchHighlightArchive = searchHighlightArchive;
        this.searchPlaceholderArchive = searchPlaceholderArchive;
    }
    setSearchingConfig(config, structureId) {
        if (config.highlighting !== undefined && config.highlighting !== null) {
            this.searchHighlightArchive.next(structureId, config.highlighting);
        }
        if (config.placeholder !== undefined && config.placeholder !== null) {
            this.searchPlaceholderArchive.next(structureId, config.placeholder);
        }
        if (config.phrase !== undefined && config.phrase !== null) {
            this.searchOnInit(config.phrase, structureId);
        }
        this.commandDispatcher.dispatch(new SetConfigSearchingCommand(structureId, config));
    }
    search(phrase, structureId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, false));
    }
    searchOnInit(phrase, structureId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, true));
    }
}
SearchDispatcher.services = [CommandDispatcher, SearchHighlightArchive, SearchPlaceholderArchive];

class SearchPhraseArchive extends AggregateArchive {
    constructor() {
        super(SearchPhraseArchive.SEARCH_PHRASE);
    }
}
SearchPhraseArchive.SEARCH_PHRASE = '';

class SearchPhraseSetEventHandler {
    constructor(searchPhraseRepository) {
        this.searchPhraseRepository = searchPhraseRepository;
    }
    forEvent() {
        return SearchPhraseSetDomainEvent;
    }
    handle(event) {
        if (event.ofMessageType('SearchPhraseSetDomainEvent')) {
            this.searchPhraseRepository.next(event.getAggregateId(), event.getPhrase());
        }
    }
}
SearchPhraseSetEventHandler.services = [SearchPhraseArchive];

class SearchingEnabledArchive extends AggregateArchive {
    constructor() {
        super(SearchingEnabledArchive.ENABLED);
    }
}
SearchingEnabledArchive.ENABLED = false;

class ConfigSearchingSetEventHandler {
    constructor(searchingEnabledArchive) {
        this.searchingEnabledArchive = searchingEnabledArchive;
    }
    forEvent() {
        return ConfigSearchingSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ConfigSearchingSetEvent')) {
            this.searchingEnabledArchive.next(event.getAggregateId(), event.isEnabled());
        }
    }
}
ConfigSearchingSetEventHandler.services = [SearchingEnabledArchive];

class FilterToggledEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'FilterToggledEvent');
    }
}

class RemoveSearchPhraseCommand extends StructureCommand {
    constructor(structureId) {
        super(structureId, 'RemoveSearchPhraseCommand');
    }
}

class RemoveSearchPhraseCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return RemoveSearchPhraseCommand;
    }
    handle(aggregate, command) {
        aggregate.removeSearchPhrase();
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new FilterToggledEvent(command.getAggregateId()));
    }
}

class SearchDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(SearchManagerFactory);
        container.provide(SearchDispatcher);
    }
    registerCommandHandlers() {
        return [
            SetConfigSearchingCommandHandler,
            StructureSetSearchPhraseCommandHandler,
            RemoveSearchPhraseCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            SearchPhraseSetEventHandler,
            ConfigSearchingSetEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

class SearchDomainWarehouse extends SearchWarehouse {
    constructor(searchingEnabledArchive, searchPhraseArchive, searchHighlightArchive, searchPlaceholderArchive) {
        super();
        this.searchingEnabledArchive = searchingEnabledArchive;
        this.searchPhraseArchive = searchPhraseArchive;
        this.searchHighlightArchive = searchHighlightArchive;
        this.searchPlaceholderArchive = searchPlaceholderArchive;
    }
    onSearchEnabled(structureId) {
        return this.searchingEnabledArchive.on(structureId);
    }
    onPhrase(structureId) {
        return this.searchPhraseArchive.on(structureId);
    }
    onHighlight(structureId) {
        return this.searchHighlightArchive.on(structureId);
    }
    onPlaceholder(structureId) {
        return this.searchPlaceholderArchive.on(structureId);
    }
}
SearchDomainWarehouse.services = [
    SearchingEnabledArchive,
    SearchPhraseArchive,
    SearchHighlightArchive,
    SearchPlaceholderArchive
];

class SearchDomainEventRepository extends SearchEventRepository {
    constructor() {
        super();
    }
    onSearchPhrase(structureId) {
        return this.onEvent(structureId, SearchPhraseSetDomainEvent)
            .pipe(hermesFilter((event) => event.isInitial() === false), hermesMap((event) => event.getPhrase()), hermesFilter((phrase) => phrase !== null));
    }
}

class SearchDomainPublisher extends SearchPublisher {
    constructor(searchDispatcher) {
        super();
        this.searchDispatcher = searchDispatcher;
    }
    setSearchingConfig(config, structureId) {
        this.searchDispatcher.setSearchingConfig(config, structureId);
    }
    search(phrase, structureId) {
        this.searchDispatcher.search(phrase, structureId);
    }
}
SearchDomainPublisher.services = [SearchDispatcher];

class SearchApiModule {
    registerProviders(container) {
        container.provide(SearchPublisher, SearchDomainPublisher);
        container.provide(SearchWarehouse, SearchDomainWarehouse);
        container.provide(SearchEventRepository, SearchDomainEventRepository);
        container.provide(SearchPhraseArchive);
        container.provide(SearchHighlightArchive);
        container.provide(SearchPlaceholderArchive);
        container.provide(SearchingEnabledArchive);
    }
}
const searchInitializer = new DomainInitializer(new SearchApiModule(), new SearchDomainModule());

searchInitializer.init();
function provideSearchCommandInvoker() {
    return CoreContainer.resolve(SearchPublisher);
}
function provideSearchWarehouse() {
    return CoreContainer.resolve(SearchWarehouse);
}
function provideSearchEventRepository() {
    return CoreContainer.resolve(SearchEventRepository);
}
class SearchFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SearchFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SearchFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SearchFeatureModule, declarations: [SearchIconComponent,
        SearchComponent], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule], exports: [SearchIconComponent,
        SearchComponent] });
SearchFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchFeatureModule, providers: [
        { provide: SearchPublisher, useFactory: provideSearchCommandInvoker },
        { provide: SearchWarehouse, useFactory: provideSearchWarehouse },
        { provide: SearchEventRepository, useFactory: provideSearchEventRepository }
    ], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        ReactiveFormsModule
                    ],
                    declarations: [
                        SearchIconComponent,
                        SearchComponent
                    ],
                    exports: [
                        SearchIconComponent,
                        SearchComponent
                    ],
                    providers: [
                        { provide: SearchPublisher, useFactory: provideSearchCommandInvoker },
                        { provide: SearchWarehouse, useFactory: provideSearchWarehouse },
                        { provide: SearchEventRepository, useFactory: provideSearchEventRepository }
                    ]
                }]
        }] });

class SortingSelectorComponent extends SmartComponent {
    constructor(detector, elementRef) {
        super(detector, elementRef);
        this.sortingOptions = [
            'Name: A-Z',
            'Name: Z-A',
            'Price: Low to High',
            'Price: High to Low',
            'None'
        ];
        this.selectedSorting = this.sortingOptions[0];
    }
    changeSorting(sorting) {
    }
    getSelectorName() {
        return 'gui-sorting-selector';
    }
}
SortingSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingSelectorComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
SortingSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: SortingSelectorComponent, selector: "div[gui-sorting-selector]", usesInheritance: true, ngImport: i0, template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-sorting-selector]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });

class SortingSelectorFeatureModule {
}
SortingSelectorFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingSelectorFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SortingSelectorFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SortingSelectorFeatureModule, declarations: [SortingSelectorComponent], imports: [CommonModule,
        FabricSelectModule], exports: [SortingSelectorComponent] });
SortingSelectorFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingSelectorFeatureModule, imports: [CommonModule,
        FabricSelectModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingSelectorFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricSelectModule
                    ],
                    declarations: [
                        SortingSelectorComponent
                    ],
                    exports: [
                        SortingSelectorComponent
                    ]
                }]
        }] });

class FilterIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-filter-icon';
    }
}
FilterIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FilterIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FilterIconComponent, selector: "div[gui-filter-icon]", usesInheritance: true, ngImport: i0, template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.23">
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="8.14" y1="3.62" x2="2.18" y2="3.62"/>
			<line class="cls-1" x1="6.71" y1="6.48" x2="3.62" y2="6.48"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-filter-icon]',
                    template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.23">
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="8.14" y1="3.62" x2="2.18" y2="3.62"/>
			<line class="cls-1" x1="6.71" y1="6.48" x2="3.62" y2="6.48"/>
		</svg>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });

class FieldWarehouse {
    constructor() {
    }
}

class FilterWarehouse {
    constructor() {
    }
}

class FilterPublisher {
    constructor() {
    }
}

class CompositionWarehouse {
    constructor() {
    }
}

class FilterTypeSelectorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.filterTypeSelected = new EventEmitter();
        this.filterTypesAsOptions = [];
        this.disabled = true;
    }
    ngOnChanges(changes) {
        this.ifChanged(changes.filterTypes, () => {
            this.filterTypesAsOptions = this.filterTypes.map((filter) => {
                return {
                    name: filter.getId().toString(),
                    value: filter.getName()
                };
            });
            this.disabled = this.filterTypesAsOptions.length === 0;
        });
    }
    onSelectChange(option) {
        const filterType = this.filterTypes.find((filterType) => {
            return filterType.getId().toString() === option.name;
        });
        this.filterTypeSelected.emit(filterType.getId());
    }
    getSelectorName() {
        return 'gui-filter-type-selector';
    }
}
FilterTypeSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterTypeSelectorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FilterTypeSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FilterTypeSelectorComponent, selector: "div[gui-filter-type-selector][filterTypes]", inputs: { filterTypes: "filterTypes" }, outputs: { filterTypeSelected: "filterTypeSelected" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterTypeSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-type-selector][filterTypes]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { filterTypes: [{
                type: Input
            }], filterTypeSelected: [{
                type: Output
            }] } });

class FilterValueComponent extends SmartComponent {
    constructor(detector, elementRef, formBuilder) {
        super(detector, elementRef);
        this.formBuilder = formBuilder;
        this.valueChanged = new EventEmitter();
        const controlsConfig = {};
        controlsConfig[FilterValueComponent.FORM_FILTER_VALUE] = '';
        this.filterForm = this.formBuilder.group(controlsConfig);
    }
    ngOnInit() {
        this.filterForm
            .controls[FilterValueComponent.FORM_FILTER_VALUE]
            .valueChanges
            // .pipe(
            // 	this.takeUntil()
            // )
            .subscribe((value) => {
            this.valueChanged.emit(value);
        });
    }
    getSelectorName() {
        return 'gui-filter-value';
    }
}
FilterValueComponent.FORM_FILTER_VALUE = 'filterValue';
FilterValueComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterValueComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
FilterValueComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FilterValueComponent, selector: "div[gui-filter-value]", outputs: { valueChanged: "valueChanged" }, viewQueries: [{ propertyName: "formRef", first: true, predicate: ["formRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<form #formRef\n\t  [formGroup]=\"filterForm\">\n\n\t<input formControlName=\"filterValue\"/>\n</form>\n", dependencies: [{ kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterValueComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-value]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<form #formRef\n\t  [formGroup]=\"filterForm\">\n\n\t<input formControlName=\"filterValue\"/>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1$1.FormBuilder }]; }, propDecorators: { formRef: [{
                type: ViewChild,
                args: ['formRef', { read: ElementRef, static: false }]
            }], valueChanged: [{
                type: Output
            }] } });

class FieldSelectorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.fieldSelected = new EventEmitter();
    }
    ngOnChanges(changes) {
        ifChanged(changes.fields, () => {
            this.fieldsAsOptions = this.fields.map((field) => {
                return {
                    name: field.getFieldId().toString(),
                    value: field.getName()
                };
            });
        });
    }
    onFieldSelected(fieldId) {
        const field = this.fields.find((field) => field.getFieldId().toString() === fieldId.name);
        this.fieldSelected.emit(field);
    }
    getSelectorName() {
        return 'gui-field-selector';
    }
}
FieldSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldSelectorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FieldSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FieldSelectorComponent, selector: "div[gui-field-selector][fields]", inputs: { fields: "fields" }, outputs: { fieldSelected: "fieldSelected" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<gui-select (optionChanged)="onFieldSelected($event)"
					[options]="fieldsAsOptions"
					[placeholder]="'Select column'">
		</gui-select>
	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldSelectorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-field-selector][fields]',
                    template: `
		<gui-select (optionChanged)="onFieldSelected($event)"
					[options]="fieldsAsOptions"
					[placeholder]="'Select column'">
		</gui-select>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { fields: [{
                type: Input
            }], fieldSelected: [{
                type: Output
            }] } });

class FilterMenuActiveFiltersComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.removedFilter = new EventEmitter();
        this.addClassToHost('gui-py-8');
    }
    remove(filter) {
        this.removedFilter.emit(filter.getFilterId());
    }
    getSelectorName() {
        return 'gui-filter-menu-active-filters';
    }
}
FilterMenuActiveFiltersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuActiveFiltersComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FilterMenuActiveFiltersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FilterMenuActiveFiltersComponent, selector: "div[gui-filter-menu-active-filters][activeFilters]", inputs: { activeFilters: "activeFilters" }, outputs: { removedFilter: "removedFilter" }, usesInheritance: true, ngImport: i0, template: `

		<div *ngIf="activeFilters && activeFilters.length > 0"
			 class=""
			 style="border-top: 1px dashed; border-bottom: 1px dashed">

			<h4>Active filters:</h4>

			<div *ngFor="let filter of activeFilters"
				 class="gui-flex gui-justify-between ">

				<div>
				<span [gui-tooltip]="'Column name ' + filter.getFieldName()">
					{{filter.getFieldName()}}
				</span>

					<span [gui-tooltip]="'Filter type ' + filter.getFilterTypeName()">
					{{filter.getFilterTypeName()}}
				</span>

					<span [gui-tooltip]="'Value ' + filter.getValue()">
					{{filter.getValue()}}
				</span>
				</div>


				<button (click)="remove(filter)">Remove</button>
			</div>

		</div>

		<br/>
		<br/>
		<br/>

	`, isInline: true, dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuActiveFiltersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-filter-menu-active-filters][activeFilters]',
                    template: `

		<div *ngIf="activeFilters && activeFilters.length > 0"
			 class=""
			 style="border-top: 1px dashed; border-bottom: 1px dashed">

			<h4>Active filters:</h4>

			<div *ngFor="let filter of activeFilters"
				 class="gui-flex gui-justify-between ">

				<div>
				<span [gui-tooltip]="'Column name ' + filter.getFieldName()">
					{{filter.getFieldName()}}
				</span>

					<span [gui-tooltip]="'Filter type ' + filter.getFilterTypeName()">
					{{filter.getFilterTypeName()}}
				</span>

					<span [gui-tooltip]="'Value ' + filter.getValue()">
					{{filter.getValue()}}
				</span>
				</div>


				<button (click)="remove(filter)">Remove</button>
			</div>

		</div>

		<br/>
		<br/>
		<br/>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { activeFilters: [{
                type: Input
            }], removedFilter: [{
                type: Output
            }] } });

class FilterMenuComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, fieldWarehouse, filterWarehouse, filterCommandInvoker, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.fieldWarehouse = fieldWarehouse;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.columns = [];
        this.fields = [];
        this.activeFilters = [];
        this.addClassToHost('gui-block');
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onActiveFilters(this.structureId), (activeFilters) => {
            this.activeFilters = activeFilters;
        });
        this.subscribe(this.filterWarehouse.onFilterTypes(this.structureId), (filterTypeMap) => {
            this.filterTypeMap = filterTypeMap;
        });
        this.subscribe(this.fieldWarehouse.onFields(this.structureId), (fieldReadModels) => {
            this.fields = fieldReadModels;
        });
        this.subscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (columns) => {
            this.columns = columns;
        });
    }
    onFieldSelect(field) {
        this.selectedField = field;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedField.getFieldId());
        this.reRender();
    }
    onFilterTypeSelect(filterTypeId) {
        this.selectedFilterTypeId = filterTypeId;
        this.reRender();
    }
    removeAllFilters() {
        this.filterCommandInvoker.removeAll(this.structureId);
    }
    onValueChanged(value) {
        this.selectedValue = value;
    }
    addFilter() {
        const fieldId = this.selectedField.getFieldId(), filterTypeId = this.selectedFilterTypeId, value = this.selectedValue;
        this.filterCommandInvoker.add(fieldId, filterTypeId, value, this.structureId);
        this.clearAddFilterForm();
    }
    onRemovedFilter(filterId) {
        event.preventDefault();
        this.filterCommandInvoker.remove(filterId, this.structureId);
    }
    removeFilter() {
    }
    clearAddFilterForm() {
        this.selectedColumn = null;
        this.selectedField = null;
        this.selectedFilterTypeId = null;
        this.selectedValue = null;
        this.reRender();
    }
    getSelectorName() {
        return 'gui-filter-menu';
    }
}
FilterMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: CompositionId }, { token: FieldWarehouse }, { token: FilterWarehouse }, { token: FilterPublisher }, { token: CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
FilterMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FilterMenuComponent, selector: "div[gui-filter-menu]", usesInheritance: true, ngImport: i0, template: "<!--<div>-->\n<!--\t<div gui-active-filter-list></div>-->\n<!--</div>-->\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<!--<div>-->\n<!--\t<div (fieldSelected)=\"onFieldSelect($event)\"-->\n<!--\t\t [fields]=\"fields\" gui-field-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedColumn\">-->\n<!--\t\t{{selectedColumn.getFieldId()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n<!--\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"-->\n<!--\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedFilterTypeId\">-->\n<!--\t\t{{selectedFilterTypeId.toString()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n\n<!--\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>-->\n\n<!--</div>-->\n\n<h1>Filter menu</h1>\n\n\n<div (removedFilter)=\"onRemovedFilter($event)\"\n\t [activeFilters]=\"activeFilters\"\n\t gui-filter-menu-active-filters>\n</div>\n\n<div class=\"gui-flex gui-flex-row gui-pb-12\">\n\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields\"\n\t\t gui-field-selector>\n\t</div>\n\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\"\n\t\t gui-filter-type-selector>\n\t</div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\"\n\t\t *ngIf=\"selectedFilterTypeId\"\n\t\t gui-filter-value>\n\t</div>\n\n\t<button (click)=\"addFilter()\">Filter</button>\n\t<button (click)=\"removeFilter()\">Remove</button>\n\n</div>\n\n<br/>\n<br/>\n<br/>\n\n<button\n\t[primary]=\"true\" gui-button>\n\tAdd filter\n</button>\n\n<br/>\n<br/>\n<br/>\n\n<div class=\"gui-flex gui-flex-row gui-justify-between gui-pt-12\">\n\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[outline]=\"false\"\n\t\t\tgui-button>\n\t\tClear filters\n\t</button>\n\n\t<!--\t<div>-->\n\t<!--\t\t<button (click)=\"close()\"-->\n\t<!--\t\t\t\t[outline]=\"false\" gui-button>-->\n\t<!--\t\t\tCancel-->\n\t<!--\t\t</button>-->\n\t<!--\t</div>-->\n</div>\n\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: FilterTypeSelectorComponent, selector: "div[gui-filter-type-selector][filterTypes]", inputs: ["filterTypes"], outputs: ["filterTypeSelected"] }, { kind: "component", type: FilterValueComponent, selector: "div[gui-filter-value]", outputs: ["valueChanged"] }, { kind: "component", type: FieldSelectorComponent, selector: "div[gui-field-selector][fields]", inputs: ["fields"], outputs: ["fieldSelected"] }, { kind: "component", type: FilterMenuActiveFiltersComponent, selector: "div[gui-filter-menu-active-filters][activeFilters]", inputs: ["activeFilters"], outputs: ["removedFilter"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-menu]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!--<div>-->\n<!--\t<div gui-active-filter-list></div>-->\n<!--</div>-->\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<!--<div>-->\n<!--\t<div (fieldSelected)=\"onFieldSelect($event)\"-->\n<!--\t\t [fields]=\"fields\" gui-field-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedColumn\">-->\n<!--\t\t{{selectedColumn.getFieldId()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n<!--\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"-->\n<!--\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedFilterTypeId\">-->\n<!--\t\t{{selectedFilterTypeId.toString()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n\n<!--\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>-->\n\n<!--</div>-->\n\n<h1>Filter menu</h1>\n\n\n<div (removedFilter)=\"onRemovedFilter($event)\"\n\t [activeFilters]=\"activeFilters\"\n\t gui-filter-menu-active-filters>\n</div>\n\n<div class=\"gui-flex gui-flex-row gui-pb-12\">\n\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields\"\n\t\t gui-field-selector>\n\t</div>\n\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\"\n\t\t gui-filter-type-selector>\n\t</div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\"\n\t\t *ngIf=\"selectedFilterTypeId\"\n\t\t gui-filter-value>\n\t</div>\n\n\t<button (click)=\"addFilter()\">Filter</button>\n\t<button (click)=\"removeFilter()\">Remove</button>\n\n</div>\n\n<br/>\n<br/>\n<br/>\n\n<button\n\t[primary]=\"true\" gui-button>\n\tAdd filter\n</button>\n\n<br/>\n<br/>\n<br/>\n\n<div class=\"gui-flex gui-flex-row gui-justify-between gui-pt-12\">\n\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[outline]=\"false\"\n\t\t\tgui-button>\n\t\tClear filters\n\t</button>\n\n\t<!--\t<div>-->\n\t<!--\t\t<button (click)=\"close()\"-->\n\t<!--\t\t\t\t[outline]=\"false\" gui-button>-->\n\t<!--\t\t\tCancel-->\n\t<!--\t\t</button>-->\n\t<!--\t</div>-->\n</div>\n\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: CompositionId }, { type: FieldWarehouse }, { type: FilterWarehouse }, { type: FilterPublisher }, { type: CompositionWarehouse }]; } });

class FilterMenuTriggerComponent extends SmartComponent {
    constructor(detector, elementRef, injector, drawerService, fabricDialogService, structureId, filterWarehouse, filterContainerRef) {
        super(detector, elementRef);
        this.injector = injector;
        this.drawerService = drawerService;
        this.fabricDialogService = fabricDialogService;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterContainerRef = filterContainerRef;
        this.activeFiltersExist = false;
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onActiveFilters(this.structureId), (activeFilters) => {
            this.activeFiltersExist = activeFilters.length > 0;
        });
    }
    openDrawer() {
        const elementRef = this.filterContainerRef.getElementRef();
        this.fabricDialogService.open({ component: FilterMenuComponent, injector: this.injector });
        // this.drawerService.open(elementRef, FilterMenuComponent, { injector: this.injector });
    }
    getSelectorName() {
        return 'gui-filter-menu-trigger';
    }
}
FilterMenuTriggerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuTriggerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Injector }, { token: i1.FabricDrawerService }, { token: i1.FabricDialogService }, { token: StructureId }, { token: FilterWarehouse }, { token: filterContainerToken }], target: i0.ɵɵFactoryTarget.Component });
FilterMenuTriggerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FilterMenuTriggerComponent, selector: "div[gui-filter-menu-trigger]", usesInheritance: true, ngImport: i0, template: "<div (click)=\"openDrawer()\"\n\t [gui-tooltip]=\"'Filters'\"\n\t class=\"gui-filter-icon-wrapper\">\n\n\t<div *ngIf=\"activeFiltersExist\" class=\"gui-filter-active\"></div>\n\n\t<div gui-filter-icon></div>\n</div>\n", styles: [".gui-filter-icon-wrapper{height:19px;margin-right:24px;position:relative;width:19px}.gui-filter-active{border:2px solid #aaa!important;border-radius:50%;height:27px;left:-6px;position:absolute;top:-6px;width:27px}.gui-filter-menu{width:600px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }, { kind: "component", type: FilterIconComponent, selector: "div[gui-filter-icon]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuTriggerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-menu-trigger]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div (click)=\"openDrawer()\"\n\t [gui-tooltip]=\"'Filters'\"\n\t class=\"gui-filter-icon-wrapper\">\n\n\t<div *ngIf=\"activeFiltersExist\" class=\"gui-filter-active\"></div>\n\n\t<div gui-filter-icon></div>\n</div>\n", styles: [".gui-filter-icon-wrapper{height:19px;margin-right:24px;position:relative;width:19px}.gui-filter-active{border:2px solid #aaa!important;border-radius:50%;height:27px;left:-6px;position:absolute;top:-6px;width:27px}.gui-filter-menu{width:600px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Injector }, { type: i1.FabricDrawerService }, { type: i1.FabricDialogService }, { type: StructureId }, { type: FilterWarehouse }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [filterContainerToken]
                }] }]; } });

class ColumnSelectorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.columnSelected = new EventEmitter();
    }
    onSelectChange(column) {
        this.columnSelected.emit(column);
    }
    getSelectorName() {
        return 'gui-column-selector';
    }
}
ColumnSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ColumnSelectorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ColumnSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ColumnSelectorComponent, selector: "div[gui-column-selector][columns]", inputs: { columns: "columns" }, outputs: { columnSelected: "columnSelected" }, usesInheritance: true, ngImport: i0, template: `

		Column:

		<gui-dropdown>
			<gui-dropdown-item *ngFor="let column of columns"
							   (click)="onSelectChange(column)">
				<ng-container
					*ngTemplateOutlet="column.viewTemplate;
						   context: column.context">
				</ng-container>
			</gui-dropdown-item>
		</gui-dropdown>

	`, isInline: true, dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i1.FabricDropdownComponent, selector: "gui-dropdown", inputs: ["disabled", "dropdownText", "isArrowEnabled", "placement", "width", "showOnHover"] }, { kind: "component", type: i1.DropdownItemComponent, selector: "gui-dropdown-item" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ColumnSelectorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-column-selector][columns]',
                    template: `

		Column:

		<gui-dropdown>
			<gui-dropdown-item *ngFor="let column of columns"
							   (click)="onSelectChange(column)">
				<ng-container
					*ngTemplateOutlet="column.viewTemplate;
						   context: column.context">
				</ng-container>
			</gui-dropdown-item>
		</gui-dropdown>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { columns: [{
                type: Input
            }], columnSelected: [{
                type: Output
            }] } });

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
    FabricTooltipModule,
    FabricToggleButtonModule,
    FabricInputModule,
    FabricDialogModule,
    FabricInlineDialogModule,
    FabricTabModule
];

class ActiveSearchComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, searchCommandDispatcher, searchWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.searchWarehouse = searchWarehouse;
    }
    ngOnInit() {
        this.subscribe(this.searchWarehouse.onPhrase(this.structureId), (phrase) => {
            this.phrase = phrase;
        });
    }
    clearSearch() {
        event.stopPropagation();
        this.searchCommandDispatcher.search('', this.structureId);
    }
    getSelectorName() {
        return 'gui-active-search';
    }
}
ActiveSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveSearchComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: SearchPublisher }, { token: SearchWarehouse }], target: i0.ɵɵFactoryTarget.Component });
ActiveSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ActiveSearchComponent, selector: "div[gui-active-search]", usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"phrase\">\n\t<div>\n\t\tActive search by:\n\t</div>\n\n\t<div>\n\t\t<gui-chip>{{phrase}}</gui-chip>\n\t</div>\n\n\t<div>\n\t\t<button (click)=\"clearSearch()\"\n\t\t\t\t[outline]=\"true\"\n\t\t\t\t[primary]=\"true\"\n\t\t\t\tgui-button>\n\t\t\tClear search\n\t\t</button>\n\t</div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i1.FabricChipComponent, selector: "gui-chip" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-active-search]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"phrase\">\n\t<div>\n\t\tActive search by:\n\t</div>\n\n\t<div>\n\t\t<gui-chip>{{phrase}}</gui-chip>\n\t</div>\n\n\t<div>\n\t\t<button (click)=\"clearSearch()\"\n\t\t\t\t[outline]=\"true\"\n\t\t\t\t[primary]=\"true\"\n\t\t\t\tgui-button>\n\t\t\tClear search\n\t\t</button>\n\t</div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: SearchPublisher }, { type: SearchWarehouse }]; } });

class ActiveFilterListComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandDispatcher) {
        super(changeDetectorRef, elementRef);
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandDispatcher = filterCommandDispatcher;
        this.activeFilters = [];
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onActiveFilters(this.structureId), (activeFilters) => {
            this.activeFilters = activeFilters;
        });
    }
    removeFilter(filter) {
        this.filterCommandDispatcher.remove(filter.getFilterId(), this.structureId);
    }
    getSelectorName() {
        return 'gui-active-filter-list';
    }
}
ActiveFilterListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterListComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: FilterWarehouse }, { token: FilterPublisher }], target: i0.ɵɵFactoryTarget.Component });
ActiveFilterListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ActiveFilterListComponent, selector: "div[gui-active-filter-list]", usesInheritance: true, ngImport: i0, template: "<div *ngFor=\"let filter of activeFilters\">\n\t{{filter.getText()}}\n\t<span (click)=\"removeFilter(filter)\">X</span>\n</div>\n\n<div gui-active-search></div>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: ActiveSearchComponent, selector: "div[gui-active-search]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-active-filter-list]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngFor=\"let filter of activeFilters\">\n\t{{filter.getText()}}\n\t<span (click)=\"removeFilter(filter)\">X</span>\n</div>\n\n<div gui-active-search></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: FilterWarehouse }, { type: FilterPublisher }]; } });

class FieldId extends EntityId {
    constructor(id) {
        super(id);
        this.id = id;
    }
    getId() {
        return this.id;
    }
    equals(fieldId) {
        return fieldId.toString() === this.id;
    }
    toString() {
        return this.id;
    }
}

class FilterIntegration {
    constructor(compositionWarehouse, filterCommandInvoker, filterWarehouse) {
        this.compositionWarehouse = compositionWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.filterWarehouse = filterWarehouse;
    }
    findFilterTypes(columnName, compositionId, structureId) {
        let filterTypes = [];
        this.compositionWarehouse
            .onTemplateColumns(compositionId)
            .pipe(hermesMap((cols) => {
            return cols.find((col) => {
                return col.getName() === columnName;
            });
        }), hermesFilter((col) => {
            return col !== undefined;
        }), hermesTake(1), hermesSwitchMap((col) => {
            return this.filterWarehouse
                .onFilterTypesForFieldId(new FieldId(col.columnFieldId.getId()), structureId);
        }))
            .subscribe((types) => {
            filterTypes = types.map((type) => type.getName());
        });
        return filterTypes;
    }
    findFilters(compositionId, structureId) {
        const filters = this.filterWarehouse.findFilters(structureId).getValueOrNullOrThrowError();
        const columnNames = this.compositionWarehouse.findColumnNames(compositionId);
        const obj = {};
        for (let i = 0; i < columnNames.length; i += 1) {
            obj[columnNames[i]] = filters.filter((filter) => {
                return filter.getFieldName() === columnNames[i];
            })
                .map((filter) => {
                return {
                    columnName: filter.getFieldName(),
                    filterId: filter.getFilterId().toString(),
                    type: filter.getFilterTypeName(),
                    value: filter.getValue()
                };
            });
        }
        return obj;
    }
    filter(columnName, filterType, value, compositionId, structureId) {
        this.compositionWarehouse
            .onTemplateColumns(compositionId)
            .pipe(hermesMap((cols) => {
            return cols.find((col) => {
                return col.getName() === columnName;
            });
        }), hermesFilter((col) => {
            return col !== undefined;
        }), hermesTake(1), hermesSwitchMap((col) => {
            return this.filterWarehouse
                .onceFilterTypeId(new FieldId(col.columnFieldId.getId()), filterType, structureId)
                .pipe(hermesMap((filterTypeId) => {
                return {
                    fieldId: new FieldId(col.columnFieldId.getId()),
                    filterTypeId: filterTypeId
                };
            }));
        }))
            .subscribe((params) => {
            const { fieldId, filterTypeId } = params;
            filterTypeId.ifPresent((ftId) => {
                this.filterCommandInvoker.add(fieldId, ftId, value, structureId);
            });
        });
    }
}
FilterIntegration.services = [CompositionWarehouse, FilterPublisher, FilterWarehouse];

class ToggleFilterCommand extends StructureCommand {
    constructor(structureId, fieldId, externalFilterId, filterValue) {
        super(structureId, 'ToggleFilterCommand');
        this.fieldId = fieldId;
        this.externalFilterId = externalFilterId;
        this.filterValue = filterValue;
    }
    getFieldId() {
        return this.fieldId;
    }
    getExternalFilterId() {
        return this.externalFilterId;
    }
    getFilterValue() {
        return this.filterValue;
    }
}

class ToggleFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return ToggleFilterCommand;
    }
    handle(aggregate, command) {
        const fieldId = command.getFieldId(), externalFieldId = command.getExternalFilterId(), filterValue = command.getFilterValue();
        aggregate.toggleFilter(fieldId, externalFieldId, filterValue);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new FilterToggledEvent(command.getAggregateId()));
    }
}

class AddFilterCommand extends StructureCommand {
    constructor(structureId, fieldId, filterTypeId, value) {
        super(structureId, 'AddFilterCommand');
        this.fieldId = fieldId;
        this.filterTypeId = filterTypeId;
        this.value = value;
    }
    getFieldId() {
        return this.fieldId;
    }
    getFilterTypeId() {
        return this.filterTypeId;
    }
    getValue() {
        return this.value;
    }
}

class AddFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return AddFilterCommand;
    }
    handle(structure, command) {
        const fieldId = command.getFieldId(), filterTypeId = command.getFilterTypeId(), value = command.getValue();
        structure.addFilter(fieldId, filterTypeId, value);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class RemoveAllFiltersCommand extends StructureCommand {
    constructor(structureId) {
        super(structureId, 'RemoveAllFiltersCommand');
    }
}

class RemoveAllFiltersCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return RemoveAllFiltersCommand;
    }
    handle(structure, command) {
        structure.removeAllFilters();
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class RemoveFilterCommand extends StructureCommand {
    constructor(structureId, filterId) {
        super(structureId, 'RemoveFilterCommand');
        this.filterId = filterId;
    }
    getFilterId() {
        return this.filterId;
    }
}

class RemoveFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return RemoveFilterCommand;
    }
    handle(structure, command) {
        const filterId = command.getFilterId();
        structure.removeFilter(filterId);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class SetConfigFilterCommand extends StructureCommand {
    constructor(structureId, filterConfig) {
        super(structureId, 'SetConfigFilterCommand');
        this.filterConfig = filterConfig;
    }
    getConfig() {
        return this.filterConfig;
    }
}

class ConfigFilterSetEvent extends StructureDomainEvent {
    constructor(aggregateId, enabled) {
        super(aggregateId, enabled, 'ConfigFilterSetEvent');
        this.enabled = enabled;
    }
    getEnabled() {
        return this.enabled;
    }
}

class SetConfigFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetConfigFilterCommand;
    }
    handle(aggregate, command) {
        const filterConfig = command.getConfig();
        aggregate.setFilterConfig(filterConfig);
    }
    publish(aggregate, command) {
        const filterConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigFilterSetEvent(command.getAggregateId(), filterConfig.enabled));
    }
}

class SetConfigQuickFilterCommand extends StructureCommand {
    constructor(structureId, quickFiltersConfig) {
        super(structureId, 'SetConfigQuickFilterCommand');
        this.quickFiltersConfig = quickFiltersConfig;
    }
    getConfig() {
        return this.quickFiltersConfig;
    }
}

class ConfigQuickFilterSetEvent extends StructureDomainEvent {
    constructor(aggregateId, enabled) {
        super(aggregateId, enabled, 'ConfigQuickFilterSetEvent');
        this.enabled = enabled;
    }
    getEnabled() {
        return this.enabled;
    }
}

class SetConfigQuickFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetConfigQuickFilterCommand;
    }
    handle(aggregate, command) {
        const quickFiltersConfig = command.getConfig();
        aggregate.setQuickFiltersConfig(quickFiltersConfig);
    }
    publish(aggregate, command) {
        const structureId = command.getAggregateId(), quickFiltersConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigQuickFilterSetEvent(structureId, quickFiltersConfig.enabled));
    }
}

class Filter extends Entity {
    constructor(filterId, fieldId, filterTypeId, filterValue) {
        super(filterId);
        this.filterId = filterId;
        this.fieldId = fieldId;
        this.filterTypeId = filterTypeId;
        this.filterValue = filterValue;
    }
    getFilterId() {
        return this.filterId;
    }
    getFilterTypeId() {
        return this.filterTypeId;
    }
    getFieldId() {
        return this.fieldId;
    }
    getFilterValue() {
        return this.filterValue;
    }
}

class FilterSettings {
    constructor(filteringEnabled = false, searchEnabled = false, quickFiltersEnabled = false) {
        this.filteringEnabled = false;
        this.searchEnabled = false;
        this.quickFiltersEnabled = false;
        this.filteringEnabled = filteringEnabled;
        this.searchEnabled = searchEnabled;
        this.quickFiltersEnabled = quickFiltersEnabled;
    }
    isFilteringEnabled() {
        return this.filteringEnabled;
    }
    isQuickFilteringEnabled() {
        return this.quickFiltersEnabled;
    }
    isSearchingEnabled() {
        return this.searchEnabled;
    }
    setFilterConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.filteringEnabled = config.enabled;
        }
    }
    setSearchingConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.searchEnabled = config.enabled;
        }
    }
    setQuickFiltersConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.quickFiltersEnabled = config.enabled;
        }
    }
}

class BaseFilterType extends EntityId {
    // private readonly filterTypeId: FilterTypeId;
    constructor(filterTypeId) {
        super(filterTypeId);
        // this.filterTypeId = filterTypeId;
    }
    // getId(): FilterTypeId {
    // 	return this.filterTypeId;
    // }
    toString() {
        return this.getId().toString();
    }
    filterMany(entities, field, value) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.filter((item) => {
            return this.filterEntity(item, field, value);
        });
    }
    filterOne(entity, field, value) {
        return this.filterEntity(entity, field, value);
    }
}

class ContainsFilterType extends BaseFilterType {
    constructor(filterTypeId) {
        super(filterTypeId);
    }
    getName() {
        return 'Contains';
    }
    filterEntity(entity, field, value) {
        const fieldValue = field.getValue(entity);
        return !!fieldValue.includes(value);
    }
}

class FilterTypeId extends EntityId {
    constructor(id) {
        super(id);
        this.id = id;
    }
    toString() {
        return this.id;
    }
}

class FilterTypeIdGenerator {
    generate() {
        FilterTypeIdGenerator.index += 1;
        return new FilterTypeId(`${FilterTypeIdGenerator.index}`);
    }
}
FilterTypeIdGenerator.index = 0;

class FilterTypeModel {
    constructor(id, name) {
        this.filterTypeId = id;
        this.name = name;
    }
    getId() {
        return this.filterTypeId;
    }
    getName() {
        return this.name;
    }
}

class FilterTypeManager {
    constructor(fields) {
        this.fieldIds = [];
        this.map = new WeakMap();
        this.filterTypeMap = new WeakMap();
        this.dataTypeToFilterType = new Map();
        this.filterTypeIdGenerator = new FilterTypeIdGenerator();
        this.assignFilterTypes();
        this.addFields(fields);
    }
    getFilterType(filterTypeId) {
        return this.filterTypeMap.get(filterTypeId);
    }
    getFieldIdsToFilterTypes() {
        const map = new Map();
        for (const fieldId of this.fieldIds) {
            const filterTypes = this.map.get(fieldId), readModels = filterTypes.map(f => {
                return new FilterTypeModel(f.getId(), f.getName());
            });
            map.set(fieldId.toString(), readModels);
        }
        return map;
    }
    addFields(fields) {
        for (const field of fields) {
            this.addField(field);
        }
    }
    addField(field) {
        const fieldId = field.getId(), dataType = field.getDataType();
        const filterTypesFromDataType = this.dataTypeToFilterType.get(dataType);
        this.fieldIds.push(fieldId);
        this.map.set(fieldId, Array.from(filterTypesFromDataType));
    }
    assignFilterTypes() {
        this.assignFilterTypesForDataTypeUnknown();
        this.assignFilterTypesForDataTypeNumber();
        this.assignFilterTypesForDataTypeString();
        this.assignFilterTypesForDataTypeBoolean();
        this.assignFilterTypesForDataTypeDate();
        this.assignFilterTypesForDataTypeCustom();
    }
    assignFilterTypesForDataTypeUnknown() {
        this.dataTypeToFilterType.set(DataType.UNKNOWN, []);
    }
    assignFilterTypesForDataTypeNumber() {
        this.dataTypeToFilterType.set(DataType.NUMBER, []);
    }
    assignFilterTypesForDataTypeString() {
        const filterTypes = [
            new ContainsFilterType(this.generateId())
        ];
        this.dataTypeToFilterType.set(DataType.STRING, filterTypes);
        this.addFilterTypes(filterTypes);
    }
    assignFilterTypesForDataTypeBoolean() {
        this.dataTypeToFilterType.set(DataType.BOOLEAN, []);
    }
    assignFilterTypesForDataTypeDate() {
        this.dataTypeToFilterType.set(DataType.DATE, []);
    }
    assignFilterTypesForDataTypeCustom() {
        this.dataTypeToFilterType.set(DataType.CUSTOM, []);
    }
    generateId() {
        return this.filterTypeIdGenerator.generate();
    }
    addFilterTypes(filterTypes) {
        for (const filterType of filterTypes) {
            this.filterTypeMap.set(filterType.getId(), filterType);
        }
    }
}

class FilterId extends EntityId {
    constructor(filterId) {
        super(filterId);
    }
    toString() {
        return this.getId();
    }
}

class FilterIdGenerator {
    static generateId() {
        return new FilterId(`${FilterIdGenerator.index}`);
    }
}
FilterIdGenerator.index = 0;

class ActiveFilterModel {
    constructor(filterId, fieldName, filterTypeName, value) {
        this.filterId = filterId;
        this.fieldName = fieldName;
        this.filterTypeName = filterTypeName;
        this.value = value;
    }
    getText() {
        return `${this.fieldName}: ${this.filterTypeName}: ${this.value}`;
    }
    getFilterId() {
        return this.filterId;
    }
    getFieldName() {
        return this.fieldName;
    }
    getFilterTypeName() {
        return this.filterTypeName;
    }
    getValue() {
        return this.value;
    }
}

class FilterManager {
    constructor() {
        this.filterSettings = new FilterSettings();
        // string -> FilterId
        this.filters = new Map();
        this.activeFilters = [];
    }
    getSettings() {
        return this.filterSettings;
    }
    getAll() {
        return Array.from(this.filters)
            .map((arr) => arr[1]);
    }
    getAllActiveFilters(fields) {
        return this.activeFilters
            .map((af) => {
            return new ActiveFilterModel(af.getFilterId(), (fields.get(af.getFieldId().toString())).getName(), this.filterTypeManager.getFilterType(af.getFilterTypeId()).getName(), af.getFilterValue());
        });
    }
    getFilterTypes() {
        return this.filterTypeManager.getFieldIdsToFilterTypes();
    }
    assignFilterTypes(fields) {
        this.filterTypeManager = new FilterTypeManager(fields);
    }
    add(fieldId, filterTypeId, value) {
        const filter = new Filter(FilterIdGenerator.generateId(), fieldId, filterTypeId, value);
        this.activeFilters.push(filter);
    }
    filter(entities, fields) {
        let filteredEntities = Array.from(entities);
        for (const filter of this.activeFilters) {
            const filterTypeId = filter.getFilterTypeId(), filterType = this.getFilterType(filterTypeId), value = filter.getFilterValue();
            filteredEntities = filterType.filterMany(filteredEntities, fields.get(filter.getFieldId().toString()), value);
        }
        return filteredEntities;
    }
    removeAll() {
        this.activeFilters.length = 0;
    }
    remove(filterId) {
        this.activeFilters =
            this.activeFilters.filter((filter) => {
                return filter.getFilterId() !== filterId;
            });
    }
    getFilterType(filterTypeId) {
        return this.filterTypeManager.getFilterType(filterTypeId);
    }
}

class FilterManagerFactory {
    create(enabled = false) {
        return new FilterManager();
    }
}

class QuickFilterEnabledArchive extends AggregateArchive {
    constructor() {
        super(QuickFilterEnabledArchive.default);
    }
}
QuickFilterEnabledArchive.default = false;

class ConfigQuickFilterSetEventHandler {
    constructor(quickFilterEnabledArchive) {
        this.quickFilterEnabledArchive = quickFilterEnabledArchive;
    }
    forEvent() {
        return ConfigQuickFilterSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ConfigQuickFilterSetEvent')) {
            this.quickFilterEnabledArchive.next(event.getAggregateId(), event.getEnabled());
        }
    }
}
ConfigQuickFilterSetEventHandler.services = [QuickFilterEnabledArchive];

class FilterEnabledArchive extends AggregateArchive {
    constructor() {
        super(FilterEnabledArchive.default);
    }
}
FilterEnabledArchive.default = false;

class ConfigFilterSetEventHandler {
    constructor(filterEnabledArchive) {
        this.filterEnabledArchive = filterEnabledArchive;
    }
    forEvent() {
        return ConfigFilterSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ConfigFilterSetEvent')) {
            this.filterEnabledArchive.next(event.getAggregateId(), event.getEnabled());
        }
    }
}
ConfigFilterSetEventHandler.services = [FilterEnabledArchive];

class FilterTypeCollectionModel {
    constructor(map) {
        this.map = map;
    }
    getFilterTypes(fieldId) {
        const result = this.map.get(fieldId.toString());
        if (result === undefined) {
            return [];
        }
        else {
            return result;
        }
    }
}

class FilterTypeArchive extends AggregateArchive {
    constructor() {
        super(FilterTypeArchive.default);
    }
}
FilterTypeArchive.default = new FilterTypeCollectionModel(new Map());

class FilterTypesInitedEvent extends StructureDomainEvent {
    constructor(aggregateId, map) {
        super(aggregateId, map, 'FilterTypesInitedEvent');
        this.map = map;
    }
    getMap() {
        return this.map;
    }
}

class ActiveFilterArchive extends AggregateArchive {
    constructor() {
        super(ActiveFilterArchive.default);
    }
}
ActiveFilterArchive.default = [];

const filterDiContainer = createContainer();
filterDiContainer.provide(ActiveFilterArchive);
filterDiContainer.provide(FilterTypeArchive);
const FilterDiContainer = filterDiContainer;

class FilterTypeConfigFilterSetEventHandler {
    constructor() {
        this.filterTypeArchive = FilterDiContainer.resolve(FilterTypeArchive);
    }
    forEvent() {
        return FilterTypesInitedEvent;
    }
    handle(filterTypesInitedEvent) {
        if (filterTypesInitedEvent.ofMessageType('FilterTypesInitedEvent')) {
            const map = filterTypesInitedEvent.getMap();
            this.filterTypeArchive.next(filterTypesInitedEvent.getAggregateId(), new FilterTypeCollectionModel(map));
        }
    }
}

class ActiveFiltersSetEvent extends StructureDomainEvent {
    constructor(structureId, filters) {
        super(structureId, filters, 'ActiveFiltersSetEvent');
        this.filters = filters;
    }
    getFilters() {
        return this.filters;
    }
}

class ActiveFiltersSetEventHandler {
    constructor() {
        this.activeFilterRepository = FilterDiContainer.resolve(ActiveFilterArchive);
    }
    forEvent() {
        return ActiveFiltersSetEvent;
    }
    handle(activeFiltersSetEvent) {
        if (activeFiltersSetEvent.ofMessageType('ActiveFiltersSetEvent')) {
            const activeFilters = activeFiltersSetEvent.getFilters();
            this.activeFilterRepository.next(activeFiltersSetEvent.getAggregateId(), activeFilters);
        }
    }
}

class UniqueFilterCalculatedEvent extends StructureDomainEvent {
    constructor(aggregateId, map) {
        super(aggregateId, map, 'UniqueFilterCalculatedEvent');
        this.map = map;
    }
    getUniqueValues() {
        return this.map;
    }
}

class UniqueValueCollectionModel {
    constructor(map) {
        this.map = new Map();
        this.allSelected = new Map();
        this.allDisabled = new Map();
        this.map = map;
        this.calculateSelection();
    }
    getValues(fieldId) {
        return this.map.get(fieldId.toString());
    }
    areAllSelected(fieldId) {
        return this.allSelected.get(fieldId.toString());
    }
    areAllDisabled(fieldId) {
        return this.allDisabled.get(fieldId.toString());
    }
    isSelectAllChecked(fieldId) {
        return this.areAllSelected(fieldId);
    }
    isIndeterminate(fieldId) {
        return !(this.areAllSelected(fieldId) || this.areAllDisabled(fieldId));
    }
    calculateSelection() {
        for (const key of Array.from(this.map.keys())) {
            const values = this.map.get(key);
            this.allSelected.set(key, !values.some((r) => !r.isEnabled()));
            this.allDisabled.set(key, !values.some((r) => r.isEnabled()));
        }
    }
}

class UniqueValueCollectionArchive extends AggregateArchive {
    constructor() {
        super(UniqueValueCollectionArchive.default);
    }
}
UniqueValueCollectionArchive.default = new UniqueValueCollectionModel(new Map());

class UniqueValueModel {
    constructor(id, value, enabled) {
        this.id = id;
        this.value = value;
        this.enabled = enabled;
    }
    getId() {
        return this.id;
    }
    getValue() {
        return this.value;
    }
    geDisplayValue() {
        return this.displayValue;
    }
    isEnabled() {
        return this.enabled;
    }
}

class UniqueFilterCalculatedEventHandler {
    constructor(uniqueValuesRepository) {
        this.uniqueValuesRepository = uniqueValuesRepository;
    }
    forEvent() {
        return UniqueFilterCalculatedEvent;
    }
    handle(calculatedEvent) {
        if (calculatedEvent.ofMessageType('UniqueFilterCalculatedEvent')) {
            const uvRM = new Map();
            calculatedEvent.getUniqueValues()
                .forEach((values, key) => {
                const valuesRM = values.map((uv) => {
                    return new UniqueValueModel(uv.getId(), uv.getDisplayValue(), uv.isEnabled());
                });
                uvRM.set(key, valuesRM);
            });
            const uniqueValues = new UniqueValueCollectionModel(uvRM);
            this.uniqueValuesRepository.next(calculatedEvent.getAggregateId(), uniqueValues);
        }
    }
}
UniqueFilterCalculatedEventHandler.services = [UniqueValueCollectionArchive];

class FieldsInitedEvent extends StructureDomainEvent {
    constructor(aggregateId, fieldConfigs, // TODO merge
    fields) {
        super(aggregateId, { fieldConfigs, fields }, 'FieldsInitedEvent');
        this.fieldConfigs = fieldConfigs;
        this.fields = fields;
    }
    getFields() {
        return this.fields;
    }
}

// TODO Remove
class FilterTypeFieldsInitedEventHandler {
    // constructor(private readonly filterTypeManagerRepository: FilterTypeManagerRepository,
    // 			private readonly domainEventPublisher: DomainEventPublisher) {
    // }
    forEvent() {
        return FieldsInitedEvent;
    }
    handle(fieldsInitedEvent) {
        // if (fieldsInitedEvent.ofMessageType('FieldsInitedEvent')) {
        //
        // 	const fields = fieldsInitedEvent.getFields();
        //
        // 	const manager = new FilterTypeManager(fields);
        //
        // 	this.filterTypeManagerRepository.next(fieldsInitedEvent.getAggregateId(), manager);
        //
        // 	this.domainEventPublisher.publish(new FilterTypesInitedEvent(fieldsInitedEvent.getAggregateId(), manager.getFieldIdsToFieldTypes()));
        // }
    }
}

class UnselectAllUniqueFilterCommand extends StructureCommand {
    constructor(structureId, fieldId) {
        super(structureId, 'UnselectAllUniqueFilterCommand');
        this.fieldId = fieldId;
    }
    getFieldId() {
        return this.fieldId;
    }
}

class UnselectAllUniqueFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return UnselectAllUniqueFilterCommand;
    }
    handle(structure, command) {
        const fieldId = command.getFieldId();
        structure.unselectAllUniqueFilter(fieldId);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class UnselectUniqueFilterCommand extends StructureCommand {
    constructor(structureId, fieldId, uniqueValueId) {
        super(structureId, 'UnselectUniqueFilterCommand');
        this.fieldId = fieldId;
        this.uniqueValueId = uniqueValueId;
    }
    getFieldId() {
        return this.fieldId;
    }
    getUniqueValueId() {
        return this.uniqueValueId;
    }
}

class UnselectUniqueFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return UnselectUniqueFilterCommand;
    }
    handle(structure, command) {
        const fieldId = command.getFieldId(), uniqueValueId = command.getUniqueValueId();
        structure.unselectUniqueFilter(fieldId, uniqueValueId);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class SelectAllUniqueFilterCommand extends StructureCommand {
    constructor(structureId, fieldId) {
        super(structureId, 'SelectAllUniqueFilterCommand');
        this.fieldId = fieldId;
    }
    getFieldId() {
        return this.fieldId;
    }
}

class SelectAllUniqueFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SelectAllUniqueFilterCommand;
    }
    handle(structure, command) {
        const fieldId = command.getFieldId();
        structure.selectAllUniqueFilter(fieldId);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class SelectUniqueFilterCommand extends StructureCommand {
    constructor(structureId, fieldId, uniqueValueId) {
        super(structureId, 'SelectUniqueFilterCommand');
        this.fieldId = fieldId;
        this.uniqueValueId = uniqueValueId;
    }
    getFieldId() {
        return this.fieldId;
    }
    getUniqueValueId() {
        return this.uniqueValueId;
    }
}

class SelectUniqueFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SelectUniqueFilterCommand;
    }
    handle(structure, command) {
        const fieldId = command.getFieldId(), uniqueValueId = command.getUniqueValueId();
        structure.selectUniqueFilter(fieldId, uniqueValueId);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class FilterDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    setConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigFilterCommand(structureId, config));
    }
    add(fieldId, filterTypeId, value, structureId) {
        this.commandDispatcher.dispatch(new AddFilterCommand(structureId, fieldId, filterTypeId, value));
    }
    removeAll(structureId) {
        this.commandDispatcher.dispatch(new RemoveAllFiltersCommand(structureId));
    }
    remove(filterId, structureId) {
        this.commandDispatcher.dispatch(new RemoveFilterCommand(structureId, filterId));
    }
    selectAllUniqueFilter(fieldId, structureId) {
        this.commandDispatcher.dispatch(new SelectAllUniqueFilterCommand(structureId, fieldId));
    }
    unselectAllUniqueFilter(fieldId, structureId) {
        this.commandDispatcher.dispatch(new UnselectAllUniqueFilterCommand(structureId, fieldId));
    }
    selectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new SelectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    }
    unselectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new UnselectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    }
}

class FilterDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(FilterManagerFactory);
        container.provide(FilterDispatcher);
    }
    registerCommandHandlers() {
        return [
            SetConfigFilterCommandHandler,
            SetConfigQuickFilterCommandHandler,
            ToggleFilterCommandHandler,
            AddFilterCommandHandler,
            RemoveAllFiltersCommandHandler,
            RemoveFilterCommandHandler,
            SelectUniqueFilterCommandHandler,
            SelectAllUniqueFilterCommandHandler,
            UnselectUniqueFilterCommandHandler,
            UnselectAllUniqueFilterCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            ConfigQuickFilterSetEventHandler,
            ConfigFilterSetEventHandler,
            FilterTypeConfigFilterSetEventHandler,
            ActiveFiltersSetEventHandler,
            UniqueFilterCalculatedEventHandler,
            FilterTypeFieldsInitedEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

class FilterDomainWarehouse extends FilterWarehouse {
    constructor(filterEnabledArchive, structureQuickFilterRepository, uniqueValuesArchive) {
        super();
        this.filterEnabledArchive = filterEnabledArchive;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
        this.uniqueValuesArchive = uniqueValuesArchive;
        this.activeFilterArchive = FilterDiContainer.resolve(ActiveFilterArchive);
        this.filterTypeArchive = FilterDiContainer.resolve(FilterTypeArchive);
    }
    onFilteringEnabled(structureId) {
        return this.filterEnabledArchive.on(structureId);
    }
    onQuickFiltersEnabled(structureId) {
        return this.structureQuickFilterRepository.on(structureId);
    }
    onFilterTypes(structureId) {
        return this.filterTypeArchive.on(structureId);
    }
    onFilterTypesForFieldId(fieldId, structureId) {
        return this.onFilterTypes(structureId)
            .pipe(hermesMap((map) => {
            return map.getFilterTypes(fieldId);
        }));
    }
    onActiveFilters(structureId) {
        return this.activeFilterArchive.on(structureId);
    }
    findFilters(structureId) {
        return this.activeFilterArchive.find(structureId);
    }
    onUniqueValues(structureId) {
        return this.uniqueValuesArchive.on(structureId);
    }
    onceFilterTypeId(fieldId, filterTypeName, structureId) {
        return singleFromObservable(this.onFilterTypes(structureId)
            .pipe(hermesMap((map) => {
            const filterTypes = map.getFilterTypes(fieldId);
            const filterType = filterTypes.find((fieldType) => fieldType.getName() === filterTypeName);
            if (filterType === undefined) {
                return Optional.empty();
            }
            else {
                return Optional.of(filterType.getId());
            }
        })));
    }
}
FilterDomainWarehouse.services = [FilterEnabledArchive, QuickFilterEnabledArchive, UniqueValueCollectionArchive];

class FilterDomainPublisher extends FilterPublisher {
    constructor(filterDispatcher) {
        super();
        this.filterDispatcher = filterDispatcher;
    }
    setConfig(config, structureId) {
        this.filterDispatcher.setConfig(config, structureId);
    }
    add(fieldId, filterTypeId, value, structureId) {
        this.filterDispatcher.add(fieldId, filterTypeId, value, structureId);
    }
    removeAll(structureId) {
        this.filterDispatcher.removeAll(structureId);
    }
    remove(filterId, structureId) {
        this.filterDispatcher.remove(filterId, structureId);
    }
    selectAllUniqueFilter(fieldId, structureId) {
        this.filterDispatcher.selectAllUniqueFilter(fieldId, structureId);
    }
    unselectAllUniqueFilter(fieldId, structureId) {
        this.filterDispatcher.unselectAllUniqueFilter(fieldId, structureId);
    }
    selectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.filterDispatcher.selectUniqueFilter(fieldId, uniqueValueId, structureId);
    }
    unselectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.filterDispatcher.unselectUniqueFilter(fieldId, uniqueValueId, structureId);
    }
}
FilterDomainPublisher.services = [FilterDispatcher];

class FilterApiModule {
    registerProviders(container) {
        container.provide(FilterPublisher, FilterDomainPublisher);
        container.provide(FilterWarehouse, FilterDomainWarehouse);
        container.provide(UniqueValueCollectionArchive);
        container.provide(FilterEnabledArchive);
        container.provide(QuickFilterEnabledArchive);
        container.provide(FilterIntegration);
    }
}
const filterInitializer = new DomainInitializer(new FilterApiModule(), new FilterDomainModule());

filterInitializer.init();
function provideFilterCommandInvoker() {
    return CoreContainer.resolve(FilterPublisher);
}
function provideFilterWarehouse() {
    return CoreContainer.resolve(FilterWarehouse);
}
function provideFilterIntegration() {
    return CoreContainer.resolve(FilterIntegration);
}
class FilterFeatureModule {
}
FilterFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FilterFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FilterFeatureModule });
FilterFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterFeatureModule, providers: [
        { provide: FilterPublisher, useFactory: provideFilterCommandInvoker },
        { provide: FilterWarehouse, useFactory: provideFilterWarehouse },
        { provide: FilterIntegration, useFactory: provideFilterIntegration }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: FilterPublisher, useFactory: provideFilterCommandInvoker },
                        { provide: FilterWarehouse, useFactory: provideFilterWarehouse },
                        { provide: FilterIntegration, useFactory: provideFilterIntegration }
                    ]
                }]
        }] });

class ActiveFilterListModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
ActiveFilterListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterListModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
ActiveFilterListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterListModule, declarations: [ActiveFilterListComponent,
        ActiveSearchComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, FilterFeatureModule], exports: [ActiveFilterListComponent] });
ActiveFilterListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterListModule, imports: [CommonModule,
        fabricImports,
        FilterFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        FilterFeatureModule
                    ],
                    declarations: [
                        ActiveFilterListComponent,
                        ActiveSearchComponent
                    ],
                    exports: [
                        ActiveFilterListComponent
                    ]
                }]
        }] });

class FilterMenuFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
FilterMenuFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FilterMenuFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuFeatureModule, declarations: [FilterIconComponent,
        FilterMenuComponent,
        FilterMenuTriggerComponent,
        ColumnSelectorComponent,
        FilterTypeSelectorComponent,
        FilterValueComponent,
        FieldSelectorComponent,
        FilterMenuActiveFiltersComponent], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        FilterFeatureModule,
        ActiveFilterListModule], exports: [FilterMenuTriggerComponent] });
FilterMenuFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuFeatureModule, imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        FilterFeatureModule,
        ActiveFilterListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        ReactiveFormsModule,
                        FilterFeatureModule,
                        ActiveFilterListModule
                    ],
                    declarations: [
                        FilterIconComponent,
                        FilterMenuComponent,
                        FilterMenuTriggerComponent,
                        ColumnSelectorComponent,
                        FilterTypeSelectorComponent,
                        FilterValueComponent,
                        FieldSelectorComponent,
                        FilterMenuActiveFiltersComponent
                    ],
                    exports: [
                        FilterMenuTriggerComponent
                    ],
                    entryComponents: [
                        FilterMenuComponent
                    ]
                }]
        }] });

class ListViewDomainEvent extends DomainEvent {
}

class ListViewModeSetEvent extends ListViewDomainEvent {
    constructor(schemaId, mode) {
        super(schemaId, mode, 'ListViewModeSetEvent');
        this.mode = mode;
    }
    getTheme() {
        return this.mode;
    }
}

class ListViewEventRepository extends EventRepository {
    constructor() {
        super();
    }
    onModeChange(listViewReadModelRootId) {
        return this.onEvent(listViewReadModelRootId, ListViewModeSetEvent);
    }
}

const exportDeclarations$3 = [
    ListViewComponent,
    listViewGatewayDeclarations
];
function provideListViewCommandInvoker() {
    return CoreContainer.resolve(ListViewPublisher);
}
function provideListViewWarehouse() {
    return CoreContainer.resolve(ListViewWarehouse);
}
function provideListViewEventRepository() {
    return CoreContainer.resolve(ListViewEventRepository);
}
function provideListViewModeArchive() {
    return CoreContainer.resolve(ListViewModeArchive);
}
class ListViewFeatureModule {
}
ListViewFeatureModule.exportDeclarations = Array.from(exportDeclarations$3);
ListViewFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListViewFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: ListViewFeatureModule, declarations: [ListViewComponent,
        ListViewItemComponent,
        ListViewLayoutComponent,
        ListViewSourceComponent,
        ListViewContainerCardComponent,
        ListViewCardItemComponent,
        ListViewContainerModeSelectComponent, ListViewPagingGate, ListViewModeGate, ListViewTemplateGate, ListViewFieldGate, ListViewSearchingGate, ListViewL10nGate, ListViewSourceGate], imports: [CommonModule,
        FabricSelectModule,
        PagingFeatureModule,
        SearchFeatureModule,
        EmptySourceFeatureModule,
        SortingSelectorFeatureModule,
        FilterMenuFeatureModule], exports: [ListViewComponent, ListViewPagingGate, ListViewModeGate, ListViewTemplateGate, ListViewFieldGate, ListViewSearchingGate, ListViewL10nGate, ListViewSourceGate] });
ListViewFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewFeatureModule, providers: [
        { provide: ListViewPublisher, useFactory: provideListViewCommandInvoker },
        { provide: ListViewWarehouse, useFactory: provideListViewWarehouse },
        { provide: ListViewEventRepository, useFactory: provideListViewEventRepository },
        { provide: ListViewModeArchive, useFactory: provideListViewModeArchive }
    ], imports: [CommonModule,
        FabricSelectModule,
        PagingFeatureModule,
        SearchFeatureModule,
        EmptySourceFeatureModule,
        SortingSelectorFeatureModule,
        FilterMenuFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricSelectModule,
                        PagingFeatureModule,
                        SearchFeatureModule,
                        EmptySourceFeatureModule,
                        SortingSelectorFeatureModule,
                        FilterMenuFeatureModule
                    ],
                    declarations: [
                        ListViewComponent,
                        ListViewItemComponent,
                        ListViewLayoutComponent,
                        ListViewSourceComponent,
                        ListViewContainerCardComponent,
                        ListViewCardItemComponent,
                        ListViewContainerModeSelectComponent,
                        listViewGatewayDeclarations
                    ],
                    exports: exportDeclarations$3,
                    providers: [
                        { provide: ListViewPublisher, useFactory: provideListViewCommandInvoker },
                        { provide: ListViewWarehouse, useFactory: provideListViewWarehouse },
                        { provide: ListViewEventRepository, useFactory: provideListViewEventRepository },
                        { provide: ListViewModeArchive, useFactory: provideListViewModeArchive }
                    ]
                }]
        }] });

class NumberFormatterPipe {
    transform(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
}
NumberFormatterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NumberFormatterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterPipe, name: "numberFormatter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'numberFormatter' }]
        }] });

class NumberFormatterModule {
}
NumberFormatterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NumberFormatterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterModule, declarations: [NumberFormatterPipe], exports: [NumberFormatterPipe] });
NumberFormatterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NumberFormatterPipe
                    ],
                    exports: [
                        NumberFormatterPipe
                    ]
                }]
        }] });

class StructureInfoModalComponent extends StaticComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-info-dialog';
    }
}
StructureInfoModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoModalComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
StructureInfoModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureInfoModalComponent, selector: "div[gui-info-dialog]", usesInheritance: true, ngImport: i0, template: "<div class=\"gui-structure-info-modal gui-flex gui-flex-col gui-p-0 gui-text-lg gui-w-full\">\n\n\t<p class=\"gui-text-3xl gui-mb-8 gui-font-bold\">\n\t\tGeneric UI Grid\n\t</p>\n\n\n\t<p class=\"gui-text-xl gui-mb-18 gui-font-bold\">\n\t\tver. 0.18.0\n\t</p>\n\n\t<p class=\"gui-quote gui-text-2xl gui-italic gui-font-light\">\n\t\t\"The best way to success is to help others succeed.\"\n\t</p>\n\n\t<br/>\n\n\t<section class=\"gui-m-0 gui-px-0 gui-pt-10 gui-pb-6\">\n\t\t<p class=\"gui-font-bold\">Links:</p>\n\t\t<ul class=\"gui-m-0 gui-pl-9 gui-list-none\">\n\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://generic-ui.com/\">Website</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://generic-ui.com/guide/\">Documentation</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://github.com/generic-ui/generic-ui/tree/master/ngx-grid\">Github</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<br/>\n\n\t\t<p class=\"gui-font-bold\">Feedback:</p>\n\t\t<ul class=\"gui-m-0 gui-pl-9 gui-list-none\">\n\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://github.com/generic-ui/generic-ui/issues\">Report a bug</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://github.com/generic-ui/generic-ui/issues\">Suggest an idea</a>\n\t\t\t</li>\n\n\t\t</ul>\n\t</section>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-info-dialog]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-structure-info-modal gui-flex gui-flex-col gui-p-0 gui-text-lg gui-w-full\">\n\n\t<p class=\"gui-text-3xl gui-mb-8 gui-font-bold\">\n\t\tGeneric UI Grid\n\t</p>\n\n\n\t<p class=\"gui-text-xl gui-mb-18 gui-font-bold\">\n\t\tver. 0.18.0\n\t</p>\n\n\t<p class=\"gui-quote gui-text-2xl gui-italic gui-font-light\">\n\t\t\"The best way to success is to help others succeed.\"\n\t</p>\n\n\t<br/>\n\n\t<section class=\"gui-m-0 gui-px-0 gui-pt-10 gui-pb-6\">\n\t\t<p class=\"gui-font-bold\">Links:</p>\n\t\t<ul class=\"gui-m-0 gui-pl-9 gui-list-none\">\n\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://generic-ui.com/\">Website</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://generic-ui.com/guide/\">Documentation</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://github.com/generic-ui/generic-ui/tree/master/ngx-grid\">Github</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<br/>\n\n\t\t<p class=\"gui-font-bold\">Feedback:</p>\n\t\t<ul class=\"gui-m-0 gui-pl-9 gui-list-none\">\n\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://github.com/generic-ui/generic-ui/issues\">Report a bug</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"gui-mb-6 gui-no-underline gui-leading-6\" href=\"https://github.com/generic-ui/generic-ui/issues\">Suggest an idea</a>\n\t\t\t</li>\n\n\t\t</ul>\n\t</section>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });

class CompositionPublisher {
    constructor() {
    }
}

class StructureColumnManagerComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, compositionId, compositionCommandInvoker, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.addClassToHost('gui-block');
    }
    ngOnInit() {
        this.subscribe(this.compositionWarehouse.onAllColumns(this.compositionId), (columns) => {
            this.columns = columns;
            this.enabledColumnsCount = this.columns
                .map((c) => +c.isEnabled())
                .reduce((accumulator, currentValue) => accumulator + currentValue);
        });
    }
    toggleColumn(column) {
        event.stopPropagation();
        if (column.isEnabled()) {
            this.compositionCommandInvoker.disableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
        else {
            this.compositionCommandInvoker.enableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
    }
    getSelectorName() {
        return 'gui-structure-column-manager';
    }
}
StructureColumnManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnManagerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: CompositionId }, { token: CompositionPublisher }, { token: CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnManagerComponent, selector: "div[gui-structure-column-manager]", usesInheritance: true, ngImport: i0, template: `

		<ol class="gui-structure-ordered-list gui-p-0 gui-my-4 gui-list-none gui-overflow-auto">
			<li *ngFor="let column of columns"
				(click)="toggleColumn(column)"
				class="gui-px-13 gui-py-6 gui-cursor-pointer">

				<gui-checkbox [checked]="column.isEnabled()"
							  [disabled]="enabledColumnsCount === 1 && column.isEnabled()">

					<ng-container
						*ngTemplateOutlet="column.viewTemplate;
											context: column.context">
					</ng-container>

				</gui-checkbox>

			</li>
		</ol>

	`, isInline: true, dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i1.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnManagerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-column-manager]',
                    template: `

		<ol class="gui-structure-ordered-list gui-p-0 gui-my-4 gui-list-none gui-overflow-auto">
			<li *ngFor="let column of columns"
				(click)="toggleColumn(column)"
				class="gui-px-13 gui-py-6 gui-cursor-pointer">

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
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: CompositionId }, { type: CompositionPublisher }, { type: CompositionWarehouse }]; } });

class StructureDialogColumnManagerComponent extends SmartComponent {
    constructor(detector, elementRef) {
        super(detector, elementRef);
    }
    getSelectorName() {
        return 'gui-structure-dialog-column-manager';
    }
}
StructureDialogColumnManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogColumnManagerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureDialogColumnManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureDialogColumnManagerComponent, selector: "div[gui-structure-dialog-column-manager]", usesInheritance: true, ngImport: i0, template: "<div class=\"gui-dialog-title\">{{'columnManagerModalTitle' | guiTranslate}}</div>\n\n<div class=\"-gui-mx-10\" gui-structure-column-manager>\n</div>\n", dependencies: [{ kind: "component", type: StructureColumnManagerComponent, selector: "div[gui-structure-column-manager]" }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogColumnManagerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-dialog-column-manager]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-dialog-title\">{{'columnManagerModalTitle' | guiTranslate}}</div>\n\n<div class=\"-gui-mx-10\" gui-structure-column-manager>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });

class SchemaWarehouse {
}

var SchemaTheme;
(function (SchemaTheme) {
    SchemaTheme[SchemaTheme["FABRIC"] = 0] = "FABRIC";
    SchemaTheme[SchemaTheme["MATERIAL"] = 1] = "MATERIAL";
    SchemaTheme[SchemaTheme["LIGHT"] = 2] = "LIGHT";
    SchemaTheme[SchemaTheme["DARK"] = 3] = "DARK";
    SchemaTheme[SchemaTheme["GENERIC"] = 4] = "GENERIC";
})(SchemaTheme || (SchemaTheme = {}));

class StructureThemeConverter {
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
StructureThemeConverter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureThemeConverter, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureThemeConverter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureThemeConverter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureThemeConverter, decorators: [{
            type: Injectable
        }] });

class StructureDialogColumnManagerService extends Reactive {
    constructor(injector, schemaWarehouse, structureThemeConverter, fabricDialogService) {
        super();
        this.injector = injector;
        this.schemaWarehouse = schemaWarehouse;
        this.structureThemeConverter = structureThemeConverter;
        this.fabricDialogService = fabricDialogService;
    }
    open(compositionId, readModelId, parentInjector) {
        if (!parentInjector) {
            parentInjector = this.injector;
        }
        const injector = Injector.create({ parent: parentInjector, providers: [{ provide: CompositionId, useValue: compositionId }] });
        this.schemaWarehouse
            .onceTheme(readModelId)
            .pipe(this.hermesTakeUntil())
            .subscribe((theme) => {
            this.fabricDialogService.open({
                injector: injector,
                component: StructureDialogColumnManagerComponent,
                theme: this.structureThemeConverter.convertTheme(theme)
            });
        });
    }
}
StructureDialogColumnManagerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogColumnManagerService, deps: [{ token: i0.Injector }, { token: SchemaWarehouse }, { token: StructureThemeConverter }, { token: i1.FabricDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
StructureDialogColumnManagerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogColumnManagerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogColumnManagerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: SchemaWarehouse }, { type: StructureThemeConverter }, { type: i1.FabricDialogService }]; } });

var SchemaRowColoring;
(function (SchemaRowColoring) {
    SchemaRowColoring[SchemaRowColoring["NONE"] = 0] = "NONE";
    SchemaRowColoring[SchemaRowColoring["EVEN"] = 1] = "EVEN";
    SchemaRowColoring[SchemaRowColoring["ODD"] = 2] = "ODD";
})(SchemaRowColoring || (SchemaRowColoring = {}));

var RowColoring;
(function (RowColoring) {
    RowColoring[RowColoring["NONE"] = 0] = "NONE";
    RowColoring[RowColoring["EVEN"] = 1] = "EVEN";
    RowColoring[RowColoring["ODD"] = 2] = "ODD";
})(RowColoring || (RowColoring = {}));

class SchemaPublisher {
    constructor() {
    }
}

class StructureSchemaMangerComponent extends SmartComponent {
    constructor(changeDetectorRef, elRef, structureId, schemaReadModelRootId, schemaCommandInvoker, schemaWarehouse) {
        super(changeDetectorRef, elRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaWarehouse = schemaWarehouse;
        this.coloring = Object.keys(SchemaRowColoring)
            .map((key) => SchemaRowColoring[key])
            .filter((val) => !Number.isInteger(val))
            .map((value) => {
            return {
                value: value,
                name: value
            };
        });
        this.themes = Object.keys(SchemaTheme)
            .map((key) => SchemaTheme[key])
            .filter((val) => !Number.isInteger(val))
            .map((value) => {
            return {
                value: value,
                name: value
            };
        });
    }
    ngOnInit() {
        this.subscribe(this.schemaWarehouse.onRowColoring(this.schemaReadModelRootId), (rowColoring) => {
            this.selectedRowColoring = {
                value: SchemaRowColoring[rowColoring],
                name: SchemaRowColoring[rowColoring]
            };
        });
        this.subscribe(this.schemaWarehouse.onTheme(this.schemaReadModelRootId), (schemaTheme) => {
            this.selectedTheme = {
                value: SchemaTheme[schemaTheme],
                name: SchemaTheme[schemaTheme]
            };
        });
        this.subscribe(this.schemaWarehouse.onVerticalGrid(this.schemaReadModelRootId), (verticalGrid) => {
            this.verticalGrid = verticalGrid;
        });
        this.subscribe(this.schemaWarehouse.onHorizontalGrid(this.schemaReadModelRootId), (horizontalGrid) => {
            this.horizontalGrid = horizontalGrid;
        });
    }
    toggleTheme(theme) {
        this.schemaCommandInvoker.setTheme(this.toTheme(theme.value), this.schemaReadModelRootId, this.structureId);
    }
    toggleRowColoring(schemaRowColoring) {
        this.schemaCommandInvoker.setRowColoring(this.toRowColoring(schemaRowColoring.value), this.schemaReadModelRootId);
    }
    toggleVerticalGrid() {
        this.schemaCommandInvoker.setVerticalGrid(!this.verticalGrid, this.schemaReadModelRootId);
    }
    toggleHorizontalGrid() {
        this.schemaCommandInvoker.setHorizontalGrid(!this.horizontalGrid, this.schemaReadModelRootId);
    }
    getSelectorName() {
        return 'gui-structure-schema-manager';
    }
    toTheme(theme) {
        switch (theme.toLowerCase()) {
            case 'fabric':
                return SchemaTheme.FABRIC;
            case 'material':
                return SchemaTheme.MATERIAL;
            case 'generic':
                return SchemaTheme.GENERIC;
            case 'light':
                return SchemaTheme.LIGHT;
            case 'dark':
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    }
    toRowColoring(coloring) {
        switch (coloring.toLowerCase()) {
            case 'none':
                return RowColoring.NONE;
            case 'odd':
                return RowColoring.ODD;
            case 'even':
                return RowColoring.EVEN;
            default:
                return RowColoring.NONE;
        }
    }
}
StructureSchemaMangerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSchemaMangerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: SchemaReadModelRootId }, { token: SchemaPublisher }, { token: SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureSchemaMangerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureSchemaMangerComponent, selector: "div[gui-structure-schema-manager]", usesInheritance: true, ngImport: i0, template: "<div class=\"gui-schema-manager gui-flex gui-flex-col\">\n\n\t<div class=\"gui-dialog-title gui-mb-8\">{{'themeManagerModalTitle' | guiTranslate}}</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col\">\n\t\t<span class=\"gui-mb-4 gui-text-xs\">{{'themeManagerModalTheme' | guiTranslate}}</span>\n\t\t<gui-select (optionChanged)=\"toggleTheme($event)\"\n\t\t\t\t\t[options]=\"themes\"\n\t\t\t\t\t[selected]=\"selectedTheme\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col \">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">\n\t\t\t{{'themeManagerModalRowColoring' | guiTranslate}}\n\t\t</span>\n\n\t\t<gui-select (optionChanged)=\"toggleRowColoring($event)\"\n\t\t\t\t\t[options]=\"coloring\"\n\t\t\t\t\t[selected]=\"selectedRowColoring\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<ol class=\"gui-structure-ordered-list -gui-mx-10 gui-p-0 gui-my-4 gui-list-none gui-overflow-auto\">\n\n\t\t<li (click)=\"toggleVerticalGrid()\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"verticalGrid\">\n\t\t\t\t{{'themeManagerModalVerticalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\n\t\t<li (click)=\"toggleHorizontalGrid()\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"horizontalGrid\">\n\t\t\t\t{{'themeManagerModalHorizontalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\t</ol>\n</div>\n", dependencies: [{ kind: "component", type: i1.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSchemaMangerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-schema-manager]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-schema-manager gui-flex gui-flex-col\">\n\n\t<div class=\"gui-dialog-title gui-mb-8\">{{'themeManagerModalTitle' | guiTranslate}}</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col\">\n\t\t<span class=\"gui-mb-4 gui-text-xs\">{{'themeManagerModalTheme' | guiTranslate}}</span>\n\t\t<gui-select (optionChanged)=\"toggleTheme($event)\"\n\t\t\t\t\t[options]=\"themes\"\n\t\t\t\t\t[selected]=\"selectedTheme\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col \">\n\n\t\t<span class=\"gui-mb-4 gui-text-xs\">\n\t\t\t{{'themeManagerModalRowColoring' | guiTranslate}}\n\t\t</span>\n\n\t\t<gui-select (optionChanged)=\"toggleRowColoring($event)\"\n\t\t\t\t\t[options]=\"coloring\"\n\t\t\t\t\t[selected]=\"selectedRowColoring\"\n\t\t\t\t\t[width]=\"180\">\n\t\t</gui-select>\n\t</div>\n\n\t<ol class=\"gui-structure-ordered-list -gui-mx-10 gui-p-0 gui-my-4 gui-list-none gui-overflow-auto\">\n\n\t\t<li (click)=\"toggleVerticalGrid()\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"verticalGrid\">\n\t\t\t\t{{'themeManagerModalVerticalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\n\t\t<li (click)=\"toggleHorizontalGrid()\"\n\t\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t\t<gui-checkbox [checked]=\"horizontalGrid\">\n\t\t\t\t{{'themeManagerModalHorizontalGrid' | guiTranslate}}\n\t\t\t</gui-checkbox>\n\n\t\t</li>\n\t</ol>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: SchemaReadModelRootId }, { type: SchemaPublisher }, { type: SchemaWarehouse }]; } });

class StructureDialogSchemaManagerComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
    }
    getSelectorName() {
        return 'gui-schema-manager-dialog';
    }
}
StructureDialogSchemaManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogSchemaManagerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureDialogSchemaManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureDialogSchemaManagerComponent, selector: "div[gui-schema-manager-dialog]", usesInheritance: true, ngImport: i0, template: `
		<div gui-structure-schema-manager></div>
	`, isInline: true, dependencies: [{ kind: "component", type: StructureSchemaMangerComponent, selector: "div[gui-structure-schema-manager]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogSchemaManagerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-schema-manager-dialog]',
                    template: `
		<div gui-structure-schema-manager></div>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

class StructureDialogSchemaManagerService extends Reactive {
    constructor(injector, fabricDialogService) {
        super();
        this.injector = injector;
        this.fabricDialogService = fabricDialogService;
    }
    open(readModelId, parentInjector) {
        if (!parentInjector) {
            parentInjector = this.injector;
        }
        const injector = Injector.create({
            providers: [{ provide: SchemaReadModelRootId, useValue: readModelId }],
            parent: parentInjector
        });
        this.fabricDialogService.open({
            injector: injector,
            component: StructureDialogSchemaManagerComponent
        });
    }
}
StructureDialogSchemaManagerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogSchemaManagerService, deps: [{ token: i0.Injector }, { token: i1.FabricDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
StructureDialogSchemaManagerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogSchemaManagerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogSchemaManagerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.FabricDialogService }]; } });

class StructureInfoPanelConfig {
    constructor(enabled, infoDialog, columnsManager, schemaManager, sourceSize) {
        this.enabled = false;
        this.infoDialog = true;
        this.columnsManager = true;
        this.schemaManager = true;
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
        if (this.isNotUndefinedOrNull(schemaManager)) {
            this.schemaManager = schemaManager;
        }
    }
    isEnabled() {
        return this.enabled;
    }
    isInfoDialogEnabled() {
        return this.infoDialog;
    }
    isColumnsManagerEnabled() {
        return this.columnsManager;
    }
    isSourceSizeEnabled() {
        return this.sourceSize;
    }
    isSchemaManagerEnabled() {
        return this.schemaManager;
    }
    isNotUndefinedOrNull(config) {
        return config !== undefined && config !== null;
    }
}

class StructureInfoPanelArchive extends Archive {
    constructor() {
        super(new StructureInfoPanelConfig());
    }
}

class StructureColumnManagerIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-structure-column-manager-icon';
    }
}
StructureColumnManagerIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnManagerIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnManagerIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnManagerIconComponent, selector: "div[gui-structure-column-manager-icon]", usesInheritance: true, ngImport: i0, template: `
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 10.31">
			<line class="cls-1" x1="9.57" y1="3.65" x2="0.75" y2="3.65"/>
			<line class="cls-2" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-2" x1="0.75" y1="9.56" x2="0.75" y2="0.88"/>
			<line class="cls-1" x1="3.69" y1="9.65" x2="3.69" y2="3.89"/>
			<line class="cls-1" x1="6.63" y1="9.56" x2="6.63" y2="3.89"/>
			<line class="cls-2" x1="9.57" y1="9.56" x2="9.57" y2="0.88"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnManagerIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-column-manager-icon]',
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
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });

class StructureSchemaManagerIconComponent extends IconComponent {
    constructor(elRef, cdr) {
        super(elRef, cdr);
    }
    getSelectorName() {
        return 'gui-structure-schema-manager-icon';
    }
}
StructureSchemaManagerIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSchemaManagerIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
StructureSchemaManagerIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureSchemaManagerIconComponent, selector: "div[gui-structure-schema-manager-icon]", usesInheritance: true, ngImport: i0, template: "<svg height=\"24\" viewBox=\"0 0 32 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<g transform=\"translate(0 -4)\">\n\t\t<path d=\"M23.337,4H32v6H23.337Z\" data-name=\"Path 303\" id=\"Path_303\"/>\n\t\t<path d=\"M11.662,4h8.662v6H11.662Z\" data-name=\"Path 304\" id=\"Path_304\"/>\n\t\t<path d=\"M0,4H8.662v6H0Z\" data-name=\"Path 305\" id=\"Path_305\"/>\n\t\t<path d=\"M23.337,22H32v6H23.337Z\" data-name=\"Path 306\" id=\"Path_306\"/>\n\t\t<path d=\"M0,22H8.662v6H0Z\" data-name=\"Path 307\" id=\"Path_307\"/>\n\t\t<path d=\"M11.662,22h8.662v6H11.662Z\" data-name=\"Path 308\" id=\"Path_308\"/>\n\t\t<path d=\"M23.337,13H32v6H23.337Z\" data-name=\"Path 309\" id=\"Path_309\"/>\n\t\t<path d=\"M11.662,13h8.662v6H11.662Z\" data-name=\"Path 310\" id=\"Path_310\"/>\n\t\t<path d=\"M0,13H8.662v6H0Z\" data-name=\"Path 311\" id=\"Path_311\"/>\n\t</g>\n</svg>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSchemaManagerIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-schema-manager-icon]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<svg height=\"24\" viewBox=\"0 0 32 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<g transform=\"translate(0 -4)\">\n\t\t<path d=\"M23.337,4H32v6H23.337Z\" data-name=\"Path 303\" id=\"Path_303\"/>\n\t\t<path d=\"M11.662,4h8.662v6H11.662Z\" data-name=\"Path 304\" id=\"Path_304\"/>\n\t\t<path d=\"M0,4H8.662v6H0Z\" data-name=\"Path 305\" id=\"Path_305\"/>\n\t\t<path d=\"M23.337,22H32v6H23.337Z\" data-name=\"Path 306\" id=\"Path_306\"/>\n\t\t<path d=\"M0,22H8.662v6H0Z\" data-name=\"Path 307\" id=\"Path_307\"/>\n\t\t<path d=\"M11.662,22h8.662v6H11.662Z\" data-name=\"Path 308\" id=\"Path_308\"/>\n\t\t<path d=\"M23.337,13H32v6H23.337Z\" data-name=\"Path 309\" id=\"Path_309\"/>\n\t\t<path d=\"M11.662,13h8.662v6H11.662Z\" data-name=\"Path 310\" id=\"Path_310\"/>\n\t\t<path d=\"M0,13H8.662v6H0Z\" data-name=\"Path 311\" id=\"Path_311\"/>\n\t</g>\n</svg>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });

class ActiveFilterMenuComponent {
}
ActiveFilterMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ActiveFilterMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ActiveFilterMenuComponent, selector: "ng-component", ngImport: i0, template: `

		<h3>Active filters</h3>

		<div gui-active-filter-list></div>

		<div>

			<button gui-button
					[text]="true">
				Cancel
			</button>

			<button gui-button
					[outline]="true"
					[primary]="true">
				Clear All
			</button>
		</div>
	`, isInline: true, dependencies: [{ kind: "component", type: ActiveFilterListComponent, selector: "div[gui-active-filter-list]" }, { kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterMenuComponent, decorators: [{
            type: Component,
            args: [{
                    template: `

		<h3>Active filters</h3>

		<div gui-active-filter-list></div>

		<div>

			<button gui-button
					[text]="true">
				Cancel
			</button>

			<button gui-button
					[outline]="true"
					[primary]="true">
				Clear All
			</button>
		</div>
	`
                }]
        }] });

class ActiveFilterService extends Reactive {
    constructor(injector, schemaWarehouse, structureThemeConverter, fabricDialogService) {
        super();
        this.injector = injector;
        this.schemaWarehouse = schemaWarehouse;
        this.structureThemeConverter = structureThemeConverter;
        this.fabricDialogService = fabricDialogService;
    }
    open(readModelId, structureId) {
        const injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: SchemaReadModelRootId, useValue: readModelId },
                { provide: StructureId, useValue: structureId }
            ]
        });
        this.schemaWarehouse
            .onceTheme(readModelId)
            .pipe(this.hermesTakeUntil())
            .subscribe((theme) => {
            this.fabricDialogService.open({
                injector: injector,
                component: ActiveFilterMenuComponent,
                theme: this.structureThemeConverter.convertTheme(theme)
            });
        });
    }
}
ActiveFilterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterService, deps: [{ token: i0.Injector }, { token: SchemaWarehouse }, { token: StructureThemeConverter }, { token: i1.FabricDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
ActiveFilterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: SchemaWarehouse }, { type: StructureThemeConverter }, { type: i1.FabricDialogService }]; } });

class ActiveFilterMenuTriggerDirective {
    constructor(el, structureId, activeFilterService, schemaReadModelRootId) {
        this.el = el;
        this.structureId = structureId;
        this.activeFilterService = activeFilterService;
        this.schemaReadModelRootId = schemaReadModelRootId;
    }
    ngOnInit() {
        // this.renderer.listen(this.el.nativeElement, 'click', () => {
        // 	this.activeFilterService.open(this.schemaReadModelRootId, this.structureId);
        // });
    }
}
ActiveFilterMenuTriggerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterMenuTriggerDirective, deps: [{ token: i0.ElementRef }, { token: StructureId }, { token: ActiveFilterService }, { token: SchemaReadModelRootId }], target: i0.ɵɵFactoryTarget.Directive });
ActiveFilterMenuTriggerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ActiveFilterMenuTriggerDirective, selector: "[gui-active-filter-menu-trigger]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterMenuTriggerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[gui-active-filter-menu-trigger]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: StructureId }, { type: ActiveFilterService }, { type: SchemaReadModelRootId }]; } });

class StructureInfoIconComponent extends IconComponent {
    constructor(elRef, cdr) {
        super(elRef, cdr);
    }
    getSelectorName() {
        return 'gui-structure-info-icon';
    }
}
StructureInfoIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
StructureInfoIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureInfoIconComponent, selector: "div[gui-structure-info-icon]", usesInheritance: true, ngImport: i0, template: "<svg data-name=\"Layer 1\" viewBox=\"0 0 10.08 10.08\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path class=\"cls-1\"\n\t\t  d=\"M401.64,307.76c0-.28.23-.45.54-.45s.55.17.55.45v0a.49.49,0,0,1-.55.46.48.48,0,0,1-.54-.46Zm.05,1.27a.49.49,0,0,1,1,0v2.54a.49.49,0,0,1-1,0Z\"\n\t\t  transform=\"translate(-397.14 -304.64)\"/>\n\t<circle class=\"cls-2\" cx=\"5.04\" cy=\"5.04\" r=\"4.54\"/>\n</svg>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-info-icon]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<svg data-name=\"Layer 1\" viewBox=\"0 0 10.08 10.08\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path class=\"cls-1\"\n\t\t  d=\"M401.64,307.76c0-.28.23-.45.54-.45s.55.17.55.45v0a.49.49,0,0,1-.55.46.48.48,0,0,1-.54-.46Zm.05,1.27a.49.49,0,0,1,1,0v2.54a.49.49,0,0,1-1,0Z\"\n\t\t  transform=\"translate(-397.14 -304.64)\"/>\n\t<circle class=\"cls-2\" cx=\"5.04\" cy=\"5.04\" r=\"4.54\"/>\n</svg>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });

class StructureInfoPanelComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, injector, sourceWarehouse, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService, translationService, schemaManagerService, structureInfoPanelArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.injector = injector;
        this.sourceWarehouse = sourceWarehouse;
        this.dialog = dialog;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.menuColumnManagerService = menuColumnManagerService;
        this.translationService = translationService;
        this.schemaManagerService = schemaManagerService;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
        this.infoModal = StructureInfoModalComponent;
    }
    ngOnInit() {
        this.subscribe(this.structureInfoPanelArchive.on(), (infoPanel) => {
            this.infoPanelConfig = infoPanel;
        });
        this.subscribe(this.sourceWarehouse.onOriginSize(this.structureId), (size) => {
            this.totalItemsSize = size;
        });
        this.subscribe(this.sourceWarehouse.onPreparedEntities(this.structureId), (preparedItems) => {
            this.preparedItemsSize = preparedItems.length;
        });
        this.subscribe(this.translationService.onTranslation(), (translation) => {
            this.themeManagerTooltipText = translation.infoPanelThemeMangerTooltipText;
            this.columnManagerTooltipText = translation.infoPanelColumnManagerTooltipText;
            this.infoTooltipText = translation.infoPanelInfoTooltipText;
        });
    }
    openInfo() {
        this.dialog.open({ component: this.infoModal });
    }
    openColumnManager() {
        this.menuColumnManagerService.open(this.compositionId, this.schemaReadModelRootId, this.injector);
    }
    openSchemaManager() {
        this.schemaManagerService.open(this.schemaReadModelRootId, this.injector);
    }
    getSelectorName() {
        return 'gui-structure-info-panel';
    }
}
StructureInfoPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Injector }, { token: SourceWarehouse }, { token: i1.FabricDialogService }, { token: CompositionId }, { token: StructureId }, { token: SchemaReadModelRootId }, { token: StructureDialogColumnManagerService }, { token: TranslationFacade }, { token: StructureDialogSchemaManagerService }, { token: StructureInfoPanelArchive }], target: i0.ɵɵFactoryTarget.Component });
StructureInfoPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureInfoPanelComponent, selector: "div[gui-structure-info-panel]", usesInheritance: true, ngImport: i0, template: "<div>\n\t<div *ngIf=\"infoPanelConfig.isSourceSizeEnabled()\">\n\n\t\t<ng-container *ngIf=\"preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t<ng-container *ngIf=\"preparedItemsSize === totalItemsSize\">\n\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</ng-container>\n\n\t\t\t<span *ngIf=\"preparedItemsSize !== totalItemsSize\"\n\t\t\t\t  gui-active-filter-menu-trigger>\n\t\t\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t<b>{{preparedItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelOutOf' | guiTranslate}}\n\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</span>\n\n\t\t</ng-container>\n\n\t</div>\n</div>\n\n<div>\n\t<div class=\"gui-right-section\">\n\n\t\t<div (click)=\"openSchemaManager()\"\n\t\t\t *ngIf=\"infoPanelConfig.isSchemaManagerEnabled()\">\n\t\t\t<div [gui-tooltip]=\"themeManagerTooltipText\" gui-structure-schema-manager-icon></div>\n\t\t</div>\n\n\t\t<div (click)=\"openColumnManager()\"\n\t\t\t *ngIf=\"infoPanelConfig.isColumnsManagerEnabled()\">\n\t\t\t<div [gui-tooltip]=\"columnManagerTooltipText\" gui-structure-column-manager-icon></div>\n\t\t</div>\n\n\t\t<div (click)=\"openInfo()\"\n\t\t\t *ngIf=\"infoPanelConfig.isInfoDialogEnabled()\">\n\t\t\t<div [gui-tooltip]=\"infoTooltipText\" gui-structure-info-icon></div>\n\t\t</div>\n\t</div>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }, { kind: "component", type: StructureColumnManagerIconComponent, selector: "div[gui-structure-column-manager-icon]" }, { kind: "component", type: StructureSchemaManagerIconComponent, selector: "div[gui-structure-schema-manager-icon]" }, { kind: "directive", type: ActiveFilterMenuTriggerDirective, selector: "[gui-active-filter-menu-trigger]" }, { kind: "component", type: StructureInfoIconComponent, selector: "div[gui-structure-info-icon]" }, { kind: "pipe", type: NumberFormatterPipe, name: "numberFormatter" }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-info-panel]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div>\n\t<div *ngIf=\"infoPanelConfig.isSourceSizeEnabled()\">\n\n\t\t<ng-container *ngIf=\"preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t<ng-container *ngIf=\"preparedItemsSize === totalItemsSize\">\n\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</ng-container>\n\n\t\t\t<span *ngIf=\"preparedItemsSize !== totalItemsSize\"\n\t\t\t\t  gui-active-filter-menu-trigger>\n\t\t\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t<b>{{preparedItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelOutOf' | guiTranslate}}\n\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</span>\n\n\t\t</ng-container>\n\n\t</div>\n</div>\n\n<div>\n\t<div class=\"gui-right-section\">\n\n\t\t<div (click)=\"openSchemaManager()\"\n\t\t\t *ngIf=\"infoPanelConfig.isSchemaManagerEnabled()\">\n\t\t\t<div [gui-tooltip]=\"themeManagerTooltipText\" gui-structure-schema-manager-icon></div>\n\t\t</div>\n\n\t\t<div (click)=\"openColumnManager()\"\n\t\t\t *ngIf=\"infoPanelConfig.isColumnsManagerEnabled()\">\n\t\t\t<div [gui-tooltip]=\"columnManagerTooltipText\" gui-structure-column-manager-icon></div>\n\t\t</div>\n\n\t\t<div (click)=\"openInfo()\"\n\t\t\t *ngIf=\"infoPanelConfig.isInfoDialogEnabled()\">\n\t\t\t<div [gui-tooltip]=\"infoTooltipText\" gui-structure-info-icon></div>\n\t\t</div>\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Injector }, { type: SourceWarehouse }, { type: i1.FabricDialogService }, { type: CompositionId }, { type: StructureId }, { type: SchemaReadModelRootId }, { type: StructureDialogColumnManagerService }, { type: TranslationFacade }, { type: StructureDialogSchemaManagerService }, { type: StructureInfoPanelArchive }]; } });

class StructureMenuColumnManagerComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
    }
    getSelectorName() {
        return 'gui-structure-menu-column-manager';
    }
}
StructureMenuColumnManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureMenuColumnManagerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureMenuColumnManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureMenuColumnManagerComponent, selector: "div[gui-structure-menu-column-manager]", usesInheritance: true, ngImport: i0, template: "<div gui-structure-column-manager></div>\n", dependencies: [{ kind: "component", type: StructureColumnManagerComponent, selector: "div[gui-structure-column-manager]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureMenuColumnManagerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-menu-column-manager]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div gui-structure-column-manager></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

const declarations$3 = [
    StructureColumnManagerComponent,
    StructureDialogColumnManagerComponent,
    StructureMenuColumnManagerComponent,
    StructureColumnManagerIconComponent
];
class StructureColumnManagerModule {
}
StructureColumnManagerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnManagerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureColumnManagerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnManagerModule, declarations: [StructureColumnManagerComponent,
        StructureDialogColumnManagerComponent,
        StructureMenuColumnManagerComponent,
        StructureColumnManagerIconComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, TranslationFeatureModule], exports: [StructureColumnManagerComponent,
        StructureDialogColumnManagerComponent,
        StructureMenuColumnManagerComponent,
        StructureColumnManagerIconComponent] });
StructureColumnManagerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnManagerModule, providers: [
        StructureDialogColumnManagerService
    ], imports: [CommonModule,
        fabricImports,
        TranslationFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnManagerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        TranslationFeatureModule
                    ],
                    declarations: declarations$3,
                    exports: declarations$3,
                    entryComponents: [
                        StructureColumnManagerComponent,
                        StructureDialogColumnManagerComponent,
                        StructureMenuColumnManagerComponent
                    ],
                    providers: [
                        StructureDialogColumnManagerService
                    ]
                }]
        }] });

class StructureInfoPanelConfigConverter {
    convert(config) {
        let infoDialog, columnsManager, sourceSize, schemaManager;
        if (config.infoDialog !== undefined) {
            infoDialog = config.infoDialog;
        }
        if (config.columnsManager !== undefined) {
            columnsManager = config.columnsManager;
        }
        if (config.schemaManager !== undefined) {
            schemaManager = config.schemaManager;
        }
        if (config.sourceSize !== undefined) {
            sourceSize = config.sourceSize;
        }
        return new StructureInfoPanelConfig(config.enabled, infoDialog, columnsManager, schemaManager, sourceSize);
    }
}

class SchemaManagerModule {
}
SchemaManagerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaManagerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SchemaManagerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SchemaManagerModule, declarations: [StructureSchemaMangerComponent,
        StructureDialogSchemaManagerComponent,
        StructureSchemaManagerIconComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, TranslationFeatureModule], exports: [StructureSchemaManagerIconComponent] });
SchemaManagerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaManagerModule, providers: [
        StructureDialogSchemaManagerService
    ], imports: [CommonModule,
        fabricImports,
        TranslationFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaManagerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        TranslationFeatureModule
                    ],
                    declarations: [
                        StructureSchemaMangerComponent,
                        StructureDialogSchemaManagerComponent,
                        StructureSchemaManagerIconComponent
                    ],
                    exports: [
                        StructureSchemaManagerIconComponent
                    ],
                    entryComponents: [
                        StructureDialogSchemaManagerComponent,
                        StructureSchemaMangerComponent
                    ],
                    providers: [
                        StructureDialogSchemaManagerService
                    ]
                }]
        }] });

class SourceCounterFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SourceCounterFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceCounterFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SourceCounterFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SourceCounterFeatureModule, declarations: [ActiveFilterMenuTriggerDirective,
        ActiveFilterMenuComponent], imports: [CommonModule,
        FilterMenuFeatureModule,
        ActiveFilterListModule,
        FabricButtonModule], exports: [ActiveFilterMenuTriggerDirective] });
SourceCounterFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceCounterFeatureModule, providers: [
        ActiveFilterService
    ], imports: [CommonModule,
        FilterMenuFeatureModule,
        ActiveFilterListModule,
        FabricButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceCounterFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FilterMenuFeatureModule,
                        ActiveFilterListModule,
                        FabricButtonModule
                    ],
                    declarations: [
                        ActiveFilterMenuTriggerDirective,
                        ActiveFilterMenuComponent
                    ],
                    exports: [
                        ActiveFilterMenuTriggerDirective
                    ],
                    providers: [
                        ActiveFilterService
                    ],
                    entryComponents: [
                        ActiveFilterMenuComponent
                    ]
                }]
        }] });

class StructureInfoPanelModule {
}
StructureInfoPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureInfoPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelModule, declarations: [StructureInfoPanelComponent,
        StructureInfoModalComponent,
        StructureInfoIconComponent], imports: [CommonModule,
        NumberFormatterModule,
        FabricModule,
        StructureColumnManagerModule,
        SchemaManagerModule,
        SourceCounterFeatureModule,
        TranslationFeatureModule], exports: [StructureInfoModalComponent,
        StructureInfoPanelComponent] });
StructureInfoPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelModule, providers: [
        StructureInfoPanelConfigConverter
    ], imports: [CommonModule,
        NumberFormatterModule,
        FabricModule,
        StructureColumnManagerModule,
        SchemaManagerModule,
        SourceCounterFeatureModule,
        TranslationFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        NumberFormatterModule,
                        FabricModule,
                        StructureColumnManagerModule,
                        SchemaManagerModule,
                        SourceCounterFeatureModule,
                        TranslationFeatureModule
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
                }]
        }] });

class SchemaCssClassManager extends Reactive {
    constructor(schemaReadModelRepository) {
        super();
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.cssClass = null;
        this.classModifier = new ClassModifier();
    }
    init(elementRef, schemaReadModelRootId) {
        this.cssHostRef = elementRef;
        this.schemaReadModelRepository
            .onCssClasses(schemaReadModelRootId)
            .pipe(this.hermesTakeUntil())
            .subscribe((classes) => {
            const diff = this.updateState(classes);
            this.renderCssClasses(diff);
        });
    }
    updateState(css) {
        if (!this.cssClass) {
            this.cssClass = css;
            return this.cssClass;
        }
        else {
            const diff = {};
            Object.keys(this.cssClass)
                .forEach((key) => {
                if (css[key] !== this.cssClass[key]) {
                    diff[key] = css[key];
                }
            });
            this.cssClass = css;
            return diff;
        }
    }
    renderCssClasses(diff) {
        if (diff.hasOwnProperty('verticalGrid')) {
            this.toggleCssClass(diff.verticalGrid, SchemaCssClassManager.VERTICAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('horizontalGrid')) {
            this.toggleCssClass(diff.horizontalGrid, SchemaCssClassManager.HORIZONTAL_GRID_CLASS_NAME);
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
    toggleCssClass(toggle, cssClassName) {
        if (toggle) {
            this.addClass(cssClassName);
        }
        else {
            this.removeClass(cssClassName);
        }
    }
    removeThemeCssClasses() {
        Object.keys(SchemaTheme)
            .map((key) => SchemaTheme[key])
            .map((theme) => this.resolveThemeClassName(theme))
            .filter((className) => !!className)
            .forEach((className) => {
            this.removeClass(className);
        });
    }
    resolveThemeClassName(theme) {
        switch (theme) {
            case SchemaTheme.FABRIC:
            case SchemaTheme[SchemaTheme.FABRIC]:
                return SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
            case SchemaTheme.MATERIAL:
            case SchemaTheme[SchemaTheme.MATERIAL]:
                return SchemaCssClassManager.THEME_MATERIAL_CLASS_NAME;
            case SchemaTheme.LIGHT:
            case SchemaTheme[SchemaTheme.LIGHT]:
                return SchemaCssClassManager.THEME_LIGHT_CLASS_NAME;
            case SchemaTheme.DARK:
            case SchemaTheme[SchemaTheme.DARK]:
                return SchemaCssClassManager.THEME_DARK_CLASS_NAME;
            case SchemaTheme.GENERIC:
            case SchemaTheme[SchemaTheme.GENERIC]:
                return SchemaCssClassManager.THEME_GENERIC_CLASS_NAME;
            default:
                return SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
        }
    }
    resolveRowColoringClassName(coloring) {
        switch (coloring) {
            case SchemaRowColoring.ODD:
            case SchemaRowColoring[SchemaRowColoring.ODD]:
                return SchemaCssClassManager.ROW_COLORING_ODD;
            case SchemaRowColoring.EVEN:
            case SchemaRowColoring[SchemaRowColoring.EVEN]:
                return SchemaCssClassManager.ROW_COLORING_EVEN;
            default:
                return null;
        }
    }
    removeRowColoringClasses() {
        Object.keys(SchemaRowColoring)
            .map((key) => SchemaRowColoring[key])
            .map((coloring) => this.resolveRowColoringClassName(coloring))
            .filter((className) => !!className)
            .forEach((className) => {
            this.removeClass(className);
        });
    }
    addClass(cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).add(cssClassName);
        }
    }
    removeClass(cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).remove(cssClassName);
        }
    }
}
SchemaCssClassManager.VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
SchemaCssClassManager.HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
SchemaCssClassManager.THEME_FABRIC_CLASS_NAME = 'gui-fabric';
SchemaCssClassManager.THEME_MATERIAL_CLASS_NAME = 'gui-material';
SchemaCssClassManager.THEME_LIGHT_CLASS_NAME = 'gui-light';
SchemaCssClassManager.THEME_DARK_CLASS_NAME = 'gui-dark';
SchemaCssClassManager.THEME_GENERIC_CLASS_NAME = 'gui-generic';
SchemaCssClassManager.ROW_COLORING_ODD = 'gui-rows-odd';
SchemaCssClassManager.ROW_COLORING_EVEN = 'gui-rows-even';
SchemaCssClassManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaCssClassManager, deps: [{ token: SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Injectable });
SchemaCssClassManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaCssClassManager });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaCssClassManager, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: SchemaWarehouse }]; } });

class StructureCellEditStore extends Archive {
    constructor() {
        super();
    }
}
StructureCellEditStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureCellEditStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class StructureEditModeArchive extends Archive {
    constructor() {
        super();
    }
}
StructureEditModeArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureEditModeArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureEditModeArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureEditModeArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureEditModeArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

const structureComponentToken = new InjectionToken('StructureComponentToken');

var StructureCellEditState;
(function (StructureCellEditState) {
    StructureCellEditState[StructureCellEditState["ENTER"] = 0] = "ENTER";
    StructureCellEditState[StructureCellEditState["SUBMIT"] = 1] = "SUBMIT";
    StructureCellEditState[StructureCellEditState["CANCEL"] = 2] = "CANCEL";
})(StructureCellEditState || (StructureCellEditState = {}));

class InitFieldsCommand extends StructureCommand {
    constructor(structureId, fieldConfigs) {
        super(structureId, 'InitFieldsCommand');
        this.fieldConfigs = fieldConfigs;
    }
    getFieldConfigs() {
        return this.fieldConfigs;
    }
}

class ColumnFieldId {
    constructor(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}

class ColumnParams {
    constructor(column, field) {
        this.column = column;
        this.field = field;
    }
    getColumn() {
        return this.column;
    }
    getField() {
        return this.field;
    }
}

class StructureColumnInputHandler {
    constructor(structureId, compositionId, columnFieldFactory, columnAutoConfigurator, compositionCommandInvoker) {
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.columnFieldFactory = columnFieldFactory;
        this.columnAutoConfigurator = columnAutoConfigurator;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
        this.domainEventBus = CoreContainer.resolve(DomainEventBus);
    }
    handle(changes) {
        let config = [];
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            config = changes.columns.currentValue;
            this.columns = config;
        }
        else {
            if (this.columns === undefined && changes.source !== undefined && changes.source !== null) {
                config = this.columnAutoConfigurator.configure(changes.source.currentValue);
                this.columns = config;
            }
            else {
                return;
            }
        }
        this.compositionCommandInvoker.setGroups(config, this.compositionId);
        // prepare model
        const { columns, groups } = this.getConfigs(config);
        const fieldConfigs = this.getFieldConfigs(columns);
        // const fieldConfigs = columns as Array<FieldConfig>;
        const initCommand = new InitFieldsCommand(this.structureId, fieldConfigs);
        this.domainEventBus
            .ofEvents([
            FieldsInitedEvent
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === this.structureId.toString()), hermesTake(1))
            .subscribe((event) => {
            const fields = event.getFields(), columnFieldIds = this.convertColumnFieldIds(fields), params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionCommandInvoker.setColumns(params, this.compositionId);
            // this.compositionCommandInvoker.setGroups(this.compositionId);
        });
        this.commandDispatcher.dispatch(initCommand);
    }
    getConfigs(configs) {
        let columnConfigs = [];
        const groupConfigs = [];
        for (let i = 0; i < configs.length; i += 1) {
            const config = configs[i];
            if (config.columns !== undefined) {
                groupConfigs.push(config);
                columnConfigs = columnConfigs.concat(config.columns);
            }
            else {
                columnConfigs.push(config);
            }
        }
        return {
            columns: columnConfigs,
            groups: groupConfigs
        };
    }
    getFieldConfigs(columns) {
        return columns.map((c) => {
            return {
                field: c.field,
                type: c.type,
                matcher: c.matcher,
                summaries: c.summaries,
                sorting: c.sorting
            };
        });
    }
    convertColumnFieldIds(fields) {
        if (!fields) {
            return [];
        }
        return fields.map((field) => new ColumnFieldId(field.getId().getId()));
    }
    convertColumns(columns, fields, columnFieldIds) {
        if (!columns) {
            return [];
        }
        return columns.map((column, index) => {
            const columnFieldId = columnFieldIds[index], field = fields[index];
            const columnField = this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType(), field.getSearchAccessorMethod());
            return new ColumnParams(column, columnField);
        });
    }
}

class ColumnAutoConfigurator {
}

class SortingPublisher {
    constructor() {
    }
}

class CompositionEventRepository extends EventRepository {
}

class SelectedRow {
    constructor(source, index, itemId) {
        this.source = source;
        this.index = index;
        this.itemId = itemId;
    }
    getSource() {
        return this.source;
    }
    getIndex() {
        return this.index;
    }
    getItemId() {
        return this.itemId;
    }
}

class SelectedRowChangedEvent extends StructureDomainEvent {
    constructor(structureId, selectedRows, allSelected, allUnselected) {
        super(structureId, { selectedRows, allSelected, allUnselected }, 'SelectedRowChangedEvent');
        this.selectedRows = selectedRows;
        this.allSelected = allSelected;
        this.allUnselected = allUnselected;
    }
    getSelectedRows() {
        return this.selectedRows;
    }
    isAllSelected() {
        return this.allSelected;
    }
    isAllUnselected() {
        return this.allUnselected;
    }
}

class FormationEventRepository extends EventRepository {
    constructor(sourceWarehouse, domainEventBusTOREMOVE) {
        super();
        this.sourceWarehouse = sourceWarehouse;
        this.domainEventBusTOREMOVE = domainEventBusTOREMOVE;
        this.map = new Map();
        this.subject$ = new HermesSubject();
        this.domainEventBusTOREMOVE
            .ofEvents([
            SelectedRowChangedEvent
        ])
            .pipe(hermesSwitchMap((event) => {
            const selectedRows = event.getSelectedRows();
            const structureId = event.getAggregateId();
            return this.sourceWarehouse
                .onPreparedEntities(structureId)
                .pipe(hermesTake(1), hermesMap((items) => {
                const selectedItems = [], length = items.length, itemsMap = new Map();
                for (let i = 0; i < length; i += 1) {
                    itemsMap.set(items[i].getId().toString(), items[i]);
                }
                for (let j = 0; j < selectedRows.length; j += 1) {
                    const item = itemsMap.get(selectedRows[j]);
                    selectedItems.push(new SelectedRow(item.getSourceItem(), j, item.getId()));
                }
                return {
                    id: structureId,
                    items: selectedItems
                };
            }));
        }))
            .subscribe((e) => {
            this.map.set(e.id.toString(), e.items);
            this.subject$.next(this.map);
        });
    }
    onItemSelected(structureId) {
        return this.subject$
            .toObservable()
            .pipe(hermesFilter((map) => {
            return map.has(structureId.toString());
        }), hermesMap((map) => {
            return map.get(structureId.toString());
        }));
    }
}
FormationEventRepository.services = [SourceWarehouse, DomainEventBus];

class StructureInfoPanelConfigService {
    constructor(structureInfoPanelConfigConverter, structureInfoPanelArchive) {
        this.structureInfoPanelConfigConverter = structureInfoPanelConfigConverter;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
    }
    set(config) {
        const infoPanelConfig = this.structureInfoPanelConfigConverter.convert(config);
        this.structureInfoPanelArchive.next(infoPanelConfig);
    }
}
StructureInfoPanelConfigService.services = [StructureInfoPanelConfigConverter, StructureInfoPanelArchive];
StructureInfoPanelConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelConfigService, deps: [{ token: StructureInfoPanelConfigConverter }, { token: StructureInfoPanelArchive }], target: i0.ɵɵFactoryTarget.Injectable });
StructureInfoPanelConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelConfigService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: StructureInfoPanelConfigConverter }, { type: StructureInfoPanelArchive }]; } });

class ColumnField {
    constructor(fieldId, accessor, dataType, searchAccessor) {
        this.fieldId = fieldId;
        this.accessor = accessor;
        this.dataType = dataType;
        this.searchAccessor = searchAccessor;
    }
    getId() {
        return this.fieldId;
    }
    getValue(entity) {
        return this.accessor(entity);
    }
    getAccessor() {
        return this.accessor;
    }
    getSearchAccessor() {
        return this.searchAccessor;
    }
    getDataType() {
        return this.dataType;
    }
}

class ColumnFieldFactory {
    create(columnFieldId, accessor, dataType, searchAccessor) {
        return new ColumnField(columnFieldId, accessor, dataType, searchAccessor);
    }
}

class GenericBuilder {
    build() {
        return this.buildObject();
    }
}

var RowSelectionType;
(function (RowSelectionType) {
    RowSelectionType[RowSelectionType["ROW"] = 0] = "ROW";
    RowSelectionType[RowSelectionType["CHECKBOX"] = 1] = "CHECKBOX";
})(RowSelectionType || (RowSelectionType = {}));
var RowSelectionMode;
(function (RowSelectionMode) {
    RowSelectionMode[RowSelectionMode["SINGLE"] = 0] = "SINGLE";
    RowSelectionMode[RowSelectionMode["MULTIPLE"] = 1] = "MULTIPLE";
})(RowSelectionMode || (RowSelectionMode = {}));
class RowSelection {
    constructor(config) {
        if (config.enabled !== undefined) {
            this.enabled = config.enabled;
        }
        if (config.mode !== undefined) {
            this.mode = config.mode;
        }
        if (config.type !== undefined) {
            this.type = config.type;
        }
    }
    isModeDefined() {
        return this.mode !== undefined;
    }
    isTypeDefined() {
        return this.type !== undefined;
    }
    isEnabledDefined() {
        return this.enabled !== undefined;
    }
    isEnabled() {
        return this.enabled;
    }
    getMode() {
        return this.mode;
    }
    getType() {
        return this.type;
    }
}
// eslint-disable-next-line @typescript-eslint/member-ordering
RowSelection.Builder = class RowSelectionBuilder extends GenericBuilder {
    constructor() {
        super();
    }
    buildObject() {
        return new RowSelection({
            enabled: this.enabled,
            type: this.type,
            mode: this.mode
        });
    }
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
    withType(type) {
        this.type = type;
        return this;
    }
    withMode(mode) {
        this.mode = mode;
        return this;
    }
};

class RowSelectionTypeArchive extends Archive {
    constructor() {
        super(RowSelectionTypeArchive.DEFAULT_ROW_SELECTION_TYPE);
    }
}
RowSelectionTypeArchive.DEFAULT_ROW_SELECTION_TYPE = RowSelectionType.ROW;

class FormationPublisher {
    constructor() {
    }
}

class StructureHeaderBottomEnabledArchive extends Archive {
    constructor() {
        super(false);
    }
}
StructureHeaderBottomEnabledArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderBottomEnabledArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureHeaderBottomEnabledArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderBottomEnabledArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderBottomEnabledArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class SchemaEventRepository extends EventRepository {
    constructor() {
        super();
    }
}

class StructureInitialValuesReadyArchive extends AggregateArchive {
    constructor() {
        super(StructureInitialValuesReadyArchive.default);
    }
    on(aggregateId) {
        return super.on(aggregateId)
            .pipe(hermesFilter(v => v));
    }
    once(aggregateId) {
        return singleFromObservable(this.on(aggregateId));
    }
}
StructureInitialValuesReadyArchive.default = false;

/** @internal */
class StructureGateway extends SmartComponent {
    constructor(changeDetectorRef, elementRef, columnAutoConfigurator, structureId, compositionId, schemaId, structureCommandInvoker, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandInvoker, searchCommandInvoker, sourceCommandService, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelConfigService, structureCellEditStore, columnFieldFactory, rowSelectionTypeArchive, formationCommandDispatcher, searchEventRepository, structureHeaderBottomEnabledArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.columnAutoConfigurator = columnAutoConfigurator;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.schemaId = schemaId;
        this.structureCommandInvoker = structureCommandInvoker;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        this.pagingEventRepository = pagingEventRepository;
        this.sortingCommandInvoker = sortingCommandInvoker;
        this.searchCommandInvoker = searchCommandInvoker;
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.compositionCommandDispatcher = compositionCommandDispatcher;
        this.compositionEventRepository = compositionEventRepository;
        this.formationEventService = formationEventService;
        this.structureEditModeArchive = structureEditModeArchive;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
        this.structureCellEditStore = structureCellEditStore;
        this.columnFieldFactory = columnFieldFactory;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.searchEventRepository = searchEventRepository;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.schemaEventRepository = schemaEventRepository;
        this.translationService = translationService;
        this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        // DOESNT WORK WITH GATE
        this.source = [];
        /** *********************
         * OUTPUTS
         ***********************/
        this.themeChanged = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.changeAfterInit = false;
        this.structureColumnInputHandler = new StructureColumnInputHandler(structureId, compositionId, columnFieldFactory, columnAutoConfigurator, compositionCommandDispatcher);
        this.translationService.setDefaultTranslation();
    }
    ngOnChanges(changes) {
        ifChanged(changes.editMode, () => {
            this.structureEditModeArchive.next(this.editMode);
        });
        ifChanged(changes.cellEditing, () => {
            let editingConfig;
            if (typeof this.cellEditing === 'boolean') {
                editingConfig = {
                    enabled: this.cellEditing
                };
            }
            else {
                editingConfig = this.cellEditing;
            }
            this.structureCommandInvoker.setCellEdit(editingConfig, this.structureId);
        });
        ifChanged(changes.width, (width) => {
            this.compositionCommandDispatcher.setWidth(width, this.compositionId);
        });
        ifChanged(changes.theme, () => {
            this.schemaCommandInvoker.setTheme(this.theme, this.schemaId, this.structureId);
        });
        ifChanged(changes.rowHeight, () => {
            this.structureCommandInvoker.setRowHeight(this.rowHeight, this.structureId);
        });
        ifChanged(changes.autoResizeWidth, () => {
            this.compositionCommandDispatcher.setResizeWidth(this.autoResizeWidth, this.compositionId);
        });
        /**
         * Columns
         */
        this.structureColumnInputHandler.handle(changes);
        ifChanged(changes.maxHeight, () => {
            this.structureCommandInvoker.setContainerHeight(this.maxHeight, this.structureId);
        });
        /**
         * Setting source should be last step
         */
        ifChanged(changes.source, () => {
            this.sourceCommandService.setOrigin(this.source, this.structureId);
        });
    }
    ngOnInit() {
        this.compositionEventRepository
            .onColumnsChanged(this.compositionId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe(() => {
            this.columnsChanged.emit();
        });
        this.compositionEventRepository
            .onContainerWidthChanged(this.compositionId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe((containerWidth) => {
            this.containerWidthChanged.emit(containerWidth);
        });
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .subscribe((values) => {
            this.sourceEdited.emit(values);
        });
        this.structureCellEditStore
            .on()
            .pipe(this.takeUntil())
            .subscribe((state) => {
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
                default:
                    break;
            }
        });
        this.subscribeAndEmit(this.schemaEventRepository.onThemeChanged(this.schemaId), this.themeChanged);
        this.componentInitialized();
    }
    componentInitialized() {
        this.changeAfterInit = true;
    }
}
StructureGateway.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureGateway, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: ColumnAutoConfigurator }, { token: StructureId }, { token: CompositionId }, { token: SchemaReadModelRootId }, { token: StructurePublisher }, { token: PagingPublisher }, { token: PagingEventRepository }, { token: SortingPublisher }, { token: SearchPublisher }, { token: SourcePublisher }, { token: SourceEventService }, { token: SchemaPublisher }, { token: CompositionPublisher }, { token: CompositionEventRepository }, { token: FormationEventRepository }, { token: StructureEditModeArchive }, { token: StructureCellEditArchive }, { token: StructureInfoPanelConfigService }, { token: StructureCellEditStore }, { token: ColumnFieldFactory }, { token: RowSelectionTypeArchive }, { token: FormationPublisher }, { token: SearchEventRepository }, { token: StructureHeaderBottomEnabledArchive }, { token: SchemaEventRepository }, { token: TranslationFacade }, { token: StructureInitialValuesReadyArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureGateway.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureGateway, inputs: { maxHeight: "maxHeight", width: "width", rowHeight: "rowHeight", autoResizeWidth: "autoResizeWidth", source: "source", columns: "columns", editMode: "editMode", cellEditing: "cellEditing", theme: "theme" }, outputs: { themeChanged: "themeChanged", columnsChanged: "columnsChanged", containerWidthChanged: "containerWidthChanged", sourceEdited: "sourceEdited", cellEditEntered: "cellEditEntered", cellEditCanceled: "cellEditCanceled", cellEditSubmitted: "cellEditSubmitted" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureGateway, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: ColumnAutoConfigurator }, { type: StructureId }, { type: CompositionId }, { type: SchemaReadModelRootId }, { type: StructurePublisher }, { type: PagingPublisher }, { type: PagingEventRepository }, { type: SortingPublisher }, { type: SearchPublisher }, { type: SourcePublisher }, { type: SourceEventService }, { type: SchemaPublisher }, { type: CompositionPublisher }, { type: CompositionEventRepository }, { type: FormationEventRepository }, { type: StructureEditModeArchive }, { type: StructureCellEditArchive }, { type: StructureInfoPanelConfigService }, { type: StructureCellEditStore }, { type: ColumnFieldFactory }, { type: RowSelectionTypeArchive }, { type: FormationPublisher }, { type: SearchEventRepository }, { type: StructureHeaderBottomEnabledArchive }, { type: SchemaEventRepository }, { type: TranslationFacade }, { type: StructureInitialValuesReadyArchive }]; }, propDecorators: { maxHeight: [{
                type: Input
            }], width: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], autoResizeWidth: [{
                type: Input
            }], source: [{
                type: Input
            }], columns: [{
                type: Input
            }], editMode: [{
                type: Input
            }], cellEditing: [{
                type: Input
            }], theme: [{
                type: Input
            }], themeChanged: [{
                type: Output
            }], columnsChanged: [{
                type: Output
            }], containerWidthChanged: [{
                type: Output
            }], sourceEdited: [{
                type: Output
            }], cellEditEntered: [{
                type: Output
            }], cellEditCanceled: [{
                type: Output
            }], cellEditSubmitted: [{
                type: Output
            }] } });

class StructureColumnMenuConfig {
    constructor(enabled = false, sort = true, filter = false, columnsManager = false) {
        this.enabled = enabled;
        this.sort = sort;
        this.filter = filter;
        this.columnsManager = columnsManager;
        this.mainMenu = 'Menu';
        this.filterMenu = 'Filter';
        this.columnsMenu = 'Columns';
    }
    static default() {
        return new StructureColumnMenuConfig();
    }
    static fromConfig(config) {
        return new StructureColumnMenuConfig(config.enabled, config.sort, config.filter, config.columnsManager);
    }
    isEnabled() {
        return this.enabled &&
            (this.sort || this.filter || this.columnsManager);
    }
    isMainEnabled() {
        return this.sort;
    }
    isSortingEnabled() {
        return this.sort;
    }
    isFilteringEnabled() {
        return this.filter;
    }
    isColumnManagerEnabled() {
        return this.columnsManager;
    }
    getMenus() {
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
    getActiveMenu() {
        return this.getMenus()[0];
    }
    getMainMenu() {
        return this.mainMenu;
    }
    getFilterMenu() {
        return this.filterMenu;
    }
    getColumnMenu() {
        return this.columnsMenu;
    }
    setMainMenu(mainMenu) {
        this.mainMenu = mainMenu;
    }
    setFilterMenu(filterMenu) {
        this.filterMenu = filterMenu;
    }
    setColumnsMenu(columnsMenu) {
        this.columnsMenu = columnsMenu;
    }
}

class StructureColumnMenuConfigArchive extends Archive {
    constructor() {
        super(StructureColumnMenuConfig.default());
    }
    nextConfig(config) {
        const menuConfig = StructureColumnMenuConfig.fromConfig(config);
        this.next(menuConfig);
    }
}
StructureColumnMenuConfigArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuConfigArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureColumnMenuConfigArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuConfigArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuConfigArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class RowSelectEnabledRepository extends AggregateArchive {
    constructor() {
        super();
    }
}

class StructureCellEditCloseAllService {
    constructor() {
        this.closeAll$ = new HermesSubject();
    }
    closeAll() {
        this.closeAll$.next();
    }
    onCloseAll() {
        return this.closeAll$.toObservable();
    }
}
StructureCellEditCloseAllService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditCloseAllService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureCellEditCloseAllService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditCloseAllService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditCloseAllService, decorators: [{
            type: Injectable
        }] });

class StructureHeaderTopEnabledArchive extends Archive {
    constructor() {
        super(true);
    }
}
StructureHeaderTopEnabledArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderTopEnabledArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureHeaderTopEnabledArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderTopEnabledArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderTopEnabledArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class StructureRowDetailConfigArchive extends Archive {
    constructor() {
        super({
            enabled: false,
            template: (item => 'Detail View')
        });
    }
}
StructureRowDetailConfigArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailConfigArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureRowDetailConfigArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailConfigArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailConfigArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

const structureRowDetailViewItem = new InjectionToken('structureRowDetailViewItem');
const structureRowDetailViewTemplate = new InjectionToken('structureRowDetailViewTemplate');

class DynamicallyCreatedComponent {
    constructor() {
        this.subClassConstructor = this.constructor;
        if (this.hasInputs()) {
            this.throwError('it cannot have properties annotated with @Inputs().');
        }
    }
    hasInputs() {
        return false;
        // Works with Angular 12
        // return !this.isEmpty((this.constructor as any).ɵcmp.inputs);
    }
    isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    throwError(reason) {
        throw new Error(`Component "${this.subClassConstructor.name}" is a DynamicallyCreatedComponent, ${reason}.`);
    }
}
DynamicallyCreatedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DynamicallyCreatedComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DynamicallyCreatedComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: DynamicallyCreatedComponent, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DynamicallyCreatedComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return []; } });

class StructureRowDetailViewComponent extends DynamicallyCreatedComponent {
    constructor(item, template, sanitizer) {
        super();
        this.item = item;
        this.template = template;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item.getSource(), this.item.getIndex()));
    }
    ngOnInit() {
        this.selectedRowValue = this.item.getSource();
    }
}
StructureRowDetailViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailViewComponent, deps: [{ token: structureRowDetailViewItem }, { token: structureRowDetailViewTemplate }, { token: i1$2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
StructureRowDetailViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureRowDetailViewComponent, selector: "div[gui-row-detail]", usesInheritance: true, ngImport: i0, template: "<div [innerHTML]=\"safeHTML\"></div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-row-detail]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [innerHTML]=\"safeHTML\"></div>\n" }]
        }], ctorParameters: function () { return [{ type: SelectedRow, decorators: [{
                    type: Inject,
                    args: [structureRowDetailViewItem]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [structureRowDetailViewTemplate]
                }] }, { type: i1$2.DomSanitizer }]; } });

class StructureRowDetailService extends Reactive {
    constructor(injector, structureId, structureDetailViewConfigArchive, formationEventService, drawerService) {
        super();
        this.injector = injector;
        this.structureId = structureId;
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        this.formationEventService = formationEventService;
        this.drawerService = drawerService;
        this.enabled = false;
    }
    init(ref) {
        this.elementRef = ref;
        this.structureDetailViewConfigArchive
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((config) => {
            this.config = config;
            if (config.enabled === true) {
                this.turnOn();
            }
            else if (config.enabled === false) {
                this.turnOff();
            }
        });
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.hermesTakeUntil())
            .subscribe((items) => {
            if (!this.enabled) {
                return;
            }
            this.drawerService.close();
            if (items.length === 0) {
                return;
            }
            const item = items[0];
            const injector = Injector.create({
                parent: this.injector,
                providers: [
                    { provide: structureRowDetailViewItem, useValue: item },
                    { provide: structureRowDetailViewTemplate, useValue: this.config.template }
                ]
            });
            this.drawerService.open({
                appendToElement: this.elementRef,
                component: StructureRowDetailViewComponent,
                injector: injector
            });
        });
    }
    turnOn() {
        this.enabled = true;
    }
    turnOff() {
        this.enabled = false;
    }
}
StructureRowDetailService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailService, deps: [{ token: i0.Injector }, { token: StructureId }, { token: StructureRowDetailConfigArchive }, { token: FormationEventRepository }, { token: i1.FabricDrawerService }], target: i0.ɵɵFactoryTarget.Injectable });
StructureRowDetailService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: StructureId }, { type: StructureRowDetailConfigArchive }, { type: FormationEventRepository }, { type: i1.FabricDrawerService }]; } });

class StructureTitlePanelConfigArchive extends Archive {
    constructor() {
        super({ ...StructureTitlePanelConfigArchive.titlePanelConfig });
    }
}
StructureTitlePanelConfigArchive.titlePanelConfig = {
    enabled: false,
    template: 'Title Panel'
};

class StructureFooterPanelConfigArchive extends Archive {
    constructor() {
        super({ ...StructureFooterPanelConfigArchive.footerPanelConfig });
    }
}
StructureFooterPanelConfigArchive.footerPanelConfig = {
    enabled: false,
    template: 'Footer Panel'
};

class ToggleSortCommand extends StructureCommand {
    constructor(structureId, compositionId, fieldId) {
        super(structureId, 'ToggleSortCommand');
        this.compositionId = compositionId;
        this.fieldId = fieldId;
    }
    getCompositionId() {
        return this.compositionId;
    }
    getFieldId() {
        return this.fieldId;
    }
}

class SortToggledEvent extends StructureDomainEvent {
    constructor(aggregateId, compositionId, directions) {
        super(aggregateId, { compositionId, directions }, 'SortToggledEvent');
        this.compositionId = compositionId;
        this.directions = directions;
    }
    getCompositionId() {
        return this.compositionId;
    }
    getDirections() {
        return this.directions;
    }
}

class ToggleSortCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return ToggleSortCommand;
    }
    handle(structure, command) {
        const aggregateId = command.getAggregateId(), compositionId = command.getCompositionId(), fieldId = command.getFieldId();
        const sorters = structure.toggleSort(fieldId);
        this.publishSortEvent(aggregateId, compositionId, fieldId, sorters);
    }
    publish(aggregate, command) {
    }
    publishSortEvent(aggregateId, compositionId, fieldId, sorters) {
        const directions = sorters.map((sorter) => {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        });
        this.domainEventPublisher.publish(new SortToggledEvent(aggregateId, compositionId, directions));
    }
}

class SetSortingCommand extends StructureCommand {
    constructor(structureId, sortingConfig) {
        super(structureId, 'SetSortingCommand');
        this.sortingConfig = sortingConfig;
    }
    getSortingConfig() {
        return this.sortingConfig;
    }
}

class SortingSetEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'SortingSetEvent');
    }
}

class SetSortingCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetSortingCommand;
    }
    handle(aggregate, command) {
        const sortingConfig = command.getSortingConfig();
        aggregate.setSortingConfig(sortingConfig);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new SortingSetEvent(command.getAggregateId()));
    }
}

class SetSortOrderCommand extends StructureCommand {
    constructor(structureId, compositionId, fieldId, sortOrder) {
        super(structureId, 'SetSortOrderCommand');
        this.compositionId = compositionId;
        this.fieldId = fieldId;
        this.sortOrder = sortOrder;
    }
    getCompositionId() {
        return this.compositionId;
    }
    getFieldId() {
        return this.fieldId;
    }
    getSortOrder() {
        return this.sortOrder;
    }
}

class SortOrderSetEvent extends StructureDomainEvent {
    constructor(aggregateId, compositionId, directions) {
        super(aggregateId, { compositionId, directions }, 'SortOrderSetEvent');
        this.compositionId = compositionId;
        this.directions = directions;
    }
    getCompositionId() {
        return this.compositionId;
    }
    getDirections() {
        return this.directions;
    }
}

class SetSortOrderCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetSortOrderCommand;
    }
    handle(structure, command) {
        const structureId = command.getAggregateId(), compositionId = command.getCompositionId(), fieldId = command.getFieldId(), sortOrder = command.getSortOrder();
        const sorters = structure.setSortOrder(fieldId, sortOrder);
        this.publishSortEvent(structureId, compositionId, fieldId, sorters);
    }
    publish(aggregate, command) {
    }
    publishSortEvent(aggregateId, compositionId, fieldId, sorters) {
        const directions = sorters.map((sorter) => {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        });
        this.domainEventPublisher.publish(new SortOrderSetEvent(aggregateId, compositionId, directions));
    }
}

class SortingDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    setSortingConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    }
    toggleSort(fieldId, compositionId, structureId) {
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    }
    setSortOrder(fieldId, sortOrder, compositionId, structureId) {
        this.commandDispatcher.dispatch(new SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder));
    }
}

class SortingDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(SortingDispatcher);
    }
    registerCommandHandlers() {
        return [
            ToggleSortCommandHandler,
            SetSortingCommandHandler,
            SetSortOrderCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

class SortingDomainPublisher extends SortingPublisher {
    constructor(sortingDispatcher) {
        super();
        this.sortingDispatcher = sortingDispatcher;
    }
    setSortingConfig(config, structureId) {
        this.sortingDispatcher.setSortingConfig(config, structureId);
    }
    toggleSort(fieldId, compositionId, structureId) {
        this.sortingDispatcher.toggleSort(fieldId, compositionId, structureId);
    }
    setSortOrder(fieldId, sortOrder, compositionId, structureId) {
        this.sortingDispatcher.setSortOrder(fieldId, sortOrder, compositionId, structureId);
    }
}
SortingDomainPublisher.services = [SortingDispatcher];

class SortingApiModule {
    registerProviders(container) {
        container.provide(SortingPublisher, SortingDomainPublisher);
    }
}
const sortingInitializer = new DomainInitializer(new SortingApiModule(), new SortingDomainModule());

sortingInitializer.init();
function provideSortingCommandInvoker() {
    return CoreContainer.resolve(SortingPublisher);
}
class SortingFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SortingFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SortingFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SortingFeatureModule, imports: [CommonModule] });
SortingFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingFeatureModule, providers: [
        { provide: SortingPublisher, useFactory: provideSortingCommandInvoker }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: SortingPublisher, useFactory: provideSortingCommandInvoker }
                    ]
                }]
        }] });

class FieldArchive extends AggregateArchive {
    constructor() {
        super(FieldArchive.default);
    }
}
FieldArchive.default = [];

class FieldModel {
    constructor(id, dataType, name) {
        this.id = id;
        this.dataType = dataType;
        this.name = name;
    }
    getFieldId() {
        return this.id;
    }
    getId() {
        return this.id.getId();
    }
    getDataType() {
        return this.dataType;
    }
    getName() {
        return this.name;
    }
}

class FieldConverter {
    convert(fields) {
        return fields.map((field) => {
            return this.convertOne(field);
        });
    }
    convertOne(field) {
        return new FieldModel(field.getId(), field.getDataType(), field.getName());
    }
}

class FieldCollection {
    constructor(fieldFactory) {
        this.fieldFactory = fieldFactory;
        this.fields = new Map();
    }
    getField(fieldId) {
        if (fieldId === null) {
            return this.getAllFields()[0];
        }
        return this.fields.get(fieldId.getId());
    }
    getAllFieldIds() {
        return Array.from(this.fields.keys());
    }
    getAllFields() {
        return Array.from(this.fields.values());
    }
    getFieldsAsMap() {
        return this.fields;
    }
    initFields(fieldConfigs) {
        const fields = this.fieldFactory.create(fieldConfigs);
        this.clear();
        this.addFields(fields);
    }
    addFields(fields) {
        for (const field of fields) {
            this.addField(field);
        }
    }
    addField(field) {
        this.fields.set(field.getId().toString(), field);
    }
    clear() {
        this.fields.clear();
    }
}

class FieldEntity extends Entity {
    constructor(id, field, name) {
        super(id);
        this.id = id;
        this.field = field;
        this.name = name;
    }
    static of(id, dataField, name) {
        return new FieldEntity(id, dataField, name);
    }
    getId() {
        return this.id;
    }
    getKey() {
        return this.getId().toString();
    }
    getDataType() {
        return this.field.getDataType();
    }
    getName() {
        return this.name;
    }
    /**
     * @deprecated
     */
    getField() {
        return this.field;
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getAccessor() {
        return this.field.getAccessor();
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getAccessorMethod() {
        return this.field.getAccessorMethod();
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getSearchAccessorMethod() {
        return this.field.getSearchAccessorMethod();
    }
    getValue(entity) {
        return this.field.getValue(entity);
    }
    getDisplayValue(value) {
        return this.field.getDisplayValue(value);
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    isSummaries(type) {
        return this.field.isSummaries(type);
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    isSummariesEnabled() {
        return this.field.isSummariesEnabled();
    }
    search(item, searchPhrase) {
        return this.field.search(item, searchPhrase);
    }
    filter(item, filterPhrase) {
        const value = this.field.getValue(item);
        if (this.field.getDataType() === DataType.NUMBER) {
            return this.field.filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return this.field.filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return this.field.filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return this.field.filter(value, filterPhrase);
        }
        else {
            return true;
        }
    }
    sort(entityOne, entityTwo, direction) {
        const valueOne = direction ? this.field.getSortValue(entityOne) : this.field.getSortValue(entityTwo), valueTwo = direction ? this.field.getSortValue(entityTwo) : this.field.getSortValue(entityOne);
        if (this.field.getDataType() === DataType.NUMBER) {
            return this.field.sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return this.field.sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return this.field.sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return this.field.sort(valueOne, valueTwo);
        }
        else {
            return 0;
        }
    }
}

class BaseDataField {
    constructor(accessor, dataType, matchers) {
        this.accessor = accessor;
        this.dataType = dataType;
        this.matchers = matchers;
        if (typeof accessor === 'string') {
            this.accessorMethod = (entity) => entity.getSourceItem()[accessor];
        }
        else if (typeof accessor === 'function') {
            this.accessorMethod = (entity) => accessor(entity.getSourceItem());
        }
        else {
            this.accessorMethod = (entity) => entity;
        }
    }
    getDataType() {
        return this.dataType;
    }
    getAccessor() {
        return this.accessor;
    }
    getAccessorMethod() {
        return this.accessorMethod;
    }
    getMatchers() {
        return this.matchers;
    }
    getSearchAccessorMethod() {
        let matcher;
        this.matchers
            .getSearchMatcher()
            .ifPresent((m) => {
            matcher = m;
        });
        if (matcher) {
            return (entity) => {
                const val = this.accessorMethod(entity);
                return matcher(val);
            };
        }
        else {
            return (entity) => {
                return this.accessorMethod(entity);
            };
        }
    }
    getValue(entity) {
        return this.accessorMethod(entity);
    }
    getSortValue(entity) {
        let value = this.accessorMethod(entity);
        this.matchers
            .getSortMatcher()
            .ifPresent((matcher) => {
            value = matcher(value);
        });
        return value;
    }
    getSearchValue(entity) {
        let value = this.accessorMethod(entity);
        this.matchers
            .getSearchMatcher()
            .ifPresent((matcher) => {
            value = matcher(value);
        });
        return value;
    }
}

class DataField extends BaseDataField {
    constructor(accessor, dataType, matchers, summariesConfig) {
        super(accessor, dataType, matchers);
        this.summariesEnabled = true;
        this.possibleSummaries = this.assignPossibleSummaries();
        this.assignSummaries(summariesConfig);
    }
    isSummaries(type) {
        if (!this.isSummariesEnabled()) {
            return false;
        }
        return !!(this.summariesTypes & type);
    }
    isSummariesEnabled() {
        return this.summariesEnabled;
    }
    setSummariesEnabled(enabled) {
        this.summariesEnabled = enabled;
    }
    assignSummaries(summariesConfig) {
        if (!!summariesConfig && Object.keys(summariesConfig).length !== 0) {
            if (summariesConfig.enabled) {
                this.summariesEnabled = !!summariesConfig.enabled;
            }
            if (summariesConfig.summariesTypes) {
                this.summariesTypes = 0;
                summariesConfig.summariesTypes.forEach((t) => {
                    this.summariesTypes |= t;
                });
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

var SummariesType;
(function (SummariesType) {
    SummariesType[SummariesType["COUNT"] = 1024] = "COUNT";
    SummariesType[SummariesType["DISTINCT"] = 1] = "DISTINCT";
    SummariesType[SummariesType["SUM"] = 2] = "SUM";
    SummariesType[SummariesType["AVERAGE"] = 4] = "AVERAGE";
    SummariesType[SummariesType["MIN"] = 8] = "MIN";
    SummariesType[SummariesType["MAX"] = 16] = "MAX";
    SummariesType[SummariesType["MEDIAN"] = 32] = "MEDIAN";
    SummariesType[SummariesType["TRUTHY"] = 64] = "TRUTHY";
    SummariesType[SummariesType["FALSY"] = 128] = "FALSY";
    SummariesType[SummariesType["EARLIEST"] = 256] = "EARLIEST";
    SummariesType[SummariesType["LATEST"] = 512] = "LATEST";
})(SummariesType || (SummariesType = {}));
// count
// count distinct
// percentile
// std.dev
// std.dev Pop
// variance
// variance pop

class UnknownDataField extends DataField {
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.UNKNOWN, matchers, summariesConfig);
    }
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    search(item, searchPhrase) {
        return false;
    }
    sort(one, two) {
        return 0;
    }
    filter(value, filterPhrase) {
        return false;
    }
    equals(item, value) {
        return false;
    }
    getDisplayValue(item) {
        return item;
    }
}

class NumberDataField extends DataField {
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.NUMBER, matchers, summariesConfig);
    }
    getField() {
        return this;
    }
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
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT |
            SummariesType.SUM |
            SummariesType.MIN |
            SummariesType.MAX |
            SummariesType.AVERAGE |
            SummariesType.MEDIAN;
    }
    search(item, searchPhrase) {
        return false;
    }
    sort(numOne, numTwo) {
        const sureNumOne = +numOne, sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    }
    filter(value, filterPhrase) {
        return value > filterPhrase;
    }
    equals(item, value) {
        return this.getValue(item) === value;
    }
    getDisplayValue(item) {
        return `${item}`;
    }
}

class StringDataField extends DataField {
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.STRING, matchers, summariesConfig);
    }
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    search(item, searchPhrase) {
        const value = this.getSearchValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }
    sort(strOne, strTwo) {
        const sureStrOne = '' + strOne, sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    }
    filter(value, filterPhrase) {
        return value.toLowerCase().indexOf(filterPhrase.toLowerCase()) > -1;
    }
    equals(item, value) {
        return this.getValue(item) === value;
    }
    getDisplayValue(item) {
        return item;
    }
}

class BooleanDataField extends DataField {
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.BOOLEAN, matchers, summariesConfig);
    }
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT |
        // 	SummariesType.TRUTHY |
        // 	SummariesType.FALSY;
    }
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT |
            SummariesType.TRUTHY |
            SummariesType.FALSY;
    }
    search(item, searchPhrase) {
        return false;
    }
    sort(booleanOne, booleanTwo) {
        const sureBoolOne = !!booleanOne, sureBoolTwo = !!booleanTwo;
        return (sureBoolOne === sureBoolTwo) ? 0 : sureBoolTwo ? -1 : 1;
    }
    filter(value, filterPhrase) {
        return value === filterPhrase;
    }
    equals(item, value) {
        return this.getValue(item) === value;
    }
    getDisplayValue(item) {
        return item ? 'True' : 'False';
    }
}

class DateDataField extends DataField {
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.DATE, matchers, summariesConfig);
    }
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    search(item, searchPhrase) {
        return false;
    }
    sort(dateOne, dateTwo) {
        return dateOne - dateTwo;
    }
    filter(value, filterPhrase) {
        return false;
    }
    equals(item, value) {
        return this.getValue(item).getTime() === value.getTime();
    }
    getDisplayValue(item) {
        return item.toDateString();
    }
}

class FieldMatchers {
    constructor(matcher, sortMatcher, searchMatcher) {
        this.matcher = matcher;
        this.sortMatcher = sortMatcher;
        this.searchMatcher = searchMatcher;
    }
    getMatcher() {
        return Optional.of(this.matcher);
    }
    getSortMatcher() {
        let matcher;
        if (this.sortMatcher) {
            matcher = this.sortMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    }
    getSearchMatcher() {
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

class DataFieldFactory {
    create(fieldConfig) {
        const fieldMatchers = this.createMatchers(fieldConfig);
        let columnType = fieldConfig.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownDataField(fieldConfig.field, fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberDataField(fieldConfig.field, fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.STRING) {
            return new StringDataField(fieldConfig.field, fieldMatchers);
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanDataField(fieldConfig.field, fieldMatchers);
        }
        if (columnType === DataType.DATE) {
            return new DateDataField(fieldConfig.field, fieldMatchers);
        }
        return new UnknownDataField(fieldConfig.field, fieldMatchers, fieldConfig.summaries);
    }
    createMatchers(fieldConfig) {
        const matcher = fieldConfig.matcher;
        let sortMatcher;
        if (fieldConfig.sorting) {
            sortMatcher = fieldConfig.sorting.matcher;
        }
        return new FieldMatchers(matcher, sortMatcher);
    }
}

class FieldEntityIdGenerator {
    generateId() {
        const id = RandomStringGenerator.generate();
        return new FieldId(id);
    }
}

class FieldEntityFactory {
    constructor(fieldIdGenerator, dataFieldFactory) {
        this.fieldIdGenerator = fieldIdGenerator;
        this.dataFieldFactory = dataFieldFactory;
    }
    create(configs) {
        if (!configs) {
            return [];
        }
        return configs.map((fieldConfig, index) => {
            const fieldId = this.fieldIdGenerator.generateId(), dataField = this.dataFieldFactory.create(fieldConfig);
            return new FieldEntity(fieldId, dataField, this.getFieldName(fieldConfig, index));
        });
    }
    getFieldName(fieldConfig, index) {
        if (typeof fieldConfig.field === 'string') {
            return fieldConfig.field.toLowerCase();
        }
        else {
            return 'Field #' + index;
        }
    }
}
FieldEntityFactory.services = [
    FieldEntityIdGenerator,
    DataFieldFactory
];

class FieldCollectionFactory {
    constructor(fieldFactory) {
        this.fieldFactory = fieldFactory;
    }
    create() {
        return new FieldCollection(this.fieldFactory);
    }
}
FieldCollectionFactory.services = [FieldEntityFactory];

class InitFieldsCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return InitFieldsCommand;
    }
    handle(structure, command) {
        const fieldConfigs = command.getFieldConfigs();
        structure.createFields(fieldConfigs);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class FieldsInitedEventHandler {
    constructor(fieldArchive, fieldConverter) {
        this.fieldArchive = fieldArchive;
        this.fieldConverter = fieldConverter;
    }
    forEvent() {
        return FieldsInitedEvent;
    }
    handle(event) {
        if (event.ofMessageType('FieldsInitedEvent')) {
            const fields = this.fieldConverter.convert(event.getFields());
            this.fieldArchive.next(event.getAggregateId(), fields);
        }
    }
}
FieldsInitedEventHandler.services = [
    FieldArchive,
    FieldConverter
];

class FieldDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    initFields(fieldConfigs, structureId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, fieldConfigs));
    }
}

class FieldDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(FieldCollectionFactory);
        container.provide(FieldEntityFactory);
        container.provide(FieldEntityIdGenerator);
        container.provide(DataFieldFactory);
        container.provide(FieldDispatcher);
    }
    registerCommandHandlers() {
        return [
            InitFieldsCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            FieldsInitedEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

class FieldDomainWarehouse extends FieldWarehouse {
    constructor(fieldReadModelArchive) {
        super();
        this.fieldReadModelArchive = fieldReadModelArchive;
    }
    onFields(structureId) {
        return this.fieldReadModelArchive.on(structureId);
    }
    findFields(structureId) {
        return this.fieldReadModelArchive.find(structureId);
    }
}
FieldDomainWarehouse.services = [FieldArchive];

class FieldDomainPublisher extends FieldPublisher {
    constructor(fieldDispatcher) {
        super();
        this.fieldDispatcher = fieldDispatcher;
    }
    initFields(fieldConfigs, structureId) {
        this.fieldDispatcher.initFields(fieldConfigs, structureId);
    }
}
FieldDomainPublisher.services = [FieldDispatcher];

class FieldApiModule {
    registerProviders(container) {
        container.provide(FieldPublisher, FieldDomainPublisher);
        container.provide(FieldArchive);
        container.provide(FieldConverter);
        container.provide(FieldWarehouse, FieldDomainWarehouse);
    }
}
const fieldInitializer = new DomainInitializer(new FieldApiModule(), new FieldDomainModule());

fieldInitializer.init();
function provideFieldCommandInvoker() {
    return CoreContainer.resolve(FieldPublisher);
}
function provideFieldWarehouse() {
    return CoreContainer.resolve(FieldWarehouse);
}
class FieldFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
FieldFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FieldFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FieldFeatureModule, imports: [CommonModule] });
FieldFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldFeatureModule, providers: [
        { provide: FieldPublisher, useFactory: provideFieldCommandInvoker },
        { provide: FieldWarehouse, useFactory: provideFieldWarehouse }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: FieldPublisher, useFactory: provideFieldCommandInvoker },
                        { provide: FieldWarehouse, useFactory: provideFieldWarehouse }
                    ]
                }]
        }] });

let SourceIsLoadingModel = class SourceIsLoadingModel {
    constructor(loading) {
        this.loading = loading;
    }
    isLoading() {
        return this.loading;
    }
};
SourceIsLoadingModel = __decorate([
    ReadModelObject
], SourceIsLoadingModel);

class SourceConverter {
    convert(aggregate) {
        return new SourceIsLoadingModel(aggregate.isLoading());
    }
}

class SetSourceLoadingEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'SetSourceLoadingEvent');
    }
}

class SourceSetLoadingCommand extends StructureCommand {
    constructor(structureId, enabled) {
        super(structureId, 'SourceSetLoadingCommand');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class SourceSetLoadingCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SourceSetLoadingCommand;
    }
    handle(aggregate, command) {
        const enabled = command.isEnabled(), source = aggregate.getSource();
        source.setLoading(enabled);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new SetSourceLoadingEvent(command.getAggregateId()));
    }
}

class SetOriginCommand extends StructureCommand {
    constructor(structureId, items = []) {
        super(structureId, 'SetOriginCommand');
        this.items = items;
    }
    getItems() {
        return this.items;
    }
}

class SetOriginCommandHandler {
    constructor(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    forCommand() {
        return SetOriginCommand;
    }
    handle(structure, command) {
        const items = command.getItems();
        structure.setOrigin(items);
    }
    publish(aggregate, command) {
        const aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
}
SetOriginCommandHandler.services = [SourceDomainEventPublisher];

class StructureEditSourceItemCommand extends StructureCommand {
    constructor(structureId, params) {
        super(structureId, 'StructureEditSourceItemCommand');
        this.params = params;
    }
    getParams() {
        return this.params;
    }
}

class StructureEditSourceItemCommandHandler {
    constructor(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    forCommand() {
        return StructureEditSourceItemCommand;
    }
    handle(structure, command) {
        const params = command.getParams();
        structure.editItem(params);
    }
    publish(aggregate, command) {
        const aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
}
StructureEditSourceItemCommandHandler.services = [SourceDomainEventPublisher];

class SourceDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    setLoading(structureId, enabled) {
        this.commandDispatcher.dispatch(new SourceSetLoadingCommand(structureId, enabled));
    }
    setOrigin(structureId, items) {
        this.commandDispatcher.dispatch(new SetOriginCommand(structureId, items));
    }
    editItem(structureId, params) {
        this.commandDispatcher.dispatch(new StructureEditSourceItemCommand(structureId, params));
    }
}

class OriginItemEntity extends Entity {
    constructor(id, sourceItem, position, version = 0) {
        super(id);
        this.sourceItem = sourceItem;
        this.position = position;
        this.version = version;
    }
    getSourceItem() {
        return this.sourceItem;
    }
    getVersion() {
        return this.version;
    }
    getPosition() {
        return this.position;
    }
    bumpVersion() {
        this.version += 1;
    }
    setPosition(position) {
        this.position = position;
    }
    clone() {
        const rawData = { ...this.sourceItem };
        return new OriginItemEntity(this.getId(), rawData, this.version);
    }
}

class StructureSourceItemEditedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, beforeItem, afterItem) {
        super(aggregateId, 'StructureSourceItemEditedAggregateEvent');
        this.beforeItem = beforeItem;
        this.afterItem = afterItem;
    }
    toDomainEvent() {
        return new StructureSourceItemEditedEvent(this.getAggregateId(), this.beforeItem, this.afterItem);
    }
    getBeforeItem() {
        return this.beforeItem;
    }
    getAfterItem() {
        return this.afterItem;
    }
}

class StructureOriginChangedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, origin) {
        super(aggregateId, 'StructureOriginChangedAggregateEvent');
        this.origin = origin;
    }
    toDomainEvent() {
        return new OriginSetEvent(this.getAggregateId(), this.origin);
    }
    getOrigin() {
        return this.origin;
    }
}

class OriginId extends EntityId {
    constructor(id) {
        super(id);
    }
    toString() {
        return this.getId();
    }
}

class SourceManager {
    constructor(formationManager) {
        this.loading = false;
        this.fetched = false;
        this.entities = [];
        // Entities after filtering, searching
        this.preparedEntities = [];
        this.slicedEntities = [];
        this.formationManager = formationManager;
    }
    isLoading() {
        return this.loading;
    }
    isFetched() {
        return this.fetched;
    }
    setLoading(enabled) {
        this.loading = enabled;
    }
    setEntities(ent) {
        this.entities = ent;
        this.recalculatePositions();
    }
    getEntities() {
        return this.entities;
    }
    setPreparedEntities() {
        this.preparedEntities = Array.from(this.entities);
    }
    getPreparedEntities() {
        return this.preparedEntities;
    }
    setSlicedEntities(ent) {
        this.slicedEntities = ent;
    }
    getSlicedEntities() {
        return this.slicedEntities;
    }
    setOrigin(items = [], structureId) {
        this.origin = this.convertItems(items);
        return this.createOriginChangedEvent(structureId);
    }
    setConvertedOrigin(items = [], structureId) {
        this.origin = Array.from(items);
        return this.createOriginChangedEvent(structureId);
    }
    getOrigin() {
        return this.origin;
    }
    getOriginSize() {
        return this.origin.length;
    }
    // editOriginItemByProperty(byField, value: any, field: Field, structureId: StructureId): AggregateEvent {
    //
    // }
    editOriginItem(itemId, value, field, structureId) {
        const item = this.findOriginItem(itemId), itemBeforeChange = item.clone();
        if (item) {
            item.sourceItem[field.getAccessor()] = value;
            item.bumpVersion();
        }
        return [
            new StructureSourceItemEditedAggregateEvent(structureId, itemBeforeChange, item.clone()),
            this.createOriginChangedEvent(structureId)
        ];
    }
    deleteAllSelected(structureId) {
        let events = [];
        const rows = this.formationManager.getSelectedRows();
        rows.forEach((r) => {
            events = events.concat(this.deleteOriginItemByItemId(new OriginId(r), structureId));
        });
        return events;
    }
    deleteOriginItem(payload, structureId) {
        if (payload instanceof OriginId) {
            return this.deleteOriginItemByItemId(payload, structureId);
        }
        else if (Array.isArray(payload)) {
            let events = [];
            payload.forEach((item) => {
                events = events.concat(this.deleteOneOriginItem(item, structureId));
            });
            return events;
        }
        else if (Number.isInteger(payload)) {
            return this.deleteOriginItemByIndex(payload, structureId);
        }
        else {
            return [];
        }
    }
    addOriginItem(item, structureId) {
        this.origin.push(item);
        return [this.createOriginChangedEvent(structureId)];
    }
    selectAll() {
        this.formationManager.selectAll(this.getEntities().map(e => e.getId().toString()));
    }
    unselectAll() {
        this.formationManager.unselectAll();
    }
    toggleRow(itemId, type) {
        this.formationManager.toggleRow(itemId, type, this.getEntities().map(e => e.getId().toString()));
    }
    getFormation() {
        return this.formationManager;
    }
    convertItems(items) {
        return items.map((item, index) => {
            return new OriginItemEntity(new OriginId(RandomStringGenerator.generate()), item, index);
        });
    }
    createOriginChangedEvent(structureId) {
        return new StructureOriginChangedAggregateEvent(structureId, this.origin);
    }
    findOriginItem(itemId) {
        return this.origin.find((item) => item.getId().toString() === itemId);
    }
    findOriginItemIndex(itemId) {
        return this.origin.findIndex((item) => item.getId().toString() === itemId);
    }
    recalculatePositions() {
        this.entities.forEach((ent, index) => {
            ent.setPosition(index);
        });
    }
    deleteOneOriginItem(item, structureId) {
        if (item instanceof OriginId) {
            return this.deleteOriginItemByItemId(item, structureId);
        }
        else if (Number.isInteger(item)) {
            return this.deleteOriginItemByIndex(item, structureId);
        }
        else {
            return [];
        }
    }
    deleteOriginItemByItemId(itemId, structureId) {
        const index = this.findOriginItemIndex(itemId.toString());
        return this.deleteOriginItemByIndex(index, structureId);
    }
    deleteOriginItemByIndex(index, structureId) {
        if (index > -1) {
            const removedElements = this.origin.splice(index, 1);
            if (removedElements.length > 0) {
                for (const element of removedElements) {
                    this.formationManager.unselectRow(element.getId().toString());
                }
                this.formationManager.calculateAllSelected(removedElements.map((f) => f.getId().toString()));
                this.formationManager.calculateAllUnselected();
            }
            return [
                this.createOriginChangedEvent(structureId)
            ];
        }
        return [];
    }
    deleteManyOriginItemByIndex(indexes, structureId) {
        let events = [];
        indexes.forEach((index) => {
            events = events.concat(this.deleteOriginItemByIndex(index, structureId));
        });
        return events;
    }
    deleteManyOriginItemByItemID(itemIds, structureId) {
        let events = [];
        itemIds.forEach((itemId) => {
            events = events.concat(this.deleteOriginItemByItemId(itemId, structureId));
        });
        return events;
    }
}

var RowSelectToggleType;
(function (RowSelectToggleType) {
    RowSelectToggleType[RowSelectToggleType["NONE"] = 0] = "NONE";
    RowSelectToggleType[RowSelectToggleType["ADD"] = 1] = "ADD";
    RowSelectToggleType[RowSelectToggleType["RANGE"] = 2] = "RANGE";
})(RowSelectToggleType || (RowSelectToggleType = {}));

class FormationManager {
    constructor(selectedRows) {
        this.enabled = true;
        this.mode = RowSelectionMode.SINGLE;
        this.selectedRows = selectedRows;
    }
    isAllSelected() {
        return this.allSelected;
    }
    isAllUnselected() {
        return this.allUnselected;
    }
    setSelection(enabled) {
        this.enabled = enabled;
    }
    setMode(mode) {
        this.mode = mode;
    }
    getSelectedRows() {
        return Array.from(this.selectedRows);
    }
    selectAll(allItemIds) {
        this.selectedRows = new Set(allItemIds);
        this.allSelected = true;
        this.allUnselected = false;
    }
    unselectAll() {
        this.selectedRows.clear();
        this.allSelected = false;
        this.allUnselected = true;
    }
    toggleRow(itemId, type, allItemIds) {
        if (!this.enabled) {
            return;
        }
        if (type === RowSelectToggleType.ADD && this.mode === RowSelectionMode.SINGLE) {
            type = RowSelectToggleType.NONE;
        }
        switch (type) {
            case RowSelectToggleType.NONE:
                if (this.selectedRows.has(itemId)) {
                    this.selectedRows.delete(itemId);
                }
                else {
                    this.selectedRows.clear();
                    this.selectedRows.add(itemId);
                }
                break;
            case RowSelectToggleType.ADD:
                if (this.selectedRows.has(itemId)) {
                    this.selectedRows.delete(itemId);
                }
                else {
                    this.selectedRows.add(itemId);
                }
                break;
            case RowSelectToggleType.RANGE:
                break;
            default:
                break;
        }
        this.calculateAllSelected(allItemIds);
        this.calculateAllUnselected();
    }
    calculateAllSelected(allItemIds) {
        if (allItemIds.length !== this.selectedRows.size) {
            this.allSelected = false;
        }
        else {
            const rows = Array.from(this.selectedRows);
            let equal = true;
            rows.sort();
            allItemIds.sort();
            for (let i = 0; i < rows.length; i += 1) {
                if (rows[i] !== allItemIds[i]) {
                    equal = false;
                    break;
                }
            }
            this.allSelected = equal;
        }
    }
    calculateAllUnselected() {
        this.allUnselected = this.selectedRows.size === 0;
    }
    unselectRow(itemId) {
        if (this.selectedRows.has(itemId)) {
            this.selectedRows.delete(itemId);
        }
    }
}

class FormationManagerFactory {
    create() {
        return new FormationManager(new Set());
    }
}

class SourceManagerFactory {
    constructor(formationManagerFactory) {
        this.formationManagerFactory = formationManagerFactory;
    }
    createDefault() {
        const fm = this.formationManagerFactory.create();
        return new SourceManager(fm);
    }
    create() {
        const fm = this.formationManagerFactory.create();
        return new SourceManager(fm);
    }
}
SourceManagerFactory.services = [FormationManagerFactory];

var DeleteCommandPayloadType;
(function (DeleteCommandPayloadType) {
    DeleteCommandPayloadType[DeleteCommandPayloadType["INDEX"] = 0] = "INDEX";
    DeleteCommandPayloadType[DeleteCommandPayloadType["ITEM_ID"] = 1] = "ITEM_ID";
    DeleteCommandPayloadType[DeleteCommandPayloadType["MANY_INDEX"] = 2] = "MANY_INDEX";
    DeleteCommandPayloadType[DeleteCommandPayloadType["MANY_ITEM_ID"] = 3] = "MANY_ITEM_ID";
})(DeleteCommandPayloadType || (DeleteCommandPayloadType = {}));
class DeleteOriginItemCommand extends StructureCommand {
    constructor(structureId, payload, type) {
        super(structureId, 'DeleteOriginItemCommand');
        this.payload = payload;
        this.type = type;
    }
    static byIndex(structureId, index) {
        return new DeleteOriginItemCommand(structureId, index, DeleteCommandPayloadType.INDEX);
    }
    static byManyIndex(structureId, indexes) {
        return new DeleteOriginItemCommand(structureId, indexes, DeleteCommandPayloadType.MANY_INDEX);
    }
    static byItemId(structureId, itemId) {
        return new DeleteOriginItemCommand(structureId, itemId, DeleteCommandPayloadType.ITEM_ID);
    }
    static byManyItemId(structureId, itemIds) {
        return new DeleteOriginItemCommand(structureId, itemIds, DeleteCommandPayloadType.MANY_ITEM_ID);
    }
    getType() {
        return this.type;
    }
    getPayload() {
        return this.payload;
    }
}

class DeleteOriginItemCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return DeleteOriginItemCommand;
    }
    handle(aggregate, command) {
        aggregate.deleteItem(command.getPayload());
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class StructureSourceOriginArchive extends AggregateArchive {
    constructor() {
        super(StructureSourceOriginArchive.default);
    }
}
StructureSourceOriginArchive.default = [];

class StructureOriginChangedEventHandler {
    constructor(structureSourceOriginRepository) {
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    forEvent() {
        return OriginSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('OriginSetEvent')) {
            const origin = event.getOrigin();
            this.structureSourceOriginRepository.next(event.getAggregateId(), origin);
        }
    }
}
StructureOriginChangedEventHandler.services = [StructureSourceOriginArchive];

class StructurePreparedItemsArchive extends AggregateArchive {
    constructor() {
        super(StructurePreparedItemsArchive.default);
    }
    /**
     * @deprecated
     */
    getPreparedItems(structureId) {
        return this.find(structureId).getValueOrNullOrThrowError();
    }
}
StructurePreparedItemsArchive.default = [];

class StructurePreparedItemsEventHandler {
    constructor(structurePreparedItemsRepository) {
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    forEvent() {
        return StructurePreparedEntitiesSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructurePreparedEntitiesSetEvent')) {
            const preparedItems = event.getPreparedItems();
            this.structurePreparedItemsRepository.next(event.getAggregateId(), preparedItems);
        }
    }
}
StructurePreparedItemsEventHandler.services = [StructurePreparedItemsArchive];

class SourceDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(StructureSourceOriginArchive);
        container.provide(SourceDispatcher);
        container.provide(SourceManagerFactory);
        container.provide(SourceDomainEventPublisher);
    }
    registerCommandHandlers() {
        return [
            SourceSetLoadingCommandHandler,
            SetOriginCommandHandler,
            StructureEditSourceItemCommandHandler,
            DeleteOriginItemCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            StructureOriginChangedEventHandler,
            StructurePreparedItemsEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

class SourceDomainWarehouse extends SourceWarehouse {
    constructor(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        super();
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    findEntities(structureId) {
        return this.structureRepository.getStructure(structureId).getEntities();
    }
    onEntities(structureId) {
        return this.structureRepository
            .on(structureId)
            .pipe(hermesMap((structure) => structure.getEntities()), hermesDistinctUntilChanged((ents1, ents2) => {
            if (ents1.length !== ents2.length) {
                return false;
            }
            let flag = true;
            ents1.forEach((ent, index) => {
                if (!ent.equals(ents2[index])) {
                    flag = false;
                    return;
                }
            });
            return flag;
        }));
    }
    onEntitiesSize(structureId) {
        return this.onEntities(structureId)
            .pipe(hermesMap((entities) => {
            return entities.length;
        }));
    }
    onceEntities(structureId) {
        return singleFromObservable(this.onEntities(structureId));
    }
    onOriginSize(structureId) {
        return this.structureSourceOriginRepository
            .on(structureId)
            .pipe(hermesMap(origin => origin.length));
    }
    onLoading(structureId) {
        return this.structureRepository
            .on(structureId)
            .pipe(hermesMap((structure) => structure.getSource().isLoading()));
    }
    onPreparedEntities(structureId) {
        return this.structurePreparedItemsRepository.on(structureId);
    }
    findPreparedEntities(structureId) {
        return this.structurePreparedItemsRepository.getPreparedItems(structureId);
    }
}
SourceDomainWarehouse.services = [StructureReadModelRepository, StructurePreparedItemsArchive, StructureSourceOriginArchive];

class StructureEditSourceItemParams {
    constructor(itemId, columnFieldId, // TODO Rethink
    value) {
        this.itemId = itemId;
        this.columnFieldId = columnFieldId;
        this.value = value;
    }
    getItemId() {
        return this.itemId;
    }
    getColumnFieldId() {
        return this.columnFieldId;
    }
    getValue() {
        return this.value;
    }
}

class SourceDomainPublisher extends SourcePublisher {
    constructor(sourceDispatcher, fieldWarehouse, sourceReadModelService) {
        super();
        this.sourceDispatcher = sourceDispatcher;
        this.fieldWarehouse = fieldWarehouse;
        this.sourceReadModelService = sourceReadModelService;
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    setOrigin(items, structureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    setLoading(enabled, structureId) {
        this.sourceDispatcher.setLoading(structureId, enabled);
    }
    editItem(params, structureId) {
        this.sourceDispatcher.editItem(structureId, params);
    }
    editItemByIndex(itemIndex, fieldIndex, value, structureId) {
        const itemId$ = toRxJsObservable(this.sourceReadModelService
            .onceEntities(structureId)
            .pipe(hermesMap((entities) => {
            return entities[itemIndex].getId();
        })));
        const fieldId$ = toRxJsObservable(this.fieldWarehouse.onFields(structureId));
        fromRxJsObservable(zip(itemId$, fieldId$))
            .pipe(hermesTake(1))
            .subscribe((array) => {
            const itemId = array[0], fields = array[1];
            this.editItem(new StructureEditSourceItemParams(itemId, fields[fieldIndex], value), structureId);
        });
    }
    deleteRow(row, structureId) {
        if (row.getItemId() !== undefined) {
            this.deleteItemById(row.getItemId(), structureId);
        }
        else if (row.getIndex() !== undefined) {
            this.deleteItemByIndex(row.getIndex(), structureId);
        }
    }
    deleteRows(rows, structureId) {
        if (rows.length > 0) {
            if (rows[0].getItemId() !== undefined) {
                this.deleteManyItemsByItemIds(rows.map(r => r.getItemId()), structureId);
            }
            else if (rows[0].getIndex() !== undefined) {
                this.deleteManyItemsByIndex(rows.map(r => r.getIndex()), structureId);
            }
        }
    }
    deleteItemByIndex(index, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byIndex(structureId, index));
    }
    deleteItemById(itemId, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byItemId(structureId, itemId));
    }
    deleteManyItemsByIndex(indexes, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyIndex(structureId, indexes));
    }
    deleteManyItemsByItemIds(itemIds, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyItemId(structureId, itemIds));
    }
}
SourceDomainPublisher.services = [SourceDispatcher, FieldWarehouse, SourceWarehouse];

class SourceApiModule {
    registerProviders(container) {
        container.provide(SourcePublisher, SourceDomainPublisher);
        container.provide(SourceWarehouse, SourceDomainWarehouse);
        container.provide(SourceEventService);
        container.provide(StructurePreparedItemsArchive);
        container.provide(SourceConverter);
    }
}
const sourceInitializer = new DomainInitializer(new SourceApiModule(), new SourceDomainModule());

sourceInitializer.init();
function provideSourceCommandInvoker() {
    return CoreContainer.resolve(SourcePublisher);
}
function provideSourceWarehouse() {
    return CoreContainer.resolve(SourceWarehouse);
}
function provideSourceEventRepository() {
    return CoreContainer.resolve(SourceEventService);
}
class SourceFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SourceFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SourceFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SourceFeatureModule, imports: [CommonModule] });
SourceFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceFeatureModule, providers: [
        { provide: SourcePublisher, useFactory: provideSourceCommandInvoker },
        { provide: SourceWarehouse, useFactory: provideSourceWarehouse },
        { provide: SourceEventService, useFactory: provideSourceEventRepository }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: SourcePublisher, useFactory: provideSourceCommandInvoker },
                        { provide: SourceWarehouse, useFactory: provideSourceWarehouse },
                        { provide: SourceEventService, useFactory: provideSourceEventRepository }
                    ]
                }]
        }] });

class SchemaAggregateRepository extends AggregateRepository {
}

class InMemorySchemaStore extends InMemoryStore {
}

class InMemorySchemaAggregateStore extends InMemoryAggregateStore {
    constructor(inMemorySchemaStore) {
        super(inMemorySchemaStore);
    }
}
InMemorySchemaAggregateStore.services = [InMemorySchemaStore];

class InMemorySchemaAggregateRepository extends SchemaAggregateRepository {
    constructor(inMemorySchemaAggregateStore) {
        super();
        this.inMemorySchemaAggregateStore = inMemorySchemaAggregateStore;
    }
    findById(schemaId) {
        return this.inMemorySchemaAggregateStore.findById(schemaId);
    }
    save(schemaAggregate) {
        this.inMemorySchemaAggregateStore.save(schemaAggregate);
    }
}
InMemorySchemaAggregateRepository.services = [InMemorySchemaAggregateStore];

class SchemaCommand extends Command {
}

class SetSchemaThemeCommand extends SchemaCommand {
    constructor(schemaId, theme) {
        super(schemaId, 'SetSchemaThemeCommand');
        this.theme = theme;
    }
    getTheme() {
        return this.theme;
    }
}

class SetSchemaThemeCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetSchemaThemeCommand;
    }
    handle(schemaAggregate, command) {
        const theme = command.getTheme();
        schemaAggregate.changeTheme(theme);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class SetRowColoringCommand extends SchemaCommand {
    constructor(schemaId, coloring) {
        super(schemaId, 'SetRowColoringCommand');
        this.coloring = coloring;
    }
    getColoring() {
        return this.coloring;
    }
}

class SetRowColoringCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetRowColoringCommand;
    }
    handle(schemaAggregate, command) {
        const coloring = command.getColoring();
        schemaAggregate.setRowColoring(coloring);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class SetSchemaHorizontalGridCommand extends SchemaCommand {
    constructor(schemaId, enabled) {
        super(schemaId, 'SetSchemaHorizontalGridCommand');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class SetSchemaHorizontalGridCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetSchemaHorizontalGridCommand;
    }
    handle(schemaAggregate, command) {
        const enabled = command.isEnabled();
        schemaAggregate.setHorizontalGrid(enabled);
    }
    publish(schemaAggregate, command) {
        this.domainEventPublisher.publishFromAggregate(schemaAggregate);
    }
}

class SetSchemaVerticalGridCommand extends SchemaCommand {
    constructor(schemaId, enabled) {
        super(schemaId, 'SetSchemaVerticalGridCommand');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class SetSchemaVerticalGridCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetSchemaVerticalGridCommand;
    }
    handle(schemaAggregate, command) {
        const enabled = command.isEnabled();
        schemaAggregate.setVerticalGrid(enabled);
    }
    publish(schemaAggregate, command) {
        this.domainEventPublisher.publishFromAggregate(schemaAggregate);
    }
}

class SchemaCssClassesRepository extends AggregateArchive {
    constructor() {
        super();
    }
}

class SchemaDomainEvent extends DomainEvent {
}

class SchemaThemeSetEvent extends SchemaDomainEvent {
    constructor(schemaId, theme) {
        super(schemaId, theme, 'SchemaThemeSetEvent');
        this.theme = theme;
    }
    getTheme() {
        return this.theme;
    }
}

class RowColoringSetEvent extends SchemaDomainEvent {
    constructor(schemaId, rowColoring) {
        super(schemaId, rowColoring, 'RowColoringSetEvent');
        this.rowColoring = rowColoring;
    }
    getRowColoring() {
        return this.rowColoring;
    }
}

class SchemaHorizontalGridSetEvent extends SchemaDomainEvent {
    constructor(schemaId, horizontalGrid) {
        super(schemaId, horizontalGrid, 'SchemaHorizontalGridSetEvent');
        this.horizontalGrid = horizontalGrid;
    }
    getHorizontalGrid() {
        return this.horizontalGrid;
    }
}

class SchemaVerticalGridSetEvent extends SchemaDomainEvent {
    constructor(schemaId, verticalGrid) {
        super(schemaId, verticalGrid, 'SchemaVerticalGridSetEvent');
        this.verticalGrid = verticalGrid;
    }
    getVerticalGrid() {
        return this.verticalGrid;
    }
}

class SchemaCssClass {
    constructor(verticalGrid, horizontalGrid, theme, rowColoring) {
        this.verticalGrid = verticalGrid;
        this.horizontalGrid = horizontalGrid;
        this.theme = theme;
        this.rowColoring = rowColoring;
    }
    getRowColoring() {
        return this.rowColoring;
    }
}

class SchemaCssClassesEventHandler {
    constructor(schemaCssClassesRepository) {
        this.schemaCssClassesRepository = schemaCssClassesRepository;
    }
    forEvents() {
        return [
            SchemaThemeSetEvent,
            RowColoringSetEvent,
            SchemaHorizontalGridSetEvent,
            SchemaVerticalGridSetEvent
        ];
    }
    handle(event) {
        if (event.ofMessageType('RowColoringSetEvent')) {
            this.rowColoring = event.getRowColoring();
        }
        if (event.ofMessageType('SchemaHorizontalGridSetEvent')) {
            this.horizontalGrid = event.getHorizontalGrid();
        }
        if (event.ofMessageType('SchemaVerticalGridSetEvent')) {
            this.verticalGrid = event.getVerticalGrid();
        }
        if (event.ofMessageType('SchemaThemeSetEvent')) {
            this.schemaTheme = event.getTheme();
        }
        this.publish(event.getAggregateId());
    }
    publish(aggregateId) {
        if (this.rowColoring !== undefined && this.horizontalGrid !== undefined && this.verticalGrid !== undefined && this.schemaTheme !== undefined) {
            this.schemaCssClassesRepository.next(aggregateId, new SchemaCssClass(this.verticalGrid, this.horizontalGrid, this.schemaTheme, this.rowColoring));
        }
    }
}
SchemaCssClassesEventHandler.services = [SchemaCssClassesRepository];

const schemaKey = 'SchemaAggregate';

class SchemaVerticalGridRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaVerticalGridSetEvent;
    }
}

class SchemaThemeRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaThemeSetEvent;
    }
}

class SchemaRowColoringRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return RowColoringSetEvent;
    }
}

class SchemaHorizontalGridRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaHorizontalGridSetEvent;
    }
}

class CreateSchemaCommand extends CreateAggregateCommand {
    constructor(schemaId) {
        super(schemaId, 'CreateSchemaCommand');
    }
}

class CreateSchemaCommandHandler {
    forCommand() {
        return CreateSchemaCommand;
    }
}

class SchemaAggregateEvent extends AggregateEvent {
}

class SchemaThemeSetAggregateEvent extends SchemaAggregateEvent {
    constructor(schemaId, theme) {
        super(schemaId, 'SchemaThemeSetAggregateEvent');
        this.theme = theme;
    }
    toDomainEvent() {
        return new SchemaThemeSetEvent(this.getAggregateId(), this.theme);
    }
}

class RowColoringSetAggregateEvent extends SchemaAggregateEvent {
    constructor(schemaId, rowColoring) {
        super(schemaId, 'RowColoringSetEvent');
        this.rowColoring = rowColoring;
    }
    toDomainEvent() {
        return new RowColoringSetEvent(this.getAggregateId(), this.rowColoring);
    }
}

class SchemaVerticalGridSetAggregateEvent extends SchemaAggregateEvent {
    constructor(schemaId, verticalGrid) {
        super(schemaId, 'SchemaHorizontalGridSetEvent');
        this.verticalGrid = verticalGrid;
    }
    toDomainEvent() {
        return new SchemaVerticalGridSetEvent(this.getAggregateId(), this.verticalGrid);
    }
}

class SchemaHorizontalGridSetAggregateEvent extends SchemaAggregateEvent {
    constructor(schemaId, horizontalGrid) {
        super(schemaId, 'SchemaHorizontalGridSetEvent');
        this.horizontalGrid = horizontalGrid;
    }
    toDomainEvent() {
        return new SchemaHorizontalGridSetEvent(this.getAggregateId(), this.horizontalGrid);
    }
}

class SchemaCreatedEvent extends SchemaDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'SchemaCreatedEvent');
    }
}

class SchemaCreatedAggregateEvent extends SchemaAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'SchemaCreatedAggregateEvent');
    }
    toDomainEvent() {
        return new SchemaCreatedEvent(this.getAggregateId());
    }
}

class SchemaAggregate extends AggregateRoot {
    constructor(id) {
        super(id, 'SchemaAggregate');
        this.setTheme(SchemaAggregate.DEFAULT_THEME);
        this.setHorizontalGrid(SchemaAggregate.DEFAULT_HORIZONTAL_GRID);
        this.setVerticalGrid(SchemaAggregate.DEFAULT_VERTICAL_GRID);
        this.setRowColoring(SchemaAggregate.DEFAULT_ROW_COLORING);
    }
    createEvent() {
        return SchemaCreatedAggregateEvent;
    }
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
    setRowColoring(coloring) {
        this.rowColoring = coloring;
        this.addEvent(new RowColoringSetAggregateEvent(this.getId(), this.rowColoring));
    }
    setVerticalGrid(enabled) {
        this.verticalGrid = enabled;
        this.addEvent(new SchemaVerticalGridSetAggregateEvent(this.getId(), this.verticalGrid));
    }
    setHorizontalGrid(enabled) {
        this.horizontalGrid = enabled;
        this.addEvent(new SchemaHorizontalGridSetAggregateEvent(this.getId(), this.horizontalGrid));
    }
    setTheme(theme) {
        this.theme = theme;
        this.addEvent(new SchemaThemeSetAggregateEvent(this.getId(), this.theme));
    }
}
SchemaAggregate.DEFAULT_THEME = SchemaTheme.GENERIC;
SchemaAggregate.DEFAULT_ROW_COLORING = SchemaRowColoring.ODD;
SchemaAggregate.DEFAULT_VERTICAL_GRID = true;
SchemaAggregate.DEFAULT_HORIZONTAL_GRID = true;

class SchemaAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    create(aggregateId) {
        return new SchemaAggregate(aggregateId);
    }
}

class SchemaRowClassArchive extends AggregateArchive {
    constructor() {
        super();
    }
}

class SchemaRowStyleArchive extends AggregateArchive {
    constructor() {
        super();
    }
}

class SchemaDomainModule {
    defineAggregate() {
        return {
            aggregateKey: schemaKey,
            createCommandHandler: CreateSchemaCommandHandler,
            factory: SchemaAggregateFactory,
            repository: InMemorySchemaAggregateRepository
        };
    }
    registerKey() {
        return schemaKey;
    }
    registerProviders(container) {
        container.provide(SchemaRowClassArchive);
        container.provide(SchemaRowStyleArchive);
    }
    registerCommandHandlers() {
        return [
            SetSchemaThemeCommandHandler,
            SetRowColoringCommandHandler,
            SetSchemaHorizontalGridCommandHandler,
            SetSchemaVerticalGridCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            SchemaThemeRepository,
            SchemaHorizontalGridRepository,
            SchemaRowColoringRepository,
            SchemaVerticalGridRepository
        ];
    }
    registerMultiDomainEventHandler() {
        return [
            SchemaCssClassesEventHandler
        ];
    }
}

class SchemaDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    create(schemaId) {
        this.commandDispatcher.dispatch(new CreateSchemaCommand(schemaId));
    }
    setTheme(theme, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaThemeCommand(schemaId, theme));
    }
    setRowColoring(rowColoring, schemaId) {
        this.commandDispatcher.dispatch(new SetRowColoringCommand(schemaId, rowColoring));
    }
    setVerticalGrid(verticalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaVerticalGridCommand(schemaId, verticalGrid));
    }
    setHorizontalGrid(horizontalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaHorizontalGridCommand(schemaId, horizontalGrid));
    }
}

class SchemaDomainPublisher extends SchemaPublisher {
    constructor(schemaDispatcher, structurePublisher, fabricModalThemeService, schemaRowClassArchive, schemaRowStyleArchive) {
        super();
        this.schemaDispatcher = schemaDispatcher;
        this.structurePublisher = structurePublisher;
        this.fabricModalThemeService = fabricModalThemeService;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
    }
    create(schemaId) {
        this.schemaDispatcher.create(schemaId.toAggregateId());
    }
    setTheme(theme, schemaId, structureId) {
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.fabricModalThemeService.changeTheme(this.toFabricTheme(theme)); // TODO github #2162
        this.structurePublisher.setRowHeightBasedOnTheme(theme, structureId);
    }
    setRowColoring(rowColoring, schemaId) {
        const schemaRowColoring = this.toSchemaRowColoring(rowColoring);
        this.schemaDispatcher.setRowColoring(schemaRowColoring, schemaId.toAggregateId());
    }
    setVerticalGrid(verticalGrid, schemaId) {
        this.schemaDispatcher.setVerticalGrid(verticalGrid, schemaId.toAggregateId());
    }
    setHorizontalGrid(horizontalGrid, schemaId) {
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    }
    setRowClass(schemaRowClass, schemaId) {
        return this.schemaRowClassArchive.next(schemaId.toAggregateId(), schemaRowClass);
    }
    setRowStyle(rowStyle, schemaId) {
        return this.schemaRowStyleArchive.next(schemaId.toAggregateId(), rowStyle);
    }
    // move to function
    toSchemaRowColoring(coloring) {
        switch (coloring) {
            case RowColoring.NONE:
                return SchemaRowColoring.NONE;
            case RowColoring.ODD:
                return SchemaRowColoring.ODD;
            case RowColoring.EVEN:
                return SchemaRowColoring.EVEN;
            default:
                return SchemaRowColoring.NONE;
        }
    }
    // move to function
    toFabricTheme(schemaTheme) {
        switch (schemaTheme) {
            case SchemaTheme.DARK: {
                return Theme.DARK;
            }
            case SchemaTheme.FABRIC: {
                return Theme.FABRIC;
            }
            case SchemaTheme.GENERIC: {
                return Theme.GENERIC;
            }
            case SchemaTheme.LIGHT: {
                return Theme.LIGHT;
            }
            case SchemaTheme.MATERIAL: {
                return Theme.MATERIAL;
            }
            default:
                return Theme.FABRIC;
        }
    }
}
SchemaDomainPublisher.services = [
    SchemaDispatcher,
    StructurePublisher,
    FabricModalThemeService,
    SchemaRowClassArchive,
    SchemaRowStyleArchive
];

class SchemaDomainWarehouse extends SchemaWarehouse {
    constructor(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository, schemaRowClassArchive, schemaRowStyleArchive) {
        super();
        this.schemaCssClassesRepository = schemaCssClassesRepository;
        this.schemaThemeRepository = schemaThemeRepository;
        this.schemaHorizontalGridRepository = schemaHorizontalGridRepository;
        this.schemaRowColoringRepository = schemaRowColoringRepository;
        this.schemaVerticalGridRepository = schemaVerticalGridRepository;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
    }
    onTheme(schemaId) {
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId());
    }
    onceTheme(schemaId) {
        return singleFromObservable(this.onTheme(schemaId));
    }
    onHorizontalGrid(schemaId) {
        return this.schemaHorizontalGridRepository
            .on(schemaId.toAggregateId());
    }
    onVerticalGrid(schemaId) {
        return this.schemaVerticalGridRepository
            .on(schemaId.toAggregateId());
    }
    onRowColoring(schemaId) {
        return this.schemaRowColoringRepository
            .on(schemaId.toAggregateId());
    }
    onCssClasses(schemaId) {
        return this.schemaCssClassesRepository
            .on(schemaId.toAggregateId());
    }
    onRowClass(schemaId) {
        return this.schemaRowClassArchive.on(schemaId.toAggregateId());
    }
    onRowStyle(schemaId) {
        return this.schemaRowStyleArchive.on(schemaId.toAggregateId());
    }
}
SchemaDomainWarehouse.services = [
    SchemaCssClassesRepository,
    SchemaThemeRepository,
    SchemaHorizontalGridRepository,
    SchemaRowColoringRepository,
    SchemaVerticalGridRepository,
    SchemaRowClassArchive,
    SchemaRowStyleArchive
];

class SchemaDomainEventRepository extends SchemaEventRepository {
    constructor() {
        super();
    }
    onThemeChanged(schemaId) {
        return this.onEvent(schemaId, SchemaThemeSetEvent)
            .pipe(hermesMap((event) => {
            return event.getTheme();
        }));
    }
    onHorizontalGridChanged(schemaId) {
        return this.onEvent(schemaId, SchemaHorizontalGridSetEvent)
            .pipe(hermesMap((event) => event.getHorizontalGrid()));
    }
    onVerticalGridChanged(schemaId) {
        return this.onEvent(schemaId, SchemaVerticalGridSetEvent)
            .pipe(hermesMap((event) => event.getVerticalGrid()));
    }
    onRowColoring(schemaId) {
        return this.onEvent(schemaId, RowColoringSetEvent)
            .pipe(hermesMap((event) => event.getRowColoring()));
    }
}

class SchemaApiModule {
    registerProviders(container) {
        container.provide(SchemaDispatcher);
        container.provide(SchemaAggregateRepository, InMemorySchemaAggregateRepository);
        container.provide(InMemorySchemaAggregateStore);
        container.provide(InMemorySchemaStore);
        container.provide(SchemaPublisher, SchemaDomainPublisher);
        container.provide(SchemaWarehouse, SchemaDomainWarehouse);
        container.provide(SchemaEventRepository, SchemaDomainEventRepository);
        container.provide(SchemaCssClassesRepository);
    }
}
const schemaInitializer = new DomainInitializer(new SchemaApiModule(), new SchemaDomainModule());
const initSchema = () => {
    schemaInitializer.init();
};

function useFactorySchemaCommandInvoker() {
    return CoreContainer.resolve(SchemaPublisher);
}
function useFactorySchemaWarehouse() {
    return CoreContainer.resolve(SchemaWarehouse);
}
function useFactorySchemaEventRepository() {
    return CoreContainer.resolve(SchemaEventRepository);
}
initSchema();
class SchemaFeatureModule extends FeatureModule {
    constructor() {
        super();
    }
    static forComponent() {
        return [];
    }
}
SchemaFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SchemaFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SchemaFeatureModule, imports: [CommonModule] });
SchemaFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaFeatureModule, providers: [
        { provide: SchemaPublisher, useFactory: useFactorySchemaCommandInvoker },
        { provide: SchemaWarehouse, useFactory: useFactorySchemaWarehouse },
        { provide: SchemaEventRepository, useFactory: useFactorySchemaEventRepository }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        { provide: SchemaPublisher, useFactory: useFactorySchemaCommandInvoker },
                        { provide: SchemaWarehouse, useFactory: useFactorySchemaWarehouse },
                        { provide: SchemaEventRepository, useFactory: useFactorySchemaEventRepository }
                    ],
                    declarations: [],
                    exports: []
                }]
        }], ctorParameters: function () { return []; } });

var StyleName;
(function (StyleName) {
    StyleName["WIDTH"] = "width";
    StyleName["HEIGHT"] = "height";
    StyleName["PADDING_TOP"] = "padding-top";
})(StyleName || (StyleName = {}));

var _a;
class StyleModifier extends Modifier {
    constructor(htmlElement) {
        super(htmlElement);
        this.htmlElement = htmlElement;
    }
    createModifier(htmlElement) {
        return new StyleModifier.StyleModifier(htmlElement);
    }
}
// eslint-disable-next-line
StyleModifier.StyleModifier = (_a = class {
        constructor(htmlElement) {
            this.htmlElement = htmlElement;
        }
        setStyleByName(name, value) {
            this.set(name, value);
        }
        setWidth(value) {
            this.set(StyleName.WIDTH, this.toPx(value));
        }
        setHeight(value) {
            this.set(StyleName.HEIGHT, this.toPx(value));
        }
        setPaddingTop(value) {
            this.set(StyleName.PADDING_TOP, this.toPx(value));
        }
        remove(styleName) {
            this.htmlElement[StyleModifier.StyleModifier.STYLE][styleName] = '';
        }
        removeStyleByName(name) {
            this.htmlElement[StyleModifier.StyleModifier.STYLE][name] = '';
        }
        clear() {
            this.htmlElement.removeAttribute(StyleModifier.StyleModifier.STYLE);
        }
        set(name, value) {
            this.htmlElement[StyleModifier.StyleModifier.STYLE][name] = value;
        }
        toPx(value) {
            return value > 0 ? `${value}px` : `${value}`;
        }
    },
    _a.STYLE = 'style',
    _a);

class SummariesPublisher {
    constructor() {
    }
}

class SummariesEventRepository extends EventRepository {
    constructor() {
        super();
    }
}

class StructureSetSummariesEnabledCommand extends StructureCommand {
    constructor(structureId, enabled) {
        super(structureId, 'StructureSetSummariesEnabledCommand');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

const StructureSummariesEnabledSetEventName = 'StructureSummariesEnabledSetEvent';
class StructureSummariesEnabledSetEvent extends StructureDomainEvent {
    constructor(aggregateId, enabled) {
        super(aggregateId, enabled, StructureSummariesEnabledSetEventName);
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class StructureSetSummariesEnabledCommandHandler {
    constructor(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return StructureSetSummariesEnabledCommand;
    }
    handle(structure, command) {
        const enabled = command.isEnabled();
        structure.setSummariesEnabled(enabled);
    }
    publish(aggregate, command) {
        const enabled = command.isEnabled(), aggregateEvents = aggregate.getEvents();
        this.domainEventPublisher.publish(new StructureSummariesEnabledSetEvent(command.getAggregateId(), enabled));
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
}
StructureSetSummariesEnabledCommandHandler.services = [SourceDomainEventPublisher];

class StructureSummariesChangedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, summarizedValues) {
        super(aggregateId, 'StructureSummariesChangedAggregateEvent');
        this.summarizedValues = summarizedValues;
    }
    toDomainEvent() {
        return new StructureSummariesChangedEvent(this.getAggregateId(), this.summarizedValues);
    }
    getSummaries() {
        return this.summarizedValues;
    }
}

class SummariesManager {
    constructor(structureId, calculators) {
        this.calculators = calculators;
        this.values = new Map();
        this.structureId = structureId;
        this.enabled = SummariesManager.DEFAULT_ENABLED;
    }
    calculate(fields, entities) {
        if (!this.enabled) {
            return [];
        }
        const calculations = new Map();
        this.calculators.forEach((calc) => {
            const aggregatedValues = calc.calculate(fields, entities);
            if (aggregatedValues) {
                Array.from(aggregatedValues.keys())
                    .forEach((key) => {
                    calculations.set(key, aggregatedValues.get(key));
                });
            }
        });
        if (calculations.size > 0) {
            return [
                new StructureSummariesChangedAggregateEvent(this.structureId, calculations)
            ];
        }
        else {
            return [];
        }
    }
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    add() {
    }
    remove() {
    }
    update() {
    }
}
SummariesManager.DEFAULT_ENABLED = false;

class SummariesEnabledArchive extends AggregateArchive {
    constructor() {
        super(SummariesManager.DEFAULT_ENABLED);
    }
    init(structureId) {
        this.next(structureId, SummariesManager.DEFAULT_ENABLED);
    }
}

class StructureSummariesEnabledSetEventHandler {
    constructor(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
    }
    forEvent() {
        return StructureSummariesEnabledSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructureSummariesEnabledSetEvent')) {
            this.summariesEnabledArchive.next(event.getAggregateId(), event.isEnabled());
        }
    }
}
StructureSummariesEnabledSetEventHandler.services = [SummariesEnabledArchive];

class SummariesCalculator {
    calculate(fields, items) {
        const filteredFields = fields.filter((field) => this.forDataType(field.getDataType()));
        if (!filteredFields || filteredFields.length === 0 || items.length === 0) {
            return null;
        }
        const count = new Map(), distinct = new Map();
        // init
        filteredFields.forEach((field) => {
            const key = field.getKey();
            count.set(key, 0);
            distinct.set(key, new Set());
            this.prepare(field);
        });
        // calculate
        items.forEach((item) => {
            filteredFields.forEach((field) => {
                const key = field.getKey(), value = field.getValue(item);
                if (value !== null || value !== undefined || value !== '') {
                    if (field.isSummaries(SummariesType.COUNT)) {
                        const countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isSummaries(SummariesType.DISTINCT)) {
                        const distinctSet = distinct.get(key);
                        distinctSet.add(value);
                    }
                }
                this.aggregate(field, value);
            });
        });
        filteredFields.forEach((field) => {
            this.postCalculate(field, items);
        });
        const summaries = new Map();
        filteredFields.forEach((field) => {
            const key = field.getKey();
            const aggregatedValues = this.generateAggregatedValues(field);
            if (field.isSummaries(SummariesType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isSummaries(SummariesType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            summaries.set(key, aggregatedValues);
        });
        return summaries;
    }
}

class SummariesValues {
    setCount(value) {
        this.count = value;
    }
    setDistinct(value) {
        this.distinct = value;
    }
}

class BooleanSummarizedValues extends SummariesValues {
    constructor(truthy, falsy) {
        super();
        this.truthy = truthy;
        this.falsy = falsy;
    }
}

class BooleanSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
        this.truthy = new Map();
        this.falsy = new Map();
    }
    forDataType(dataType) {
        return dataType === DataType.BOOLEAN;
    }
    prepare(field) {
        const key = field.getKey();
        if (field.isSummaries(SummariesType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isSummaries(SummariesType.FALSY)) {
            this.falsy.set(key, 0);
        }
    }
    postCalculate(field, items) {
    }
    aggregate(field, value) {
        const booleanValue = value, // (value as any === 'true'),
        key = field.getKey(), truthyForField = this.truthy.get(key), falsyForField = this.falsy.get(key);
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
    generateAggregatedValues(field) {
        const key = field.getKey();
        return new BooleanSummarizedValues(this.truthy.get(key), this.falsy.get(key));
    }
}

class DateSummarizedValues extends SummariesValues {
    constructor() {
        super();
    }
}

class DateSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
    }
    forDataType(dataType) {
        return dataType === DataType.DATE;
    }
    prepare(field) {
    }
    postCalculate(field, items) {
    }
    aggregate(field, value) {
    }
    generateAggregatedValues(field) {
        return new DateSummarizedValues();
    }
}

class NumberSummarizedValues extends SummariesValues {
    constructor(sum, min, max, average, median) {
        super();
        this.sum = this.setValueWithPrecision(sum);
        this.min = this.setValueWithPrecision(min);
        this.max = this.setValueWithPrecision(max);
        this.average = this.setValueWithPrecision(average);
        this.median = this.setValueWithPrecision(median);
    }
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

class NumberSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
        this.sum = new Map();
        this.min = new Map();
        this.max = new Map();
        this.average = new Map();
        this.median = new Map();
    }
    forDataType(dataType) {
        return dataType === DataType.NUMBER;
    }
    prepare(field) {
        const key = field.getKey();
        this.sum.set(key, 0);
        this.min.set(key, Number.MAX_SAFE_INTEGER);
        this.max.set(key, 0);
    }
    postCalculate(field, items) {
        const key = field.getKey();
        if (field.isSummaries(SummariesType.AVERAGE)) {
            this.average.set(key, this.sum.get(key) / items.length);
        }
        if (field.isSummaries(SummariesType.MEDIAN)) {
            this.median.set(key, field.getValue(items[Math.floor(items.length / 2)]));
        }
    }
    aggregate(field, value) {
        const numberValue = +value, key = field.getKey(), sumForField = this.sum.get(key), minForField = this.min.get(key), maxForField = this.max.get(key);
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
    generateAggregatedValues(field) {
        const key = field.getKey(), sum = field.isSummaries(SummariesType.SUM) ? this.sum.get(key) : undefined, min = field.isSummaries(SummariesType.MIN) ? this.min.get(key) : undefined, max = field.isSummaries(SummariesType.MAX) ? this.max.get(key) : undefined, average = field.isSummaries(SummariesType.AVERAGE) ? this.average.get(key) : undefined, median = field.isSummaries(SummariesType.MEDIAN) ? this.median.get(key) : undefined;
        return new NumberSummarizedValues(sum, min, max, average, median);
    }
}

class StringSummarizedValues extends SummariesValues {
    constructor() {
        super();
    }
}

class StringSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
    }
    forDataType(dataType) {
        return dataType === DataType.STRING;
    }
    prepare(field) {
    }
    postCalculate(field, items) {
    }
    aggregate(field, value) {
    }
    generateAggregatedValues(field) {
        return new StringSummarizedValues();
    }
}

class UnknownSummarizedValues extends SummariesValues {
    constructor() {
        super();
    }
}

class UnknownSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
    }
    forDataType(dataType) {
        return dataType === DataType.UNKNOWN;
    }
    prepare(field) {
    }
    postCalculate(field, items) {
    }
    aggregate(field, value) {
    }
    generateAggregatedValues(field) {
        return new UnknownSummarizedValues();
    }
}

const SUMMARIES_CALCULATORS = 'GUI - Summaries Calculators';

class SummariesManagerFactory {
    constructor(calculators) {
        this.calculators = calculators;
    }
    create(structureId) {
        return new SummariesManager(structureId, this.calculators);
    }
}
SummariesManagerFactory.services = [{ inject: SUMMARIES_CALCULATORS, collection: true }];

class SummariesDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    setSummariesEnabled(enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetSummariesEnabledCommand(structureId, enabled));
    }
}

class StructureSummariesPanelConfig {
    constructor() {
        this.top = StructureSummariesPanelConfig.defaultTop;
        this.bottom = StructureSummariesPanelConfig.defaultBottom;
    }
    setTop(top) {
        this.top = top;
    }
    setBottom(bottom) {
        this.bottom = bottom;
    }
    isTopEnabled() {
        return this.top;
    }
    isBottomEnabled() {
        return this.bottom;
    }
}
StructureSummariesPanelConfig.defaultTop = false;
StructureSummariesPanelConfig.defaultBottom = true;

class StructureSummariesConfigArchive extends AggregateArchive {
    constructor() {
        super(StructureSummariesConfigArchive.default);
    }
}
StructureSummariesConfigArchive.default = new StructureSummariesPanelConfig();

class StructureSummariesPanelConfigConverter {
    convert(config) {
        const panelConfig = new StructureSummariesPanelConfig();
        if (config.top !== undefined && config.top !== null) {
            panelConfig.setTop(config.top);
        }
        if (config.bottom !== undefined && config.bottom !== null) {
            panelConfig.setBottom(config.bottom);
        }
        return panelConfig;
    }
}

class SummariesDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(SummariesManagerFactory);
        container.provide(SummariesDispatcher);
        container.provide(StructureSummariesConfigArchive);
        container.provide(StructureSummariesPanelConfigConverter);
        container.provideCollection(SUMMARIES_CALCULATORS, BooleanSummariesCalculator);
        container.provideCollection(SUMMARIES_CALCULATORS, DateSummariesCalculator);
        container.provideCollection(SUMMARIES_CALCULATORS, NumberSummariesCalculator);
        container.provideCollection(SUMMARIES_CALCULATORS, StringSummariesCalculator);
        container.provideCollection(SUMMARIES_CALCULATORS, UnknownSummariesCalculator);
    }
    registerCommandHandlers() {
        return [
            StructureSetSummariesEnabledCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            StructureSummariesEnabledSetEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

class SummariesWarehouse {
    constructor() {
    }
}

class SummariesDomainWarehouse extends SummariesWarehouse {
    constructor(summariesEnabledArchive, structureSummariesArchive) {
        super();
        this.summariesEnabledArchive = summariesEnabledArchive;
        this.structureSummariesArchive = structureSummariesArchive;
    }
    onEnabled(structureId) {
        return this.summariesEnabledArchive.on(structureId);
    }
    onTopEnabled(structureId) {
        return this.onEnabled(structureId)
            .pipe(hermesSwitchMap((enabled) => {
            return this.structureSummariesArchive
                .on(structureId)
                .pipe(hermesMap((config) => enabled && config.isTopEnabled()));
        }));
    }
    onBottomEnabled(structureId) {
        return this.onEnabled(structureId)
            .pipe(hermesSwitchMap((enabled) => {
            return this.structureSummariesArchive
                .on(structureId)
                .pipe(hermesMap((config) => enabled && config.isBottomEnabled()));
        }));
    }
}
SummariesDomainWarehouse.services = [SummariesEnabledArchive, StructureSummariesConfigArchive];

class SummariesDomainPublisher extends SummariesPublisher {
    constructor(summariesDispatcher, configConverter, structureSummariesConfigArchive) {
        super();
        this.summariesDispatcher = summariesDispatcher;
        this.configConverter = configConverter;
        this.structureSummariesConfigArchive = structureSummariesConfigArchive;
    }
    setSummariesEnabled(enabled, structureId) {
        this.summariesDispatcher.setSummariesEnabled(enabled, structureId);
    }
    setConfig(config, structureId) {
        const summariesPanelConfig = this.configConverter.convert(config);
        this.setSummariesEnabled(config.enabled, structureId);
        this.structureSummariesConfigArchive.next(structureId, summariesPanelConfig);
    }
}
SummariesDomainPublisher.services = [SummariesDispatcher, StructureSummariesPanelConfigConverter, StructureSummariesConfigArchive];

class SummariesDomainEventRepository extends SummariesEventRepository {
    constructor() {
        super();
    }
    onSummariesChanged(structureId) {
        return this.onEvent(structureId, StructureSummariesChangedEvent);
    }
}

class SummariesApiModule {
    registerProviders(container) {
        container.provide(SummariesPublisher, SummariesDomainPublisher);
        container.provide(SummariesEventRepository, SummariesDomainEventRepository);
        container.provide(SummariesWarehouse, SummariesDomainWarehouse);
        container.provide(SummariesEnabledArchive);
    }
}
const summariesInitializer = new DomainInitializer(new SummariesApiModule(), new SummariesDomainModule());

class SummariesTranslations {
    constructor(distinctTooltip, averageTooltip, minTooltip, maxTooltip, medTooltip, countTooltip) {
        this.distinctTooltip = distinctTooltip;
        this.averageTooltip = averageTooltip;
        this.minTooltip = minTooltip;
        this.maxTooltip = maxTooltip;
        this.medTooltip = medTooltip;
        this.countTooltip = countTooltip;
    }
}

class StructureSummariesPanelComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, structureSummariesEventRepository, translationService, sourceWarehouse, rowSelectionTypeArchive, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureSummariesEventRepository = structureSummariesEventRepository;
        this.translationService = translationService;
        this.sourceWarehouse = sourceWarehouse;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.compositionWarehouse = compositionWarehouse;
        this.sourceEmpty = false;
        this.addClassToHost('gui-flex');
        this.subscribe(this.structureSummariesEventRepository.onSummariesChanged(this.structureId.toReadModelRootId()), (event) => {
            this.summaries = event.getSummaries();
        });
    }
    ngOnInit() {
        this.subscribe(this.rowSelectionTypeArchive.on(), (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        });
        this.subscribe(this.sourceWarehouse.onEntitiesSize(this.structureId), (size) => {
            this.sourceEmpty = size === 0;
        });
        this.subscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (columns) => {
            this.headerColumns = columns;
        });
        this.subscribe(this.translationService.onTranslation(), (translation) => {
            this.summariesTranslations = new SummariesTranslations(translation.summariesDistinctValuesTooltip, translation.summariesAverageTooltip, translation.summariesMinTooltip, translation.summariesMaxTooltip, translation.summariesMedTooltip, translation.summariesCountTooltip);
        });
    }
    isSummariesTypePresent(summaries) {
        return summaries !== undefined && summaries !== null;
    }
    getSelectorName() {
        return 'gui-structure-summaries-panel';
    }
}
StructureSummariesPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSummariesPanelComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: CompositionId }, { token: SummariesEventRepository }, { token: TranslationFacade }, { token: SourceWarehouse }, { token: RowSelectionTypeArchive }, { token: CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureSummariesPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureSummariesPanelComponent, selector: "div[gui-structure-summaries-panel][enabled]", inputs: { enabled: "enabled" }, usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"enabled && summaries && !sourceEmpty\">\n\n\t<div *ngIf=\"checkboxSelection\"\n\t\t class=\"gui-structure-summaries-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t</div>\n\n\t<div *ngFor=\"let column of headerColumns\"\n\t\t [style.width.px]=\"column.width\"\n\t\t class=\"gui-structure-summaries-cell\">\n\n\t\t<ng-container *ngIf=\"summaries && !!summaries.get(column.getFieldId().getId())\">\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.countTooltip\">{{'summariesCount' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).count }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.distinctTooltip\">{{'summariesDist' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\t{{'summariesSum' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.averageTooltip\">{{'summariesAvg' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).average }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.minTooltip\">\n\t\t\t\t\t\t\t{{'summariesMin' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).min }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.maxTooltip\">\n\t\t\t\t\t\t\t{{'summariesMax' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).max }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.medTooltip\">{{'summariesMed' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).median }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesTruthy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesFalsy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t</div>\n\n\t\t</ng-container>\n\t</div>\n\n</ng-container>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSummariesPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-summaries-panel][enabled]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"enabled && summaries && !sourceEmpty\">\n\n\t<div *ngIf=\"checkboxSelection\"\n\t\t class=\"gui-structure-summaries-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t</div>\n\n\t<div *ngFor=\"let column of headerColumns\"\n\t\t [style.width.px]=\"column.width\"\n\t\t class=\"gui-structure-summaries-cell\">\n\n\t\t<ng-container *ngIf=\"summaries && !!summaries.get(column.getFieldId().getId())\">\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.countTooltip\">{{'summariesCount' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).count }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.distinctTooltip\">{{'summariesDist' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\t{{'summariesSum' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.averageTooltip\">{{'summariesAvg' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).average }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.minTooltip\">\n\t\t\t\t\t\t\t{{'summariesMin' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).min }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.maxTooltip\">\n\t\t\t\t\t\t\t{{'summariesMax' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).max }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.medTooltip\">{{'summariesMed' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).median }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesTruthy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesFalsy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t</div>\n\n\t\t</ng-container>\n\t</div>\n\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: CompositionId }, { type: SummariesEventRepository }, { type: TranslationFacade }, { type: SourceWarehouse }, { type: RowSelectionTypeArchive }, { type: CompositionWarehouse }]; }, propDecorators: { enabled: [{
                type: Input
            }] } });

function provideSummariesCalculator(clazz) {
    return {
        provide: SUMMARIES_CALCULATORS,
        useClass: clazz,
        multi: true
    };
}

summariesInitializer.init();
function provideSummariesCommandInvoker() {
    return CoreContainer.resolve(SummariesPublisher);
}
function provideSummariesWarehouse() {
    return CoreContainer.resolve(SummariesWarehouse);
}
function provideSummariesEventRepository() {
    return CoreContainer.resolve(SummariesEventRepository);
}
class SummariesFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SummariesFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SummariesFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SummariesFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SummariesFeatureModule, declarations: [StructureSummariesPanelComponent], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule], exports: [StructureSummariesPanelComponent] });
SummariesFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SummariesFeatureModule, providers: [
        { provide: SummariesPublisher, useFactory: provideSummariesCommandInvoker },
        { provide: SummariesWarehouse, useFactory: provideSummariesWarehouse },
        { provide: SummariesEventRepository, useFactory: provideSummariesEventRepository },
        // provideClass(SummariesEnabledArchive),
        provideSummariesCalculator(BooleanSummariesCalculator),
        provideSummariesCalculator(DateSummariesCalculator),
        provideSummariesCalculator(NumberSummariesCalculator),
        provideSummariesCalculator(StringSummariesCalculator),
        provideSummariesCalculator(UnknownSummariesCalculator)
    ], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SummariesFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        TranslationFeatureModule
                    ],
                    declarations: [
                        StructureSummariesPanelComponent
                    ],
                    exports: [
                        StructureSummariesPanelComponent
                    ],
                    providers: [
                        { provide: SummariesPublisher, useFactory: provideSummariesCommandInvoker },
                        { provide: SummariesWarehouse, useFactory: provideSummariesWarehouse },
                        { provide: SummariesEventRepository, useFactory: provideSummariesEventRepository },
                        // provideClass(SummariesEnabledArchive),
                        provideSummariesCalculator(BooleanSummariesCalculator),
                        provideSummariesCalculator(DateSummariesCalculator),
                        provideSummariesCalculator(NumberSummariesCalculator),
                        provideSummariesCalculator(StringSummariesCalculator),
                        provideSummariesCalculator(UnknownSummariesCalculator)
                    ]
                }]
        }] });

class FormationWarehouse {
    constructor() {
    }
}

class RowSelectedReadModel {
    constructor(itemIds, allSelected, allUnselected) {
        this.itemIds = new Array();
        this.itemIds = itemIds;
        this.allSelected = allSelected;
        this.allUnselected = allUnselected;
    }
    getAll() {
        return this.itemIds;
    }
    isSelected(id) {
        return this.itemIds.some((itemId) => itemId === id);
    }
    isAllSelected() {
        return this.allSelected;
    }
    isAllUnselected() {
        return this.allUnselected;
    }
    isIndeterminate() {
        return !(this.isAllSelected() || this.isAllUnselected());
    }
}

class RowSelectedArchive extends AggregateArchive {
    constructor() {
        super(RowSelectedArchive.default);
    }
}
RowSelectedArchive.default = new RowSelectedReadModel([], false, false);

class RowSelectionModeArchive extends AggregateArchive {
    constructor() {
        super(RowSelectionModeArchive.default);
    }
}
RowSelectionModeArchive.default = RowSelectionMode.SINGLE;

class SetEnabledSelectionCommand extends StructureCommand {
    constructor(structureId, enabled) {
        super(structureId, 'SetEnabledSelectionCommand');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class SetEnabledSelectionCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetEnabledSelectionCommand;
    }
    handle(aggregate, command) {
        aggregate.setSelection(command.isEnabled());
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class ToggleSelectedRowCommand extends StructureCommand {
    constructor(structureId, selectedRow, type) {
        super(structureId, 'ToggleSelectedRowCommand');
        this.selectedRow = selectedRow;
        this.type = type;
    }
    getSelectedRow() {
        return this.selectedRow;
    }
    getType() {
        return this.type;
    }
}

class ToggleSelectedRowCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return ToggleSelectedRowCommand;
    }
    handle(aggregate, command) {
        const selectedRow = command.getSelectedRow(), type = command.getType();
        aggregate.toggleRow(selectedRow, type);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class SetSelectionModeCommand extends StructureCommand {
    constructor(structureId, mode) {
        super(structureId, 'SetSelectionModeCommand');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}

class SelectAllRowsCommand extends StructureCommand {
    constructor(structureId) {
        super(structureId, 'SelectAllRowsCommand');
    }
}

class UnselectAllRowsCommand extends StructureCommand {
    constructor(structureId) {
        super(structureId, 'UnselectAllRowsCommand');
    }
}

class FormationDispatcher {
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    toggleSelectedRow(selectedRow, type, structureId) {
        this.commandDispatcher.dispatch(new ToggleSelectedRowCommand(structureId, selectedRow, type));
    }
    changeMode(mode, structureId) {
        this.commandDispatcher.dispatch(new SetSelectionModeCommand(structureId, mode));
    }
    setSelection(enabled, structureId) {
        this.commandDispatcher.dispatch(new SetEnabledSelectionCommand(structureId, enabled));
    }
    selectAll(structureId) {
        this.commandDispatcher.dispatch(new SelectAllRowsCommand(structureId));
    }
    unselectAll(structureId) {
        this.commandDispatcher.dispatch(new UnselectAllRowsCommand(structureId));
    }
}
FormationDispatcher.services = [CommandDispatcher];

class SelectedRowChangedEventHandler {
    constructor(rowSelectedArchive) {
        this.rowSelectedArchive = rowSelectedArchive;
    }
    forEvent() {
        return SelectedRowChangedEvent;
    }
    handle(rowChangedEvent) {
        if (rowChangedEvent.ofMessageType('SelectedRowChangedEvent')) {
            const rowSelectedRead = new RowSelectedReadModel(rowChangedEvent.getSelectedRows(), rowChangedEvent.isAllSelected(), rowChangedEvent.isAllUnselected());
            this.rowSelectedArchive.next(rowChangedEvent.getAggregateId(), rowSelectedRead);
        }
    }
}
SelectedRowChangedEventHandler.services = [RowSelectedArchive];

class SetSelectionModeCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetSelectionModeCommand;
    }
    handle(aggregate, command) {
        aggregate.setSelectionMode(command.getMode());
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class SelectAllRowsCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SelectAllRowsCommand;
    }
    handle(aggregate, command) {
        aggregate.selectAll();
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class UnselectAllRowsCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return UnselectAllRowsCommand;
    }
    handle(aggregate, command) {
        aggregate.unselectAll();
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class SelectionModeSetEvent extends StructureDomainEvent {
    constructor(aggregateId, mode) {
        super(aggregateId, mode, 'SelectionModeSetEvent');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}

class SelectionModeSetEventHandler {
    constructor(rowSelectionModeRepository) {
        this.rowSelectionModeRepository = rowSelectionModeRepository;
    }
    forEvent() {
        return SelectionModeSetEvent;
    }
    handle(modeSetEvent) {
        if (modeSetEvent.ofMessageType('SelectionModeSetEvent')) {
            this.rowSelectionModeRepository.next(modeSetEvent.getAggregateId(), modeSetEvent.getMode());
        }
    }
}
SelectionModeSetEventHandler.services = [RowSelectionModeArchive];

class FormationDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(FormationDispatcher);
        container.provide(FormationManagerFactory);
    }
    registerCommandHandlers() {
        return [
            SetEnabledSelectionCommandHandler,
            SetSelectionModeCommandHandler,
            SelectAllRowsCommandHandler,
            UnselectAllRowsCommandHandler,
            ToggleSelectedRowCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            SelectedRowChangedEventHandler,
            SelectionModeSetEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

class FormationDomainWarehouse extends FormationWarehouse {
    constructor(rowSelectedRepository, rowSelectionModeRepository, sourceWarehouse) {
        super();
        this.rowSelectedRepository = rowSelectedRepository;
        this.rowSelectionModeRepository = rowSelectionModeRepository;
        this.sourceWarehouse = sourceWarehouse;
    }
    findSelectedRows(structureId) {
        const items = this.sourceWarehouse.findPreparedEntities(structureId), selectedItemIds = this.findSelectedItemIds(structureId).getValueOrNullOrThrowError();
        const selectedItems = [], length = items.length;
        for (let i = 0; i < length; i += 1) {
            const item = items[i];
            if (selectedItemIds.some((itemId) => itemId === item.getId().toString())) {
                selectedItems.push(new SelectedRow(item.getSourceItem(), i, item.getId()));
            }
        }
        return Optional.of(selectedItems);
    }
    onRowSelectedReadModel(structureId) {
        return this.rowSelectedRepository
            .on(structureId);
    }
    findSelectedItemIds(structureId) {
        return this.rowSelectedRepository
            .find(structureId)
            .map((r) => {
            return r.getAll();
        });
    }
    onSelectedRows(structureId) {
        return this.rowSelectedRepository
            .on(structureId)
            .pipe(hermesMap((rm) => {
            return rm.getAll();
        }));
    }
    onMode(structureId) {
        return this.rowSelectionModeRepository.on(structureId);
    }
}
FormationDomainWarehouse.services = [
    RowSelectedArchive,
    RowSelectionModeArchive,
    SourceWarehouse
];

class FormationDomainPublisher extends FormationPublisher {
    constructor(formationDispatcher) {
        super();
        this.formationDispatcher = formationDispatcher;
    }
    toggleSelectedRow(selectedRow, type, structureId) {
        this.formationDispatcher.toggleSelectedRow(selectedRow, type, structureId);
    }
    changeMode(mode, structureId) {
        this.formationDispatcher.changeMode(mode, structureId);
    }
    setSelection(enabled, structureId) {
        this.formationDispatcher.setSelection(enabled, structureId);
    }
    selectAll(structureId) {
        this.formationDispatcher.selectAll(structureId);
    }
    unselectAll(structureId) {
        this.formationDispatcher.unselectAll(structureId);
    }
}
FormationDomainPublisher.services = [FormationDispatcher];

class FormationApiModule {
    registerProviders(container) {
        container.provide(RowSelectedArchive);
        container.provide(FormationEventRepository);
        container.provide(FormationPublisher, FormationDomainPublisher);
        container.provide(FormationWarehouse, FormationDomainWarehouse);
        container.provide(RowSelectionModeArchive);
    }
}
const formationInitializer = new DomainInitializer(new FormationApiModule(), new FormationDomainModule());

formationInitializer.init();
function provideFormationCommandInvoker() {
    return CoreContainer.resolve(FormationPublisher);
}
function provideFormationWarehouse() {
    return CoreContainer.resolve(FormationWarehouse);
}
function provideFormationEventRepository() {
    return CoreContainer.resolve(FormationEventRepository);
}
class FormationFeatureModule extends FeatureModule {
    static forComponent() {
        return [
            RowSelectionTypeArchive
        ];
    }
}
FormationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FormationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FormationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FormationFeatureModule, imports: [CommonModule] });
FormationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FormationFeatureModule, providers: [
        { provide: FormationPublisher, useFactory: provideFormationCommandInvoker },
        { provide: FormationWarehouse, useFactory: provideFormationWarehouse },
        { provide: FormationEventRepository, useFactory: provideFormationEventRepository }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FormationFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: FormationPublisher, useFactory: provideFormationCommandInvoker },
                        { provide: FormationWarehouse, useFactory: provideFormationWarehouse },
                        { provide: FormationEventRepository, useFactory: provideFormationEventRepository }
                    ]
                }]
        }] });

class StructurePagingDefinitionBuilder extends GenericBuilder {
    constructor(enabled) {
        super();
        this.enabled = enabled;
    }
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
    buildObject() {
        return new PagingDefinition(this.enabled);
    }
}
class StructurePagingDefinitionDefaultBuilder extends StructurePagingDefinitionBuilder {
    constructor() {
        super(StructurePagingDefinitionDefaultBuilder.defaultEnabled);
    }
}
StructurePagingDefinitionDefaultBuilder.defaultEnabled = true;
class PagingDefinition {
    constructor(enabled) {
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}
PagingDefinition.Builder = StructurePagingDefinitionBuilder;
PagingDefinition.DefaultBuilder = StructurePagingDefinitionDefaultBuilder;

class StructureDefinitionBuilder extends GenericBuilder {
    constructor(headerEnabled, bottomPaging, topPaging) {
        super();
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = true;
    }
    withHeader(enabled) {
        this.headerEnabled = enabled;
        return this;
    }
    withBottomPaging(paging) {
        this.bottomPaging = paging;
        return this;
    }
    withTopPaging(paging) {
        this.topPaging = paging;
        return this;
    }
    withBorder(enabled) {
        this.border = enabled;
        return this;
    }
    buildObject() {
        return new StructureDefinition(this.headerEnabled, this.bottomPaging, this.topPaging, this.border);
    }
}
class StructureDefinitionDefaultBuilder extends StructureDefinitionBuilder {
    constructor() {
        super(StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging);
    }
}
StructureDefinitionDefaultBuilder.defaultHeaderEnabled = true;
StructureDefinitionDefaultBuilder.defaultBottomPaging = new PagingDefinition.DefaultBuilder().build();
StructureDefinitionDefaultBuilder.defaultTopPaging = new PagingDefinition.DefaultBuilder().build();
class StructureDefinition {
    constructor(headerEnabled, bottomPaging, topPaging, border) {
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = border;
    }
    isHeaderEnabled() {
        return this.headerEnabled;
    }
    isBorderEnabled() {
        return this.border;
    }
    getBottomPaging() {
        return this.bottomPaging;
    }
    getTopPaging() {
        return this.topPaging;
    }
}
StructureDefinition.Builder = StructureDefinitionBuilder;
StructureDefinition.DefaultBuilder = StructureDefinitionDefaultBuilder;

const prefix = 'Structure -';
const STRUCTURE_CSS_CLASS_NAME = new InjectionToken(`${prefix} - css className`);

class StructureTopPanelComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.addClassToHost('gui-p-6');
        this.addClassToHost('gui-border-b');
        this.addClassToHost('gui-border-b-solid');
    }
    getSelectorName() {
        return 'gui-structure-top-panel';
    }
}
StructureTopPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureTopPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureTopPanelComponent, selector: "div[gui-structure-top-panel]", usesInheritance: true, ngImport: i0, template: `

		<div gui-search-bar
			 class="gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto"></div>

		<!--		<div gui-filter-menu-trigger></div>-->

	`, isInline: true, dependencies: [{ kind: "component", type: SearchComponent, selector: "div[gui-search-bar]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-top-panel]',
                    template: `

		<div gui-search-bar
			 class="gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto"></div>

		<!--		<div gui-filter-menu-trigger></div>-->

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });

class UniqueValueListComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandInvoker) {
        super(changeDetectorRef, elementRef);
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.uniqueValues = [];
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onUniqueValues(this.structureId), (uniqueValuesReadModel) => {
            this.uniqueValues = uniqueValuesReadModel.getValues(this.fieldId);
            this.selectAllChecked = uniqueValuesReadModel.isSelectAllChecked(this.fieldId);
            this.selectAllIndeterminate = uniqueValuesReadModel.isIndeterminate(this.fieldId);
        });
    }
    toggleAllSelect() {
        event.stopPropagation();
        if (this.selectAllChecked) {
            this.filterCommandInvoker.unselectAllUniqueFilter(this.fieldId, this.structureId);
        }
        else {
            this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
        }
    }
    toggleSelect(uniqueValueReadModel) {
        event.stopPropagation();
        if (uniqueValueReadModel.isEnabled()) {
            this.filterCommandInvoker.unselectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
        else {
            this.filterCommandInvoker.selectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
    }
    clearFilters() {
        this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
    }
    getSelectorName() {
        return 'gui-unique-value-list';
    }
}
UniqueValueListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: UniqueValueListComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: FilterWarehouse }, { token: FilterPublisher }], target: i0.ɵɵFactoryTarget.Component });
UniqueValueListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: UniqueValueListComponent, selector: "div[gui-unique-value-list][fieldId]", inputs: { fieldId: "fieldId" }, usesInheritance: true, ngImport: i0, template: "<gui-checkbox (changed)=\"toggleAllSelect()\"\n\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t  [indeterminate]=\"selectAllIndeterminate\">\n\tSelect all\n</gui-checkbox>\n\n<div class=\"gui-unique-value-list-container gui-overflow-y-auto gui-overflow-x-hidden\">\n\t<div *ngFor=\"let value of uniqueValues\">\n\t\t<gui-checkbox (changed)=\"toggleSelect(value)\"\n\t\t\t\t\t  [checked]=\"value.isEnabled()\">\n\t\t\t{{value.getValue()}}\n\t\t</gui-checkbox>\n\t</div>\n</div>\n\n<div class=\"gui-unique-value-list-actions gui-px-4 gui-pb-4 gui-pt-2 gui-flex gui-justify-end\">\n\t<button (click)=\"clearFilters()\"\n\t\t\t[outline]=\"true\"\n\t\t\t[primary]=\"true\"\n\t\t\tclass=\"gui-clear-unique-filters gui-px-4 gui-py-2\"\n\t\t\tgui-button>\n\t\tClear\n\t</button>\n</div>\n", styles: [".gui-unique-value-list-container{max-height:300px}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i1.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: UniqueValueListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-unique-value-list][fieldId]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-checkbox (changed)=\"toggleAllSelect()\"\n\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t  [indeterminate]=\"selectAllIndeterminate\">\n\tSelect all\n</gui-checkbox>\n\n<div class=\"gui-unique-value-list-container gui-overflow-y-auto gui-overflow-x-hidden\">\n\t<div *ngFor=\"let value of uniqueValues\">\n\t\t<gui-checkbox (changed)=\"toggleSelect(value)\"\n\t\t\t\t\t  [checked]=\"value.isEnabled()\">\n\t\t\t{{value.getValue()}}\n\t\t</gui-checkbox>\n\t</div>\n</div>\n\n<div class=\"gui-unique-value-list-actions gui-px-4 gui-pb-4 gui-pt-2 gui-flex gui-justify-end\">\n\t<button (click)=\"clearFilters()\"\n\t\t\t[outline]=\"true\"\n\t\t\t[primary]=\"true\"\n\t\t\tclass=\"gui-clear-unique-filters gui-px-4 gui-py-2\"\n\t\t\tgui-button>\n\t\tClear\n\t</button>\n</div>\n", styles: [".gui-unique-value-list-container{max-height:300px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: FilterWarehouse }, { type: FilterPublisher }]; }, propDecorators: { fieldId: [{
                type: Input
            }] } });

var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["ASC"] = 0] = "ASC";
    SortOrder[SortOrder["DESC"] = 1] = "DESC";
    SortOrder[SortOrder["NONE"] = 2] = "NONE";
})(SortOrder || (SortOrder = {}));

var StructureArrowPosition;
(function (StructureArrowPosition) {
    StructureArrowPosition[StructureArrowPosition["UP"] = 0] = "UP";
    StructureArrowPosition[StructureArrowPosition["DOWN"] = 1] = "DOWN";
    StructureArrowPosition[StructureArrowPosition["LEFT"] = 2] = "LEFT";
    StructureArrowPosition[StructureArrowPosition["RIGHT"] = 3] = "RIGHT";
})(StructureArrowPosition || (StructureArrowPosition = {}));

class StructureArrowIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
        this.position = StructureArrowPosition.UP;
        if (this.sort) {
            this.addClassToHost('gui-structure-column-menu-sort-icon');
        }
        this.styleModifier = new StyleModifier(elementRef.nativeElement);
    }
    ngOnChanges(changes) {
        ifChanged(changes.position, () => {
            if (this.position) {
                this.styleModifier.getHost().setStyleByName('transform', this.getTransformValue());
            }
        });
    }
    getSelectorName() {
        return 'gui-structure-column-menu-arrow-icon';
    }
    getTransformValue() {
        return 'rotate(' + this.getRotationDeg() + 'deg)';
    }
    getRotationDeg() {
        switch (this.position) {
            case StructureArrowPosition.UP: {
                return 0;
            }
            case StructureArrowPosition.DOWN: {
                return 180;
            }
            case StructureArrowPosition.LEFT: {
                return -90;
            }
            case StructureArrowPosition.RIGHT: {
                return 90;
            }
            default: {
                return 0;
            }
        }
    }
}
StructureArrowIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureArrowIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
StructureArrowIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: { position: "position", sort: "sort" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
			<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureArrowIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-arrow-icon]',
                    template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
			<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
		</svg>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { position: [{
                type: Input
            }], sort: [{
                type: Input
            }] } });

class StructureColumnConfigSortComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.compositionReadModelService = compositionReadModelService;
        this.placement = Placement.Right;
        this.status = SortOrder;
        this.StructureArrowPosition = StructureArrowPosition;
    }
    ngOnInit() {
        this.sortStatus = this.column.getSortStatus();
        this.subscribe(this.compositionReadModelService.onSortOrder(this.column.getFieldId(), this.compositionId), (sortStatus) => {
            this.sortStatus = sortStatus;
        });
    }
    isAscSort() {
        return this.sortStatus === SortOrder.ASC;
    }
    isDescSort() {
        return this.sortStatus === SortOrder.DESC;
    }
    isNoneSort() {
        return this.sortStatus === SortOrder.NONE;
    }
    setSortOrder(sort) {
        event.stopPropagation();
        this.sortingCommandDispatcher.setSortOrder(this.column.getFieldId(), sort, this.compositionId, this.structureId);
    }
    getSelectorName() {
        return 'gui-structure-column-config-sort';
    }
}
StructureColumnConfigSortComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigSortComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: CompositionId }, { token: StructureId }, { token: SortingPublisher }, { token: CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnConfigSortComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnConfigSortComponent, selector: "div[gui-structure-column-config-sort]", inputs: { column: "column", dropdownTextTranslation: "dropdownTextTranslation" }, usesInheritance: true, ngImport: i0, template: "<gui-dropdown [dropdownText]=\"dropdownTextTranslation\"\n\t\t\t  [placement]=\"placement\"\n\t\t\t  [showOnHover]=\"true\"\n\t\t\t  [width]=\"225\"\n\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}\n\t\t\t<div [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}\n\t\t\t<div [position]=\"StructureArrowPosition.DOWN\" [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t{{'headerMenuMainTabColumnSortNone' | guiTranslate}}\n\t</gui-dropdown-item>\n\n</gui-dropdown>\n", dependencies: [{ kind: "component", type: i1.FabricDropdownComponent, selector: "gui-dropdown", inputs: ["disabled", "dropdownText", "isArrowEnabled", "placement", "width", "showOnHover"] }, { kind: "component", type: i1.DropdownItemComponent, selector: "gui-dropdown-item" }, { kind: "component", type: StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: ["position", "sort"] }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigSortComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-sort]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-dropdown [dropdownText]=\"dropdownTextTranslation\"\n\t\t\t  [placement]=\"placement\"\n\t\t\t  [showOnHover]=\"true\"\n\t\t\t  [width]=\"225\"\n\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}\n\t\t\t<div [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}\n\t\t\t<div [position]=\"StructureArrowPosition.DOWN\" [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t{{'headerMenuMainTabColumnSortNone' | guiTranslate}}\n\t</gui-dropdown-item>\n\n</gui-dropdown>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: CompositionId }, { type: StructureId }, { type: SortingPublisher }, { type: CompositionWarehouse }]; }, propDecorators: { column: [{
                type: Input
            }], dropdownTextTranslation: [{
                type: Input
            }] } });

class StructureColumnConfigColumnHideComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.columnHidden = new EventEmitter();
    }
    hideColumn() {
        this.columnHidden.emit();
    }
    getSelectorName() {
        return 'gui-structure-column-config-column-hide';
    }
}
StructureColumnConfigColumnHideComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigColumnHideComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnConfigColumnHideComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnConfigColumnHideComponent, selector: "div[gui-structure-column-config-column-hide]", inputs: { column: "column" }, outputs: { columnHidden: "columnHidden" }, usesInheritance: true, ngImport: i0, template: "<div (click)=\"hideColumn()\"\n\t class=\"gui-header-menu-item\">\n\t{{'headerMenuMainTabHideColumn' | guiTranslate}}\n</div>\n", dependencies: [{ kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigColumnHideComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-column-hide]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div (click)=\"hideColumn()\"\n\t class=\"gui-header-menu-item\">\n\t{{'headerMenuMainTabHideColumn' | guiTranslate}}\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { column: [{
                type: Input
            }], columnHidden: [{
                type: Output
            }] } });

class StructureColumnConfigColumnMoveComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.movedLeft = new EventEmitter();
        this.movedRight = new EventEmitter();
        this.StructureArrowPosition = StructureArrowPosition;
    }
    moveLeft() {
        this.movedLeft.emit();
    }
    moveRight() {
        this.movedRight.emit();
    }
    getSelectorName() {
        return 'gui-structure-column-config-column-move';
    }
}
StructureColumnConfigColumnMoveComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigColumnMoveComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnConfigColumnMoveComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnConfigColumnMoveComponent, selector: "div[gui-structure-column-config-column-move][column]", inputs: { column: "column" }, outputs: { movedLeft: "movedLeft", movedRight: "movedRight" }, usesInheritance: true, ngImport: i0, template: "<div class=\"gui-header-menu-column-move\">\n\t<div (click)=\"moveLeft()\"\n\t\t class=\"gui-header-menu-column-move-item left\">\n\t\t<div [position]=\"StructureArrowPosition.LEFT\"\n\t\t\t gui-structure-arrow-icon></div>\n\t\t{{'headerMenuMainTabMoveLeft' | guiTranslate}}\n\t</div>\n\n\t<div (click)=\"moveRight()\"\n\t\t class=\"gui-header-menu-column-move-item right\">\n\t\t{{'headerMenuMainTabMoveRight' | guiTranslate}}\n\t\t<div [position]=\"StructureArrowPosition.RIGHT\"\n\t\t\t gui-structure-arrow-icon></div>\n\t</div>\n</div>\n", dependencies: [{ kind: "component", type: StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: ["position", "sort"] }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigColumnMoveComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-column-move][column]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-header-menu-column-move\">\n\t<div (click)=\"moveLeft()\"\n\t\t class=\"gui-header-menu-column-move-item left\">\n\t\t<div [position]=\"StructureArrowPosition.LEFT\"\n\t\t\t gui-structure-arrow-icon></div>\n\t\t{{'headerMenuMainTabMoveLeft' | guiTranslate}}\n\t</div>\n\n\t<div (click)=\"moveRight()\"\n\t\t class=\"gui-header-menu-column-move-item right\">\n\t\t{{'headerMenuMainTabMoveRight' | guiTranslate}}\n\t\t<div [position]=\"StructureArrowPosition.RIGHT\"\n\t\t\t gui-structure-arrow-icon></div>\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { column: [{
                type: Input
            }], movedLeft: [{
                type: Output
            }], movedRight: [{
                type: Output
            }] } });

var ColumnAlign;
(function (ColumnAlign) {
    ColumnAlign[ColumnAlign["RIGHT"] = 0] = "RIGHT";
    ColumnAlign[ColumnAlign["CENTER"] = 1] = "CENTER";
    ColumnAlign[ColumnAlign["LEFT"] = 2] = "LEFT";
})(ColumnAlign || (ColumnAlign = {}));

// Basically header template
class CellTemplateWithContext {
    constructor(viewTemplate, editTemplate, 
    // public editContext: any,
    context, width, fieldId, columnDefinitionId, sortStatus, enabled, cssClasses, styles, sortable, align) {
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
        this.context = context;
        this.width = width;
        this.fieldId = fieldId;
        this.columnDefinitionId = columnDefinitionId;
        this.sortStatus = sortStatus;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
        this.styles = styles;
        this.sortable = sortable;
        this.align = align;
    }
    getColumnDefinitionId() {
        return this.columnDefinitionId;
    }
    getFieldId() {
        return this.fieldId;
    }
    getSortStatus() {
        return this.sortStatus;
    }
    getCssClasses() {
        return this.cssClasses;
    }
    getStyles() {
        return this.styles;
    }
    isSortEnabled() {
        return this.sortable;
    }
    isAscSort() {
        return this.sortStatus === SortOrder.ASC;
    }
    isDescSort() {
        return this.sortStatus === SortOrder.DESC;
    }
    isNoSort() {
        return this.sortStatus === SortOrder.NONE;
    }
    isEnabled() {
        return this.enabled;
    }
    isAlignLeft() {
        return this.align === ColumnAlign.LEFT;
    }
    isAlignCenter() {
        return this.align === ColumnAlign.CENTER;
    }
    isAlignRight() {
        return this.align === ColumnAlign.RIGHT;
    }
}

class StructureColumnConfigComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, structureCommandService, compositionReadModelService, filterWarehouse, translationFacade, structureColumnMenuConfigArchive, compositionId, compositionCommandInvoker, injector, column) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.compositionReadModelService = compositionReadModelService;
        this.filterWarehouse = filterWarehouse;
        this.translationFacade = translationFacade;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.compositionId = compositionId;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.injector = injector;
        this.column = column;
        this.uniqueValues = [];
        this.structureColumnConfigService = this.injector.get(StructureColumnConfigService);
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onUniqueValues(this.structureId), (uniqueValuesReadModel) => {
            this.uniqueValues = uniqueValuesReadModel.getValues(this.column.getFieldId());
        });
        this.subscribe(this.structureColumnMenuConfigArchive
            .on()
            .pipe(hermesSwitchMap((config) => {
            this.config = config;
            return this.translationFacade.onTranslation();
        })), (translation) => {
            this.setTabTitles(translation);
            this.dropdownTextTranslation = translation.headerMenuMainTabColumnSort;
        });
    }
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
    hideColumn() {
        this.compositionCommandInvoker.disableColumn(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    moveLeft() {
        this.compositionCommandInvoker.moveLeft(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    moveRight() {
        this.compositionCommandInvoker.moveRight(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    highlightColumn() {
        this.compositionCommandInvoker.highlightColumn(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    getSelectorName() {
        return 'gui-column-config';
    }
    setTabTitles(translation) {
        this.config.setMainMenu(translation.headerMenuMainTab);
        this.config.setFilterMenu(translation.headerMenuFilterTab);
        this.config.setColumnsMenu(translation.headerMenuColumnsTab);
    }
}
StructureColumnConfigComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: StructurePublisher }, { token: CompositionWarehouse }, { token: FilterWarehouse }, { token: TranslationFacade }, { token: StructureColumnMenuConfigArchive }, { token: CompositionId }, { token: CompositionPublisher }, { token: i0.Injector }, { token: 'column' }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnConfigComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnConfigComponent, selector: "div[gui-column-config]", viewQueries: [{ propertyName: "headerSortMenu", first: true, predicate: ["headerSortMenu"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"isEnabled()\"\n\t class=\"gui-header-menu-tab\">\n\n\t<gui-tab [active]=\"config.getActiveMenu()\" [menu]=\"config.getMenus()\">\n\n\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getMainMenu()\" class=\"gui-tab-item-dropdown\">\n\n\t\t\t\t<div *ngIf=\"column.isSortEnabled()\" [column]=\"column\"\n\t\t\t\t\t [dropdownTextTranslation]=\"dropdownTextTranslation\"\n\t\t\t\t\t gui-structure-column-config-sort>\n\t\t\t\t</div>\n\n\t\t\t\t<div (columnHidden)=\"hideColumn()\"\n\t\t\t\t\t [column]=\"column\"\n\t\t\t\t\t gui-structure-column-config-column-hide>\n\t\t\t\t</div>\n\n\t\t\t\t<div (click)=\"highlightColumn()\"\n\t\t\t\t\t class=\"gui-header-menu-item\">\n\t\t\t\t\t{{'headerMenuMainTabHighlightColumn' | guiTranslate}}\n\t\t\t\t</div>\n\n\t\t\t\t<div (movedLeft)=\"moveLeft()\"\n\t\t\t\t\t (movedRight)=\"moveRight()\"\n\t\t\t\t\t [column]=\"column\"\n\t\t\t\t\t gui-structure-column-config-column-move>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isFilteringEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>-->\n\n\t\t\t\t<div [fieldId]=\"column.getFieldId()\"\n\t\t\t\t\t gui-unique-value-list>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isColumnManagerEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t<div gui-structure-menu-column-manager>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t</gui-tab>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1.FabricTabComponent, selector: "gui-tab", inputs: ["menu", "active", "scrollActive"] }, { kind: "component", type: i1.TabItemComponent, selector: "gui-tab-item", inputs: ["tab"] }, { kind: "component", type: StructureMenuColumnManagerComponent, selector: "div[gui-structure-menu-column-manager]" }, { kind: "component", type: UniqueValueListComponent, selector: "div[gui-unique-value-list][fieldId]", inputs: ["fieldId"] }, { kind: "component", type: StructureColumnConfigSortComponent, selector: "div[gui-structure-column-config-sort]", inputs: ["column", "dropdownTextTranslation"] }, { kind: "component", type: StructureColumnConfigColumnHideComponent, selector: "div[gui-structure-column-config-column-hide]", inputs: ["column"], outputs: ["columnHidden"] }, { kind: "component", type: StructureColumnConfigColumnMoveComponent, selector: "div[gui-structure-column-config-column-move][column]", inputs: ["column"], outputs: ["movedLeft", "movedRight"] }, { kind: "pipe", type: TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-column-config]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"isEnabled()\"\n\t class=\"gui-header-menu-tab\">\n\n\t<gui-tab [active]=\"config.getActiveMenu()\" [menu]=\"config.getMenus()\">\n\n\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getMainMenu()\" class=\"gui-tab-item-dropdown\">\n\n\t\t\t\t<div *ngIf=\"column.isSortEnabled()\" [column]=\"column\"\n\t\t\t\t\t [dropdownTextTranslation]=\"dropdownTextTranslation\"\n\t\t\t\t\t gui-structure-column-config-sort>\n\t\t\t\t</div>\n\n\t\t\t\t<div (columnHidden)=\"hideColumn()\"\n\t\t\t\t\t [column]=\"column\"\n\t\t\t\t\t gui-structure-column-config-column-hide>\n\t\t\t\t</div>\n\n\t\t\t\t<div (click)=\"highlightColumn()\"\n\t\t\t\t\t class=\"gui-header-menu-item\">\n\t\t\t\t\t{{'headerMenuMainTabHighlightColumn' | guiTranslate}}\n\t\t\t\t</div>\n\n\t\t\t\t<div (movedLeft)=\"moveLeft()\"\n\t\t\t\t\t (movedRight)=\"moveRight()\"\n\t\t\t\t\t [column]=\"column\"\n\t\t\t\t\t gui-structure-column-config-column-move>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isFilteringEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>-->\n\n\t\t\t\t<div [fieldId]=\"column.getFieldId()\"\n\t\t\t\t\t gui-unique-value-list>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isColumnManagerEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t<div gui-structure-menu-column-manager>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t</gui-tab>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: StructurePublisher }, { type: CompositionWarehouse }, { type: FilterWarehouse }, { type: TranslationFacade }, { type: StructureColumnMenuConfigArchive }, { type: CompositionId }, { type: CompositionPublisher }, { type: i0.Injector }, { type: CellTemplateWithContext, decorators: [{
                    type: Inject,
                    args: ['column']
                }] }]; }, propDecorators: { headerSortMenu: [{
                type: ViewChild,
                args: ['headerSortMenu', { read: ElementRef, static: false }]
            }] } });

class StructureColumnConfigService extends Reactive {
    constructor(injector, schemaReadModelRootId, schemaWarehouse, structureThemeConverter, inlineDialogService) {
        super();
        this.injector = injector;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaWarehouse = schemaWarehouse;
        this.structureThemeConverter = structureThemeConverter;
        this.inlineDialogService = inlineDialogService;
    }
    open(elementRef, column) {
        this.close();
        const injector = Injector.create({
            providers: [{
                    provide: 'column',
                    useValue: column
                }],
            parent: this.injector
        });
        this.schemaWarehouse
            .onceTheme(this.schemaReadModelRootId)
            .pipe(this.hermesTakeUntil())
            .subscribe((theme) => {
            this.inlineDialogService.open(elementRef, StructureColumnConfigComponent, {
                injector: injector,
                placement: FabricPlacement.BOTTOM,
                offset: -34,
                theme: this.structureThemeConverter.convertTheme(theme),
                customClass: 'gui-inline-dialog-header-menu'
            });
        });
    }
    close() {
        this.inlineDialogService.close();
    }
}
StructureColumnConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigService, deps: [{ token: i0.Injector }, { token: SchemaReadModelRootId }, { token: SchemaWarehouse }, { token: StructureThemeConverter }, { token: i1.FabricInlineDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
StructureColumnConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: SchemaReadModelRootId }, { type: SchemaWarehouse }, { type: StructureThemeConverter }, { type: i1.FabricInlineDialogService }]; } });

class StructureColumnMenuIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-structure-column-menu-icon';
    }
}
StructureColumnMenuIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnMenuIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnMenuIconComponent, selector: "div[gui-structure-menu-icon]", usesInheritance: true, ngImport: i0, template: `
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.46">
			<line class="cls-1" x1="9.57" y1="3.73" x2="0.75" y2="3.73"/>
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="9.57" y1="6.71" x2="0.75" y2="6.71"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-menu-icon]',
                    template: `
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.46">
			<line class="cls-1" x1="9.57" y1="3.73" x2="0.75" y2="3.73"/>
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="9.57" y1="6.71" x2="0.75" y2="6.71"/>
		</svg>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });

class StructureColumnConfigTriggerComponent extends SmartComponent {
    constructor(elementRef, changeDetectorRef, structureCommandService, structureColumnMenuConfigArchive, structureColumnConfigService) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    ngOnInit() {
        this.subscribe(this.structureColumnMenuConfigArchive.on(), (config) => {
            this.config = config;
        });
    }
    openConfigDialog() {
        this.structureColumnConfigService.open(this.headerDialogContainer, this.column);
    }
    closeConfigDialog() {
        this.structureColumnConfigService.close();
    }
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
    getSelectorName() {
        return 'gui-structure-column-config-trigger';
    }
}
StructureColumnConfigTriggerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigTriggerComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: StructurePublisher }, { token: StructureColumnMenuConfigArchive }, { token: StructureColumnConfigService }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnConfigTriggerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnConfigTriggerComponent, selector: "div[gui-structure-column-config-trigger]", inputs: { column: "column" }, viewQueries: [{ propertyName: "headerDialogContainer", first: true, predicate: ["headerDialogContainer"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<div #headerDialogContainer\n\t (click)=\"openConfigDialog()\"\n\t *ngIf=\"isEnabled()\"\n\t class=\"gui-header-menu-icon-wrapper\">\n\n\t<div [ngClass]=\"'gui-header-menu-icon'\" gui-structure-menu-icon></div>\n\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: StructureColumnMenuIconComponent, selector: "div[gui-structure-menu-icon]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnConfigTriggerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-trigger]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div #headerDialogContainer\n\t (click)=\"openConfigDialog()\"\n\t *ngIf=\"isEnabled()\"\n\t class=\"gui-header-menu-icon-wrapper\">\n\n\t<div [ngClass]=\"'gui-header-menu-icon'\" gui-structure-menu-icon></div>\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: StructurePublisher }, { type: StructureColumnMenuConfigArchive }, { type: StructureColumnConfigService }]; }, propDecorators: { headerDialogContainer: [{
                type: ViewChild,
                args: ['headerDialogContainer', { read: ElementRef, static: false }]
            }], column: [{
                type: Input
            }] } });

class SelectAllComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, formationCommandDispatcher, formationWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.modeMulti = false;
    }
    ngOnInit() {
        this.subscribe(this.formationWarehouse.onMode(this.structureId), (mode) => {
            this.modeMulti = mode === RowSelectionMode.MULTIPLE;
        });
        this.subscribe(this.formationWarehouse.onRowSelectedReadModel(this.structureId), (rowSelectedReadModel) => {
            this.selectAllChecked = rowSelectedReadModel.isAllSelected();
            this.selectAllIndeterminate = rowSelectedReadModel.isIndeterminate();
        });
    }
    toggleSelectAll() {
        if (this.selectAllIndeterminate) {
            this.formationCommandDispatcher.unselectAll(this.structureId);
        }
        else {
            if (this.selectAllChecked) {
                this.formationCommandDispatcher.unselectAll(this.structureId);
            }
            else {
                this.formationCommandDispatcher.selectAll(this.structureId);
            }
        }
    }
    getSelectorName() {
        return 'gui-select-all';
    }
}
SelectAllComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SelectAllComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: FormationPublisher }, { token: FormationWarehouse }], target: i0.ɵɵFactoryTarget.Component });
SelectAllComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: SelectAllComponent, selector: "div[gui-select-all]", usesInheritance: true, ngImport: i0, template: "<gui-checkbox (changed)=\"toggleSelectAll()\"\n\t\t\t  *ngIf=\"modeMulti\"\n\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t  [indeterminate]=\"selectAllIndeterminate\">\n</gui-checkbox>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "directive", type: i1.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SelectAllComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-select-all]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-checkbox (changed)=\"toggleSelectAll()\"\n\t\t\t  *ngIf=\"modeMulti\"\n\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t  [indeterminate]=\"selectAllIndeterminate\">\n</gui-checkbox>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: FormationPublisher }, { type: FormationWarehouse }]; } });

class StructureHeaderColumnsComponent extends SmartComponent {
    constructor(elementRef, injector, changeDetectorRef, compositionId, structureId, formationCommandDispatcher, sortingCommandDispatcher) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.checkboxSelection = false;
        this.globalSearching = false;
    }
    toggleSort(column) {
        if (column.isSortEnabled()) {
            this.sortingCommandDispatcher.toggleSort(column.getFieldId(), this.compositionId, this.structureId);
        }
    }
    isGlobalSortEnabled() {
        return this.globalSearching;
    }
    getSelectorName() {
        return 'gui-structure-header-columns';
    }
}
StructureHeaderColumnsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderColumnsComponent, deps: [{ token: i0.ElementRef }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }, { token: CompositionId }, { token: StructureId }, { token: FormationPublisher }, { token: SortingPublisher }], target: i0.ɵɵFactoryTarget.Component });
StructureHeaderColumnsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureHeaderColumnsComponent, selector: "div[gui-structure-header-columns][columns]", inputs: { columns: "columns", checkboxSelection: "checkboxSelection" }, providers: [
        StructureColumnConfigService
    ], usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-header-cell gui-row-checkbox\n\t gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t<div gui-select-all></div>\n</div>\n\n<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [class]=\"column.getCssClasses()\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t [style.width.px]=\"column.width\"\n\t [style]=\"column.getStyles()\"\n\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div *ngIf=\"!column.isNoSort()\"\n\t\t\t [position]=\"column.getSortStatus()\"\n\t\t\t [sort]=\"true\"\n\t\t\t class=\"gui-ml-6\"\n\t\t\t gui-structure-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<div [column]=\"column\"\n\t\t\t gui-structure-column-config-trigger>\n\t\t</div>\n\t</div>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: StructureColumnConfigTriggerComponent, selector: "div[gui-structure-column-config-trigger]", inputs: ["column"] }, { kind: "component", type: StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: ["position", "sort"] }, { kind: "component", type: SelectAllComponent, selector: "div[gui-select-all]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderColumnsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-header-columns][columns]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        StructureColumnConfigService
                    ], template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-header-cell gui-row-checkbox\n\t gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t<div gui-select-all></div>\n</div>\n\n<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [class]=\"column.getCssClasses()\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t [style.width.px]=\"column.width\"\n\t [style]=\"column.getStyles()\"\n\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div *ngIf=\"!column.isNoSort()\"\n\t\t\t [position]=\"column.getSortStatus()\"\n\t\t\t [sort]=\"true\"\n\t\t\t class=\"gui-ml-6\"\n\t\t\t gui-structure-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<div [column]=\"column\"\n\t\t\t gui-structure-column-config-trigger>\n\t\t</div>\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }, { type: CompositionId }, { type: StructureId }, { type: FormationPublisher }, { type: SortingPublisher }]; }, propDecorators: { columns: [{
                type: Input
            }], checkboxSelection: [{
                type: Input
            }] } });

class StructureHeaderFiltersComponent extends PureComponent {
    constructor(structureFilterCommandService, formBuilder, cd, elementRef, structureId) {
        super(elementRef);
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
    ngOnInit() {
        this.filterForm
            .valueChanges
            // .pipe(
            // debounceTime(500)
            // )
            .subscribe((f) => {
            this.filter(f[this.filterFieldName]);
        });
    }
    filter(phrase) {
        if (phrase === undefined || phrase === null) {
            phrase = '';
        }
        // this.structureFilterCommandService.addFilter(this.columns[0].getFieldId(), '1', phrase, this.structureId);
    }
    clearFilters() {
        this.filterForm.reset();
    }
    turnOnFilterMode() {
        this.filterMode = true;
        this.cd.detectChanges();
    }
    turnOffFilterMode() {
        this.filterMode = false;
        this.cd.detectChanges();
    }
    getSelectorName() {
        return '';
    }
}
StructureHeaderFiltersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderFiltersComponent, deps: [{ token: FilterPublisher }, { token: i1$1.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }], target: i0.ɵɵFactoryTarget.Component });
StructureHeaderFiltersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureHeaderFiltersComponent, selector: "div[gui-structure-header-filters][columns]", inputs: { columns: "columns" }, outputs: { closed: "closed" }, usesInheritance: true, ngImport: i0, template: `

		<ng-container *ngIf="!filterMode">

			<div *ngFor="let cell of columns"
				 [style.width.px]="cell.width"
				 class="gui-header-cell gui-flex gui-justify-between
\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border
\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis">

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

	`, isInline: true, dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }, { kind: "component", type: i1.FabricInputComponent, selector: "input[gui-input]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderFiltersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-header-filters][columns]',
                    template: `

		<ng-container *ngIf="!filterMode">

			<div *ngFor="let cell of columns"
				 [style.width.px]="cell.width"
				 class="gui-header-cell gui-flex gui-justify-between
\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border
\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis">

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
                }]
        }], ctorParameters: function () { return [{ type: FilterPublisher }, { type: i1$1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }]; }, propDecorators: { columns: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });

class VerticalFormationWarehouse {
    constructor() {
    }
}

class StructureHeaderGroupsComponent extends PureComponent {
    constructor(elementRef, injector, changeDetectorRef, compositionId, structureId, formationCommandDispatcher, sortingCommandDispatcher) {
        super(elementRef);
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.checkboxSelection = false;
        this.globalSearching = false;
    }
    toggleSort(column) {
        if (column.isSortEnabled()) {
            this.sortingCommandDispatcher.toggleSort(column.getFieldId(), this.compositionId, this.structureId);
        }
    }
    isSortAsc(column) {
        return column.getSortStatus() === SortOrder.ASC;
    }
    isSortDesc(column) {
        return column.getSortStatus() === SortOrder.DESC;
    }
    isGlobalSortEnabled() {
        return this.globalSearching;
    }
    getSelectorName() {
        return 'gui-structure-header-groups';
    }
}
StructureHeaderGroupsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderGroupsComponent, deps: [{ token: i0.ElementRef }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }, { token: CompositionId }, { token: StructureId }, { token: FormationPublisher }, { token: SortingPublisher }], target: i0.ɵɵFactoryTarget.Component });
StructureHeaderGroupsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureHeaderGroupsComponent, selector: "div[gui-structure-header-groups][groups][checkboxSelection]", inputs: { groups: "groups", showGroups: "showGroups", checkboxSelection: "checkboxSelection" }, providers: [
        StructureColumnConfigService
    ], usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-header-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t<div gui-select-all></div>\n</div>\n\n<div *ngFor=\"let group of groups\"\n\t [style.width.px]=\"group.width\"\n\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t<div class=\"gui-header-title\">\n\t\t{{group.header}}\n\t</div>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: SelectAllComponent, selector: "div[gui-select-all]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderGroupsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-header-groups][groups][checkboxSelection]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        StructureColumnConfigService
                    ], template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-header-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t<div gui-select-all></div>\n</div>\n\n<div *ngFor=\"let group of groups\"\n\t [style.width.px]=\"group.width\"\n\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t<div class=\"gui-header-title\">\n\t\t{{group.header}}\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }, { type: CompositionId }, { type: StructureId }, { type: FormationPublisher }, { type: SortingPublisher }]; }, propDecorators: { groups: [{
                type: Input
            }], showGroups: [{
                type: Input
            }], checkboxSelection: [{
                type: Input
            }] } });

class StructureHeaderComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, filterWarehouse, structureWarehouse, rowSelectionTypeArchive, structureVerticalFormationWarehouse, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.filterWarehouse = filterWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.compositionWarehouse = compositionWarehouse;
        this.headerColumns = [];
        this.filterRowEnabled = false;
        this.showGroups = false;
        this.styleModifier = new StyleModifier(elementRef.nativeElement);
    }
    ngOnInit() {
        this.subscribe(this.rowSelectionTypeArchive.on(), (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        });
        this.subscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (columns) => {
            this.headerColumns = columns;
        });
        this.subscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (width) => {
            this.styleModifier.getElement(this.containerRef.nativeElement).setWidth(width);
        });
        this.subscribe(this.filterWarehouse.onFilteringEnabled(this.structureId), (enabled) => {
            this.filterRowEnabled = enabled;
        });
        this.subscribe(this.compositionWarehouse.onGroups(this.compositionId), (collection) => {
            this.showGroups = collection.isVisible();
            this.groups = collection.getGroups();
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.subscribeWithoutRender(this.structureVerticalFormationWarehouse.onRowHeight(this.structureId), (rowHeight) => {
            const headerHeight = +(rowHeight) + 2;
            if (this.filtersRef) {
                this.styleModifier.getElement(this.filtersRef.nativeElement).setHeight(headerHeight);
            }
        });
    }
    getSelectorName() {
        return 'gui-structure-header';
    }
}
StructureHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: CompositionId }, { token: FilterWarehouse }, { token: StructureWarehouse }, { token: RowSelectionTypeArchive }, { token: VerticalFormationWarehouse }, { token: CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureHeaderComponent, selector: "div[gui-structure-header]", viewQueries: [{ propertyName: "containerRef", first: true, predicate: StructureHeaderColumnsComponent, descendants: true, read: ElementRef, static: true }, { propertyName: "filtersRef", first: true, predicate: StructureHeaderFiltersComponent, descendants: true, read: ElementRef, static: true }], usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"showGroups\"\n\t [checkboxSelection]=\"checkboxSelection\"\n\t [groups]=\"groups\"\n\t class=\"gui-header\"\n\t gui-structure-header-groups>\n</div>\n\n<div [checkboxSelection]=\"checkboxSelection\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-columns>\n</div>\n\n<div *ngIf=\"filterRowEnabled\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-filters>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: StructureHeaderColumnsComponent, selector: "div[gui-structure-header-columns][columns]", inputs: ["columns", "checkboxSelection"] }, { kind: "component", type: StructureHeaderGroupsComponent, selector: "div[gui-structure-header-groups][groups][checkboxSelection]", inputs: ["groups", "showGroups", "checkboxSelection"] }, { kind: "component", type: StructureHeaderFiltersComponent, selector: "div[gui-structure-header-filters][columns]", inputs: ["columns"], outputs: ["closed"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-header]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"showGroups\"\n\t [checkboxSelection]=\"checkboxSelection\"\n\t [groups]=\"groups\"\n\t class=\"gui-header\"\n\t gui-structure-header-groups>\n</div>\n\n<div [checkboxSelection]=\"checkboxSelection\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-columns>\n</div>\n\n<div *ngIf=\"filterRowEnabled\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-filters>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: CompositionId }, { type: FilterWarehouse }, { type: StructureWarehouse }, { type: RowSelectionTypeArchive }, { type: VerticalFormationWarehouse }, { type: CompositionWarehouse }]; }, propDecorators: { containerRef: [{
                type: ViewChild,
                args: [StructureHeaderColumnsComponent, { read: ElementRef, static: true }]
            }], filtersRef: [{
                type: ViewChild,
                args: [StructureHeaderFiltersComponent, { read: ElementRef, static: true }]
            }] } });

const structureParentComponent = new InjectionToken('StructureParentComponent');

class ResizeDetector {
    constructor(platformId) {
        this.platformId = platformId;
    }
    on(element) {
        if (isPlatformBrowser(this.platformId)) {
            return fromRxJsObservable((new Observable((observer) => {
                const resizeObserver = new ResizeObserver((entries) => {
                    if (entries && entries.length > 0) {
                        observer.next(entries[0].contentRect);
                    }
                });
                resizeObserver.observe(element);
                return () => resizeObserver.disconnect();
            }))
                .pipe(throttleTime(25)));
        }
        return hermesEmpty();
    }
    destroy(element) {
    }
}
ResizeDetector.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ResizeDetector, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
ResizeDetector.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ResizeDetector });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ResizeDetector, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

class ChangedValueEmitter {
    constructor() {
        this.subject$ = new HermesReplaySubject(1);
    }
    emit(value) {
        this.subject$.next(value);
    }
    on() {
        return this.subject$.toObservable();
    }
}

var EditEventType;
(function (EditEventType) {
    EditEventType[EditEventType["SUBMIT"] = 0] = "SUBMIT";
    EditEventType[EditEventType["BLUR"] = 1] = "BLUR";
    EditEventType[EditEventType["CANCEL"] = 2] = "CANCEL";
})(EditEventType || (EditEventType = {}));

class ColumnId extends EntityId {
    constructor(id) {
        super(id);
    }
    toString() {
        return this.getId();
    }
}

class StructureCellEditBooleanComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, sourceCommandService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.sourceCommandService = sourceCommandService;
    }
    ngOnChanges(changes) {
        ifChanged(changes.entity, () => {
            this.initEditContext();
        });
        ifChanged(changes.cell, () => {
            this.initEditContext();
        });
    }
    ngOnInit() {
        this.initEditContext();
    }
    getSelectorName() {
        return 'gui-structure-cell-edit-boolean';
    }
    submitChanges() {
        const itemId = this.entity.getId(), updatedValue = this.actualValue, fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue), this.structureId);
    }
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
            .subscribe((status) => {
            switch (status) {
                case EditEventType.SUBMIT:
                    this.submitChanges();
                    break;
                default:
                    break;
            }
        });
    }
    observeValueChanges() {
        this.valueChanges$
            .on()
            .pipe(this.takeUntil())
            .subscribe((value) => {
            this.actualValue = value;
        });
    }
}
StructureCellEditBooleanComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditBooleanComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: SourcePublisher }], target: i0.ɵɵFactoryTarget.Component });
StructureCellEditBooleanComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureCellEditBooleanComponent, selector: "div[gui-structure-cell-edit-boolean][entity][cell]", inputs: { entity: "entity", cell: "cell" }, viewQueries: [{ propertyName: "cellContainerRef", first: true, predicate: ["cellContainer"], descendants: true, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `

		<span #cellContainer>
			<ng-container
				*ngTemplateOutlet="cell.editTemplate;
									context: editContext">
			</ng-container>
		</span>

	`, isInline: true, dependencies: [{ kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditBooleanComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-cell-edit-boolean][entity][cell]',
                    template: `

		<span #cellContainer>
			<ng-container
				*ngTemplateOutlet="cell.editTemplate;
									context: editContext">
			</ng-container>
		</span>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: SourcePublisher }]; }, propDecorators: { cellContainerRef: [{
                type: ViewChild,
                args: ['cellContainer', { static: true }]
            }], entity: [{
                type: Input
            }], cell: [{
                type: Input
            }] } });

class StructureCellComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, structureCellEditStore, cellEditCloseAllService, sourceCommandService, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureCellEditStore = structureCellEditStore;
        this.cellEditCloseAllService = cellEditCloseAllService;
        this.sourceCommandService = sourceCommandService;
        this.compositionWarehouse = compositionWarehouse;
        this.inEditMode = false;
    }
    ngOnInit() {
        this.subscribe(this.compositionWarehouse.onHighlightedColumn(new ColumnId(this.cell.columnDefinitionId.toString()), this.compositionId), (value) => {
            this.isHighlighted = value;
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.subscribeWithoutRender(this.cellEditCloseAllService.onCloseAll(), () => {
            this.exitEditMode();
        });
    }
    isCellEditingEnabled() {
        return this.cellEditorManager.isEnabled(this.cell.getValue(this.entity), this.entity.getSourceItem(), this.rowIndex) &&
            this.cell.isCellEditingEnabled();
    }
    enterEditMode(forceCheck = true) {
        if (!this.isCellEditingEnabled()) {
            return;
        }
        this.cellEditCloseAllService.closeAll();
        hermesTimer(0)
            .pipe(this.takeUntil())
            .subscribe(() => {
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
        });
    }
    exitEditMode() {
        this.inEditMode = false;
        this.changeDetectorRef.detectChanges();
    }
    submitChangesAndExit() {
        const itemId = this.entity.getId(), updatedValue = this.actualValue, fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue), this.structureId);
        this.exitEditMode();
    }
    getSelectorName() {
        return 'gui-structure-cell';
    }
    observeFieldStatus() {
        this.status$
            .on()
            .pipe(this.takeUntil())
            .subscribe((status) => {
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
        });
    }
    observeValueChanges() {
        this.valueChanges$
            .on()
            .pipe(this.takeUntil())
            .subscribe((value) => {
            this.actualValue = value;
        });
    }
    publishEditState(state) {
        this.structureCellEditStore.next(state);
    }
    publishEditEnter() {
        this.publishEditState(StructureCellEditState.ENTER);
    }
    publishEditCancel() {
        this.publishEditState(StructureCellEditState.CANCEL);
    }
    publishEditSubmit() {
        this.publishEditState(StructureCellEditState.SUBMIT);
    }
}
StructureCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: CompositionId }, { token: StructureCellEditStore }, { token: StructureCellEditCloseAllService }, { token: SourcePublisher }, { token: CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureCellComponent, selector: "div[gui-structure-cell][entity][cell]", inputs: { entity: "entity", cell: "cell", editMode: "editMode", cellEditorManager: "cellEditorManager", searchPhrase: "searchPhrase", rowIndex: "rowIndex", columnIndex: "columnIndex" }, usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"!cell.isBooleanDataType() || (cell.isBooleanDataType() && !this.isCellEditingEnabled())\">\n\n\t<span (click)=\"enterEditMode()\"\n\t\t  *ngIf=\"!inEditMode\"\n\t\t  [ngClass]=\"{'gui-cell-view': true,'gui-align-left': cell.isAlignLeft(),'gui-align-center': cell.isAlignCenter(),'gui-align-right': cell.isAlignRight(),'gui-column-highlighted': isHighlighted}\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\tcontext: {\n\t\t\t\telement: cell.getValue(entity, searchPhrase),\n\t\t\t\t index: entity.getPosition(),\n\t\t\t\t value: cell.getValue(entity, searchPhrase).value,\n\t\t\t\t item: entity.getSourceItem()\n\t\t\t  }\">\n\t\t</ng-container>\n\t</span>\n\n\t<span *ngIf=\"inEditMode\"\n\t\t  class=\"gui-cell-edit-mode\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\tcontext: editContext\">\n\t\t</ng-container>\n\t</span>\n\n\n\t<!--\t<span *ngIf=\"inEditMode\"-->\n\t<!--\t\t  class=\"gui-cell-edit-mode\">-->\n\n\t<!--\t\t<gui-structure-cell-edit [cell]=\"cell\"-->\n\t<!--\t\t\t\t\t\t\t\t [entity]=\"entity\">-->\n\t<!--\t\t</gui-structure-cell-edit>-->\n\t<!--\t</span>-->\n\n\n</ng-container>\n\n<ng-container *ngIf=\"cell.isBooleanDataType() && this.isCellEditingEnabled()\">\n\t<div [cell]=\"cell\" [entity]=\"entity\"\n\t\t gui-structure-cell-edit-boolean>\n\t</div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: StructureCellEditBooleanComponent, selector: "div[gui-structure-cell-edit-boolean][entity][cell]", inputs: ["entity", "cell"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-cell][entity][cell]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"!cell.isBooleanDataType() || (cell.isBooleanDataType() && !this.isCellEditingEnabled())\">\n\n\t<span (click)=\"enterEditMode()\"\n\t\t  *ngIf=\"!inEditMode\"\n\t\t  [ngClass]=\"{'gui-cell-view': true,'gui-align-left': cell.isAlignLeft(),'gui-align-center': cell.isAlignCenter(),'gui-align-right': cell.isAlignRight(),'gui-column-highlighted': isHighlighted}\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\tcontext: {\n\t\t\t\telement: cell.getValue(entity, searchPhrase),\n\t\t\t\t index: entity.getPosition(),\n\t\t\t\t value: cell.getValue(entity, searchPhrase).value,\n\t\t\t\t item: entity.getSourceItem()\n\t\t\t  }\">\n\t\t</ng-container>\n\t</span>\n\n\t<span *ngIf=\"inEditMode\"\n\t\t  class=\"gui-cell-edit-mode\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\tcontext: editContext\">\n\t\t</ng-container>\n\t</span>\n\n\n\t<!--\t<span *ngIf=\"inEditMode\"-->\n\t<!--\t\t  class=\"gui-cell-edit-mode\">-->\n\n\t<!--\t\t<gui-structure-cell-edit [cell]=\"cell\"-->\n\t<!--\t\t\t\t\t\t\t\t [entity]=\"entity\">-->\n\t<!--\t\t</gui-structure-cell-edit>-->\n\t<!--\t</span>-->\n\n\n</ng-container>\n\n<ng-container *ngIf=\"cell.isBooleanDataType() && this.isCellEditingEnabled()\">\n\t<div [cell]=\"cell\" [entity]=\"entity\"\n\t\t gui-structure-cell-edit-boolean>\n\t</div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: CompositionId }, { type: StructureCellEditStore }, { type: StructureCellEditCloseAllService }, { type: SourcePublisher }, { type: CompositionWarehouse }]; }, propDecorators: { entity: [{
                type: Input
            }], cell: [{
                type: Input
            }], editMode: [{
                type: Input
            }], cellEditorManager: [{
                type: Input
            }], searchPhrase: [{
                type: Input
            }], rowIndex: [{
                type: Input
            }], columnIndex: [{
                type: Input
            }] } });

class StructureRowComponent extends SmartComponent {
    constructor(changeDetectorRef, elRef, structureId, formationWarehouse, formationCommandDispatcher, cssClassModifier) {
        super(changeDetectorRef, elRef);
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.structureId = structureId;
        this.formationWarehouse = formationWarehouse;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.cssClassModifier = cssClassModifier;
        this.detailsEnabled = false;
        this.checkboxSelection = false;
        this.selectedItem = false;
        this.styleModifier = new StyleModifier(this.elRef.nativeElement);
        this.classModifier = new ClassModifier(this.elRef.nativeElement);
    }
    ngOnChanges(changes) {
        ifChanged(changes.entity, () => {
            this.checkSelectedItem();
            this.updateRowClass(changes.entity.previousValue);
            this.updateRowStyle(changes.entity.previousValue);
        });
        ifChanged(changes.rowClass, () => {
            this.updateRowClass();
        });
        ifChanged(changes.rowStyle, () => {
            this.updateRowStyle();
        });
    }
    ngOnInit() {
        this.subscribeWithoutRender(this.formationWarehouse.onRowSelectedReadModel(this.structureId), (row) => {
            this.row = row;
            const prevValue = this.selectedItem;
            this.checkSelectedItem();
            if (prevValue !== this.selectedItem) {
                if (prevValue) {
                    this.cssClassModifier.unselect(this.elRef.nativeElement);
                }
                else {
                    this.cssClassModifier.select(this.elRef.nativeElement);
                }
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.updateRowClass();
        this.updateRowStyle();
    }
    trackByFn() {
        return 0;
    }
    selectRow() {
        event.stopPropagation();
        this.formationCommandDispatcher.toggleSelectedRow(this.entity.getId(), RowSelectToggleType.ADD, this.structureId);
    }
    checkSelectedItem() {
        if (this.row) {
            const prevValue = this.selectedItem;
            this.selectedItem = this.row.isSelected(this.entity.getId());
            if (prevValue !== this.selectedItem) {
                if (prevValue) {
                    this.cssClassModifier.unselect(this.elRef.nativeElement);
                }
                else {
                    this.cssClassModifier.select(this.elRef.nativeElement);
                }
            }
        }
    }
    getSelectorName() {
        return 'gui-structure-row';
    }
    calculateRowStyle(entity) {
        if (!this.rowStyle) {
            return '';
        }
        if (typeof this.rowStyle.style === 'string') {
            return this.rowStyle.style || '';
        }
        if (typeof this.rowStyle.styleFunction === 'function') {
            return this.rowStyle.styleFunction(entity.getSourceItem(), entity.getPosition());
        }
        return '';
    }
    updateRowStyle(prevEntity) {
        if (prevEntity) {
            const rowStylesToRemove = this.calculateRowStyle(prevEntity);
            this.removeRowStyles(rowStylesToRemove);
        }
        const rowStylesToAdd = this.calculateRowStyle(this.entity);
        this.renderRowStyles(rowStylesToAdd);
    }
    removeRowStyles(rowStyle) {
        if (!rowStyle) {
            return;
        }
        const styles = rowStyle.split(';');
        for (let i = 0; i < styles.length; i += 1) {
            const separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.styleModifier.getHost().removeStyleByName(separatedStyles[0].trim());
            }
        }
    }
    renderRowStyles(rowStyle) {
        if (!rowStyle) {
            return;
        }
        const styles = rowStyle.split(';');
        for (let i = 0; i < styles.length; i += 1) {
            const separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.styleModifier.getHost().setStyleByName(separatedStyles[0].trim(), separatedStyles[1].trim());
            }
        }
    }
    updateRowClass(prevEntity) {
        if (prevEntity) {
            const toRemoveClass = this.calculateRowClass(prevEntity);
            if (toRemoveClass) {
                this.classModifier.getHost().remove(toRemoveClass);
            }
        }
        const toAddClass = this.calculateRowClass(this.entity);
        if (toAddClass) {
            this.classModifier.getHost().add(toAddClass);
        }
    }
    calculateRowClass(entity) {
        if (!this.rowClass) {
            return '';
        }
        let clazz;
        if (typeof this.rowClass.class === 'string') {
            clazz = this.rowClass.class || '';
        }
        if (typeof this.rowClass.classFunction === 'function') {
            if (entity) {
                clazz = this.rowClass.classFunction(entity.getSourceItem(), entity.getPosition()) || '';
            }
        }
        return clazz;
    }
}
StructureRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: FormationWarehouse }, { token: FormationPublisher }, { token: CssClassModifier }], target: i0.ɵɵFactoryTarget.Component });
StructureRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureRowComponent, selector: "div[gui-structure-row]", inputs: { entity: "entity", columns: "columns", editMode: "editMode", cellEditing: "cellEditing", searchPhrase: "searchPhrase", index: "index", rowStyle: "rowStyle", rowClass: "rowClass", detailsEnabled: "detailsEnabled", checkboxSelection: "checkboxSelection" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectRow()\" [checked]=\"selectedItem\"></gui-checkbox>\n\t<!--\t<input type=\"checkbox\" [checked]=\"selectedItem\" />-->\n</div>\n\n<div *ngFor=\"let column of columns; trackBy: trackByFn; let i = index\" [cellEditorManager]=\"cellEditing\"\n\t [cell]=\"column\"\n\t [columnIndex]=\"i\"\n\t [editMode]=\"editMode\"\n\t [entity]=\"entity\"\n\t [rowIndex]=\"index\"\n\t [searchPhrase]=\"searchPhrase\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-cell\"\n\t gui-structure-cell>\n</div>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "component", type: StructureCellComponent, selector: "div[gui-structure-cell][entity][cell]", inputs: ["entity", "cell", "editMode", "cellEditorManager", "searchPhrase", "rowIndex", "columnIndex"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-row]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectRow()\" [checked]=\"selectedItem\"></gui-checkbox>\n\t<!--\t<input type=\"checkbox\" [checked]=\"selectedItem\" />-->\n</div>\n\n<div *ngFor=\"let column of columns; trackBy: trackByFn; let i = index\" [cellEditorManager]=\"cellEditing\"\n\t [cell]=\"column\"\n\t [columnIndex]=\"i\"\n\t [editMode]=\"editMode\"\n\t [entity]=\"entity\"\n\t [rowIndex]=\"index\"\n\t [searchPhrase]=\"searchPhrase\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-cell\"\n\t gui-structure-cell>\n</div>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: FormationWarehouse }, { type: FormationPublisher }, { type: CssClassModifier }]; }, propDecorators: { entity: [{
                type: Input
            }], columns: [{
                type: Input
            }], editMode: [{
                type: Input
            }], cellEditing: [{
                type: Input
            }], searchPhrase: [{
                type: Input
            }], index: [{
                type: Input
            }], rowStyle: [{
                type: Input
            }], rowClass: [{
                type: Input
            }], detailsEnabled: [{
                type: Input
            }], checkboxSelection: [{
                type: Input
            }] } });

class StructureContentComponent extends SmartComponent {
    constructor(elementRef, changeDetectorRef, formationCommandInvoker, structureEditModeArchive, formationWarehouse, structureWarehouse, verticalFormationWarehouse, structureId, // REfactor
    schemaReadModelRootId, // REfactor
    rowSelectionTypeArchive, searchWarehouse, schemaWarehouse) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandInvoker = formationCommandInvoker;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationWarehouse = formationWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.searchWarehouse = searchWarehouse;
        this.schemaWarehouse = schemaWarehouse;
        this.editMode = false;
        this.searchPhrase = '';
        this.highlighting = true;
        this.phrase = true;
        this.rowDetailOpened = 4;
        this.checkboxSelection = false;
    }
    ngOnInit() {
        this.subscribe(this.rowSelectionTypeArchive.on(), (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        });
        this.subscribe(this.structureEditModeArchive.on(), (enabled) => {
            this.editMode = enabled;
        });
        this.subscribe(this.structureWarehouse.onEditManager(this.structureId), (manager) => {
            this.cellEditing = manager;
        });
        this.subscribe(this.schemaWarehouse.onRowClass(this.schemaReadModelRootId), (schemaRowClass) => {
            this.schemaRowClass = schemaRowClass;
        });
        this.subscribe(this.schemaWarehouse.onRowStyle(this.schemaReadModelRootId), (schemaRowStyle) => {
            this.schemaRowStyle = schemaRowStyle;
        });
        this.subscribe(this.verticalFormationWarehouse.onRowHeight(this.structureId), (rowHeight) => {
            this.rowHeight = rowHeight;
        });
        this.subscribe(fromRxJsObservable(combineLatest(toRxJsObservable(this.searchWarehouse.onPhrase(this.structureId)), toRxJsObservable(this.searchWarehouse.onHighlight(this.structureId)))), (args) => {
            const searchPhrase = args[0], highlighting = args[1];
            this.highlighting = highlighting;
            this.searchPhrase = searchPhrase;
            if (!this.highlighting) {
                this.searchPhrase = '';
            }
        });
    }
    trackByFn() {
        return 0;
    }
    translateY(index) {
        const height = index * this.rowHeight;
        return `translateY(${height}px)`;
    }
    toggleSelectedRow(entity) {
        if (!this.checkboxSelection) {
            this.formationCommandInvoker.toggleSelectedRow(entity.getId(), RowSelectToggleType.NONE, this.structureId);
        }
    }
    getSelectorName() {
        return 'gui-structure-content';
    }
}
StructureContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureContentComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: FormationPublisher }, { token: StructureEditModeArchive }, { token: FormationWarehouse }, { token: StructureWarehouse }, { token: VerticalFormationWarehouse }, { token: StructureId }, { token: SchemaReadModelRootId }, { token: RowSelectionTypeArchive }, { token: SearchWarehouse }, { token: SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureContentComponent, selector: "div[gui-structure-content]", inputs: { source: "source", columns: "columns" }, usesInheritance: true, ngImport: i0, template: "<div class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity)\" *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"cellEditing\"\n\t\t [checkboxSelection]=\"checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t [editMode]=\"editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t [rowClass]=\"schemaRowClass\"\n\t\t [rowStyle]=\"schemaRowStyle\"\n\t\t [searchPhrase]=\"searchPhrase\"\n\t\t [style.height.px]=\"rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: StructureRowComponent, selector: "div[gui-structure-row]", inputs: ["entity", "columns", "editMode", "cellEditing", "searchPhrase", "index", "rowStyle", "rowClass", "detailsEnabled", "checkboxSelection"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-content]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity)\" *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"cellEditing\"\n\t\t [checkboxSelection]=\"checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t [editMode]=\"editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t [rowClass]=\"schemaRowClass\"\n\t\t [rowStyle]=\"schemaRowStyle\"\n\t\t [searchPhrase]=\"searchPhrase\"\n\t\t [style.height.px]=\"rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: FormationPublisher }, { type: StructureEditModeArchive }, { type: FormationWarehouse }, { type: StructureWarehouse }, { type: VerticalFormationWarehouse }, { type: StructureId }, { type: SchemaReadModelRootId }, { type: RowSelectionTypeArchive }, { type: SearchWarehouse }, { type: SchemaWarehouse }]; }, propDecorators: { source: [{
                type: Input
            }], columns: [{
                type: Input
            }] } });

class StructureContainerComponent extends SmartComponent {
    constructor(changeDetectorRef, elRef, ngZone, structureId, compositionId, structureCommandService, structureWarehouse, verticalFormationWarehouse, sourceWarehouse, compositionCommandInvoker, compositionWarehouse, formationWarehouse, resizeDetector, structureInitialValuesReadyArchive, structureParent) {
        super(changeDetectorRef, elRef);
        this.elRef = elRef;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureCommandService = structureCommandService;
        this.structureWarehouse = structureWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.sourceWarehouse = sourceWarehouse;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.formationWarehouse = formationWarehouse;
        this.resizeDetector = resizeDetector;
        this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        this.structureParent = structureParent;
        this.columns = [];
        this.source = [];
        this.autoResizeWidthEnabled = false;
        this.scrollObservation$ = new HermesSubject();
        this.styleModifier = new StyleModifier(this.elRef.nativeElement);
    }
    ngOnInit() {
        this.subscribeWithoutRender(this.verticalFormationWarehouse.onContainerHeight(this.structureId), (containerHeight) => {
            this.setContainerHeight(containerHeight);
        });
        this.subscribe(fromRxJsObservable(toRxJsObservable(this.structureInitialValuesReadyArchive.once(this.structureId))
            .pipe(flatMap(() => {
            return combineLatest(toRxJsObservable(this.sourceWarehouse.onEntities(this.structureId)), toRxJsObservable(this.compositionWarehouse.onTemplateColumns(this.compositionId)));
        }))), (arr) => {
            this.source = arr[0];
            this.columns = arr[1];
        });
        this.subscribeWithoutRender(this.compositionWarehouse.onResizeWidth(this.compositionId), (enabled) => {
            this.autoResizeWidthEnabled = enabled;
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        // turn on when structure is ready
        if (this.structureParent) {
            this.subscribeWithoutRender(this.resizeDetector
                .on(this.structureParent.getElementRef().nativeElement)
                .pipe(hermesFilter(() => this.autoResizeWidthEnabled), hermesMap((size) => size.width), hermesDistinctUntilChanged()), (width) => {
                this.recalculateContainer(width);
            });
        }
        this.subscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (width) => {
            this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setWidth(width);
        });
        this.subscribeWithoutRender(this.verticalFormationWarehouse.onEnabled(this.structureId), (enabled) => {
            if (enabled) {
                this.enableScrollObservation();
            }
            else {
                this.disableScrollObservation();
            }
        });
        this.subscribeWithoutRender(this.structureWarehouse
            .on(this.structureId)
            .pipe(hermesFilter((str) => {
            return str.isVerticalScrollEnabled();
        })), (structure) => {
            const topMargin = structure.getTopMargin(), sourceHeight = structure.getSourceHeight();
            this.setSourceHeight(topMargin, sourceHeight);
        });
        this.subscribeWithoutRender(this.verticalFormationWarehouse.onScrollBarPosition(this.structureId), (scrollPosition) => {
            this.elRef.nativeElement.scrollTop = scrollPosition;
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.resizeDetector.destroy(this.elRef.nativeElement);
    }
    getSelectorName() {
        return 'gui-structure-container';
    }
    setContainerHeight(height) {
        this.height = height;
        this.styleModifier.getHost().setHeight(height);
    }
    setSourceHeight(topMargin, sourceHeight) {
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setPaddingTop(topMargin);
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setHeight(sourceHeight);
    }
    recalculateContainer(width) {
        if (this.autoResizeWidthEnabled) {
            this.compositionCommandInvoker.setContainerWidth(width, this.compositionId);
        }
    }
    enableScrollObservation() {
        this.ngZone
            .runOutsideAngular(() => {
            hermesFromEvent(this.elRef.nativeElement, 'scroll')
                .pipe(hermesTakeUntil(this.scrollObservation$))
                .subscribe((event) => {
                const scrollTop = event.target.scrollTop;
                this.structureCommandService.setScrollPosition(scrollTop, this.structureId);
            });
        });
    }
    disableScrollObservation() {
        this.scrollObservation$.next();
        this.scrollObservation$.complete();
    }
}
StructureContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureContainerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: StructureId }, { token: CompositionId }, { token: StructurePublisher }, { token: StructureWarehouse }, { token: VerticalFormationWarehouse }, { token: SourceWarehouse }, { token: CompositionPublisher }, { token: CompositionWarehouse }, { token: FormationWarehouse }, { token: ResizeDetector }, { token: StructureInitialValuesReadyArchive }, { token: structureParentComponent, optional: true }], target: i0.ɵɵFactoryTarget.Component });
StructureContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureContainerComponent, selector: "div[gui-structure-container]", viewQueries: [{ propertyName: "sourceCollectionRef", first: true, predicate: ["sourceCollection"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<div #sourceCollection\n\t class=\"gui-h-full gui-w-full gui-absolute gui-structure-container-element\">\n\n\t<div [columns]=\"columns\" [source]=\"source\"\n\t\t gui-structure-content>\n\t</div>\n\n</div>\n", dependencies: [{ kind: "component", type: StructureContentComponent, selector: "div[gui-structure-content]", inputs: ["source", "columns"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-container]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div #sourceCollection\n\t class=\"gui-h-full gui-w-full gui-absolute gui-structure-container-element\">\n\n\t<div [columns]=\"columns\" [source]=\"source\"\n\t\t gui-structure-content>\n\t</div>\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: StructureId }, { type: CompositionId }, { type: StructurePublisher }, { type: StructureWarehouse }, { type: VerticalFormationWarehouse }, { type: SourceWarehouse }, { type: CompositionPublisher }, { type: CompositionWarehouse }, { type: FormationWarehouse }, { type: ResizeDetector }, { type: StructureInitialValuesReadyArchive }, { type: undefined, decorators: [{
                    type: Optional$1
                }, {
                    type: Inject,
                    args: [structureParentComponent]
                }] }]; }, propDecorators: { sourceCollectionRef: [{
                type: ViewChild,
                args: ['sourceCollection', { read: ElementRef, static: false }]
            }] } });

class StructureBannerPanel extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
    }
    ngOnInit() {
        this.subscribe(this.onBannerPanelConfig(), (config) => {
            this.bannerPanel = config.template;
            if (typeof this.bannerPanel === 'function') {
                this.bannerPanel = this.bannerPanel();
            }
        });
    }
}
StructureBannerPanel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureBannerPanel, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
StructureBannerPanel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureBannerPanel, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureBannerPanel, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });

class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
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
SafePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SafePipe, deps: [{ token: i1$2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
SafePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SafePipe, name: "guiSafe" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SafePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'guiSafe'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.DomSanitizer }]; } });

class StructureTitlePanelComponent extends StructureBannerPanel {
    constructor(structureTitlePanelConfigArchive, changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
    }
    onBannerPanelConfig() {
        return this.structureTitlePanelConfigArchive.on();
    }
    getSelectorName() {
        return 'gui-structure-title-panel';
    }
    getPanelTitle() {
        return 'Title panel';
    }
}
StructureTitlePanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTitlePanelComponent, deps: [{ token: StructureTitlePanelConfigArchive }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureTitlePanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureTitlePanelComponent, selector: "div[gui-structure-title-panel]", usesInheritance: true, ngImport: i0, template: "<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t class=\"gui-title-panel gui-p-6 gui-border-b gui-border-b-solid\">\n</div>\n", dependencies: [{ kind: "pipe", type: SafePipe, name: "guiSafe" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTitlePanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-title-panel]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t class=\"gui-title-panel gui-p-6 gui-border-b gui-border-b-solid\">\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: StructureTitlePanelConfigArchive }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });

class StructureFooterPanelComponent extends StructureBannerPanel {
    constructor(structureFooterPanelConfigArchive, changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
    }
    onBannerPanelConfig() {
        return this.structureFooterPanelConfigArchive.on();
    }
    getSelectorName() {
        return 'gui-structure-footer-panel';
    }
    getPanelTitle() {
        return 'Footer panel';
    }
}
StructureFooterPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureFooterPanelComponent, deps: [{ token: StructureFooterPanelConfigArchive }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureFooterPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureFooterPanelComponent, selector: "div[gui-structure-footer-panel]", usesInheritance: true, ngImport: i0, template: "<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t class=\"gui-footer-panel gui-p-6 gui-border-t gui-border-t-solid\">\n</div>\n", dependencies: [{ kind: "pipe", type: SafePipe, name: "guiSafe" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureFooterPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-footer-panel]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t class=\"gui-footer-panel gui-p-6 gui-border-t gui-border-t-solid\">\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: StructureFooterPanelConfigArchive }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });

class StructureBlueprintComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureDefinition, structureId, structureWarehouse, structureInfoPanelArchive, pagingWarehouse, summariesWarehouse, filterWarehouse, searchWarehouse, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, className) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureDefinition = structureDefinition;
        this.structureId = structureId;
        this.structureWarehouse = structureWarehouse;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
        this.pagingWarehouse = pagingWarehouse;
        this.summariesWarehouse = summariesWarehouse;
        this.filterWarehouse = filterWarehouse;
        this.searchWarehouse = searchWarehouse;
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
        this.localStreamCloser = new StreamCloser();
        this.headerCssClass = `gui-${this.className}-header`;
        this.contentCssClass = `gui-${this.className}-content`;
    }
    ngOnInit() {
        this.subscribe(this.structureHeaderTopEnabledArchive.on(), (topHeaderEnabled) => {
            this.topHeaderEnabled = topHeaderEnabled;
        });
        this.subscribe(this.structureHeaderBottomEnabledArchive.on(), (bottomHeaderEnabled) => {
            this.bottomHeaderEnabled = bottomHeaderEnabled;
        });
        this.subscribe(this.structureWarehouse.on(this.structureId), (structure) => {
            this.structure = structure;
            this.items = structure.getEntities();
        });
        this.subscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.pagingReadModel = paging;
        });
        this.subscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.pagingReadModel = paging;
        });
        this.subscribe(this.searchWarehouse.onSearchEnabled(this.structureId), (enabled) => {
            this.searchEnabled = enabled;
        });
        this.subscribe(this.filterWarehouse.onQuickFiltersEnabled(this.structureId), (enabled) => {
            this.quickFiltersEnabled = enabled;
        });
        this.subscribe(this.summariesWarehouse.onBottomEnabled(this.structureId), (enabled) => {
            this.bottomSummariesPanelEnabled = enabled;
        });
        this.subscribe(this.summariesWarehouse.onTopEnabled(this.structureId), (enabled) => {
            this.topSummariesPanelEnabled = enabled;
        });
        this.subscribe(this.structureInfoPanelArchive.on(), (infoPanel) => {
            this.infoPanelEnabled = infoPanel.isEnabled();
        });
        this.subscribe(this.structureTitlePanelConfigArchive.on(), (titlePanel) => {
            this.titlePanelEnabled = titlePanel.enabled;
        });
        this.subscribe(this.structureFooterPanelConfigArchive.on(), (footerPanel) => {
            this.footerPanelEnabled = footerPanel.enabled;
        });
    }
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
    }
    getHeaderTopClasses() {
        return this.headerCssClass + ' gui-header-top';
    }
    getHeaderBottomClasses() {
        return this.headerCssClass + ' gui-header-bottom';
    }
    isColumnHeaderTopEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.topHeaderEnabled;
    }
    isColumnHeaderBottomEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.bottomHeaderEnabled;
    }
    isPagingTopEnabled() {
        return this.structureDefinition.getTopPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerTop();
    }
    isPagingBottomEnabled() {
        return this.structureDefinition.getBottomPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerBottom();
    }
    isSourceEmpty() {
        return this.structure && this.structure.getEntities().length === 0;
    }
    getSelectorName() {
        return 'gui-structure-blueprint';
    }
}
StructureBlueprintComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureBlueprintComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureDefinition }, { token: StructureId }, { token: StructureWarehouse }, { token: StructureInfoPanelArchive }, { token: PagingWarehouse }, { token: SummariesWarehouse }, { token: FilterWarehouse }, { token: SearchWarehouse }, { token: StructureHeaderTopEnabledArchive }, { token: StructureHeaderBottomEnabledArchive }, { token: StructureTitlePanelConfigArchive }, { token: StructureFooterPanelConfigArchive }, { token: STRUCTURE_CSS_CLASS_NAME }], target: i0.ɵɵFactoryTarget.Component });
StructureBlueprintComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureBlueprintComponent, selector: "div[gui-structure-blueprint]", usesInheritance: true, ngImport: i0, template: "<!---------- TOP ---------->\n<div *ngIf=\"titlePanelEnabled\" gui-structure-title-panel></div>\n\n<div *ngIf=\"searchEnabled\" gui-structure-top-panel></div>\n\n<!--<div gui-structure-quick-filters *ngIf=\"quickFiltersEnabled\">-->\n<!--</div>-->\n\n<div *ngIf=\"isPagingTopEnabled()\" [position]=\"0\"\n\t gui-paging>\n</div>\n\n<div [enabled]=\"topSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"isColumnHeaderTopEnabled()\" [ngClass]=\"getHeaderTopClasses()\"\n\t gui-structure-header>\n</div>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<div *ngIf=\"isColumnHeaderBottomEnabled()\" [ngClass]=\"getHeaderBottomClasses()\"\n\t gui-structure-header>\n</div>\n\n<div [enabled]=\"bottomSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n\n<div *ngIf=\"isPagingBottomEnabled()\" [position]=\"1\"\n\t gui-paging>\n</div>\n\n<div *ngIf=\"infoPanelEnabled\" gui-structure-info-panel></div>\n", dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: PagingComponent, selector: "div[gui-paging][position]", inputs: ["position", "minimal"] }, { kind: "component", type: StructureSummariesPanelComponent, selector: "div[gui-structure-summaries-panel][enabled]", inputs: ["enabled"] }, { kind: "component", type: StructureInfoPanelComponent, selector: "div[gui-structure-info-panel]" }, { kind: "component", type: StructureTopPanelComponent, selector: "div[gui-structure-top-panel]" }, { kind: "component", type: EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: ["items"] }, { kind: "component", type: StructureHeaderComponent, selector: "div[gui-structure-header]" }, { kind: "component", type: StructureContainerComponent, selector: "div[gui-structure-container]" }, { kind: "component", type: StructureTitlePanelComponent, selector: "div[gui-structure-title-panel]" }, { kind: "component", type: StructureFooterPanelComponent, selector: "div[gui-structure-footer-panel]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureBlueprintComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-blueprint]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!---------- TOP ---------->\n<div *ngIf=\"titlePanelEnabled\" gui-structure-title-panel></div>\n\n<div *ngIf=\"searchEnabled\" gui-structure-top-panel></div>\n\n<!--<div gui-structure-quick-filters *ngIf=\"quickFiltersEnabled\">-->\n<!--</div>-->\n\n<div *ngIf=\"isPagingTopEnabled()\" [position]=\"0\"\n\t gui-paging>\n</div>\n\n<div [enabled]=\"topSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"isColumnHeaderTopEnabled()\" [ngClass]=\"getHeaderTopClasses()\"\n\t gui-structure-header>\n</div>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<div *ngIf=\"isColumnHeaderBottomEnabled()\" [ngClass]=\"getHeaderBottomClasses()\"\n\t gui-structure-header>\n</div>\n\n<div [enabled]=\"bottomSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n\n<div *ngIf=\"isPagingBottomEnabled()\" [position]=\"1\"\n\t gui-paging>\n</div>\n\n<div *ngIf=\"infoPanelEnabled\" gui-structure-info-panel></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureDefinition }, { type: StructureId }, { type: StructureWarehouse }, { type: StructureInfoPanelArchive }, { type: PagingWarehouse }, { type: SummariesWarehouse }, { type: FilterWarehouse }, { type: SearchWarehouse }, { type: StructureHeaderTopEnabledArchive }, { type: StructureHeaderBottomEnabledArchive }, { type: StructureTitlePanelConfigArchive }, { type: StructureFooterPanelConfigArchive }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [STRUCTURE_CSS_CLASS_NAME]
                }] }]; } });

/** @internal */
function structureIdFactoryForGrid(generator) {
    return new StructureId('gui-grid-' + generator.generateId());
}
/** @internal */
function compositionIdFactoryForGrid(generator) {
    return new CompositionId('gui-grid-' + generator.generateId());
}
/** @internal */
function schemaIdFactoryForGrid(generator) {
    return new SchemaReadModelRootId('gui-grid-' + generator.generateId());
}
/** @internal */
class StructureComponent extends StructureGateway {
    constructor(structureId, compositionId, pagingCommandService, pagingEventRepository, sourceCommandDispatcher, sourceEventService, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureCommandService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelArchive, structureInfoPanelConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, pagingDisplayModeArchive, rowSelectEnabledArchive, rowSelectionTypeArchive, formationCommandDispatcher, searchEventRepository, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive, columnAutoConfigurator, elementRef, detectorRef, injector, structureDefinition, structureWarehouse, compositionWarehouse, schemaStylesManager, schemaReadModelRootId, structureDetailViewService) {
        super(detectorRef, elementRef, columnAutoConfigurator, structureId, compositionId, schemaReadModelRootId, structureCommandService, pagingCommandService, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, sourceCommandDispatcher, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelConfigService, structureCellEditStore, columnFieldFactory, rowSelectionTypeArchive, formationCommandDispatcher, searchEventRepository, structureHeaderBottomEnabledArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive);
        this.elementRef = elementRef;
        this.detectorRef = detectorRef;
        this.injector = injector;
        this.structureDefinition = structureDefinition;
        this.structureWarehouse = structureWarehouse;
        this.compositionWarehouse = compositionWarehouse;
        this.schemaStylesManager = schemaStylesManager;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.structureDetailViewService = structureDetailViewService;
        this.loaderEnabled = false;
        this.circleLoaderEnabled = true;
        this.initialLoaderAnimation = false;
        this.styleModifier = new StyleModifier(this.elementRef.nativeElement);
        structureCommandService.create(this.structureId);
        compositionCommandDispatcher.create(this.compositionId);
        schemaCommandInvoker.create(this.schemaId);
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    ngOnInit() {
        super.ngOnInit();
        this.subscribe(this.structureWarehouse.on(this.structureId), (structureReadModelRoot) => {
            this.structure = structureReadModelRoot;
            this.loaderEnabled = structureReadModelRoot.getSource().isLoading();
            this.circleLoaderEnabled = structureReadModelRoot.isLoaderVisible();
            if (this.loaderEnabled && !this.initialLoaderAnimation) {
                this.initialLoaderAnimation = true;
            }
            this.detectorRef.detectChanges();
        });
        this.structureDetailViewService.init(this.elementRef);
    }
    ngAfterViewInit() {
        this.structureInitialValuesReadyArchive
            .next(this.structureId, true);
        let width = this.elementRef.nativeElement.offsetWidth;
        if (width > 0) {
            this.compositionCommandDispatcher.setContainerWidth(width, this.compositionId);
        }
        else {
            /**
             * When gui-grid is in dynamic container which is created later then grid.
             */
            hermesTimer(0)
                .pipe(this.takeUntil())
                .subscribe(() => {
                width = this.elementRef.nativeElement.offsetWidth;
                if (width > 0) {
                    this.compositionCommandDispatcher.setContainerWidth(width, this.compositionId);
                }
            });
        }
        this.schemaStylesManager
            .init(this.elementRef, this.schemaReadModelRootId);
        this.subscribeWithoutRender(this.compositionWarehouse.onWidth(this.compositionId), (width) => {
            this.styleModifier.getHost().setWidth(width);
        });
    }
    isBorderEnabled() {
        return this.structureDefinition.isBorderEnabled();
    }
    getStructureId() {
        return this.structureId;
    }
    getElementRef() {
        return this.elementRef;
    }
    getSelectorName() {
        return 'gui-structure';
    }
}
StructureComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureComponent, deps: [{ token: StructureId }, { token: CompositionId }, { token: PagingPublisher }, { token: PagingEventRepository }, { token: SourcePublisher }, { token: SourceEventService }, { token: SortingPublisher }, { token: SearchPublisher }, { token: FieldPublisher }, { token: SchemaPublisher }, { token: CompositionPublisher }, { token: CompositionEventRepository }, { token: FormationEventRepository }, { token: StructurePublisher }, { token: StructureEditModeArchive }, { token: StructureCellEditArchive }, { token: StructureInfoPanelArchive }, { token: StructureInfoPanelConfigService }, { token: StructureCellEditStore }, { token: ColumnFieldFactory }, { token: StructureColumnMenuConfigArchive }, { token: PagingDisplayModeArchive }, { token: RowSelectEnabledRepository }, { token: RowSelectionTypeArchive }, { token: FormationPublisher }, { token: SearchEventRepository }, { token: StructureHeaderBottomEnabledArchive }, { token: StructureRowDetailConfigArchive }, { token: StructureTitlePanelConfigArchive }, { token: StructureFooterPanelConfigArchive }, { token: SchemaEventRepository }, { token: TranslationFacade }, { token: StructureInitialValuesReadyArchive }, { token: ColumnAutoConfigurator }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.Injector }, { token: StructureDefinition }, { token: StructureWarehouse }, { token: CompositionWarehouse }, { token: SchemaCssClassManager }, { token: SchemaReadModelRootId }, { token: StructureRowDetailService }], target: i0.ɵɵFactoryTarget.Component });
StructureComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureComponent, selector: "gui-structure", host: { properties: { "class.gui-structure-border": "isBorderEnabled()", "id": "structureId.toString()" } }, providers: [
        {
            provide: StructureId,
            useFactory: structureIdFactoryForGrid,
            deps: [
                StructureIdGenerator
            ]
        },
        {
            provide: CompositionId,
            useFactory: compositionIdFactoryForGrid,
            deps: [
                StructureIdGenerator
            ]
        },
        {
            provide: SchemaReadModelRootId,
            useFactory: schemaIdFactoryForGrid,
            deps: [
                StructureIdGenerator
            ]
        },
        SchemaCssClassManager,
        StructureCellEditCloseAllService,
        StructureCellEditStore,
        StructureEditModeArchive,
        StructureInfoPanelArchive,
        StructureInfoPanelConfigService,
        StructureColumnMenuConfigArchive,
        PagingFeatureModule.forComponent(),
        SortingFeatureModule.forComponent(),
        FieldFeatureModule.forComponent(),
        FormationFeatureModule.forComponent(),
        SearchFeatureModule.forComponent(),
        SourceFeatureModule.forComponent(),
        SchemaFeatureModule.forComponent(),
        SummariesFeatureModule.forComponent(),
        TranslationFeatureModule.forComponent(),
        RowSelectEnabledRepository,
        StructureHeaderTopEnabledArchive,
        StructureHeaderBottomEnabledArchive,
        StructureRowDetailConfigArchive,
        StructureRowDetailService,
        StructureTitlePanelConfigArchive,
        StructureFooterPanelConfigArchive,
        {
            provide: structureComponentToken,
            useExisting: StructureComponent
        },
        {
            provide: filterContainerToken,
            useExisting: StructureComponent
        }
    ], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div gui-structure-blueprint></div>\n\n<!---------- LOADING ---------->\n<div [ngClass]=\"{'gui-loader-visible': loaderEnabled, 'gui-loader-hidden': !loaderEnabled && initialLoaderAnimation}\"\n\t class=\"gui-loading\">\n\t<gui-spinner *ngIf=\"circleLoaderEnabled\"\n\t\t\t\t [diameter]=\"120\"\n\t\t\t\t [primary]=\"true\">\n\t</gui-spinner>\n</div>\n", styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-10{grid-row-gap:16px}.gui-grid-rows-gap-13{grid-row-gap:22px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-10{grid-column-gap:16px}.gui-grid-cols-gap-13{grid-column-gap:22px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.-gui-m-0{margin:0}.-gui-mx-0{margin-left:0;margin-right:0}.-gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.-gui-m-1{margin:-1px}.-gui-mx-1{margin-left:-1px;margin-right:-1px}.-gui-my-1{margin-bottom:-1px;margin-top:-1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.-gui-m-2{margin:-2px}.-gui-mx-2{margin-left:-2px;margin-right:-2px}.-gui-my-2{margin-bottom:-2px;margin-top:-2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.-gui-m-3{margin:-3px}.-gui-mx-3{margin-left:-3px;margin-right:-3px}.-gui-my-3{margin-bottom:-3px;margin-top:-3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.-gui-m-4{margin:-4px}.-gui-mx-4{margin-left:-4px;margin-right:-4px}.-gui-my-4{margin-bottom:-4px;margin-top:-4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.-gui-m-5{margin:-6px}.-gui-mx-5{margin-left:-6px;margin-right:-6px}.-gui-my-5{margin-bottom:-6px;margin-top:-6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.-gui-m-6{margin:-8px}.-gui-mx-6{margin-left:-8px;margin-right:-8px}.-gui-my-6{margin-bottom:-8px;margin-top:-8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.-gui-m-7{margin:-10px}.-gui-mx-7{margin-left:-10px;margin-right:-10px}.-gui-my-7{margin-bottom:-10px;margin-top:-10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.-gui-m-8{margin:-12px}.-gui-mx-8{margin-left:-12px;margin-right:-12px}.-gui-my-8{margin-bottom:-12px;margin-top:-12px}.gui-m-10{margin:16px}.gui-mx-10{margin-left:16px;margin-right:16px}.gui-my-10{margin-bottom:16px;margin-top:16px}.-gui-m-10{margin:-16px}.-gui-mx-10{margin-left:-16px;margin-right:-16px}.-gui-my-10{margin-bottom:-16px;margin-top:-16px}.gui-m-13{margin:22px}.gui-mx-13{margin-left:22px;margin-right:22px}.gui-my-13{margin-bottom:22px;margin-top:22px}.-gui-m-13{margin:-22px}.-gui-mx-13{margin-left:-22px;margin-right:-22px}.-gui-my-13{margin-bottom:-22px;margin-top:-22px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.-gui-m-23{margin:-42px}.-gui-mx-23{margin-left:-42px;margin-right:-42px}.-gui-my-23{margin-bottom:-42px;margin-top:-42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-ml-6{margin-left:8px}.gui-mt-0{margin-top:0}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-10{padding:16px}.gui-px-10{padding-left:16px;padding-right:16px}.gui-py-10{padding-bottom:16px;padding-top:16px}.gui-p-13{padding:22px}.gui-px-13{padding-left:22px;padding-right:22px}.gui-py-13{padding-bottom:22px;padding-top:22px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-text-center{text-align:center}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-structure *,.gui-structure *:after,.gui-structure *:before{box-sizing:border-box}.gui-structure input{font-size:13px;outline:0}.gui-bold{font-weight:700}.gui-italic{font-style:italic}.gui-bar-view{width:100%}.gui-align-right{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;text-align:right;width:100%}.gui-align-left{text-align:left;width:100%}.gui-align-center{-ms-flex-pack:center;justify-content:center;text-align:center;width:100%}.gui-icon{cursor:pointer}.gui-icon svg{fill:#aaa;stroke:#aaa;transition:stroke .3s ease-in-out}.gui-icon svg:hover{fill:#464646!important;stroke:#464646!important}.gui-view-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gui-percentage-bar{background:#deebff;border-radius:4px;box-shadow:inset 1px 1px 2px #ccc;color:#0747a6;height:22px;padding:4px;position:relative;text-align:center;width:100%}.gui-percentage-bar .gui-percentage{background:#8abcfc;border-radius:4px;height:22px;left:0;position:absolute;top:0}.gui-percentage-bar .gui-percentage-view{color:#031d44;position:relative;width:100%}.gui-clear-search-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);width:16px}.gui-clear-search-icon:before,.gui-clear-search-icon:after{background-color:#aaa;border-radius:8px;content:\" \";height:16px;left:7px;position:absolute;width:2px}.gui-clear-search-icon:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-clear-search-icon:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-clear-search-icon:hover:before,.gui-clear-search-icon:hover:after{background-color:#464646}\n", ".gui-structure,.gui-structure *{border-color:#d6d6d6;font-size:14px}.gui-structure input{color:#333;font-family:Arial}.gui-header{background:#f2f3f4;border-bottom:1px solid;border-color:inherit;height:36px}.gui-header .gui-header-cell.gui-header-sortable{cursor:pointer}.gui-header .gui-header-cell.gui-header-sortable:hover{background:#e6e7e8}.gui-header .gui-header-cell .gui-header-menu-icon{display:none}.gui-header .gui-header-cell:hover .gui-header-menu{cursor:pointer}.gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper .gui-header-menu-icon{display:block}.gui-header .gui-header-cell:last-of-type{border-right:0}.gui-header .gui-header-cell .gui-header-title{display:-ms-flexbox;display:flex;line-height:1.4em}.gui-header .gui-header-cell .gui-header-menu{display:-ms-flexbox;display:flex}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:16px;padding:16px;position:relative;right:0;width:16px}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper .gui-header-menu-icon{display:none;height:16px;width:16px}.gui-header-bottom .gui-header{border-bottom:0;border-color:inherit;border-top:1px solid}.gui-structure{background:#fff;border-color:#d6d6d6;box-sizing:border-box;color:#333;display:block;font-family:Arial;font-size:14px;position:relative}.gui-structure *{box-sizing:border-box}.gui-structure .gui-structure-header{display:block;height:100%;width:100%}.gui-structure .gui-structure-header .gui-structure-header-filters.gui-header{height:32px}.gui-structure .gui-structure-header .gui-structure-header-filters.gui-header .gui-header-cell{padding:4px}.gui-structure .gui-structure-header .gui-structure-header-filters.gui-header .gui-header-cell input{box-sizing:border-box;height:100%;padding:2px;position:relative;width:100%;border-color:#d6d6d6;border-style:solid;border-width:1px;font-size:13px}.gui-structure-container{display:block;height:100%;overflow:auto;overflow-x:hidden;position:relative;width:100%}.gui-structure-container .gui-structure-container-element{height:100%;position:absolute;width:100%}.gui-structure-container .gui-structure-container-element .gui-content{height:100%;position:relative}.gui-structure-container .gui-structure-container-element .gui-content .gui-row{border-bottom:1px solid transparent;position:absolute;width:100%}.gui-structure-container .gui-structure-container-element .gui-content .gui-row:last-child{border-bottom:0}.gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:#ecedee}.gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:#d0e8fb}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell{border-right:1px solid transparent;box-sizing:border-box;line-height:1em;overflow:hidden;padding:0;white-space:nowrap}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-cell-view span{line-height:1.4em}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-button{padding:0}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-cell-boolean{-ms-flex-pack:center;justify-content:center}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-checkbox{line-height:24px;position:relative}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-checkbox input{position:relative}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-chip{line-height:1em;margin:0;padding:4px 8px}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-badge{padding:0}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-input{background:transparent;font-size:14px;padding:0;border-radius:0;border-style:none}.gui-structure-container .gui-cell{display:inline-block}.gui-structure-container .gui-cell:last-child .gui-cell-view{padding-right:20px}.gui-structure-container .gui-cell>span{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;padding:0 8px;width:100%}.gui-structure-container .gui-cell .gui-cell-edit-mode{border:2px solid #2185d0;height:100%;padding:6px}.gui-structure-container .gui-cell .gui-cell-edit-mode .gui-boolean-edit{margin-left:calc(50% - 11px)}.gui-structure-container .gui-cell .gui-cell-edit-mode input:focus{box-shadow:none;outline:none}.gui-vertical-grid .gui-structure-summaries-cell,.gui-vertical-grid .gui-structure-container-element .gui-content .gui-row .gui-cell,.gui-vertical-grid .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid;border-right-color:inherit}.gui-vertical-grid .gui-structure-container-element .gui-content .gui-row .gui-cell:last-of-type,.gui-vertical-grid .gui-structure-header .gui-header .gui-header-cell:last-of-type{border-right:0}.gui-vertical-grid .gui-row-checkbox{border-right:1px solid!important;border-right-color:inherit!important}.gui-horizontal-grid .gui-structure-container-element .gui-content .gui-row{border-bottom:1px solid;border-bottom-color:inherit}.gui-horizontal-grid .gui-structure-container-element .gui-content .gui-row:last-of-type{border-bottom:0}.gui-rows-even .gui-row.even,.gui-rows-odd .gui-row.odd{background:#f7f8f9}.gui-structure-info-panel{-ms-flex-align:center;align-items:center;background:#f2f3f4;box-sizing:border-box;display:-ms-flexbox;display:flex;height:36px;-ms-flex-pack:justify;justify-content:space-between;padding:0 6px;width:100%;border-top-color:inherit;border-top-style:solid;border-top-width:1px}.gui-structure-info-panel p{margin:0}.gui-structure-info-panel p b{font-weight:700}.gui-structure-info-panel div button{background:#ccc;color:#fff;cursor:pointer;font-family:Arial;font-weight:700;height:16px;line-height:14px;padding:0;width:16px;border-color:transparent;border-radius:50%;border-style:solid;border-width:1px}.gui-structure-info-panel div button:focus{box-shadow:0 0 4px #ccc;outline:none}.gui-structure-border{border:1px solid;border-color:#d6d6d6}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.gui-loading{-ms-flex-line-pack:center;align-content:center;-webkit-animation-duration:.2s;animation-duration:.2s;background:rgba(255,255,255,.8);border:1px solid;border-color:inherit;display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:center;justify-content:center;left:0;opacity:0;position:absolute;top:0;visibility:hidden;width:100%}.gui-loading .gui-spinner{-ms-flex-item-align:center;align-self:center}.gui-loading.gui-loader-hidden{-webkit-animation-name:fadeOut;animation-name:fadeOut;opacity:0;visibility:visible;z-index:-1}.gui-loading.gui-loader-visible{-webkit-animation-name:fadeIn;animation-name:fadeIn;opacity:1;visibility:visible;z-index:1}.gui-text-highlight{background:#fff799;padding:0!important}.gui-title-panel{border-bottom-color:#d6d6d6}.gui-footer-panel{border-top-color:#d6d6d6}.gui-structure-schema-manager-icon{margin-right:16px}.gui-structure-schema-manager-icon svg{height:18px;margin-bottom:-1px;width:18px}.gui-row-checkbox{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center;justify-content:center;padding:0 12px!important;width:48px!important}.gui-row-checkbox .gui-checkbox{height:24px;margin:0;padding:0;width:24px}.gui-select-all .gui-checkbox .gui-checkmark{top:0}.gui-structure-cell-edit-boolean{height:100%}.gui-column-highlighted{background:#fffddd}.gui-structure-column-manager>div:hover{background:#ecedee}.gui-structure-column-manager label{margin-bottom:0}.gui-structure-ordered-list li:hover{background:#ecedee}\n", ".gui-structure-column-menu-icon svg{height:16px;width:16px}.gui-structure-column-menu-icon .cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.gui-structure-column-menu-arrow-icon{display:inline-block}.gui-structure-column-menu-arrow-icon svg{height:10px;width:12px}.gui-structure-column-menu-arrow-icon .gui-structure-column-menu-sort-icon svg{height:16px}.gui-structure-column-menu-arrow-icon .cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}\n", ".gui-summaries-value{font-weight:700}.gui-structure-summaries-panel{background:#f2f3f4}.gui-structure-summaries-panel.gui-structure-summaries-panel-bottom .gui-structure-summaries-cell{border-top:1px solid #d6d6d6}.gui-structure-summaries-panel.gui-structure-summaries-panel-top .gui-structure-summaries-cell{border-bottom:1px solid #d6d6d6}.gui-structure-summaries-panel .gui-structure-summaries-cell{font-size:14px;padding-left:16px;padding-right:16px}.gui-structure-summaries-panel .gui-structure-summaries-cell:last-child{padding-right:20px}.gui-structure-summaries-panel .gui-structure-summaries-value{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;line-height:1em;overflow:hidden;padding:8px 0}.gui-structure-summaries-panel .gui-structure-summaries-value div .gui-math-symbol{position:relative;top:-1px}.gui-structure-summaries-panel .gui-structure-summaries-value .gui-mean,.gui-structure-summaries-panel .gui-structure-summaries-value .gui-median{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.gui-structure-summaries-panel .gui-structure-summaries-value .gui-mean span:nth-child(1){left:1px;position:absolute;top:-15px}.gui-structure-summaries-panel .gui-structure-summaries-value .gui-median span:nth-child(1){left:1px;position:absolute;top:-8px}\n", ".gui-structure-column-manager-icon svg{height:16px;width:16px}.gui-structure-column-manager-icon .cls-1,.gui-structure-column-manager-icon .cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round}.gui-structure-column-manager-icon .cls-2{stroke-width:1.5px}.gui-structure-info-icon svg{height:16px;width:16px}.gui-structure-info-icon .cls-1{stroke-width:0}.gui-structure-info-icon .cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round}.gui-structure-info-panel div,.gui-structure-info-panel div button{display:inline-block}.gui-structure-info-panel .gui-right-section .gui-structure-column-manager-icon{margin-right:16px;position:relative}.gui-structure-info-panel .gui-right-section .gui-structure-info-icon{margin-right:4px;position:relative}.gui-structure-info-modal .gui-quote{color:#575757}.gui-structure-info-modal p{color:#333}.gui-structure-info-modal a{color:#2185d0}.gui-structure-info-modal a:hover{color:#59a9e5;text-decoration:underline}\n", "@media (max-width: 500px){.gui-paging>*{padding-left:4px}.gui-paging .gui-paging-stats{padding-left:4px}}\n", ".gui-header{display:-ms-flexbox;display:flex}.gui-header .gui-header-cell{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.gui-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.gui-content .gui-structure-cell-container,.gui-content .gui-row{display:-ms-flexbox;display:flex}.gui-content .gui-structure-cell-container .gui-cell,.gui-content .gui-row .gui-cell{display:inline-block}.gui-content .gui-structure-row-details{background:#80cbc4;display:block;height:200px;position:absolute;-ms-transform:translateY(0);transform:translateY(0);width:100%}\n", ".gui-inline-dialog-header-menu.gui-inline-dialog-wrapper .gui-inline-dialog-content{background:transparent;box-shadow:none}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-item-active{font-weight:700}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-list{background:#fff}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item{color:#333}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item.gui-active{color:#2185d0}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-content{box-shadow:0 3px 7px #ccc;box-sizing:content-box;padding:0;width:225px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move{color:#333;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item svg line{stroke:#aaa}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item.left{padding:12px 16px 12px 12px;width:48%}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item.right{padding:12px 10px;width:52%}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover svg line{stroke:#464646}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container{border:none;border-radius:0}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow{opacity:1}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu{width:125px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item{background:#fff;color:#333;display:-ms-flexbox;display:flex;padding:8px 8px 8px 12px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item:hover .gui-sort-title svg line{stroke:#464646}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:100%}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title svg{margin-top:3px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title svg line{stroke:#aaa}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item{color:#333;cursor:pointer;display:block;padding:8px 12px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-checkbox{color:#333;margin-left:12px;padding:8px 12px 8px 32px;width:169px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-checkbox label{display:inline-block;width:inherit}\n", ".gui-schema-manager-dialog .gui-schema-manager{min-width:180px}.gui-schema-manager-dialog .gui-schema-manager .gui-structure-schema-manager-select,.gui-schema-manager-dialog .gui-schema-manager .gui-checkbox{color:#333}.gui-schema-manager-dialog .gui-schema-manager .gui-structure-schema-manager-select:nth-last-child(1),.gui-schema-manager-dialog .gui-schema-manager .gui-checkbox:nth-last-child(1){margin-bottom:0}.gui-dialog-title{border-bottom:solid 1px #d6d6d6;font-size:18px;font-weight:700;margin-left:-16px;margin-right:-16px;padding-bottom:16px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-structure-schema-manager-select{padding:8px 0 24px}.gui-structure-dialog-column-manager ol{max-height:400px;min-width:250px}\n", ".gui-cell .gui-checkbox{display:block}.gui-cell .gui-chip{margin:0;padding:2px 8px}.gui-cell .gui-input{display:block;font-size:11px;padding:2px 4px;width:100%}.gui-cell .gui-button{padding:2px 8px}.gui-cell .gui-cell-number{display:block;width:100%}.gui-cell .gui-cell-boolean{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;text-align:center;width:100%}.gui-cell .gui-string-edit{width:100%}\n", ".gui-fabric{border-color:#d6d6d6;font-family:Arial;font-size:14px}.gui-fabric .gui-header-cell,.gui-fabric .gui-structure-header-columns,.gui-fabric .gui-structure-top-panel,.gui-fabric .gui-structure-info-panel,.gui-fabric .gui-paging{height:42px}\n", ".gui-material{border-color:#0000001f;font-family:Arial;font-size:14px}.gui-material *{border-color:#0000001f}.gui-material.gui-structure{border:0;border-radius:0;box-shadow:0 2px 2px #00000024,0 3px 1px -2px #0000001f,0 1px 5px #0003}.gui-material.gui-structure,.gui-material .gui-header{font-family:Arial}.gui-material .gui-header-cell,.gui-material .gui-structure-header-columns{height:56px}.gui-material .gui-header .gui-header-cell.gui-header-sortable:hover{background:transparent}.gui-material .gui-header-cell{padding-left:16px;padding-right:16px}.gui-material .gui-structure-container-element .gui-structure-cell>span{padding-left:16px;padding-right:16px}.gui-material .gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:rgba(0,0,0,.04)}.gui-material .gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:#e6f7ff}.gui-material .gui-structure-header .gui-header{background:transparent;color:#464646;font-weight:700}.gui-material .gui-structure-header .gui-header .gui-header-cell{border-color:inherit}.gui-material .gui-cell .gui-button,.gui-material .gui-cell .gui-badge{padding:0}.gui-material .gui-paging-alternative-navigator .gui-button{background:transparent;color:#333;margin:0 4px;padding:0}.gui-material .gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-material .gui-paging-alternative-navigator .gui-button:disabled{background:transparent;color:#ccc;opacity:.4}.gui-material .gui-structure-summaries-panel{background:#fff}.gui-material gui-structure-top-panel,.gui-material .gui-structure-info-panel,.gui-material .gui-paging{height:52px;padding-left:16px;padding-right:16px}.gui-material .gui-structure-info-panel{background:#fff;border-radius:0}.gui-material gui-structure-top-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-right:0}.gui-material gui-structure-top-panel .gui-search-bar form input{border:0;outline:0}.gui-material .gui-search-bar form input{border:0;outline:none}\n", ".gui-dark{border-color:#575757;border-radius:2px;color:#f0f0f0;font-family:Arial;font-size:14px}.gui-dark *{border-color:#575757;color:#f0f0f0}.gui-dark.gui-structure{border-radius:2px}.gui-dark .gui-header-cell,.gui-dark .gui-structure-header-columns{background:#333;height:46px}.gui-dark .gui-structure-border{border:none;box-shadow:5px 5px 10px 2px #1f1f1f}.gui-dark .gui-header-cell{border-bottom:1px solid;border-color:inherit;padding-left:16px;padding-right:16px}.gui-dark .gui-structure-container-element .gui-structure-cell>span{padding-left:16px;padding-right:16px}.gui-dark .gui-structure-header .gui-header{border-bottom-color:#666;color:#bdbdbd}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover{background:#525252}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper{background-color:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-list{background:#383838}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item{color:#f0f0f0}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item.gui-active{color:#ce93d8}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-content{box-shadow:0 1px 2px #525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-structure-column-manager ol li:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move{color:#f0f0f0}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover svg line{stroke:#ce93d8}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#666}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover svg line{stroke:#ce93d8}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item{background:#383838;color:#f0f0f0;display:-ms-flexbox;display:flex}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item{color:#f0f0f0}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-checkbox{color:#f0f0f0}.gui-dark .gui-structure-column-manager>div:hover{background:#525252}.gui-dark .gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:#525252}.gui-dark .gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:rgba(124,185,246,.3215686275)}.gui-dark.gui-rows-odd .gui-row.odd,.gui-dark.gui-rows-even .gui-row.even{background:#4f4f4f}.gui-dark .gui-horizontal-grid .gui-structure-container-element .gui-row .gui-cell{border-bottom-color:#666}.gui-dark .gui-paging.gui-paging-bottom{border-top-color:#666}.gui-dark .gui-paging.gui-paging-top{border-bottom-color:#666}.gui-dark ::-webkit-scrollbar{width:15px}.gui-dark ::-webkit-scrollbar-track{background:#616161}.gui-dark ::-webkit-scrollbar-thumb{background:#424242}.gui-dark ::-webkit-scrollbar-thumb:hover{background:#212121}.gui-dark .gui-structure-top-panel,.gui-dark .gui-structure-info-panel,.gui-dark .gui-paging,.gui-dark .gui-structure-container-element,.gui-dark .gui-row{background:#444}.gui-dark .gui-structure-top-panel,.gui-dark .gui-structure-info-panel,.gui-dark .gui-paging{height:42px;padding-left:16px;padding-right:16px}.gui-dark .gui-structure-summaries-cell{background:#383838;color:#f0f0f0}.gui-dark .gui-structure-summaries-panel-bottom .gui-structure-summaries-cell{border-top-color:#666}.gui-dark .gui-structure-summaries-panel-top .gui-structure-summaries-cell{border-bottom-color:#666}.gui-dark .gui-structure-info-panel{background:#383838;border-top-color:#666}.gui-dark .gui-structure-info-panel div{color:#f0f0f0}.gui-dark .gui-structure-info-panel div button{background:#616161}.gui-dark .gui-structure-info-panel p,.gui-dark .gui-structure-info-modal p{color:#f0f0f0}.gui-dark gui-paging-alternative-navigator .gui-button{background:transparent;color:#f0f0f0;margin:0 4px;padding:0}.gui-dark gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-dark gui-paging-alternative-navigator .gui-button:disabled{background:transparent;color:#f0f0f0;opacity:.4}.gui-dark gui-paging-alternative-navigator gui-paging-alternative-pages .gui-paging-active-page{box-shadow:0 1px #f0f0f0;color:#f0f0f0}.gui-dark .gui-search-bar form{background:#444}.gui-dark .gui-search-bar input{background:#444;border:0;color:#f0f0f0;cursor:pointer}.gui-dark .gui-search-bar:hover .gui-search-icon-svg line,.gui-dark .gui-search-bar:hover .gui-search-icon-svg circle{stroke:#878787}.gui-dark .gui-icon{cursor:pointer}.gui-dark .gui-icon svg{stroke:#aaa;transition:stroke .3s ease-in-out}.gui-dark .gui-icon svg:hover{stroke:#e6e6e6!important}.gui-dark .gui-empty-source div{background:#383838}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-schema-manager-dialog .gui-dialog-title{color:#f0f0f0}.gui-dark .gui-title-panel,.gui-dark .gui-footer-panel{background:#383838}.gui-dark .gui-structure-ordered-list li:hover{background:#525252}\n", ".gui-light{border-color:#f0f0f0;font-family:Arial;font-size:14px}.gui-light *{border-color:#f0f0f0}.gui-light.gui-structure-border{border:0}.gui-light.gui-structure,.gui-light .gui-header{background:#fff;color:#333;font-family:Arial}.gui-light .gui-header-cell,.gui-light .gui-structure-header-columns{height:56px}.gui-light.gui-structure-border{border-color:#f0f0f0 transparent}.gui-light .gui-header-cell,.gui-light .gui-structure-container-element .gui-structure-cell>span{padding-left:16px;padding-right:16px}.gui-light .gui-structure-header .gui-header{color:#333;font-weight:700}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover{background:#f3f9ff}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper{background-color:#f3f9ff}.gui-light .gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:#f3f9ff}.gui-light .gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:rgba(124,185,246,.3215686275)}.gui-light.gui-rows-odd .gui-row.odd,.gui-light.gui-rows-even .gui-row.even{background:#f7f7f7}.gui-light gui-paging-alternative-navigator .gui-button{background:transparent;color:#333;margin:0 4px;padding:0}.gui-light gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-light gui-paging-alternative-navigator .gui-button:disabled{background:transparent;color:#333;opacity:.4}.gui-light .gui-structure-top-panel,.gui-light .gui-structure-info-panel,.gui-light .gui-paging{height:56px;padding-left:16px;padding-right:16px}.gui-light .gui-structure-top-panel,.gui-light .gui-structure-info-panel,.gui-light .gui-paging,.gui-light .gui-structure-summaries-panel{background:#fff}.gui-light .gui-search-bar form input{border:0;outline:none}\n", ".gui-structure.gui-generic{border-color:#2224261a;font-family:Arial;font-size:14px}.gui-structure.gui-generic *{border-color:#2224261a}.gui-structure.gui-generic .gui-header-cell,.gui-structure.gui-generic .gui-structure-header-columns{height:46px}.gui-structure.gui-generic .gui-header .gui-header-cell.gui-header-sortable:hover{background:rgba(0,0,0,.04);transition:.15s all}.gui-structure.gui-generic .gui-header-cell,.gui-structure.gui-generic .gui-structure-container-element .gui-structure-cell>span{padding-left:12px;padding-right:12px}.gui-structure.gui-generic .gui-structure-container-element .gui-structure-cell:last-child>span{padding-right:20px}.gui-structure.gui-generic .gui-structure-header.gui-header-bottom .gui-header{border-color:inherit;border-style:solid;border-width:2px 0 0}.gui-structure.gui-generic .gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:rgba(0,0,0,.04)}.gui-structure.gui-generic .gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:#e6f7ff}.gui-structure.gui-generic .gui-structure-header .gui-header{background:#f9fafb;border-width:0 0 2px;color:#464646;font-weight:700}.gui-structure.gui-generic .gui-rows-odd .gui-row.odd,.gui-structure.gui-generic .gui-rows-even .gui-row.even{background:#f9fafb}.gui-structure.gui-generic .gui-cell .gui-button,.gui-structure.gui-generic .gui-cell .gui-badge{padding:0}.gui-structure.gui-generic .gui-paging-alternative-navigator .gui-button{background:transparent;color:#333;margin:0 4px;padding:0}.gui-structure.gui-generic .gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-structure.gui-generic .gui-paging-alternative-navigator .gui-button:disabled{background:transparent;color:#ccc;opacity:.4}.gui-structure.gui-generic .gui-structure-summaries-panel{background:#f9fafb}.gui-structure.gui-generic .gui-structure-top-panel,.gui-structure.gui-generic .gui-structure-info-panel,.gui-structure.gui-generic .gui-paging{height:46px;padding-left:12px;padding-right:12px}.gui-structure.gui-generic .gui-structure-info-panel{background:#f9fafb;border-radius:0}.gui-structure.gui-generic .gui-structure-top-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-right:0}.gui-structure.gui-generic .gui-structure-top-panel .gui-search-bar form input{border:0;outline:0}.gui-structure.gui-generic .gui-rows-odd gui-row.odd,.gui-structure.gui-generic .gui-rows-even .gui-row.even{background:#f9fafb}.gui-structure.gui-generic .gui-row:hover{background:#f9fafb;transition:.15s all}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1.FabricSpinnerComponent, selector: "gui-spinner", inputs: ["color"] }, { kind: "component", type: StructureBlueprintComponent, selector: "div[gui-structure-blueprint]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-structure', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-structure-border]': 'isBorderEnabled()',
                        '[id]': 'structureId.toString()'
                    }, providers: [
                        {
                            provide: StructureId,
                            useFactory: structureIdFactoryForGrid,
                            deps: [
                                StructureIdGenerator
                            ]
                        },
                        {
                            provide: CompositionId,
                            useFactory: compositionIdFactoryForGrid,
                            deps: [
                                StructureIdGenerator
                            ]
                        },
                        {
                            provide: SchemaReadModelRootId,
                            useFactory: schemaIdFactoryForGrid,
                            deps: [
                                StructureIdGenerator
                            ]
                        },
                        SchemaCssClassManager,
                        StructureCellEditCloseAllService,
                        StructureCellEditStore,
                        StructureEditModeArchive,
                        StructureInfoPanelArchive,
                        StructureInfoPanelConfigService,
                        StructureColumnMenuConfigArchive,
                        PagingFeatureModule.forComponent(),
                        SortingFeatureModule.forComponent(),
                        FieldFeatureModule.forComponent(),
                        FormationFeatureModule.forComponent(),
                        SearchFeatureModule.forComponent(),
                        SourceFeatureModule.forComponent(),
                        SchemaFeatureModule.forComponent(),
                        SummariesFeatureModule.forComponent(),
                        TranslationFeatureModule.forComponent(),
                        RowSelectEnabledRepository,
                        StructureHeaderTopEnabledArchive,
                        StructureHeaderBottomEnabledArchive,
                        StructureRowDetailConfigArchive,
                        StructureRowDetailService,
                        StructureTitlePanelConfigArchive,
                        StructureFooterPanelConfigArchive,
                        {
                            provide: structureComponentToken,
                            useExisting: StructureComponent
                        },
                        {
                            provide: filterContainerToken,
                            useExisting: StructureComponent
                        }
                    ], template: "<div gui-structure-blueprint></div>\n\n<!---------- LOADING ---------->\n<div [ngClass]=\"{'gui-loader-visible': loaderEnabled, 'gui-loader-hidden': !loaderEnabled && initialLoaderAnimation}\"\n\t class=\"gui-loading\">\n\t<gui-spinner *ngIf=\"circleLoaderEnabled\"\n\t\t\t\t [diameter]=\"120\"\n\t\t\t\t [primary]=\"true\">\n\t</gui-spinner>\n</div>\n", styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-10{grid-row-gap:16px}.gui-grid-rows-gap-13{grid-row-gap:22px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-10{grid-column-gap:16px}.gui-grid-cols-gap-13{grid-column-gap:22px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.-gui-m-0{margin:0}.-gui-mx-0{margin-left:0;margin-right:0}.-gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.-gui-m-1{margin:-1px}.-gui-mx-1{margin-left:-1px;margin-right:-1px}.-gui-my-1{margin-bottom:-1px;margin-top:-1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.-gui-m-2{margin:-2px}.-gui-mx-2{margin-left:-2px;margin-right:-2px}.-gui-my-2{margin-bottom:-2px;margin-top:-2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.-gui-m-3{margin:-3px}.-gui-mx-3{margin-left:-3px;margin-right:-3px}.-gui-my-3{margin-bottom:-3px;margin-top:-3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.-gui-m-4{margin:-4px}.-gui-mx-4{margin-left:-4px;margin-right:-4px}.-gui-my-4{margin-bottom:-4px;margin-top:-4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.-gui-m-5{margin:-6px}.-gui-mx-5{margin-left:-6px;margin-right:-6px}.-gui-my-5{margin-bottom:-6px;margin-top:-6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.-gui-m-6{margin:-8px}.-gui-mx-6{margin-left:-8px;margin-right:-8px}.-gui-my-6{margin-bottom:-8px;margin-top:-8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.-gui-m-7{margin:-10px}.-gui-mx-7{margin-left:-10px;margin-right:-10px}.-gui-my-7{margin-bottom:-10px;margin-top:-10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.-gui-m-8{margin:-12px}.-gui-mx-8{margin-left:-12px;margin-right:-12px}.-gui-my-8{margin-bottom:-12px;margin-top:-12px}.gui-m-10{margin:16px}.gui-mx-10{margin-left:16px;margin-right:16px}.gui-my-10{margin-bottom:16px;margin-top:16px}.-gui-m-10{margin:-16px}.-gui-mx-10{margin-left:-16px;margin-right:-16px}.-gui-my-10{margin-bottom:-16px;margin-top:-16px}.gui-m-13{margin:22px}.gui-mx-13{margin-left:22px;margin-right:22px}.gui-my-13{margin-bottom:22px;margin-top:22px}.-gui-m-13{margin:-22px}.-gui-mx-13{margin-left:-22px;margin-right:-22px}.-gui-my-13{margin-bottom:-22px;margin-top:-22px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.-gui-m-23{margin:-42px}.-gui-mx-23{margin-left:-42px;margin-right:-42px}.-gui-my-23{margin-bottom:-42px;margin-top:-42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-ml-6{margin-left:8px}.gui-mt-0{margin-top:0}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-10{padding:16px}.gui-px-10{padding-left:16px;padding-right:16px}.gui-py-10{padding-bottom:16px;padding-top:16px}.gui-p-13{padding:22px}.gui-px-13{padding-left:22px;padding-right:22px}.gui-py-13{padding-bottom:22px;padding-top:22px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-text-center{text-align:center}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-structure *,.gui-structure *:after,.gui-structure *:before{box-sizing:border-box}.gui-structure input{font-size:13px;outline:0}.gui-bold{font-weight:700}.gui-italic{font-style:italic}.gui-bar-view{width:100%}.gui-align-right{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;text-align:right;width:100%}.gui-align-left{text-align:left;width:100%}.gui-align-center{-ms-flex-pack:center;justify-content:center;text-align:center;width:100%}.gui-icon{cursor:pointer}.gui-icon svg{fill:#aaa;stroke:#aaa;transition:stroke .3s ease-in-out}.gui-icon svg:hover{fill:#464646!important;stroke:#464646!important}.gui-view-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gui-percentage-bar{background:#deebff;border-radius:4px;box-shadow:inset 1px 1px 2px #ccc;color:#0747a6;height:22px;padding:4px;position:relative;text-align:center;width:100%}.gui-percentage-bar .gui-percentage{background:#8abcfc;border-radius:4px;height:22px;left:0;position:absolute;top:0}.gui-percentage-bar .gui-percentage-view{color:#031d44;position:relative;width:100%}.gui-clear-search-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);width:16px}.gui-clear-search-icon:before,.gui-clear-search-icon:after{background-color:#aaa;border-radius:8px;content:\" \";height:16px;left:7px;position:absolute;width:2px}.gui-clear-search-icon:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-clear-search-icon:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-clear-search-icon:hover:before,.gui-clear-search-icon:hover:after{background-color:#464646}\n", ".gui-structure,.gui-structure *{border-color:#d6d6d6;font-size:14px}.gui-structure input{color:#333;font-family:Arial}.gui-header{background:#f2f3f4;border-bottom:1px solid;border-color:inherit;height:36px}.gui-header .gui-header-cell.gui-header-sortable{cursor:pointer}.gui-header .gui-header-cell.gui-header-sortable:hover{background:#e6e7e8}.gui-header .gui-header-cell .gui-header-menu-icon{display:none}.gui-header .gui-header-cell:hover .gui-header-menu{cursor:pointer}.gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper .gui-header-menu-icon{display:block}.gui-header .gui-header-cell:last-of-type{border-right:0}.gui-header .gui-header-cell .gui-header-title{display:-ms-flexbox;display:flex;line-height:1.4em}.gui-header .gui-header-cell .gui-header-menu{display:-ms-flexbox;display:flex}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:16px;padding:16px;position:relative;right:0;width:16px}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon-wrapper .gui-header-menu-icon{display:none;height:16px;width:16px}.gui-header-bottom .gui-header{border-bottom:0;border-color:inherit;border-top:1px solid}.gui-structure{background:#fff;border-color:#d6d6d6;box-sizing:border-box;color:#333;display:block;font-family:Arial;font-size:14px;position:relative}.gui-structure *{box-sizing:border-box}.gui-structure .gui-structure-header{display:block;height:100%;width:100%}.gui-structure .gui-structure-header .gui-structure-header-filters.gui-header{height:32px}.gui-structure .gui-structure-header .gui-structure-header-filters.gui-header .gui-header-cell{padding:4px}.gui-structure .gui-structure-header .gui-structure-header-filters.gui-header .gui-header-cell input{box-sizing:border-box;height:100%;padding:2px;position:relative;width:100%;border-color:#d6d6d6;border-style:solid;border-width:1px;font-size:13px}.gui-structure-container{display:block;height:100%;overflow:auto;overflow-x:hidden;position:relative;width:100%}.gui-structure-container .gui-structure-container-element{height:100%;position:absolute;width:100%}.gui-structure-container .gui-structure-container-element .gui-content{height:100%;position:relative}.gui-structure-container .gui-structure-container-element .gui-content .gui-row{border-bottom:1px solid transparent;position:absolute;width:100%}.gui-structure-container .gui-structure-container-element .gui-content .gui-row:last-child{border-bottom:0}.gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:#ecedee}.gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:#d0e8fb}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell{border-right:1px solid transparent;box-sizing:border-box;line-height:1em;overflow:hidden;padding:0;white-space:nowrap}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-cell-view span{line-height:1.4em}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-button{padding:0}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-cell-boolean{-ms-flex-pack:center;justify-content:center}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-checkbox{line-height:24px;position:relative}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-checkbox input{position:relative}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-chip{line-height:1em;margin:0;padding:4px 8px}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-badge{padding:0}.gui-structure-container .gui-structure-container-element .gui-content .gui-row .gui-cell .gui-input{background:transparent;font-size:14px;padding:0;border-radius:0;border-style:none}.gui-structure-container .gui-cell{display:inline-block}.gui-structure-container .gui-cell:last-child .gui-cell-view{padding-right:20px}.gui-structure-container .gui-cell>span{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;padding:0 8px;width:100%}.gui-structure-container .gui-cell .gui-cell-edit-mode{border:2px solid #2185d0;height:100%;padding:6px}.gui-structure-container .gui-cell .gui-cell-edit-mode .gui-boolean-edit{margin-left:calc(50% - 11px)}.gui-structure-container .gui-cell .gui-cell-edit-mode input:focus{box-shadow:none;outline:none}.gui-vertical-grid .gui-structure-summaries-cell,.gui-vertical-grid .gui-structure-container-element .gui-content .gui-row .gui-cell,.gui-vertical-grid .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid;border-right-color:inherit}.gui-vertical-grid .gui-structure-container-element .gui-content .gui-row .gui-cell:last-of-type,.gui-vertical-grid .gui-structure-header .gui-header .gui-header-cell:last-of-type{border-right:0}.gui-vertical-grid .gui-row-checkbox{border-right:1px solid!important;border-right-color:inherit!important}.gui-horizontal-grid .gui-structure-container-element .gui-content .gui-row{border-bottom:1px solid;border-bottom-color:inherit}.gui-horizontal-grid .gui-structure-container-element .gui-content .gui-row:last-of-type{border-bottom:0}.gui-rows-even .gui-row.even,.gui-rows-odd .gui-row.odd{background:#f7f8f9}.gui-structure-info-panel{-ms-flex-align:center;align-items:center;background:#f2f3f4;box-sizing:border-box;display:-ms-flexbox;display:flex;height:36px;-ms-flex-pack:justify;justify-content:space-between;padding:0 6px;width:100%;border-top-color:inherit;border-top-style:solid;border-top-width:1px}.gui-structure-info-panel p{margin:0}.gui-structure-info-panel p b{font-weight:700}.gui-structure-info-panel div button{background:#ccc;color:#fff;cursor:pointer;font-family:Arial;font-weight:700;height:16px;line-height:14px;padding:0;width:16px;border-color:transparent;border-radius:50%;border-style:solid;border-width:1px}.gui-structure-info-panel div button:focus{box-shadow:0 0 4px #ccc;outline:none}.gui-structure-border{border:1px solid;border-color:#d6d6d6}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.gui-loading{-ms-flex-line-pack:center;align-content:center;-webkit-animation-duration:.2s;animation-duration:.2s;background:rgba(255,255,255,.8);border:1px solid;border-color:inherit;display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:center;justify-content:center;left:0;opacity:0;position:absolute;top:0;visibility:hidden;width:100%}.gui-loading .gui-spinner{-ms-flex-item-align:center;align-self:center}.gui-loading.gui-loader-hidden{-webkit-animation-name:fadeOut;animation-name:fadeOut;opacity:0;visibility:visible;z-index:-1}.gui-loading.gui-loader-visible{-webkit-animation-name:fadeIn;animation-name:fadeIn;opacity:1;visibility:visible;z-index:1}.gui-text-highlight{background:#fff799;padding:0!important}.gui-title-panel{border-bottom-color:#d6d6d6}.gui-footer-panel{border-top-color:#d6d6d6}.gui-structure-schema-manager-icon{margin-right:16px}.gui-structure-schema-manager-icon svg{height:18px;margin-bottom:-1px;width:18px}.gui-row-checkbox{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center;justify-content:center;padding:0 12px!important;width:48px!important}.gui-row-checkbox .gui-checkbox{height:24px;margin:0;padding:0;width:24px}.gui-select-all .gui-checkbox .gui-checkmark{top:0}.gui-structure-cell-edit-boolean{height:100%}.gui-column-highlighted{background:#fffddd}.gui-structure-column-manager>div:hover{background:#ecedee}.gui-structure-column-manager label{margin-bottom:0}.gui-structure-ordered-list li:hover{background:#ecedee}\n", ".gui-structure-column-menu-icon svg{height:16px;width:16px}.gui-structure-column-menu-icon .cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.gui-structure-column-menu-arrow-icon{display:inline-block}.gui-structure-column-menu-arrow-icon svg{height:10px;width:12px}.gui-structure-column-menu-arrow-icon .gui-structure-column-menu-sort-icon svg{height:16px}.gui-structure-column-menu-arrow-icon .cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}\n", ".gui-summaries-value{font-weight:700}.gui-structure-summaries-panel{background:#f2f3f4}.gui-structure-summaries-panel.gui-structure-summaries-panel-bottom .gui-structure-summaries-cell{border-top:1px solid #d6d6d6}.gui-structure-summaries-panel.gui-structure-summaries-panel-top .gui-structure-summaries-cell{border-bottom:1px solid #d6d6d6}.gui-structure-summaries-panel .gui-structure-summaries-cell{font-size:14px;padding-left:16px;padding-right:16px}.gui-structure-summaries-panel .gui-structure-summaries-cell:last-child{padding-right:20px}.gui-structure-summaries-panel .gui-structure-summaries-value{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;line-height:1em;overflow:hidden;padding:8px 0}.gui-structure-summaries-panel .gui-structure-summaries-value div .gui-math-symbol{position:relative;top:-1px}.gui-structure-summaries-panel .gui-structure-summaries-value .gui-mean,.gui-structure-summaries-panel .gui-structure-summaries-value .gui-median{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.gui-structure-summaries-panel .gui-structure-summaries-value .gui-mean span:nth-child(1){left:1px;position:absolute;top:-15px}.gui-structure-summaries-panel .gui-structure-summaries-value .gui-median span:nth-child(1){left:1px;position:absolute;top:-8px}\n", ".gui-structure-column-manager-icon svg{height:16px;width:16px}.gui-structure-column-manager-icon .cls-1,.gui-structure-column-manager-icon .cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round}.gui-structure-column-manager-icon .cls-2{stroke-width:1.5px}.gui-structure-info-icon svg{height:16px;width:16px}.gui-structure-info-icon .cls-1{stroke-width:0}.gui-structure-info-icon .cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round}.gui-structure-info-panel div,.gui-structure-info-panel div button{display:inline-block}.gui-structure-info-panel .gui-right-section .gui-structure-column-manager-icon{margin-right:16px;position:relative}.gui-structure-info-panel .gui-right-section .gui-structure-info-icon{margin-right:4px;position:relative}.gui-structure-info-modal .gui-quote{color:#575757}.gui-structure-info-modal p{color:#333}.gui-structure-info-modal a{color:#2185d0}.gui-structure-info-modal a:hover{color:#59a9e5;text-decoration:underline}\n", "@media (max-width: 500px){.gui-paging>*{padding-left:4px}.gui-paging .gui-paging-stats{padding-left:4px}}\n", ".gui-header{display:-ms-flexbox;display:flex}.gui-header .gui-header-cell{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.gui-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.gui-content .gui-structure-cell-container,.gui-content .gui-row{display:-ms-flexbox;display:flex}.gui-content .gui-structure-cell-container .gui-cell,.gui-content .gui-row .gui-cell{display:inline-block}.gui-content .gui-structure-row-details{background:#80cbc4;display:block;height:200px;position:absolute;-ms-transform:translateY(0);transform:translateY(0);width:100%}\n", ".gui-inline-dialog-header-menu.gui-inline-dialog-wrapper .gui-inline-dialog-content{background:transparent;box-shadow:none}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-item-active{font-weight:700}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-list{background:#fff}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item{color:#333}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item.gui-active{color:#2185d0}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-content{box-shadow:0 3px 7px #ccc;box-sizing:content-box;padding:0;width:225px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move{color:#333;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item svg line{stroke:#aaa}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item.left{padding:12px 16px 12px 12px;width:48%}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item.right{padding:12px 10px;width:52%}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover svg line{stroke:#464646}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container{border:none;border-radius:0}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow{opacity:1}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu{width:125px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item{background:#fff;color:#333;display:-ms-flexbox;display:flex;padding:8px 8px 8px 12px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item:hover .gui-sort-title svg line{stroke:#464646}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:100%}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title svg{margin-top:3px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-menu .gui-item .gui-sort-title svg line{stroke:#aaa}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item{color:#333;cursor:pointer;display:block;padding:8px 12px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item:hover{background:#ecedee}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-checkbox{color:#333;margin-left:12px;padding:8px 12px 8px 32px;width:169px}.gui-inline-dialog-header-menu .gui-header-menu-tab .gui-checkbox label{display:inline-block;width:inherit}\n", ".gui-schema-manager-dialog .gui-schema-manager{min-width:180px}.gui-schema-manager-dialog .gui-schema-manager .gui-structure-schema-manager-select,.gui-schema-manager-dialog .gui-schema-manager .gui-checkbox{color:#333}.gui-schema-manager-dialog .gui-schema-manager .gui-structure-schema-manager-select:nth-last-child(1),.gui-schema-manager-dialog .gui-schema-manager .gui-checkbox:nth-last-child(1){margin-bottom:0}.gui-dialog-title{border-bottom:solid 1px #d6d6d6;font-size:18px;font-weight:700;margin-left:-16px;margin-right:-16px;padding-bottom:16px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-structure-schema-manager-select{padding:8px 0 24px}.gui-structure-dialog-column-manager ol{max-height:400px;min-width:250px}\n", ".gui-cell .gui-checkbox{display:block}.gui-cell .gui-chip{margin:0;padding:2px 8px}.gui-cell .gui-input{display:block;font-size:11px;padding:2px 4px;width:100%}.gui-cell .gui-button{padding:2px 8px}.gui-cell .gui-cell-number{display:block;width:100%}.gui-cell .gui-cell-boolean{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;text-align:center;width:100%}.gui-cell .gui-string-edit{width:100%}\n", ".gui-fabric{border-color:#d6d6d6;font-family:Arial;font-size:14px}.gui-fabric .gui-header-cell,.gui-fabric .gui-structure-header-columns,.gui-fabric .gui-structure-top-panel,.gui-fabric .gui-structure-info-panel,.gui-fabric .gui-paging{height:42px}\n", ".gui-material{border-color:#0000001f;font-family:Arial;font-size:14px}.gui-material *{border-color:#0000001f}.gui-material.gui-structure{border:0;border-radius:0;box-shadow:0 2px 2px #00000024,0 3px 1px -2px #0000001f,0 1px 5px #0003}.gui-material.gui-structure,.gui-material .gui-header{font-family:Arial}.gui-material .gui-header-cell,.gui-material .gui-structure-header-columns{height:56px}.gui-material .gui-header .gui-header-cell.gui-header-sortable:hover{background:transparent}.gui-material .gui-header-cell{padding-left:16px;padding-right:16px}.gui-material .gui-structure-container-element .gui-structure-cell>span{padding-left:16px;padding-right:16px}.gui-material .gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:rgba(0,0,0,.04)}.gui-material .gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:#e6f7ff}.gui-material .gui-structure-header .gui-header{background:transparent;color:#464646;font-weight:700}.gui-material .gui-structure-header .gui-header .gui-header-cell{border-color:inherit}.gui-material .gui-cell .gui-button,.gui-material .gui-cell .gui-badge{padding:0}.gui-material .gui-paging-alternative-navigator .gui-button{background:transparent;color:#333;margin:0 4px;padding:0}.gui-material .gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-material .gui-paging-alternative-navigator .gui-button:disabled{background:transparent;color:#ccc;opacity:.4}.gui-material .gui-structure-summaries-panel{background:#fff}.gui-material gui-structure-top-panel,.gui-material .gui-structure-info-panel,.gui-material .gui-paging{height:52px;padding-left:16px;padding-right:16px}.gui-material .gui-structure-info-panel{background:#fff;border-radius:0}.gui-material gui-structure-top-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-right:0}.gui-material gui-structure-top-panel .gui-search-bar form input{border:0;outline:0}.gui-material .gui-search-bar form input{border:0;outline:none}\n", ".gui-dark{border-color:#575757;border-radius:2px;color:#f0f0f0;font-family:Arial;font-size:14px}.gui-dark *{border-color:#575757;color:#f0f0f0}.gui-dark.gui-structure{border-radius:2px}.gui-dark .gui-header-cell,.gui-dark .gui-structure-header-columns{background:#333;height:46px}.gui-dark .gui-structure-border{border:none;box-shadow:5px 5px 10px 2px #1f1f1f}.gui-dark .gui-header-cell{border-bottom:1px solid;border-color:inherit;padding-left:16px;padding-right:16px}.gui-dark .gui-structure-container-element .gui-structure-cell>span{padding-left:16px;padding-right:16px}.gui-dark .gui-structure-header .gui-header{border-bottom-color:#666;color:#bdbdbd}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover{background:#525252}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper{background-color:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-list{background:#383838}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item{color:#f0f0f0}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-menu .gui-tab-menu-item.gui-active{color:#ce93d8}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-tab-content{box-shadow:0 1px 2px #525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab .gui-structure-column-manager ol li:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move{color:#f0f0f0}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-column-move .gui-header-menu-column-move-item:hover svg line{stroke:#ce93d8}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#666}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover svg line{stroke:#ce93d8}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-dropdown-container:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item{background:#383838;color:#f0f0f0;display:-ms-flexbox;display:flex}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-tab-item-dropdown .gui-header-menu-dropdown.gui-dropdown .gui-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item{color:#f0f0f0}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-header-menu-item:hover{background:#525252}.gui-dark .gui-inline-dialog-header-menu .gui-header-menu-tab .gui-checkbox{color:#f0f0f0}.gui-dark .gui-structure-column-manager>div:hover{background:#525252}.gui-dark .gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:#525252}.gui-dark .gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:rgba(124,185,246,.3215686275)}.gui-dark.gui-rows-odd .gui-row.odd,.gui-dark.gui-rows-even .gui-row.even{background:#4f4f4f}.gui-dark .gui-horizontal-grid .gui-structure-container-element .gui-row .gui-cell{border-bottom-color:#666}.gui-dark .gui-paging.gui-paging-bottom{border-top-color:#666}.gui-dark .gui-paging.gui-paging-top{border-bottom-color:#666}.gui-dark ::-webkit-scrollbar{width:15px}.gui-dark ::-webkit-scrollbar-track{background:#616161}.gui-dark ::-webkit-scrollbar-thumb{background:#424242}.gui-dark ::-webkit-scrollbar-thumb:hover{background:#212121}.gui-dark .gui-structure-top-panel,.gui-dark .gui-structure-info-panel,.gui-dark .gui-paging,.gui-dark .gui-structure-container-element,.gui-dark .gui-row{background:#444}.gui-dark .gui-structure-top-panel,.gui-dark .gui-structure-info-panel,.gui-dark .gui-paging{height:42px;padding-left:16px;padding-right:16px}.gui-dark .gui-structure-summaries-cell{background:#383838;color:#f0f0f0}.gui-dark .gui-structure-summaries-panel-bottom .gui-structure-summaries-cell{border-top-color:#666}.gui-dark .gui-structure-summaries-panel-top .gui-structure-summaries-cell{border-bottom-color:#666}.gui-dark .gui-structure-info-panel{background:#383838;border-top-color:#666}.gui-dark .gui-structure-info-panel div{color:#f0f0f0}.gui-dark .gui-structure-info-panel div button{background:#616161}.gui-dark .gui-structure-info-panel p,.gui-dark .gui-structure-info-modal p{color:#f0f0f0}.gui-dark gui-paging-alternative-navigator .gui-button{background:transparent;color:#f0f0f0;margin:0 4px;padding:0}.gui-dark gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-dark gui-paging-alternative-navigator .gui-button:disabled{background:transparent;color:#f0f0f0;opacity:.4}.gui-dark gui-paging-alternative-navigator gui-paging-alternative-pages .gui-paging-active-page{box-shadow:0 1px #f0f0f0;color:#f0f0f0}.gui-dark .gui-search-bar form{background:#444}.gui-dark .gui-search-bar input{background:#444;border:0;color:#f0f0f0;cursor:pointer}.gui-dark .gui-search-bar:hover .gui-search-icon-svg line,.gui-dark .gui-search-bar:hover .gui-search-icon-svg circle{stroke:#878787}.gui-dark .gui-icon{cursor:pointer}.gui-dark .gui-icon svg{stroke:#aaa;transition:stroke .3s ease-in-out}.gui-dark .gui-icon svg:hover{stroke:#e6e6e6!important}.gui-dark .gui-empty-source div{background:#383838}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-schema-manager-dialog .gui-dialog-title{color:#f0f0f0}.gui-dark .gui-title-panel,.gui-dark .gui-footer-panel{background:#383838}.gui-dark .gui-structure-ordered-list li:hover{background:#525252}\n", ".gui-light{border-color:#f0f0f0;font-family:Arial;font-size:14px}.gui-light *{border-color:#f0f0f0}.gui-light.gui-structure-border{border:0}.gui-light.gui-structure,.gui-light .gui-header{background:#fff;color:#333;font-family:Arial}.gui-light .gui-header-cell,.gui-light .gui-structure-header-columns{height:56px}.gui-light.gui-structure-border{border-color:#f0f0f0 transparent}.gui-light .gui-header-cell,.gui-light .gui-structure-container-element .gui-structure-cell>span{padding-left:16px;padding-right:16px}.gui-light .gui-structure-header .gui-header{color:#333;font-weight:700}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover{background:#f3f9ff}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon-wrapper{background-color:#f3f9ff}.gui-light .gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:#f3f9ff}.gui-light .gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:rgba(124,185,246,.3215686275)}.gui-light.gui-rows-odd .gui-row.odd,.gui-light.gui-rows-even .gui-row.even{background:#f7f7f7}.gui-light gui-paging-alternative-navigator .gui-button{background:transparent;color:#333;margin:0 4px;padding:0}.gui-light gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-light gui-paging-alternative-navigator .gui-button:disabled{background:transparent;color:#333;opacity:.4}.gui-light .gui-structure-top-panel,.gui-light .gui-structure-info-panel,.gui-light .gui-paging{height:56px;padding-left:16px;padding-right:16px}.gui-light .gui-structure-top-panel,.gui-light .gui-structure-info-panel,.gui-light .gui-paging,.gui-light .gui-structure-summaries-panel{background:#fff}.gui-light .gui-search-bar form input{border:0;outline:none}\n", ".gui-structure.gui-generic{border-color:#2224261a;font-family:Arial;font-size:14px}.gui-structure.gui-generic *{border-color:#2224261a}.gui-structure.gui-generic .gui-header-cell,.gui-structure.gui-generic .gui-structure-header-columns{height:46px}.gui-structure.gui-generic .gui-header .gui-header-cell.gui-header-sortable:hover{background:rgba(0,0,0,.04);transition:.15s all}.gui-structure.gui-generic .gui-header-cell,.gui-structure.gui-generic .gui-structure-container-element .gui-structure-cell>span{padding-left:12px;padding-right:12px}.gui-structure.gui-generic .gui-structure-container-element .gui-structure-cell:last-child>span{padding-right:20px}.gui-structure.gui-generic .gui-structure-header.gui-header-bottom .gui-header{border-color:inherit;border-style:solid;border-width:2px 0 0}.gui-structure.gui-generic .gui-structure-container .gui-structure-container-element .gui-content .gui-row:hover{background:rgba(0,0,0,.04)}.gui-structure.gui-generic .gui-structure-container .gui-structure-container-element .gui-content .gui-row.selected{background:#e6f7ff}.gui-structure.gui-generic .gui-structure-header .gui-header{background:#f9fafb;border-width:0 0 2px;color:#464646;font-weight:700}.gui-structure.gui-generic .gui-rows-odd .gui-row.odd,.gui-structure.gui-generic .gui-rows-even .gui-row.even{background:#f9fafb}.gui-structure.gui-generic .gui-cell .gui-button,.gui-structure.gui-generic .gui-cell .gui-badge{padding:0}.gui-structure.gui-generic .gui-paging-alternative-navigator .gui-button{background:transparent;color:#333;margin:0 4px;padding:0}.gui-structure.gui-generic .gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-structure.gui-generic .gui-paging-alternative-navigator .gui-button:disabled{background:transparent;color:#ccc;opacity:.4}.gui-structure.gui-generic .gui-structure-summaries-panel{background:#f9fafb}.gui-structure.gui-generic .gui-structure-top-panel,.gui-structure.gui-generic .gui-structure-info-panel,.gui-structure.gui-generic .gui-paging{height:46px;padding-left:12px;padding-right:12px}.gui-structure.gui-generic .gui-structure-info-panel{background:#f9fafb;border-radius:0}.gui-structure.gui-generic .gui-structure-top-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-right:0}.gui-structure.gui-generic .gui-structure-top-panel .gui-search-bar form input{border:0;outline:0}.gui-structure.gui-generic .gui-rows-odd gui-row.odd,.gui-structure.gui-generic .gui-rows-even .gui-row.even{background:#f9fafb}.gui-structure.gui-generic .gui-row:hover{background:#f9fafb;transition:.15s all}\n"] }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: CompositionId }, { type: PagingPublisher }, { type: PagingEventRepository }, { type: SourcePublisher }, { type: SourceEventService }, { type: SortingPublisher }, { type: SearchPublisher }, { type: FieldPublisher }, { type: SchemaPublisher }, { type: CompositionPublisher }, { type: CompositionEventRepository }, { type: FormationEventRepository }, { type: StructurePublisher }, { type: StructureEditModeArchive }, { type: StructureCellEditArchive }, { type: StructureInfoPanelArchive }, { type: StructureInfoPanelConfigService }, { type: StructureCellEditStore }, { type: ColumnFieldFactory }, { type: StructureColumnMenuConfigArchive }, { type: PagingDisplayModeArchive }, { type: RowSelectEnabledRepository }, { type: RowSelectionTypeArchive }, { type: FormationPublisher }, { type: SearchEventRepository }, { type: StructureHeaderBottomEnabledArchive }, { type: StructureRowDetailConfigArchive }, { type: StructureTitlePanelConfigArchive }, { type: StructureFooterPanelConfigArchive }, { type: SchemaEventRepository }, { type: TranslationFacade }, { type: StructureInitialValuesReadyArchive }, { type: ColumnAutoConfigurator }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }, { type: StructureDefinition }, { type: StructureWarehouse }, { type: CompositionWarehouse }, { type: SchemaCssClassManager }, { type: SchemaReadModelRootId }, { type: StructureRowDetailService }]; } });

class StructureHeaderFilterComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureFilterCommandService, structureId) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureFilterCommandService = structureFilterCommandService;
        this.structureId = structureId;
        this.sub = new ChangedValueEmitter();
        this.editContext = {
            changes: this.sub
        };
    }
    ngOnInit() {
        this.sub
            .on()
            .subscribe((phrase) => this.filter(phrase));
    }
    filter(phrase) {
        // this.structureFilterCommandService.addFilter(this.column.getFieldId(), '1', phrase, this.structureId);
    }
    getSelectorName() {
        return 'gui-structure-header-filter';
    }
}
StructureHeaderFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderFilterComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: FilterPublisher }, { token: StructureId }], target: i0.ɵɵFactoryTarget.Component });
StructureHeaderFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureHeaderFilterComponent, selector: "gui-structure-header-filter", inputs: { column: "column" }, usesInheritance: true, ngImport: i0, template: `

		<!--		<ng-container-->
		<!--				*ngTemplateOutlet="column.editTemplate; context: editContext">-->
		<!--		</ng-container>-->

		<button gui-button [primary]="true">Add Filter</button>

	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureHeaderFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-structure-header-filter',
                    template: `

		<!--		<ng-container-->
		<!--				*ngTemplateOutlet="column.editTemplate; context: editContext">-->
		<!--		</ng-container>-->

		<button gui-button [primary]="true">Add Filter</button>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: FilterPublisher }, { type: StructureId }]; }, propDecorators: { column: [{
                type: Input
            }] } });

class StructureQuickFiltersComponent {
}
StructureQuickFiltersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureQuickFiltersComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StructureQuickFiltersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureQuickFiltersComponent, selector: "div[gui-structure-quick-filters]", ngImport: i0, template: `

		QuickFilters

	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureQuickFiltersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-quick-filters]',
                    template: `

		QuickFilters

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });

class ConsoleLogger extends Logger {
    warn(text) {
        // eslint-disable-next-line no-console
        console.warn(text);
    }
    error(text) {
        // eslint-disable-next-line no-console
        console.error(text);
    }
}

CoreContainer.provide(Logger, ConsoleLogger);
function provideLogger() {
    return CoreContainer.resolve(Logger);
}
class LoggerModule {
}
LoggerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoggerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: LoggerModule });
LoggerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggerModule, providers: [
        { provide: Logger, useFactory: provideLogger }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggerModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: Logger, useFactory: provideLogger }
                    ]
                }]
        }] });

class ItemEntity {
    constructor(source, position, id, version = 0) {
        this.version = 0;
        this.source = source;
        this.position = position;
        this.version = version;
        if (!id) {
            this.id = RandomStringGenerator.generate();
        }
        else {
            this.id = id;
        }
    }
    getSourceItem() {
        return this.source;
    }
    getUiId() {
        return 'gui' + this.id.replace(/-/g, '');
    }
    getId() {
        return this.id;
    }
    getVersion() {
        return this.version;
    }
    getPosition() {
        return this.position;
    }
    isSelected() {
        return false;
    }
    isEven() {
        return this.position % 2 === 0;
    }
    isOdd() {
        return this.position % 2 === 1;
    }
    equals(entity) {
        return this.id === entity.id && this.getVersion() === entity.getVersion();
    }
    equalsById(id) {
        return this.id === id;
    }
}

class ItemEntityFactory {
    create(source) {
        if (Array.isArray(source)) {
            return this.createEntities(source);
        }
        else {
            return this.createEntity(source);
        }
    }
    createEntities(source) {
        return source.map((source) => this.createEntity(source));
    }
    createEntity(originItem) {
        if (originItem instanceof OriginItemEntity) {
            return new ItemEntity(originItem.sourceItem, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
        }
        else {
            return new ItemEntity(originItem, 0);
        }
    }
}

class StructureTopPanelModule {
}
StructureTopPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureTopPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelModule, declarations: [StructureTopPanelComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FilterMenuFeatureModule,
        SearchFeatureModule], exports: [StructureTopPanelComponent] });
StructureTopPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelModule, imports: [CommonModule,
        ReactiveFormsModule,
        FilterMenuFeatureModule,
        SearchFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FilterMenuFeatureModule,
                        SearchFeatureModule
                    ],
                    declarations: [
                        StructureTopPanelComponent
                    ],
                    exports: [
                        StructureTopPanelComponent
                    ]
                }]
        }] });

class UniqueValueListModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
UniqueValueListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: UniqueValueListModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
UniqueValueListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: UniqueValueListModule, declarations: [UniqueValueListComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, FilterFeatureModule], exports: [UniqueValueListComponent] });
UniqueValueListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: UniqueValueListModule, imports: [CommonModule,
        fabricImports,
        FilterFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: UniqueValueListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        FilterFeatureModule
                    ],
                    declarations: [
                        UniqueValueListComponent
                    ],
                    exports: [
                        UniqueValueListComponent
                    ]
                }]
        }] });

const icon$1 = [
    StructureColumnMenuIconComponent
];
class StructureMenuIconModule {
}
StructureMenuIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureMenuIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureMenuIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: StructureMenuIconModule, declarations: [StructureColumnMenuIconComponent], exports: [StructureColumnMenuIconComponent] });
StructureMenuIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureMenuIconModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureMenuIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: icon$1,
                    exports: icon$1
                }]
        }] });

const icon = [
    StructureArrowIconComponent
];
class StructureArrowIconModule {
}
StructureArrowIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureArrowIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureArrowIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: StructureArrowIconModule, declarations: [StructureArrowIconComponent], exports: [StructureArrowIconComponent] });
StructureArrowIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureArrowIconModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureArrowIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: icon,
                    exports: icon
                }]
        }] });

const declarations$2 = [
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureColumnConfigSortComponent,
    StructureColumnConfigColumnHideComponent,
    StructureColumnConfigColumnMoveComponent
];
const icons$1 = [
    StructureMenuIconModule,
    StructureArrowIconModule
];
class StructureColumnMenuModule {
}
StructureColumnMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureColumnMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuModule, declarations: [StructureColumnConfigComponent,
        StructureColumnConfigTriggerComponent,
        StructureColumnConfigSortComponent,
        StructureColumnConfigColumnHideComponent,
        StructureColumnConfigColumnMoveComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, StructureColumnManagerModule,
        UniqueValueListModule,
        TranslationFeatureModule, StructureMenuIconModule,
        StructureArrowIconModule], exports: [StructureColumnConfigComponent,
        StructureColumnConfigTriggerComponent,
        StructureColumnConfigSortComponent,
        StructureColumnConfigColumnHideComponent,
        StructureColumnConfigColumnMoveComponent] });
StructureColumnMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuModule, imports: [CommonModule,
        fabricImports,
        StructureColumnManagerModule,
        UniqueValueListModule,
        TranslationFeatureModule,
        icons$1] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        StructureColumnManagerModule,
                        UniqueValueListModule,
                        TranslationFeatureModule,
                        icons$1
                    ],
                    declarations: declarations$2,
                    exports: declarations$2
                }]
        }] });

class StructureCellEditComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, sourceCommandService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.sourceCommandService = sourceCommandService;
    }
    ngOnChanges(changes) {
        ifChanged(changes.entity, () => {
            this.initEditContext();
        });
        ifChanged(changes.cell, () => {
            this.initEditContext();
        });
    }
    ngOnInit() {
        this.initEditContext();
    }
    submitChangesAndExit() {
        const itemId = this.entity.getId(), updatedValue = this.actualValue, fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue), this.structureId);
    }
    getSelectorName() {
        return 'gui-structure-cell-edit';
    }
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
            .subscribe((status) => {
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
        });
    }
    observeValueChanges() {
        this.valueChanges$
            .on()
            .pipe(this.takeUntil())
            .subscribe((value) => {
            this.actualValue = value;
        });
    }
    publishEditState(state) {
        // this.structureCellEditStore.next(state);
    }
    publishEditEnter() {
        this.publishEditState(StructureCellEditState.ENTER);
    }
    publishEditCancel() {
        this.publishEditState(StructureCellEditState.CANCEL);
    }
    publishEditSubmit() {
        this.publishEditState(StructureCellEditState.SUBMIT);
    }
}
StructureCellEditComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: StructureId }, { token: SourcePublisher }], target: i0.ɵɵFactoryTarget.Component });
StructureCellEditComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureCellEditComponent, selector: "div[gui-structure-cell-edit][entity][cell]", inputs: { entity: "entity", cell: "cell" }, viewQueries: [{ propertyName: "cellContainerRef", first: true, predicate: ["cellContainer"], descendants: true, read: ElementRef, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `

		<span #cellContainer>
			<ng-container
				*ngTemplateOutlet="cell.editTemplate;
									context: editContext">
			</ng-container>
		</span>

	`, isInline: true, dependencies: [{ kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-cell-edit][entity][cell]',
                    template: `

		<span #cellContainer>
			<ng-container
				*ngTemplateOutlet="cell.editTemplate;
									context: editContext">
			</ng-container>
		</span>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: StructureId }, { type: SourcePublisher }]; }, propDecorators: { cellContainerRef: [{
                type: ViewChild,
                args: ['cellContainer', { read: ElementRef, static: true }]
            }], entity: [{
                type: Input
            }], cell: [{
                type: Input
            }] } });

class VerticalRange {
    constructor(start, end, margin) {
        this.start = start;
        this.end = end;
        this.margin = margin;
    }
    getStart() {
        return this.start;
    }
    getEnd() {
        return this.end;
    }
    getMargin() {
        return this.margin;
    }
}

let VerticalFormationContainerHeight = class VerticalFormationContainerHeight {
    constructor() {
        this.containerHeight = Optional.empty();
    }
    isContainerHeightProperForVirtualScroll() {
        if (this.containerHeight.isPresent()) {
            return this.containerHeight.getValueOrNullOrThrowError() > 0;
        }
        else {
            return false;
        }
    }
    getVisibleContainerHeight() {
        return this.getHeight();
    }
    getHeight() {
        if (this.containerHeight.isPresent()) {
            return this.getContainerHeight();
        }
        return this.sourceHeight;
    }
    getSourceHeight() {
        return this.sourceHeight;
    }
    setContainerHeight(height) {
        if (height >= 0) {
            this.containerHeight = Optional.of(height);
        }
    }
    setSourceSize(height) {
        this.sourceHeight = height;
    }
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

class ScrollBarPositionSetEvent extends StructureDomainEvent {
    constructor(aggregateId, position) {
        super(aggregateId, position, 'ScrollBarPositionSetEvent');
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}

class ScrollBarPositionSetAggregateEvent extends StructureAggregateEvent {
    constructor(schemaId, position) {
        super(schemaId, 'ScrollBarPositionSetAggregateEvent');
        this.position = position;
    }
    toDomainEvent() {
        return new ScrollBarPositionSetEvent(this.getAggregateId(), this.position);
    }
}

var VerticalFormation_1;
let VerticalFormation = VerticalFormation_1 = class VerticalFormation {
    constructor(structureId, enabled = false, viewportHeight = 0, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        this.structureId = structureId;
        this.enabled = enabled;
        this.rowHeight = VerticalFormation_1.ROW_HEIGHT;
        this.hiddenItemsTop = VerticalFormation_1.HIDDEN_ITEMS_TOP;
        this.hiddenItemsBottom = VerticalFormation_1.HIDDEN_ITEMS_BOTTOM;
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
    isEnabled() {
        return this.enabled &&
            this.container.getHeight() > 0 &&
            this.sourceSize > 0;
    }
    getViewPortHeight() {
        return this.container.getVisibleContainerHeight();
    }
    getSourceHeight() {
        return this.container.getSourceHeight();
    }
    getRowHeight() {
        return this.rowHeight;
    }
    getRange() {
        return this.range;
    }
    getTopMargin() {
        return this.range.getStart() * this.rowHeight;
    }
    calculateRange() {
        if (this.calcFullHeight() <= this.container.getHeight()) {
            this.range = new VerticalRange(0, this.sourceSize, 0);
            return;
        }
        const itemsInViewport = Math.ceil(this.container.getHeight() / this.rowHeight), viewportPositionIndex = Math.floor(this.scrollPosition / this.rowHeight);
        let end = (viewportPositionIndex + itemsInViewport + this.hiddenItemsBottom);
        let topMargin = viewportPositionIndex;
        if (topMargin + itemsInViewport >= this.sourceSize) {
            topMargin = this.sourceSize - itemsInViewport;
        }
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
    setEnabled(enabled) {
        this.enabled = enabled;
        // TODO dispatch aggregate event
        if (this.enabled && !this.container.isContainerHeightProperForVirtualScroll()) {
            this.logger.warn('Height needs to be specified in order for virtual scroll to work.');
        }
        this.calculateRange();
    }
    setSourceSize(sourceSize = 0) {
        this.sourceSize = sourceSize;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    }
    setTopHiddenItemsCount(count) {
        this.hiddenItemsTop = count;
        this.calculateRange();
    }
    setBottomHiddenItemsCount(count) {
        this.hiddenItemsBottom = count;
        this.calculateRange();
    }
    setScrollPosition(scrollPosition) {
        this.scrollPosition = scrollPosition;
        this.calculateRange();
    }
    scrollToIndex(index) {
        if (index >= this.sourceSize) {
            index = this.sourceSize;
        }
        if (index < -1) {
            index = 0;
        }
        const position = index * this.rowHeight;
        return new ScrollBarPositionSetAggregateEvent(this.structureId, position);
    }
    setViewportHeight(height) {
        this.container.setContainerHeight(height);
        this.calculateRange();
    }
    setRowHeight(rowHeight) {
        this.rowHeight = rowHeight;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    }
    setLogger(logger) {
        this.logger = logger;
    }
    // TODO REMOVE
    calcFullHeight() {
        return this.sourceSize * this.rowHeight;
    }
};
VerticalFormation.ROW_HEIGHT = 42;
VerticalFormation.HIDDEN_ITEMS_TOP = 5;
VerticalFormation.HIDDEN_ITEMS_BOTTOM = 2;
VerticalFormation = VerticalFormation_1 = __decorate([
    DomainObject
], VerticalFormation);

class VerticalFormationFactory {
    constructor(logger) {
        this.logger = logger;
    }
    create(structureId, enabled = false, viewportHeight = -1, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        const vf = new VerticalFormation(structureId, enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom);
        vf.setLogger(this.logger);
        return vf;
    }
}
VerticalFormationFactory.services = [Logger];

class SetScrollPositionCommand extends StructureCommand {
    constructor(structureId, position) {
        super(structureId, 'SetScrollPositionCommand');
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}

class ScrollPositionSetEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'ScrollPositionSetEvent');
    }
}

class SetScrollPositionCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetScrollPositionCommand;
    }
    handle(structure, command) {
        const position = command.getPosition();
        structure.setScrollPosition(position);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new ScrollPositionSetEvent(command.getAggregateId()));
    }
}

class SetVerticalScrollEnabledCommand extends StructureCommand {
    constructor(structureId, enabled) {
        super(structureId, 'SetVerticalScrollEnabledCommand');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class VerticalScrollEnabledSetEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'VerticalScrollEnabledSetEvent');
    }
}

class SetVerticalScrollEnabledCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetVerticalScrollEnabledCommand;
    }
    handle(structure, command) {
        const enabled = command.isEnabled();
        structure.setVerticalFormationEnabled(enabled);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new VerticalScrollEnabledSetEvent(command.getAggregateId()));
    }
}

class SetRowHeightBasedOnThemeCommand extends StructureCommand {
    constructor(structureId, theme) {
        super(structureId, 'SetRowHeightBasedOnThemeCommand');
        this.theme = theme;
    }
    getTheme() {
        return this.theme;
    }
}

class RowHeightSetBasedOnThemeEvent extends StructureDomainEvent {
    constructor(structureId) {
        super(structureId, null, 'RowHeightSetBasedOnThemeEvent');
    }
}

class SetRowHeightBasedOnThemeCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetRowHeightBasedOnThemeCommand;
    }
    handle(structure, command) {
        const theme = command.getTheme();
        structure.setTheme(theme);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new RowHeightSetBasedOnThemeEvent(command.getAggregateId()));
    }
}

class SetRowHeightCommand extends StructureCommand {
    constructor(structureId, rowHeight) {
        super(structureId, 'SetRowHeightCommand');
        this.rowHeight = rowHeight;
    }
    getRowHeight() {
        return this.rowHeight;
    }
}

class RowHeightSetEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'RowHeightSetEvent');
    }
}

class SetRowHeightCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetRowHeightCommand;
    }
    handle(structure, command) {
        const rowHeight = command.getRowHeight();
        const formation = structure.getVerticalFormation();
        formation.setRowHeight(rowHeight);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new RowHeightSetEvent(command.getAggregateId()));
    }
}

class StructureSetHeightCommand extends StructureCommand {
    constructor(structureId, height) {
        super(structureId, 'StructureSetHeightCommand');
        this.height = height;
    }
    getHeight() {
        return this.height;
    }
}

class StructureHeightSetEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'StructureHeightSetEvent');
    }
}

class StructureSetHeightCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return StructureSetHeightCommand;
    }
    handle(aggregate, command) {
        const height = command.getHeight();
        aggregate.setHeight(height);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new StructureHeightSetEvent(command.getAggregateId()));
    }
}

class VerticalFormationScrollBarPositionArchive extends AggregateArchive {
    constructor() {
        super(VerticalFormationScrollBarPositionArchive.DEFAULT_POSITION);
    }
}
VerticalFormationScrollBarPositionArchive.DEFAULT_POSITION = 0;

class ScrollBarPositionSetEventHandler {
    constructor(positionRepository) {
        this.positionRepository = positionRepository;
    }
    forEvent() {
        return ScrollBarPositionSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ScrollBarPositionSetEvent')) {
            this.positionRepository.next(event.getAggregateId(), event.getPosition());
        }
    }
}
ScrollBarPositionSetEventHandler.services = [VerticalFormationScrollBarPositionArchive];

class SetScrollBarPositionCommand extends StructureCommand {
    constructor(structureId, position) {
        super(structureId, 'SetScrollBarPositionCommand');
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}

class SetScrollBarPositionCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetScrollBarPositionCommand;
    }
    handle(structure, command) {
        const index = command.getPosition();
        structure.scrollToIndex(index);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class VerticalFormationDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    setVirtualScrollEnabled(enabled, structureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, enabled));
    }
    scrollTo(position, structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, position));
    }
    setScrollPosition(position, structureId) {
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    }
}

class VerticalFormationDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(VerticalFormationFactory);
        container.provide(VerticalFormationDispatcher);
    }
    registerCommandHandlers() {
        return [
            SetScrollPositionCommandHandler,
            SetVerticalScrollEnabledCommandHandler,
            SetRowHeightBasedOnThemeCommandHandler,
            SetRowHeightCommandHandler,
            StructureSetHeightCommandHandler,
            SetScrollBarPositionCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            ScrollBarPositionSetEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

let VerticalFormationModel = class VerticalFormationModel {
    constructor(enabled, topMargin, sourceHeight, viewportHeight, rowHeight) {
        this.enabled = enabled;
        this.topMargin = topMargin;
        this.sourceHeight = sourceHeight;
        this.viewportHeight = viewportHeight;
        this.rowHeight = rowHeight;
    }
    isEnabled() {
        return this.enabled;
    }
    getTopMargin() {
        return this.topMargin; //  * this.rowHeight;
    }
    getSourceHeight() {
        return this.sourceHeight;
    }
    getViewPortHeight() {
        return this.viewportHeight;
    }
    getRowHeight() {
        return this.rowHeight;
    }
};
VerticalFormationModel = __decorate([
    ReadModelObject
], VerticalFormationModel);

class VerticalFormationConverter {
    convert(verticalFormation) {
        const enabled = verticalFormation.isEnabled(), topMargin = verticalFormation.getTopMargin(), sourceHeight = verticalFormation.getSourceHeight(), viewportHeight = verticalFormation.getViewPortHeight(), rowHeight = verticalFormation.getRowHeight();
        return new VerticalFormationModel(enabled, topMargin, sourceHeight, viewportHeight, rowHeight);
    }
}

class StructureCreatedEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'StructureCreatedEvent');
    }
}

class InMemoryStructureStore extends InMemoryStore {
}

class StructureReadModelRoot extends ReadModelRoot {
    constructor(uid, paging, entities, source, verticalFormation) {
        super(uid);
        this.paging = paging;
        this.entities = entities;
        this.source = source;
        this.verticalFormation = verticalFormation;
    }
    getPaging() {
        return this.paging;
    }
    getEntities() {
        return this.entities;
    }
    getSource() {
        return this.source;
    }
    getVerticalFormation() {
        return this.verticalFormation;
    }
    // TODO Remove
    getTopMargin() {
        return this.verticalFormation.getTopMargin();
    }
    isLoaderVisible() {
        return this.getSource().isLoading();
    }
    getSourceHeight() {
        return this.verticalFormation.getSourceHeight();
    }
    isReadyToDisplay() {
        return this.entities.length > 0;
        // this.presentation.getColumns().length > 0; // TODO presentation getColumns
    }
    isVerticalScrollEnabled() {
        return this.verticalFormation.isEnabled();
    }
}

class StructureReadModelRootConverter {
    constructor(pagingConverter, sourceConverter, verticalFormationConverter) {
        this.pagingConverter = pagingConverter;
        this.sourceConverter = sourceConverter;
        this.verticalFormationConverter = verticalFormationConverter;
    }
    convert(aggregate) {
        const pagingAggregate = aggregate.getPaging(), originItemEntities = aggregate.getEntities(), sourceCoordinator = aggregate.getSource(), verticalFormation = aggregate.getVerticalFormation();
        return new StructureReadModelRoot(aggregate.getId().toReadModelRootId(), this.pagingConverter.convert(pagingAggregate), this.convertSource(originItemEntities), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
    }
    convertSource(source) {
        return source.map((originItem) => {
            return new ItemEntity(originItem.sourceItem, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
        });
    }
}
StructureReadModelRootConverter.services = [PagingConverter, SourceConverter, VerticalFormationConverter];

class InMemoryStructureReadStore extends InMemoryReadModelStore {
    constructor(inMemoryProjectStore, structureConverter) {
        super(inMemoryProjectStore);
        this.inMemoryProjectStore = inMemoryProjectStore;
        this.structureConverter = structureConverter;
    }
    toReadModel(aggregate) {
        return this.structureConverter.convert(aggregate);
    }
}
InMemoryStructureReadStore.services = [InMemoryStructureStore, StructureReadModelRootConverter];

class UniqueFilterUnselectedEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'UniqueFilterUnselectedEvent');
    }
}

class AllUniqueFilterUnselectedEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'AllUniqueFilterUnselectedEvent');
    }
}

class AllUniqueFilterSelectedEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'AllUniqueFilterSelectedEvent');
    }
}

class UniqueFilterSelectedEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'UniqueFilterSelectedEvent');
    }
}

class VerticalFormationRepository extends Reactive {
    constructor(inMemoryStructureReadStore) {
        super();
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.verticalFormation = new Map();
        this.verticalFormation$ = new HermesReplaySubject(1);
        this.domainEventBus = CoreContainer.resolve(DomainEventBus);
        this.domainEventBus
            .ofEvents([
            StructureCreatedEvent,
            VerticalScrollEnabledSetEvent,
            OriginSetEvent,
            StructureHeightSetEvent,
            RowHeightSetEvent,
            SchemaThemeSetEvent,
            RowHeightSetBasedOnThemeEvent,
            ScrollPositionSetEvent,
            SearchPhraseSetDomainEvent,
            UniqueFilterUnselectedEvent,
            AllUniqueFilterUnselectedEvent,
            AllUniqueFilterSelectedEvent,
            UniqueFilterSelectedEvent,
            PageChangedEvent,
            PagingSetEvent,
            ActiveFiltersSetEvent
        ])
            .pipe(this.hermesTakeUntil())
            .subscribe((event) => {
            const aggregateId = event.getAggregateId();
            const optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
            optStructure.ifPresent((structureReadModelRoot) => {
                const verticalFormation = structureReadModelRoot.getVerticalFormation();
                this.next(aggregateId, verticalFormation);
            });
        });
    }
    onVerticalScrollEnabled(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((v) => v.isEnabled()), hermesDistinctUntilChanged());
    }
    onRowHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((v) => v.getRowHeight()), hermesDistinctUntilChanged());
    }
    onContainerHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((v) => v.getViewPortHeight()), hermesDistinctUntilChanged());
    }
    onTopMargin(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((v) => v.getTopMargin()), hermesDistinctUntilChanged());
    }
    onVerticalFormation(structureId) {
        return this.verticalFormation$
            .toObservable()
            .pipe(hermesFilter((idToVerticalFormation) => {
            const key = structureId.getId();
            return idToVerticalFormation.has(key);
        }), hermesMap((idToVerticalFormation) => idToVerticalFormation.get(structureId.getId())));
    }
    next(structureId, verticalFormation) {
        this.verticalFormation.set(structureId.toString(), verticalFormation);
        this.verticalFormation$.next(this.verticalFormation);
    }
}
VerticalFormationRepository.services = [InMemoryStructureReadStore];

class VerticalFormationDomainWarehouse extends VerticalFormationWarehouse {
    constructor(verticalFormationRepository, positionRepository) {
        super();
        this.verticalFormationRepository = verticalFormationRepository;
        this.positionRepository = positionRepository;
    }
    onEnabled(structureId) {
        return this.verticalFormationRepository.onVerticalScrollEnabled(structureId);
    }
    onRowHeight(structureId) {
        return this.verticalFormationRepository.onRowHeight(structureId);
    }
    onContainerHeight(structureId) {
        return this.verticalFormationRepository.onContainerHeight(structureId);
    }
    onTopMargin(structureId) {
        return this.verticalFormationRepository.onTopMargin(structureId);
    }
    onScrollBarPosition(structureId) {
        return this.positionRepository.on(structureId);
    }
}
VerticalFormationDomainWarehouse.services = [
    VerticalFormationRepository,
    VerticalFormationScrollBarPositionArchive
];

class VerticalFormationPublisher {
    constructor() {
    }
}

class VerticalFormationDomainPublisher extends VerticalFormationPublisher {
    constructor(verticalFormationDispatcher) {
        super();
        this.verticalFormationDispatcher = verticalFormationDispatcher;
    }
    enableVirtualScroll(structureId) {
        this.verticalFormationDispatcher.setVirtualScrollEnabled(true, structureId);
    }
    disableVirtualScroll(structureId) {
        this.verticalFormationDispatcher.setVirtualScrollEnabled(false, structureId);
    }
    scrollToTop(structureId) {
        this.verticalFormationDispatcher.scrollTo(0, structureId);
    }
    scrollToBottom(structureId) {
        this.verticalFormationDispatcher.scrollTo(Number.MAX_SAFE_INTEGER, structureId);
    }
    scrollToIndex(index, structureId) {
        this.verticalFormationDispatcher.scrollTo(index, structureId);
    }
    setScrollPosition(position, structureId) {
        this.verticalFormationDispatcher.setScrollPosition(position, structureId);
    }
}
VerticalFormationDomainPublisher.services = [VerticalFormationDispatcher];

class VerticalFormationApiModule {
    registerProviders(container) {
        container.provide(VerticalFormationConverter);
        container.provide(VerticalFormationRepository);
        container.provide(VerticalFormationWarehouse, VerticalFormationDomainWarehouse);
        container.provide(VerticalFormationPublisher, VerticalFormationDomainPublisher);
        container.provide(VerticalFormationScrollBarPositionArchive);
    }
}
const verticalFormationInitializer = new DomainInitializer(new VerticalFormationApiModule(), new VerticalFormationDomainModule());

verticalFormationInitializer.init();
function provideVerticalFormationCommandInvoker() {
    return CoreContainer.resolve(VerticalFormationPublisher);
}
function provideVerticalFormationWarehouse() {
    return CoreContainer.resolve(VerticalFormationWarehouse);
}
class VerticalFormationFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
VerticalFormationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
VerticalFormationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationFeatureModule, imports: [CommonModule] });
VerticalFormationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationFeatureModule, providers: [
        { provide: VerticalFormationPublisher, useFactory: provideVerticalFormationCommandInvoker },
        { provide: VerticalFormationWarehouse, useFactory: provideVerticalFormationWarehouse }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: VerticalFormationPublisher, useFactory: provideVerticalFormationCommandInvoker },
                        { provide: VerticalFormationWarehouse, useFactory: provideVerticalFormationWarehouse }
                    ]
                }]
        }] });

const CompositionAggregateEvents = {
    CompositionResizeWidthSetAggregateEvent: 'CompositionResizeWidthSetAggregateEvent',
    ColumnsSetAggregateEvent: 'ColumnsSetAggregateEvent',
    CompositionContainerWidthSetAggregateEvent: 'CompositionContainerWidthSetAggregateEvent',
    CompositionWidthSetAggregateEvent: 'CompositionWidthSetAggregateEvent',
    CompositionColumnSetEnabledAggregateEvent: 'CompositionColumnSetEnabledAggregateEvent',
    CompositionColumnMovedLeftAggregateEvent: 'CompositionColumnMovedLeftAggregateEvent',
    CompositionColumnMovedRightAggregateEvent: 'CompositionColumnMovedRightAggregateEvent',
    GroupsSetAggregateEvent: 'GroupsSetAggregateEvent'
};

class CompositionDomainEvent extends DomainEvent {
}

class CompositionResizeWidthSetEvent extends CompositionDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'CompositionResizeWidthSetEvent');
    }
}

class CompositionColumnsSetEvent extends CompositionDomainEvent {
    constructor(compositionId) {
        super(compositionId, null, 'CompositionColumnsSetEvent');
    }
}

class CompositionContainerWidthSetEvent extends CompositionDomainEvent {
    constructor(compositionId, payload) {
        super(compositionId, payload, 'CompositionContainerWidthSetEvent');
    }
}

class CompositionWidthSetEvent extends CompositionDomainEvent {
    constructor(compositionId) {
        super(compositionId, null, 'CompositionWidthSetEvent');
    }
}

class CompositionColumnSetEnabledEvent extends CompositionDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'CompositionColumnSetEnabledEvent');
    }
}

class CompositionColumnMovedLeftEvent extends CompositionDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'CompositionColumnMovedLeftEvent');
    }
}

class CompositionColumnMovedRightEvent extends CompositionDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'CompositionColumnMovedRightEvent');
    }
}

class CompositionGroupsSetEvent extends CompositionDomainEvent {
    constructor(compositionId) {
        super(compositionId, null, 'CompositionGroupsSetEvent');
    }
}

class CompositionEventConverter {
    convert(arg) {
        if (Array.isArray(arg)) {
            return this.convertEvents(arg);
        }
        else {
            return this.convertEvent(arg);
        }
    }
    convertEvents(aggregateEvents) {
        return aggregateEvents.map((event) => {
            return this.convertEvent(event);
        });
    }
    convertEvent(aggregateEvent) {
        switch (aggregateEvent.getType()) {
            case CompositionAggregateEvents.CompositionResizeWidthSetAggregateEvent:
                return new CompositionResizeWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.ColumnsSetAggregateEvent:
                return new CompositionColumnsSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionContainerWidthSetAggregateEvent:
                const payload = aggregateEvent.containerWidth;
                return new CompositionContainerWidthSetEvent(aggregateEvent.getAggregateId(), payload);
            case CompositionAggregateEvents.CompositionWidthSetAggregateEvent:
                return new CompositionWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnSetEnabledAggregateEvent:
                return new CompositionColumnSetEnabledEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnMovedLeftAggregateEvent:
                return new CompositionColumnMovedLeftEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnMovedRightAggregateEvent:
                return new CompositionColumnMovedRightEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.GroupsSetAggregateEvent:
                return new CompositionGroupsSetEvent(aggregateEvent.getAggregateId());
            default:
                return new CompositionResizeWidthSetEvent(aggregateEvent.getAggregateId());
        }
    }
}

class CompositionCommand extends Command {
}

class SetColumnsCommand extends CompositionCommand {
    constructor(compositionId, columns) {
        super(compositionId, 'SetColumnsCommand');
        this.compositionId = compositionId;
        this.columns = columns;
    }
    getParams() {
        return this.columns;
    }
}

class SetColumnsCommandHandler {
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetColumnsCommand;
    }
    handle(aggregate, command) {
        const setColumnsParams = command.getParams();
        aggregate.setColumns(setColumnsParams);
    }
    publish(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    publishEvents(composition, command) {
        const events = composition.getEvents();
        const domainEvents = this.compositionEventConverter.convert(events);
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetColumnsCommandHandler.services = [CompositionEventConverter];

class SetCompositionWidthCommand extends CompositionCommand {
    constructor(structureId, width) {
        super(structureId, 'SetCompositionWidthCommand');
        this.structureId = structureId;
        this.width = width;
    }
    getWidth() {
        return this.width;
    }
}

class SetCompositionWidthCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetCompositionWidthCommand;
    }
    handle(composition, command) {
        const width = command.getWidth();
        composition.setWidth(width);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionWidthSetEvent(command.getAggregateId()));
    }
}

class SetCompositionResizeWidthCommand extends CompositionCommand {
    constructor(structureId, enabled) {
        super(structureId, 'SetCompositionResizeWidthCommand');
        this.structureId = structureId;
        this.enabled = enabled;
    }
    getEnabled() {
        return this.enabled;
    }
}

class SetCompositionResizeWidthCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetCompositionResizeWidthCommand;
    }
    handle(composition, command) {
        const enabled = command.getEnabled();
        composition.setResizeWidth(enabled);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionResizeWidthSetEvent(command.getAggregateId()));
    }
}

class SetCompositionContainerWidthCommand extends CompositionCommand {
    constructor(structureId, width) {
        super(structureId, 'SetCompositionContainerWidthCommand');
        this.structureId = structureId;
        this.width = width;
    }
    getWidth() {
        return this.width;
    }
}

class SetCompositionContainerWidthCommandHandler {
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetCompositionContainerWidthCommand;
    }
    handle(composition, command) {
        const width = command.getWidth();
        composition.setContainerWidth(width);
    }
    publish(aggregate, command) {
        this.publishAggregateEvents(aggregate.getEvents());
    }
    publishAggregateEvents(aggregateEvents) {
        const domainEvents = this.compositionEventConverter.convert(aggregateEvents);
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetCompositionContainerWidthCommandHandler.services = [CompositionEventConverter];

class CompositionSetColumnEnabledCommand extends CompositionCommand {
    constructor(compositionId, columnId, enabled) {
        super(compositionId, 'CompositionSetColumnEnabledCommand');
        this.compositionId = compositionId;
        this.columnId = columnId;
        this.enabled = enabled;
    }
    getColumnId() {
        return this.columnId;
    }
    isEnabled() {
        return this.enabled;
    }
}

class CompositionSetColumnEnabledCommandHandler {
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return CompositionSetColumnEnabledCommand;
    }
    handle(aggregate, command) {
        const columnId = command.getColumnId(), enabled = command.isEnabled();
        aggregate.enableColumn(columnId, enabled);
    }
    publish(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    publishEvents(composition, command) {
        const events = composition.getEvents();
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
CompositionSetColumnEnabledCommandHandler.services = [CompositionEventConverter];

class CompositionChangeSortStatusCommand extends CompositionCommand {
    constructor(compositionId, sortParams) {
        super(compositionId, 'CompositionChangeSortStatusCommand');
        this.compositionId = compositionId;
        this.sortParams = sortParams;
    }
    getCompositionId() {
        return this.compositionId;
    }
    getSortParams() {
        return this.sortParams;
    }
}

class CompositionChangeSortStatusEvent extends CompositionDomainEvent {
    constructor(aggregateId, activeColumns) {
        super(aggregateId, activeColumns, 'CompositionChangeSortStatusEvent');
        this.activeColumns = activeColumns;
    }
    getCompositionId() {
        return this.getAggregateId();
    }
    getActiveColumns() {
        return this.activeColumns;
    }
}

class CompositionChangeSortStatusCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return CompositionChangeSortStatusCommand;
    }
    handle(composition, command) {
        const sortParams = command.getSortParams();
        composition.changeSort(sortParams);
    }
    publish(composition, command) {
        const compositionId = command.getAggregateId(), columns = composition.getActiveColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
    }
}

class CompositionMoveLeftColumnCommand extends CompositionCommand {
    constructor(compositionId, columnId) {
        super(compositionId, 'CompositionMoveLeftColumnCommand');
        this.compositionId = compositionId;
        this.columnId = columnId;
    }
    getColumnId() {
        return this.columnId;
    }
}

class CompositionMoveLeftColumnCommandHandler {
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return CompositionMoveLeftColumnCommand;
    }
    handle(aggregate, command) {
        const columnId = command.getColumnId();
        aggregate.moveLeft(columnId);
    }
    publish(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    publishEvents(composition, command) {
        const events = composition.getEvents();
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
CompositionMoveLeftColumnCommandHandler.services = [CompositionEventConverter];

class CompositionMoveRightColumnCommand extends CompositionCommand {
    constructor(compositionId, columnId) {
        super(compositionId, 'CompositionMoveRightColumnCommand');
        this.columnId = columnId;
    }
    getColumnId() {
        return this.columnId;
    }
}

class CompositionMoveRightColumnCommandHandler {
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return CompositionMoveRightColumnCommand;
    }
    handle(aggregate, command) {
        const columnId = command.getColumnId();
        aggregate.moveRight(columnId);
    }
    publish(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    publishEvents(composition, command) {
        const events = composition.getEvents();
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
CompositionMoveRightColumnCommandHandler.services = [CompositionEventConverter];

class CreateCompositionCommand extends CompositionCommand {
    constructor(compositionId) {
        super(compositionId, 'CreateCompositionCommand');
        this.compositionId = compositionId;
    }
}

class SetGroupsCommand extends CompositionCommand {
    constructor(compositionId, configs) {
        super(compositionId, 'SetGroupsCommand');
        this.compositionId = compositionId;
        this.configs = configs;
    }
    getConfigs() {
        return this.configs;
    }
}

class CompositionDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    create(compositionId) {
        this.commandDispatcher.dispatch(new CreateCompositionCommand(compositionId));
    }
    setColumns(compositionId, params) {
        this.commandDispatcher.dispatch(new SetColumnsCommand(compositionId, params));
    }
    setGroups(compositionId, params) {
        this.commandDispatcher.dispatch(new SetGroupsCommand(compositionId, params));
    }
    setWidth(compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionWidthCommand(compositionId, width));
    }
    setContainerWidth(compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionContainerWidthCommand(compositionId, width));
    }
    setResizeWidth(compositionId, enabled) {
        this.commandDispatcher.dispatch(new SetCompositionResizeWidthCommand(compositionId, enabled));
    }
    changeSort(compositionId, params) {
        this.commandDispatcher.dispatch(new CompositionChangeSortStatusCommand(compositionId, params));
    }
    setColumnEnabled(compositionId, columnId, enabled) {
        this.commandDispatcher.dispatch(new CompositionSetColumnEnabledCommand(compositionId, columnId, enabled));
    }
    moveLeft(compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveLeftColumnCommand(compositionId, columnId));
    }
    moveRight(compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveRightColumnCommand(compositionId, columnId));
    }
}

class ChangeSortParams {
    constructor(fieldId, direction) {
        this.fieldId = fieldId;
        this.direction = direction;
    }
}

class CompositionChangeSortStatusEventHandler {
    constructor(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    forEvents() {
        return [
            SortToggledEvent,
            SortOrderSetEvent
        ];
    }
    handle(event) {
        if (event.ofMessageType('SortToggledEvent')) {
            const compositionId = event.getCompositionId(), dirs = event.getDirections();
            const params = dirs.map((dir) => {
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            });
            this.compositionDispatcher.changeSort(compositionId, params);
        }
        if (event.ofMessageType('SortOrderSetEvent')) {
            const compositionId = event.getCompositionId(), dirs = event.getDirections();
            const params = dirs.map((dir) => {
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            });
            this.compositionDispatcher.changeSort(compositionId, params);
        }
    }
}
CompositionChangeSortStatusEventHandler.services = [CompositionDispatcher];

var CellView;
(function (CellView) {
    CellView[CellView["TEXT"] = 0] = "TEXT";
    CellView[CellView["NUMBER"] = 1] = "NUMBER";
    CellView[CellView["CHIP"] = 2] = "CHIP";
    CellView[CellView["LINK"] = 3] = "LINK";
    CellView[CellView["IMAGE"] = 4] = "IMAGE";
    CellView[CellView["BOLD"] = 5] = "BOLD";
    CellView[CellView["ITALIC"] = 6] = "ITALIC";
    CellView[CellView["CHECKBOX"] = 7] = "CHECKBOX";
    CellView[CellView["CUSTOM"] = 8] = "CUSTOM";
    CellView[CellView["FUNCTION"] = 9] = "FUNCTION";
    CellView[CellView["DATE"] = 10] = "DATE";
    CellView[CellView["BAR"] = 11] = "BAR";
    CellView[CellView["PERCENTAGE_BAR"] = 12] = "PERCENTAGE_BAR";
    CellView[CellView["PERCENTAGE"] = 13] = "PERCENTAGE";
    CellView[CellView["NG_TEMPLATE"] = 14] = "NG_TEMPLATE";
    CellView[CellView["HTML"] = 15] = "HTML";
})(CellView || (CellView = {}));

class ViewEntity {
    constructor(cellView) {
        this.templateFunction = (cellValue, item) => cellValue;
        if (typeof cellView === 'function') {
            this.view = CellView.FUNCTION;
            this.templateFunction = cellView;
        }
        else {
            this.view = cellView;
        }
    }
    static fromDataType(dataType) {
        if (dataType === DataType.DATE) {
            return new ViewEntity(CellView.DATE);
        }
        else {
            return new ViewEntity(CellView.TEXT);
        }
    }
    getCellView() {
        return this.view;
    }
    getTemplateFunction() {
        return this.templateFunction;
    }
}

class AbstractColumnEntity extends Entity {
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
    getPresentation() {
        return this.presentation;
    }
    getColumnConfig() {
        return this.columnConfig;
    }
    getField() {
        return this.columnField;
    }
    getHeader() {
        return this.header;
    }
    getDataType() {
        return this.columnField.getDataType();
    }
    getCellView() {
        return this.view.getCellView();
    }
    getTemplateFunction() {
        return this.view.getTemplateFunction();
    }
    getFormatterFunction() {
        return this.columnConfig.formatter;
    }
    setView(view) {
        this.view = view;
    }
    setHeader(header) {
        this.header = header;
    }
    getView() {
        return this.view;
    }
    getAlign() {
        return this.align;
    }
    setWidth(width) {
        this.width = width;
    }
    getWidth() {
        return this.width;
    }
    isSortingEnabled() {
        const config = this.columnConfig;
        if (config.sorting !== undefined && config.sorting !== null) {
            if (config.sorting.enabled === undefined || config.sorting.enabled === null) {
                return true;
            }
            return config.sorting.enabled;
        }
        return true;
    }
    isCellEditingEnabled() {
        const config = this.columnConfig;
        if (config.cellEditing !== undefined && config.cellEditing !== null) {
            if (config.cellEditing.enabled === undefined || config.cellEditing.enabled === null) {
                return true;
            }
            return config.cellEditing.enabled;
        }
        return true;
    }
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

class ColumnEntity extends AbstractColumnEntity {
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
    isEnabled() {
        return this.enabled;
    }
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    getSortStatus() {
        return this.sortStatus;
    }
    setSortStatus(status) {
        this.sortStatus = status;
    }
}

class ColumnPresentation {
}

class NumberColumnPresentation extends ColumnPresentation {
    constructor() {
        super();
    }
    static getInstance() {
        if (!NumberColumnPresentation.instance) {
            NumberColumnPresentation.instance = new NumberColumnPresentation();
        }
        return NumberColumnPresentation.instance;
    }
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.BAR,
            CellView.PERCENTAGE_BAR,
            CellView.PERCENTAGE
        ];
    }
    getDefaultView() {
        return CellView.NUMBER;
    }
    getDefaultAlign(view) {
        return ColumnAlign.RIGHT;
    }
}
NumberColumnPresentation.instance = null;

class BooleanColumnPresentation extends ColumnPresentation {
    constructor() {
        super();
    }
    static getInstance() {
        if (!BooleanColumnPresentation.instance) {
            BooleanColumnPresentation.instance = new BooleanColumnPresentation();
        }
        return BooleanColumnPresentation.instance;
    }
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.CHIP,
            CellView.BOLD,
            CellView.CHECKBOX
        ];
    }
    getDefaultView() {
        return CellView.TEXT;
    }
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

class DateColumnPresentation extends ColumnPresentation {
    constructor() {
        super();
    }
    static getInstance() {
        if (!DateColumnPresentation.instance) {
            DateColumnPresentation.instance = new DateColumnPresentation();
        }
        return DateColumnPresentation.instance;
    }
    getPossibleViews() {
        return [
            CellView.DATE,
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.CHIP
        ];
    }
    getDefaultView() {
        return CellView.DATE;
    }
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
}
DateColumnPresentation.instance = null;

class StringColumnPresentation extends ColumnPresentation {
    constructor() {
        super();
    }
    static getInstance() {
        if (!StringColumnPresentation.instance) {
            StringColumnPresentation.instance = new StringColumnPresentation();
        }
        return StringColumnPresentation.instance;
    }
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
    getDefaultView() {
        return CellView.TEXT;
    }
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
}
StringColumnPresentation.instance = null;

class UnknownColumnPresentation extends ColumnPresentation {
    constructor() {
        super();
    }
    static getInstance() {
        if (!UnknownColumnPresentation.instance) {
            UnknownColumnPresentation.instance = new UnknownColumnPresentation();
        }
        return UnknownColumnPresentation.instance;
    }
    getPossibleViews() {
        return [
            CellView.TEXT
        ];
    }
    getDefaultView() {
        return CellView.TEXT;
    }
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
}
UnknownColumnPresentation.instance = null;

class ColumnPresentationConverter {
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

class ColumnEntityFactory {
    constructor(columnPresentationConverter) {
        this.columnPresentationConverter = columnPresentationConverter;
    }
    create(source) {
        if (Array.isArray(source)) {
            return this.createColumns(source);
        }
        else {
            return this.createColumn(source);
        }
    }
    createColumn(params) {
        const columnConfig = params.getColumn(), field = params.getField(), dataType = field.getDataType(), width = this.convertWidth(columnConfig.width) || undefined;
        let view, enabled;
        if (columnConfig.view !== undefined) {
            view = new ViewEntity(columnConfig.view);
        }
        if (columnConfig.enabled !== undefined) {
            enabled = columnConfig.enabled;
        }
        else {
            enabled = true;
        }
        const presentation = this.getPresentation(dataType);
        const columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig, enabled, presentation, undefined, columnConfig.align, view, width);
        if (columnConfig.header !== undefined) {
            columnEntity.setHeader(columnConfig.header);
        }
        return columnEntity;
    }
    createColumns(columns) {
        const columnEntities = [];
        columns.forEach((column) => {
            columnEntities.push(this.createColumn(column));
        });
        return columnEntities;
    }
    convertWidth(width) {
        return +width;
    }
    getPresentation(dataType) {
        return this.columnPresentationConverter.convert(dataType);
    }
}
ColumnEntityFactory.services = [ColumnPresentationConverter];

class Group {
    constructor(id, header, width) {
        this.id = id;
        this.header = header;
        this.width = width;
    }
}

class GroupId extends HermesId {
    constructor(id) {
        super(id);
    }
    toString() {
        return this.getId();
    }
}

class CompositionGroupFactory {
    create(config) {
        return new Group(new GroupId(RandomStringGenerator.generate()), config.header, config.width);
    }
}

class SetGroupsCommandHandler {
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetGroupsCommand;
    }
    handle(aggregate, command) {
        const groupConfigs = command.getConfigs();
        aggregate.setGroups(groupConfigs);
    }
    publish(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    publishEvents(composition, command) {
        const events = composition.getEvents();
        const domainEvents = this.compositionEventConverter.convert(events);
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetGroupsCommandHandler.services = [CompositionEventConverter];

class ColumnHighlightManager {
    constructor() {
        this.enabled = true;
        this.highlightedColumns = new Set(); // should be set of ColumnId
    }
    isHighlighted(columnId) {
        return this.highlightedColumns.has(columnId.toString());
    }
    toggle(columnId) {
        if (this.highlightedColumns.has(columnId.toString())) {
            this.highlightedColumns.delete(columnId.toString());
        }
        else {
            this.highlightedColumns.add(columnId.toString());
        }
    }
    remove(columnId) {
        this.highlightedColumns.delete(columnId.toString());
    }
}

class ColumnHighlightArchive extends AggregateArchive {
    constructor() {
        super(new ColumnHighlightManager());
    }
    toggle(key, value) {
        this.find(key)
            .ifPresent((manager) => {
            manager.toggle(value);
            this.next(key, manager);
        });
    }
    equals(a, b) {
        return false;
    }
    createDefaultValue(defaultValue) {
        return new ColumnHighlightManager();
    }
}

class InMemoryCompositionStore extends InMemoryStore {
}

class InMemoryCompositionAggregateStore extends InMemoryAggregateStore {
    constructor(inMemoryCompositionStore) {
        super(inMemoryCompositionStore);
    }
}
InMemoryCompositionAggregateStore.services = [InMemoryCompositionStore];

class CompositionAggregateRepository extends AggregateRepository {
}

class InMemoryCompositionAggregateRepository extends CompositionAggregateRepository {
    constructor(inMemoryCompositionAggregateStore) {
        super();
        this.inMemoryCompositionAggregateStore = inMemoryCompositionAggregateStore;
    }
    findById(aggregateId) {
        return this.inMemoryCompositionAggregateStore.findById(aggregateId);
    }
    save(aggregate) {
        this.inMemoryCompositionAggregateStore.save(aggregate);
    }
}
InMemoryCompositionAggregateRepository.services = [InMemoryCompositionAggregateStore];

class FunctionViewComponent extends PureComponent {
    constructor(sanitizer, elRef) {
        super(elRef);
        this.sanitizer = sanitizer;
        this.elRef = elRef;
        this.addClassToHost('gui-h-full');
        this.addClassToHost('gui-w-full');
    }
    ngOnChanges() {
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element.value);
    }
    getSelectorName() {
        return 'gui-function-view';
    }
}
FunctionViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FunctionViewComponent, deps: [{ token: i1$2.DomSanitizer }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FunctionViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FunctionViewComponent, selector: "gui-function-view", inputs: { element: "element" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `

		<div class="gui-h-full gui-flex gui-items-center"
			 [innerHTML]="safeHTML">
		</div>

	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FunctionViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-function-view',
                    template: `

		<div class="gui-h-full gui-flex gui-items-center"
			 [innerHTML]="safeHTML">
		</div>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1$2.DomSanitizer }, { type: i0.ElementRef }]; }, propDecorators: { element: [{
                type: Input
            }] } });

class PercentageViewComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
    }
    getSelectorName() {
        return 'gui-percentage-view';
    }
}
PercentageViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PercentageViewComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PercentageViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: PercentageViewComponent, selector: "gui-percentage-view[value]", inputs: { value: "value" }, usesInheritance: true, ngImport: i0, template: `
		{{ value }} %
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PercentageViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-percentage-view[value]',
                    template: `
		{{ value }} %
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { value: [{
                type: Input
            }] } });

class BarViewComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.showPercentage = false;
    }
    ngOnChanges(changes) {
        ifChanged(changes.value, () => {
            this.width = this.value > 100 ? 100 : this.value;
        });
    }
    getSelectorName() {
        return 'gui-bar-view';
    }
}
BarViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BarViewComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BarViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: BarViewComponent, selector: "gui-bar-view[value]", inputs: { value: "value", showPercentage: "showPercentage" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<div class="gui-percentage-bar">
			<div class="gui-percentage" [style.width.%]="width">
			</div>
			<gui-percentage-view *ngIf="showPercentage"
								 [value]="value">
			</gui-percentage-view>
		</div>
	`, isInline: true, dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: PercentageViewComponent, selector: "gui-percentage-view[value]", inputs: ["value"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BarViewComponent, decorators: [{
            type: Component,
            args: [{
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
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { value: [{
                type: Input
            }], showPercentage: [{
                type: Input
            }] } });

var CellValueType;
(function (CellValueType) {
    CellValueType[CellValueType["TEXT"] = 0] = "TEXT";
    CellValueType[CellValueType["HTML"] = 1] = "HTML";
})(CellValueType || (CellValueType = {}));
class CellValue {
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }
    static text(value) {
        return new CellValue(value, CellValueType.TEXT);
    }
    static HTML(value) {
        return new CellValue(value, CellValueType.HTML);
    }
}

class TextViewComponent extends PureComponent {
    constructor(isBold, isItalic, elementRef, renderer) {
        super(elementRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isHtml = false;
        if (isBold !== null) {
            this.addClassToHost('gui-bold');
        }
        if (isItalic !== null) {
            this.addClassToHost('gui-italic');
        }
    }
    ngOnChanges() {
        this.isHtml = this.value.type === CellValueType.HTML;
    }
    getSelectorName() {
        return 'gui-text-view';
    }
}
TextViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TextViewComponent, deps: [{ token: 'bold', attribute: true }, { token: 'italic', attribute: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
TextViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: TextViewComponent, selector: "gui-view-text[value]", inputs: { value: "value" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `

		<ng-container *ngIf="isHtml; else text">
			<span [innerHTML]="value.value | guiSafe: 'html'"></span>
		</ng-container>

		<ng-template #text>
			<span>
				{{value.value}}
			</span>
		</ng-template>
	`, isInline: true, dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: SafePipe, name: "guiSafe" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TextViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-view-text[value]',
                    template: `

		<ng-container *ngIf="isHtml; else text">
			<span [innerHTML]="value.value | guiSafe: 'html'"></span>
		</ng-container>

		<ng-template #text>
			<span>
				{{value.value}}
			</span>
		</ng-template>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Attribute,
                    args: ['bold']
                }] }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['italic']
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { value: [{
                type: Input
            }] } });

class HtmlViewComponent extends PureComponent {
    constructor(sanitizer, elRef) {
        super(elRef);
        this.sanitizer = sanitizer;
        this.elRef = elRef;
        this.addClassToHost('gui-h-full');
        this.addClassToHost('gui-w-full');
    }
    ngOnChanges() {
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element.value);
    }
    getSelectorName() {
        return 'gui-html-view';
    }
}
HtmlViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HtmlViewComponent, deps: [{ token: i1$2.DomSanitizer }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
HtmlViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: HtmlViewComponent, selector: "gui-html-view", inputs: { element: "element" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `

		<div class="gui-h-full gui-flex gui-items-center"
			 [innerHTML]="safeHTML">
		</div>

	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HtmlViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-html-view',
                    template: `

		<div class="gui-h-full gui-flex gui-items-center"
			 [innerHTML]="safeHTML">
		</div>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1$2.DomSanitizer }, { type: i0.ElementRef }]; }, propDecorators: { element: [{
                type: Input
            }] } });

class ViewTemplatesComponent {
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
            case CellView.HTML:
                return this.htmlTemplate;
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
ViewTemplatesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ViewTemplatesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ViewTemplatesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ViewTemplatesComponent, selector: "ng-component", viewQueries: [{ propertyName: "textTemplate", first: true, predicate: ["text"], descendants: true, read: TemplateRef, static: true }, { propertyName: "numberTemplate", first: true, predicate: ["number"], descendants: true, read: TemplateRef, static: true }, { propertyName: "chipTemplate", first: true, predicate: ["chip"], descendants: true, read: TemplateRef, static: true }, { propertyName: "linkTemplate", first: true, predicate: ["link"], descendants: true, read: TemplateRef, static: true }, { propertyName: "imageTemplate", first: true, predicate: ["image"], descendants: true, read: TemplateRef, static: true }, { propertyName: "checkboxTemplate", first: true, predicate: ["checkbox"], descendants: true, read: TemplateRef, static: true }, { propertyName: "boldTemplate", first: true, predicate: ["bold"], descendants: true, read: TemplateRef, static: true }, { propertyName: "italicTemplate", first: true, predicate: ["italic"], descendants: true, read: TemplateRef, static: true }, { propertyName: "customTemplate", first: true, predicate: ["custom"], descendants: true, read: TemplateRef, static: true }, { propertyName: "functionTemplate", first: true, predicate: ["function"], descendants: true, read: TemplateRef, static: true }, { propertyName: "htmlTemplate", first: true, predicate: ["html"], descendants: true, read: TemplateRef, static: true }, { propertyName: "dateTemplate", first: true, predicate: ["date"], descendants: true, read: TemplateRef, static: true }, { propertyName: "barTemplate", first: true, predicate: ["bar"], descendants: true, read: TemplateRef, static: true }, { propertyName: "percentageBarTemplate", first: true, predicate: ["percentageBar"], descendants: true, read: TemplateRef, static: true }, { propertyName: "percentageTemplate", first: true, predicate: ["percentage"], descendants: true, read: TemplateRef, static: true }], ngImport: i0, template: `

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

		<ng-template #html let-element="element">
			<gui-html-view [element]="element"></gui-html-view>
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

	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricChipComponent, selector: "gui-chip" }, { kind: "component", type: i1.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: FunctionViewComponent, selector: "gui-function-view", inputs: ["element"] }, { kind: "component", type: BarViewComponent, selector: "gui-bar-view[value]", inputs: ["value", "showPercentage"] }, { kind: "component", type: PercentageViewComponent, selector: "gui-percentage-view[value]", inputs: ["value"] }, { kind: "component", type: TextViewComponent, selector: "gui-view-text[value]", inputs: ["value"] }, { kind: "component", type: HtmlViewComponent, selector: "gui-html-view", inputs: ["element"] }, { kind: "pipe", type: i4.DatePipe, name: "date" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ViewTemplatesComponent, decorators: [{
            type: Component,
            args: [{
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

		<ng-template #html let-element="element">
			<gui-html-view [element]="element"></gui-html-view>
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
                }]
        }], propDecorators: { textTemplate: [{
                type: ViewChild,
                args: ['text', { read: TemplateRef, static: true }]
            }], numberTemplate: [{
                type: ViewChild,
                args: ['number', { read: TemplateRef, static: true }]
            }], chipTemplate: [{
                type: ViewChild,
                args: ['chip', { read: TemplateRef, static: true }]
            }], linkTemplate: [{
                type: ViewChild,
                args: ['link', { read: TemplateRef, static: true }]
            }], imageTemplate: [{
                type: ViewChild,
                args: ['image', { read: TemplateRef, static: true }]
            }], checkboxTemplate: [{
                type: ViewChild,
                args: ['checkbox', { read: TemplateRef, static: true }]
            }], boldTemplate: [{
                type: ViewChild,
                args: ['bold', { read: TemplateRef, static: true }]
            }], italicTemplate: [{
                type: ViewChild,
                args: ['italic', { read: TemplateRef, static: true }]
            }], customTemplate: [{
                type: ViewChild,
                args: ['custom', { read: TemplateRef, static: true }]
            }], functionTemplate: [{
                type: ViewChild,
                args: ['function', { read: TemplateRef, static: true }]
            }], htmlTemplate: [{
                type: ViewChild,
                args: ['html', { read: TemplateRef, static: true }]
            }], dateTemplate: [{
                type: ViewChild,
                args: ['date', { read: TemplateRef, static: true }]
            }], barTemplate: [{
                type: ViewChild,
                args: ['bar', { read: TemplateRef, static: true }]
            }], percentageBarTemplate: [{
                type: ViewChild,
                args: ['percentageBar', { read: TemplateRef, static: true }]
            }], percentageTemplate: [{
                type: ViewChild,
                args: ['percentage', { read: TemplateRef, static: true }]
            }] } });

class TemplateFactory {
    constructor(templatesComponentDefinition, componentFactoryResolver) {
        this.templatesComponentDefinition = templatesComponentDefinition;
        this.componentFactoryResolver = componentFactoryResolver;
        this.templates = new Map();
        this.templatesComponent = null;
        this.createTemplatesComponent();
    }
    getTemplates() {
        return this.templates;
    }
    destroy() {
        if (this.templatesComponent) {
            this.templatesComponent.destroy();
            this.templatesComponent = null;
        }
    }
    createTemplatesComponent() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.templatesComponentDefinition);
        const injector = Injector.create({ providers: [] });
        this.templatesComponent = componentFactory.create(injector);
        this.generateMap();
    }
    generateMap() {
        this.generateMapKeys()
            .forEach((type) => {
            this.findAndSetTemplate(type);
        });
    }
    ;
    findAndSetTemplate(dt) {
        const template = this.templatesComponent.instance.getTemplate(dt);
        this.templates.set(dt, template);
    }
}

class ViewTemplateFactory extends TemplateFactory {
    constructor(componentFactoryResolver) {
        super(ViewTemplatesComponent, componentFactoryResolver);
    }
    generateMapKeys() {
        return Object.keys(CellView)
            .map(key => CellView[key]);
    }
}
ViewTemplateFactory.services = [ComponentFactoryResolver];

class ViewTemplateRepository {
    constructor(columnTemplateFactory) {
        this.columnTemplateFactory = columnTemplateFactory;
    }
    findTemplate(view) {
        const typeToTemplate = this.columnTemplateFactory.getTemplates();
        return typeToTemplate.get(view);
    }
}
ViewTemplateRepository.services = [ViewTemplateFactory];

class EditCommunicationComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.ENTER_KEY_CODE = 13;
        this.ESC_KEY_CODE = 27;
    }
    submit() {
        this.emitStatus(EditEventType.SUBMIT);
    }
    cancel() {
        this.emitStatus(EditEventType.CANCEL);
    }
    emitStatus(status) {
        if (this.status) {
            this.status.emit(status);
        }
    }
}
EditCommunicationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EditCommunicationComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
EditCommunicationComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: EditCommunicationComponent, inputs: { value: "value", valueChanges: "valueChanges", status: "status", focus: "focus", parent: "parent" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EditCommunicationComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, propDecorators: { value: [{
                type: Input
            }], valueChanges: [{
                type: Input
            }], status: [{
                type: Input
            }], focus: [{
                type: Input
            }], parent: [{
                type: Input
            }] } });

class InputEditTemplateComponent extends EditCommunicationComponent {
    constructor(changeDetectorRef, elementRef, formBuilder) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.formBuilder = formBuilder;
        this.filterFieldName = 'phrase';
        this.filterForm = this.formBuilder.group({
            [this.filterFieldName]: ['']
        });
    }
    ngOnChanges(changes) {
        if (changes.value !== undefined) {
            this.filterForm.get(this.filterFieldName).setValue(this.value);
        }
    }
    ngOnInit() {
        this.observeChanges();
    }
    ngAfterViewInit() {
        const inputElement = this.inputRef.nativeElement;
        this.focusField(inputElement);
        this.emitValueChange(inputElement.value);
        hermesFromEvent(inputElement, 'blur')
            .pipe(this.takeUntil())
            .subscribe(() => {
            this.unsubscribe();
            this.submit();
        });
        const keyup$ = hermesFromEvent(inputElement, 'keyup');
        keyup$
            .pipe(hermesFilter((e) => e.keyCode === this.ENTER_KEY_CODE), this.takeUntil())
            .subscribe(() => {
            this.unsubscribe();
            this.submit();
        });
        keyup$
            .pipe(hermesFilter((e) => e.keyCode === this.ESC_KEY_CODE), this.takeUntil())
            .subscribe(() => {
            this.unsubscribe();
            this.cancel();
        });
    }
    focusField(inputElement) {
        if (this.focus) {
            inputElement.focus();
        }
    }
    observeChanges() {
        fromRxJsObservable(this.filterForm
            .controls[this.filterFieldName]
            .valueChanges)
            .pipe(this.takeUntil())
            .subscribe((value) => {
            this.emitValueChange(value);
        });
    }
    emitValueChange(value) {
        if (this.valueChanges) {
            this.valueChanges.emit(value);
        }
    }
}
InputEditTemplateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: InputEditTemplateComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Directive });
InputEditTemplateComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: InputEditTemplateComponent, viewQueries: [{ propertyName: "inputRef", first: true, predicate: ["input"], descendants: true, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: InputEditTemplateComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1$1.FormBuilder }]; }, propDecorators: { inputRef: [{
                type: ViewChild,
                args: ['input', { static: true }]
            }] } });

class StringEditTemplateComponent extends InputEditTemplateComponent {
    constructor(changeDetectorRef, elementRef, fb) {
        super(changeDetectorRef, elementRef, fb);
    }
    focusField(inputElement) {
        if (this.focus) {
            inputElement.focus();
            inputElement.setSelectionRange(0, inputElement.value.length);
        }
    }
    getSelectorName() {
        return 'gui-string-edit';
    }
}
StringEditTemplateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StringEditTemplateComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
StringEditTemplateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StringEditTemplateComponent, selector: "gui-string-edit", usesInheritance: true, ngImport: i0, template: `

		<form [formGroup]="filterForm">
			<input #input [formControlName]="filterFieldName" type="type" class="gui-input"/>
		</form>

	`, isInline: true, dependencies: [{ kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StringEditTemplateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-string-edit',
                    template: `

		<form [formGroup]="filterForm">
			<input #input [formControlName]="filterFieldName" type="type" class="gui-input"/>
		</form>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1$1.FormBuilder }]; } });

class NumberEditTemplateComponent extends InputEditTemplateComponent {
    constructor(changeDetectorRef, elementRef, fb) {
        super(changeDetectorRef, elementRef, fb);
    }
    getSelectorName() {
        return 'gui-number-edit';
    }
}
NumberEditTemplateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NumberEditTemplateComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
NumberEditTemplateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: NumberEditTemplateComponent, selector: "gui-number-edit", usesInheritance: true, ngImport: i0, template: `

		<form [formGroup]="filterForm">
			<input #input [formControlName]="filterFieldName" type="number" class="gui-input"/>
		</form>

	`, isInline: true, dependencies: [{ kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NumberEditTemplateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-number-edit',
                    template: `

		<form [formGroup]="filterForm">
			<input #input [formControlName]="filterFieldName" type="number" class="gui-input"/>
		</form>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1$1.FormBuilder }]; } });

class BooleanEditTemplateComponent extends EditCommunicationComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.filterFieldName = 'booleanEdit';
    }
    toggle(changed) {
        this.valueChanges.emit(changed);
        this.submit();
    }
    getSelectorName() {
        return 'gui-boolean-edit';
    }
}
BooleanEditTemplateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BooleanEditTemplateComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BooleanEditTemplateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: BooleanEditTemplateComponent, selector: "gui-boolean-edit", viewQueries: [{ propertyName: "checkboxRef", first: true, predicate: ["checkbox"], descendants: true, read: ElementRef, static: true }], usesInheritance: true, ngImport: i0, template: `

		<span class="gui-cell-boolean">
			<gui-checkbox #checkbox
						  [checked]="value"
						  [name]="filterFieldName"
						  (changed)="toggle($event)">
			</gui-checkbox>
		</span>

	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: BooleanEditTemplateComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, propDecorators: { checkboxRef: [{
                type: ViewChild,
                args: ['checkbox', { read: ElementRef, static: true }]
            }] } });

class DateEditTemplateComponent extends EditCommunicationComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.filterFieldName = 'dateEdit';
        this.opened = false;
        this.localStreamCloser = new StreamCloser();
    }
    ngAfterViewInit() {
        const inputElement = this.datePickerRef.nativeElement.querySelector('.gui-date-picker-input');
        const keyup$ = hermesFromEvent(inputElement, 'keyup');
        keyup$
            .pipe(hermesFilter((e) => e.keyCode === this.ENTER_KEY_CODE), this.localStreamCloser.takeUntil())
            .subscribe(() => {
            this.localStreamCloser.unsubscribe();
            this.submit();
        });
        keyup$
            .pipe(hermesFilter((e) => e.keyCode === this.ESC_KEY_CODE), this.localStreamCloser.takeUntil())
            .subscribe(() => {
            this.localStreamCloser.unsubscribe();
            this.cancel();
        });
    }
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
    }
    toggle(changed) {
        this.valueChanges.emit(changed);
    }
    dialogOpened(opened) {
        this.opened = opened;
        if (!opened) {
            this.localStreamCloser.unsubscribe();
            this.submit();
        }
    }
    getSelectorName() {
        return 'gui-date-edit';
    }
}
DateEditTemplateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DateEditTemplateComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
DateEditTemplateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: DateEditTemplateComponent, selector: "gui-date-edit", viewQueries: [{ propertyName: "datePickerRef", first: true, predicate: ["datepicker"], descendants: true, read: ElementRef, static: true }], usesInheritance: true, ngImport: i0, template: `

		<gui-date-picker #datepicker
						 [selectDate]="value"
						 [name]="filterFieldName"
						 [openDialog]="true"
						 [onlyDialog]="false"
						 [parentElement]="parent"
						 (dialogOpened)="dialogOpened($event)"
						 (dateSelected)="toggle($event)">
		</gui-date-picker>

	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricDatePickerComponent, selector: "gui-date-picker", inputs: ["parentElement", "theme", "selectDate", "name", "openDialog", "onlyDialog", "datePipeOptions"], outputs: ["dateSelected", "dialogOpened"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DateEditTemplateComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, propDecorators: { datePickerRef: [{
                type: ViewChild,
                args: ['datepicker', { read: ElementRef, static: true }]
            }] } });

class EditTemplatesComponent {
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
EditTemplatesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EditTemplatesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EditTemplatesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: EditTemplatesComponent, selector: "ng-component", viewQueries: [{ propertyName: "stringTemplate", first: true, predicate: ["string"], descendants: true, read: TemplateRef, static: true }, { propertyName: "numberTemplate", first: true, predicate: ["number"], descendants: true, read: TemplateRef, static: true }, { propertyName: "booleanTemplate", first: true, predicate: ["boolean"], descendants: true, read: TemplateRef, static: true }, { propertyName: "dateTemplate", first: true, predicate: ["date"], descendants: true, read: TemplateRef, static: true }, { propertyName: "emptyTemplate", first: true, predicate: ["empty"], descendants: true, read: TemplateRef, static: true }], ngImport: i0, template: `

		<ng-template #string let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-string-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-string-edit>
		</ng-template>

		<ng-template #number let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-number-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-number-edit>
		</ng-template>

		<ng-template #boolean let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-boolean-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-boolean-edit>
		</ng-template>

		<ng-template #date let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" let-parent="parent">
			<gui-date-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus" [parent]="parent">
			</gui-date-edit>
		</ng-template>

		<ng-template #empty>

		</ng-template>

	`, isInline: true, dependencies: [{ kind: "component", type: StringEditTemplateComponent, selector: "gui-string-edit" }, { kind: "component", type: NumberEditTemplateComponent, selector: "gui-number-edit" }, { kind: "component", type: BooleanEditTemplateComponent, selector: "gui-boolean-edit" }, { kind: "component", type: DateEditTemplateComponent, selector: "gui-date-edit" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EditTemplatesComponent, decorators: [{
            type: Component,
            args: [{
                    template: `

		<ng-template #string let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-string-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-string-edit>
		</ng-template>

		<ng-template #number let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-number-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-number-edit>
		</ng-template>

		<ng-template #boolean let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-boolean-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-boolean-edit>
		</ng-template>

		<ng-template #date let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" let-parent="parent">
			<gui-date-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus" [parent]="parent">
			</gui-date-edit>
		</ng-template>

		<ng-template #empty>

		</ng-template>

	`
                }]
        }], propDecorators: { stringTemplate: [{
                type: ViewChild,
                args: ['string', { read: TemplateRef, static: true }]
            }], numberTemplate: [{
                type: ViewChild,
                args: ['number', { read: TemplateRef, static: true }]
            }], booleanTemplate: [{
                type: ViewChild,
                args: ['boolean', { read: TemplateRef, static: true }]
            }], dateTemplate: [{
                type: ViewChild,
                args: ['date', { read: TemplateRef, static: true }]
            }], emptyTemplate: [{
                type: ViewChild,
                args: ['empty', { read: TemplateRef, static: true }]
            }] } });

class EditTemplateFactory extends TemplateFactory {
    constructor(componentFactoryResolver) {
        super(EditTemplatesComponent, componentFactoryResolver);
    }
    generateMapKeys() {
        return Object.keys(DataType)
            .map(key => DataType[key]);
    }
}
EditTemplateFactory.services = [ComponentFactoryResolver];

class EditTemplateRepository {
    constructor(editTemplateFactory) {
        this.editTemplateFactory = editTemplateFactory;
    }
    findTemplate(dataType) {
        const typeToTemplate = this.editTemplateFactory.getTemplates();
        return typeToTemplate.get(dataType);
    }
}
EditTemplateRepository.services = [EditTemplateFactory];

class CellContext {
    constructor(element) {
        this.element = element;
    }
}

class CellTemplateWithAccessor {
    constructor(columnDefinitionId, name, template, editTemplate, editable, templateFun, formatterFun, accessor, searchAccessor, width, columnFieldId, align, cellEditingEnabled, type, // REFACTOR
    view) {
        this.columnDefinitionId = columnDefinitionId;
        this.name = name;
        this.template = template;
        this.editTemplate = editTemplate;
        this.editable = editable;
        this.templateFun = templateFun;
        this.formatterFun = formatterFun;
        this.accessor = accessor;
        this.searchAccessor = searchAccessor;
        this.width = width;
        this.columnFieldId = columnFieldId;
        this.align = align;
        this.cellEditingEnabled = cellEditingEnabled;
        this.type = type;
        this.view = view;
    }
    isCellEditingEnabled() {
        return this.cellEditingEnabled;
    }
    isBooleanDataType() {
        return this.type === DataType.BOOLEAN;
    }
    isAlignLeft() {
        return this.align === ColumnAlign.LEFT;
    }
    isAlignCenter() {
        return this.align === ColumnAlign.CENTER;
    }
    isAlignRight() {
        return this.align === ColumnAlign.RIGHT;
    }
    getName() {
        return this.name;
    }
    // REFACTOR #1581
    getValue(entity, searchPhrase) {
        const cellValue = this.findValue(entity, searchPhrase);
        cellValue.value = this.templateFun(cellValue.value, entity.getSourceItem());
        if (this.formatterFun) {
            cellValue.value = this.formatterFun(cellValue.value, entity.getSourceItem());
        }
        return cellValue;
    }
    getClasses() {
        return 'gui-cell-highlighted';
    }
    findValue(entity, searchPhrase) {
        const value = this.accessor(entity);
        if (this.type !== DataType.STRING) {
            return CellValue.text(value);
        }
        if (this.view && this.view.getCellView() === CellView.FUNCTION) {
            return CellValue.text(value);
        }
        if (searchPhrase) {
            let txt = '' + this.searchAccessor(entity);
            const lowerCasedText = txt.toLocaleLowerCase(), loweredSearchPhrase = searchPhrase.toLocaleLowerCase();
            const positions = [];
            let index = 0;
            while (index < loweredSearchPhrase.length) {
                const found = lowerCasedText.indexOf(loweredSearchPhrase, index);
                if (found >= 0) {
                    positions.push(found);
                    index = found + searchPhrase.length;
                }
                else {
                    index = loweredSearchPhrase.length;
                }
            }
            const arr = txt.split('');
            positions.forEach((pos) => {
                for (let i = 0; i < searchPhrase.length; i += 1) {
                    let ph;
                    if (i === 0) {
                        ph = `<span class="gui-text-highlight">${arr[pos + i]}`;
                    }
                    else {
                        ph = arr[pos + i];
                    }
                    if (i === searchPhrase.length - 1) {
                        ph += '</span>';
                    }
                    arr[pos + i] = ph;
                }
            });
            txt = arr.join('');
            return CellValue.HTML(txt);
        }
        else {
            return CellValue.text(value);
        }
    }
}

class ColumnDefinition extends ReadModelEntity {
    constructor(field, columnDefinitionId, // REFACTOR Id first argument
    name, enabled, type, // REFACTOR
    view, // REFACTOR
    align, // REFACTOR
    header, cellEditingEnabled, cssClasses, styles, sort = SortOrder.NONE, sortable = true) {
        super(columnDefinitionId);
        this.name = name;
        this.type = type;
        this.view = view;
        this.align = align;
        this.cssClasses = cssClasses;
        this.styles = styles;
        this.sortable = true;
        this.field = field;
        this.columnDefinitionId = columnDefinitionId;
        this.enabled = enabled;
        this.header = header;
        this.cellEditingEnabled = cellEditingEnabled;
        this.sortStatus = sort;
        this.sortable = sortable;
    }
    getName() {
        return this.name;
    }
    isEnabled() {
        return this.enabled;
    }
    setHeader(header) {
        this.header = header;
    }
    setField(field) {
        this.field = field;
    }
    setTemplateFunction(templateFun) {
        this.templateFunction = templateFun;
    }
    setFormatterFunction(formatter) {
        this.formatterFunction = formatter;
    }
    toHeaderCellTemplateWithContext(index) {
        const header = this.header || '';
        let headerCellContext;
        if (typeof header === 'string') {
            headerCellContext = new CellContext(CellValue.text(header));
        }
        else if (typeof header === 'function') {
            headerCellContext = new CellContext(CellValue.text(header(index)));
        }
        const fieldId = new FieldId(this.field.getId().getId());
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.columnDefinitionId, this.sortStatus, this.enabled, this.cssClasses, this.styles, this.sortable, this.align);
    }
    toContentCellTemplateWithAccessor() {
        const accessor = (entity) => {
            return this.field.getAccessor()(entity);
        }, searchAccessor = (entity) => {
            return this.field.getSearchAccessor()(entity);
        };
        return new CellTemplateWithAccessor(this.columnDefinitionId, this.name, this.cellTemplate, this.editTemplate, true, this.templateFunction, this.formatterFunction, accessor, searchAccessor, this.width, this.field.getId(), this.align, this.cellEditingEnabled, this.type, this.view);
    }
}

class ColumnDefinitionId extends ReadModelEntityId {
    constructor(id) {
        super(id);
    }
}

class ColumnDefinitionFactory {
    constructor(viewTemplateRepository, editTemplateRepository) {
        this.viewTemplateRepository = viewTemplateRepository;
        this.editTemplateRepository = editTemplateRepository;
    }
    create(column) {
        if (column instanceof ColumnEntity) {
            return this.createFromColumnEntity(column);
        }
        else {
            return this.createFromActiveColumnEntity(column);
        }
    }
    createColumns(columns) {
        return columns.map((column) => this.create(column));
    }
    createFromColumnEntity(column) {
        const columnDef = new ColumnDefinition(column.getField(), new ColumnDefinitionId(column.getId().toString()), column.getColumnConfig().name, column.isEnabled(), column.getDataType(), column.getView(), column.getAlign(), column.getHeader(), column.isCellEditingEnabled(), column.getColumnConfig().cssClasses, column.getColumnConfig().styles, column.getSortStatus(), column.isSortingEnabled());
        if (column.getCellView() === CellView.NG_TEMPLATE) {
            columnDef.cellTemplate = column.getColumnConfig().templateRef;
        }
        else {
            columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        }
        if (typeof column.getHeader() === 'function') {
            columnDef.headerTemplate = this.findViewTemplate(CellView.FUNCTION);
        }
        else {
            columnDef.headerTemplate = this.findViewTemplate(CellView.HTML);
        }
        columnDef.setTemplateFunction(column.getTemplateFunction());
        columnDef.setFormatterFunction(column.getFormatterFunction());
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.getWidth();
        return columnDef;
    }
    createFromActiveColumnEntity(activeColumn) {
        const columnDef = new ColumnDefinition(activeColumn.getField(), new ColumnDefinitionId(activeColumn.getId().toString()), activeColumn.getColumnConfig().name, true, // remove,
        activeColumn.getDataType(), activeColumn.getView(), activeColumn.getAlign(), activeColumn.getHeader(), activeColumn.isCellEditingEnabled(), activeColumn.getColumnConfig().cssClasses, activeColumn.getColumnConfig().styles, activeColumn.getSortStatus(), activeColumn.isSortingEnabled());
        if (activeColumn.getCellView() === CellView.NG_TEMPLATE) {
            columnDef.cellTemplate = activeColumn.getColumnConfig().templateRef;
        }
        else {
            columnDef.cellTemplate = this.findViewTemplate(activeColumn.getCellView());
        }
        if (typeof activeColumn.getHeader() === 'function') {
            columnDef.headerTemplate = this.viewTemplateRepository.findTemplate(CellView.FUNCTION);
        }
        else {
            columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        }
        columnDef.setTemplateFunction(activeColumn.getTemplateFunction());
        columnDef.setFormatterFunction(activeColumn.getFormatterFunction());
        columnDef.editTemplate = this.findEditTemplate(activeColumn.getDataType());
        columnDef.width = +activeColumn.getWidth();
        return columnDef;
    }
    findViewTemplate(view) {
        if (view === CellView.FUNCTION) {
            return this.viewTemplateRepository.findTemplate(CellView.FUNCTION);
        }
        else {
            return this.viewTemplateRepository.findTemplate(view);
        }
    }
    findEditTemplate(dataType) {
        return this.editTemplateRepository.findTemplate(dataType);
    }
}
ColumnDefinitionFactory.services = [ViewTemplateRepository, EditTemplateRepository];

class CompositionReadModeRoot extends ReadModelRoot {
    constructor(uid, ready, allColumns, activeColumns, width, resizeWidth) {
        super(uid);
        this.ready = ready;
        this.allColumns = allColumns;
        this.activeColumns = activeColumns;
        this.width = width;
        this.resizeWidth = resizeWidth;
    }
    getActiveColumns() {
        return this.activeColumns;
    }
    getAllColumns() {
        return this.allColumns;
    }
    getActiveHeaderColumns() {
        return this.getActiveColumns()
            .map((column, index) => column.toHeaderCellTemplateWithContext(index));
    }
    getHeaderColumns() {
        return this.getAllColumns()
            .map((column, index) => column.toHeaderCellTemplateWithContext(index));
    }
    getTemplateColumns() {
        return this.getActiveColumns()
            .map((column) => column.toContentCellTemplateWithAccessor());
    }
    getWidth() {
        return this.width;
    }
    getContainerWidth() {
        return +this.width - 2;
    }
    isReady() {
        return this.ready;
    }
    isResizeWidthEnabled() {
        return this.resizeWidth;
    }
    equals(composition) {
        return this.width === composition.width &&
            this.resizeWidth === composition.resizeWidth &&
            this.equalsByColumns(composition.allColumns);
    }
    equalsByColumns(columns) {
        return this.allColumns.length === columns.length;
    }
}

class CompositionReadModelRootConverter {
    constructor(columnDefinitionFactory) {
        this.columnDefinitionFactory = columnDefinitionFactory;
    }
    convert(aggregate) {
        const ready = aggregate.isReady(), allColumns = aggregate.getColumns(), activeColumns = aggregate.getActiveColumns(), allColumnDefs = this.convertToColumnDef(allColumns), activeColumnDefs = this.convertActiveColumnsToColumnDef(activeColumns), width = aggregate.getWidth(), resizeWidth = aggregate.isResizeEnabled(), aggregateId = aggregate.getId();
        return new CompositionReadModeRoot(aggregateId.toReadModelRootId(), ready, allColumnDefs, activeColumnDefs, width, resizeWidth);
    }
    convertToColumnDef(columns) {
        const columnDefs = [];
        columns.forEach((column) => {
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        });
        return columnDefs;
    }
    convertActiveColumnsToColumnDef(activeColumns) {
        const columnDefs = [];
        activeColumns.forEach((column) => {
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        });
        return columnDefs;
    }
}
CompositionReadModelRootConverter.services = [ColumnDefinitionFactory];

class InMemoryCompositionReadStore extends InMemoryReadModelStore {
    constructor(inMemoryCompositionStore, compositionConverter) {
        super(inMemoryCompositionStore);
        this.inMemoryCompositionStore = inMemoryCompositionStore;
        this.compositionConverter = compositionConverter;
    }
    toReadModel(aggregate) {
        return this.compositionConverter.convert(aggregate);
    }
}
InMemoryCompositionReadStore.services = [InMemoryCompositionStore, CompositionReadModelRootConverter];

class CompositionReadModelRootRepository extends ReadModelRootRepository {
    constructor() {
        super();
    }
}

class CompositionCreatedEvent extends CompositionDomainEvent {
    constructor(compositionId) {
        super(compositionId, null, 'CompositionCreatedEvent');
    }
}

class InMemoryCompositionRepository extends CompositionReadModelRootRepository {
    constructor(inMemoryCompositionReadStore) {
        super();
        this.inMemoryCompositionReadStore = inMemoryCompositionReadStore;
        this.compositionIdToComposition = new Map();
        this.composition$ = new HermesReplaySubject(1);
    }
    on(compositionId) {
        return this.composition$
            .toObservable()
            .pipe(hermesFilter((compositionIdToComposition) => {
            const key = compositionId.getId();
            return compositionIdToComposition.has(key);
        }), hermesMap((compositionIdToComposition) => compositionIdToComposition.get(compositionId.getId())));
    }
    find(compositionId) {
        const key = compositionId.getId();
        return Optional.of(this.compositionIdToComposition.get(key));
    }
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
            CompositionChangeSortStatusEvent
        ];
    }
    subscribe(event) {
        const aggregateId = event.getAggregateId();
        const optComposition = this.inMemoryCompositionReadStore.getById(aggregateId);
        optComposition.ifPresent((composition) => {
            const key = composition.getId().toString();
            this.compositionIdToComposition.set(key, composition);
            this.composition$.next(this.compositionIdToComposition);
        });
    }
}
InMemoryCompositionRepository.services = [InMemoryCompositionReadStore];

class CreateCompositionCommandHandler {
    forCommand() {
        return CreateCompositionCommand;
    }
}

class CompositionContainerWidthCalculator {
    constructor(MIN_COLUMN_WIDTH) {
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
    }
    calculateMinWidth(columnWidths) {
        const { staticColumns, fluidColumns } = this.segregateColumns(columnWidths);
        // TODO reduce
        let sum = 0;
        staticColumns.forEach((c) => {
            sum += c.getWidth();
        });
        sum += fluidColumns.length * this.MIN_COLUMN_WIDTH;
        return sum;
    }
    segregateColumns(columns) {
        const staticColumns = columns.filter((columnWidth) => columnWidth.isTypeNumber() && columnWidth.getWidth() > this.MIN_COLUMN_WIDTH), fluidColumns = columns.filter((columnWidth) => {
            return columnWidth.isTypeAuto() ||
                columnWidth.isTypePercentage() ||
                (columnWidth.isTypeNumber() && columnWidth.getWidth() <= this.MIN_COLUMN_WIDTH);
        });
        return {
            staticColumns: staticColumns,
            fluidColumns: fluidColumns
        };
    }
}

class CompositionAggregateEvent extends AggregateEvent {
}

class CompositionWidthSetAggregateEvent extends CompositionAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'CompositionWidthSetAggregateEvent');
    }
    toDomainEvent() {
        return new CompositionWidthSetEvent(this.getAggregateId());
    }
}

class CompositionContainerWidthSetAggregateEvent extends CompositionAggregateEvent {
    constructor(compositionId, containerWidth) {
        super(compositionId, 'CompositionContainerWidthSetAggregateEvent');
        this.containerWidth = containerWidth;
    }
    toDomainEvent() {
        return new CompositionContainerWidthSetEvent(this.getAggregateId(), this.containerWidth);
    }
}

class CompositionResizeWidthSetAggregateEvent extends CompositionAggregateEvent {
    constructor(compositionId) {
        super(compositionId, 'CompositionResizeWidthSetAggregateEvent');
    }
    toDomainEvent() {
        return new CompositionResizeWidthSetEvent(this.getAggregateId());
    }
}

class CompositionColumnSetEnabledAggregateEvent extends CompositionAggregateEvent {
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionColumnSetEnabledAggregateEvent');
        this.activeColumns = activeColumns;
    }
    toDomainEvent() {
        return new CompositionColumnSetEnabledEvent(this.getAggregateId());
    }
    getActiveColumns() {
        return this.activeColumns;
    }
}

var ColumnWidthType;
(function (ColumnWidthType) {
    ColumnWidthType[ColumnWidthType["PERCENTAGE"] = 0] = "PERCENTAGE";
    ColumnWidthType[ColumnWidthType["NUMBER"] = 1] = "NUMBER";
    ColumnWidthType[ColumnWidthType["AUTO"] = 2] = "AUTO";
})(ColumnWidthType || (ColumnWidthType = {}));

class ColumnWidth {
    constructor(width) {
        this.baseWidth = width;
        this.setWidthAndType(width);
    }
    getWidth() {
        return this.width;
    }
    getColumnType() {
        return this.template;
    }
    isTypePercentage() {
        return this.template === ColumnWidthType.PERCENTAGE;
    }
    isTypeAuto() {
        return this.template === ColumnWidthType.AUTO;
    }
    isTypeNumber() {
        return this.template === ColumnWidthType.NUMBER;
    }
    setWidth(width) {
        this.width = width;
    }
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
    clone() {
        return new ColumnWidth(this.baseWidth);
    }
    isPercentage(width) {
        return typeof width === 'string' && width[width.length - 1] === '%';
    }
    /**
     * Width needs to be in format '89%'
     * @param width
     */
    percentageToNumber(width) {
        return +(width.slice(0, -1));
    }
    isStringNumber(width) {
        const widthAsNumber = +width;
        return Number.isNaN(widthAsNumber);
    }
}

class CompositionWidthCalculator {
    constructor(source, width, MIN_COLUMN_WIDTH) {
        this.source = source;
        this.width = width;
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.columns = this.source.map((c) => c.clone());
    }
    calculate() {
        let width = this.width, columns = Array.from(this.columns);
        // adjust min value
        this.adjustMinimalWidth(columns);
        // remove number columns
        const newColumns = [];
        columns.forEach((column, index) => {
            if (column.isTypeNumber()) {
                width -= column.getWidth();
            }
            else {
                newColumns.push(column);
            }
        });
        columns = newColumns;
        // split even auto columns
        if (columns.length !== 0) {
            const evenWidth = width / columns.length;
            columns.forEach((column, index) => {
                column.setWidth(evenWidth);
            });
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
    adjustMinimalWidth(columns) {
        columns.forEach((column) => {
            if (column.isTypeNumber()) {
                if (column.getWidth() < this.MIN_COLUMN_WIDTH) {
                    column.setWidthAndType(this.MIN_COLUMN_WIDTH);
                }
            }
        });
    }
    adjustPercentageWidth() {
        const percentageColumns = this.columns.filter((columnWidth) => columnWidth.isTypePercentage());
        for (const column of this.columns) {
            if (column.getColumnType() === ColumnWidthType.PERCENTAGE) {
                column.setWidth(this.width * column.getWidth() * 0.01);
            }
        }
    }
    adjustAutoWidth() {
        let leftWidth = this.width;
        const autoColumns = [];
        for (let i = 0; i < this.columns.length; i += 1) {
            const column = this.columns[i];
            if (column.getColumnType() !== ColumnWidthType.AUTO) {
                leftWidth -= column.getWidth();
            }
            else {
                autoColumns.push(column);
            }
        }
        if (autoColumns.length > 0) {
            const splitWidth = leftWidth / autoColumns.length;
            for (const column of autoColumns) {
                column.setWidth(splitWidth);
            }
        }
    }
}

class ColumnWidthCollection {
    constructor(MIN_COLUMN_WIDTH, columns = [], width = 100) {
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.baseColumnWidths = columns.map((column) => new ColumnWidth(column.width));
        this.columnWidths = columns.map((column) => new ColumnWidth(column.width));
        this.setContainerWidth(width);
        this.calculate();
    }
    getColumnWidths() {
        return this.baseColumnWidths;
    }
    getColumnsWidth() {
        return this.width;
    }
    getWidths() {
        return this.columnWidths.map(c => c.getWidth());
    }
    getMinWidth() {
        const calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        return calculator.calculateMinWidth(this.columnWidths);
    }
    setWidth(width) {
        this.setContainerWidth(width);
        this.calculate();
    }
    setColumns(columnConfigs) {
        this.baseColumnWidths = columnConfigs.map((column) => new ColumnWidth(column.width));
        this.columnWidths = columnConfigs.map((column) => new ColumnWidth(column.width));
        this.calculate();
    }
    getMinColumnWidth() {
        return this.MIN_COLUMN_WIDTH;
    }
    calculate() {
        if (this.baseColumnWidths && this.width) {
            const calculator = new CompositionWidthCalculator(this.baseColumnWidths, this.width, this.MIN_COLUMN_WIDTH);
            this.columnWidths = calculator.calculate();
        }
    }
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

class CompositionChangeSortStatusAggregateEvent extends CompositionAggregateEvent {
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionChangeSortStatusAggregateEvent');
        this.activeColumns = activeColumns;
    }
    toDomainEvent() {
        return new CompositionChangeSortStatusEvent(this.getAggregateId(), this.activeColumns);
    }
}

class ActiveColumnContainer {
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
    getColumnWidths() {
        return this.columnWidthCollection.getColumnWidths();
    }
    // REMOVE
    getColumns() {
        return this.columns;
    }
    setWidth(width) {
        this.columnWidthCollection.setWidth(width);
    }
    addColumn(column, index) {
        this.columns.splice(index, 0, column);
    }
    removeColumn(index) {
        this.columns.splice(index, 1);
    }
    setColumns(columns, columnConfigs) {
        this.columns = columns;
        this.columnWidthCollection.setColumns(columnConfigs);
        const updatedWidths = this.columnWidthCollection.getWidths();
        this.columns.forEach((column, index) => {
            column.setWidth(updatedWidths[index]);
        });
        // TODO
        // this.addEvent(new ColumnsSetAggregateEvent(this.getId(), columns));
    }
    changeSort(sortParams) {
        this.columns.forEach((column) => {
            column.setSortStatus(SortOrder.NONE);
        });
        for (const param of sortParams) {
            const fieldId = param.fieldId, direction = param.direction, sortStatus = direction ? SortOrder.ASC : SortOrder.DESC;
            const columns = this.columns.filter((column) => {
                return column.getField().getId().getId() === fieldId.getId();
            });
            if (columns.length > 0) {
                columns.forEach((column) => {
                    column.setSortStatus(sortStatus);
                });
            }
        }
        return new CompositionChangeSortStatusAggregateEvent(this.getCompositionId(), this.columns);
    }
    moveLeft(columnId) {
        const index = this.findColumnIndex(columnId);
        this.move(index, index - 1);
    }
    moveRight(columnId) {
        const index = this.findColumnIndex(columnId);
        this.move(index, index + 1);
    }
    getMinColumnWidth() {
        return this.MIN_COLUMN_WIDTH;
    }
    move(fromIndex, toIndex) {
        if (!this.validateMoveIndex(fromIndex) || !this.validateMoveIndex(toIndex)) {
            return;
        }
        const column = this.columns[fromIndex];
        this.columns[fromIndex] = this.columns[toIndex];
        this.columns[toIndex] = column;
    }
    validateMoveIndex(index) {
        return index >= 0;
    }
    getCompositionId() {
        return this.compositionId;
    }
    findColumnIndex(columnId) {
        return this.columns.findIndex(c => c.getId().equals(columnId));
    }
}

class ActiveColumnEntity extends ColumnEntity {
    constructor(columnId, columnField, header, align, view, config, presentation) {
        super(columnId, columnField, config, true, presentation, header, align, view, undefined);
    }
    static fromEntity(entity) {
        return new ActiveColumnEntity(entity.getId(), entity.getField(), entity.getHeader(), entity.getAlign(), entity.getView(), entity.getColumnConfig(), entity.getPresentation());
    }
}

class ActiveColumnEntityConverter {
    convertMany(entities) {
        return entities.map(e => this.convert(e));
    }
    convert(entity) {
        return ActiveColumnEntity.fromEntity(entity);
    }
}

class CompositionColumnMovedLeftAggregateEvent extends CompositionAggregateEvent {
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionColumnMovedLeftAggregateEvent');
        this.activeColumns = activeColumns;
    }
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    toDomainEvent() {
        return new CompositionColumnMovedLeftEvent(this.getAggregateId());
    }
}

class CompositionColumnMovedRightAggregateEvent extends CompositionAggregateEvent {
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionColumnMovedRightAggregateEvent');
        this.activeColumns = activeColumns;
    }
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    toDomainEvent() {
        return new CompositionColumnMovedRightEvent(this.getAggregateId());
    }
}

class ColumnsSetAggregateEvent extends CompositionAggregateEvent {
    constructor(compositionId) {
        super(compositionId, 'ColumnsSetAggregateEvent');
    }
    toDomainEvent() {
        return new CompositionColumnsSetEvent(this.getAggregateId());
    }
}

class CompositionCreatedAggregateEvent extends CompositionAggregateEvent {
    constructor(compositionId) {
        super(compositionId, 'SchemaCreatedEvent');
    }
    toDomainEvent() {
        return new CompositionCreatedEvent(this.getAggregateId());
    }
}

const emptyGroup = new Group(new GroupId('-1'), '', 100);

class CompositionAggregate extends AggregateRoot {
    constructor(id, columnFactory, groupFactory, columnsParams = [], width, resizeWidth) {
        super(id, 'CompositionAggregate');
        this.allColumns = [];
        this.resizeWidthEnabled = true;
        this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        this.groups = new KeyMap();
        this.columnNameToGroupId = new Map();
        const columnConfigs = columnsParams.map((param) => param.getColumn());
        this.baseParams = columnsParams;
        this.baseColumns = columnConfigs;
        this.columnFactory = columnFactory;
        this.groupFactory = groupFactory;
        this.width = width;
        this.allColumns = this.columnFactory.create(columnsParams);
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer = new ActiveColumnContainer(this.getId(), activeColumns, width, columnConfigs);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            this.resizeWidthEnabled = resizeWidth;
        }
    }
    createEvent() {
        return CompositionCreatedAggregateEvent;
    }
    // REMOVE
    getColumns() {
        return this.allColumns;
    }
    // REMOVE
    getActiveColumns() {
        return this.activeColumnContainer.getColumns();
    }
    // make private
    getWidth() {
        if (this.resizeWidthEnabled) {
            return this.containerInDOMWidth;
        }
        else {
            return this.width;
        }
    }
    // REMOVE
    isResizeEnabled() {
        return this.resizeWidthEnabled;
    }
    // REMOVE
    isReady() {
        return !!this.getWidth() && this.getActiveColumns().length > 0;
    }
    setGroups(configs) {
        for (let i = 0; i < configs.length; i += 1) {
            const config = configs[i];
            if (config.columns !== undefined) {
                const group = this.groupFactory.create(config);
                this.groups.set(group.id, group);
                config.columns.forEach((c, index) => {
                    this.columnNameToGroupId.set(c.header, group.id);
                });
            }
            else {
                this.columnNameToGroupId.set(config.header, emptyGroup.id);
            }
        }
    }
    setColumns(params) {
        this.allColumns = this.columnFactory.create(params);
        const columnConfigs = params.map((param) => param.getColumn());
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, columnConfigs);
        this.addEvent(new ColumnsSetAggregateEvent(this.getId()));
    }
    setContainerWidth(containerWidth) {
        this.setContainerWidthWithEvent(containerWidth);
        this.recalculateColumns();
    }
    setWidth(width) {
        this.setWidthWithEvent(width);
        this.setResizeWidthWithEvent(false);
        this.recalculateColumns();
    }
    setResizeWidth(enabled) {
        this.setResizeWidthWithEvent(enabled);
    }
    changeSort(sortParams) {
        this.addEvent(this.activeColumnContainer.changeSort(sortParams));
    }
    // DELEGATE
    enableColumn(columnId, enabled) {
        let enabledIndex = -1;
        this.allColumns.forEach((column, index) => {
            if (column.getId().getId() === columnId.getId()) {
                const prevState = column.isEnabled();
                column.setEnabled(enabled);
                if (prevState !== enabled) {
                    enabledIndex = index;
                }
            }
        });
        if (enabledIndex > 0) {
            if (enabled) {
                // convert
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
    moveLeft(columnId) {
        const columnIndex = this.findColumnIndex(columnId);
        let nextLeft, nextLeftIndex = -1;
        for (let i = columnIndex - 1; i >= 0; i -= 1) {
            const leftColumn = this.allColumns[i];
            if (leftColumn.isEnabled()) {
                nextLeft = leftColumn;
                nextLeftIndex = i;
                break;
            }
        }
        if (nextLeft && nextLeftIndex >= 0 && columnIndex >= 0) {
            const column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextLeft;
            this.allColumns[nextLeftIndex] = column;
        }
        this.activeColumnContainer.moveLeft(columnId);
        this.addEvent(new CompositionColumnMovedLeftAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    moveRight(columnId) {
        const columnIndex = this.findColumnIndex(columnId);
        let nextRight, nextRightIndex = -1;
        for (let i = columnIndex + 1; i < this.allColumns.length; i += 1) {
            const rightColumn = this.allColumns[i];
            if (rightColumn.isEnabled()) {
                nextRight = rightColumn;
                nextRightIndex = i;
                break;
            }
        }
        if (nextRight && nextRightIndex >= 0 && columnIndex >= 0) {
            const column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextRight;
            this.allColumns[nextRightIndex] = column;
        }
        this.activeColumnContainer.moveRight(columnId);
        this.addEvent(new CompositionColumnMovedRightAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    recalculateColumns() {
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, activeColumns.map(c => c.getColumnConfig()));
    }
    // TODO Refactor
    setWidthWithEvent(width) {
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
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
    setContainerWidthWithEvent(containerWidth) {
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
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
    setResizeWidthWithEvent(enabled) {
        this.resizeWidthEnabled = enabled;
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    }
    // REMOVE -> move to allColumnsContainer
    getEnabledColumns() {
        return this.allColumns.filter(c => c.isEnabled());
    }
    findColumnIndex(columnId) {
        return this.allColumns.findIndex((column) => column.getId().equals(columnId));
    }
    getMinColumnWidth() {
        return this.activeColumnContainer.getMinColumnWidth();
    }
}

class CompositionAggregateFactory extends AggregateFactory {
    constructor(columnFactory, groupFactory) {
        super();
        this.columnFactory = columnFactory;
        this.groupFactory = groupFactory;
    }
    create(id) {
        return new CompositionAggregate(id, this.columnFactory, this.groupFactory);
    }
}
CompositionAggregateFactory.services = [
    ColumnEntityFactory,
    CompositionGroupFactory
];

const compositionKey = 'CompositionAggregate';
class CompositionDomainModule {
    defineAggregate() {
        return {
            aggregateKey: compositionKey,
            createCommandHandler: CreateCompositionCommandHandler,
            factory: CompositionAggregateFactory,
            repository: InMemoryCompositionAggregateRepository
        };
    }
    registerKey() {
        return compositionKey;
    }
    registerProviders(container) {
        container.provide(InMemoryCompositionAggregateStore);
        container.provide(CompositionAggregateRepository, InMemoryCompositionAggregateRepository);
        container.provide(CompositionDispatcher);
        container.provide(ColumnEntityFactory);
        container.provide(ColumnPresentationConverter);
        container.provide(CompositionEventConverter);
        container.provide(ColumnFieldFactory);
        container.provide(CompositionGroupFactory);
        container.provide(ColumnHighlightArchive);
        container.provide(InMemoryCompositionStore);
        container.provide(InMemoryCompositionReadStore);
        container.provide(CompositionReadModelRootRepository, InMemoryCompositionRepository);
    }
    registerCommandHandlers() {
        return [
            SetColumnsCommandHandler,
            SetCompositionWidthCommandHandler,
            SetCompositionResizeWidthCommandHandler,
            SetCompositionContainerWidthCommandHandler,
            CompositionSetColumnEnabledCommandHandler,
            CompositionChangeSortStatusCommandHandler,
            CompositionMoveLeftColumnCommandHandler,
            CompositionMoveRightColumnCommandHandler,
            SetGroupsCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [];
    }
    registerMultiDomainEventHandler() {
        return [
            CompositionChangeSortStatusEventHandler
        ];
    }
}

class GroupCollection {
    constructor(groups, showGroups) {
        this.groups = groups;
        this.showGroups = showGroups;
    }
    getGroups() {
        return this.groups;
    }
    isVisible() {
        return this.showGroups;
    }
}

class CompositionGroupArchive extends AggregateArchive {
    constructor() {
        super(CompositionGroupArchive.default);
    }
}
CompositionGroupArchive.default = new GroupCollection([], false);

class CompositionDomainCommandPublisher extends CompositionPublisher {
    constructor(compositionDispatcher, compositionGroupRepository, columnHighlightArchive) {
        super();
        this.compositionDispatcher = compositionDispatcher;
        this.compositionGroupRepository = compositionGroupRepository;
        this.columnHighlightArchive = columnHighlightArchive;
    }
    create(compositionId) {
        this.compositionDispatcher.create(compositionId);
    }
    setColumns(params, compositionId) {
        this.compositionDispatcher.setColumns(compositionId, params);
    }
    setGroups(configs, compositionId) {
        // this.compositionGroupRepository.next(compositionId, CompositionGroupRepository.default);
        this.compositionDispatcher.setGroups(compositionId, configs);
    }
    setWidth(width, compositionId) {
        this.compositionDispatcher.setWidth(compositionId, width);
    }
    setContainerWidth(width, compositionId) {
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    }
    setResizeWidth(enabled, compositionId) {
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    }
    enableColumn(columnDefinitionId, compositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), true);
    }
    disableColumn(columnDefinitionId, compositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), false);
    }
    moveLeft(columnDefinitionId, compositionId) {
        this.compositionDispatcher.moveLeft(compositionId, this.toColumnId(columnDefinitionId));
    }
    moveRight(columnDefinitionId, compositionId) {
        this.compositionDispatcher.moveRight(compositionId, this.toColumnId(columnDefinitionId));
    }
    highlightColumn(columnDefinitionId, compositionId) {
        this.columnHighlightArchive.toggle(compositionId, new ColumnId(columnDefinitionId.getId()));
    }
    toColumnId(defId) {
        return new ColumnId(defId.getId());
    }
}
CompositionDomainCommandPublisher.services = [
    CompositionDispatcher,
    CompositionGroupArchive,
    ColumnHighlightArchive
];

class CompositionDomainWarehouse extends CompositionWarehouse {
    constructor(compositionRepository, compositionGroupArchive, columnHighlightArchive) {
        super();
        this.compositionRepository = compositionRepository;
        this.compositionGroupArchive = compositionGroupArchive;
        this.columnHighlightArchive = columnHighlightArchive;
    }
    onWidth(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((composition) => composition.getWidth()));
    }
    onContainerWidth(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((composition) => composition.getContainerWidth()));
    }
    onWidthForEachColumn(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((composition) => composition.getAllColumns().map(c => c.width)));
    }
    onHeaderColumns(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((composition) => composition.getActiveHeaderColumns()));
    }
    onAllColumns(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((composition) => composition.getHeaderColumns()));
    }
    onSortOrder(fieldId, compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((composition) => composition.getActiveHeaderColumns()), hermesMap((columns) => {
            return columns.filter((c) => c.getFieldId().equals(fieldId));
        }), hermesFilter((columns) => {
            return columns.length > 0;
        }), hermesMap(columns => columns[0].getSortStatus()));
    }
    onTemplateColumns(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((composition) => composition.getTemplateColumns()));
    }
    onResizeWidth(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((composition) => composition.isResizeWidthEnabled()));
    }
    onGroups(compositionId) {
        return this.compositionGroupArchive.on(compositionId);
    }
    onHighlightedColumn(columnId, compositionId) {
        return this.columnHighlightArchive
            .on(compositionId)
            .pipe(hermesMap((manager) => manager.isHighlighted(columnId)));
    }
    findColumnNames(compositionId) {
        let names = [];
        this.compositionRepository
            .find(compositionId)
            .ifPresent((value) => {
            names = value.getAllColumns().map((cd) => cd.getName());
        });
        return names;
    }
}
CompositionDomainWarehouse.services = [
    CompositionReadModelRootRepository,
    CompositionGroupArchive,
    ColumnHighlightArchive
];

class CompositionDomainEventRepository extends CompositionEventRepository {
    constructor() {
        super();
    }
    onColumnsChanged(compositionId) {
        return this.onEvent(compositionId, CompositionColumnsSetEvent);
    }
    onContainerWidthChanged(compositionId) {
        return this.onEvent(compositionId, CompositionContainerWidthSetEvent)
            .pipe(hermesMap((event) => {
            return event.getPayload();
        }), hermesFilter((width) => !!width));
    }
}

class DomainColumnAutoConfigurator extends ColumnAutoConfigurator {
    configure(source) {
        if (source !== undefined && source !== null && Array.isArray(source) && source.length === 0) {
            return [];
        }
        const rawItem = source[0];
        return Object.keys(rawItem)
            .map((key, index) => {
            return this.toColumnConfig(key, rawItem);
        });
    }
    toColumnConfig(key, rawItem) {
        return {
            field: this.getField(key),
            header: this.getHeader(key),
            type: this.getType(key, rawItem)
        };
    }
    getField(key) {
        return key;
    }
    getHeader(key) {
        return key[0].toUpperCase() + key.slice(1);
    }
    getType(key, rawItem) {
        if (typeof rawItem[key] === 'string') {
            return DataType.STRING;
        }
        else if (typeof rawItem[key] === 'number') {
            return DataType.NUMBER;
        }
        else if (rawItem[key] instanceof Date) {
            return DataType.DATE;
        }
        else if (typeof rawItem[key] === 'boolean') {
            return DataType.BOOLEAN;
        }
        else {
            return DataType.UNKNOWN;
        }
    }
}

class CompositionApiModule {
    registerProviders(container) {
        container.provide(InMemoryCompositionReadStore);
        container.provide(CompositionReadModelRootRepository, InMemoryCompositionRepository);
        container.provide(ColumnDefinitionFactory);
        container.provide(ViewTemplateRepository);
        container.provide(ViewTemplateFactory);
        container.provide(EditTemplateFactory);
        container.provide(EditTemplateRepository);
        container.provide(InMemoryCompositionStore);
        container.provide(CompositionReadModelRootConverter);
        container.provide(CompositionGroupArchive);
        container.provide(CompositionPublisher, CompositionDomainCommandPublisher);
        container.provide(CompositionWarehouse, CompositionDomainWarehouse);
        container.provide(CompositionEventRepository, CompositionDomainEventRepository);
        container.provide(ColumnAutoConfigurator, DomainColumnAutoConfigurator);
    }
}
const compositionInitializer = new DomainInitializer(new CompositionApiModule(), new CompositionDomainModule());

class SanitizeModule {
}
SanitizeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SanitizeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SanitizeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SanitizeModule, declarations: [SafePipe], imports: [CommonModule], exports: [SafePipe] });
SanitizeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SanitizeModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SanitizeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SafePipe
                    ],
                    exports: [
                        SafePipe
                    ]
                }]
        }] });

class ColumnQueryComponent {
}
ColumnQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ColumnQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ColumnQueryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: ColumnQueryComponent, selector: "gui-column[header]", inputs: { header: "header" }, queries: [{ propertyName: "cellTemplate", first: true, predicate: TemplateRef, descendants: true, read: TemplateRef }], ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ColumnQueryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-column[header]',
                    template: ''
                }]
        }], propDecorators: { cellTemplate: [{
                type: ContentChild,
                args: [TemplateRef, { read: TemplateRef, static: false }]
            }], header: [{
                type: Input
            }] } });

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
    TextViewComponent,
    HtmlViewComponent
];
const exportDeclarations$2 = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    ColumnQueryComponent,
    FabricChipModule,
    FabricCheckboxModule,
    FabricButtonModule,
    FabricInputModule,
    FunctionViewComponent,
    BarViewComponent,
    PercentageViewComponent,
    HtmlViewComponent
];
compositionInitializer.init();
function provideCompositionCommandPublisher() {
    return CoreContainer.resolve(CompositionPublisher);
}
function provideCompositionWarehouse() {
    return CoreContainer.resolve(CompositionWarehouse);
}
function provideCompositionEventRepository() {
    return CoreContainer.resolve(CompositionEventRepository);
}
function provideColumnAutoConfigurator() {
    return CoreContainer.resolve(ColumnAutoConfigurator);
}
function provideColumnFieldFactory() {
    return CoreContainer.resolve(ColumnFieldFactory);
}
class CompositionFeatureModule extends FeatureModule {
    constructor(cfr) {
        super();
        CoreContainer.provideValue(ComponentFactoryResolver, cfr);
    }
    static forComponent() {
        return [];
    }
}
CompositionFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CompositionFeatureModule, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.NgModule });
CompositionFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: CompositionFeatureModule, declarations: [ViewTemplatesComponent,
        EditTemplatesComponent,
        StringEditTemplateComponent,
        NumberEditTemplateComponent,
        BooleanEditTemplateComponent,
        DateEditTemplateComponent,
        ColumnQueryComponent,
        FunctionViewComponent,
        BarViewComponent,
        PercentageViewComponent,
        TextViewComponent,
        HtmlViewComponent], imports: [CommonModule,
        ReactiveFormsModule,
        SanitizeModule,
        FabricChipModule,
        FabricCheckboxModule,
        FabricButtonModule,
        FabricInputModule,
        FabricDatePickerModule], exports: [ViewTemplatesComponent,
        EditTemplatesComponent,
        ColumnQueryComponent,
        FabricChipModule,
        FabricCheckboxModule,
        FabricButtonModule,
        FabricInputModule,
        FunctionViewComponent,
        BarViewComponent,
        PercentageViewComponent,
        HtmlViewComponent] });
CompositionFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CompositionFeatureModule, providers: [
        { provide: CompositionPublisher, useFactory: provideCompositionCommandPublisher },
        { provide: CompositionWarehouse, useFactory: provideCompositionWarehouse },
        { provide: CompositionEventRepository, useFactory: provideCompositionEventRepository },
        { provide: ColumnAutoConfigurator, useFactory: provideColumnAutoConfigurator },
        { provide: ColumnFieldFactory, useFactory: provideColumnFieldFactory }
    ], imports: [CommonModule,
        ReactiveFormsModule,
        SanitizeModule,
        FabricChipModule,
        FabricCheckboxModule,
        FabricButtonModule,
        FabricInputModule,
        FabricDatePickerModule, FabricChipModule,
        FabricCheckboxModule,
        FabricButtonModule,
        FabricInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CompositionFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        SanitizeModule,
                        FabricChipModule,
                        FabricCheckboxModule,
                        FabricButtonModule,
                        FabricInputModule,
                        FabricDatePickerModule
                    ],
                    declarations: [
                        components
                    ],
                    exports: [
                        exportDeclarations$2
                    ],
                    entryComponents: [
                        ViewTemplatesComponent,
                        EditTemplatesComponent,
                        FabricChipComponent,
                        FabricCheckboxComponent,
                        FabricButtonComponent,
                        FabricInputComponent
                    ],
                    providers: [
                        { provide: CompositionPublisher, useFactory: provideCompositionCommandPublisher },
                        { provide: CompositionWarehouse, useFactory: provideCompositionWarehouse },
                        { provide: CompositionEventRepository, useFactory: provideCompositionEventRepository },
                        { provide: ColumnAutoConfigurator, useFactory: provideColumnAutoConfigurator },
                        { provide: ColumnFieldFactory, useFactory: provideColumnFieldFactory }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }]; } });

class StructureSearchingGate extends SearchingGate {
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super(structureId, searchEventRepository, searchCommandInvoker);
    }
}
StructureSearchingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSearchingGate, deps: [{ token: StructureId }, { token: SearchEventRepository }, { token: SearchPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureSearchingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureSearchingGate, selector: "gui-structure[searching]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSearchingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[searching]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: SearchEventRepository }, { type: SearchPublisher }]; } });

class StructureColumnHeaderGate extends Gate {
    constructor(structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive) {
        super();
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('columnHeaderTop', changes)) {
            this.structureHeaderTopEnabledArchive.next(this.columnHeaderTop);
        }
        if (this.isDefined('columnHeaderBottom', changes)) {
            this.structureHeaderBottomEnabledArchive.next(this.columnHeaderBottom);
        }
    }
}
StructureColumnHeaderGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnHeaderGate, deps: [{ token: StructureHeaderTopEnabledArchive }, { token: StructureHeaderBottomEnabledArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureColumnHeaderGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnHeaderGate, selector: "gui-structure[columnHeaderTop][columnHeaderBottom], gui-structure[columnHeaderTop], gui-structure[columnHeaderBottom]", inputs: { columnHeaderTop: "columnHeaderTop", columnHeaderBottom: "columnHeaderBottom" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnHeaderGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[columnHeaderTop][columnHeaderBottom], gui-structure[columnHeaderTop], gui-structure[columnHeaderBottom]'
                }]
        }], ctorParameters: function () { return [{ type: StructureHeaderTopEnabledArchive }, { type: StructureHeaderBottomEnabledArchive }]; }, propDecorators: { columnHeaderTop: [{
                type: Input
            }], columnHeaderBottom: [{
                type: Input
            }] } });

class StructurePagingGate extends PagingGate {
    constructor(structureId, compositionId, pagingPublisher, pagingEventRepository, pagingDisplayModeArchive) {
        super(structureId, compositionId, pagingPublisher, pagingEventRepository);
        this.pagingDisplayModeArchive = pagingDisplayModeArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('paging', changes)) {
            let pagingConfig;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
                if (this.paging.displayMode !== undefined) {
                    this.pagingDisplayModeArchive.next(this.paging.displayMode);
                }
            }
            this.pagingCommandInvoker.setPaging(pagingConfig, this.structureId);
        }
    }
}
StructurePagingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructurePagingGate, deps: [{ token: StructureId }, { token: CompositionId }, { token: PagingPublisher }, { token: PagingEventRepository }, { token: PagingDisplayModeArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructurePagingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructurePagingGate, selector: "gui-structure[paging]", usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructurePagingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[paging]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: CompositionId }, { type: PagingPublisher }, { type: PagingEventRepository }, { type: PagingDisplayModeArchive }]; } });

class SelectionGate extends Gate {
    constructor(structureId, formationEventRepository, formationCommandDispatcher, rowSelectionTypeArchive) {
        super();
        this.structureId = structureId;
        this.formationEventRepository = formationEventRepository;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.itemsSelected = new EventEmitter();
        this.selectedRows = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowSelection', changes)) {
            if (this.rowSelection.isEnabledDefined()) {
                this.formationCommandDispatcher.setSelection(this.rowSelection.isEnabled(), this.structureId);
            }
            if (this.rowSelection.isTypeDefined()) {
                this.rowSelectionTypeArchive.next(this.rowSelection.getType());
            }
            if (this.rowSelection.isModeDefined()) {
                this.formationCommandDispatcher.changeMode(this.rowSelection.getMode(), this.structureId);
            }
        }
    }
    ngOnInit() {
        this.formationEventRepository
            .onItemSelected(this.structureId)
            .pipe(this.hermesTakeUntil())
            .subscribe((items) => {
            this.itemsSelected.emit(items.map(i => i.getSource()));
            this.selectedRows.emit(items);
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SelectionGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SelectionGate, deps: [{ token: StructureId }, { token: FormationEventRepository }, { token: FormationPublisher }, { token: RowSelectionTypeArchive }], target: i0.ɵɵFactoryTarget.Directive });
SelectionGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: SelectionGate, inputs: { rowSelection: "rowSelection" }, outputs: { itemsSelected: "itemsSelected", selectedRows: "selectedRows" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SelectionGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: StructureId }, { type: FormationEventRepository }, { type: FormationPublisher }, { type: RowSelectionTypeArchive }]; }, propDecorators: { rowSelection: [{
                type: Input
            }], itemsSelected: [{
                type: Output
            }], selectedRows: [{
                type: Output
            }] } });

class StructureSelectionGate extends SelectionGate {
    constructor(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) {
        super(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive);
    }
}
StructureSelectionGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSelectionGate, deps: [{ token: StructureId }, { token: FormationEventRepository }, { token: FormationPublisher }, { token: RowSelectionTypeArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureSelectionGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureSelectionGate, selector: "gui-structure[rowSelection], gui-structure[selectionGate]", inputs: { selectionGate: "selectionGate" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSelectionGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowSelection], gui-structure[selectionGate]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: FormationEventRepository }, { type: FormationPublisher }, { type: RowSelectionTypeArchive }]; }, propDecorators: { selectionGate: [{
                type: Input
            }] } });

class StructureL10nGate extends Gate {
    constructor(translationService) {
        super();
        this.translationService = translationService;
    }
    ngOnChanges(changes) {
        if (this.isDefined('localization', changes)) {
            if (this.localization.translationResolver) {
                this.translationService.setResolver(this.localization.translationResolver);
            }
            if (this.localization.translation) {
                this.translationService.changeTranslation(this.localization.translation);
            }
        }
    }
}
StructureL10nGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureL10nGate, deps: [{ token: TranslationFacade }], target: i0.ɵɵFactoryTarget.Directive });
StructureL10nGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureL10nGate, selector: "gui-structure[localization]", inputs: { localization: "localization" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureL10nGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[localization]'
                }]
        }], ctorParameters: function () { return [{ type: TranslationFacade }]; }, propDecorators: { localization: [{
                type: Input
            }] } });

class StructurePanelGate extends Gate {
    constructor(structureTitlePanelConfigArchive, structureFooterPanelConfigArchive) {
        super();
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('titlePanel', changes)) {
            this.structureTitlePanelConfigArchive.next(this.titlePanel);
        }
        if (this.isDefined('footerPanel', changes)) {
            this.structureFooterPanelConfigArchive.next(this.footerPanel);
        }
    }
}
StructurePanelGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructurePanelGate, deps: [{ token: StructureTitlePanelConfigArchive }, { token: StructureFooterPanelConfigArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructurePanelGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructurePanelGate, selector: "gui-structure[titlePanel][footerPanel]", inputs: { titlePanel: "titlePanel", footerPanel: "footerPanel" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructurePanelGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[titlePanel][footerPanel]'
                }]
        }], ctorParameters: function () { return [{ type: StructureTitlePanelConfigArchive }, { type: StructureFooterPanelConfigArchive }]; }, propDecorators: { titlePanel: [{
                type: Input
            }], footerPanel: [{
                type: Input
            }] } });

class StructureRowDetailGate extends Gate {
    constructor(structureDetailViewConfigArchive) {
        super();
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowDetail', changes)) {
            this.structureDetailViewConfigArchive.next(this.rowDetail);
        }
    }
}
StructureRowDetailGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailGate, deps: [{ token: StructureRowDetailConfigArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureRowDetailGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureRowDetailGate, selector: "gui-structure[rowDetail]", inputs: { rowDetail: "rowDetail" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowDetail]'
                }]
        }], ctorParameters: function () { return [{ type: StructureRowDetailConfigArchive }]; }, propDecorators: { rowDetail: [{
                type: Input
            }] } });

class StructureColumnMenuGate extends Gate {
    constructor(structureColumnMenuConfigArchive) {
        super();
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('columnMenu', changes)) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
    }
}
StructureColumnMenuGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuGate, deps: [{ token: StructureColumnMenuConfigArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureColumnMenuGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureColumnMenuGate, selector: "gui-structure[columnMenu]", inputs: { columnMenu: "columnMenu" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[columnMenu]'
                }]
        }], ctorParameters: function () { return [{ type: StructureColumnMenuConfigArchive }]; }, propDecorators: { columnMenu: [{
                type: Input
            }] } });

class StructureSummariesGate extends Gate {
    constructor(structureId, summariesCommandInvoker) {
        super();
        this.structureId = structureId;
        this.summariesCommandInvoker = summariesCommandInvoker;
    }
    ngOnChanges(changes) {
        ifChanged(changes.summaries, () => {
            this.summariesCommandInvoker.setConfig(this.summaries, this.structureId);
        });
    }
}
StructureSummariesGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSummariesGate, deps: [{ token: StructureId }, { token: SummariesPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureSummariesGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureSummariesGate, selector: "gui-structure[summaries]", inputs: { summaries: "summaries" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSummariesGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[summaries]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: SummariesPublisher }]; }, propDecorators: { summaries: [{
                type: Input
            }] } });

class StructureInfoPanelGate extends Gate {
    constructor(structureInfoPanelConfigService) {
        super();
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
    }
    ngOnChanges(changes) {
        if (this.isDefined('infoPanel', changes)) {
            if (typeof this.infoPanel === 'boolean') {
                this.infoPanel = {
                    enabled: this.infoPanel
                };
            }
            this.structureInfoPanelConfigService.set(this.infoPanel);
        }
    }
}
StructureInfoPanelGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelGate, deps: [{ token: StructureInfoPanelConfigService }], target: i0.ɵɵFactoryTarget.Directive });
StructureInfoPanelGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureInfoPanelGate, selector: "gui-structure[infoPanel]", inputs: { infoPanel: "infoPanel" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureInfoPanelGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[infoPanel]'
                }]
        }], ctorParameters: function () { return [{ type: StructureInfoPanelConfigService }]; }, propDecorators: { infoPanel: [{
                type: Input
            }] } });

class StructureRowClassGate extends Gate {
    constructor(schemaReadModelRootId, schemaPublisher) {
        super();
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaPublisher = schemaPublisher;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowClass', changes)) {
            this.schemaPublisher.setRowClass(this.rowClass, this.schemaReadModelRootId);
        }
    }
}
StructureRowClassGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowClassGate, deps: [{ token: SchemaReadModelRootId }, { token: SchemaPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureRowClassGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureRowClassGate, selector: "gui-structure[rowClass]", inputs: { rowClass: "rowClass" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowClassGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowClass]'
                }]
        }], ctorParameters: function () { return [{ type: SchemaReadModelRootId }, { type: SchemaPublisher }]; }, propDecorators: { rowClass: [{
                type: Input
            }] } });

class StructureRowColoringGate extends Gate {
    constructor(schemaId, schemaCommandInvoker, schemaEventRepository) {
        super();
        this.schemaId = schemaId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaEventRepository = schemaEventRepository;
        this.rowColoringChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowColoring', changes)) {
            this.schemaCommandInvoker.setRowColoring(this.rowColoring, this.schemaId);
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.schemaEventRepository.onRowColoring(this.schemaId), this.rowColoringChanged);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
StructureRowColoringGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowColoringGate, deps: [{ token: SchemaReadModelRootId }, { token: SchemaPublisher }, { token: SchemaEventRepository }], target: i0.ɵɵFactoryTarget.Directive });
StructureRowColoringGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureRowColoringGate, selector: "gui-structure[rowColoring]", inputs: { rowColoring: "rowColoring" }, outputs: { rowColoringChanged: "rowColoringChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowColoringGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowColoring]'
                }]
        }], ctorParameters: function () { return [{ type: SchemaReadModelRootId }, { type: SchemaPublisher }, { type: SchemaEventRepository }]; }, propDecorators: { rowColoring: [{
                type: Input
            }], rowColoringChanged: [{
                type: Output
            }] } });

class StructureRowStyleGate extends Gate {
    constructor(schemaReadModelRootId, schemaPublisher) {
        super();
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaPublisher = schemaPublisher;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowStyle', changes)) {
            this.schemaPublisher.setRowStyle(this.rowStyle, this.schemaReadModelRootId);
        }
    }
}
StructureRowStyleGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowStyleGate, deps: [{ token: SchemaReadModelRootId }, { token: SchemaPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureRowStyleGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureRowStyleGate, selector: "gui-structure[rowStyle]", inputs: { rowStyle: "rowStyle" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowStyleGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowStyle]'
                }]
        }], ctorParameters: function () { return [{ type: SchemaReadModelRootId }, { type: SchemaPublisher }]; }, propDecorators: { rowStyle: [{
                type: Input
            }] } });

class ThemeGridGate extends Gate {
    constructor(schemaId, schemaCommandInvoker, schemaEventRepository) {
        super();
        this.schemaId = schemaId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaEventRepository = schemaEventRepository;
        this.horizontalGridChanged = new EventEmitter();
        this.verticalGridChanged = new EventEmitter();
        this.subscribeAndEmit(this.schemaEventRepository.onHorizontalGridChanged(this.schemaId), this.horizontalGridChanged);
        this.subscribeAndEmit(this.schemaEventRepository.onVerticalGridChanged(this.schemaId), this.verticalGridChanged);
    }
    ngOnChanges(changes) {
        if (this.isDefined('verticalGrid', changes)) {
            this.schemaCommandInvoker.setVerticalGrid(this.verticalGrid, this.schemaId);
        }
        if (this.isDefined('horizontalGrid', changes)) {
            this.schemaCommandInvoker.setHorizontalGrid(this.horizontalGrid, this.schemaId);
        }
    }
}
ThemeGridGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ThemeGridGate, deps: [{ token: SchemaReadModelRootId }, { token: SchemaPublisher }, { token: SchemaEventRepository }], target: i0.ɵɵFactoryTarget.Directive });
ThemeGridGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ThemeGridGate, selector: "gui-structure[verticalGrid][horizontalGrid]", inputs: { verticalGrid: "verticalGrid", horizontalGrid: "horizontalGrid" }, outputs: { horizontalGridChanged: "horizontalGridChanged", verticalGridChanged: "verticalGridChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ThemeGridGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[verticalGrid][horizontalGrid]'
                }]
        }], ctorParameters: function () { return [{ type: SchemaReadModelRootId }, { type: SchemaPublisher }, { type: SchemaEventRepository }]; }, propDecorators: { verticalGrid: [{
                type: Input
            }], horizontalGrid: [{
                type: Input
            }], horizontalGridChanged: [{
                type: Output
            }], verticalGridChanged: [{
                type: Output
            }] } });

class SourceLoadingGate extends Gate {
    constructor(structureId, sourceCommandInvoker) {
        super();
        this.structureId = structureId;
        this.sourceCommandInvoker = sourceCommandInvoker;
    }
    ngOnChanges(changes) {
        if (this.isDefined('loading', changes)) {
            this.sourceCommandInvoker.setLoading(this.loading, this.structureId);
        }
    }
    ngOnInit() {
    }
}
SourceLoadingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceLoadingGate, deps: [{ token: StructureId }, { token: SourcePublisher }], target: i0.ɵɵFactoryTarget.Directive });
SourceLoadingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: SourceLoadingGate, selector: "gui-structure[loading]", inputs: { loading: "loading" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceLoadingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[loading]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: SourcePublisher }]; }, propDecorators: { loading: [{
                type: Input
            }] } });

class VerticalFormationGate extends Gate {
    constructor(structureId, structureCommandInvoker) {
        super();
        this.structureId = structureId;
        this.structureCommandInvoker = structureCommandInvoker;
    }
    ngOnChanges(changes) {
        if (this.isDefined('virtualScroll', changes)) {
            if (this.virtualScroll) {
                this.structureCommandInvoker.enableVirtualScroll(this.structureId);
            }
            else {
                this.structureCommandInvoker.disableVirtualScroll(this.structureId);
            }
        }
    }
}
VerticalFormationGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationGate, deps: [{ token: StructureId }, { token: StructurePublisher }], target: i0.ɵɵFactoryTarget.Directive });
VerticalFormationGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: VerticalFormationGate, selector: "gui-structure[virtualScroll]", inputs: { virtualScroll: "virtualScroll" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[virtualScroll]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: StructurePublisher }]; }, propDecorators: { virtualScroll: [{
                type: Input
            }] } });

class StructureSortingGate extends Gate {
    constructor(structureId, sortingCommandInvoker) {
        super();
        this.structureId = structureId;
        this.sortingCommandInvoker = sortingCommandInvoker;
    }
    ngOnChanges(changes) {
        ifChanged(changes.sorting, () => {
            let sorting;
            if (typeof this.sorting === 'boolean') {
                sorting = {
                    enabled: this.sorting
                };
            }
            else {
                sorting = this.sorting;
            }
            this.sortingCommandInvoker.setSortingConfig(sorting, this.structureId);
        });
    }
}
StructureSortingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSortingGate, deps: [{ token: StructureId }, { token: SortingPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureSortingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureSortingGate, selector: "gui-structure[sorting]", inputs: { sorting: "sorting" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSortingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[sorting]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: SortingPublisher }]; }, propDecorators: { sorting: [{
                type: Input
            }] } });

class StructureFilterGate extends Gate {
    constructor(structureId, structureCommandInvoker) {
        super();
        this.structureId = structureId;
        this.structureCommandInvoker = structureCommandInvoker;
    }
    ngOnChanges(changes) {
        ifChanged(changes.filtering, () => {
            let filtering;
            if (typeof this.filtering === 'boolean') {
                filtering = {
                    enabled: this.filtering
                };
            }
            else {
                filtering = this.filtering;
            }
            this.structureCommandInvoker.setFilterConfig(filtering, this.structureId);
        });
    }
}
StructureFilterGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureFilterGate, deps: [{ token: StructureId }, { token: StructurePublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureFilterGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureFilterGate, selector: "gui-structure[filtering]", inputs: { filtering: "filtering" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureFilterGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[filtering]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: StructurePublisher }]; }, propDecorators: { filtering: [{
                type: Input
            }] } });

class StructureQuickFiltersGate extends Gate {
    constructor(structureId, structureCommandInvoker) {
        super();
        this.structureId = structureId;
        this.structureCommandInvoker = structureCommandInvoker;
    }
    ngOnChanges(changes) {
        ifChanged(changes.quickFilters, () => {
            let quickFilters;
            if (typeof this.quickFilters === 'boolean') {
                quickFilters = {
                    enabled: this.quickFilters
                };
            }
            else {
                quickFilters = this.quickFilters;
            }
            this.structureCommandInvoker.setQuickFiltersConfig(quickFilters, this.structureId);
        });
    }
}
StructureQuickFiltersGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureQuickFiltersGate, deps: [{ token: StructureId }, { token: StructurePublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureQuickFiltersGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureQuickFiltersGate, selector: "gui-structure[quickFilters]", inputs: { quickFilters: "quickFilters" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureQuickFiltersGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[quickFilters]'
                }]
        }], ctorParameters: function () { return [{ type: StructureId }, { type: StructurePublisher }]; }, propDecorators: { quickFilters: [{
                type: Input
            }] } });

const structureGates = [
    StructureColumnHeaderGate,
    StructurePagingGate,
    StructureSearchingGate,
    // StructureSourceGate,
    StructureSelectionGate,
    StructureL10nGate,
    StructurePanelGate,
    StructureRowDetailGate,
    StructureColumnMenuGate,
    StructureSummariesGate,
    StructureInfoPanelGate,
    StructureRowClassGate,
    StructureRowStyleGate,
    StructureRowColoringGate,
    ThemeGridGate,
    StructureSortingGate,
    SourceLoadingGate,
    StructureFilterGate,
    StructureQuickFiltersGate,
    VerticalFormationGate
];

CoreContainer.provide(CssClassModifier);
function provideCssClassModifier() {
    return CoreContainer.resolve(CssClassModifier);
}
class CssClassModule {
}
CssClassModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CssClassModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CssClassModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: CssClassModule });
CssClassModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CssClassModule, providers: [
        { provide: CssClassModifier, useFactory: provideCssClassModifier }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CssClassModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: CssClassModifier, useFactory: provideCssClassModifier }
                    ]
                }]
        }] });

class StructureSharedModule {
}
StructureSharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureSharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: StructureSharedModule, imports: [CssClassModule] });
StructureSharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSharedModule, imports: [CssClassModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSharedModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CssClassModule
                    ]
                }]
        }] });

class ResizeDetectorModule {
}
ResizeDetectorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ResizeDetectorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ResizeDetectorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: ResizeDetectorModule });
ResizeDetectorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ResizeDetectorModule, providers: [
        ResizeDetector
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ResizeDetectorModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        ResizeDetector
                    ]
                }]
        }] });

class CreateStructureCommand extends StructureCommand {
    constructor(structureId) {
        super(structureId, 'CreateStructureCommand');
    }
}

class CreateStructureCommandHandler {
    forCommand() {
        return CreateStructureCommand;
    }
}

class StructurePreparedEntitiesSetAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, preparedItems) {
        super(aggregateId, 'StructurePreparedEntitiesSetAggregateEvent');
        this.preparedItems = preparedItems;
    }
    toDomainEvent() {
        return new StructurePreparedEntitiesSetEvent(this.getAggregateId(), this.preparedItems);
    }
    getPreparedItems() {
        return this.preparedItems;
    }
}

class FieldsInitedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId, fieldConfigs, // TODO merge
    fields) {
        super(structureId, 'FieldsInitedAggregateEvent');
        this.fieldConfigs = fieldConfigs;
        this.fields = fields;
    }
    toDomainEvent() {
        return new FieldsInitedEvent(this.getAggregateId(), this.fieldConfigs, this.fields);
    }
    getFieldConfigs() {
        return this.fieldConfigs;
    }
    getFields() {
        return this.fields;
    }
}

class StructureCreatedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'StructureCreatedAggregateEvent');
    }
    toDomainEvent() {
        return new StructureCreatedEvent(this.getAggregateId());
    }
}

class FilterTypesInitedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId, filterTypes) {
        super(structureId, 'FilterTypesInitedAggregateEvent');
        this.filterTypes = filterTypes;
    }
    toDomainEvent() {
        return new FilterTypesInitedEvent(this.getAggregateId(), this.filterTypes);
    }
    getFilterTypes() {
        return this.filterTypes;
    }
}

class AllFiltersRemovedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'FilterAddedEvent');
    }
    toDomainEvent() {
        return new ActiveFiltersSetEvent(this.getAggregateId(), []);
    }
}

class FilterAddedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, activeFilters) {
        super(aggregateId, 'FilterAddedEvent');
        this.activeFilters = activeFilters;
    }
    toDomainEvent() {
        return new ActiveFiltersSetEvent(this.getAggregateId(), this.activeFilters);
    }
}

class FilterRemovedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, activeFilters) {
        super(aggregateId, 'FilterRemovedAggregateEvent');
        this.activeFilters = activeFilters;
    }
    toDomainEvent() {
        return new ActiveFiltersSetEvent(this.getAggregateId(), this.activeFilters);
    }
}

class UniqueFilterCalculatedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, map) {
        super(aggregateId, 'UniqueFilterCalculatedAggregateEvent');
        this.map = map;
    }
    toDomainEvent() {
        return new UniqueFilterCalculatedEvent(this.getAggregateId(), this.map);
    }
}

class UniqueFilterSelectedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'UniqueFilterSelectedAggregateEvent');
    }
    toDomainEvent() {
        return new UniqueFilterSelectedEvent(this.getAggregateId());
    }
}

class UniqueFilterUnselectedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'UniqueFilterUnselectedAggregateEvent');
    }
    toDomainEvent() {
        return new UniqueFilterUnselectedEvent(this.getAggregateId());
    }
}

class AllUniqueFilterUnselectedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'AllUniqueFilterUnselectedAggregateEvent');
    }
    toDomainEvent() {
        return new AllUniqueFilterUnselectedEvent(this.getAggregateId());
    }
}

class AllUniqueFilterSelectedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'AllUniqueFilterSelectedAggregateEvent');
    }
    toDomainEvent() {
        return new AllUniqueFilterSelectedEvent(this.getAggregateId());
    }
}

class SelectedRowChangedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId, selectedRows, allSelected, allUnselected) {
        super(structureId, 'SelectedRowChangedAggregateEvent');
        this.selectedRows = selectedRows;
        this.allSelected = allSelected;
        this.allUnselected = allUnselected;
    }
    toDomainEvent() {
        return new SelectedRowChangedEvent(this.getAggregateId(), this.selectedRows, this.allSelected, this.allUnselected);
    }
}

class SelectionEnabledSetEvent extends StructureDomainEvent {
    constructor(aggregateId, enabled) {
        super(aggregateId, enabled, 'SelectionEnabledSetEvent');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class SelectionEnabledSetAggregateEvent extends StructureAggregateEvent {
    constructor(structureId, enabled) {
        super(structureId, 'SelectionEnabledSetAggregateEvent');
        this.enabled = enabled;
    }
    toDomainEvent() {
        return new SelectionEnabledSetEvent(this.getAggregateId(), this.enabled);
    }
}

class SelectionModeSetAggregateEvent extends StructureAggregateEvent {
    constructor(structureId, mode) {
        super(structureId, 'SelectionModeSetAggregateEvent');
        this.mode = mode;
    }
    toDomainEvent() {
        return new SelectionModeSetEvent(this.getAggregateId(), this.mode);
    }
}

class StructureAggregate extends AggregateRoot {
    constructor(structureId, pagingAggregate, sourceManager, verticalFormation, summariesManager, sorterCollection, filterManager, uniqueFilterManager, searchManager, fieldCollection) {
        super(structureId, structureKey);
        this.pagingManager = pagingAggregate;
        this.sourceManager = sourceManager;
        this.verticalFormation = verticalFormation;
        this.summariesManager = summariesManager;
        this.sorterManager = sorterCollection;
        this.filterManager = filterManager;
        this.uniqueFilterManager = uniqueFilterManager;
        this.searchManager = searchManager;
        this.fieldCollection = fieldCollection;
    }
    createEvent() {
        return StructureCreatedAggregateEvent;
    }
    clearEvents() {
        super.clearEvents();
        this.pagingManager.clearEvents();
    }
    init() {
        this.initTheme();
    }
    setVerticalFormationEnabled(enabled) {
        this.verticalFormation.setEnabled(enabled);
        this.calculateSource();
    }
    getVerticalFormation() {
        return this.verticalFormation;
    }
    setSummariesEnabled(enabled) {
        this.summariesManager.setEnabled(enabled);
        this.calculateSource();
        return this.getEvents();
    }
    setOrigin(items) {
        this.addEvent(this.sourceManager.setOrigin(items, this.getId()));
        if (false) {
            this.calculateUniqueValues();
        }
        this.calculateSource();
        return this.getEvents();
    }
    deleteAllSelected() {
    }
    deleteItem(payload) {
        this.addEvent(this.sourceManager.deleteOriginItem(payload, this.getId()));
        this.generateSelectedRowChangedEvent();
        this.calculateSource();
    }
    editItem(editParams) {
        const itemId = editParams.getItemId(), fieldId = editParams.getColumnFieldId(), field = this.fieldCollection.getField(fieldId), // as FieldId
        value = editParams.getValue();
        const editItemEvents = this.sourceManager.editOriginItem(itemId, value, field, this.getId());
        editItemEvents.forEach((e) => this.addEvent(e));
        // TODO
        // this.calculateUniqueValues();
        this.calculateSource();
        return this.getEvents();
    }
    setHeight(height) {
        this.verticalFormation.setViewportHeight(height);
        this.calculateSourceBasedOnVirtualScroll();
    }
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
    setScrollPosition(position) {
        this.verticalFormation.setScrollPosition(position);
        this.calculateSourceBasedOnVirtualScroll();
    }
    scrollToIndex(index) {
        this.addEvent(this.verticalFormation.scrollToIndex(index));
    }
    setSelection(enabled) {
        this.sourceManager.getFormation().setSelection(enabled);
        this.addEvent(new SelectionEnabledSetAggregateEvent(this.getId(), enabled));
    }
    setSelectionMode(mode) {
        this.sourceManager.getFormation().setMode(mode);
        this.addEvent(new SelectionModeSetAggregateEvent(this.getId(), mode));
    }
    toggleRow(selectedRow, type) {
        this.sourceManager.toggleRow(selectedRow, type);
        this.generateSelectedRowChangedEvent();
    }
    selectAll() {
        this.sourceManager.selectAll();
        this.generateSelectedRowChangedEvent();
    }
    unselectAll() {
        this.sourceManager.unselectAll();
        this.generateSelectedRowChangedEvent();
    }
    getFormation() {
        return this.sourceManager.getFormation();
    }
    getPaging() {
        return this.pagingManager;
    }
    changePaging(config) {
        this.pagingManager.change(config);
        this.calculateSource();
    }
    setPaging(paging) {
        this.pagingManager = paging;
        this.calculateSource();
    }
    nextPage() {
        this.pagingManager.nextPage();
        this.calculateSource();
    }
    prevPage() {
        this.pagingManager.prevPage();
        this.calculateSource();
    }
    changePageSize(pageSize) {
        const pagingEvents = this.pagingManager.changePageSize(pageSize);
        // TODO
        pagingEvents.forEach((event) => {
            this.addEvent(event);
        });
        this.calculateSource();
        return this.getEvents();
    }
    getEntities() {
        return this.sourceManager.getSlicedEntities();
    }
    getSource() {
        return this.sourceManager;
    }
    createFields(fieldConfigs) {
        this.fieldCollection.initFields(fieldConfigs);
        const fields = this.fieldCollection.getAllFields();
        this.addEvent(new FieldsInitedAggregateEvent(this.getId(), fieldConfigs, fields));
        this.filterManager.assignFilterTypes(fields);
        this.addEvent(new FilterTypesInitedAggregateEvent(this.getId(), this.filterManager.getFilterTypes()));
        return this.getEvents();
    }
    setSortingConfig(config) {
        this.sorterManager.setConfig(config);
    }
    toggleSort(fieldId) {
        const field = this.fieldCollection.getField(fieldId);
        this.sorterManager.toggle(field);
        this.calculateSource();
        return this.sorterManager.getAll();
    }
    setSortOrder(fieldId, sortOrder) {
        const field = this.fieldCollection.getField(fieldId);
        this.sorterManager.setSortOrder(field, sortOrder);
        this.calculateSource();
        return this.sorterManager.getAll();
    }
    setFilterConfig(config) {
        this.filterManager.getSettings().setFilterConfig(config);
    }
    setQuickFiltersConfig(config) {
        this.filterManager.getSettings().setQuickFiltersConfig(config);
    }
    toggleFilter(fieldId, externalFilterId, filterValue) {
        const field = this.fieldCollection.getField(fieldId);
        // Field not found
        // TODO throw aggregate event
        if (field === undefined) {
            return [];
        }
        // this.filterManager.addFilter(field, externalFilterId, filterValue);
        // this.filterManager.a
        this.calculateSource();
        return [];
    }
    addFilter(fieldId, filterTypeId, value) {
        this.filterManager.add(fieldId, filterTypeId, value);
        const fields = this.fieldCollection.getFieldsAsMap();
        const activeFilters = this.filterManager.getAllActiveFilters(fields);
        this.addEvent(new FilterAddedAggregateEvent(this.getId(), activeFilters));
        this.calculateSource();
    }
    removeAllFilters() {
        this.filterManager.removeAll();
        this.addEvent(new AllFiltersRemovedAggregateEvent(this.getId()));
        this.calculateSource();
    }
    removeFilter(filterId) {
        this.filterManager.remove(filterId);
        const fields = this.fieldCollection.getFieldsAsMap();
        const activeFilters = this.filterManager.getAllActiveFilters(fields);
        this.addEvent(new FilterRemovedAggregateEvent(this.getId(), activeFilters));
        this.calculateSource();
    }
    setSearchingConfig(config) {
        this.filterManager.getSettings().setSearchingConfig(config);
    }
    addSearchPhrase(phrase) {
        const fields = this.fieldCollection.getAllFields();
        this.searchManager.addSearchPhrase(fields, phrase);
        this.calculateSource();
        return [];
    }
    removeSearchPhrase() {
        this.searchManager.removeSearchFilters();
        this.calculateSource();
        return [];
    }
    selectAllUniqueFilter(fieldId) {
        this.uniqueFilterManager.selectAll(fieldId);
        this.addEvent(new AllUniqueFilterSelectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    selectUniqueFilter(fieldId, uniqueValueId) {
        this.uniqueFilterManager.select(fieldId, uniqueValueId);
        this.addEvent(new UniqueFilterSelectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    unselectAllUniqueFilter(fieldId) {
        this.uniqueFilterManager.unselectAll(fieldId);
        this.addEvent(new AllUniqueFilterUnselectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    unselectUniqueFilter(fieldId, uniqueValueId) {
        this.uniqueFilterManager.unselect(fieldId, uniqueValueId);
        this.addEvent(new UniqueFilterUnselectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    calculateSource() {
        if (!this.sourceManager.getOrigin() || !this.pagingManager) {
            return;
        }
        // TODO Refactor
        this.sourceManager.setEntities(this.sourceManager.getOrigin());
        // filtering
        this.sourceManager.setEntities(this.filterManager.filter(this.sourceManager.getEntities(), this.fieldCollection.getFieldsAsMap()));
        // search
        const searchedEntities = this.searchManager.search(this.sourceManager.getEntities());
        this.sourceManager.setEntities(searchedEntities);
        // unique filtering
        if (false) {
            this.sourceManager.setEntities(this.uniqueFilterManager.filterAll(this.sourceManager.getEntities(), this.fieldCollection.getAllFields()));
        }
        // sorting
        const ents = this.sorterManager.sort(this.sourceManager.getEntities());
        this.sourceManager.setEntities(ents);
        // calculate filteredEntities
        this.sourceManager.setPreparedEntities();
        this.pagingManager.setSourceSize(this.sourceManager.getPreparedEntities().length);
        this.addEvent(new StructurePreparedEntitiesSetAggregateEvent(this.getId(), ents));
        // summaries
        const summariesEvents = this.summariesManager.calculate(this.fieldCollection.getAllFields(), this.sourceManager.getEntities());
        summariesEvents.forEach((ae) => {
            this.addEvent(ae);
        });
        // paging
        this.sourceManager.setEntities(this.pagingManager.sample(this.sourceManager.getEntities()));
        this.verticalFormation.setSourceSize(this.sourceManager.getEntities().length);
        this.calculateSourceBasedOnVirtualScroll();
    }
    calculateSourceBasedOnVirtualScroll() {
        if (this.verticalFormation.isEnabled()) {
            const range = this.verticalFormation.getRange();
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities().slice(range.getStart(), range.getEnd()));
        }
        else {
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities());
        }
    }
    initTheme() {
        // TODO
        const theme = SchemaAggregate.DEFAULT_THEME;
        this.setTheme(theme);
    }
    calculateUniqueValues() {
        const fields = this.fieldCollection.getAllFields(), items = this.sourceManager.getOrigin();
        this.uniqueFilterManager.calculateAll(items, fields);
        this.generateCalculateUniqueValuesAggregateEvent();
    }
    generateCalculateUniqueValuesAggregateEvent() {
        this.addEvent(new UniqueFilterCalculatedAggregateEvent(this.getId(), this.uniqueFilterManager.getAll(this.fieldCollection.getAllFields())));
    }
    generateSelectedRowChangedEvent() {
        this.addEvent(new SelectedRowChangedAggregateEvent(this.getId(), this.sourceManager.getFormation().getSelectedRows(), this.sourceManager.getFormation().isAllSelected(), this.sourceManager.getFormation().isAllUnselected()));
    }
}

class Sorter {
    constructor(id, field, direction = true) {
        this.rank = 1;
        this.sorterId = id;
        this.field = field;
        this.direction = direction;
    }
    getId() {
        return this.sorterId;
    }
    getRank() {
        return this.rank;
    }
    getField() {
        return this.field;
    }
    hasDirection() {
        return this.direction;
    }
    changeDirection() {
        this.direction = !this.direction;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    sort(entities) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.sort((entityOne, entityTwo) => {
            return this.field.sort(entityOne, entityTwo, this.direction);
        });
    }
}

class SorterId {
    constructor(id) {
        this.sorterId = id;
    }
    getId() {
        return this.sorterId;
    }
}

class SorterManager {
    constructor(enabled = false, multi = false) {
        this.sorters = new Map();
        this.enabled = enabled;
        this.multi = multi;
    }
    setConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
        if (config && config.multiSorting !== undefined && config.multiSorting !== null) {
            this.multi = config.multiSorting;
            this.sorters.clear();
        }
    }
    toggle(field) {
        const fieldId = field.getId(), sorter = this.sorters.get(fieldId.getId());
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
    setSortOrder(field, sortOrder) {
        const fieldId = field.getId(), sorter = this.sorters.get(fieldId.getId());
        if (sortOrder === SortOrder.NONE) {
            this.delete(fieldId);
        }
        else if (sortOrder === SortOrder.ASC || sortOrder === SortOrder.DESC) {
            this.delete(fieldId);
            const direction = sortOrder === SortOrder.ASC;
            this.add(field, direction);
        }
    }
    add(field, direction = true) {
        this.addSorter(field.getId(), new Sorter(new SorterId(RandomStringGenerator.generate()), field, direction));
    }
    addSorter(fieldId, sorter) {
        if (!this.multi) {
            this.sorters.clear();
        }
        this.sorters.set(fieldId.getId(), sorter);
    }
    delete(fieldId) {
        this.sorters.delete(fieldId.getId());
    }
    update() {
    }
    // TODO Remove the loop from sorter.sort
    sort(entities) {
        const sorters = this.getAll();
        let sortedEntities = Array.from(entities);
        for (const sorter of sorters) {
            sortedEntities = sorter.sort(sortedEntities);
        }
        return sortedEntities;
    }
    getAll() {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.sorters)
            .map((arr) => arr[1])
            .sort((sorterOne, sorterTwo) => {
            return sorterOne.getRank() - sorterTwo.getRank();
        })
            .reverse();
    }
}

class UniqueValue {
    constructor(id, value, displayValue, enabled) {
        this.id = id;
        this.value = value;
        this.displayValue = displayValue;
        this.enabled = enabled;
    }
    getId() {
        return this.id;
    }
    getValue() {
        return this.value;
    }
    getDisplayValue() {
        return this.displayValue;
    }
    isEnabled() {
        return this.enabled;
    }
    isDisabled() {
        return !this.enabled;
    }
    select() {
        this.enabled = true;
    }
    unselect() {
        this.enabled = false;
    }
}

class UniqueValueId {
    constructor(uniqueValueId) {
        this.id = uniqueValueId;
    }
    toString() {
        return this.id;
    }
    equals(uniqueValueId) {
        return uniqueValueId.toString() === this.id;
    }
}

class UniqueValueIdGenerator {
    static generate() {
        UniqueValueIdGenerator.index += 1;
        return new UniqueValueId(`${UniqueValueIdGenerator.index}`);
    }
}
UniqueValueIdGenerator.index = 0;

class UniqueValueCollection {
    constructor(values, field) {
        this.values = [];
        for (const value of values) {
            this.values.push(new UniqueValue(UniqueValueIdGenerator.generate(), value, field.getDisplayValue(value), true));
        }
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    getAll() {
        return this.values;
    }
    isAllSelected() {
        return this.allSelected;
    }
    isAllDisabled() {
        return this.allDisabled;
    }
    getNotSelected() {
        return this.values.filter((uv) => uv.isDisabled());
    }
    selectAll() {
        this.values.forEach((uv) => {
            uv.select();
        });
        this.allSelected = true;
        this.allDisabled = false;
    }
    select(uniqueValueId) {
        this.values
            .filter((uv) => uv.getId().equals(uniqueValueId))
            .forEach((uv) => {
            uv.select();
        });
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    unselectAll() {
        this.values.forEach((uv) => {
            uv.unselect();
        });
        this.allSelected = false;
        this.allDisabled = true;
    }
    unselect(uniqueValueId) {
        this.values
            .filter((uv) => uv.getId().equals(uniqueValueId))
            .forEach((uv) => {
            uv.unselect();
        });
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    calculateAllSelected() {
        this.allSelected = !this.values.some((f) => f.isDisabled());
    }
    calculateAllDisabled() {
        this.allDisabled = !this.values.some((f) => f.isEnabled());
    }
}

class UniqueFilterManager {
    constructor() {
        this.uniqueValueMap = new KeyMap();
    }
    calculate(entities, field) {
        const fieldId = field.getId();
        const optUVM = this.uniqueValueMap.find(fieldId);
        optUVM.ifEmpty(() => {
            const set = new Set();
            for (const entity of entities) {
                set.add(field.getValue(entity));
            }
            // sort
            const sortedValues = Array.from(set.values()).sort((a, b) => {
                return field.getField().sort(a, b);
            });
            const uvc = new UniqueValueCollection(sortedValues, field);
            this.uniqueValueMap.set(field.getId(), uvc);
        });
    }
    calculateAll(entities, fields) {
        for (const field of fields) {
            this.calculate(entities, field);
        }
    }
    filterAll(entities, fields) {
        let values = entities;
        for (const field of fields) {
            values = this.filter(values, field);
        }
        return values;
    }
    filter(entities, field) {
        let values = [];
        this.uniqueValueMap
            .find(field.getId())
            .ifPresent((uvc) => {
            if (uvc.isAllSelected()) {
                values = entities;
            }
            else if (uvc.isAllDisabled()) {
                values = [];
            }
            else {
                values = entities.filter((itemEntity) => {
                    for (const notSelectedValue of uvc.getNotSelected()) {
                        if (field.getField().equals(itemEntity, notSelectedValue.getValue())) {
                            return false;
                        }
                    }
                    return true;
                });
            }
        });
        return values;
    }
    selectAll(fieldId) {
        this.uniqueValueMap
            .find(fieldId)
            .ifPresent((uvc) => {
            uvc.selectAll();
        });
    }
    select(fieldId, uniqueValueId) {
        this.uniqueValueMap
            .find(fieldId)
            .ifPresent((uvc) => {
            uvc.select(uniqueValueId);
        });
    }
    unselectAll(fieldId) {
        this.uniqueValueMap
            .find(fieldId)
            .ifPresent((uvc) => {
            uvc.unselectAll();
        });
    }
    unselect(fieldId, uniqueValueId) {
        this.uniqueValueMap
            .find(fieldId)
            .ifPresent((uvc) => {
            uvc.unselect(uniqueValueId);
        });
    }
    getAll(fields) {
        const map = new Map();
        for (const field of fields) {
            this.getValues(field)
                .ifPresent((v) => {
                map.set(field.getId().toString(), v);
            });
        }
        return map;
    }
    getValues(field) {
        return this.uniqueValueMap
            .find(field.getId())
            .map((uvc) => {
            return uvc.getAll();
        });
    }
}

class StructureAggregateFactory extends AggregateFactory {
    constructor(pagingAggregateFactory, sourceManagerFactory, verticalFormationFactory, summariesManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory) {
        super();
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceManagerFactory = sourceManagerFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.summariesManagerFactory = summariesManagerFactory;
        this.filterManagerFactory = filterManagerFactory;
        this.searchManagerFactory = searchManagerFactory;
        this.fieldCollectionFactory = fieldCollectionFactory;
    }
    create(structureId) {
        const paging = this.pagingAggregateFactory.createDefault(), source = this.sourceManagerFactory.createDefault(), verticalFormation = this.verticalFormationFactory.create(structureId);
        const sorterContainer = new SorterManager(), filterContainer = this.filterManagerFactory.create(false), fieldContainer = this.fieldCollectionFactory.create(), summariesManager = this.summariesManagerFactory.create(structureId), searchManager = this.searchManagerFactory.create();
        const structureAggregate = new StructureAggregate(structureId, paging, source, verticalFormation, summariesManager, sorterContainer, filterContainer, new UniqueFilterManager(), searchManager, fieldContainer);
        this.init(structureAggregate);
        return structureAggregate;
    }
    init(structureAggregate) {
        structureAggregate.init();
    }
}
StructureAggregateFactory.services = [
    PagingManagerFactory, SourceManagerFactory, VerticalFormationFactory, SummariesManagerFactory,
    FilterManagerFactory, SearchManagerFactory, FieldCollectionFactory
];

class StructureAggregateRepository extends AggregateRepository {
}

class InMemoryStructureAggregateStore extends InMemoryAggregateStore {
    constructor(inMemoryStructureStore) {
        super(inMemoryStructureStore);
    }
}
InMemoryStructureAggregateStore.services = [InMemoryStructureStore];

class InMemoryStructureAggregateRepository extends StructureAggregateRepository {
    constructor(inMemoryStructureAggregateStore) {
        super();
        this.inMemoryStructureAggregateStore = inMemoryStructureAggregateStore;
    }
    findById(aggregateId) {
        return this.inMemoryStructureAggregateStore.findById(aggregateId);
    }
    save(aggregate) {
        this.inMemoryStructureAggregateStore.save(aggregate);
    }
}
InMemoryStructureAggregateRepository.services = [InMemoryStructureAggregateStore];

class StructureCreatedEventHandler {
    constructor(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
    }
    forEvent() {
        return StructureCreatedEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            const structureId = event.getAggregateId();
            this.summariesEnabledArchive.init(structureId);
        }
    }
}
StructureCreatedEventHandler.services = [SummariesEnabledArchive];

class StructureDomainModule {
    defineAggregate() {
        return {
            aggregateKey: structureKey,
            createCommandHandler: CreateStructureCommandHandler,
            factory: StructureAggregateFactory,
            repository: InMemoryStructureAggregateRepository
        };
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        // container.provide(ListViewDispatcher);
    }
    registerCommandHandlers() {
        return [
        // SetListViewModeCommandHandler,
        // ToggleListViewSelectorCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            StructureCreatedEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

class FilterAddedEvent extends StructureDomainEvent {
    constructor(aggregateId, fieldId, filterTypeId, value) {
        super(aggregateId, { fieldId, filterTypeId, value }, 'FilterAddedEvent');
        this.fieldId = fieldId;
        this.filterTypeId = filterTypeId;
        this.value = value;
    }
}

class InMemoryStructureRepository extends StructureReadModelRepository {
    constructor(inMemoryStructureReadStore) {
        super();
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.structureIdToStructure = new Map();
        this.hermesStructure$ = new HermesReplaySubject(1);
    }
    getStructure(structureId) {
        return this.structureIdToStructure.get(structureId.getId());
    }
    on(structureId) {
        return this.hermesStructure$
            .toObservable()
            .pipe(hermesFilter((structureIdToStructure) => {
            const key = structureId.getId();
            return structureIdToStructure.has(key);
        }), hermesMap((structureIdToStructure) => {
            return structureIdToStructure.get(structureId.getId());
        }));
    }
    forEvents() {
        return [
            StructureCreatedEvent,
            SetSourceLoadingEvent,
            PagingSetEvent,
            PrevPageEvent,
            NextPageEvent,
            PagesizeChangedEvent,
            SelectionEnabledSetEvent,
            VerticalScrollEnabledSetEvent,
            ScrollPositionSetEvent,
            SortToggledEvent,
            FilterToggledEvent,
            SearchPhraseSetDomainEvent,
            SortOrderSetEvent,
            OriginSetEvent,
            RowHeightSetEvent,
            StructureHeightSetEvent,
            RowHeightSetBasedOnThemeEvent,
            FilterAddedEvent,
            ActiveFiltersSetEvent,
            UniqueFilterSelectedEvent,
            AllUniqueFilterSelectedEvent,
            UniqueFilterUnselectedEvent,
            AllUniqueFilterUnselectedEvent
        ];
    }
    subs(event) {
        const aggregateId = event.getAggregateId();
        const optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
        optStructure.ifPresent((structureReadModelRoot) => {
            const key = structureReadModelRoot.getId().toString();
            this.structureIdToStructure.set(key, structureReadModelRoot);
            this.hermesStructure$.next(this.structureIdToStructure);
        });
    }
}
InMemoryStructureRepository.services = [InMemoryStructureReadStore];

class StructureDomainPublisher extends StructurePublisher {
    constructor(filterCommandInvoker, sourceDispatcher, verticalFormationCommandInvoker, structureCellEditArchive) {
        super();
        this.filterCommandInvoker = filterCommandInvoker;
        this.sourceDispatcher = sourceDispatcher;
        this.verticalFormationCommandInvoker = verticalFormationCommandInvoker;
        this.structureCellEditArchive = structureCellEditArchive;
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    create(structureId) {
        this.commandDispatcher.dispatch(new CreateStructureCommand(structureId));
    }
    // REMOVE
    enableVirtualScroll(structureId) {
        this.verticalFormationCommandInvoker.enableVirtualScroll(structureId);
    }
    // REMOVE
    disableVirtualScroll(structureId) {
        this.verticalFormationCommandInvoker.disableVirtualScroll(structureId);
    }
    // REMOVE
    scrollToTop(structureId) {
        this.verticalFormationCommandInvoker.scrollToTop(structureId);
    }
    // REMOVE
    scrollToBottom(structureId) {
        this.verticalFormationCommandInvoker.scrollToBottom(structureId);
    }
    // REMOVE
    scrollToIndex(index, structureId) {
        this.verticalFormationCommandInvoker.scrollToIndex(index, structureId);
    }
    // REMOVE
    setScrollPosition(position, structureId) {
        this.verticalFormationCommandInvoker.setScrollPosition(position, structureId);
    }
    setOrigin(items, structureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    setFilterConfig(config, structureId) {
        this.filterCommandInvoker.setConfig(config, structureId);
    }
    setQuickFiltersConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigQuickFilterCommand(structureId, config));
    }
    setRowHeight(rowHeight, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, +rowHeight));
    }
    // REMOVE
    setContainerHeight(height, structureId) {
        this.commandDispatcher.dispatch(new StructureSetHeightCommand(structureId, +height));
    }
    // REMOVE
    setRowHeightBasedOnTheme(theme, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightBasedOnThemeCommand(structureId, theme));
    }
    setCellEdit(cellEdit, structureId) {
        this.structureCellEditArchive.next(structureId, new CellEditorManager(cellEdit));
    }
}
StructureDomainPublisher.services = [
    FilterPublisher,
    SourceDispatcher,
    VerticalFormationPublisher,
    StructureCellEditArchive
];

class StructureApiModule {
    registerProviders(container) {
        container.provide(InMemoryStructureReadStore);
        container.provide(StructureReadModelRepository, InMemoryStructureRepository);
        container.provide(StructureAggregateFactory);
        container.provide(StructureReadModelRootConverter);
        container.provide(StructureWarehouse);
        container.provide(StructurePublisher, StructureDomainPublisher);
        container.provide(StructureInitialValuesReadyArchive);
        container.provide(InMemoryStructureAggregateStore);
        container.provide(InMemoryStructureStore);
        container.provide(StructureAggregateRepository, InMemoryStructureAggregateRepository);
        container.provide(FabricModalThemeService);
        container.provide(StructureCellEditArchive);
    }
}
const structureInitializer = new DomainInitializer(new StructureApiModule(), new StructureDomainModule());

class InMemoryListViewStore extends InMemoryStore {
}

class InMemoryListViewAggregateStore extends InMemoryAggregateStore {
    constructor(inMemorySchemaStore) {
        super(inMemorySchemaStore);
    }
}
InMemoryListViewAggregateStore.services = [InMemoryListViewStore];

class SetListViewModeCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetListViewModeCommand;
    }
    handle(listViewAggregate, command) {
        const mode = command.getMode();
        listViewAggregate.setMode(mode);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class ToggleListViewSelectorCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return ToggleListViewSelectorCommand;
    }
    handle(listViewAggregate, command) {
        const enabled = command.isEnabled();
        listViewAggregate.toggleModeSelector(enabled);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}

class ListViewModeSetEventHandler {
    constructor(listViewModeArchive) {
        this.listViewModeArchive = listViewModeArchive;
    }
    forEvent() {
        return ListViewModeSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ListViewModeSetEvent')) {
            this.listViewModeArchive.next(event.getAggregateId(), event.getTheme());
        }
    }
}
ListViewModeSetEventHandler.services = [ListViewModeArchive];

class ListViewSelectorToggledEvent extends ListViewDomainEvent {
    constructor(schemaId, enabled) {
        super(schemaId, enabled, 'ListViewSelectorToggledEvent');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}

class ListViewSelectorToggledEventHandler {
    constructor(listViewSelectorArchive) {
        this.listViewSelectorArchive = listViewSelectorArchive;
    }
    forEvent() {
        return ListViewSelectorToggledEvent;
    }
    handle(event) {
        if (event.ofMessageType('ListViewSelectorToggledEvent')) {
            this.listViewSelectorArchive.next(event.getAggregateId(), event.isEnabled());
        }
    }
}
ListViewSelectorToggledEventHandler.services = [ListViewSelectorArchive];

class CreateListViewCommandHandler {
    forCommand() {
        return CreateListViewCommand;
    }
}

class ListViewCreatedEvent extends ListViewDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'ListViewCreatedEvent');
    }
}

class ListViewAggregateEvent extends AggregateEvent {
}

class ListViewCreatedAggregateEvent extends ListViewAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'ListViewCreatedAggregateEvent');
    }
    toDomainEvent() {
        return new ListViewCreatedEvent(this.getAggregateId());
    }
}

class ListViewModeSetAggregateEvent extends ListViewAggregateEvent {
    constructor(listViewId, mode) {
        super(listViewId, 'ListViewModeSetAggregateEvent');
        this.mode = mode;
    }
    toDomainEvent() {
        return new ListViewModeSetEvent(this.getAggregateId(), this.mode);
    }
}

class SelectorVisibility {
    constructor() {
        this.enabled = null;
        this.visible = false;
    }
    isVisible() {
        if (this.enabled !== null) {
            return this.enabled;
        }
        return this.visible;
    }
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    setVisible(visible) {
        this.visible = visible;
    }
}

class ListViewSelectorToggledAggregateEvent extends ListViewAggregateEvent {
    constructor(listViewId, enabled) {
        super(listViewId, 'ListViewSelectorToggledAggregateEvent');
        this.enabled = enabled;
    }
    toDomainEvent() {
        return new ListViewSelectorToggledEvent(this.getAggregateId(), this.enabled);
    }
}

class ListViewAggregate extends AggregateRoot {
    constructor(listViewId) {
        super(listViewId, 'ListViewAggregate');
        this.setMode(ListViewMode.LIST);
        this.initSelectorVisibility();
    }
    createEvent() {
        return ListViewCreatedAggregateEvent;
    }
    setMode(mode) {
        this.mode = mode;
        this.addEvent(new ListViewModeSetAggregateEvent(this.getId(), this.mode));
    }
    toggleModeSelector(enabled) {
        this.selectorVisibility.setEnabled(enabled);
        this.emitEventAfterSelectorVisibilityChange();
    }
    initSelectorVisibility() {
        this.selectorVisibility = new SelectorVisibility();
        this.emitEventAfterSelectorVisibilityChange();
    }
    emitEventAfterSelectorVisibilityChange() {
        this.addEvent(new ListViewSelectorToggledAggregateEvent(this.getId(), this.selectorVisibility.isVisible()));
    }
}

class ListViewAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    create(id) {
        return new ListViewAggregate(id);
    }
}

class ListViewAggregateRepository extends AggregateRepository {
}

class InMemoryListViewAggregateRepository extends ListViewAggregateRepository {
    constructor(inMemorySchemaAggregateStore) {
        super();
        this.inMemorySchemaAggregateStore = inMemorySchemaAggregateStore;
    }
    findById(listViewId) {
        return this.inMemorySchemaAggregateStore.findById(listViewId);
    }
    save(listViewAggregate) {
        this.inMemorySchemaAggregateStore.save(listViewAggregate);
    }
}
InMemoryListViewAggregateRepository.services = [InMemoryListViewAggregateStore];

class ListViewDomainModule {
    defineAggregate() {
        return {
            aggregateKey: listViewKey,
            createCommandHandler: CreateListViewCommandHandler,
            factory: ListViewAggregateFactory,
            repository: InMemoryListViewAggregateRepository
        };
    }
    registerKey() {
        return listViewKey;
    }
    registerProviders(container) {
        container.provide(ListViewDispatcher);
    }
    registerCommandHandlers() {
        return [
            SetListViewModeCommandHandler,
            ToggleListViewSelectorCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            ListViewModeSetEventHandler,
            ListViewSelectorToggledEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}

const listViewKey = 'ListViewKey';
class ListViewApiModule {
    registerProviders(container) {
        container.provide(ListViewPublisher);
        container.provide(ListViewEventRepository);
        container.provide(ListViewWarehouse);
        container.provide(ListViewModeArchive);
        container.provide(ListViewSelectorArchive);
        container.provide(InMemoryListViewAggregateStore);
        container.provide(InMemoryListViewStore);
    }
}
const listViewInitializer = new DomainInitializer(new ListViewApiModule(), new ListViewDomainModule());

function provideStructureCommandInvoker() {
    return CoreContainer.resolve(StructurePublisher);
}
function provideStructureWarehouse() {
    return CoreContainer.resolve(StructureWarehouse);
}
function provideStructureInitialValuesReadyArchive() {
    return CoreContainer.resolve(StructureInitialValuesReadyArchive);
}
const structureProviders = [
    { provide: StructurePublisher, useFactory: provideStructureCommandInvoker },
    { provide: StructureWarehouse, useFactory: provideStructureWarehouse },
    { provide: StructureInitialValuesReadyArchive, useFactory: provideStructureInitialValuesReadyArchive }
];
function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
const icons = [
    StructureArrowIconModule,
    StructureMenuIconModule
];
const imports$1 = [
    CommonModule,
    ReactiveFormsModule,
    TranslationFeatureModule,
    HermesModule,
    // .withConfig({
    // 	loggers: false
    // }),
    fabricImports,
    ResizeDetectorModule,
    PagingFeatureModule,
    SortingFeatureModule,
    FieldFeatureModule,
    FormationFeatureModule,
    SearchFeatureModule,
    FilterMenuFeatureModule,
    SourceFeatureModule,
    SummariesFeatureModule,
    VerticalFormationFeatureModule,
    SchemaFeatureModule,
    StructureSharedModule,
    StructureInfoPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
    SchemaManagerModule,
    EmptySourceFeatureModule,
    CompositionFeatureModule,
    LoggerModule,
    SanitizeModule,
    icons
];
const declarations$1 = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderGroupsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    SelectAllComponent,
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
    structureGates
];
const entryComponents$1 = [
    StructureColumnConfigComponent,
    StructureRowDetailViewComponent
];
const exportDeclarations$1 = [
    FabricModule,
    StructureComponent,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    fabricImports,
    PagingFeatureModule,
    structureGates
];
function provideStructureCellEditArchive() {
    return CoreContainer.resolve(StructureCellEditArchive);
}
function provideFabricModalThemeService() {
    return CoreContainer.resolve(FabricModalThemeService);
}
listViewInitializer.init();
structureInitializer.init();
class GridViewFeatureModule {
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window[GridViewFeatureModule.HERMES_API].loggers = false;
        }
    }
    static withConfig(structureConfig = {
        cssClassName: '',
        hermesModuleConfig: { loggers: false }
    }) {
        return {
            ngModule: GridViewFeatureModule,
            providers: [
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
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
                StructureIdGenerator,
                { provide: StructureCellEditArchive, useFactory: provideStructureCellEditArchive },
                { provide: FabricModalThemeService, useFactory: provideFabricModalThemeService },
                structureProviders
            ]
        };
    }
}
GridViewFeatureModule.HERMES_API = 'hermesApi';
GridViewFeatureModule.exportDeclarations = Array.from(exportDeclarations$1);
GridViewFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.NgModule });
GridViewFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, declarations: [StructureComponent,
        StructureHeaderComponent,
        StructureHeaderColumnsComponent,
        StructureHeaderGroupsComponent,
        StructureHeaderFiltersComponent,
        StructureHeaderFilterComponent,
        SelectAllComponent,
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
        StructureFooterPanelComponent, StructureColumnHeaderGate, StructurePagingGate, StructureSearchingGate, StructureSelectionGate, StructureL10nGate, StructurePanelGate, StructureRowDetailGate, StructureColumnMenuGate, StructureSummariesGate, StructureInfoPanelGate, StructureRowClassGate, StructureRowStyleGate, StructureRowColoringGate, ThemeGridGate, StructureSortingGate, SourceLoadingGate, StructureFilterGate, StructureQuickFiltersGate, VerticalFormationGate], imports: [CommonModule,
        ReactiveFormsModule,
        TranslationFeatureModule,
        HermesModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, ResizeDetectorModule,
        PagingFeatureModule,
        SortingFeatureModule,
        FieldFeatureModule,
        FormationFeatureModule,
        SearchFeatureModule,
        FilterMenuFeatureModule,
        SourceFeatureModule,
        SummariesFeatureModule,
        VerticalFormationFeatureModule,
        SchemaFeatureModule,
        StructureSharedModule,
        StructureInfoPanelModule,
        StructureTopPanelModule,
        StructureColumnMenuModule,
        StructureColumnManagerModule,
        SchemaManagerModule,
        EmptySourceFeatureModule,
        CompositionFeatureModule,
        LoggerModule,
        SanitizeModule, StructureArrowIconModule,
        StructureMenuIconModule], exports: [FabricModule,
        StructureComponent,
        StructureHeaderComponent,
        StructureContentComponent,
        StructureRowComponent,
        StructureContainerComponent, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, PagingFeatureModule, StructureColumnHeaderGate, StructurePagingGate, StructureSearchingGate, StructureSelectionGate, StructureL10nGate, StructurePanelGate, StructureRowDetailGate, StructureColumnMenuGate, StructureSummariesGate, StructureInfoPanelGate, StructureRowClassGate, StructureRowStyleGate, StructureRowColoringGate, ThemeGridGate, StructureSortingGate, SourceLoadingGate, StructureFilterGate, StructureQuickFiltersGate, VerticalFormationGate] });
GridViewFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, imports: [imports$1, FabricModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, PagingFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        imports$1
                    ],
                    declarations: declarations$1,
                    exports: exportDeclarations$1,
                    entryComponents: entryComponents$1
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

const imports = [
    CommonModule,
    ListViewFeatureModule,
    GridViewFeatureModule.withConfig({
        cssClassName: 'list',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
const declarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
];
const providers = [];
const exportDeclarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
];
const entryComponents = [];
class GuiListModule {
    static forRoot() {
        return {
            ngModule: GuiListModule,
            providers: providers
        };
    }
    static forChild() {
        return {
            ngModule: GuiListModule,
            providers: []
        };
    }
}
GuiListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GuiListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: GuiListModule, declarations: [GuiListComponent,
        GuiListItemComponent,
        GuiListCardComponent], imports: [CommonModule,
        ListViewFeatureModule, GridViewFeatureModule], exports: [GuiListComponent,
        GuiListItemComponent,
        GuiListCardComponent] });
GuiListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListModule, imports: [imports] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports,
                    declarations,
                    exports: exportDeclarations,
                    entryComponents
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { GuiListCardComponent, GuiListComponent, GuiListDefaultTranslation, GuiListFieldType, GuiListItemComponent, GuiListMode, GuiListModule, StructureComponent };
//# sourceMappingURL=generic-ui-ngx-list.mjs.map
