/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class StructureContainerComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} structureQueryService
     * @param {?} sourceQueryService
     * @param {?} schemaQueryService
     * @param {?} compositionCommandService
     * @param {?} compositionQueryService
     * @param {?} formationQueryService
     * @param {?} resizeDetector
     * @param {?} structureParent
     */
    constructor(elementRef, renderer, changeDetectorRef, ngZone, structureId, structureCommandService, structureQueryService, sourceQueryService, schemaQueryService, compositionCommandService, compositionQueryService, formationQueryService, resizeDetector, structureParent) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureQueryService = structureQueryService;
        this.sourceQueryService = sourceQueryService;
        this.schemaQueryService = schemaQueryService;
        this.compositionCommandService = compositionCommandService;
        this.compositionQueryService = compositionQueryService;
        this.formationQueryService = formationQueryService;
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
        (source) => {
            this.source = source;
            this.setHeight(source.length * 30);
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
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
        this.compositionQueryService
            .onResizeWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.autoResizeWidthEnabled = enabled;
        }));
        combineLatest(this.sourceQueryService.onEntities(), this.schemaQueryService.onContainerHeight())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} combine
         * @return {?}
         */
        (combine) => {
            /** @type {?} */
            const source = combine[0];
            /** @type {?} */
            const height = combine[1];
            /** @type {?} */
            const sourceSizeHeight = source.length * 27;
            if (sourceSizeHeight > height) {
                this.setHeight(height);
            }
            else {
                this.setHeight(sourceSizeHeight);
            }
            this.changeDetectorRef.detectChanges();
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
        this.compositionQueryService
            .onContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.renderer.setStyle(this.containerRef.nativeElement, 'width', width + 'px');
        }));
        this.structureQueryService
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
        // never runs ??
        this.structureQueryService
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
            const containerHeight = structure.getContainerHeight();
            /** @type {?} */
            const topMargin = structure.getTopMargin();
            this.renderer.setStyle(this.containerRef.nativeElement, 'padding-top', topMargin + 'px');
            this.renderer.setStyle(this.containerRef.nativeElement, 'height', containerHeight + 'px');
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
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        this.height = height;
        this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.height + 'px');
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
                template: "<div #container\n\t class=\"gui-structure-container\">\n\n\t<gui-structure-content [source]=\"source\"\n\t\t\t\t\t\t   [columns]=\"columns\">\n\t</gui-structure-content>\n\n</div>\n",
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
    { type: StructureCommandService },
    { type: StructureReadModelService },
    { type: SourceReadModelService },
    { type: SchemaReadModelService },
    { type: CompositionCommandService },
    { type: CompositionReadModelService },
    { type: FormationReadModelService },
    { type: ResizeDetector },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [structureParentComponent,] }] }
];
StructureContainerComponent.propDecorators = {
    containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBR1QsaUJBQWlCLEVBRWpCLE1BQU0sRUFDTixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1B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LEVBQUUseUJBQXlCO2dCQUNuQyxpTUFBaUQ7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQXJDQSxVQUFVO1lBQ1YsU0FBUztZQUdULGlCQUFpQjtZQUtqQixNQUFNO1lBVUUsV0FBVztZQUNYLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLHNCQUFzQjtZQUN0Qix5QkFBeUI7WUFDekIsMkJBQTJCO1lBQzNCLHlCQUF5QjtZQVp6QixjQUFjOzRDQXNEbEIsUUFBUSxZQUFJLE1BQU0sU0FBQyx3QkFBd0I7OzsyQkE1QjlDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBQXpDLG1EQUN5Qjs7SUFFekIsOENBQThDOztJQUU5Qyw2Q0FBK0I7O0lBRS9CLDZDQUFlOztJQUVmLGtEQUErQjs7Ozs7SUFFL0IsNkRBQWdEOzs7OztJQUVoRCx5REFBMkM7Ozs7O0lBRS9CLGlEQUE4Qjs7Ozs7SUFDdkMsK0NBQTJCOzs7OztJQUMzQix3REFBNEM7Ozs7O0lBQzVDLDZDQUFzQjs7Ozs7SUFDdEIsa0RBQWdDOzs7OztJQUNoQyw4REFBd0Q7Ozs7O0lBQ3hELDREQUF3RDs7Ozs7SUFDeEQseURBQWtEOzs7OztJQUNsRCx5REFBa0Q7Ozs7O0lBQ2xELGdFQUE0RDs7Ozs7SUFDNUQsOERBQTREOzs7OztJQUM1RCw0REFBd0Q7Ozs7O0lBQ3hELHFEQUFzQzs7Ozs7SUFDdEMsc0RBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Vmlld0NoaWxkLFxuXHRFbGVtZW50UmVmLFxuXHRSZW5kZXJlcjIsXG5cdE9uRGVzdHJveSxcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdE9uSW5pdCxcblx0SW5qZWN0LFxuXHRPcHRpb25hbCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlc2l6ZURldGVjdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGFpbmVyJyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+ID0gW107XG5cblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IFtdO1xuXG5cdGhlaWdodDogbnVtYmVyO1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRwcml2YXRlIGF1dG9SZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHNjcm9sbE9ic2VydmF0aW9uJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIG5nWm9uZTogTmdab25lLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVlcnlTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFRdWVyeVNlcnZpY2U6IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvblF1ZXJ5U2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGZvcm1hdGlvblF1ZXJ5U2VydmljZTogRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZXNpemVEZXRlY3RvcjogUmVzaXplRGV0ZWN0b3IsXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3Qoc3RydWN0dXJlUGFyZW50Q29tcG9uZW50KSBwcml2YXRlIHN0cnVjdHVyZVBhcmVudDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0LyoqXG5cdFx0ICogVE9ETyBPbmUgc291cmNlIG9mIHRydXRoXG5cdFx0ICpcblx0XHQgKiBUaGVyZSBzaG91bGQgb25seSBvbmUgc3ViIGhlcmUuXG5cdFx0ICovXG5cdFx0dGhpcy5zb3VyY2VRdWVyeVNlcnZpY2Vcblx0XHRcdC5vbkVudGl0aWVzKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdFx0XHR0aGlzLnNldEhlaWdodChzb3VyY2UubGVuZ3RoICogMzApO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uVGVtcGxhdGVDb2x1bW5zKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vblJlc2l6ZVdpZHRoKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9KTtcblxuXHRcdGNvbWJpbmVMYXRlc3QoXG5cdFx0XHR0aGlzLnNvdXJjZVF1ZXJ5U2VydmljZS5vbkVudGl0aWVzKCksXG5cdFx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZS5vbkNvbnRhaW5lckhlaWdodCgpXG5cdFx0KVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbWJpbmU6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+ID0gY29tYmluZVswXSxcblx0XHRcdFx0XHRoZWlnaHQ6IG51bWJlciA9IGNvbWJpbmVbMV07XG5cblx0XHRcdFx0Y29uc3Qgc291cmNlU2l6ZUhlaWdodCA9IHNvdXJjZS5sZW5ndGggKiAyNztcblxuXHRcdFx0XHRpZiAoc291cmNlU2l6ZUhlaWdodCA+IGhlaWdodCkge1xuXHRcdFx0XHRcdHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRIZWlnaHQoc291cmNlU2l6ZUhlaWdodCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXG5cdFx0Ly8gdHVybiBvbiB3aGVuIHN0cnVjdHVyZSBpcyByZWFkeVxuXHRcdGlmICh0aGlzLnN0cnVjdHVyZVBhcmVudCkge1xuXHRcdFx0dGhpcy5yZXNpemVEZXRlY3RvclxuXHRcdFx0XHQub2JzZXJ2ZSh0aGlzLnN0cnVjdHVyZVBhcmVudC5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZmlsdGVyKCgpID0+IHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCksXG5cdFx0XHRcdFx0bWFwKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudC5vZmZzZXRXaWR0aCksXG5cdFx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVjYWxjdWxhdGVDb250YWluZXIod2lkdGgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdC8vIG5ldmVyIHJ1bnMgPz9cblx0XHR0aGlzLnN0cnVjdHVyZVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uU3RydWN0dXJlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKHN0cjogU3RydWN0dXJlKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0ci5pc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHtcblxuXHRcdFx0XHRjb25zdCBjb250YWluZXJIZWlnaHQgPSBzdHJ1Y3R1cmUuZ2V0Q29udGFpbmVySGVpZ2h0KCksXG5cdFx0XHRcdFx0dG9wTWFyZ2luID0gc3RydWN0dXJlLmdldFRvcE1hcmdpbigpO1xuXG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCwgJ3BhZGRpbmctdG9wJywgdG9wTWFyZ2luICsgJ3B4Jyk7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGNvbnRhaW5lckhlaWdodCArICdweCcpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMucmVzaXplRGV0ZWN0b3IuZGVzdHJveSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyAncHgnKTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb250YWluZXIod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRDb250YWluZXJXaWR0aCh3aWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBlbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLm5nWm9uZVxuXHRcdFx0LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblxuXHRcdFx0XHRmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0Ly8gYXVkaXRUaW1lKDEwKSxcblx0XHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnNjcm9sbE9ic2VydmF0aW9uJCksXG5cdFx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcblxuXHRcdFx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxUb3ApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGRpc2FibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5uZXh0KCk7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQuY29tcGxldGUoKTtcblx0fVxuXG59XG4iXX0=