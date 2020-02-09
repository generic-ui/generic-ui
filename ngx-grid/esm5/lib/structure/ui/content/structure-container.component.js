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
import { StructureId } from '../../domain/structure-id';
import { StructureCommandService } from '../../ui-api/structure/structure-command.service';
import { StructureReadModelService } from '../../ui-api/structure/structure-read-model.service';
import { SourceReadModelService } from '../../ui-api/source/source-read-model.service';
import { SchemaReadModelService } from '../../ui-api/schema/schema-read-model.service';
import { CompositionCommandService } from '../../../composition/ui-api/composition.command-service';
import { CompositionReadModelService } from '../../../composition/ui-api/composition-read-model.service';
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
        combineLatest(this.sourceQueryService.onEntities(), this.structureQueryService.onRowHeight())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} combine
         * @return {?}
         */
        function (combine) {
            /** @type {?} */
            var source = combine[0];
            /** @type {?} */
            var rowHeight = combine[1];
            _this.source = source;
            _this.setHeight(source.length * rowHeight);
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
        combineLatest(this.sourceQueryService.onEntities(), this.schemaQueryService.onContainerHeight(), this.structureQueryService.onRowHeight())
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
            var rowHeight = combine[2];
            /** @type {?} */
            var sourceSizeHeight = source.length * rowHeight;
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
                    template: "<div #container\n\t class=\"gui-structure-container\">\n\n\t<gui-structure-content [columns]=\"columns\"\n\t\t\t\t\t\t   [source]=\"source\">\n\t</gui-structure-content>\n\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFHTixRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxN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REFBd0Q7Ozs7O0lBQ3hELHFEQUFzQzs7Ozs7SUFDdEMsc0RBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0Tmdab25lLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3B0aW9uYWwsXG5cdFJlbmRlcmVyMixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlc2l6ZURldGVjdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGFpbmVyJyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+ID0gW107XG5cblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IFtdO1xuXG5cdGhlaWdodDogbnVtYmVyO1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRwcml2YXRlIGF1dG9SZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHNjcm9sbE9ic2VydmF0aW9uJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIG5nWm9uZTogTmdab25lLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVlcnlTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFRdWVyeVNlcnZpY2U6IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvblF1ZXJ5U2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGZvcm1hdGlvblF1ZXJ5U2VydmljZTogRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZXNpemVEZXRlY3RvcjogUmVzaXplRGV0ZWN0b3IsXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3Qoc3RydWN0dXJlUGFyZW50Q29tcG9uZW50KSBwcml2YXRlIHN0cnVjdHVyZVBhcmVudDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0LyoqXG5cdFx0ICogVE9ETyBPbmUgc291cmNlIG9mIHRydXRoXG5cdFx0ICpcblx0XHQgKiBUaGVyZSBzaG91bGQgb25seSBvbmUgc3ViIGhlcmUuXG5cdFx0ICovXG5cdFx0Y29tYmluZUxhdGVzdChcblx0XHRcdHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlLm9uRW50aXRpZXMoKSxcblx0XHRcdHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlLm9uUm93SGVpZ2h0KClcblx0XHQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29tYmluZTogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT4gPSBjb21iaW5lWzBdLFxuXHRcdFx0XHRcdHJvd0hlaWdodCA9IGNvbWJpbmVbMV07XG5cblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0XHRcdHRoaXMuc2V0SGVpZ2h0KHNvdXJjZS5sZW5ndGggKiByb3dIZWlnaHQpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uVGVtcGxhdGVDb2x1bW5zKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vblJlc2l6ZVdpZHRoKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9KTtcblxuXHRcdGNvbWJpbmVMYXRlc3QoXG5cdFx0XHR0aGlzLnNvdXJjZVF1ZXJ5U2VydmljZS5vbkVudGl0aWVzKCksXG5cdFx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZS5vbkNvbnRhaW5lckhlaWdodCgpLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVRdWVyeVNlcnZpY2Uub25Sb3dIZWlnaHQoKVxuXHRcdClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21iaW5lOiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3Qgc291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IGNvbWJpbmVbMF0sXG5cdFx0XHRcdFx0aGVpZ2h0OiBudW1iZXIgPSBjb21iaW5lWzFdLFxuXHRcdFx0XHRcdHJvd0hlaWdodCA9IGNvbWJpbmVbMl07XG5cblx0XHRcdFx0Y29uc3Qgc291cmNlU2l6ZUhlaWdodCA9IHNvdXJjZS5sZW5ndGggKiByb3dIZWlnaHQ7XG5cblx0XHRcdFx0aWYgKHNvdXJjZVNpemVIZWlnaHQgPiBoZWlnaHQpIHtcblx0XHRcdFx0XHR0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0SGVpZ2h0KHNvdXJjZVNpemVIZWlnaHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuXHRcdC8vIHR1cm4gb24gd2hlbiBzdHJ1Y3R1cmUgaXMgcmVhZHlcblx0XHRpZiAodGhpcy5zdHJ1Y3R1cmVQYXJlbnQpIHtcblx0XHRcdHRoaXMucmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0Lm9ic2VydmUodGhpcy5zdHJ1Y3R1cmVQYXJlbnQuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpLFxuXHRcdFx0XHRcdG1hcCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGVsZW1lbnQub2Zmc2V0V2lkdGgpLFxuXHRcdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb3NpdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB3aWR0aCArICdweCcpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uVmVydGljYWxTY3JvbGxFbmFibGVkKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHQvLyBuZXZlciBydW5zID8/XG5cdFx0dGhpcy5zdHJ1Y3R1cmVRdWVyeVNlcnZpY2Vcblx0XHRcdC5vblN0cnVjdHVyZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChzdHI6IFN0cnVjdHVyZSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBzdHIuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgY29udGFpbmVySGVpZ2h0ID0gc3RydWN0dXJlLmdldENvbnRhaW5lckhlaWdodCgpLFxuXHRcdFx0XHRcdHRvcE1hcmdpbiA9IHN0cnVjdHVyZS5nZXRUb3BNYXJnaW4oKTtcblxuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICdwYWRkaW5nLXRvcCcsIHRvcE1hcmdpbiArICdweCcpO1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBjb250YWluZXJIZWlnaHQgKyAncHgnKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLnJlc2l6ZURldGVjdG9yLmRlc3Ryb3kodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5uZ1pvbmVcblx0XHRcdC5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cblx0XHRcdFx0ZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJylcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdC8vIGF1ZGl0VGltZSgxMCksXG5cdFx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQpLFxuXHRcdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHNjcm9sbFRvcCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3A7XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQubmV4dCgpO1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLmNvbXBsZXRlKCk7XG5cdH1cblxufVxuIl19