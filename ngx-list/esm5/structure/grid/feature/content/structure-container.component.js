/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, NgZone, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { ResizeDetector } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { StructureCommandDispatcher } from '../../../core/api/structure.command-dispatcher';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FormationWarehouse } from '../../../source/core/api/formation/formation.warehouse';
import { structureParentComponent } from '../structure-parent-component';
import { StructureVerticalFormationWarehouse } from '../../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
var StructureContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContainerComponent, _super);
    function StructureContainerComponent(changeDetectorRef, elRef, ngZone, structureId, structureCommandService, structureWarehouse, structureVerticalFormationWarehouse, sourceWarehouse, compositionCommandInvoker, compositionWarehouse, formationWarehouse, resizeDetector, structureParent) {
        var _this = _super.call(this, changeDetectorRef, elRef) || this;
        _this.elRef = elRef;
        _this.ngZone = ngZone;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.structureWarehouse = structureWarehouse;
        _this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        _this.sourceWarehouse = sourceWarehouse;
        _this.compositionCommandInvoker = compositionCommandInvoker;
        _this.compositionWarehouse = compositionWarehouse;
        _this.formationWarehouse = formationWarehouse;
        _this.resizeDetector = resizeDetector;
        _this.structureParent = structureParent;
        _this.columns = [];
        _this.source = [];
        _this.autoResizeWidthEnabled = false;
        _this.scrollObservation$ = new Subject();
        _this.styleModifier = new StyleModifier(_this.elRef.nativeElement);
        return _this;
    }
    /**
     * @return {?}
     */
    StructureContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.structureVerticalFormationWarehouse
            .onContainerHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} containerHeight
         * @return {?}
         */
        function (containerHeight) {
            console.log(containerHeight);
            _this.setContainerHeight(containerHeight);
        }));
        combineLatest(this.sourceWarehouse.onEntities(), this.compositionWarehouse.onTemplateColumns())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) {
            _this.source = (/** @type {?} */ (arr[0]));
            _this.columns = (/** @type {?} */ (arr[1]));
            _this.reRender();
        }));
        this.compositionWarehouse
            .onResizeWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.autoResizeWidthEnabled = enabled;
        }));
    };
    /**
     * @return {?}
     */
    StructureContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        // turn on when structure is ready
        if (this.structureParent) {
            this.resizeDetector
                .observe(this.structureParent.getElementRef().nativeElement)
                .pipe(filter((/**
             * @return {?}
             */
            function () { return _this.autoResizeWidthEnabled; })), map((/**
             * @param {?} element
             * @return {?}
             */
            function (element) { return element.offsetWidth; })), distinctUntilChanged(), this.takeUntil())
                .subscribe((/**
             * @param {?} width
             * @return {?}
             */
            function (width) {
                _this.recalculateContainer(width);
            }));
        }
        this.compositionWarehouse
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.styleModifier.getElement(_this.sourceCollectionRef.nativeElement).setWidth(width);
        }));
        this.structureVerticalFormationWarehouse
            .onVerticalScrollEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            if (enabled) {
                _this.enableScrollObservation();
            }
            else {
                _this.disableScrollObservation();
            }
        }));
        this.structureWarehouse
            .onStructure()
            .pipe(filter((/**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            return str.isVerticalScrollEnabled();
        })), this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) {
            /** @type {?} */
            var topMargin = structure.getTopMargin();
            /** @type {?} */
            var sourceHeight = structure.getSourceHeight();
            _this.setSourceHeight(topMargin, sourceHeight);
        }));
        this.structureVerticalFormationWarehouse
            .onScrollBarPosition()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} scrollPosition
         * @return {?}
         */
        function (scrollPosition) {
            _this.elRef.nativeElement.scrollTop = scrollPosition;
        }));
    };
    /**
     * @return {?}
     */
    StructureContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this.resizeDetector.destroy(this.elRef.nativeElement);
    };
    /**
     * @private
     * @param {?} height
     * @return {?}
     */
    StructureContainerComponent.prototype.setContainerHeight = /**
     * @private
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.height = height;
        this.styleModifier.getHost().setHeight(height);
    };
    /**
     * @private
     * @param {?} topMargin
     * @param {?} sourceHeight
     * @return {?}
     */
    StructureContainerComponent.prototype.setSourceHeight = /**
     * @private
     * @param {?} topMargin
     * @param {?} sourceHeight
     * @return {?}
     */
    function (topMargin, sourceHeight) {
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setPaddingTop(topMargin);
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setHeight(sourceHeight);
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    StructureContainerComponent.prototype.recalculateContainer = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        if (this.autoResizeWidthEnabled) {
            this.compositionCommandInvoker.setContainerWidth(width);
        }
    };
    /**
     * @private
     * @return {?}
     */
    StructureContainerComponent.prototype.enableScrollObservation = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone
            .runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(_this.elRef.nativeElement, 'scroll')
                .pipe(
            // auditTime(10),
            takeUntil(_this.scrollObservation$), _this.takeUntil())
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var scrollTop = event.target.scrollTop;
                _this.structureCommandService.setScrollPosition(scrollTop);
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructureContainerComponent.prototype.disableScrollObservation = /**
     * @private
     * @return {?}
     */
    function () {
        this.scrollObservation$.next();
        this.scrollObservation$.complete();
    };
    /**
     * @protected
     * @return {?}
     */
    StructureContainerComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-container';
    };
    StructureContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-container]',
                    template: "<div #sourceCollection\n\t class=\"gui-h-full gui-w-full gui-absolute gui-structure-container-element\">\n\n\t<div [columns]=\"columns\" [source]=\"source\"\n\t\t gui-structure-content>\n\t</div>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone },
        { type: StructureId },
        { type: StructureCommandDispatcher },
        { type: StructureWarehouse },
        { type: StructureVerticalFormationWarehouse },
        { type: SourceWarehouse },
        { type: CompositionCommandInvoker },
        { type: CompositionWarehouse },
        { type: FormationWarehouse },
        { type: ResizeDetector },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [structureParentComponent,] }] }
    ]; };
    StructureContainerComponent.propDecorators = {
        sourceCollectionRef: [{ type: ViewChild, args: ['sourceCollection', { static: false },] }]
    };
    return StructureContainerComponent;
}(SmartComponent));
export { StructureContainerComponent };
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
    StructureContainerComponent.prototype.styleModifier;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.elRef;
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
    StructureContainerComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureVerticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.sourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.formationWarehouse;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFHTixRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtC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QUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQXRDQSxpQkFBaUI7Z0JBRWpCLFVBQVU7Z0JBRVYsTUFBTTtnQkFlRSxXQUFXO2dCQUNYLDBCQUEwQjtnQkFDMUIsa0JBQWtCO2dCQVFsQixtQ0FBbUM7Z0JBUG5DLGVBQWU7Z0JBQ2YseUJBQXlCO2dCQUN6QixvQkFBb0I7Z0JBQ3BCLGtCQUFrQjtnQkFYbEIsY0FBYztnREF3RGxCLFFBQVEsWUFBSSxNQUFNLFNBQUMsd0JBQXdCOzs7c0NBN0I5QyxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQXVMakQsa0NBQUM7Q0FBQSxBQS9MRCxDQU1pRCxjQUFjLEdBeUw5RDtTQXpMWSwyQkFBMkI7OztJQUV2QywwREFDZ0M7O0lBRWhDLDhDQUE4Qzs7SUFFOUMsNkNBQStCOztJQUUvQiw2Q0FBZTs7SUFFZixrREFBK0I7Ozs7O0lBRS9CLDZEQUFnRDs7Ozs7SUFFaEQseURBQTJDOzs7OztJQUUzQyxvREFBOEM7Ozs7O0lBRzNDLDRDQUFrQzs7Ozs7SUFDbEMsNkNBQStCOzs7OztJQUMvQixrREFBeUM7Ozs7O0lBQ3pDLDhEQUFvRTs7Ozs7SUFDcEUseURBQXVEOzs7OztJQUN2RCwwRUFBeUY7Ozs7O0lBQ3pGLHNEQUFpRDs7Ozs7SUFDakQsZ0VBQXFFOzs7OztJQUNyRSwyREFBMkQ7Ozs7O0lBQzNELHlEQUF1RDs7Ozs7SUFDdkQscURBQStDOzs7OztJQUMvQyxzREFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHROZ1pvbmUsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRPcHRpb25hbCxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlc2l6ZURldGVjdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3R5bGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb250YWluZXJdJyxcblx0dGVtcGxhdGVVcmw6IGAuL3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdzb3VyY2VDb2xsZWN0aW9uJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHNvdXJjZUNvbGxlY3Rpb25SZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiA9IFtdO1xuXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT4gPSBbXTtcblxuXHRoZWlnaHQ6IG51bWJlcjtcblxuXHRyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0cHJpdmF0ZSBhdXRvUmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzY3JvbGxPYnNlcnZhdGlvbiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbmdab25lOiBOZ1pvbmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVzaXplRGV0ZWN0b3I6IFJlc2l6ZURldGVjdG9yLFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCkgcHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQYXJlbnQ6IGFueSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbFJlZik7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyID0gbmV3IFN0eWxlTW9kaWZpZXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uQ29udGFpbmVySGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVySGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coY29udGFpbmVySGVpZ2h0KVxuXHRcdFx0XHR0aGlzLnNldENvbnRhaW5lckhlaWdodChjb250YWluZXJIZWlnaHQpO1xuXHRcdFx0fSk7XG5cblx0XHRjb21iaW5lTGF0ZXN0KFxuXHRcdFx0dGhpcy5zb3VyY2VXYXJlaG91c2Uub25FbnRpdGllcygpLFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vblRlbXBsYXRlQ29sdW1ucygpXG5cdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGFycjogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc291cmNlID0gYXJyWzBdIGFzIEFycmF5PEl0ZW1FbnRpdHk+O1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBhcnJbMV0gYXMgQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRcdFx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblJlc2l6ZVdpZHRoKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdC8vIHR1cm4gb24gd2hlbiBzdHJ1Y3R1cmUgaXMgcmVhZHlcblx0XHRpZiAodGhpcy5zdHJ1Y3R1cmVQYXJlbnQpIHtcblx0XHRcdHRoaXMucmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0Lm9ic2VydmUodGhpcy5zdHJ1Y3R1cmVQYXJlbnQuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpLFxuXHRcdFx0XHRcdG1hcCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGVsZW1lbnQub2Zmc2V0V2lkdGgpLFxuXHRcdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQpLnNldFdpZHRoKHdpZHRoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uVmVydGljYWxTY3JvbGxFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRpZiAoZW5hYmxlZCkge1xuXHRcdFx0XHRcdHRoaXMuZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRpc2FibGVTY3JvbGxPYnNlcnZhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlV2FyZWhvdXNlXG5cdFx0XHQub25TdHJ1Y3R1cmUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoc3RyOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0ci5pc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgdG9wTWFyZ2luID0gc3RydWN0dXJlLmdldFRvcE1hcmdpbigpLFxuXHRcdFx0XHRcdHNvdXJjZUhlaWdodCA9IHN0cnVjdHVyZS5nZXRTb3VyY2VIZWlnaHQoKTtcblxuXHRcdFx0XHR0aGlzLnNldFNvdXJjZUhlaWdodCh0b3BNYXJnaW4sIHNvdXJjZUhlaWdodCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblNjcm9sbEJhclBvc2l0aW9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzY3JvbGxQb3NpdGlvbjogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFBvc2l0aW9uO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMucmVzaXplRGV0ZWN0b3IuZGVzdHJveSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRDb250YWluZXJIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0SG9zdCgpLnNldEhlaWdodChoZWlnaHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTb3VyY2VIZWlnaHQodG9wTWFyZ2luOiBudW1iZXIsIHNvdXJjZUhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQpLnNldFBhZGRpbmdUb3AodG9wTWFyZ2luKTtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCkuc2V0SGVpZ2h0KHNvdXJjZUhlaWdodCk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5uZ1pvbmVcblx0XHRcdC5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cblx0XHRcdFx0ZnJvbUV2ZW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHQvLyBhdWRpdFRpbWUoMTApLFxuXHRcdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kKSxcblx0XHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBzY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRvcCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLm5leHQoKTtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb250YWluZXInO1xuXHR9XG5cbn1cbiJdfQ==