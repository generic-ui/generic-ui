/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, NgZone, Optional, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { ResizeDetector } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../domain/structure.id';
import { StructureCommandDispatcher } from '../../ui-api/structure.command-dispatcher';
import { StructureWarehouse } from '../../ui-api/structure.warehouse';
import { StructureSourceWarehouse } from '../../ui-api/source/structure-source.warehouse';
import { CompositionCommandDispatcher } from '../../../composition/ui-api/composition.command-dispatcher';
import { CompositionWarehouse } from '../../../composition/ui-api/composition.warehouse';
import { StructureFormationWarehouse } from '../../ui-api/formation/structure-formation.warehouse';
import { structureParentComponent } from '../structure-parent-component';
import { StructureVerticalFormationWarehouse } from '../../ui-api/vertical-formation/structure-vertical-formation.warehouse';
var StructureContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContainerComponent, _super);
    function StructureContainerComponent(elementRef, renderer, changeDetectorRef, ngZone, structureId, structureCommandService, structureReadModelWarehouse, structureVerticalFormationWarehouse, sourceReadModelService, compositionCommandService, compositionReadModelService, formationReadModelService, resizeDetector, structureParent) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this.ngZone = ngZone;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.structureReadModelWarehouse = structureReadModelWarehouse;
        _this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
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
        this.sourceReadModelService
            .onEntities()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            _this.source = source;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFHTixRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDMUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbkcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStC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QUFjO2dEQXNEbEIsUUFBUSxZQUFJLE1BQU0sU0FBQyx3QkFBd0I7OztzQ0E1QjlDLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBdUtqRCxrQ0FBQztDQUFBLEFBL0tELENBTWlELGNBQWMsR0F5SzlEO1NBektZLDJCQUEyQjs7O0lBRXZDLDBEQUNnQzs7SUFFaEMsOENBQThDOztJQUU5Qyw2Q0FBK0I7O0lBRS9CLDZDQUFlOztJQUVmLGtEQUErQjs7Ozs7SUFFL0IsNkRBQWdEOzs7OztJQUVoRCx5REFBMkM7Ozs7O0lBRS9CLGlEQUF1Qzs7Ozs7SUFDaEQsK0NBQW9DOzs7OztJQUNwQyx3REFBcUQ7Ozs7O0lBQ3JELDZDQUErQjs7Ozs7SUFDL0Isa0RBQXlDOzs7OztJQUN6Qyw4REFBb0U7Ozs7O0lBQ3BFLGtFQUFnRTs7Ozs7SUFDaEUsMEVBQXlGOzs7OztJQUN6Riw2REFBaUU7Ozs7O0lBQ2pFLGdFQUF3RTs7Ozs7SUFDeEUsa0VBQWtFOzs7OztJQUNsRSxnRUFBdUU7Ozs7O0lBQ3ZFLHFEQUErQzs7Ozs7SUFDL0Msc0RBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0Tmdab25lLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3B0aW9uYWwsXG5cdFJlbmRlcmVyMixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlc2l6ZURldGVjdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vc3RydWN0dXJlLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vc3RydWN0dXJlLXBhcmVudC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi91aS1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbnRhaW5lcicsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ3NvdXJjZUNvbGxlY3Rpb24nLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0c291cmNlQ29sbGVjdGlvblJlZjogRWxlbWVudFJlZjtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+ID0gW107XG5cblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IFtdO1xuXG5cdGhlaWdodDogbnVtYmVyO1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRwcml2YXRlIGF1dG9SZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHNjcm9sbE9ic2VydmF0aW9uJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG5nWm9uZTogTmdab25lLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZURldGVjdG9yOiBSZXNpemVEZXRlY3Rvcixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQpIHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUGFyZW50OiBhbnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Db250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb250YWluZXJIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNldENvbnRhaW5lckhlaWdodChjb250YWluZXJIZWlnaHQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkVudGl0aWVzKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblRlbXBsYXRlQ29sdW1ucygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUmVzaXplV2lkdGgoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXG5cdFx0Ly8gdHVybiBvbiB3aGVuIHN0cnVjdHVyZSBpcyByZWFkeVxuXHRcdGlmICh0aGlzLnN0cnVjdHVyZVBhcmVudCkge1xuXHRcdFx0dGhpcy5yZXNpemVEZXRlY3RvclxuXHRcdFx0XHQub2JzZXJ2ZSh0aGlzLnN0cnVjdHVyZVBhcmVudC5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZmlsdGVyKCgpID0+IHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCksXG5cdFx0XHRcdFx0bWFwKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudC5vZmZzZXRXaWR0aCksXG5cdFx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVjYWxjdWxhdGVDb250YWluZXIod2lkdGgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uVmVydGljYWxTY3JvbGxFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRpZiAoZW5hYmxlZCkge1xuXHRcdFx0XHRcdHRoaXMuZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRpc2FibGVTY3JvbGxPYnNlcnZhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlXG5cdFx0XHQub25TdHJ1Y3R1cmUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoc3RyOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0ci5pc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgdG9wTWFyZ2luID0gc3RydWN0dXJlLmdldFRvcE1hcmdpbigpLFxuXHRcdFx0XHRcdHNvdXJjZUhlaWdodCA9IHN0cnVjdHVyZS5nZXRTb3VyY2VIZWlnaHQoKTtcblxuXHRcdFx0XHR0aGlzLnNldFNvdXJjZUhlaWdodCh0b3BNYXJnaW4sIHNvdXJjZUhlaWdodCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5yZXNpemVEZXRlY3Rvci5kZXN0cm95KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XG5cdH1cblxuXHRwcml2YXRlIHNldFNvdXJjZUhlaWdodCh0b3BNYXJnaW46IG51bWJlciwgc291cmNlSGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50LCAncGFkZGluZy10b3AnLCB0b3BNYXJnaW4gKyAncHgnKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jywgc291cmNlSGVpZ2h0ICsgJ3B4Jyk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5uZ1pvbmVcblx0XHRcdC5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cblx0XHRcdFx0ZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJylcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdC8vIGF1ZGl0VGltZSgxMCksXG5cdFx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQpLFxuXHRcdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHNjcm9sbFRvcCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3A7XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQubmV4dCgpO1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLmNvbXBsZXRlKCk7XG5cdH1cblxufVxuIl19