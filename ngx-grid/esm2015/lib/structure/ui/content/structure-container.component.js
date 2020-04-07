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
import { StructureCommandDispatcher } from '../../ui-api/structure/structure.command-dispatcher';
import { StructureReadModelWarehouse } from '../../ui-api/structure/structure.read-model-warehouse';
import { StructureSourceReadModelWarehouse } from '../../ui-api/source/structure-source.read-model-warehouse';
import { CompositionCommandDispatcher } from '../../../composition/ui-api/composition.command-dispatcher';
import { CompositionReadModelWarehouse } from '../../../composition/ui-api/composition.read-model-warehouse';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { structureParentComponent } from '../structure-parent-component';
export class StructureContainerComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} structureReadModelService
     * @param {?} sourceReadModelService
     * @param {?} compositionCommandService
     * @param {?} compositionReadModelService
     * @param {?} formationReadModelService
     * @param {?} resizeDetector
     * @param {?} structureParent
     */
    constructor(elementRef, renderer, changeDetectorRef, ngZone, structureId, structureCommandService, structureReadModelService, sourceReadModelService, compositionCommandService, compositionReadModelService, formationReadModelService, resizeDetector, structureParent) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureReadModelService = structureReadModelService;
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
        combineLatest(this.sourceReadModelService.onEntities(), this.structureReadModelService.onContainerHeight())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} combine
         * @return {?}
         */
        (combine) => {
            /** @type {?} */
            const source = combine[0];
            /** @type {?} */
            const containerHeight = combine[1];
            this.source = source;
            this.setContainerHeight(containerHeight);
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
        this.structureReadModelService
            .onVerticalScrollEnabled()
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
        this.structureReadModelService
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
    { type: StructureReadModelWarehouse },
    { type: StructureSourceReadModelWarehouse },
    { type: CompositionCommandDispatcher },
    { type: CompositionReadModelWarehouse },
    { type: FormationReadModelService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sTUFBTSxFQUdOLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDOUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDMUcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDN0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDaEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1B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LDZDQUFlOztJQUVmLGtEQUErQjs7Ozs7SUFFL0IsNkRBQWdEOzs7OztJQUVoRCx5REFBMkM7Ozs7O0lBRS9CLGlEQUE4Qjs7Ozs7SUFDdkMsK0NBQTJCOzs7OztJQUMzQix3REFBNEM7Ozs7O0lBQzVDLDZDQUFzQjs7Ozs7SUFDdEIsa0RBQWdDOzs7OztJQUNoQyw4REFBMkQ7Ozs7O0lBQzNELGdFQUE4RDs7Ozs7SUFDOUQsNkRBQWlFOzs7OztJQUNqRSxnRUFBK0Q7Ozs7O0lBQy9ELGtFQUFrRTs7Ozs7SUFDbEUsZ0VBQTREOzs7OztJQUM1RCxxREFBc0M7Ozs7O0lBQ3RDLHNEQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdE5nWm9uZSxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE9wdGlvbmFsLFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZXNpemVEZXRlY3RvciB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9kb21haW4vc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IEZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vc3RydWN0dXJlLXBhcmVudC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGFpbmVyJyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnc291cmNlQ29sbGVjdGlvbicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRzb3VyY2VDb2xsZWN0aW9uUmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4gPSBbXTtcblxuXHRzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+ID0gW107XG5cblx0aGVpZ2h0OiBudW1iZXI7XG5cblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdHByaXZhdGUgYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgc2Nyb2xsT2JzZXJ2YXRpb24kID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgc291cmNlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlU291cmNlUmVhZE1vZGVsV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2U6IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvblJlYWRNb2RlbFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSBmb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlc2l6ZURldGVjdG9yOiBSZXNpemVEZXRlY3Rvcixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQpIHByaXZhdGUgc3RydWN0dXJlUGFyZW50OiBhbnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHRjb21iaW5lTGF0ZXN0KFxuXHRcdFx0dGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlLm9uRW50aXRpZXMoKSxcblx0XHRcdHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZS5vbkNvbnRhaW5lckhlaWdodCgpXG5cdFx0KVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbWJpbmU6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+ID0gY29tYmluZVswXSxcblx0XHRcdFx0XHRjb250YWluZXJIZWlnaHQ6IG51bWJlciA9IGNvbWJpbmVbMV07XG5cblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cblx0XHRcdFx0dGhpcy5zZXRDb250YWluZXJIZWlnaHQoY29udGFpbmVySGVpZ2h0KTtcblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblRlbXBsYXRlQ29sdW1ucygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUmVzaXplV2lkdGgoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXG5cdFx0Ly8gdHVybiBvbiB3aGVuIHN0cnVjdHVyZSBpcyByZWFkeVxuXHRcdGlmICh0aGlzLnN0cnVjdHVyZVBhcmVudCkge1xuXHRcdFx0dGhpcy5yZXNpemVEZXRlY3RvclxuXHRcdFx0XHQub2JzZXJ2ZSh0aGlzLnN0cnVjdHVyZVBhcmVudC5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZmlsdGVyKCgpID0+IHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCksXG5cdFx0XHRcdFx0bWFwKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudC5vZmZzZXRXaWR0aCksXG5cdFx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVjYWxjdWxhdGVDb250YWluZXIod2lkdGgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblN0cnVjdHVyZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChzdHI6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gc3RyLmlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0XHRjb25zdCB0b3BNYXJnaW4gPSBzdHJ1Y3R1cmUuZ2V0VG9wTWFyZ2luKCksXG5cdFx0XHRcdFx0c291cmNlSGVpZ2h0ID0gc3RydWN0dXJlLmdldFNvdXJjZUhlaWdodCgpO1xuXG5cdFx0XHRcdHRoaXMuc2V0U291cmNlSGVpZ2h0KHRvcE1hcmdpbiwgc291cmNlSGVpZ2h0KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLnJlc2l6ZURldGVjdG9yLmRlc3Ryb3kodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRDb250YWluZXJIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyAncHgnKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U291cmNlSGVpZ2h0KHRvcE1hcmdpbjogbnVtYmVyLCBzb3VyY2VIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQsICdwYWRkaW5nLXRvcCcsIHRvcE1hcmdpbiArICdweCcpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBzb3VyY2VIZWlnaHQgKyAncHgnKTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb250YWluZXIod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRDb250YWluZXJXaWR0aCh3aWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBlbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLm5nWm9uZVxuXHRcdFx0LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblxuXHRcdFx0XHRmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0Ly8gYXVkaXRUaW1lKDEwKSxcblx0XHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnNjcm9sbE9ic2VydmF0aW9uJCksXG5cdFx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcblxuXHRcdFx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxUb3ApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGRpc2FibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5uZXh0KCk7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQuY29tcGxldGUoKTtcblx0fVxuXG59XG4iXX0=