/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        combineLatest(this.sourceQueryService.onEntities(), this.structureQueryService.onRowHeight())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} combine
         * @return {?}
         */
        (combine) => {
            /** @type {?} */
            const source = combine[0];
            /** @type {?} */
            const rowHeight = combine[1];
            this.source = source;
            this.setHeight(source.length * rowHeight);
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
        combineLatest(this.sourceQueryService.onEntities(), this.schemaQueryService.onContainerHeight(), this.structureQueryService.onRowHeight())
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
            const rowHeight = combine[2];
            /** @type {?} */
            const sourceSizeHeight = source.length * rowHeight;
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
                template: "<div #container\n\t class=\"gui-structure-container\">\n\n\t<gui-structure-content [columns]=\"columns\"\n\t\t\t\t\t\t   [source]=\"source\">\n\t</gui-structure-content>\n\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sTUFBTSxFQUdOLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDcEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDekcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1B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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0Tmdab25lLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3B0aW9uYWwsXG5cdFJlbmRlcmVyMixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlc2l6ZURldGVjdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGFpbmVyJyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+ID0gW107XG5cblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IFtdO1xuXG5cdGhlaWdodDogbnVtYmVyO1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRwcml2YXRlIGF1dG9SZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHNjcm9sbE9ic2VydmF0aW9uJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIG5nWm9uZTogTmdab25lLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVlcnlTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFRdWVyeVNlcnZpY2U6IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvblF1ZXJ5U2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGZvcm1hdGlvblF1ZXJ5U2VydmljZTogRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZXNpemVEZXRlY3RvcjogUmVzaXplRGV0ZWN0b3IsXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3Qoc3RydWN0dXJlUGFyZW50Q29tcG9uZW50KSBwcml2YXRlIHN0cnVjdHVyZVBhcmVudDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0LyoqXG5cdFx0ICogVE9ETyBPbmUgc291cmNlIG9mIHRydXRoXG5cdFx0ICpcblx0XHQgKiBUaGVyZSBzaG91bGQgb25seSBvbmUgc3ViIGhlcmUuXG5cdFx0ICovXG5cdFx0Y29tYmluZUxhdGVzdChcblx0XHRcdHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlLm9uRW50aXRpZXMoKSxcblx0XHRcdHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlLm9uUm93SGVpZ2h0KClcblx0XHQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29tYmluZTogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT4gPSBjb21iaW5lWzBdLFxuXHRcdFx0XHRcdHJvd0hlaWdodCA9IGNvbWJpbmVbMV07XG5cblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0XHRcdHRoaXMuc2V0SGVpZ2h0KHNvdXJjZS5sZW5ndGggKiByb3dIZWlnaHQpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uVGVtcGxhdGVDb2x1bW5zKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vblJlc2l6ZVdpZHRoKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9KTtcblxuXHRcdGNvbWJpbmVMYXRlc3QoXG5cdFx0XHR0aGlzLnNvdXJjZVF1ZXJ5U2VydmljZS5vbkVudGl0aWVzKCksXG5cdFx0XHR0aGlzLnNjaGVtYVF1ZXJ5U2VydmljZS5vbkNvbnRhaW5lckhlaWdodCgpLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVRdWVyeVNlcnZpY2Uub25Sb3dIZWlnaHQoKVxuXHRcdClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21iaW5lOiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3Qgc291cmNlOiBBcnJheTxJdGVtRW50aXR5PiA9IGNvbWJpbmVbMF0sXG5cdFx0XHRcdFx0aGVpZ2h0OiBudW1iZXIgPSBjb21iaW5lWzFdLFxuXHRcdFx0XHRcdHJvd0hlaWdodCA9IGNvbWJpbmVbMl07XG5cblx0XHRcdFx0Y29uc3Qgc291cmNlU2l6ZUhlaWdodCA9IHNvdXJjZS5sZW5ndGggKiByb3dIZWlnaHQ7XG5cblx0XHRcdFx0aWYgKHNvdXJjZVNpemVIZWlnaHQgPiBoZWlnaHQpIHtcblx0XHRcdFx0XHR0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0SGVpZ2h0KHNvdXJjZVNpemVIZWlnaHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuXHRcdC8vIHR1cm4gb24gd2hlbiBzdHJ1Y3R1cmUgaXMgcmVhZHlcblx0XHRpZiAodGhpcy5zdHJ1Y3R1cmVQYXJlbnQpIHtcblx0XHRcdHRoaXMucmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0Lm9ic2VydmUodGhpcy5zdHJ1Y3R1cmVQYXJlbnQuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpLFxuXHRcdFx0XHRcdG1hcCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGVsZW1lbnQub2Zmc2V0V2lkdGgpLFxuXHRcdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb3NpdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB3aWR0aCArICdweCcpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uVmVydGljYWxTY3JvbGxFbmFibGVkKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHQvLyBuZXZlciBydW5zID8/XG5cdFx0dGhpcy5zdHJ1Y3R1cmVRdWVyeVNlcnZpY2Vcblx0XHRcdC5vblN0cnVjdHVyZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChzdHI6IFN0cnVjdHVyZSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBzdHIuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgY29udGFpbmVySGVpZ2h0ID0gc3RydWN0dXJlLmdldENvbnRhaW5lckhlaWdodCgpLFxuXHRcdFx0XHRcdHRvcE1hcmdpbiA9IHN0cnVjdHVyZS5nZXRUb3BNYXJnaW4oKTtcblxuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICdwYWRkaW5nLXRvcCcsIHRvcE1hcmdpbiArICdweCcpO1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBjb250YWluZXJIZWlnaHQgKyAncHgnKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLnJlc2l6ZURldGVjdG9yLmRlc3Ryb3kodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5uZ1pvbmVcblx0XHRcdC5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cblx0XHRcdFx0ZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJylcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdC8vIGF1ZGl0VGltZSgxMCksXG5cdFx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQpLFxuXHRcdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHNjcm9sbFRvcCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3A7XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQubmV4dCgpO1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLmNvbXBsZXRlKCk7XG5cdH1cblxufVxuIl19