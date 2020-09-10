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
import { StructureCommandDispatcher } from '../../domain-api/structure.command-dispatcher';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { SourceWarehouse } from '../../../source/domain-api/source.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/domain-api/composition.command-invoker';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { FormationWarehouse } from '../../../source/domain-api/formation/formation.warehouse';
import { structureParentComponent } from '../structure-parent-component';
import { StructureVerticalFormationWarehouse } from '../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
var StructureContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContainerComponent, _super);
    function StructureContainerComponent(changeDetectorRef, elementRef, renderer, ngZone, structureId, structureCommandService, structureReadModelWarehouse, structureVerticalFormationWarehouse, structureSourceWarehouse, compositionCommandService, compositionWarehouse, structureFormationWarehouse, resizeDetector, structureParent) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.ngZone = ngZone;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.structureReadModelWarehouse = structureReadModelWarehouse;
        _this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionWarehouse = compositionWarehouse;
        _this.structureFormationWarehouse = structureFormationWarehouse;
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
        this.structureVerticalFormationWarehouse
            .onContainerHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} containerHeight
         * @return {?}
         */
        function (containerHeight) {
            _this.setContainerHeight(containerHeight);
        }));
        combineLatest(this.structureSourceWarehouse.onEntities(), this.compositionWarehouse.onTemplateColumns())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) {
            _this.source = (/** @type {?} */ (arr[0]));
            _this.columns = (/** @type {?} */ (arr[1]));
            _this.render();
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
            _this.renderer.setStyle(_this.sourceCollectionRef.nativeElement, 'width', width + 'px');
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
        this.structureReadModelWarehouse
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
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFHTixRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUM5RixPQUFPLEVBQUUsd0JBQXdCLEVB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SyxFQUFFOztJQXFLakQsa0NBQUM7Q0FBQSxBQTdLRCxDQU1pRCxjQUFjLEdBdUs5RDtTQXZLWSwyQkFBMkI7OztJQUV2QywwREFDZ0M7O0lBRWhDLDhDQUE4Qzs7SUFFOUMsNkNBQStCOztJQUUvQiw2Q0FBZTs7SUFFZixrREFBK0I7Ozs7O0lBRS9CLDZEQUFnRDs7Ozs7SUFFaEQseURBQTJDOzs7OztJQUd4QyxpREFBdUM7Ozs7O0lBQ3ZDLCtDQUFvQzs7Ozs7SUFDcEMsNkNBQStCOzs7OztJQUMvQixrREFBeUM7Ozs7O0lBQ3pDLDhEQUFvRTs7Ozs7SUFDcEUsa0VBQWdFOzs7OztJQUNoRSwwRUFBeUY7Ozs7O0lBQ3pGLCtEQUEwRDs7Ozs7SUFDMUQsZ0VBQXFFOzs7OztJQUNyRSwyREFBMkQ7Ozs7O0lBQzNELGtFQUFnRTs7Ozs7SUFDaEUscURBQStDOzs7OztJQUMvQyxzREFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHROZ1pvbmUsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRPcHRpb25hbCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVzaXplRGV0ZWN0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vc3RydWN0dXJlLXBhcmVudC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbnRhaW5lcicsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ3NvdXJjZUNvbGxlY3Rpb24nLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0c291cmNlQ29sbGVjdGlvblJlZjogRWxlbWVudFJlZjtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+ID0gW107XG5cblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IFtdO1xuXG5cdGhlaWdodDogbnVtYmVyO1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRwcml2YXRlIGF1dG9SZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHNjcm9sbE9ic2VydmF0aW9uJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBuZ1pvbmU6IE5nWm9uZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVJlYWRNb2RlbFdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZXNpemVEZXRlY3RvcjogUmVzaXplRGV0ZWN0b3IsXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3Qoc3RydWN0dXJlUGFyZW50Q29tcG9uZW50KSBwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVBhcmVudDogYW55KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Db250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb250YWluZXJIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNldENvbnRhaW5lckhlaWdodChjb250YWluZXJIZWlnaHQpO1xuXHRcdFx0fSk7XG5cblx0XHRjb21iaW5lTGF0ZXN0KFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Uub25FbnRpdGllcygpLFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vblRlbXBsYXRlQ29sdW1ucygpXG5cdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGFycjogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc291cmNlID0gYXJyWzBdIGFzIEFycmF5PEl0ZW1FbnRpdHk+O1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBhcnJbMV0gYXMgQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRcdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25SZXNpemVXaWR0aCgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cblx0XHQvLyB0dXJuIG9uIHdoZW4gc3RydWN0dXJlIGlzIHJlYWR5XG5cdFx0aWYgKHRoaXMuc3RydWN0dXJlUGFyZW50KSB7XG5cdFx0XHR0aGlzLnJlc2l6ZURldGVjdG9yXG5cdFx0XHRcdC5vYnNlcnZlKHRoaXMuc3RydWN0dXJlUGFyZW50LmdldEVsZW1lbnRSZWYoKS5uYXRpdmVFbGVtZW50KVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRmaWx0ZXIoKCkgPT4gdGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSxcblx0XHRcdFx0XHRtYXAoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50Lm9mZnNldFdpZHRoKSxcblx0XHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVJlYWRNb2RlbFdhcmVob3VzZVxuXHRcdFx0Lm9uU3RydWN0dXJlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKHN0cjogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBzdHIuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHRvcE1hcmdpbiA9IHN0cnVjdHVyZS5nZXRUb3BNYXJnaW4oKSxcblx0XHRcdFx0XHRzb3VyY2VIZWlnaHQgPSBzdHJ1Y3R1cmUuZ2V0U291cmNlSGVpZ2h0KCk7XG5cblx0XHRcdFx0dGhpcy5zZXRTb3VyY2VIZWlnaHQodG9wTWFyZ2luLCBzb3VyY2VIZWlnaHQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMucmVzaXplRGV0ZWN0b3IuZGVzdHJveSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRwcml2YXRlIHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmhlaWdodCArICdweCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTb3VyY2VIZWlnaHQodG9wTWFyZ2luOiBudW1iZXIsIHNvdXJjZUhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCwgJ3BhZGRpbmctdG9wJywgdG9wTWFyZ2luICsgJ3B4Jyk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHNvdXJjZUhlaWdodCArICdweCcpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMubmdab25lXG5cdFx0XHQucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXG5cdFx0XHRcdGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHQvLyBhdWRpdFRpbWUoMTApLFxuXHRcdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kKSxcblx0XHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBzY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRvcCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLm5leHQoKTtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5jb21wbGV0ZSgpO1xuXHR9XG5cbn1cbiJdfQ==