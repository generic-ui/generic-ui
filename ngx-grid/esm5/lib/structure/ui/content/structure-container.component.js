/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, ChangeDetectorRef, Inject, Optional, ViewEncapsulation, NgZone } from '@angular/core';
import { Subject, combineLatest, fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { ResizeDetector } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../domain/structure-id';
import { StructureCommandService } from '../../ui-api/structure/structure-command.service';
import { StructureReadModelService } from '../../ui-api/structure/structure-read-model.service';
import { SourceReadModelService } from '../../ui-api/source/source-read-model.service';
import { SchemaReadModelService } from '../../ui-api/schema/schema-read-model.service';
import { CompositionCommandService } from '../../ui-api/composition/composition.command-service';
import { CompositionReadModelService } from '../../ui-api/composition/composition-read-model.service';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { structureParentComponent } from '../structure-parent-component';
var StructureContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContainerComponent, _super);
    function StructureContainerComponent(elementRef, renderer, changeDetectorRef, ngZone, structureId, structureCommandService, structureQueryService, sourceQueryService, schemaQueryService, compositionCommandService, compositionQueryService, formationQueryService, resizeDetector, structureParent) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this.ngZone = ngZone;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.structureQueryService = structureQueryService;
        _this.sourceQueryService = sourceQueryService;
        _this.schemaQueryService = schemaQueryService;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionQueryService = compositionQueryService;
        _this.formationQueryService = formationQueryService;
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
        /**
         * TODO One source of truth
         *
         * There should only one sub here.
         */
        this.sourceQueryService
            .onEntities()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            _this.source = source;
            _this.setHeight(source.length * 30);
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
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
        this.compositionQueryService
            .onResizeWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.autoResizeWidthEnabled = enabled;
        }));
        combineLatest(this.sourceQueryService.onEntities(), this.schemaQueryService.onContainerHeight())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} combine
         * @return {?}
         */
        function (combine) {
            /** @type {?} */
            var source = combine[0];
            /** @type {?} */
            var height = combine[1];
            /** @type {?} */
            var sourceSizeHeight = source.length * 27;
            if (sourceSizeHeight > height) {
                _this.setHeight(height);
            }
            else {
                _this.setHeight(sourceSizeHeight);
            }
            _this.changeDetectorRef.detectChanges();
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
        this.compositionQueryService
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.renderer.setStyle(_this.containerRef.nativeElement, 'width', width + 'px');
        }));
        this.structureQueryService
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
        // never runs ??
        this.structureQueryService
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
            var containerHeight = structure.getContainerHeight();
            /** @type {?} */
            var topMargin = structure.getTopMargin();
            _this.renderer.setStyle(_this.containerRef.nativeElement, 'padding-top', topMargin + 'px');
            _this.renderer.setStyle(_this.containerRef.nativeElement, 'height', containerHeight + 'px');
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
     * @param {?} height
     * @return {?}
     */
    StructureContainerComponent.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.height = height;
        this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.height + 'px');
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
                    template: "<div #container\n\t class=\"gui-structure-container\">\n\n\t<gui-structure-content [source]=\"source\"\n\t\t\t\t\t\t   [columns]=\"columns\">\n\t</gui-structure-content>\n\n</div>\n",
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
        { type: StructureCommandService },
        { type: StructureReadModelService },
        { type: SourceReadModelService },
        { type: SchemaReadModelService },
        { type: CompositionCommandService },
        { type: CompositionReadModelService },
        { type: FormationReadModelService },
        { type: ResizeDetector },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [structureParentComponent,] }] }
    ]; };
    StructureContainerComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
    };
    return StructureContainerComponent;
}(SmartComponent));
export { StructureContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUdULGlCQUFpQixFQUVqQixNQUFNLEVBQ04sUUFBUSxFQUNSLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxN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b0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBckNBLFVBQVU7Z0JBQ1YsU0FBUztnQkFHVCxpQkFBaUI7Z0JBS2pCLE1BQU07Z0JBVUUsV0FBVztnQkFDWCx1QkFBdUI7Z0JBQ3ZCLHlCQUF5QjtnQkFDekIsc0JBQXNCO2dCQUN0QixzQkFBc0I7Z0JBQ3RCLHlCQUF5QjtnQkFDekIsMkJBQTJCO2dCQUMzQix5QkFBeUI7Z0JBWnpCLGNBQWM7Z0RBc0RsQixRQUFRLFlBQUksTUFBTSxTQUFDLHdCQUF3Qjs7OytCQTVCOUMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBeUwxQyxrQ0FBQztDQUFBLEFBak1ELENBTWlELGNBQWMsR0EyTDlEO1NBM0xZLDJCQUEyQjs7O0lBRXZDLG1EQUN5Qjs7SUFFekIsOENBQThDOztJQUU5Qyw2Q0FBK0I7O0lBRS9CLDZDQUFlOztJQUVmLGtEQUErQjs7Ozs7SUFFL0IsNkRBQWdEOzs7OztJQUVoRCx5REFBMkM7Ozs7O0lBRS9CLGlEQUE4Qjs7Ozs7SUFDdkMsK0NBQTJCOzs7OztJQUMzQix3REFBNEM7Ozs7O0lBQzVDLDZDQUFzQjs7Ozs7SUFDdEIsa0RBQWdDOzs7OztJQUNoQyw4REFBd0Q7Ozs7O0lBQ3hELDREQUF3RDs7Ozs7SUFDeEQseURBQWtEOzs7OztJQUNsRCx5REFBa0Q7Ozs7O0lBQ2xELGdFQUE0RDs7Ozs7SUFDNUQsOERBQTREOzs7OztJQUM1RCw0REFBd0Q7Ozs7O0lBQ3hELHFEQUFzQzs7Ozs7SUFDdEMsc0RBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Vmlld0NoaWxkLFxuXHRFbGVtZW50UmVmLFxuXHRSZW5kZXJlcjIsXG5cdE9uRGVzdHJveSxcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdE9uSW5pdCxcblx0SW5qZWN0LFxuXHRPcHRpb25hbCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlc2l6ZURldGVjdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGFpbmVyJyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+ID0gW107XG5cblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IFtdO1xuXG5cdGhlaWdodDogbnVtYmVyO1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRwcml2YXRlIGF1dG9SZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHNjcm9sbE9ic2VydmF0aW9uJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIG5nWm9uZTogTmdab25lLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVlcnlTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFRdWVyeVNlcnZpY2U6IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvblF1ZXJ5U2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGZvcm1hdGlvblF1ZXJ5U2VydmljZTogRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZXNpemVEZXRlY3RvcjogUmVzaXplRGV0ZWN0b3IsXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3Qoc3RydWN0dXJlUGFyZW50Q29tcG9uZW50KSBwcml2YXRlIHN0cnVjdHVyZVBhcmVudDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0LyoqXG5cdFx0ICogVE9ETyBPbmUgc291cmNlIG9mIHRydXRoXG5cdFx0ICpcblx0XHQgKiBUaGVyZSBzaG91bGQgb25seSBvbmUgc3ViIGhlcmUuXG5cdFx0ICovXG5cdFx0dGhpcy5zb3VyY2VRdWVyeVNlcnZpY2Vcblx0XHRcdC5vbkVudGl0aWVzKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdFx0XHR0aGlzLnNldEhlaWdodChzb3VyY2UubGVuZ3RoICogMzApO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uVGVtcGxhdGVDb2x1bW5zKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vblJlc2l6ZVdpZHRoKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9KTtcblxuXHRcdGNvbWJpbmVMYXRlc3QoXG5cdFx0XHR0aGlzLnNvdXJjZVF1ZXJ5U2VydmljZS5vbkVudGl0aWVzKCksXG5cdFx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZS5vbkNvbnRhaW5lckhlaWdodCgpXG5cdFx0KVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbWJpbmU6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+ID0gY29tYmluZVswXSxcblx0XHRcdFx0XHRoZWlnaHQ6IG51bWJlciA9IGNvbWJpbmVbMV07XG5cblx0XHRcdFx0Y29uc3Qgc291cmNlU2l6ZUhlaWdodCA9IHNvdXJjZS5sZW5ndGggKiAyNztcblxuXHRcdFx0XHRpZiAoc291cmNlU2l6ZUhlaWdodCA+IGhlaWdodCkge1xuXHRcdFx0XHRcdHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRIZWlnaHQoc291cmNlU2l6ZUhlaWdodCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXG5cdFx0Ly8gdHVybiBvbiB3aGVuIHN0cnVjdHVyZSBpcyByZWFkeVxuXHRcdGlmICh0aGlzLnN0cnVjdHVyZVBhcmVudCkge1xuXHRcdFx0dGhpcy5yZXNpemVEZXRlY3RvclxuXHRcdFx0XHQub2JzZXJ2ZSh0aGlzLnN0cnVjdHVyZVBhcmVudC5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZmlsdGVyKCgpID0+IHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCksXG5cdFx0XHRcdFx0bWFwKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudC5vZmZzZXRXaWR0aCksXG5cdFx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVjYWxjdWxhdGVDb250YWluZXIod2lkdGgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdC8vIG5ldmVyIHJ1bnMgPz9cblx0XHR0aGlzLnN0cnVjdHVyZVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uU3RydWN0dXJlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKHN0cjogU3RydWN0dXJlKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0ci5pc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHtcblxuXHRcdFx0XHRjb25zdCBjb250YWluZXJIZWlnaHQgPSBzdHJ1Y3R1cmUuZ2V0Q29udGFpbmVySGVpZ2h0KCksXG5cdFx0XHRcdFx0dG9wTWFyZ2luID0gc3RydWN0dXJlLmdldFRvcE1hcmdpbigpO1xuXG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCwgJ3BhZGRpbmctdG9wJywgdG9wTWFyZ2luICsgJ3B4Jyk7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGNvbnRhaW5lckhlaWdodCArICdweCcpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMucmVzaXplRGV0ZWN0b3IuZGVzdHJveSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyAncHgnKTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb250YWluZXIod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRDb250YWluZXJXaWR0aCh3aWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBlbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLm5nWm9uZVxuXHRcdFx0LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblxuXHRcdFx0XHRmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0Ly8gYXVkaXRUaW1lKDEwKSxcblx0XHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnNjcm9sbE9ic2VydmF0aW9uJCksXG5cdFx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcblxuXHRcdFx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxUb3ApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGRpc2FibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5uZXh0KCk7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQuY29tcGxldGUoKTtcblx0fVxuXG59XG4iXX0=