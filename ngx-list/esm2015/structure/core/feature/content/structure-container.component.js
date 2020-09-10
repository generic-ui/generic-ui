/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class StructureContainerComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} structureReadModelWarehouse
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} structureSourceWarehouse
     * @param {?} compositionCommandService
     * @param {?} compositionWarehouse
     * @param {?} structureFormationWarehouse
     * @param {?} resizeDetector
     * @param {?} structureParent
     */
    constructor(changeDetectorRef, elementRef, renderer, ngZone, structureId, structureCommandService, structureReadModelWarehouse, structureVerticalFormationWarehouse, structureSourceWarehouse, compositionCommandService, compositionWarehouse, structureFormationWarehouse, resizeDetector, structureParent) {
        super(changeDetectorRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureReadModelWarehouse = structureReadModelWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.compositionCommandService = compositionCommandService;
        this.compositionWarehouse = compositionWarehouse;
        this.structureFormationWarehouse = structureFormationWarehouse;
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
        combineLatest(this.structureSourceWarehouse.onEntities(), this.compositionWarehouse.onTemplateColumns())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} arr
         * @return {?}
         */
        (arr) => {
            this.source = (/** @type {?} */ (arr[0]));
            this.columns = (/** @type {?} */ (arr[1]));
            this.render();
        }));
        this.compositionWarehouse
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
        this.compositionWarehouse
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sTUFBTSxFQUdOLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx3QkFBd0IsRUFB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aEQsMERBQ2dDOztJQUVoQyw4Q0FBOEM7O0lBRTlDLDZDQUErQjs7SUFFL0IsNkNBQWU7O0lBRWYsa0RBQStCOzs7OztJQUUvQiw2REFBZ0Q7Ozs7O0lBRWhELHlEQUEyQzs7Ozs7SUFHeEMsaURBQXVDOzs7OztJQUN2QywrQ0FBb0M7Ozs7O0lBQ3BDLDZDQUErQjs7Ozs7SUFDL0Isa0RBQXlDOzs7OztJQUN6Qyw4REFBb0U7Ozs7O0lBQ3BFLGtFQUFnRTs7Ozs7SUFDaEUsMEVBQXlGOzs7OztJQUN6RiwrREFBMEQ7Ozs7O0lBQzFELGdFQUFxRTs7Ozs7SUFDckUsMkRBQTJEOzs7OztJQUMzRCxrRUFBZ0U7Ozs7O0lBQ2hFLHFEQUErQzs7Ozs7SUFDL0Msc0RBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0Tmdab25lLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3B0aW9uYWwsXG5cdFJlbmRlcmVyMixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlc2l6ZURldGVjdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb250YWluZXInLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdzb3VyY2VDb2xsZWN0aW9uJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHNvdXJjZUNvbGxlY3Rpb25SZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiA9IFtdO1xuXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT4gPSBbXTtcblxuXHRoZWlnaHQ6IG51bWJlcjtcblxuXHRyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0cHJpdmF0ZSBhdXRvUmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzY3JvbGxPYnNlcnZhdGlvbiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbmdab25lOiBOZ1pvbmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVzaXplRGV0ZWN0b3I6IFJlc2l6ZURldGVjdG9yLFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCkgcHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQYXJlbnQ6IGFueSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uQ29udGFpbmVySGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVySGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zZXRDb250YWluZXJIZWlnaHQoY29udGFpbmVySGVpZ2h0KTtcblx0XHRcdH0pO1xuXG5cdFx0Y29tYmluZUxhdGVzdChcblx0XHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlLm9uRW50aXRpZXMoKSxcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25UZW1wbGF0ZUNvbHVtbnMoKVxuXHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChhcnI6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IGFyclswXSBhcyBBcnJheTxJdGVtRW50aXR5Pjtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gYXJyWzFdIGFzIEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cblx0XHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uUmVzaXplV2lkdGgoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXG5cdFx0Ly8gdHVybiBvbiB3aGVuIHN0cnVjdHVyZSBpcyByZWFkeVxuXHRcdGlmICh0aGlzLnN0cnVjdHVyZVBhcmVudCkge1xuXHRcdFx0dGhpcy5yZXNpemVEZXRlY3RvclxuXHRcdFx0XHQub2JzZXJ2ZSh0aGlzLnN0cnVjdHVyZVBhcmVudC5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZmlsdGVyKCgpID0+IHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCksXG5cdFx0XHRcdFx0bWFwKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudC5vZmZzZXRXaWR0aCksXG5cdFx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVjYWxjdWxhdGVDb250YWluZXIod2lkdGgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB3aWR0aCArICdweCcpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2Vcblx0XHRcdC5vblN0cnVjdHVyZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChzdHI6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gc3RyLmlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0XHRjb25zdCB0b3BNYXJnaW4gPSBzdHJ1Y3R1cmUuZ2V0VG9wTWFyZ2luKCksXG5cdFx0XHRcdFx0c291cmNlSGVpZ2h0ID0gc3RydWN0dXJlLmdldFNvdXJjZUhlaWdodCgpO1xuXG5cdFx0XHRcdHRoaXMuc2V0U291cmNlSGVpZ2h0KHRvcE1hcmdpbiwgc291cmNlSGVpZ2h0KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLnJlc2l6ZURldGVjdG9yLmRlc3Ryb3kodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRDb250YWluZXJIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyAncHgnKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U291cmNlSGVpZ2h0KHRvcE1hcmdpbjogbnVtYmVyLCBzb3VyY2VIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQsICdwYWRkaW5nLXRvcCcsIHRvcE1hcmdpbiArICdweCcpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBzb3VyY2VIZWlnaHQgKyAncHgnKTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb250YWluZXIod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRDb250YWluZXJXaWR0aCh3aWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBlbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLm5nWm9uZVxuXHRcdFx0LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblxuXHRcdFx0XHRmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0Ly8gYXVkaXRUaW1lKDEwKSxcblx0XHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnNjcm9sbE9ic2VydmF0aW9uJCksXG5cdFx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcblxuXHRcdFx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxUb3ApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGRpc2FibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5uZXh0KCk7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQuY29tcGxldGUoKTtcblx0fVxuXG59XG4iXX0=