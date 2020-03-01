/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FormationCommandService } from '../../ui-api/formation/formation-command.service';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { VerticalFormationRepository } from '../../domain/structure/read/vertical-formation/vertical-formation.repository';
import { StructureReadModelService } from '../../ui-api/structure/structure-read-model.service';
import { StructureRowSelectEnabledArchive } from './row/structure.row-select-enabled.archive';
import { StructureId } from '../../domain/structure-id';
import { StructureSearchPhraseRepository } from '../../domain/structure/read/searching/phrase/structure.search-phrase.repository';
import { StructureSearchHighlightArchive } from '../../domain/structure/read/searching/highlight/structure.search-highlight.archive';
import { combineLatest } from 'rxjs';
var StructureContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContentComponent, _super);
    function StructureContentComponent(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationQueryService, structureReadModelService, structureRowSelectEnabledArchive, verticalFormationRepository, structureId, // REfactor
    structureSearchPhraseRepository, structureSearchHighlightArchive) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formationCommandService = formationCommandService;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.formationQueryService = formationQueryService;
        _this.structureReadModelService = structureReadModelService;
        _this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        _this.verticalFormationRepository = verticalFormationRepository;
        _this.structureId = structureId;
        _this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        _this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        _this.editMode = false;
        _this.cellEditing = false;
        _this.searchPhrase = '';
        _this.highlighting = true;
        _this.phrase = true;
        _this.rowSelecting = StructureRowSelectEnabledArchive.DEFAULT_ROW_SELECT;
        _this.rowDetailOpened = 4;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formationQueryService
            .onSelectedRows()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowsList
         * @return {?}
         */
        function (rowsList) {
            _this.clearSelectedRows();
            rowsList.getIds().forEach((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /** @type {?} */
                var strippedId = 'gui' + id.replace(/-/g, '');
                /** @type {?} */
                var selectedRowEl = _this.elementRef.nativeElement.querySelector("#" + strippedId);
                if (selectedRowEl) {
                    _this.renderer.addClass(selectedRowEl, 'selected');
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
        function (enabled) {
            _this.editMode = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureCellEditArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.cellEditing = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        function (rowHeight) {
            _this.rowHeight = rowHeight;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureRowSelectEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowSelecting
         * @return {?}
         */
        function (rowSelecting) {
            _this.rowSelecting = rowSelecting;
        }));
        combineLatest(this.structureSearchPhraseRepository
            .onPhrase(this.structureId), this.structureSearchHighlightArchive
            .onValue()).pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} args
         * @return {?}
         */
        function (args) {
            /** @type {?} */
            var searchPhrase = args[0];
            /** @type {?} */
            var highlighting = args[1];
            _this.highlighting = highlighting;
            _this.searchPhrase = searchPhrase;
            if (!_this.highlighting) {
                _this.searchPhrase = '';
            }
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureContentComponent.prototype.trackByFn = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StructureContentComponent.prototype.translateY = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var height = index * this.rowHeight;
        // if (index > this.rowDetailOpened) {
        // 	height += 200;
        // }
        return "translateY(" + height + "px)";
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    StructureContentComponent.prototype.toggleSelectedRow = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        if (this.rowSelecting) {
            this.formationCommandService.toggleSelectedRow(((/** @type {?} */ (entity))).id);
        }
    };
    /**
     * @private
     * @return {?}
     */
    StructureContentComponent.prototype.clearSelectedRows = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedElements = this.elementRef.nativeElement.querySelectorAll('.selected');
        if (isPlatformBrowser(this.platformId)) {
            selectedElements.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                _this.renderer.removeClass(el, 'selected');
            }));
        }
    };
    StructureContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-content',
                    template: "<div class=\"gui-content\">\n\n\t<gui-structure-row (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t   [index]=\"index\"\n\t\t\t\t\t   [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [style.height.px]=\"rowHeight\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureContentComponent.ctorParameters = function () { return [
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
    ]; };
    StructureContentComponent.propDecorators = {
        source: [{ type: Input }],
        columns: [{ type: Input }]
    };
    return StructureContentComponent;
}(SmartComponent));
export { StructureContentComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUdoRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUMzSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDbEksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDckksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdyQztJQU0rQyxxREFBYztJQXdCNUQsbUNBQXlDLFVBQWUsRUFDN0MsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCx3QkFBa0QsRUFDbEQsd0JBQWtELEVBQ2xELHFCQUFnRCxFQUNoRCx5QkFBb0QsRUFDcEQsZ0NBQWtFLEVBQ2xFLDJCQUF3RCxFQUN4RCxXQUF3QixFQUFFLFdBQVc7SUFDckMsK0JBQWdFLEVBQ2hFLCtCQUFnRTtRQWIzRSxZQWNDLGlCQUFPLFNBQ1A7UUFmd0MsZ0JBQVUsR0FBVixVQUFVLENBQUs7UUFDN0MsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBMkI7UUFDaEQsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCxzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2xFLGlDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFDeEQsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUNBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQUNoRSxxQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO1FBN0IzRSxjQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXBCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsa0JBQVksR0FBRyxnQ0FBZ0MsQ0FBQyxrQkFBa0IsQ0FBQztRQUVuRSxxQkFBZSxHQUFHLENBQUMsQ0FBQzs7SUFpQnBCLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFBQSxpQkFtRkM7UUFqRkEsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxRQUEwQjtZQUVyQyxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUV6QixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsRUFBVTs7b0JBRTlCLFVBQVUsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDOztvQkFDOUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFJLFVBQVksQ0FBQztnQkFFOUUsSUFBSSxhQUFhLEVBQUU7b0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDbEQ7WUFDRixDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHdCQUF3QjthQUMzQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQWdCO1lBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyx3QkFBd0I7YUFDM0IsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUMzQixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUMzQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMseUJBQXlCO2FBQzVCLFdBQVcsRUFBRTthQUNiLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsU0FBaUI7WUFDNUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGdDQUFnQzthQUNuQyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFlBQXFCO1lBQ2hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO1FBRUosYUFBYSxDQUNaLElBQUksQ0FBQywrQkFBK0I7YUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDNUIsSUFBSSxDQUFDLCtCQUErQjthQUNsQyxPQUFPLEVBQUUsQ0FDWCxDQUFDLElBQUksQ0FDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2Y7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFnQjs7Z0JBRXJCLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFdEIsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFFakMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2FBQ3ZCO1lBRUQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDZDQUFTOzs7SUFBVDtRQUNDLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7SUFFRCw4Q0FBVTs7OztJQUFWLFVBQVcsS0FBYTs7WUFFbkIsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUztRQUVuQyxzQ0FBc0M7UUFDdEMsa0JBQWtCO1FBQ2xCLElBQUk7UUFFSixPQUFPLGdCQUFjLE1BQU0sUUFBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQscURBQWlCOzs7O0lBQWpCLFVBQWtCLE1BQWtCO1FBQ25DLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxxREFBaUI7Ozs7SUFBekI7UUFBQSxpQkFTQzs7WUFSTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFFcEYsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsZ0JBQWdCLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsRUFBTztnQkFDaEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLENBQUMsRUFBQyxDQUFDO1NBQ0g7SUFFRixDQUFDOztnQkFsS0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGt3QkFBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0RBeUJhLE1BQU0sU0FBQyxXQUFXO2dCQXJEL0IsU0FBUztnQkFMVCxVQUFVO2dCQUZWLGlCQUFpQjtnQkFlVCx1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsd0JBQXdCO2dCQUN4Qix5QkFBeUI7Z0JBSXpCLHlCQUF5QjtnQkFDekIsZ0NBQWdDO2dCQUZoQywyQkFBMkI7Z0JBRzNCLFdBQVc7Z0JBQ1gsK0JBQStCO2dCQUMvQiwrQkFBK0I7Ozt5QkFZdEMsS0FBSzswQkFHTCxLQUFLOztJQXlKUCxnQ0FBQztDQUFBLEFBcEtELENBTStDLGNBQWMsR0E4SjVEO1NBOUpZLHlCQUF5Qjs7O0lBRXJDLDJDQUMwQjs7SUFFMUIsNENBQ3lDOztJQUV6Qyw2Q0FBaUI7O0lBRWpCLGdEQUFvQjs7SUFFcEIsOENBQWtCOztJQUVsQixpREFBMEI7O0lBRTFCLGlEQUE2Qjs7SUFFN0IsMkNBQXVCOztJQUV2QixpREFBbUU7O0lBRW5FLG9EQUFvQjs7Ozs7SUFFUiwrQ0FBNEM7Ozs7O0lBQ3JELDZDQUEyQjs7Ozs7SUFDM0IsK0NBQThCOzs7OztJQUM5QixzREFBNEM7Ozs7O0lBQzVDLDREQUF3RDs7Ozs7SUFDeEQsNkRBQTBEOzs7OztJQUMxRCw2REFBMEQ7Ozs7O0lBQzFELDBEQUF3RDs7Ozs7SUFDeEQsOERBQTREOzs7OztJQUM1RCxxRUFBMEU7Ozs7O0lBQzFFLGdFQUFnRTs7Ozs7SUFDaEUsZ0RBQWdDOzs7OztJQUNoQyxvRUFBd0U7Ozs7O0lBQ3hFLG9FQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPbkluaXQsXG5cdFBMQVRGT1JNX0lELFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd3NMaXN0IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9yZWFkL3NlbGVjdGVkLXJvd3Mvc2VsZWN0ZWQtcm93cy1saXN0JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vcm93L3N0cnVjdHVyZS5yb3ctc2VsZWN0LWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvcGhyYXNlL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvaGlnaGxpZ2h0L3N0cnVjdHVyZS5zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGVudCcsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRlZGl0TW9kZSA9IGZhbHNlO1xuXG5cdGNlbGxFZGl0aW5nID0gZmFsc2U7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0c2VhcmNoUGhyYXNlOiBzdHJpbmcgPSAnJztcblxuXHRoaWdobGlnaHRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHBocmFzZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cm93U2VsZWN0aW5nID0gU3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmUuREVGQVVMVF9ST1dfU0VMRUNUO1xuXG5cdHJvd0RldGFpbE9wZW5lZCA9IDQ7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBmb3JtYXRpb25Db21tYW5kU2VydmljZTogRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgZm9ybWF0aW9uUXVlcnlTZXJ2aWNlOiBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgLy8gUkVmYWN0b3Jcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmU6IFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZvcm1hdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uU2VsZWN0ZWRSb3dzKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dzTGlzdDogU2VsZWN0ZWRSb3dzTGlzdCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuY2xlYXJTZWxlY3RlZFJvd3MoKTtcblxuXHRcdFx0XHRyb3dzTGlzdC5nZXRJZHMoKS5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBzdHJpcHBlZElkID0gJ2d1aScgKyBpZC5yZXBsYWNlKC8tL2csICcnKSxcblx0XHRcdFx0XHRcdHNlbGVjdGVkUm93RWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzdHJpcHBlZElkfWApO1xuXG5cdFx0XHRcdFx0aWYgKHNlbGVjdGVkUm93RWwpIHtcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc2VsZWN0ZWRSb3dFbCwgJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuZWRpdE1vZGUgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2VsbEVkaXRpbmcgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Sb3dIZWlnaHQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd0hlaWdodDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd1NlbGVjdGluZzogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd1NlbGVjdGluZyA9IHJvd1NlbGVjdGluZztcblx0XHRcdH0pO1xuXG5cdFx0Y29tYmluZUxhdGVzdChcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeVxuXHRcdFx0XHQub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmVcblx0XHRcdFx0Lm9uVmFsdWUoKVxuXHRcdCkucGlwZShcblx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHQgKVxuXHRcdCAuc3Vic2NyaWJlKChhcmdzOiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHQgXHRjb25zdCBzZWFyY2hQaHJhc2UgPSBhcmdzWzBdLFxuXHRcdFx0XHRoaWdobGlnaHRpbmcgPSBhcmdzWzFdO1xuXG5cdFx0XHQgdGhpcy5oaWdobGlnaHRpbmcgPSBoaWdobGlnaHRpbmc7XG5cdFx0XHQgdGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cblx0XHRcdCBpZiAoIXRoaXMuaGlnaGxpZ2h0aW5nKSB7XG5cdFx0XHQgXHR0aGlzLnNlYXJjaFBocmFzZSA9ICcnO1xuXHRcdFx0IH1cblxuXHRcdFx0IHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdCB9KTtcblx0fVxuXG5cdHRyYWNrQnlGbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHRyYW5zbGF0ZVkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cblx0XHRsZXQgaGVpZ2h0ID0gaW5kZXggKiB0aGlzLnJvd0hlaWdodDtcblxuXHRcdC8vIGlmIChpbmRleCA+IHRoaXMucm93RGV0YWlsT3BlbmVkKSB7XG5cdFx0Ly8gXHRoZWlnaHQgKz0gMjAwO1xuXHRcdC8vIH1cblxuXHRcdHJldHVybiBgdHJhbnNsYXRlWSgke2hlaWdodH1weClgO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coZW50aXR5OiBJdGVtRW50aXR5KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucm93U2VsZWN0aW5nKSB7XG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNlbGVjdGVkUm93KChlbnRpdHkgYXMgYW55KS5pZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjbGVhclNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZEVsZW1lbnRzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJyk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0c2VsZWN0ZWRFbGVtZW50cy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsICdzZWxlY3RlZCcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19