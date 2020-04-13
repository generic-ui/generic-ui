/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class StructureContainerComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} structureReadModelWarehouse
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} sourceReadModelService
     * @param {?} compositionCommandService
     * @param {?} compositionReadModelService
     * @param {?} formationReadModelService
     * @param {?} resizeDetector
     * @param {?} structureParent
     */
    constructor(elementRef, renderer, changeDetectorRef, ngZone, structureId, structureCommandService, structureReadModelWarehouse, structureVerticalFormationWarehouse, sourceReadModelService, compositionCommandService, compositionReadModelService, formationReadModelService, resizeDetector, structureParent) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureReadModelWarehouse = structureReadModelWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.sourceReadModelService = sourceReadModelService;
        this.compositionCommandService = compositionCommandService;
        this.compositionReadModelService = compositionReadModelService;
        this.formationReadModelService = formationReadModelService;
        this.resizeDetector = resizeDetector;
        this.structureParent = structureParent;
        this.columns = [];
        this.source = [];
        this.autoResizeWidthEnabled = false;
        this.scrollObservation$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureVerticalFormationWarehouse
            .onContainerHeight(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} containerHeight
         * @return {?}
         */
        (containerHeight) => {
            this.setContainerHeight(containerHeight);
        }));
        this.sourceReadModelService
            .onEntities()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} source
         * @return {?}
         */
        (source) => {
            this.source = source;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionReadModelService
            .onTemplateColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionReadModelService
            .onResizeWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.autoResizeWidthEnabled = enabled;
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // turn on when structure is ready
        if (this.structureParent) {
            this.resizeDetector
                .observe(this.structureParent.getElementRef().nativeElement)
                .pipe(filter((/**
             * @return {?}
             */
            () => this.autoResizeWidthEnabled)), map((/**
             * @param {?} element
             * @return {?}
             */
            (element) => element.offsetWidth)), distinctUntilChanged(), this.takeUntil())
                .subscribe((/**
             * @param {?} width
             * @return {?}
             */
            (width) => {
                this.recalculateContainer(width);
            }));
        }
        this.compositionReadModelService
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.renderer.setStyle(this.sourceCollectionRef.nativeElement, 'width', width + 'px');
        }));
        this.structureVerticalFormationWarehouse
            .onVerticalScrollEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            if (enabled) {
                this.enableScrollObservation();
            }
            else {
                this.disableScrollObservation();
            }
        }));
        this.structureReadModelWarehouse
            .onStructure()
            .pipe(filter((/**
         * @param {?} str
         * @return {?}
         */
        (str) => {
            return str.isVerticalScrollEnabled();
        })), this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            /** @type {?} */
            const topMargin = structure.getTopMargin();
            /** @type {?} */
            const sourceHeight = structure.getSourceHeight();
            this.setSourceHeight(topMargin, sourceHeight);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.resizeDetector.destroy(this.elementRef.nativeElement);
    }
    /**
     * @private
     * @param {?} height
     * @return {?}
     */
    setContainerHeight(height) {
        this.height = height;
        this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.height + 'px');
    }
    /**
     * @private
     * @param {?} topMargin
     * @param {?} sourceHeight
     * @return {?}
     */
    setSourceHeight(topMargin, sourceHeight) {
        this.renderer.setStyle(this.sourceCollectionRef.nativeElement, 'padding-top', topMargin + 'px');
        this.renderer.setStyle(this.sourceCollectionRef.nativeElement, 'height', sourceHeight + 'px');
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    recalculateContainer(width) {
        if (this.autoResizeWidthEnabled) {
            this.compositionCommandService.setContainerWidth(width);
        }
    }
    /**
     * @private
     * @return {?}
     */
    enableScrollObservation() {
        this.ngZone
            .runOutsideAngular((/**
         * @return {?}
         */
        () => {
            fromEvent(this.elementRef.nativeElement, 'scroll')
                .pipe(
            // auditTime(10),
            takeUntil(this.scrollObservation$), this.takeUntil())
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                /** @type {?} */
                const scrollTop = event.target.scrollTop;
                this.structureCommandService.setScrollPosition(scrollTop);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    disableScrollObservation() {
        this.scrollObservation$.next();
        this.scrollObservation$.complete();
    }
}
StructureContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-container',
                template: "<div #sourceCollection\n\t class=\"gui-structure-container\">\n\n\t<gui-structure-content [columns]=\"columns\"\n\t\t\t\t\t\t   [source]=\"source\">\n\t</gui-structure-content>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureContainerComponent.ctorParameters = () => [
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
];
StructureContainerComponent.propDecorators = {
    sourceCollectionRef: [{ type: ViewChild, args: ['sourceCollection', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sTUFBTSxFQUdOLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0Is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QWM7NENBc0RsQixRQUFRLFlBQUksTUFBTSxTQUFDLHdCQUF3Qjs7O2tDQTVCOUMsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUFoRCwwREFDZ0M7O0lBRWhDLDhDQUE4Qzs7SUFFOUMsNkNBQStCOztJQUUvQiw2Q0FBZTs7SUFFZixrREFBK0I7Ozs7O0lBRS9CLDZEQUFnRDs7Ozs7SUFFaEQseURBQTJDOzs7OztJQUUvQixpREFBdUM7Ozs7O0lBQ2hELCtDQUFvQzs7Ozs7SUFDcEMsd0RBQXFEOzs7OztJQUNyRCw2Q0FBK0I7Ozs7O0lBQy9CLGtEQUF5Qzs7Ozs7SUFDekMsOERBQW9FOzs7OztJQUNwRSxrRUFBZ0U7Ozs7O0lBQ2hFLDBFQUF5Rjs7Ozs7SUFDekYsNkRBQWlFOzs7OztJQUNqRSxnRUFBd0U7Ozs7O0lBQ3hFLGtFQUFrRTs7Ozs7SUFDbEUsZ0VBQXVFOzs7OztJQUN2RSxxREFBK0M7Ozs7O0lBQy9DLHNEQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdE5nWm9uZSxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE9wdGlvbmFsLFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZXNpemVEZXRlY3RvciB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9kb21haW4vc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi91aS1hcGkvZm9ybWF0aW9uL3N0cnVjdHVyZS1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb250YWluZXInLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdzb3VyY2VDb2xsZWN0aW9uJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHNvdXJjZUNvbGxlY3Rpb25SZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiA9IFtdO1xuXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT4gPSBbXTtcblxuXHRoZWlnaHQ6IG51bWJlcjtcblxuXHRyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0cHJpdmF0ZSBhdXRvUmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzY3JvbGxPYnNlcnZhdGlvbiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBuZ1pvbmU6IE5nWm9uZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVJlYWRNb2RlbFdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZUZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZXNpemVEZXRlY3RvcjogUmVzaXplRGV0ZWN0b3IsXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3Qoc3RydWN0dXJlUGFyZW50Q29tcG9uZW50KSBwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVBhcmVudDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uQ29udGFpbmVySGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVySGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zZXRDb250YWluZXJIZWlnaHQoY29udGFpbmVySGVpZ2h0KTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25FbnRpdGllcygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc291cmNlOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25UZW1wbGF0ZUNvbHVtbnMoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4pID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblJlc2l6ZVdpZHRoKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuXHRcdC8vIHR1cm4gb24gd2hlbiBzdHJ1Y3R1cmUgaXMgcmVhZHlcblx0XHRpZiAodGhpcy5zdHJ1Y3R1cmVQYXJlbnQpIHtcblx0XHRcdHRoaXMucmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0Lm9ic2VydmUodGhpcy5zdHJ1Y3R1cmVQYXJlbnQuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpLFxuXHRcdFx0XHRcdG1hcCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGVsZW1lbnQub2Zmc2V0V2lkdGgpLFxuXHRcdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVJlYWRNb2RlbFdhcmVob3VzZVxuXHRcdFx0Lm9uU3RydWN0dXJlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKHN0cjogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBzdHIuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHRvcE1hcmdpbiA9IHN0cnVjdHVyZS5nZXRUb3BNYXJnaW4oKSxcblx0XHRcdFx0XHRzb3VyY2VIZWlnaHQgPSBzdHJ1Y3R1cmUuZ2V0U291cmNlSGVpZ2h0KCk7XG5cblx0XHRcdFx0dGhpcy5zZXRTb3VyY2VIZWlnaHQodG9wTWFyZ2luLCBzb3VyY2VIZWlnaHQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMucmVzaXplRGV0ZWN0b3IuZGVzdHJveSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRwcml2YXRlIHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmhlaWdodCArICdweCcpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTb3VyY2VIZWlnaHQodG9wTWFyZ2luOiBudW1iZXIsIHNvdXJjZUhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCwgJ3BhZGRpbmctdG9wJywgdG9wTWFyZ2luICsgJ3B4Jyk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHNvdXJjZUhlaWdodCArICdweCcpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMubmdab25lXG5cdFx0XHQucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXG5cdFx0XHRcdGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHQvLyBhdWRpdFRpbWUoMTApLFxuXHRcdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kKSxcblx0XHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBzY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRvcCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLm5leHQoKTtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5jb21wbGV0ZSgpO1xuXHR9XG5cbn1cbiJdfQ==