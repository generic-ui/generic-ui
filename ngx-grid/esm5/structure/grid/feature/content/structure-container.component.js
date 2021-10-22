/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, NgZone, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FormationWarehouse } from '../../../source/core/api/formation/formation.warehouse';
import { structureParentComponent } from '../structure-parent-component';
import { VerticalFormationWarehouse } from '../../../vertical-formation/core/api/vertical-formation.warehouse';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
import { fromRxJsObservable, hermesDistinctUntilChanged, hermesFilter, hermesFromEvent, hermesMap, HermesSubject, hermesTakeUntil, toRxJsObservable } from '@generic-ui/hermes';
import { StructureInitialValuesReadyArchive } from '../../../core/api/structure.initial-values-ready.archive';
import { ResizeDetector } from '../../../../common/cdk/resize-detector/resize.detector';
import { CompositionId } from '../../../../composition/core/api/composition.id';
var StructureContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContainerComponent, _super);
    function StructureContainerComponent(changeDetectorRef, elRef, ngZone, structureId, compositionId, structureCommandService, structureWarehouse, verticalFormationWarehouse, sourceWarehouse, compositionCommandInvoker, compositionWarehouse, formationWarehouse, resizeDetector, structureInitialValuesReadyArchive, structureParent) {
        var _this = _super.call(this, changeDetectorRef, elRef) || this;
        _this.elRef = elRef;
        _this.ngZone = ngZone;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.structureCommandService = structureCommandService;
        _this.structureWarehouse = structureWarehouse;
        _this.verticalFormationWarehouse = verticalFormationWarehouse;
        _this.sourceWarehouse = sourceWarehouse;
        _this.compositionCommandInvoker = compositionCommandInvoker;
        _this.compositionWarehouse = compositionWarehouse;
        _this.formationWarehouse = formationWarehouse;
        _this.resizeDetector = resizeDetector;
        _this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        _this.structureParent = structureParent;
        _this.columns = [];
        _this.source = [];
        _this.autoResizeWidthEnabled = false;
        _this.scrollObservation$ = new HermesSubject();
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
        this.hermesSubscribeWithoutRender(this.verticalFormationWarehouse.onContainerHeight(this.structureId), (/**
         * @param {?} containerHeight
         * @return {?}
         */
        function (containerHeight) {
            _this.setContainerHeight(containerHeight);
        }));
        this.hermesSubscribe(fromRxJsObservable(toRxJsObservable(this.structureInitialValuesReadyArchive.once(this.structureId))
            .pipe(flatMap((/**
         * @return {?}
         */
        function () {
            return combineLatest(toRxJsObservable(_this.sourceWarehouse.onEntities(_this.structureId)), toRxJsObservable(_this.compositionWarehouse.onTemplateColumns(_this.compositionId)));
        })))), (/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) {
            _this.source = (/** @type {?} */ (arr[0]));
            _this.columns = (/** @type {?} */ (arr[1]));
        }));
        this.hermesSubscribeWithoutRender(this.compositionWarehouse.onResizeWidth(this.compositionId), (/**
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
            this.hermesSubscribeWithoutRender(this.resizeDetector
                .on(this.structureParent.getElementRef().nativeElement)
                .pipe(hermesFilter((/**
             * @return {?}
             */
            function () { return _this.autoResizeWidthEnabled; })), hermesMap((/**
             * @param {?} size
             * @return {?}
             */
            function (size) { return size.width; })), hermesDistinctUntilChanged()), (/**
             * @param {?} width
             * @return {?}
             */
            function (width) {
                _this.recalculateContainer(width);
            }));
        }
        this.hermesSubscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.styleModifier.getElement(_this.sourceCollectionRef.nativeElement).setWidth(width);
        }));
        this.hermesSubscribeWithoutRender(this.verticalFormationWarehouse.onVerticalScrollEnabled(this.structureId), (/**
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
        this.hermesSubscribeWithoutRender(this.structureWarehouse
            .on(this.structureId)
            .pipe(hermesFilter((/**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            return str.isVerticalScrollEnabled();
        }))), (/**
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
        this.hermesSubscribeWithoutRender(this.verticalFormationWarehouse.onScrollBarPosition(this.structureId), (/**
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
            this.compositionCommandInvoker.setContainerWidth(width, this.compositionId);
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
            hermesFromEvent(_this.elRef.nativeElement, 'scroll')
                .pipe(hermesTakeUntil(_this.scrollObservation$))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var scrollTop = event.target.scrollTop;
                _this.structureCommandService.setScrollPosition(scrollTop, _this.structureId);
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
        { type: CompositionId },
        { type: StructureCommandInvoker },
        { type: StructureWarehouse },
        { type: VerticalFormationWarehouse },
        { type: SourceWarehouse },
        { type: CompositionCommandInvoker },
        { type: CompositionWarehouse },
        { type: FormationWarehouse },
        { type: ResizeDetector },
        { type: StructureInitialValuesReadyArchive },
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
    StructureContainerComponent.prototype.compositionId;
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
    StructureContainerComponent.prototype.verticalFormationWarehouse;
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
    StructureContainerComponent.prototype.structureInitialValuesReadyArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureParent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFHTixRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENB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OztJQUN2RCxpRUFBdUU7Ozs7O0lBQ3ZFLHNEQUFpRDs7Ozs7SUFDakQsZ0VBQXFFOzs7OztJQUNyRSwyREFBMkQ7Ozs7O0lBQzNELHlEQUF1RDs7Ozs7SUFDdkQscURBQStDOzs7OztJQUMvQyx5RUFBdUY7Ozs7O0lBQ3ZGLHNEQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdE5nWm9uZSxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE9wdGlvbmFsLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmxhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3R5bGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcbmltcG9ydCB7XG5cdGZyb21SeEpzT2JzZXJ2YWJsZSxcblx0aGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQsXG5cdGhlcm1lc0ZpbHRlcixcblx0aGVybWVzRnJvbUV2ZW50LFxuXHRoZXJtZXNNYXAsXG5cdEhlcm1lc1N1YmplY3QsXG5cdGhlcm1lc1Rha2VVbnRpbCxcblx0dG9SeEpzT2JzZXJ2YWJsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pbml0aWFsLXZhbHVlcy1yZWFkeS5hcmNoaXZlJztcbmltcG9ydCB7IE9ic2VydmVkU2l6ZSwgUmVzaXplRGV0ZWN0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb250YWluZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdzb3VyY2VDb2xsZWN0aW9uJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHNvdXJjZUNvbGxlY3Rpb25SZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiA9IFtdO1xuXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT4gPSBbXTtcblxuXHRoZWlnaHQ6IG51bWJlcjtcblxuXHRyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0cHJpdmF0ZSBhdXRvUmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzY3JvbGxPYnNlcnZhdGlvbiQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbmdab25lOiBOZ1pvbmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZXNpemVEZXRlY3RvcjogUmVzaXplRGV0ZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZTogU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSxcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQpIHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUGFyZW50OiBhbnkpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uub25Db250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoY29udGFpbmVySGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zZXRDb250YWluZXJIZWlnaHQoY29udGFpbmVySGVpZ2h0KTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHRmcm9tUnhKc09ic2VydmFibGUoXG5cdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5zdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlLm9uY2UodGhpcy5zdHJ1Y3R1cmVJZCkpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRmbGF0TWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmVMYXRlc3QoXG5cdFx0XHRcdFx0XHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLnNvdXJjZVdhcmVob3VzZS5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpKSxcblx0XHRcdFx0XHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25UZW1wbGF0ZUNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKSlcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdChhcnI6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IGFyclswXSBhcyBBcnJheTxJdGVtRW50aXR5Pjtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gYXJyWzFdIGFzIEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25SZXNpemVXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHQvLyB0dXJuIG9uIHdoZW4gc3RydWN0dXJlIGlzIHJlYWR5XG5cdFx0aWYgKHRoaXMuc3RydWN0dXJlUGFyZW50KSB7XG5cblx0XHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdFx0dGhpcy5yZXNpemVEZXRlY3RvclxuXHRcdFx0XHRcdC5vbih0aGlzLnN0cnVjdHVyZVBhcmVudC5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudClcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdGhlcm1lc0ZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpLFxuXHRcdFx0XHRcdFx0aGVybWVzTWFwKChzaXplOiBPYnNlcnZlZFNpemUpID0+IHNpemUud2lkdGgpLFxuXHRcdFx0XHRcdFx0aGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkNvbnRhaW5lcldpZHRoKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCkuc2V0V2lkdGgod2lkdGgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uVmVydGljYWxTY3JvbGxFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVdhcmVob3VzZVxuXHRcdFx0XHQub24odGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0aGVybWVzRmlsdGVyKChzdHI6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBzdHIuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0KHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHRvcE1hcmdpbiA9IHN0cnVjdHVyZS5nZXRUb3BNYXJnaW4oKSxcblx0XHRcdFx0XHRzb3VyY2VIZWlnaHQgPSBzdHJ1Y3R1cmUuZ2V0U291cmNlSGVpZ2h0KCk7XG5cblx0XHRcdFx0dGhpcy5zZXRTb3VyY2VIZWlnaHQodG9wTWFyZ2luLCBzb3VyY2VIZWlnaHQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uU2Nyb2xsQmFyUG9zaXRpb24odGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoc2Nyb2xsUG9zaXRpb246IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxQb3NpdGlvbjtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLnJlc2l6ZURldGVjdG9yLmRlc3Ryb3kodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5zZXRIZWlnaHQoaGVpZ2h0KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U291cmNlSGVpZ2h0KHRvcE1hcmdpbjogbnVtYmVyLCBzb3VyY2VIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50KS5zZXRQYWRkaW5nVG9wKHRvcE1hcmdpbik7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQpLnNldEhlaWdodChzb3VyY2VIZWlnaHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldENvbnRhaW5lcldpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5uZ1pvbmVcblx0XHRcdC5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cblx0XHRcdFx0aGVybWVzRnJvbUV2ZW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRoZXJtZXNUYWtlVW50aWwodGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQpLFxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHNjcm9sbFRvcCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3A7XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQubmV4dCgpO1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbnRhaW5lcic7XG5cdH1cblxufVxuIl19