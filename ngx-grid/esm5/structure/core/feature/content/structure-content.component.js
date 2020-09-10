/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { combineLatest } from 'rxjs';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FormationCommandInvoker } from '../../../source/domain-api/formation/formation.command-invoker';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationWarehouse } from '../../../source/domain-api/formation/formation.warehouse';
import { VerticalFormationRepository } from '../../domain-api/vertical-formation/vertical-formation.repository';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { StructureId } from '../../domain/structure.id';
import { SearchPhraseRepository } from '../../../search/domain-api/phrase/search-phrase.repository';
import { SearchHighlightArchive } from '../../../search/domain-api/highlight/search-highlight.archive';
import { StructureVerticalFormationWarehouse } from '../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
import { RowSelectionTypeArchive } from '../../../source/domain-api/formation/type/row-selection-type.archive';
import { RowSelectionType } from '../../../source/domain-api/row-selection';
import { RowSelectToggleType } from '../../../source/domain/formation/core/row-select-toggle-type';
var StructureContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContentComponent, _super);
    function StructureContentComponent(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationWarehouse, structureWarehouse, structureVerticalFormationWarehouse, verticalFormationRepository, structureId, // REfactor
    rowSelectionTypeArchive, structureSearchPhraseRepository, structureSearchHighlightArchive) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formationCommandService = formationCommandService;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.formationWarehouse = formationWarehouse;
        _this.structureWarehouse = structureWarehouse;
        _this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        _this.verticalFormationRepository = verticalFormationRepository;
        _this.structureId = structureId;
        _this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        _this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        _this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        _this.editMode = false;
        _this.cellEditing = false;
        _this.searchPhrase = '';
        _this.highlighting = true;
        _this.phrase = true;
        _this.rowDetailOpened = 4;
        _this.checkboxSelection = false;
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
        this.rowSelectionTypeArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            _this.checkboxSelection = type === RowSelectionType.CHECKBOX;
            _this.changeDetectorRef.detectChanges();
        }));
        // this.formationWarehouse
        // 	.onRowSelectedReadModel()
        // 	.pipe(
        // 		filter(() => !this.checkboxSelection),
        // 		this.takeUntil()
        // 	)
        // 	.subscribe((rowSelected: RowSelectedReadModel) => {
        //
        // 		this.clearSelectedRows();
        //
        // 		rowSelected.getAll()
        // 				   .forEach((id: string) => {
        //
        // 					   const strippedId = 'gui' + id.replace(/-/g, ''),
        // 						   selectedRowEl = this.elementRef.nativeElement.querySelector(`#${strippedId}`);
        //
        // 					   if (selectedRowEl) {
        // 						   this.renderer.addClass(selectedRowEl, 'selected');
        // 					   }
        // 				   });
        // 	});
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
        this.structureVerticalFormationWarehouse
            .onRowHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        function (rowHeight) {
            _this.rowHeight = rowHeight;
            _this.changeDetectorRef.detectChanges();
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
        if (!this.checkboxSelection) {
            this.formationCommandService.toggleSelectedRow(entity.getId(), RowSelectToggleType.NONE);
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
                    template: "<div class=\"gui-content\">\n\n\t<gui-structure-row (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [checkboxSelection]=\"checkboxSelection\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   [index]=\"index\"\n\t\t\t\t\t   [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t   [style.height.px]=\"rowHeight\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
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
        { type: FormationCommandInvoker },
        { type: StructureCellEditArchive },
        { type: StructureEditModeArchive },
        { type: FormationWarehouse },
        { type: StructureWarehouse },
        { type: StructureVerticalFormationWarehouse },
        { type: VerticalFormationRepository },
        { type: StructureId },
        { type: RowSelectionTypeArchive },
        { type: SearchPhraseRepository },
        { type: SearchHighlightArchive }
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
    StructureContentComponent.prototype.rowDetailOpened;
    /** @type {?} */
    StructureContentComponent.prototype.checkboxSelection;
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
    StructureContentComponent.prototype.formationWarehouse;
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
    StructureContentComponent.prototype.rowSelectionTypeArchive;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRTlGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw0RUFBNEUs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QXdCO2dCQUN4QixrQkFBa0I7Z0JBR2xCLGtCQUFrQjtnQkFJbEIsbUNBQW1DO2dCQUxuQywyQkFBMkI7Z0JBRTNCLFdBQVc7Z0JBSVgsdUJBQXVCO2dCQUh2QixzQkFBc0I7Z0JBQ3RCLHNCQUFzQjs7O3lCQWU3QixLQUFLOzBCQUdMLEtBQUs7O0lBNkpQLGdDQUFDO0NBQUEsQUF4S0QsQ0FNK0MsY0FBYyxHQWtLNUQ7U0FsS1kseUJBQXlCOzs7SUFFckMsMkNBQzBCOztJQUUxQiw0Q0FDeUM7O0lBRXpDLDZDQUFpQjs7SUFFakIsZ0RBQW9COztJQUVwQiw4Q0FBa0I7O0lBRWxCLGlEQUEwQjs7SUFFMUIsaURBQTZCOztJQUU3QiwyQ0FBdUI7O0lBRXZCLG9EQUFvQjs7SUFFcEIsc0RBQW1DOzs7OztJQUV2QiwrQ0FBcUQ7Ozs7O0lBQzlELDZDQUFvQzs7Ozs7SUFDcEMsK0NBQXVDOzs7OztJQUN2QyxzREFBcUQ7Ozs7O0lBQ3JELDREQUFpRTs7Ozs7SUFDakUsNkRBQW1FOzs7OztJQUNuRSw2REFBbUU7Ozs7O0lBQ25FLHVEQUF1RDs7Ozs7SUFDdkQsdURBQXVEOzs7OztJQUN2RCx3RUFBeUY7Ozs7O0lBQ3pGLGdFQUF5RTs7Ozs7SUFDekUsZ0RBQXlDOzs7OztJQUN6Qyw0REFBaUU7Ozs7O0lBQ2pFLG9FQUF3RTs7Ozs7SUFDeEUsb0VBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2RvbWFpbi1hcGkvcGhyYXNlL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2RvbWFpbi1hcGkvaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb250ZW50Jyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+O1xuXG5cdGVkaXRNb2RlID0gZmFsc2U7XG5cblx0Y2VsbEVkaXRpbmcgPSBmYWxzZTtcblxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZyA9ICcnO1xuXG5cdGhpZ2hsaWdodGluZzogYm9vbGVhbiA9IHRydWU7XG5cblx0cGhyYXNlOiBib29sZWFuID0gdHJ1ZTtcblxuXHRyb3dEZXRhaWxPcGVuZWQgPSA0O1xuXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kU2VydmljZTogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgLy8gUkVmYWN0b3Jcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeTogU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTZWFyY2hIaWdobGlnaHRBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5yb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpID0+IHtcblx0XHRcdFx0dGhpcy5jaGVja2JveFNlbGVjdGlvbiA9IHR5cGUgPT09IFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHQvLyB0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdC8vIFx0Lm9uUm93U2VsZWN0ZWRSZWFkTW9kZWwoKVxuXHRcdC8vIFx0LnBpcGUoXG5cdFx0Ly8gXHRcdGZpbHRlcigoKSA9PiAhdGhpcy5jaGVja2JveFNlbGVjdGlvbiksXG5cdFx0Ly8gXHRcdHRoaXMudGFrZVVudGlsKClcblx0XHQvLyBcdClcblx0XHQvLyBcdC5zdWJzY3JpYmUoKHJvd1NlbGVjdGVkOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdC8vXG5cdFx0Ly8gXHRcdHRoaXMuY2xlYXJTZWxlY3RlZFJvd3MoKTtcblx0XHQvL1xuXHRcdC8vIFx0XHRyb3dTZWxlY3RlZC5nZXRBbGwoKVxuXHRcdC8vIFx0XHRcdFx0ICAgLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcblx0XHQvL1xuXHRcdC8vIFx0XHRcdFx0XHQgICBjb25zdCBzdHJpcHBlZElkID0gJ2d1aScgKyBpZC5yZXBsYWNlKC8tL2csICcnKSxcblx0XHQvLyBcdFx0XHRcdFx0XHQgICBzZWxlY3RlZFJvd0VsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c3RyaXBwZWRJZH1gKTtcblx0XHQvL1xuXHRcdC8vIFx0XHRcdFx0XHQgICBpZiAoc2VsZWN0ZWRSb3dFbCkge1xuXHRcdC8vIFx0XHRcdFx0XHRcdCAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc2VsZWN0ZWRSb3dFbCwgJ3NlbGVjdGVkJyk7XG5cdFx0Ly8gXHRcdFx0XHRcdCAgIH1cblx0XHQvLyBcdFx0XHRcdCAgIH0pO1xuXHRcdC8vIFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5lZGl0TW9kZSA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5jZWxsRWRpdGluZyA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdGNvbWJpbmVMYXRlc3QoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnlcblx0XHRcdFx0Lm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlXG5cdFx0XHRcdC5vblZhbHVlKClcblx0XHQpLnBpcGUoXG5cdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0IClcblx0XHQgLnN1YnNjcmliZSgoYXJnczogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHQgY29uc3Qgc2VhcmNoUGhyYXNlID0gYXJnc1swXSxcblx0XHRcdFx0IGhpZ2hsaWdodGluZyA9IGFyZ3NbMV07XG5cblx0XHRcdCB0aGlzLmhpZ2hsaWdodGluZyA9IGhpZ2hsaWdodGluZztcblx0XHRcdCB0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZTtcblxuXHRcdFx0IGlmICghdGhpcy5oaWdobGlnaHRpbmcpIHtcblx0XHRcdFx0IHRoaXMuc2VhcmNoUGhyYXNlID0gJyc7XG5cdFx0XHQgfVxuXG5cdFx0XHQgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0IH0pO1xuXHR9XG5cblx0dHJhY2tCeUZuKCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0dHJhbnNsYXRlWShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblxuXHRcdGxldCBoZWlnaHQgPSBpbmRleCAqIHRoaXMucm93SGVpZ2h0O1xuXG5cdFx0Ly8gaWYgKGluZGV4ID4gdGhpcy5yb3dEZXRhaWxPcGVuZWQpIHtcblx0XHQvLyBcdGhlaWdodCArPSAyMDA7XG5cdFx0Ly8gfVxuXG5cdFx0cmV0dXJuIGB0cmFuc2xhdGVZKCR7aGVpZ2h0fXB4KWA7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3Rpb24pIHtcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UudG9nZ2xlU2VsZWN0ZWRSb3coZW50aXR5LmdldElkKCksIFJvd1NlbGVjdFRvZ2dsZVR5cGUuTk9ORSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjbGVhclNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZEVsZW1lbnRzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJyk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0c2VsZWN0ZWRFbGVtZW50cy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsICdzZWxlY3RlZCcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19