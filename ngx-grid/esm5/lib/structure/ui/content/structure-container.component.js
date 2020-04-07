/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, NgZone, Optional, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { ResizeDetector } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../domain/structure.id';
import { StructureCommandDispatcher } from '../../ui-api/structure/structure.command-dispatcher';
import { StructureReadModelWarehouse } from '../../ui-api/structure/structure.read-model-warehouse';
import { StructureSourceReadModelWarehouse } from '../../ui-api/source/structure-source.read-model-warehouse';
import { CompositionCommandDispatcher } from '../../../composition/ui-api/composition.command-dispatcher';
import { CompositionReadModelWarehouse } from '../../../composition/ui-api/composition.read-model-warehouse';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { structureParentComponent } from '../structure-parent-component';
var StructureContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContainerComponent, _super);
    function StructureContainerComponent(elementRef, renderer, changeDetectorRef, ngZone, structureId, structureCommandService, structureReadModelService, sourceReadModelService, compositionCommandService, compositionReadModelService, formationReadModelService, resizeDetector, structureParent) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this.ngZone = ngZone;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.structureReadModelService = structureReadModelService;
        _this.sourceReadModelService = sourceReadModelService;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.formationReadModelService = formationReadModelService;
        _this.resizeDetector = resizeDetector;
        _this.structureParent = structureParent;
        _this.columns = [];
        _this.source = [];
        _this.autoResizeWidthEnabled = false;
        _this.scrollObservation$ = new Subject();
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
        combineLatest(this.sourceReadModelService.onEntities(), this.structureReadModelService.onContainerHeight())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} combine
         * @return {?}
         */
        function (combine) {
            /** @type {?} */
            var source = combine[0];
            /** @type {?} */
            var containerHeight = combine[1];
            _this.source = source;
            _this.setContainerHeight(containerHeight);
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionReadModelService
            .onTemplateColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.columns = columns;
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionReadModelService
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
        this.compositionReadModelService
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.renderer.setStyle(_this.sourceCollectionRef.nativeElement, 'width', width + 'px');
        }));
        this.structureReadModelService
            .onVerticalScrollEnabled()
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
        this.structureReadModelService
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
    };
    /**
     * @return {?}
     */
    StructureContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this.resizeDetector.destroy(this.elementRef.nativeElement);
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
        this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.height + 'px');
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
        this.renderer.setStyle(this.sourceCollectionRef.nativeElement, 'padding-top', topMargin + 'px');
        this.renderer.setStyle(this.sourceCollectionRef.nativeElement, 'height', sourceHeight + 'px');
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
            this.compositionCommandService.setContainerWidth(width);
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
            fromEvent(_this.elementRef.nativeElement, 'scroll')
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
    StructureContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-container',
                    template: "<div #sourceCollection\n\t class=\"gui-structure-container\">\n\n\t<gui-structure-content [columns]=\"columns\"\n\t\t\t\t\t\t   [source]=\"source\">\n\t</gui-structure-content>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: StructureId },
        { type: StructureCommandDispatcher },
        { type: StructureReadModelWarehouse },
        { type: StructureSourceReadModelWarehouse },
        { type: CompositionCommandDispatcher },
        { type: CompositionReadModelWarehouse },
        { type: FormationReadModelService },
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
    StructureContainerComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.formationReadModelService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFHTixRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzlHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxN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MEs5RDtTQTFLWSwyQkFBMkI7OztJQUV2QywwREFDZ0M7O0lBRWhDLDhDQUE4Qzs7SUFFOUMsNkNBQStCOztJQUUvQiw2Q0FBZTs7SUFFZixrREFBK0I7Ozs7O0lBRS9CLDZEQUFnRDs7Ozs7SUFFaEQseURBQTJDOzs7OztJQUUvQixpREFBOEI7Ozs7O0lBQ3ZDLCtDQUEyQjs7Ozs7SUFDM0Isd0RBQTRDOzs7OztJQUM1Qyw2Q0FBc0I7Ozs7O0lBQ3RCLGtEQUFnQzs7Ozs7SUFDaEMsOERBQTJEOzs7OztJQUMzRCxnRUFBOEQ7Ozs7O0lBQzlELDZEQUFpRTs7Ozs7SUFDakUsZ0VBQStEOzs7OztJQUMvRCxrRUFBa0U7Ozs7O0lBQ2xFLGdFQUE0RDs7Ozs7SUFDNUQscURBQXNDOzs7OztJQUN0QyxzREFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHROZ1pvbmUsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRPcHRpb25hbCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVzaXplRGV0ZWN0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZG9tYWluL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbnRhaW5lcicsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ3NvdXJjZUNvbGxlY3Rpb24nLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0c291cmNlQ29sbGVjdGlvblJlZjogRWxlbWVudFJlZjtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+ID0gW107XG5cblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IFtdO1xuXG5cdGhlaWdodDogbnVtYmVyO1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRwcml2YXRlIGF1dG9SZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHNjcm9sbE9ic2VydmF0aW9uJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIG5nWm9uZTogTmdab25lLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVNvdXJjZVJlYWRNb2RlbFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgZm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZTogRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZXNpemVEZXRlY3RvcjogUmVzaXplRGV0ZWN0b3IsXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3Qoc3RydWN0dXJlUGFyZW50Q29tcG9uZW50KSBwcml2YXRlIHN0cnVjdHVyZVBhcmVudDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0Y29tYmluZUxhdGVzdChcblx0XHRcdHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZS5vbkVudGl0aWVzKCksXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2Uub25Db250YWluZXJIZWlnaHQoKVxuXHRcdClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21iaW5lOiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3Qgc291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IGNvbWJpbmVbMF0sXG5cdFx0XHRcdFx0Y29udGFpbmVySGVpZ2h0OiBudW1iZXIgPSBjb21iaW5lWzFdO1xuXG5cdFx0XHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXG5cdFx0XHRcdHRoaXMuc2V0Q29udGFpbmVySGVpZ2h0KGNvbnRhaW5lckhlaWdodCk7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25UZW1wbGF0ZUNvbHVtbnMoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4pID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblJlc2l6ZVdpZHRoKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuXHRcdC8vIHR1cm4gb24gd2hlbiBzdHJ1Y3R1cmUgaXMgcmVhZHlcblx0XHRpZiAodGhpcy5zdHJ1Y3R1cmVQYXJlbnQpIHtcblx0XHRcdHRoaXMucmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0Lm9ic2VydmUodGhpcy5zdHJ1Y3R1cmVQYXJlbnQuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpLFxuXHRcdFx0XHRcdG1hcCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGVsZW1lbnQub2Zmc2V0V2lkdGgpLFxuXHRcdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uVmVydGljYWxTY3JvbGxFbmFibGVkKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25TdHJ1Y3R1cmUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoc3RyOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0ci5pc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgdG9wTWFyZ2luID0gc3RydWN0dXJlLmdldFRvcE1hcmdpbigpLFxuXHRcdFx0XHRcdHNvdXJjZUhlaWdodCA9IHN0cnVjdHVyZS5nZXRTb3VyY2VIZWlnaHQoKTtcblxuXHRcdFx0XHR0aGlzLnNldFNvdXJjZUhlaWdodCh0b3BNYXJnaW4sIHNvdXJjZUhlaWdodCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5yZXNpemVEZXRlY3Rvci5kZXN0cm95KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XG5cdH1cblxuXHRwcml2YXRlIHNldFNvdXJjZUhlaWdodCh0b3BNYXJnaW46IG51bWJlciwgc291cmNlSGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50LCAncGFkZGluZy10b3AnLCB0b3BNYXJnaW4gKyAncHgnKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jywgc291cmNlSGVpZ2h0ICsgJ3B4Jyk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5uZ1pvbmVcblx0XHRcdC5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cblx0XHRcdFx0ZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJylcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdC8vIGF1ZGl0VGltZSgxMCksXG5cdFx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQpLFxuXHRcdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHNjcm9sbFRvcCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3A7XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQubmV4dCgpO1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLmNvbXBsZXRlKCk7XG5cdH1cblxufVxuIl19